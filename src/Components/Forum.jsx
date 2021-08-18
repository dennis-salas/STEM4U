import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from '../hook/useForm';
import { AddComment } from "../action/actionForum";
import { Form } from 'react-bootstrap'


export const Forum = () => {

    const dispatch = useDispatch()


    const [formValues, handleInputChange, reset] = useForm({
        text: ''
    });

    const { text } = formValues;


    const handleNewComment = (e) => {
        e.preventDefault();
        dispatch(AddComment(formValues));
        reset();
    }


    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="d-flex flex-column col-md-8">
                        <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                            <div className="profile-image">
                                <img className="rounded-circle" src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" width="70">

                                </img>
                                </div>
                            <div className="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1"></div>
                            <div className="d-flex flex-column ml-4">
                                <div className="d-flex flex-row post-title">
                                    <h5>Cuentanos tu historia?</h5><span className="ml-2"></span>
                                </div>
                                <div className="d-flex flex-row align-items-center align-content-center post-title"><span>6 hours ago</span></div>
                            </div>
                        </div>
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
                                <button className="btn btn-primary btn-comment"  type="button" onClick={handleNewComment}>Comentar</button>
                            </div>

                            <div className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Corey oates</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">4 hours ago</span>
                                </div>
                                <div className="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                <div className="reply-section">
                                    <div className="d-flex flex-row align-items-center voting-icons">
                                        <h6 className="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
