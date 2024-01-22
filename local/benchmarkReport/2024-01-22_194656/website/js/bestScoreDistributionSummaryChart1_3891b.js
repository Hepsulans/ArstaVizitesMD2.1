
var chart_bestScoreDistributionSummaryChart1_3891b = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_3891b'), {
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
                                    min: -11902,
                                    max: -11902,
                                    q1: -11902,
                                    q3: -11902,
                                    median: -11902,
                                    mean: -11902,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -68585,
                                    max: -68585,
                                    q1: -68585,
                                    q3: -68585,
                                    median: -68585,
                                    mean: -68585,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18851,
                                    max: -18851,
                                    q1: -18851,
                                    q3: -18851,
                                    median: -18851,
                                    mean: -18851,
                                    items: [],
                                    outliers: [],
                                }
                            , 
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
                            , 
                                {
                                    min: -32422,
                                    max: -32422,
                                    q1: -32422,
                                    q3: -32422,
                                    median: -32422,
                                    mean: -32422,
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
                                    min: -11902,
                                    max: -11902,
                                    q1: -11902,
                                    q3: -11902,
                                    median: -11902,
                                    mean: -11902,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -65551,
                                    max: -65551,
                                    q1: -65551,
                                    q3: -65551,
                                    median: -65551,
                                    mean: -65551,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -19258,
                                    max: -19258,
                                    q1: -19258,
                                    q3: -19258,
                                    median: -19258,
                                    mean: -19258,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -65272,
                                    max: -65272,
                                    q1: -65272,
                                    q3: -65272,
                                    median: -65272,
                                    mean: -65272,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -33689,
                                    max: -33689,
                                    q1: -33689,
                                    q3: -33689,
                                    median: -33689,
                                    mean: -33689,
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
                                    min: -11902,
                                    max: -11902,
                                    q1: -11902,
                                    q3: -11902,
                                    median: -11902,
                                    mean: -11902,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -106745,
                                    max: -106745,
                                    q1: -106745,
                                    q3: -106745,
                                    median: -106745,
                                    mean: -106745,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -20747,
                                    max: -20747,
                                    q1: -20747,
                                    q3: -20747,
                                    median: -20747,
                                    mean: -20747,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -108351,
                                    max: -108351,
                                    q1: -108351,
                                    q3: -108351,
                                    median: -108351,
                                    mean: -108351,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -46545,
                                    max: -46545,
                                    q1: -46545,
                                    q3: -46545,
                                    median: -46545,
                                    mean: -46545,
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
  chart_bestScoreDistributionSummaryChart1_3891b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_3891b.resize();
});