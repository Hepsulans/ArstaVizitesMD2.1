
var chart_bestScoreProblemStatisticChart0_a01d1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_a01d1'), {
    type: 'line',
    data: {
        labels: [
            491, 511, 524, 526, 540, 571, 573, 590, 637, 654, 668, 672, 679, 712, 713, 723, 737, 738, 747, 750, 751, 756, 759, 774, 776, 777, 780, 792, 805, 806, 808, 811, 829, 831, 835, 836, 838, 845, 848, 849, 850, 863, 872, 881, 882, 891, 897, 900, 913, 914, 926, 944, 948, 954, 996, 1018, 1020, 1028, 1029, 1041, 1042, 1043, 1052, 1056, 1077, 1085, 1093, 1094, 1101, 1111, 1113, 1139, 1170, 1191, 1210, 1216, 1233, 1244, 1245, 1247, 1285, 1294, 1300, 1324, 1330, 1350, 1353, 1366, 1376, 1419, 1426, 1459, 1470, 1484, 1493, 1497, 1514, 1544, 1591, 1606, 1607, 1777, 1781, 1788, 1972, 2136, 2261, 2349, 2448, 2544, 2634, 2713, 2787, 2866, 2957, 3038, 3109, 3181, 3243, 3331, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -142, , , , , , , , , , , -116, , , , , , , , , -90, , , , , , , , , -74, , , -67, , , -52, -41, -31, -28, -24, -19, -14, -12, -10, -9, -8, -7, -6, -5, -3, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -142, -136, -115, , -108, -107, , -86, , -85, -83, -75, -75, -59, , -58, -58, -57, -56, -55, -53, -52, , -51, -51, -46, -46, -45, -45, -44, , -44, -43, -42, -42, -41, , -38, -37, -37, -34, , -33, -32, -32, -31, , -30, -29, , -28, -26, , , -26, -25, , -24, -23, -23, -22, -22, , -21, , -21, -20, -18, , , , -18, -17, -16, , -15, , -15, -14, , -14, -13, , -11, , -11, -10, , , , -10, -9, , -9, -7, -6, -5, , -5, -1, , -1, 0, , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -142, , , , -136, , , -102, , -76, , , , , , -50, , , , , , , , -40, , , , , , , , -30, , , , , , -27, , , , , -24, , , , , -23, , , -12, , , -11, -10, , , -10, , , , , , -9, , -8, , , , , -7, -6, , , , -6, , -5, , , , , , -5, , -4, , , -1, , -1, , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_a01d1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_a01d1.resize();
});
