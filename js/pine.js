
function default_show(){
    var pie_chart= echarts.init(document.getElementById('chart_pie_two'));

    // 饼图的数据和对应的名称
    var d = [
        {value:20, name:'占用'},
        {value:100, name:'空闲'}];
    
    // 标题
    var title_name = '空间[/]';

    var option_two = {
        title: {
            text: title_name,
            x: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            bottom: 0,
            formatter: function(name){
                var data = d;
                var target ;
                for(var v=0;v<data.length;v++){
                    if(data[v]['name'] == name){
                        target = data[v]['value']
                    }
                }
                return name + target
            },
        },
        series: [
            {
                name:'空间占用',
                type:'pie',
                radius: ['35%', '70%'],
                // avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                        // 设置圈上的字体大小
                        fontSize: '20',
                        color:'rgba(255,255,55,0.8)',
                        position: 'inside',
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            // 设置hover时候的字体大小
                            fontSize: '26',
                            fontWeight: 'bold',
                            color:'rgba(255,255,55,0.8)',
                        }
                    },
                    zlevel: 1,
                    z: 1,
                },
                data:d,
                
            }
        ]
    };
    pie_chart.setOption(option_two);
}