// Mock data with translations for Thai and English
const mockData = {
    business: {
        area: { en: "Central Business and Cultural District", th: "เขตธุรกิจกลางและวัฒนธรรม" },
        locations: [
            { name: { en: "Rama I Road", th: "ถนนพระรามที่ 1" }, status: { en: "Heavy delay near Siam Square", th: "ล่าช้าอย่างหนักใกล้สยามสแควร์" }, color: "red", severity: 3 },
            { name: { en: "Sathon Road", th: "ถนนสาทร" }, status: { en: "Heavy delay near Taksin Bridge", th: "ล่าช้าอย่างหนักใกล้สะพานตากสิน" }, color: "red", severity: 3 },
            { name: { en: "Wireless Road", th: "ถนนวิทยุ" }, status: { en: "Slow from Petchaburi to Sukhumvit", th: "ช้าจากเพชรบุรีถึงสุขุมวิท" }, color: "yellow", severity: 2 },
            { name: { en: "Charoen Krung Road", th: "ถนนเจริญกรุง" }, status: { en: "Congested near Yaowarat", th: "แออัดใกล้เยาวราช" }, color: "red", severity: 3 }
        ]
    },
    northern: {
        area: { en: "Northern Residential and Park Area", th: "เขตที่อยู่อาศัยและสวนสาธารณะทางเหนือ" },
        locations: [
            { name: { en: "Chaeng Watthana Road", th: "ถนนแจ้งวัฒนะ" }, status: { en: "Congested near Pak Kret", th: "แออัดใกล้ปากเกร็ด" }, color: "red", severity: 3 },
            { name: { en: "Victory Monument Roundabout", th: "วงเวียนอนุสาวรีย์ชัยสมรภูมิ" }, status: { en: "Heavy delay at all entrances", th: "ล่าช้าอย่างหนักทุกทางเข้า" }, color: "red", severity: 3 },
            { name: { en: "Phahonyothin Road", th: "ถนนพหลโยธิน" }, status: { en: "Congested at Chatuchak", th: "แออัดที่จตุจักร" }, color: "red", severity: 3 },
            { name: { en: "Kamphaeng Phet Road", th: "ถนนกำแพงเพชร" }, status: { en: "Moderate delay near Chatuchak Market", th: "ล่าช้าปานกลางใกล้ตลาดจตุจักร" }, color: "yellow", severity: 2 }
        ]
    },
    southeastern: {
        area: { en: "Southeastern Highway Area", th: "เขตทางหลวงตะวันออกเฉียงใต้" },
        locations: [
            { name: { en: "Rama IX Road", th: "ถนนพระราม 9" }, status: { en: "Congested near Ratchadaphisek Intersection", th: "แออัดใกล้แยกรัชดาภิเษก" }, color: "red", severity: 3 },
            { name: { en: "Bangna-Trat Road", th: "ถนนบางนา-ตราด" }, status: { en: "Slow near Sukhumvit Intersection", th: "ช้าใกล้แยกสุขุมวิท" }, color: "yellow", severity: 2 },
            { name: { en: "Srinagarindra Road", th: "ถนนศรีนครินทร์" }, status: { en: "Heavy congestion near Rama IX", th: "แออัดหนักใกล้พระราม 9" }, color: "red", severity: 3 },
            { name: { en: "Sukhumvit Road", th: "ถนนสุขุมวิท" }, status: { en: "Heavy congestion from Nana to Asoke", th: "แออัดหนักจากนานาถึงอโศก" }, color: "red", severity: 3 }
        ]
    },
    western: {
        area: { en: "Western Riverside and Historical District", th: "เขตริมแม่น้ำและประวัติศาสตร์ทางตะวันตก" },
        locations: [
            { name: { en: "Charan Sanitwong Road", th: "ถนนจรัญสนิทวงศ์" }, status: { en: "Heavy congestion near Bang Phlat", th: "แออัดหนักใกล้บางพลัด" }, color: "red", severity: 3 },
            { name: { en: "Itsaraphap Road", th: "ถนนอิสรภาพ" }, status: { en: "Busy near Wat Arun", th: "คึกคักใกล้วัดอรุณ" }, color: "yellow", severity: 1 },
            { name: { en: "Pinklao Bridge", th: "สะพานปิ่นเกล้า" }, status: { en: "Slow from Thonburi side", th: "ช้าจากฝั่งธนบุรี" }, color: "yellow", severity: 2 },
            { name: { en: "Arun Amarin Road", th: "ถนนอรุณอมรินทร์" }, status: { en: "Congested near Pinklao Bridge", th: "แออัดใกล้สะพานปิ่นเกล้า" }, color: "red", severity: 3 }
        ]
    }
};

