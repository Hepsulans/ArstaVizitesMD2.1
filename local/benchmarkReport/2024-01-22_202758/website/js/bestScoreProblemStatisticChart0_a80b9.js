
var chart_bestScoreProblemStatisticChart0_a80b9 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_a80b9'), {
    type: 'line',
    data: {
        labels: [
            508, 511, 543, 549, 562, 591, 593, 595, 605, 619, 625, 626, 628, 629, 632, 633, 648, 650, 651, 654, 655, 658, 660, 661, 663, 664, 665, 671, 676, 677, 683, 684, 685, 686, 689, 695, 698, 702, 703, 704, 705, 710, 712, 715, 719, 720, 721, 727, 730, 731, 733, 735, 736, 737, 740, 745, 754, 756, 757, 765, 767, 797, 798, 799, 800, 810, 811, 812, 816, 822, 823, 841, 842, 848, 858, 863, 864, 891, 901, 921, 924, 939, 950, 980, 1002, 1003, 1013, 1024, 1027, 1028, 1029, 1044, 1050, 1062, 1068, 1072, 1075, 1082, 1094, 1103, 1132, 1147, 1157, 1175, 1177, 1188, 1231, 1269, 1278, 1279, 1282, 1292, 1342, 1380, 1392, 1425, 1437, 1469, 1485, 1515, 1517, 1531, 1536, 1583, 1596, 1628, 1675, 1814, 1909, 1962, 2012, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -153, , , , , , , -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -92, , , , , , , , , , , , , , , , , , , , , , -66, , , , , , , , , , , , -50, , , , , , , , , , , , , , , -40, , , , , , , , , -35, , -32, , , , , -22, , -20, , -16, , -14, , , , -13, -12, , -11, -9, -9, -8, -1, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -153, -150, , -146, -141, -120, , -119, -119, -118, -118, -112, -107, -105, -103, -100, -96, -96, -94, -86, -83, -82, -81, -81, -79, -77, -76, -75, -73, -73, -65, -63, , -61, -58, -58, -56, -54, -54, -52, -51, -50, -50, -48, -47, , -47, -46, -45, -45, -44, -43, -42, -41, , -41, -37, -35, -35, -34, -34, -33, , -33, -32, -32, -30, , -29, -29, -28, , -26, -26, -23, , -22, -21, , , , , -20, , -19, -18, , -17, -16, -16, , -15, -15, , , -14, , -14, -13, -11, -11, -10, -10, , -9, , -9, -8, -7, -5, , -5, , -4, , -4, , -3, -3, -2, , , 0, , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -153, , , , -106, , , , , , , -98, , , , , , , , , , , , , , , , , , , , , , , -72, , , , , , , , , , , , , , , , , , , , , , -61, , , , , , , , -49, , , , , , , , , -39, , , , -27, , , -17, , -15, -14, , -13, , , -3, , , , -2, , , -1, , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_a80b9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_a80b9.resize();
});
