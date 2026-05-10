const randomDrugsList = ['Amoxil', 'Panadol', 'Voltaren', 'Nexium', 'Lipitor', 'Zyrtec', 'Aspirin', 'Metformin', 'Concor', 'Lasix'];
const activeIngredients = ['Amoxicillin', 'Paracetamol', 'Diclofenac', 'Esomeprazole', 'Atorvastatin', 'Cetirizine', 'Acetylsalicylic Acid', 'Metformin HCl', 'Bisoprolol', 'Furosemide'];
const drugTypes = ['بواكت', 'علب', 'شرائط', 'حقن'];

window.onload = () => {
    initInventory();
    populateSmartTable();
};

function initInventory(numWalls = 3, numRows = 15, numCols = 20) {
    const wallsContainer = document.getElementById('wallsContainer');
    if (wallsContainer) {
        wallsContainer.innerHTML = '';
        
        let shelfCounter = 1;
        for(let w=1; w<=numWalls; w++) {
            let wallWrapper = document.createElement('div');
            wallWrapper.className = 'wall-wrapper';
            
            let wallTitle = document.createElement('h4');
            wallTitle.className = 'wall-title';
            wallTitle.innerText = `الجدار ${w}`;
            wallWrapper.appendChild(wallTitle);

            let wall = document.createElement('div');
            wall.className = 'wall';
            wall.id = `wall-${w}`;
            
            wall.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
            wall.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

            for(let r=1; r<=numRows; r++) {
                for(let c=1; c<=numCols; c++) {
                    let shelf = document.createElement('div');
                    shelf.className = 'shelf-cell';
                    shelf.id = `cell-w${w}-r${r}-c${c}`;

                    let randStatus = Math.random();
                    let statusClass = '';
                    let highlightClass = '';

                    if (randStatus > 0.95) {
                        statusClass = 'status-low';
                        highlightClass = 'highlight-low';
                    } else if (randStatus > 0.90) {
                        statusClass = 'status-expiry';
                        highlightClass = 'highlight-expiry';
                    }

                    if(statusClass) shelf.classList.add(statusClass);

                    shelf.innerHTML = `<span class="cell-coord">${shelfCounter++}</span>`;

                    let popup = document.createElement('div');
                    popup.className = 'cell-popup';

                    let numItems = Math.floor(Math.random() * 3) + 3;
                    let popupHTML = `<div class="popup-header">رقم الرف: ${shelfCounter - 1}</div>`;

                    for(let i=0; i<numItems; i++) {
                        let dName = randomDrugsList[Math.floor(Math.random() * randomDrugsList.length)];
                        let dQty = Math.floor(Math.random() * 40) + 1;

                        let lineClass = (statusClass && i === 0) ? highlightClass : '';
                        if (highlightClass == 'highlight-low') dQty = Math.floor(Math.random() * 3) + 1;

                        popupHTML += `<div class="drug-line ${lineClass}"><span>${dName}</span> <span class="drug-Qty">${dQty}</span></div>`;
                    }
                    popup.innerHTML = popupHTML;
                    shelf.appendChild(popup);

                    shelf.onclick = function(e) {
                        document.querySelectorAll('.shelf-cell.zoomed').forEach(s => {
                            if(s !== this) s.classList.remove('zoomed');
                        });
                        this.classList.toggle('zoomed');
                        e.stopPropagation();
                    };

                    wall.appendChild(shelf);
                }
            }
            wallWrapper.appendChild(wall);
            wallsContainer.appendChild(wallWrapper);
        }
    }

    const inventoryElem = document.getElementById('inventory');
    if (inventoryElem) {
        inventoryElem.addEventListener('click', (e) => {
            if(!e.target.closest('.quick-flyout') && !e.target.closest('.shelf-cell')) {
                document.querySelectorAll('.shelf-cell.zoomed').forEach(s => s.classList.remove('zoomed'));
            }
        });
    }
}

function applyWallsConfig() {
    const w = parseInt(document.getElementById('inpWallsCount').value) || 3;
    const r = parseInt(document.getElementById('inpRowsCount').value) || 15;
    const c = parseInt(document.getElementById('inpColsCount').value) || 20;
    
    initInventory(w, r, c);
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // Optional: visual feedback
    const btn = document.querySelector('.walls-config-container .action-btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="check-circle"></i> تم التطبيق';
    btn.style.background = 'var(--active)';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 2000);
}

// ==========================================
// Smart Table Logic
// ==========================================

