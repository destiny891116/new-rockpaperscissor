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
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors:{
    name:"Scissors",
    img:"https://e7.pngegg.com/pngimages/1018/824/png-clipart-scissors-scissors-technic-illustrator.png",
  },
  paper:{
    name:"Paper",
    img:"https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  }
}
function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  
  const play =(userChoice)=> {
  
    //내가 선택한 값
    setUserSelect(choice[userChoice]);
  
    let computerChoice = randomChoice();
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
      return "tie";
    } else if(user.name === "Rock") return computer.name === "Scissors" ? "Win!" : "Lose!";
    else if(user.name === "Scissors") return computer.name === "Paper" ? "Win!" : "Lose!";
    else if(user.name === "Paper") return computer.name === "Rock" ? "Win!" : "Lose!";
    
  };

  const randomChoice=()=>{
    let itemAtrray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    //0~3 랜덤 값 가져오기
    let randomItem = Math.floor(Math.random() * itemAtrray.length);
    let final = itemAtrray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
