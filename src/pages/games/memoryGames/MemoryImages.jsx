import FixedButton from 'components/buttons/fixed-button/FixedButton';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import GameHeader from '../components/GameHeader';
import { dataImages } from './dataImages'
import axios from 'axios';
import "./MemoryImages.scss"
import { useNavigate } from 'react-router-dom';
let answers = [];
function Test() {
  const [fakeImages, setFakeImages] = useState([]);
  const [images, setImages] = useState([]);
  // const [answers, setAnswers] = useState([]);
  const [show, setShow] = useState(true);
  const [showAnswers, setShowAnswers] = useState(false);
  const [finish, setFinish] = useState(false)
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(10)
  const [score, setScore] = useState(0)
  const navigate = useNavigate()
  // const time = useRef(60)


  useEffect(() => {
    generateGame()
  }, [])
  useEffect(() => {
    let toggled = document.querySelectorAll(".fake-img")
    toggled.forEach(item => {
      item.classList.remove("selected")
    })
  }, [images])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000)
    if (time == 0) {
      setFinish(true)
    }
    return () => clearInterval(timer)
  }, [time])


  function generateGame() {
    if (level <= dataImages.length - 1) {
      setShow(true)
      setShowAnswers(false)
      setImages([])
      setFakeImages([])
      answers = []
      console.log(level);

      for (let i = 0; i <= level; i++) {
        let rand = Math.floor(Math.random() * dataImages.length);
        setImages(oldArr => [...oldArr, dataImages[Math.floor(Math.random() * dataImages.length)].url])
      }


      for (let i = 0; i < level + 1; i++) {
        setFakeImages(fakeImages => [...fakeImages, dataImages[i].url])
      }


      setLevel(oldLevel => oldLevel + 1)
      setTimeout(() => {
        setShow(false)
      }, 2100)
      setTimeout(() => {
        setShowAnswers(true)
      }, 2200)
    } else {
      setFinish(true)
    }

  }
  function setId(img, index) {
    let result = images.find(elem => elem == img ? true : false)
    if (result) {
      return "yes"
    } else {
      return index
    }
  }

  function shuffle(array) {
    console.log(array);
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function checkAnswer() {
    console.log(answers);
    if (answers.every(item => item == "yes") && answers.length == images.length) {
      setScore(oldScore => oldScore + 2)
    } else {
      console.log(false)
    }
  }

  function sendData() {
    const token = localStorage.getItem("token");
    let data = {
      type: "memmory",
      value: score
    }
    axios.post("http://api.openskill.uz/indicators/add-indicator", data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  return (
    <>
      {
        finish ? (
          <Container className='text-center d-flex flex-column justify-content-center' style={{ height: "100vh" }}>
            Игра завершена
            <p>Твой счет : {score}</p>
            {
              <FixedButton text={"Вернуться в игры"} onClick={() => {
                sendData()
                navigate(-1)
              }} />
            }
          </Container>
        ) : (
          <Container style={{ height: "90vh", marginTop: "80px" }}>
            <GameHeader title={"Запоминание предметов"} />
            <Row>
              <Col className='text-center'>Время {time} c</Col>
              <Col className='text-center'>Очки {score}</Col>
            </Row>
            <Row>
              <Col >
                <div style={{ display: show ? "block" : "none" }} className="mt-5">

                  <div className='d-flex flex-wrap justify-content-center' style={{ gap: "20px" }}>
                    {
                      images.map((img, index) => <img key={index} src={img} alt="" style={{ width: "80px", height: '80px' }} />)
                    }
                  </div>
                </div>
              </Col>

            </Row>
            <Row>
              <Col>
                <div style={{ display: showAnswers ? "block" : "none" }} className="mt-5">
                  <div className='d-flex flex-wrap justify-content-center' style={{ gap: "20px" }}>
                    {
                      fakeImages ? fakeImages.concat(images).map((img, index) => <div className='answer-image'
                        onClick={(e) => {
                          e.target.classList.toggle('selected')
                        }}>
                        <img
                          custom-key={setId(img, index)}
                          className="fake-img"
                          onClick={(e) => {
                            answers.push(e.target.getAttribute("custom-key"))
                          }}
                          key={index}
                          src={img} alt=""
                          style={{ width: "70px", height: '70px' }} />
                      </div>)
                        : ""
                    }
                  </div>
                  <button className='memory-btn' onClick={() => {
                    checkAnswer()
                    generateGame()
                  }} >Продолжить</button>
                </div>
              </Col>

            </Row>

          </Container>
        )

      }
    </>
  )
}

export default Test