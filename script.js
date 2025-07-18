// 定義全局變量來存儲當前區域
let currentArea = null;

// 顯示區域頁面的函數
function showArea(area) {
    currentArea = area; // 更新當前區域
    const main = document.querySelector('main');
    main.classList.add('loading');

    setTimeout(() => {
        if (!mockData[area]) {
            main.innerHTML = `<p>錯誤：無此區域資料</p>`;
            main.classList.remove('loading');
            return;
        }

        const areaData = mockData[area];
        const sortedLocations = sortLocations([...areaData.locations]);

        main.innerHTML = `
            <h2>${areaData.area[currentLang]}</h2>
            <p id="last-updated">最後更新：${new Date().toLocaleTimeString()}</p>
            <div>
                <label for="sort-select">排序方式：</label>
                <select id="sort-select" onchange="changeSort(this.value)">
                    <option value="severity-asc">嚴重程度（升序）</option>
                    <option value="severity-desc">嚴重程度（降序）</option>
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
            <button onclick="backToMain()">返回</button>
        `;
        main.classList.remove('loading');
    }, 500);
}

// 處理排序選擇的函數
function changeSort(value) {
    const [sort, order] = value.split('-'); // 解析排序條件，例如 "severity-asc"
    currentSort = sort;  // 更新排序依據
    sortOrder = order;   // 更新排序順序
    if (currentArea) {
        showArea(currentArea); // 使用當前區域重新渲染頁面
    }
}
