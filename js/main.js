jQuery(document).ready(function(){
    indicator();
    colorChange();
    shirt();
    if (jQuery(".profile").height()!=null){
        show(".profile", ".profile div");}
    show(".intro", ".intro p");
    show(".names", ".names p");
    
});

jQuery(document).resize(function(){
    indicator();
});

function indicator() {

    var vh = jQuery(window).height();
    var vw = jQuery(window).width();
    var dh = jQuery(document).height();

    var scroll = jQuery(window).scroll(function() {
        var faktor = (( dh - vh ) / 100);
        var fill = scroll.scrollTop() / faktor;
        if (vw >= 1280){
            jQuery(".indicator__scroll").css("height", fill + "%");
        }
        else{
            jQuery(".indicator__scroll").css("width", fill + "%");
        }


    });


};




function colorChange() {

    var hue = 16;
    var saturation = 0;
    var lightness = 95;

    var color = 0;

    var vh = jQuery(window).height();

    setHslColor(hue, saturation, lightness, color);

    var scroll = jQuery(window).scroll(function() {

        var saturation = scroll.scrollTop();

        if( scroll.scrollTop() >= 100 ){
            var saturation = 100;
        }

        var lightness = 95 - scroll.scrollTop();

        if( scroll.scrollTop() >= 50 ){
            var lightness = 50;
        }


        var color = scroll.scrollTop();

        setHslColor(hue, saturation, lightness, color);

    });


};


function setHslColor(hue, saturation, lightness, color) {

    var difference = 255 - color;
    if(difference <= 51){
        var difference = 204;
    }

    jQuery("html").css("background-color", "rgb("+color+","+color+","+color+")");
    jQuery("html").css("color", "rgb("+difference+","+difference+","+difference+")");


}


$(document).ready(function(){
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});




function show(parent, children) {


    if (jQuery(document).scrollTop() <= 0) {

        jQuery(children).addClass("animate");
    }


    var pt = jQuery(children).position();
    var sh = jQuery(parent).height();
    var vh = jQuery(window).height();



    var scroll = jQuery(window).scroll(function() {

        pt = jQuery(children).position();

        if (scroll.scrollTop() >= (pt.top)) {

            jQuery(children).addClass("animate");
        }

        if (scroll.scrollTop() >= (pt.top+sh+vh)) {

            jQuery(children).removeClass("animate");
        }
        if (scroll.scrollTop() <= (pt.top-vh)) {

            jQuery(children).removeClass("animate");
        }



    });

};


function shirt() {

    if (jQuery(".shirt").height()!=null){
        var vh = jQuery(window).height();
        var dh = jQuery(document).height();
        var sh = jQuery(".shirt").position();
        var st = jQuery(".shirt").height();


        var scroll = jQuery(window).scroll(function() {

            var faktor = ((dh - vh )/600);
            var fill = (scroll.scrollTop()- sh.top + st) / faktor;

            jQuery(".shirt").css("left", fill + "%");

        });
    }

};

/*

function lottieAnimation() {

    var animation = bodymovin.loadAnimation({
      container: document.getElementById('header'), // Required
      path: 'js/amp.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
    })

};

*/