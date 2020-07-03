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
        var newVar = samples.filter(sampleObject => sampleObject.id == sampleValue);
        var sortedNewVar = newVar[0];
        console.log(sortedNewVar);
        var ids = newVar.map(id => id.otu_ids);

        var values = newVar.map(value => value.sample_values);
        var bubbleY = values[0];
        

        var yAxis = ids[0];
        console.log(yAxis);
        var sortY = yAxis.sort((function(a, b){return b - a}));
        console.log(sortY);
        var xAxis = values[0];
        
        // console.log(filteredLabels);
        
        var trace1 = {
            x: xAxis.slice(0, 10),
            y: sortY.slice(0, 10),
            
            type: "bar",
            orientation: 'h'
            };
            
        var data = [trace1];
    
            var layout = {
            title: `Belly Button Grossness for Sample # ${sampleValue}`,
            xaxis: { title: "OTU Sample Value" },
            yaxis: { title: "OTU ID # "},
            showlegend: false
            };
        
        Plotly.newPlot("bar", data, layout);

        var traceBubble = {
            x: yAxis.slice(0, 10),
            y: bubbleY.slice(0, 10),
            mode: 'markers',
            marker: {
              size: bubbleY.slice(0,10),
              color: yAxis.slice(0, 10)
            }
          };
          
          var data = [traceBubble];
          
          var layout = {
            title: 'Belly Buttons',
            showlegend: false,
            height: 600,
            width: 600
          };
          
          Plotly.newPlot('bubble', data, layout);
    });

    
    
}
function metadata(sampleValue) {
    // console.log(sampleValue);
    // use d3 to read json
    d3.json("samples.json").then(function (data) {
        // destructure data
        var metadata = data.metadata;
        // console.log(metadata);
        // define a filter function
        function filterMetadata(sampleValue) {
            // console.log(sampleValue);
        
            for (var i = 0; i <metadata.length; i++){
                // console.log(sampleValue);
                // console.log(metadata[i].id);
                if (sampleValue == metadata[i].id) {
                    // console.log(sampleValue);
                    // console.log(metadata[i].id);
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