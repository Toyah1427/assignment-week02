const pickleBtn = document.getElementById("pickleBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const picklesSpan = document.getElementById("picklesSpan");
const cpsSpan = document.getElementById("cpsSpan");

// default starting value for stats
const stats = {
  pickleCount: 0,
  cps: 0, // cookies per second
};

// if local storage exists, update stats with it
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
  stats.cps++; // shorthand for "add 1"
  stats.pickleCount -= 10; // shorthand for "take away 10"
  updatePage();
  updateStorage();
}

function updatePage() {
  picklesSpan.textContent = stats.pickleCount;
  cpsSpan.textContent = stats.cps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

pickleBtn.addEventListener("click", buyPickle);
upgradeBtn.addEventListener("click", buyUpgrade);

// start the timer than will run every second FOREVER
setInterval(function () {
  stats.pickleCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);