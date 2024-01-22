
var chart_scoreCalculationSpeedSummaryChart_d40b1 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_d40b1'), {
    type: 'line',
    data: {
        labels: [
            420, 1294, 5109, 17676
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    42430, 26674, 16632, 13620
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    42472, 26486, 16923, 12687
                  ]
                }, 
{
                  label: 'LAHC 400',
                    borderWidth: 1
                  ,
                  data: [
                    39757, 25352, 15879, 12205
                  ]
                }, 
{
                  label: 'Tabu 2 200 (favorite)',
                    borderWidth: 4
,
                  data: [
                    41288, 24940, 16294, 14170
                  ]
                }, 
{
                  label: 'Tabu 2 10 (favorite)',
                    borderWidth: 4
,
                  data: [
                    41603, 26056, 16492, 14341
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
                text: 'Score calculation speed summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 100
                        
                },
                suggestedMin: 0,
                suggestedMax: 17676,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Score calculation speed per second'
                },
                ticks: {
                        stepSize: 1000
                        
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
  chart_scoreCalculationSpeedSummaryChart_d40b1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_d40b1.resize();
});
