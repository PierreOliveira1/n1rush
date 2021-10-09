import React from 'react';

// Styles
import { Box, Image, Line, Text } from '../../styles';

// Hooks
import useWindowSize from '../../utils/useWindowSize';

type Props = {
	image?: string;
	name?: string;
	marginBottom?: string;
	marginRight?: string;
};

const Card = ({
	image,
	name,
	marginBottom,
	marginRight,
}: Props): JSX.Element => {
	const [width] = useWindowSize();

	return (
		<Box
			width={width > 1100 ? '500px' : '80%'}
			display="flex"
			flexDirection="column"
			marginBottom={marginBottom}
			marginRight={marginRight}
			zIndex="10"
			borderRadius="5px"
		>
			<Image width="100%" src={image} borderRadius="5px 5px 0px 0px" />
			<Box
				width="100%"
				height="60px"
				backgroundColor="#3EC6E0"
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				paddingLeft="1rem"
				paddingRight="1rem"
				boxShadow="inset 10px 0px #084154"
				borderRadius="0px 0px 5px 5px"
			>
				<Text weight="700" fontSize="16px" color="#084154">
					{name}
				</Text>
				<Line width="30%" backgroundColor="#084154" />
			</Box>
		</Box>
	);
};

export default Card;
