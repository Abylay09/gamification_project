import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./game1.scss"

let positionX = 0, positionY = 0, doc = document.getElementsByTagName("html")[0]
export default class Game1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      direction_move: [],
      direction_obs: [],
      directions: ["left", "up", "right", "down"],
      question: 1,
      answer: null,
      colors: ["#EF5755", "#567BFF", "#FFD056", "#25A749", "#622300"],
      active_color: null,
      time: 60,
      back_time: 60,
      exp: 0,
      step: 1,
      timer: 1
    }
  }
  componentDidMount() {
    this.generateGame()
    this.setTime()
  }
  setTime() {
    let inter_timer = setInterval(() => {
      this.setState({timer: this.state.timer - 1})
    }, 999)
    let inter = setInterval(() => {
      this.setState({time: this.state.time - 1})
      if(!this.state.time) {
        clearInterval(inter_timer)
        clearInterval(inter)
        this.sendData()
      }
    }, 1000)
  }
  sendData() {
    let data = {
      type: "thinking",
      game: 1,
      value: this.state.exp
    }
    this.axios.post("href", data)
  }
  generateGame() {
    let direction_move = [], direction_obs = [], question = Math.round(Math.random()), active_color = Math.floor(Math.random() * this.state.step)
    for(let i = 0; i < this.state.step; i++) {
      direction_move.push(this.state.directions[Math.floor(Math.random() * this.state.directions.length)])
      direction_obs.push(this.state.directions[Math.floor(Math.random() * this.state.directions.length)])
    }
    this.setState({
      question: question,
      answer: question ? direction_move[active_color] : direction_obs[active_color],
      active_color: active_color,
      direction_move: direction_move,
      direction_obs: direction_obs,
      back_time: Math.floor(this.state.time + ((this.state.back_time - this.state.time) / 2)),
      time: Math.floor(this.state.time + ((this.state.back_time - this.state.time) / 2))
    })

  }
  touchStart(e) {
    positionX = e.touches[0].clientX
    positionY = e.touches[0].clientY
    this.setState({ has: true })
  }
  touchMove(e) {
    if(!this.state.has) return
    let answer = null
    if(positionX - 100 > e.touches[0].clientX || positionX + 100 < e.touches[0].clientX) {
      if(positionX - e.touches[0].clientX < 0) {
        answer = "right"
      } else {
        answer = "left"
      }
      positionX = e.touches[0].clientX
    }
    if(!positionY || positionY - 100 > e.touches[0].clientY || positionY + 100 < e.touches[0].clientY) {
      if(positionY - e.touches[0].clientY < 0) {
        answer = "down"
      } else {
        answer = "up"
      }
      positionY = e.touches[0].clientY
    }
    if(answer) {
      let exp = answer === this.state.answer ? this.state.exp + this.state.step :  this.state.exp - (2 * this.state.step), step = 1
      if(answer !== this.state.answer && this.state.step > 1)
        step = this.state.step - 1
      else if(exp >= 50)
        step = 5
      else if(exp >= 30)
        step = 4
      else if(exp >= 15)
        step = 3
      else if(exp >= 5)
        step = 2
      if(exp < 0) exp = 0
      this.setState({ has: false, exp: exp, step: step, update: true })
      this.generateGame()
    }
  }
  getColor(index) {
    return { color: this.state.colors[index] }
  }
  randCoordinats(index, direction, timer, parent_index) {
    let top = Math.random() * doc.clientHeight,
      left = Math.random() * doc.clientWidth,
      transition = "top 1s, left 1s"
    if(document.getElementById("arrow-"+this.state.colors[index]+"-"+parent_index)){
      if(~["up", "down"].indexOf(direction)) {
        top = parseInt(document.getElementById("arrow-"+this.state.colors[index]+"-"+parent_index).style.top.replace("px", "")) + (direction === "up" ? -100 : 100)
        left = parseInt(document.getElementById("arrow-"+this.state.colors[index]+"-"+parent_index).style.left.replace("px", ""))
      }
      else {
        top = parseInt(document.getElementById("arrow-"+this.state.colors[index]+"-"+parent_index).style.top.replace("px", ""))
        left = parseInt(document.getElementById("arrow-"+this.state.colors[index]+"-"+parent_index).style.left.replace("px", "")) + (direction === "left" ? -100 : 100)
      }
    }
    if(top < 24){
      transition = "all 0s"
      top = doc.clientHeight + 48
      left = Math.random() * doc.clientWidth
    }
    else if(top > doc.clientHeight + 124){
      transition = "all 0s"
      top = -48
      left = Math.random() * doc.clientWidth
    }
    if(left < -124){
      transition = "all 0s"
      left = doc.clientWidth + 48
      top = Math.random() * doc.clientHeight
    }
    else if(left > doc.clientWidth + 124){
      transition = "all 0s"
      left = -48
      top = Math.random() * doc.clientHeight
    }

    return {
      top, 
      left,
      transition,
      color: this.state.colors[index]
    }
  }
  render() {
    return this.state.time > 0 ? (
      <Container onTouchMove={e => this.touchMove(e)} onTouchStart={e => this.touchStart(e)}>
        <Row>
            <Col xs="4">
              Баллы: {this.state.exp}
            </Col>
            <Col xs="4" className="d-flex justify-content-center">
              Время: {this.state.time}
            </Col>
            <Col xs="4" className="d-flex justify-content-end">
              Уровень: {this.state.step}
            </Col>
            <Col xs="12" className="justify-content-center align-items-center d-flex flex-column py-4">
              <span>Куда {this.state.question ? "Движутся" : "Смотрят"}</span> <span style={this.getColor(this.state.active_color)}>стрелочки</span>
            </Col>
        </Row>
        <Row>
          {new Array(20).fill(1).map((y, j) =>
              this.state.direction_move.map((x, i) => 
                <div style={this.randCoordinats(i, x, this.state.timer, j)} id={"arrow-"+this.state.colors[i]+"-"+j} className={"arrow direction-"+this.state.direction_obs[i]}> {"<-"} </div>
              )
            )
          }
        </Row>
      </Container>
    ) : <Container>
          <Row>
            <Col xs="12" className="justify-content-center align-items-center d-flex flex-column py-4">
              <span>Спасибо за игру ваш счёт</span>
              <span>{this.state.exp}</span>
              <button>Вернуться</button>
            </Col>
          </Row>
        </Container>
  }
}