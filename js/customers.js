// ========== بيانات تجريبية للعملاء ==========
const customersData = [
    {
        id: 'C001',
        name: 'أحمد محمد',
        phone: '07701234567',
        joinDate: '2024-01-15',
        status: 'debt',
        type: 'credit',
        trustRating: 4,
        totalCredit: 2500,
        totalPaid: 1000,
        remaining: 1500,
        lastActivity: '2026-05-05',
        lastActivityType: 'purchase',
        notes: 'عميل دائم، يفضل الأدوية الأصلية'
    },
    {
        id: 'C002',
        name: 'سارة العبيدي',
        phone: '07812345678',
        joinDate: '2024-03-20',
        status: 'clear',
        type: 'cash',
        trustRating: 5,
        totalCredit: 0,
        totalPaid: 0,
        remaining: 0,
        lastActivity: '2026-05-06',
        lastActivityType: 'payment',
        notes: 'لديها حساسية من البنسلين'
    },
    {
        id: 'C003',
        name: 'خالد عبدالله',
        phone: '07923456789',
        joinDate: '2023-11-10',
        status: 'debt',
        type: 'credit',
        trustRating: 3,
        totalCredit: 5000,
        totalPaid: 3500,
        remaining: 1500,
        lastActivity: '2026-05-04',
        lastActivityType: 'purchase',
        notes: ''
    },
    {
        id: 'C004',
        name: 'نور حسين',
        phone: '07534567890',
        joinDate: '2025-01-05',
        status: 'vip',
        type: 'credit',
        trustRating: 5,
        totalCredit: 8000,
        totalPaid: 8000,
        remaining: 0,
        lastActivity: '2026-05-06',
        lastActivityType: 'payment',
        notes: 'عميل مميز، سداد منتظم'
    },
    {
        id: 'C005',
        name: 'محمود إبراهيم',
        phone: '07645678901',
        joinDate: '2024-06-12',
        status: 'debt',
        type: 'cash',
        trustRating: 2,
        totalCredit: 1200,
        totalPaid: 500,
        remaining: 700,
        lastActivity: '2026-04-28',
        lastActivityType: 'purchase',
        notes: 'يتأخر في السداد أحياناً'
    },
    {
        id: 'C006',
        name: 'فاطمة الزهراء',
        phone: '07756789012',
        joinDate: '2025-02-18',
        status: 'clear',
        type: 'cash',
        trustRating: 4,
        totalCredit: 0,
        totalPaid: 0,
        remaining: 0,
        lastActivity: '2026-05-03',
        lastActivityType: 'purchase',
        notes: 'تفضل منتجات شركة معينة'
    },
    {
        id: 'C007',
        name: 'عمر الدليمي',
        phone: '07867890123',
        joinDate: '2023-08-25',
        status: 'vip',
        type: 'credit',
        trustRating: 5,
        totalCredit: 12000,
        totalPaid: 10000,
        remaining: 2000,
        lastActivity: '2026-05-06',
        lastActivityType: 'purchase',
        notes: 'صاحب صيدلية، عميل تجاري'
    },
    {
        id: 'C008',
        name: 'ليلى سامي',
        phone: '07978901234',
        joinDate: '2024-09-14',
        status: 'clear',
        type: 'cash',
        trustRating: 4,
        totalCredit: 800,
        totalPaid: 800,
        remaining: 0,
        lastActivity: '2026-05-01',
        lastActivityType: 'payment',
        notes: ''
    }
];

// بيانات الفواتير التجريبية
const invoicesData = [
    { id: 'INV001', customerId: 'C001', date: '2026-04-15', amount: 1200, status: 'pending', dueDate: '2026-05-15' },
    { id: 'INV002', customerId: 'C001', date: '2026-03-20', amount: 800, status: 'paid', dueDate: '2026-04-20' },
    { id: 'INV003', customerId: 'C001', date: '2026-02-10', amount: 500, status: 'paid', dueDate: '2026-03-10' },
    { id: 'INV004', customerId: 'C003', date: '2026-04-25', amount: 2000, status: 'pending', dueDate: '2026-05-25' },
    { id: 'INV005', customerId: 'C003', date: '2026-03-15', amount: 1500, status: 'paid', dueDate: '2026-04-15' },
    { id: 'INV006', customerId: 'C005', date: '2026-04-20', amount: 700, status: 'pending', dueDate: '2026-05-20' },
    { id: 'INV007', customerId: 'C007', date: '2026-05-01', amount: 2000, status: 'pending', dueDate: '2026-06-01' },
    { id: 'INV008', customerId: 'C007', date: '2026-04-01', amount: 5000, status: 'paid', dueDate: '2026-05-01' }
];

