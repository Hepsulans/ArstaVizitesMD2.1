
var chart_scoreCalculationSpeedSummaryChart_a8506 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_a8506'), {
    type: 'line',
    data: {
        labels: [
            240, 420, 1294, 5109, 17676
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                    borderWidth: 4
,
                  data: [
                    41957, 42507, 25128, 16106, 14020
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    54538, 43063, 25446, 16201, 12412
                  ]
                }, 
{
                  label: 'LAHC 400',
                    borderWidth: 1
                  ,
                  data: [
                    49605, 39797, 24914, 15624, 13465
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
                    text: 'Problem scale (logarithmic)'
                },
                ticks: {
                },
                suggestedMin: 0,
                suggestedMax: 17676,
                type: 'logarithmic',
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
  chart_scoreCalculationSpeedSummaryChart_a8506.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_a8506.resize();
});
