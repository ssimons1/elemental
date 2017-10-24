const React = require('react');
const classNames = require('classnames');
const blacklist = require('blacklist');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * @description InputGroup component
 * @example
 * CONTIGUOUS FORM ELEMENTS

 * <InputGroup contiguous>
 * 	<InputGroup.Section grow>
 * 		<FormInput type="text" placeholder="Input group field" />
 * 	</InputGroup.Section>
 * 	<InputGroup.Section>
 * 		<Button>Button</Button>
 * 	</InputGroup.Section>
 * </InputGroup>
 * <InputGroup contiguous>
 * 	<InputGroup.Section type="primary">
 * 		<Button><span className="octicon octicon-pencil" /></Button>
 * 	</InputGroup.Section>
 * 	<InputGroup.Section grow>
 * 		<FormInput type="text" placeholder="Input group field" />
 * 	</InputGroup.Section>
 * </InputGroup>
 * 
 * SEPARATE WHEN REQUIRED
 * 
 * <InputGroup>
 * 	<InputGroup.Section grow>
 * 		<FormInput type="text" placeholder="Input group field" />
 * 	</InputGroup.Section>
 * 	<InputGroup.Section>
 * 		<Button type="primary">Button</Button>
 * 	</InputGroup.Section>
 * </InputGroup>
 * <InputGroup>
 * 	<InputGroup.Section>
 * 		<Button type="primary">
 * 			<span className="octicon octicon-pencil" />
 * 		</Button>
 * 	</InputGroup.Section>
 * 	<InputGroup.Section grow>
 * 		<FormInput type="text" placeholder="Input group field" />
 * 	</InputGroup.Section>
 * </InputGroup>
 * 
 * MORE SOPHISTICATED FORMATIONS
 * 
 * <InputGroup contiguous>
 * 	<InputGroup.Section>
 * 		<Button>Alpha</Button>
 * 	</InputGroup.Section>
 * 	<InputGroup.Section grow>
 * 		<FormInput type="text" placeholder="Input group field" />
 * 	</InputGroup.Section>
 * 	<InputGroup.Section>
 * 		<Button type="primary">Omega</Button>
 * 	</InputGroup.Section>
 * </InputGroup>
 * <InputGroup>
 * 	<InputGroup.Section grow>
 * 		<FormInput type="text" placeholder="Input group field" />
 * 	</InputGroup.Section>
 * 	<InputGroup.Section>
 * 		<Button type="primary">Primary</Button>
 * 	</InputGroup.Section>
 * 	<InputGroup.Section>
 * 		<Button>Default</Button>
 * 	</InputGroup.Section>
 * </InputGroup>
 * <InputGroup contiguous>
 * 	<InputGroup.Section grow>
 * 		<FormIconField width="one-half" iconPosition="left" iconColor="default" iconKey="mail">
 * 			<FormInput placeholder="Email address" name="icon-alignment-left" />
 * 		</FormIconField>
 * 	</InputGroup.Section>
 * 	<InputGroup.Section>
 * 		<Button type="primary">Send</Button>
 * 	</InputGroup.Section>
 * </InputGroup>
 * 
 */

const InputGroup = createReactClass({
	displayName: 'InputGroup',
	propTypes: {
		className: PropTypes.string,
		contiguous: PropTypes.bool,
	},
	render () {
		// classes
		const className = classNames('InputGroup', {
			'InputGroup--contiguous': this.props.contiguous,
		}, this.props.className);
		const props = blacklist(this.props, 'contiguous');

		return (
			<div {...props} className={className} />
		);
	},
});

// expose the child to the top level export
InputGroup.Section = require('./InputGroupSection');

export default InputGroup;
