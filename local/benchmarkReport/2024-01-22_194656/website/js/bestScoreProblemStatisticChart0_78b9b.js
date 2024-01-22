
var chart_bestScoreProblemStatisticChart0_78b9b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_78b9b'), {
    type: 'line',
    data: {
        labels: [
            546, 561, 563, 702, 704, 720, 770, 828, 902, 986, 987, 989, 1010, 1011, 1067, 1143, 1305, 1404, 1424, 1456, 1619, 1620, 1642, 1670, 1671, 1672, 1673, 1716, 1743, 1809, 1827, 1904, 1907, 1909, 1954, 1955, 1956, 2019, 2093, 2185, 2195, 2196, 2318, 2322, 2405, 2431, 2544, 2583, 2642, 2682, 2721, 2725, 2796, 2800, 2811, 2862, 2880, 2969, 3000, 3001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , -142, -116, , , -90, , , -74, , , , , , , , -67, , , , , , , -52, , -41, , , -31, , , -28, -24, , -19, , -14, , , -12, , , -10, -9, -8, -8
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -142, , , , , , , , -109, , , , -67, , , , , , , , , , -58, , , , , , , , , -39, , , , , , -31, , , , -22, , , , , , , , -17, , , -16, -16
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -142, -136, -115, -113, -113, -102, , -100, -97, -89, -88, -85, -74, -73, , , , -67, , , -65, -63, , -63, -61, -59, -59, -58, , -51, , -50, -49, -48, -47, -46, -42, , -41, , -41, -39, , , -39, , , , , -38, , -38, -37, , -36, , , , -36, 
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
  chart_bestScoreProblemStatisticChart0_78b9b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_78b9b.resize();
});
