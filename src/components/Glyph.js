const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const icons = require('../Octicons').map;
const validNames = require('../Octicons').keys;

/**
 * @description Glyph component
 * @example
 * 
 * Basic example
 * <Glyph icon="thumbsup" />
 * 
 * Colors
 * <Glyph icon='heart' type='danger' />
 * <Glyph icon='heart' type='default' />
 * <Glyph icon='heart' type='muted' />
 * <Glyph icon='heart' type='primary' />
 * <Glyph icon='heart' type='success' />
 * <Glyph icon='heart' type='warning' />
 * 
 * With buttons
 * <Button type="primary"><Glyph icon="beaker" /></Button>
 * <Button type="danger"><Glyph icon="flame" /></Button>
 * <Button type="success"><Glyph icon="squirrel" /></Button>
 * <Button type="warning"><Glyph icon="beaker" /></Button>
 */

const Glyph = createReactClass({
	displayName: 'Glyph',
	propTypes: {
		className: PropTypes.string,
		/**
		 * @property {PropTypes.string} icon - Required. Icon name from Octicons.
		 */
		icon: PropTypes.oneOf(validNames),
		/**
		 * @property {PropTypes.enum} type - One of: danger default muted primary success warning.
		 */
		type: PropTypes.oneOf([
			'danger',
			'default',
			'muted',
			'primary',
			'success',
			'warning',
		]),
	},
	render () {
		// classes
		const className = classNames(
			'Glyph__icon',
			icons[this.props.icon].className,
			(this.props.type ? 'IconField__icon-color--' + this.props.type : null),
			this.props.className
		);
		return <i className={className} />;
	},
});

Glyph.names = validNames;

export default Glyph;
