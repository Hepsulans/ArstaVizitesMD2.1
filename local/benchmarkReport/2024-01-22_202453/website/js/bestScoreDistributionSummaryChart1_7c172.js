
var chart_bestScoreDistributionSummaryChart1_7c172 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_7c172'), {
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
                                    min: -58430,
                                    max: -58430,
                                    q1: -58430,
                                    q3: -58430,
                                    median: -58430,
                                    mean: -58430,
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
                                    min: -67521,
                                    max: -67521,
                                    q1: -67521,
                                    q3: -67521,
                                    median: -67521,
                                    mean: -67521,
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
                                    min: -63814,
                                    max: -63814,
                                    q1: -63814,
                                    q3: -63814,
                                    median: -63814,
                                    mean: -63814,
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
                                null
                            , 
                                null
                            , 
                                null
                            , 
                                null
                            
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
  chart_bestScoreDistributionSummaryChart1_7c172.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_7c172.resize();
});