import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';

// 1. 박스2개 ( 타이틀, 사진정보, 결과값)
// 2. 버튼 3개 (가위 바위 보)
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된r다.
// 5. 3, 4번 결과를 가지고 누가 이겼는지 승패 따진다.
// 6. 승패 결과에 따라 테두리색이 바뀐다. ( 이기면-초록, 지면-빨강, 비기면 - 검은색)

// 이미지(rock :바위 / scissors : 가위 / paper : 보)
const choice = {
    rock:{
      name:"Rock",
      img:"/img/you_rock.png",
    },
    scissors:{
      name:"Scissors",
      img:"/img/you_scissor.png",
    },
    paper:{
      name:"Paper",
      img:"/img/you_paper.png",
    }
  }


export default class AppClass extends Component {

    constructor() {
        super();
        this.state = {
            userSelect : null
          , computerSelect : null
          , result : ""
        };

    }

    //onClick 이벤트
    play = (userChoice) => {

        const computerChice = this.randomChoice();
        
        this.setState({
            userSelect : choice[userChoice]
          , computerSelect : computerChice
          , result : this.judgement(choice[userChoice], computerChice)
        });

    }

    // 컴퓨터 랜덤값 가져오기
    randomChoice = () => {
        const itemAtrray = Object.keys(choice); // 객체에 키값만 뽑아서 Array로 만들어주는 함수
        //0~3 랜덤 값 가져오기
        const randomItem = Math.floor(Math.random() * itemAtrray.length);
        const final = itemAtrray[randomItem];
        return choice[final];
    }

    judgement = (user, computer) => {
  
        // user == computer tie
        // user == rock, computer == scissors  =>  user Win!
        // user == rock, computer == paper     =>  user Lose!
        // user == scissors, computer == rock  =>  user Lose!
        // user == scissors, computer == paper =>  user Win!
        // user == paper , computer == rock    =>  user Win!
        // user == paper, computer == scissors =>  user Lose!
    
        if(user.name === computer.name) {
          return "TIE";
        } else if(user.name === "Rock") return computer.name === "Scissors" ? "WINNER" : "LOSER";
          else if(user.name === "Scissors") return computer.name === "Paper" ? "WINNER" : "LOSER";
          else if(user.name === "Paper") return computer.name === "Rock" ? "WINNER" : "LOSER";
        
      };

      init = () => {
          this.setState({userSelect : null});
          this.setState({computerSelect : null});
          this.setState({result : ""});
      }
      

  render() {
    return (
    <div>
        <div className="main">
          <h1>가위! 바위! 보! 게임</h1>
        </div>
        <div className='main'>
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className='main'>
          <img className='btn' src={'/img/scissors_btn.png'} alt='scissors_btn' onClick={() => this.play("scissors")} />
          <img className='btn'src={'/img/rock_btn.png'} alt='rock_btn' onClick={() => this.play("rock")} />
          <img className='btn'src={'/img/paper_btn.png'} alt='paper_btn' onClick={() => this.play("paper")} />
        </div>
        <div className='main'>
            <button className="initBtn" onClick={() => this.init()}>Reset</button>
        </div>
        <div className='main'>
          <p>2024 © Created by yongsei</p>
        </div>
    </div>
    )
  }
}
