
var chart_bestScoreDistributionSummaryChart1_ba596 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_ba596'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample250'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -135457,
                                    max: -135457,
                                    q1: -135457,
                                    q3: -135457,
                                    median: -135457,
                                    mean: -135457,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 5 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -130983,
                                    max: -130983,
                                    q1: -130983,
                                    q3: -130983,
                                    median: -130983,
                                    mean: -130983,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 3 300',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -131276,
                                    max: -131276,
                                    q1: -131276,
                                    q3: -131276,
                                    median: -131276,
                                    mean: -131276,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
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
  chart_bestScoreDistributionSummaryChart1_ba596.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_ba596.resize();
});