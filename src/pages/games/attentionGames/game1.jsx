import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./game1.scss"
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import FixedButton from 'components/buttons/fixed-button/FixedButton'

export default class Game1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      value: 1,
      exp: 0,
      strick: 0,
      time: 60
    }
  }
  componentDidMount() {
    this.randA()
    this.setTime()
  }

  setTime() {
    let inter = setInterval(() => {
      this.setState({time: this.state.time - 1})
      if(!this.state.time) {
        clearInterval(inter)
        this.sendData()
      }
    }, 1000)
  }
  sendData() {
    let data = {
      type: "attention",
      game: 1,
      value: this.state.exp
    }
    this.axios.post("href", data)
  }
  randA(value) {
    if(this.state.value === value && this.state.strick < 13)
      this.setState({strick: this.state.strick + 1})
    else if(this.state.value !== value)
      this.setState({strick: 0})
    let ceil = Math.floor(this.state.strick / 3)
    this.setState({exp: this.state.exp + (this.state.value === value ? (ceil + 1) : 0)})
    let arr = [], ceil1 = 0, ceil2 = 0
    if(this.state.strick >= 3 && this.state.strick <= 8)
      ceil1 = 1
    else if(this.state.strick > 8)
      ceil1 = 2

    if(this.state.strick >= 6 && this.state.strick <= 11)
      ceil2 = 1
    else if(this.state.strick > 11)
      ceil2 = 2
      
    for (let i=0; i < 3 + ceil1; i++) {
      arr[i] = new Array()
      for (let j=0; j < 3 + ceil2; j++) {
        arr[i][j] = (Math.floor(Math.random()*10000) + "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
    }
    this.setState({arr: arr });
    this.setState({value: arr.flat()[Math.floor(Math.random() * arr.flat().length)] });
  }
  render(navigation) {
    return this.state.time > 0 ? (
      <Container className='container-custom-attention-1'>
          <Row>
              <Col xs="6">
                Баллы: {this.state.exp}
              </Col>
              <Col xs="6">
                Осталось времени: {this.state.time}
              </Col>
              <Col xs="12" className="justify-content-center align-items-center d-flex flex-column py-4">
                <span>Найдите число</span> <span>{this.state.value}</span>
              </Col>
          </Row>
          <Row>
            <Col>
            <div className="grid">
              { this.state.arr.map(x => (<ul>{x.map(y => (<li onClick={() => this.randA(y)}>{y}</li>))}</ul>)) }
            </div>
            </Col>
          </Row>
      </Container>
    ) : <Container className='container-custom-attention-1'>
          <Row>
            <Col xs="12" className="justify-content-center align-items-center d-flex flex-column py-4">
              <span>Спасибо за игру ваш счёт</span>
              <span>{this.state.exp}</span>
              <Link className="w-100" to="/quests">
                <FixedButton text={"Вернуться"}/>
              </Link>
            </Col>
          </Row>
        </Container>
  }
}