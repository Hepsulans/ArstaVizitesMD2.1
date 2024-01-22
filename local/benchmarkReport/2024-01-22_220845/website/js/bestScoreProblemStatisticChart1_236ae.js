
var chart_bestScoreProblemStatisticChart1_236ae = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_236ae'), {
    type: 'line',
    data: {
        labels: [
            4522, 4536, 4541, 4548, 4563, 4568, 4573, 4575, 4580, 4584, 4590, 4591, 4598, 4599, 4604, 4607, 4632, 4659, 4668, 4670, 4674, 4675, 4676, 4681, 4689, 4692, 4693, 4699, 4703, 4712, 4715, 4723, 4742, 4757, 4758, 4764, 4765, 4770, 4772, 4775, 4779, 4784, 4786, 4787, 4793, 4796, 4801, 4802, 4803, 4805, 4808, 4809, 4812, 4815, 4818, 4821, 4823, 4825, 4829, 4830, 4831, 4839, 4844, 4846, 4850, 4855, 4858, 4869, 4875, 4877, 4879, 4880, 4888, 4890, 4897, 4903, 4916, 4921, 4923, 4924, 4932, 4939, 4940, 4941, 4942, 4943, 4950, 4952, 4954, 4957, 4962, 4966, 4967, 4982, 4997, 5000, 5001, 5002, 5003
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -90776, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -92036, -92036
                  ]
                }, 
{
                  label: 'LAHC 5 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -90776, -90744, -92178, -96000, -99024, -106873, -112451, -112375, -113615, -114215, -116450, -116445, -117118, -117070, -119065, -125875, -131751, , -132909, -132610, -133882, -133491, -134128, -135329, -137523, -142807, -145222, -147069, -147845, -147557, -154958, -158222, -166741, -171190, -172563, -180403, -180480, -180382, -180852, -179784, -179321, -178914, -177521, -178485, -178615, -178438, -177765, -177564, , -177636, -177484, -178166, -180628, -180622, -180194, -180160, -182000, -181548, -180848, , -180476, -181607, -181564, -184738, -184193, -183934, -184379, -187064, -187820, -187542, -187963, -187924, -188290, -187531, -187593, -187341, -188739, -190111, -190455, -193867, -193375, -192927, -194631, -194341, -193145, -194850, -196230, -196668, -197065, -197284, -197504, -199545, -200401, -204845, -203644, -203644, , , 
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , -90776, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -92036, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -98799, , 
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
                text: 'classExample250 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_236ae.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_236ae.resize();
});
