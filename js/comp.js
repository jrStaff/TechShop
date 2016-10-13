
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