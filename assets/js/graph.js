// queue()
//     .defer(d3.csv, "https://raw.githubusercontent.com/comanezz/online-banking/master/assets/data/API_IT.NET.BBND.P2_DS2_en_csv_v2_43250.csv")
//     .await(makeGraphs);

// function makeGraphs(error, subData) {
//     var ndx = crossfilter(subData);

//     show_country_name(ndx);

//     dc.renderAll();
// };

// function show_country_name(ndx) {
//     var dim = ndx.dimension(dc.pluck('Country Name'));
//     var group = dim.group();

//     dc.barChart('#data-test')
//         .width(400)
//         .height(300)
//         .margins({top: 10, right: 50, bottom: 30, left: 50})
//         .dimension(dim)
//         .group(group)
//         .transitionDuration(500)
//         .x(d3.scale.ordinal())
//         .xUnits(dc.units.ordinal)
//         .elasticY(true)
//         .xAxisLabel("Country")
//         .yAxis().ticks(20);
// };

queue()
    .defer(d3.csv, "https://raw.githubusercontent.com/Code-Institute-Solutions/DataVisualisationMiniProject/master/02-CreatingYourCharts/01-gender_balance_chart/data/Salaries.csv")
    .await(makeGraphs);
    
function makeGraphs(error, salaryData) {
    var ndx = crossfilter(salaryData);
    
    show_gender_balance(ndx);
    
    dc.renderAll();
}

function show_gender_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();
    
    dc.barChart("#gender-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(20);
}