
var chart_bestScoreProblemStatisticChart1_a8155 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_a8155'), {
    type: 'line',
    data: {
        labels: [
            14, 15, 19, 21, 28, 35, 41, 57, 61, 62, 78, 84, 86, 88, 91, 92, 105, 113, 119, 121, 143, 149, 152, 166, 183, 184, 191, 194, 200, 217, 236, 239, 248, 249, 255, 270, 283, 287, 302, 316, 325, 337, 345, 360, 366, 369, 379, 387, 401, 405, 411, 413, 436, 443, 458, 467, 495, 502, 525, 552, 553, 580, 589, 593, 597, 610, 615, 636, 643, 673, 721, 756, 761, 788, 820, 850, 894, 899, 908, 955, 961, 977, 1012, 1037, 1234, 1362, 1621, 1779, 1809, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -21499, , , , , -23782, , -23119, , , , , , -23054, , , , , -22569, , , , -22442, , , , , -22361, , , -22156, , , , , -21940, , , -21848, , , -21833, , , , -21098, , , , -20214, , , -20039, , , -19864, -19785, , -19744, , -19707, -19653, , , , , -19375, , , , -19365, -19337, , -19333, -19231, -19176, , , -19152, , -19117, , -18851, , , , , , , -18851
                  ]
                }, 
{
                  label: 'LAHC 20 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -21499, -22327, -23987, , , , , , -23807, -23661, , -23273, , -23175, -22332, , -21811, , , -21399, , , , -21042, , -20402, , , , -20349, -20265, -20088, -20087, , , -19839, , , , -19734, , , , -19723, , -19624, , -19522, , -19402, , , , , , , , , -19369, , , , -19313, -19304, -19271, , -19267, -19266, -19217, , , , , , , , -19213, , , , -19185, , -19160, , , , , , -19160
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -21499, , , -23782, , -24102, , -22862, , , -22706, , , , , -22619, , , -22470, , -22416, , -21864, , -21856, , , -21813, -21573, -21486, , , , -20407, -20135, , -19960, -19882, -19783, , , -19778, -19756, , , , -19742, , , , -19499, , -19462, -19384, , , -19206, , , , , -19164, , , , , , , , , , -19103, , , , -19092, , , -19028, , , , , -19027, -19011, -19010, -18992, -18883, -18883
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
                suggestedMax: 10000,
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
  chart_bestScoreProblemStatisticChart1_a8155.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_a8155.resize();
});
