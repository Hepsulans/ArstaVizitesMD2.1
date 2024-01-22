
var chart_bestScoreProblemStatisticChart0_87cf0 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_87cf0'), {
    type: 'line',
    data: {
        labels: [
            4522, 4536, 4541, 4548, 4563, 4568, 4573, 4575, 4580, 4584, 4590, 4591, 4598, 4599, 4604, 4607, 4632, 4659, 4668, 4670, 4674, 4675, 4676, 4681, 4689, 4692, 4693, 4699, 4703, 4712, 4715, 4723, 4742, 4757, 4758, 4764, 4765, 4770, 4772, 4775, 4779, 4784, 4786, 4787, 4793, 4796, 4801, 4802, 4803, 4805, 4808, 4809, 4812, 4815, 4821, 4823, 4830, 4831, 4839, 4844, 4846, 4850, 4855, 4858, 4869, 4875, 4877, 4879, 4880, 4888, 4890, 4897, 4903, 4916, 4921, 4923, 4924, 4939, 4940, 4941, 4942, 4943, 4950, 4952, 4954, 4957, 4962, 4966, 4967, 4982, 4997, 5000, 5001, 5002, 5003
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -423, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -406, -406
                  ]
                }, 
{
                  label: 'LAHC 5 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -423, -423, -422, -420, -416, -370, -356, -356, -354, -352, -351, -351, -350, -348, -347, -310, -305, , -303, -301, -300, -300, -299, -298, -291, -270, -267, -266, -264, -263, -253, -246, -234, -232, -217, -213, -212, -211, -209, -209, -207, -207, -206, -197, -196, -196, -195, -195, , -194, -194, -192, -189, -188, -188, -184, , -184, -181, -181, -180, -180, -179, -178, -176, -175, -175, -174, -174, -173, -173, -172, -170, -169, -168, -167, -153, -153, -152, -151, -149, -140, -139, -138, -136, -130, -122, -112, -108, -106, -103, -103, , , 
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , -423, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -406, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -355, , 
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
                text: 'classExample250 best hard score statistic'
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
                suggestedMax: 5003,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_bestScoreProblemStatisticChart0_87cf0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_87cf0.resize();
});
