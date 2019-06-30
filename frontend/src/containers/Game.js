import React, { Component } from "react";
//component
import Gameview from '../components/game/gameview';
import TextArea from './Speaking';
import Fight from './Fight';
// function
// import moveLeft from '../components/functions/move/moveLeft';
// import moveRight from '../components/functions/move/moveRight';
// import moveTop from '../components/functions/move/moveTop';
// import moveDown from '../components/functions/move/moveDown';
import move from "../components/functions/move/move";
import open from "../components/functions/openMenu";
import playerImg from "../img/playerImg";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        characterPositionInMap: {   top: 450,  left: 500   },
        characterFacing: {top: true, down: false, left: false, right: false},
        characterBag: [
          {name: "傷藥", amount: 0, explain: "可回覆25滴血"},
          {name: "pp提升藥劑", amount: 0,  explain: "回覆1pp"}
        ],
        movingImgOneTwo: false,
        moving: false,
        preMove: 38
      },

      position: {top: "0", left: "0"},

      roleInfo: {
        player: {
          name: "Ian",          level: 18,
          currentBlood: 200,    totalBlood: 200,
          frontImg: "",         backImg: require("../img/Player2.png"),
          attack: [{
              name: "星報氣流展", damage: 120,  speed: 5,
              probability:0.1,  totalPP: 5,   currentPP: 5,
              arrow: "visible"
            },
            {
              name: "DaDaDa",   damage: 60,     speed: 5,
              probability: 0.6, totalPP: 15,    currentPP: 15,
              arrow: "hidden"
            },
            {
                name: "WoooooW",    damage: 20,     speed: 5,
                probability: 1,     totalPP: 20,    currentPP: 20,
                arrow: "hidden"
            },
            {
                name: "YoYoYo",     damage: 100,    speed: 5,
                probability: 0.4,   totalPP: 10,    currentPP: 10,
                arrow: "hidden"
            }]
          },
          enemy: {
            name: "Ric",
            level: 43,
            currentBlood: 200,
            totalBlood: 200,
            frontImg: require("../img/RicBattle.png"),
  
            backImg: "",
  
            attack: [
              {
                name: "blablabla",  damage: 120,    speed: 5,
                probability: 0.1,   totalPP: 5,     currentPP: 5,
                arrow: "visible"
              },
              {
                name: "DaDaDa",     damage: 60,     speed: 5,
                probability: 0.6,   totalPP: 15,    currentPP: 15,
                arrow: "hidden"
              },
              {
                name: "WoooooW",    damage: 20,     speed: 5,
                probability: 1,     totalPP: 20,    currentPP: 20,
                arrow: "hidden"
              },
              {
                name: "YoYoYo",     damage: 100,    speed: 5,
                probability: 0.4,   totalPP: 10,    currentPP: 10,
                arrow: "hidden"
              }
            ]
          },
        },
        map: {
                name: "1",
                noEntry: [
                    {top:50, left:-250},{top:50, left:-200},{top:50, left:-150},{top:50, left:-100},{top:50, left:-50},{top:50, left:0},
                    {top:50, left:400},{top:50, left:350},{top:50, left:300},{top:50, left:250},{top:50, left:200},{top:50, left:150},
                    {top:150, left:-250},{top:150, left:-200},{top:150, left:-150},{top:150, left:-100},{top:150, left:-50},{top:150, left:0},
                    {top:150, left:400},{top:150, left:350},{top:150, left:300},{top:150, left:250},{top:150, left:200},{top:150, left:150},
                    {top:-50, left:-250},{top:-50, left:-200},{top:-50, left:-150},{top:-50, left:-100},{top:-50, left:-50},{top:-50, left:0},
                    {top:-50, left:400},{top:-50, left:350},{top:-50, left:300},{top:-50, left:250},{top:-50, left:200},{top:-50, left:150},
                    {top:-150, left:-250},{top:-150, left:-200},{top:-150, left:-150},{top:-150, left:-100},{top:-150, left:-50},{top:-150, left:0},
                    {top:-150, left:400},{top:-150, left:350},{top:-150, left:300},{top:-150, left:250},{top:-150, left:200},{top:-150, left:150},
                    {top:-250, left:-250},{top:-250, left:-200},{top:-250, left:-150},{top:-250, left:-100},{top:-250, left:-50},{top:-250, left:0},
                    {top:-250, left:400},{top:-250, left:350},{top:-250, left:300},{top:-250, left:250},{top:-250, left:200},{top:-250, left:150},
                    {top:-350, left:-250},{top:-350, left:-200},{top:-350, left:-150},{top:-350, left:-100},{top:-350, left:-50},{top:-350, left:0},
                    {top:-350, left:400},{top:-350, left:350},{top:-350, left:300},{top:-350, left:250},{top:-350, left:200},{top:-350, left:150},
                    {top:450, left:450},{top:450, left:400},{top:450, left:350},{top:450, left:300},{top:450, left:250},{top:450, left:200},{top:450, left:150},{top:450, left:100},
                    {top:450, left:50},{top:450, left:0},{top:450, left:-50},{top:450, left:-100},{top:450, left:-150},{top:450, left:-200},{top:450, left:-250},
                    {top:450, left:-300},
                    {top:-600, left:450},{top:-600, left:400},{top:-600, left:350},{top:-600, left:300},{top:-600, left:250},{top:-600, left:200},{top:-600, left:150},{top:-600, left:100},
                    {top:-600, left:50},{top:-600, left:0},{top:-600, left:-50},{top:-600, left:-100},{top:-600, left:-150},{top:-600, left:-200},{top:-600, left:-250},
                    {top:-600, left:-300},
                    {top:450, left:-350},{top:400, left:-350},{top:350, left:-350},{top:300, left:-350},{top:250, left:-350},{top:200, left:-350},{top:150, left:-350},
                    {top:100, left:-350},{top:50, left:-350},{top:0, left:-350},{top:-50, left:-350},{top:-100, left:-350},{top:-150, left:-350},{top:-200, left:-350},
                    {top:-250, left:-350},{top:-300, left:-350},{top:-350, left:-350},{top:-400, left:-350},{top:-450, left:-350},{top:-500, left:-350},{top:-550, left:-350},
                    {top:-600, left:-350},
                    {top:450, left:500},{top:400, left:500},{top:350, left:500},{top:300, left:500},{top:250, left:500},{top:200, left:500},{top:150, left:500},
                    {top:100, left:500},{top:50, left:500},{top:0, left:500},{top:-50, left:500},{top:-100, left:500},{top:-150, left:500},{top:-200, left:500},
                    {top:-250, left:500},{top:-300, left:500},{top:-350, left:500},{top:-400, left:500},{top:-450, left:500},{top:-500, left:500},{top:-550, left:500},
                    {top:-600, left:500},
                    {top:400, left:-250}, {top:350, left:-250}, {top:300, left:-250},
                    {top:400, left:250}, {top:400, left:200}, {top:400, left:150}, {top:400, left:100}, {top:400, left:50}, {top:400, left:0}, {top:400, left:-50}, {top:400, left:-100},
                    {top:300, left:350}, {top:300, left:300}, {top:300, left:250},
                ],
                enemy: [
                    {name:"ric", position:{top:100, left:200}, facing:0,
                    text:{
                        upper:"",
                        lower:"",
                    }},
                ]
        },
      arrowPosition: { x: 0, y: 0 },
      text: {
        upper: "",
        lower: ""
      },
      gameOrFight: true,
      openMenu: false,
      speaking: false,
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
          character: {...this.state.character,  characterFacing: {top:false, down:false, left:true, right:false}}
        });
        break;
      case 38:
        this.setState({
          character: {...this.state.character,  characterFacing: {top:true, down:false, left:false, right:false}}
        });
        break;
      case 39:
        this.setState({
            character: {...this.state.character, characterFacing: {top:false, down:false, left:false, right:true}}
        });
        break;
      case 40:
        this.setState({
          character: {...this.state.character,  characterFacing: {top:false, down:true, left:false, right:false}}
        });
        break;
      default:
        break;
    }
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
    const enemyTop = this.state.character.characterPositionInMap.top - this.state.map.enemy[0].position.top;
    const enemyLeft = this.state.character.characterPositionInMap.left - this.state.map.enemy[0].position.left;
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

  enemyExcuteAttack = async index => {
    this.textDisplay({ upper: "", lower: "" });
    var roleInfo = this.state.roleInfo;

    roleInfo.enemy.attack[index].currentPP--;

    this.textDisplay({ upper: roleInfo.enemy.name + "使出", lower: "" });
    await this.sleep(this.state.text.upper.length * 300);
    this.textDisplay({
      upper: roleInfo.enemy.name + "使出",
      lower: roleInfo.enemy.attack[index].name
    });
    await this.sleep(this.state.text.lower.length * 300);

    if (Math.random() < roleInfo.enemy.attack[index].probability) {
      roleInfo.player.currentBlood -= roleInfo.enemy.attack[index].damage;
      this.textDisplay({ upper: "成功擊中!", lower: "" });
      await this.sleep(this.state.text.upper.length * 300);
    } else {
      this.textDisplay({ upper: "但是失敗了...", lower: "" });
      await this.sleep(this.state.text.upper.length * 300);
    }

    if (roleInfo.player.currentBlood <= 0) {
      this.textDisplay({ upper: "你輸了...", lower: "" });
      await this.sleep(this.state.text.upper.lengh*300);
      this.setState({gameOrFight: true});
    }

    this.setState({ roleInfo: roleInfo, displayState: "control" });

    this.textDisplay({ upper: "", lower: "" });
  };

  moveArrow = e => {
    var roleInfo = this.state.roleInfo;
    var arrowPosition = this.state.arrowPosition;

    roleInfo.player.attack[arrowPosition.x + 2 * arrowPosition.y].arrow =
      "hidden";
    arrowPosition = {
      x: (arrowPosition.x + e.x) % 2,
      y: (arrowPosition.y + e.y) % 2
    };
    roleInfo.player.attack[arrowPosition.x + 2 * arrowPosition.y].arrow =
      "visible";

    this.setState({ arrowPosition: arrowPosition, roleInfo: roleInfo });
  };

  letsBattle = (e)=>{
    e.preventDefault();
    const facing = this.state.character.characterFacing;
    const top = parseInt(this.state.position.top);
    const left = parseInt(this.state.position.left);
    const enemyTop = this.state.character.characterPositionInMap.top-this.state.map.enemy[0].position.top;
    const enemyLeft = this.state.character.characterPositionInMap.left-this.state.map.enemy[0].position.left;
    if(e.keyCode===32){
        // if(top===enemyTop+50&&left===enemyLeft&&facing.down){console.log("you meet ric downward!")};
        if(top===enemyTop-100&&left===enemyLeft&&facing.top){
            this.setState({map: {...this.state.map,
                enemy:[{name:"ric", position:{top:100, left:200}, facing:0, text:{upper:"優拓現在缺人噢",lower:"",}}]}});
            this.setState({speaking: true});
            setTimeout(()=>this.setState({map: {...this.state.map,
                enemy:[{name:"ric", position:{top:100, left:200}, facing:0, text:{upper:"優拓現在缺人噢",lower:"但你github的星星數......我們先來對戰吧！",}}]}}), 1000)
            setTimeout(()=>this.setState({gameOrFight: false}), 6000);
        };
        if(top===enemyTop&&left===enemyLeft-50&&facing.left){
            this.setState({map: {...this.state.map,
                enemy:[{name:"ric", position:{top:100, left:200}, facing:1, text:{upper:"優拓現在缺人噢",lower:"",}}]}});
            this.setState({speaking: true});
            setTimeout(()=>this.setState({map: {...this.state.map,
                enemy:[{name:"ric", position:{top:100, left:200}, facing:1, text:{upper:"優拓現在缺人噢",lower:"但你github的星星數......我們先來對戰吧！",}}]}}), 1000)
            setTimeout(()=>this.setState({gameOrFight: false}), 6000);
        };
        if(top===enemyTop&&left===enemyLeft+50&&facing.right){
            this.setState({map: {...this.state.map,
                enemy:[{name:"ric", position:{top:100, left:200}, facing:2, text:{upper:"優拓現在缺人噢",lower:"",}}]}});
            this.setState({speaking: true});
            setTimeout(()=>this.setState({map: {...this.state.map,
                enemy:[{name:"ric", position:{top:100, left:200}, facing:2, text:{upper:"優拓現在缺人噢",lower:"但你github的星星數......我們先來對戰吧！",}}]}}), 1000)
            setTimeout(()=>this.setState({gameOrFight: false}), 6000);
        };}
    }

  playerExecuteAttack = async index => {
        this.setState({ waitPressEnter: false });
        var roleInfo = this.state.roleInfo;
        if (roleInfo.player.attack[index].currentPP > 0) {
        this.setState({ displayState: "text" });
        roleInfo.player.attack[index].currentPP--;

        this.textDisplay({ upper: roleInfo.player.name + "使出", lower: "" });
        await this.sleep(this.state.text.upper.length * 300);
        console.log(1);
        this.textDisplay({
            upper: roleInfo.player.name + "使出",
            lower: roleInfo.player.attack[index].name
        });
        await this.sleep(this.state.text.lower.length * 300);
        console.log(2);
        if (Math.random() < roleInfo.player.attack[index].probability) {
            roleInfo.enemy.currentBlood -= roleInfo.player.attack[index].damage;
            this.textDisplay({ upper: "成功擊中!", lower: "" });
            await this.sleep(this.state.text.upper.length * 300);
        } else {
            this.textDisplay({ upper: "但是失敗了...", lower: "" });
            await this.sleep(this.state.text.upper.length * 300);
        }

        this.setState({ roleInfo: roleInfo });

        if (roleInfo.enemy.currentBlood <= 0) {
            this.textDisplay({ upper: "你贏了!", lower: "" });
            await this.sleep(this.state.text.upper.lengh*300);
            this.setState({gameOrFight: true});
        } else {
            index = Math.floor(Math.random() * 4);
            var count = 0;

            while (
            count < 4 &&
            roleInfo.enemy.attack[index + count].currentPP == 0
            ) {
            count++;
            }

            this.enemyExcuteAttack(index + count);
        }}
    }
        textDisplay = obj => {
            this.setState({ text: { upper: obj.upper, lower: obj.lower } });
        };

        skipClass = async () => {
            this.setState({ displayState: "text" });
            this.textDisplay({ upper: "想進優拓，", lower: "" });
            await this.sleep(this.state.text.upper.length * 300);
            this.textDisplay({ upper: "想進優拓，", lower: "現在翹課可不行哦!" });
            await this.sleep(this.state.text.lower.length * 300);
            this.textDisplay({ upper: "", lower: "" });
            this.setState({ displayState: "prepare" });
        };
        skipClass2 = async () => {
            this.textDisplay({ upper: "優拓現在缺人噢", lower: "" });
            await this.sleep(this.state.text.upper.length * 300);
            this.textDisplay({ upper: "優拓現在缺人噢", lower: "但你github的星星數......我們先來對戰吧！" });
            await this.sleep(this.state.text.lower.length * 300);
            this.textDisplay({ upper: "", lower: "" });
        }
  componentDidMount(){
    this.fetchData();
    if (this.state.gameOrFight) {
      document.addEventListener("keydown", this.moving);
      document.addEventListener("keydown", this.openMenu);
      document.addEventListener("keyup", () => {
        this.setState({
          character: { ...this.state.character, moving: false }
        });
      });
      document.addEventListener("keydown", this.letsBattle);
    }
  }

  render() {
    // console.log(this.state.moving);
    console.log(this.state.roleInfo);
    return (
      <div>
        {this.state.speaking&&<div style={style}></div>}
        {this.state.gameOrFight ? (
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
          <TextArea text = {this.state.map.enemy[0].text} displayState = {this.state.speaking}/>
        </div>
        ) : (
          <Fight
            roleInfo={this.state.roleInfo}
            moveArrow={this.moveArrow}
            arrowPosition={this.state.arrowPosition}
            playerExecuteAttack={this.playerExecuteAttack}
            text={this.state.text}
            displayState={this.state.displayState}
            skipClass={this.skipClass}
          />
        )}
      </div>
    );
  }
}


var style = {
    opacity: "0",
    width: "1000px",
    height: "800px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%, -50%)",
    background: "black",
    zIndex: "1",
    animationDelay: "3s",
    animationName: "dimToBlackBegin",
    animationDuration: "3s",
    animationTimingFunction: "linear",
    mixBlendMode: "darken",
  }

export default Game;
