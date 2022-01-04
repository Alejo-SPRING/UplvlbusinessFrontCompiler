(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-pages-catalogo-catalogo-module~views-pages-cliente-cliente-module"],{

/***/ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js ***!
  \********************************************************************************************************/
/*! exports provided: SwalComponent, SwalDirective, SwalPortalDirective, SwalPortalTargets, SweetAlert2LoaderService, SweetAlert2Module, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalComponent", function() { return SwalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalDirective", function() { return SwalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPortalDirective", function() { return SwalPortalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPortalTargets", function() { return SwalPortalTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2LoaderService", function() { return SweetAlert2LoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2Module", function() { return SweetAlert2Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return provideDefaultSwal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return swalProviderToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return fireOnInitToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return dismissOnDestroyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SwalPortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SwalPortalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const swalProviderToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#swalProvider');
const fireOnInitToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#fireOnInit');
const dismissOnDestroyToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#dismissOnDestroy');

class SweetAlert2LoaderService {
    // Using any because Angular metadata generator does not understand a pure TS type here
    constructor(swalProvider) {
        this.swalProvider = swalProvider;
    }
    get swal() {
        if (!this.swalPromiseCache) {
            this.preloadSweetAlertLibrary();
        }
        return this.swalPromiseCache;
    }
    preloadSweetAlertLibrary() {
        if (this.swalPromiseCache)
            return;
        const libPromise = isLoader(this.swalProvider)
            ? this.swalProvider()
            : Promise.resolve(this.swalProvider);
        this.swalPromiseCache = libPromise.then(value => isDefaultExport(value) ? value : value.default);
        function isLoader(value) {
            return typeof value === 'function' && value.version === undefined;
        }
        function isDefaultExport(value) {
            return typeof value === 'function';
        }
    }
}
SweetAlert2LoaderService.ɵfac = function SweetAlert2LoaderService_Factory(t) { return new (t || SweetAlert2LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](swalProviderToken)); };
SweetAlert2LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SweetAlert2LoaderService, factory: SweetAlert2LoaderService.ɵfac });
SweetAlert2LoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [swalProviderToken,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [swalProviderToken]
            }] }]; }, null); })();

/**
 * <swal> component. See the README.md for usage.
 *
 * It contains a bunch of @Inputs that have a perfect 1:1 mapping with SweetAlert2 options.
 * Their types are directly coming from SweetAlert2 types defintitions, meaning that ngx-sweetalert2 is tightly coupled
 * to SweetAlert2, but also is type-safe even if both libraries do not evolve in sync.
 *
 * (?) If you want to use an object that declares the SweetAlert2 options all at once rather than many @Inputs,
 *     take a look at [swalOptions], that lets you pass a full {@link SweetAlertOptions} object.
 *
 * (?) If you are reading the TypeScript source of this component, you may think that it's a lot of code.
 *     Be sure that a lot of this code is types and Angular boilerplate. Compiled and minified code is much smaller.
 *     If you are really concerned about performance and/or don't care about the API and its convenient integration
 *     with Angular (notably change detection and transclusion), you may totally use SweetAlert2 natively as well ;)
 *
 * /!\ Some SweetAlert options aren't @Inputs but @Outputs: `willOpen`, `didOpen`, `didRender`, `willClose`, `didClose`
 *     and `didDestroy`.
 *     However, `preConfirm`, `preDeny` and `inputValidator` are still @Inputs because they are not event handlers,
 *     there can't be multiple listeners on them, and we need the values they can/must return.
 */
class SwalComponent {
    constructor(sweetAlert2Loader, moduleLevelFireOnInit, moduleLevelDismissOnDestroy) {
        this.sweetAlert2Loader = sweetAlert2Loader;
        this.moduleLevelFireOnInit = moduleLevelFireOnInit;
        this.moduleLevelDismissOnDestroy = moduleLevelDismissOnDestroy;
        /**
         * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
         */
        this.willOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
         */
        this.didOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the modal is
         * repainted on the screen).
         * Typically, this will happen after `Swal.fire()` or `Swal.update()`.
         * If you want to perform changes in the popup's DOM, that survive `Swal.update()`, prefer {@link didRender} over
         * {@link willOpen}.
         */
        this.didRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to another popup
         * being fired).
         */
        this.willClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not due to
         * another popup being fired).
         */
        this.didClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by another
         * popup.
         * If you have cleanup operations that you need to reliably execute each time a modal is closed, prefer
         * {@link didDestroy} over {@link didClose}.
         */
        this.didDestroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Confirm".
         * The event value ($event) can be either:
         *  - by default, just `true`,
         *  - when using {@link input}, the input value,
         *  - when using {@link preConfirm}, the return value of this function.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Deny".
         * This event bears no value.
         * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
         * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
         *
         * Example:
         *     <swal (deny)="handleDeny()"></swal>
         *
         *     public handleDeny(): void {
         *     }
         */
        this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
         * the modal was programmatically closed (through {@link close} for example).
         *
         * Example:
         *     <swal (dismiss)="handleDismiss($event)"></swal>
         *
         *     public handleDismiss(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This Set retains the properties that have been changed from @Inputs, so we can know precisely
         * what options we have to send to {@link Swal.fire}.
         */
        this.touchedProps = new Set();
        /**
         * A function of signature `(propName: string): void` that adds a given property name to the list of
         * touched properties, ie. {@link touchedProps}.
         */
        this.markTouched = this.touchedProps.add.bind(this.touchedProps);
        /**
         * Is the SweetAlert2 modal represented by this component currently opened?
         */
        this.isCurrentlyShown = false;
    }
    /**
     * An object of SweetAlert2 native options, useful if:
     *  - you don't want to use the @Inputs for practical/philosophical reasons ;
     *  - there are missing @Inputs because ngx-sweetalert2 isn't up-to-date with SweetAlert2's latest changes.
     *
     * /!\ Please note that setting this property does NOT erase what has been set before unless you specify the
     *     previous properties you want to erase again.
     *     Ie. setting { title: 'Title' } and then { text: 'Text' } will give { title: 'Title', text: 'Text' }.
     *
     * /!\ Be aware that the options defined in this object will override the @Inputs of the same name.
     */
    set swalOptions(options) {
        //=> Update properties
        Object.assign(this, options);
        //=> Mark changed properties as touched
        const touchedKeys = Object.keys(options);
        touchedKeys.forEach(this.markTouched);
    }
    /**
     * Computes the options object that will get passed to SweetAlert2.
     * Only the properties that have been set at least once on this component will be returned.
     * Mostly for internal usage.
     */
    get swalOptions() {
        //=> We will compute the options object based on the option keys that are known to have changed.
        //   That avoids passing a gigantic object to SweetAlert2, making debugging easier and potentially
        //   avoiding side effects.
        return [...this.touchedProps].reduce((obj, key) => (Object.assign(Object.assign({}, obj), { [key]: this[key] })), {});
    }
    set swalVisible(visible) {
        visible ? this.fire() : this.close();
    }
    get swalVisible() {
        return this.isCurrentlyShown;
    }
    /**
     * Angular lifecycle hook.
     * Asks the SweetAlert2 loader service to preload the SweetAlert2 library, so it begins to be loaded only if there
     * is a <swal> component somewhere, and is probably fully loaded when the modal has to be displayed,
     * causing no delay.
     */
    ngOnInit() {
        //=> Preload SweetAlert2 library in case this component is activated.
        this.sweetAlert2Loader.preloadSweetAlertLibrary();
    }
    /**
     * Angular lifecycle hook.
     * Fires the modal, if the component or module is configured to do so.
     */
    ngAfterViewInit() {
        const fireOnInit = this.swalFireOnInit === undefined
            ? this.moduleLevelFireOnInit
            : this.swalFireOnInit;
        fireOnInit && this.fire();
    }
    /**
     * Angular lifecycle hook.
     * Updates the SweetAlert options, and if the modal is opened, asks SweetAlert to render it again.
     */
    ngOnChanges(changes) {
        //=> For each changed @Input that matches a SweetAlert2 option, mark as touched so we can
        //   send it with the next fire() or update() calls.
        Object.keys(changes)
            //=> If the filtering logic becomes more complex here, we can use Swal.isValidParameter
            .filter((key) => !key.startsWith('swal'))
            .forEach(this.markTouched);
        //=> Eventually trigger re-render if the modal is open.
        void this.update();
    }
    /**
     * Angular lifecycle hook.
     * Closes the SweetAlert when the component is destroyed.
     */
    ngOnDestroy() {
        //=> Release the modal if the component is destroyed and if that behaviour is not disabled.
        const dismissOnDestroy = this.swalDismissOnDestroy === undefined
            ? this.moduleLevelDismissOnDestroy
            : this.swalDismissOnDestroy;
        dismissOnDestroy && this.close();
    }
    /**
     * Shows the SweetAlert.
     *
     * Returns the SweetAlert2 promise for convenience and use in code behind templates.
     * Otherwise, (confirm)="myHandler($event)" and (dismiss)="myHandler($event)" can be used in templates.
     */
    fire() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const swal = yield this.sweetAlert2Loader.swal;
            const userOptions = this.swalOptions;
            //=> Build the SweetAlert2 options
            const options = Object.assign(Object.assign({}, userOptions), { 
                //=> Handle modal lifecycle events
                willOpen: composeHook(userOptions.willOpen, (modalElement) => {
                    this.willOpen.emit({ modalElement });
                }), didOpen: composeHook(userOptions.didOpen, (modalElement) => {
                    this.isCurrentlyShown = true;
                    this.didOpen.emit({ modalElement });
                }), didRender: composeHook(userOptions.didRender, (modalElement) => {
                    this.didRender.emit({ modalElement });
                }), willClose: composeHook(userOptions.willClose, (modalElement) => {
                    this.isCurrentlyShown = false;
                    this.willClose.emit({ modalElement });
                }), didClose: composeHook(userOptions.didClose, () => {
                    this.didClose.emit();
                }), didDestroy: composeHook(userOptions.didDestroy, () => {
                    this.didDestroy.emit();
                }) });
            //=> Show the Swal! And wait for confirmation or dimissal.
            const result = yield swal.fire(options);
            //=> Emit on (confirm), (deny) or (dismiss)
            switch (true) {
                case result.isConfirmed:
                    this.confirm.emit(result.value);
                    break;
                case result.isDenied:
                    this.deny.emit();
                    break;
                case result.isDismissed:
                    this.dismiss.emit(result.dismiss);
                    break;
            }
            return result;
            function composeHook(userHook, libHook) {
                return (...args) => (libHook(...args), userHook === null || userHook === void 0 ? void 0 : userHook(...args));
            }
        });
    }
    /**
     * Closes the modal, if opened.
     *
     * @param result The value that the modal will resolve with, triggering either (confirm), (deny) or (dismiss).
     *               If the argument is not passed, it is (dismiss) that will emit an `undefined` reason.
     *               {@see Swal.close}.
     */
    close(result) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isCurrentlyShown)
                return;
            const swal = yield this.sweetAlert2Loader.swal;
            swal.close(result);
        });
    }
    /**
     * Updates SweetAlert2 options while the modal is opened, causing the modal to re-render.
     * If the modal is not opened, the component options will simply be updated and that's it.
     *
     * /!\ Please note that not all SweetAlert2 options are updatable while the modal is opened.
     *
     * @param options
     */
    update(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (options) {
                this.swalOptions = options;
            }
            if (!this.isCurrentlyShown)
                return;
            const swal = yield this.sweetAlert2Loader.swal;
            const allOptions = this.swalOptions;
            const updatableOptions = Object.keys(allOptions)
                .filter(swal.isUpdatableParameter)
                .reduce((obj, key) => (Object.assign(Object.assign({}, obj), { [key]: allOptions[key] })), {});
            swal.update(updatableOptions);
        });
    }
}
SwalComponent.ɵfac = function SwalComponent_Factory(t) { return new (t || SwalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](fireOnInitToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](dismissOnDestroyToken)); };
SwalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SwalComponent, selectors: [["swal"]], inputs: { swalOptions: "swalOptions", swalVisible: "swalVisible", title: "title", titleText: "titleText", text: "text", html: "html", footer: "footer", icon: "icon", iconColor: "iconColor", iconHtml: "iconHtml", backdrop: "backdrop", toast: "toast", target: "target", input: "input", width: "width", padding: "padding", background: "background", position: "position", grow: "grow", showClass: "showClass", hideClass: "hideClass", customClass: "customClass", timer: "timer", timerProgressBar: "timerProgressBar", animation: "animation", heightAuto: "heightAuto", allowOutsideClick: "allowOutsideClick", allowEscapeKey: "allowEscapeKey", allowEnterKey: "allowEnterKey", stopKeydownPropagation: "stopKeydownPropagation", keydownListenerCapture: "keydownListenerCapture", showConfirmButton: "showConfirmButton", showDenyButton: "showDenyButton", showCancelButton: "showCancelButton", confirmButtonText: "confirmButtonText", denyButtonText: "denyButtonText", cancelButtonText: "cancelButtonText", confirmButtonColor: "confirmButtonColor", denyButtonColor: "denyButtonColor", cancelButtonColor: "cancelButtonColor", confirmButtonAriaLabel: "confirmButtonAriaLabel", denyButtonAriaLabel: "denyButtonAriaLabel", cancelButtonAriaLabel: "cancelButtonAriaLabel", buttonsStyling: "buttonsStyling", reverseButtons: "reverseButtons", focusConfirm: "focusConfirm", focusDeny: "focusDeny", focusCancel: "focusCancel", showCloseButton: "showCloseButton", closeButtonHtml: "closeButtonHtml", closeButtonAriaLabel: "closeButtonAriaLabel", loaderHtml: "loaderHtml", showLoaderOnConfirm: "showLoaderOnConfirm", preConfirm: "preConfirm", preDeny: "preDeny", imageUrl: "imageUrl", imageWidth: "imageWidth", imageHeight: "imageHeight", imageAlt: "imageAlt", inputLabel: "inputLabel", inputPlaceholder: "inputPlaceholder", inputValue: "inputValue", inputOptions: "inputOptions", inputAutoTrim: "inputAutoTrim", inputAttributes: "inputAttributes", inputValidator: "inputValidator", returnInputValueOnDeny: "returnInputValueOnDeny", validationMessage: "validationMessage", progressSteps: "progressSteps", currentProgressStep: "currentProgressStep", progressStepsDistance: "progressStepsDistance", scrollbarPadding: "scrollbarPadding", swalFireOnInit: "swalFireOnInit", swalDismissOnDestroy: "swalDismissOnDestroy" }, outputs: { willOpen: "willOpen", didOpen: "didOpen", didRender: "didRender", willClose: "willClose", didClose: "didClose", didDestroy: "didDestroy", confirm: "confirm", deny: "deny", dismiss: "dismiss" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function SwalComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
SwalComponent.ctorParameters = () => [
    { type: SweetAlert2LoaderService },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [fireOnInitToken,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [dismissOnDestroyToken,] }] }
];
SwalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    titleText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    html: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    toast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hideClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    timerProgressBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    heightAuto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowOutsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowEscapeKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowEnterKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stopKeydownPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keydownListenerCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showConfirmButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showDenyButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    denyButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    denyButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    denyButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    buttonsStyling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    reverseButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusDeny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showCloseButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    closeButtonHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    closeButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    loaderHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showLoaderOnConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preDeny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageAlt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputAutoTrim: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputAttributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputValidator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    returnInputValueOnDeny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    validationMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    progressSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentProgressStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    progressStepsDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scrollbarPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalFireOnInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalDismissOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    willOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    willClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    confirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    deny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'swal',
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: SweetAlert2LoaderService }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [fireOnInitToken]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [dismissOnDestroyToken]
            }] }]; }, { willOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], willClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didDestroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], confirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], deny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], swalOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], titleText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], html: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], backdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], timer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], timerProgressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], heightAuto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowEscapeKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowEnterKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stopKeydownPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keydownListenerCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showConfirmButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDenyButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showCancelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], denyButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], denyButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], denyButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], buttonsStyling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reverseButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusDeny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showCloseButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closeButtonHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closeButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loaderHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLoaderOnConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preDeny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageAlt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputAutoTrim: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputAttributes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputValidator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], returnInputValueOnDeny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], validationMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], progressSteps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentProgressStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], progressStepsDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalFireOnInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalDismissOnDestroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * [swal] directive. It takes a value that defines the SweetAlert and can be of three types:
 *
 * 1) A simple array of two or three strings defining [title, text, icon] - the icon being optional, ex:
 *
 *    <button [swal]="['Title', 'Text']">Click me</button>
 *
 * 2) A native SweetAlert2 options object, ex:
 *
 *    <button [swal]="{ title: 'Title', text: 'Text' }">Click me</button>
 *
 * 3) A reference to an existing SwalComponent instance for more advanced uses, ex:
 *
 *    <button [swal]="mySwal">Click me</button>
 *    <swal #mySwal title="Title" text="Text"></swal>
 */
