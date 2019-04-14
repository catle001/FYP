let green = "#00d6b4", pink = "#d048b6", blue = "#1f8ef1", white="#fff";

let randomNumber = function(){
    const min = 1;
    const max = 100;
    var rand = Math.ceil(min + Math.random() * (max - min));
    return rand;
  };

//histogram
var histogramRawDataList = [];
for(var i=0; i<8; i++){
  histogramRawDataList.push([randomNumber(), randomNumber(), randomNumber(), 
    randomNumber(), randomNumber(), randomNumber(),
    randomNumber(),randomNumber(),randomNumber(),randomNumber()]
  );
};

var histogramDataList = [];
for(var i=0; i<8; i++){
  (function(){
    var tempData = histogramRawDataList[i];
    
    histogramDataList[i] = canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      return {
        labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90","100"],
        datasets: [
          {
            label: "Number of Students",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: tempData,
          }
        ]
      };
    };

  })(i);
};

let histogram = {
  data1 : histogramDataList[0],
  data2 : histogramDataList[1],
  data3 : histogramDataList[2],
  data4 : histogramDataList[3],
  data5 : histogramDataList[4],
  data6 : histogramDataList[5],
  data7 : histogramDataList[6],
  data8 : histogramDataList[7],
  data9 : histogramDataList[8],
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
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
            stepSize: 20,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

//pie chartvar 
var pieRawDataList = [];
for(var i=0; i<8; i++){
  (function(){
    var below = histogramRawDataList[i][0] + histogramRawDataList[i][1]+ histogramRawDataList[i][2];
    var above = 0;
    for(var j=3; j<8; j++){
      above += histogramRawDataList[i][j];
    }
    pieRawDataList[i]=[below, above]
  })(i);

};

var pieDataList = [];
for(var i=0; i<8; i++){
  (function(){
    var tempData = pieRawDataList[i];

    pieDataList[i] = canvas => {
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
        labels: ["Below benchmark", "Above benchmark"],
        datasets: [
          {
            label: "Average Score",
            fill: true,
            backgroundColor: [gradientStroke1,gradientStroke2],
            borderColor: [green,blue],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: [green,blue],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: [green,blue],
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: tempData
          }
        ]
      };
    }
  })(i);
};

const pieChart = {
  data1: pieDataList[0],
  data2: pieDataList[1],
  data3: pieDataList[2],
  data4: pieDataList[3],
  data5: pieDataList[4],
  data6: pieDataList[5],
  data7: pieDataList[6],
  data8: pieDataList[7],
  options: {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
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
    responsive: true
  }
};


module.exports = {
  pieChart,
  histogram
};