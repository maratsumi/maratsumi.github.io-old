$(document).ready(async function(){
    $("body").hide();
    $("#home").show();
    $("#about").hide();
    $("#works").hide();
    $("body").fadeIn(1250);
    
    let homeShown = true;
    let aboutShown = false;
    let worksShown = false;

    $("#buttonHome").click(async function(){
        homeShown = true;
        startLoading();
        await homeFadeElement();
    });
    $("#buttonAbout").click(async function(){
        aboutShown = true;
        startLoading();
        await aboutFadeElement();
    });
    $("#buttonWorks").click(async function(){
        worksShown = true;
        startLoading();
        await worksFadeElement();
    });

    async function aboutFadeElement(){
        if (homeShown) {
            $("#home").slideUp(750);
            homeShown = false;
            setTimeout(function(){
                $("#about").slideDown(750);
                finishLoading();
            }, 1000);
        } else if (worksShown) {
            $("#works").slideUp(750);
            worksShown = false;
            setTimeout(function(){
                $("#about").slideDown(750);
                finishLoading();
            }, 1000);
        } else {
            $("#about").slideDown(750);
            finishLoading();
        }
    }

    async function worksFadeElement(){
        if (aboutShown) {
            $("#about").slideUp(750);
            aboutShown = false;
            setTimeout(function(){
                $("#works").slideDown(750);
                finishLoading();
            }, 1000);
        } else if (homeShown) {
            $("#home").slideUp(750);
            homeShown = false;
            setTimeout(function(){
                $("#works").slideDown(750);
                finishLoading();
            }, 1000);
        } else {
            $("#works").slideDown(750);
            finishLoading();
        }
    }

    async function homeFadeElement(){
        if (aboutShown) {
            $("#about").slideUp(750);
            aboutShown = false;
            setTimeout(function(){
                $("#home").slideDown(750);
                finishLoading();
            }, 1000);
        } else if (worksShown) {
            $("#works").slideUp(750);
            worksShown = false;
            setTimeout(function(){
                $("#home").slideDown(750);
                finishLoading();
            }, 1000);
        } else {
            $("#home").slideDown(750);
            finishLoading();
        }
    }

    function startLoading(){
        $("#buttonHome").prop('disabled', true);
        $("#buttonAbout").prop('disabled', true);
        $("#buttonWorks").prop('disabled', true);
    }

    function finishLoading(){
        $("#buttonHome").prop('disabled', false);
        $("#buttonAbout").prop('disabled', false);
        $("#buttonWorks").prop('disabled', false);
    }
});