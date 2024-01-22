
var chart_bestScoreProblemStatisticChart0_e01db = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_e01db'), {
    type: 'line',
    data: {
        labels: [
            109, 116, 126, 127, 128, 130, 139, 140, 144, 150, 151, 152, 153, 157, 160, 165, 166, 171, 176, 178, 180, 181, 186, 189, 190, 192, 193, 195, 197, 198, 200, 201, 203, 204, 205, 207, 211, 213, 217, 222, 228, 229, 256, 257, 275, 290, 292, 295, 296, 300, 319, 401, 402, 782, 5000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -51, -50, -49, -48, -47, -47, -45, -44, -42, -42, -41, -40, -40, -39, -38, -38, -36, -35, -33, -33, -31, -30, -28, -28, -26, -26, -25, -24, -24, -22, -21, -19, -17, -16, -16, -15, -14, -13, -13, -12, -12, -11, -11, -10, -10, -9, -9, -7, -6, -4, -4, -3, -2, 0, 0
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
                text: 'Problem_3 best hard score statistic'
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
                suggestedMax: 5000,
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
  chart_bestScoreProblemStatisticChart0_e01db.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_e01db.resize();
});
