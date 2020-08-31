(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/app/members/members-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/members-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MembersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersRoutingModule", function() { return MembersRoutingModule; });
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members.component */ "./src/app/members/members.component.ts");

var routes = [
    {
        path: '',
        component: _members_component__WEBPACK_IMPORTED_MODULE_0__["MembersComponent"]
    }
];
var MembersRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function MembersRoutingModule() {
    }
    return MembersRoutingModule;
}());




/***/ }),

/***/ "./src/app/members/members.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/members/members.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_MembersComponent, View_MembersComponent_0, View_MembersComponent_Host_0, MembersComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MembersComponent", function() { return RenderType_MembersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MembersComponent_0", function() { return View_MembersComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MembersComponent_Host_0", function() { return View_MembersComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponentNgFactory", function() { return MembersComponentNgFactory; });
/* harmony import */ var _members_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members.component.scss.shim.ngstyle */ "./src/app/members/members.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_toast_message_toast_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/toast-message/toast-message.component.ngfactory */ "./src/app/shared/toast-message/toast-message.component.ngfactory.js");
/* harmony import */ var _shared_toast_message_toast_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/toast-message/toast-message.component */ "./src/app/shared/toast-message/toast-message.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_table_base_table_base_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/table-base/table-base.component.ngfactory */ "./src/app/shared/table-base/table-base.component.ngfactory.js");
/* harmony import */ var _shared_table_base_table_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/table-base/table-base.component */ "./src/app/shared/table-base/table-base.component.ts");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _api_company_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/company.service */ "./src/app/api/company.service.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal.service */ "./node_modules/ngx-bootstrap/modal/bs-modal.service.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */















var styles_MembersComponent = [_members_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MembersComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MembersComponent, data: {} });

