function line_time(){
    var data = [ 
        ['2018-12-1', 34],
        ['2018-12-2', 31],
        ['2018-12-3', 65],
        ['2018-12-4', 42],];

    var chart_obj = echarts.init(document.getElementById('chart_line_time'));

    var options_time = {
        title: {
            text: '时间坐标'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
               
                params = params[0];
                // console.log(params);
                return params.seriesName + '\t' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '模拟内存数值',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data,
        }]
    };

    chart_obj.setOption(options_time);
}