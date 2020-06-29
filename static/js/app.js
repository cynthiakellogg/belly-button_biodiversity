var jsonFile = "/samples.json";
d3.json(jsonFile)
  .then(function (data) {
    // console.log(data);
    var metadata = data.metadata;
    var sampleNames = data.names;
    var samples = data.samples;
    console.log(samples);

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

    dropdown();

    d3.selectAll("#selDataset").on("change", optionChanged);
    function optionChanged() {
      var dropdownMenu = d3.select("#selDataset");
      // Assign the value of the dropdown menu option to a variable
      var value = dropdownMenu.property("value");
      console.log(value);
      buildPlot(value);
    }
    // a whole bunch of logs to target the data
    console.log(samples);
    var arraysofOtuIDs = Object.values(samples[1]);
    console.log(arraysofOtuIDs);
    var sampleValue = Object.values(samples);
    console.log(sampleValue);
    var objectKeys = Object.keys(data);
    console.log(objectKeys);
    // var targeting = data.samples
    console.log(samples);


    // filter function


    //build plot function
    function buildPlot(value) {
      console.log(value);
      console.log("buildPlot function is triggered");
      var test = samples[3].otu_labels;
      var testing = value.test;
      console.log(testing);
      var test2 = samples[2].sample_values;
      //fitler for sampels that have the highest number of otu_ids in their array
      for (var i = 0; i < 10; i++) {
        var xAxis = value[i].test;
        console.log(xAxis);
        var yAxis = value.test2;

        var trace1 = {
          x: xAxis,
          y: yAxis,
          type: "bar",
          orientation: 'h'
        };
      }
      var data = [trace1];

      var layout = {
        title: "Belly Button Grossness",
        xaxis: { title: "OTU IDs" },
        yaxis: { title: "OTU Values" }
      };

      Plotly.newPlot("bar", data, layout);

    }
  })




// Fetch the JSON data and console log it
var jsonFile = "/samples.json";
d3.json(jsonFile)
  .then(function (data) {




  });

d3.json(jsonFile)
  .then(function (data) {
    var metadata = data.metadata;
    // console.log(metadata[0]);
    var meta = Object.entries(metadata[0]);
    var metaDiv = d3.select("#sample-metadata");
    metaDiv.append("p").text(meta[0]);
    metaDiv.append("p").text(meta[1]);
    metaDiv.append("p").text(meta[2]);
    metaDiv.append("p").text(meta[3]);
    metaDiv.append("p").text(meta[4]);
    metaDiv.append("p").text(meta[5]);
    metaDiv.append("p").text(meta[6]);
  })

function chart() {

}

function metadata(){
  
}

function init() {
  var xAxis = [];
  var yAxis = [];
  for (var i = 0; i < 10; i++) {
    console.log("init function");
    var x_init = samples[0].otu_ids[i];
    xAxis.push(x_init);
    // console.log(x_init);
    var y_init = samples[0].sample_values[i];
    yAxis.push(y_init);
    // console.log(y_init);

    var trace1 = {
      x: yAxis,
      y: xAxis,
      type: "bar",
      orientation: 'h'
    };

    var data = [trace1];

    var layout = {
      title: "Test Subject ID# 940",
      xaxis: { title: "OTU IDs" },
      yaxis: { title: "OTU Values" }
    };
  }

  Plotly.newPlot("bar", data, layout);
}

init();