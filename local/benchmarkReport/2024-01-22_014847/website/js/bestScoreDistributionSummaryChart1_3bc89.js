
var chart_bestScoreDistributionSummaryChart1_3bc89 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_3bc89'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -10246,
                                    max: -10246,
                                    q1: -10246,
                                    q3: -10246,
                                    median: -10246,
                                    mean: -10246,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -9999,
                                    max: -9999,
                                    q1: -9999,
                                    q3: -9999,
                                    median: -9999,
                                    mean: -9999,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18410,
                                    max: -18410,
                                    q1: -18410,
                                    q3: -18410,
                                    median: -18410,
                                    mean: -18410,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -32144,
                                    max: -32144,
                                    q1: -32144,
                                    q3: -32144,
                                    median: -32144,
                                    mean: -32144,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -60034,
                                    max: -60034,
                                    q1: -60034,
                                    q3: -60034,
                                    median: -60034,
                                    mean: -60034,
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
                                    min: -10246,
                                    max: -10246,
                                    q1: -10246,
                                    q3: -10246,
                                    median: -10246,
                                    mean: -10246,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -9999,
                                    max: -9999,
                                    q1: -9999,
                                    q3: -9999,
                                    median: -9999,
                                    mean: -9999,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18938,
                                    max: -18938,
                                    q1: -18938,
                                    q3: -18938,
                                    median: -18938,
                                    mean: -18938,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -33264,
                                    max: -33264,
                                    q1: -33264,
                                    q3: -33264,
                                    median: -33264,
                                    mean: -33264,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -59699,
                                    max: -59699,
                                    q1: -59699,
                                    q3: -59699,
                                    median: -59699,
                                    mean: -59699,
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
                                    min: -10246,
                                    max: -10246,
                                    q1: -10246,
                                    q3: -10246,
                                    median: -10246,
                                    mean: -10246,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -9999,
                                    max: -9999,
                                    q1: -9999,
                                    q3: -9999,
                                    median: -9999,
                                    mean: -9999,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18781,
                                    max: -18781,
                                    q1: -18781,
                                    q3: -18781,
                                    median: -18781,
                                    mean: -18781,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -40274,
                                    max: -40274,
                                    q1: -40274,
                                    q3: -40274,
                                    median: -40274,
                                    mean: -40274,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -90834,
                                    max: -90834,
                                    q1: -90834,
                                    q3: -90834,
                                    median: -90834,
                                    mean: -90834,
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
  chart_bestScoreDistributionSummaryChart1_3bc89.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_3bc89.resize();
});