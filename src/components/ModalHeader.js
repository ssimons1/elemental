const classnames = require('classnames');
const React = require('react');
const blacklist = require('blacklist');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * @description ModalHeader component
 */

export default createReactClass({
	displayName: 'ModalHeader',
	propTypes: {
		/**
		 * @property {PropTypes.node} children - Alternative to using the text attribute, for when you need more control over the content.
		 */
		children: PropTypes.node,
		className: PropTypes.string,
		/**
		 * @property {PropTypes.bool} onClose - What to do when the user clicks the close button.
		 */
		onClose: PropTypes.func,
		/**
		 * @property {PropTypes.func} showCloseButton - Allow users to dismiss the modal.
		 */
		showCloseButton: PropTypes.bool,
		/**
		 * @property {PropTypes.string} text - Creates a title for the modal. We use "text" because title is reserved.
		 */
		text: PropTypes.string,
	},
	handleClose () {
		document.body.style.overflow = '';
		this.props.onClose();
	},
	render () {

		// elements
		const className = classnames('Modal__header', this.props.className);
		const close = this.props.showCloseButton ? <button type="button" onClick={this.handleClose} className="Modal__header__close" /> : null;
		const text = this.props.text ? <h4 className="Modal__header__text">{this.props.text}</h4> : null;
		const props = blacklist(this.props, 'children', 'onClose', 'showCloseButton', 'text');

		return (
			<div {...props} className={className}>
				{close}
				{text}
				{this.props.children}
			</div>
		);
	},
});
