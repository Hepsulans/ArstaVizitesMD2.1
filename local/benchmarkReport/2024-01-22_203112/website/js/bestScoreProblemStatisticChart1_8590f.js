
var chart_bestScoreProblemStatisticChart1_8590f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_8590f'), {
    type: 'line',
    data: {
        labels: [
            491, 511, 524, 526, 540, 571, 573, 590, 637, 654, 668, 672, 679, 707, 712, 713, 723, 737, 738, 747, 750, 751, 756, 759, 776, 777, 780, 792, 805, 806, 808, 811, 819, 820, 827, 828, 829, 831, 835, 836, 838, 845, 848, 849, 850, 863, 872, 881, 882, 891, 897, 900, 913, 914, 926, 944, 948, 949, 954, 959, 996, 1015, 1018, 1020, 1028, 1029, 1041, 1042, 1043, 1052, 1056, 1077, 1080, 1081, 1085, 1093, 1094, 1101, 1102, 1111, 1113, 1139, 1164, 1170, 1191, 1210, 1216, 1233, 1244, 1245, 1247, 1269, 1285, 1294, 1297, 1300, 1324, 1330, 1350, 1352, 1353, 1366, 1367, 1376, 1400, 1402, 1419, 1426, 1444, 1445, 1459, 1470, 1474, 1484, 1493, 1497, 1513, 1514, 1544, 1545, 1571, 1587, 1588, 1591, 1595, 1606, 1607, 1642, 1657, 1658, 1664, 1688, 1712, 1735, 1749, 1764, 1773, 1774, 1775, 1777, 1780, 1781, 1788, 1789, 1802, 1830, 1856, 1881, 1904, 1927, 1949, 1972, 1996, 2018, 2041, 2063, 2083, 2085, 2103, 2107, 2109, 2123, 2124, 2133, 2136, 2177, 2179, 2181, 2201, 2222, 2232, 2245, 2261, 2268, 2274, 2277, 2290, 2304, 2307, 2311, 2317, 2320, 2322, 2326, 2333, 2334, 2343, 2349, 2358, 2364, 2381, 2383, 2398, 2402, 2414, 2425, 2448, 2450, 2470, 2482, 2483, 2495, 2507, 2517, 2534, 2544, 2545, 2572, 2583, 2590, 2599, 2623, 2634, 2636, 2645, 2646, 2647, 2648, 2667, 2690, 2712, 2713, 2734, 2737, 2771, 2780, 2787, 2790, 2805, 2818, 2819, 2859, 2861, 2866, 2895, 2925, 2932, 2940, 2957, 2963, 2976, 2978, 2988, 2990, 2991, 3001, 3007, 3011, 3079, 3080, 3087, 3101, 3116, 3124, 3163, 3174, 3176, 3179, 3181, 3198, 3222, 3233, 3238, 3239, 3243, 3246, 3252, 3253, 3254, 3270, 3276, 3277, 3298, 3331, 3371, 3374, 3391, 3394, 3397, 3443, 3444, 3446, 3451, 3454, 3466, 3475, 3489, 3514, 3562, 3569, 3577, 3594, 3607, 3647, 3657, 3707, 3768, 3772, 3796, 3817, 3832, 3842, 3864, 3878, 3880, 3886, 3894, 3911, 3956, 3962, 3969, 3985, 3986, 4012, 4019, 4020, 4035, 4040, 4061, 4082, 4086, 4087, 4089, 4110, 4158, 4166, 4175, 4180, 4184, 4205, 4221, 4222, 4224, 4226, 4234, 4241, 4274, 4298, 4299, 4324, 4365, 4369, 4392, 4417, 4419, 4441, 4450, 4454, 4477, 4479, 4540, 4541, 4582, 4605, 4627, 4640, 4665, 4675, 4720, 4729, 4730, 4733, 4794, 4799, 4866, 4867, 4876, 4888, 4911, 4928, 4969, 5005, 5014, 5075, 5086, 5129, 5147, 5153, 5158, 5166, 5193, 5216, 5221, 5243, 5249, 5251, 5302, 5312, 5315, 5321, 5324, 5358, 5361, 5372, 5374, 5384, 5393, 5394, 5415, 5427, 5444, 5462, 5483, 5500, 5506, 5509, 5513, 5561, 5576, 5577, 5588, 5589, 5633, 5641, 5666, 5692, 5704, 5707, 5728, 5744, 5757, 5770, 5774, 5806, 5820, 5833, 5834, 5844, 5872, 5893, 5919, 5939, 5950, 5951, 5960, 5963, 5965, 6033, 6087, 6135, 6145, 6198, 6229, 6245, 6263, 6284, 6307, 6320, 6321, 6341, 6351, 6352, 6361, 6387, 6394, 6396, 6451, 6465, 6495, 6512, 6513, 6515, 6542, 6567, 6573, 6584, 6594, 6624, 6627, 6636, 6648, 6675, 6680, 6704, 6729, 6738, 6788, 6810, 6836, 6908, 6917, 6938, 6983, 6998, 7025, 7077, 7096, 7108, 7121, 7161, 7162, 7185, 7201, 7207, 7289, 7321, 7371, 7401, 7415, 7508, 7552, 7592, 7632, 7636, 7681, 7684, 7709, 7727, 7788, 7815, 7844, 7901, 7951, 7953, 7997, 8082, 8087, 8130, 8135, 8163, 8177, 8221, 8247, 8265, 8301, 8313, 8381, 8398, 8443, 8482, 8530, 8573, 8588, 8612, 8620, 8646, 8649, 8651, 8655, 8702, 8714, 8723, 8743, 8790, 8834, 8891, 8931, 8951, 8978, 9004, 9017, 9058, 9068, 9082, 9107, 9113, 9201, 9205, 9245, 9264, 9287, 9331, 9344, 9375, 9406, 9409, 9421, 9436, 9465, 9505, 9571, 9633, 9638, 9639, 9691, 9692, 9738, 9745, 9769, 9784, 9833, 9877, 9900, 9986, 9988, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -46606, , , , , , , , , , , , , -53354, , , , , , , , , , , , , , -60147, , , , , , , , , , , , , , , , , -61175, , , , , , , , , , , , , , , , -61175, , , , , , , , , , , , -66684, , , , , , , , , , , , , -66719, , , , , , , , -66719, , , , , , , , , , , , , , , -67001, , , , , , , , , -68152, , , , , , , , , -69502, , , , , , , -69502, , , , , , , , , -69509, , , , , -70837, , , , , , , -70897, , , , , -74247, , , , , , , , , , , , , , , , , , , , -74247, , , , , , -72988, , , , , , , , , -72988, , , -72893, , , , , , -72759, , , , , -72430, , , -72252, , , -71806, , -71756, -71484, , , , -71441, , , , , , -70822, , -70508, , , , , , -70326, , , , , , , , -70127, , , -69908, , , , , , , , , -69715, , , -69641, , , -69522, , , , -69320, , , , -69076, , -68910, , , -68837, , , -68713, , , , , -68637, , -68348, , -67742, , , , -67615, , , -67521, , -67396, , , , , -67062, , , , -66963, , , , , , -66683, , , , , , -66629, , , , , -66340, , , , , , -66249, , -66108, , , , , -65951, , , -65772, , , , , , -65391, , , , -65349, , , -65344, , , , -65299, , , , , , -65203, , -65097, , , -64983, , , , -64861, , , , , -64779, , , -64737, , , , -64700, , , , -64584, , , , -64438, , , , -64426, , , -64411, -64336, , -64209, , , -64206, -64138, , , -64110, , , -64053, , , , , -63983, -63811, , -63794, , -63770, -63714, -63706, -63698, , -63480, -63477, , , -63455, , -63309, , -63258, , -63024, -62873, , -62820, -62742, , , -62544, -62494, , -62381, , -62133, , -62063, -61968, , -61906, -61871, , -61775, , , , , -61748, -61677, , , -61615, -61605, , , -61604, , , , -61582, , , , -61507, , -61499, , -61444, , -61390, -61248, , -61144, , , -61140, , -61134, -61130, , , , , , -61125, -61107, , , -61011, -60979, -60902, , , , -60902
                  ]
                }, 
{
                  label: 'LAHC 20 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -46606, -52581, -60368, , -88990, -89166, , -106398, , -110176, -111198, -112884, -110787, -108596, -115448, , -117185, -116847, -119027, -120714, -121840, -119389, -119596, -116491, -115895, -116425, -113440, -116076, -115011, -114824, , -114451, -114416, -113949, -113282, -113175, -112008, -111488, -110834, -110493, , -110556, -109909, -108743, -105278, , -108912, -109958, -106191, -105395, , -106586, -106076, , -107282, -107331, -106178, , -105651, , -102703, -102491, -101918, , -102325, -103562, -103556, -103556, -102133, , -101618, -101611, -101256, , -100698, -100457, -98520, -98450, , , , , -96967, -99204, -98925, , -95614, , -95494, -94710, , , -94646, , -94179, , -95083, , -94979, -94867, -95176, -94815, , , -94045, , , -93475, -93433, -92878, -92134, -91933, , -91753, -93113, , -93559, -94527, , , -93756, -93248, , , -92380, -91223, , -89415, -89366, , , , , -88961, -88525, -87533, -87520, -87441, -86611, , -86330, -85886, -85673, , , , , , , , , , , , , -85538, , -85531, -85505, , -84877, -84823, , , , -84580, -84204, , , -83875, , , , -83789, -83777, , -83442, -83385, , -83104, -82960, -82953, -82846, -82359, , -82291, , , -82141, , -82079, -82065, , -82029, , , -81164, , -81076, -81032, , -80935, , -80466, , -80457, , -80314, -80195, , -79491, , -79226, , -79036, -78612, -78591, , , , , , -78510, -78265, , , -78007, , -77806, -77334, -76942, -76527, , , -76494, -76027, , , , -75983, -75784, , -75742, -75669, -75600, -74806, , , -74599, -74468, , -74050, , -73992, , -73757, -73585, -73235, , , -73181, -73131, -73004, , , -72948, -72884, -72665, , -72522, -72305, , , -72270, -71782, , -71248, , -71213, , -70927, , -70884, , -70399, , , , -70158, , -70039, -69905, , , , , , , , , , , -69769, -69658, , , , , , -69630, -69421, , , , -69323, , -69115, , -69023, -68657, , -68573, , , , -68499, , -68272, , -68140, -68112, -68040, , , -67871, , , , , , , , , , , -67856, -67844, , -67718, , -67485, -67368, , , -67242, , -67211, , -67099, -67059, , -66763, , , , -66294, , , , -66170, , , -65881, , -65819, , -65784, -65723, -65678, , -65470, , , -65305, , , -65302, -65257, , -65164, -65160, -65142, -65065, -65052, , -64949, , -64873, -64844, , -64799, , -64707, -64556, , , , , -64486, -64467, -64450, -64402, , , , , -64242, -64225, , -64168, , , -64064, , -64012, , , -63978, , -63796, -63729, , , -63589, -63457, -63253, , , , , , , -63252, , -63195, , -63149, , -63046, -62981, -62884, , , -62798, -62692, , , -62538, -62505, , , , , , -62343, , -62140, , -61970, , , , , , , , , , -61773, , , , , , , -61720, , , , -61486, , -58414, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -58146, , , , , , -58003, , -57918, -57815, , -57802, -57731, , , -57386, , , , , , , , -57357, -57320, , , -57264, -57191, , -57066, , , , , -57019, -56964, , -56672, , , -56600, -56483, -56482, -56330, , , , , -56216, , , , , -56214, -56143, -56143
                  ]
                }, 
{
                  label: 'Tabu 3 300',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -46606, , , , -52581, , , -54996, , -60527, , , , , , , -66665, , , , , , , , , , , , , , , -66665, , , , , , , , , , -67513, , , , , -69668, , , , , -69607, , , -69607, , , , -68953, , -68953, , , , -68844, , , , , , -68756, , , , -68629, , , , , , -69227, -69406, -69266, , -69251, , -68651, , -69001, , , -68982, , , -68913, , -68770, , -68775, , , , , -72125, -71985, , , -71975, , , , , , -76060, , , -75303, , , -74986, -74580, , , , -74419, , , -74336, , , -74099, -74079, -73860, -73607, , , , , , , -73431, , , , -73311, -72945, -72828, -72812, -72594, -72326, -72302, -72147, -71611, -71513, -70616, -70560, , -70459, , , -70319, , , -70279, , -70256, , , -69389, -69388, , -69292, , -69140, , , -68918, , , -68744, , , , , , -68648, , , -68556, , -68181, , , -68053, , -67976, , , -67755, , , -67635, , -67179, , -67024, , -67003, , , -66912, , , , -66802, , , , -66780, -66657, -66567, , -66549, , , -66547, , , -66458, , , , , , -66281, , , -66238, , -66193, , , -66183, , , , , -65985, -65895, , , -65822, , -65714, , -65700, , , , -65566, -65510, , , , , -65392, , , , -65232, , , -64525, , , -64438, , , -64222, , -64178, , , , -63961, , -63932, -63142, -63108, , , , , , -63072, , , -63041, -63039, -62974, , -62946, -62896, , , -62857, , -62850, , -62818, , , -62665, -62484, , , -62050, , -61973, , , -61947, , -61714, -61489, , , -61476, , -61461, , , , -61418, , , -61389, , -61386, -61253, , -61230, -61090, -60824, , -60788, , , , , , , , , -60733, , , , -60732, , , , , , -60731, , , -60673, -60629, , , -60551, , , , , -60498, , , , -60424, , -60411, , , -60313, -60003, , , , , , , , , , , -59941, , , , , -59940, , , -59851, , -59573, , , , -59133, , , -59091, -58982, , , , -58920, , -58885, , , -58786, , , -58628, -55278, , , , -55199, , , , , -55172, -55147, , -55090, , -55089, , , , -55083, , , , , , -55038, , , , , -55024, , , , -54979, -54773, -54672, , , -54584, , , , -54562, -54503, , -54402, -54344, , , -54140, , , -54125, , , -54093, -54079, , , -54077, , -53987, , -53986, , , , -53969, , -53963, , , , , -53920, , , -53891, -53883, , -53856, , -53842, , -53790, , , -53772, , , -53699, -53687, , , -53679, , -53624, , -53515, , , , , , -53501, , -53468, , -53450, , , , , , , , , -53427, , -53423, -53405, -53161, , -53160, , , , -53150, , , , , , , -53146, , , , , , , , , , , , -53118, , , -53117, , , , , -53057, , , -53057
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
                text: 'classExample5 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_8590f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_8590f.resize();
});
