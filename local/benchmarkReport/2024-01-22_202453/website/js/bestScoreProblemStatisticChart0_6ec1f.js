
var chart_bestScoreProblemStatisticChart0_6ec1f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_6ec1f'), {
    type: 'line',
    data: {
        labels: [
            707, 726, 730, 805, 807, 892, 945, 951, 961, 1008, 1009, 1010, 1044, 1045, 1056, 1061, 1062, 1070, 1071, 1075, 1080, 1101, 1103, 1107, 1125, 1143, 1146, 1150, 1185, 1186, 1192, 1194, 1200, 1225, 1226, 1230, 1254, 1260, 1290, 1292, 1312, 1321, 1343, 1344, 1371, 1376, 1396, 1472, 1475, 1487, 1503, 1506, 1507, 1520, 1561, 1585, 1586, 1597, 1700, 1715, 1737, 1750, 1760, 1773, 1775, 1827, 1833, 1863, 1888, 1900, 1943, 1993, 2005, 2030, 2035, 2053, 2071, 2097, 2133, 2135, 2228, 2315, 2322, 2337, 2456, 2570, 2656, 2735, 2810, 2888, 2984, 3076, 3149, 3219, 3278, 3339, 5000, 5001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , -142, , , , , , , , , , , , , , , , , -116, , , , , , , , , -90, , , , , , , , -74, , , , , , , -67, , , , , , , , , -52, , , , , , , -41, , , -31, , , -28, -24, -19, -14, -12, -10, -9, -8, -7, -6, -5, -3, 0, , 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -142, -136, -115, -108, -107, -86, -85, -83, -75, -75, -61, -59, -58, -58, -57, -56, -55, -55, -53, -52, , -51, -51, -46, -46, -45, -45, -44, -44, -43, -42, -42, -41, -38, -37, -37, -34, , -33, -32, -32, -31, -30, -29, -28, -26, , -26, -25, -24, -23, -23, -22, -22, -21, -21, -20, -18, -18, -17, -16, , -15, -15, -14, -14, -13, -11, -11, -10, , -10, -9, -9, -7, -6, -5, , -5, -1, , -1, 0, , , , , , , , , , , , , , 0, 
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
                suggestedMax: 5001,
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
  chart_bestScoreProblemStatisticChart0_6ec1f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_6ec1f.resize();
});
