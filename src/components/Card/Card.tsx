import { css } from '@/styled-system/css';

import type { ReactNode } from 'react';

export type TCardProps = {
	children: ReactNode;
	title?: string;
};

export const Card = ({ children, title }: TCardProps) => {
	return (
		<div
			className={css({
				w: '300px',
				rounded: 'xl',
				border: '1px solid token(colors.blue.400)',
				p: '4',
			})}
		>
			<>
				<span>{title}</span>
				{children}
			</>
		</div>
	);
};

Card.displayName = 'Card';

export default Card;
