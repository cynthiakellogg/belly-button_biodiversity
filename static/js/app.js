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
    //
    console.log(jsonObject);

    //turn it into an array with/object? 
    // var newDataArray = JSON.parse(jsonObject);
    // console.log(newDataArray);

    //I want to loop through object to get full list of names
    var metadata = jsonObject.metadata;
    var sampleNames = jsonObject.names;
    var samples = jsonObject.samples;
    console.log(metadata);
    console.log(sampleNames);
    console.log(samples);

    dropdown();

    //creating variables for the chart or rather creating filterable objects
    var sampleIDs = jsonObject.samples[0].otu_ids;
    console.log(sampleIDs);
    var sampleValues = jsonObject.samples.sample_values;
    var otuIDs = jsonObject.samples.otu_ids;
    var labels = jsonObject.samples.otu_labels;

    //filter through the data: want top 10 of the samlpe_values for individual picked

    // bar chart
    var trace1 = {
      x: otuIDs,
      y: sampleValues,
      type: "bar",
      orientation: 'h'
    };

    var data = [trace1];

    var layout = {
      title: "'Bar' Chart",
      // xaxis: { title: "Drinks"},
      // yaxis: { title: "% of Drinks Ordered"}
    };

    Plotly.newPlot("bar", data, layout);




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
  });


