
const db = {
    'Amoxicillin 500mg': { price: 15.50, desc: "مضاد حيوي واسع المجال يستخدم لعلاج الالتهابات البكتيرية." },
    'Panadol Advance': { price: 5.00, desc: "مسكن للألم وخافض للحرارة الخفيفة والمتوسطة." },
    'Ibuprofen 400mg': { price: 8.25, desc: "مضاد للالتهابات ومسكن لآلام المفاصل والعضلات." },
    'Nexium 40mg': { price: 22.00, desc: "يقلل من حموضة المعدة ويستخدم لعلاج الارتجاع المريئي." },
    'Aspirin Protect': { price: 4.50, desc: "مميع للدم يستخدم للوقاية من التجلطات الدموية." },
    'Vitamin C 1000mg': { price: 6.00, desc: "مكمل غذائي لتعزيز المناعة." }
};

let currentItemPrice = 0;
let grandTotal = 0;
let invCounter = 92;
let paymentMethod = 'cash'; // 'cash' or 'credit'
let dailySalesData = [];
const drugNames = Object.keys(db);

const searchInput = document.getElementById('drugSearch');
const dropdown = document.getElementById('searchDropdown');

function showDropdown() {
    dropdown.innerHTML = '';
    drugNames.forEach(name => {
        let div = document.createElement('div');
        div.className = 'dropdown-item';
        div.innerHTML = `<strong>${name}</strong> <span>$${db[name].price.toFixed(2)}</span>`;
        div.onclick = () => selectDrug(name);
        dropdown.appendChild(div);
    });
    dropdown.style.display = 'block';
}

function selectDrug(name) {
    searchInput.value = name;
    dropdown.style.display = 'none';
    handleSearch();
}

function handleSearch() {
    const query = searchInput.value;
    const bubble = document.getElementById('aiBubble');
    const aiText = document.getElementById('aiText');

    if (db[query]) {
        currentItemPrice = db[query].price;
        document.getElementById('unitPrice').innerText = `$${currentItemPrice.toFixed(2)}`;
        updateTotal();
        aiText.innerText = db[query].desc;
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
        currentItemPrice = 0;
        document.getElementById('unitPrice').innerText = `$0.00`;
        document.getElementById('totalPrice').innerText = `$0.00`;
    }
}

document.addEventListener('click', function(e) {
    if(e.target !== searchInput && e.target !== dropdown) { dropdown.style.display = 'none'; }
    const advCustomerNameInput = document.getElementById('advCustomerName');
    const customerDropdown = document.getElementById('customerDropdown');
    if(advCustomerNameInput && customerDropdown && e.target !== advCustomerNameInput && e.target !== customerDropdown) {
        customerDropdown.style.display = 'none';
    }
});

// بيانات العملاء التجريبية
const customerDB = [
    { name: "أحمد محمد عبدالله", fileNum: "C-1001", phone: "771234567", whatsapp: "771234567" },
    { name: "صالح علي مبخوت", fileNum: "C-1002", phone: "712345678", whatsapp: "712345678" },
    { name: "فاطمة حسن الخولاني", fileNum: "C-1003", phone: "733456789", whatsapp: "733456789" },
    { name: "سالم عبدالجبار", fileNum: "C-1004", phone: "770987654", whatsapp: "770987654" }
];
let lastFileNum = 1004;
let selectedCustomer = null;

function showCustomerDropdown() {
    handleCustomerSearch();
}

function handleCustomerSearch() {
    const input = document.getElementById('advCustomerName');
    const dropdown = document.getElementById('customerDropdown');
    const contactSection = document.getElementById('newCustomerContact');
    const fileInput = document.getElementById('advCustomerFile');
    const query = input.value.trim();

    dropdown.innerHTML = '';
    selectedCustomer = null;
    contactSection.style.display = 'flex';

    if (query === '') {
        fileInput.value = '';
        dropdown.style.display = 'none';
        return;
    }

    let matches = customerDB.filter(c => c.name.includes(query));

    if (matches.length === 0) {
        fileInput.value = `C-${lastFileNum + 1}`;
        dropdown.style.display = 'none';
        return;
    }

    matches.forEach(c => {
        let div = document.createElement('div');
        div.className = 'dropdown-item';
        div.innerHTML = `<strong>${c.name}</strong> <span class="customer-search-file">${c.fileNum}</span>`;
        div.onclick = () => {
            input.value = c.name;
            fileInput.value = c.fileNum;
            selectedCustomer = c;
            contactSection.style.display = 'none';
            dropdown.style.display = 'none';
        };
        dropdown.appendChild(div);
    });

    dropdown.style.display = 'block';
}