class SwalDirective {
    constructor(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        /**
         * Emits when the user clicks "Confirm".
         * The event value ($event) can be either:
         *  - by default, just `true`,
         *  - when using {@link input}, the input value,
         *  - when using {@link preConfirm}, the return value of this function.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Deny".
         * This event bears no value.
         * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
         * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
         *
         * Example:
         *     <swal (deny)="handleDeny()"></swal>
         *
         *     public handleDeny(): void {
         *     }
         */
        this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
         * the modal was programmatically closed (through {@link dismiss} for example).
         *
         * Example:
         *     <swal (dismiss)="handleDismiss($event)"></swal>
         *
         *     public handleDismiss(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * SweetAlert2 options or a SwalComponent instance.
     * See the class doc block for more informations.
     */
    set swal(options) {
        if (options instanceof SwalComponent) {
            this.swalInstance = options;
        }
        else if (isArrayOptions(options)) {
            this.swalOptions = {};
            [this.swalOptions.title, this.swalOptions.text, this.swalOptions.icon] = options;
        }
        else {
            this.swalOptions = options;
        }
        function isArrayOptions(value) {
            return Array.isArray(options);
        }
    }
    /**
     * OnInit lifecycle handler.
     * Creates a SwalComponent instance if the user didn't provided one and binds on that component (confirm),
     * (deny) and (dismiss) outputs to reemit on the directive.
     */
    ngOnInit() {
        if (!this.swalInstance) {
            const factory = this.resolver.resolveComponentFactory(SwalComponent);
            this.swalRef = this.viewContainerRef.createComponent(factory);
            this.swalInstance = this.swalRef.instance;
        }
    }
    /**
     * OnDestroy lifecycle handler.
     * Destroys the dynamically-created SwalComponent.
     */
    ngOnDestroy() {
        if (this.swalRef) {
            this.swalRef.destroy();
        }
    }
    /**
     * Click handler.
     * The directive listens for onclick events on its host element.
     * When this happens, it shows the <swal> attached to this directive.
     */
    onClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.swalInstance)
            return;
        if (this.swalOptions) {
            this.swalInstance.swalOptions = this.swalOptions;
        }
        const swalClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.swalInstance.confirm.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(v => this.confirm.emit(v));
        this.swalInstance.deny.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(v => this.deny.emit(v));
        this.swalInstance.dismiss.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(v => this.dismiss.emit(v));
        this.swalInstance.fire().then(() => swalClosed.next());
    }
}
SwalDirective.ɵfac = function SwalDirective_Factory(t) { return new (t || SwalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
SwalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SwalDirective, selectors: [["", "swal", ""]], hostBindings: function SwalDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwalDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { swal: "swal" }, outputs: { confirm: "confirm", deny: "deny", dismiss: "dismiss" } });
SwalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
SwalDirective.propDecorators = {
    swal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    deny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[swal]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { confirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], deny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], swal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    /**
     * Click handler.
     * The directive listens for onclick events on its host element.
     * When this happens, it shows the <swal> attached to this directive.
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();

/**
 * Represents an object of targets for <swal> portals (use with *swalPortal directive).
 * We must use thunks to access the Swal.* functions listed below, because they get created after the first modal is
 * shown, so this object lets us reference those functions safely and in a statically-typed manner.
 */
