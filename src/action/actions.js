import { types } from '../type/types'
import { firebase, google } from '../firebase/firebase-config'
import { startLoading, finishLoading } from './uiError'



export const login = (id, displayName) => {
  return {
    type: types.login,
    payload: {
      id,
      displayName
    }
  }
}

export const loginGoogle = () => {
  return (dispatch) => {

    firebase.auth().signInWithPopup(google)
      .then(({ user }) => {
        console.log(user.photoURL);
        const perfil = (user.photoURL);
        dispatch(
          login(user.uid, user.displayName, perfil)
        )
      })

  }

}

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
})

export const registroUsuario = (email, password, nombre, apellido) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);

        await user.updateProfile({ displayName: nombre, apellido });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      })
  }
}

export const registro = ( email, password, nombre, apellido) => {
  return {
    type: types.usuario,
    payload: {
      nombre,
      apellido,
      email,
      password
    }
  }
}

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(startLoading)
        dispatch(login(user.uid, user.displayName));
      })
      .catch(e => {
        console.log(e)
        dispatch(finishLoading)
      })
  }
}



