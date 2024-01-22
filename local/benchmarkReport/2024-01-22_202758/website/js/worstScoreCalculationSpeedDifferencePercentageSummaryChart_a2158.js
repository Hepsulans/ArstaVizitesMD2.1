
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a2158 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a2158'), {
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
                    2.1923281159127113, 0, 3.089147286821705, 0, 0.7626960997085633
                  ]
                }, 
{
                  label: 'LAHC 20',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 6.481481481481481, 0, 51.32308467741935, 0
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    7.95003413659696, 9.061930783242259, 0.2868217054263566, 65.86441532258065, 0.6944875054256836
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a2158.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a2158.resize();
});