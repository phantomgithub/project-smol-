let wrap=document.getElementById("wrap");
let arr=[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]]
let player=["#B85042","#A7BEAE"];
turn=0;
let button;
let buttonC;
let b=document.getElementById("wrap");
let win=false;

let r=0,g=0;
let map=[];
let indicator=document.getElementById("current");
let result=document.getElementById("results");



function setup()
{
    let index=0;

    for(var i=0;i<5;i++)
    {
         buttonC=document.createElement('div');
        buttonC.setAttribute("id","buttonC");
        
        for(var j=0;j<5;j++)
        {
             button=document.createElement('div');
             id=index;
             
            button.setAttribute("id",id.toString());
            button.setAttribute("class","button");
            button.setAttribute("onClick",`play(${id})`)
            buttonC.append(button);
            index++;
        }
        
        wrap.append(buttonC);
    }
}


function play(id)
{
    if(arr[Math.floor(id/5)][id%5]==" ")
    {
        let currentPlayer=player[turn%2];
        let currentButton=document.getElementById(id.toString());
        currentButton.style.setProperty("background-color",currentPlayer);

        console.log(Math.floor(id/5)+"  "+id%5);
        arr[Math.floor(id/5)][id%5]=currentPlayer[1];

        turn++;
        let nextPlayer=player[turn%2];
        indicator.style.setProperty("background-color",nextPlayer);

        
    }
    checkwin();

}

function checkwin()
{
    let rpoints=document.getElementById("rPoints");
    let gpoints=document.getElementById("gPoints");

    
    for(var i=0;i<4;i++)
        {
            for(var j=0;j<4;j++)
            {
                if(arr[i][j]==arr[i+1][j] && arr[i][j]==arr[i][j+1] && arr[i][j]==arr[i+1][j+1] && arr[i][j]!=" " && map.indexOf((i+1)*10+(j+1))==-1)
                {
                map.push((i+1)*10+(j+1));
                    
                
                    if(arr[i][j]=="B")
                    r++;
                    else
                    g++;
                }
                console.log(r+"  "+g);
                rpoints.innerText=r.toString();
                gpoints.innerText=g.toString();

            }
        }
    
    
    if(turn>24)
    {
        if(r>g)
        {
        result.innerText="Winner Is";

        indicator.style.setProperty("background-color","#B85042");
        }
        else if(r<g)
        {
            result.innerText="Winner Is";
    
            indicator.style.setProperty("background-color","#A7BEAE");
            }
        else
        {
            result.innerText="DRAW !!";
    
            indicator.style.setProperty("visibility","hidden");
            }


    }
}