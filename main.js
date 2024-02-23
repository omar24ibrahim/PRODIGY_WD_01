var nav, h, c, edu, exp, p, f, date, H, C, EDU, EXP, P, ph, currentTag, tags, divs, colors, invColors;
function init(){
    nav = document.getElementById('list_items');
    h = document.getElementById('home');
    c = document.getElementById('contact');
    edu = document.getElementById('edu');
    exp = document.getElementById('exp');
    p = document.getElementById('projects');
    date = document.getElementById('date');
    var dateText = new Date();
    date.innerHTML = dateText.toDateString();
    H = document.getElementById('H');
    C = document.getElementById('C');
    EDU = document.getElementById('EDU');
    EXP = document.getElementById('EXP');
    P = document.getElementById('P');
    H.style.backgroundColor = 'white';
    C.style.backgroundColor = 'rgb(239, 228, 176)';
    EDU.style.backgroundColor = 'rgb(200, 191, 231)';
    EXP.style.backgroundColor = 'rgb(255, 174, 201)';
    P.style.backgroundColor = 'rgb(153, 217, 234)';
    ph = document.getElementById('profile_photo');
    tags = [h, c, edu, exp, p];
    divs = [H, C, EDU, EXP, P];
    colors = ['white', 'rgb(239, 228, 176)', 'rgb(200, 191, 231)', 'rgb(255, 174, 201)', 'rgb(153, 217, 234)'];
    invColors = ['black', 'rgb(16, 27, 79)', 'rgb(55, 64, 24)', 'rgb(0, 81, 54)', 'rgb(102, 38, 21)'];
    page(0);
}
function page(x){
    resetColors();
    setCurrent(x);
}
window.onscroll = function(){
    scrollMod();
};
function scrollMod(){
    if(nav.getBoundingClientRect().y == 0)
    {
        nav.style.backgroundColor = 'rgb(30, 30, 30)';
        for(i = 0; i < 5; i ++)
        {
            if(tags[i] == currentTag)
            {
                currentDiv.style.backgroundColor = document.body.style.backgroundColor = invColors[i];
                currentDiv.style.color = 'white';
                continue;
            }
            tags[i].style.backgroundColor = 'rgb(30, 30, 30)';
            tags[i].style.color = 'white';
        }
        if(currentTag == c)
        {
            ph.style.position = 'fixed';
            ph.style.top = '';
            ph.style.transform = 'scale(calc(1/3))' + ' ' + 'translate(225px,-325px)';
            ph.style.borderRadius = '0px';
        }
    }
    else
    {
        nav.style.backgroundColor = '';
        for(i = 0; i < 5; i ++)
        {
            if(tags[i] == currentTag)
            {
                currentDiv.style.backgroundColor = document.body.style.backgroundColor = colors[i];
                currentDiv.style.color = '';
                continue;
            }
            tags[i].style.backgroundColor = '';
            tags[i].style.color = '';
            tags[i]
        }
        if(currentTag == c)
        {
            ph.style.position = 'absolute';
            ph.style.transform = 'translate(0px, 0px)' + ' ' + 'scale(1)';
            ph.style.borderRadius = '50%';
        }
    }
}
function resetColors(){
    for(i = 0; i < 5; i ++)
    {
        tags[i].style.backgroundColor = '';
        tags[i].style.color = '';
        divs[i].style.display = 'none';
        document.body.style.backgroundColor = '';
    }
}
function setCurrent(n){
    currentTag = tags[n];
    currentDiv = divs[n];
    currentTag.style.backgroundColor = 'blue';
    currentTag.style.color = 'white';
    currentDiv.style.display = 'block';
    currentDiv.style.backgroundColor = document.body.style.backgroundColor = colors[n];
}
function hovering(b){
    b.style.backgroundColor = 'blue';
    b.style.color = 'white';
    b.style.cursor = 'pointer';
}
function unhovering(b){
    scrollMod();
}