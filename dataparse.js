var d3 = require('d3');


d3.csv("/public/MIDLOC_1.1.csv", function(csv){

	var data = d3.nest().key(function(d) { return d.DispNum3;})
				 .entries(csv);

	console.log(data);
})

