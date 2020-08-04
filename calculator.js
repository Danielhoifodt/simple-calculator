function calculate1()
{
    let one = document.getElementById("1").value;
    sumUp(one, "", "", "", "", "", "", "", "", "", "", "", "");
}
function calculate2()
{
    let two = document.getElementById("2").value;
    sumUp("", two, "", "", "", "", "", "", "", "", "", "", "");
}
function calculate3()
{
    let three = document.getElementById("3").value;
    sumUp("", "", three, "", "", "", "", "", "", "", "", "", "");
}
function calculate4()
{
    let four = document.getElementById("4").value;
    sumUp("", "", "", four, "", "", "", "", "", "", "", "", "");
}
function calculate5()
{
    let five = document.getElementById("5").value;
    sumUp("", "", "", "", five, "", "", "", "", "", "", "", "");
}
function calculate6()
{
    let six = document.getElementById("6").value;
    sumUp("", "", "", "", "", six, "", "", "", "", "", "", "");
}
function calculate7()
{
    let seven = document.getElementById("7").value;
    sumUp("", "", "", "", "", "", seven, "", "", "", "", "", "");
}
function calculate8()
{
    let eight = document.getElementById("8").value;
    sumUp("", "", "", "", "", "", "", eight, "", "", "", "", "");
}
function calculate9()
{
    let nine = document.getElementById("9").value;
    sumUp("", "", "", "", "", "", "", "", nine, "", "", "", "");
}
function calculatePluss()
{
    let pluss = document.getElementById("pluss").value;
    sumUp("", "", "", "", "", "", "", "", "", pluss, "", "", "");
}
function calculateMinus()
{
    let minus = document.getElementById("minus").value;
    sumUp("", "", "", "", "", "", "", "", "", "", minus, "", "");
}
function calculateGange()
{
    let gange = document.getElementById("gange").value;
    sumUp("", "", "", "", "", "", "", "", "", "", "", gange, "");
}
function calculateDele()
{
    let dele = document.getElementById("dele").value;
    sumUp("", "", "", "", "", "", "", "", "", "", "", "", dele);
}
//Er lik
function calculateLik()
{
    let lik = document.getElementById("lik").value;

    if(lik == "=")
    {
        let sCalculated = document.getElementById("output").value;
        let iCalculated = eval(sCalculated);

        document.getElementById("output").value = iCalculated;
    }

}

function sumUp(one, two, three, four, five, six, seven, eight, nine, pluss, minus, gange, dele)
{
    let aArray = [];

    if(one != null)
    {
        aArray.push(one);
    }
    if(two != null)
    {
        aArray.push(two);
    }
    if(three != null)
    {
        aArray.push(three);
    }
    if(four != null)
    {
        aArray.push(four);
    }
    if(five != null)
    {
        aArray.push(five);
    }
    if(six != null)
    {
        aArray.push(six);
    }
    if(seven != null)
    {
        aArray.push(seven);
    }
    if(eight != null)
    {
        aArray.push(eight);
    }
    if(nine != null)
    {
        aArray.push(nine);
    }
    if(pluss != "")
    {
        aArray.push(pluss);
    }
    if(minus != "")
    {
        aArray.push(minus);
    }
    if(gange != "")
    {
        aArray.push(gange);
    }
    if(dele != "")
    {
        aArray.push(dele);
    }

    let sString = aArray.join("");

    document.getElementById("output").value += sString;
}


/*
let two = document.getElementById("2").value;
let three = document.getElementById("3").value;
let four = document.getElementById("4").value;
let five = document.getElementById("5").value;
let six = document.getElementById("6").value;
let seven = document.getElementById("7").value;
let eight = document.getElementById("8").value;
let nine = document.getElementById("9").value;
let pluss = document.getElementById("pluss").value;
let minus = document.getElementById("minus").value;
let gange = document.getElementById("gange").value;
let dele = document.getElementById("dele").value;
*/