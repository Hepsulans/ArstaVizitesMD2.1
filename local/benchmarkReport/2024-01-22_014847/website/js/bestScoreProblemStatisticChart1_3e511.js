
var chart_bestScoreProblemStatisticChart1_3e511 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3e511'), {
    type: 'line',
    data: {
        labels: [
            7, 9, 11, 12, 13, 16, 19, 23, 34, 40, 50, 57, 66, 68, 85, 86, 87, 117, 122, 140, 152, 154, 157, 191, 216, 253, 280, 290, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , -13276, , , , -12370, , , , , -11435, , , , -11225, , , -10644, , -10248, , -9999, , , -9999
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -13276, , , , , , , -12370, , , , , , , , -12176, , , , -11212, , , , -10396, , -9999, , -9999
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -13276, , -13019, -13017, -12591, , -12178, -11935, , , -11839, -11627, -11581, -11538, , -11348, , -11079, , -10530, , , -10261, , , , , -9999, -9999
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
                text: 'Problem_1 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_3e511.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3e511.resize();
});
