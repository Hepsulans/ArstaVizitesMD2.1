
var chart_bestScoreProblemStatisticChart0_364f3 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_364f3'), {
    type: 'line',
    data: {
        labels: [
            600, 656, 716, 793, 817, 836, 840, 872, 908, 910, 928, 967, 1003, 1008, 1031, 1052, 1057, 1059, 1068, 1088, 1113, 1114, 1115, 1116, 1142, 1148, 1149, 1160, 1164, 1166, 1173, 1174, 1179, 1200, 1205, 1207, 1211, 1228, 1229, 1230, 1249, 1250, 1252, 1257, 1281, 1282, 1284, 1287, 1289, 1292, 1306, 1307, 1311, 1336, 1361, 1362, 1373, 1380, 1389, 1394, 1397, 1418, 1421, 1472, 1496, 1499, 1500, 1510, 1523, 1525, 1526, 1528, 1536, 1550, 1569, 1577, 1588, 1589, 1601, 1635, 1693, 1709, 1722, 1729, 1753, 1766, 1768, 1822, 1829, 1862, 1889, 1902, 1914, 1998, 2010, 2036, 2042, 2061, 2082, 2106, 2145, 2146, 2277, 2343, 2344, 2407, 2494, 2639, 2760, 2838, 2913, 2998, 3072, 3148, 3219, 3293, 3361, 3419, 3484, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -142, , , , , , , , , , , , , , , , , , , , , , -116, , , , , , , , , , , , , , -90, , , , , , , , , -74, , , , , , , , , , -67, , , , , , , -52, , , -41, , , -31, -28, -24, -19, -14, -12, -10, -9, -8, -7, -6, -5, -3, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -142, -136, -115, , -108, -107, , , , -86, , -85, -83, , -75, , -75, -61, -59, , , -58, -58, -57, -56, -55, -55, -53, -52, , -51, -51, -46, , -46, , -45, -45, -44, , -44, -43, , -42, -42, -41, -38, -37, -37, -34, -33, -32, -32, -31, , , -29, -28, -26, , -26, -25, , -24, -23, -23, -22, , -22, , -21, , -21, -20, -18, , -18, -17, , -16, -15, -15, -14, -14, -13, -11, -11, -10, , -10, -9, -9, -7, -6, -5, , -5, -1, , -1, 0, , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -142, -136, -102, -76, , , , -50, , , -40, -30, -27, , -24, , , -23, , -12, , , , -11, -10, , , , , , -10, , , -9, , , , , , -8, , , , -7, , , -6, , , , , , , , -6, , , , -5, , , , , -5, , , -4, , , , , -1, , , , -1, , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_364f3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_364f3.resize();
});
