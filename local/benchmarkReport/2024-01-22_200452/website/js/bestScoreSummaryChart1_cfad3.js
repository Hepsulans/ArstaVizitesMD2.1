
var chart_bestScoreSummaryChart1_cfad3 = new Chart(document.getElementById('chart_bestScoreSummaryChart1_cfad3'), {
    type: 'bar',
    data: {
        labels: [
            'classExample10', 'classExample100', 'classExample25', 'classExample5', 'classExample50'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -11902, -54752, -18851, -60902, -30392
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -58527, -18883, -57090, -31216
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -89264, -18452, -91274, -39331
                  ]
                }, 
{
                  label: 'Tabu 2 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -84971, -20242, -88374, -42153
                  ]
                }, 
{
                  label: 'Tabu 2 10',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -84971, -20242, -88374, -42153
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
  chart_bestScoreSummaryChart1_cfad3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_cfad3.resize();
});