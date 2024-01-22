
var chart_bestScoreDistributionSummaryChart1_b30b2 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_b30b2'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4'
        ],
        datasets: [
                {
                    label: 'Config_0 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -10307,
                                    max: -10307,
                                    q1: -10307,
                                    q3: -10307,
                                    median: -10307,
                                    mean: -10307,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -11671,
                                    max: -11671,
                                    q1: -11671,
                                    q3: -11671,
                                    median: -11671,
                                    mean: -11671,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -20989,
                                    max: -20989,
                                    q1: -20989,
                                    q3: -20989,
                                    median: -20989,
                                    mean: -20989,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -42346,
                                    max: -42346,
                                    q1: -42346,
                                    q3: -42346,
                                    median: -42346,
                                    mean: -42346,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -77022,
                                    max: -77022,
                                    q1: -77022,
                                    q3: -77022,
                                    median: -77022,
                                    mean: -77022,
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
  chart_bestScoreDistributionSummaryChart1_b30b2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_b30b2.resize();
});