function syncPhoneToWhatsapp() {
    const phoneInput = document.getElementById('advCustomerPhone');
    const whatsappInput = document.getElementById('advCustomerWhatsapp');
    const checkbox = document.getElementById('sameAsPhone');
    if (checkbox.checked) {
        whatsappInput.value = phoneInput.value;
        whatsappInput.readOnly = true;
        whatsappInput.style.opacity = '0.7';
    } else {
        whatsappInput.readOnly = false;
        whatsappInput.style.opacity = '1';
    }
}

function updateQty(change) {
    let input = document.getElementById('qtyInput');
    let val = parseInt(input.value) + change;
    if(val >= 1) { input.value = val; updateTotal(); }
}

function updateTotal() {
    let qty = parseInt(document.getElementById('qtyInput').value);
    let total = qty * currentItemPrice;
    document.getElementById('totalPrice').innerText = `$${total.toFixed(2)}`;
}

function addProductToTable(name, qty, price) {
    let subtotal = qty * price;
    grandTotal += subtotal;

    let table = document.getElementById('receiptTable');
    if (!table) return;
    let row = table.insertRow();
    let itemId = 'item_' + Date.now() + Math.floor(Math.random() * 1000);
    row.id = itemId + '_row';
    row.innerHTML = `<td>${name}</td><td>${qty}</td><td>$${price.toFixed(2)}</td><td>$${subtotal.toFixed(2)}</td>`;

    document.getElementById('grandTotal').innerText = `$${grandTotal.toFixed(2)}`;
    setPaymentMethod(paymentMethod); // Update payment fields based on new total

    // إنشاء فقاعة الدواء المضاف
    let container = document.getElementById('addedDrugsContainer');
    if (container) {
        let bubble = document.createElement('div');
        bubble.className = 'drug-bubble';
        bubble.id = itemId + '_bubble';
        bubble.innerHTML = `
            <span class="drug-bubble-name">${name}</span>
            <span class="bubble-separator">|</span>
            <span class="drug-bubble-qty">${qty}</span>
            <div class="drug-bubble-delete" onclick="removeProduct('${itemId}', ${subtotal})"><i data-lucide="x" class="icon-x-small"></i></div>
        `;
        container.appendChild(bubble);
        if(typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

function removeProduct(id, subtotal) {
    let row = document.getElementById(id + '_row');
    let bubble = document.getElementById(id + '_bubble');
    if(row) row.remove();
    if(bubble) bubble.remove();

    grandTotal -= subtotal;
    if(grandTotal < 0) grandTotal = 0;
    document.getElementById('grandTotal').innerText = `$${grandTotal.toFixed(2)}`;

    setPaymentMethod(paymentMethod);
}

function addProduct() {
    let name = searchInput.value;
    let qty = parseInt(document.getElementById('qtyInput').value);
    if (currentItemPrice === 0) return alert("الرجاء البحث واختيار دواء صحيح أولاً.");

    addProductToTable(name, qty, currentItemPrice);

    searchInput.value = '';
    document.getElementById('qtyInput').value = '1';
    handleSearch();

    document.getElementById('invNum').innerText = `INV-${invCounter.toString().padStart(3, '0')}`;
    invCounter++;

    // تحديث الإحصائيات
    updateDailyStats();
}

function updateDailyStats() {
    // محاكاة تحديث الإحصائيات (في التطبيق الحقيقي سيتم جلب البيانات من قاعدة البيانات)
    let dailyIncomeElem = document.getElementById('dailyIncome');
    let invoiceCountElem = document.getElementById('invoiceCount');
    let lastSaleElem = document.getElementById('lastSale');
    let totalSalesElem = document.getElementById('totalSales');
    let creditCustomersElem = document.getElementById('creditCustomers');

    let currentIncome = dailyIncomeElem ? parseFloat(dailyIncomeElem.innerText.replace('$', '')) || 0 : 0;
    let currentCount = invoiceCountElem ? parseInt(invoiceCountElem.innerText) || 0 : 0;

    currentIncome += grandTotal;
    currentCount += 1;

    if (dailyIncomeElem) dailyIncomeElem.innerText = `$${currentIncome.toFixed(2)}`;
    if (invoiceCountElem) invoiceCountElem.innerText = currentCount;
    if (lastSaleElem) lastSaleElem.innerText = new Date().toLocaleTimeString('ar-YE', {hour: '2-digit', minute:'2-digit'});

    // تحديث تقارير المبيعات
    if (totalSalesElem) totalSalesElem.innerText = `$${currentIncome.toFixed(2)}`;
    if (paymentMethod === 'credit' && creditCustomersElem) {
        let creditCount = parseInt(creditCustomersElem.innerText) || 0;
        creditCustomersElem.innerText = creditCount + 1;
    }

    // حفظ البيانات في التخزين المحلي
    saveSaleData();
}

function saveSaleData() {
    let saleData = {
        invoice: `INV-${(invCounter - 1).toString().padStart(3, '0')}`,
        total: grandTotal,
        paymentMethod: paymentMethod,
        customerName: (paymentMethod === 'credit' || paymentMethod === 'partial') ? (document.getElementById('advCustomerName') ? document.getElementById('advCustomerName').value : null) : null,
        time: new Date().toISOString(),
        items: []
    };

    // حفظ في localStorage (يمكن استبداله بـ Dexie.js لاحقاً)
    let sales = JSON.parse(localStorage.getItem('pharmaSales') || '[]');
    sales.push(saleData);
    localStorage.setItem('pharmaSales', JSON.stringify(sales));

    dailySalesData = sales;
}

function setPaymentMethod(method) {
    paymentMethod = method;
    document.querySelectorAll('#settlementSection .payment-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`${method}Btn`);
    if (btn) btn.classList.add('active');

    const paidAmountInput = document.getElementById('paidAmount');
    const paidAmountContainer = document.getElementById('paidAmountContainer');
    const changeWrapper = document.getElementById('changeDisplayWrapper');
    const changeAmount = document.getElementById('changeAmount');
    const changeLabel = document.getElementById('changeLabel');

    if (!paidAmountInput) return;

    if (method === 'cash') {
        if (changeWrapper) changeWrapper.style.display = 'none';
        if (paidAmountContainer) paidAmountContainer.style.width = '100%';
        paidAmountInput.readOnly = true;
        paidAmountInput.value = grandTotal.toFixed(2);
    } else if (method === 'credit') {
        if (changeWrapper) changeWrapper.style.display = 'flex';
        if (paidAmountContainer) paidAmountContainer.style.width = '60%';
        paidAmountInput.readOnly = true;
        paidAmountInput.value = '0';
        if (changeLabel) changeLabel.innerText = 'المتبقي';
        if (changeAmount) changeAmount.innerText = `$${grandTotal.toFixed(2)}`;
    } else if (method === 'partial') {
        if (changeWrapper) changeWrapper.style.display = 'flex';
        if (paidAmountContainer) paidAmountContainer.style.width = '60%';
        paidAmountInput.readOnly = false;
        if (parseFloat(paidAmountInput.value) === grandTotal || paidAmountInput.value === '0') {
            paidAmountInput.value = '';
        }
        if (changeLabel) changeLabel.innerText = 'المتبقي';
        calculateChange();
    }
}

function calculateChange() {
    if (paymentMethod !== 'partial') return;
    const paidAmountElem = document.getElementById('paidAmount');
    const changeAmountElem = document.getElementById('changeAmount');
    if (!paidAmountElem || !changeAmountElem) return;

    let paidAmount = parseFloat(paidAmountElem.value) || 0;
    let change = grandTotal - paidAmount;
    changeAmountElem.innerText = `$${Math.max(0, change).toFixed(2)}`;
}

function initSales() {
    addProductToTable('Panadol Advance', 2, db['Panadol Advance'].price);
    addProductToTable('Vitamin C 1000mg', 1, db['Vitamin C 1000mg'].price);

    document.querySelectorAll('.qty-presets button').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.id === 'customUnitBtn') return;
            document.querySelectorAll('.qty-presets button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const customBtn = document.getElementById('customUnitBtn');
            if (customBtn) {
                customBtn.innerHTML = `<i data-lucide="pen-tool" class="icon-small"></i> مخصص`;
                if(typeof lucide !== 'undefined') lucide.createIcons();
            }

            const unitLabel = document.getElementById('qtyUnitLabel');
            if (unitLabel) {
                unitLabel.innerText = this.textContent.trim();
            }
        });
    });

    // تفعيل طي وتوسيع سجل المبيعات
    const salesLogContainer = document.getElementById('salesLogContainer');
    if (salesLogContainer) {
        salesLogContainer.addEventListener('click', (e) => {
            const logEntry = e.target.closest('.log-entry');
            if (logEntry) {
                logEntry.classList.toggle('expanded');
            }
        });
    }
}

