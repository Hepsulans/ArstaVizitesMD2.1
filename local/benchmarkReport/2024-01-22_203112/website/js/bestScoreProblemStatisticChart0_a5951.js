
var chart_bestScoreProblemStatisticChart0_a5951 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_a5951'), {
    type: 'line',
    data: {
        labels: [
            14, 15, 19, 21, 28, 35, 41, 57, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7, , , , , -5, , 0, 0
                  ]
                }, 
{
                  label: 'LAHC 20 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -7, -5, 0, , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -7, , , -5, , 0, , 0
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
                text: 'classExample25 best hard score statistic'
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
                        stepSize: 0.1
                        
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
  chart_bestScoreProblemStatisticChart0_a5951.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_a5951.resize();
});
