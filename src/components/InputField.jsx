import React, { useState } from 'react'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Alert, AlertTitle } from '@mui/material'


const InputField = ({ text, handleInput, handleSubmit }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <TextField
                
                id="outlined-basic"
                label="Todos"
                variant="outlined"
                value={text}
                onChange={(e) => handleInput(e.target.value)}
            />
            <Button onClick={() => {
                handleSubmit();
                handleOpen();
            }} color='secondary' sx={{ border: 1 }}>
                Add Post!
            </Button>

            <Dialog open={open}>
                <DialogTitle>
                    <Alert severity='success'>New Task Added!</Alert>
                </DialogTitle>
                <DialogContent>
                    <AlertTitle>Keep goind and do your Job!</AlertTitle>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default InputField;