var lineChart = function (id) {
    var chartDom = document.getElementById(id);
    var myChart = echarts.init(chartDom);
    var option;
    var ddata = [820, 932, 901, 934, 1290, 1330, 1320];

    option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: ddata,
            type: 'line',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }]
    };

    setInterval(function() {
        ddata[0] = 1500 * Math.random()
        for (i=0;i<7;i++){
            ddata[i] = 1500 * Math.random()
        }
        myChart.setOption(option, true);
    },2000)

    option && myChart.setOption(option);
    return myChart
}
var dailynew = lineChart('dailynew');

window.addEventListener("resize",function (){
    dailynew.resize();
});
