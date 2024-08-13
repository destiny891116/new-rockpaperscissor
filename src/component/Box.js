import React from 'react'

function Box(props) {
  console.log(props);

  let imgChg = "";
  let diffResult = "";
  
  if( props.item != null) {
    //컴퓨터 이미지 변경
    if(props.title != 'Computer') {
      imgChg = props.item.img;
    } else {
      if( props.item.name === 'Scissors') imgChg = '/img/computer_scissors.png';
      else if( props.item.name === 'Rock') imgChg = '/img/computer_rock.png';
      else imgChg = '/img/computer_paper.png';
    }

    //computer result 값 변경
    if( props.title === 'Computer') {
      if( props.result === 'TIE') {
        diffResult = 'TIE';
      } else if(props.result === 'WINNER') {
        diffResult = 'LOSER';
      } else if(props.result === 'LOSER') {
        diffResult = 'WINNER';
      } 
    } else {
      diffResult = props.result;
    }
   
  }
  
  return (
    <div className={`box ${diffResult}`}  >
      <h1>{props.title}</h1>
        <img className='item-img' src={props.item && imgChg} alt='hand image'></img>
      <h2>{diffResult}</h2>
    </div>
  )
}

export default Box
