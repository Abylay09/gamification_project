import CommonButton from 'components/buttons/CommonButton';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GameHeader from '../components/GameHeader';
import { dataImages } from './dataImages'
import axios from 'axios';
import "./MemoryImages.scss"
export default function MemoryImages() {
  const [images, setImages] = useState([]);
  const [variants, setVariants] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [time, setTime] = useState(60)
  const [score, setScore] = useState(0)
  const [finish, setFinish] = useState(false)
  const variantsRef = useRef([]);
  const leverRef = useRef(1)
  const navigate = useNavigate()
  useEffect(() => {
    let data = dataImages.map(item => ({
      url: item.url,
      id: item.id
    }))

    let final_data = shuffleArray(data).slice(0, 2)
    setImages([...final_data])
    const imagesId = final_data.map(item => item.id)
    setAnswer(imagesId)

    setTimeout(() => {
      document.querySelector(".memory-images").classList.add("memory-images--close")
    }, 3000);

  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000)
    if (time == 0) {
      setFinish(true)
      sendData()
    }
    return () => clearInterval(timer)
  }, [time])

  useEffect(() => {
    generateVariants();
    setTimeout(() => {
      document.querySelector(".memory-images").classList.add("memory-images--close")
      document.querySelector(".memory-variants").classList.remove("memory-variants--close")
    }, 3500);


  }, [images])

  function generateImages() {
    if (leverRef.current === 7) {
      setFinish(true)
    }
    document.querySelector(".memory-images").classList.remove("memory-images--close")
    let data = dataImages.map(item => ({
      url: item.url,
      id: item.id
    }))

    let final_data = shuffleArray(data).slice(0, leverRef.current)
    const imagesId = final_data.map(item => item.id)

    setAnswer(imagesId)
    setImages([...final_data])
  }

  function generateVariants() {
    document.querySelector(".memory-variants").classList.add("memory-variants--close")
    let imageVariants = []
    console.log(images);
    let data = dataImages.map(item => ({
      url: item.url,
      id: item.id,
    }))

    for (let i = 0; i < data.length; i++) {
      if (answer.includes(data[i].id)) {
        continue
      } else {
        imageVariants.push({
          url: data[i].url,
          id: data[i].id
        })
      }

    }
    let final = shuffleArray(shuffleArray(imageVariants).slice(0, leverRef.current).concat(images))
    setVariants(final)
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
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

  function checkAnswer() {
    let result = false;
    if (answer.length === variantsRef.current.length) {
      for (let i = 0; i < variantsRef.current.length - 1; i++) {
        result = answer.includes(+variantsRef.current[i])
      }
    }

    if (result) {
      setScore(oldScore => oldScore + 5)
    } else {
      if (score !== 0) {
        setScore(oldScore => oldScore - 5)
      } else {
        setScore(0)
      }
    }

    document.querySelectorAll(".fake-img").forEach(item => {
      item.classList.remove("selected")
    })
    variantsRef.current = []
  }

  return finish ? <Container>
    <h1 className='text-center' style={{ paddingTop: "50%" }}>Игра окончена</h1>
    <p className='text-center' style={{ fontSize: "20px" }}>Твой счет : {score}</p>
    <Button className='w-100 py-3 mt-4' style={{ fontSize: "18px" }} variant="primary" onClick={() => {
      navigate("/quests")
    }}>Вернуться в раздел игр</Button>
  </Container> :
    (
      <Container className='memory-images-wrapper pt-4' style={{ height: "100vh" }}>
        <GameHeader title={"Запоминание предметов"} />
        <Row className='mb-3' style={{ marginTop: "80px" }}>
          <Col className='text-center' style={{ fontSize: "21px", fontWeight: "500" }}>
            Время : {time}
          </Col>
          <Col className='text-center' style={{ fontSize: "21px", fontWeight: "500" }}>
            Счет : {score}
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <div className='memory-images text-center'>
              {
                images.map((image, index) => <img key={index} src={image.url} alt="" />)
              }
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <div className='memory-variants memory-variants--close'>
              {/* <div className='memory-variants  '> */}
              {
                variants ? variants.map((image, index) => <img
                  variant-id={image.id} key={index} src={image.url} alt=""
                  className='fake-img'
                  onClick={(e) => {
                    variantsRef.current.push(e.target.getAttribute("variant-id"))
                    e.target.classList.toggle('selected')
                  }}
                />) : ""
              }
            </div>
          </Col>
        </Row>

        <button className='memory-btn' onClick={() => {
          checkAnswer()
          leverRef.current++
          generateImages()
          generateVariants()
        }}>Проверить</button>
      </Container>
    )
}