function View_MembersComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "upb-toast-message", [], null, null, null, _shared_toast_message_toast_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ToastMessageComponent_0"], _shared_toast_message_toast_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ToastMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_toast_message_toast_message_component__WEBPACK_IMPORTED_MODULE_3__["ToastMessageComponent"], [], { type: [0, "type"], message: [1, "message"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.toast.type; var currVal_1 = _co.toast.message; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MembersComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, time_ago_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeAgoPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], null, function (_ck, _v) { var currVal_0 = (_v.parent.parent.context.$implicit.accessedAt ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).transform(_v.parent.parent.context.$implicit.accessedAt)) : "Never"); _ck(_v, 1, 0, currVal_0); }); }
function View_MembersComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = false; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MembersComponent_7(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill"], ["data-action", "edit"], ["data-toggle", "m-tooltip"], ["title", "Edit user"], ["type", "button"], ["upTooltip", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.editUser(_v.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-edit"]], null, null, null, null, null))], null, null);
}
function View_MembersComponent_8(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill"], ["data-action", "remove"], ["data-toggle", "m-tooltip"], ["title", "Delete user"], ["type", "button"], ["upTooltip", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.deleteUser(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 46), _v.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-trash"]], null, null, null, null, null))], null, null);
}
function View_MembersComponent_6(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill"], ["data-action", "edit"], ["data-toggle", "m-tooltip"], ["title", "Send welcome email"], ["type", "button"], ["upTooltip", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.sendEmail(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "fa fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.role !== "owner"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.role !== "owner"); _ck(_v, 6, 0, currVal_1); }, null);
}
function View_MembersComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "data-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit[_v.parent.context.key]; _ck(_v, 1, 0, currVal_0); }); }
function View_MembersComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.key; _ck(_v, 1, 0, currVal_0); var currVal_1 = "last_seen"; _ck(_v, 3, 0, currVal_1); var currVal_2 = "actions"; _ck(_v, 5, 0, currVal_2); }, null); }
function View_MembersComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "upb-table-base", [], null, null, null, _shared_table_base_table_base_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TableBaseComponent_0"], _shared_table_base_table_base_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TableBaseComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _shared_table_base_table_base_component__WEBPACK_IMPORTED_MODULE_7__["TableBaseComponent"], [], { headerData: [0, "headerData"], tableData: [1, "tableData"], cellTemplate: [2, "cellTemplate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["cellTemplate", 2]], null, 0, null, View_MembersComponent_3))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.header; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform(_co.users, _ck(_v, 3, 0, "first_name", "last_name"), _co.searchString)); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_MembersComponent_10(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "modal-body text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Do you want to delete this user?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-default"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.confirmDelete() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Yes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.decline() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No"]))], null, null);
}
function View_MembersComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 45, "div", [["class", "m-grid__item m-body m-grid__item--fluid m-wrapper pr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "m-subheader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "mr-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h3", [["class", "m-subheader__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Members "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 39, "div", [["class", "m-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 38, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 37, "div", [["class", "col-xl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 36, "div", [["class", "m-portlet m-portlet--mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 35, "div", [["class", "m-portlet__body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 30, "div", [["class", "m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 29, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 11, "div", [["class", "col-md-8 order-2 order-md-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 10, "div", [["class", "form-group m-form__group align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 9, "div", [["class", "m-input-icon m-input-icon--left upbook-table-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "input", [["class", "form-control m-input m-input--solid"], ["placeholder", "Search..."], ["type", "search"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.searchString = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "span", [["class", "m-input-icon__icon m-input-icon__icon--left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 10, "div", [["class", "col-md-3 order-1 order-md-2 m--align-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 9, "label", [["class", "m-checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "input", [["name", "feature.name"], ["type", "checkbox"]], [[8, "checked", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("click" === en)) {
                var pd_2 = (_co.updateMembersCanOnlyListenOwnCalls() !== false);
                ad = (pd_2 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_3 = ((_co.membersCanOnlyListenOwnCalls = $event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"], options: [2, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](33, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Members Can Only Listen to Their Own Calls "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 5, "div", [["class", "col-md-1 order-1 order-md-2 m--align-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "button", [["class", "btn m-btn--pill m-btn--icon m-btn--air btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.createUser() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "i", [["class", "fa fa-plus-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" New"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "div", [["class", "m-separator m-separator--dashed d-md-none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MembersComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["template", 2]], null, 0, null, View_MembersComponent_10))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showNotification; _ck(_v, 12, 0, currVal_0); var currVal_8 = _co.searchString; _ck(_v, 21, 0, currVal_8); var currVal_17 = "feature.name"; var currVal_18 = _co.membersCanOnlyListenOwnCalls; var currVal_19 = _ck(_v, 33, 0, true); _ck(_v, 32, 0, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.users; _ck(_v, 45, 0, currVal_20); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _co.membersCanOnlyListenOwnCalls; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 29, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); });
}
function View_MembersComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "upb-members", [], null, null, null, View_MembersComponent_0, RenderType_MembersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _members_component__WEBPACK_IMPORTED_MODULE_10__["MembersComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _api_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _api_company_service__WEBPACK_IMPORTED_MODULE_13__["CompanyService"], ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_14__["BsModalService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MembersComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("upb-members", _members_component__WEBPACK_IMPORTED_MODULE_10__["MembersComponent"], View_MembersComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/members/members.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/members/members.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = ["[_nghost-%COMP%] {\n  width: 100%; }\n  [_nghost-%COMP%]     .table th, [_nghost-%COMP%]     .table td {\n    text-align: left; }\n  [_nghost-%COMP%]     .table th:last-of-type, [_nghost-%COMP%]     .table td:last-of-type {\n      text-align: center;\n      white-space: nowrap; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1bmFyZC9jb2RlL3VwYm9vay1jbGllbnQtbWlncmF0aW9uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBO0VBRGI7O0lBTVEsZ0JBQWdCLEVBQUE7RUFOeEI7O01BUVUsa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgOjpuZy1kZWVwIHtcbiAgICAudGFibGUge1xuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"];




/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _shared_manage_user_modal_member_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/manage-user-modal/member-modal.component */ "./src/app/shared/manage-user-modal/member-modal.component.ts");
/* harmony import */ var _shared_helpers_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helpers/base.component */ "./src/app/shared/helpers/base.component.ts");






var MembersComponent = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MembersComponent, _super);
    function MembersComponent(store, userService, companyService, modal) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.userService = userService;
        _this.companyService = companyService;
        _this.modal = modal;
        _this.loading = false;
        _this.membersCanOnlyListenOwnCalls = false;
        _this.header = [
            {
                key: 'first_name',
                title: 'First name'
            },
            {
                key: 'last_name',
                title: 'Last name'
            },
            {
                key: 'email',
                title: 'Email'
            },
            {
                key: 'role',
                title: 'Role'
            },
            {
                key: 'last_seen',
                title: ''
            },
            {
                key: 'actions',
                title: 'Actions'
            }
        ];
        return _this;
    }
    MembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getCompany"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean))
            .subscribe(function (company) {
            _this.company = company;
            _this.selectedCompany = company.selectedCompany;
            if (_this.selectedCompany.features &&
                _this.selectedCompany.features.membersCanOnlyListenOwnCalls &&
                _this.selectedCompany.features.membersCanOnlyListenOwnCalls.active) {
                _this.membersCanOnlyListenOwnCalls = _this.selectedCompany.features.membersCanOnlyListenOwnCalls.active;
            }
            _this.getMembers();
        });
    };
    MembersComponent.prototype.createUser = function () {
        var _this = this;
        this.bsModalRef = this.modal.show(_shared_manage_user_modal_member_modal_component__WEBPACK_IMPORTED_MODULE_4__["MemberModalComponent"], {
            class: 'modal-lg',
            backdrop: 'static'
        });
        this.bsModalRef.content.company = this.selectedCompany;
        this.bsModalRef.content.users = this.users;
        this.subs = this.bsModalRef.content.event.subscribe(function () { return _this.getMembers(); });
    };
    MembersComponent.prototype.editUser = function (user) {
        var _this = this;
        this.selectedUser = user;
        this.bsModalRef = this.modal.show(_shared_manage_user_modal_member_modal_component__WEBPACK_IMPORTED_MODULE_4__["MemberModalComponent"], {
            class: 'modal-lg',
            backdrop: 'static'
        });
        this.bsModalRef.content.user = user;
        this.bsModalRef.content.users = this.users;
        this.bsModalRef.content.company = this.selectedCompany;
        this.subs = this.bsModalRef.content.event.subscribe(function () { return _this.getMembers(); });
    };
    MembersComponent.prototype.sendEmail = function (user) {
        var _this = this;
        this.subs = this.userService.sendEmail(user.id).subscribe(function () {
            _this.showNotification = true;
            _this.toast = {
                message: 'Email was sent.',
                type: 'success'
            };
        }, function () {
            _this.showNotification = true;
            _this.toast = {
                message: 'Cannot send email. Please try again.',
                type: 'danger'
            };
        });
    };
    MembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.subs = this.companyService
            .getCompanyUsers(this.company.selectedCompany.id)
            .subscribe(function (users) { return (_this.users = users); });
    };
    MembersComponent.prototype.updateMembersCanOnlyListenOwnCalls = function () {
        var _this = this;
        var features = this.selectedCompany.features;
        features.membersCanOnlyListenOwnCalls = {
            name: 'Members Can Only Listen to Their Own Calls',
            id: 'membersCanOnlyListenOwnCalls',
            active: !this.membersCanOnlyListenOwnCalls
        };
        this.companyService.updateFeatures(this.selectedCompany.id, { features: features }).subscribe(function () {
            _this.selectedCompany.features = features;
            _this.showNotification = true;
            _this.toast = {
                message: 'Feature updated.',
                type: 'success'
            };
        }, function () {
            _this.showNotification = true;
            _this.toast = {
                message: 'Unable to update feature. Please try again.',
                type: 'danger'
            };
        });
    };
    MembersComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.subs = this.companyService.deleteCompanyUser(this.company.selectedCompany.id, this.userToDelete.id).subscribe(function () {
            _this.users = _this.users.filter(function (c) { return c.id !== _this.userToDelete.id; });
            _this.showNotification = true;
            _this.toast = {
                message: 'User deleted.',
                type: 'success'
            };
        }, function () {
            _this.showNotification = true;
            _this.toast = {
                message: 'Cannot delete user.',
                type: 'danger'
            };
        });
        this.bsModalRef.hide();
    };
    MembersComponent.prototype.decline = function () {
        this.bsModalRef.hide();
    };
    MembersComponent.prototype.deleteUser = function (template, user) {
        this.userToDelete = user;
        this.bsModalRef = this.modal.show(template, { class: 'modal-sm' });
    };
    return MembersComponent;
}(_shared_helpers_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));




/***/ }),

/***/ "./src/app/members/members.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/members/members.module.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: MembersModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModuleNgFactory", function() { return MembersModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _members_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members.module */ "./src/app/members/members.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_modal_backdrop_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/modal/modal-backdrop.component.ngfactory */ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_modal_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/modal/modal-container.component.ngfactory */ "./node_modules/ngx-bootstrap/modal/modal-container.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_dropdown_bs_dropdown_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.ngfactory */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_tooltip_tooltip_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/tooltip/tooltip-container.component.ngfactory */ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.ngfactory.js");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/confirmation-modal/confirmation-modal.component.ngfactory */ "./src/app/shared/confirmation-modal/confirmation-modal.component.ngfactory.js");
/* harmony import */ var _shared_enter_pin_modal_enter_pin_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/enter-pin-modal/enter-pin-modal.component.ngfactory */ "./src/app/shared/enter-pin-modal/enter-pin-modal.component.ngfactory.js");
/* harmony import */ var _shared_call_details_modal_call_details_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/call-details-modal/call-details-modal.component.ngfactory */ "./src/app/shared/call-details-modal/call-details-modal.component.ngfactory.js");
/* harmony import */ var _shared_call_update_modal_call_update_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/call-update-modal/call-update-modal.component.ngfactory */ "./src/app/shared/call-update-modal/call-update-modal.component.ngfactory.js");
/* harmony import */ var _shared_initials_modal_initials_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/initials-modal/initials-modal.component.ngfactory */ "./src/app/shared/initials-modal/initials-modal.component.ngfactory.js");
/* harmony import */ var _shared_manage_user_modal_member_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/manage-user-modal/member-modal.component.ngfactory */ "./src/app/shared/manage-user-modal/member-modal.component.ngfactory.js");
/* harmony import */ var _shared_verify_bank_modal_verify_bank_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/verify-bank-modal/verify-bank-modal.component.ngfactory */ "./src/app/shared/verify-bank-modal/verify-bank-modal.component.ngfactory.js");
/* harmony import */ var _shared_chat_settings_modal_chat_settings_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/chat-settings-modal/chat-settings-modal.component.ngfactory */ "./src/app/shared/chat-settings-modal/chat-settings-modal.component.ngfactory.js");
/* harmony import */ var _shared_send_individual_reward_modal_send_individual_reward_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/send-individual-reward-modal/send-individual-reward-modal.component.ngfactory */ "./src/app/shared/send-individual-reward-modal/send-individual-reward-modal.component.ngfactory.js");
/* harmony import */ var _members_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./members.component.ngfactory */ "./src/app/members/members.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var ngx_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/carousel/carousel.config */ "./node_modules/ngx-bootstrap/carousel/carousel.config.js");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/confirmation-modal/confirmation-modal.service */ "./src/app/shared/confirmation-modal/confirmation-modal.service.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal.service */ "./node_modules/ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var ngx_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/tooltip/tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/positioning/positioning.service */ "./node_modules/ngx-bootstrap/positioning/positioning.service.js");
/* harmony import */ var ngx_bootstrap_component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/component-loader/component-loader.factory */ "./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var ngx_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/timepicker/timepicker.config */ "./node_modules/ngx-bootstrap/timepicker/timepicker.config.js");
/* harmony import */ var ngx_bootstrap_timepicker_reducer_timepicker_actions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/timepicker/reducer/timepicker.actions */ "./node_modules/ngx-bootstrap/timepicker/reducer/timepicker.actions.js");
/* harmony import */ var ngx_bootstrap_timepicker_reducer_timepicker_store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/timepicker/reducer/timepicker.store */ "./node_modules/ngx-bootstrap/timepicker/reducer/timepicker.store.js");
/* harmony import */ var _shared_aws_services_aws_s3_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/aws-services/aws-s3-service */ "./src/app/shared/aws-services/aws-s3-service.ts");
/* harmony import */ var _shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../shared/validators/validators.service */ "./src/app/shared/validators/validators.service.ts");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared/auth/auth.guard */ "./src/app/shared/auth/auth.guard.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _shared_company_selected_company_selected_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../shared/company-selected/company-selected.guard */ "./src/app/shared/company-selected/company-selected.guard.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../shared/auth/non-auth.guard */ "./src/app/shared/auth/non-auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_can_deactivate_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../shared/can-deactivate/can-deactivate.guard */ "./src/app/shared/can-deactivate/can-deactivate.guard.ts");
/* harmony import */ var ngx_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-bootstrap/modal/modal.module */ "./node_modules/ngx-bootstrap/modal/modal.module.js");
/* harmony import */ var ngx_bootstrap_dropdown_bs_dropdown_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-bootstrap/dropdown/bs-dropdown.module */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.module.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! mobx-angular */ "./node_modules/mobx-angular/dist/mobx-angular.js");
/* harmony import */ var ngx_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-bootstrap/tooltip/tooltip.module */ "./node_modules/ngx-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var ngx_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-bootstrap/collapse/collapse.module */ "./node_modules/ngx-bootstrap/collapse/collapse.module.js");
/* harmony import */ var ngx_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-bootstrap/carousel/carousel.module */ "./node_modules/ngx-bootstrap/carousel/carousel.module.js");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../shared/confirmation-modal/confirmation-modal.module */ "./src/app/shared/confirmation-modal/confirmation-modal.module.ts");
/* harmony import */ var ngx_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-bootstrap/timepicker/timepicker.module */ "./node_modules/ngx-bootstrap/timepicker/timepicker.module.js");
/* harmony import */ var _inline_svg_inline_svg_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../inline-svg/inline-svg.module */ "./src/app/inline-svg/inline-svg.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./members-routing.module */ "./src/app/members/members-routing.module.ts");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./members.component */ "./src/app/members/members.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */


















































var MembersModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_members_module__WEBPACK_IMPORTED_MODULE_1__["MembersModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _node_modules_ngx_bootstrap_modal_modal_backdrop_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ModalBackdropComponentNgFactory"], _node_modules_ngx_bootstrap_modal_modal_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ModalContainerComponentNgFactory"], _node_modules_ngx_bootstrap_dropdown_bs_dropdown_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["BsDropdownContainerComponentNgFactory"], _node_modules_ngx_bootstrap_tooltip_tooltip_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipContainerComponentNgFactory"], _shared_confirmation_modal_confirmation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ConfirmationModalComponentNgFactory"], _shared_enter_pin_modal_enter_pin_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["EnterPinModalComponentNgFactory"], _shared_call_details_modal_call_details_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CallDetailsModalComponentNgFactory"], _shared_call_update_modal_call_update_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CallUpdateModalComponentNgFactory"], _shared_initials_modal_initials_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["InitialsModalComponentNgFactory"], _shared_manage_user_modal_member_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["MemberModalComponentNgFactory"], _shared_verify_bank_modal_verify_bank_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["VerifyBankModalComponentNgFactory"], _shared_chat_settings_modal_chat_settings_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ChatSettingsModalComponentNgFactory"], _shared_send_individual_reward_modal_send_individual_reward_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["SendIndividualRewardModalComponentNgFactory"], _members_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["MembersComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_19__["AmChartsService"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_19__["AmChartsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_20__["CarouselConfig"], ngx_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_20__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_confirmation_modal_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_21__["ConfirmationModalService"], _shared_confirmation_modal_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_21__["ConfirmationModalService"], [ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_22__["BsModalService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_23__["TooltipConfig"], ngx_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_23__["TooltipConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_24__["PositioningService"], ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_24__["PositioningService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_25__["ComponentLoaderFactory"], ngx_bootstrap_component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_25__["ComponentLoaderFactory"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_24__["PositioningService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_26__["TimepickerConfig"], ngx_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_26__["TimepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker_reducer_timepicker_actions__WEBPACK_IMPORTED_MODULE_27__["TimepickerActions"], ngx_bootstrap_timepicker_reducer_timepicker_actions__WEBPACK_IMPORTED_MODULE_27__["TimepickerActions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker_reducer_timepicker_store__WEBPACK_IMPORTED_MODULE_28__["TimepickerStore"], ngx_bootstrap_timepicker_reducer_timepicker_store__WEBPACK_IMPORTED_MODULE_28__["TimepickerStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_aws_services_aws_s3_service__WEBPACK_IMPORTED_MODULE_29__["AWSS3Service"], _shared_aws_services_aws_s3_service__WEBPACK_IMPORTED_MODULE_29__["AWSS3Service"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_30__["ValidationService"], _shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_30__["ValidationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_31__["AuthenticatedGuard"], _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_31__["AuthenticatedGuard"], [_api_auth_service__WEBPACK_IMPORTED_MODULE_32__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_company_selected_company_selected_guard__WEBPACK_IMPORTED_MODULE_33__["CompanySelectedGuard"], _shared_company_selected_company_selected_guard__WEBPACK_IMPORTED_MODULE_33__["CompanySelectedGuard"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_34__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_35__["NonAuthenticatedGuard"], _shared_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_35__["NonAuthenticatedGuard"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_34__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_can_deactivate_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_37__["CanDeactivateGuard"], _shared_can_deactivate_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_37__["CanDeactivateGuard"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_36__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_38__["ModalModule"], ngx_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_38__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_dropdown_bs_dropdown_module__WEBPACK_IMPORTED_MODULE_39__["BsDropdownModule"], ngx_bootstrap_dropdown_bs_dropdown_module__WEBPACK_IMPORTED_MODULE_39__["BsDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_19__["AmChartsModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_19__["AmChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, mobx_angular__WEBPACK_IMPORTED_MODULE_40__["MobxAngularModule"], mobx_angular__WEBPACK_IMPORTED_MODULE_40__["MobxAngularModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_41__["TooltipModule"], ngx_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_41__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_42__["CollapseModule"], ngx_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_42__["CollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_43__["CarouselModule"], ngx_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_43__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_44__["ConfirmationModalModule"], _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_44__["ConfirmationModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_45__["TimepickerModule"], ngx_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_45__["TimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _inline_svg_inline_svg_module__WEBPACK_IMPORTED_MODULE_46__["InlineSvgModule"], _inline_svg_inline_svg_module__WEBPACK_IMPORTED_MODULE_46__["InlineSvgModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _members_routing_module__WEBPACK_IMPORTED_MODULE_48__["MembersRoutingModule"], _members_routing_module__WEBPACK_IMPORTED_MODULE_48__["MembersRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _members_module__WEBPACK_IMPORTED_MODULE_1__["MembersModule"], _members_module__WEBPACK_IMPORTED_MODULE_1__["MembersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_36__["ROUTES"], function () { return [[{ path: "", component: _members_component__WEBPACK_IMPORTED_MODULE_49__["MembersComponent"] }]]; }, [])]); });




/***/ }),

/***/ "./src/app/members/members.module.ts":
/*!*******************************************!*\
  !*** ./src/app/members/members.module.ts ***!
  \*******************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
var MembersModule = /** @class */ /*@__PURE__*/ (function () {
    function MembersModule() {
    }
    return MembersModule;
}());




/***/ })

}]);
//# sourceMappingURL=7.7980d7066c092df77f70.js.map