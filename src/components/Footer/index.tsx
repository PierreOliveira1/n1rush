import React from 'react';

// Styles
import { Box, Image, Text } from '../../styles';

// Assets
import Logo from '../../assets/img/logo_header 1.webp';

const Footer = (): JSX.Element => {
	return (
		<Box width="100%" display="flex" marginTop="5%">
			<Box
				width="30%"
				height="50px"
				display="flex"
				alignItems="center"
				justifyContent="flex-end"
				paddingRight="3%"
				backgroundColor="#084154"
			>
				<Image src={Logo} width="42px" />
			</Box>
			<Box
				width="70%"
				height="50px"
				display="flex"
				alignItems="center"
				paddingLeft="3%"
				backgroundColor="#3EC6E0"
			>
				<Text weight="400">Agência N1 - Todos os direitos reservados</Text>
			</Box>
		</Box>
	);
};

export default Footer;