// سجل التعاملات التجريبي
const timelineData = [
    { customerId: 'C001', date: '2026-05-05', type: 'purchase', item: 'Amoxicillin 500mg', amount: 150 },
    { customerId: 'C001', date: '2026-04-15', type: 'invoice', item: 'فاتورة آجلة', amount: 1200 },
    { customerId: 'C001', date: '2026-03-20', type: 'payment', item: 'سداد دين', amount: 800 },
    { customerId: 'C002', date: '2026-05-06', type: 'payment', item: 'شراء نقدي', amount: 250 },
    { customerId: 'C003', date: '2026-05-04', type: 'purchase', item: 'Panadol Extra', amount: 75 },
    { customerId: 'C003', date: '2026-04-25', type: 'invoice', item: 'فاتورة آجلة', amount: 2000 },
    { customerId: 'C004', date: '2026-05-06', type: 'payment', item: 'تسديد كامل', amount: 2000 },
    { customerId: 'C007', date: '2026-05-01', type: 'invoice', item: 'طلب جملة', amount: 5000 }
];

let currentFilter = 'all';
let currentSort = { field: 'name', asc: true };
let selectedCustomer = null;

// ========== تحديث المؤشرات السريعة ==========
function updateMetrics() {
    const totalDebt = customersData.reduce((sum, c) => sum + c.remaining, 0);
    const today = new Date().toISOString().split('T')[0];
    const todayActivity = customersData.filter(c => c.lastActivity === today).length;
    
    const totalCredit = customersData.reduce((sum, c) => sum + c.totalCredit, 0);
    const totalPaid = customersData.reduce((sum, c) => sum + c.totalPaid, 0);
    const collectionRate = totalCredit > 0 ? Math.round((totalPaid / totalCredit) * 100) : 0;

    document.getElementById('totalDebt').textContent = `$${totalDebt.toLocaleString()}`;
    document.getElementById('todayActivity').textContent = todayActivity;
    document.getElementById('collectionRate').textContent = `${collectionRate}%`;
}

