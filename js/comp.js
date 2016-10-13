
var digitLaptops = JSON.parse(localStorage.getItem('digitLaptops'));
$('#spidergraphcomparison').spidergraph({
        'fields': ['RAM','CPU','Low Weight','Good Reviews','Lower Price', 'Battery Life'],
        'increments': 5,
        'gridcolor': 'rgba(255,255,255,0.5)'   
        
    }); 

 $('#spidergraphcomparison').spidergraph('resetdata');
    
    $('#spidergraphcomparison').spidergraph('setactivedata', { 
        'strokecolor': 'rgba(230,104,230,0)',
        'fillcolor': 'rgba(30,104,230,0.8)',
        'data': [5, 4, 1, 2, 3, 4],
		'linear': true
    });	
$('#spidergraphcomparison').spidergraph('addlayer', { 
    'strokecolor': 'rgba(230,204,230,0)',
    'fillcolor': 'rgba(230,100,100,0.8)',
    'data': [2, 3, 2, 3, 4, 5],
    'linear': true
});

$('#spidergraphcomparison').spidergraph('addlayer', { 
    'strokecolor': 'rgba(0,204,230,0)',
    'fillcolor': 'rgba(0,204,120,0.8)',
    'data': [3, 2, 1, 4, 1, 5],
    'linear': true
});


$('#product1').spidergraph({
        'fields': ['RAM','CPU','Low Weight','Good Reviews','Lower Price', 'Battery Life'],
        'increments': 5,
        'gridcolor': 'rgba(255,255,255,0.5)'   
        
    }); 

 $('#product1').spidergraph('resetdata');
    
    $('#product1').spidergraph('setactivedata', { 
        'strokecolor': 'rgba(230,104,230,0)',
        'fillcolor': 'rgba(30,104,230,0.8)',
        'data': [5, 4, 1, 2, 3, 4],
		'linear': true
    });	
	
	
	
	
	$('#product2').spidergraph({
        'fields': ['RAM','CPU','Low Weight','Good Reviews','Lower Price', 'Battery Life'],
        'increments': 5,
        'gridcolor': 'rgba(255,255,255,0.5)'   
        
    }); 

 $('#product2').spidergraph('resetdata');
    
    $('#product2').spidergraph('setactivedata', { 
   'strokecolor': 'rgba(230,204,230,0)',
    'fillcolor': 'rgba(230,100,100,0.8)',
    'data': [2, 3, 2, 3, 4, 5],
    'linear': true
    });	
	
	
	
		$('#product3').spidergraph({
        'fields': ['RAM','CPU','Low Weight','Good Reviews','Lower Price', 'Battery Life'],
        'increments': 5,
        'gridcolor': 'rgba(255,255,255,0.5)'   
        
    }); 

 $('#product3').spidergraph('resetdata');
    
    $('#product3').spidergraph('setactivedata', { 
  'strokecolor': 'rgba(0,204,230,0)',
    'fillcolor': 'rgba(0,204,120,0.8)',
    'data': [3, 2, 1, 4, 1, 5],
    'linear': true
    });	

var globalDOMLaptops = 0;
var showLaptops = [];
var digitLaptops = [];
var laptops = JSON.parse(localStorage.getItem("laptops"));
if(laptops == null){
    laptops = makeLaptopArray(productList);
}  
localStorage.setItem('digitLaptops', JSON.stringify(digitLaptops));
localStorage.setItem('showLaptops', JSON.stringify(showLaptops));
var i = 0;
function addLaptopToDOM(laptop){
    i += 1;
    console.log(laptop);
    var element = $('#compare'); //<div class="close" id="'+i+'close"> <div class="dig-it-button" id="btn'+i+'">I can <strong>Buy</strong> it</div><div class="break" id="'+i+'break>
    var html = $('<div class="comp-product"><canvas id="canvas" style="background-image: url(' +laptop.image_addr +'); width: 400px; height: 300px; background-size: cover"></canvas><div style="background-color: rgba(0,0,0,0.2); height: 300px; width: 400px;"><div id="comp-spidergraphcontainer"><p>'+ laptop.title +'</p><p>'+laptop.price +'</p><p>'+ laptop.rating +'</p></div></div></div></div></div>');
    element.append(html);


    $('#btn'+globalDOMLaptops).live('click', function(e) { 
        var num = parseInt(/\d+/.exec(e.srcElement.id));
         $('#'+num+'comp-product').remove();
         $('#'+num+'close').remove();
         $('#'+num+'break').remove();
         $('#btn'+num).remove();
         console.log(showLaptops[0]);
        digitLaptops.push(showLaptops[num]);
        localStorage.setItem('digitLaptops', JSON.stringify(digitLaptops));
        console.log("Digged it!");
    });
}
function addAllDigged(){
    var diggedLaptops = JSON.parse(localStorage.getItem('digitLaptops'));
    for(var i = 0; i < 3; i++){
        addLaptopToDOM(diggedLaptops[i]);
    }
}
window.onload = addAllDigged;

