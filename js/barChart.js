Highcharts.chart('graficaBarra', {
    chart: {
        renderTo: 'graficaBarra',
        type: 'column'
    },
    title: {
        text: 'Titulo del grafico'
    },
    tooltip: {
        shared: true
    },
    xAxis: {
        categories: [
            'Entrevistado8',
            'Entrevistado5',
            'Entrevistado7',
            'Entrevistado3',
            'Entrevistado4',
            'Entrevistado6',
            'Entrevistado8',
            'Entrevistado12',
            'Entrevistado2',
            'Entrevistado2',
            'Entrevistado10',
            'Entrevistado11'
        ],
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
        data: [3, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    }]
});