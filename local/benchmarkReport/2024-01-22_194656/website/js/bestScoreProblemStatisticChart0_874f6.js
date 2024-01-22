
var chart_bestScoreProblemStatisticChart0_874f6 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_874f6'), {
    type: 'line',
    data: {
        labels: [
            82, 83, 87, 97, 124, 138, 181, 186, 210, 255, 266, 270, 282, 329, 350, 367, 368, 372, 417, 442, 465, 481, 525, 590, 616, 659, 678, 730, 752, 855, 871, 919, 978, 1016, 1049, 1140, 1223, 1286, 1471, 1472, 1781, 1847, 2143, 2156, 2216, 2580, 2581, 2662, 2917, 3000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -48, , , , -33, , , -29, , -21, , , , -7, , , , , -5, , , , -3, -1, , , -1, , 0, , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -48, , , -25, , , , , -15, , , , , , -11, , , , -7, , , -5, , , -3, , -1, , , , , , -1, , 0, , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -48, -47, , -41, -34, , , -34, , -32, , -31, , -29, -29, -27, , , -26, -23, , , , , -20, , , , , -20, -19, -18, -18, -17, , -17, , -15, -14, -14, -13, -13, -12, -11, -11, -10, -10, -9, -9
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
  chart_bestScoreProblemStatisticChart0_874f6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_874f6.resize();
});
