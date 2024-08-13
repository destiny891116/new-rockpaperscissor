import React from 'react'

function Box(props) {
  console.log(props);

  let imgChg;


  //컴퓨터 이미지 변경
  if( props.item != null) {
    if(props.title != 'Computer') {
      imgChg = props.item.img;
    } else {
      if( props.item.name === 'Scissors') imgChg = '/img/computer_scissors.png';
      else if( props.item.name === 'Rock') imgChg = '/img/computer_rock.png';
      else imgChg = '/img/computer_paper.png';
    }
  }
  
  return (
    <div className='box'>
      <h1>{props.title}</h1>
        <img className='item-img' src={props.item && imgChg} alt='hand image'></img>
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box
