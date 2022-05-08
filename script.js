$(document).ready(async function(){
    $("body").hide();
    $("#home").show();
    $("#about").hide();
    $("#works").hide();
    $("body").fadeIn(1250);
    
    let homeShown = true;
    let aboutShown = false;
    let worksShown = false;

    // Find a way to disallow the user
    // from opening other options before
    // the current open one is done opening
    // Could probably use an if statement
    // and (a)wait for the elements to fade in first
    // before allowing the user to click again
    // would use a finishLoading boolean ?

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