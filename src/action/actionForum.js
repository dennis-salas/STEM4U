import { types } from '../type/types'
import { db } from '../firebase/firebase-config'



export const AddComment = (comment) => {
    return async (dispatch, getSate) => {

        const uid = getSate().login.uid

        const newCommet = {
            text: comment.text,
        }

        const docRef = await db.collection("Foro").add(newCommet);
        dispatch(AddNewComment(docRef.uid, newCommet))
    }

}

export const AddNewComment = (id, comment) => ({
    type: types.addComment,
    payload: {
        id, ...comment
    }
})