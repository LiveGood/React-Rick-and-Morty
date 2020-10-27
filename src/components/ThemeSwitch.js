import React, { useContext } from 'react';
import styled from 'styled-components'
import { ThemeSwitchIcon } from 'assets/svg'
import { ThemeSwtichContext } from '../App'

const ThemeSwitch = styled.div`
	width: 36px;
	height: 36px;
	background: ${({ theme })=> theme.colors.card};
	border-radius: 100%;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	cursor: pointer;

	svg {
		width: 24px;
		height: 24px;
    fill: ${({ themeMode, theme }) => 
      themeMode === 'light' ?
      theme.colors.primary :
      theme.colors.light
    };
	}
`

export default () => {
  const { themeMode, setThemeMode } = useContext(ThemeSwtichContext);

  return (
    <ThemeSwitch
      {...{ themeMode }}
      onClick={()=> setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
    >
      <ThemeSwitchIcon />
    </ThemeSwitch>
  )
}