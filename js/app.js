//import * as d3  from "d3";
/*
$.ajax({
  url: 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

let dataUrl='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'*/
//console.log(JSON.stringify(JSON.parse(dataUrl)))

var margin={top:20, right:
  30, bottom:70, left:50},
width = 600 - margin.left-margin.right,
height = 1000-margin.top-margin.bottom;

/*Set ranges*/
var x = d3.scale.ordinal().rangeRoundBands([0,width],0.25);
var y = d3.scale.linear().range([height, 0]);

/*Define axises*/
var svg=d3.select('body').append('svg').attr('width',width+margin.left+margin.right).attr('height', height+margin.top+margin.bottom).append('g').attr('transform',`translate(${margin.left},${margin.top})`)
var xAxis=d3.svg.axis().scale(x).orient("bottom")

var yAxis=d3.svg.axis().scale(y).orient("left")




/*Load data*/
d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',function(error,data){
  var rawData=data.data;


  x.domain(rawData.map(function(d){
    return d[0]
  }));
  y.domain([0,d3.max(rawData,function(d){
    return d[1]
  })]);

  /*Add axises*/
  svg.append('g').attr('class','x-axis').attr('transform',`translate(${width})`).call(xAxis).selectAll('text').style('text-anchor','end').attr('dx',"-0.81em").attr('dy','-0.55em').attr('transform','rotate(-90)');

  svg.append('g').attr('class','y-axis').call(yAxis).append('text').attr('transform','rotate(-90)').attr('y',5).attr('dy','0.71em').style('text-anchor','end').text('Frequency')

  /*Add Bar chart*/
  svg.selectAll(".bar")
  .data(rawData)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", function(d){
    return x(d[0])
  })
  .attr("y", function(d){
    return y(d[1])
  })
  .attr("width", x.rangeBand())
  .attr("height", function(d){
    return height-y(d[1])
  })

})

//console.log(svg.attr('height'))
//var data = [4, 8, 15, 16, 23, 42];
/*
var gdpData=d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(data=>{
  var rawData=data.data
  console.log(rawData.map(d=>d[0]))
  x.domain(rawData.map(d=>d[0]))
  y.domain([0,height/10])
  console.log(y)
  g.append("g")
.attr("class", "axis axis-x")
.attr("transform", `translate(0,${height})`)
.call(d3.axisBottom(x).ticks(275));

g.append("g")
.attr("class", "axis axis-y")
.call(d3.axisLeft(y));

g.selectAll(".bar")
.data(rawData)
.enter().append("rect")
.attr("class", "bar")
.attr("x", d => x(d[0]))
.attr("y", d => -y(d[1])/1000)
.attr("width", x.bandwidth())
.attr("height", d => (-1)*y(d[1]))-height;

});*/
