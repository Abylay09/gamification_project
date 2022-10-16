import { finishDraft } from 'immer';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { dataImages } from './dataImages'

export default function MemoryImages(){
  const [images, setImages] = useState([]);
  const [answer, seTanswer] = useState([]);
  const [fakeImages, setFakeImages] = useState();
  const [step, setStep] = useState(1);
  const [finish, setFinish] = useState(false)
  let temp = [];

  useEffect(() => {
    let rand = Math.floor(Math.random() * dataImages.length);
    setImages(oldArray => [...oldArray, dataImages[rand].url])

    let temp_arr = dataImages.filter((item) => {
      if(images.includes(item.url)){
        return false
      }else{
        return true
      }
    }).map(image => image.url)

    setFakeImages(temp_arr)
    console.log(images);
  }, [])

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    
    while (currentIndex !== 0) {


      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function generateGame(){
    if(step <= dataImages.length){
      setImages([]);
      setFakeImages([])
      for (let i = 0; i <= step; i++){
        let rand = Math.floor(Math.random() * dataImages.length);
        setImages(oldArray => [...oldArray, dataImages[rand].url])
      }

      let temp_arr = dataImages.filter((item) => {
        if(images.includes(item.url)){
          return false
        }else{
          return true
        }
      }).map(image => image.url)

      setFakeImages(temp_arr)
      console.log(temp_arr);
    }else{
      setFinish(true)
    } 
  }

  function checkAnswer(img){
    temp.push(img)
    let result;

    if (temp.length === images.length) {
      result = equalArrays(temp, images)
      console.log(result); 
      temp = []
    }
    
  }

  function equalArrays(arr1,arr2) {
    arr1.sort()
    arr2.sort()
    if(JSON.stringify(temp) === JSON.stringify(images)){
        return true
      }else{
        return false
      }
  }

  return(
    <div>
    {
      finish ? (
        <div>Игра завершена</div>
      )  : (
        <Container>
          {
            images.map((item, index) => <img onClick={(e) =>  console.log(e.target.getAttribute("custom-key"))} custom-key = {index} key={index} src={item} alt="" />)
          }
          <div></div>
          {fakeImages ? shuffle(fakeImages.slice(0, step)
               .concat(images))
               .map((item, index) => <img onClick={() => checkAnswer(item)} key={index}  src={item} alt="" />)
               : ""}
            <Button onClick={() => {
              setStep(prev => prev + 1)
              checkAnswer()
              generateGame()
              }}>Продолжить</Button>
        </Container>
      )
    }
    </div>

    
  )

  
}


// function MemoryImages() {
//   let temp = [];
//   const [state, setState] = useState({
//     step: 0,
//     score: 0,
//     trueValues: [],
//     finish: false,
//     images: [],
//     fakeImages: [],
//   })

//   console.log(state);
//   // useEffect(() => {
//   //   let arrId = [];
//   //   let arrImg = [];
//   //   for (let i = 0; i < 2; i++) {
//   //     arrId[i] = dataImages[i].id
//   //     arrImg[i] = dataImages[i].url
//   //   }
//   //   setState({
//   //     ...state,
//   //     trueValues: arrId,
//   //     images: arrImg
//   //   })

//   //   setTimeout(() => {
//   //     setState({
//   //       ...state,
//   //       images: null
//   //     })
//   //   }, 2000);

//   //   let temp_arr = [];
//   //   for (let i = 0; i < 3; i++) {
//   //     let rand = Math.floor(Math.random() * dataImages.length);
//   //     if(state.trueValues.includes(dataImages[rand].id)){

//   //     }
//   //     temp_arr[i] = dataImages[rand].url
//   //   }

//   //   setTimeout(() => {
//   //     setState({
//   //       ...state,
//   //       fakeImages : temp_arr
//   //     })
//   //   }, 3000);
//   // }, [])

//   function generate() {
//     if (state.step >= dataImages.length) {
//       setState({
//         ...state,
//         finish: true
//       })
//       return
//     } else {
//       let temp_arr = [];
//       let value_arr = [];
//       let fake_images = []
//       for (let i = 0; i < state.step; i++) {
//         let rand = Math.floor(Math.random() * dataImages.length);
//         temp_arr[i] = dataImages[rand].url
//         value_arr[i] = dataImages[rand].id
//       }


//       fake_images = dataImages.filter((item) => {
//         if (value_arr.includes(item.id)) {
//           return false
//         } else {
//           return item.url
//         }
//       }).map(item => item.url)

//       for (let i = 0; i < state.step; i++)

//         setState({
//           ...state,
//           images: temp_arr,
//           trueValues: value_arr,
//           fakeImages: fake_images
//         })

//       value_arr = []
//       temp_arr = []
//       fake_images = []
//     }
//   }

  // function shuffle(array) {
  //   let currentIndex = array.length, randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex != 0) {

  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }
  //   return array;
  // }

//   function checkAnswer(img) {
    
//     temp.push(img)
//     let result;
//     console.log(temp);
//     console.log(state.images);

//     if (temp.length == state.images.length) {
      
//       // for (let i = 0; i < temp.length; i++) {
//       //   for (let k = 0; k < temp.length; k++) {
//       //     if (temp[i] == state.images[k]) {
//       //       result = true
//       //       continue
//       //     } else {
//       //       result = false
//       //       continue
//       //     }
//       //   }
//       // }
//       temp = []
//     }

//     console.log(result);
//     // if (temp == state.images.length) {
//     //   // result = temp.filter(index => state.images.indexOf(index) ? true : false)
//     //   for(let i = 0; i < temp.length; i++){
//     //     for(let k = 0; k < temp.length; k++){
//     //       if(temp[i] == state.images[k]){
//     //         result = true;
//     //       }else{
//     //         result = false
//     //       }
//     //     }
//     //   }
//     // } else {
//     //   temp.push(img)
//     // }
//     // console.log(result);
//   }

//   {
//     if (state.finish) {
//       return <div>game over</div>
//     } else {
//       return (
//         <Container>
//           {
//             state.images ? state.images.map((item, index) => <img key={index} src={item} alt="" />) : ""
//           }
//           <div></div>
//           {
//             state.fakeImages ? shuffle(state.fakeImages.slice(0, state.step)
//               .concat(state.images))
//               .map((item, index) => <img key={index} onClick={() => checkAnswer(item)} src={item} alt="" />)
//               : ""
//           }

//           <button onClick={() => {
//             setState({
//               ...state,
//               // step: state.step >= dataImages.length ? state.step++ : true,
//               step: state.step++
//             })
//             generate()
//           }}></button>
//         </Container>
//       )
//     }
//   }

// }

// export default MemoryImages