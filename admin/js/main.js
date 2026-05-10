// الدوال والسكربتات المشتركة لجميع الصفحات

const themes = [
    { id: 'default', name: 'الافتراضي (Dark Teal)', icon: 'moon' },
    { id: 'light-pro', name: 'المشرق الرسمي (Academic)', icon: 'sun' },
    { id: 'light-vibrant', name: 'الحيوي المشرق (Health)', icon: 'sparkles' },
    { id: 'dark-obsidian', name: 'العميق المظلم (Obsidian)', icon: 'zap' }
];

let currentThemeIndex = 0;

// تطبيق الثيم المحفوظ
function applySavedTheme() {
    const savedThemeId = localStorage.getItem('pharmaflow_theme') || 'default';
    const themeIndex = themes.findIndex(t => t.id === savedThemeId);
    
    if (themeIndex !== -1) {
        currentThemeIndex = themeIndex;
    }
    
    const theme = themes[currentThemeIndex];
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    const btn = document.getElementById('themeToggle');

    body.removeAttribute('data-theme');
    if (theme.id !== 'default') {
        body.setAttribute('data-theme', theme.id);
    }

    if (icon) {
        icon.setAttribute('data-lucide', theme.icon);
    }
    
    if (btn) {
        btn.title = `تبديل الثيم: ${theme.name}`;
    }
}

// تبديل الثيم
function toggleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    
    localStorage.setItem('pharmaflow_theme', theme.id);
    applySavedTheme();
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// تهيئة عامة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // تطبيق الثيم المحفوظ أولاً
    applySavedTheme();
    
    // تفعيل أيقونات Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
