
var chart_bestScoreProblemStatisticChart0_71675 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_71675'), {
    type: 'line',
    data: {
        labels: [
            523, 537, 540, 674, 677, 695, 741, 787, 843, 901, 903, 917, 918, 998, 1077, 1246, 1318, 1346, 1382, 1525, 1526, 1570, 1575, 1576, 1578, 1595, 1620, 1701, 1759, 1800, 1803, 1805, 1816, 1842, 1844, 1845, 1954, 1996, 2064, 2099, 2100, 2120, 2250, 2305, 2324, 2344, 2485, 2585, 2601, 2605, 2630, 2682, 2702, 2717, 2765, 2840, 2906, 2926, 2933, 3000, 3001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , -142, -116, , , -90, , , -74, , , , , , , -67, , , , , , , , -52, , , , , -41, -31, , , -28, -24, , -19, , , -14, , , -12, -10, , , -9, , -8
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -142, , , , , , , -109, , , , -67, , , , , , , , -58, , , , , , , -39, , , , , , -31, , , , , , -22, , , , , -17, , , , , , , , -16, , -14, 
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -142, -136, -115, -113, -113, -102, , -100, -97, -88, -85, -75, -73, , , , -67, , , -65, -63, , -61, -59, -59, , -58, -51, , -50, -49, -48, , -47, -46, -42, , -41, , -41, -39, , , -39, , , , -38, , , -38, , -37, -36, , , -35, , , -35, 
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
                text: 'classExample5 best hard score statistic'
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
                        stepSize: 10
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 3001,
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
  chart_bestScoreProblemStatisticChart0_71675.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_71675.resize();
});