// import FixedButton from 'components/buttons/fixed-button/FixedButton';
// import React, { useEffect, useState } from 'react'
// import { useRef } from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
// import GameHeader from '../components/GameHeader';
// import { dataImages } from './dataImages'
// import axios from 'axios';
// import "./MemoryImages.scss"
// import { useNavigate } from 'react-router-dom';
// let answers = [];
// function Test() {
//   const [fakeImages, setFakeImages] = useState([]);
//   const [images, setImages] = useState([]);
//   // const [answers, setAnswers] = useState([]);
//   const [show, setShow] = useState(true);
//   const [showAnswers, setShowAnswers] = useState(false);
//   const [finish, setFinish] = useState(false)
//   const [level, setLevel] = useState(1);
//   const [time, setTime] = useState(10)
//   const [score, setScore] = useState(0)
//   const navigate = useNavigate()
//   // const time = useRef(60)


//   useEffect(() => {
//     generateGame()
//   }, [])
//   useEffect(() => {
//     let toggled = document.querySelectorAll(".fake-img")
//     toggled.forEach(item => {
//       item.classList.remove("selected")
//     })
//   }, [images])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(prev => prev - 1)
//     }, 1000)
//     if (time == 0) {
//       setFinish(true)
//     }
//     return () => clearInterval(timer)
//   }, [time])


//   function generateGame() {
//     if (level <= dataImages.length - 1) {
//       setShow(true)
//       setShowAnswers(false)
//       setImages([])
//       setFakeImages([])
//       answers = []
//       console.log(level);

//       for (let i = 0; i <= level; i++) {
//         let rand = Math.floor(Math.random() * dataImages.length);
//         setImages(oldArr => [...oldArr, dataImages[Math.floor(Math.random() * dataImages.length)].url])
//       }


//       for (let i = 0; i < level + 1; i++) {
//         setFakeImages(fakeImages => [...fakeImages, dataImages[i].url])
//       }


//       setLevel(oldLevel => oldLevel + 1)
//       setTimeout(() => {
//         setShow(false)
//       }, 2100)
//       setTimeout(() => {
//         setShowAnswers(true)
//       }, 2200)
//     } else {
//       setFinish(true)
//     }

//   }
//   function setId(img, index) {
//     let result = images.find(elem => elem == img ? true : false)
//     if (result) {
//       return "yes"
//     } else {
//       return index
//     }
//   }

//   function shuffle(array) {
//     console.log(array);
//     let currentIndex = array.length, randomIndex;
//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
//     return array;
//   }

//   function checkAnswer() {
//     console.log(answers);
//     if (answers.every(item => item == "yes") && answers.length == images.length) {
//       setScore(oldScore => oldScore + 2)
//     } else {
//       console.log(false)
//     }
//   }

//   function sendData() {
//     const token = localStorage.getItem("token");
//     let data = {
//       type: "memmory",
//       value: score
//     }
//     axios.post("http://api.openskill.uz/indicators/add-indicator", data, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });
//   }

//   return (
//     <>
//       {
//         finish ? (
//           <Container className='text-center d-flex flex-column justify-content-center' style={{ height: "100vh" }}>
//             Игра завершена
//             <p>Твой счет : {score}</p>
//             {
//               <FixedButton text={"Вернуться в игры"} onClick={() => {
//                 sendData()
//                 navigate(-1)
//               }} />
//             }
//           </Container>
//         ) : (
//           <Container style={{ height: "90vh", marginTop: "80px" }}>
//             <GameHeader title={"Запоминание предметов"} />
//             <Row>
//               <Col className='text-center'>Время {time} c</Col>
//               <Col className='text-center'>Очки {score}</Col>
//             </Row>
//             <Row>
//               <Col >
//                 <div style={{ display: show ? "block" : "none" }} className="mt-5">

//                   <div className='d-flex flex-wrap justify-content-center' style={{ gap: "20px" }}>
//                     {
//                       images.map((img, index) => <img key={index} src={img} alt="" style={{ width: "80px", height: '80px' }} />)
//                     }
//                   </div>
//                 </div>
//               </Col>

//             </Row>
//             <Row>
//               <Col>
//                 <div style={{ display: showAnswers ? "block" : "none" }} className="mt-5">
//                   <div className='d-flex flex-wrap justify-content-center' style={{ gap: "20px" }}>
//                     {
//                       fakeImages ? fakeImages.concat(images).map((img, index) => <div className='answer-image'
                        // onClick={(e) => {
                        //   e.target.classList.toggle('selected')
                        // }}>
//                         <img
//                           custom-key={setId(img, index)}
//                           className="fake-img"
                          // onClick={(e) => {
                          //   answers.push(e.target.getAttribute("custom-key"))
                          // }}
//                           key={index}
//                           src={img} alt=""
//                           style={{ width: "70px", height: '70px' }} />
//                       </div>)
//                         : ""
//                     }
//                   </div>
//                   <button className='memory-btn' onClick={() => {
//                     checkAnswer()
//                     generateGame()
//                   }} >Продолжить</button>
//                 </div>
//               </Col>

//             </Row>

//           </Container>
//         )

//       }
//     </>
//   )
// }

// export default Test