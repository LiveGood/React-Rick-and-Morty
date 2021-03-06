import React from 'react';
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { capitalize } from 'lodash'

const NotFoundMessage = styled.div`
	background: ${({ theme })=> theme.colors.light};
	color: ${({ theme })=> theme.colors.text};
	padding: 50px 20px;
	text-align: center;
	box-shadow: ${({ theme })=> theme.materialShadow};
	border-radius: 5px;

	${({ theme }) => css`
		@media ${theme.mediaQueries.xsOnly} {
			font-size: 22px;
			margin: 50px auto;
		}

		@media ${theme.mediaQueries.smUp} {
			font-size: 40px;
			width: 50%;
			margin: 100px auto;
		}
	`}
`

export default ({ propName }) => {
	const { t } = useTranslation()
	const translationProp = 'noItems' + capitalize(propName);
	
	return <NotFoundMessage>{t(translationProp)}</NotFoundMessage>
}