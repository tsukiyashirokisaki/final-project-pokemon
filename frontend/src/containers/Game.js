import React, { Component } from "react";
//component
import Gameview from "../components/game/gameview";

// function
// import moveLeft from '../components/functions/move/moveLeft';
// import moveRight from '../components/functions/move/moveRight';
// import moveTop from '../components/functions/move/moveTop';
// import moveDown from '../components/functions/move/moveDown';
import move from "../components/functions/move/move";
import open from "../components/functions/openMenu";
import Fight from "./Fight";

import playerImg from "../img/playerImg";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        characterPositionInMap: {
          top: 450,
          left: 500
        },
        characterFacing: {
          top: true,
          down: false,
          left: false,
          right: false
        },
        characterBag: [
          {
            name: "傷藥",
            amount: 0,
            explain: "可回覆25滴血"
          },
          {
            name: "pp提升藥劑",
            amount: 0,
            explain: "回覆1pp"
          }
        ],
        movingImgOneTwo: false,
        moving: false,
        preMove: 38
      },
      position: {
        top: "0",
        left: "0"
      },
      map: {
        name: "1",
        noEntry: [
          { top: 50, left: -250 },
          { top: 50, left: -200 },
          { top: 50, left: -150 },
          { top: 50, left: -100 },
          { top: 50, left: -50 },
          { top: 50, left: 0 },
          { top: 50, left: 400 },
          { top: 50, left: 350 },
          { top: 50, left: 300 },
          { top: 50, left: 250 },
          { top: 50, left: 200 },
          { top: 50, left: 150 },
          { top: 150, left: -250 },
          { top: 150, left: -200 },
          { top: 150, left: -150 },
          { top: 150, left: -100 },
          { top: 150, left: -50 },
          { top: 150, left: 0 },
          { top: 150, left: 400 },
          { top: 150, left: 350 },
          { top: 150, left: 300 },
          { top: 150, left: 250 },
          { top: 150, left: 200 },
          { top: 150, left: 150 },
          { top: -50, left: -250 },
          { top: -50, left: -200 },
          { top: -50, left: -150 },
          { top: -50, left: -100 },
          { top: -50, left: -50 },
          { top: -50, left: 0 },
          { top: -50, left: 400 },
          { top: -50, left: 350 },
          { top: -50, left: 300 },
          { top: -50, left: 250 },
          { top: -50, left: 200 },
          { top: -50, left: 150 },
          { top: -150, left: -250 },
          { top: -150, left: -200 },
          { top: -150, left: -150 },
          { top: -150, left: -100 },
          { top: -150, left: -50 },
          { top: -150, left: 0 },
          { top: -150, left: 400 },
          { top: -150, left: 350 },
          { top: -150, left: 300 },
          { top: -150, left: 250 },
          { top: -150, left: 200 },
          { top: -150, left: 150 },
          { top: -250, left: -250 },
          { top: -250, left: -200 },
          { top: -250, left: -150 },
          { top: -250, left: -100 },
          { top: -250, left: -50 },
          { top: -250, left: 0 },
          { top: -250, left: 400 },
          { top: -250, left: 350 },
          { top: -250, left: 300 },
          { top: -250, left: 250 },
          { top: -250, left: 200 },
          { top: -250, left: 150 },
          { top: -350, left: -250 },
          { top: -350, left: -200 },
          { top: -350, left: -150 },
          { top: -350, left: -100 },
          { top: -350, left: -50 },
          { top: -350, left: 0 },
          { top: -350, left: 400 },
          { top: -350, left: 350 },
          { top: -350, left: 300 },
          { top: -350, left: 250 },
          { top: -350, left: 200 },
          { top: -350, left: 150 },
          { top: 450, left: 450 },
          { top: 450, left: 400 },
          { top: 450, left: 350 },
          { top: 450, left: 300 },
          { top: 450, left: 250 },
          { top: 450, left: 200 },
          { top: 450, left: 150 },
          { top: 450, left: 100 },
          { top: 450, left: 50 },
          { top: 450, left: 0 },
          { top: 450, left: -50 },
          { top: 450, left: -100 },
          { top: 450, left: -150 },
          { top: 450, left: -200 },
          { top: 450, left: -250 },
          { top: 450, left: -300 },
          { top: -600, left: 450 },
          { top: -600, left: 400 },
          { top: -600, left: 350 },
          { top: -600, left: 300 },
          { top: -600, left: 250 },
          { top: -600, left: 200 },
          { top: -600, left: 150 },
          { top: -600, left: 100 },
          { top: -600, left: 50 },
          { top: -600, left: 0 },
          { top: -600, left: -50 },
          { top: -600, left: -100 },
          { top: -600, left: -150 },
          { top: -600, left: -200 },
          { top: -600, left: -250 },
          { top: -600, left: -300 },
          { top: 450, left: -350 },
          { top: 400, left: -350 },
          { top: 350, left: -350 },
          { top: 300, left: -350 },
          { top: 250, left: -350 },
          { top: 200, left: -350 },
          { top: 150, left: -350 },
          { top: 100, left: -350 },
          { top: 50, left: -350 },
          { top: 0, left: -350 },
          { top: -50, left: -350 },
          { top: -100, left: -350 },
          { top: -150, left: -350 },
          { top: -200, left: -350 },
          { top: -250, left: -350 },
          { top: -300, left: -350 },
          { top: -350, left: -350 },
          { top: -400, left: -350 },
          { top: -450, left: -350 },
          { top: -500, left: -350 },
          { top: -550, left: -350 },
          { top: -600, left: -350 },
          { top: 450, left: 500 },
          { top: 400, left: 500 },
          { top: 350, left: 500 },
          { top: 300, left: 500 },
          { top: 250, left: 500 },
          { top: 200, left: 500 },
          { top: 150, left: 500 },
          { top: 100, left: 500 },
          { top: 50, left: 500 },
          { top: 0, left: 500 },
          { top: -50, left: 500 },
          { top: -100, left: 500 },
          { top: -150, left: 500 },
          { top: -200, left: 500 },
          { top: -250, left: 500 },
          { top: -300, left: 500 },
          { top: -350, left: 500 },
          { top: -400, left: 500 },
          { top: -450, left: 500 },
          { top: -500, left: 500 },
          { top: -550, left: 500 },
          { top: -600, left: 500 },
          { top: 400, left: -250 },
          { top: 350, left: -250 },
          { top: 300, left: -250 },
          { top: 400, left: 250 },
          { top: 400, left: 200 },
          { top: 400, left: 150 },
          { top: 400, left: 100 },
          { top: 400, left: 50 },
          { top: 400, left: 0 },
          { top: 400, left: -50 },
          { top: 400, left: -100 },
          { top: 300, left: 350 },
          { top: 300, left: 300 },
          { top: 300, left: 250 }
        ],
        enemy: [
          {
            name: "ric",
            position: { top: 100, left: 200 },
            text: { upper: "", lower: "" }
          }
        ]
      },
      openMenu: false
    };
  }

  moving = e => {
    e.preventDefault();
    if (
      e.keyCode === 37 ||
      e.keyCode === 38 ||
      e.keyCode === 39 ||
      e.keyCode === 40
    ) {
      this.turing(e);
      move.call(this, e);
      this.setState({
        character: {
          ...this.state.character,
          movingImgOneTwo: !this.state.character.movingImgOneTwo
        }
      });
      this.setState({
        character: { ...this.state.character, preMove: e.keyCode }
      });
      document.removeEventListener("keydown", this.moving);
      setTimeout(() => {
        document.addEventListener("keydown", this.moving);
      }, 200);
    }
  };

  turing = e => {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.setState({
          character: {
            ...this.state.character,
            characterFacing: {
              top: false,
              down: false,
              left: true,
              right: false
            }
          }
        });
        break;
      case 38:
        this.setState({
          character: {
            ...this.state.character,
            characterFacing: {
              top: true,
              down: false,
              left: false,
              right: false
            }
          }
        });
        break;
      case 39:
        this.setState({
          character: {
            ...this.state.character,
            characterFacing: {
              top: false,
              down: false,
              left: false,
              right: true
            }
          }
        });
        break;
      case 40:
        this.setState({
          character: {
            ...this.state.character,
            characterFacing: {
              top: false,
              down: true,
              left: false,
              right: false
            }
          }
        });
        break;
      default:
        break;
    }
    // console.log(this.state.character.characterFacing);
  };

  openMenu = e => {
    e.preventDefault();
    e.keyCode === 73 &&
      this.state.openMenu &&
      document.addEventListener("keydown", this.moving);
    open.call(this, e);
    this.state.openMenu && document.removeEventListener("keydown", this.moving);
  };

  letsBattle = e => {
    e.preventDefault();
    const facing = this.state.character.characterFacing;
    const top = parseInt(this.state.position.top);
    const left = parseInt(this.state.position.left);
    const enemyTop =
      this.state.character.characterPositionInMap.top -
      this.state.map.enemy[0].position.top;
    const enemyLeft =
      this.state.character.characterPositionInMap.left -
      this.state.map.enemy[0].position.left;
    if (e.keyCode === 32) {
      if (top === enemyTop + 50 && left === enemyLeft && facing.down)
        console.log("you meet ric downward!");
      if (top === enemyTop - 100 && left === enemyLeft && facing.top)
        console.log("you meet ric upward!");
      if (top === enemyTop && left === enemyLeft - 50 && facing.left)
        console.log("you meet ric leftside!");
      if (top === enemyTop && left === enemyLeft + 50 && facing.right)
        console.log("you meet ric rightside!");
    }
  };

  bagUse = item => {
    console.log(item);
  };

  fetchData = async () => {
    await fetch("/api/getData")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          ...jsonData,
          openMenu: false
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData();
    document.addEventListener("keydown", this.moving);
    document.addEventListener("keydown", this.openMenu);
    document.addEventListener("keyup", () => {
      this.setState({ character: { ...this.state.character, moving: false } });
    });
    document.addEventListener("keydown", this.letsBattle);
  }

  render() {
    // console.log(this.state.moving);
    console.log(this.state.position);
    return (
      <div>
        <Gameview
          playerImg={playerImg}
          position={this.state.position}
          character={this.state.character}
          openMenu={this.state.openMenu}
          map={this.state.map}
          Data={this.state}
          bagUse={this.bagUse}
        />
      </div>
    );
  }
}
export default Game;
