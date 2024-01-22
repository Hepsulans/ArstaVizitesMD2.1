
var chart_bestScoreScalabilitySummaryChart1_ba2b8 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_ba2b8'), {
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
                    -11902, -18851, -30392, -54752
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -18883, -31216, -58527
                  ]
                }, 
{
                  label: 'LAHC 400',
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -18452, -39331, -89264
                  ]
                }, 
{
                  label: 'Tabu 2 200',
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -20242, -42153, -84971
                  ]
                }, 
{
                  label: 'Tabu 2 10',
                    borderWidth: 1
                  ,
                  data: [
                    -11902, -20242, -42153, -84971
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
  chart_bestScoreScalabilitySummaryChart1_ba2b8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_ba2b8.resize();
});
