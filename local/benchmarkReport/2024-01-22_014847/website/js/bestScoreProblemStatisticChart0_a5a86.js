
var chart_bestScoreProblemStatisticChart0_a5a86 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_a5a86'), {
    type: 'line',
    data: {
        labels: [
            510, 514, 530, 544, 605, 609, 610, 611, 612, 691, 722, 850, 857, 858, 861, 928, 967, 1080, 1172, 1174, 1202, 1236, 1244, 1263, 1310, 1319, 1320, 1364, 1416, 1418, 1428, 1459, 1499, 1549, 1550, 1598, 1606, 1640, 1642, 1645, 1653, 1654, 1862, 1874, 1888, 1889, 1938, 2038, 2051, 2099, 2187, 2195, 2340, 2606, 2721, 2746, 2864, 2865, 2866, 2867, 2980, 3070, 3127, 3223, 3291, 3353, 3359, 3427, 3486, 3551, 3634, 3640, 3804, 3927, 3944, 4131, 4150, 4151, 4272, 4301, 4410, 4496, 4497, 4508, 4511, 4550, 4826, 4968, 5044, 5114, 5218, 5234, 5294, 5305, 5353, 6009, 6038, 6142, 6189, 6225, 6308, 6414, 6415, 7449, 7455, 7501, 7502, 8043, 8045, 8046, 8047, 8551, 9025, 9451, 9452, 9483, 9871, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -150, , , -105, , , , , , -73, , , , -46, , -36, -26, , -17, , , -12, , -8, , , -3, -2, , , -1, 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -150, , , , , , , , , -105, , , , , , -73, , , , , -44, , , , , , , , , -34, , , , , , , , , , -25, , , -20, , , , , , , -17, , , -14, -11, , , , , , -10, , , -9, , -8, , , -7, , -6, , , , , , , , , , , -6, , , , , -5, -5, -3, , -3, , -2, , , -1, , -1, 0, , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -150, -113, , -108, -98, -96, -95, , , -94, -77, -76, , , , -76, -74, , , -73, , -72, , -70, -68, , , , -68, , , -67, -67, -66, -65, -64, -64, , -63, -59, , -59, -58, -57, -56, -56, -54, , -51, -47, , , -46, -45, -45, -43, -42, , -42, -40, , -39, , -39, -38, , -37, , -37, -36, -35, -35, -34, -34, -33, -32, -32, -30, , -30, -28, -27, -27, , , , -26, , -25, , -23, -22, , -22, , , -21, -20, -19, -17, -16, -16, -15, -15, -14, -14, -13, -13, -12, -11, -10, -10, -9, -9, -8, -8
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
                text: 'Problem_4 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_a5a86.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_a5a86.resize();
});
