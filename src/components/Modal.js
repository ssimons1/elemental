import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import blacklist from 'blacklist';
import classNames from 'classnames';
import createReactClass from 'create-react-class';

import { canUseDOM } from '../constants';

/**
 * @description Modal component
 * @example
 * 
 * <Modal>
 * 	<ModalHeader text="Modal Header" />
 * 	<ModalBody>
 * 		<form>[...]</form>
 * 	</ModalBody>
 * 	<ModalFooter>
 * 		<Button type="primary">Modal Footer</Button>
 * 		<Button type="link-cancel">Button</Button>
 * 	</ModalFooter>
 * </Modal>
 * 
 * <Button onClick={this.toggleModal}>Launch Modal</Button>
 * <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
 * 	<ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />
 * 	<ModalBody>[...]</ModalBody>
 * 	<ModalFooter>
 * 		<Button type="primary" onClick={this.toggleModal}>Close modal</Button>
 * 		<Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>
 * 	</ModalFooter>
 * </Modal>
 * 
 * Sizes
 * <Modal ... width="small">...</Modal>
 * <Modal ... width="large">...</Modal>
 * <Modal ... width={768}>...</Modal>
 */

const TransitionPortal = createReactClass({
	displayName: 'TransitionPortal',
	componentDidMount () {
		if (!canUseDOM) return;
		let p = document.createElement('div');
		document.body.appendChild(p);
		this.portalElement = p;
		this.componentDidUpdate();
	},
	componentDidUpdate () {
		if (!canUseDOM) return;
		ReactDOM.render(<CSSTransitionGroup {...this.props}>{this.props.children}</CSSTransitionGroup>, this.portalElement);
	},
	componentWillUnmount () {
		if (!canUseDOM) return;
		document.body.removeChild(this.portalElement);
	},
	portalElement: null,
	render: () => null,
});

const Modal = createReactClass({
	displayName: 'Modal',
	propTypes: {
		autoFocusFirstElement: PropTypes.bool,
		/**
		 * @property {PropTypes.bool} backdropClosesModal - Pass through to make the backdrop available as a target to dismiss the modal.
		 */
		backdropClosesModal: PropTypes.bool,
		className: PropTypes.string,
		/**
		 * @property {PropTypes.bool} isOpen - Managed by state; this is how to control the visibility of the modal.
		 */
		isOpen: PropTypes.bool,
		/**
		 * @property {PropTypes.func} onCancel - The function used to handle cancel events on the modal; typically sets the open state to false.
		 */
		onCancel: PropTypes.func,
		/**
		 * @property {PropTypes.number|PropTypes.enum} width - Explicitly set a numeric width or provide one of three sizes; 'small', 'medium', 'large' - 320px, 640px, 960px respectively.
		 */
		width: PropTypes.oneOfType([
			PropTypes.oneOf(['small', 'medium', 'large']),
			PropTypes.number,
		]),
	},
	getDefaultProps () {
		return {
			width: 'medium',
		};
	},
	componentWillReceiveProps: function (nextProps) {
		if (!canUseDOM) return;

		const target = document.body;
		const scrollbarWidth = window.innerWidth - document.body.clientWidth; // 1.

		if (!this.props.isOpen && nextProps.isOpen) {
			// setTimeout(() => this.handleAccessibility());
			target.style.overflow = 'hidden';
			target.style.paddingRight = scrollbarWidth + 'px';
		} else if (this.props.isOpen && !nextProps.isOpen) {
			// setTimeout(() => this.removeAccessibilityHandlers());
			target.style.overflow = '';
			target.style.paddingRight = '';
		}
	},
	/*
	handleAccessibility () {
		// Remember the element that was focused before we opened the modal
		// so we can return focus to it once we close the modal.
		this.focusedElementBeforeModalOpened = document.activeElement;

		// We're using a transition to reveal the modal,
		// so wait until the element is visible, before
		// finding the first keyboard focusable element
		// and passing focus to it, otherwise the browser
		// might scroll the document to reveal the element
		// receiving focus
		if (this.props.autoFocusFirstElement) {
			ally.when.visibleArea({
				context: this.modalElement,
				callback: function(context) {
					// the modal is visible on screen, so find the first
					// keyboard focusable element (giving any element with
					// autoFocus attribute precendence). If the modal does
					// not contain any keyboard focusabe elements, focus will
					// be given to the modal itself.
					var element = ally.query.firstTabbable({
						context: context,
						defaultToContext: true,
					});
					element.focus();
				},
			});
		}

		// Make sure that no element outside of the modal
		// can be interacted with while the modal is visible.
		this.disabledHandle = ally.maintain.disabled({
			filter: this.modalElement,
		});

		// Make sure that no element outside of the modal
		// is exposed via the Accessibility Tree, to prevent
		// screen readers from navigating to content it shouldn't
		// be seeing while the modal is open.
		this.hiddenHandle = ally.maintain.hidden({
			filter: this.modalElement,
		});

		// React to escape keys as mandated by ARIA Practices
		this.keyHandle = ally.when.key({
			escape: this.handleClose,
		});
	},
	removeAccessibilityHandlers () {
		// undo listening to keyboard
		this.keyHandle && this.keyHandle.disengage();

		// undo hiding elements outside of the modal
		this.hiddenHandle && this.hiddenHandle.disengage();

		// undo disabling elements outside of the modal
		this.disabledHandle && this.disabledHandle.disengage();

		// return focus to where it was before we opened the modal
		this.focusedElementBeforeModalOpened && this.focusedElementBeforeModalOpened.focus();
	},
	handleModalClick (event) {
		if (event.target.dataset.modal) this.handleClose();
	},
	*/
	handleClose () {
		const { backdropClosesModal, onCancel } = this.props;

		console.log('handleClose', backdropClosesModal);

		if (backdropClosesModal) onCancel();
	},
	handleDialogClick (event) {
		event.stopPropagation();
	},
	renderDialog () {
		const { children, isOpen, width } = this.props;

		if (!isOpen) return;

		const style = (width && !isNaN(width)) ? { width: width + 20 } : null;
		const dialogClassname = classNames('Modal-dialog', (width && isNaN(width))
			? 'Modal-dialog--' + width
			: null);

		return (
			<div className={dialogClassname} style={style} onClick={this.handleDialogClick}>
				<div ref={r => (this.modalElement = r)} className="Modal-content">
					{children}
				</div>
			</div>
		);
	},
	renderBackdrop () {
		const { isOpen } = this.props;

		if (!isOpen) return;

		return <div className="Modal-backdrop" />;
	},
	render () {
		const className = classNames('Modal', {
			'is-open': this.props.isOpen,
		}, this.props.className);

		const props = blacklist(this.props, 'backdropClosesModal', 'className', 'isOpen', 'onCancel');

		return (
			<div>
				<TransitionPortal
					{...props}
					className={className}
					data-modal="true"
					onClick={this.handleClose}
					transitionEnterTimeout={260}
					transitionLeaveTimeout={140}
					transitionName="Modal-dialog"
				>
					{this.renderDialog()}
				</TransitionPortal>
				<TransitionPortal
					transitionName="Modal-background"
					transitionEnterTimeout={140}
					transitionLeaveTimeout={240}
				>
					{this.renderBackdrop()}
				</TransitionPortal>
			</div>
		);
	},
});


// expose the children to the top level export
Modal.Body = require('./ModalBody');
Modal.Footer = require('./ModalFooter');
Modal.Header = require('./ModalHeader');

export default Modal;
