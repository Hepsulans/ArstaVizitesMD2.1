
var chart_bestScoreProblemStatisticChart0_8dd23 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_8dd23'), {
    type: 'line',
    data: {
        labels: [
            100, 102, 104, 106, 107, 117, 119, 129, 130, 133, 134, 135, 155, 196, 205, 252, 289, 301, 325, 382, 408, 481, 493, 504, 552, 625, 651, 652, 673, 693, 714, 758, 799, 806, 854, 960, 963, 964, 1087, 1134, 1295, 1351, 1352, 1353, 1380, 1432, 1467, 1586, 1769, 1773, 1899, 1990, 2191, 2333, 2471, 2615, 2853, 2870, 2955, 3002, 3233, 3863, 4200, 4277, 4326, 4791, 5045, 5277, 6225, 6623, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -49, , , , , , , , , , -31, , -21, -14, , , -11, , -9, , -7, , , -7, , , -5, , -4, -2, , -2, -1, , , , , , , , , , -1, 0, , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -49, , , , , , , , , -31, , , -21, , , -14, , , , -10, , , , -9, , , , , -8, , , -8, , , , -6, -4, , , , , , -2, , , , , , , -2, -1, , , -1, , 0, , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -49, -49, , -48, , -45, -42, -37, -37, -35, -33, -29, , , , , , -26, , , , -26, , , -24, , -24, -23, , -19, , , , , , , -19, -17, -16, , , -16, -15, -15, , , , -14, -14, -13, -12, -11, -10, , , -9, -9, , -7, , -7, -6, -5, -5, -4, -3, -3, -2, -1, 0, 0
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
                text: 'Problem_3 best hard score statistic'
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
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreProblemStatisticChart0_8dd23.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_8dd23.resize();
});
