import React from "react";
import "../../style/contact.css";

export const Contact = () => {
  return (
    <div>
      <div className="row contact-clean">
        <div>
          <div class="d-none d-md-flex col-md-4 col-lg-6 "></div>
          <form method="post">
            <h2 className="text-center">Contáctanos</h2>
            <img
              src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png"
              alt="logo"
              className="logo mx-auto d-block img-fluid"
              roundedCircle
            />
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="14"
                name="message"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn w-100" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};
