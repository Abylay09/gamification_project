import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./game1.scss"
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import GameHeader from '../components/GameHeader';
import { useSelector } from 'react-redux'
import axios from 'axios';
export default class Game1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      value: 1,
      exp: 0,
      strick: 0,
      time: 60,
      error: [],
      success: []
    }
  }
  componentDidMount() {
    this.randA()
    this.setTime()
  }

  setTime() {
    let inter = setInterval(() => {
      this.setState({ time: this.state.time - 1 })
      if (!this.state.time) {
        clearInterval(inter)
        this.sendData()
      }
    }, 1000)
  }
  sendData() {
    this.setState({ end: true })
    const token = localStorage.getItem("token");
    let data = {
      type: "memmory",
      value: this.state.exp
    }
    axios.post("http://api.openskill.uz/indicators/add-indicator", data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

  }
  randA(value, i, j) {
    if(this.state.value === value) {
      this.setState({ success: [i, j] })
      setTimeout(() => {
        this.setState({ success: [] })
      }, 600)
    }
    if (this.state.value === value && this.state.strick < 13)
      this.setState({ strick: this.state.strick + 1, success: [i, j] })
    else if (this.state.value !== value) {
      this.setState({ strick: 0, error: [i, j] })
      setTimeout(() => {
        this.setState({ error: [] })
      }, 600)
    }
    let ceil = Math.floor(this.state.strick / 3)
    this.setState({ exp: this.state.exp + (this.state.value === value ? (ceil + 1) : 0) })
    let arr = [], ceil1 = 0, ceil2 = 0
    if (this.state.strick >= 3 && this.state.strick <= 8)
      ceil1 = 1
    else if (this.state.strick > 8)
      ceil1 = 2

    if (this.state.strick >= 6 && this.state.strick <= 11)
      ceil2 = 1
    else if (this.state.strick > 11)
      ceil2 = 2

    for (let i = 0; i < 3 + ceil1; i++) {
      arr[i] = new Array()
      for (let j = 0; j < 3 + ceil2; j++) {
        arr[i][j] = (Math.floor(Math.random() * 10000) + "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
    }
    this.setState({ arr: arr });
    this.setState({ value: arr.flat()[Math.floor(Math.random() * arr.flat().length)] });
  }
  render(navigation) {
    return this.state.time > 0 ? (
      <Container className='container-custom-attention-1'>
        <GameHeader title={"Запоминание порядка"} />
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
            <div className={'grid' + (this.state.error.length ? ' error' : '')}>
              {this.state.arr.map((x, i) => (<ul>{x.map((y, j) => (
                <li
                className={this.state.error.length && this.state.error[0] === i && this.state.error[1] === j ? 'error' 
                : this.state.success.length && this.state.success[0] === i && this.state.success[1] === j ? 'success' : ''}
                onClick={() => this.randA(y, i, j)}
              >
                {y}
              </li>
              ))}</ul>))}
            </div>
          </Col>
        </Row>
      </Container>
    ) : <Container className='container-custom-attention-1' style={{ marginTop: "-80px" }}>
      <Row style={{ height: "100vh" }} className='d-flex flex-column justify-content-center'>
        <Col xs="12" className="justify-content-center align-items-center d-flex flex-column ">
          <span>Спасибо за игру ваш счёт</span>
          <span>{this.state.exp}</span>
          <Link className="w-100" to="/quests">
            <FixedButton text={"Вернуться"} />
          </Link>
        </Col>
      </Row>
    </Container>
  }
}

// const lang = () => {
//   return  language = useSelector(state => state.language.language)
// }
// const mapStateToProps = (state) => ({
//   count: state.counter.value
// });

// const mapDispatchToProps = { increment, decrement };

// export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);