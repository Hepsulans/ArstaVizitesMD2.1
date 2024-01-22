
var chart_bestScoreProblemStatisticChart0_d5e34 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_d5e34'), {
    type: 'line',
    data: {
        labels: [
            80, 81, 82, 83, 84, 87, 88, 91, 92, 94, 97, 99, 100, 101, 104, 106, 107, 124, 126, 127, 128, 129, 131, 133, 135, 136, 137, 138, 139, 141, 142, 143, 144, 148, 149, 150, 153, 154, 158, 159, 164, 165, 190, 215, 260, 271, 287, 288, 333, 352, 363, 370, 422, 445, 466, 472, 532, 590, 601, 655, 667, 717, 731, 788, 790, 823, 824, 842, 862, 863, 874, 875, 900, 902, 903, 904, 906, 909, 969, 1009, 1043, 1117, 1220, 1265, 1470, 1471, 1781, 1847, 2139, 2152, 2212, 2589, 2590, 2669, 2926, 3082, 3096, 3279, 3649, 3681, 3852, 4060, 4253, 4664, 4683, 4855, 5428, 5433, 6141, 6561, 6564, 6720, 6722, 8330, 8332, 8348, 8351, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -48, , , , , , , , , , , , , , , , -33, , , , , , , , , , , , , , , , , , , , , , , -29, , -21, , , , -7, , , , -5, , , , -3, -1, , , -1, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -48, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -25, , , -15, , , , , , -11, , , , , -7, , , -5, , , -3, , , , , , -1, , , , , , , , , , , , , , -1, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -48, , , , -47, , , , , , , , , , , , , , -41, , , , , , , , , -35, -34, , , , , , , , , , , , , -34, , -32, -31, -31, , -29, -29, -27, , -26, -23, , , , , -20, , , , , , , , , -20, , , , , , , , , -19, -18, -18, -17, , -17, , -15, -14, -14, -13, -13, -12, -11, -11, -10, -10, -9, -9, -8, -8, -7, -7, -6, -5, -4, -3, -3, -2, -1, -1, 0, , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 2 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -48, , -46, , -45, -45, -44, -44, -42, -41, -40, -40, , , , , , -31, -29, -20, -17, -17, -16, -15, , -15, , , -13, -12, -9, , -9, , -8, -8, , , , , , , , , , , , , , , , , , , , , , , , -7, , -7, , -6, , -5, , -5, -4, -4, -3, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3, -2, , , -2, 0, , , 0
                  ]
                }, 
{
                  label: 'Tabu 2 10',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -48, , , , -46, -45, , -45, -44, -42, -41, -40, -40, , , , , -31, -31, -29, -20, -17, -16, -15, -15, , , , , , -12, -11, -9, -9, , , -8, , -8, , , , , , , , , , , , , , , , , , , , , , , , , -7, , -7, , , , -6, , -5, , -5, -4, -4, -3, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3, -2, , , -2, 0, 0
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
                text: 'classExample50 best hard score statistic'
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
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
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
  chart_bestScoreProblemStatisticChart0_d5e34.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_d5e34.resize();
});
