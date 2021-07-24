import {types} from './types'
import {firebase, google} from './firebase/firebase-config'


export const startLoginEmailPassword= (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
        }
}
export const loginGoogle = ()=>{
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
        .then(({user}) => {
            console.log(user);
            dispatch(
                login(user.uid,  user.displayName)
            )
        })

    }

}



export const login = (id, displayName) => {
    return {
        type : types.login,
        payload:{
            id,
            displayName
        }
    }
}