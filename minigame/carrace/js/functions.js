function formatSeconds(value) {

    var theTime = parseInt(value);// 秒

    var theTime1 = 0;// 分

    var theTime2 = 0;// 小时

    if(theTime > 60) {

        theTime1 = parseInt(theTime/60);

        theTime = parseInt(theTime%60);

            if(theTime1 > 60) {

            theTime2 = parseInt(theTime1/60);

            theTime1 = parseInt(theTime1%60);

            }

    }

        var result = ""+parseInt(theTime)+"秒";

        if(theTime1 > 0) {

        result = ""+parseInt(theTime1)+"分"+result;

        }

        if(theTime2 > 0) {

        result = ""+parseInt(theTime2)+"小时"+result;

        }

    return result;

}

function formatHours(value) {

    var theTime = parseInt(value);// 秒

    var theTime1 = 0;// 分

    var theTime2 = 0;// 小时

    if(theTime > 60) {

        theTime1 = parseInt(theTime/60);

        theTime = parseInt(theTime%60);

            if(theTime1 > 60) {

            theTime2 = parseInt(theTime1/60);

            theTime1 = parseInt(theTime1%60);

            }

    }

        var result = '';

        if(theTime1 > 0) {

        result = ""+parseInt(theTime1)+"分"+result;

        }

        if(theTime2 > 0) {

        result = ""+parseInt(theTime2)+"小时"+result;

        }

    return result;

}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/*调用： 
var time1 = new Date().Format("yyyy-MM-dd");
var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  */


/** 
 * 金额按千位逗号分割 
 * @character_set UTF-8 
 * @author Jerry.li(hzjerry@gmail.com) 
 * @version 1.2014.08.24.2143 
 *  Example 
 *  <code> 
 *      alert($.formatMoney(1234.345, 2)); //=>1,234.35 
 *      alert($.formatMoney(-1234.345, 2)); //=>-1,234.35 
 *      alert($.unformatMoney(1,234.345)); //=>1234.35 
 *      alert($.unformatMoney(-1,234.345)); //=>-1234.35 
 *  </code> 
 */  
;(function($)  
{  
    $.extend({  
        /** 
         * 数字千分位格式化 
         * @public 
         * @param mixed mVal 数值 
         * @param int iAccuracy 小数位精度(默认为2) 
         * @return string 
         */  
        formatMoney:function(mVal, iAccuracy){  
            var fTmp = 0.00;//临时变量  
            var iFra = 0;//小数部分  
            var iInt = 0;//整数部分  
            var aBuf = new Array(); //输出缓存  
            var bPositive = true; //保存正负值标记(true:正数)  
            /** 
             * 输出定长字符串，不够补0 
             * <li>闭包函数</li> 
             * @param int iVal 值 
             * @param int iLen 输出的长度 
             */  
            function funZero(iVal, iLen){  
                var sTmp = iVal.toString();  
                var sBuf = new Array();  
                for(var i=0,iLoop=iLen-sTmp.length; i<iLoop; i++)  
                    sBuf.push('0');  
                sBuf.push(sTmp);  
                return sBuf.join('');  
            };  
  
            if (typeof(iAccuracy) === 'undefined')  
                iAccuracy = 2;  
            bPositive = (mVal >= 0);//取出正负号  
            fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp);//强制转换为绝对值数浮点  
            //所有内容用正数规则处理  
            iInt = parseInt(fTmp); //分离整数部分  
            iFra = parseInt((fTmp - iInt) * Math.pow(10,iAccuracy) + 0.5); //分离小数部分(四舍五入)  
  
            do{  
                aBuf.unshift(funZero(iInt % 1000, 3));  
            }while((iInt = parseInt(iInt/1000)));  
            aBuf[0] = parseInt(aBuf[0]).toString();//最高段区去掉前导0  
            return ((bPositive)?'':'-') + aBuf.join(',') +'.'+ ((0 === iFra)?'00':funZero(iFra, iAccuracy));  
        },  
        /** 
         * 将千分位格式的数字字符串转换为浮点数 
         * @public 
         * @param string sVal 数值字符串 
         * @return float 
         */  
        unformatMoney:function(sVal){  
            var fTmp = parseFloat(sVal.replace(/,/g, ''));  
            return (isNaN(fTmp) ? 0 : fTmp);  
        },  
    });  
})(jQuery); 