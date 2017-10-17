const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const blacklist = require('blacklist');
const createReactClass = require('create-react-class');

const BUTTON_SIZES = ['lg', 'sm', 'xs'];

const BUTTON_TYPES = [
	'default',
	'default-primary',
	'default-success',
	'default-warning',
	'default-danger',
	'hollow-primary',
	'hollow-success',
	'hollow-warning',
	'hollow-danger',
	'primary',
	'success',
	'warning',
	'danger',
	'link',
	'link-text',
	'link-primary',
	'link-success',
	'link-warning',
	'link-danger',
	'link-cancel',
	'link-delete',
];

/**
 * @example
 * Sizes
 *
 * Large ButtonDefault ButtonSmall ButtonExtra Small Button
 * <Button size="lg">Large Button</Button>
 * <Button>Default Button</Button>
 * <Button size="sm">Small Button</Button>
 * <Button size="xs">Extra Small Button</Button>
 * 
 * Variants
 * 
 * FILL BUTTONS
 * 
 * PrimarySuccessWarningDanger
 * <Button type="primary">Primary</Button>
 * <Button type="success">Success</Button>
 * <Button type="warning">Warning</Button>
 * <Button type="danger">Danger</Button>
 * 
 * DEFAULT BUTTON ALTERNATIVES
 * 
 * Default PrimaryDefault SuccessDefault WarningDefault Danger
 * <Button type="default-primary">Default Primary</Button>
 * <Button type="default-success">Default Success</Button>
 * <Button type="default-warning">Default Warning</Button>
 * <Button type="default-danger">Default Danger</Button>
 * 
 * HOLLOW BUTTON ALTERNATIVES
 * 
 * Hollow PrimaryHollow SuccessHollow WarningHollow Danger
 * <Button type="hollow-primary">Hollow Primary</Button>
 * <Button type="hollow-success">Hollow Success</Button>
 * <Button type="hollow-warning">Hollow Warning</Button>
 * <Button type="hollow-danger">Hollow Danger</Button>
 * 
 * LINK STYLE BUTTONS
 * 
 * LinkLink TextLink PrimaryLink SuccessLink WarningLink DangerLink CancelLink Delete
 * <Button type="link">Link</Button>
 * <Button type="link-text">Link Text</Button>
 * <Button type="link-primary">Link Primary</Button>
 * <Button type="link-success">Link Success</Button>
 * <Button type="link-warning">Link Warning</Button>
 * <Button type="link-danger">Link Danger</Button>
 * <Button type="link-cancel">Link Cancel</Button>
 * <Button type="link-delete">Link Delete</Button>
 */

export default createReactClass({
	displayName: 'Button',
	propTypes: {
		block: PropTypes.bool,
		className: PropTypes.string,
		component: PropTypes.element,
		href: PropTypes.string,
		isActive: PropTypes.bool,
		size: PropTypes.oneOf(BUTTON_SIZES),
		submit: PropTypes.bool,
		type: PropTypes.oneOf(BUTTON_TYPES),
	},
	getDefaultProps () {
		return {
			type: 'default',
		};
	},
	render () {
		// classes
		const componentClass = classNames(
			'Button',
			'Button--' + this.props.type,
			(this.props.size ? 'Button--' + this.props.size : null),
			{
				'Button--block': this.props.block,
				'is-active': this.props.isActive,
			},
			this.props.className
		);

		// props
		const props = blacklist(this.props, 'block', 'isActive', 'type', 'size', 'component', 'className', 'submit');
		props.className = componentClass;

		if (this.props.component) {
			return React.cloneElement(this.props.component, props);
		}

		let tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			delete props.type;
		}

		return React.createElement(tag, props, this.props.children);
	},
});
