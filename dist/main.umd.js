(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SAInputSelect", [], factory);
	else if(typeof exports === 'object')
		exports["SAInputSelect"] = factory();
	else
		root["SAInputSelect"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SAInputSelect = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SAInputSelect, _HTMLElement);

  var _super = _createSuper(SAInputSelect);

  function SAInputSelect() {
    var _this;

    _classCallCheck(this, SAInputSelect);

    _this = _super.call(this);
    _this._isAppend = false;
    return _this;
  }

  _createClass(SAInputSelect, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue) {
      if (attrName === 'data-is-append') {
        if (newValue) {
          this._isAppend = newValue === 'true';
        } else {
          this._isAppend = false;
        }
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadow = this.attachShadow({
        mode: 'open'
      });
      this.makeInput(shadow);
      this.makeDropdown(shadow);
      this.assignEvent();
    }
  }, {
    key: "init",
    value: function init() {
      this.render();
    }
  }, {
    key: "makeInput",
    value: function makeInput(shadow) {
      this._input = document.createElement('input');
      this._input.autocomplete = 'off';

      this._input.setAttribute('class', this.getAttribute('class') || '');

      this._input.setAttribute('style', this.getAttribute('style') || '');

      var readonly = this.getAttribute('readonly');
      if (readonly != undefined) this._input.setAttribute('readonly', this.getAttribute('readonly'));
      var disabled = this.getAttribute('disabled');
      if (disabled != undefined) this._input.setAttribute('disabled', this.getAttribute('disabled'));
      this._input.value = this.getAttribute('value') || '';
      shadow.appendChild(this._input);
    }
  }, {
    key: "makeDropdown",
    value: function makeDropdown(shadow) {
      var _this2 = this;

      this._dropdown = document.createElement('ul');
      this._dropdown.className = 'dropdown-menu';
      var options = this.getElementsByTagName('option');
      var optionList = Array.prototype.slice.call(options);
      optionList.forEach(function (el) {
        var text = el.innerHTML;
        var li = document.createElement('li');
        li.innerHTML = '<li><a>' + text.replace(/^$/, '&nbsp;') + '</a></li>';

        _this2._dropdown.appendChild(li);
      });
      shadow.appendChild(this._dropdown);
    }
  }, {
    key: "assignEvent",
    value: function assignEvent() {
      var _this3 = this;

      this._input.addEventListener('click', function (ev) {
        ev.stopPropagation();

        if (_this3._dropdown.classList.contains('open')) {
          _this3._dropdown.classList.remove('open');
        } else {
          _this3._dropdown.classList.add('open');

          _this3._dropdown.style.top = ev.target.offsetTop + ev.target.offsetHeight;
          _this3._dropdown.style.left = ev.target.offsetLeft;
          console.log(ev);
        }
      });
      /*var instance = this;
      this.$input.on('click', function(ev) {
          ev.stopPropagation();
          var self = $(this);
           if (instance.$dropdown.is(':visible')) {
              instance.$dropdown.hide();
          } else {
              instance.$dropdown.show();
              instance.$dropdown.css({
                  top: (self.position().top + self.height()) + 'px',
                  left: self.css('left')
              });
          }
      });
       this.$input.on('keydown', () => {
          if (instance.$dropdown.is(':visible')) {
              instance.$dropdown.hide();
          }
      });
       this.$input.on('change', () => {
          instance.$element.trigger('change');
      });
       this.$dropdown.on('click', 'a', function(ev) {
          ev.preventDefault();
          instance.$input.val($(this)
              .text()
              .replace(/^&nbsp;$/, ''))
              .trigger('change');
      });
       $(document)
          .on('click', () => {
              if (instance.$dropdown.is(':visible')) {
                  instance.$dropdown.hide();
              }
          });*/

    }
  }, {
    key: "render",
    value: function render() {
      this.$element.removeAttr('name'); // after copy to Input

      this.$element.after(this.$dropdown);
      this.$element.after(this.$input);
      this.$element.hide();
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['data-is-append'];
    }
  }]);

  return SAInputSelect;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('sa-input-select', SAInputSelect);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});