
var chart_scoreCalculationSpeedSummaryChart_3ce1a = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_3ce1a'), {
    type: 'line',
    data: {
        labels: [
            240
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                    borderWidth: 4
,
                  data: [
                    46531
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    54993
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    49237
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
                        stepSize: 1
                        
                },
                suggestedMin: 0,
                suggestedMax: 240,
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
  chart_scoreCalculationSpeedSummaryChart_3ce1a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_3ce1a.resize();
});
