import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: 2,
  p: 1,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  outline: "none",
  maxHeight: "95vh",
  maxWidth: "95vw",
  overflow: "auto",
};

const CustomModal = ({ title, cross, content, open, onClose, withBorder }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box
          sx={{
            "& .MuiBox-root": {
              boxShadow: "none !important",
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pr={1}
            sx={{
              borderBottom: withBorder
                ? "1px solid rgba(253, 79, 204, 0.2)"
                : "none",
            }}
          >
            {title && (
              <Typography fontFamily="vazir" variant="h6">
                {title}
              </Typography>
            )}
            {cross && (
              <IconButton onClick={onClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            )}
          </Box>
          {content}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
