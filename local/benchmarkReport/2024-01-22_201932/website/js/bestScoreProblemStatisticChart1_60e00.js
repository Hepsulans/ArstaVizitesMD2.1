
var chart_bestScoreProblemStatisticChart1_60e00 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_60e00'), {
    type: 'line',
    data: {
        labels: [
            16, 25, 30, 31, 33, 38, 65, 72, 88, 96, 101, 102, 123, 127, 153, 159, 194, 201, 241, 243, 244, 253, 254, 279, 288, 311, 329, 345, 369, 377, 382, 403, 412, 413, 442, 473, 501, 527, 551, 552, 579, 590, 594, 606, 612, 631, 638, 665, 715, 772, 816, 850, 879, 884, 934, 959, 985, 1006, 1036, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -21499, , , , , -23782, -23119, , , -23054, , , , -22569, , -22442, , -22361, , -22156, , , , -21940, , -21848, , -21833, , -21098, , , -20214, , -20039, -19864, -19785, -19744, , -19707, -19653, , , , -19375, , , , -19365, -19337, -19333, -19231, -19176, , -19152, , -19117, , -18851, -18851
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -21499, -21498, -22327, -23987, , , -23807, -23661, -23273, -23175, -22332, -21811, , -21399, , -21042, -20402, -20349, , -20265, -20088, -20087, , -19839, , -19734, , -19723, , -19624, -19522, , -19402, , , , , -19369, , , -19313, -19304, -19271, , -19267, -19266, -19217, , , , , , -19213, , -19185, , -19160, , -19160
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
  chart_bestScoreProblemStatisticChart1_60e00.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_60e00.resize();
});
