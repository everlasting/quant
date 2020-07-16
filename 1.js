getMaxIndex = function (arr) {
    var max = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

getMinIndex = function (arr) {
    var min = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            index = i;
        }
    }
    return index;
}

getPoint = function () {
    // var tmpArr = processor.getClosePrice(kType);
    //var tmpArr = [6296.87,6219.29,6206.39,6251.13,6230.09,6182.38,6194.57,6186.86,6200.81,6337,6354,6520.75,6642.92,6617.76,6566.08,6604.93,6606.05,6597.54,6607.41,6639.65,6644,6650.5,6638.71,6649.98,6690.6,6656.76,6643.49,6775.1,6805,6916.62,7083.96,6788.63,6803.25,6739.44,6829.53,6842.71,6794.09,6742.17,6800.37,6811.31,6782.44,6784.6,6778.19,6797.87,6931.46,6925.68,6958.82,7015.69,7004.42,6917.32,6843.38,6789.27,6711.9,6751.96,6716.56,6747.51,6768.15,6694.06,6727.68,6764.65,6734.1,6754.44,6756.82,6682.67,6696.19,6715.38,6729.07,6728.17,6729.54,6782.11,6837.51,6873.18,6697.01,6710.08,6727]//,6710.04,6730.01,6783.14,6775.86,6771.31,6747.35,6825.67,6860.13,6841.42,6856.99,6858.38]    
    // var tmpArr = [6296.87,6219.29,6206.39,6251.13,6230.09,6182.38,6194.57,6186.86,6200.81,6337,6354,6520.75,6642.92,6617.76,6566.08,6604.93,6606.05,6597.54,6607.41,6639.65,6644,6650.5,6638.71,6649.98,6690.6,6656.76,6643.49,6775.1,6805,6916.62,7083.96,6788.63,6803.25,6739.44,6829.53,6842.71,6794.09,6742.17,6800.37,6811.31,6782.44,6784.6,6778.19,6797.87,6931.46,6925.68,6958.82,7015.69,7004.42,6917.32,6843.38,6789.27,6711.9,6751.96,6716.56,6747.51,6768.15,6694.06,6727.68,6764.65,6734.1,6754.44,6756.82,6682.67,6696.19,6715.38,6729.07,6728.17,6729.54,6782.11,6837.51,6873.18,6697.01,6710.08,6727,6710.04,6730.01,6783.14,6775.86,6771.31,6747.35,6825.67,6860.13,6841.42,6856.99,6858.38,  6856]    

    //var tmpArr = [8966.83,8972.05,8955.66,8994.39,9136.02,9124.35,9169.4,9164.84,9105.44,9115.52,9142.82,9125.95,9113.86,9073.06,9124.49,9113.93,9150.99,9132.95,9123.86,9128.86,9111.62,9112.26,9091.96,9124.5,9108.1,9096.21,8947.27,8965.23,9002.86,9003,9022.05,8994.29,9006.02,8990.75,9009.96,9034.86,9031.95,9033.78,9075.69,9064.24,9090,9104.49,9109.06,9080.89,9080.33,9041.46,9049.99,9091.84,9076.2,9045.5,9026.44,8946.5,8968.96,8958.85,8896.57,8885.27,8911.57,8920.82,8877.75,8890,8857.48,8767.1,8803,8825.39,8811.36,8813,8850.48,8854.9,8849.27,8852.14,8874.59,8859.04,8830.79,8818.29,8833.98,8863.99,8849.31,8848.55,8877,8869.84,8874.47,8872.34,8863.52,8842.92,8817,8843.55,8831.96,8843.62,8884.04,8856,8928.2,8933.01,8914.57,8895.7,8887.67,8891.28,8879.25,8894.16,8924.45,8887.71,8837.87,8806.18,8782.93,8702.58,8704.77,8693.71,8741.15,8740.16,8766.16,8746.7,8734.82,8716.04,8743.15,8730.84,8699.8,8682.6,8663.38,8687.87,8591.3,8600,8563.34,8606.11,8624.09,8625.06,8634.02,8620.8,8591.65,8615.52,8660.15,8648.41,8692.84,8688.77,8667.24,8691.29,8656.38,8608.1,8650,8630.54,8614.23,8660.31,8645,8623.46,8627.14,8675,8672.09,8672.36,8670.03,8720,8714.59,8714.58,8763.84,8747.88,8757.04,8829.48,8840,8800.02,8801.08,8780.1,8788.97,8810.96,8821.79,8848,8831.73,8829.2,8822,8828.96,8813.38,8795.8,8779,8799.54,8830.03,8827.03,8855.75,8845.4,8860,8865.09,8853.57,8830.14,8855.41,8862.2,8906.01,8902.65,8925,8902.04,8910.23,8936.71,8916.49,8935.71]
    var tmpArr = [9652.56, 9677.25, 9712.61, 9698.69, 9655.84, 9693.25, 9625.34, 9614.2, 9593.51, 9628.98, 9622.18, 9553.16, 9563.65, 9638.85, 9664.98, 9645.84, 9662.82, 9670.57, 9640.01, 9659.93, 9697, 9717.99, 9689.42, 9683.96, 9708.88, 9698.04, 9670.35, 9652.03, 9644.24, 9688.62, 9717.8, 9748.33, 9751.91, 9758.84, 9733.94, 9744.76, 9746.42, 9774.95, 9770.91, 9752.6, 9754.1, 9738.78, 9745.09, 9757.27, 9767.79, 9744.77, 9759.92, 9762.28]
    var tmpArrCopy = tmpArr
    var pointArr = [0];
    var initCur = 0;

    while (tmpArr.length > 4) {
        var count = 0
        var cur = -1
        var needCur = -1
        var max = 0
        var min = 0
        var curPos = (pointArr.length % 2 > 0 ? 1 : 0)

        if (initCur == 1) {
            if (curPos == 1) {
                cur = 1
            } else {
                cur = 0
            }
        } else {
            if (curPos == 1) {
                cur = 0
            } else {
                cur = 1
            }
        }

        for (var i = 0; i < tmpArr.length; i++) {
            if (cur == 1) {
                if (tmpArr[max] <= tmpArr[i]) {
                    max = i
                    count = 0
                } else {
                    count += 1
                }
            } else if (cur == 0) {
                if (tmpArr[min] >= tmpArr[i]) {
                    min = i
                    count = 0;
                } else {
                    count += 1;
                }
            }

            if (count < 4 && i == tmpArr.length - 1) {
                needCur = cur
                console.log(pointArr);
                return [tmpArrCopy, pointArr, needCur];
            }

            if (count == 4 && max != 0) {
                pointArr.push(pointArr[pointArr.length - 1] + max);
                tmpArr = tmpArr.slice(max, tmpArr.length);
                break;
            } else if (count == 4 && min != 0) {
                pointArr.push(pointArr[pointArr.length - 1] + min);
                tmpArr = tmpArr.slice(min, tmpArr.length);
                break;
            }

            if (cur == 0) {
                needCur = 1
            } else if (cur == 1) {
                needCur = 0
            }
        }
    }
    console.log(pointArr);
    return [tmpArrCopy, pointArr, needCur];
};

