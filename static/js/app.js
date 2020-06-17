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


var dataSet = "/samples.json";
console.log(typeof dataSet);



// Fetch the JSON data and console log it
d3.json(dataSet).then(function(data) {
  var sampleID = data.samples.id;
  console.log(sampleID);
  var sampleValues = data.samples.sample_values;
  var otuIDs = data.samples.otu_ids; 
  var labels = data.samples.otu_labels;
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
});



  
 