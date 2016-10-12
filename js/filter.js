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
    profile.reviewRange.low = reviewsSlider.noUiSlider.get()[0];
    profile.reviewRange.high = reviewsSlider.noUiSlider.get()[1];
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
    console.log("HELLO");
    profile.batteryRange.low = batterySlider.noUiSlider.get()[0];
    profile.batteryRange.high = batterySlider.noUiSlider.get()[1];
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
    localStorage.setItem("profile", JSON.stringify(profile));
});