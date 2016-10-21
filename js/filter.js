
var profile = JSON.parse(localStorage.getItem("profile"));
if(profile == null) alert("Set some profile information on profile page up first!");
var reviewsSlider = document.getElementById('reviews-toggle');
noUiSlider.create(reviewsSlider, {
    start: [profile.reviewRange.low, profile.reviewRange.high],
    step: 1,
    connect: true,
    tooltips: [ true, true ],
    range: {
        'min': [ 1 ],
        'max': [ 5 ]
    },
    format: wNumb({
        decimals: 0,
        thousand: ',',
		postfix: ' STARS',
    })
});

reviewsSlider.noUiSlider.on('set.one', function(){
    profile.reviewRange.low = parseInt(reviewsSlider.noUiSlider.get()[0]);
    profile.reviewRange.high = reviewsSlider.noUiSlider.get()[1];
    fillandDisplayShowLaptops();
    localStorage.setItem("profile", JSON.stringify(profile));
});

var priceSlider = document.getElementById('price-toggle');
noUiSlider.create(priceSlider, {
    start: [profile.priceRange.low, profile.priceRange.high],
    connect: true,
    tooltips: [ true, true ],
    range: {
        'min': [100],
        'max': [2200]
    },
        format: wNumb({
        decimals: 0,
        thousand: ',',
		prefix: '$',
    })
});
priceSlider.noUiSlider.on('set.one', function(){
    profile.priceRange.low = priceSlider.noUiSlider.get()[0];
    profile.priceRange.high = priceSlider.noUiSlider.get()[1];
    fillandDisplayShowLaptops();
    localStorage.setItem("profile", JSON.stringify(profile));
});

var batterySlider = document.getElementById('battery-toggle');

noUiSlider.create(batterySlider, {
    start: [profile.batteryRange.low, profile.batteryRange.high],
    step: 1,
    connect: true,
    tooltips: [ true, true ],
    range: {
        'min': [3],
        'max': [8]
    },
        format: wNumb({
        decimals: 0,
        thousand: ',',
        postfix: ' HRS',
    })
});

var ramSlider = document.getElementById('ram-toggle');

noUiSlider.create(ramSlider, {
    start: [profile.batteryRange.low, profile.batteryRange.high],
    step: 2,
    connect: true,
    tooltips: [ true, true ],
    range: {
        'min': [2],
        'max': [16]
    },
        format: wNumb({
        decimals: 0,
        thousand: ',',
        postfix: 'GB',
    })
});




batterySlider.noUiSlider.on('set.one', function(){
    profile.batteryRange.low = batterySlider.noUiSlider.get()[0];
    profile.batteryRange.high = batterySlider.noUiSlider.get()[1];
    fillandDisplayShowLaptops();
    localStorage.setItem("profile", JSON.stringify(profile));
});

var weightSlider = document.getElementById('weight-toggle');
noUiSlider.create(weightSlider, {
    start: [1, 10],
    step: 1,
    connect: true,
    tooltips: [ true, true ],
    range: {
        'min': [1],
        'max': [10]
    },
        format: wNumb({
        decimals: 0,
        thousand: ',',
        postfix: ' LBS',
    })
});
weightSlider.noUiSlider.on('set.one', function(){
    profile.weightRange.low = weightSlider.noUiSlider.get()[0];
    profile.weightRange.high = weightSlider.noUiSlider.get()[1];
    fillandDisplayShowLaptops();
    localStorage.setItem("profile", JSON.stringify(profile));
});


var globalDOMLaptops = 0;
var showLaptops = [];
var remainingLaps = JSON.parse(localStorage.getItem("laptops"));
var digitLaptops = [];
var laptops = JSON.parse(localStorage.getItem("laptops"));
if(laptops == null){
    laptops = makeLaptopArray(productList);
}  
localStorage.setItem('digitLaptops', JSON.stringify(digitLaptops));
localStorage.setItem('showLaptops', JSON.stringify(showLaptops));

