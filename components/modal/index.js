'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _lodash = require('lodash.isboolean');

var _lodash2 = _interopRequireDefault(_lodash);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2015, salesforce.com, inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/* eslint-disable react/prefer-es6-class */

// Implements the [Modal design pattern](https://lightningdesignsystem.com/components/modals/) in React.
// Based on SLDS v2.2.1

// ### isBoolean


// ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator


var displayName = 'Modal';
var propTypes = {
	/**
  * Vertical alignment of Modal.
  */
	align: _react.PropTypes.oneOf(['top', 'center']),
	/**
  * Modal content.
  */
	children: _react.PropTypes.node.isRequired,
	/**
   * Custom CSS classes for the modal's container. This is the element with `.slds-modal__container`. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
	containerClassName: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
	/**
  * Custom CSS classes for the modal's body. This is the element that has overflow rules and should be used to set a static height if desired. Use `classNames` [API](https://github.com/JedWatson/classnames).
  */
	contentClassName: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
	/**
  * Custom styles for the modal's body. This is the element that has overflow rules and should be used to set a static height if desired.
  */
	contentStyle: _react2.default.PropTypes.object,
	/**
  * If true, modal footer buttons render left and right. An example use case would be for "back" and "next" buttons.
  */
	directional: _react.PropTypes.bool,
	/**
  * If true, Modals can be dismissed by clicking on the close icon or pressing esc key.
  */
	dismissible: _react.PropTypes.bool,
	/**
  * If true, Modals can be dismissed by clicking outside of modal. If unspecified, defaults to dismissible.
  */
	dismissOnClickOutside: _react.PropTypes.bool,
	/**
  * Callback to fire with Modal is dismissed
 */
	onRequestClose: _react.PropTypes.func,
	/**
  * Array of buttons to be placed in the footer. They render on the right side by default but are floated left and right if <code>directional</code> is true.
  */
	footer: _react.PropTypes.array,
	/**
  * Allows for a custom modal header that does not scroll with modal content. If this is defined, `title` and `tagline` will be ignored. The close button will still be present.
  */
	header: _react.PropTypes.node,
	/**
  * Adds CSS classes to the container surrounding the modal header and the close button. Use `classNames` [API](https://github.com/JedWatson/classnames).
  */
	headerClassName: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
	/**
  * Forces the modal to be open or closed.
  */
	isOpen: _react.PropTypes.bool.isRequired,
	/**
  * Custom CSS classes for the portal DOM node. This node is a direct descendant of the `body` and is the parent of `ReactModal__Overlay`. Use `classNames` [API](https://github.com/JedWatson/classnames).
  */
	portalClassName: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
	/**
  * Styles the modal as a prompt.
  */
	prompt: _react.PropTypes.oneOf(['success', 'warning', 'error', 'wrench', 'offline', 'info']),
	/**
  * Specifiies the modal's width. May be deprecated in favor of `width` in the future.
  */
	size: _react.PropTypes.oneOf(['medium', 'large']),
	/**
  * Content underneath the title in the modal header.
  */
	tagline: _react.PropTypes.node,
	/**
  * Text heading at the top of a modal.
  */
	title: _react.PropTypes.node,
	/**
  * Allows adding additional notifications within the modal.
  */
	toast: _react.PropTypes.node
};

var defaultProps = {
	align: 'center',
	dismissible: true
};

/**
 * The Modal component is used for the Lightning Design System Modal and Notification > Prompt components. The Modal opens from a state change outside of the component itself (pass this state to the <code>isOpen</code> prop). For more details on the Prompt markup, please review the <a href="http://www.lightningdesignsystem.com/components/notifications#prompt">Notifications > Prompt</a>.
 *
 * By default, `Modal` will add `aria-hidden=true` to the `body` tag, but this disables some assistive technologies. To prevent this you can add the following to your application with `#mount` being the root node of your application that you would like to hide from assistive technologies when the `Modal` is open.
 * ```
 * import settings from 'design-system-react/components/settings';
 * settings.setAppElement('#mount');
 * ```
 *
 * This component uses a portalMount (a disconnected React subtree mount) to create a modal as a child of `body`.
 */

