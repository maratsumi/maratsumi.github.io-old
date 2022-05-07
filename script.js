$(document).ready(async function(){
    $("body").hide();
    $("body").fadeIn(1250);
    $("body").css("display", "flex");
    let homeShown = false;
    let aboutShown = false;
    let worksShown = false;

    $("#buttonHome").click(async function(){
        homeShown = true;
        await aboutFadeElement();
        await worksFadeElement();
        
        // $("#about").hide();
        // $("#works").hide();
        // $("#home").hide();
        //$(".inner-container").hide();
        $(".inner-container-home").fadeIn(1000);
        $(".inner-container-home").css("display", "flex");
        $("#home").slideDown(1000);
        $("#home").css("display", "flex");
    });
    $("#buttonAbout").click(async function(){
        aboutShown = true;
        await homeFadeElement();
        await worksFadeElement();
        
        // $("#about").hide();
        // $("#works").hide();
        // $("#home").hide();
        // $(".inner-container").hide();
        $(".inner-container-about").fadeIn(1000);
        $(".inner-container-about").css("display", "flex");
        $("#about").slideDown(650);
        $("#about").css("display", "flex");
    });
    $("#buttonWorks").click(async function(){
        worksShown = true;
        await aboutFadeElement();
        await homeFadeElement();

        // $("#about").hide();
        // $("#works").hide();
        // $("#home").hide();
        // $(".inner-container").hide();
        $(".inner-container-works").fadeIn(1000);
        $(".inner-container-works").css("display", "flex");
        $("#works").slideDown(650);
        $("#works").css("display", "flex");
    });

    async function aboutFadeElement(){
        if (aboutShown) {
            $(".inner-container-about").fadeOut(250);
            $("#about").slideUp(750);
            aboutShown = false;
        }
    }

    async function worksFadeElement(){
        if (worksShown) {
            $(".inner-container-works").fadeOut(250);
            $("#works").slideUp(750);
            worksShown = false;
        }
    }

    async function homeFadeElement(){
        if (homeShown) {
            $(".inner-container-home").fadeOut(250);
            $("#home").slideUp(750);
            homeShown = false;
        }
    }
});