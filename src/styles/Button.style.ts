import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)`
  && {
    background: linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%);
    // по дефолту все капсом, убрал
    text-transform: none;
    color: white;
    border-radius: 12px;
    font-size: 16px;
    height: 56px;

    span > span {
      // Не мог увеличить размер через пропсы иконки или кнопки
      font-size: 30px;
    }
  }
`;
