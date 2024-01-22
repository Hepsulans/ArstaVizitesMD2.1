
var chart_bestScoreProblemStatisticChart0_2d89f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_2d89f'), {
    type: 'line',
    data: {
        labels: [
            84, 86, 87, 102, 109, 111, 129, 149, 156, 159, 165, 166, 170, 171, 172, 173, 179, 180, 191, 192, 193, 199, 200, 204, 208, 219, 220, 251, 256, 262, 263, 279, 302, 326, 335, 378, 387, 396, 419, 422, 465, 476, 483, 485, 489, 534, 593, 672, 738, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -48, , , , , -33, , , , , , , , , , , , , , -29, , , , , , , , , -21, , , , , -7, , , , , -5, , , , , , -3, -1, -1, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -48, , -47, -41, , -22, , , -20, -19, -19, -18, -18, -17, -15, -14, -14, -12, -12, -11, , -11, -10, -10, -9, -9, -8, , -8, -7, -6, , , -5, , -5, -4, , , , -4, -3, -2, -2, 0, , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -48, , , , -33, , , -15, , , , , , , , , , , , , , -9, , , , , , -6, , , , -4, -3, , , , , -3, 0, , , , , , , , , , , 0
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
                text: 'classExample50 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_2d89f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_2d89f.resize();
});
