
var chart_bestScoreDistributionSummaryChart0_e2d0f = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_e2d0f'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample10', 'classExample100', 'classExample25', 'classExample5', 'classExample50'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -8,
                                    max: -8,
                                    q1: -8,
                                    q3: -8,
                                    median: -8,
                                    mean: -8,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6,
                                    max: -6,
                                    q1: -6,
                                    q3: -6,
                                    median: -6,
                                    mean: -6,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -16,
                                    max: -16,
                                    q1: -16,
                                    q3: -16,
                                    median: -16,
                                    mean: -16,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -39,
                                    max: -39,
                                    q1: -39,
                                    q3: -39,
                                    median: -39,
                                    mean: -39,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -36,
                                    max: -36,
                                    q1: -36,
                                    q3: -36,
                                    median: -36,
                                    mean: -36,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -9,
                                    max: -9,
                                    q1: -9,
                                    q3: -9,
                                    median: -9,
                                    mean: -9,
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
  chart_bestScoreDistributionSummaryChart0_e2d0f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_e2d0f.resize();
});