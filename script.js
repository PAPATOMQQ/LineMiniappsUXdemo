// Mock data with translations for both Thai and English
const mockData = {
    business: {
        area: { en: "Central Business and Cultural District", th: "เขตธุรกิจกลางและวัฒนธรรม" },
        locations: [
            {
                name: { en: "Rama I Road", th: "ถนนพระรามที่ 1" },
                status: { en: "Heavy delay near Siam Square", th: "ล่าช้าอย่างหนักใกล้สยามสแควร์" },
                color: "red"
            },
            {
                name: { en: "Sathon Road", th: "ถนนสาทร" },
                status: { en: "Heavy delay near Taksin Bridge", th: "ล่าช้าอย่างหนักใกล้สะพานตากสิน" },
                color: "red"
            }
        ]
    },
    northern: {
        area: { en: "Northern Residential and Park Area", th: "เขตที่อยู่อาศัยและสวนสาธารณะทางเหนือ" },
        locations: [
            {
                name: { en: "Phahonyothin Road", th: "ถนนพหลโยธิน" },
                status: { en: "Smooth traffic", th: "การจราจรคล่องตัว" },
                color: "green"
            }
        ]
    },
    southeastern: {
        area: { en: "Southeastern Highway Area", th: "เขตทางหลวงตะวันออกเฉียงใต้" },
        locations: [
            {
                name: { en: "Sukhumvit Road", th: "ถนนสุขุมวิท" },
                status: { en: "Moderate delay", th: "ล่าช้าปานกลาง" },
                color: "yellow"
            }
        ]
    },
    western: {
        area: { en: "Western Riverside and Historical District", th: "เขตริมแม่น้ำและประวัติศาสตร์ทางตะวันตก" },
        locations: [
            {
                name: { en: "Chak Phet Road", th: "ถนนจักรเพชร" },
                status: { en: "Smooth traffic", th: "การจราจรคล่องตัว" },
                color: "green"
            }
        ]
    }
};

// Translations for static UI elements
const translations = {
    en: {
        title: "Traffic News Bangkok",
        lastUpdated: "Last Updated:",
        back: "Back"
    },
    th: {
        title: "ข่าวการจราจรกรุงเทพ",
        lastUpdated: "อัปเดตล่าสุด:",
        back: "กลับ"
    }
};

let currentLang = 'en'; // Default language is English

// Function to update main page text based on current language
function updateMainPage() {
    document.getElementById('title').textContent = translations[currentLang].title;
    document.getElementById('area-business').textContent = mockData.business.area[currentLang];
    document.getElementById('area-northern').textContent = mockData.northern.area[currentLang];
    document.getElementById('area-southeastern').textContent = mockData.southeastern.area[currentLang];
    document.getElementById('area-western').textContent = mockData.western.area[currentLang];
}

// Function to display area-specific page with translated content
function showArea(area) {
    const areaData = mockData[area];
    const main = document.querySelector('main');
    main.innerHTML = `
        <h2>${areaData.area[currentLang]}</h2>
        <p id="last-updated">${translations[currentLang].lastUpdated} ${new Date().toLocaleTimeString()}</p>
        <ul>
            ${areaData.locations.map(loc => `
                <li>
                    <span class="dot ${loc.color}"></span>
                    ${loc.name[currentLang]}: ${loc.status[currentLang]}
                </li>
            `).join('')}
        </ul>
        <button onclick="backToMain()">${translations[currentLang].back}</button>
    `;
}

// Function to return to main page and regenerate content
function backToMain() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="area-card" data-area="business">
            <img src="icons/city.png" alt="City Icon">
            <p id="area-business"></p>
        </div>
        <div class="area-card" data-area="northern">
            <img src="icons/park.png" alt="Park Icon">
            <p id="area-northern"></p>
        </div>
        <div class="area-card" data-area="southeastern">
            <img src="icons/highway.png" alt="Highway Icon">
            <p id="area-southeastern"></p>
        </div>
        <div class="area-card" data-area="western">
            <img src="icons/river.png" alt="River Icon">
            <p id="area-western"></p>
        </div>
    `;
    updateMainPage();
    document.querySelectorAll('.area-card').forEach(card => {
        card.addEventListener('click', () => {
            const area = card.getAttribute('data-area');
            showArea(area);
        });
    });
}

// Function to set language and refresh UI
function setLanguage(lang) {
    currentLang = lang;
    backToMain();
}

// Initial setup
updateMainPage();
document.querySelectorAll('.area-card').forEach(card => {
    card  card.addEventListener('click', () => {
        const area = card.getAttribute('data-area');
        showArea(area);
    });
});
