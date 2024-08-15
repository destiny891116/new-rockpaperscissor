import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor() {
        super();
        // this.state = {
        //     imgChg : ""
        //   , diffResult : ""
        // }
        this.imgChg = "";
        this.diffResult = "";
        this.defaultImg = "https://img.freepik.com/premium-vector/you-are-ready-flat-color-banner-are-you-ready-vector-illustration_774778-1616.jpg";
    }

    getImg = () => {
        if( this.props.item !== null) {
        
            //컴퓨터 이미지 변경
            if(this.props.title !== 'Computer') {
                //this.setState({imgChg: this.props.item.img});
                this.imgChg = this.props.item.img;
            } else {
                if( this.props.item.name === 'Scissors')  this.imgChg = '/img/computer_scissors.png';
                else if( this.props.item.name === 'Rock') this.imgChg = '/img/computer_rock.png';  
                else this.imgChg = '/img/computer_paper.png';   
            }
        }
    };

    getResult = () => {
        if( this.props.title === 'Computer') {
            if( this.props.result === 'TIE') {
              this.diffResult = 'TIE';
            } else if(this.props.result === 'WINNER') {
                this.diffResult = 'LOSER';
            } else if(this.props.result === 'LOSER') {
                this.diffResult = 'WINNER';
            } 
          } else {
            this.diffResult = this.props.result;
          }
    }

   
  render() {
    this.getImg();
    this.getResult();
    return (
        <div className={`box ${this.diffResult}`}  >
            <h1>{this.props.title}</h1>
            <img className='item-img' src={this.props.item && this.imgChg ? this.imgChg : this.defaultImg} alt=''></img>
            <h2>{this.diffResult}</h2>
        </div>
    )
  }
}
