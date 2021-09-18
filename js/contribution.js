var bubbleChart = function (id) {
    var chartDom = document.getElementById(id);
    var myChart = echarts.init(chartDom);
    var option;

    var data = [
        [[5000,0.8,500000000,'爬虫1']],[[3000,0.5,500000000,'Canada']],[[1000,0.3,500000000,'caijirenwuchangmingzi']],[[1500,0.3,500000000,'v']],[[2000,0.3,500000000,'@#!$&*&%^$%#@$#$%$^']],[[1050,0.3,500000000,' ']]
    ];

    option = {
        //backgroundColor: '#000000',
        legend: {
            textStyle:{
                color:'#ffffff',
                fontSize: nowSize(10)
            },
            type: 'scroll',
            pageButtonItemGap:0,
            pageIconColor:'#dddddd',
            pageTextStyle: {
                color: "rgba(200, 200, 200, 1)",
                fontSize: nowSize(12)
            },
            pageIconInactiveColor:'#333333',
            left: '5%',
            top: '3%',
            data: []
        },
        xAxis: {
            nameLocation: 'middle',
            nameTextStyle:{
                color:'#ffffff',
                padding: [8,0,0,0]
            },
            splitLine: {
                show:false
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#ffffff"
                }
            },
            //scale:true,
            name:'运行时间(天)'
        },
        yAxis: {
            nameTextStyle:{
                color:'#ffffff',
                padding: [0,0,0,5]
            },
            splitLine: {
                show:false
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#ffffff"
                }
            },
            max: 100,
            name:'成功率(%)'
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: true,
                type: 'slider',
                top: '87%',
                left: '15%',
                height: '0',
                start: 0,
                end: 100,
                handleIcon: 'none',
                moveHandleIcon: 'none',
                moveHandleSize: 10,
                moveHandleStyle:{
                    color:'rgba(255, 255, 255, 0.7)'
                },
                showDetail:false,
                borderColor: "rgba(0, 0, 0, 0)"
            }
        ],
        series: []
    };

    for(i=0;i<data.length;i++) {
        data[i][0][1] = data[i][0][1] * 100
        option.series[i] = {
            name: data[i][0][3],
            data: data[i],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                focus: 'series',
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    color: '#ffffff',
                    position: 'top'
                }
            },
            itemStyle: {
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')'
                }, {
                    offset: 1,
                    color: 'rgb(0, 0, '+Math.round(Math.random()*255)+')'
                }])
            }
        }
        option.legend.data[i] = data[i][0][3]
    }


    option && myChart.setOption(option);
    return myChart
}

var contribution = bubbleChart('contribution')

window.addEventListener("resize",function (){
    contribution._model.option.legend[0].textStyle.fontSize = nowSize(10);
    contribution._model.option.legend[0].pageTextStyle.fontSize = nowSize(12);
    contribution.resize();
});