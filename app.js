const pickleBtn = document.getElementById("pickleBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const pickleSpan = document.getElementById("pickleSpan");
const cpsSpan = document.getElementById("cpsSpan");

const stats = {
    pickleCount: 0,
    cps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
    stats.pickleCount = storageStats.pickleCount;
    stats.cps = storageStats.cps;
    updatePage();
    
}

function buyPickle() {
    stats.pickleCount++;
    updatePage();
    updateStorage();
}

function buyUpgrade() {
    stats.cps++;
    stats.pickleCount -= 10; 
    updatePage();
    updateStorage();
}

function updatePage() {
    pickleSpan.textContent = stats.pickleCount;
    cpsSpan.textContent = stats.cps;
}

function updateStorage() {
    localStorage.setItem("stats", JSON.stringify(stats));
}

pickleBtn.addEventListener("click", buyPickle);
upgradeBtn.addEventListener("click", buyUpgrade);

setInterval(function () {
    stats.pickleCount += stats.cps;
    updatePage();
    updateStorage();
}, 1000);