var circleChart = function (id) {
    var chartDom = document.getElementById(id);
    var myChart = echarts.init(chartDom);
    var option;

    var c = '#00ff00';
    var num = (Math.random() * 100).toFixed(2) - 0;

    if (num>66) {
        c = 'red';
    }else if(num>33){
        c = 'yellow';
    }

    option = {
        series: [{
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
                show: false
            },
            progress: {
                show: true,
                overlap: false,
                roundCap: false,
                clip: false,
                itemStyle: {
                    color: c
                }
            },
            axisLine: {
                lineStyle: {
                    width: nowSize(7),
                    opacity: 0
                }
            },
            splitLine: {
                show: false,
                distance: 0,
                length: 10
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                distance: 50
            },
            data: [{
                value: 20,
                name: id,
                title: {
                    offsetCenter: ['0%', '-40%']
                },
                detail: {
                    offsetCenter: ['0%', '0%']
                }
            }
            ],
            title: {
                fontSize: nowSize(15),
                color: '#ffffff'
            },
            detail: {
                width: "10%",
                height: "10%",
                fontSize: 8,
                color: '#ffffff',
                formatter: '{value}%'
            }
        }]
    };

    setInterval(function() {
        num = (Math.random() * 100).toFixed(2) - 0;
        if (num>66) {
            c = '#ff0000';
        }else if(num>33){
            c = '#ffff00';
        }else{
            c = '#00ff00'
        }
        option.series[0].pointer.show = false;
        option.series[0].data[0].value = num;
        option.series[0].progress.itemStyle.color = c;
        myChart.setOption(option, true);
    },2000)
    option && myChart.setOption(option);
    return myChart
}
var z = circleChart('cpu');
var x = circleChart('storage');
var y = circleChart('mem');

window.addEventListener("resize",function (){
//    console.log(z._model.option.series[0].title.fontSize);
//    z._model.option.series[0].title.fontSize = nowSize(15);
//    x._model.option.series[0].title.fontSize = nowSize(15);
//    y._model.option.series[0].title.fontSize = nowSize(15);
//    z._model.option.series[0].detail.fontSize = nowSize(8);
//    x._model.option.series[0].detail.fontSize = nowSize(8);
//    y._model.option.series[0].detail.fontSize = nowSize(8);
//    z._model.option.series[0].axisLine.lineStyle.width = nowSize(7);
//    x._model.option.series[0].axisLine.lineStyle.width = nowSize(7);
//    y._model.option.series[0].axisLine.lineStyle.width = nowSize(7);
    z.resize();
    x.resize();
    y.resize();
});