const dummyInventoryData = [];
for (let i = 0; i < 50; i++) {
    const isLow = Math.random() > 0.9;
    const isExpiring = Math.random() > 0.85;
    const isHidden = Math.random() > 0.95;
    const drugIdx = Math.floor(Math.random() * randomDrugsList.length);
    
    let statusClass = '';
    if (isLow) statusClass = 'row-low-stock';
    else if (isExpiring) statusClass = 'row-expiring';
    else if (isHidden) statusClass = 'row-hidden';

    const wall = Math.floor(Math.random() * 3) + 1;
    const row = Math.floor(Math.random() * 15) + 1;
    const col = Math.floor(Math.random() * 20) + 1;

    dummyInventoryData.push({
        storageNum: (1000 + i).toString(),
        name: randomDrugsList[drugIdx] + (i % 2 === 0 ? ' 500mg' : ' 250mg'),
        activeIngredient: activeIngredients[drugIdx],
        manufacturer: 'شركة فارما ميد',
        supplier: 'المورد الرئيسي للأدوية',
        entryDate: '2026-01-10',
        qtyMajor: isLow ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * 20) + 5,
        qtyMinor: Math.floor(Math.random() * 10),
        expiry: isExpiring ? '2026-06-15' : '2028-11-20',
        price: (Math.random() * 50 + 5).toFixed(2),
        shelfNum: Math.floor(Math.random() * 900) + 1,
        type: drugTypes[Math.floor(Math.random() * drugTypes.length)],
        statusClass: statusClass
    });
}

