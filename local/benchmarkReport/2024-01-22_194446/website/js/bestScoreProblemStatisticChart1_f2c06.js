
var chart_bestScoreProblemStatisticChart1_f2c06 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_f2c06'), {
    type: 'line',
    data: {
        labels: [
            523, 537, 540, 674, 675, 677, 695, 741, 787, 843, 901, 903, 917, 918, 998, 1077, 1246, 1318, 1346, 1382, 1525, 1526, 1570, 1575, 1576, 1577, 1578, 1595, 1620, 1701, 1759, 1800, 1803, 1805, 1816, 1842, 1844, 1845, 1954, 1996, 2099, 2100, 2120, 2250, 2305, 2324, 2344, 2485, 2585, 2601, 2605, 2630, 2682, 2702, 2717, 2765, 2840, 2906, 2926, 2933, 2960, 3000, 3001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , -46606, -53354, , , -60147, , , -61175, , , , , , , , -61175, , , , , , , , -66684, , , , -66719, -66719, , , -67001, -68152, , -69502, , , -69502, , , -69509, -70837, , , -70897, , , -74247
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -46606, , , , , , , -54296, , , , -60229, , , , , , , , , -60229, , , , , , , -65602, , , , , , , , , , , -65602, , , , , -65471, , , , , , , , -65237, , , -65339, 
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -46606, -52581, -60368, -120517, -119585, -118182, -124355, , -124973, -120358, -124242, -124855, -121276, -119016, , , , -118047, , , -116938, -116893, , -114466, -114154, -113259, -112623, , -121476, -116338, , -113167, -114847, -113149, , -111521, -113556, -115088, , -108608, -108286, -109974, , , -108228, , , , -111358, , , -107120, , -111877, -108351, , , -109497, , , -105607, -105607, 
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'classExample5 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 10
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 3001,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                type: 'linear',
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
  chart_bestScoreProblemStatisticChart1_f2c06.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_f2c06.resize();
});
