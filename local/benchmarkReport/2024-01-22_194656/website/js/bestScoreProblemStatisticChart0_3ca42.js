
var chart_bestScoreProblemStatisticChart0_3ca42 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_3ca42'), {
    type: 'line',
    data: {
        labels: [
            517, 527, 534, 535, 550, 608, 615, 689, 690, 691, 693, 695, 733, 740, 821, 823, 826, 929, 932, 933, 935, 954, 958, 977, 984, 1046, 1096, 1136, 1137, 1158, 1235, 1238, 1241, 1273, 1313, 1363, 1407, 1456, 1502, 1505, 1506, 1550, 1595, 1642, 1656, 1657, 1658, 1660, 1694, 1695, 1696, 1716, 1787, 1796, 1879, 1932, 1940, 1983, 2085, 2103, 2104, 2105, 2106, 2185, 2202, 2227, 2290, 2291, 2309, 2412, 2429, 2436, 2437, 2624, 2680, 2681, 2683, 2793, 2796, 2922, 2923, 2954, 3000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -153, , , , , -106, , , , , , , -92, , , , -66, -50, , , , , , , , -40, , , , -35, , , -32, , -22, -20, -16, -14, , -13, , -12, -11, -9, , , , , , , , , -9, , -8, -1, , 0, , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -153, , , , , , , , , -104, , , , , , , , , , -63, , , , , , , , , , -36, , , , , -28, , , , , , , , , , , , , -18, , , , , -15, , , , , , , -13, , , , , , , -10, , , , , -8, , , , , , -7, -6
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -153, -152, -150, , , -148, -133, -128, -128, -127, -126, , , -124, -124, , , -122, -121, -117, -116, -106, , -101, , -99, -98, -90, , -85, -83, , , , , , , , , -81, , , , -79, -78, -73, -71, -67, -66, -64, , , -62, , , , , -61, -60, -57, -57, -55, , -54, -53, -53, -52, -52, -50, , -48, -46, -46, -44, , -43, -43, -42, -40, -39, , -39
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
                text: 'classExample100 best hard score statistic'
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
                suggestedMax: 3000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreProblemStatisticChart0_3ca42.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_3ca42.resize();
});
