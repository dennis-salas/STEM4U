import React from 'react'
import { startLogout } from '../../action/actions'
import { useDispatch } from 'react'

const HomePrivate = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <div>
            <h1>Bienvenido</h1>
            <button
                onClick={handleLogout}
            ></button>
        </div>
    )
}

export default HomePrivate