import { css, cx } from '@/styled-system/css';
import type { HTMLAttributes } from 'react';

export type TButtonProps = HTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ className, ...props }: TButtonProps) => {
	return (
		<button
			className={cx(
				css({
					px: '4',
					py: '2',
					border: '1px solid token(colors.blue.400)',
					cursor: 'pointer',
					outline: 'none',
					color: 'pink.400',
					transition: 'all 0.1s ease-out',
					_hover: {
						rounded: 'full',
						color: 'black',
					},
				}),
				className
			)}
			{...props}
		/>
	);
};

// this use for debug
Button.displayName = 'Button';

// default Button
export default Button;
