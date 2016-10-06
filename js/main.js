
$(document).ready( function() {

    $('#spidergraphcontainer').spidergraph({
        'fields': ['RAM','CPU','Weight','Reviews','Price', 'Battery'],
        'gridcolor': 'rgba(255,255,255,0.5)'   
    });
    
    $('#spidergraphcontainer').spidergraph('resetdata');
    
    $('#spidergraphcontainer').spidergraph('setactivedata', { 
        'strokecolor': 'rgba(99,0,0,0.0)',
        'fillcolor': 'rgba(149,0,0,0.6)',
        'data': [3, 2, 3, 4, 9, 2],
		'linear': true
    });


});