import React from "react";
import "./InserirContratoModal.css";

const InserirContratoModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Arquivo selecionado:", file);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2 className="modal-title">Inserir contrato</h2>

        <label htmlFor="upload-documento" className="upload-area">
          <input
            type="file"
            id="upload-documento"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <span className="upload-text">Inserir documento</span>
        </label>

        <div className="button-container">
          <button className="back-button" onClick={onClose}>Cancelar</button>
          <button className="save-button">Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default InserirContratoModal;
