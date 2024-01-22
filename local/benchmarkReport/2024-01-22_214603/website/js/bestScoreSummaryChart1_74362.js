
var chart_bestScoreSummaryChart1_74362 = new Chart(document.getElementById('chart_bestScoreSummaryChart1_74362'), {
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
                    -134161
                  ]
                }, 
{
                  label: 'LAHC 50',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -186939
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                  grouped: true,
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
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score summary (higher is better)'
            }
        },
        scales: {
            x: {
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
  chart_bestScoreSummaryChart1_74362.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_74362.resize();
});