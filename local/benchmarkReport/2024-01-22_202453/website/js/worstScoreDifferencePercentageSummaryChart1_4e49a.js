
var chart_worstScoreDifferencePercentageSummaryChart1_4e49a = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_4e49a'), {
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
                    0, 8.437020089635503, 1.6127348643006263, 0.515684165549351, 0
                  ]
                }, 
{
                  label: 'LAHC 20',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 4.577431464714976
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, , , , 
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
  chart_worstScoreDifferencePercentageSummaryChart1_4e49a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_4e49a.resize();
});