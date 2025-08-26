import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { About, Intro, NavBar, Projects, Skills } from "./components";

const RtlController: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.resolvedLanguage || i18n.language || "en";
    const dir = lang.startsWith("he") ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <RtlController />
      <NavBar />
      <Intro />
      <Skills />
      <About />
      <Projects />
    </>
  );
};

export default App;
