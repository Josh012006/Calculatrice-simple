/*Faire clignoter le curseur*/
let cursor = document.getElementById("cursor");

setInterval(function(){
    cursor.classList.toggle('clignote');
}, 500);



/*Les calculs*/
let result = document.getElementById("result");
let string = "";
let evaluated = "";

function controlSize()
{
    if(result.innerHTML.length >= 13)
    {
        result.style.fontSize = '48px';
    }
}

controlSize();

function add(key)
{
    if(result.innerHTML.length <= 13)
    {
        string += key;
        evaluated += key;
        result.innerHTML = string;
    }
}

function operation(operator)
{
    string = "";
    result.innerHTML = "";
    evaluated += operator;
}

function fullDelete()
{
    string = "";
    result.innerHTML = "";
    evaluated = "";
}

function displayResult()
{
    result.innerHTML = "";
    try{
        let final = Number(eval(evaluated));
        if(String(final).length <= 13)
            result.innerHTML = String(final);
        else
            result.innerHTML = String(final.toExponential(6));

        evaluated = "";
        string = "";
    }
    catch(error)
    {
        alert("Calcul invalide: " + error);
    }    
}

function lightDelete()
{
    string = string.slice(0, -1);
    result.innerHTML = string;
    evaluated = evaluated.slice(0, -1);
}



