
var chart_bestScoreProblemStatisticChart1_169ca = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_169ca'), {
    type: 'line',
    data: {
        labels: [
            15, 19, 20, 22, 36, 58, 62, 77, 85, 90, 91, 112, 122, 142, 154, 180, 187, 196, 232, 235, 236, 244, 245, 271, 279, 302, 322, 337, 362, 369, 375, 396, 397, 404, 407, 408, 436, 466, 494, 520, 546, 572, 585, 589, 603, 606, 628, 635, 664, 710, 744, 776, 807, 836, 885, 892, 944, 963, 996, 1018, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -21499, , , , -23782, -23119, , , , -23054, , , -22569, , -22442, , , -22361, , , -22156, , , -21940, , -21848, , -21833, , -21098, , , , -20214, , , -20039, -19864, -19785, -19744, -19707, -19653, , , , -19375, , , , -19365, -19337, -19333, -19231, -19176, , -19152, -19117, , -18851, , -18851
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -21499, -21498, -22327, -23987, , , -23807, -23661, -23273, , -22332, -21811, , -21399, , -21042, -20402, , -20349, -20265, , -20088, -20087, , -19839, , -19734, , -19723, , -19624, -19542, -19522, , -19446, -19402, , , , , -19369, , -19313, -19304, -19271, , -19267, -19266, -19217, , , , , , -19213, , , -19185, , -19160, -19160
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
  chart_bestScoreProblemStatisticChart1_169ca.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_169ca.resize();
});
