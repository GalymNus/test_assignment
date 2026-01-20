import styled from "styled-components";
import main from "./assets/images/main.png";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  padding-top: 30%;
  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: auto 100vh;
  background-position: 50% 0;

  #minilogo {
    width: 263.69px;
  }

  #slots {
    width: 326px;
    margin: 48px 0 32px 0;
  }

  button {
    width: 343px;
    height: 56px;
  }

  @media (min-width: 480px) {
    button {
      width: 358px;
    }
  }

  @media (min-width: 768px) {
    padding-top: 199px;
  }

  @media (min-width: 1200px) {
    padding-top: 146px;
    background-size: 100% 100%;
  }
`;

export const FooterSection = styled.section`
  // изначально делал через флекс потом понял что гридом будет лучше
  display: grid;
  grid-template-columns: 320px;
  grid-template-rows: 294px 56px 86px 92px 114px;
  justify-content: center;
  justify-items: center;
  grid-row-gap: 52px;
  padding-bottom: 48px;

  > img:first-of-type {
    display: none;
  }

  @media (min-width: 480px) {
    grid-template-columns: 390px;
  }

  @media (min-width: 768px) {
    grid-template-rows: 294px 56px 86px 114px;
    grid-template-columns: 300px 300px;
  }

  @media (min-width: 1200px) {
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    grid-template-rows: 120px 120px;
    grid-template-columns: 240px 390px 140px 290px;
    column-gap: 40px;

    > img:first-of-type {
      display: block;
      width: 240px;
      height: 240px;
      margin: auto;
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }
  @media (min-width: 1920px) {
    grid-template-columns: 240px 390px 140px 25% 290px;
  }
`;

export const DownloadSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  // Слишком затратно делать больше расстояние между дэшами
  border: 1px dashed #ff8d6b;
  color: #ffffff;
  border-radius: 16px;
  padding: 24px;

  h1 {
    font-size: 28px;
    margin-bottom: 6px;
  }

  > span {
    text-align: center;
    color: #bababa;
    margin-bottom: 16px;
  }

  img {
    width: 175.9px;
    margin-bottom: 24px;
  }

  button {
    width: 250px;
  }

  @media (min-width: 480px) {
    width: 390px;
    margin: auto;
  }

  @media (min-width: 768px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    column-gap: 64px;
  }
`;

export const SocialSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 12px;

    svg {
      width: 28px;
      height: 28px;
      padding: 12px;
      border-radius: 8px;
      background-color: black;
      margin: 2px;
      border: 1px solid var(--white-white-40, #ffffff66);
    }

    svg:first-child {
      background: radial-gradient(92.18% 99.11% at 26.56% 107.7%, #ffdd55 0%, #ffdd55 10%, #ff543e 50%, #c837ab 100%);
    }

    svg:nth-child(2) {
      background: #398fff;
    }

    svg:first-child {
      background: radial-gradient(92.18% 99.11% at 26.56% 107.7%, #ffdd55 0%, #ffdd55 10%, #ff543e 50%, #c837ab 100%);
    }
  }

  @media (min-width: 768px) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (min-width: 1920px) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
  }
`;

export const AdultsOnlySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fbfbfbb2;

  img {
    margin-bottom: 12px;
    width: 58px;
  }

  @media (min-width: 768px) {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
  }

  @media (min-width: 1440px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`;

export const CeritificateSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fbfbfbb2;
  font-size: 14px;
  span {
    text-align: center;
    max-width: 230px;
  }

  img {
    margin-bottom: 14px;
    width: 58px;
  }

  @media (min-width: 768px) {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
  }
  @media (min-width: 1440px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
`;
