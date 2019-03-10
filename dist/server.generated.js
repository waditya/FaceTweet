module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Users = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Signup = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Signin = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nvar _EditProfile = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n\nvar _EditProfile2 = _interopRequireDefault(_EditProfile);\n\nvar _Profile = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _PrivateRoute = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainRouter = function (_Component) {\n  _inherits(MainRouter, _Component);\n\n  function MainRouter() {\n    _classCallCheck(this, MainRouter);\n\n    return _possibleConstructorReturn(this, (MainRouter.__proto__ || Object.getPrototypeOf(MainRouter)).apply(this, arguments));\n  }\n\n  _createClass(MainRouter, [{\n    key: 'render',\n\n    // Removes the server-side injected CSS when React component mounts\n    /* \r\n    componentDidMount() {\r\n     const jssStyles = document.getElementById('jss-server-side')\r\n     if (jssStyles && jssStyles.parentNode) {\r\n       jssStyles.parentNode.removeChild(jssStyles)\r\n     }\r\n    } */\n\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _Users2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _Signup2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _Signin2.default }),\n          _react2.default.createElement(_PrivateRoute2.default, { path: '/user/edit/:userId', component: _EditProfile2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/user/:userId', component: _Profile2.default })\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return MainRouter;\n}(_react.Component);\n\nvar _default = MainRouter;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, 'MainRouter', 'E:/Project/FACETWEET/client/MainRouter.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/MainRouter.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/assets/images/seashell.jpg":
/*!*******************************************!*\
  !*** ./client/assets/images/seashell.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c6fc97f3fb6ea0d30afd3cbfe46239a2.jpg\";\n\n//# sourceURL=webpack:///./client/assets/images/seashell.jpg?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      rest = _objectWithoutProperties(_ref, ['component']);\n\n  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {\n      return _authHelper2.default.isAuthenticated() ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {\n          pathname: '/signin',\n          state: { from: props.location }\n        } });\n    } }));\n};\nvar _default = PrivateRoute;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, 'PrivateRoute', 'E:/Project/FACETWEET/client/auth/PrivateRoute.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/auth/PrivateRoute.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signin);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      email: '',\n      password: '',\n      error: '',\n      redirectToReferrer: false\n    }, _this.clickSubmit = function () {\n      var user = {\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n\n      (0, _apiAuth.signin)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _authHelper2.default.authenticate(data, function () {\n            _this.setState({ redirectToReferrer: true });\n          });\n        }\n      });\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signin, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var _ref2 = this.props.location.state || {\n        from: {\n          pathname: '/'\n        }\n      },\n          from = _ref2.from;\n\n      var redirectToReferrer = this.state.redirectToReferrer;\n\n      if (redirectToReferrer) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n      }\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Sign In'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nSignin.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signin);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'E:/Project/FACETWEET/client/auth/Signin.js');\n  reactHotLoader.register(Signin, 'Signin', 'E:/Project/FACETWEET/client/auth/Signin.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/auth/Signin.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar signin = function signin(user) {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\n// Sign-out\n\n// The signout method will use fetch to make a GET call to the signout API endpoint on the\n// server.\n\nvar signout = function signout() {\n  return fetch('/auth/signout/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\n// Export the signin and signout methods\nexports.signin = signin;\nexports.signout = signout;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, 'signin', 'E:/Project/FACETWEET/client/auth/api-auth.js');\n  reactHotLoader.register(signout, 'signout', 'E:/Project/FACETWEET/client/auth/api-auth.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n// Helper methods to manage auth state across the components\n// Custom PrivateRoute component to add protected routes to the frontend.\n\n// Helper methods to store and retrieve JWT credentials from client-side sessionStorage, and also clear out the\n// sessionStorage on user sign-out\n\n\n// Save credentials on successful sign-in\n\n// SINGLETON DESIGN PATTERN IS USED HERE\n\nvar auth = {\n  isAuthenticated: function isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n  authenticate: function authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb(); //Callback function\n  },\n\n\n  // signout\n\n  signout: function signout(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    // optional\n    (0, _apiAuth.signout)().then(function (data) {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n\nvar _default = auth;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, 'auth', 'E:/Project/FACETWEET/client/auth/auth-helper.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/auth/auth-helper.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _seashell = __webpack_require__(/*! ./../assets/images/seashell.jpg */ \"./client/assets/images/seashell.jpg\");\n\nvar _seashell2 = _interopRequireDefault(_seashell);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      marginTop: theme.spacing.unit * 5\n    },\n    title: {\n      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 2.5 + 'px ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.text.secondary\n    },\n    media: {\n      minHeight: 330\n    }\n  };\n};\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'headline', component: 'h2', className: classes.title },\n          'Home Page'\n        ),\n        _react2.default.createElement(_Card.CardMedia, { className: classes.media, image: _seashell2.default, title: 'Unicorn Shells' }),\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'body1', component: 'p' },\n            'Welcome to the FaceTweet home page'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nHome.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Home);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'E:/Project/FACETWEET/client/core/Home.js');\n  reactHotLoader.register(Home, 'Home', 'E:/Project/FACETWEET/client/core/Home.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/core/Home.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Home = __webpack_require__(/*! material-ui-icons/Home */ \"material-ui-icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar isActive = function isActive(history, path) {\n  if (history.location.pathname == path) return { color: '#ff4081' };else return { color: '#ffffff' };\n};\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n  var history = _ref.history;\n  return _react2.default.createElement(\n    _AppBar2.default,\n    { position: 'static' },\n    _react2.default.createElement(\n      _Toolbar2.default,\n      null,\n      _react2.default.createElement(\n        _Typography2.default,\n        { type: 'title', color: 'inherit' },\n        'MERN Skeleton'\n      ),\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/' },\n        _react2.default.createElement(\n          _IconButton2.default,\n          { 'aria-label': 'Home', style: isActive(history, \"/\") },\n          _react2.default.createElement(_Home2.default, null)\n        )\n      ),\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/users' },\n        _react2.default.createElement(\n          _Button2.default,\n          { style: isActive(history, \"/users\") },\n          'Users'\n        )\n      ),\n      !_authHelper2.default.isAuthenticated() && _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/signup' },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/signup\") },\n            'Sign up'\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/signin' },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/signin\") },\n            'Sign In'\n          )\n        )\n      ),\n      _authHelper2.default.isAuthenticated() && _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/user/\" + _authHelper2.default.isAuthenticated().user._id },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/user/\" + _authHelper2.default.isAuthenticated().user._id) },\n            'My Profile'\n          )\n        ),\n        _react2.default.createElement(\n          _Button2.default,\n          { color: 'inherit', onClick: function onClick() {\n              _authHelper2.default.signout(function () {\n                return history.push('/');\n              });\n            } },\n          'Sign out'\n        )\n      )\n    )\n  );\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, 'isActive', 'E:/Project/FACETWEET/client/core/Menu.js');\n  reactHotLoader.register(Menu, 'Menu', 'E:/Project/FACETWEET/client/core/Menu.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/core/Menu.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Delete = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DeleteUser = function (_Component) {\n  _inherits(DeleteUser, _Component);\n\n  function DeleteUser() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DeleteUser);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteUser.__proto__ || Object.getPrototypeOf(DeleteUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      redirect: false,\n      open: false\n    }, _this.clickButton = function () {\n      _this.setState({ open: true });\n    }, _this.deleteAccount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.remove)({\n        userId: _this.props.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _authHelper2.default.signout(function () {\n            return console.log('deleted');\n          });\n          _this.setState({ redirect: true });\n        }\n      });\n    }, _this.handleRequestClose = function () {\n      _this.setState({ open: false });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DeleteUser, [{\n    key: 'render',\n    value: function render() {\n      var redirect = this.state.redirect;\n      if (redirect) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n      }\n      return _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _IconButton2.default,\n          { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n          _react2.default.createElement(_Delete2.default, null)\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, onClose: this.handleRequestClose },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            \"Delete Account\"\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'Confirm to delete your account.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.handleRequestClose, color: 'primary' },\n              'Cancel'\n            ),\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.deleteAccount, color: 'secondary', autoFocus: 'autoFocus' },\n              'Confirm'\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return DeleteUser;\n}(_react.Component);\n\nDeleteUser.propTypes = {\n  userId: _propTypes2.default.string.isRequired\n};\nvar _default = DeleteUser;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, 'DeleteUser', 'E:/Project/FACETWEET/client/user/DeleteUser.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/user/DeleteUser.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    title: {\n      margin: theme.spacing.unit * 2,\n      color: theme.palette.protectedTitle\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar EditProfile = function (_Component) {\n  _inherits(EditProfile, _Component);\n\n  function EditProfile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, EditProfile);\n\n    var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this));\n\n    _this.componentDidMount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: _this.match.params.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ name: data.name, email: data.email });\n        }\n      });\n    };\n\n    _this.clickSubmit = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n      (0, _apiUser.update)({\n        userId: _this.match.params.userId\n      }, {\n        t: jwt.token\n      }, user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ 'userId': data._id, 'redirectToProfile': true });\n        }\n      });\n    };\n\n    _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    };\n\n    _this.state = {\n      name: '',\n      email: '',\n      password: '',\n      redirectToProfile: false,\n      error: ''\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(EditProfile, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      if (this.state.redirectToProfile) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/' + this.state.userId });\n      }\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Edit Profile'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return EditProfile;\n}(_react.Component);\n\nEditProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(EditProfile);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'E:/Project/FACETWEET/client/user/EditProfile.js');\n  reactHotLoader.register(EditProfile, 'EditProfile', 'E:/Project/FACETWEET/client/user/EditProfile.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/user/EditProfile.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Edit = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _Person = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _DeleteUser = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n\nvar _DeleteUser2 = _interopRequireDefault(_DeleteUser);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      maxWidth: 600,\n      margin: 'auto',\n      padding: theme.spacing.unit * 3,\n      marginTop: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 3 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.protectedTitle\n    }\n  };\n};\n\nvar Profile = function (_Component) {\n  _inherits(Profile, _Component);\n\n  function Profile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, Profile);\n\n    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));\n\n    _this.init = function (userId) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ redirectToSignin: true });\n        } else {\n          _this.setState({ user: data });\n        }\n      });\n    };\n\n    _this.componentWillReceiveProps = function (props) {\n      _this.init(props.match.params.userId);\n    };\n\n    _this.componentDidMount = function () {\n      _this.init(_this.match.params.userId);\n    };\n\n    _this.state = {\n      user: '',\n      redirectToSignin: false\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(Profile, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var redirectToSignin = this.state.redirectToSignin;\n      if (redirectToSignin) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });\n      }\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'Profile'\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(\n              _List.ListItemAvatar,\n              null,\n              _react2.default.createElement(\n                _Avatar2.default,\n                null,\n                _react2.default.createElement(_Person2.default, null)\n              )\n            ),\n            _react2.default.createElement(_List.ListItemText, { primary: this.state.user.name, secondary: this.state.user.email }),\n            ' ',\n            _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == this.state.user._id && _react2.default.createElement(\n              _List.ListItemSecondaryAction,\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: \"/user/edit/\" + this.state.user._id },\n                _react2.default.createElement(\n                  _IconButton2.default,\n                  { 'aria-label': 'Edit', color: 'primary' },\n                  _react2.default.createElement(_Edit2.default, null)\n                )\n              ),\n              _react2.default.createElement(_DeleteUser2.default, { userId: this.state.user._id })\n            )\n          ),\n          _react2.default.createElement(_Divider2.default, null),\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(_List.ListItemText, { primary: \"Joined: \" + new Date(this.state.user.created).toDateString() })\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Profile;\n}(_react.Component);\n\nProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Profile);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'E:/Project/FACETWEET/client/user/Profile.js');\n  reactHotLoader.register(Profile, 'Profile', 'E:/Project/FACETWEET/client/user/Profile.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/user/Profile.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signup = function (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signup);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      name: '',\n      password: '',\n      email: '',\n      open: false,\n      error: ''\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _this.clickSubmit = function () {\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n      (0, _apiUser.create)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ error: '', open: true });\n        }\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signup, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(\n            _Card.CardContent,\n            null,\n            _react2.default.createElement(\n              _Typography2.default,\n              { type: 'headline', component: 'h2', className: classes.title },\n              'Sign Up'\n            ),\n            _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            ' ',\n            this.state.error && _react2.default.createElement(\n              _Typography2.default,\n              { component: 'p', color: 'error' },\n              _react2.default.createElement(\n                _Icon2.default,\n                { color: 'error', className: classes.error },\n                'error'\n              ),\n              this.state.error\n            )\n          ),\n          _react2.default.createElement(\n            _Card.CardActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n              'Submit'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, disableBackdropClick: true },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            'New Account'\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'New account successfully created.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signin' },\n              _react2.default.createElement(\n                _Button2.default,\n                { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n                'Sign In'\n              )\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Signup;\n}(_react.Component);\n\nSignup.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signup);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'E:/Project/FACETWEET/client/user/Signup.js');\n  reactHotLoader.register(Signup, 'Signup', 'E:/Project/FACETWEET/client/user/Signup.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/user/Signup.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _ArrowForward = __webpack_require__(/*! material-ui-icons/ArrowForward */ \"material-ui-icons/ArrowForward\");\n\nvar _ArrowForward2 = _interopRequireDefault(_ArrowForward);\n\nvar _Person = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      padding: theme.spacing.unit,\n      margin: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 4 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle\n    }\n  };\n};\n\nvar Users = function (_Component) {\n  _inherits(Users, _Component);\n\n  function Users() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Users);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      users: [] //initialize the state with an empty array of users\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Users, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      (0, _apiUser.list)().then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this2.setState({ users: data });\n        }\n      });\n    }\n\n    // The function contains the actual view content of the\n    // component, and is render Users composed with Material-UI components\n    // such as Paper, List, and ListItems.\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'All Users'\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          this.state.users.map(function (item, i) {\n            return _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: \"/user/\" + item._id, key: i },\n              _react2.default.createElement(\n                _List.ListItem,\n                { button: true },\n                _react2.default.createElement(\n                  _List.ListItemAvatar,\n                  null,\n                  _react2.default.createElement(\n                    _Avatar2.default,\n                    null,\n                    _react2.default.createElement(_Person2.default, null)\n                  )\n                ),\n                _react2.default.createElement(_List.ListItemText, { primary: item.name }),\n                _react2.default.createElement(\n                  _List.ListItemSecondaryAction,\n                  null,\n                  _react2.default.createElement(\n                    _IconButton2.default,\n                    null,\n                    _react2.default.createElement(_ArrowForward2.default, null)\n                  )\n                )\n              )\n            );\n          })\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Users;\n}(_react.Component);\n\nUsers.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Users);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'E:/Project/FACETWEET/client/user/Users.js');\n  reactHotLoader.register(Users, 'Users', 'E:/Project/FACETWEET/client/user/Users.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/client/user/Users.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n// Create a New User\n// React Component access the API endpoints exposed by the backend using the fetch API\n\n//Use fetch to make network requests\n\nvar create = function create(user) {\n  return fetch('/api/users', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\n// Listing Users\n// GET call to retrieve all the users in the database\nvar list = function list() {\n  return fetch('/api/users', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\n// Reading a user profile\n\n//The JWT is attached to the fetch call in the header using the\n// GET Authorization Bearer scheme, and then the response from the server is returned\n// to the component in a promise.\n\nvar read = function read(params, credentials) {\n  return fetch('/api/users/{params.userId}', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\n// Updating a user's database\n\n// The update method will take changed user data from the view component for a specific\n// user, then use fetch to make a PUT call to update the existing user in the backend. This is\n// also a protected route that will require a valid JWT as credential.\n\nvar update = function update(param, credentials, user) {\n  return fetch('api/users/' + params.userId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\n// Deleting a Users\nvar remove = function remove(params, credentials) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\n// Export the User API helper methods so that they could be imported and\n// used by React components\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, 'create', 'E:/Project/FACETWEET/client/user/api-user.js');\n  reactHotLoader.register(list, 'list', 'E:/Project/FACETWEET/client/user/api-user.js');\n  reactHotLoader.register(read, 'read', 'E:/Project/FACETWEET/client/user/api-user.js');\n  reactHotLoader.register(update, 'update', 'E:/Project/FACETWEET/client/user/api-user.js');\n  reactHotLoader.register(remove, 'remove', 'E:/Project/FACETWEET/client/user/api-user.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar config = {\n  env: \"development\" || false, //To differentiate between development and production mode\n  port: process.env.PORT || 3000, //To define the listening port for the server\n  jwtSecret: process.env.JET_SECRET || \"YOUR_secret_key\", //The secret key to be used to sign JWT\n  mongoUri: process.env.MONGODB_URI || //The location of the MongoDB database for the project\n  process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/facetweet' //\n\n};var _default = config;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, 'config', 'E:/Project/FACETWEET/config/config.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/config/config.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar signin = function signin(req, res) {\n  _user2.default.findOne({\n    \"email\": req.body.email\n  }, function (err, user) {\n    if (err || !user) //If there is an error or the user doesn't exist\n      return res.status('401').json({\n        error: \"User not found\"\n      });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    var token = _jsonwebtoken2.default.sign({\n      _id: user._id\n    }, _config2.default.jwtSecret);\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token: token,\n      user: { _id: user._id, name: user.name, email: user.email }\n    });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"Signed out\"\n  });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n  secret: _config2.default.jwtSecret,\n  userProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n};\n\nvar _default = { signin: signin, signout: signout, requireSignin: requireSignin, hasAuthorization: hasAuthorization };\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, 'signin', 'E:/Project/FACETWEET/server/controllers/auth.controller.js');\n  reactHotLoader.register(signout, 'signout', 'E:/Project/FACETWEET/server/controllers/auth.controller.js');\n  reactHotLoader.register(requireSignin, 'requireSignin', 'E:/Project/FACETWEET/server/controllers/auth.controller.js');\n  reactHotLoader.register(hasAuthorization, 'hasAuthorization', 'E:/Project/FACETWEET/server/controllers/auth.controller.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/controllers/auth.controller.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(req, res, next) {\n  var user = new _user2.default(req.body);\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\nvar list = function list(req, res) {\n  _user2.default.find(function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name   email updated created');\n};\n\nvar userByID = function userByID(req, res, next, id) {\n  _user2.default.findById(id).exec(function (err, user) {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar update = function update(req, res, next) {\n  var user = req.profile;\n  user = _lodash2.default.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(function (err) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar _default = { create: create, userByID: userByID, read: read, list: list, remove: remove, update: update };\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, 'create', 'E:/Project/FACETWEET/server/controllers/user.controller.js');\n  reactHotLoader.register(list, 'list', 'E:/Project/FACETWEET/server/controllers/user.controller.js');\n  reactHotLoader.register(userByID, 'userByID', 'E:/Project/FACETWEET/server/controllers/user.controller.js');\n  reactHotLoader.register(read, 'read', 'E:/Project/FACETWEET/server/controllers/user.controller.js');\n  reactHotLoader.register(update, 'update', 'E:/Project/FACETWEET/server/controllers/user.controller.js');\n  reactHotLoader.register(remove, 'remove', 'E:/Project/FACETWEET/server/controllers/user.controller.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/controllers/user.controller.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar compile = function compile(app) {\n  if (_config2.default.env === \"development\") {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, 'compile', 'E:/Project/FACETWEET/server/devBundle.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/devBundle.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _MainRouter = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n\nvar _StaticRouter2 = _interopRequireDefault(_StaticRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _colors = __webpack_require__(/*! material-ui/colors */ \"material-ui/colors\");\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n// modules for server side rendering\n\n//end\n\n//comment out before building for production\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = (0, _express2.default)();\n\n//comment out before building for production\n_devBundle2.default.compile(app);\n\n// parse body params and attache them to req.body\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\n// secure apps by setting various HTTP headers\napp.use((0, _helmet2.default)());\n// enable CORS - Cross Origin Resource Sharing\napp.use((0, _cors2.default)());\n\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\napp.use('/', _user2.default);\napp.use('/', _auth2.default);\n\napp.get('*', function (req, res) {\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: {\n        light: '#757de8',\n        main: '#3f51b5',\n        dark: '#002984',\n        contrastText: '#fff'\n      },\n      secondary: {\n        light: '#ff79b0',\n        main: '#ff4081',\n        dark: '#c60055',\n        contrastText: '#000'\n      },\n      openTitle: _colors.indigo['400'],\n      protectedTitle: _colors.pink['400'],\n      type: 'light'\n    }\n  });\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  var context = {};\n  var markup = _server2.default.renderToString(_react2.default.createElement(\n    _StaticRouter2.default,\n    { location: req.url, context: context },\n    _react2.default.createElement(\n      _JssProvider2.default,\n      { registry: sheetsRegistry, generateClassName: generateClassName },\n      _react2.default.createElement(\n        _styles.MuiThemeProvider,\n        { theme: theme, sheetsManager: new Map() },\n        _react2.default.createElement(_MainRouter2.default, null)\n      )\n    )\n  ));\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  var css = sheetsRegistry.toString();\n  res.status(200).send((0, _template2.default)({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorised errors\napp.use(function (err, req, res, next) {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'E:/Project/FACETWEET/server/express.js');\n  reactHotLoader.register(app, 'app', 'E:/Project/FACETWEET/server/express.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/express.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n    enterModule && enterModule(module);\n})();\n\nvar getErrorMessage = function getErrorMessage(err) {\n    var message = '';\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (var errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n    return message;\n};\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n    var output = void 0;\n    try {\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n    return output;\n};\n\nvar _default = { getErrorMessage: getErrorMessage };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(getErrorMessage, 'getErrorMessage', 'E:/Project/FACETWEET/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(getUniqueErrorMessage, 'getUniqueErrorMessage', 'E:/Project/FACETWEET/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/helpers/dbErrorHandler.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar UserSchema = new _mongoose2.default.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email field is required'\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: Date,\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return '';\n    try {\n      return _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nvar _default = _mongoose2.default.model('User', UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, 'UserSchema', 'E:/Project/FACETWEET/server/models/user.model.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/models/user.model.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, 'router', 'E:/Project/FACETWEET/server/routes/auth.routes.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/routes/auth.routes.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.param('userId', _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, 'router', 'E:/Project/FACETWEET/server/routes/user.routes.js');\n  reactHotLoader.register(_default, 'default', 'E:/Project/FACETWEET/server/routes/user.routes.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise; // Configure to use ES6 promises\n_mongoose2.default.connect(_config2.default.mongoUri);\n\n_mongoose2.default.connection.on('error', function () {\n  throw new Error('Unable to connect to the database: ' + mongoUri);\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default(_ref) {\n  var markup = _ref.markup,\n      css = _ref.css;\n\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>MERN Skeleton</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n          <style>\\n              a{\\n                text-decoration: none\\n              }\\n          </style>\\n        </head>\\n        <body style=\\\"margin:0\\\">\\n          <div id=\\\"root\\\">\" + markup + \"</div>\\n          <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:/Project/FACETWEET/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: ['file-loader']\n    }]\n  }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'E:/Project/FACETWEET/webpack.config.client.js');\n  reactHotLoader.register(config, 'config', 'E:/Project/FACETWEET/webpack.config.client.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! E:\\Project\\FACETWEET\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "material-ui-icons/ArrowForward":
/*!*************************************************!*\
  !*** external "material-ui-icons/ArrowForward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ArrowForward%22?");

/***/ }),

/***/ "material-ui-icons/Delete":
/*!*******************************************!*\
  !*** external "material-ui-icons/Delete" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Delete\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Delete%22?");

/***/ }),

