
var chart_bestScoreProblemStatisticChart1_293ae = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_293ae'), {
    type: 'line',
    data: {
        labels: [
            22, 23, 29, 30, 32, 34, 64, 65, 99, 121, 130, 165, 184, 204, 241, 287, 291, 338, 395, 407, 435, 450, 530, 531, 532, 539, 590, 594, 655, 691, 715, 730, 732, 757, 790, 800, 804, 901, 1020, 1056, 1063, 1107, 1166, 1203, 1204, 1216, 1281, 1304, 1329, 1473, 1902, 2254, 3150, 3301, 3302, 3504, 3570, 4233, 4275, 4751, 4752, 4779, 4992, 5310, 5348, 5357, 5479, 5554, 5614, 6021, 6022, 6211, 7034, 7302, 7333, 7413, 7423, 7977, 8298, 8328, 8357, 8384, 8411, 9313, 9640, 9912, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , -20527, , -23624, -23152, , -22929, -22691, , -22674, -21904, , -20989, -20663, , -20489, , -20352, , , , -20217, -20028, , -19888, -19627, , -19547, , , -19534, , , , -19492, , -19290, -19231, -19086, , , -19063, , -18908, , -18905, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -18903, -18793, -18538, -18442, -18410, , , , -18410
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -20527, , , , , -23624, , , -23152, , , -22526, , , -21711, , , , , -20837, , , , , , , -20601, , , , , , -19981, , , , -19673, , -19013, , , , , , , -18983, , , , , , , , , , -18938, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -18938
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -20527, , -20465, -20924, -22834, -25373, , , , , , , , , , , , , -25254, , , , -24696, -23855, -23833, , , , , , -23768, , -23535, , , -23324, -23203, , , , , , , -22690, -22544, , , , -22139, , -21873, -21314, -21247, -21063, -20986, -20742, , -20688, -20659, -20591, -20563, -20347, -20211, -20186, -20181, -20060, -19989, -19969, -19925, -19865, -19525, -19162, -19160, -19138, -19128, -19103, -18995, -18865, , , , , , -18822, -18813, -18781, -18781
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
                text: 'Problem_2 best soft score statistic'
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
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 100
                        
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
  chart_bestScoreProblemStatisticChart1_293ae.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_293ae.resize();
});
