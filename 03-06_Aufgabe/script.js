//load Google packages
google.charts.load("current", {
  packages: ["geochart", "corechart"],
});
google.charts.setOnLoadCallback(drawCharts);

// HTML Elements
const mapContainer = document.getElementById("map-container");
panzoom(mapContainer, {
  zoomSpeed: 0.07,
});
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");
const pie = document.getElementById("pie-chart");
const pieIcon = document.getElementById("pie-icon");
const bars = document.getElementById("bars");
const barsIcon = document.getElementById("bars-icon");
const area = document.getElementById("area");
const areaIcon = document.getElementById("area-icon");
const animals = document.getElementsByClassName("animal");
const icons = document.getElementsByClassName("info-icon");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
setListeners();

//draw Map
function drawCharts() {
  const data = google.visualization.arrayToDataTable([
    ["Land", "Anzahl"],
    ["Germany", 55],
    ["Mexico", 665],
    ["Japan", 300],
    ["United States", 475],
    ["Luxembourg", 4],
    ["San Marino", 0],
    ["Brazil", 413],
    ["Canada", 93],
    ["Spain", 145],
    ["RU", 139],
    ["Australia", 362],
    ["Nigeria", 150],
    ["Kenya", 171],
    ["Thailand", 271],
    ["South Africa", 241],
  ]);

  const options = {
    colorAxis: { colors: ["#bf8686", "#a30000"] },
    datalessRegionColor: "#ffffff",
    backgroundColor: "#f7feff",
    tooltip: { trigger: "none" },
  };

  const chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);

  google.visualization.events.addListener(chart, "select", function () {
    overlay.style.width = "100%";
    overlay.style.height = "100%";
  });

  this.drawPie();
  this.drawBars();
  this.drawArea();
}

//draw Pie
function drawPie() {
  const data = google.visualization.arrayToDataTable([
    ["Kategorie", "Anzahl"],
    ["Fische", 24],
    ["Säugetiere", 10],
    ["Vögel", 11],
    ["Reptilien", 5],
    ["Amphibien", 5],
  ]);

  const options = {
    title: "Bedrohte Arten (55 Stück)",
    chartArea: { left: 16, width: "100%", height: 160, bottom: 10 },
    titleTextStyle: { fontSize: 12 },
    legend: { textStyle: { fontSize: 12 } },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("pie-chart")
  );

  chart.draw(data, options);
}

// draw Bars
function drawBars() {
  const data = google.visualization.arrayToDataTable([
    ["Land", "Anzahl", { role: "style" }],
    ["Luxemburg", 10, "silver"],
    ["England", 30, "silver"],
    ["Deutschland", 55, "#d18a8a"],
    ["Polen", 70, "silver"],
    ["Frankreich", 80, "silver"],
  ]);

  const options = {
    title: "DE im Vergleich zu anderen Ländern",
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("bars")
  );

  chart.draw(data, options);
}

//drawArea
function drawArea() {
  const data = google.visualization.arrayToDataTable([
    ["Jahr", "Anzahl"],
    ["'12", 37],
    ["'13", 39],
    ["'14", 40],
    ["'15", 46],
    ["'16", 47],
    ["'17", 50],
    ["'18", 50],
    ["'19", 53],
    ["'20", 55],
  ]);

  const options = {
    title: "Anzahl über die Jahre",
    hAxis: {
      title: "Jahr",
      titleTextStyle: { color: "#333" },
    },
    legend: { position: "left" },
    vAxis: {
      minValue: 0,
    },
    pointSize: 4,
  };

  const chart = new google.visualization.AreaChart(
    document.getElementById("area")
  );
  chart.draw(data, options);
}

// navigate back
function back(type) {
  if (type === 1) {
    overlay.style.width = "0px";
    overlay.style.height = "0px";
  }
  if (type === 2) {
    overlay2.style.width = "0px";
    overlay2.style.height = "0px";
  }
}

// set styles and display

function setPie() {
  pie.style.width = "100%";
  pie.style.height = "100%";
  pieIcon.style.opacity = "1";
  bars.style.height = "0";
  bars.style.height = "0";
  barsIcon.style.opacity = "0.2";
  area.style.width = "0";
  area.style.height = "0";
  areaIcon.style.opacity = "0.2";
}

function setBars() {
  bars.style.width = "100%";
  bars.style.height = "100%";
  barsIcon.style.opacity = "1";
  pie.style.height = "0";
  pie.style.height = "0";
  pieIcon.style.opacity = "0.2";
  area.style.width = "0";
  area.style.height = "0";
  areaIcon.style.opacity = "0.2";
}

function setArea() {
  area.style.width = "100%";
  area.style.height = "100%";
  areaIcon.style.opacity = "1";
  bars.style.height = "0";
  bars.style.height = "0";
  barsIcon.style.opacity = "0.2";
  pie.style.height = "0";
  pie.style.height = "0";
  pieIcon.style.opacity = "0.2";
}

//event listeners for animals
function setListeners() {
  for (const animal of animals) {
    animal.addEventListener("click", () => {
      overlay2.style.width = "100%";
      overlay2.style.height = "100%";
    });
  }
  setInterval(() => {
    for (const animal of animals) {
      if (animal.classList.contains("big")) {
        animal.classList.add("small");
        animal.classList.remove("big");
      } else {
        animal.classList.add("big");
        animal.classList.remove("small");
      }
    }
  }, 500);

  for (const icon of icons) {
    icon.addEventListener("click", (e) => {
      this.closeInfos();

      if (e.path[1].classList.contains("icon1")) {
        info1.style.width = "250px";
        info1.style.height = "auto";
        info1.style.padding = "10px";
      }
      if (e.path[1].classList.contains("icon2")) {
        info2.style.width = "200px";
        info2.style.height = "auto";
        info2.style.padding = "10px";
      }
      if (e.path[1].classList.contains("icon3")) {
        info3.style.width = "250px";
        info3.style.height = "auto";
        info3.style.padding = "10px";
      }
    });
  }
}

function closeInfos() {
  info1.style.width = "0px";
  info1.style.height = "0px";
  info1.style.padding = "0px";
  info2.style.width = "0px";
  info2.style.height = "0px";
  info2.style.padding = "0px";
  info3.style.width = "0px";
  info3.style.height = "0px";
  info3.style.padding = "0px";
}
