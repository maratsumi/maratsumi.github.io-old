$(document).ready(async function(){
    $("body").hide();
    $("body").fadeIn(1250);
    $("body").css("display", "flex");
    let homeShown = false;
    let aboutShown = false;
    let worksShown = false;

    $("#buttonHome").click(async function(){
        homeShown = true;
        await homeFadeElement();
    });
    $("#buttonAbout").click(async function(){
        aboutShown = true;
        await aboutFadeElement();
    });
    $("#buttonWorks").click(async function(){
        worksShown = true;
        await worksFadeElement();
    });

    async function aboutFadeElement(){
        if (homeShown) {
            $(".inner-container-home").fadeOut(250);
            $("#home").slideUp(750);
            homeShown = false;
            setTimeout(function(){
                $(".inner-container-about").fadeIn(750);
                $(".inner-container-about").css("display", "flex");
                $("#about").slideDown(1000);
                $("#about").css("display", "flex");
            }, 1000);
        } else if (worksShown) {
            $(".inner-container-works").fadeOut(250);
            $("#works").slideUp(750);
            worksShown = false;
            setTimeout(function(){
                $(".inner-container-about").fadeIn(750);
                $(".inner-container-about").css("display", "flex");
                $("#about").slideDown(1000);
                $("#about").css("display", "flex");
            }, 1000);
        } else {
            $(".inner-container-about").fadeIn(750);
            $(".inner-container-about").css("display", "flex");
            $("#about").slideDown(1000);
            $("#about").css("display", "flex");
        }
    }

    async function worksFadeElement(){
        if (aboutShown) {
            $(".inner-container-about").fadeOut(250);
            $("#about").slideUp(750);
            aboutShown = false;
            setTimeout(function(){
                $(".inner-container-works").fadeIn(750);
                $(".inner-container-works").css("display", "flex");
                $("#works").slideDown(1000);
                $("#works").css("display", "flex");
            }, 1000);
        } else if (homeShown) {
            $(".inner-container-home").fadeOut(250);
            $("#home").slideUp(750);
            homeShown = false;
            setTimeout(function(){
                $(".inner-container-works").fadeIn(750);
                $(".inner-container-works").css("display", "flex");
                $("#works").slideDown(1000);
                $("#about").css("display", "flex");
            }, 1000);
        } else {
            $(".inner-container-works").fadeIn(750);
            $(".inner-container-works").css("display", "flex");
            $("#works").slideDown(1000);
            $("#works").css("display", "flex");
        }
    }

    async function homeFadeElement(){
        if (aboutShown) {
            $(".inner-container-about").fadeOut(250);
            $("#about").slideUp(750);
            aboutShown = false;
            setTimeout(function(){
                $(".inner-container-home").fadeIn(750);
                $(".inner-container-home").css("display", "flex");
                $("#home").slideDown(1000);
                $("#home").css("display", "flex");
            }, 1000);
        } else if (worksShown) {
            $(".inner-container-works").fadeOut(250);
            $("#works").slideUp(750);
            worksShown = false;
            setTimeout(function(){
                $(".inner-container-home").fadeIn(750);
                $(".inner-container-home").css("display", "flex");
                $("#home").slideDown(1000);
                $("#home").css("display", "flex");
            }, 1000);
        } else {
            $(".inner-container-home").fadeIn(750);
            $(".inner-container-home").css("display", "flex");
            $("#home").slideDown(1000);
            $("#home").css("display", "flex");
        }
    }
});