
var chart_bestScoreScalabilitySummaryChart1_399cb = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_399cb'), {
    type: 'line',
    data: {
        labels: [
            100126
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    -134161
                  ]
                }, 
{
                  label: 'LAHC 50',
                    borderWidth: 1
                  ,
                  data: [
                    -186939
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -131110
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
                text: 'Best soft score scalability summary (higher is better)'
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
                        stepSize: 1000
                        
                },
                suggestedMin: 0,
                suggestedMax: 100126,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
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
  chart_bestScoreScalabilitySummaryChart1_399cb.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_399cb.resize();
});
