import React, { Dispatch, ReactNode, SetStateAction } from 'react';

// Styles
import { Box } from '../../styles';
import { ContainerModal, ContentModal } from './styles';

// Components
import Button from '../Button';

// Assets
import IconClose from '../../assets/svgs/close_btn.svg';

// Hooks
import useWindowSize from '../../utils/useWindowSize';

type Props = {
	children?: ReactNode;
	setState?: Dispatch<SetStateAction<boolean>>;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	flexDirection?: string;
};

const Modal = ({
	children,
	setState,
	display,
	justifyContent,
	alignItems,
	flexDirection,
}: Props): JSX.Element => {
	const [width] = useWindowSize();

	return (
		<Box
			width="100%"
			height={width > 700 ? '120vmax' : '230vmax'}
			position="absolute"
			top="0"
			right="0"
			zIndex="99"
		>
			<ContainerModal />
			<ContentModal
				display={display}
				justifyContent={justifyContent}
				alignItems={alignItems}
				flexDirection={flexDirection}
			>
				<Button
					type="icon"
					icon={IconClose}
					width="35px"
					height="35px"
					position="absolute"
					top="3%"
					right="3%"
					onClick={() => {
						if (setState) setState(false);
					}}
				/>
				{children}
			</ContentModal>
		</Box>
	);
};

export default Modal;
