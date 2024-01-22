
var chart_worstScoreDifferencePercentageSummaryChart0_cb76f = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart0_cb76f'), {
    type: 'bar',
    data: {
        labels: [
            'classExample10', 'classExample100', 'classExample25', 'classExample5', 'classExample50'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 100, 0, 74.28571428571429, 100
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 84.21052631578947, 0, 51.42857142857142, 100
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 2 200 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 94.73684210526315, 0, 97.14285714285714, 66.66666666666666
                  ]
                }, 
{
                  label: 'Tabu 2 10 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 94.73684210526315, 0, 97.14285714285714, 66.66666666666666
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
                text: 'Worst hard score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst hard score difference percentage'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart0_cb76f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart0_cb76f.resize();
});