
var chart_bestScoreDistributionSummaryChart1_99703 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_99703'), {
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
                                    min: -58604,
                                    max: -58604,
                                    q1: -58604,
                                    q3: -58604,
                                    median: -58604,
                                    mean: -58604,
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
                                    min: -68348,
                                    max: -68348,
                                    q1: -68348,
                                    q3: -68348,
                                    median: -68348,
                                    mean: -68348,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -31699,
                                    max: -31699,
                                    q1: -31699,
                                    q3: -31699,
                                    median: -31699,
                                    mean: -31699,
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
                                    min: -64401,
                                    max: -64401,
                                    q1: -64401,
                                    q3: -64401,
                                    median: -64401,
                                    mean: -64401,
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
                                    min: -67871,
                                    max: -67871,
                                    q1: -67871,
                                    q3: -67871,
                                    median: -67871,
                                    mean: -67871,
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
                    label: 'Tabu 3 300 (favorite)',
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
                                    min: -62339,
                                    max: -62339,
                                    q1: -62339,
                                    q3: -62339,
                                    median: -62339,
                                    mean: -62339,
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
                                    min: -60733,
                                    max: -60733,
                                    q1: -60733,
                                    q3: -60733,
                                    median: -60733,
                                    mean: -60733,
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
  chart_bestScoreDistributionSummaryChart1_99703.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_99703.resize();
});