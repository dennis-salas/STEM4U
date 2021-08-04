import React from 'react'
import { startLogout } from '../../action/actions'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

const HomePrivate = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <div>
            <h1>Bienvenido</h1>
            <Button
                onClick={handleLogout}
            >Cerrar Sesión</Button>
        </div>
    )
}

export default HomePrivate