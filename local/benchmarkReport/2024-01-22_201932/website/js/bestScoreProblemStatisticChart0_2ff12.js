
var chart_bestScoreProblemStatisticChart0_2ff12 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_2ff12'), {
    type: 'line',
    data: {
        labels: [
            473, 478, 479, 524, 526, 528, 553, 559, 560, 563, 564, 567, 572, 584, 586, 587, 590, 591, 594, 596, 597, 598, 599, 601, 602, 607, 612, 613, 619, 622, 631, 632, 635, 639, 640, 641, 647, 649, 652, 656, 657, 668, 670, 673, 674, 675, 677, 678, 683, 692, 693, 694, 700, 702, 733, 735, 745, 746, 749, 755, 775, 776, 787, 792, 795, 799, 824, 839, 893, 901, 911, 920, 923, 924, 938, 955, 961, 977, 998, 1014, 1031, 1046, 1057, 1076, 1078, 1130, 1134, 1180, 1181, 1184, 1194, 1214, 1282, 1288, 1328, 1339, 1372, 1386, 1418, 1420, 1435, 1436, 1487, 1503, 1536, 1583, 1631, 1773, 1868, 1922, 1975, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -153, , , , , , , , , , , -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -92, , , , , , , , , , , , , -66, , , , , , -50, , , , , , , , , , , -40, , , , , , -35, , , , , , -32, , -22, , -20, , -16, , , , -14, -13, , -12, -11, -9, -9, -8, -1, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -153, , -150, -146, -141, -120, -119, -119, -118, -118, -112, -105, , -103, -100, -96, -96, -94, -86, -83, -82, -82, -81, -81, -79, -77, -77, -75, -73, -63, -62, -61, -58, -58, -56, -54, -52, -51, -50, -50, -47, -46, -45, -44, -44, -43, -42, -42, -41, , -38, -37, -35, -35, -34, -33, -33, -32, -30, -29, -29, -28, , -26, -26, -23, -22, -21, , -20, -19, -18, -17, -16, -16, -15, -15, -14, -14, , -13, -11, -11, -10, -10, , -9, -9, -8, -7, -5, , -5, , -4, , -4, , -3, -3, -2, , , 0, , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_2ff12.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_2ff12.resize();
});
