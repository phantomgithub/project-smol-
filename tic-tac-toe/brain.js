let turn=0;let isWin=false;
let arr=["","","","","","","","",""];
let msg=document.getElementById("anounce");
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function testclick(id)
{
  
    var stringid=id.toString();
    var cell=document.getElementById(stringid);
    if(cell.innerText!="X" && cell.innerText!="O" && turn<9){

    
    if(turn%2==0)
    {
        cell.innerText="X";
     arr[id-1]="X";  
    }
    else{
        cell.innerText="O";
        arr[id-1]="O"; 
    }

    turn++;
    checkwin();
    checkdraw();
}

}

function checkwin()
{
    
for(var i=0;i<8;i++){
if(arr[win[i][0]]=="X" && arr[win[i][1]]=="X" && arr[win[i][2]]=="X")
{
    msg.innerText="X has WON THE GAME !! :(:";
    turn=10;
    isWin=true;
}
else if(arr[win[i][0]]=="O" && arr[win[i][1]]=="O" && arr[win[i][2]]=="O")
{
    msg.innerText="O has WON THE GAME !! :(:";
    turn=10;
    isWin=true;
}
}

}

function checkdraw()
{
    console.log(turn);
    if(turn==9 && isWin==false)
    msg.innerText="It is a DRAW !!";

}
function reset()
{
    turn=0;
arr=["","","","","","","","",""];
for(var i=1;i<=9;i++)
{
    let cell=document.getElementById(i.toString());
    cell.innerText="";
}
msg.innerText="";
}