
var chart_bestScoreProblemStatisticChart1_3d8b2 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3d8b2'), {
    type: 'line',
    data: {
        labels: [
            546, 561, 563, 702, 704, 720, 770, 828, 902, 986, 987, 989, 1010, 1011, 1067, 1143, 1305, 1404, 1424, 1456, 1619, 1620, 1642, 1670, 1671, 1672, 1673, 1716, 1743, 1809, 1827, 1904, 1907, 1909, 1954, 1955, 1956, 2019, 2093, 2185, 2195, 2196, 2318, 2405, 2431, 2544, 2583, 2642, 2682, 2721, 2724, 2725, 2796, 2800, 2811, 2862, 2880, 2969, 3000, 3001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , -46606, -53354, , , -60147, , , -61175, , , , , , , , -61175, , , , , , , -66684, , -66719, , , -66719, , -67001, -68152, , -69502, , -69502, , , , -69509, , , -70837, -70897, -74247, -74247
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -46606, , , , , , , , -54296, , , , -60229, , , , , , , , , , -60229, , , , , , , , , -65602, , , , , , , , , -65602, , , , , , , , , -65471, , , -65272, -65272
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -46606, -52581, -60368, -119585, -118182, -124355, , -124973, -120358, -123410, -124242, -124855, -119597, -119016, , , , -118047, , , -116938, -116893, , -116016, -114466, -113259, -112623, -121476, , -116338, , -113167, -114847, -113149, -111521, -113556, -115088, , -108608, , -108286, -109974, , -108228, , , , , -111358, , -107667, -107120, -111877, , -108351, , , , -108351, 
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
  chart_bestScoreProblemStatisticChart1_3d8b2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3d8b2.resize();
});
