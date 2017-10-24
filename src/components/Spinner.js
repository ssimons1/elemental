const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * @description Spinner component
 * @example
 * <Spinner size="md" />s
 * <Spinner size="md" type="primary" />
 * <Spinner size="md" type="inverted" />
 * 
 * INSIDE BUTTONS
 * <Button><Spinner /></Button>
 * <Button disabled><Spinner type="primary" />Saving</Button>
 * <Button type="primary"><Spinner type="inverted" />Submitting</Button>
 * 
 * FULL PAGE LOAD
 * <Spinner size="lg" />
 */

export default createReactClass({
	displayName: 'Spinner',
	propTypes: {
		className: PropTypes.string,
		/**
		 * @property {PropTypes.enum} size - Declare the size of the dots in the spinner. Possible options: sm md lg. Spinners automatically become small when inside of buttons.
		 */
		size: PropTypes.oneOf(['sm', 'md', 'lg']),
		/**
		 * @property {PropTypes.enum} type - Declare the colour of the dots in the spinner. Possible options: default primary inverted.
		 */
		type: PropTypes.oneOf(['default', 'primary', 'inverted']),
	},
	getDefaultProps () {
		return {
			type: 'default',
			size: 'sm',
		};
	},
	render () {
		const componentClass = classNames(
			'Spinner',
			'Spinner--' + this.props.type,
			'Spinner--' + this.props.size,
			this.props.className
		);

		return (
			<div className={componentClass}>
				<span className="Spinner_dot Spinner_dot--first" />
				<span className="Spinner_dot Spinner_dot--second" />
				<span className="Spinner_dot Spinner_dot--third" />
			</div>
		);
	},
});
