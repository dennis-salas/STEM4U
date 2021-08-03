import React from "react";
import "../style/contact.css";

export const Contact = () => {
  return (
    <div>
      <div className="row contact-clean">
        <div className="col-sm-3 ms-5">
          <img className="col-sm" src="https://res.cloudinary.com/dusnjqou6/image/upload/v1627928006/Womanpower_logo_ru24fc.svg" width="300px" height="405" alt="imagen" />
        </div>
        <div className="col-sm-6">
          <div class="d-none d-md-flex col-md-4 col-lg-6 "></div>
          <form method="post">
            <h2 className="text-center">Contáctanos</h2>
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
              <button className="btn" type="submit">
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
