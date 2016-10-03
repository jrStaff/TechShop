
$(document).ready( function() {

    $('#spidergraphcontainer').spidergraph({
        'fields': ['RAM','CPU','Weight','Reviews','Price'],
        'gridcolor': 'rgba(20,20,20,1)'   
    });
    $('#spidergraphcontainer').spidergraph('addlayer', { 
        'strokecolor': '#E8175D',
        'fillcolor': '#A8A7A7',     
        'data': [0, 8, 2, 4, 9]
    });
    $('#spidergraphcontainer').spidergraph('addlayer', { 
        'strokecolor': '#CC527A',
        'fillcolor': '#363636',
        'data': [5, 4, 9, 9, 4]
    });

    
    $('#spidergraphcontainer').spidergraph('resetdata');
    
    $('#spidergraphcontainer').spidergraph('setactivedata', { 
        'strokecolor': '#FFAAA6',
        'fillcolor': '#FF8C94',
        'data': [3, 2, 3, 4, 9]
    });
    $('#spidergraphcontainer').spidergraph('addlayer', { 
        'strokecolor': 'rgba(230,204,0,0.8)',
        'fillcolor': 'rgba(230,204,0,0.6)',
        'data': [5, 4, 9, 8, 1]
    });
    $('#spidergraphcontainer').spidergraph('addlayer', { 
        'strokecolor': 'rgba(230,104,0,0.8)',
        'fillcolor': 'rgba(230,104,0,0.6)',
        'data': [0, 8, 2, 3, 5]
    });

});