class SwalPortalTargets {
    constructor() {
        /**
         * Targets the modal close button block contents.
         */
        this.closeButton = {
            element: swal => swal.getCloseButton(),
            options: { showCloseButton: true }
        };
        /**
         * Targets the modal title block contents.
         */
        this.title = {
            element: swal => swal.getTitle(),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { title: ' ' }
        };
        /**
         * Targets the modal text block contents (that is another block inside the first content block, so you can still
         * use other modal features like Swal inputs, that are situated inside that parent content block).
         */
        this.content = {
            element: swal => swal.getHtmlContainer(),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { text: ' ' }
        };
        /**
         * Targets the actions block contents, where are the confirm and cancel buttons in a normal time.
         * /!\ WARNING: using this target destroys some of the native SweetAlert2 modal's DOM, therefore, if you use this
         *     target, do not update the modal via <swal> @Inputs while the modal is open, or you'll get an error.
         *     We could workaround that inconvenient inside this integration, but that'd be detrimental to memory and
         *     performance of everyone, for a relatively rare use case.
         */
        this.actions = {
            element: swal => swal.getActions(),
            // The button will never exist, but SweetAlert2 shows the actions block only if there is at least one button.
            options: { showConfirmButton: true }
        };
        /**
         * Targets the confirm button contents, replacing the text inside it (not the button itself)
         */
        this.confirmButton = {
            element: swal => swal.getConfirmButton(),
            options: { showConfirmButton: true }
        };
        /**
         * Targets the deny button contents, replacing the text inside it (not the button itself)
         */
        this.denyButton = {
            element: swal => swal.getDenyButton(),
            options: { showDenyButton: true }
        };
        /**
         * Targets the cancel button contents, replacing the text inside it (not the button itself)
         */
        this.cancelButton = {
            element: swal => swal.getCancelButton(),
            options: { showCancelButton: true }
        };
        /**
         * Targets the modal footer contents.
         */
        this.footer = {
            element: swal => swal.getFooter(),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { footer: ' ' }
        };
    }
}
SwalPortalTargets.ɵfac = function SwalPortalTargets_Factory(t) { return new (t || SwalPortalTargets)(); };
SwalPortalTargets.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function SwalPortalTargets_Factory() { return new SwalPortalTargets(); }, token: SwalPortalTargets, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalTargets, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @internal
 * Holds a consumer's Angular template and displays it on a Sweet Alert.
 * See SwalPortalDirective for info about the covered feature.
 */
