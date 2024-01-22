
var chart_worstScoreDifferencePercentageSummaryChart1_e8ae9 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_e8ae9'), {
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
                    19.13181450767895
                  ]
                }, 
{
                  label: 'LAHC 30',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    21.53519144986977
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
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
                },
                ticks: {
                        stepSize: 0.1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_e8ae9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_e8ae9.resize();
});