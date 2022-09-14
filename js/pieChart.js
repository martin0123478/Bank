// Funcion que consume los campos de la api y genera objetos de cada usuario y los agregar a un arreglo
/*let entrevistadores = [];
function getData(info){
    for (i = 0; i < 4; i++){
        let alias = info[i].username;
        let porcentaje = (info[i].id) * 10;
        let nuevoEntrevistador = new entrevistador(alias, porcentaje);
        entrevistadores.push(nuevoEntrevistador);
    }
    getSerie(entrevistadores);
}*/
//Funcion que genera los objetos
/*function entrevistador (alias, porcentaje){
    this.alias = alias;
    this.porcentaje = porcentaje;
}*/

//Funcion que genera los objetos y los agrega a un arreglo que generara las series
var seriesInfo = [];
function getSerie(entrevistadores){
    entrevistadores.forEach( (entrevistador) => {
        let nombreEntrevistador = entrevistador.alias;
        let porcentajeEntrevistador = entrevistador.porcentaje
        let objetoSerie = { 
            name: nombreEntrevistador,
            y: porcentajeEntrevistador
        }
        seriesInfo.push(objetoSerie);
    })
};

// Data retrieved from https://netmarketshare.com/
// Make monochrome colors
var pieColors = (function () {
    var colors = ['blue','orange','grey'],
        base = Highcharts.getOptions().colors[0],
        i;
    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

setTimeout(() => {
    Highcharts.chart('graficaPie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Cantidad'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: pieColors,
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: seriesInfo
         }]
    });
}, 500);