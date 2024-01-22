
var chart_worstScoreDifferencePercentageSummaryChart1_cd0cf = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_cd0cf'), {
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
                    0, 38.66284280336978, 6.871850607647466, 33.2756316146986, 27.90074253315304
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 34.43381430363864, 6.713763462108488, 37.45206740145058, 25.94595876924537
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 8.842999703586601, 0, 6.694659929305151
                  ]
                }, 
{
                  label: 'Tabu 2 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 4.809329628965765, 0, 3.17724653241887, 0
                  ]
                }, 
{
                  label: 'Tabu 2 10',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 4.809329628965765, 0, 3.17724653241887, 0
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
  chart_worstScoreDifferencePercentageSummaryChart1_cd0cf.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_cd0cf.resize();
});