
var chart_bestScoreProblemStatisticChart0_271a8 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_271a8'), {
    type: 'line',
    data: {
        labels: [
            82, 83, 86, 88, 89, 91, 92, 94, 95, 96, 97, 99, 101, 102, 103, 105, 106, 110, 114, 116, 127, 129, 130, 131, 132, 133, 134, 135, 138, 140, 142, 144, 145, 146, 147, 148, 151, 156, 158, 159, 160, 164, 169, 171, 174, 192, 221, 263, 264, 278, 294, 295, 335, 362, 365, 372, 379, 429, 453, 473, 475, 558, 600, 617, 668, 695, 713, 758, 792, 797, 826, 831, 836, 865, 872, 873, 877, 883, 904, 906, 907, 909, 910, 912, 913, 915, 921, 981, 1009, 1043, 1117, 1219, 1264, 1469, 1778, 1844, 2139, 2151, 2210, 2575, 2576, 2655, 2907, 3000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -48, , , , , , , , , , , , , , , , , , , -33, , , , , , , , , , , , , , , , , , , , , , , -29, , -21, , , , , -7, , , , , -5, , , , -3, , -1, , -1, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -48, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -25, , , , , -15, , , , , , -11, , , , , -7, , , -5, , , , -3, , , , , , -1, , , , , , , , , , , , , , , , , , -1, , 0, , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -48, , , -47, , , , , , , , , , , , , , , , -41, , , , , , , , -40, -34, , , , , , , , , , , , , -34, , , -32, -31, -31, , -29, , -29, -27, , -26, , -23, , , , -20, , , , , , , , , , , -20, , , , , , , , , , , -19, -18, -18, -17, , -17, , -14, -14, -13, -13, -12, -11, -11, -10, -10, -9, -9
                  ]
                }, 
{
                  label: 'Tabu 2 200 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -48, , -46, , , , -45, , , , -45, , -44, , -44, -42, -41, -40, -40, , , , , , , , , , -31, -29, -20, -17, , -16, -15, -15, , -12, -11, -9, -9, -8, , -8, , , , , , , , , , , , , , , , , , , , , , , , , -7, , -7, , , -6, , , -5, , , , , -5, -4, -4, -3, , , , , , , , , , , , , , , , , , -3
                  ]
                }, 
{
                  label: 'Tabu 2 10 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -48, , -46, , -45, , -45, -44, , -44, -42, -41, -40, , -40, , , , , , -31, -29, , -20, -17, -17, -16, -15, -15, , , , -12, -11, -9, , -9, -8, , , -8, , , , , , , , , , , , , , , , , , , , , , , , , , , , -7, , -7, , , -6, , , -5, , -5, -4, -4, -3, , , , , , , , , , , , , , , , , , , , , , -3
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
  chart_bestScoreProblemStatisticChart0_271a8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_271a8.resize();
});
