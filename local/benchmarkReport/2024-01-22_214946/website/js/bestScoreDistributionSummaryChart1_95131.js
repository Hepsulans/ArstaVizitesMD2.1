
var chart_bestScoreDistributionSummaryChart1_95131 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_95131'), {
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
                                    min: -135682,
                                    max: -135682,
                                    q1: -135682,
                                    q3: -135682,
                                    median: -135682,
                                    mean: -135682,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 10',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -139791,
                                    max: -139791,
                                    q1: -139791,
                                    q3: -139791,
                                    median: -139791,
                                    mean: -139791,
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
                                    min: -131276,
                                    max: -131276,
                                    q1: -131276,
                                    q3: -131276,
                                    median: -131276,
                                    mean: -131276,
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
  chart_bestScoreDistributionSummaryChart1_95131.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_95131.resize();
});