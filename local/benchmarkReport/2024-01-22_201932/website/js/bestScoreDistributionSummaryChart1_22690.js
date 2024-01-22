
var chart_bestScoreDistributionSummaryChart1_22690 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_22690'), {
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
                                    min: -64737,
                                    max: -64737,
                                    q1: -64737,
                                    q3: -64737,
                                    median: -64737,
                                    mean: -64737,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -31618,
                                    max: -31618,
                                    q1: -31618,
                                    q3: -31618,
                                    median: -31618,
                                    mean: -31618,
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
                                    min: -64150,
                                    max: -64150,
                                    q1: -64150,
                                    q3: -64150,
                                    median: -64150,
                                    mean: -64150,
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
                                    min: -67368,
                                    max: -67368,
                                    q1: -67368,
                                    q3: -67368,
                                    median: -67368,
                                    mean: -67368,
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
  chart_bestScoreDistributionSummaryChart1_22690.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_22690.resize();
});