getTrend = function (two) {
    var ret = getPoint()
    var tmpArr = ret[0]
    var arr = ret[1] //pointarr
    var needCur = ret[2]
    var trendArr = []
    var extremum = -1
    var direction = -1
    var count = 1
    var onHalf = 0;
    var countArr = []
    var c1 = 0
    var c2 = 0
    var c3 = -1
    var buystatus = -1
    var sellstatus = -1
    var flag = -1
    var start = 0
    var reverse = 0
    var archor = 0
    var arrCopy = [];

    arr.shift();
    if (tmpArr[arr[0]] < tmpArr[arr[1]] && tmpArr[arr[2]] < tmpArr[arr[0]]) {
        arr.shift()
    }

    if (tmpArr[arr[0]] > tmpArr[arr[1]] && tmpArr[arr[2]] > tmpArr[arr[0]]) {
        arr.shift()
    }

    if (tmpArr[arr[1]] < tmpArr[arr[3]]) {
        direction = 1
    } else {
        direction = 0
    }

    arrCopy = arr;
    start = arr[arr.length - 1] + 1
    archor = arr.pop()
    for (i = start; i < tmpArr.length; i++) {
        if (tmpArr[i] > tmpArr[i - 1]) {
            c1 += 1;
            if (tmpArr[i] > tmpArr[i - 3] && tmpArr[i - 1] < tmpArr[i - 2] && tmpArr[i - 2] < tmpArr[i - 3] && tmpArr[i - 2] > arr[arr.length - 1]) {
                arr.push(i - 1)
                needCur = 0
                c1 = 2
                c2 = 0;
            }
            if (tmpArr[i - 1] > tmpArr[i - 2] && tmpArr[i - 2] > arr[arr.length - 1]) {
                c2 = 0;
            }
            if (tmpArr[i] > tmpArr[i - 2] && tmpArr[i - 2] > arr[arr.length - 1] && c2 == 1) {
                c2 = 0;
            }
            if (c1 == 2 && needCur == 1) {
                if (tmpArr[i - 2] > tmpArr[i - 1]) {
                    arr.push(i - 3);
                } else {
                    arr.push(i - 2);
                }
                needCur = 0;
            }
        } else if (tmpArr[i] < tmpArr[i - 1]) {
            c2 += 1;
            if (tmpArr[i] < tmpArr[i - 3] && tmpArr[i - 1] > tmpArr[i - 2] && tmpArr[i - 2] > tmpArr[i - 3] && tmpArr[i - 2] > arr[arr.length - 1]) {
                arr.push(i - 1)
                needCur = 1
                c1 = 0;
                c2 = 2;
            }
            if (tmpArr[i - 1] < tmpArr[i - 2] && tmpArr[i - 2] > arr[arr.length - 1]) {
                c1 = 0;
            }
            if (tmpArr[i] < tmpArr[i - 2] && tmpArr[i - 2] > arr[arr.length - 1] && c1 == 1) {
                c1 = 0;
            }
            if (c2 == 2 && needCur == 0) {
                if (tmpArr[i - 2] < tmpArr[i - 1]) {
                    arr.push(i - 3);
                } else {
                    arr.push(i - 2);
                }
                needCur = 1;
            }
        }
    }

    if (c2 == 1) {
        if (tmpArr[tmpArr.length - 1] < tmpArr[tmpArr.length - 2]) {
            c3 = 1;
        }
    } else if (c1 == 1) {
        if (tmpArr[tmpArr.length - 1] > tmpArr[tmpArr.length - 2]) {
            c3 = 1;
        }
    }


    if (tmpArr[i] > tmpArr[i - 1] && tmpArr[i - 1] < tmpArr[i - 2] && tmpArr[i] > tmpArr[i - 2]) {
        flag = 1;
    } else if (tmpArr[i] < tmpArr[i - 1] && tmpArr[i - 1] > tmpArr[i - 2] && tmpArr[i] < tmpArr[i - 2]) {
        flag = 0;
    }

    // if (two == 1) {
    //     arr = arrCopy;
    // }
    for (var i = 1; i < arr.length; i += 2) {
        if (i + 2 < arr.length) {
            if (direction == 0) {
                if (tmpArr[arr[i]] > tmpArr[arr[i + 2]]) {
                    count += 1;
                    extremum = arr[i + 2];
                } else {
                    direction = 1;
                    countArr.push(count);
                    count = 1;
                    extremum = arr[i];
                    trendArr.push(extremum);
                }
            } else if (direction == 1) {
                if (tmpArr[arr[i]] < tmpArr[arr[i + 2]]) {
                    count += 1;
                    extremum = arr[i + 2];
                } else {
                    direction = 0;
                    countArr.push(count)
                    count = 1;
                    extremum = arr[i];
                    trendArr.push(extremum);
                }
            }
        } else {
            if (i == arr.length - 1) {
                onHalf = 1;
            } else {
                onHalf = 0;
            }

            if (direction == 1) {
                if (tmpArr[arr[i]] < tmpArr[arr[i - 2]]) {
                    reverse = 1;
                    direction = 0;
                    count = 1;
                }
            } else {
                if (tmpArr[arr[i]] > tmpArr[arr[i - 2]]) {
                    reverse = 1;
                    direction = 1;
                    count = 1;
                }
            }

            trendArr.push(arr[i]);
            countArr.push(count);

            if (countArr[countArr.length - 1] > 2 && onHalf == 0) {
                if (tmpArr[arr[i - 1]] > tmpArr[arr[i + 1]] && direction == 1) {
                    reverse = 1;
                } else if (tmpArr[arr[i - 1]] < tmpArr[arr[i + 1]] && direction == 0) {
                    reverse = 1;
                }
            }
        }
    }

    return {
        'archor': archor, 'c1': c1, 'c2': c2, 'flag': flag, 'reverse': reverse, 'needCur': needCur, \
        'direction': direction, 'trendArr': trendArr, 'countArr': countArr, 'valueArr': tmpArr, 'pointArr': arr, 'onHalf': onHalf
    }
};

