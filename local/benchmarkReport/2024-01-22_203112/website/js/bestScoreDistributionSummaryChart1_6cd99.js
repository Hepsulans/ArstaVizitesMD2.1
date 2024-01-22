
var chart_bestScoreDistributionSummaryChart1_6cd99 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_6cd99'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample10', 'classExample100', 'classExample25', 'classExample5', 'classExample50'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500',
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
                                    min: -54752,
                                    max: -54752,
                                    q1: -54752,
                                    q3: -54752,
                                    median: -54752,
                                    mean: -54752,
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
                                    min: -60902,
                                    max: -60902,
                                    q1: -60902,
                                    q3: -60902,
                                    median: -60902,
                                    mean: -60902,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -30392,
                                    max: -30392,
                                    q1: -30392,
                                    q3: -30392,
                                    median: -30392,
                                    mean: -30392,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 20 (favorite)',
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
                                    min: -54900,
                                    max: -54900,
                                    q1: -54900,
                                    q3: -54900,
                                    median: -54900,
                                    mean: -54900,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -19160,
                                    max: -19160,
                                    q1: -19160,
                                    q3: -19160,
                                    median: -19160,
                                    mean: -19160,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -56143,
                                    max: -56143,
                                    q1: -56143,
                                    q3: -56143,
                                    median: -56143,
                                    mean: -56143,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -30248,
                                    max: -30248,
                                    q1: -30248,
                                    q3: -30248,
                                    median: -30248,
                                    mean: -30248,
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
                                    min: -57705,
                                    max: -57705,
                                    q1: -57705,
                                    q3: -57705,
                                    median: -57705,
                                    mean: -57705,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18883,
                                    max: -18883,
                                    q1: -18883,
                                    q3: -18883,
                                    median: -18883,
                                    mean: -18883,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -53057,
                                    max: -53057,
                                    q1: -53057,
                                    q3: -53057,
                                    median: -53057,
                                    mean: -53057,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -31133,
                                    max: -31133,
                                    q1: -31133,
                                    q3: -31133,
                                    median: -31133,
                                    mean: -31133,
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
  chart_bestScoreDistributionSummaryChart1_6cd99.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_6cd99.resize();
});