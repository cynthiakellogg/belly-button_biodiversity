// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//    Use sample_values as the values for the bar chart.
//    Use otu_ids as the labels for the bar chart.
//    Use otu_labels as the hovertext for the chart.

// for dropdown, we need an event that selects the individual
// index numbered 0-152 have it display the samples data for that individual
// 

// {names: ["940", ...],
// samples: [{
//             id: "940",
//             otu_ids: [],
//             otu_labels: [],
//             sample_values: [],
// }]
// }


var jsonFile = "/samples.json";


// Fetch the JSON data and console log it
d3.json(jsonFile)
  .then(function (jsonObject) {
    var metadata = jsonObject.metadata;
    var sampleNames = jsonObject.names;
    var samples = jsonObject.samples;
    // console.log(metadata);
    // console.log(sampleNames);
    // console.log(samples);
    console.log(metadata[0]);


    dropdown(); 
    init();
    //intitializing with test sample id #940
    
    

    // create a function to select and append
    function dropdown() {
      console.log("wer")
      var select = d3.select("#selDataset");

      sampleNames.forEach(function (sampleName) {
        select
          .append("option")
          .text(sampleName)
          .property("value", sampleName)
      });
    }
    
    function init() {
      var xAxis = [];
      var yAxis = [];
      for (var i=0; i < 10; i++) {
        
        console.log("init function");
        var x_init = samples[0].otu_ids[i];
        xAxis.push(x_init);
        console.log(x_init);
        var y_init = samples[0].sample_values[i];
        yAxis.push(y_init);
        console.log(y_init);
        
        var trace1 = {
          x: yAxis,
          y: xAxis,
          type: "bar",
          orientation: 'h'
        };
    
        var data = [trace1];
    
        var layout = {
          title: "Test Subject ID# 940",
          xaxis: { title: "OTU IDs"},
          yaxis: { title: "OTU Values"}
        };
    }
  
    Plotly.newPlot("bar", data, layout);
  
    }
  });

  d3.json(jsonFile)
  .then(function (jsonObject) {
    var metadata = jsonObject.metadata;
    console.log(metadata[0]);
    var meta = Object.entries(metadata[0]);
    var metaDiv = d3.select("#sample-metadata");
    metaDiv.append("p").text(meta);
})

// create a filter function
    // function filterSamples(sample){
    //   return sample.otu_ids;
    // };

    // var filteredSamples = samples.filter(filterSamples);
    // console.log(filteredSamples);
    // var otus = filteredSamples.map(otu => otu.otu_ids);
    // console.log(otus);
    // var sampleValues = filteredSamples.map(value => value.sample_values);
    // console.log(sampleValues);


    
    // // bar chart
    // var trace1 = {
    //   x: otus,
    //   y: sampleValues,
    //   type: "bar",
    //   orientation: 'h'
    // };

    // var data = [trace1];

    // var layout = {
    //   title: "Belly Button Grossness",
    //   xaxis: { title: "OTU IDs"},
    //   yaxis: { title: "OTU Values"}
    // };

    // Plotly.newPlot("bar", data, layout);



  