// Translations for UI elements
const translations = {
    en: {
        title: "Traffic News Bangkok",
        lastUpdated: "Last Updated:",
        back: "Back",
        error: "Error: Area not found",
        sortBy: "Sort by",
        severity: "Severity",
        ascending: "Ascending",
        descending: "Descending"
    },
    th: {
        title: "ข่าวการจราจรกรุงเทพ",
        lastUpdated: "อัปเดตล่าสุด:",
        back: "กลับ",
        error: "ข้อผิดพลาด: ไม่พบพื้นที่",
        sortBy: "เรียงตาม",
        severity: "ความรุนแรง",
        ascending: "น้อยไปมาก",
        descending: "มากไปน้อย"
    }
};

let currentLang = 'th'; // Default language is Thai per query
let currentSort = 'severity'; // Default sort by severity
let sortOrder = 'asc'; // Default sort order ascending

// Update main page text based on language
function updateMainPage() {
    document.getElementById('title').textContent = translations[currentLang].title;
    document.getElementById('area-business').textContent = mockData.business.area[currentLang];
    document.getElementById('area-northern').textContent = mockData.northern.area[currentLang];
    document.getElementById('area-southeastern').textContent = mockData.southeastern.area[currentLang];
    document.getElementById('area-western').textContent = mockData.western.area[currentLang];
}

// Sort locations based on current sort criteria
function sortLocations(locations) {
    return locations.sort((a, b) => {
        if (currentSort === 'severity') {
            return sortOrder === 'asc' ? a.severity - b.severity : b.severity - a.severity;
        }
        return 0;
    });
}

// Display area-specific page with sorting
function showArea(area) {
    const main = document.querySelector('main');
    main.classList.add('loading');

    setTimeout(() => {
        if (!mockData[area]) {
            main.innerHTML = `<p>${translations[currentLang].error}</p>`;
            main.classList.remove('loading');
            return;
        }

        const areaData = mockData[area];
        const sortedLocations = sortLocations([...areaData.locations]);

        main.innerHTML = `
            <h2>${areaData.area[currentLang]}</h2>
            <p id="last-updated">${translations[currentLang].lastUpdated} ${new Date().toLocaleTimeString()}</p>
            <div>
                <label for="sort-select">${translations[currentLang].sortBy}:</label>
                <select id="sort-select" onchange="changeSort(this.value)">
                    <option value="severity-asc">${translations[currentLang].severity} (${translations[currentLang].ascending})</option>
                    <option value="severity-desc">${translations[currentLang].severity} (${translations[currentLang].descending})</option>
                </select>
            </div>
            <ul>
                ${sortedLocations.map(loc => `
                    <li>
                        <span class="dot ${loc.color}"></span>
                        ${loc.name[currentLang]}: ${loc.status[currentLang]}
                    </li>
                `).join('')}
            </ul>
            <button onclick="backToMain()">${translations[currentLang].back}</button>
        `;
        main.classList.remove('loading');
    }, 500);
}

// Change sort criteria
function changeSort(value) {
    const [sort, order] = value.split('-');
    currentSort = sort;
    sortOrder = order;
    const area = document.querySelector('.area-card').getAttribute('data-area');
    showArea(area);
}

// Return to main page
function backToMain() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="area-card" data-area="business" role="button" tabindex="0" aria-label="${mockData.business.area[currentLang]}">
            <img src="icons/city.png" alt="City Icon">
            <p id="area-business"></p>
        </div>
        <div class="area-card" data-area="northern" role="button" tabindex="0" aria-label="${mockData.northern.area[currentLang]}">
            <img src="icons/park.png" alt="Park Icon">
            <p id="area-northern"></p>
        </div>
        <div class="area-card" data-area="southeastern" role="button" tabindex="0" aria-label="${mockData.southeastern.area[currentLang]}">
            <img src="icons/highway.png" alt="Highway Icon">
            <p id="area-southeastern"></p>
        </div>
        <div class="area-card" data-area="western" role="button" tabindex="0" aria-label="${mockData.western.area[currentLang]}">
            <img src="icons/river.png" alt="River Icon">
            <p id="area-western"></p>
        </div>
    `;
    updateMainPage();
    document.querySelector一周All('.area-card').forEach(card => {
        card.addEventListener('click', () => showArea(card.getAttribute('data-area')));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') showArea(card.getAttribute('data-area'));
        });
    });
}

// Set language and refresh UI
function setLanguage(lang) {
    currentLang = lang;
    backToMain();
}

// Initial setup
updateMainPage();
document.querySelectorAll('.area-card').forEach(card => {
    card.addEventListener('click', () => showArea(card.getAttribute('data-area')));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') showArea(card.getAttribute('data-area'));
    });
});
