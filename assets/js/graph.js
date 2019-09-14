queue()
    .defer(d3.csv, "assets/data/API_IT.NET.BBND.P2_DS2_en_csv_v2_43250.csv")
    .await(makeGraphs);

function makeGraphs(error, subData) {
    
};