getLocation = function () {
    ret1h = getTrend('1h')
    ret15m = getTrend('15m')
    ret1m = getTrend('1m')
    return {
        'h1sec': ret1h.archor, 'h1point': ret1h.valueArr[ret1h.valueArr.length - 1], \
        'm15sec': ret15m.archor, 'm15point': ret15m.valueArr.[ret15m.valueArr.length - 1], \
        'm1sec': ret1m.archor, 'm1point': ret1m.valueArr[ret1m.valueArr.length - 1]
    };
}



buyCur1 = -1
sec1 = 0
buyStatus = { 'buy': -1, 'low': 0, 'high': 0, 'uptimes': 0, 'downtimes': 0, 'wait1peridbuy': 0, \
'waitreversebuy': 0, 'wait1peridsell': 0, 'waitreversesell': 0, 'waitbuylow': 0, 'waitbuyhigh': 0, 'sync1mlastpoint': 0, 'sync15mlastpoint': 0}

sync15m = function () {
    ret = getTrend(15)
    ret1m = getTrend(1)
    if (buyCur1 == -1) {
        buyCur1 = ret.buyCur
    }
    if (sec1 == 0) {
        sec1 = ret.archor
    }

    if (buyCur1 != ret.buyCur) {
        if (buyCur1 == 0) {
            buyCur1 = 1
        } else {
            buyCur1 = 0
        }
    }
    if (sec1 != ret.sec) {
        sec1 = ret.sec
    }
    if (buyCur1 != ret.buyCur || sec1 != ret.sec) {
        return
    }

    if (ret.valueArr[ret.valueArr.length - 1] > ret.valueArr[ret.valueArr.length - 2]) {
        if (buystatus.buy == 1 && buystatus.low == 0) {
            if (ret.c1 == 1) {
                buystatus.wait1peridbuy = 1
                buystatus.sync1m = ret1m.pointArr[ret1m.pointArr.length - 1]
                buystatus.waitbuylow = ret.pointArr[ret.pointArr.length - 1]
                return 
            } else if (ret.c1 == 2) {
                buystatus.waitreversebuy = 1
                buystatus.low = ret.pointArr[ret.pointArr.length -1]
                return 
            } else if (ret.c1 > 2) {
                buystatus.uptimes += 1
                buystatus.low = ret.pointArr[ret.pointArr.length -1]
                return 
            }
        }
    } else {
        if (ret.c2 == 1) {
            buystatus.wait1peridsell = 1
            buystatus.sync1m = ret1m.pointArr[ret1m.pointArr.length -1 ]
            buystatus.waitbuyhigh = ret.pointArr[ret.pointArr.length -1]
            return 
        } else if (ret.c2 == 2) {
            buystatus.waitreversesell = 1
            buystatus.high = ret.pointArr[ret.pointArr.length -1]
            return 
        } else if (ret.c2 > 2) {
            buystatus.downtimes += 1
            buystatus.high = ret.pointArr[ret.pointArr.length -1]
            return 
        }
    }
}

