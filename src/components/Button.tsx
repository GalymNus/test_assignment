import { Icon } from "@mui/material";
import { StyledButton } from "../styles/Button.style";

type ButtonType = {
  text: string;
  icon?: string;
  handleClick: () => void;
};

export default function PrimaryButton({ text, icon, handleClick }: ButtonType) {
  console.log("text", text);
  return (
    <StyledButton onClick={handleClick} size="large" startIcon={icon && <Icon fontSize="large">{icon}</Icon>}>
      {text}
    </StyledButton>
  );
}
