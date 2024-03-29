
var chart_bestScoreSummaryChart0_14c96 = new Chart(document.getElementById('chart_bestScoreSummaryChart0_14c96'), {
    type: 'bar',
    data: {
        labels: [
            'classExample250'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -406
                  ]
                }, 
{
                  label: 'LAHC 5 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -103
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -355
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Best hard score summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_bestScoreSummaryChart0_14c96.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart0_14c96.resize();
});