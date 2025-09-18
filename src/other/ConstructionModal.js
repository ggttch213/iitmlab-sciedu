import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ConstructionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Construction Modal"
    >
      <h2>此網頁正在施工中</h2>
      <p>網頁正在進行維護更新</p>
      <button  onClick={closeModal} style={{ marginLeft: '200px' }}>關閉</button>
    </Modal>
  );
};

export default ConstructionModal;