
var chart_bestScoreProblemStatisticChart0_2a1c3 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_2a1c3'), {
    type: 'line',
    data: {
        labels: [
            487, 493, 494, 512, 536, 538, 540, 565, 570, 571, 574, 575, 578, 594, 595, 596, 599, 600, 603, 605, 606, 607, 608, 610, 611, 616, 621, 622, 629, 630, 631, 640, 643, 647, 648, 649, 650, 655, 657, 660, 664, 665, 675, 677, 679, 680, 681, 684, 689, 699, 700, 701, 707, 709, 721, 739, 740, 750, 751, 754, 761, 779, 780, 796, 801, 802, 814, 827, 841, 903, 914, 920, 923, 926, 927, 941, 959, 965, 979, 999, 1027, 1028, 1045, 1055, 1073, 1075, 1129, 1136, 1169, 1175, 1178, 1188, 1216, 1274, 1286, 1320, 1334, 1364, 1379, 1409, 1410, 1424, 1426, 1474, 1491, 1519, 1565, 1612, 1748, 1840, 1892, 1946, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -153, , , , , , , , , , , , , , , , , , , -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -92, , , , , , , , , , , , -66, , , , , -50, , , , , , , , , -40, , , , , , , -35, , , , , -32, , -22, , -20, , -16, , , , -14, -13, , -12, -11, -9, -9, -8, -1, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -153, -152, -150, , -146, -141, -120, -119, -119, -118, -118, -112, -105, -103, -100, -96, -96, -94, -86, -83, -82, -82, -81, -81, -79, -77, -76, -75, -73, -65, -63, -61, -58, -58, -56, -54, -54, -52, -51, -50, -50, -47, -46, -45, -45, -44, -43, -42, -41, -41, -38, -37, -35, -35, , -34, -33, -33, -32, -30, -29, -29, -28, -26, -26, -23, , -22, -21, -20, -19, , -18, -17, -16, -16, -15, -15, -14, -14, , -13, -11, -11, -10, -10, -9, , -9, -8, -7, -5, , -5, , -4, , -4, , -3, -3, -2, , , 0, , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_2a1c3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_2a1c3.resize();
});
