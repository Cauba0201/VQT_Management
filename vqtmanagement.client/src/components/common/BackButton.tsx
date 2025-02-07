import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={handleBackButton}
    >
      Back
    </Button>
  );
};

export default BackButton;
