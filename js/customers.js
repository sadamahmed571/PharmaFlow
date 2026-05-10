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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
        totalPurchases: Math.floor(Math.random() * 5000 + 1000),
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
    const totalCustomersCount = customersData.length;
    
    const totalCredit = customersData.reduce((sum, c) => sum + c.totalCredit, 0);
    const totalPaid = customersData.reduce((sum, c) => sum + c.totalPaid, 0);
    const collectionRate = totalCredit > 0 ? Math.round((totalPaid / totalCredit) * 100) : 0;

    document.getElementById('totalDebt').textContent = `$${totalDebt.toLocaleString()}`;
    document.getElementById('totalCustomers').textContent = totalCustomersCount;
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
                    <div class="transaction-type" style="justify-content: flex-start;">
                        <span style="font-weight: bold; font-family: monospace; color: var(--text-light);">$${(customer.totalPurchases || 0).toLocaleString()}</span>
                    </div>
                </td>
                <td>
                    <div class="financial-status">
                        <span class="status-badge ${statusClass}">${statusText}</span>
                        <div class="financial-amounts">
                            ${customer.remaining > 0 ? 
                                `<span class="amount-remaining">متبقي: $ ${customer.remaining}</span>` :
                                `<span class="amount-paid">مسدد</span>`
                            }
                        </div>
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
    
    // السجل المالي (الفواتير)
    if (customerInvoices.length === 0) {
        widgetsHTML += `
            <div class="batch-widget" style="margin-bottom: 15px;">
                <div class="batch-widget-header">
                    <span class="batch-name"><i data-lucide="file-text"></i> لا توجد فواتير</span>
                </div>
            </div>
        `;
    } else {
        widgetsHTML += `
            <div class="customers-table-container" style="margin-bottom: 15px; border: 1px solid var(--border-dim); border-radius: 8px;">
                <table class="customers-table">
                    <thead>
                        <tr>
                            <th>رقم الفاتورة</th>
                            <th>التاريخ</th>
                            <th>الاستحقاق</th>
                            <th>المبلغ</th>
                            <th>الحالة</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        customerInvoices.forEach(inv => {
            const statusClass = inv.status === 'paid' ? 'clear' : 'debt';
            const statusText = inv.status === 'paid' ? 'مسددة' : 'معلقة';
            
            widgetsHTML += `
                <tr>
                    <td style="font-family: monospace; font-weight: bold;">#${inv.id}</td>
                    <td>${formatDateShort(inv.date)}</td>
                    <td>${formatDateShort(inv.dueDate)}</td>
                    <td style="color: var(--accent-yellow); font-weight: bold;">$${inv.amount.toLocaleString()}</td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                </tr>
            `;
        });
        
        widgetsHTML += `
                    </tbody>
                </table>
            </div>
        `;
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
                <button class="action-widget-btn" onclick="whatsappCustomer()">
                    <i data-lucide="message-circle"></i> واتس آب
                </button>
                <button class="action-widget-btn" onclick="exportStatement()">
                    <i data-lucide="download"></i> تصدير كشف
                </button>
                <button class="action-widget-btn" onclick="editCustomer()">
                    <i data-lucide="edit"></i> تعديل
                </button>
                <button class="action-widget-btn" style="color: #ff4d4f; border-color: rgba(255, 77, 79, 0.3);" onclick="deleteCustomer()">
                    <i data-lucide="trash-2"></i> حذف
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

function whatsappCustomer() {
    if (selectedCustomer && selectedCustomer.phone) {
        // افتراض أن الرقم يحتاج لتهيئة (مثلاً إضافة رمز الدولة إذا لم يكن موجوداً)
        // هذا مجرد مثال وممكن تعديله حسب الحاجة
        const phone = selectedCustomer.phone.replace(/^0/, '+964');
        window.open(`https://wa.me/${phone}`, '_blank');
    }
}

function exportStatement() {
    if (selectedCustomer) {
        alert(`تصدير كشف حساب للعميل ${selectedCustomer.name}`);
    }
}

function editCustomer() {
    if (selectedCustomer) {
        alert(`فتح نافذة تعديل بيانات العميل: ${selectedCustomer.name}`);
    }
}

