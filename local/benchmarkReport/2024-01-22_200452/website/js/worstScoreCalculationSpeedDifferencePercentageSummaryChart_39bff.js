
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_39bff = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_39bff'), {
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
                    4.793690820539444, 3.743273187717632, 5.630701478452344, 0, 5.7623826481061835
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.9629657099063016, 0, 2.9726329034287513, 20.393685051958432, 7.43282615733247
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 7.565685343463121, 0, 34.76219024780176, 4.221430883781159
                  ]
                }, 
{
                  label: 'Tabu 2 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3.6317337882271503, 12.187401076289966, 2.1233092167348224, 38.55915267785772, 0
                  ]
                }, 
{
                  label: 'Tabu 2 10',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.4178595268115406, 12.931307375751821, 2.4142812205095945, 39.538369304556355, 1.0747814826804791
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_39bff.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_39bff.resize();
});