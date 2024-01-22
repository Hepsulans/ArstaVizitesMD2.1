
var chart_bestScoreProblemStatisticChart1_23e37 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_23e37'), {
    type: 'line',
    data: {
        labels: [
            517, 527, 534, 535, 550, 608, 615, 689, 690, 691, 693, 695, 733, 740, 821, 822, 823, 826, 929, 932, 933, 935, 954, 958, 977, 984, 1096, 1136, 1137, 1158, 1235, 1238, 1241, 1273, 1363, 1407, 1456, 1505, 1506, 1550, 1595, 1642, 1656, 1657, 1658, 1660, 1683, 1694, 1695, 1696, 1716, 1741, 1787, 1796, 1879, 1932, 1940, 1983, 2032, 2077, 2085, 2103, 2104, 2105, 2106, 2123, 2172, 2185, 2202, 2217, 2227, 2266, 2290, 2291, 2309, 2360, 2404, 2412, 2429, 2436, 2437, 2449, 2494, 2536, 2577, 2620, 2624, 2662, 2680, 2681, 2683, 2703, 2753, 2793, 2795, 2796, 2838, 2883, 2922, 2923, 2929, 2954, 2972, 3000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -47159, , , , , -53191, , , , , , , -59604, , , , , -66755, -67278, , , , , , , , , , , -67278, , , -67466, , -67466, -68398, -68865, -68764, , -69642, -69879, -70273, , , , , -70071, , , , , -69879, -69805, , -68378, -71945, , -73646, -72940, -72651, , , , , , -72307, -71734, , , -71465, , -71223, , , -71007, -70791, -70747, , , , , -70485, -70304, -70187, -69985, -69798, , -69612, , , , -69446, -69316, , -69098, , -68969, -68822, , , -68746, , -68648, -68585
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -47159, , , , , , , , , -53202, , , , , , , , , , , -59167, , , , , , , , , -66159, , , , , , , , , , , , , , , , , -66159, , , , , , -66052, , , , , , , , , , , -65913, , , , , , , , , , , -64210, , , , , , , , , , , -66357, , , , , , , , , , , , -65852, , -65551
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -47159, -48905, -49605, , , -92309, -106302, -103747, -102549, -99635, -102105, , , -111446, -111298, -110253, , , -116771, -119042, -122682, -121624, -118775, , -118860, -109316, -117446, -117430, , -115737, -116237, , , , , , , -114410, , , , -120926, -121676, -118033, -118895, , -120514, -116924, -117015, , , , -110048, , , , , , , -116483, -118582, -117311, -115138, -115007, , , , -117857, , -117335, , -115563, -113828, -111944, , , -114485, , -111006, -113061, , , , , , -112593, , -113851, , -113906, , , -111511, , -109650, , , -108585, -106745, , , , -106745
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
                text: 'classExample100 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_23e37.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_23e37.resize();
});
