const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * @description Card component
 * @example
 * <Card>Hi there, I'm a card! I'm pretty simple, but with a little imagination I can be really awesome :)</Card>
 * <Row>
 * 	<Col><Card>Use</Card></Col>
 * 	<Col><Card>me</Card></Col>
 * 	<Col><Card>in</Card></Col>
 * 	<Col><Card>a</Card></Col>
 * 	<Col><Card>grid</Card></Col>
 * </Row>
 * <Card>...</Card>
 */

export default createReactClass({
	displayName: 'Card',
	propTypes: {
		/**
		 * @property {PropTypes.node} children - Required.
		 */
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
	},
	render () {
		const className = classNames('Card', this.props.className);

		return <div {...this.props} className={className} />;
	},
});
