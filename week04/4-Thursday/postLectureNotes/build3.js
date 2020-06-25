

function createAnchor(url, text, style) {

    var anchor = document.createElement('a');
    anchor.setAttribute('class', style);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor;

}

function buildNavBar(navBGColor, anchorList) {

    // navbar  (attached to main container)

    var nav = document.createElement('nav');
    var bg = 'background-color: ' + navBGColor;

    nav.setAttribute('class', 'navbar navbar-expand navbar-dark p-4');
    nav.setAttribute('style', bg)

    // inner nav div 

    var navDiv = document.createElement('div');
    navDiv.setAttribute('class', 'nav navbar-nav h3');

    for (var index = 0; index < anchorList.length; index++) {
        navDiv.appendChild(anchorList[index]);
    }

    nav.append(navDiv);

    return nav;
}









function createCard(card, card-body, card-title, card-text){

    var card = document.createElement('div');
    card.setAttribute('class', card);

    var cardBody = document.createElement('div');
    cardBody.setAttribute('class', card-body);
    
    card.appendChild(cardBody);

    var cardTitle = document.createElement('h1');
    cardTitle.setAttribute('class', card-title);

    var cardText = document.createElement('p');
    cardText.setAttribute('class', card-text);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);


    return(card);
}