const SUPABASE_URL = 'https://rghpddvliyyyyzhkdgsb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_NDUmpFfPSA4xSstWvfoiHg_ArJvozHM';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;
let currentSession = null;
let properties = [];
let auditLogs = [];

const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const userDisplay = document.getElementById('current-user-display');
const logoutBtn = document.getElementById('logout-btn');
const logMenuItem = document.getElementById('log-menu-item');
const propertiesTbody = document.getElementById('properties-tbody');
const logTbody = document.getElementById('log-tbody');
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const closeEditModal = document.getElementById('close-edit-modal');
const btnAddProperty = document.getElementById('btn-add-property');
const menuItems = document.querySelectorAll('.admin-menu li');
const tabContents = document.querySelectorAll('.tab-content');

document.addEventListener('DOMContentLoaded', async () => {
    const { data: { session } } = await sb.auth.getSession();
    if (session) {
        currentSession = session;
        currentUser = session.user;
        showDashboard();
    }
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.style.display = 'none';

    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const btnLogin = loginForm.querySelector('.btn-login');
    btnLogin.textContent = 'Ingresando...';
    btnLogin.disabled = true;

    const { data, error } = await sb.auth.signInWithPassword({ email, password });

    btnLogin.textContent = 'Ingresar';
    btnLogin.disabled = false;

    if (error) {
        loginError.textContent = 'Correo o contraseña incorrectos.';
        loginError.style.display = 'block';
        return;
    }

    currentSession = data.session;
    currentUser = data.user;
    showDashboard();
});

async function showDashboard() {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'flex';
    userDisplay.textContent = currentUser.email;

    const adminEmails = ['soportetecnico@prestaexpress.com.gt'];
    if (adminEmails.includes(currentUser.email)) {
        logMenuItem.style.display = 'flex';
    } else {
        logMenuItem.style.display = 'none';
    }

    await loadProperties();
    await loadLogs();
}

logoutBtn.addEventListener('click', async () => {
    await sb.auth.signOut();
    currentUser = null;
    currentSession = null;
    loginSection.style.display = 'flex';
    dashboardSection.style.display = 'none';
    loginForm.reset();
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        tabContents.forEach(c => c.style.display = 'none');
        item.classList.add('active');
        document.getElementById(item.dataset.target).style.display = 'block';
    });
});

async function loadProperties() {
    const { data, error } = await sb
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) return;
    properties = data || [];
    renderProperties();
}

function renderProperties() {
    propertiesTbody.innerHTML = '';

    if (properties.length === 0) {
        propertiesTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:#a0aec0;">No hay propiedades registradas aún.</td></tr>`;
        return;
    }

    properties.forEach(prop => {
        const typeIcon = { 'casa': '🏠', 'apartamento': '🏢', 'terreno': '🌿' }[prop.type] || '🏠';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${prop.id}</td>
            <td>
                <strong>${prop.title}</strong><br>
                <small style="color:#D4AF37; font-weight:600;">${prop.property_code || 'SIN CÓDIGO'}</small><br>
                <small style="color:#a0aec0">${prop.location || ''}</small>
            </td>
            <td><span style="font-size:1.2rem;">${typeIcon}</span> ${(prop.type || 'casa').toUpperCase()}</td>
            <td>${prop.price || '-'}</td>
            <td><span class="status-badge status-${prop.status}">${(prop.status || 'disponible').toUpperCase()}</span></td>
            <td>
                <button class="action-btn edit-btn" data-id="${prop.id}" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="action-btn delete-btn" data-id="${prop.id}" title="Eliminar" style="color:#e74c3c;"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        propertiesTbody.appendChild(tr);
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            openEditModal(id);
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            const prop = properties.find(p => p.id === id);
            if (confirm(`¿Eliminar "${prop?.title}"? Esta acción no se puede deshacer.`)) {
                await deleteProperty(id, prop?.title);
            }
        });
    });
}

async function deleteProperty(id, title) {
    const { error } = await sb.from('properties').delete().eq('id', id);
    if (error) {
        alert('Error al eliminar la propiedad.');
        return;
    }
    await addLog(`Eliminó la propiedad: "${title}".`);
    await loadProperties();
}

function openEditModal(id) {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    document.getElementById('modal-title').textContent = 'Editar Propiedad';
    document.getElementById('edit-id').value = prop.id;
    document.getElementById('edit-type').value = prop.type || 'casa';
    document.getElementById('edit-title').value = prop.title || '';
    document.getElementById('edit-code').value = prop.property_code || '';
    document.getElementById('edit-price').value = prop.price || '';
    document.getElementById('edit-status').value = prop.status || 'disponible';
    document.getElementById('edit-description').value = prop.description || '';
    document.getElementById('edit-location').value = prop.location || '';
    document.getElementById('edit-gmaps').value = prop.google_maps_url || '';
    document.getElementById('edit-area').value = prop.area || '';
    document.getElementById('edit-beds').value = prop.beds || '';
    document.getElementById('edit-baths').value = prop.baths || '';
    document.getElementById('edit-levels').value = prop.levels || '';
    document.getElementById('edit-images').value = prop.images ? prop.images.join(', ') : '';
    document.getElementById('edit-comments').value = prop.comments || '';
    document.getElementById('edit-referencias').value = prop.referencias || '';
    document.getElementById('edit-siembra').value = prop.siembra || '';

    ['sala', 'comedor', 'cocina', 'patio', 'parqueo', 'lavanderia', 'agua_luz', 'garita', 'drenajes'].forEach(field => {
        const el = document.getElementById(`edit-${field}`);
        if (el) el.checked = prop[field] || false;
    });

    updateTypeFields();
    editModal.style.display = 'flex';
}

