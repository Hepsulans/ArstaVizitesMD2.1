
var chart_bestScoreProblemStatisticChart0_dbd1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_dbd1'), {
    type: 'line',
    data: {
        labels: [
            553, 557, 788, 799, 976, 978, 981, 991, 1002, 1004, 1007, 1009, 1018, 1020, 1022, 1023, 1033, 1034, 1038, 1042, 1045, 1049, 1057, 1059, 1061, 1064, 1065, 1066, 1069, 1070, 1072, 1073, 1074, 1077, 1090, 1093, 1103, 1109, 1110, 1111, 1126, 1127, 1128, 1134, 1135, 1136, 1143, 1145, 1162, 1167, 1172, 1174, 1176, 1178, 1182, 1185, 1192, 1212, 1216, 1219, 1223, 1230, 1231, 1232, 1233, 1235, 1237, 1238, 1241, 1242, 1245, 1246, 1250, 1256, 1257, 1264, 1270, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1280, 1296, 1298, 1299, 1300, 1304, 1305, 1306, 1307, 1317, 1321, 1323, 1324, 1325, 1327, 1329, 1330, 1331, 1333, 1338, 1344, 1350, 1351, 1352, 1364, 1365, 1367, 1368, 1369, 1371, 1372, 1374, 1411, 1416, 1417, 1420, 1426, 1446, 1447, 1451, 1455, 1457, 1476, 1478, 1708, 1714, 1716, 1723, 1755, 1846, 5000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -143, -141, -140, -140, -138, -137, -136, -135, -134, -133, -131, -129, -127, -125, -125, -123, -123, -121, -121, -119, -119, -118, -118, -117, -117, -116, -114, -114, -112, -112, -111, -110, -110, -109, -109, -107, -107, -106, -105, -105, -103, -103, -102, -102, -101, -99, -99, -98, -97, -95, -95, -94, -94, -93, -93, -91, -89, -89, -87, -87, -85, -85, -83, -81, -79, -79, -77, -75, -73, -72, -71, -69, -67, -67, -64, -64, -63, -62, -60, -60, -58, -56, -56, -55, -50, -49, -49, -47, -45, -45, -44, -40, -38, -38, -37, -37, -36, -33, -31, -31, -30, -29, -28, -28, -26, -26, -25, -25, -23, -22, -22, -21, -19, -18, -17, -17, -14, -14, -13, -13, -10, -10, -9, -9, -8, -8, -6, -5, -4, -4, -2, -2, -1, 0, 0
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
  chart_bestScoreProblemStatisticChart0_dbd1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_dbd1.resize();
});
