
var chart_bestScoreProblemStatisticChart0_8ffc5 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_8ffc5'), {
    type: 'line',
    data: {
        labels: [
            507, 509, 552, 558, 562, 599, 601, 603, 624, 627, 633, 634, 636, 637, 640, 656, 658, 659, 662, 663, 666, 667, 668, 669, 671, 673, 675, 680, 685, 686, 688, 692, 693, 694, 703, 704, 707, 711, 712, 713, 714, 719, 720, 723, 727, 728, 738, 739, 740, 743, 744, 745, 747, 748, 753, 764, 765, 772, 774, 800, 803, 804, 806, 814, 815, 818, 825, 844, 845, 861, 866, 867, 887, 893, 905, 907, 919, 946, 968, 972, 978, 987, 990, 991, 995, 1004, 1020, 1031, 1036, 1039, 1043, 1051, 1065, 1071, 1087, 1100, 1115, 1116, 1126, 1145, 1147, 1149, 1203, 1231, 1243, 1249, 1253, 1263, 1302, 1350, 1351, 1396, 1398, 1438, 1444, 1484, 1486, 1492, 1500, 1536, 1570, 1584, 1629, 1764, 1855, 1907, 1957, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -153, , , , , , , -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -92, , , , , , , , , , , , , , , , , , , , , , -66, , , , , , , , , , , , -50, , , , , , , , , , , , , , , -40, , , , , , , , , , , , -35, , -32, , , , , -22, , -20, , -16, , -14, , , -13, , -12, , -11, -9, -9, -8, -1, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -153, -150, , -146, -141, -120, , -119, -119, -118, -118, -112, -105, -103, -100, -96, -96, -94, -86, -86, -83, -82, -81, -81, -79, -77, -76, -75, , -73, -73, -63, -62, -61, -58, -58, -55, -54, , -52, -51, -50, -50, -47, -47, -46, -45, -45, -44, -43, -42, -42, -41, -41, -37, -35, -35, , -34, -33, , -33, -32, -30, -29, -29, -28, -26, -26, -23, , -22, , -21, , , -20, , -19, -18, -17, -16, , -16, , -15, -15, , , -14, , -14, , -13, -12, -11, -11, -10, -10, , -9, , -9, -8, -7, -5, , -5, , -4, , -4, , -3, -3, , -2, , 0, , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -153, , , -106, , , , -98, , , , , , , , , , , , , , , , , , , , , , -72, , , , , , , , , , , , , , , , , , , , , , , , -61, , , , , -49, , , , , , , , -39, , , , , -27, , , , -17, -15, , -14, , , , , -13, , -3, , , , -2, , -1, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
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
                text: 'classExample100 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_8ffc5.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_8ffc5.resize();
});