// ========== عرض جدول العملاء ==========
function renderCustomersTable() {
    const tbody = document.getElementById('customersTableBody');
    let filtered = [...customersData];

    // تطبيق الفلتر
    if (currentFilter !== 'all') {
        filtered = filtered.filter(c => c.status === currentFilter);
    }

    // البحث
    const searchTerm = document.getElementById('customerSearch').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(c => 
            c.name.toLowerCase().includes(searchTerm) ||
            c.phone.includes(searchTerm) ||
            c.id.toLowerCase().includes(searchTerm)
        );
    }

    // الترتيب
    filtered.sort((a, b) => {
        let valA = a[currentSort.field];
        let valB = b[currentSort.field];
        
        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }
        
        if (valA < valB) return currentSort.asc ? -1 : 1;
        if (valA > valB) return currentSort.asc ? 1 : -1;
        return 0;
    });

    tbody.innerHTML = filtered.map((customer, index) => {
        const initials = customer.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        const statusClass = customer.status;
        const statusText = getStatusText(customer.status);
        const typeClass = customer.type;
        const typeText = customer.type === 'cash' ? 'نقدي' : 'آجل';
        const typeIcon = customer.type === 'cash' ? 'banknote' : 'clock';
        const serialNumber = index + 1;
        
        return `
            <tr onclick="openCustomerFlyout('${customer.id}')">
                
                <td>
                    <div class="customer-cell">
                        
                        <div class="customer-info-sm">
                            <span class="customer-name">${customer.name}</span>
                            <span class="customer-join-date">منذ ${formatDate(customer.joinDate)}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="financial-status">
                        <span class="status-badge ${statusClass}">${statusText}</span>
                        <div class="financial-amounts">
                            ${customer.remaining > 0 ? 
                                `<span class="amount-remaining">متبقي: $${customer.remaining}</span>` :
                                `<span class="amount-paid">مسدد</span>`
                            }
                        </div>
                    </div>
                </td>
                <td>
                    <div class="transaction-type ${typeClass}">
                        <i data-lucide="${typeIcon}"></i>
                        <span>${typeText}</span>
                    </div>
                </td>
				<td class="serial-cell">
                    <span class="serial-number">${serialNumber}</span>
                </td>
            </tr>
        `;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function getStatusText(status) {
    const map = { debt: 'عليه ديون', clear: 'حساب صفر', vip: 'عميل دائم' };
    return map[status] || status;
}

function getActivityText(type) {
    const map = { purchase: 'شراء', payment: 'سداد', invoice: 'فاتورة' };
    return map[type] || type;
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<i data-lucide="star" class="${i <= rating ? 'filled' : ''}"></i>`;
    }
    return stars;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diff < 30) return `${diff} يوم`;
    if (diff < 365) return `${Math.floor(diff / 30)} شهر`;
    return `${Math.floor(diff / 365)} سنة`;
}

function formatDateShort(dateStr) {
    return new Date(dateStr).toLocaleDateString('ar-IQ');
}

// ========== الفلاتر ==========
function filterCustomers() {
    renderCustomersTable();
}

function filterByStatus(status, btn) {
    currentFilter = status;
    
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    
    renderCustomersTable();
}

function filterByDate(period) {
    // TODO: تنفيذ فلترة حسب التاريخ
    console.log('Filter by date:', period);
    renderCustomersTable();
}

// ========== الترتيب ==========
function sortCustomers(field, th) {
    if (currentSort.field === field) {
        currentSort.asc = !currentSort.asc;
    } else {
        currentSort.field = field;
        currentSort.asc = true;
    }
    
    renderCustomersTable();
}

// ========== نافذة تفاصيل العميل ==========
function openCustomerFlyout(customerId) {
    const customer = customersData.find(c => c.id === customerId);
    if (!customer) return;
    
    selectedCustomer = customer;
    
    // تحديث عنوان النافذة
    document.getElementById('flyoutCustomerName').textContent = 'تفاصيل العميل: ' + customer.name;
    
    // تحديث البيانات المشتركة والمالية
    document.getElementById('flyoutCustomerNameDetail').textContent = customer.name;
    document.getElementById('flyoutCustomerCode').textContent = '#' + customer.id;
    document.getElementById('flyoutCustomerPhone').textContent = customer.phone;
    document.getElementById('flyoutTotalCredit').textContent = '$' + customer.totalCredit.toLocaleString();
    document.getElementById('flyoutTotalPaid').textContent = '$' + customer.totalPaid.toLocaleString();
    document.getElementById('flyoutRemaining').textContent = '$' + customer.remaining.toLocaleString();
    
    // تحديث معلومات آخر نشاط
    document.getElementById('flyoutLastActivityDate').textContent = formatDateShort(customer.lastActivity);
    const activityTypeEl = document.getElementById('flyoutLastActivityType');
    activityTypeEl.textContent = getActivityText(customer.lastActivityType);
    
    // تعيين لون حالة النشاط
    if (customer.lastActivityType === 'purchase') {
        activityTypeEl.style.background = 'var(--active-dim)';
        activityTypeEl.style.color = 'var(--active)';
    } else if (customer.lastActivityType === 'payment') {
        activityTypeEl.style.background = 'rgba(126, 108, 113, 0.2)';
        activityTypeEl.style.color = 'var(--danger-hover)';
    } else {
        activityTypeEl.style.background = 'var(--button)';
        activityTypeEl.style.color = 'var(--text-muted)';
    }
    
    // تحديث ويدجت الفواتير والإجراءات
    const widgetsContainer = document.getElementById('flyoutWidgetsContainer');
    const customerInvoices = invoicesData.filter(inv => inv.customerId === customerId);
    
    let widgetsHTML = '';
    
    // ويدجت الفواتير
    if (customerInvoices.length === 0) {
        widgetsHTML += `
            <div class="batch-widget">
                <div class="batch-widget-header">
                    <span class="batch-name"><i data-lucide="file-text"></i> لا توجد فواتير</span>
                </div>
            </div>
        `;
    } else {
        customerInvoices.forEach(inv => {
            widgetsHTML += `
                <div class="batch-widget">
                    <div class="batch-widget-header">
                        <span class="batch-name"><i data-lucide="file-text"></i> فاتورة #${inv.id}</span>
                        <span class="batch-status ${inv.status}">${inv.status === 'paid' ? 'مسددة' : 'معلقة'}</span>
                    </div>
                    <div class="batch-widget-grid">
                        <div class="batch-widget-item">
                            <span class="widget-label"><i data-lucide="calendar" class="widget-label-icon"></i> التاريخ</span>
                            <span class="widget-value">${formatDateShort(inv.date)}</span>
                        </div>
                        <div class="batch-widget-item">
                            <span class="widget-label"><i data-lucide="clock" class="widget-label-icon"></i> الاستحقاق</span>
                            <span class="widget-value">${formatDateShort(inv.dueDate)}</span>
                        </div>
                        <div class="batch-widget-item">
                            <span class="widget-label"><i data-lucide="dollar-sign" class="widget-label-icon"></i> المبلغ</span>
                            <span class="widget-value" style="color: var(--accent-yellow); font-weight: bold;">$${inv.amount.toLocaleString()}</span>
                        </div>
                        <div class="batch-widget-item">
                            <span class="widget-label"><i data-lucide="info" class="widget-label-icon"></i> الحالة</span>
                            <span class="widget-value">${inv.status === 'paid' ? 'مسددة' : 'معلقة'}</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    // ويدجت الإجراءات
    widgetsHTML += `
        <div class="batch-widget">
            <div class="batch-widget-header">
                <span class="batch-name"><i data-lucide="settings-2"></i> إجراءات سريعة</span>
            </div>
            <div class="actions-widget-grid">
                <button class="action-widget-btn" onclick="addInvoiceForCustomer()">
                    <i data-lucide="file-plus"></i> إضافة فاتورة
                </button>
                <button class="action-widget-btn" onclick="payDebt()">
                    <i data-lucide="banknote"></i> سداد دين
                </button>
                <button class="action-widget-btn" onclick="callCustomer()">
                    <i data-lucide="phone"></i> اتصال
                </button>
                <button class="action-widget-btn" onclick="exportStatement()">
                    <i data-lucide="download"></i> تصدير كشف
                </button>
            </div>
        </div>
    `;
    
    widgetsContainer.innerHTML = widgetsHTML;
    
    // فتح النافذة
    const flyout = document.getElementById('customerFlyout');
    flyout.classList.add('open');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeCustomerFlyout() {
    const flyout = document.getElementById('customerFlyout');
    flyout.classList.remove('open');
    selectedCustomer = null;
}

// ========== الإجراءات السريعة ==========
function quickInvoice(customerId) {
    console.log('Quick invoice for', customerId);
    alert('فتح نموذج إضافة فاتورة للعميل');
}

function quickPayment(customerId) {
    console.log('Quick payment for', customerId);
    alert('فتح نموذج سداد دين للعميل');
}

function quickCall(phone) {
    window.location.href = `tel:${phone}`;
}

function addInvoiceForCustomer() {
    if (selectedCustomer) {
        quickInvoice(selectedCustomer.id);
    }
}

function payDebt() {
    if (selectedCustomer) {
        quickPayment(selectedCustomer.id);
    }
}

function callCustomer() {
    if (selectedCustomer) {
        quickCall(selectedCustomer.phone);
    }
}

function exportStatement() {
    if (selectedCustomer) {
        alert(`تصدير كشف حساب للعميل ${selectedCustomer.name}`);
    }
}

function openAddCustomerModal() {
    alert('فتح نموذج إضافة عميل جديد');
}

// ========== التهيئة ==========
document.addEventListener('DOMContentLoaded', function() {
    updateMetrics();
    renderCustomersTable();
});

// إغلاق النافذة بالضغط على Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCustomerFlyout();
    }
});
