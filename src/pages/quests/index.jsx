import React, {useState} from 'react'
import { Container, Col, Row, Stack } from 'react-bootstrap'
import QuestsMenu from './components/QuestsMenu'
import Rubik from "assets/quests/rubik-quest.png"
import Cat from "assets/quests/cat-quest.png"
import Ladybug from "assets/quests/ladybug-quest.png"
import Math from "assets/quests/math-quest.png"

import "./index.scss"
function QuestsPage() {
    const [borderStyle, setBorderStyle] = useState(false)
    return (
        <Container className='' style={{minHeight : "100vh"}}>
            <QuestsMenu />

            <Stack direction="horizontal" gap={3} className="quest-items flex-wrap justify-content-between">
                {[Rubik, Cat, Ladybug, Math].map((item,index) => {
                    return (
                        <div onClick={() => setBorderStyle(!borderStyle)} key={index + 1} className={`quest-item  d-flex align-items-center justify-content-center ${borderStyle ? "show" : ""}`} style={{ minWidth: "175px", flexGrow: 1 }}>
                            <div>
                                <img style={{ width: "135px", height: "100%" }} src={item} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>Внимательность</p>
                                <p className='quest-item__subtitle '>Найди число</p>
                            </div>
                        </div>
                    )
                })}
                {/* <div className={borderStyle ? "show" : "" + 'quest-item  d-flex align-items-center justify-content-center'} style={{ minWidth: "175px", flexGrow: 1 }}> */}
                {/* <div onClick={(e) => e.target.style.border = "1px solid red"} className={`quest-item  d-flex align-items-center justify-content-center `} style={{ minWidth: "175px", flexGrow: 1 }}>
                    <div >
                        <img style={{ width: "135px", height: "100%" }} src={Rubik} alt="" />
                    </div>
                    <div className='quest-item__text flex-grow-0'>
                        <p className='quest-item__title '>Внимательность</p>
                        <p className='quest-item__subtitle '>Найди число</p>
                    </div>
                </div>

                <div className={`quest-item  d-flex align-items-center justify-content-center `} style={{ minWidth: "175px", flexGrow: 1 }}>
                    <div>
                        <img style={{ width: "135px", height: "100%" }} src={Ladybug} alt="" />
                    </div>
                    <div className='quest-item__text flex-grow-0'>
                        <p className='quest-item__title '>Внимательность</p>
                        <p className='quest-item__subtitle '>Найди число</p>
                    </div>
                </div>

                <div className={`quest-item  d-flex align-items-center justify-content-center `} style={{ minWidth: "175px", flexGrow: 1 }}>
                    <div>
                        <img style={{ width: "135px", height: "100%" }} src={Math} alt="" />
                    </div>
                    <div className='quest-item__text flex-grow-0'>
                        <p className='quest-item__title '>Внимательность</p>
                        <p className='quest-item__subtitle '>Найди число</p>
                    </div>
                </div>

                <div className={`quest-item  d-flex align-items-center justify-content-center `} style={{ minWidth: "175px", flexGrow: 1 }}>
                    <div>
                        <img style={{ width: "135px", height: "100%" }} src={Rubik} alt="" />
                    </div>
                    <div className='quest-item__text flex-grow-0'>
                        <p className='quest-item__title '>Внимательность</p>
                        <p className='quest-item__subtitle '>Найди число</p>
                    </div>
                </div> */}
            </Stack>
        </Container>

    )
}

export default QuestsPage