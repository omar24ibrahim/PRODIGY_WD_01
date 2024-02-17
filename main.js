var h, c, edu, exp, p, f, date, H, C, EDU, EXP, P, i;
function init(){
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
    i = document.getElementById('profile_photo');
    home();
}
function home(){
    resetColors();
    h.style.backgroundColor = 'blue';
    h.style.color = 'white';
    H.style.display = 'block';
    document.body.style.backgroundColor = 'white';
}
function contact(){
    resetColors();
    c.style.backgroundColor = 'blue';
    c.style.color = 'white';
    C.style.display = 'block';
    document.body.style.backgroundColor = 'rgb(239, 228, 176)';
    var interval = setInterval(function()
    {
        if(C.getBoundingClientRect().y <= 50)
        {
            i.style.position = 'fixed';
            i.style.top = '';
            i.style.transform = 'scale(calc(1/3))' + ' ' + 'translate(225px,-325px)';
            i.style.borderRadius = '0px';
        }
        else
        {
            i.style.position = 'absolute';
            i.style.transform = 'translate(0px, 0px)' + ' ' + 'scale(1)';
            i.style.borderRadius = '50%';
        }
    }, 100);
}
function education(){
    resetColors();
    edu.style.backgroundColor = 'blue';
    edu.style.color = 'white';
    EDU.style.display = 'block';
    document.body.style.backgroundColor = 'rgb(200, 191, 231)';
}
function experience(){
    resetColors();
    exp.style.backgroundColor = 'blue';
    exp.style.color = 'white';
    EXP.style.display = 'block';
    document.body.style.backgroundColor = 'rgb(255, 174, 201)';
}
function projects(){
    resetColors();
    p.style.backgroundColor = 'blue';
    p.style.color = 'white';
    P.style.display = 'block';
    document.body.style.backgroundColor = 'rgb(153, 217, 234)';
}
function resetColors(){
    h.style.backgroundColor = '';
    h.style.color = '';
    H.style.display = 'none';
    c.style.backgroundColor = '';
    c.style.color = '';
    C.style.display = 'none';
    edu.style.backgroundColor = '';
    edu.style.color = '';
    EDU.style.display = 'none';
    exp.style.backgroundColor = '';
    exp.style.color = '';
    EXP.style.display = 'none';
    p.style.backgroundColor = '';
    p.style.color = '';
    P.style.display = 'none';
}