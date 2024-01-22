
var chart_bestScoreProblemStatisticChart1_b6503 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b6503'), {
    type: 'line',
    data: {
        labels: [
            5, 6, 7, 8, 13, 15, 17, 18, 21, 23, 27, 29, 30, 33, 34, 35, 37, 38, 39, 43, 44, 47, 48, 50, 52, 53, 54, 55, 57, 58, 59, 60, 61, 90, 98, 142, 187, 209, 240, 274, 277, 304, 315, 383, 387, 546, 630, 847, 1088, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -14879, , , , , , , , -14432, , , , , , , , , , , , , , , , , -13646, , , , , , -12954, -12518, -12128, , , -12006, , , -11902, , , , , , , -11902
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -14879, , , , , , , , , , , , -14432, , , , , , , , , , , , , , , , , , , -13524, , , , -12832, , , , , , -12396, , , -12151, -12006, -11902, -11902
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -14879, -14230, , , , -13572, -13517, -13294, , , -13293, , , , , , , , , , , -12729, -12477, , , , , , , , , , , , , , , , -12476, -12446, -12326, -12262, , , -11937, -11902, , , , -11902
                  ]
                }, 
{
                  label: 'Tabu 2 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -14879, , , , -14598, , , , -13998, , -13888, , , , -13774, -13335, -13293, , , -13185, -12539, , , , , , , -12457, , -12283, -12151, -12006, -11902, , , , , , , , , , , , , , , , , -11902
                  ]
                }, 
{
                  label: 'Tabu 2 10',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -14879, , , , -14598, , , , -13998, , , -13888, -13774, -13335, -13293, , -13185, -12539, , , , , -12457, -12421, -12283, -12006, -11902, , , , , , , , , , , , , , , , , , , , , , -11902
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'classExample10 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 100
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart1_b6503.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b6503.resize();
});
