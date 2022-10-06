import React from 'react'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { ReactComponent as PetIcon } from "assets/bottom-menu/pet-icon.svg";
import { ReactComponent as Shopicon } from "assets/bottom-menu/shop-icon.svg";
import { ReactComponent as HomeIcon } from "assets/bottom-menu/home-icon.svg";
import { ReactComponent as IndicatorIcon } from "assets/bottom-menu/indicator-icon.svg";
import { ReactComponent as RoomIcon } from "assets/bottom-menu/room-icon.svg";

import "./BottomMenu.scss"
function BottomMenu() {
    const params = useParams();
    const location = useLocation();
    // let url = location.pathname.includes("lesson");
    // console.log(window.location.href);


    return (
        <div className='bottom-menu-wrapper '>
            <ul className='bottom-menu-list'>
                <li className='bottom-menu-list__item'>
                    <NavLink className='menu-link' to={"/pet"}>
                        <div className='menu-icon-wrapper'>
                            <div className='menu-icon-wrapper'>
                                <PetIcon stroke='#ffffff' className={
                                    `menu-icon--stroke ${location.pathname.includes("pet")
                                        ? "current-item__icon--stroke" : "current-item__icon"}`} />
                            </div>
                        </div>
                        <span className={`${location.pathname.includes("pet")
                            ? "current-item__title--active"
                            : ""}`} >Питомец</span>
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>
                    <NavLink className='menu-link' to={"/shop"}>
                        <div className='menu-icon-wrapper'>
                            <Shopicon className={
                                `menu-icon--stroke ${location.pathname.includes("shop")
                                    ? "current-item__icon--stroke" : "current-item__icon"}`} />
                        </div>
                        <span className={`${location.pathname.includes("shop")
                            ? "current-item__title--active"
                            : ""}`} >Лавка</span>
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>
                    <NavLink className='menu-link' to={"/lesson"}>
                        <div className='menu-icon-wrapper'>
                            <HomeIcon className={` ${location.pathname.includes("lesson")
                                ? "menu-icon--fill--active"
                                : "menu-icon--fill"
                                }`} />
                        </div>
                        <span className={`${location.pathname.includes("lesson")
                            ? "current-item__title--active"
                            : ""}`} >Домой</span>
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>
                    <NavLink className='menu-link' to={"/stats"}>
                        <div className='menu-icon-wrapper'>
                            <IndicatorIcon stroke='#ffffff' className={
                                `menu-icon--stroke ${location.pathname.includes("stats")
                                    ? "current-item__icon--stroke" : "current-item__icon"}`} />
                        </div>
                        <span className={`${location.pathname.includes("stats")
                            ? "current-item__title--active"
                            : ""}`} >Показатели</span>
                    </NavLink>
                </li>
                <li className='bottom-menu-list__item'>

                    <NavLink className='menu-link' to={"/profile"}>
                        <div className='menu-icon-wrapper'>
                            <RoomIcon className={` ${location.pathname.includes("profile")
                                ? "menu-icon--fill--active"
                                : "menu-icon--fill"
                                }`} />
                            {/* <RoomIcon fill='#ffffff' className='menu-icon--fill' /> */}
                        </div>
                        <span className={`${location.pathname.includes("profile")
                            ? "current-item__title--active"
                            : ""}`} >Комната</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BottomMenu