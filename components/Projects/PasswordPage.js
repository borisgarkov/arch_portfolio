import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import KeyIcon from "@mui/icons-material/Key"

import { useState } from "react"
import { useContext } from "react"
import TechnicalProjectsContext from "./TechnicalProjectsContext"

export default function PasswordPage({ projectsPassword }) {
    const { open, setOpen } = useContext(TechnicalProjectsContext)

    const [showAlert, setShowAlert] = useState(false)

    const [password, setPassword] = useState("")
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const verifyPassword = () => {
        if (password === projectsPassword) {
            setOpen(false)
            setShowAlert(false)
        } else {
            setShowAlert(true)
        }
    }

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                backdropFilter: "blur(10px)",
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    verifyPassword()
                }
            }}
        >
            <DialogTitle id="alert-dialog-title">{"Моля въведете парола, за да достъпите съдържанието"}</DialogTitle>

            <DialogContent>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                    <TextField
                        id="input-with-sx"
                        label="Парола"
                        variant="standard"
                        type="password"
                        sx={{ width: "100%" }}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Box>

                {showAlert && (
                    <Alert
                        severity="error"
                        sx={{ marginTop: "8px" }}
                    >
                        {"Грешна парола"}
                    </Alert>
                )}
            </DialogContent>

            <DialogActions>
                <Button
                    // autoFocus
                    onClick={verifyPassword}
                    sx={{
                        color: "black",
                    }}
                >
                    Изпрати
                </Button>
            </DialogActions>
        </Dialog>
    )
}
