import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./game1.scss"

export default class Game1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      value: [],
      true_value: [],
      end: false,
      exp: 0,
      step: 1,
      isGenerate: true
    }
  }
  componentDidMount() {
    this.generateGame()
  }
  generateGame() {
    let arr = [], true_value = [], ceil1 = 0, ceil2 = 0, time = 2000

    if(this.state.step >= 3 && this.state.step <= 8)
      ceil1 = 1
    else if(this.state.step > 8)
      ceil1 = 2

    if(this.state.step >= 3 && this.state.step <= 8)
      ceil1 = 1
    else if(this.state.step > 8)
      ceil1 = 2

    if(this.state.step >= 4 && this.state.step <= 9)
      time = 1500
    else if(this.state.step > 14)
      ceil2 = 1000
    else if(this.state.step > 20)
      ceil2 = 500
      
    for (let i=0; i < 3 + ceil1; i++) {
      arr[i] = new Array()
      for (let j=0; j < 3 + ceil2; j++) {
        arr[i][j] = [ i, j, "false" ]
      }
    }
    for (let i = 0; i < 3 + ceil1 + ceil2; i++)
      true_value.push(arr.flat()[Math.floor(Math.random() * arr.flat().length)])
      let i = 0
    this.setState({arr: arr })
    this.setState({true_value: true_value })
    let false_arr = JSON.parse(JSON.stringify(arr))
    let inter = setInterval(x => {
      let obj = true_value[i]
      if(!obj) {
        clearInterval(inter)
        this.setState({arr: arr })
        this.setState({isGenerate: false })
      }
      else {
        false_arr[obj[0]][obj[1]][2] = "false"
        this.setState({arr: false_arr })
        setTimeout(() => {
          false_arr[obj[0]][obj[1]][2] = "true"
          this.setState({arr: false_arr })
        }, 300)
        i++
      }
    }, time)
  }
  addValue(value) {
    if(this.state.isGenerate) return
    let arr = JSON.parse(JSON.stringify(this.state.arr))
    if(this.state.true_value.length && this.state.true_value[0][0] === value[0] && this.state.true_value[0][1] === value[1]) {
      this.setState({true_value: JSON.parse(JSON.stringify(this.state.true_value)).splice(1,Infinity) })
      if(this.state.true_value.length === 1) {
        this.generateGame()
        this.setState({exp: this.state.exp + this.state.step })
        this.setState({step: this.state.step + 1 })
      }
    } else
      this.sendData()
    arr[value[0]][value[1]][2] = true
    value[2] = "true"
  }
  sendData() {
    this.setState({end: true })
    let data = {
      type: "memory",
      game: 1,
      value: this.state.exp
    }
    this.axios.post("href", data)
  }
  render() {
    return !this.state.end ? (
      <Container>
        <Row>
            <Col xs="6">
              Баллы: {this.state.exp}
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
              Ход: {this.state.step}
            </Col>
            <Col xs="12" className="justify-content-center align-items-center d-flex flex-column py-4">
              <span>Найдите число</span> <span>{this.state.value}</span>
            </Col>
        </Row>
          <Row>
            <Col>
            <div class="grid">
              { this.state.arr.map((x) => (<ul>{x.map((y, index) => (<li key={index} className={y[2] === "true" ? "active" : ""} onClick={() => this.addValue(y)}></li>))}</ul>)) }
            </div>
            </Col>
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