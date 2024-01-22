
var chart_bestScoreProblemStatisticChart1_2b5f8 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_2b5f8'), {
    type: 'line',
    data: {
        labels: [
            82, 83, 87, 97, 124, 138, 181, 186, 210, 255, 266, 270, 282, 329, 350, 360, 361, 367, 368, 372, 442, 465, 481, 525, 590, 616, 659, 678, 730, 752, 811, 855, 867, 871, 917, 919, 957, 978, 986, 1006, 1016, 1046, 1049, 1081, 1117, 1140, 1153, 1189, 1223, 1226, 1269, 1286, 1307, 1346, 1385, 1423, 1449, 1465, 1471, 1472, 1508, 1550, 1564, 1589, 1628, 1665, 1675, 1704, 1748, 1780, 1781, 1792, 1835, 1844, 1847, 1933, 1935, 1963, 1980, 1996, 2003, 2042, 2085, 2117, 2143, 2156, 2216, 2240, 2257, 2283, 2362, 2367, 2414, 2479, 2496, 2538, 2580, 2581, 2591, 2592, 2654, 2662, 2712, 2825, 2872, 2917, 2929, 2965, 3000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -32691, , , , -34260, , , -33939, , -37289, , , , -39641, , , , , , , , , , -39641, -39122, , , -38390, , -38004, -37463, , -37109, , -36478, , -36042, , , -35742, , -35708, , -35558, -35275, , -35262, -35248, , -35134, -35007, , -34914, -34718, -34376, -34330, , -34156, , , -33995, -33924, , -33811, -33683, -33512, , -33334, -33279, , , -33221, -33112, , , , , -33088, , , -33014, -32855, -32816, , , , , , , -32711, , -32687, , , -32628, -32614, -32503, , , , , , , , -32422, , , , -32422
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -32691, , , -38218, , , , , -38218, , , , , , , , -39620, , , -40401, , , -39738, , , -39346, , , -39216, , , , , , , -38710, , , , , , , -38315, , , , , , -38943, , , , , -38336, , , , , , -38034, , , , -37334, , , , , , , -36782, , , , , -36295, , , , , -35679, , , , -35363, , , -35178, , , -34699, , , , , -34575, , , , -34376, -34225, , , -33741, , -33689
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -32691, -35527, , -50113, -62652, , , -59685, , -59329, , -60828, , -61793, -59752, -59613, -57849, -57279, , -62196, -55000, , , , , -54822, , , , , , , -54110, , -54813, , -52341, , , -52158, , -52025, , , , , , -49283, , , , , , , , , , -51606, -49947, , , , , , , , , , -49744, -49578, , , , -51247, -50474, -49779, , , -49035, , , , , -48589, -46905, -49763, , -49575, , , , -48690, , , , -48535, -49380, , -48308, -47158, -46749, , , , -47286, , -46545, -46545
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
                text: 'classExample50 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_2b5f8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_2b5f8.resize();
});
