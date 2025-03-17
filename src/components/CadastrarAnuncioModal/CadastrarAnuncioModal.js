import React, { useState, useEffect } from "react";
import "./CadastrarAnuncioModal.css";

const CadastrarAnuncioModal = ({ visible, onClose }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    if (visible) {
      setCurrentTab(1); 
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">Cadastrar anúncio</h2>

        <div className="progress-container">
          <div className={`progress-step ${currentTab === 1 ? "active" : ""}`}></div>
          <div className={`progress-step ${currentTab === 2 ? "active" : ""}`}></div>
        </div>

        {currentTab === 1 && (
          <div className="tab-content">
            <label>Título</label>
            <input type="text" placeholder="Ex: Pintor" />

            <label>Estados</label>
            <input type="text" placeholder="Ex: Santa Catarina" />

            <label>Cidades</label>
            <input type="text" placeholder="Ex: Jaraguá, Guaramirim" />

            <label>Descrição</label>
            <textarea placeholder="Descrição do trabalho"></textarea>

            <button className="continue-button" onClick={() => setCurrentTab(2)}>
              Continuar
            </button>
          </div>
        )}

        {currentTab === 2 && (
          <div className="tab-content">
            <label>Inserir imagem</label>
            <input type="file" accept="image/*" onChange={(e) => setSelectedImages([...selectedImages, e.target.files[0]])} />

            <div className="button-container">
              <button className="back-button" onClick={() => setCurrentTab(1)}>
                Voltar
              </button>
              <button className="save-button" onClick={onClose}>
                Salvar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CadastrarAnuncioModal;