var Modal = function (_React$Component) {
	_inherits(Modal, _React$Component);

	function Modal(props) {
		_classCallCheck(this, Modal);

		var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

		_this.state = {
			isClosing: false,
			revealed: false
		};

		// Bind
		_this.handleModalClick = _this.handleModalClick.bind(_this);
		_this.closeModal = _this.closeModal.bind(_this);
		_this.dismissModalOnClickOutside = _this.dismissModalOnClickOutside.bind(_this);
		return _this;
	}

	_createClass(Modal, [{
		key: 'setReturnFocus',
		value: function setReturnFocus() {
			this.setState({
				returnFocusTo: document.activeElement
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.setReturnFocus();

			if (!this.state.revealed) {
				setTimeout(function () {
					_this2.setState({ revealed: true });
				});
			}
			this.updateBodyScroll();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (this.props.isOpen !== prevProps.isOpen) {
				this.updateBodyScroll();
			}
			if (this.state.isClosing !== prevState.isClosing) {
				if (this.state.isClosing) {
					// console.log("CLOSING: ');
					if (!this.isUnmounting) {
						var el = _reactDom2.default.findDOMNode(this).parentNode;
						if (el && el.getAttribute('data-slds-modal')) {
							_reactDom2.default.unmountComponentAtNode(el);
							document.body.removeChild(el);
						}
					}
				}
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.generatedId = _shortid2.default.generate();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.isUnmounting = true;
			this.clearBodyScroll();
		}
	}, {
		key: 'getId',
		value: function getId() {
			return this.props.id || this.generatedId;
		}
	}, {
		key: 'dismissModalOnClickOutside',
		value: function dismissModalOnClickOutside() {
			// if dismissOnClickOutside is not set, default its value to dismissible
			var dismissOnClickOutside = (0, _lodash2.default)(this.props.dismissOnClickOutside) ? this.props.dismissOnClickOutside : this.props.dismissible;

			if (dismissOnClickOutside) {
				this.dismissModal();
			}
		}
	}, {
		key: 'closeModal',
		value: function closeModal() {
			if (this.props.dismissible) {
				this.dismissModal();
			}
		}
	}, {
		key: 'dismissModal',
		value: function dismissModal() {
			this.setState({ isClosing: true });
			if (this.state.returnFocusTo && this.state.returnFocusTo.focus) {
				this.state.returnFocusTo.focus();
			}
			if (this.props.onRequestClose) {
				this.props.onRequestClose();
			}
		}
	}, {
		key: 'handleSubmitModal',
		value: function handleSubmitModal() {
			this.closeModal();
		}
	}, {
		key: 'updateBodyScroll',
		value: function updateBodyScroll() {
			if (window && document && document.body) {
				if (this.props.isOpen) {
					document.body.style.overflow = 'hidden';
				} else {
					document.body.style.overflow = 'inherit';
				}
			}
		}
	}, {
		key: 'clearBodyScroll',
		value: function clearBodyScroll() {
			if (window && document && document.body) {
				document.body.style.overflow = 'inherit';
			}
		}
	}, {
		key: 'handleModalClick',
		value: function handleModalClick(event) {
			if (event && event.stopPropagation) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'isPrompt',
		value: function isPrompt() {
			return this.props.prompt !== undefined;
		}
	}, {
		key: 'footerComponent',
		value: function footerComponent() {
			var footer = null;
			var hasFooter = this.props.footer && this.props.footer.length > 0;
			var footerClass = {
				'slds-modal__footer': true,
				'slds-modal__footer--directional': this.props.directional,
				'slds-theme--default': this.isPrompt()
			};

			if (hasFooter) {
				footer = _react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)(footerClass), onClick: this.handleModalClick },
					this.props.footer
				);
			}
			return footer;
		}
	}, {
		key: 'headerComponent',
		value: function headerComponent() {
			var _classNames;

			var headerContent = this.props.header;
			var headerEmpty = !headerContent && !this.props.title && !this.props.tagline;
			var closeButton = _react2.default.createElement(_button2.default, {
				assistiveText: 'Close',
				iconName: 'close',
				iconSize: 'large',
				inverse: true,
				className: 'slds-modal__close',
				onClick: this.closeModal,
				title: 'Close',
				variant: 'icon'
			});

			if (!headerContent && this.props.title || this.props.tagline) {
				headerContent = _react2.default.createElement(
					'div',
					null,
					this.props.toast,
					_react2.default.createElement(
						'h2',
						{
							className: (0, _classnames2.default)({
								'slds-text-heading--small': this.isPrompt(),
								'slds-text-heading--medium': !this.isPrompt()
							}),
							id: this.getId()
						},
						this.props.title
					),
					this.props.tagline ? _react2.default.createElement(
						'p',
						{ className: 'slds-m-top--x-small' },
						this.props.tagline
					) : null
				);
			}

			return _react2.default.createElement(
				'div',
				{
					className: (0, _classnames2.default)('slds-modal__header', (_classNames = {
						'slds-modal__header--empty': headerEmpty
					}, _defineProperty(_classNames, 'slds-theme--' + this.props.prompt, this.isPrompt()), _defineProperty(_classNames, 'slds-theme--alert-texture', this.isPrompt()), _classNames), this.props.headerClassName),
					onClick: this.handleModalClick
				},
				this.props.dismissible ? closeButton : null,
				headerContent
			);
		}
	}, {
		key: 'getModal',
		value: function getModal() {
			var modalStyle = this.props.align === 'top' ? { justifyContent: 'flex-start' } : null;
			var borderRadius = this.props.title || this.props.header ? {} : { borderRadius: '.25rem' };
			var contentStyleFromProps = this.props.contentStyle || {};
			var contentStyle = _extends({}, borderRadius, contentStyleFromProps);
			return _react2.default.createElement(
				'div',
				{
					'aria-labelledby': this.getId(),
					className: (0, _classnames2.default)({
						'slds-modal': true,
						'slds-fade-in-open': this.state.revealed,
						'slds-modal--large': this.props.size === 'large',
						'slds-modal--prompt': this.isPrompt()
					}),
					onClick: this.dismissModalOnClickOutside,
					role: 'dialog'
				},
				_react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('slds-modal__container', this.props.containerClassName), style: modalStyle },
					this.headerComponent(),
					_react2.default.createElement(
						'div',
						{
							className: (0, _classnames2.default)('slds-modal__content', this.props.contentClassName),
							style: contentStyle,
							onClick: this.handleModalClick
						},
						this.props.children
					),
					this.footerComponent()
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var customStyles = {
				content: {
					position: 'default',
					top: 'default',
					left: 'default',
					right: 'default',
					bottom: 'default',
					border: 'default',
					background: 'default',
					overflow: 'default',
					WebkitOverflowScrolling: 'default',
					borderRadius: 'default',
					outline: 'default',
					padding: 'default'
				},
				overlay: {
					position: 'static',
					backgroundColor: 'default'
				}
			};

			return _react2.default.createElement(
				_reactModal2.default,
				{
					contentLabel: 'Modal',
					isOpen: this.props.isOpen,
					onRequestClose: this.closeModal,
					style: customStyles,
					portalClassName: (0, _classnames2.default)('ReactModalPortal', this.props.portalClassName)
				},
				this.getModal(),
				_react2.default.createElement('div', { className: 'slds-backdrop slds-backdrop--open' })
			);
		}
	}]);

	return Modal;
}(_react2.default.Component);

Modal.displayName = displayName;
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

module.exports = Modal;