function enableCustomUnit() {
    const btn = document.getElementById('customUnitBtn');
    const input = document.getElementById('customUnitInput');
    if (!btn || !input) return;
    document.querySelectorAll('.qty-presets button').forEach(b => b.classList.remove('active'));
    btn.style.display = 'none';
    input.style.display = 'block';
    input.focus();
}

function disableCustomUnit(input) {
    const btn = document.getElementById('customUnitBtn');
    if (!btn) return;
    const unitLabel = document.getElementById('qtyUnitLabel');
    if(input.value.trim() !== '') {
        btn.innerHTML = `<i data-lucide="check-circle" class="icon-small"></i> ${input.value}`;
        btn.classList.add('active');
        if (unitLabel) unitLabel.innerText = input.value.trim();
    } else {
        btn.innerHTML = `<i data-lucide="pen-tool" class="icon-small"></i> مخصص`;
        // Revert to default if custom is empty but still selected
        if (unitLabel && btn.classList.contains('active')) unitLabel.innerText = 'مخصص';
    }
    input.style.display = 'none';
    btn.style.display = 'flex';
    if(typeof lucide !== 'undefined') lucide.createIcons();
}

function openScanner() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(function(stream) {
                alert('تم تفعيل الكاميرا بنجاح! جاري تجهيز ماسح الباركود...');
                stream.getTracks().forEach(track => track.stop());
            })
            .catch(function(err) {
                alert('لا يمكن الوصول للكاميرا: ' + err.message);
            });
    } else {
        alert('متصفحك لا يدعم الوصول للكاميرا');
    }
}

