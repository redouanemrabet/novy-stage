'use client'
import React, { useState } from "react"; 
import { Modal, Box, Typography, Button } from "@mui/material";
import AddButton from "../buttons/AddButton";
const LeftModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
    <AddButton handleOpen={handleOpen}/>
    <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "35%",
            height: "100vh",
            backgroundColor: "white",
            position: "absolute",
            right: 0,
            top: 0,
            padding: 2,
            boxShadow: 24,
            overflow: "auto",
          }}
        >
          <Typography variant="h6">Modal Content</Typography>
          <Typography variant="body1">
            This is the content of the modal.
          </Typography>
          <Button variant="contained" onClick={handleClose}>
            Close Modal
          </Button>
        </Box>
      </Modal>
  </div>
  )
}

export default LeftModal
