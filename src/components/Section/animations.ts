import { keyframes } from 'styled-components';

export const viewMario = keyframes`
	from {
		transform: translateY(100%);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;
