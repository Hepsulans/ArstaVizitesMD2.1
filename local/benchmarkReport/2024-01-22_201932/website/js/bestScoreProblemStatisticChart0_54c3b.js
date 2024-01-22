
var chart_bestScoreProblemStatisticChart0_54c3b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_54c3b'), {
    type: 'line',
    data: {
        labels: [
            525, 541, 544, 600, 602, 663, 696, 701, 711, 749, 750, 751, 777, 778, 787, 790, 791, 797, 800, 801, 820, 823, 828, 829, 850, 863, 864, 866, 867, 890, 892, 897, 898, 901, 913, 915, 935, 957, 959, 971, 978, 994, 996, 997, 1020, 1022, 1096, 1099, 1108, 1109, 1121, 1123, 1135, 1163, 1180, 1181, 1194, 1228, 1281, 1296, 1318, 1348, 1361, 1364, 1410, 1413, 1419, 1453, 1478, 1492, 1583, 1585, 1597, 1625, 1630, 1649, 1667, 1700, 1727, 1729, 1799, 1866, 1919, 1927, 1942, 2027, 2104, 2164, 2236, 2300, 2361, 2416, 2470, 2524, 2570, 2616, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , -142, , , , , , , , , , , , , , -116, , , , -90, , , , , , , , , , , -74, , , , , , , -67, , , , , , -52, , , , , , , -41, , , -31, -28, , , -24, -19, -14, -12, -10, -9, -8, -7, -6, -5, -3, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -142, -136, -115, -108, -107, -86, -85, -83, -75, -75, -61, -59, -58, -58, -57, -56, -55, -53, -53, -52, -51, -51, -48, -46, -46, -45, -45, -44, , -44, -43, -42, -42, -41, -37, -37, -34, -33, -32, -32, -31, -30, , -29, -28, -26, -26, -25, -25, -24, -23, -22, -22, -21, -21, -20, -18, , -18, -17, -16, -15, -15, -14, , -14, -13, -11, -11, -10, , -10, -9, -9, -7, -6, -5, , -5, -1, , , -1, 0, , , , , , , , , , , , , 0
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
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 5000,
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
  chart_bestScoreProblemStatisticChart0_54c3b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_54c3b.resize();
});
