

function createAnchor(url, text, style){

    var anchor = document.createElement('a');
    anchor.setAttribute('class', style);
    anchor.setAttribute('href', url);
    anchor.textContent = text;
}



function buildNavBar(navBGColor){

    // navbar  (attached to main container)

    var nav = document.createElement('nav');
    var bg = 'background-color: ' + navBGColor;

    nav.setAttribute('class', 'navbar navbar-expand navbar-dark p-4');
    nav.setAttribute('style', 'background-color: rgb(82, 167, 250); ');

    // inner nav div 

    var navDiv = document.createElement('div');
    navDiv.setAttribute('class', 'nav navbar-nav h3');




}


var anchorList = [];

var a = createAnchor("#", "Hello World", "nav-item nav-link active");

anchorList.push(a);

