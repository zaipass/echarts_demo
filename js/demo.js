// 定义全局变量
var myChart = '';
var option_one = '';

window.onload = function(){
    own();
}

// 定义函数
function own(){
    // 基于准备好的dom，初始化echarts实例
    myChart= echarts.init(document.getElementById('chart_line_one'));

    // 指定图表的配置项和数据
    option_one = {
        grid: {
            // 显示内层的布局
            show: true,
            zlevel: 1,
            z: 1,
            // 表格内层的背景
            backgroundColor: "rgba(105,100,2,0.5)",
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // 横坐标的值
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            // 纵坐标根据data值自己识别,不需重写(也可以重写)
            type: 'value'
        },
        series: [{
            // 需要添加的值
            data: [820, 400, 901, 934, 1290, 1530, 1320],
            type: 'line',
            // 平滑--(如果想要折现图,可以去除此行)
            smooth: true,
            // 是否显示转折点(默认true)
            showSymbol: false,
            // 线的颜色
            color: "black",
            borderColor: "white",
            // 值域背景的颜色
            areaStyle: {
                color: "blue",
            },
        }],
        // 表格最外层的背景
        backgroundColor: 'rgba(100,200,200,1)',
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option_one);

    default_show();
    
}

// 鼠标停在div,显示转折点
function show_point(){
    option_one["series"][0]["showSymbol"] = true;

    myChart.setOption(option_one);
}

// 鼠标移开div,转折点消失
function hide_point() {
    option_one["series"][0]["showSymbol"] = false;
    myChart.setOption(option_one);
}