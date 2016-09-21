'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  require('./index.css');
}

var Model = function Model(props) {
  return props.isOpen && _react2.default.createElement(
    'div',
    { className: 'z-modal', onClick: props.onRequestClose },
    _react2.default.createElement(
      'div',
      { className: 'z-modal__body', onClick: stopPropagation },
      props.children,
      _react2.default.createElement(_close2.default, { className: 'z-modal__close', size: 40, onClick: props.onRequestClose })
    )
  );
};

Model.propTypes = {
  isOpen: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  onRequestClose: _react.PropTypes.func
};

Model.defaultProps = {
  isOpen: false
};

function stopPropagation(e) {
  e.stopPropagation();
}

exports.default = Model;