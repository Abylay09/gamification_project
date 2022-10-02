import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const useCheckAuth = () => {
    if (localStorage.getItem("token")) {
        return true
    } else {
        return false
    }
}

function ProtectedRoutes() {

    let auth = useCheckAuth()
    return auth ? <Outlet /> : <Navigate to={"/login"} />

}

export default ProtectedRoutes