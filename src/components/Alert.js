const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const createReactClass = require('create-react-class');

const ALERT_TYPES = [
	'danger',
	'error', // alias for danger
	'info',
	'primary',
	'success',
	'warning',
];

/**
 * @description Alert component
 * @example
 * <Alert type="info"><strong>Info:</strong> Alerts can contain <a href="/misc">Anchor Tags</a></Alert>
 * <Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
 * <Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>
 * <Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>
 */

export default createReactClass({
	displayName: 'ElementalAlert',
	propTypes: {
		/**
		 * @property {PropTypes.node} children - Required.
		 */
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		/**
		 * @property {PropTypes.enum} type - Required. One of: danger info primary success warning.
		 */
		type: PropTypes.oneOf(ALERT_TYPES).isRequired,
	},
	render () {
		const componentClass = classNames(
			'Alert',
			'Alert--' + this.props.type,
			this.props.className
		);

		return <div className={componentClass}>{this.props.children}</div>;
	},
});
