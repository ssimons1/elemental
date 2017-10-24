const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const ALERT_TYPES = [
	'danger',
	'default',
	'info',
	'primary',
	'success',
	'warning',
	'danger-inverted',
	'default-inverted',
	'info-inverted',
	'primary-inverted',
	'success-inverted',
	'warning-inverted',
];

/**
 * @description Pill component
 * @example
 * <Pill label="Create" type="success-inverted" />
 * <Pill label="First Pill" type="primary" onClear={this.handleClear} />
 * <Pill label="Second Pill" type="primary" onClear={this.handleClear} />
 * <Pill label="Third Pill" type="primary" onClear={this.handleClear} />
 * <Pill label="Clear All" />
 */

export default createReactClass({
	displayName: 'Pill',
	propTypes: {
		className: PropTypes.string,
		/**
		 * @property {PropTypes.string} label - Required. The tag label.
		 */
		label: PropTypes.string.isRequired,
		/**
		 * @property {PropTypes.func} onClear - Handle clear events on the pill. The clear button is rendered when this is supplied.
		 */
		onClear: PropTypes.func,
		onClick: PropTypes.func,
		/**
		 * @property {PropTypes.enum} type - One of: danger default info primary success warning danger-inverted default-inverted info-inverted primary-inverted success-inverted warning-inverted.
		 */
		type: PropTypes.oneOf(ALERT_TYPES),
	},
	getDefaultProps () {
		return {
			type: 'default',
		};
	},
	renderClearButton () {
		if (!this.props.onClear) return null;
		return <button type="button" onClick={this.props.onClear} className="Pill__clear">&times;</button>;
	},
	render () {
		const componentClass = classNames(
			'Pill',
			'Pill--' + this.props.type,
			this.props.className
		);

		const props = blacklist(this.props, 'className', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass;

		return (
			<div {...props}>
				<button type="button" onClick={this.props.onClick} className="Pill__label">{this.props.label}</button>
				{this.renderClearButton()}
			</div>
		);
	},
});