class SwalPortalComponent {
    constructor() {
        this.template = null;
    }
}
SwalPortalComponent.ɵfac = function SwalPortalComponent_Factory(t) { return new (t || SwalPortalComponent)(); };
SwalPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SwalPortalComponent, selectors: [["swal-portal"]], inputs: { template: "template" }, decls: 1, vars: 1, consts: [[4, "ngTemplateOutlet"]], template: function SwalPortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SwalPortalComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
SwalPortalComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'swal-portal',
                template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * A structural directive that lets you use Angular templates inside of SweetAlerts.
 * There are different targetable zones provided by {@link SwalPortalTargets}: title, content, confirmButton, etc, but
 * you can also make your own target by implementing {@link SwalPortalTarget} and giving it to this directive.
 * The default target is the alert text content zone.
 *
 * Usage in your component's TypeScript (if you use another target than {@link SwalPortalTargets.content}):
 *
 *     @Component({ ... })
 *     export class MyComponent {
 *         public constructor(public readonly swalTargets: SwalPortalTargets) {
 *         }
 *     }
 *
 * Usage in the template:
 *
 *     <swal title="Fill the form" (confirm)="confirmHandler()">
 *         <!-- This form will be displayed as the alert main content
 *              Targets the alert's main content zone by default -->
 *         <form *swalPortal [formControl]="myForm">
 *             ...
 *         </form>
 *
 *         <!-- This targets the confirm button's inner content
 *              Notice the usage of ng-container to avoid creating an useless DOM element inside the button -->
 *         <ng-container *swalPortal="swalTargets.confirmButton">
 *              Send ({{ secondsLeft }} seconds left)
 *         </ng-container>
 *     <swal>
 */
class SwalPortalDirective {
    constructor(resolver, injector, app, templateRef, sweetAlert2Loader, swalTargets, swalComponent) {
        this.resolver = resolver;
        this.injector = injector;
        this.app = app;
        this.templateRef = templateRef;
        this.sweetAlert2Loader = sweetAlert2Loader;
        this.swalTargets = swalTargets;
        this.swalComponent = swalComponent;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Subscribes to the the SweetAlert appearance/disappearance events to create/destroy the SwalPortalComponent
     * that will receive the consumer's template.
     */
    ngOnInit() {
        // Can't be set in a default property value, if the customer lets *swalPortal empty, the value we get is undef.
        this.target = this.target || this.swalTargets.content;
        //=> Apply the options provided by the target definition
        void this.swalComponent.update(this.target.options);
        //=> Subscribe to a few hooks frm the parent SwalComponent.
        this.swalComponent.didRender.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.didRenderHook.bind(this));
        this.swalComponent.willOpen.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.willOpenHook.bind(this));
        this.swalComponent.didDestroy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.didDestroyHook.bind(this));
    }
    /**
     * Signal any {@link destroyed} consumer that this is over, so they can unsubscribe from the
     * parent SwalComponent events.
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * This didRender hook runs 1..n times (per modal instance), just before the modal is shown (and also before the
     * {@link willOpenHook}), or after Swal.update() is called.
     * This is a good place to render, or re-render, our portal contents.
     */
    didRenderHook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //=> Ensure the portal component is created
            if (!this.portalComponentRef) {
                this.portalComponentRef = this.createPortalComponent();
            }
            //=> SweetAlert2 created the modal or just erased all of our content, so we need to install/reinstall it.
            // Swal.update() is synchronous, this observable too, and mountComponentOnTarget too (the promise inside
            // this function is already resolved at this point), so the whole process of re-rendering and re-mounting
            // the portal component is fully synchronous, causing no blinks in the modal contents.
            const swal = yield this.sweetAlert2Loader.swal;
            //=> Find target element
            const targetEl = this.target.element(swal);
            if (!targetEl)
                return;
            //=> Replace target's contents with our component
            // https://jsperf.com/innerhtml-vs-removechild/15
            while (targetEl.firstChild) {
                targetEl.removeChild(targetEl.firstChild);
            }
            targetEl.appendChild(this.portalComponentRef.location.nativeElement);
        });
    }
    /**
     * This willOpen hook runs once (per modal instance), just before the modal is shown on the screen.
     * This is a good place to declare our detached view to the Angular app.
     */
    willOpenHook() {
        if (!this.portalComponentRef)
            return;
        //=> Make the Angular app aware of that detached view so rendering and change detection can happen
        this.app.attachView(this.portalComponentRef.hostView);
    }
    /**
     * This didDestroy hook runs once (per modal instance), just after the modal closing animation terminated.
     * This is a good place to detach and destroy our content, that is not visible anymore.
     */
    didDestroyHook() {
        if (!this.portalComponentRef)
            return;
        //=> Detach the portal component from the app and destroy it
        this.app.detachView(this.portalComponentRef.hostView);
        this.portalComponentRef.destroy();
        this.portalComponentRef = void 0;
    }
    /**
     * Creates the {@link SwalPortalComponent} and gives it the customer's template ref.
     */
    createPortalComponent() {
        //=> Create the SwalPortalComponent that will hold our content
        const factory = this.resolver.resolveComponentFactory(SwalPortalComponent);
        // Yes, we do not use the third argument that would directly use the target as the component's view
        // (unfortunately, because that would give a cleaner DOM and would avoid dirty and direct DOM manipulations)
        // That's because we want to keep our component safe from SweetAlert2's operations on the DOM, and to be
        // able to restore it at any moment, ie. after the modal has been re-rendered.
        const componentRef = factory.create(this.injector, []);
        //=> Apply the consumer's template on the component
        componentRef.instance.template = this.templateRef;
        return componentRef;
    }
}
SwalPortalDirective.ɵfac = function SwalPortalDirective_Factory(t) { return new (t || SwalPortalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalPortalTargets), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalComponent, 1)); };
SwalPortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SwalPortalDirective, selectors: [["", "swalPortal", ""]], inputs: { target: ["swalPortal", "target"] } });
SwalPortalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: SweetAlert2LoaderService },
    { type: SwalPortalTargets },
    { type: SwalComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
];
SwalPortalDirective.propDecorators = {
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['swalPortal',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[swalPortal]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }, { type: SweetAlert2LoaderService }, { type: SwalPortalTargets }, { type: SwalComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }] }]; }, { target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['swalPortal']
        }] }); })();

