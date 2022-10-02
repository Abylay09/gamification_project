import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from "assets/bottom-menu/home-icon.svg"
import PetIcon from "assets/bottom-menu/pet-icon.svg"
import IndicatorIcon from "assets/bottom-menu/indicator-icon.svg"
import RoomIcon from "assets/bottom-menu/room-icon.svg"
import Shopicon from "assets/bottom-menu/shop-icon.svg"

import "./BottomMenu.scss"
function BottomMenu() {
    return (
        <div className='bottom-menu-wrapper '>
            <ul className='bottom-menu-list'>
                <li>
                    <div className='menu-icon'><img src={PetIcon} alt="" /></div>
                    <Link className='menu-link' to={"/pet"}>Питомец</Link>
                </li>
                <li>
                    <div className='menu-icon'><img src={Shopicon} alt="" /></div>
                    <Link className='menu-link' to={"/shop"}>Лавка</Link>
                </li>
                <li>
                    <div className='menu-icon'><img src={HomeIcon} alt="" /></div>
                    <Link className='menu-link' to={"/lessons/11870796-3253-11ed-a261-0242ac120002"}>Домой</Link>
                </li>
                <li>
                    <div className='menu-icon'><img src={IndicatorIcon} alt="" /></div>
                    <Link className='menu-link' to={"/stats"}>Показатели</Link>
                </li>
                <li>
                    <div className='menu-icon'><img src={RoomIcon} alt="" /></div>
                    <Link className='menu-link' to={"/"}>Комната</Link>
                </li>
            </ul>
        </div>
    )
}

export default BottomMenu