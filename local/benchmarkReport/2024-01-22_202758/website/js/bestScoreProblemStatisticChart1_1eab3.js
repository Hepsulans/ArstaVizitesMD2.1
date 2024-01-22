
var chart_bestScoreProblemStatisticChart1_1eab3 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_1eab3'), {
    type: 'line',
    data: {
        labels: [
            6, 8, 9, 14, 15, 22, 24, 25, 28, 29, 30, 36, 43, 49, 59, 63, 75, 76, 79, 84, 89, 96, 102, 106, 113, 147, 174, 175, 193, 209, 221, 230, 275, 316, 5000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -14879, , , , , -14432, , , , , , -13646, , , , , , , , , -12954, , -12518, , , -12128, , , , -12006, -11902, -11902
                  ]
                }, 
{
                  label: 'LAHC 20',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -14879, -14230, , , -14193, -14181, , , -14145, -13926, , -13738, , , , -13303, , -13252, -12583, , -12187, , , -12180, , -11937, -11902, , , , , , , -11902
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -14879, , , , -14650, , , -13975, , , , -13424, , -13053, , -12742, , -12414, , , -12291, , -12180, , , , , , , -12041, -11937, -11902, , , -11902
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
                text: 'classExample10 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_1eab3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_1eab3.resize();
});
