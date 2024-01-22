
var chart_bestScoreDistributionSummaryChart0_50e90 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_50e90'), {
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
                                    min: -406,
                                    max: -406,
                                    q1: -406,
                                    q3: -406,
                                    median: -406,
                                    mean: -406,
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
                                    min: -103,
                                    max: -103,
                                    q1: -103,
                                    q3: -103,
                                    median: -103,
                                    mean: -103,
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
                                    min: -355,
                                    max: -355,
                                    q1: -355,
                                    q3: -355,
                                    median: -355,
                                    mean: -355,
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
                text: 'Best hard score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
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
  chart_bestScoreDistributionSummaryChart0_50e90.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_50e90.resize();
});