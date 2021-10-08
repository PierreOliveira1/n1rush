import React, { Dispatch, ReactNode, SetStateAction } from 'react';

// Styles
import { Box } from '../../styles';
import { ContainerModal, ContentModal } from './styles';

// Components
import Button from '../Button';

// Assets
import IconClose from '../../assets/svgs/close_btn.svg';

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
	return (
		<Box>
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
