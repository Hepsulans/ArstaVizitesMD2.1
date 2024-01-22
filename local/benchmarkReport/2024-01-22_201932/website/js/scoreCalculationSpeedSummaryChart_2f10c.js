
var chart_scoreCalculationSpeedSummaryChart_2f10c = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_2f10c'), {
    type: 'line',
    data: {
        labels: [
            420, 1294, 5109, 17676
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                    borderWidth: 4
,
                  data: [
                    43675, 27166, 16973, 13117
                  ]
                }, 
{
                  label: 'LAHC 20',
                    borderWidth: 1
                  ,
                  data: [
                    40840, 25963, 16744, 14193
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
  chart_scoreCalculationSpeedSummaryChart_2f10c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_2f10c.resize();
});
