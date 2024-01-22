
var chart_bestScoreDistributionSummaryChart1_81372 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_81372'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample5'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -74247,
                                    max: -74247,
                                    q1: -74247,
                                    q3: -74247,
                                    median: -74247,
                                    mean: -74247,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -65339,
                                    max: -65339,
                                    q1: -65339,
                                    q3: -65339,
                                    median: -65339,
                                    mean: -65339,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -105607,
                                    max: -105607,
                                    q1: -105607,
                                    q3: -105607,
                                    median: -105607,
                                    mean: -105607,
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
  chart_bestScoreDistributionSummaryChart1_81372.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_81372.resize();
});