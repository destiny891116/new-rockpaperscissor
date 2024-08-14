import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1. 박스2개 ( 타이틀, 사진정보, 결과값)
// 2. 버튼 3개 (가위 바위 보)
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된r다.
// 5. 3, 4번 결과를 가지고 누가 이겼는지 승패 따진다.
// 6. 승패 결과에 따라 테두리색이 바뀐다. ( 이기면-초록, 지면-빨강, 비기면 - 검은색)

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
function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  
  const play =(userChoice)=> {
  
    //내가 선택한 값
    setUserSelect(choice[userChoice]);
  
    const computerChoice = randomChoice();
    //컴퓨터 랜덤 값
    setComputerSelect(computerChoice);

    //선택된 값
    setResult(judgement(choice[userChoice], computerChoice));

  };

  const judgement =(user, computer)=> {
  
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

  const randomChoice=()=>{
    const itemAtrray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    //0~3 랜덤 값 가져오기
    const randomItem = Math.floor(Math.random() * itemAtrray.length);
    const final = itemAtrray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div class="main">
        <h1>Scissors! Rock! Paper!</h1>
      </div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <img className='btn' src={'/img/scissors_btn.png'} alt='scissors_btn' onClick={() => play("scissors")} />
        <img className='btn'src={'/img/rock_btn.png'} alt='rock_btn' onClick={() => play("rock")} />
        <img className='btn'src={'/img/paper_btn.png'} alt='paper_btn' onClick={() => play("paper")} />
      </div>
      <div className='main'>
        <p>2024 © Created by yongsei</p>
      </div>
    </div>
  );
}

export default App;
