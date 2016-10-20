
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

    
var laptops = JSON.parse(localStorage.getItem("laptops"));
var digitLaptops = JSON.parse(localStorage.getItem('digitLaptops'));
 
var num = 0;
function addLaptopToDOM(laptop){
    num += 1;
    console.log(laptop)
    var element = $('#compare'); //<div class="close" id="'+i+'close"> <div class="dig-it-button" id="btn'+i+'">I can <strong>Buy</strong> it</div><div class="break" id="'+i+'break>
    var html = $('<div class="comp-product" id ="'+ num + 'comp-product">'+
                '<div class="label" style="background-color: rgba(0,204,120,0.8)">Best Battery</div>'+
                 '<div style="background-color: rgba(0,0,0,0.4); height: 300px; width: 400px;">'+
                 '<div class="close" id ="'+num+'close"></div>'+
                 '<div id="comp-spidergraphcontainer">'+
                 		'<div id="product'+ num + '"></div>'+
				 '</div></div>'+	
                 '<img class = "com-image" src="'+laptop.image_addr +'"></img>'+
				 '<div style="background-color: rgba(0,0,0,0.2); height: 300px; width: 400px;">'+
						'<div class="product-details">'+
                            '<h3>'+ laptop.title +'</h3>'+
                            '<p>'+laptop.price +'</p>'+
                            '<p>'+ laptop.rating +'</p>'+
                        '</div>'+
                 '<div class="purchase-it-button" id = "btn'+ num +'>"Purchase</div></div></div>');

		
                 
    element.append(html);

    $('#btn'+num).live('click', function(e) {
        window.location.href = 'amazon.com';
    });
}
function addAllDigged(){
    var diggedLaptops = JSON.parse(localStorage.getItem('digitLaptops'));
    for(var i = 0; i < 2; i++){
        addLaptopToDOM(diggedLaptops[i]);
        console.log(diggedLaptops[i].image_addr); 
    }
}
window.onload = addAllDigged;