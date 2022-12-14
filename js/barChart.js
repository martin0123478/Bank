const ent = entrevistados;
const cant = cantidad;

setTimeout(() => {
    Highcharts.chart('graficaBarra', {
        chart: {
            renderTo: 'graficaBarra',
            type: 'column'
        },
        title: {
            text: 'Entrevistadores'
        },
        tooltip: {
            shared: true
        },
        xAxis: {
            categories: ent,
            crosshair: true
        },
        yAxis: [{
            title: {
                text: ''
            }
        }, {
            title: {
                text: ''
            },
            minPadding: 0,
            maxPadding: 0,
            max: 100,
            min: 0,
            opposite: true,
            labels: {
                format: "{value}%"
            }
        }],
        plotOptions: {
            series: {
                showInLegend: false
                // general options for all series
            }
        },
        series: [{
            type: 'pareto',
            name: 'Pareto',
            yAxis: 1,
            zIndex: 10,
            baseSeries: 1,
            color: 'orange',
            tooltip: {
                valueDecimals: 2,
                valueSuffix: '%'
            }
        }, {
            name: 'Entrevistados',
            type: 'column',
            color: 'grey',
            zIndex: 2,
            data: cant
        }]
    });
}, 500);