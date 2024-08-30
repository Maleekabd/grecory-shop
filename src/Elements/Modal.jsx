import { IoMdClose } from "react-icons/io";
import "./Modal.css";

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="sr-only">Close</button>
        <div className="flex justify-end items-end">
          <IoMdClose
            onClick={handleClose}
            className="cursor-pointer hover:text-rose-400"
            size={35}
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
