
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9ac8d = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9ac8d'), {
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
                    6.10372779711839, 0, 3.668249048609204, 0, 1.8216981720631358
                  ]
                }, 
{
                  label: 'LAHC 20 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 1.0903785610074483, 0, 32.402234636871505, 0
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.850811882194496, 5.544037472164632, 1.05143395190082, 31.480936979319807, 4.510574583567284
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
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9ac8d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9ac8d.resize();
});