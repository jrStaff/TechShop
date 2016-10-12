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
        thousand: ','
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
        'max': [2000]
    },
        format: wNumb({
        decimals: 0,
        thousand: ',',
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
        'max': [10]
    },
        format: wNumb({
        decimals: 0,
        thousand: ',',
        postfix: ' Hrs',
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
        postfix: ' Lbs',
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
var digitLaptops = [];
var laptops = JSON.parse(localStorage.getItem("laptops"));
if(laptops == null){
    laptops = makeLaptopArray(productList);
}  
localStorage.setItem('digitLaptops', digitLaptops);
localStorage.setItem('showLaptops', showLaptops);

function addLaptopToDOM(laptop){
    globalDOMLaptops += 1;
    console.log(laptop);
    var element = $('#products');
    var html = $('<div id="'+globalDOMLaptops+'master><div class="close" id="'+globalDOMLaptops+'close"></div><li class="product" id ="'+ globalDOMLaptops +'product"><img src="'+ laptop.image_addr +'"></img><div class="product-content"><h3>'+ laptop.title +'</h3><p>' + laptop.description + '</p></div></li><div class="dig-it-button" id="btn'+globalDOMLaptops+'">I can <strong>Dig</strong> it</div><div class="break" id="'+globalDOMLaptops+'break></div></div>');
    element.append(html);

    showLaptops.push(laptop);

    $('#btn'+globalDOMLaptops).live('click', function(e) { 
        var num = parseInt(/\d+/.exec(e.srcElement.id));
        $('#'+num+'product').remove();
         $('#'+num+'close').remove();
         $('#'+num+'break').remove();
         $('#btn'+num).remove();
        digitLaptops.push(showLaptops[num]);
        localStorage.setItem('digitLaptops', digitLaptops);
        console.log("Digged it!");
    });
    $('#'+globalDOMLaptops).live('click', function(e) { 
        var num = parseInt(/\d+/.exec(e.srcElement.id));
        $('#'+num+'product').remove();
        $('#'+num+'close').remove();
        $('#'+num+'break').remove();
        $('#btn'+num).remove();
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
    localStorage.setItem('showLaptops', []);
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
    newLaptops = makeLaptopArray(productList);
    setAllRanks(newLaptops, profile);
    sortArrayByRank(newLaptops);
    removeDOMLaptops();

    var currLap;
    for(var i = 0; i < newLaptops.length; i++){
        currLap = newLaptops[i];

         if(/*currLap.rating > profile.reviewRange.low && */
        // currLap.rating < profile.reviewRange.high &&
        // currLap.battery > profile.batteryRange.low &&
         currLap.battery < parseFloat(profile.priceRange.low.replace(/ Lbs/g, ''))  &&
         currLap.price > parseFloat(profile.priceRange.low.replace(/,/g, '')) &&
        currLap.price < parseFloat(profile.priceRange.high.replace(/,/g, ''))){
            showLaptops.push(currLap);
            addLaptopToDOM(currLap);  
        }
        console.log(currLap.price + " " + profile.priceRange.high);
    }
    localStorage.setItem("showLaptops", showLaptops);
    if(showLaptops === []){
        alert("Your search is too refined! No laptops found.");
    }
}

