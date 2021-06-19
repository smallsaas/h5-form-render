(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/dynamic-page/index"],{

/***/ 146:
/*!****************************************************************************!*\
  !*** F:/2020/github_kequandian/kqd_mini/components/dynamic-page/index.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9c9947ca& */ 147);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 149);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/dynamic-page/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/*!***********************************************************************************************************!*\
  !*** F:/2020/github_kequandian/kqd_mini/components/dynamic-page/index.vue?vue&type=template&id=9c9947ca& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=9c9947ca& */ 148);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_9c9947ca___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 148:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/2020/github_kequandian/kqd_mini/components/dynamic-page/index.vue?vue&type=template&id=9c9947ca& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([
    _vm._get(_vm.config, "pageStyle", {}),
    _vm._get(_vm.config, "moduleContainer", {})
  ])

  var m0 = _vm._get(_vm.config, "modules", [])

  var l0 =
    m0.length > 0
      ? _vm.__map(_vm.config.modules, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var m1 = _vm._get(item, "type")

          var a0 =
            m1 === "autoform"
              ? Object.assign(
                  {},
                  _vm._get(_vm.config.moduleData, item.key, {}),
                  { outStyle: _vm.getComponentStyle(item) }
                )
              : null
          var m2 = m1 === "autoform" ? _vm.getComponentsData(item) : null

          var m3 = _vm._get(item, "type")

          var a1 =
            m3 === "autolist"
              ? Object.assign(
                  {},
                  _vm._get(_vm.config.moduleData, item.key, {}),
                  _vm.getComponentsData(item)
                    ? {
                        list: _vm.getComponentsData(item)
                      }
                    : {},
                  { outStyle: _vm.getComponentStyle(item) }
                )
              : null

          var m4 = _vm._get(item, "type")

          var m5 =
            m4 === "banner"
              ? _vm.getComponentsData(item) ||
                _vm._get(_vm.config.moduleData, item.key + ".banners", [])
              : null
          var m6 = m4 === "banner" ? _vm.getComponentStyle(item) : null

          var m7 = _vm._get(item, "type")

          var m8 =
            m7 === "magic_nav"
              ? _vm._get(_vm.config.moduleData, item.key + ".navList", [])
              : null
          var m9 = m7 === "magic_nav" ? _vm.getComponentStyle(item) : null
          return {
            $orig: $orig,
            m1: m1,
            a0: a0,
            m2: m2,
            m3: m3,
            a1: a1,
            m4: m4,
            m5: m5,
            m6: m6,
            m7: m7,
            m8: m8,
            m9: m9
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        m0: m0,
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 149:
/*!*****************************************************************************************************!*\
  !*** F:/2020/github_kequandian/kqd_mini/components/dynamic-page/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 150);
/* harmony import */ var _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_download_google_download_HBuilderX_3_1_12_20210428_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 150:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/2020/github_kequandian/kqd_mini/components/dynamic-page/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var dynamicList = function dynamicList() {Promise.all(/*! require.ensure | components/dynamic-list/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/dynamic-list/index")]).then((function () {return resolve(__webpack_require__(/*! ../dynamic-list/index.vue */ 109));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var dynamicForm = function dynamicForm() {Promise.all(/*! require.ensure | components/dynamic-form/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/dynamic-form/index")]).then((function () {return resolve(__webpack_require__(/*! ../dynamic-form/index.vue */ 139));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var swiperImages = function swiperImages() {Promise.all(/*! require.ensure | components/swiper-images/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/swiper-images/index")]).then((function () {return resolve(__webpack_require__(/*! ../swiper-images/index.vue */ 170));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var navList = function navList() {Promise.all(/*! require.ensure | components/nav-list/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/nav-list/index")]).then((function () {return resolve(__webpack_require__(/*! ../nav-list/index.vue */ 203));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





{
  components: {
    dynamicList: dynamicList,
    dynamicForm: dynamicForm,
    swiperImages: swiperImages,
    navList: navList },

  props: {
    API: String // 请求接口
  },
  data: function data() {
    return {
      config: {}, //页面配置信息
      pageData: {}, // 页面数据
      skeletonLoading: true };

  },
  created: function created() {
    if (!this.API) {
      return;
    }
    this.fetchConfigData();
  },
  methods: {
    _get: function _get(data, field, value) {
      return _lodash.default.get(data, field, value);
    },
    fetchConfigData: function fetchConfigData() {var _this = this;
      uni.request({
        url: this.API,
        method: 'GET',
        complete: function complete(res) {
          if (_lodash.default.get(res, 'data.code') === 200) {
            var resData = _lodash.default.cloneDeep(_lodash.default.get(res, 'data.data', {}));
            // 加载页面数据
            if (_lodash.default.has(resData, 'dataSource.api') && resData.dataSource.api) {
              _this.fetchPageData(resData);
            } else {
              _this.config = resData;
              _this.skeletonLoading = false;
            }
            if (_lodash.default.has(resData, 'title')) {
              uni.setNavigationBarTitle({
                title: _lodash.default.get(resData, 'title', '动态页面') });

            }
          }
        } });

    },
    fetchPageData: function fetchPageData() {var _this2 = this;var resData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      uni.request({
        url: resData.dataSource.api,
        method: 'GET',
        data: _lodash.default.get(this.config, 'dataSource.request', {}),
        complete: function complete(res) {
          _this2.config = _objectSpread({}, resData);
          _this2.skeletonLoading = false;
          if (_lodash.default.get(res, 'data.code') === 200) {
            // const resData = _.get(res, 'data', {})
            // const responseConfig = _.get(this.config, 'dataSource.response', {})
            // let dataField = 'data'
            // if (_.has(responseConfig, 'data') && responseConfig.data) {
            //     dataField = responseConfig.data
            // }
            // this.pageData = _.cloneDeep(_.get(resData, dataField, {}))
            _this2.pageData = _lodash.default.cloneDeep(_lodash.default.get(res, 'data.data', {}));
          }
        } });

    },
    // 获取组件数据
    getComponentsData: function getComponentsData(item) {
      if (!_lodash.default.has(item, 'binding') || JSON.stringify(item.binding) === '{}') {
        return {};
      }
      var comonentScouce = {};
      for (var i in item.binding) {
        comonentScouce[item.binding[i]] = _lodash.default.get(this.pageData, i, '');
      }
      var value;
      switch (item.type) {
        case 'autoform':
          value = comonentScouce;
          break;
        case 'autolist':
          value = _lodash.default.has(comonentScouce, 'list') ? comonentScouce.list : false;
          break;
        case 'banner':
          value = _lodash.default.has(comonentScouce, 'banners') ? comonentScouce.banners : false;
          break;
        case 'magic_nav':
          value = _lodash.default.has(comonentScouce, 'navList') ? comonentScouce.navList : false;
          break;
        default:
          value = comonentScouce;}

      return value;
    },
    // 获取组件容器外层布局
    getComponentStyle: function getComponentStyle(item) {
      if (_lodash.default.has(item, 'container') && JSON.stringify(item.container) !== '{}') {
        return _lodash.default.get(item, 'container', {});
      }
      return _lodash.default.get(this.config, 'moduleContainer', {});
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/dynamic-page/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/dynamic-page/index-create-component',
    {
        'components/dynamic-page/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(146))
        })
    },
    [['components/dynamic-page/index-create-component']]
]);
