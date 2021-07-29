import {types} from '../type/types'
import {firebase, google} from '../firebase/firebase-config'



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
    type: types.login,
    payload: {
      id,
      displayName
    },
  };
};

export const loginEmailPassword = (email, password)=>{
  return (dispatch)=>
  {
    firebase.auth().signInWithEmailAndPassword(email, password).then(({user})=>{
      dispatch(
        login(user.uid, user.displayName)
      )
    })
    .catch(e=>{
      console.log(e)
    })
  }
}

export const registro = (nombre, apellido, email, password) => {
    return {
      type: types.usuario,
      payload: {
        nombre,
        apellido,
        email, 
        password
      },
    };
  };

  export const registroUsuario = (email, password, nombre, apellido) => {
    return (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({ user }) => {
          console.log(user);
  
          await user.updateProfile({ displayName: nombre, apellido});
  
          dispatch(login(user.uid, user.displayName));
        })
        .catch((e) => {
          console.log(e);
        });
    };
  };