import React from 'react';
import theme from '../constants';
import PropTypes from 'prop-types';

/**
 * @description Container component
 */

function Container ({ children, clearfix, gutter, maxWidth, style, ...props }) {
	const styles = {
		clearfix: {
			clear: 'both',
			display: 'table',
		},
		container: {
			marginLeft: 'auto',
			marginRight: 'auto',
			maxWidth: maxWidth,
			paddingLeft: gutter,
			paddingRight: gutter,
		},
	};
	props.style = {
		...styles.container,
		...style,
	};

	return (
		<div {...props}>
			{clearfix && <span style={styles.clearfix} />}
			{children}
			{clearfix && <span style={styles.clearfix} />}
		</div>
	);
};

Container.propTypes = {
	clearfix: PropTypes.bool,
	gutter: PropTypes.number,
	maxWidth: PropTypes.number,
};
Container.defaultProps = {
	gutter: theme.width.gutter,
	maxWidth: theme.width.container,
};

export default Container;
