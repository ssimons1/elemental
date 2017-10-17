const classnames = require('classnames');
const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * @example
 * 
 * <ButtonGroup>
 * 	<Button type="default">Left</Button>
 * 	<Button type="default">Middle</Button>
 * 	<Button type="default">Right</Button>
 * </ButtonGroup>
 */

export default createReactClass({
	displayName: 'ButtonGroup',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
	},
	render () {
		const className = classnames('ButtonGroup', this.props.className);
		return <div {...this.props} className={className} />;
	},
});
