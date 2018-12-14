// 定义全局变量
var myChart = '';
var option = '';

window.onload = function(){
    // 基于准备好的dom，初始化echarts实例
     myChart= echarts.init(document.getElementById('chart_line_one'));

    // 指定图表的配置项和数据
    option = {
        grid: {
            show: true,
            zlevel: 1,
            z: 1,
            backgroundColor: "rgba(105,100,2,0.5)",
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 400, 901, 934, 1290, 1530, 1320],
            type: 'line',
            smooth: true,
            showSymbol: false,
            color: "black",
            borderColor: "red",
            areaStyle: {
                color: "blue",
            },
        }],
        backgroundColor: 'rgba(100,200,200,1)',
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function show_point(){
    option["series"][0]["showSymbol"] = true;

    myChart.setOption(option);
}

function hide_point() {
    option["series"][0]["showSymbol"] = false;
    myChart.setOption(option);
}