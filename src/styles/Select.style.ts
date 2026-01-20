import styled from "styled-components";
import Select from "@mui/material/Select";

export const StyledSelect = styled(Select)`
  && {
    border-radius: 12px;
    color: #bababa;
    width: 290px;
    margin: auto;

    @media (min-width: 768px) {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }

    @media (min-width: 1440px) {
      grid-column: 4 / 5;
      grid-row: 1 / 2;
    }

    @media (min-width: 1920px) {
      grid-column: 5 / 6;
      grid-row: 1 / 2;
    }
  }
`;