function populateSmartTable() {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    dummyInventoryData.forEach((item, index) => {
        const tr = document.createElement('tr');
        if (item.statusClass) tr.classList.add(item.statusClass);
        tr.onclick = (e) => {
            if (e.target.closest('.spatial-pointer')) return;
            
            document.querySelectorAll('#inventoryTableBody tr').forEach(row => row.classList.remove('active-row'));
            tr.classList.add('active-row');
            openFlyout(item);
        };

        tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>${item.qtyMajor} باكت، ${item.qtyMinor} شريط</td>
            <td>$${item.price}</td>
            <td><span class="spatial-pointer" onclick="blinkLocation('${item.shelfNum}', event)">${item.shelfNum}</span></td>
            <td class="font-mono">${item.storageNum}</td>
        `;
        tbody.appendChild(tr);
    });
    
    if(typeof lucide !== 'undefined') lucide.createIcons();
}

let currentSort = { key: null, asc: true };

function sortTable(key, thElement) {
    if (currentSort.key === key) {
        currentSort.asc = !currentSort.asc;
    } else {
        currentSort.key = key;
        currentSort.asc = true;
    }

    document.querySelectorAll('.smart-table th').forEach(th => {
        th.classList.remove('active-sort');
        const oldIcon = th.querySelector('.sort-icon');
        if (oldIcon) {
            const newIcon = document.createElement('i');
            newIcon.className = 'sort-icon';
            newIcon.setAttribute('data-lucide', 'arrow-up-down');
            th.replaceChild(newIcon, oldIcon);
        }
    });

    thElement.classList.add('active-sort');
    const activeIcon = thElement.querySelector('.sort-icon');
    if (activeIcon) {
        activeIcon.setAttribute('data-lucide', currentSort.asc ? 'arrow-down' : 'arrow-up');
    }

    dummyInventoryData.sort((a, b) => {
        let valA = a[key];
        let valB = b[key];

        if (key === 'storageNum' || key === 'shelfNum' || key === 'qtyMajor') {
            valA = parseInt(valA);
            valB = parseInt(valB);
            if (valA < valB) return currentSort.asc ? -1 : 1;
            if (valA > valB) return currentSort.asc ? 1 : -1;
            return 0;
        } else if (key === 'price') {
            valA = parseFloat(valA);
            valB = parseFloat(valB);
            if (valA < valB) return currentSort.asc ? -1 : 1;
            if (valA > valB) return currentSort.asc ? 1 : -1;
            return 0;
        } else {
            // فرز النصوص (الأدوية، المواد الفعالة، وغيرها)
            const cmp = String(valA).localeCompare(String(valB), 'ar');
            return currentSort.asc ? cmp : -cmp;
        }
    });

    populateSmartTable();
    
    // إعادة تطبيق الفلتر الحالي إن وجد
    filterInventory();
}

function filterInventory() {
    const term = document.getElementById('inventorySearch').value.toLowerCase();
    const rows = document.querySelectorAll('#inventoryTableBody tr');
    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
    });
}

function applyFilter(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    const rows = document.querySelectorAll('#inventoryTableBody tr');
    rows.forEach(row => {
        if (type === 'all') row.style.display = '';
        else if (type === 'expiring') row.style.display = row.classList.contains('row-expiring') ? '' : 'none';
        else if (type === 'low-stock') row.style.display = row.classList.contains('row-low-stock') ? '' : 'none';
        else if (type === 'hidden') row.style.display = row.classList.contains('row-hidden') ? '' : 'none';
        else row.style.display = '';
    });
}

function toggleView(viewType) {
    document.getElementById('toggleTableBtn').classList.remove('active');
    document.getElementById('toggle3DBtn').classList.remove('active');
    document.getElementById('tableView').style.display = 'none';
    document.getElementById('threeDView').style.display = 'none';

    const filterActions = document.querySelector('.filter-actions');

    if (viewType === 'table') {
        document.getElementById('toggleTableBtn').classList.add('active');
        document.getElementById('tableView').style.display = 'block';
        if(filterActions) filterActions.style.display = 'flex';
    } else {
        document.getElementById('toggle3DBtn').classList.add('active');
        document.getElementById('threeDView').style.display = 'block';
        if(filterActions) filterActions.style.display = 'none';
    }
}

// ==========================================
// Flyout & Interactions
// ==========================================

let currentFlyoutLocation = '';

function getQtyStatus(qty) {
    if (qty <= 2) return { text: 'نفذت الكمية', class: 'depleted' };
    if (qty <= 5) return { text: 'مقارب للنفاد', class: 'approaching' };
    return { text: 'ممتاز', class: 'excellent' };
}

function getExpiryStatus(expiryDate) {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: 'منتهي', class: 'expired' };
    if (diffDays <= 30) return { text: 'مقرب الانتهاء', class: 'approaching' };
    return { text: 'متاح', class: 'available' };
}

function generateBatches(item) {
    const numBatches = Math.floor(Math.random() * 3) + 1;
    const batches = [];
    
    for (let i = 1; i <= numBatches; i++) {
        const batchQty = Math.floor(item.qtyMajor / numBatches);
        const batchValue = (batchQty * parseFloat(item.price)).toFixed(2);
        const unitPrice = (parseFloat(item.price) / 10).toFixed(2);
        const publicPrice = (parseFloat(item.price) * 1.3).toFixed(2);
        
        const entryDate = new Date(item.entryDate);
        entryDate.setDate(entryDate.getDate() - (i * 30));
        
        const expiryDate = new Date(item.expiry);
        expiryDate.setMonth(expiryDate.getMonth() + (i % 2 === 0 ? 0 : 3));
        
        const expiryStatus = getExpiryStatus(expiryDate.toISOString().split('T')[0]);
        const isPaused = Math.random() > 0.9;
        
        batches.push({
            name: `الدفعة ${i}`,
            entryDate: entryDate.toISOString().split('T')[0],
            qty: batchQty,
            expiry: expiryDate.toISOString().split('T')[0],
            expiryStatus: expiryStatus,
            supplier: item.supplier,
            manufacturer: item.manufacturer,
            value: batchValue,
            unitType: 'باكت',
            unitPrice: unitPrice,
            publicPrice: publicPrice,
            status: isPaused ? { text: 'إيقاف مؤقت', class: 'paused' } : { text: 'متاح للبيع', class: 'available' }
        });
    }
    
    return batches;
}

function openFlyout(item) {
    document.getElementById('flyoutDrugName').innerText = item.name;
    document.getElementById('flyoutTradeName').innerText = item.name;
    document.getElementById('flyoutActiveIngredient').innerText = item.activeIngredient;
    document.getElementById('flyoutStorageNum').innerText = item.storageNum;
    if(document.getElementById('flyoutDrugType')) document.getElementById('flyoutDrugType').innerText = item.type;
    
    // الكمية الإجمالية مع الحالة
    const qtyStatus = getQtyStatus(item.qtyMajor);
    document.getElementById('flyoutQty').innerText = item.qtyMajor;
    const qtyStatusEl = document.getElementById('flyoutQtyStatus');
    qtyStatusEl.innerText = qtyStatus.text;
    qtyStatusEl.className = `qty-status ${qtyStatus.class}`;
    
    // القيمة النقدية الكلية
    const totalValue = (item.qtyMajor * parseFloat(item.price)).toFixed(2);
    document.getElementById('flyoutTotalValue').innerText = `$${totalValue}`; 
    
    // توليد وعرض ويدجت الدفعات
    const batches = generateBatches(item);
    const widgetsContainer = document.getElementById('batchesWidgetsContainer');
    widgetsContainer.innerHTML = batches.map(batch => `
        <div class="batch-widget">
            <div class="batch-widget-header">
                <span class="batch-name"><i data-lucide="package" class="batch-name-icon"></i> ${batch.name}</span>
                <span class="batch-status ${batch.status.class}">${batch.status.text}</span>
            </div>
            <div class="batch-widget-grid">
                <div class="batch-widget-item">
                    <span class="widget-label"><i data-lucide="calendar-plus"class="widget-label-icon" ></i> تاريخ الإضافة</span>
                    <span class="widget-value">${batch.entryDate}</span>
                </div>
                <div class="batch-widget-item">
                    <span class="widget-label"><i data-lucide="boxes" class="widget-label-icon"></i> الكمية</span>
                    <span class="widget-value qty">${batch.qty}</span>
                </div>
                <div class="batch-widget-item">
                    <span class="widget-label"><i data-lucide="calendar-x" class="widget-label-icon"></i> تاريخ الانتهاء</span>
                    <div class="widget-value-stack">
                        <span class="widget-value">${batch.expiry}</span>
                        <span class="expiry-badge ${batch.expiryStatus.class}">${batch.expiryStatus.text}</span>
                    </div>
                </div>
                <div class="batch-widget-item">
                    <span class="widget-label" ><i data-lucide="truck" class="widget-label-icon"></i> المورد</span>
                    <span class="widget-value">${batch.supplier}</span>
                </div>
                <div class="batch-widget-item">
                    <span class="widget-label"><i data-lucide="building-2" class="widget-label-icon"></i> الشركة</span>
                    <span class="widget-value">${batch.manufacturer}</span>
                </div>
                <div class="batch-widget-item">
                    <span class="widget-label"><i data-lucide="wallet" class="widget-label-icon"></i> قيمة الدفعة</span>
                    <span class="widget-value value-highlight">$${batch.value}</span>
                </div>
                <div class="batch-widget-item">
                    <span class="widget-label"><i data-lucide="scale" class="widget-label-icon"></i> سعر الوحدة</span>
                    <div class="widget-unit-price">
                        <span class="unit-badge">${batch.unitType}</span>
                        <span class="widget-value">$${batch.unitPrice}</span>
                    </div>
                </div>
                <div class="batch-widget-item">
                    <span class="widget-label"><i data-lucide="users" class="widget-label-icon"></i> السعر للجمهور</span>
                    <span class="widget-value public-price">$${batch.publicPrice}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    currentFlyoutLocation = item.shelfNum;
    
    const flyout = document.getElementById('quickFlyout');
    flyout.classList.add('open');
    
    if(typeof lucide !== 'undefined') lucide.createIcons();
}

function closeFlyout() {
    const flyout = document.getElementById('quickFlyout');
    flyout.classList.remove('open');
    document.querySelectorAll('#inventoryTableBody tr').forEach(row => row.classList.remove('active-row'));
}

function blinkLocation(shelfNum, event) {
    if(event) event.stopPropagation();
    
    toggleView('3d');
    
    // البحث عن الخلية التي تحتوي على هذا الرقم في النص
    const cells = document.querySelectorAll('.shelf-cell');
    let targetCell = null;
    
    for (let cell of cells) {
        if (cell.querySelector('.cell-coord').innerText === shelfNum.toString()) {
            targetCell = cell;
            break;
        }
    }
    
    if (targetCell) {
        targetCell.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        
        targetCell.classList.remove('blinking');
        void targetCell.offsetWidth;
        targetCell.classList.add('blinking');
        
        setTimeout(() => {
            targetCell.classList.remove('blinking');
        }, 3000);
    }
}

function blinkLocationFromFlyout() {
    if (currentFlyoutLocation) {
        blinkLocation(currentFlyoutLocation);
    }
}

function quickEditQuantity() {
    alert('فتح نافذة تعديل الكمية السريعة...');
}

function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.add('open');
        document.getElementById('authCodeInput').value = '';
        document.getElementById('authCodeInput').focus();
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('open');
}

function submitAuthCode() {
    const code = document.getElementById('authCodeInput').value;
    if (code === '1234' || code === '0000') { // كود افتراضي للتجربة
        alert('تم التحقق بنجاح! جاري فتح نافذة إضافة الأدوية...');
        closeAuthModal();
        // هنا يتم استدعاء نافذة الإضافة الحقيقية مستقبلاً
    } else if (code === '') {
        alert('يرجى إدخال كود الصلاحية أولاً.');
    } else {
        alert('كود الصلاحية غير صحيح! يرجى المحاولة مرة أخرى أو طلب كود جديد.');
    }
}

function requestAuthCode() {
    alert('تم إرسال طلب كود صلاحية إلى المدير. سيتم تزويدك بالكود فور الموافقة.');
}

function switchPurchaseMode(mode) {
    document.querySelectorAll('.mode-radio').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.purchase-mode-container').forEach(el => el.style.display = 'none');
    
    if(mode === 'single') {
        document.querySelector('.mode-radio:nth-child(1)').classList.add('active');
        document.getElementById('singleItemMode').style.display = 'block';
    } else {
        document.querySelector('.mode-radio:nth-child(2)').classList.add('active');
        document.getElementById('groupItemMode').style.display = 'block';
    }
}

// ==========================================
// Purchase Form Logic
// ==========================================

function openManualAddModal() {
    const modal = document.getElementById('manualAddModal');
    const container = document.getElementById('manualAddFormContainer');
    const template = document.getElementById('purchaseFormTemplate');
    
    // Inject template
    container.innerHTML = '';
    container.appendChild(template.content.cloneNode(true));
    
    // Set auto date
    const today = new Date().toISOString().split('T')[0];
    const dateInput = container.querySelector('#inpStorageDate');
    if(dateInput) dateInput.value = today;
    
    // Auto generate storage num
    const storageInput = container.querySelector('#inpStorageNum');
    if(storageInput) storageInput.value = 'STO-' + Math.floor(Math.random() * 9000 + 1000);
    
    // Create icons for newly injected elements
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    modal.classList.add('open');
}

function closeManualAddModal() {
    document.getElementById('manualAddModal').classList.remove('open');
}

function toggleItemStatus(radio) {
    const wrapper = radio.closest('.purchase-form-wrapper');
    const searchWrapper = wrapper.querySelector('.search-existing-wrapper');
    
    if (radio.value === 'existing') {
        searchWrapper.style.display = 'block';
    } else {
        searchWrapper.style.display = 'none';
        // Clear inputs for new item
        wrapper.querySelector('#inpTradeName').value = '';
        wrapper.querySelector('#inpMedicalName').value = '';
        wrapper.querySelector('#inpCompany').value = '';
    }
}

function toggleCustomType(radio) {
    const wrapper = radio.closest('.form-group');
    const customInput = wrapper.querySelector('#inpCustomType');
    if (radio.checked) {
        customInput.style.display = 'block';
        customInput.focus();
    } else {
        customInput.style.display = 'none';
    }
}

function calculateUnitPrice() {
    // Look for inputs in the currently visible form
    // Since this could be in a modal or group area, we find the active one
    const activeForm = document.querySelector('.modal-overlay.open .purchase-form-wrapper') || document;
    const qty = parseFloat(activeForm.querySelector('#inpQuantity').value) || 0;
    const total = parseFloat(activeForm.querySelector('#inpTotalCost').value) || 0;
    const unitCost = activeForm.querySelector('#inpUnitCost');
    
    if (qty > 0 && total > 0 && unitCost) {
        unitCost.value = (total / qty).toFixed(2);
    } else if (unitCost) {
        unitCost.value = '';
    }
}

function searchExistingDrug(input) {
    const dropdown = input.nextElementSibling;
    const val = input.value.toLowerCase();
    dropdown.innerHTML = '';
    
    if (!val) {
        dropdown.style.display = 'none';
        return;
    }
    
    const matches = dummyInventoryData.filter(d => d.name.toLowerCase().includes(val) || d.activeIngredient.toLowerCase().includes(val));
    
    if (matches.length > 0) {
        matches.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.name}</strong> - ${item.activeIngredient}`;
            li.onclick = () => {
                input.value = item.name;
                dropdown.style.display = 'none';
                
                // Autofill existing data
                const wrapper = input.closest('.purchase-form-wrapper');
                wrapper.querySelector('#inpTradeName').value = item.name;
                wrapper.querySelector('#inpMedicalName').value = item.activeIngredient;
                wrapper.querySelector('#inpCompany').value = item.manufacturer || 'شركة فارما ميد';
            };
            dropdown.appendChild(li);
        });
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function submitManualAdd() {
    alert("تم إضافة الدواء بنجاح للمخزون!");
    closeManualAddModal();
}