function deleteCustomer() {
    if (selectedCustomer) {
        const confirmDelete = confirm(`هل أنت متأكد من رغبتك في حذف العميل (${selectedCustomer.name})؟\nهذا الإجراء لا يمكن التراجع عنه.`);
        if (confirmDelete) {
            alert(`تم حذف العميل: ${selectedCustomer.name} بنجاح.`);
            closeCustomerFlyout();
            // هنا يتم إضافة كود الحذف الفعلي من المصفوفة/قاعدة البيانات وإعادة تحديث الجدول
        }
    }
}

function openAddCustomerModal() {
    const modal = document.getElementById('addCustomerModal');
    if (modal) {
        modal.style.display = 'block';
        // Auto-generate next ID based on existing max ID in customersData
        let maxIdNum = 0;
        customersData.forEach(c => {
            let num = parseInt(c.id.replace('C', ''));
            if (!isNaN(num) && num > maxIdNum) {
                maxIdNum = num;
            }
        });
        const nextId = 'C' + (maxIdNum + 1).toString().padStart(3, '0');
        document.getElementById('newCustomerFile').value = nextId;
    }
}

function closeAddCustomerModal() {
    const modal = document.getElementById('addCustomerModal');
    if (modal) {
        modal.style.display = 'none';
        // Reset fields
        document.getElementById('newCustomerName').value = '';
        document.getElementById('newCustomerPhone').value = '';
        document.getElementById('newCustomerWhatsapp').value = '';
        document.getElementById('newCustomerDropdown').style.display = 'none';
        document.getElementById('newCustomerSamePhone').checked = true;
        syncNewCustomerPhone();
    }
}

function handleNewCustomerSearch() {
    const input = document.getElementById('newCustomerName');
    const dropdown = document.getElementById('newCustomerDropdown');
    const fileInput = document.getElementById('newCustomerFile');
    const query = input.value.trim();

    dropdown.innerHTML = '';

    if (query === '') {
        dropdown.style.display = 'none';
        // Revert to generated ID
        let maxIdNum = 0;
        customersData.forEach(c => {
            let num = parseInt(c.id.replace('C', ''));
            if (!isNaN(num) && num > maxIdNum) maxIdNum = num;
        });
        fileInput.value = 'C' + (maxIdNum + 1).toString().padStart(3, '0');
        return;
    }

    let matches = customersData.filter(c => c.name.includes(query));

    if (matches.length === 0) {
        dropdown.style.display = 'none';
        let maxIdNum = 0;
        customersData.forEach(c => {
            let num = parseInt(c.id.replace('C', ''));
            if (!isNaN(num) && num > maxIdNum) maxIdNum = num;
        });
        fileInput.value = 'C' + (maxIdNum + 1).toString().padStart(3, '0');
        return;
    }

    matches.forEach(c => {
        let div = document.createElement('div');
        div.className = 'dropdown-item';
        div.style.padding = '10px';
        div.style.cursor = 'pointer';
        div.style.borderBottom = '1px solid var(--border-dim)';
        div.innerHTML = '<strong>' + c.name + '</strong> <span class="customer-search-file" style="float: left; color: var(--text-muted); font-size: 0.85rem;">' + c.id + '</span>';
        div.onclick = () => {
            input.value = c.name;
            fileInput.value = c.id;
            document.getElementById('newCustomerPhone').value = c.phone || '';
            document.getElementById('newCustomerWhatsapp').value = c.phone || '';
            dropdown.style.display = 'none';
        };
        dropdown.appendChild(div);
    });

    dropdown.style.display = 'block';
}

function syncNewCustomerPhone() {
    const phoneInput = document.getElementById('newCustomerPhone');
    const whatsappInput = document.getElementById('newCustomerWhatsapp');
    const checkbox = document.getElementById('newCustomerSamePhone');
    if (checkbox && whatsappInput && phoneInput) {
        if (checkbox.checked) {
            whatsappInput.value = phoneInput.value;
            whatsappInput.readOnly = true;
            whatsappInput.style.opacity = '0.7';
        } else {
            whatsappInput.readOnly = false;
            whatsappInput.style.opacity = '1';
        }
    }
}

function saveNewCustomer() {
    const name = document.getElementById('newCustomerName').value.trim();
    if (!name) {
        alert('الرجاء إدخال اسم العميل');
        return;
    }
    alert('تم حفظ بيانات العميل بنجاح');
    closeAddCustomerModal();
}

// Close dropdown if clicked outside
document.addEventListener('click', function(e) {
    const input = document.getElementById('newCustomerName');
    const dropdown = document.getElementById('newCustomerDropdown');
    if (input && dropdown && e.target !== input && e.target !== dropdown && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

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

