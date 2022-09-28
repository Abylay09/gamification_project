import React from 'react'
import Layout from 'layout/Layout'
// import { Tab, Tabs } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./index.scss"
import Indicator from './components/Indicator';
function PetPage() {
    return (
        <Layout>
            <Tabs>
                <TabList>
                    <Tab>Питомец</Tab>
                    <Tab>Индикаторы</Tab>
                </TabList>

                <TabPanel>
                    Питомец
                </TabPanel>
                <TabPanel>
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