let prescriptionStream = null;

function scanPrescription() {
    const overlay = document.getElementById('prescriptionScannerOverlay');
    const video = document.getElementById('prescriptionVideo');
    const scannerBar = document.getElementById('scannerBar');
    const aiLoader = document.getElementById('scannerAILoader');

    if (!overlay || !video || !scannerBar || !aiLoader) return;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(function(stream) {
                prescriptionStream = stream;
                video.srcObject = stream;
                overlay.style.display = 'flex';
                if(typeof lucide !== 'undefined') lucide.createIcons();

                scannerBar.style.width = '0%';
                setTimeout(() => scannerBar.style.width = '100%', 50);

                setTimeout(() => {
                    aiLoader.style.display = 'flex';

                    setTimeout(() => {
                        closePrescriptionScanner();
                        aiLoader.style.display = 'none';

                        let extractedDrugs = [
                            { name: 'Panadol Advance', qty: 1 },
                            { name: 'Amoxicillin 500mg', qty: 2 },
                            { name: 'Vitamin C 1000mg', qty: 1 }
                        ];

                        extractedDrugs.forEach(d => {
                            if(db[d.name]) {
                                addProductToTable(d.name, d.qty, db[d.name].price);
                            }
                        });
                        updateDailyStats();

                        alert("✨ AI Scan: تم استخراج 3 أصناف من الوصفة وإضافتها بنجاح!");
                    }, 2000);
                }, 5000);
            })
            .catch(function(err) {
                alert('لا يمكن الوصول للكاميرا: ' + err.message);
            });
    } else {
        alert('متصفحك لا يدعم الوصول للكاميرا');
    }
}

function closePrescriptionScanner() {
    const overlay = document.getElementById('prescriptionScannerOverlay');
    const video = document.getElementById('prescriptionVideo');
    const scannerBar = document.getElementById('scannerBar');

    if (prescriptionStream) {
        prescriptionStream.getTracks().forEach(track => track.stop());
        prescriptionStream = null;
    }

    if (video) video.srcObject = null;
    if (overlay) overlay.style.display = 'none';
    if (scannerBar) scannerBar.style.width = '0%';
}

