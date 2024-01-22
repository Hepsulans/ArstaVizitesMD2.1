
var chart_worstScoreDifferencePercentageSummaryChart1_409b7 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_409b7'), {
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
                    0, 36.54767309349319, 11.289411764705882, 35.203704211074275, 30.34267912772586
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 39.26695264654925, 9.374117647058823, 40.20749426924938, 27.94285100440434
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 2.367058823529412, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 2 200 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 17.68504535220924, 0, 17.564864790816188, 6.071543667418627
                  ]
                }, 
{
                  label: 'Tabu 2 10 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 17.68504535220924, 0, 17.564864790816188, 6.071543667418627
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
  chart_worstScoreDifferencePercentageSummaryChart1_409b7.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_409b7.resize();
});