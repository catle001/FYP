let green = "#00d6b4", pink = "#d048b6", blue = "#1f8ef1", white="#fff";

let randomNumber = function(){
    const min = 1;
    const max = 100;
    var rand = Math.ceil(min + Math.random() * (max - min));
    return rand;
  };

let minMaxRand = function(min,max){
  var rand = Math.ceil(min + Math.random() * (max - min));
  return rand;
};

//line chart
const polarChart = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke1.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke1.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke2.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke2.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke3.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke3.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
      labels: ["2019","2018", "2017"],
      datasets: [
        {
          label: "Average Score",
          fill: true,
          backgroundColor: [gradientStroke3,gradientStroke2,gradientStroke1],
          borderColor: [pink,blue,green],
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: [green,blue,pink],
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: [green,blue,pink],
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90,75,50]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
          position: 'right',
    },
    scale: {
      ticks: {
        display: false
      }
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
  }
};


//bubble chart

var data2017 = [];
var data2018 = [];
var data2019 = [];

for (var i = 1; i <=12 ; i++) {
  data2017.push({
        x: i,
        y: 2017,
        r: Math.abs(minMaxRand(10,60)) / 5,
      });
  data2018.push({
        x: i,
        y: 2018,
        r: Math.abs(minMaxRand(20,80)) / 5,
      })
  if(i<=8){
    data2019.push({
          x: i,
          y: 2019,
          r: Math.abs(minMaxRand(40,100)) / 4.8,
        });
  }
};

var bubbleChartData = canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke1.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke1.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke2.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke2.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke3.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke3.addColorStop(0, "rgba(119,52,169,0)"); //purple colors


    return {
      datasets: [
      {
        label: '2017',
        backgroundColor: gradientStroke1,
        hoverBackgroundColor: gradientStroke1,
        borderColor: green,
        borderWidth: 2,
        hoverBorderWidth:2,
        data: data2017
      },
      {
        label: '2018',
        backgroundColor: gradientStroke2,
        hoverBackgroundColor: gradientStroke2,
        borderColor: blue,
        borderWidth: 2,
        hoverBorderWidth:2,
        data: data2018
      },
      {
        label: '2019',
        backgroundColor: gradientStroke3,
        hoverBackgroundColor: gradientStroke3,
        borderColor: pink,
        borderWidth: 2,
        hoverBorderWidth:2,
        data: data2019
      }      ]
    }
  };

const bubbleChart = {
  data: bubbleChartData,
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    layout: {
        padding: {
            top: 20,
            right: 20
        }
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 2019,
            min:2017,
            stepSize: 1,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            suggestedMax: 12,
            stepSize: 1,
            padding: 30,
            fontColor: "#9e9e9e",
            callback: function(value, index, values) {
                        return 'Wk' + value;
                    }
          }
        }
      ]
    }
  }
};

module.exports = {
  polarChart,
  bubbleChart
};