function printReceipt() {
    if (grandTotal === 0) {
        alert('لا توجد عناصر في الفاتورة للطباعة');
        return;
    }

    let custName = document.getElementById('advCustomerName') ? document.getElementById('advCustomerName').value.trim() : '';
    if (paymentMethod === 'credit' || paymentMethod === 'partial') {
        if (!custName) {
            alert('الرجاء إدخال اسم العميل للفواتير الآجلة أو الجزئية');
            return;
        }
    }

    const receiptElem = document.querySelector('.receipt');
    if (!receiptElem) return;
    const receiptContent = receiptElem.innerHTML;
    const printWindow = window.open('', '_blank', 'width=400,height=600');

    let pMethodText = paymentMethod === 'credit' ? 'آجل' : (paymentMethod === 'partial' ? 'دفع جزئي' : 'نقدي');
    let paymentInfo = (paymentMethod === 'credit' || paymentMethod === 'partial') ?
        `<div style="margin: 10px 0; padding: 10px; border: 1px dashed #000; text-align: right;"><strong>طريقة الدفع:</strong> ${pMethodText}<br><strong>العميل:</strong> ${custName}</div>` :
        `<div style="margin: 10px 0; padding: 10px; border: 1px dashed #000; text-align: right;"><strong>طريقة الدفع:</strong> ${pMethodText}</div>`;

    let settlementInfo = '';
    const paidAmountElem = document.getElementById('paidAmount');
    const changeAmountElem = document.getElementById('changeAmount');

    if (paymentMethod === 'partial') {
        settlementInfo = `<div style="margin: 10px 0; text-align: right;"><strong>المبلغ المدفوع:</strong> $${parseFloat(paidAmountElem.value || 0).toFixed(2)}<br><strong>المتبقي:</strong> ${changeAmountElem.innerText}</div>`;
    } else if (paymentMethod === 'credit') {
        settlementInfo = `<div style="margin: 10px 0; text-align: right;"><strong>المتبقي:</strong> ${changeAmountElem.innerText}</div>`;
    } else {
        settlementInfo = `<div style="margin: 10px 0; text-align: right;"><strong>المبلغ المدفوع:</strong> $${grandTotal.toFixed(2)}</div>`;
    }

    printWindow.document.write(`
        <html dir="rtl">
            <head>
                <title>طباعة الفاتورة</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; color: #000; background: #fff; text-align: center; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.9rem; }
                    th, td { border-bottom: 1px dashed #000; padding: 8px 5px; text-align: center; }
                    .receipt-total { font-weight: bold; border-top: 2px dashed #000; padding-top: 10px; margin-top: 10px; display: flex; justify-content: space-between; font-size: 1.1rem; }
                    .receipt-header { border-bottom: 2px dashed #000; padding-bottom: 10px; margin-bottom: 10px; text-align: right; font-size: 0.8rem; }
                    .receipt-header div { display: flex; justify-content: space-between; margin-bottom: 5px; }
                    .receipt-footer { margin-top: 20px; border-top: 2px dashed #000; padding-top: 10px; font-size: 0.9rem; }
                    .receipt-footer-p { margin-top: 10px; font-weight: bold; }
                    .lucide { display: none; }
                    .payment-section, .settlement-section { display: none; }
                </style>
            </head>
            <body>
                <h2 style="margin-bottom: 20px;">صيدلية يمان</h2>
                ${receiptContent}
                ${paymentInfo}
                ${settlementInfo}
                <script>
                    window.onload = function() { window.print(); window.close(); }
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
        resetReceipt();
    }, 1000);
}

function resetReceipt() {
    grandTotal = 0;
    const receiptTable = document.getElementById('receiptTable');
    if (receiptTable) {
        receiptTable.innerHTML = `
            <tr>
                <th><i data-lucide="pill"></i> الصنف</th>
                <th><i data-lucide="layers"></i> الكمية</th>
                <th><i data-lucide="tag"></i> السعر</th>
                <th><i data-lucide="wallet"></i> المجموع</th>
            </tr>`;
    }
    const grandTotalElem = document.getElementById('grandTotal');
    if (grandTotalElem) grandTotalElem.innerText = '$0.00';

    let container = document.getElementById('addedDrugsContainer');
    if (container) container.innerHTML = '';

    if(document.getElementById('advCustomerName')) document.getElementById('advCustomerName').value = '';
    if(document.getElementById('advCustomerFile')) document.getElementById('advCustomerFile').value = '';
    if(document.getElementById('advCustomerPhone')) document.getElementById('advCustomerPhone').value = '';
    if(document.getElementById('advCustomerWhatsapp')) document.getElementById('advCustomerWhatsapp').value = '';

    const invNumElem = document.getElementById('invNum');
    if (invNumElem) invNumElem.innerText = `INV-${invCounter.toString().padStart(3, '0')}`;
    setPaymentMethod('cash');
}