function addLaptopToDOM(laptop){
    globalDOMLaptops += 1;
    var element = $('#products');
    var html = $('<div class="close" id="'+globalDOMLaptops+'close"></div>' +
                    '<li class="product" id ="'+ globalDOMLaptops +'product">'+
                    '<img src="'+laptop.image_addr +'"></img>'+
                    '<div class="product-content">'+
                       '<h3>'+ laptop.title +'</h3>'+
                       '<p> Battery life: ' + parseInt(laptop.battery) + ' hrs</p>'+
                       '<p>Price: ' + laptop.price +'$</p>'+
                       '<p> '+ laptop.rating+' stars out of 5</p>'+
                   " </div></li>"+
                    '<div class="dig-it-button" id="btn'+globalDOMLaptops+'">I can <strong>Dig</strong> it</div>'+
                    '<div class="break" id="'+globalDOMLaptops+'break></div>');

    element.append(html);

    var html = $('<div id="'+globalDOMLaptops+'master><div class="close" id="'+globalDOMLaptops+'close"></div><li class="product" id ="'+ globalDOMLaptops +'product"><img src="'+laptop.image_addr +'"></img><div class="product-content"><h3>'+ laptop.title +'</h3><p>' + laptop.description + '</p><p>' + laptop.price +'$</p><p> '+ laptop.rating+' stars out of 5</p></div></li><div class="dig-it-button" id="btn'+globalDOMLaptops+'">I can <strong>Dig</strong> it</div><div class="break" id="'+globalDOMLaptops+'break></div></div>');
    element.append(html);

    showLaptops.push(laptop);

    $('#btn'+globalDOMLaptops).live('click', function(e) { 
        var num = parseInt(/\d+/.exec(e.srcElement.id));
        $('#'+num+'product').remove();
         $('#'+num+'close').remove();
         $('#'+num+'break').remove();
         $('#btn'+num).remove();
        digitLaptops.push(showLaptops[num]);
        remainingLaps = remainingLaps.filter(function(laptop) {
            return laptop.description !== showLaptops[num].description;
        });
        localStorage.setItem('digitLaptops', JSON.stringify(digitLaptops));
        console.log("Digged it!");
    });
    $('#'+globalDOMLaptops).live('click', function(e) { 
        var num = parseInt(/\d+/.exec(e.srcElement.id));
        $('#'+num+'product').remove();
        $('#'+num+'close').remove();
        $('#'+num+'break').remove();
        $('#btn'+num).remove();
        remainingLaps = remainingLaps.filter(function(laptop) {
            return laptop.description !== showLaptops[num].description;
        });
        console.log("Hate it!");
    });
}
function removeDOMLaptops(){
    for(var i = 1; i <=showLaptops.length; i++){
         $('#'+i+'product').remove();
         $('#'+i+'close').remove();
         $('#btn'+i).remove();
         $('#'+i+'break').remove();
    }   
    globalDOMLaptops = 0;
    localStorage.setItem('showLaptops', JSON.stringify([]));
}
function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}
function fillandDisplayShowLaptops(){
    setAllRanks(remainingLaps, profile);
    sortArrayByRank(remainingLaps);
    removeDOMLaptops(); 
    var currLap;
    for(var i = 0; i < remainingLaps.length; i++){
        currLap = remainingLaps[i];
        var priceHigh = parseFloat(profile.priceRange.high.replace(/,/g, '').replace(/\$/, ""));
        var priceLow = parseFloat(profile.priceRange.low.replace(/,/g, '').replace(/\$/, ""));
        var reviewLow = parseFloat(profile.reviewRange.low.substring(0,1));
        var reviewHigh = parseFloat(profile.reviewRange.high.substring(0,1));
        var battHigh = parseFloat(profile.batteryRange.high.substring(0,2));
        var battLow = parseFloat(profile.batteryRange.low.substring(0,2));
         if(currLap.rating > reviewLow && 
            currLap.rating < reviewHigh &&
            currLap.battery < battHigh &&
            currLap.battery > battLow &&
            currLap.price > priceLow &&
            currLap.price < priceHigh){
            showLaptops.push(currLap);
            addLaptopToDOM(currLap);  
        }
    }
    if(showLaptops === []){
        alert("Your search is too refined! No laptops found.");
    }
    localStorage.setItem("showLaptops", JSON.stringify(showLaptops));
 }
 window.onload = function() {
        fillandDisplayShowLaptops();
        console.log(remainingLaps);
};
