import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import al_horesmi from "assets/common/al_horesmi.png"
import DOMPurify from 'dompurify'
import { useNavigate } from 'react-router-dom';

import PetSliderPage from 'pages/pet-selection'
import PetPage from 'pages/pet'
import ShopPage from 'pages/shop';
import LessonPage from 'pages/lesson';
import StatsPage from 'pages/stats';

import CommonButton from 'components/buttons/CommonButton'

import "./index.scss"

function TrainingPage() {
  const navigate = useNavigate()
  const language = useSelector(state => state.language.language)
  const [stage, setStage] = useState(0);
  const [modal, setModal] = useState(false);
  
  const selectPet = () => {
    setModal(false)
    setStage(3)
  }
  const closeTraining = () => {
    navigate("/lesson")
  }
  if(stage === 0)
    return (
      <Container style={{ height: "100vh", overflow: "hidden" }}>
        <div className="training-container">
          <div className="img">
            <img src={al_horesmi} alt="" />
          </div>
          <div className="about">
            <div className="title">
              {language.training_title_1}
            </div>
            <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(language.training_about_1)}}>
            </div>
          </div>
          <div className="staging">
            <div className="active"></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="button">
          <CommonButton onClick={() => setStage(1)} text={language.next} />
        </div>
      </Container>
    )
  if(stage === 1)
    return (
      <Container style={{ height: "100vh", overflow: "hidden" }}>
        <div className="training-container">
          <div className="img">
            <img src={al_horesmi} alt="" />
          </div>
          <div className="about">
            <div className="title">
            </div>
            <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(language.training_about_2)}}>
            </div>
          </div>
          <div className="staging">
            <div></div>
            <div className="active"></div>
            <div></div>
          </div>
        </div>
        <div className="button">
          <CommonButton onClick={() => setStage(2)} text={language.next} />
        </div>
      </Container>
    )
  if(stage === 2)
  return (
    <Container style={{ height: "100vh", overflow: "hidden" }}>
      <div className="training-container">
        <div className="img">
          <img src={al_horesmi} alt="" />
        </div>
        <div className="about">
          <div className="title">
              {language.training_title_3}
          </div>
          <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(language.training_about_3)}}>
          </div>
        </div>
        <div className="staging">
          <div></div>
          <div></div>
          <div className="active"></div>
        </div>
      </div>
      <div className="button">
        <CommonButton onClick={() => setModal(true)} text={language.select_button_pet} />
      </div>
      <div className={`modal-pet-bg ${modal ? "open" : ""}`} onClick={() => setModal(false)} />
      <div className={`modal-pet ${modal ? "open" : ""}`}>
        <PetSliderPage selectPet={selectPet} />
      </div>
    </Container>
  )
  if(stage === 3)
    return (
      <Container style={{ height: "100vh", overflow: "hidden" }}>
        <div>
          <div className="modal-pet-bg open real">
            <div className="about">
              <img src={al_horesmi} alt="" />
              <div className="title">
                  {language.training_title_4}
              </div>
              <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(language.training_about_4)}}>
              </div>
            </div>
            <CommonButton onClick={() => setStage(4)} text={language.understood} />
          </div>
          <PetPage />
        </div>
      </Container>
    )
    
  if(stage === 4)
  return (
    <Container style={{ height: "100vh", overflow: "hidden" }}>
      <div>
        <div className="modal-pet-bg open real">
          <div className="about">
            <img src={al_horesmi} alt="" />
            <div className="title">
                {language.shop_title}
            </div>
            <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(language.training_about_5)}}>
            </div>
          </div>
          <CommonButton onClick={() => setStage(5)} text={language.understood} />
        </div>
        <ShopPage />
      </div>
    </Container>
  )
  
  if(stage === 5)
    return (
      <Container style={{ height: "100vh", overflow: "hidden" }}>
        <div>
          <div className="modal-pet-bg open real">
            <div className="about">
              <img src={al_horesmi} alt="" />
              <div className="title">
                  {language.home}
              </div>
              <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(language.training_about_6)}}>
              </div>
            </div>
            <CommonButton onClick={() => setStage(6)} text={language.understood} />
          </div>
          <LessonPage />
        </div>
      </Container>
    )
    
  if(stage === 6)
  return (
    <Container style={{ height: "100vh", overflow: "hidden" }}>
      <div>
        <div className="modal-pet-bg open real">
          <div className="about">
            <img src={al_horesmi} alt="" />
            <div className="title">
                {language.stats_indicatrors}
            </div>
            <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(language.training_about_7)}}>
            </div>
          </div>
          <CommonButton onClick={() => closeTraining()} text={language.understood} />
        </div>
        <StatsPage />
      </div>
    </Container>
  )
  
  return (
    <Container>

    </Container>

  )

}
export default TrainingPage