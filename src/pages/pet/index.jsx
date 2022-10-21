import React from 'react'
import Layout from 'layout/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Indicator from './components/Indicator';
import StickyButton from 'components/buttons/StickyButton';
import { useNavigate } from 'react-router-dom';
import "./index.scss"
import { useSelector } from 'react-redux'

function PetPage() {
    const language = useSelector(state => state.language.language)
    const navigate = useNavigate()
    return (
        <Layout>
            <Tabs className="custom-tabs">
                <TabList>
                    <Tab>{language.pet}</Tab>
                    <Tab>{language.indicators}</Tab>
                </TabList>

                <TabPanel className="custom-tab">
                    <div className='tab-inner'>
                        <div className='tab-inner__content'>{language.pet}</div>
                        <button  onClick={() => navigate("/quests")} className='tab-inner__btn'>{language.play}</button>
                    </div>

                    {/* <StickyButton text={"Играть!"} onClick={() => navigate("/quests")} /> */}
                </TabPanel>
                <TabPanel className="custom-tab">
                    <Indicator />
                </TabPanel>
            </Tabs>
            {/* <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                justify = {true}
                className="mb-3"
                
            >
                <Tab eventKey="home" className='sukaa' title="Питомец" >
                    Питомец
                </Tab>
                <Tab eventKey="profile" className='sukaa' title="Индикаторы">
                    Индикаторы
                </Tab>
            </Tabs> */}
        </Layout>
    )
}

export default PetPage