function provideDefaultSwal() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js", 7));
}
class SweetAlert2Module {
    static forRoot(options = {}) {
        return {
            ngModule: SweetAlert2Module,
            providers: [
                SweetAlert2LoaderService,
                { provide: swalProviderToken, useValue: options.provideSwal || provideDefaultSwal },
                { provide: fireOnInitToken, useValue: options.fireOnInit || false },
                { provide: dismissOnDestroyToken, useValue: options.dismissOnDestroy || true }
            ]
        };
    }
    static forChild(options = {}) {
        return {
            ngModule: SweetAlert2Module,
            providers: [
                ...options.provideSwal ? [
                    SweetAlert2LoaderService,
                    { provide: swalProviderToken, useValue: options.provideSwal }
                ] : [],
                ...options.fireOnInit !== undefined ? [
                    { provide: fireOnInitToken, useValue: options.fireOnInit }
                ] : [],
                ...options.dismissOnDestroy !== undefined ? [
                    { provide: dismissOnDestroyToken, useValue: options.dismissOnDestroy }
                ] : []
            ]
        };
    }
}
SweetAlert2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SweetAlert2Module });
SweetAlert2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SweetAlert2Module_Factory(t) { return new (t || SweetAlert2Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SweetAlert2Module, { declarations: function () { return [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [SwalComponent, SwalPortalDirective, SwalDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                exports: [
                    SwalComponent, SwalPortalDirective, SwalDirective
                ],
                entryComponents: [
                    SwalComponent, SwalPortalComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=sweetalert2-ngx-sweetalert2.js.map

/***/ }),

/***/ "./node_modules/angular-cropperjs/__ivy_ngcc__/fesm2015/angular-cropperjs.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-cropperjs/__ivy_ngcc__/fesm2015/angular-cropperjs.js ***!
  \***********************************************************************************/
/*! exports provided: AngularCropperjsService, CropperComponent, AngularCropperjsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularCropperjsService", function() { return AngularCropperjsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperComponent", function() { return CropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularCropperjsModule", function() { return AngularCropperjsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



const _c0 = ["image"];
function CropperComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CropperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.loadImageErrorText);
} }
class AngularCropperjsService {
    constructor() { }
}
AngularCropperjsService.ɵfac = function AngularCropperjsService_Factory(t) { return new (t || AngularCropperjsService)(); };
AngularCropperjsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AngularCropperjsService, factory: AngularCropperjsService.ɵfac, providedIn: 'root' });
/** @nocollapse */
AngularCropperjsService.ctorParameters = () => [];
/** @nocollapse */ AngularCropperjsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularCropperjsService_Factory() { return new AngularCropperjsService(); }, token: AngularCropperjsService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularCropperjsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CropperComponent {
    constructor() {
        this.cropperOptions = {};
        this.export = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * Image loaded
     * @param {?} ev
     * @return {?}
     */
    imageLoaded(ev) {
        //
        // Unset load error state
        this.loadError = false;
        /** @type {?} */
        const image = /** @type {?} */ (ev.target);
        this.imageElement = image;
        //
        // Add crossOrigin?
        if (this.cropperOptions.checkCrossOrigin)
            image.crossOrigin = 'anonymous';
        //
        // Image on ready event
        image.addEventListener('ready', () => {
            //
            // Emit ready
            this.ready.emit(true);
            //
            // Unset loading state
            this.isLoading = false;
            //
            // Validate cropbox existance
            if (this.cropbox) {
                //
                // Set cropbox data
                this.cropper.setCropBoxData(this.cropbox);
            }
        });
        /** @type {?} */
        let aspectRatio = NaN;
        if (this.settings) {
            const { width, height } = this.settings;
            aspectRatio = width / height;
        }
        //
        // Set crop options
        // extend default with custom config
        this.cropperOptions = Object.assign({
            aspectRatio,
            movable: false,
            scalable: false,
            zoomable: false,
            viewMode: 1,
            checkCrossOrigin: true
        }, this.cropperOptions);
        //
        // Set cropperjs
        if (this.cropper) {
            this.cropper.destroy();
            this.cropper = undefined;
        }
        this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_1___default.a(image, this.cropperOptions);
    }
    /**
     * Image load error
     * @param {?} event
     * @return {?}
     */
    imageLoadError(event) {
        //
        // Set load error state
        this.loadError = true;
        //
        // Unset loading state
        this.isLoading = false;
    }
    /**
     * Export canvas
     * @param {?=} base64
     * @return {?}
     */
    exportCanvas(base64) {
        /** @type {?} */
        const imageData = this.cropper.getImageData();
        /** @type {?} */
        const cropData = this.cropper.getCropBoxData();
        /** @type {?} */
        const canvas = this.cropper.getCroppedCanvas();
        /** @type {?} */
        const data = { imageData, cropData };
        /** @type {?} */
        const promise = new Promise(resolve => {
            //
            // Validate base64
            if (base64) {
                //
                // Resolve promise with dataUrl
                return resolve({
                    dataUrl: canvas.toDataURL('image/png')
                });
            }
            canvas.toBlob(blob => resolve({ blob }));
        });
        //
        // Emit export data when promise is ready
        promise.then(res => {
            this.export.emit(Object.assign(data, res));
        });
    }
}
CropperComponent.ɵfac = function CropperComponent_Factory(t) { return new (t || CropperComponent)(); };
CropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropperComponent, selectors: [["angular-cropper"]], viewQuery: function CropperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
    } }, inputs: { cropperOptions: "cropperOptions", imageUrl: "imageUrl", settings: "settings", cropbox: "cropbox", loadImageErrorText: "loadImageErrorText" }, outputs: { export: "export", ready: "ready" }, decls: 6, vars: 3, consts: [[1, "cropper-wrapper"], ["class", "loading-block", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "cropper"], ["alt", "image", 3, "src", "load", "error"], ["image", ""], [1, "loading-block"], [1, "spinner"], [1, "alert", "alert-warning"]], template: function CropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CropperComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CropperComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function CropperComponent_Template_img_load_4_listener($event) { return ctx.imageLoaded($event); })("error", function CropperComponent_Template_img_error_4_listener($event) { return ctx.imageLoadError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [":host{display:block}.cropper img{max-width:100%;max-height:100%;height:auto}.cropper-wrapper{position:relative;min-height:80px}.cropper-wrapper .loading-block{position:absolute;top:0;left:0;width:100%;height:100%}.cropper-wrapper .loading-block .spinner{width:31px;height:31px;margin:0 auto;border:2px solid rgba(97,100,193,.98);border-radius:50%;border-left-color:transparent;border-right-color:transparent;-webkit-animation:425ms linear infinite cssload-spin;position:absolute;top:calc(50% - 15px);left:calc(50% - 15px);animation:425ms linear infinite cssload-spin}@-webkit-keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}/*!\n * Cropper.js v1.4.1\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2018-07-15T09:54:43.167Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:#39f solid 1px;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:' ';display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:' ';display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}"], encapsulation: 2 });
/** @nocollapse */
CropperComponent.ctorParameters = () => [];
CropperComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['image',] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadImageErrorText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropperOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    export: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'angular-cropper',
                template: `<!-- CROPPER WRAPPER -->
<div class="cropper-wrapper">

    <!-- LOADING -->
    <div class="loading-block" *ngIf="isLoading">
        <div class="spinner"></div>
    </div>

    <!-- LOAD ERROR -->
    <div class="alert alert-warning" *ngIf="loadError">{{ loadImageErrorText }}</div>

    <!-- CROPPER -->
    <div class="cropper">
        <img #image alt="image" [src]="imageUrl" (load)="imageLoaded($event)" (error)="imageLoadError($event)" />
    </div>
</div>
`,
                styles: [`:host{display:block}.cropper img{max-width:100%;max-height:100%;height:auto}.cropper-wrapper{position:relative;min-height:80px}.cropper-wrapper .loading-block{position:absolute;top:0;left:0;width:100%;height:100%}.cropper-wrapper .loading-block .spinner{width:31px;height:31px;margin:0 auto;border:2px solid rgba(97,100,193,.98);border-radius:50%;border-left-color:transparent;border-right-color:transparent;-webkit-animation:425ms linear infinite cssload-spin;position:absolute;top:calc(50% - 15px);left:calc(50% - 15px);animation:425ms linear infinite cssload-spin}@-webkit-keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}/*!
 * Cropper.js v1.4.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-07-15T09:54:43.167Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:#39f solid 1px;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:' ';display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:' ';display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { cropperOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], export: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['image']
        }], imageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadImageErrorText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AngularCropperjsModule {
}
AngularCropperjsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularCropperjsModule });
AngularCropperjsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularCropperjsModule_Factory(t) { return new (t || AngularCropperjsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularCropperjsModule, { declarations: function () { return [CropperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [CropperComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularCropperjsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [CropperComponent],
                exports: [CropperComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jcm9wcGVyanMuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNyb3BwZXJqcy9saWIvYW5ndWxhci1jcm9wcGVyanMuc2VydmljZS50cyIsIm5nOi9hbmd1bGFyLWNyb3BwZXJqcy9saWIvY3JvcHBlci9jcm9wcGVyLmNvbXBvbmVudC50cyIsIm5nOi9hbmd1bGFyLWNyb3BwZXJqcy9saWIvYW5ndWxhci1jcm9wcGVyanMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0MsSUFPOUIsaUJBQWlCO0FBQ25CO21EQU5DLFVBQVUsU0FBQyxrQkFDVixVQUFVLEVBQUUsTUFBTSxjQUNuQjt5SkFDSztBQUFDO0FBQW1CO0FBSVg7Ozs7OztnREFBcU87QUFBQztBQUFDO0FBQUk7QUFBa0M7QUFBa0U7QUNUOVY7QUFBeUIsSUErRHJCO0FBQWdCLDhCQVZlLEVBQUU7QUFDckMsc0JBQ3VCLElBQUksWUFBWSxFQUFzQjtBQUM3RCxxQkFBc0IsSUFBSSxZQUFZLEVBQUU7QUFDeEMseUJBQ2dDLElBQUk7QUFDcEMsS0FJcUI7QUFDckI7QUFDTztBQUdMO0FBQ0EsSUFKRSxRQUFRO0FBQ1osS0FBSztBQUNMO0FBQ087QUFDWTtBQUVoQjtBQUNXO0FBQVEsSUFBbEIsV0FBVyxDQUFDLEVBQVM7QUFDekI7QUFDVTtBQUN1QixRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMvQjtBQUVhLFFBQ0wsTUFBTSxLQUFLLHFCQUFHLEVBQUUsQ0FBQyxNQUEwQixFQUFDO0FBQ3BELFFBQVEsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDbEM7QUFDVTtBQUNpQixRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO0FBQUUsWUFBQSxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUNsRjtBQUNVO0FBQ3FCLFFBQ3ZCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7QUFDeEM7QUFDQTtBQUNBLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEM7QUFDYztBQUNvQixZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUNuQztBQUNjO0FBQzJCLFlBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUM5QjtBQUNrQjtBQUNpQixnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFELGFBQWE7QUFDYixTQUFTLENBQUMsQ0FBQztBQUNYO0FBRWEsUUFDTCxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDOUIsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0IsWUFBWSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDcEQsWUFBWSxXQUFXLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUN6QyxTQUFTO0FBQ1Q7QUFDVTtBQUNpQjtBQUNpQixRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDNUMsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksT0FBTyxFQUFFLEtBQUs7QUFDMUIsWUFBWSxRQUFRLEVBQUUsS0FBSztBQUMzQixZQUFZLFFBQVEsRUFBRSxLQUFLO0FBQzNCLFlBQVksUUFBUSxFQUFFLENBQUM7QUFDdkIsWUFBWSxnQkFBZ0IsRUFBRSxJQUFJO0FBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDaEM7QUFDVTtBQUNjLFFBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMxQixZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkMsWUFBWSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUNyQyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDL0QsS0FBSztBQUNMO0FBQ087QUFDZ0I7QUFFcEI7QUFDVztBQUFRLElBQWxCLGNBQWMsQ0FBQyxLQUFVO0FBQzdCO0FBQ1U7QUFDcUIsUUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDOUI7QUFDVTtBQUNvQixRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMvQixLQUFLO0FBQ0w7QUFDTztBQUNhO0FBRWhCO0FBQ1c7QUFBUSxJQUFuQixZQUFZLENBQUMsTUFBWTtBQUM3QjtBQUVhLFFBQ0wsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN0RDtBQUF5QixRQUFqQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZEO0FBQXlCLFFBQWpCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUN2RDtBQUF5QixRQUFqQixNQUFNLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUM3QztBQUVhLFFBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTztBQUMzQztBQUNjO0FBQ2dCLFlBQ2xCLElBQUksTUFBTSxFQUFFO0FBQ3hCO0FBQ2tCO0FBQzZCLGdCQUMvQixPQUFPLE9BQU8sQ0FBQztBQUMvQixvQkFBb0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0FBQzFELGlCQUFpQixDQUFDLENBQUM7QUFDbkIsYUFBYTtBQUNiLFlBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFNBQVMsQ0FBQyxDQUFDO0FBQ1g7QUFDVTtBQUN1QyxRQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFDeEIsWUFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFNBQVMsQ0FBQyxDQUFDO0FBQ1gsS0FBSztBQUNMOzRDQTdLQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFO0dBQWlCLGtCQUMzQixRQUFRLEVBQUU7Ozs7O2tLQWdCYixrQkFDRyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7aW1HQVFtN0csQ0FBQyxrQkFDNzdHLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3hDLHd3Q0FDSztBQUFDO0FBQW1CO0FBRVA7QUFFUixvQkFGTixTQUFTLFNBQUMsT0FBTztBQUFPLHVCQUV4QixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLHFCQUVWLE1BQU07QUFBSyxvQkFDWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBQztBQUFJO0FBRVQ7QUFFRDtBQzVEYjtBQUErQjtrREFJOUIsUUFBUSxTQUFDLGtCQUNOO0dBQU8sRUFBRSxzQkFDTCxZQUFZLGtCQUNmLGtCQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDLGtCQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUM5Qjs7Ozs7Ozs7Ozs7OzswQkFDSztBQUFDO0FBQUM7QUFBSTtBQUNOO0FBQWtFO0FBQUk7QUFBQztBQUFJO0FBQWtDO0FBQWtFO0FBQUk7QUFBQzs7QUZaQSxBQU9BLEFBQUEsQUFMQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDSkEsQUErREEsQUFWQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFLQSxBQUVBLEFBQUEsQUFDQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBNUtBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBZ0JBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFRQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUN4REEsQUFJQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckNyb3BwZXJqc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgQ3JvcHBlciBmcm9tICdjcm9wcGVyanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlQ3JvcHBlclNldHRpbmcge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VDcm9wcGVyUmVzdWx0IHtcbiAgICBpbWFnZURhdGE6IENyb3BwZXIuSW1hZ2VEYXRhO1xuICAgIGNyb3BEYXRhOiBDcm9wcGVyLkNyb3BCb3hEYXRhO1xuICAgIGJsb2I/OiBCbG9iO1xuICAgIGRhdGFVcmw/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYW5ndWxhci1jcm9wcGVyJyxcbiAgICB0ZW1wbGF0ZTogYDwhLS0gQ1JPUFBFUiBXUkFQUEVSIC0tPlxuPGRpdiBjbGFzcz1cImNyb3BwZXItd3JhcHBlclwiPlxuXG4gICAgPCEtLSBMT0FESU5HIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWJsb2NrXCIgKm5nSWY9XCJpc0xvYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gTE9BRCBFUlJPUiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiICpuZ0lmPVwibG9hZEVycm9yXCI+e3sgbG9hZEltYWdlRXJyb3JUZXh0IH19PC9kaXY+XG5cbiAgICA8IS0tIENST1BQRVIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNyb3BwZXJcIj5cbiAgICAgICAgPGltZyAjaW1hZ2UgYWx0PVwiaW1hZ2VcIiBbc3JjXT1cImltYWdlVXJsXCIgKGxvYWQpPVwiaW1hZ2VMb2FkZWQoJGV2ZW50KVwiIChlcnJvcik9XCJpbWFnZUxvYWRFcnJvcigkZXZlbnQpXCIgLz5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30uY3JvcHBlciBpbWd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO2hlaWdodDphdXRvfS5jcm9wcGVyLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDo4MHB4fS5jcm9wcGVyLXdyYXBwZXIgLmxvYWRpbmctYmxvY2t7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmNyb3BwZXItd3JhcHBlciAubG9hZGluZy1ibG9jayAuc3Bpbm5lcnt3aWR0aDozMXB4O2hlaWdodDozMXB4O21hcmdpbjowIGF1dG87Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDk3LDEwMCwxOTMsLjk4KTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXItbGVmdC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1hbmltYXRpb246NDI1bXMgbGluZWFyIGluZmluaXRlIGNzc2xvYWQtc3Bpbjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Y2FsYyg1MCUgLSAxNXB4KTtsZWZ0OmNhbGMoNTAlIC0gMTVweCk7YW5pbWF0aW9uOjQyNW1zIGxpbmVhciBpbmZpbml0ZSBjc3Nsb2FkLXNwaW59QC13ZWJraXQta2V5ZnJhbWVzIGNzc2xvYWQtc3Bpbnt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgY3NzbG9hZC1zcGlue3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LyohXG4gKiBDcm9wcGVyLmpzIHYxLjQuMVxuICogaHR0cHM6Ly9mZW5neXVhbmNoZW4uZ2l0aHViLmlvL2Nyb3BwZXJqc1xuICpcbiAqIENvcHlyaWdodCAyMDE1LXByZXNlbnQgQ2hlbiBGZW5neXVhblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAxOC0wNy0xNVQwOTo1NDo0My4xNjdaXG4gKi8uY3JvcHBlci1jb250YWluZXJ7ZGlyZWN0aW9uOmx0cjtmb250LXNpemU6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uY3JvcHBlci1jb250YWluZXIgaW1ne2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7aW1hZ2Utb3JpZW50YXRpb246MGRlZzttYXgtaGVpZ2h0Om5vbmUhaW1wb3J0YW50O21heC13aWR0aDpub25lIWltcG9ydGFudDttaW4taGVpZ2h0OjAhaW1wb3J0YW50O21pbi13aWR0aDowIWltcG9ydGFudDt3aWR0aDoxMDAlfS5jcm9wcGVyLWNhbnZhcywuY3JvcHBlci1jcm9wLWJveCwuY3JvcHBlci1kcmFnLWJveCwuY3JvcHBlci1tb2RhbCwuY3JvcHBlci13cmFwLWJveHtib3R0b206MDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH0uY3JvcHBlci1jYW52YXMsLmNyb3BwZXItd3JhcC1ib3h7b3ZlcmZsb3c6aGlkZGVufS5jcm9wcGVyLWRyYWctYm94e2JhY2tncm91bmQtY29sb3I6I2ZmZjtvcGFjaXR5OjB9LmNyb3BwZXItbW9kYWx7YmFja2dyb3VuZC1jb2xvcjojMDAwO29wYWNpdHk6LjV9LmNyb3BwZXItdmlldy1ib3h7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTAwJTtvdXRsaW5lOiMzOWYgc29saWQgMXB4O292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlfS5jcm9wcGVyLWRhc2hlZHtib3JkZXI6MCBkYXNoZWQgI2VlZTtkaXNwbGF5OmJsb2NrO29wYWNpdHk6LjU7cG9zaXRpb246YWJzb2x1dGV9LmNyb3BwZXItZGFzaGVkLmRhc2hlZC1oe2JvcmRlci1ib3R0b20td2lkdGg6MXB4O2JvcmRlci10b3Atd2lkdGg6MXB4O2hlaWdodDpjYWxjKDEwMCUgLyAzKTtsZWZ0OjA7dG9wOmNhbGMoMTAwJSAvIDMpO3dpZHRoOjEwMCV9LmNyb3BwZXItZGFzaGVkLmRhc2hlZC12e2JvcmRlci1sZWZ0LXdpZHRoOjFweDtib3JkZXItcmlnaHQtd2lkdGg6MXB4O2hlaWdodDoxMDAlO2xlZnQ6Y2FsYygxMDAlIC8gMyk7dG9wOjA7d2lkdGg6Y2FsYygxMDAlIC8gMyl9LmNyb3BwZXItY2VudGVye2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjA7bGVmdDo1MCU7b3BhY2l0eTouNzU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt3aWR0aDowfS5jcm9wcGVyLWNlbnRlcjphZnRlciwuY3JvcHBlci1jZW50ZXI6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2VlZTtjb250ZW50OicgJztkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlfS5jcm9wcGVyLWNlbnRlcjpiZWZvcmV7aGVpZ2h0OjFweDtsZWZ0Oi0zcHg7dG9wOjA7d2lkdGg6N3B4fS5jcm9wcGVyLWNlbnRlcjphZnRlcntoZWlnaHQ6N3B4O2xlZnQ6MDt0b3A6LTNweDt3aWR0aDoxcHh9LmNyb3BwZXItZmFjZSwuY3JvcHBlci1saW5lLC5jcm9wcGVyLXBvaW50e2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7b3BhY2l0eTouMTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlfS5jcm9wcGVyLWZhY2V7YmFja2dyb3VuZC1jb2xvcjojZmZmO2xlZnQ6MDt0b3A6MH0uY3JvcHBlci1saW5le2JhY2tncm91bmQtY29sb3I6IzM5Zn0uY3JvcHBlci1saW5lLmxpbmUtZXtjdXJzb3I6ZXctcmVzaXplO3JpZ2h0Oi0zcHg7dG9wOjA7d2lkdGg6NXB4fS5jcm9wcGVyLWxpbmUubGluZS1ue2N1cnNvcjpucy1yZXNpemU7aGVpZ2h0OjVweDtsZWZ0OjA7dG9wOi0zcHh9LmNyb3BwZXItbGluZS5saW5lLXd7Y3Vyc29yOmV3LXJlc2l6ZTtsZWZ0Oi0zcHg7dG9wOjA7d2lkdGg6NXB4fS5jcm9wcGVyLWxpbmUubGluZS1ze2JvdHRvbTotM3B4O2N1cnNvcjpucy1yZXNpemU7aGVpZ2h0OjVweDtsZWZ0OjB9LmNyb3BwZXItcG9pbnR7YmFja2dyb3VuZC1jb2xvcjojMzlmO2hlaWdodDo1cHg7b3BhY2l0eTouNzU7d2lkdGg6NXB4fS5jcm9wcGVyLXBvaW50LnBvaW50LWV7Y3Vyc29yOmV3LXJlc2l6ZTttYXJnaW4tdG9wOi0zcHg7cmlnaHQ6LTNweDt0b3A6NTAlfS5jcm9wcGVyLXBvaW50LnBvaW50LW57Y3Vyc29yOm5zLXJlc2l6ZTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotM3B4O3RvcDotM3B4fS5jcm9wcGVyLXBvaW50LnBvaW50LXd7Y3Vyc29yOmV3LXJlc2l6ZTtsZWZ0Oi0zcHg7bWFyZ2luLXRvcDotM3B4O3RvcDo1MCV9LmNyb3BwZXItcG9pbnQucG9pbnQtc3tib3R0b206LTNweDtjdXJzb3I6cy1yZXNpemU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTNweH0uY3JvcHBlci1wb2ludC5wb2ludC1uZXtjdXJzb3I6bmVzdy1yZXNpemU7cmlnaHQ6LTNweDt0b3A6LTNweH0uY3JvcHBlci1wb2ludC5wb2ludC1ud3tjdXJzb3I6bndzZS1yZXNpemU7bGVmdDotM3B4O3RvcDotM3B4fS5jcm9wcGVyLXBvaW50LnBvaW50LXN3e2JvdHRvbTotM3B4O2N1cnNvcjpuZXN3LXJlc2l6ZTtsZWZ0Oi0zcHh9LmNyb3BwZXItcG9pbnQucG9pbnQtc2V7Ym90dG9tOi0zcHg7Y3Vyc29yOm53c2UtcmVzaXplO2hlaWdodDoyMHB4O29wYWNpdHk6MTtyaWdodDotM3B4O3dpZHRoOjIwcHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5jcm9wcGVyLXBvaW50LnBvaW50LXNle2hlaWdodDoxNXB4O3dpZHRoOjE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuY3JvcHBlci1wb2ludC5wb2ludC1zZXtoZWlnaHQ6MTBweDt3aWR0aDoxMHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5jcm9wcGVyLXBvaW50LnBvaW50LXNle2hlaWdodDo1cHg7b3BhY2l0eTouNzU7d2lkdGg6NXB4fX0uY3JvcHBlci1wb2ludC5wb2ludC1zZTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojMzlmO2JvdHRvbTotNTAlO2NvbnRlbnQ6JyAnO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjIwMCU7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi01MCU7d2lkdGg6MjAwJX0uY3JvcHBlci1pbnZpc2libGV7b3BhY2l0eTowfS5jcm9wcGVyLWJne2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUFRTUFBQUFsUFcwaUFBQUFBM05DU1ZRSUNBamI0VS9nQUFBQUJsQk1WRVhNek16Ly8vL1RqUlYyQUFBQUNYQklXWE1BQUFyckFBQUs2d0dDaXcxYUFBQUFISFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JHYVhKbGQyOXlhM01nUTFNMjZMeXlqQUFBQUJGSlJFRlVDSmxqK00vQWdCVmhGLzBQQUg2L0QvSGtEeE9HQUFBQUFFbEZUa1N1UW1DQyl9LmNyb3BwZXItaGlkZXtkaXNwbGF5OmJsb2NrO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjB9LmNyb3BwZXItaGlkZGVue2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmNyb3BwZXItbW92ZXtjdXJzb3I6bW92ZX0uY3JvcHBlci1jcm9we2N1cnNvcjpjcm9zc2hhaXJ9LmNyb3BwZXItZGlzYWJsZWQgLmNyb3BwZXItZHJhZy1ib3gsLmNyb3BwZXItZGlzYWJsZWQgLmNyb3BwZXItZmFjZSwuY3JvcHBlci1kaXNhYmxlZCAuY3JvcHBlci1saW5lLC5jcm9wcGVyLWRpc2FibGVkIC5jcm9wcGVyLXBvaW50e2N1cnNvcjpub3QtYWxsb3dlZH1gXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnaW1hZ2UnKSBpbWFnZTogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIGltYWdlVXJsOiBhbnk7XG4gICAgQElucHV0KCkgc2V0dGluZ3M6IEltYWdlQ3JvcHBlclNldHRpbmc7XG4gICAgQElucHV0KCkgY3JvcGJveDogQ3JvcHBlci5Dcm9wQm94RGF0YTtcbiAgICBASW5wdXQoKSBsb2FkSW1hZ2VFcnJvclRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjcm9wcGVyT3B0aW9uczogYW55ID0ge307XG5cbiAgICBAT3V0cHV0KCkgZXhwb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZUNyb3BwZXJSZXN1bHQ+KCk7XG4gICAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGNyb3BwZXI6IENyb3BwZXI7XG4gICAgcHVibGljIGltYWdlRWxlbWVudDogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwdWJsaWMgbG9hZEVycm9yOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1hZ2UgbG9hZGVkXG4gICAgICogQHBhcmFtIGV2XG4gICAgICovXG4gICAgaW1hZ2VMb2FkZWQoZXY6IEV2ZW50KSB7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVW5zZXQgbG9hZCBlcnJvciBzdGF0ZVxuICAgICAgICB0aGlzLmxvYWRFcnJvciA9IGZhbHNlO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNldHVwIGltYWdlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBldi50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbWFnZUVsZW1lbnQgPSBpbWFnZTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBBZGQgY3Jvc3NPcmlnaW4/XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXJPcHRpb25zLmNoZWNrQ3Jvc3NPcmlnaW4pIGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSW1hZ2Ugb24gcmVhZHkgZXZlbnRcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRW1pdCByZWFkeVxuICAgICAgICAgICAgdGhpcy5yZWFkeS5lbWl0KHRydWUpO1xuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVW5zZXQgbG9hZGluZyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGNyb3Bib3ggZXhpc3RhbmNlXG4gICAgICAgICAgICBpZiAodGhpcy5jcm9wYm94KSB7XG5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFNldCBjcm9wYm94IGRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIuc2V0Q3JvcEJveERhdGEodGhpcy5jcm9wYm94KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2V0dXAgYXNwZWN0IHJhdGlvIGFjY29yZGluZyB0byBzZXR0aW5nc1xuICAgICAgICBsZXQgYXNwZWN0UmF0aW8gPSBOYU47XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2V0IGNyb3Agb3B0aW9uc1xuICAgICAgICAvLyBleHRlbmQgZGVmYXVsdCB3aXRoIGN1c3RvbSBjb25maWdcbiAgICAgICAgdGhpcy5jcm9wcGVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICBtb3ZhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHpvb21hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdNb2RlOiAxLFxuICAgICAgICAgICAgY2hlY2tDcm9zc09yaWdpbjogdHJ1ZVxuICAgICAgICB9LCB0aGlzLmNyb3BwZXJPcHRpb25zKTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBTZXQgY3JvcHBlcmpzXG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcm9wcGVyID0gbmV3IENyb3BwZXIoaW1hZ2UsIHRoaXMuY3JvcHBlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltYWdlIGxvYWQgZXJyb3JcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBpbWFnZUxvYWRFcnJvcihldmVudDogYW55KSB7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2V0IGxvYWQgZXJyb3Igc3RhdGVcbiAgICAgICAgdGhpcy5sb2FkRXJyb3IgPSB0cnVlO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFVuc2V0IGxvYWRpbmcgc3RhdGVcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBvcnQgY2FudmFzXG4gICAgICogQHBhcmFtIGJhc2U2NFxuICAgICAqL1xuICAgIGV4cG9ydENhbnZhcyhiYXNlNjQ/OiBhbnkpIHtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBHZXQgYW5kIHNldCBpbWFnZSwgY3JvcCBhbmQgY2FudmFzIGRhdGFcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gdGhpcy5jcm9wcGVyLmdldEltYWdlRGF0YSgpO1xuICAgICAgICBjb25zdCBjcm9wRGF0YSA9IHRoaXMuY3JvcHBlci5nZXRDcm9wQm94RGF0YSgpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcygpO1xuICAgICAgICBjb25zdCBkYXRhID0geyBpbWFnZURhdGEsIGNyb3BEYXRhIH07XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQ3JlYXRlIHByb21pc2UgdG8gcmVzb2x2ZSBjYW52YXMgZGF0YVxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBiYXNlNjRcbiAgICAgICAgICAgIGlmIChiYXNlNjQpIHtcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBwcm9taXNlIHdpdGggZGF0YVVybFxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVVybDogY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiByZXNvbHZlKHsgYmxvYiB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEVtaXQgZXhwb3J0IGRhdGEgd2hlbiBwcm9taXNlIGlzIHJlYWR5XG4gICAgICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5leHBvcnQuZW1pdChPYmplY3QuYXNzaWduKGRhdGEsIHJlcykpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3JvcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY3JvcHBlci9jcm9wcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtDcm9wcGVyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQ3JvcHBlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckNyb3BwZXJqc01vZHVsZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.11
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-02-17T11:53:27.572Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        } // The third parameter is required for avoiding side-effect (#682)


        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

}]);
//# sourceMappingURL=default~views-pages-catalogo-catalogo-module~views-pages-cliente-cliente-module.js.map