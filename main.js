$(document).ready(init);
var turnX=true;
var champ='';
var arr = [0,0,0,0,0,0,0,0]; //arr holds totals for combinations of three cells values
//0-rdata
//data-r2
//2-r3
//3-cdata
//4-c2
//5-c3
//6-\
//7-/
function init(){
  alert('X shall always go first. That is the way of tic tac toe');
  $('.col').on('click', clicked);

  function clicked(e){
    console.log('hey');
    var $clicked = $(e.target);
    $clicked.text(turnX ? 'X' : 'O');
    var data = (turnX ? 13 : 7);
    turnX = !turnX;
    debugger;
    switch($clicked.attr('id')) {
      case 'cell1':
        arr[0]+=data;
        arr[3]+=data;
        arr[6]+=data;
        break;
      case 'cell2':
        arr[0]+=data;
        arr[4]+=data;
        break;
      case 'cell3':
        arr[0]+=data;
        arr[5]+=data;
        arr[7]+=data;
        break;
      case 'cell4':
        arr[1]+=data;
        arr[3]+=data;
        break;
      case 'cell5':
        arr[1]+=data;
        arr[4]+=data;
        arr[6]+=data;
        arr[7]+=data;
        break;
      case 'cell6':
        arr[1]+=data;
        arr[5]+=data;
        break;
      case 'cell7':
        arr[2]+=data;
        arr[3]+=data;
        arr[7]+=data;
        break;
      case 'cell8':
        arr[2]+=data;
        arr[4]+=data;
        break;
      case 'cell9':
        arr[2]+=data;
        arr[5]+=data;
        arr[6]+=data;
        break;
    }
checkstatus();
  }

  function checkstatus(){
    for(var i= 0; i<8; i++){
      if(arr[i]===39){champ = 'X';}
      if(arr[i]===21){champ = 'Y';}
    }
    if(champ){alert(champ+ ' is the CHAMPION!');}
  }
}
