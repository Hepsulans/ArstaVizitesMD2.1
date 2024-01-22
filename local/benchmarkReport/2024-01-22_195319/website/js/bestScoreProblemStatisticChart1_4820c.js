
var chart_bestScoreProblemStatisticChart1_4820c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_4820c'), {
    type: 'line',
    data: {
        labels: [
            14, 15, 17, 18, 19, 20, 22, 23, 24, 27, 28, 29, 30, 31, 34, 36, 37, 38, 54, 55, 56, 60, 70, 71, 74, 77, 78, 91, 101, 107, 120, 122, 155, 188, 196, 207, 237, 262, 271, 286, 303, 307, 338, 340, 370, 397, 406, 420, 437, 468, 497, 516, 519, 523, 549, 550, 575, 589, 609, 636, 668, 669, 713, 748, 759, 780, 787, 812, 842, 875, 899, 952, 1006, 1009, 1015, 1025, 1088, 1114, 1121, 1122, 1126, 1143, 1375, 1376, 1551, 1653, 1723, 1724, 1757, 1858, 1957, 2077, 2201, 2283, 2288, 2300, 2319, 2867, 2873, 2991, 3000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -21499, , , , , , , , , , , , , , , -23782, , , , -23119, , , , , , -23054, , , , -22569, -22442, , -22361, , -22156, , -21940, , -21848, , -21833, , -21098, , -20214, , -20039, -19864, -19785, , , -19744, -19707, , -19653, , -19375, , , , -19365, -19337, , -19333, , -19231, -19176, , -19152, -19117, , -18851, , , , , , , , , , , , , , , , , , , , , , , , , , , -18851
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -21499, , , , , , , , , , , , , , , , , -24603, , , , , , , , , , , , -24243, , , -23684, , , , -23492, , , , , , -23286, , , , -22612, , , , , -22305, , , , , , , -22052, , , , , -21893, , , , , -21838, , , , , -21717, , , -21708, , , , , , , -21404, -20192, , , -20127, -20064, -19887, -19811, -19557, , , , -19503, , -19382, , -19258
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -21499, , , -21498, -22327, -23987, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23553, , , , , , , , , , , , , , , -23551, , , -23273, -23171, , -23162, -23137, -22627, -22089, -22087, -21771, , , -21755, -21351, , , , , , -21135, -21105, -20747, , , , , -20747
                  ]
                }, 
{
                  label: 'Tabu 2 200 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , -21499, , -25796, -25523, -25172, -24445, -24178, -23889, -23759, , , , , , , , , -23736, -22729, , -22284, -22066, , , , , , , , , , , , -21810, , , , -21723, , , , , , , , , , , , , , -21624, , -21364, , , , , -21294, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -21250, -21250
                  ]
                }, 
{
                  label: 'Tabu 2 10 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -21499, , , -25796, -25523, -24445, -24178, -23759, , , , , , , , , , , , -23736, -22729, , -22542, -22284, -22066, , , , , , , , , , , -21810, , , , -21723, , , , , , , , , , , , -21624, , , , -21364, , , , , -21294, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -21250, , , -21250
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
                text: 'classExample25 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_4820c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_4820c.resize();
});
