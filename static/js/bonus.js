function optionChanged(sampleValue) {
    // generate a new chart
    chart(sampleValue);
    // generate new metadata
    metadata(sampleValue);
}

function chart(sampleValue) {
    // use d3 to read json
    d3.json("samples.json").then(function (data) {
        // destructure data
        var samples = data.samples;
    });
}
function metadata(sampleValue) {
    console.log(sampleValue);
    // use d3 to read json
    d3.json("samples.json").then(function (data) {
        // destructure data
        var metadata = data.metadata;
        console.log(metadata);
        // define a filter function
        function filterMetadata(sampleValue) {
            console.log(sampleValue);
        
            for (var i = 0; i <metadata.length; i++){
                console.log(sampleValue);
                console.log(metadata[i].id);
                if (sampleValue == metadata[i].id) {
                    console.log(sampleValue);
                    console.log(metadata[i].id);
                    return metadata[i];
                }
            }
        }
        // filter the metadata array using the sample value
        var sample = filterMetadata(sampleValue);
        console.log(sample);
        // grab a reference to the metadata div
        var div = d3.select("#sample-metadata");
        // reset the metadata
        div.html("");
        // loop through the sample object and extract the key value pairs
        Object.entries(sample).forEach(([key, value]) => {
            div.append("p").text(key + ": " + value);
        });
    });
}
function init() {
    // grab a reference to the dropdown
    var dropDown = d3.select("#selDataset");
    // initial charts
    d3.json("samples.json").then(function (data) {
        // destructure data
        var names = data.names;
        // genereate a new HTML option for each name
        for (var i = 0; i < names.length; i++) {
            dropDown
                .append("option")
                .text(names[i])
                .property("value", names[i]);
        }
        // use the first element in names
        chart(names[0]);
        metadata(names[0]);
    })
}
init();