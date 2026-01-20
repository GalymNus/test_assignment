import { useState } from "react";
import { createPortal } from "react-dom";
import { SelectChangeEvent } from "@mui/material";
import { Instagram, Telegram, X, Email } from "@mui/icons-material";

import Button from "./components/Button";
import Select from "./components/Select";
import miniLogo from "./assets/images/mini_logo.png";
import man from "./assets/images/man.png";
import slots from "./assets/images/slots.png";
import certificate from "./assets/images/certificate.png";
import Game from "./components/Game";
import adultContentIcon from "./assets/images/adultContentIcon.png";

import { Translations, selectOptions } from "./assets/locales/translations";
import {
  MainSection,
  DownloadSection,
  SocialSection,
  FooterSection,
  AdultsOnlySection,
  CeritificateSection,
} from "./App.style";
type LocaleType = keyof typeof Translations;

export function App() {
  const [locale, setLocale] = useState<LocaleType>("en");
  const [portalOpen, setPortalOpen] = useState<boolean>(false);
  const labels = Translations[locale];

  const handleChange = (event: SelectChangeEvent<string | unknown>) => {
    if (event.target.value && Object.hasOwn(Translations, `${event.target.value}`)) {
      const newLocale = event.target.value as LocaleType;
      setLocale(newLocale);
    }
  };
  const portalElement = document.getElementById("portal");

  const handlePortalOpen = () => {
    if (!portalOpen && portalElement) {
      setPortalOpen(true);
    } else {
      setPortalOpen(false);
    }
  };

  return (
    <>
      <MainSection>
        <img id="minilogo" src={miniLogo} alt="" />
        <img id="slots" src={slots} alt="" />
        <Button handleClick={handlePortalOpen} text={labels.mainButtonLabel} />
      </MainSection>
      <FooterSection>
        <img src={man} alt="" />
        <DownloadSection>
          <img src={miniLogo} alt="" />
          <h1>{labels.downloadSectionLabel}</h1>
          <span>{labels.downloadSectionSubLabel}</span>
          <Button icon="save_alt" text={labels.downloadButtonLabel} handleClick={() => {}} />
        </DownloadSection>
        <Select options={selectOptions} handleChange={handleChange} value={locale} />
        <SocialSection>
          <span>{labels.socialsLabel}</span>
          <div>
            <Instagram />
            <Telegram />
            <X />
            <Email />
          </div>
        </SocialSection>
        <AdultsOnlySection>
          <img src={adultContentIcon} alt="" />
          <span>{labels.adultsOnlyLabel}</span>
        </AdultsOnlySection>
        <CeritificateSection>
          <img src={certificate} alt="" />
          <span>{labels.certificateLabel}</span>
        </CeritificateSection>
        {portalOpen &&
          portalElement &&
          createPortal(<Game handleClose={handlePortalOpen} />, portalElement, "casino_game")}
      </FooterSection>
    </>
  );
}
