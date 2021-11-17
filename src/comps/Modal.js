import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleOutsideClick}>
            <img src={selectedImg} alt="enlarged img" />
        </div>
    )
}

export default Modal;