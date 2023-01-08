import { Typography, Box } from "@material-ui/core";
import React from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: "30%",
      left: "52%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

const ModalPage = () =>{
   let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);



  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

    return(
        <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Box className="dispatch-modal">
            <Typography className="dispatch-query">
              Mero Stay Online Hotel Booking In Nepal?
            </Typography>
             <Typography> To be launch Soon, Stay Tuned </Typography>
            <Box className="dispatch-bttn">
              <button onClick={closeModal} className="dispatch-no">
                No
              </button>
            </Box>
          </Box>
        </Modal>
        </>
    )
}


export default Modal