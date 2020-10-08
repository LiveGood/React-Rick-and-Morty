import React from 'react'
import Media from 'react-media'
import { mediaQueries } from '../constants'

export default ({ children }) => (
	<Media queries={mediaQueries}>
		{children}
	</Media>
);
