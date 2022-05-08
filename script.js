$(document).ready(async function(){
    $("body").hide();
    $("#home").hide();
    $("#about").hide();
    $("#works").hide();
    $("body").fadeIn(1250);
    
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
            $("#home").slideUp(750);
            homeShown = false;
            setTimeout(function(){
                $("#about").slideDown(750);
            }, 1000);
        } else if (worksShown) {
            $("#works").slideUp(750);
            worksShown = false;
            setTimeout(function(){
                $("#about").slideDown(750);
            }, 1000);
        } else {
            $("#about").slideDown(750);
        }
    }

    async function worksFadeElement(){
        if (aboutShown) {
            $("#about").slideUp(750);
            aboutShown = false;
            setTimeout(function(){
                $("#works").slideDown(750);
            }, 1000);
        } else if (homeShown) {
            $("#home").slideUp(750);
            homeShown = false;
            setTimeout(function(){
                $("#works").slideDown(750);
            }, 1000);
        } else {
            $("#works").slideDown(750);
        }
    }

    async function homeFadeElement(){
        if (aboutShown) {
            $("#about").slideUp(750);
            aboutShown = false;
            setTimeout(function(){
                $("#home").slideDown(750);
            }, 1000);
        } else if (worksShown) {
            $("#works").slideUp(750);
            worksShown = false;
            setTimeout(function(){
                $("#home").slideDown(750);
            }, 1000);
        } else {
            $("#home").slideDown(750);
        }
    }
});