/***/ "material-ui-icons/Edit":
/*!*****************************************!*\
  !*** external "material-ui-icons/Edit" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Edit\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Edit%22?");

/***/ }),

/***/ "material-ui-icons/Home":
/*!*****************************************!*\
  !*** external "material-ui-icons/Home" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Home\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Home%22?");

/***/ }),

/***/ "material-ui-icons/Person":
/*!*******************************************!*\
  !*** external "material-ui-icons/Person" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Person\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Person%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Avatar":
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Avatar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Avatar%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Button\");\n\n//# sourceURL=webpack:///external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Card\");\n\n//# sourceURL=webpack:///external_%22material-ui/Card%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Dialog\");\n\n//# sourceURL=webpack:///external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "material-ui/Divider":
/*!**************************************!*\
  !*** external "material-ui/Divider" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Divider\");\n\n//# sourceURL=webpack:///external_%22material-ui/Divider%22?");

/***/ }),

/***/ "material-ui/Icon":
/*!***********************************!*\
  !*** external "material-ui/Icon" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Icon\");\n\n//# sourceURL=webpack:///external_%22material-ui/Icon%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/IconButton\");\n\n//# sourceURL=webpack:///external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/List":
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List\");\n\n//# sourceURL=webpack:///external_%22material-ui/List%22?");

/***/ }),

/***/ "material-ui/Paper":
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Paper\");\n\n//# sourceURL=webpack:///external_%22material-ui/Paper%22?");

/***/ }),

/***/ "material-ui/TextField":
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/TextField\");\n\n//# sourceURL=webpack:///external_%22material-ui/TextField%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Toolbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Typography\");\n\n//# sourceURL=webpack:///external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/colors":
/*!*************************************!*\
  !*** external "material-ui/colors" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/colors\");\n\n//# sourceURL=webpack:///external_%22material-ui/colors%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });