import React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

const LangSwitch = styled.ul`
  padding: 0;
  margin: 20px 0;
  text-align: center;
`;

LangSwitch.Item = styled.li`
  position: relative;
	display: inline-block;
	color: ${({ theme })=> theme.colors.light};
	text-transform: uppercase;
	cursor: ${({ isActive })=> isActive ? 'default' : 'pointer'};
  font-size: 14px;
  margin: 0 5px;
`;

export default () => {
  const { t, i18n } = useTranslation();
  const languages = ['en', 'bg'];
  const getCurrentLanguage = () => i18n.language || window.localStorage.i18n.i18nextLng;

  return (
    <LangSwitch>
      {languages.map((lang, index) => (
        <LangSwitch.Item
          key={`lang-${lang}-${index}`}
          isActive={lang === getCurrentLanguage()}
          onClick={() => i18n.changeLanguage(lang)}
        >
          {t(`lang.${lang}`)}
      </LangSwitch.Item>
      ))}
    </LangSwitch>
  )

}