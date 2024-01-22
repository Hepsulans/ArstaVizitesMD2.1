
var chart_bestScoreProblemStatisticChart1_16e2e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_16e2e'), {
    type: 'line',
    data: {
        labels: [
            14, 15, 20, 22, 36, 54, 59, 91, 120, 123, 156, 186, 195, 236, 260, 271, 304, 338, 339, 372, 408, 418, 439, 470, 499, 517, 524, 551, 577, 582, 612, 639, 716, 752, 763, 786, 818, 848, 880, 908, 967, 989, 1009, 1018, 1030, 1069, 1103, 1109, 1126, 1127, 1363, 1364, 1562, 1665, 1713, 1771, 1875, 1975, 2095, 2218, 2275, 2281, 2293, 2337, 2893, 3000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -21499, , , -23782, , -23119, -23054, , -22569, -22442, , -22361, -22156, , -21940, -21848, , -21833, -21098, -20214, , -20039, -19864, -19785, , -19744, -19707, -19653, , -19375, , -19365, -19337, , -19333, -19231, -19176, , -19152, -19117, , , , -18851, , , , , , , , , , , , , , , , , , , , , -18851
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -21499, , , , , -24603, , , -24243, , , -23684, , , -23492, , , -23286, , , , -22612, , , , -22305, , , , , , -22052, , , -21893, , , , -21838, , , , , -21717, , , , , -21708, , , , -21404, -20192, , -20127, -20064, -19887, -19811, -19557, , , , -19503, -19382, -19258
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -21499, -22327, -23987, , , , , , , , , , , , , , , , , , , , , , , , , , -23553, , , , , , , , , , , , -23551, -23273, , , -23171, -23137, -22627, , -22089, -22087, -21771, , , -21351, , , , , , -21135, -21105, -20747, , , -20747
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
                text: 'classExample25 best soft score statistic'
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
                suggestedMax: 3000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 100
                        
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
  chart_bestScoreProblemStatisticChart1_16e2e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_16e2e.resize();
});
