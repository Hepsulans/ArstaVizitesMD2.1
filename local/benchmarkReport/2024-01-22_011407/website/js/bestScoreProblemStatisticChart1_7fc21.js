
var chart_bestScoreProblemStatisticChart1_7fc21 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_7fc21'), {
    type: 'line',
    data: {
        labels: [
            109, 116, 126, 127, 128, 130, 139, 140, 144, 150, 151, 152, 153, 157, 160, 161, 162, 164, 165, 166, 171, 176, 178, 180, 181, 186, 187, 189, 190, 192, 193, 195, 197, 198, 200, 201, 203, 204, 205, 207, 211, 213, 214, 215, 217, 222, 223, 224, 225, 228, 229, 256, 257, 264, 273, 275, 290, 292, 295, 296, 300, 302, 304, 305, 306, 318, 319, 401, 402, 782, 832, 834, 5000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -35634, -38447, -40053, -42962, -42780, -42393, -50120, -50223, -50413, -49811, -49645, -49644, -48416, -50575, -49560, -49322, -48819, -48754, -48276, -49586, -49975, -49973, -49023, -49352, -49414, -50446, -49202, -48836, -48523, -48026, -47975, -49172, -49063, -48593, -49055, -47628, -46860, -46682, -46564, -47676, -48444, -48254, -48253, -48028, -47655, -49927, -49429, -48941, -48520, -48500, -48525, -48436, -48436, -48287, -47078, -46672, -49332, -49200, -48777, -48288, -47680, -47463, -47423, -47219, -47127, -47095, -46888, -43404, -42990, -43233, -42591, -42346, -42346
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
                text: 'Problem_3 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_7fc21.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_7fc21.resize();
});
