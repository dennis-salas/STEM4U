import { types } from '../type/types';

export const registroReducer = (state =[], action)=>{
   
    switch (action.type) {
        case types.usuario:
            
            return {
                nombres: action.payload.nombre, 
                apellidos: action.payload.apellido,
                email: action.payload.email,
                password: action.payload.password,
                
            }
    
        default:
            return state;
    }
}