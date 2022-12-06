
let Hscore=document.getElementById("hscore")
let Gscore=document.getElementById("gscore")
let Homescore=0
let Guestscore=0
function hone()
{  
    Homescore+=1
    Hscore.textContent=Homescore
}

function htwo()
{
    Homescore+=2
    Hscore.textContent=Homescore
}

function hthree()
{
    Homescore+=3
    Hscore.textContent=Homescore
}

function hfoul()
{
    Homescore-=1
    Hscore.textContent=Homescore
}

function gone()
{   
    Guestscore+=1
    Gscore.textContent=Guestscore
}
function gtwo()
{   
    Guestscore+=2
    Gscore.textContent=Guestscore
}
function gthree()
{   
    Guestscore+=3
    Gscore.textContent=Guestscore
}

function gfoul()
{
    Guestscore-=1
    Gscore.textContent=Guestscore
}

function reset()
{
    Homescore=0
    Guestscore=0
    Hscore.textContent=Homescore
    Gscore.textContent=Guestscore
}

if(Homescore>10 && Guestscore<1)
{
    
}