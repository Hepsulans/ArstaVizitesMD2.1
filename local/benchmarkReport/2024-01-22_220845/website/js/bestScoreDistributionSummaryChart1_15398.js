
var chart_bestScoreDistributionSummaryChart1_15398 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_15398'), {
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
                                    min: -92036,
                                    max: -92036,
                                    q1: -92036,
                                    q3: -92036,
                                    median: -92036,
                                    mean: -92036,
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
                                    min: -203644,
                                    max: -203644,
                                    q1: -203644,
                                    q3: -203644,
                                    median: -203644,
                                    mean: -203644,
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
                                    min: -98799,
                                    max: -98799,
                                    q1: -98799,
                                    q3: -98799,
                                    median: -98799,
                                    mean: -98799,
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
  chart_bestScoreDistributionSummaryChart1_15398.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_15398.resize();
});