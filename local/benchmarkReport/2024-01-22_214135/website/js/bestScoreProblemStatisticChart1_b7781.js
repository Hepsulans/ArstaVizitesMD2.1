
var chart_bestScoreProblemStatisticChart1_b7781 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b7781'), {
    type: 'line',
    data: {
        labels: [
            5715, 5803, 5823, 5832, 5880, 5894, 6166, 6177, 6178, 6179, 6241, 6251, 6252, 6254, 6255, 6304, 6311, 6338, 6348, 6355, 6361, 6362, 6363, 6409, 6411, 6423, 6456, 6492, 6493, 6496, 6502, 6503, 6505, 6508, 6514, 6521, 6522, 6549, 6551, 6561, 6604, 6605, 6608, 6617, 6634, 6659, 6712, 6713, 6718, 6719, 6720, 6722, 6724, 6728, 6752, 6761, 6792, 6793, 6806, 6813, 6876, 6935, 6944, 6945, 6963, 6964, 6987, 7030, 7039, 7089, 7091, 7108, 7109, 7133, 7136, 7157, 7158, 7161, 7163, 7179, 7209, 7211, 7231, 7238, 7239, 7242, 7284, 7328, 7369, 7398, 7399, 7408, 7447, 7485, 7500, 7501, 7522, 7525, 7549, 7551, 7552, 7557, 7579, 7593, 7613, 7614, 7618, 7630, 7640, 7661, 7684, 7685, 7692, 7693, 7695, 7696, 7697, 7732, 7735, 7758, 7785, 7786, 7787, 7789, 7801, 7836, 7854, 7855, 7867, 7899, 7927, 7931, 7949, 7950, 7958, 7959, 7963, 7976, 7995, 8024, 8045, 8046, 8051, 8053, 8070, 8073, 8082, 8109, 8113, 8145, 8146, 8178, 8206, 8235, 8238, 8239, 8274, 8294, 8303, 8309, 8310, 8311, 8312, 8315, 8332, 8347, 8348, 8363, 8390, 8391, 8393, 8423, 8451, 8481, 8509, 8522, 8558, 8559, 8563, 8567, 8583, 8598, 8605, 8628, 8634, 8636, 8674, 8675, 8676, 8678, 8680, 8692, 8720, 8776, 8778, 8780, 8816, 8839, 8865, 8867, 8895, 8916, 8917, 8919, 8923, 8954, 8981, 8986, 9010, 9014, 9062, 9063, 9066, 9073, 9095, 9109, 9110, 9111, 9122, 9131, 9150, 9152, 9180, 9199, 9202, 9209, 9238, 9240, 9242, 9243, 9245, 9260, 9273, 9280, 9302, 9319, 9322, 9329, 9330, 9342, 9358, 9394, 9405, 9444, 9446, 9474, 9484, 9485, 9490, 9491, 9502, 9531, 9592, 9599, 9642, 9651, 9673, 9683, 9691, 9712, 9739, 9767, 9796, 9797, 9801, 9825, 9855, 9870, 9912, 9941, 9964, 9965, 9968, 9992, 9997, 10025, 10041, 10047, 10052, 10053, 10080, 10142, 10153, 10171, 10200, 10228, 10259, 10290, 10296, 10318, 10345, 10346, 10363, 10375, 10393, 10403, 10406, 10434, 10464, 10465, 10483, 10498, 10525, 10554, 10559, 10583, 10613, 10624, 10638, 10641, 10642, 10652, 10654, 10655, 10698, 10714, 10724, 10755, 10792, 10803, 10812, 10841, 10856, 10857, 10880, 10899, 10915, 10956, 10963, 10972, 10974, 10986, 11014, 11049, 11061, 11069, 11099, 11128, 11129, 11159, 11187, 11196, 11246, 11265, 11276, 11290, 11291, 11306, 11329, 11335, 11394, 11395, 11402, 11403, 11405, 11408, 11410, 11455, 11458, 11482, 11489, 11490, 11492, 11518, 11539, 11563, 11575, 11633, 11685, 11687, 11740, 11743, 11774, 11792, 11797, 11798, 11803, 11804, 11805, 11837, 11867, 11890, 11895, 11925, 11942, 11955, 11982, 11993, 12041, 12072, 12095, 12101, 12149, 12156, 12184, 12202, 12256, 12261, 12306, 12307, 12332, 12356, 12366, 12392, 12393, 12396, 12408, 12439, 12460, 12511, 12563, 12569, 12582, 12599, 12613, 12635, 12654, 12659, 12662, 12689, 12713, 12717, 12766, 12777, 12808, 12817, 12839, 12868, 12898, 12910, 12924, 12953, 12957, 12965, 12982, 13006, 13012, 13016, 13041, 13065, 13073, 13155, 13169, 13208, 13227, 13245, 13275, 13279, 13304, 13323, 13329, 13331, 13354, 13355, 13356, 13383, 13391, 13423, 13431, 13433, 13452, 13458, 13481, 13483, 13511, 13534, 13567, 13583, 13584, 13585, 13598, 13628, 13632, 13657, 13658, 13683, 13688, 13713, 13725, 13726, 13732, 13749, 13775, 13787, 13806, 13831, 13835, 13836, 13867, 13888, 13929, 13939, 13953, 13982, 13990, 14017, 14040, 14047, 14057, 14058, 14061, 14062, 14143, 14194, 14244, 14256, 14264, 14284, 14294, 14314, 14342, 14348, 14402, 14404, 14452, 14459, 14503, 14513, 14523, 14555, 14556, 14585, 14607, 14617, 14645, 14708, 14709, 14734, 14740, 14747, 14759, 14799, 14809, 14813, 14821, 14859, 14864, 14936, 14972, 14979, 15025, 15073, 15123, 15125, 15171, 15184, 15217, 15226, 15242, 15273, 15277, 15330, 15332, 15382, 15391, 15392, 15405, 15406, 15421, 15451, 15481, 15482, 15511, 15541, 15572, 15601, 15629, 15631, 15637, 15686, 15703, 15720, 15739, 15752, 15782, 15794, 15798, 15813, 15843, 15848, 15854, 15873, 15894, 15897, 15932, 15989, 15998, 16048, 16095, 16108, 16146, 16170, 16195, 16200, 16249, 16307, 16324, 16359, 16410, 16431, 16432, 16434, 16444, 16473, 16505, 16512, 16560, 16611, 16619, 16649, 16692, 16713, 16762, 16768, 16798, 16827, 16864, 16888, 16918, 16926, 16937, 16959, 16973, 16996, 17007, 17025, 17039, 17040, 17095, 17124, 17179, 17212, 17226, 17273, 17276, 17305, 17328, 17380, 17395, 17425, 17430, 17456, 17484, 17489, 17539, 17545, 17577, 17586, 17606, 17634, 17637, 17669, 17686, 17734, 17764, 17787, 17835, 17884, 17885, 17904, 17906, 17945, 17983, 17985, 18001, 18073, 18077, 18078, 18083, 18089, 18131, 18175, 18182, 18229, 18235, 18256, 18259, 18260, 18283, 18332, 18383, 18394, 18434, 18483, 18485, 18515, 18533, 18580, 18631, 18666, 18729, 18777, 18874, 18883, 18912, 18921, 18941, 18972, 19023, 19025, 19077, 19291, 19375, 19386, 19438, 19462, 19499, 19555, 19605, 19627, 19640, 19700, 19720, 19729, 19730, 19760, 19770, 19821, 19862, 19865, 19872, 19909, 19922, 19971, 20000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -90776, , , , , , , , , , , , , , , , , , , , -96628, , , , , , , , , , , , , , , , , , , , , -103704, , , , , , , , , , , , , , , , , , -108715, , , , , , , , , , , , , , , , , -110807, , , , , , , , , , , , , , , , , , , , , , , , , , -117329, , , , , , , , , , , , , , , -120362, , , , , , , , , , , , , -127379, , , , , , , , , , , , , , , , , , , , , -127379, , , , , , -127634, , , , , , -127591, , , , -127591, , , , -128341, , , , , , , -133958, , , -134335, , , , , , -136192, , , , -136192, , , , , -142835, , , , , -143847, , , -149247, , -151332, , , , , -151332, , -151432, , , , , , , , -151951, , , , , -152622, , , -152941, -153341, , -151437, -151437, , , -151848, , , , , , , , , -151848, , -151844, , , -151857, , , -151857, , -151795, , , -152644, -152544, , -150992, , , -150496, , , , , -150401, , -150315, -150133, -149902, , , , -149801, , , , -149644, , -149491, , -149408, , , -148507, , -147738, , , , , , -147512, , , , -147386, , -147252, , , -146740, , -146562, , , -147630, , , -147553, , , , , -147343, , , , -147300, , , , -146349, , -146174, , , , -146037, , , -145945, , , -145541, , , , , -145466, , , -145148, , , -145095, , , -144801, , -144723, , , -144347, , -144345, , , , , , -144078, -143999, -143304, , , , -143201, , , -142706, -142433, , -142432, , -142343, , , , -142176, , -142123, , , -142083, , , , , -142035, , , -141997, , , -141894, , -141546, , -141439, -141364, -141342, , -141272, , , -141182, , , -141175, , -141150, -140925, , , , , , , , -140888, , , , , , , -140871, -140831, , , -140703, , , -140524, , , , -140508, , , , -140424, , , -140420, -140348, -140113, , -139923, , -139770, , -139723, -139647, , -139558, -139399, , , , , , , -139393, -139141, -139108, , , , -139066, -139064, , , , -139059, , , -138922, , , -138843, , , -138710, , , , , -138428, , -138328, , -138303, , -138302, -138196, , , -138183, , , , -138157, , , -138077, , -138043, , , -137968, , , -137949, -137916, -137581, , , , , -137537, , , , , , -137381, , -137359, , -137358, -137357, , , , , -137227, , -137040, , -137011, -136931, , , -136913, -136881, -136706, , -136567, -136503, -136496, , , -136470, , -136407, -136350, , -136236, , -136168, , , , , , , -136061, , , -135974, , , , -135894, , , , -135682, , -135644, , -135520
                  ]
                }, 
{
                  label: 'LAHC 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -90776, -90744, -92178, -145605, , , -272804, -270183, -269940, -263814, -267149, -266538, -266169, -265178, -277087, -270651, , -270539, -276097, -277447, -277340, -281884, -279336, -278625, -284587, -281693, -292481, -292480, -286727, -285779, -284758, -285749, -285596, , -286040, -284870, -288763, -287446, -282094, -282244, -283874, -276499, , -273739, -268303, -276203, -275500, -276408, -275283, -274367, -274330, -273981, , -278385, -281338, -279420, -280405, -273722, , , , -271661, -271731, -274226, -274227, , -271271, , , -278551, -283941, -283720, -278584, , -276886, -277991, -276573, -277685, , -283096, -283135, , -281866, -281617, -278719, , , , -286970, -284306, , , , -275323, -274646, , -274016, -282431, -281181, -280634, , -281929, , -277173, -276494, -276053, , -277287, , -276929, -277182, -284051, -284630, -287394, -287073, , , -284393, -273531, -277140, -277069, -277018, -278132, , , -270442, -270952, , , -274404, , -272749, -272418, -269853, -270032, , , , , -271821, -271478, -273650, , -266074, -263574, , -270631, , -261416, , , , -260845, , -262082, , , , -258765, -258556, -260807, -261761, -261538, , -260178, -260330, , -258229, -256476, , , , , , -252904, -258016, -257830, , , -263171, -266278, , -261515, , -261052, -258999, -258890, -257206, -257997, -258407, , , -255672, -255618, , , , -251464, , , -256657, -256752, -255454, , , , -251753, -256853, -255572, -255541, -255159, , , , -252670, -250547, -249253, , -255603, -255183, , , -250877, -250300, , , -247331, -246441, -246411, -247176, -246881, , -248108, , -250246, -249802, -248711, -249171, , , -246255, -247482, -244510, , , -247731, -247265, -246622, -246370, , , , -245161, , , -243660, , -243455, , , , , -241268, -242133, , , , , , -242323, -242164, , -241737, , , -246527, -243812, , -245669, , , -242070, , -241137, , , , , , -236404, , -238945, , , , -236441, , -232354, -232198, , , , , , , , -233501, , , -233422, -232100, -233752, -232381, , , , , , -232073, , , -233462, -233320, , , -232900, , , -232045, -232097, , , , -228153, , , , , , , , , , , -232204, -231730, , , -228387, , , -227920, -227918, -229202, -228680, -228395, , , , -230114, -230572, -230303, , , -229598, , , , , , , , , -228558, -228545, -228319, -226530, , , , -225375, , , , , , , , , , , , , , , , -225147, , -222324, , , , -225445, -225229, , , -222914, , , , , -222891, , , -219985, -219767, -221064, , , , , , , , , , , , -223375, , , -221229, , , -223599, , , , , , , -223593, -221079, , , , , , -220703, , , -220418, -220183, -219627, -220438, , , -219188, , , -218045, , -217772, , , , -220781, -220737, , , , , -218888, , , , -218468, -217991, -217643, , , , , , -219924, , , , , -221818, , , , , , , , -221692, -221690, -221928, -221607, , , , , -217818, -213709, , , , , , -217458, , , , -217206, , , , , , , , , , -218116, , -216215, , , -219398, , -219304, , , -216983, , , , , , , , , -212770, , , , , , , , , -212063, -212457, -212363, , , , , , , , , , -212047, , , -209982, , , , , , -210807, , , , -210091, , -209941, , , , , , , , , , , , , , , , , -209601, -209532, -209732, , , , , , , , , -209395, , , , , , , , , , -210389, -208057, , -207564, , -208139, -209391, -208612, , , , , , , , , , , , , , , , -211675, , , , , , , , , , , , , , , , -203952, -203885, , , -203376, , -201914, -201693, -201384, , , , , , , , -203121, -204119, -203032, , , , , , , , , , , , , , , , , , , , , , , , , , -205710, , -205472, , , -202923, , , , , -203385, , , , , -205431, -205082, , , , -202023, -202023
                  ]
                }, 
{
                  label: 'Tabu 3 300 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -90776, , , , , -92036, -98799, , , , , , , , , , , -104888, , , , , , , , , , , , , , , , , -110989, , , , , , , , , -112317, , , , , , , , , , -115172, , , , , , -121038, -121168, -128323, , , , , -130536, , -136497, -136751, , , , , -138068, , , , , -140260, , , -141882, , , , -141882, -142535, -142535, , , -145885, -147145, -149460, , , -149572, , , , , -149571, , -149395, , , , -149395, , -150007, , , , , , , -149595, -148020, , , , , , , -148020, -148912, , , -149096, -152446, , -152446, , , , , -152327, , -154155, -153686, , , , -153686, , , -153505, , -153505, , -156577, -156577, -156469, , -156396, , -156396, , -156894, , , , , , -156894, , , -155998, , , -155251, -155484, -155157, -154159, -154866, , , , , -154803, , , -153788, , -155074, , , , , , , -155011, -156158, , , -156158, , -155979, , -155898, -155793, , , , -155065, -155034, -154762, , -155155, , , , -155216, , -155793, , , , -155549, , , -155501, -155094, , , -154998, -154875, , , , , , -154863, , -153965, , , -153790, , , -153245, , , , -153126, -153124, , , , , -152986, -152821, -152733, , , -152676, , -152555, , -152380, -152059, -152032, -152717, , , -152174, -152032, , -152010, -151877, , , -151832, , -151720, -151621, , , -151438, , -151427, -151295, , -151243, , -150802, -150750, -150445, , -150103, , -150015, , -149807, , -149090, , -148973, -148820, , , -148071, -147165, -147434, , -147140, -147121, , , -146936, , , , , -146729, , -146616, -146417, , , -146310, -145751, , , , -145691, , -145552, , , , -145500, -145401, , , -145168, -144915, -144621, , -144435, -144308, , -144248, , -144166, , , -144165, , , , -143901, , , , , , -143587, , -143424, , , , , -143345, , , , -143249, , , -143053, -143007, , , , , , -142944, -142926, -142813, , -142763, -142717, , -142669, -141990, , -141971, -141951, , -141907, , -141852, -141833, , , , , , -141681, , -141586, , , -141520, , , , , , -141501, , -141316, , , , , , -141279, , -141194, , -141143, -141001, , -140987, -140825, -140654, , -140648, -140611, , , -140604, , -140534, , -140476, , -140450, -140416, , , , -140336, -140294, , -140152, , , -140149, , , , , -140080, -139942, , , -139765, , -139478, , -139468, , -139433, , , , -139406, -139124, , , -139006, , -138984, , , , , -138889, -138872, , -138857, , , -138797, -138440, , , , -138346, -138198, , -138175, , -137597, , , , , , -137595, , -137586, , -137566, , -137563, -137469, , , , , -137149, , , -137087, -137073, , -137005, , -136947, -136852, , -136808, , -136727, , , -136720, , , , -136698, , , , -136691, , , , -136675, , -136370, , , -136151, -136112, , -136105, , , -135998, , , , -135803, -135768, -135765, , -135733, -135309, -135290, -135253, -135237, , , , , -135229, , -135138, -135013, , , -134826, -134615, , , -134547, , , -134451, -134412, , , , -134377, , -134189, , -134184, , , -134110, , , , , , -134048, -134010, -133881, , , , -133793, -133715, , , , -133663, -133525, -133461, , -133360, -133345, , , , , , -133318, , , , -133295, -133273, , -133144, , -133031, , -133030, , , -133018, -132956, , -132944, -132918, , , -132908, -132879, , -132871, , -132835, -132628, , -132610, -132605, , , , -132483, , , -132417, , , -132186, , , , , -132185, , -132172, , , -132072, , , , , -132054, , -132048, , , -132035, -132033, , , , -132025, , , , -131892, -131877, , -131728, , , -131727, , -131696, , , -131693, , -131692, -131673, , , -131645, -131548, , , -131524, -131284, , -131276, , , , -131256, , , -131256
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
                suggestedMax: 20000,
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
  chart_bestScoreProblemStatisticChart1_b7781.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b7781.resize();
});