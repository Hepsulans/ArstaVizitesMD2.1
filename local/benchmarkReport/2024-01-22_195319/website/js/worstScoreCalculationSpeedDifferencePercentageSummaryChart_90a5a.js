
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_90a5a = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_90a5a'), {
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
                    6.7233443167240985, 11.59360917656698, 6.952686447473938, 0, 4.742112223691668
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.828986090499786, 3.9492011470708723, 6.19887730553328, 18.952234206471495, 6.574721330058568
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 1.6519647153167603, 67.65653452864548, 0
                  ]
                }, 
{
                  label: 'Tabu 2 200 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    3.8508941821566016, 17.18967636214666, 0, 98.48718307886259, 2.6135147049562315
                  ]
                }, 
{
                  label: 'Tabu 2 10 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    4.643207485474256, 18.96763621466612, 4.474739374498797, 100.88247653733016, 3.8604446123811322
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_90a5a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_90a5a.resize();
});