sync1m = function () {
    ret = getTrend(1)
    if (ret.valueArr[ret.valueArr.length - 1] > ret.valueArr[ret.valueArr.length - 2]) {
        if (buyStatus.wait1peridbuy == 1) {
        
        }
    } else {

    }
}

var location = {};
if (ret1h.direction == 1) {
    if (ret15m.direction == 1) {
        if (ret1h.c1 > 1 && ret1h.c3 != 1 && ret15m.c1 > 1 && ret15m.c3 != 1 && ret1m.c2 == 2 && sellstatus == 1) {
            location = getLocation()
        } else if (ret1h.c1 > 1 && ret1h.c3 != 1 && ret15m.c2 == 2 && ret15m.c3 != 1 && ret1m.c1 == 0) {
            sell;
        } else if () {

        }



    } else {
        if (ret1h.c1 > 1) {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        } else {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        }

        if (ret1h.c2 > 1) {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        } else {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        }
    }
} else {
    if (ret15m.direction == 1) {
        if (ret1h.c1 > 1) {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        } else {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        }

        if (ret1h.c2 > 1) {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        } else {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        }
    } else {
        if (ret1h.c1 > 1) {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        } else {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        }

        if (ret1h.c2 > 1) {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        } else {
            if (ret15m.c1 > 1) {

            } else {

            }
            if (ret15m.c2 > 1) {

            } else {

            }
        }
    }
}



a = 2;


console.log(a);
var ret = getTrend1h();

c = 44;

// 20 33 74 88 104 120 144 180
