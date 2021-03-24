function OnclickJC()
{
    alert(" Booh !!");
}

var tp1  = document.getElementById("tp1");
var cm1  = document.getElementById("cm1");
var cm2  = document.getElementById("cm2");

var tp1 = 0;
var cm1 = 0;
var cm2 = 0;


function showtext()
{ 
    var tx1 = document.getElementById('text1').value

    if(tp1 == 0)
    {
        document.getElementById('tp1').innerText=tx1;
        tp1 =1;
        
    }
    else if(cm1 == 0)
    {
        document.getElementById('cm1').innerText=tx1;
        cm1+=1;
    
    }
    else if(cm2 == 0)
    {
        document.getElementById('cm2').innerText=tx1;
        cm2+=2
        
    }
    
}

function cleartext()
{
    tp1=0
    cm1=0
    cm2=0
    text1=0

    console.log("clear")
    document.getElementById("tp1").innerText = ""
    document.getElementById("cm1").innerText = ""
    document.getElementById("cm2").innerText = ""
    document.getElementById("text1").value = ""
}