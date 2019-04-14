// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let green = "#00d6b4", pink = "#d048b6", blue = "#1f8ef1", white="#fff";

let randomNumber = function(){
    const min = 1;
    const max = 100;
    var rand = Math.ceil(min + Math.random() * (max - min));
    return rand;
  };

let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: 'bottom'
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 100,
          stepSize: 20,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
};


let myscore =  [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()];
let chartExample1 = {
  data2: canvas => {
    let ctx = canvas.getContext("2d");
    
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "Wk1",
        "Wk2",
        "Wk3",
        "Wk4",
        "Wk5",
        "Wk6",
        "Wk7",
        "Wk8",
        "Wk9",
        "Wk10",
        "Wk11",
        "Wk12"
      ],
      datasets: [
        {
          label: "My score",
          fill: false,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: myscore
        },
        {
          label: "Median score",
          fill: false,
          backgroundColor: gradientStroke,
          borderColor: blue,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: blue,
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: blue,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [60, 50, 40, 40, 65, 50, 55, 40]
        }
      ]
    };
  },
  options: chart1_2_options
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample2 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: chart1_2_options
};






module.exports = {
  chartExample1, // in src/views/Dashboard.jsx
};
