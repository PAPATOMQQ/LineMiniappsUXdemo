// Mock data with translations
const mockData = {
    business: {
        area: {
            th: "เขตธุรกิจกลางและวัฒนธรรม",
            en: "Central Business and Cultural District"
        },
        locations: [
            {
                name: { th: "ถนนพระรามที่ 1", en: "Rama I Road" },
                status: { th: "ล่าช้าอย่างหนักใกล้สยามสแควร์", en: "Heavy delay near Siam Square" },
                color: "red"
            },
            {
                name: { th: "ถนนสาทร", en: "Sath-": "Sathorn Road" },
                status: { th: "ล่าช้าอย่างหนักใกล้สะพานตากสิน", en: "Heavy delay near Taksin Bridge" },
                color: "red"
            }
        ]
    },
    northern: {
        area: {
            th: "เขตที่อยู่อาศัยและสวนสาธารณะทางเหนือ",
            en: "Northern Residential and Park Area"
        },
        locations: [
            {
                name: { th: "ถนนพหลโยธิน", en: "Phahonyothin Road" },
                status: { th: "การจราจรคล่องตัว", en: "Smooth traffic" },
                color: "green"
            }
        ]
    },
    southeastern: {
        area: {
            th: "เขตทางหลวงตะวันออกเฉียงใต้",
            en: "Southeastern Highway Area"
        },
        locations: [
            {
                name: { th: "ถนนสุขุมวิท", en: "Sukhumvit Road" },
                status: { th: "ล่าช้าปานกลาง", en: "Moderate delay" },
                color: "yellow"
            }
        ]
    },
    western: {
        area: {
            th: "เขตริมแม่น้ำและประวัติศาสตร์ทางตะวันตก",
            en: "Western Riverside and Historical District"
        },
        locations: [
            {
                name: { th: "ถนนจักรเพชร", en: "Chak Phet Road" },
                status: { th: "การจราจรคล่องตัว", en: "Smooth traffic" },
                color: "green"
            }
        ]
    }
};

let currentLang = 'th'; // Default language
let currentArea = null;

// Function to set language and update UI
function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('lang-th').classList.toggle('active', lang === 'th');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.querySelectorAll('.lang-th').forEach(el => el.style.display = lang === 'th' ? 'block' : 'none');
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
    if (currentArea) {
        showArea(currentArea);
    }
}

// Function to display area-specific page
function showArea(area) {
    currentArea = area;
    const areaData = mockData[area];
    const lastUpdatedText = currentLang === 'th' ? 'อัปเดตล่าสุด' : 'Last Updated';
    const backText = currentLang === 'th' ? 'กลับ' : 'Back';
    const timeString = new Date().toLocaleTimeString(currentLang === 'th' ? 'th-TH' : 'en-US');
    const main = document.querySelector('main');
    main.innerHTML = `
        <h2>${areaData.area[currentLang]}</h2>
        <p id="last-updated">${lastUpdatedText}: ${timeString}</p>
        <ul>
            ${areaData.locations.map(loc => `
                <li>
                    <span class="dot ${loc.color}"></span>
                    ${loc.name[currentLang]}: ${loc.status[currentLang]}
                </li>
            `).join('')}
        </ul>
        <button onclick="backToMain()">${backText}</button>
    `;
}

// Function to return to main page
function backToMain() {
    currentArea = null;
    location.reload(); // Simple reload for now
}

// Add click events to area cards
document.querySelectorAll('.area-card').forEach(card => {
    card.addEventListener('click', () => {
        const area = card.getAttribute('data-area');
        showArea(area);
    });
});

// Set initial language
window.addEventListener('load', () => {
    setLanguage(currentLang);
});
