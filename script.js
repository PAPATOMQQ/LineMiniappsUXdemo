// Mock data for demonstration
const mockData = {
    business: {
        area: "เขตธุรกิจกลางและวัฒนธรรม",
        locations: [
            { name: "ถนนพระรามที่ 1", status: "ล่าช้าอย่างหนักใกล้สยามสแควร์", color: "red" },
            { name: "ถนนสาทร", status: "ล่าช้าอย่างหนักใกล้สะพานตากสิน", color: "red" }
        ]
    },
    northern: {
        area: "เขตที่อยู่อาศัยและสวนสาธารณะทางเหนือ",
        locations: [
            { name: "ถนนพหลโยธิน", status: "การจราจรคล่องตัว", color: "green" }
        ]
    },
    southeastern: {
        area: "เขตทางหลวงตะวันออกเฉียงใต้",
        locations: [
            { name: "ถนนสุขุมวิท", status: "ล่าช้าปานกลาง", color: "yellow" }
        ]
    },
    western: {
        area: "เขตริมแม่น้ำและประวัติศาสตร์ทางตะวันตก",
        locations: [
            { name: "ถนนจักรเพชร", status: "การจราจรคล่องตัว", color: "green" }
        ]
    }
};

// Cache the main element
const main = document.querySelector('main');
let mainContentBackup = null; // To store the main page content

// Function to display area-specific page
function showArea(area) {
    const areaData = mockData[area];
    if (!areaData) return; // Prevent errors if area is not found

    // Backup the main content if not already done
    if (!mainContentBackup) {
        mainContentBackup = main.cloneNode(true);
    }

    // Clear the main content with fade-out
    main.style.opacity = '0';
    setTimeout(() => {
        main.innerHTML = '';

        // Create and append the area title
        const title = document.createElement('h2');
        title.textContent = areaData.area;
        main.appendChild(title);

        // Create and append the last updated time
        const lastUpdated = document.createElement('p');
        lastUpdated.id = 'last-updated';
        lastUpdated.textContent = `อัปเดตล่าสุด: ${new Date().toLocaleTimeString('th-TH')}`;
        main.appendChild(lastUpdated);

        // Create and append the list of locations
        const list = document.createElement('ul');
        areaData.locations.forEach(loc => {
            const listItem = document.createElement('li');
            const dot = document.createElement('span');
            dot.className = `dot ${loc.color}`;
            listItem.appendChild(dot);
            listItem.appendChild(document.createTextNode(`${loc.name}: ${loc.status}`));
            list.appendChild(listItem);
        });
        main.appendChild(list);

        // Create and append the back button
        const backButton = document.createElement('button');
        backButton.textContent = 'กลับ';
        backButton.addEventListener('click', backToMain);
        main.appendChild(backButton);

        // Fade-in effect
        main.style.opacity = '1';
    }, 300); // Match CSS transition duration
}

// Function to return to main page
function backToMain() {
    if (mainContentBackup) {
        main.style.opacity = '0';
        setTimeout(() => {
            main.innerHTML = '';
            main.appendChild(mainContentBackup.cloneNode(true));
            main.style.opacity = '1';
            // Re-attach event listeners to the area cards
            attachAreaCardEvents();
        }, 300);
    }
}

// Function to attach event listeners to area cards
function attachAreaCardEvents() {
    document.querySelectorAll('.area-card').forEach(card => {
        card.addEventListener('click', () => {
            const area = card.getAttribute('data-area');
            showArea(area);
        });
    });
}

// Initial attachment of event listeners
attachAreaCardEvents();

// Simulate real-time updates (optional)
setInterval(() => {
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = `อัปเดตล่าสุด: ${new Date().toLocaleTimeString('th-TH')}`;
    }
}, 60000); // Update every minute
