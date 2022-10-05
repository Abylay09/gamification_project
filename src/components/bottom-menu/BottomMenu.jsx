import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as PetIcon } from "assets/bottom-menu/pet-icon.svg";
import { ReactComponent as Shopicon } from "assets/bottom-menu/shop-icon.svg";
import { ReactComponent as HomeIcon } from "assets/bottom-menu/home-icon.svg";
import { ReactComponent as IndicatorIcon } from "assets/bottom-menu/indicator-icon.svg";
import { ReactComponent as RoomIcon } from "assets/bottom-menu/room-icon.svg";




import "./BottomMenu.scss"
function BottomMenu() {
    return (
        <div className='bottom-menu-wrapper '>
            <ul className='bottom-menu-list'>
                <li className='bottom-menu-list__item'>
                    {/* <div className='menu-icon'><img src={PetIcon} alt="" /></div> */}
                    <NavLink className='menu-link' to={"/pet"}>
                        <div className='menu-icon-wrapper'>
                            <PetIcon className='menu-icon--stroke' stroke='#ffffff' />
                        </div>
                        Питомец
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>
                    <NavLink className='menu-link' to={"/shop"}>
                        <div className='menu-icon-wrapper'>
                            <Shopicon className='menu-icon--stroke' />
                        </div>
                        Лавка
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>
                    <NavLink className='menu-link' to={"/lesson"}>
                        <div className='menu-icon-wrapper'>
                            <HomeIcon fill='#ffffff' className='menu-icon--fill' />
                        </div>
                        Домой
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>
                    <NavLink className='menu-link' to={"/stats"}>
                        <div className='menu-icon-wrapper'>
                            <IndicatorIcon className='menu-icon--stroke' stroke='#ffffff' />
                        </div>
                        Показатели
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>

                    <NavLink className='menu-link' to={"/stats"}>
                        <div className='menu-icon-wrapper'>
                            <RoomIcon fill='#ffffff' className='menu-icon--fill' />
                        </div>
                        Комната
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BottomMenu