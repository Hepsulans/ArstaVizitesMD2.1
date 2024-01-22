
var chart_scoreCalculationSpeedSummaryChart_65caf = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_65caf'), {
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
                    40414, 26597, 16250, 13176
                  ]
                }, 
{
                  label: 'LAHC 20',
                    borderWidth: 1
                  ,
                  data: [
                    39547, 25800, 16127, 14030
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                    borderWidth: 4
,
                  data: [
                    42691, 25874, 16239, 14370
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
  chart_scoreCalculationSpeedSummaryChart_65caf.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_65caf.resize();
});