btnAddProperty.addEventListener('click', () => {
    document.getElementById('modal-title').textContent = 'Nueva Propiedad';
    document.getElementById('edit-id').value = '';
    editForm.reset();
    updateTypeFields();
    editModal.style.display = 'flex';
});

closeEditModal.addEventListener('click', () => {
    editModal.style.display = 'none';
});

document.getElementById('edit-type').addEventListener('change', updateTypeFields);

function updateTypeFields() {
    const type = document.getElementById('edit-type').value;
    const casaFields = document.getElementById('casa-fields');
    const terrenoFields = document.getElementById('terreno-fields');

    if (type === 'terreno') {
        casaFields.style.display = 'none';
        terrenoFields.style.display = 'block';
    } else {
        casaFields.style.display = 'block';
        terrenoFields.style.display = 'none';
    }
}

editForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('edit-id').value;
    const type = document.getElementById('edit-type').value;
    const imagesRaw = document.getElementById('edit-images').value;
    const images = imagesRaw.split(',').map(s => s.trim()).filter(s => s);

    const propData = {
        type,
        title: document.getElementById('edit-title').value,
        property_code: document.getElementById('edit-code').value,
        price: document.getElementById('edit-price').value,
        status: document.getElementById('edit-status').value,
        description: document.getElementById('edit-description').value,
        location: document.getElementById('edit-location').value,
        google_maps_url: document.getElementById('edit-gmaps').value,
        area: document.getElementById('edit-area').value,
        comments: document.getElementById('edit-comments').value,
        images: images.length > 0 ? images : null,
        beds: document.getElementById('edit-beds').value || null,
        baths: document.getElementById('edit-baths').value || null,
        levels: document.getElementById('edit-levels').value || null,
        sala: document.getElementById('edit-sala')?.checked || false,
        comedor: document.getElementById('edit-comedor')?.checked || false,
        cocina: document.getElementById('edit-cocina')?.checked || false,
        patio: document.getElementById('edit-patio')?.checked || false,
        parqueo: document.getElementById('edit-parqueo')?.checked || false,
        lavanderia: document.getElementById('edit-lavanderia')?.checked || false,
        agua_luz: document.getElementById('edit-agua_luz')?.checked || false,
        garita: document.getElementById('edit-garita')?.checked || false,
        drenajes: document.getElementById('edit-drenajes')?.checked || false,
        siembra: document.getElementById('edit-siembra').value || null,
        referencias: document.getElementById('edit-referencias').value || null,
    };

    const submitBtn = editForm.querySelector('.btn-primary');
    submitBtn.textContent = 'Guardando...';
    submitBtn.disabled = true;

    let error;

    if (id) {
        const { error: err } = await sb.from('properties').update(propData).eq('id', id);
        error = err;
        if (!err) await addLog(`Editó la propiedad: "${propData.title}".`);
    } else {
        const { error: err } = await sb.from('properties').insert([propData]);
        error = err;
        if (!err) await addLog(`Agregó nueva propiedad: "${propData.title}" — ${propData.price}.`);
    }

    submitBtn.textContent = 'Guardar Cambios';
    submitBtn.disabled = false;

    if (error) {
        alert('Error al guardar: ' + error.message);
        return;
    }

    editModal.style.display = 'none';
    await loadProperties();
});

async function loadLogs() {
    const { data, error } = await sb
        .from('audit_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

    if (error) return;
    auditLogs = data || [];
    renderLogs();
}

function renderLogs() {
    logTbody.innerHTML = '';
    if (auditLogs.length === 0) {
        logTbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:20px; color:#a0aec0;">Sin actividad registrada.</td></tr>`;
        return;
    }
    auditLogs.forEach(log => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${new Date(log.created_at).toLocaleString('es-GT')}</td>
            <td><span style="color:var(--accent); font-weight:600;">${log.user_email}</span></td>
            <td>${log.action}</td>
        `;
        logTbody.appendChild(tr);
    });
}

async function addLog(action) {
    await sb.from('audit_logs').insert([{
        user_email: currentUser.email,
        action: action
    }]);
    await loadLogs();
}

document.getElementById('btn-clear-logs').addEventListener('click', async () => {
    if (confirm('¿Limpiar toda la bitácora? Esta acción es irreversible.')) {
        await sb.from('audit_logs').delete().neq('id', 0);
        await addLog('Limpió el historial de bitácora.');
    }
});

document.getElementById('btn-export-csv').addEventListener('click', () => {
    let csv = "ID,Codigo,Tipo,Titulo,Precio,Estado,Ubicacion,Habitaciones,Banos,Niveles,Area,Sala,Comedor,Cocina,Patio,Parqueo,Lavanderia,Agua/Luz,Garita,Drenajes,Siembra,Referencias,Comentarios,GoogleMaps,Imagenes\n";

    properties.forEach(p => {
        const bool = (v) => v ? 'Si' : 'No';
        const q = (v) => `"${(v || '').toString().replace(/"/g, '""')}"`;
        const row = [
            p.id, q(p.property_code), q(p.type), q(p.title), q(p.price), q(p.status),
            q(p.location), p.beds || '', p.baths || '', p.levels || '', q(p.area),
            bool(p.sala), bool(p.comedor), bool(p.cocina), bool(p.patio), bool(p.parqueo),
            bool(p.lavanderia), bool(p.agua_luz), bool(p.garita), bool(p.drenajes),
            q(p.siembra), q(p.referencias), q(p.comments), q(p.google_maps_url),
            q(p.images ? p.images.join(',') : '')
        ];
        csv += row.join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'inmoexpress_propiedades.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addLog('Exportó CSV de propiedades.');
});