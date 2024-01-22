
var chart_bestScoreDistributionSummaryChart0_3f42b = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_3f42b'), {
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
                                    min: -114,
                                    max: -114,
                                    q1: -114,
                                    q3: -114,
                                    median: -114,
                                    mean: -114,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 20',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -47,
                                    max: -47,
                                    q1: -47,
                                    q3: -47,
                                    median: -47,
                                    mean: -47,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 3 300 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -10,
                                    max: -10,
                                    q1: -10,
                                    q3: -10,
                                    median: -10,
                                    mean: -10,
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
  chart_bestScoreDistributionSummaryChart0_3f42b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_3f42b.resize();
});