import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '../hook/useForm';
import { AddComment } from "../action/actionForum";
import { Form } from 'react-bootstrap'
import { firebase } from '../firebase/firebase-config'
import AppEmoji from '../Components/AppEmoji'
import Picker from 'emoji-picker-react';


export const Forum = () => {

    const dispatch = useDispatch();

    const [commentForo, setCommentForo] = useState([]);
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const { name } = useSelector(state => state.login)

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };;

    useEffect(() => {

        const obtenerDatos = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('Foro').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setCommentForo(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

    }, [])


    const [formValues, handleInputChange, reset] = useForm({
        text: '',
    });

    const { text } = formValues;

    const handleNewComment = (e) => {
        e.preventDefault();
        dispatch(AddComment(formValues));
        console.log(formValues)
        reset();
    }

    const handleDelete = async (id) => {
        try {
            const db = firebase.firestore()
            await db.collection('Foro').doc(id).delete()
            const arrayFiltrado = commentForo.filter(item => item.id !== id)
            setCommentForo(arrayFiltrado)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="d-flex flex-column col-md-8">
                        <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                            <div className="profile-image">
                                <img className="rounded-circle" src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" width="70" alt="foto" />
                            </div>
                            <div className="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1"></div>
                            <div className="d-flex flex-column ml-4">
                                <div className="d-flex flex-row post-title">
                                    <h5>Cuentanos tu historia?</h5><span className="ml-2"></span>
                                </div>
                                <div className="d-flex flex-row align-items-center align-content-center post-title"><span>6 hours ago</span></div>
                            </div>
                        </div>
                        {
                            commentForo.map(ele => (
                                <div className="my-2 p-4" key={ele.id}>
                                    <div className="d-flex flex-row add-comment-section mt-2 mb-2">
                                        <img className="img-fluid img-responsive rounded-circle mr-2" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="38" alt="imgen" />
                                        <h4>{ele.name}</h4>
                                    </div>
                                    <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                                        <div className="comment-text-sm text-parrafo"><span>{ele.text}</span></div>
                                    </div>
                                    {
                                        name === ele.name ?
                                            <div>
                                                <button className="btn btn-primary" type="button" onClick={() => handleDelete(ele.id)}>Eliminar</button>
                                                <button className="btn btn-primary mx-2" type="button" onClick={() => handleDelete(ele.id)}>Editar</button>
                                            </div>
                                            : console.log("no puede editar")
                                    }
                                    <hr />
                                </div>
                            ))
                        }
                        <div className="coment-bottom bg-white p-2 px-4">
                            <div className="d-flex flex-row add-comment-section mt-2 mb-2">
                                <img className="img-fluid  rounded-circle mr-2" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="38" alt="imgen" />
                                <Form.Control
                                    type="text"
                                    name="text"
                                    placeholder="Agregar Comentario"
                                    value={text}
                                    onChange={handleInputChange}
                                    required />
                                <button className="btn btn-primary btn-comment" type="button" onClick={handleNewComment}>Comentar</button>
                            </div>

                        </div>
                        {/* <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
