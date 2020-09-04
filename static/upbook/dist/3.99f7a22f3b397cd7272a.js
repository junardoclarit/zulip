(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@ctrl/ngx-emoji-mart/fesm5/ctrl-ngx-emoji-mart.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-emoji-mart/fesm5/ctrl-ngx-emoji-mart.js ***!
  \************************************************************************/
/*! exports provided: AnchorsComponent, CategoryComponent, EmojiFrequentlyService, EmojiSearch, PickerComponent, PickerModule, PreviewComponent, SearchComponent, SkinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorsComponent", function() { return AnchorsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiFrequentlyService", function() { return EmojiFrequentlyService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiSearch", function() { return EmojiSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerComponent", function() { return PickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerModule", function() { return PickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkinComponent", function() { return SkinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ "./node_modules/@ctrl/ngx-emoji-mart/ngx-emoji/fesm5/ctrl-ngx-emoji-mart-ngx-emoji.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnchorsComponent = /** @class */ /*@__PURE__*/ (function () {
    function AnchorsComponent() {
        this.categories = [];
        this.icons = {};
        this.anchorClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    /**
     * @param {?} idx
     * @param {?} cat
     * @return {?}
     */
    AnchorsComponent.prototype.trackByFn = /**
     * @param {?} idx
     * @param {?} cat
     * @return {?}
     */
        function (idx, cat) {
            return cat.id;
        };
    /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    AnchorsComponent.prototype.handleClick = /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
        function ($event, index) {
            this.anchorClick.emit({
                category: this.categories[index],
                index: index,
            });
        };
    return AnchorsComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiFrequentlyService = /** @class */ /*@__PURE__*/ (function () {
    function EmojiFrequentlyService() {
        this.NAMESPACE = 'emoji-mart';
        this.frequently = null;
        this.defaults = {};
        this.initialized = false;
        this.DEFAULTS = [
            '+1',
            'grinning',
            'kissing_heart',
            'heart_eyes',
            'laughing',
            'stuck_out_tongue_winking_eye',
            'sweat_smile',
            'joy',
            'scream',
            'disappointed',
            'unamused',
            'weary',
            'sob',
            'sunglasses',
            'heart',
            'poop',
        ];
    }
    /**
     * @return {?}
     */
    EmojiFrequentlyService.prototype.init = /**
     * @return {?}
     */
        function () {
            this.frequently = JSON.parse(localStorage.getItem(this.NAMESPACE + ".frequently") || 'null');
            this.initialized = true;
        };
    /**
     * @param {?} emoji
     * @return {?}
     */
    EmojiFrequentlyService.prototype.add = /**
     * @param {?} emoji
     * @return {?}
     */
        function (emoji) {
            if (!this.initialized) {
                this.init();
            }
            if (!this.frequently) {
                this.frequently = this.defaults;
            }
            if (!this.frequently[emoji.id]) {
                this.frequently[emoji.id] = 0;
            }
            this.frequently[emoji.id] += 1;
            localStorage.setItem(this.NAMESPACE + ".last", emoji.id);
            localStorage.setItem(this.NAMESPACE + ".frequently", JSON.stringify(this.frequently));
        };
    /**
     * @param {?} perLine
     * @param {?} totalLines
     * @return {?}
     */
    EmojiFrequentlyService.prototype.get = /**
     * @param {?} perLine
     * @param {?} totalLines
     * @return {?}
     */
        function (perLine, totalLines) {
            var _this = this;
            if (!this.initialized) {
                this.init();
            }
            if (this.frequently === null) {
                this.defaults = {};
                /** @type {?} */
                var result = [];
                for (var i = 0; i < perLine; i++) {
                    this.defaults[this.DEFAULTS[i]] = perLine - i;
                    result.push(this.DEFAULTS[i]);
                }
                return result;
            }
            /** @type {?} */
            var quantity = perLine * totalLines;
            /** @type {?} */
            var frequentlyKeys = Object.keys(this.frequently);
            /** @type {?} */
            var sorted = frequentlyKeys
                .sort(function (a, b) { return ( /** @type {?} */(_this.frequently))[a] - ( /** @type {?} */(_this.frequently))[b]; })
                .reverse();
            /** @type {?} */
            var sliced = sorted.slice(0, quantity);
            /** @type {?} */
            var last = localStorage.getItem(this.NAMESPACE + ".last");
            if (last && !sliced.includes(last)) {
                sliced.pop();
                sliced.push(last);
            }
            return sliced;
        };
    /** @nocollapse */ EmojiFrequentlyService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function EmojiFrequentlyService_Factory() { return new EmojiFrequentlyService(); }, token: EmojiFrequentlyService, providedIn: "root" });
    return EmojiFrequentlyService;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryComponent = /** @class */ /*@__PURE__*/ (function () {
    function CategoryComponent(ref, emojiService, frequently) {
        this.ref = ref;
        this.emojiService = emojiService;
        this.frequently = frequently;
        this.hasStickyPosition = true;
        this.name = '';
        this.perLine = 9;
        this.totalFrequentLines = 4;
        this.recent = [];
        this.custom = [];
        this.hideObsolete = true;
        this.emojiOver = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.emojiLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.emojiClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.containerStyles = {};
        this.labelStyles = {};
        this.labelSpanStyles = {};
        this.margin = 0;
        this.minMargin = 0;
        this.maxMargin = 0;
        this.top = 0;
    }
    /**
     * @return {?}
     */
    CategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            this.emojis = this.getEmojis();
            if (!this.emojis) {
                this.containerStyles = { display: 'none' };
            }
            if (!this.hasStickyPosition) {
                this.labelStyles = { height: 28 };
                this.labelSpanStyles = { position: 'absolute' };
            }
        };
    /**
     * @return {?}
     */
    CategoryComponent.prototype.memoizeSize = /**
     * @return {?}
     */
        function () {
            /** @type {?} */
            var parent = this.container.nativeElement.parentNode.parentNode;
            var _a = this.container.nativeElement.getBoundingClientRect(), top = _a.top, height = _a.height;
            /** @type {?} */
            var parentTop = parent.getBoundingClientRect().top;
            /** @type {?} */
            var labelHeight = this.label.nativeElement.getBoundingClientRect().height;
            this.top = top - parentTop + parent.scrollTop;
            if (height === 0) {
                this.maxMargin = 0;
            }
            else {
                this.maxMargin = height - labelHeight;
            }
        };
    /**
     * @param {?} scrollTop
     * @return {?}
     */
    CategoryComponent.prototype.handleScroll = /**
     * @param {?} scrollTop
     * @return {?}
     */
        function (scrollTop) {
            /** @type {?} */
            var margin = scrollTop - this.top;
            margin = margin < this.minMargin ? this.minMargin : margin;
            margin = margin > this.maxMargin ? this.maxMargin : margin;
            if (margin === this.margin) {
                return false;
            }
            if (!this.hasStickyPosition) {
                this.label.nativeElement.style.top = margin + "px";
            }
            this.margin = margin;
            return true;
        };
    /**
     * @return {?}
     */
    CategoryComponent.prototype.getEmojis = /**
     * @return {?}
     */
        function () {
            var _this = this;
            if (this.name === 'Recent') {
                /** @type {?} */
                var frequentlyUsed = this.recent || this.frequently.get(this.perLine, this.totalFrequentLines);
                if (!frequentlyUsed || !frequentlyUsed.length) {
                    frequentlyUsed = this.frequently.get(this.perLine, this.totalFrequentLines);
                }
                if (frequentlyUsed.length) {
                    this.emojis = frequentlyUsed
                        .map(function (id) {
                        /** @type {?} */
                        var emoji = _this.custom.filter(function (e) { return e.id === id; })[0];
                        if (emoji) {
                            return emoji;
                        }
                        return id;
                    })
                        .filter(function (id) { return !!_this.emojiService.getData(id); });
                }
                if ((!this.emojis || this.emojis.length === 0) && frequentlyUsed.length > 0) {
                    return null;
                }
            }
            if (this.emojis) {
                this.emojis = this.emojis.slice(0);
            }
            return this.emojis;
        };
    /**
     * @param {?} display
     * @return {?}
     */
    CategoryComponent.prototype.updateDisplay = /**
     * @param {?} display
     * @return {?}
     */
        function (display) {
            this.containerStyles.display = display;
            this.getEmojis();
            this.ref.detectChanges();
        };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CategoryComponent.prototype.trackById = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
        function (index, item) {
            return item;
        };
    return CategoryComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} arr
 * @return {?}
 */
function uniq(arr) {
    return arr.reduce(function (acc, item) {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function intersect(a, b) {
    /** @type {?} */
    var uniqA = uniq(a);
    /** @type {?} */
    var uniqB = uniq(b);
    return uniqA.filter(function (item) { return uniqB.indexOf(item) >= 0; });
}
// https://github.com/sonicdoe/measure-scrollbar
/**
 * @return {?}
 */
function measureScrollbar() {
    if (typeof document === 'undefined') {
        return 0;
    }
    /** @type {?} */
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    document.body.appendChild(div);
    /** @type {?} */
    var scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiSearch = /** @class */ /*@__PURE__*/ (function () {
    function EmojiSearch(emojiService) {
        var e_1, _a;
        var _this = this;
        this.emojiService = emojiService;
        this.originalPool = {};
        this.index = {};
        this.emojisList = {};
        this.emoticonsList = {};
        this.emojiSearch = {};
        var _loop_1 = function (emojiData) {
            var shortNames = emojiData.shortNames, emoticons = emojiData.emoticons;
            /** @type {?} */
            var id = shortNames[0];
            emoticons.forEach(function (emoticon) {
                if (_this.emoticonsList[emoticon]) {
                    return;
                }
                _this.emoticonsList[emoticon] = id;
            });
            this_1.emojisList[id] = this_1.emojiService.getSanitizedData(id);
            this_1.originalPool[id] = emojiData;
        };
        var this_1 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.emojiService.emojis), _c = _b.next(); !_c.done; _c = _b.next()) {
                var emojiData = _c.value;
                _loop_1(emojiData);
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return))
                    _a.call(_b);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
    }
    /**
     * @param {?} custom
     * @param {?} pool
     * @return {?}
     */
    EmojiSearch.prototype.addCustomToPool = /**
     * @param {?} custom
     * @param {?} pool
     * @return {?}
     */
        function (custom, pool) {
            var _this = this;
            custom.forEach(function (emoji) {
                /** @type {?} */
                var emojiId = emoji.id || emoji.shortNames[0];
                if (emojiId && !pool[emojiId]) {
                    pool[emojiId] = _this.emojiService.getData(emoji);
                    _this.emojisList[emojiId] = _this.emojiService.getSanitizedData(emoji);
                }
            });
        };
    /**
     * @param {?} value
     * @param {?=} emojisToShowFilter
     * @param {?=} maxResults
     * @param {?=} include
     * @param {?=} exclude
     * @param {?=} custom
     * @return {?}
     */
    EmojiSearch.prototype.search = /**
     * @param {?} value
     * @param {?=} emojisToShowFilter
     * @param {?=} maxResults
     * @param {?=} include
     * @param {?=} exclude
     * @param {?=} custom
     * @return {?}
     */
        function (value, emojisToShowFilter, maxResults, include, exclude, custom) {
            var _this = this;
            if (maxResults === void 0) {
                maxResults = 75;
            }
            if (include === void 0) {
                include = [];
            }
            if (exclude === void 0) {
                exclude = [];
            }
            if (custom === void 0) {
                custom = [];
            }
            this.addCustomToPool(custom, this.originalPool);
            /** @type {?} */
            var results;
            /** @type {?} */
            var pool = this.originalPool;
            if (value.length) {
                if (value === '-' || value === '-1') {
                    return [this.emojisList['-1']];
                }
                /** @type {?} */
                var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
                /** @type {?} */
                var allResults = [];
                if (values.length > 2) {
                    values = [values[0], values[1]];
                }
                if (include.length || exclude.length) {
                    pool = {};
                    _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__["categories"].forEach(function (category) {
                        /** @type {?} */
                        var isIncluded = include && include.length
                            ? include.indexOf(category.id) > -1
                            : true;
                        /** @type {?} */
                        var isExcluded = exclude && exclude.length
                            ? exclude.indexOf(category.id) > -1
                            : false;
                        if (!isIncluded || isExcluded) {
                            return;
                        }
                        ( /** @type {?} */(category.emojis)).forEach(function (emojiId) { return (pool[emojiId] = _this.emojiService.names[emojiId]); });
                    });
                    if (custom.length) {
                        /** @type {?} */
                        var customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
                        /** @type {?} */
                        var customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;
                        if (customIsIncluded && !customIsExcluded) {
                            this.addCustomToPool(custom, pool);
                        }
                    }
                }
                allResults = values
                    .map(function (v) {
                    /** @type {?} */
                    var aPool = pool;
                    /** @type {?} */
                    var aIndex = _this.index;
                    /** @type {?} */
                    var length = 0;
                    var _loop_2 = function (charIndex) {
                        var e_2, _a;
                        /** @type {?} */
                        var char = v[charIndex];
                        length++;
                        if (!aIndex[char]) {
                            aIndex[char] = {};
                        }
                        aIndex = aIndex[char];
                        if (!aIndex.results) {
                            /** @type {?} */
                            var scores_1 = {};
                            aIndex.results = [];
                            aIndex.pool = {};
                            try {
                                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(aPool)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var id = _c.value;
                                    /** @type {?} */
                                    var emoji = aPool[id];
                                    if (!_this.emojiSearch[id]) {
                                        _this.emojiSearch[id] = _this.buildSearch(emoji.short_names, emoji.name, emoji.keywords, emoji.emoticons);
                                    }
                                    /** @type {?} */
                                    var query = _this.emojiSearch[id];
                                    /** @type {?} */
                                    var sub = v.substr(0, length);
                                    /** @type {?} */
                                    var subIndex = query.indexOf(sub);
                                    if (subIndex !== -1) {
                                        /** @type {?} */
                                        var score = subIndex + 1;
                                        if (sub === id) {
                                            score = 0;
                                        }
                                        aIndex.results.push(_this.emojisList[id]);
                                        aIndex.pool[id] = emoji;
                                        scores_1[id] = score;
                                    }
                                }
                            }
                            catch (e_2_1) {
                                e_2 = { error: e_2_1 };
                            }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return))
                                        _a.call(_b);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                            }
                            aIndex.results.sort(function (a, b) {
                                /** @type {?} */
                                var aScore = scores_1[a.id];
                                /** @type {?} */
                                var bScore = scores_1[b.id];
                                return aScore - bScore;
                            });
                        }
                        aPool = aIndex.pool;
                    };
                    for (var charIndex = 0; charIndex < v.length; charIndex++) {
                        _loop_2(charIndex);
                    }
                    return aIndex.results;
                })
                    .filter(function (a) { return a; });
                if (allResults.length > 1) {
                    results = intersect.apply(null, ( /** @type {?} */(allResults)));
                }
                else if (allResults.length) {
                    results = allResults[0];
                }
                else {
                    results = [];
                }
            }
            if (results) {
                if (emojisToShowFilter) {
                    results = results.filter(function (result) {
                        return emojisToShowFilter(_this.emojiService.names[result.id]);
                    });
                }
                if (results && results.length > maxResults) {
                    results = results.slice(0, maxResults);
                }
            }
            return results || null;
        };
    /**
     * @param {?} short_names
     * @param {?} name
     * @param {?} keywords
     * @param {?} emoticons
     * @return {?}
     */
    EmojiSearch.prototype.buildSearch = /**
     * @param {?} short_names
     * @param {?} name
     * @param {?} keywords
     * @param {?} emoticons
     * @return {?}
     */
        function (short_names, name, keywords, emoticons) {
            /** @type {?} */
            var search = [];
            /** @type {?} */
            var addToSearch = function (strings, split) {
                if (!strings) {
                    return;
                }
                (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
                    (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
                        s = s.toLowerCase();
                        if (!search.includes(s)) {
                            search.push(s);
                        }
                    });
                });
            };
            addToSearch(short_names, true);
            addToSearch(name, true);
            addToSearch(keywords, false);
            addToSearch(emoticons, false);
            return search.join(',');
        };
    /** @nocollapse */ EmojiSearch.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function EmojiSearch_Factory() { return new EmojiSearch(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__["EmojiService"])); }, token: EmojiSearch, providedIn: "root" });
    return EmojiSearch;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PreviewComponent = /** @class */ /*@__PURE__*/ (function () {
    function PreviewComponent(ref, emojiService) {
        this.ref = ref;
        this.emojiService = emojiService;
        this.skinChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.emojiData = {};
    }
    /**
     * @return {?}
     */
    PreviewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
        function () {
            if (!this.emoji) {
                return;
            }
            this.emojiData = ( /** @type {?} */(this.emojiService.getData(this.emoji, this.emojiSkin, this.emojiSet)));
            /** @type {?} */
            var knownEmoticons = [];
            /** @type {?} */
            var listedEmoticons = [];
            /** @type {?} */
            var emoitcons = this.emojiData.emoticons || [];
            emoitcons.forEach(function (emoticon) {
                if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
                    return;
                }
                knownEmoticons.push(emoticon.toLowerCase());
                listedEmoticons.push(emoticon);
            });
            this.listedEmoticons = listedEmoticons;
        };
    return PreviewComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchComponent = /** @class */ /*@__PURE__*/ (function () {
    function SearchComponent(emojiSearch) {
        this.emojiSearch = emojiSearch;
        this.maxResults = 75;
        this.autoFocus = false;
        this.include = [];
        this.exclude = [];
        this.custom = [];
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.enterKey = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.isSearching = false;
        this.query = '';
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            this.icon = ( /** @type {?} */(this.icons)).search;
        };
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
        function () {
            if (this.autoFocus) {
                this.inputRef.nativeElement.focus();
            }
        };
    /**
     * @return {?}
     */
    SearchComponent.prototype.clear = /**
     * @return {?}
     */
        function () {
            this.query = '';
            this.handleSearch('');
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchComponent.prototype.handleEnterKey = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            this.enterKey.emit($event);
            $event.preventDefault();
        };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchComponent.prototype.handleSearch = /**
     * @param {?} value
     * @return {?}
     */
        function (value) {
            if (value === '') {
                this.icon = ( /** @type {?} */(this.icons)).search;
                this.isSearching = false;
            }
            else {
                this.icon = ( /** @type {?} */(this.icons)).delete;
                this.isSearching = true;
            }
            this.search.emit(this.emojiSearch.search(this.query, this.emojisToShowFilter, this.maxResults, this.include, this.exclude, this.custom));
        };
    /**
     * @return {?}
     */
    SearchComponent.prototype.handleChange = /**
     * @return {?}
     */
        function () {
            this.handleSearch(this.query);
        };
    return SearchComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable max-line-length */
/** @type {?} */
var categories$1 = {
    activity: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m10 11h-5c.3-2.5 1.3-4.8 2-6.1a10 10 0 0 1 3 6.1m-9 0V2a10 10 0 0 1 4.4 1.6A18 18 0 0 0 15 11h-2zm-2 0H9a18 18 0 0 0-2.4-7.4A10 10 0 0 1 11 2.1V11zm0 2v9a10 10 0 0 1-4.4-1.6A18 18 0 0 0 9 13h2zm4 0a18 18 0 0 0 2.4 7.4 10 10 0 0 1-4.4 1.5V13h2zM5 4.9c.7 1.3 1.7 3.6 2 6.1H2a10 10 0 0 1 3-6.1M2 13h5c-.3 2.5-1.3 4.8-2 6.1A10 10 0 0 1 2 13m17 6.1c-.7-1.3-1.7-3.6-2-6.1h5a10 10 0 0 1-3 6.1",
    custom: "M10 1h3v21h-3zm10.186 4l1.5 2.598L3.5 18.098 2 15.5zM2 7.598L3.5 5l18.186 10.5-1.5 2.598z",
    flags: "M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z",
    foods: "M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 0 0 0-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 0 0-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9 0-6 4.5-6 5-6 2 0 2.5.4 3.4 1.2l.3.3a2 2 0 0 0 2.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9",
    nature: "M15.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.43-8h-.02c-.97 0-2.14.79-3.02 1.5A13.88 13.88 0 0 0 12 .99c-1.28 0-2.62.13-3.87.51C7.24.8 6.07 0 5.09 0h-.02C3.35 0 .07 2.67 0 7.03c-.04 2.47.28 4.23 1.04 5 .26.27.88.69 1.3.9.19 3.17.92 5.23 2.53 6.37.9.64 2.19.95 3.2 1.1-.03.2-.07.4-.07.6 0 1.77 2.35 3 4 3s4-1.23 4-3c0-.2-.04-.4-.07-.59 2.57-.38 5.43-1.87 5.92-7.58.4-.22.89-.57 1.1-.8.77-.76 1.09-2.52 1.05-5C23.93 2.67 20.65 0 18.93 0M3.23 9.13c-.24.29-.84 1.16-.9 1.24A9.67 9.67 0 0 1 2 7.08c.05-3.28 2.48-4.97 3.1-5.03.25.02.72.27 1.26.65A7.95 7.95 0 0 0 4 7.82c-.14.55-.4.86-.79 1.31M12 22c-.9 0-1.95-.7-2-1 0-.65.47-1.24 1-1.6v.6a1 1 0 1 0 2 0v-.6c.52.36 1 .95 1 1.6-.05.3-1.1 1-2 1m3-3.48v.02a4.75 4.75 0 0 0-1.26-1.02c1.09-.52 2.24-1.33 2.24-2.22 0-1.84-1.78-2.2-3.98-2.2s-3.98.36-3.98 2.2c0 .89 1.15 1.7 2.24 2.22A4.8 4.8 0 0 0 9 18.54v-.03a6.1 6.1 0 0 1-2.97-.84c-1.3-.92-1.84-3.04-1.86-6.48l.03-.04c.5-.82 1.49-1.45 1.8-3.1C6 6 7.36 4.42 8.36 3.53c1.01-.35 2.2-.53 3.59-.53 1.45 0 2.68.2 3.73.57 1 .9 2.32 2.46 2.32 4.48.31 1.65 1.3 2.27 1.8 3.1l.1.18c-.06 5.97-1.95 7.01-4.9 7.19m6.63-8.2l-.11-.2a7.59 7.59 0 0 0-.74-.98 3.02 3.02 0 0 1-.79-1.32 7.93 7.93 0 0 0-2.35-5.12c.53-.38 1-.63 1.26-.65.64.07 3.05 1.77 3.1 5.03.02 1.81-.35 3.22-.37 3.24",
    objects: "M12 0a9 9 0 0 0-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0 0 12 0zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM9 17.5a9 9 0 0 0 6 0v.8a7 7 0 0 1-3 .7 7 7 0 0 1-3-.7v-.8zm.2 3a8.9 8.9 0 0 0 2.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5zm5.5-8.1c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 0 0 7 9a1 1 0 0 1 0-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 1 1 0 2c-.2 0-.3.5-.3.7a6.5 6.5 0 0 1-.3 1c-.5 1-.8 1.7-1.7 1.7",
    people: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1 0 12 0",
    places: "M6.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m5-5.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7A3 3 0 0 0 16.8 2H7.2a3 3 0 0 0-2.8 2.3L3.6 6H3a2 2 0 0 0-2 2c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 0 0-1.4 2l.7 7.6a1 1 0 0 0 1 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h1.1a1 1 0 0 0 1-.9l.7-7.5a2 2 0 0 0-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7l1.6-4.1zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4-.7 6.6z",
    recent: "M13 4h-2v7H9v2h2v2h2v-2h4v-2h-4zm-1-4a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20",
    symbols: "M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-2.99a.5.5 0 0 1 0 .99c-.28 0-.5-.22-.5-.5s.22-.49.5-.49m6 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 2.99a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 .01.5.5 0 0 1-.5.49m.5-9l-9 9 1.51 1.5 9-9zm-5-2c2.2 0 4-1.12 4-2.5V2s.98-.16 1.5.95C23 4.05 23 6 23 6s1-1.12 1-3.13C24-.02 21 0 21 0h-2v6.35A5.85 5.85 0 0 0 17 6c-2.2 0-4 1.12-4 2.5s1.8 2.5 4 2.5m-6.7 9.48L8.82 18.9a47.54 47.54 0 0 1-1.44 1.13c-.3-.3-.99-1.02-2.04-2.19.9-.83 1.47-1.46 1.72-1.89s.38-.87.38-1.33c0-.6-.27-1.18-.82-1.76-.54-.58-1.33-.87-2.35-.87-1 0-1.79.29-2.34.87-.56.6-.83 1.18-.83 1.79 0 .81.42 1.75 1.25 2.8a6.57 6.57 0 0 0-1.8 1.79 3.46 3.46 0 0 0-.51 1.83c0 .86.3 1.56.92 2.1a3.5 3.5 0 0 0 2.42.83c1.17 0 2.44-.38 3.81-1.14L8.23 24h2.82l-2.09-2.38 1.34-1.14zM3.56 14.1a1.02 1.02 0 0 1 .73-.28c.31 0 .56.08.75.25a.85.85 0 0 1 .28.66c0 .52-.42 1.11-1.26 1.78-.53-.65-.8-1.23-.8-1.74a.9.9 0 0 1 .3-.67m.18 7.9c-.43 0-.78-.12-1.06-.35-.28-.23-.41-.49-.41-.76 0-.6.5-1.3 1.52-2.09a31.23 31.23 0 0 0 2.25 2.44c-.92.5-1.69.76-2.3.76",
};
/** @type {?} */
var search = {
    search: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
    delete: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var I18N = {
    search: 'Search',
    notfound: 'No Emoji Found',
    categories: {
        search: 'Search Results',
        recent: 'Frequently Used',
        people: 'Smileys & People',
        nature: 'Animals & Nature',
        foods: 'Food & Drink',
        activity: 'Activity',
        places: 'Travel & Places',
        objects: 'Objects',
        symbols: 'Symbols',
        flags: 'Flags',
        custom: 'Custom',
    },
};
var PickerComponent = /** @class */ /*@__PURE__*/ (function () {
    function PickerComponent(ref, frequently) {
        var _this = this;
        this.ref = ref;
        this.frequently = frequently;
        this.perLine = 9;
        this.totalFrequentLines = 4;
        this.i18n = {};
        this.style = {};
        this.title = 'Emoji Mart™';
        this.emoji = 'department_store';
        this.color = '#ae65c5';
        this.hideObsolete = true;
        /**
         * all categories shown
         */
        this.categories = [];
        /**
         * used to temporarily draw categories
         */
        this.activeCategories = [];
        this.set = 'apple';
        this.skin = 1;
        /**
         * Renders the native unicode emoji
         */
        this.isNative = false;
        this.emojiSize = 24;
        this.sheetSize = 64;
        this.showPreview = true;
        this.emojiTooltip = false;
        this.autoFocus = false;
        this.custom = [];
        this.hideRecent = true;
        this.notFoundEmoji = 'sleuth_or_spy';
        this.categoriesIcons = categories$1;
        this.searchIcons = search;
        this.emojiClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.emojiSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.skinChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.scrollHeight = 0;
        this.clientHeight = 0;
        this.firstRender = true;
        this.NAMESPACE = 'emoji-mart';
        this.measureScrollbar = 0;
        this.RECENT_CATEGORY = {
            id: 'recent',
            name: 'Recent',
            emojis: null,
        };
        this.SEARCH_CATEGORY = {
            id: 'search',
            name: 'Search',
            emojis: null,
            anchor: false,
        };
        this.CUSTOM_CATEGORY = {
            id: 'custom',
            name: 'Custom',
            emojis: [],
        };
        this.backgroundImageFn = function (set, sheetSize) {
            return "https://unpkg.com/emoji-datasource-" + _this.set + "@4.0.4/img/" + _this.set + "/sheets-256/" + _this.sheetSize + ".png";
        };
    }
    /**
     * @return {?}
     */
    PickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            var _this = this;
            var e_1, _a;
            // measure scroll
            this.measureScrollbar = measureScrollbar();
            this.i18n = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, I18N, this.i18n);
            this.i18n.categories = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, I18N.categories, this.i18n.categories);
            this.skin =
                JSON.parse(localStorage.getItem(this.NAMESPACE + ".skin") || 'null') ||
                    this.skin;
            /** @type {?} */
            var allCategories = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__["categories"]);
            if (this.custom.length > 0) {
                this.CUSTOM_CATEGORY.emojis = this.custom.map(function (emoji) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emoji, { id: emoji.shortNames[0], custom: true });
                });
                allCategories.push(this.CUSTOM_CATEGORY);
            }
            if (this.include !== undefined) {
                allCategories.sort(function (a, b) {
                    if (( /** @type {?} */(_this.include)).indexOf(a.id) > ( /** @type {?} */(_this.include)).indexOf(b.id)) {
                        return 1;
                    }
                    return -1;
                });
            }
            try {
                for (var allCategories_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allCategories), allCategories_1_1 = allCategories_1.next(); !allCategories_1_1.done; allCategories_1_1 = allCategories_1.next()) {
                    var category = allCategories_1_1.value;
                    /** @type {?} */
                    var isIncluded = this.include && this.include.length
                        ? this.include.indexOf(category.id) > -1
                        : true;
                    /** @type {?} */
                    var isExcluded = this.exclude && this.exclude.length
                        ? this.exclude.indexOf(category.id) > -1
                        : false;
                    if (!isIncluded || isExcluded) {
                        continue;
                    }
                    if (this.emojisToShowFilter) {
                        /** @type {?} */
                        var newEmojis = [];
                        var emojis = category.emojis;
                        for (var emojiIndex = 0; emojiIndex < ( /** @type {?} */(emojis)).length; emojiIndex++) {
                            /** @type {?} */
                            var emoji = ( /** @type {?} */(emojis))[emojiIndex];
                            if (this.emojisToShowFilter(emoji)) {
                                newEmojis.push(emoji);
                            }
                        }
                        if (newEmojis.length) {
                            /** @type {?} */
                            var newCategory = {
                                emojis: newEmojis,
                                name: category.name,
                                id: category.id,
                            };
                            this.categories.push(newCategory);
                        }
                    }
                    else {
                        this.categories.push(category);
                    }
                    this.categoriesIcons = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, categories$1, this.categoriesIcons);
                    this.searchIcons = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, search, this.searchIcons);
                }
            }
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (allCategories_1_1 && !allCategories_1_1.done && (_a = allCategories_1.return))
                        _a.call(allCategories_1);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
            }
            /** @type {?} */
            var includeRecent = this.include && this.include.length
                ? this.include.indexOf(this.RECENT_CATEGORY.id) > -1
                : true;
            /** @type {?} */
            var excludeRecent = this.exclude && this.exclude.length
                ? this.exclude.indexOf(this.RECENT_CATEGORY.id) > -1
                : false;
            if (includeRecent && !excludeRecent) {
                this.hideRecent = false;
                this.categories.unshift(this.RECENT_CATEGORY);
            }
            if (this.categories[0]) {
                this.categories[0].first = true;
            }
            this.categories.unshift(this.SEARCH_CATEGORY);
            this.selected = this.categories.filter(function (category) { return category.first; })[0].name;
            this.activeCategories = this.categories.slice(0, 3);
            setTimeout(function () {
                _this.activeCategories = _this.categories;
                _this.ref.markForCheck();
                setTimeout(function () { return _this.updateCategoriesSize(); });
            });
        };
    /**
     * @return {?}
     */
    PickerComponent.prototype.updateCategoriesSize = /**
     * @return {?}
     */
        function () {
            this.categoryRefs.forEach(function (component) { return component.memoizeSize(); });
            if (this.scrollRef) {
                /** @type {?} */
                var target = this.scrollRef.nativeElement;
                this.scrollHeight = target.scrollHeight;
                this.clientHeight = target.clientHeight;
            }
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    PickerComponent.prototype.handleAnchorClick = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            this.updateCategoriesSize();
            /** @type {?} */
            var component = this.categoryRefs.find(function (n) { return n.id === $event.category.id; });
            if (this.SEARCH_CATEGORY.emojis) {
                this.handleSearch(null);
                this.searchRef.clear();
            }
            if (component) {
                var top_1 = component.top;
                if ($event.category.first) {
                    top_1 = 0;
                }
                else {
                    top_1 += 1;
                }
                this.scrollRef.nativeElement.scrollTop = top_1;
            }
            this.selected = $event.category.name;
            this.nextScroll = $event.category.name;
        };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    PickerComponent.prototype.categoryTrack = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
        function (index, item) {
            return item.id;
        };
    /**
     * @return {?}
     */
    PickerComponent.prototype.handleScroll = /**
     * @return {?}
     */
        function () {
            var e_2, _a;
            if (this.nextScroll) {
                this.selected = this.nextScroll;
                this.nextScroll = undefined;
                return;
            }
            if (!this.scrollRef) {
                return;
            }
            /** @type {?} */
            var activeCategory = null;
            if (this.SEARCH_CATEGORY.emojis) {
                activeCategory = this.SEARCH_CATEGORY;
            }
            else {
                /** @type {?} */
                var target = this.scrollRef.nativeElement;
                // check scroll is not at bottom
                if (target.scrollTop === 0) {
                    // hit the TOP
                    activeCategory = this.categories.find(function (n) { return n.first === true; });
                }
                else if (target.scrollHeight - target.scrollTop === this.clientHeight) {
                    // scrolled to bottom activate last category
                    activeCategory = this.categories[this.categories.length - 1];
                }
                else {
                    var _loop_1 = function (category) {
                        /** @type {?} */
                        var component = this_1.categoryRefs.find(function (n) { return n.id === category.id; });
                        /** @type {?} */
                        var active = ( /** @type {?} */(component)).handleScroll(target.scrollTop);
                        if (active) {
                            activeCategory = category;
                        }
                    };
                    var this_1 = this;
                    try {
                        // scrolling
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.categories), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var category = _c.value;
                            _loop_1(category);
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                }
                this.scrollTop = target.scrollTop;
            }
            if (activeCategory) {
                this.selected = activeCategory.name;
            }
        };
    /**
     * @param {?} $emojis
     * @return {?}
     */
    PickerComponent.prototype.handleSearch = /**
     * @param {?} $emojis
     * @return {?}
     */
        function ($emojis) {
            var e_3, _a;
            this.SEARCH_CATEGORY.emojis = $emojis;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.categoryRefs.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var component = _c.value;
                    if (component.name === 'Search') {
                        component.emojis = $emojis;
                        component.updateDisplay($emojis ? 'block' : 'none');
                    }
                    else {
                        component.updateDisplay($emojis ? 'none' : 'block');
                    }
                }
            }
            catch (e_3_1) {
                e_3 = { error: e_3_1 };
            }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return))
                        _a.call(_b);
                }
                finally {
                    if (e_3)
                        throw e_3.error;
                }
            }
            // this.forceUpdate();
            this.scrollRef.nativeElement.scrollTop = 0;
            this.handleScroll();
        };
    /**
     * @param {?} $event
     * @param {?=} emoji
     * @return {?}
     */
    PickerComponent.prototype.handleEnterKey = /**
     * @param {?} $event
     * @param {?=} emoji
     * @return {?}
     */
        function ($event, emoji) {
            if (!emoji) {
                if (this.SEARCH_CATEGORY.emojis !== null && this.SEARCH_CATEGORY.emojis.length) {
                    emoji = this.SEARCH_CATEGORY.emojis[0];
                    if (emoji) {
                        this.emojiSelect.emit({ $event: $event, emoji: emoji });
                    }
                    else {
                        return;
                    }
                }
            }
            if (!this.hideRecent && !this.recent) {
                this.frequently.add(( /** @type {?} */(emoji)));
            }
            /** @type {?} */
            var component = this.categoryRefs.toArray()[1];
            if (component) {
                component.getEmojis();
                component.ref.markForCheck();
            }
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    PickerComponent.prototype.handleEmojiOver = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            if (!this.showPreview || !this.previewRef) {
                return;
            }
            /** @type {?} */
            var emojiData = ( /** @type {?} */(this.CUSTOM_CATEGORY.emojis)).find(function (customEmoji) { return customEmoji.id === $event.emoji.id; });
            if (emojiData) {
                $event.emoji = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emojiData);
            }
            this.previewEmoji = $event.emoji;
            clearTimeout(this.leaveTimeout);
        };
    /**
     * @return {?}
     */
    PickerComponent.prototype.handleEmojiLeave = /**
     * @return {?}
     */
        function () {
            var _this = this;
            if (!this.showPreview || !this.previewRef) {
                return;
            }
            this.leaveTimeout = setTimeout(function () {
                _this.previewEmoji = null;
                _this.previewRef.ref.markForCheck();
            }, 16);
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    PickerComponent.prototype.handleEmojiClick = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            this.emojiClick.emit($event);
            this.emojiSelect.emit($event);
            this.handleEnterKey($event.$event, $event.emoji);
        };
    /**
     * @param {?} skin
     * @return {?}
     */
    PickerComponent.prototype.handleSkinChange = /**
     * @param {?} skin
     * @return {?}
     */
        function (skin) {
            this.skin = skin;
            localStorage.setItem(this.NAMESPACE + ".skin", String(skin));
            this.skinChange.emit(skin);
        };
    return PickerComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SkinComponent = /** @class */ /*@__PURE__*/ (function () {
    function SkinComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.opened = false;
        this.skinTones = [1, 2, 3, 4, 5, 6];
    }
    /**
     * @return {?}
     */
    SkinComponent.prototype.toggleOpen = /**
     * @return {?}
     */
        function () {
            this.opened = !this.opened;
        };
    /**
     * @param {?} skin
     * @return {?}
     */
    SkinComponent.prototype.handleClick = /**
     * @param {?} skin
     * @return {?}
     */
        function (skin) {
            if (!this.opened) {
                this.opened = true;
                return;
            }
            this.opened = false;
            if (skin !== this.skin) {
                this.change.emit(skin);
            }
        };
    return SkinComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [
    PickerComponent,
    AnchorsComponent,
    CategoryComponent,
    SearchComponent,
    PreviewComponent,
    SkinComponent,
];
var PickerModule = /** @class */ /*@__PURE__*/ (function () {
    function PickerModule() {
    }
    return PickerModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "./node_modules/@ctrl/ngx-emoji-mart/ngx-emoji/fesm5/ctrl-ngx-emoji-mart-ngx-emoji.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-emoji-mart/ngx-emoji/fesm5/ctrl-ngx-emoji-mart-ngx-emoji.js ***!
  \********************************************************************************************/
/*! exports provided: categories, emojis, skins, EmojiComponent, EmojiModule, DEFAULT_BACKGROUNDFN, EmojiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emojis", function() { return emojis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skins", function() { return skins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiComponent", function() { return EmojiComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiModule", function() { return EmojiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BACKGROUNDFN", function() { return DEFAULT_BACKGROUNDFN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiService", function() { return EmojiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var categories = [
    {
        id: 'people',
        name: 'Smileys & People',
        emojis: [
            '1F600',
            '1F601',
            '1F602',
            '1F923',
            '1F603',
            '1F604',
            '1F605',
            '1F606',
            '1F609',
            '1F60A',
            '1F60B',
            '1F60E',
            '1F60D',
            '1F618',
            '1F617',
            '1F619',
            '1F61A',
            '263A-FE0F',
            '1F642',
            '1F917',
            '1F929',
            '1F914',
            '1F928',
            '1F610',
            '1F611',
            '1F636',
            '1F644',
            '1F60F',
            '1F623',
            '1F625',
            '1F62E',
            '1F910',
            '1F62F',
            '1F62A',
            '1F62B',
            '1F634',
            '1F60C',
            '1F61B',
            '1F61C',
            '1F61D',
            '1F924',
            '1F612',
            '1F613',
            '1F614',
            '1F615',
            '1F643',
            '1F911',
            '1F632',
            '2639-FE0F',
            '1F641',
            '1F616',
            '1F61E',
            '1F61F',
            '1F624',
            '1F622',
            '1F62D',
            '1F626',
            '1F627',
            '1F628',
            '1F629',
            '1F92F',
            '1F62C',
            '1F630',
            '1F631',
            '1F633',
            '1F92A',
            '1F635',
            '1F621',
            '1F620',
            '1F92C',
            '1F637',
            '1F912',
            '1F915',
            '1F922',
            '1F92E',
            '1F927',
            '1F607',
            '1F920',
            '1F921',
            '1F925',
            '1F92B',
            '1F92D',
            '1F9D0',
            '1F913',
            '1F608',
            '1F47F',
            '1F479',
            '1F47A',
            '1F480',
            '2620-FE0F',
            '1F47B',
            '1F47D',
            '1F47E',
            '1F916',
            '1F4A9',
            '1F63A',
            '1F638',
            '1F639',
            '1F63B',
            '1F63C',
            '1F63D',
            '1F640',
            '1F63F',
            '1F63E',
            '1F648',
            '1F649',
            '1F64A',
            '1F476',
            '1F9D2',
            '1F466',
            '1F467',
            '1F9D1',
            '1F468',
            '1F469',
            '1F9D3',
            '1F474',
            '1F475',
            '1F468-200D-2695-FE0F',
            '1F469-200D-2695-FE0F',
            '1F468-200D-1F393',
            '1F469-200D-1F393',
            '1F468-200D-1F3EB',
            '1F469-200D-1F3EB',
            '1F468-200D-2696-FE0F',
            '1F469-200D-2696-FE0F',
            '1F468-200D-1F33E',
            '1F469-200D-1F33E',
            '1F468-200D-1F373',
            '1F469-200D-1F373',
            '1F468-200D-1F527',
            '1F469-200D-1F527',
            '1F468-200D-1F3ED',
            '1F469-200D-1F3ED',
            '1F468-200D-1F4BC',
            '1F469-200D-1F4BC',
            '1F468-200D-1F52C',
            '1F469-200D-1F52C',
            '1F468-200D-1F4BB',
            '1F469-200D-1F4BB',
            '1F468-200D-1F3A4',
            '1F469-200D-1F3A4',
            '1F468-200D-1F3A8',
            '1F469-200D-1F3A8',
            '1F468-200D-2708-FE0F',
            '1F469-200D-2708-FE0F',
            '1F468-200D-1F680',
            '1F469-200D-1F680',
            '1F468-200D-1F692',
            '1F469-200D-1F692',
            '1F46E',
            '1F46E-200D-2642-FE0F',
            '1F46E-200D-2640-FE0F',
            '1F575-FE0F',
            '1F575-FE0F-200D-2642-FE0F',
            '1F575-FE0F-200D-2640-FE0F',
            '1F482',
            '1F482-200D-2642-FE0F',
            '1F482-200D-2640-FE0F',
            '1F477',
            '1F477-200D-2642-FE0F',
            '1F477-200D-2640-FE0F',
            '1F934',
            '1F478',
            '1F473',
            '1F473-200D-2642-FE0F',
            '1F473-200D-2640-FE0F',
            '1F472',
            '1F9D5',
            '1F9D4',
            '1F471',
            '1F471-200D-2642-FE0F',
            '1F471-200D-2640-FE0F',
            '1F935',
            '1F470',
            '1F930',
            '1F931',
            '1F47C',
            '1F385',
            '1F936',
            '1F9D9',
            '1F9D9-200D-2640-FE0F',
            '1F9D9-200D-2642-FE0F',
            '1F9DA',
            '1F9DA-200D-2640-FE0F',
            '1F9DA-200D-2642-FE0F',
            '1F9DB',
            '1F9DB-200D-2640-FE0F',
            '1F9DB-200D-2642-FE0F',
            '1F9DC',
            '1F9DC-200D-2640-FE0F',
            '1F9DC-200D-2642-FE0F',
            '1F9DD',
            '1F9DD-200D-2640-FE0F',
            '1F9DD-200D-2642-FE0F',
            '1F9DE',
            '1F9DE-200D-2640-FE0F',
            '1F9DE-200D-2642-FE0F',
            '1F9DF',
            '1F9DF-200D-2640-FE0F',
            '1F9DF-200D-2642-FE0F',
            '1F64D',
            '1F64D-200D-2642-FE0F',
            '1F64D-200D-2640-FE0F',
            '1F64E',
            '1F64E-200D-2642-FE0F',
            '1F64E-200D-2640-FE0F',
            '1F645',
            '1F645-200D-2642-FE0F',
            '1F645-200D-2640-FE0F',
            '1F646',
            '1F646-200D-2642-FE0F',
            '1F646-200D-2640-FE0F',
            '1F481',
            '1F481-200D-2642-FE0F',
            '1F481-200D-2640-FE0F',
            '1F64B',
            '1F64B-200D-2642-FE0F',
            '1F64B-200D-2640-FE0F',
            '1F647',
            '1F647-200D-2642-FE0F',
            '1F647-200D-2640-FE0F',
            '1F926',
            '1F926-200D-2642-FE0F',
            '1F926-200D-2640-FE0F',
            '1F937',
            '1F937-200D-2642-FE0F',
            '1F937-200D-2640-FE0F',
            '1F486',
            '1F486-200D-2642-FE0F',
            '1F486-200D-2640-FE0F',
            '1F487',
            '1F487-200D-2642-FE0F',
            '1F487-200D-2640-FE0F',
            '1F6B6',
            '1F6B6-200D-2642-FE0F',
            '1F6B6-200D-2640-FE0F',
            '1F3C3',
            '1F3C3-200D-2642-FE0F',
            '1F3C3-200D-2640-FE0F',
            '1F483',
            '1F57A',
            '1F46F',
            '1F46F-200D-2642-FE0F',
            '1F46F-200D-2640-FE0F',
            '1F9D6',
            '1F9D6-200D-2640-FE0F',
            '1F9D6-200D-2642-FE0F',
            '1F9D7',
            '1F9D7-200D-2640-FE0F',
            '1F9D7-200D-2642-FE0F',
            '1F9D8',
            '1F9D8-200D-2640-FE0F',
            '1F9D8-200D-2642-FE0F',
            '1F6C0',
            '1F6CC',
            '1F574-FE0F',
            '1F5E3-FE0F',
            '1F464',
            '1F465',
            '1F93A',
            '1F3C7',
            '26F7-FE0F',
            '1F3C2',
            '1F3CC-FE0F',
            '1F3CC-FE0F-200D-2642-FE0F',
            '1F3CC-FE0F-200D-2640-FE0F',
            '1F3C4',
            '1F3C4-200D-2642-FE0F',
            '1F3C4-200D-2640-FE0F',
            '1F6A3',
            '1F6A3-200D-2642-FE0F',
            '1F6A3-200D-2640-FE0F',
            '1F3CA',
            '1F3CA-200D-2642-FE0F',
            '1F3CA-200D-2640-FE0F',
            '26F9-FE0F',
            '26F9-FE0F-200D-2642-FE0F',
            '26F9-FE0F-200D-2640-FE0F',
            '1F3CB-FE0F',
            '1F3CB-FE0F-200D-2642-FE0F',
            '1F3CB-FE0F-200D-2640-FE0F',
            '1F6B4',
            '1F6B4-200D-2642-FE0F',
            '1F6B4-200D-2640-FE0F',
            '1F6B5',
            '1F6B5-200D-2642-FE0F',
            '1F6B5-200D-2640-FE0F',
            '1F3CE-FE0F',
            '1F3CD-FE0F',
            '1F938',
            '1F938-200D-2642-FE0F',
            '1F938-200D-2640-FE0F',
            '1F93C',
            '1F93C-200D-2642-FE0F',
            '1F93C-200D-2640-FE0F',
            '1F93D',
            '1F93D-200D-2642-FE0F',
            '1F93D-200D-2640-FE0F',
            '1F93E',
            '1F93E-200D-2642-FE0F',
            '1F93E-200D-2640-FE0F',
            '1F939',
            '1F939-200D-2642-FE0F',
            '1F939-200D-2640-FE0F',
            '1F46B',
            '1F46C',
            '1F46D',
            '1F48F',
            '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468',
            '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468',
            '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469',
            '1F491',
            '1F469-200D-2764-FE0F-200D-1F468',
            '1F468-200D-2764-FE0F-200D-1F468',
            '1F469-200D-2764-FE0F-200D-1F469',
            '1F46A',
            '1F468-200D-1F469-200D-1F466',
            '1F468-200D-1F469-200D-1F467',
            '1F468-200D-1F469-200D-1F467-200D-1F466',
            '1F468-200D-1F469-200D-1F466-200D-1F466',
            '1F468-200D-1F469-200D-1F467-200D-1F467',
            '1F468-200D-1F468-200D-1F466',
            '1F468-200D-1F468-200D-1F467',
            '1F468-200D-1F468-200D-1F467-200D-1F466',
            '1F468-200D-1F468-200D-1F466-200D-1F466',
            '1F468-200D-1F468-200D-1F467-200D-1F467',
            '1F469-200D-1F469-200D-1F466',
            '1F469-200D-1F469-200D-1F467',
            '1F469-200D-1F469-200D-1F467-200D-1F466',
            '1F469-200D-1F469-200D-1F466-200D-1F466',
            '1F469-200D-1F469-200D-1F467-200D-1F467',
            '1F468-200D-1F466',
            '1F468-200D-1F466-200D-1F466',
            '1F468-200D-1F467',
            '1F468-200D-1F467-200D-1F466',
            '1F468-200D-1F467-200D-1F467',
            '1F469-200D-1F466',
            '1F469-200D-1F466-200D-1F466',
            '1F469-200D-1F467',
            '1F469-200D-1F467-200D-1F466',
            '1F469-200D-1F467-200D-1F467',
            '1F933',
            '1F4AA',
            '1F448',
            '1F449',
            '261D-FE0F',
            '1F446',
            '1F595',
            '1F447',
            '270C-FE0F',
            '1F91E',
            '1F596',
            '1F918',
            '1F919',
            '1F590-FE0F',
            '270B',
            '1F44C',
            '1F44D',
            '1F44E',
            '270A',
            '1F44A',
            '1F91B',
            '1F91C',
            '1F91A',
            '1F44B',
            '1F91F',
            '270D-FE0F',
            '1F44F',
            '1F450',
            '1F64C',
            '1F932',
            '1F64F',
            '1F91D',
            '1F485',
            '1F442',
            '1F443',
            '1F463',
            '1F440',
            '1F441-FE0F',
            '1F441-FE0F-200D-1F5E8-FE0F',
            '1F9E0',
            '1F445',
            '1F444',
            '1F48B',
            '1F498',
            '2764-FE0F',
            '1F493',
            '1F494',
            '1F495',
            '1F496',
            '1F497',
            '1F499',
            '1F49A',
            '1F49B',
            '1F9E1',
            '1F49C',
            '1F5A4',
            '1F49D',
            '1F49E',
            '1F49F',
            '2763-FE0F',
            '1F48C',
            '1F4A4',
            '1F4A2',
            '1F4A3',
            '1F4A5',
            '1F4A6',
            '1F4A8',
            '1F4AB',
            '1F4AC',
            '1F5E8-FE0F',
            '1F5EF-FE0F',
            '1F4AD',
            '1F573-FE0F',
            '1F453',
            '1F576-FE0F',
            '1F454',
            '1F455',
            '1F456',
            '1F9E3',
            '1F9E4',
            '1F9E5',
            '1F9E6',
            '1F457',
            '1F458',
            '1F459',
            '1F45A',
            '1F45B',
            '1F45C',
            '1F45D',
            '1F6CD-FE0F',
            '1F392',
            '1F45E',
            '1F45F',
            '1F460',
            '1F461',
            '1F462',
            '1F451',
            '1F452',
            '1F3A9',
            '1F393',
            '1F9E2',
            '26D1-FE0F',
            '1F4FF',
            '1F484',
            '1F48D',
            '1F48E'
        ]
    },
    {
        id: 'nature',
        name: 'Animals & Nature',
        emojis: [
            '1F435',
            '1F412',
            '1F98D',
            '1F436',
            '1F415',
            '1F429',
            '1F43A',
            '1F98A',
            '1F431',
            '1F408',
            '1F981',
            '1F42F',
            '1F405',
            '1F406',
            '1F434',
            '1F40E',
            '1F984',
            '1F993',
            '1F98C',
            '1F42E',
            '1F402',
            '1F403',
            '1F404',
            '1F437',
            '1F416',
            '1F417',
            '1F43D',
            '1F40F',
            '1F411',
            '1F410',
            '1F42A',
            '1F42B',
            '1F992',
            '1F418',
            '1F98F',
            '1F42D',
            '1F401',
            '1F400',
            '1F439',
            '1F430',
            '1F407',
            '1F43F-FE0F',
            '1F994',
            '1F987',
            '1F43B',
            '1F428',
            '1F43C',
            '1F43E',
            '1F983',
            '1F414',
            '1F413',
            '1F423',
            '1F424',
            '1F425',
            '1F426',
            '1F427',
            '1F54A-FE0F',
            '1F985',
            '1F986',
            '1F989',
            '1F438',
            '1F40A',
            '1F422',
            '1F98E',
            '1F40D',
            '1F432',
            '1F409',
            '1F995',
            '1F996',
            '1F433',
            '1F40B',
            '1F42C',
            '1F41F',
            '1F420',
            '1F421',
            '1F988',
            '1F419',
            '1F41A',
            '1F980',
            '1F990',
            '1F991',
            '1F40C',
            '1F98B',
            '1F41B',
            '1F41C',
            '1F41D',
            '1F41E',
            '1F997',
            '1F577-FE0F',
            '1F578-FE0F',
            '1F982',
            '1F490',
            '1F338',
            '1F4AE',
            '1F3F5-FE0F',
            '1F339',
            '1F940',
            '1F33A',
            '1F33B',
            '1F33C',
            '1F337',
            '1F331',
            '1F332',
            '1F333',
            '1F334',
            '1F335',
            '1F33E',
            '1F33F',
            '2618-FE0F',
            '1F340',
            '1F341',
            '1F342',
            '1F343'
        ]
    },
    {
        id: 'foods',
        name: 'Food & Drink',
        emojis: [
            '1F347',
            '1F348',
            '1F349',
            '1F34A',
            '1F34B',
            '1F34C',
            '1F34D',
            '1F34E',
            '1F34F',
            '1F350',
            '1F351',
            '1F352',
            '1F353',
            '1F95D',
            '1F345',
            '1F965',
            '1F951',
            '1F346',
            '1F954',
            '1F955',
            '1F33D',
            '1F336-FE0F',
            '1F952',
            '1F966',
            '1F344',
            '1F95C',
            '1F330',
            '1F35E',
            '1F950',
            '1F956',
            '1F968',
            '1F95E',
            '1F9C0',
            '1F356',
            '1F357',
            '1F969',
            '1F953',
            '1F354',
            '1F35F',
            '1F355',
            '1F32D',
            '1F96A',
            '1F32E',
            '1F32F',
            '1F959',
            '1F95A',
            '1F373',
            '1F958',
            '1F372',
            '1F963',
            '1F957',
            '1F37F',
            '1F96B',
            '1F371',
            '1F358',
            '1F359',
            '1F35A',
            '1F35B',
            '1F35C',
            '1F35D',
            '1F360',
            '1F362',
            '1F363',
            '1F364',
            '1F365',
            '1F361',
            '1F95F',
            '1F960',
            '1F961',
            '1F366',
            '1F367',
            '1F368',
            '1F369',
            '1F36A',
            '1F382',
            '1F370',
            '1F967',
            '1F36B',
            '1F36C',
            '1F36D',
            '1F36E',
            '1F36F',
            '1F37C',
            '1F95B',
            '2615',
            '1F375',
            '1F376',
            '1F37E',
            '1F377',
            '1F378',
            '1F379',
            '1F37A',
            '1F37B',
            '1F942',
            '1F943',
            '1F964',
            '1F962',
            '1F37D-FE0F',
            '1F374',
            '1F944',
            '1F52A',
            '1F3FA'
        ]
    },
    {
        id: 'activity',
        name: 'Activities',
        emojis: [
            '1F383',
            '1F384',
            '1F386',
            '1F387',
            '2728',
            '1F388',
            '1F389',
            '1F38A',
            '1F38B',
            '1F38D',
            '1F38E',
            '1F38F',
            '1F390',
            '1F391',
            '1F380',
            '1F381',
            '1F397-FE0F',
            '1F39F-FE0F',
            '1F3AB',
            '1F396-FE0F',
            '1F3C6',
            '1F3C5',
            '1F947',
            '1F948',
            '1F949',
            '26BD',
            '26BE',
            '1F3C0',
            '1F3D0',
            '1F3C8',
            '1F3C9',
            '1F3BE',
            '1F3B1',
            '1F3B3',
            '1F3CF',
            '1F3D1',
            '1F3D2',
            '1F3D3',
            '1F3F8',
            '1F94A',
            '1F94B',
            '1F945',
            '1F3AF',
            '26F3',
            '26F8-FE0F',
            '1F3A3',
            '1F3BD',
            '1F3BF',
            '1F6F7',
            '1F94C',
            '1F3AE',
            '1F579-FE0F',
            '1F3B2',
            '2660-FE0F',
            '2665-FE0F',
            '2666-FE0F',
            '2663-FE0F',
            '1F0CF',
            '1F004',
            '1F3B4'
        ]
    },
    {
        id: 'places',
        name: 'Travel & Places',
        emojis: [
            '1F30D',
            '1F30E',
            '1F30F',
            '1F310',
            '1F5FA-FE0F',
            '1F5FE',
            '1F3D4-FE0F',
            '26F0-FE0F',
            '1F30B',
            '1F5FB',
            '1F3D5-FE0F',
            '1F3D6-FE0F',
            '1F3DC-FE0F',
            '1F3DD-FE0F',
            '1F3DE-FE0F',
            '1F3DF-FE0F',
            '1F3DB-FE0F',
            '1F3D7-FE0F',
            '1F3D8-FE0F',
            '1F3D9-FE0F',
            '1F3DA-FE0F',
            '1F3E0',
            '1F3E1',
            '1F3E2',
            '1F3E3',
            '1F3E4',
            '1F3E5',
            '1F3E6',
            '1F3E8',
            '1F3E9',
            '1F3EA',
            '1F3EB',
            '1F3EC',
            '1F3ED',
            '1F3EF',
            '1F3F0',
            '1F492',
            '1F5FC',
            '1F5FD',
            '26EA',
            '1F54C',
            '1F54D',
            '26E9-FE0F',
            '1F54B',
            '26F2',
            '26FA',
            '1F301',
            '1F303',
            '1F304',
            '1F305',
            '1F306',
            '1F307',
            '1F309',
            '2668-FE0F',
            '1F30C',
            '1F3A0',
            '1F3A1',
            '1F3A2',
            '1F488',
            '1F3AA',
            '1F3AD',
            '1F5BC-FE0F',
            '1F3A8',
            '1F3B0',
            '1F682',
            '1F683',
            '1F684',
            '1F685',
            '1F686',
            '1F687',
            '1F688',
            '1F689',
            '1F68A',
            '1F69D',
            '1F69E',
            '1F68B',
            '1F68C',
            '1F68D',
            '1F68E',
            '1F690',
            '1F691',
            '1F692',
            '1F693',
            '1F694',
            '1F695',
            '1F696',
            '1F697',
            '1F698',
            '1F699',
            '1F69A',
            '1F69B',
            '1F69C',
            '1F6B2',
            '1F6F4',
            '1F6F5',
            '1F68F',
            '1F6E3-FE0F',
            '1F6E4-FE0F',
            '26FD',
            '1F6A8',
            '1F6A5',
            '1F6A6',
            '1F6A7',
            '1F6D1',
            '2693',
            '26F5',
            '1F6F6',
            '1F6A4',
            '1F6F3-FE0F',
            '26F4-FE0F',
            '1F6E5-FE0F',
            '1F6A2',
            '2708-FE0F',
            '1F6E9-FE0F',
            '1F6EB',
            '1F6EC',
            '1F4BA',
            '1F681',
            '1F69F',
            '1F6A0',
            '1F6A1',
            '1F6F0-FE0F',
            '1F680',
            '1F6F8',
            '1F6CE-FE0F',
            '1F6AA',
            '1F6CF-FE0F',
            '1F6CB-FE0F',
            '1F6BD',
            '1F6BF',
            '1F6C1',
            '231B',
            '23F3',
            '231A',
            '23F0',
            '23F1-FE0F',
            '23F2-FE0F',
            '1F570-FE0F',
            '1F55B',
            '1F567',
            '1F550',
            '1F55C',
            '1F551',
            '1F55D',
            '1F552',
            '1F55E',
            '1F553',
            '1F55F',
            '1F554',
            '1F560',
            '1F555',
            '1F561',
            '1F556',
            '1F562',
            '1F557',
            '1F563',
            '1F558',
            '1F564',
            '1F559',
            '1F565',
            '1F55A',
            '1F566',
            '1F311',
            '1F312',
            '1F313',
            '1F314',
            '1F315',
            '1F316',
            '1F317',
            '1F318',
            '1F319',
            '1F31A',
            '1F31B',
            '1F31C',
            '1F321-FE0F',
            '2600-FE0F',
            '1F31D',
            '1F31E',
            '2B50',
            '1F31F',
            '1F320',
            '2601-FE0F',
            '26C5',
            '26C8-FE0F',
            '1F324-FE0F',
            '1F325-FE0F',
            '1F326-FE0F',
            '1F327-FE0F',
            '1F328-FE0F',
            '1F329-FE0F',
            '1F32A-FE0F',
            '1F32B-FE0F',
            '1F32C-FE0F',
            '1F300',
            '1F308',
            '1F302',
            '2602-FE0F',
            '2614',
            '26F1-FE0F',
            '26A1',
            '2744-FE0F',
            '2603-FE0F',
            '26C4',
            '2604-FE0F',
            '1F525',
            '1F4A7',
            '1F30A'
        ]
    },
    {
        id: 'objects',
        name: 'Objects',
        emojis: [
            '1F507',
            '1F508',
            '1F509',
            '1F50A',
            '1F4E2',
            '1F4E3',
            '1F4EF',
            '1F514',
            '1F515',
            '1F3BC',
            '1F3B5',
            '1F3B6',
            '1F399-FE0F',
            '1F39A-FE0F',
            '1F39B-FE0F',
            '1F3A4',
            '1F3A7',
            '1F4FB',
            '1F3B7',
            '1F3B8',
            '1F3B9',
            '1F3BA',
            '1F3BB',
            '1F941',
            '1F4F1',
            '1F4F2',
            '260E-FE0F',
            '1F4DE',
            '1F4DF',
            '1F4E0',
            '1F50B',
            '1F50C',
            '1F4BB',
            '1F5A5-FE0F',
            '1F5A8-FE0F',
            '2328-FE0F',
            '1F5B1-FE0F',
            '1F5B2-FE0F',
            '1F4BD',
            '1F4BE',
            '1F4BF',
            '1F4C0',
            '1F3A5',
            '1F39E-FE0F',
            '1F4FD-FE0F',
            '1F3AC',
            '1F4FA',
            '1F4F7',
            '1F4F8',
            '1F4F9',
            '1F4FC',
            '1F50D',
            '1F50E',
            '1F52C',
            '1F52D',
            '1F4E1',
            '1F56F-FE0F',
            '1F4A1',
            '1F526',
            '1F3EE',
            '1F4D4',
            '1F4D5',
            '1F4D6',
            '1F4D7',
            '1F4D8',
            '1F4D9',
            '1F4DA',
            '1F4D3',
            '1F4D2',
            '1F4C3',
            '1F4DC',
            '1F4C4',
            '1F4F0',
            '1F5DE-FE0F',
            '1F4D1',
            '1F516',
            '1F3F7-FE0F',
            '1F4B0',
            '1F4B4',
            '1F4B5',
            '1F4B6',
            '1F4B7',
            '1F4B8',
            '1F4B3',
            '1F4B9',
            '1F4B1',
            '1F4B2',
            '2709-FE0F',
            '1F4E7',
            '1F4E8',
            '1F4E9',
            '1F4E4',
            '1F4E5',
            '1F4E6',
            '1F4EB',
            '1F4EA',
            '1F4EC',
            '1F4ED',
            '1F4EE',
            '1F5F3-FE0F',
            '270F-FE0F',
            '2712-FE0F',
            '1F58B-FE0F',
            '1F58A-FE0F',
            '1F58C-FE0F',
            '1F58D-FE0F',
            '1F4DD',
            '1F4BC',
            '1F4C1',
            '1F4C2',
            '1F5C2-FE0F',
            '1F4C5',
            '1F4C6',
            '1F5D2-FE0F',
            '1F5D3-FE0F',
            '1F4C7',
            '1F4C8',
            '1F4C9',
            '1F4CA',
            '1F4CB',
            '1F4CC',
            '1F4CD',
            '1F4CE',
            '1F587-FE0F',
            '1F4CF',
            '1F4D0',
            '2702-FE0F',
            '1F5C3-FE0F',
            '1F5C4-FE0F',
            '1F5D1-FE0F',
            '1F512',
            '1F513',
            '1F50F',
            '1F510',
            '1F511',
            '1F5DD-FE0F',
            '1F528',
            '26CF-FE0F',
            '2692-FE0F',
            '1F6E0-FE0F',
            '1F5E1-FE0F',
            '2694-FE0F',
            '1F52B',
            '1F3F9',
            '1F6E1-FE0F',
            '1F527',
            '1F529',
            '2699-FE0F',
            '1F5DC-FE0F',
            '2697-FE0F',
            '2696-FE0F',
            '1F517',
            '26D3-FE0F',
            '1F489',
            '1F48A',
            '1F6AC',
            '26B0-FE0F',
            '26B1-FE0F',
            '1F5FF',
            '1F6E2-FE0F',
            '1F52E',
            '1F6D2'
        ]
    },
    {
        id: 'symbols',
        name: 'Symbols',
        emojis: [
            '1F3E7',
            '1F6AE',
            '1F6B0',
            '267F',
            '1F6B9',
            '1F6BA',
            '1F6BB',
            '1F6BC',
            '1F6BE',
            '1F6C2',
            '1F6C3',
            '1F6C4',
            '1F6C5',
            '26A0-FE0F',
            '1F6B8',
            '26D4',
            '1F6AB',
            '1F6B3',
            '1F6AD',
            '1F6AF',
            '1F6B1',
            '1F6B7',
            '1F4F5',
            '1F51E',
            '2622-FE0F',
            '2623-FE0F',
            '2B06-FE0F',
            '2197-FE0F',
            '27A1-FE0F',
            '2198-FE0F',
            '2B07-FE0F',
            '2199-FE0F',
            '2B05-FE0F',
            '2196-FE0F',
            '2195-FE0F',
            '2194-FE0F',
            '21A9-FE0F',
            '21AA-FE0F',
            '2934-FE0F',
            '2935-FE0F',
            '1F503',
            '1F504',
            '1F519',
            '1F51A',
            '1F51B',
            '1F51C',
            '1F51D',
            '1F6D0',
            '269B-FE0F',
            '1F549-FE0F',
            '2721-FE0F',
            '2638-FE0F',
            '262F-FE0F',
            '271D-FE0F',
            '2626-FE0F',
            '262A-FE0F',
            '262E-FE0F',
            '1F54E',
            '1F52F',
            '2648',
            '2649',
            '264A',
            '264B',
            '264C',
            '264D',
            '264E',
            '264F',
            '2650',
            '2651',
            '2652',
            '2653',
            '26CE',
            '1F500',
            '1F501',
            '1F502',
            '25B6-FE0F',
            '23E9',
            '23ED-FE0F',
            '23EF-FE0F',
            '25C0-FE0F',
            '23EA',
            '23EE-FE0F',
            '1F53C',
            '23EB',
            '1F53D',
            '23EC',
            '23F8-FE0F',
            '23F9-FE0F',
            '23FA-FE0F',
            '23CF-FE0F',
            '1F3A6',
            '1F505',
            '1F506',
            '1F4F6',
            '1F4F3',
            '1F4F4',
            '2640-FE0F',
            '2642-FE0F',
            '2695-FE0F',
            '267B-FE0F',
            '269C-FE0F',
            '1F531',
            '1F4DB',
            '1F530',
            '2B55',
            '2705',
            '2611-FE0F',
            '2714-FE0F',
            '2716-FE0F',
            '274C',
            '274E',
            '2795',
            '2796',
            '2797',
            '27B0',
            '27BF',
            '303D-FE0F',
            '2733-FE0F',
            '2734-FE0F',
            '2747-FE0F',
            '203C-FE0F',
            '2049-FE0F',
            '2753',
            '2754',
            '2755',
            '2757',
            '3030-FE0F',
            '00A9-FE0F',
            '00AE-FE0F',
            '2122-FE0F',
            '0023-FE0F-20E3',
            '002A-FE0F-20E3',
            '0030-FE0F-20E3',
            '0031-FE0F-20E3',
            '0032-FE0F-20E3',
            '0033-FE0F-20E3',
            '0034-FE0F-20E3',
            '0035-FE0F-20E3',
            '0036-FE0F-20E3',
            '0037-FE0F-20E3',
            '0038-FE0F-20E3',
            '0039-FE0F-20E3',
            '1F51F',
            '1F4AF',
            '1F520',
            '1F521',
            '1F522',
            '1F523',
            '1F524',
            '1F170-FE0F',
            '1F18E',
            '1F171-FE0F',
            '1F191',
            '1F192',
            '1F193',
            '2139-FE0F',
            '1F194',
            '24C2-FE0F',
            '1F195',
            '1F196',
            '1F17E-FE0F',
            '1F197',
            '1F17F-FE0F',
            '1F198',
            '1F199',
            '1F19A',
            '1F201',
            '1F202-FE0F',
            '1F237-FE0F',
            '1F236',
            '1F22F',
            '1F250',
            '1F239',
            '1F21A',
            '1F232',
            '1F251',
            '1F238',
            '1F234',
            '1F233',
            '3297-FE0F',
            '3299-FE0F',
            '1F23A',
            '1F235',
            '25AA-FE0F',
            '25AB-FE0F',
            '25FB-FE0F',
            '25FC-FE0F',
            '25FD',
            '25FE',
            '2B1B',
            '2B1C',
            '1F536',
            '1F537',
            '1F538',
            '1F539',
            '1F53A',
            '1F53B',
            '1F4A0',
            '1F518',
            '1F532',
            '1F533',
            '26AA',
            '26AB',
            '1F534',
            '1F535'
        ]
    },
    {
        id: 'flags',
        name: 'Flags',
        emojis: [
            '1F1E6-1F1E8',
            '1F1E6-1F1E9',
            '1F1E6-1F1EA',
            '1F1E6-1F1EB',
            '1F1E6-1F1EC',
            '1F1E6-1F1EE',
            '1F1E6-1F1F1',
            '1F1E6-1F1F2',
            '1F1E6-1F1F4',
            '1F1E6-1F1F6',
            '1F1E6-1F1F7',
            '1F1E6-1F1F8',
            '1F1E6-1F1F9',
            '1F1E6-1F1FA',
            '1F1E6-1F1FC',
            '1F1E6-1F1FD',
            '1F1E6-1F1FF',
            '1F1E7-1F1E6',
            '1F1E7-1F1E7',
            '1F1E7-1F1E9',
            '1F1E7-1F1EA',
            '1F1E7-1F1EB',
            '1F1E7-1F1EC',
            '1F1E7-1F1ED',
            '1F1E7-1F1EE',
            '1F1E7-1F1EF',
            '1F1E7-1F1F1',
            '1F1E7-1F1F2',
            '1F1E7-1F1F3',
            '1F1E7-1F1F4',
            '1F1E7-1F1F6',
            '1F1E7-1F1F7',
            '1F1E7-1F1F8',
            '1F1E7-1F1F9',
            '1F1E7-1F1FB',
            '1F1E7-1F1FC',
            '1F1E7-1F1FE',
            '1F1E7-1F1FF',
            '1F1E8-1F1E6',
            '1F1E8-1F1E8',
            '1F1E8-1F1E9',
            '1F1E8-1F1EB',
            '1F1E8-1F1EC',
            '1F1E8-1F1ED',
            '1F1E8-1F1EE',
            '1F1E8-1F1F0',
            '1F1E8-1F1F1',
            '1F1E8-1F1F2',
            '1F1E8-1F1F3',
            '1F1E8-1F1F4',
            '1F1E8-1F1F5',
            '1F1E8-1F1F7',
            '1F1E8-1F1FA',
            '1F1E8-1F1FB',
            '1F1E8-1F1FC',
            '1F1E8-1F1FD',
            '1F1E8-1F1FE',
            '1F1E8-1F1FF',
            '1F1E9-1F1EA',
            '1F1E9-1F1EC',
            '1F1E9-1F1EF',
            '1F1E9-1F1F0',
            '1F1E9-1F1F2',
            '1F1E9-1F1F4',
            '1F1E9-1F1FF',
            '1F1EA-1F1E6',
            '1F1EA-1F1E8',
            '1F1EA-1F1EA',
            '1F1EA-1F1EC',
            '1F1EA-1F1ED',
            '1F1EA-1F1F7',
            '1F1EA-1F1F8',
            '1F1EA-1F1F9',
            '1F1EA-1F1FA',
            '1F1EB-1F1EE',
            '1F1EB-1F1EF',
            '1F1EB-1F1F0',
            '1F1EB-1F1F2',
            '1F1EB-1F1F4',
            '1F1EB-1F1F7',
            '1F1EC-1F1E6',
            '1F1EC-1F1E7',
            '1F1EC-1F1E9',
            '1F1EC-1F1EA',
            '1F1EC-1F1EB',
            '1F1EC-1F1EC',
            '1F1EC-1F1ED',
            '1F1EC-1F1EE',
            '1F1EC-1F1F1',
            '1F1EC-1F1F2',
            '1F1EC-1F1F3',
            '1F1EC-1F1F5',
            '1F1EC-1F1F6',
            '1F1EC-1F1F7',
            '1F1EC-1F1F8',
            '1F1EC-1F1F9',
            '1F1EC-1F1FA',
            '1F1EC-1F1FC',
            '1F1EC-1F1FE',
            '1F1ED-1F1F0',
            '1F1ED-1F1F2',
            '1F1ED-1F1F3',
            '1F1ED-1F1F7',
            '1F1ED-1F1F9',
            '1F1ED-1F1FA',
            '1F1EE-1F1E8',
            '1F1EE-1F1E9',
            '1F1EE-1F1EA',
            '1F1EE-1F1F1',
            '1F1EE-1F1F2',
            '1F1EE-1F1F3',
            '1F1EE-1F1F4',
            '1F1EE-1F1F6',
            '1F1EE-1F1F7',
            '1F1EE-1F1F8',
            '1F1EE-1F1F9',
            '1F1EF-1F1EA',
            '1F1EF-1F1F2',
            '1F1EF-1F1F4',
            '1F1EF-1F1F5',
            '1F1F0-1F1EA',
            '1F1F0-1F1EC',
            '1F1F0-1F1ED',
            '1F1F0-1F1EE',
            '1F1F0-1F1F2',
            '1F1F0-1F1F3',
            '1F1F0-1F1F5',
            '1F1F0-1F1F7',
            '1F1F0-1F1FC',
            '1F1F0-1F1FE',
            '1F1F0-1F1FF',
            '1F1F1-1F1E6',
            '1F1F1-1F1E7',
            '1F1F1-1F1E8',
            '1F1F1-1F1EE',
            '1F1F1-1F1F0',
            '1F1F1-1F1F7',
            '1F1F1-1F1F8',
            '1F1F1-1F1F9',
            '1F1F1-1F1FA',
            '1F1F1-1F1FB',
            '1F1F1-1F1FE',
            '1F1F2-1F1E6',
            '1F1F2-1F1E8',
            '1F1F2-1F1E9',
            '1F1F2-1F1EA',
            '1F1F2-1F1EB',
            '1F1F2-1F1EC',
            '1F1F2-1F1ED',
            '1F1F2-1F1F0',
            '1F1F2-1F1F1',
            '1F1F2-1F1F2',
            '1F1F2-1F1F3',
            '1F1F2-1F1F4',
            '1F1F2-1F1F5',
            '1F1F2-1F1F6',
            '1F1F2-1F1F7',
            '1F1F2-1F1F8',
            '1F1F2-1F1F9',
            '1F1F2-1F1FA',
            '1F1F2-1F1FB',
            '1F1F2-1F1FC',
            '1F1F2-1F1FD',
            '1F1F2-1F1FE',
            '1F1F2-1F1FF',
            '1F1F3-1F1E6',
            '1F1F3-1F1E8',
            '1F1F3-1F1EA',
            '1F1F3-1F1EB',
            '1F1F3-1F1EC',
            '1F1F3-1F1EE',
            '1F1F3-1F1F1',
            '1F1F3-1F1F4',
            '1F1F3-1F1F5',
            '1F1F3-1F1F7',
            '1F1F3-1F1FA',
            '1F1F3-1F1FF',
            '1F1F4-1F1F2',
            '1F1F5-1F1E6',
            '1F1F5-1F1EA',
            '1F1F5-1F1EB',
            '1F1F5-1F1EC',
            '1F1F5-1F1ED',
            '1F1F5-1F1F0',
            '1F1F5-1F1F1',
            '1F1F5-1F1F2',
            '1F1F5-1F1F3',
            '1F1F5-1F1F7',
            '1F1F5-1F1F8',
            '1F1F5-1F1F9',
            '1F1F5-1F1FC',
            '1F1F5-1F1FE',
            '1F1F6-1F1E6',
            '1F1F7-1F1EA',
            '1F1F7-1F1F4',
            '1F1F7-1F1F8',
            '1F1F7-1F1FA',
            '1F1F7-1F1FC',
            '1F1F8-1F1E6',
            '1F1F8-1F1E7',
            '1F1F8-1F1E8',
            '1F1F8-1F1E9',
            '1F1F8-1F1EA',
            '1F1F8-1F1EC',
            '1F1F8-1F1ED',
            '1F1F8-1F1EE',
            '1F1F8-1F1EF',
            '1F1F8-1F1F0',
            '1F1F8-1F1F1',
            '1F1F8-1F1F2',
            '1F1F8-1F1F3',
            '1F1F8-1F1F4',
            '1F1F8-1F1F7',
            '1F1F8-1F1F8',
            '1F1F8-1F1F9',
            '1F1F8-1F1FB',
            '1F1F8-1F1FD',
            '1F1F8-1F1FE',
            '1F1F8-1F1FF',
            '1F1F9-1F1E6',
            '1F1F9-1F1E8',
            '1F1F9-1F1E9',
            '1F1F9-1F1EB',
            '1F1F9-1F1EC',
            '1F1F9-1F1ED',
            '1F1F9-1F1EF',
            '1F1F9-1F1F0',
            '1F1F9-1F1F1',
            '1F1F9-1F1F2',
            '1F1F9-1F1F3',
            '1F1F9-1F1F4',
            '1F1F9-1F1F7',
            '1F1F9-1F1F9',
            '1F1F9-1F1FB',
            '1F1F9-1F1FC',
            '1F1F9-1F1FF',
            '1F1FA-1F1E6',
            '1F1FA-1F1EC',
            '1F1FA-1F1F2',
            '1F1FA-1F1F3',
            '1F1FA-1F1F8',
            '1F1FA-1F1FE',
            '1F1FA-1F1FF',
            '1F1FB-1F1E6',
            '1F1FB-1F1E8',
            '1F1FB-1F1EA',
            '1F1FB-1F1EC',
            '1F1FB-1F1EE',
            '1F1FB-1F1F3',
            '1F1FB-1F1FA',
            '1F1FC-1F1EB',
            '1F1FC-1F1F8',
            '1F1FD-1F1F0',
            '1F1FE-1F1EA',
            '1F1FE-1F1F9',
            '1F1FF-1F1E6',
            '1F1FF-1F1F2',
            '1F1FF-1F1FC',
            '1F38C',
            '1F3C1',
            '1F3F3-FE0F',
            '1F3F3-FE0F-200D-1F308',
            '1F3F4',
            '1F3F4-E0067-E0062-E0065-E006E-E0067-E007F',
            '1F3F4-E0067-E0062-E0073-E0063-E0074-E007F',
            '1F3F4-E0067-E0062-E0077-E006C-E0073-E007F',
            '1F6A9'
        ]
    }
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var emojis = [
    {
        name: 'Monkey Face',
        unified: '1F435',
        emoticons: [':o)'],
        keywords: [
            'animal',
            'nature',
            'circus'
        ],
        sheet: [13, 31],
        shortName: 'monkey_face'
    },
    {
        name: 'Grinning Face',
        unified: '1F600',
        text: ':D',
        keywords: [
            'face',
            'smile',
            'happy',
            'joy',
            ':D',
            'grin'
        ],
        sheet: [30, 24],
        shortName: 'grinning'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-1-2',
        unified: '1F3FB',
        sheet: [12, 25],
        hidden: ['messenger'],
        shortName: 'skin-tone-2'
    },
    {
        name: 'Earth Globe Europe-Africa',
        unified: '1F30D',
        keywords: [
            'globe',
            'world',
            'international'
        ],
        sheet: [6, 5],
        shortName: 'earth_africa'
    },
    {
        name: 'Chequered Flag',
        unified: '1F3C1',
        keywords: [
            'contest',
            'finishline',
            'race',
            'gokart'
        ],
        sheet: [9, 27],
        shortName: 'checkered_flag'
    },
    {
        name: 'Speaker with Cancellation Stroke',
        unified: '1F507',
        keywords: [
            'sound',
            'volume',
            'silence',
            'quiet'
        ],
        sheet: [27, 9],
        shortName: 'mute'
    },
    {
        name: 'Jack-O-Lantern',
        unified: '1F383',
        keywords: [
            'halloween',
            'light',
            'pumpkin',
            'creepy',
            'fall'
        ],
        sheet: [8, 17],
        shortName: 'jack_o_lantern'
    },
    {
        name: 'Automated Teller Machine',
        unified: '1F3E7',
        keywords: [
            'money',
            'sales',
            'cash',
            'blue-square',
            'payment',
            'bank'
        ],
        sheet: [12, 4],
        shortName: 'atm'
    },
    {
        name: 'Grapes',
        unified: '1F347',
        keywords: ['fruit', 'food', 'wine'],
        sheet: [7, 9],
        shortName: 'grapes'
    },
    {
        name: 'Earth Globe Americas',
        unified: '1F30E',
        keywords: [
            'globe',
            'world',
            'USA',
            'international'
        ],
        sheet: [6, 6],
        shortName: 'earth_americas'
    },
    {
        name: 'Grinning Face with Smiling Eyes',
        unified: '1F601',
        keywords: [
            'face',
            'happy',
            'smile',
            'joy',
            'kawaii'
        ],
        sheet: [30, 25],
        shortName: 'grin'
    },
    {
        name: 'Melon',
        unified: '1F348',
        keywords: [
            'fruit',
            'nature',
            'food'
        ],
        sheet: [7, 10],
        shortName: 'melon'
    },
    {
        name: 'Triangular Flag on Post',
        unified: '1F6A9',
        keywords: [
            'mark',
            'milestone',
            'place'
        ],
        sheet: [35, 14],
        shortName: 'triangular_flag_on_post'
    },
    {
        name: 'Monkey',
        unified: '1F412',
        keywords: [
            'animal',
            'nature',
            'banana',
            'circus'
        ],
        sheet: [12, 48],
        shortName: 'monkey'
    },
    {
        name: 'Christmas Tree',
        unified: '1F384',
        keywords: [
            'festival',
            'vacation',
            'december',
            'xmas',
            'celebration'
        ],
        sheet: [8, 18],
        shortName: 'christmas_tree'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-3',
        unified: '1F3FC',
        sheet: [12, 26],
        hidden: ['messenger'],
        shortName: 'skin-tone-3'
    },
    {
        name: 'Put Litter in Its Place Symbol',
        unified: '1F6AE',
        keywords: [
            'blue-square',
            'sign',
            'human',
            'info'
        ],
        sheet: [35, 19],
        shortName: 'put_litter_in_its_place'
    },
    {
        name: 'Speaker',
        unified: '1F508',
        keywords: [
            'sound',
            'volume',
            'silence',
            'broadcast'
        ],
        sheet: [27, 10],
        shortName: 'speaker'
    },
    {
        name: 'Earth Globe Asia-Australia',
        unified: '1F30F',
        keywords: [
            'globe',
            'world',
            'east',
            'international'
        ],
        sheet: [6, 7],
        shortName: 'earth_asia'
    },
    {
        name: 'Crossed Flags',
        unified: '1F38C',
        keywords: [
            'japanese',
            'nation',
            'country',
            'border'
        ],
        sheet: [8, 31],
        shortName: 'crossed_flags'
    },
    {
        name: 'Face with Tears of Joy',
        unified: '1F602',
        keywords: [
            'face',
            'cry',
            'tears',
            'weep',
            'happy',
            'happytears',
            'haha'
        ],
        sheet: [30, 26],
        shortName: 'joy'
    },
    {
        name: 'Speaker with One Sound Wave',
        unified: '1F509',
        keywords: [
            'volume',
            'speaker',
            'broadcast'
        ],
        sheet: [27, 11],
        shortName: 'sound'
    },
    {
        name: 'Watermelon',
        unified: '1F349',
        keywords: [
            'fruit',
            'food',
            'picnic',
            'summer'
        ],
        sheet: [7, 11],
        shortName: 'watermelon'
    },
    {
        name: 'Gorilla',
        unified: '1F98D',
        keywords: [
            'animal',
            'nature',
            'circus'
        ],
        sheet: [42, 37],
        hidden: ['messenger'],
        shortName: 'gorilla'
    },
    {
        name: 'Fireworks',
        unified: '1F386',
        keywords: [
            'photo',
            'festival',
            'carnival',
            'congratulations'
        ],
        sheet: [8, 25],
        shortName: 'fireworks'
    },
    {
        name: 'Potable Water Symbol',
        unified: '1F6B0',
        keywords: [
            'blue-square',
            'liquid',
            'restroom',
            'cleaning',
            'faucet'
        ],
        sheet: [35, 21],
        shortName: 'potable_water'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-4',
        unified: '1F3FD',
        sheet: [12, 27],
        hidden: ['messenger'],
        shortName: 'skin-tone-4'
    },
    {
        name: 'Wheelchair Symbol',
        unified: '267F',
        keywords: [
            'blue-square',
            'disabled',
            'a11y',
            'accessibility'
        ],
        sheet: [48, 10],
        shortName: 'wheelchair'
    },
    {
        name: 'Rolling on the Floor Laughing',
        unified: '1F923',
        sheet: [38, 26],
        hidden: ['messenger'],
        shortName: 'rolling_on_the_floor_laughing'
    },
    {
        name: 'Speaker with Three Sound Waves',
        unified: '1F50A',
        keywords: [
            'volume',
            'noise',
            'noisy',
            'speaker',
            'broadcast'
        ],
        sheet: [27, 12],
        shortName: 'loud_sound'
    },
    {
        name: 'Waving Black Flag',
        unified: '1F3F4',
        sheet: [12, 19],
        hidden: ['messenger'],
        shortName: 'waving_black_flag'
    },
    {
        name: 'Tangerine',
        unified: '1F34A',
        keywords: [
            'food',
            'fruit',
            'nature',
            'orange'
        ],
        sheet: [7, 12],
        shortName: 'tangerine'
    },
    {
        name: 'Dog Face',
        unified: '1F436',
        keywords: [
            'animal',
            'friend',
            'nature',
            'woof',
            'puppy',
            'pet',
            'faithful'
        ],
        sheet: [13, 32],
        shortName: 'dog'
    },
    {
        name: 'Firework Sparkler',
        unified: '1F387',
        keywords: [
            'stars',
            'night',
            'shine'
        ],
        sheet: [8, 26],
        shortName: 'sparkler'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-5',
        unified: '1F3FE',
        sheet: [12, 28],
        hidden: ['messenger'],
        shortName: 'skin-tone-5'
    },
    {
        name: 'Globe with Meridians',
        unified: '1F310',
        keywords: [
            'earth',
            'international',
            'world',
            'internet',
            'interweb',
            'i18n'
        ],
        sheet: [6, 8],
        shortName: 'globe_with_meridians'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-6',
        unified: '1F3FF',
        sheet: [12, 29],
        hidden: ['messenger'],
        shortName: 'skin-tone-6'
    },
    {
        name: 'Smiling Face with Open Mouth',
        unified: '1F603',
        text: ':)',
        emoticons: ['=)', '=-)'],
        keywords: [
            'face',
            'happy',
            'joy',
            'haha',
            ':D',
            ':)',
            'smile',
            'funny'
        ],
        sheet: [30, 27],
        shortName: 'smiley'
    },
    {
        name: 'Public Address Loudspeaker',
        unified: '1F4E2',
        keywords: ['volume', 'sound'],
        sheet: [26, 25],
        shortName: 'loudspeaker'
    },
    {
        name: 'Sparkles',
        unified: '2728',
        keywords: [
            'stars',
            'shine',
            'shiny',
            'cool',
            'awesome',
            'good',
            'magic'
        ],
        sheet: [49, 48],
        shortName: 'sparkles'
    },
    {
        name: 'Dog',
        unified: '1F415',
        keywords: [
            'animal',
            'nature',
            'friend',
            'doge',
            'pet',
            'faithful'
        ],
        sheet: [12, 51],
        shortName: 'dog2'
    },
    {
        name: 'Waving White Flag',
        unified: '1F3F3-FE0F',
        sheet: [12, 15],
        hidden: ['messenger'],
        shortName: 'waving_white_flag'
    },
    {
        name: 'World Map',
        unified: '1F5FA-FE0F',
        keywords: ['location', 'direction'],
        sheet: [30, 18],
        hidden: ['messenger'],
        shortName: 'world_map'
    },
    {
        name: 'Lemon',
        unified: '1F34B',
        keywords: ['fruit', 'nature'],
        sheet: [7, 13],
        shortName: 'lemon'
    },
    {
        name: 'Mens Symbol',
        unified: '1F6B9',
        keywords: [
            'toilet',
            'restroom',
            'wc',
            'blue-square',
            'gender',
            'male'
        ],
        sheet: [36, 29],
        shortName: 'mens'
    },
    {
        name: 'Womens Symbol',
        unified: '1F6BA',
        keywords: [
            'purple-square',
            'woman',
            'female',
            'toilet',
            'loo',
            'restroom',
            'gender'
        ],
        sheet: [36, 30],
        shortName: 'womens'
    },
    {
        name: 'Rainbow Flag',
        unified: '1F3F3-FE0F-200D-1F308',
        sheet: [12, 14],
        shortName: 'rainbow-flag'
    },
    {
        name: 'Smiling Face with Open Mouth and Smiling Eyes',
        unified: '1F604',
        text: ':)',
        emoticons: ['C:', 'c:', ':D', ':-D'],
        keywords: [
            'face',
            'happy',
            'joy',
            'funny',
            'haha',
            'laugh',
            'like',
            ':D',
            ':)'
        ],
        sheet: [30, 28],
        shortName: 'smile'
    },
    {
        name: 'Banana',
        unified: '1F34C',
        keywords: [
            'fruit',
            'food',
            'monkey'
        ],
        sheet: [7, 14],
        shortName: 'banana'
    },
    {
        name: 'Cheering Megaphone',
        unified: '1F4E3',
        keywords: [
            'sound',
            'speaker',
            'volume'
        ],
        sheet: [26, 26],
        shortName: 'mega'
    },
    {
        name: 'Silhouette of Japan',
        unified: '1F5FE',
        keywords: [
            'nation',
            'country',
            'japanese',
            'asia'
        ],
        sheet: [30, 22],
        shortName: 'japan'
    },
    {
        name: 'Poodle',
        unified: '1F429',
        keywords: [
            'dog',
            'animal',
            '101',
            'nature',
            'pet'
        ],
        sheet: [13, 19],
        shortName: 'poodle'
    },
    {
        name: 'Balloon',
        unified: '1F388',
        keywords: [
            'party',
            'celebration',
            'birthday',
            'circus'
        ],
        sheet: [8, 27],
        shortName: 'balloon'
    },
    {
        name: 'Ascension Island Flag',
        unified: '1F1E6-1F1E8',
        sheet: [0, 31],
        shortName: 'flag-ac'
    },
    {
        name: 'Smiling Face with Open Mouth and Cold Sweat',
        unified: '1F605',
        keywords: [
            'face',
            'hot',
            'happy',
            'laugh',
            'sweat',
            'smile',
            'relief'
        ],
        sheet: [30, 29],
        shortName: 'sweat_smile'
    },
    {
        name: 'Pineapple',
        unified: '1F34D',
        keywords: [
            'fruit',
            'nature',
            'food'
        ],
        sheet: [7, 15],
        shortName: 'pineapple'
    },
    {
        name: 'Restroom',
        unified: '1F6BB',
        keywords: [
            'blue-square',
            'toilet',
            'refresh',
            'wc',
            'gender'
        ],
        sheet: [36, 31],
        shortName: 'restroom'
    },
    {
        name: 'Postal Horn',
        unified: '1F4EF',
        keywords: ['instrument', 'music'],
        sheet: [26, 38],
        shortName: 'postal_horn'
    },
    {
        name: 'Wolf Face',
        unified: '1F43A',
        keywords: [
            'animal',
            'nature',
            'wild'
        ],
        sheet: [13, 36],
        shortName: 'wolf'
    },
    {
        name: 'Party Popper',
        unified: '1F389',
        keywords: [
            'party',
            'congratulations',
            'birthday',
            'magic',
            'circus',
            'celebration'
        ],
        sheet: [8, 28],
        shortName: 'tada'
    },
    {
        name: 'Snow Capped Mountain',
        unified: '1F3D4-FE0F',
        sheet: [11, 37],
        hidden: ['messenger'],
        shortName: 'snow_capped_mountain'
    },
    {
        name: 'Smiling Face with Open Mouth and Tightly-Closed Eyes',
        unified: '1F606',
        emoticons: [':>', ':->'],
        keywords: [
            'happy',
            'joy',
            'lol',
            'satisfied',
            'haha',
            'face',
            'glad',
            'XD',
            'laugh'
        ],
        sheet: [30, 30],
        shortNames: ['satisfied'],
        shortName: 'laughing'
    },
    {
        name: 'Red Apple',
        unified: '1F34E',
        keywords: [
            'fruit',
            'mac',
            'school'
        ],
        sheet: [7, 16],
        shortName: 'apple'
    },
    {
        name: 'Andorra Flag',
        unified: '1F1E6-1F1E9',
        sheet: [0, 32],
        shortName: 'flag-ad'
    },
    {
        name: 'Fox Face',
        unified: '1F98A',
        keywords: [
            'animal',
            'nature',
            'face'
        ],
        sheet: [42, 34],
        hidden: ['messenger'],
        shortName: 'fox_face'
    },
    {
        name: 'Confetti Ball',
        unified: '1F38A',
        keywords: [
            'festival',
            'party',
            'birthday',
            'circus'
        ],
        sheet: [8, 29],
        shortName: 'confetti_ball'
    },
    {
        name: 'Bell',
        unified: '1F514',
        keywords: [
            'sound',
            'notification',
            'christmas',
            'xmas',
            'chime'
        ],
        sheet: [27, 22],
        shortName: 'bell'
    },
    {
        name: 'Mountain',
        unified: '26F0-FE0F',
        keywords: [
            'photo',
            'nature',
            'environment'
        ],
        sheet: [48, 38],
        hidden: ['messenger'],
        shortName: 'mountain'
    },
    {
        name: 'Baby Symbol',
        unified: '1F6BC',
        keywords: [
            'orange-square',
            'child'
        ],
        sheet: [36, 32],
        shortName: 'baby_symbol'
    },
    {
        name: 'Water Closet',
        unified: '1F6BE',
        keywords: [
            'toilet',
            'restroom',
            'blue-square'
        ],
        sheet: [36, 34],
        shortName: 'wc'
    },
    {
        name: 'Winking Face',
        unified: '1F609',
        text: ';)',
        emoticons: [';)', ';-)'],
        keywords: [
            'face',
            'happy',
            'mischievous',
            'secret',
            ';)',
            'smile',
            'eye'
        ],
        sheet: [30, 33],
        shortName: 'wink'
    },
    {
        name: 'Bell with Cancellation Stroke',
        unified: '1F515',
        keywords: [
            'sound',
            'volume',
            'mute',
            'quiet',
            'silent'
        ],
        sheet: [27, 23],
        shortName: 'no_bell'
    },
    {
        name: 'Green Apple',
        unified: '1F34F',
        keywords: ['fruit', 'nature'],
        sheet: [7, 17],
        shortName: 'green_apple'
    },
    {
        name: 'Tanabata Tree',
        unified: '1F38B',
        keywords: [
            'plant',
            'nature',
            'branch',
            'summer'
        ],
        sheet: [8, 30],
        shortName: 'tanabata_tree'
    },
    {
        name: 'United Arab Emirates Flag',
        unified: '1F1E6-1F1EA',
        sheet: [0, 33],
        shortName: 'flag-ae'
    },
    {
        name: 'Volcano',
        unified: '1F30B',
        keywords: [
            'photo',
            'nature',
            'disaster'
        ],
        sheet: [6, 3],
        shortName: 'volcano'
    },
    {
        name: 'Cat Face',
        unified: '1F431',
        keywords: [
            'animal',
            'meow',
            'nature',
            'pet',
            'kitten'
        ],
        sheet: [13, 27],
        shortName: 'cat'
    },
    {
        name: 'Afghanistan Flag',
        unified: '1F1E6-1F1EB',
        sheet: [0, 34],
        shortName: 'flag-af'
    },
    {
        name: 'Musical Score',
        unified: '1F3BC',
        keywords: [
            'treble',
            'clef',
            'compose'
        ],
        sheet: [9, 22],
        shortName: 'musical_score'
    },
    {
        name: 'Smiling Face with Smiling Eyes',
        unified: '1F60A',
        text: ':)',
        keywords: [
            'face',
            'smile',
            'happy',
            'flushed',
            'crush',
            'embarrassed',
            'shy',
            'joy'
        ],
        sheet: [30, 34],
        shortName: 'blush'
    },
    {
        name: 'Pear',
        unified: '1F350',
        keywords: [
            'fruit',
            'nature',
            'food'
        ],
        sheet: [7, 18],
        shortName: 'pear'
    },
    {
        name: 'Pine Decoration',
        unified: '1F38D',
        keywords: [
            'plant',
            'nature',
            'vegetable',
            'panda',
            'pine_decoration'
        ],
        sheet: [8, 32],
        shortName: 'bamboo'
    },
    {
        name: 'Passport Control',
        unified: '1F6C2',
        keywords: ['custom', 'blue-square'],
        sheet: [36, 43],
        shortName: 'passport_control'
    },
    {
        name: 'Mount Fuji',
        unified: '1F5FB',
        keywords: [
            'photo',
            'mountain',
            'nature',
            'japanese'
        ],
        sheet: [30, 19],
        shortName: 'mount_fuji'
    },
    {
        name: 'Cat',
        unified: '1F408',
        keywords: [
            'animal',
            'meow',
            'pet',
            'cats'
        ],
        sheet: [12, 38],
        shortName: 'cat2'
    },
    {
        name: 'Musical Note',
        unified: '1F3B5',
        keywords: [
            'score',
            'tone',
            'sound'
        ],
        sheet: [9, 15],
        shortName: 'musical_note'
    },
    {
        name: 'Japanese Dolls',
        unified: '1F38E',
        keywords: [
            'japanese',
            'toy',
            'kimono'
        ],
        sheet: [8, 33],
        shortName: 'dolls'
    },
    {
        name: 'Lion Face',
        unified: '1F981',
        sheet: [42, 25],
        hidden: ['messenger'],
        shortName: 'lion_face'
    },
    {
        name: 'Camping',
        unified: '1F3D5-FE0F',
        keywords: [
            'photo',
            'outdoors',
            'tent'
        ],
        sheet: [11, 38],
        hidden: ['messenger'],
        shortName: 'camping'
    },
    {
        name: 'Antigua & Barbuda Flag',
        unified: '1F1E6-1F1EC',
        sheet: [0, 35],
        shortName: 'flag-ag'
    },
    {
        name: 'Customs',
        unified: '1F6C3',
        keywords: [
            'passport',
            'border',
            'blue-square'
        ],
        sheet: [36, 44],
        shortName: 'customs'
    },
    {
        name: 'Face Savouring Delicious Food',
        unified: '1F60B',
        keywords: [
            'happy',
            'joy',
            'tongue',
            'smile',
            'face',
            'silly',
            'yummy',
            'nom',
            'delicious',
            'savouring'
        ],
        sheet: [30, 35],
        shortName: 'yum'
    },
    {
        name: 'Peach',
        unified: '1F351',
        keywords: [
            'fruit',
            'nature',
            'food'
        ],
        sheet: [7, 19],
        shortName: 'peach'
    },
    {
        name: 'Tiger Face',
        unified: '1F42F',
        keywords: [
            'animal',
            'cat',
            'danger',
            'wild',
            'nature',
            'roar'
        ],
        sheet: [13, 25],
        shortName: 'tiger'
    },
    {
        name: 'Multiple Musical Notes',
        unified: '1F3B6',
        keywords: ['music', 'score'],
        sheet: [9, 16],
        shortName: 'notes'
    },
    {
        name: 'Carp Streamer',
        unified: '1F38F',
        keywords: [
            'fish',
            'japanese',
            'koinobori',
            'carp',
            'banner'
        ],
        sheet: [8, 34],
        shortName: 'flags'
    },
    {
        name: 'Beach with Umbrella',
        unified: '1F3D6-FE0F',
        sheet: [11, 39],
        hidden: ['messenger'],
        shortName: 'beach_with_umbrella'
    },
    {
        name: 'Cherries',
        unified: '1F352',
        keywords: ['food', 'fruit'],
        sheet: [7, 20],
        shortName: 'cherries'
    },
    {
        name: 'Anguilla Flag',
        unified: '1F1E6-1F1EE',
        sheet: [0, 36],
        shortName: 'flag-ai'
    },
    {
        name: 'Baggage Claim',
        unified: '1F6C4',
        keywords: [
            'blue-square',
            'airport',
            'transport'
        ],
        sheet: [36, 45],
        shortName: 'baggage_claim'
    },
    {
        name: 'Smiling Face with Sunglasses',
        unified: '1F60E',
        emoticons: ['8)'],
        keywords: [
            'face',
            'cool',
            'smile',
            'summer',
            'beach',
            'sunglass'
        ],
        sheet: [30, 38],
        shortName: 'sunglasses'
    },
    {
        name: 'Left Luggage',
        unified: '1F6C5',
        keywords: ['blue-square', 'travel'],
        sheet: [36, 46],
        shortName: 'left_luggage'
    },
    {
        name: 'Wind Chime',
        unified: '1F390',
        keywords: [
            'nature',
            'ding',
            'spring',
            'bell'
        ],
        sheet: [8, 35],
        shortName: 'wind_chime'
    },
    {
        name: 'Strawberry',
        unified: '1F353',
        keywords: [
            'fruit',
            'food',
            'nature'
        ],
        sheet: [7, 21],
        shortName: 'strawberry'
    },
    {
        name: 'Desert',
        unified: '1F3DC-FE0F',
        keywords: [
            'photo',
            'warm',
            'saharah'
        ],
        sheet: [11, 45],
        hidden: ['messenger'],
        shortName: 'desert'
    },
    {
        name: 'Studio Microphone',
        unified: '1F399-FE0F',
        keywords: [
            'sing',
            'recording',
            'artist',
            'talkshow'
        ],
        sheet: [8, 41],
        hidden: ['messenger'],
        shortName: 'studio_microphone'
    },
    {
        name: 'Albania Flag',
        unified: '1F1E6-1F1F1',
        sheet: [0, 37],
        shortName: 'flag-al'
    },
    {
        name: 'Tiger',
        unified: '1F405',
        keywords: [
            'animal',
            'nature',
            'roar'
        ],
        sheet: [12, 35],
        shortName: 'tiger2'
    },
    {
        name: 'Smiling Face with Heart-Shaped Eyes',
        unified: '1F60D',
        keywords: [
            'face',
            'love',
            'like',
            'affection',
            'valentines',
            'infatuation',
            'crush',
            'heart'
        ],
        sheet: [30, 37],
        shortName: 'heart_eyes'
    },
    {
        name: 'Desert Island',
        unified: '1F3DD-FE0F',
        keywords: [
            'photo',
            'tropical',
            'mojito'
        ],
        sheet: [11, 46],
        hidden: ['messenger'],
        shortName: 'desert_island'
    },
    {
        name: 'Kiwifruit',
        unified: '1F95D',
        sheet: [42, 9],
        hidden: ['messenger'],
        shortName: 'kiwifruit'
    },
    {
        name: 'Moon Viewing Ceremony',
        unified: '1F391',
        keywords: [
            'photo',
            'japan',
            'asia',
            'tsukimi'
        ],
        sheet: [8, 36],
        shortName: 'rice_scene'
    },
    {
        name: 'Face Throwing a Kiss',
        unified: '1F618',
        emoticons: [':*', ':-*'],
        keywords: [
            'face',
            'love',
            'like',
            'affection',
            'valentines',
            'infatuation',
            'kiss'
        ],
        sheet: [30, 48],
        shortName: 'kissing_heart'
    },
    {
        name: 'Warning Sign',
        unified: '26A0-FE0F',
        keywords: [
            'exclamation',
            'wip',
            'alert',
            'error',
            'problem',
            'issue'
        ],
        sheet: [48, 20],
        shortName: 'warning'
    },
    {
        name: 'Armenia Flag',
        unified: '1F1E6-1F1F2',
        sheet: [0, 38],
        shortName: 'flag-am'
    },
    {
        name: 'Leopard',
        unified: '1F406',
        keywords: ['animal', 'nature'],
        sheet: [12, 36],
        shortName: 'leopard'
    },
    {
        name: 'Level Slider',
        unified: '1F39A-FE0F',
        keywords: ['scale'],
        sheet: [8, 42],
        hidden: ['messenger'],
        shortName: 'level_slider'
    },
    {
        name: 'Horse Face',
        unified: '1F434',
        keywords: [
            'animal',
            'brown',
            'nature'
        ],
        sheet: [13, 30],
        shortName: 'horse'
    },
    {
        name: 'Children Crossing',
        unified: '1F6B8',
        keywords: [
            'school',
            'warning',
            'danger',
            'sign',
            'driving',
            'yellow-diamond'
        ],
        sheet: [36, 28],
        shortName: 'children_crossing'
    },
    {
        name: 'Ribbon',
        unified: '1F380',
        keywords: [
            'decoration',
            'pink',
            'girl',
            'bowtie'
        ],
        sheet: [8, 14],
        shortName: 'ribbon'
    },
    {
        name: 'National Park',
        unified: '1F3DE-FE0F',
        keywords: [
            'photo',
            'environment',
            'nature'
        ],
        sheet: [11, 47],
        hidden: ['messenger'],
        shortName: 'national_park'
    },
    {
        name: 'Control Knobs',
        unified: '1F39B-FE0F',
        keywords: ['dial'],
        sheet: [8, 43],
        hidden: ['messenger'],
        shortName: 'control_knobs'
    },
    {
        name: 'Kissing Face',
        unified: '1F617',
        keywords: [
            'love',
            'like',
            'face',
            '3',
            'valentines',
            'infatuation',
            'kiss'
        ],
        sheet: [30, 47],
        shortName: 'kissing'
    },
    {
        name: 'Tomato',
        unified: '1F345',
        keywords: [
            'fruit',
            'vegetable',
            'nature',
            'food'
        ],
        sheet: [7, 7],
        shortName: 'tomato'
    },
    {
        name: 'Angola Flag',
        unified: '1F1E6-1F1F4',
        sheet: [0, 39],
        shortName: 'flag-ao'
    },
    {
        name: 'Stadium',
        unified: '1F3DF-FE0F',
        keywords: [
            'photo',
            'place',
            'sports',
            'concert',
            'venue'
        ],
        sheet: [11, 48],
        hidden: ['messenger'],
        shortName: 'stadium'
    },
    {
        name: 'Antarctica Flag',
        unified: '1F1E6-1F1F6',
        sheet: [0, 40],
        shortName: 'flag-aq'
    },
    {
        name: 'Wrapped Present',
        unified: '1F381',
        keywords: [
            'present',
            'birthday',
            'christmas',
            'xmas'
        ],
        sheet: [8, 15],
        shortName: 'gift'
    },
    {
        name: 'No Entry',
        unified: '26D4',
        keywords: [
            'limit',
            'security',
            'privacy',
            'bad',
            'denied',
            'stop',
            'circle'
        ],
        sheet: [48, 35],
        shortName: 'no_entry'
    },
    {
        name: 'Kissing Face with Smiling Eyes',
        unified: '1F619',
        keywords: [
            'face',
            'affection',
            'valentines',
            'infatuation',
            'kiss'
        ],
        sheet: [30, 49],
        shortName: 'kissing_smiling_eyes'
    },
    {
        name: 'Coconut',
        unified: '1F965',
        keywords: [
            'fruit',
            'nature',
            'food',
            'palm'
        ],
        sheet: [42, 17],
        hidden: ['messenger'],
        shortName: 'coconut'
    },
    {
        name: 'Horse',
        unified: '1F40E',
        keywords: [
            'animal',
            'gamble',
            'luck'
        ],
        sheet: [12, 44],
        shortName: 'racehorse'
    },
    {
        name: 'Microphone',
        unified: '1F3A4',
        keywords: [
            'sound',
            'music',
            'PA',
            'sing',
            'talkshow'
        ],
        sheet: [8, 50],
        shortName: 'microphone'
    },
    {
        name: 'Classical Building',
        unified: '1F3DB-FE0F',
        keywords: [
            'art',
            'culture',
            'history'
        ],
        sheet: [11, 44],
        hidden: ['messenger'],
        shortName: 'classical_building'
    },
    {
        name: 'No Entry Sign',
        unified: '1F6AB',
        keywords: [
            'forbid',
            'stop',
            'limit',
            'denied',
            'disallow',
            'circle'
        ],
        sheet: [35, 16],
        shortName: 'no_entry_sign'
    },
    {
        name: 'Reminder Ribbon',
        unified: '1F397-FE0F',
        keywords: [
            'sports',
            'cause',
            'support',
            'awareness'
        ],
        sheet: [8, 40],
        hidden: ['messenger'],
        shortName: 'reminder_ribbon'
    },
    {
        name: 'Kissing Face with Closed Eyes',
        unified: '1F61A',
        keywords: [
            'face',
            'love',
            'like',
            'affection',
            'valentines',
            'infatuation',
            'kiss'
        ],
        sheet: [30, 50],
        shortName: 'kissing_closed_eyes'
    },
    {
        name: 'Unicorn Face',
        unified: '1F984',
        sheet: [42, 28],
        hidden: ['messenger'],
        shortName: 'unicorn_face'
    },
    {
        name: 'Argentina Flag',
        unified: '1F1E6-1F1F7',
        sheet: [0, 41],
        shortName: 'flag-ar'
    },
    {
        name: 'Headphone',
        unified: '1F3A7',
        keywords: [
            'music',
            'score',
            'gadgets'
        ],
        sheet: [9, 1],
        shortName: 'headphones'
    },
    {
        name: 'Avocado',
        unified: '1F951',
        keywords: ['fruit', 'food'],
        sheet: [41, 49],
        hidden: ['messenger'],
        shortName: 'avocado'
    },
    {
        name: 'White Smiling Face',
        unified: '263A-FE0F',
        keywords: [
            'face',
            'blush',
            'massage',
            'happiness'
        ],
        sheet: [47, 41],
        shortName: 'relaxed'
    },
    {
        name: 'Zebra Face',
        unified: '1F993',
        sheet: [42, 43],
        hidden: ['messenger'],
        shortName: 'zebra_face'
    },
    {
        name: 'Aubergine',
        unified: '1F346',
        keywords: [
            'vegetable',
            'nature',
            'food',
            'aubergine'
        ],
        sheet: [7, 8],
        shortName: 'eggplant'
    },
    {
        name: 'Radio',
        unified: '1F4FB',
        keywords: [
            'communication',
            'music',
            'podcast',
            'program'
        ],
        sheet: [26, 50],
        shortName: 'radio'
    },
    {
        name: 'Building Construction',
        unified: '1F3D7-FE0F',
        keywords: [
            'wip',
            'working',
            'progress'
        ],
        sheet: [11, 40],
        hidden: ['messenger'],
        shortName: 'building_construction'
    },
    {
        name: 'American Samoa Flag',
        unified: '1F1E6-1F1F8',
        sheet: [0, 42],
        shortName: 'flag-as'
    },
    {
        name: 'Admission Tickets',
        unified: '1F39F-FE0F',
        sheet: [8, 45],
        hidden: ['messenger'],
        shortName: 'admission_tickets'
    },
    {
        name: 'No Bicycles',
        unified: '1F6B3',
        keywords: [
            'cyclist',
            'prohibited',
            'circle'
        ],
        sheet: [35, 24],
        shortName: 'no_bicycles'
    },
    {
        name: 'No Smoking Symbol',
        unified: '1F6AD',
        keywords: [
            'cigarette',
            'blue-square',
            'smell',
            'smoke'
        ],
        sheet: [35, 18],
        shortName: 'no_smoking'
    },
    {
        name: 'Slightly Smiling Face',
        unified: '1F642',
        emoticons: [':)', '(:', ':-)'],
        keywords: ['face', 'smile'],
        sheet: [31, 38],
        shortName: 'slightly_smiling_face'
    },
    {
        name: 'Austria Flag',
        unified: '1F1E6-1F1F9',
        sheet: [0, 43],
        shortName: 'flag-at'
    },
    {
        name: 'Ticket',
        unified: '1F3AB',
        keywords: [
            'event',
            'concert',
            'pass'
        ],
        sheet: [9, 5],
        shortName: 'ticket'
    },
    {
        name: 'Saxophone',
        unified: '1F3B7',
        keywords: [
            'music',
            'instrument',
            'jazz',
            'blues'
        ],
        sheet: [9, 17],
        shortName: 'saxophone'
    },
    {
        name: 'Deer',
        unified: '1F98C',
        keywords: [
            'animal',
            'nature',
            'horns',
            'venison'
        ],
        sheet: [42, 36],
        hidden: ['messenger'],
        shortName: 'deer'
    },
    {
        name: 'House Buildings',
        unified: '1F3D8-FE0F',
        sheet: [11, 41],
        hidden: ['messenger'],
        shortName: 'house_buildings'
    },
    {
        name: 'Potato',
        unified: '1F954',
        keywords: [
            'food',
            'tuber',
            'vegatable',
            'starch'
        ],
        sheet: [42, 0],
        hidden: ['messenger'],
        shortName: 'potato'
    },
    {
        name: 'Guitar',
        unified: '1F3B8',
        keywords: ['music', 'instrument'],
        sheet: [9, 18],
        shortName: 'guitar'
    },
    {
        name: 'Carrot',
        unified: '1F955',
        keywords: [
            'vegetable',
            'food',
            'orange'
        ],
        sheet: [42, 1],
        hidden: ['messenger'],
        shortName: 'carrot'
    },
    {
        name: 'Cityscape',
        unified: '1F3D9-FE0F',
        keywords: [
            'photo',
            'night life',
            'urban'
        ],
        sheet: [11, 42],
        hidden: ['messenger'],
        shortName: 'cityscape'
    },
    {
        name: 'Australia Flag',
        unified: '1F1E6-1F1FA',
        sheet: [0, 44],
        shortName: 'flag-au'
    },
    {
        name: 'Do Not Litter Symbol',
        unified: '1F6AF',
        keywords: [
            'trash',
            'bin',
            'garbage',
            'circle'
        ],
        sheet: [35, 20],
        shortName: 'do_not_litter'
    },
    {
        name: 'Hugging Face',
        unified: '1F917',
        sheet: [37, 31],
        hidden: ['messenger'],
        shortName: 'hugging_face'
    },
    {
        name: 'Cow Face',
        unified: '1F42E',
        keywords: [
            'beef',
            'ox',
            'animal',
            'nature',
            'moo',
            'milk'
        ],
        sheet: [13, 24],
        shortName: 'cow'
    },
    {
        name: 'Medal',
        unified: '1F396-FE0F',
        sheet: [8, 39],
        hidden: ['messenger'],
        shortName: 'medal'
    },
    {
        name: 'Musical Keyboard',
        unified: '1F3B9',
        keywords: [
            'piano',
            'instrument',
            'compose'
        ],
        sheet: [9, 19],
        shortName: 'musical_keyboard'
    },
    {
        name: 'Ear of Maize',
        unified: '1F33D',
        keywords: [
            'food',
            'vegetable',
            'plant'
        ],
        sheet: [6, 51],
        shortName: 'corn'
    },
    {
        name: 'Derelict House Building',
        unified: '1F3DA-FE0F',
        sheet: [11, 43],
        hidden: ['messenger'],
        shortName: 'derelict_house_building'
    },
    {
        name: 'Non-Potable Water Symbol',
        unified: '1F6B1',
        keywords: [
            'drink',
            'faucet',
            'tap',
            'circle'
        ],
        sheet: [35, 22],
        shortName: 'non-potable_water'
    },
    {
        name: 'Trophy',
        unified: '1F3C6',
        keywords: [
            'win',
            'award',
            'contest',
            'place',
            'ftw',
            'ceremony'
        ],
        sheet: [10, 19],
        shortName: 'trophy'
    },
    {
        name: 'Aruba Flag',
        unified: '1F1E6-1F1FC',
        sheet: [0, 45],
        shortName: 'flag-aw'
    },
    {
        name: 'Grinning Face with Star Eyes',
        unified: '1F929',
        sheet: [38, 49],
        hidden: ['messenger'],
        shortNames: [
            'grinning_face_with_star_eyes'
        ],
        shortName: 'star-struck'
    },
    {
        name: 'Ox',
        unified: '1F402',
        keywords: ['animal', 'cow', 'beef'],
        sheet: [12, 32],
        shortName: 'ox'
    },
    {
        name: 'Trumpet',
        unified: '1F3BA',
        keywords: ['music', 'brass'],
        sheet: [9, 20],
        shortName: 'trumpet'
    },
    {
        name: 'Hot Pepper',
        unified: '1F336-FE0F',
        keywords: [
            'food',
            'spicy',
            'chilli',
            'chili'
        ],
        sheet: [6, 44],
        hidden: ['messenger'],
        shortName: 'hot_pepper'
    },
    {
        name: 'Sports Medal',
        unified: '1F3C5',
        sheet: [10, 18],
        hidden: ['messenger'],
        shortName: 'sports_medal'
    },
    {
        name: 'Åland Islands Flag',
        unified: '1F1E6-1F1FD',
        sheet: [0, 46],
        shortName: 'flag-ax'
    },
    {
        name: 'Water Buffalo',
        unified: '1F403',
        keywords: [
            'animal',
            'nature',
            'ox',
            'cow'
        ],
        sheet: [12, 33],
        shortName: 'water_buffalo'
    },
    {
        name: 'No Pedestrians',
        unified: '1F6B7',
        keywords: [
            'rules',
            'crossing',
            'walking',
            'circle'
        ],
        sheet: [36, 27],
        shortName: 'no_pedestrians'
    },
    {
        name: 'Thinking Face',
        unified: '1F914',
        sheet: [37, 28],
        hidden: ['messenger'],
        shortName: 'thinking_face'
    },
    {
        name: 'House Building',
        unified: '1F3E0',
        keywords: ['building', 'home'],
        sheet: [11, 49],
        shortName: 'house'
    },
    {
        name: 'No Mobile Phones',
        unified: '1F4F5',
        keywords: [
            'iphone',
            'mute',
            'circle'
        ],
        sheet: [26, 44],
        shortName: 'no_mobile_phones'
    },
    {
        name: 'Azerbaijan Flag',
        unified: '1F1E6-1F1FF',
        sheet: [0, 47],
        shortName: 'flag-az'
    },
    {
        name: 'First Place Medal',
        unified: '1F947',
        sheet: [41, 42],
        hidden: ['messenger'],
        shortName: 'first_place_medal'
    },
    {
        name: 'House with Garden',
        unified: '1F3E1',
        keywords: [
            'home',
            'plant',
            'nature'
        ],
        sheet: [11, 50],
        shortName: 'house_with_garden'
    },
    {
        name: 'Violin',
        unified: '1F3BB',
        keywords: [
            'music',
            'instrument',
            'orchestra',
            'symphony'
        ],
        sheet: [9, 21],
        shortName: 'violin'
    },
    {
        name: 'Face with One Eyebrow Raised',
        unified: '1F928',
        sheet: [38, 48],
        hidden: ['messenger'],
        shortNames: [
            'face_with_one_eyebrow_raised'
        ],
        shortName: 'face_with_raised_eyebrow'
    },
    {
        name: 'Cucumber',
        unified: '1F952',
        keywords: [
            'fruit',
            'food',
            'pickle'
        ],
        sheet: [41, 50],
        hidden: ['messenger'],
        shortName: 'cucumber'
    },
    {
        name: 'Cow',
        unified: '1F404',
        keywords: [
            'beef',
            'ox',
            'animal',
            'nature',
            'moo',
            'milk'
        ],
        sheet: [12, 34],
        shortName: 'cow2'
    },
    {
        name: 'Bosnia & Herzegovina Flag',
        unified: '1F1E7-1F1E6',
        sheet: [0, 48],
        hidden: ['messenger'],
        shortName: 'flag-ba'
    },
    {
        name: 'Pig Face',
        unified: '1F437',
        keywords: [
            'animal',
            'oink',
            'nature'
        ],
        sheet: [13, 33],
        shortName: 'pig'
    },
    {
        name: 'Drum with Drumsticks',
        unified: '1F941',
        sheet: [41, 37],
        hidden: ['messenger'],
        shortName: 'drum_with_drumsticks'
    },
    {
        name: 'No One Under Eighteen Symbol',
        unified: '1F51E',
        keywords: [
            '18',
            'drink',
            'pub',
            'night',
            'minor',
            'circle'
        ],
        sheet: [27, 32],
        shortName: 'underage'
    },
    {
        name: 'Broccoli',
        unified: '1F966',
        keywords: [
            'fruit',
            'food',
            'vegetable'
        ],
        sheet: [42, 18],
        hidden: ['messenger'],
        shortName: 'broccoli'
    },
    {
        name: 'Office Building',
        unified: '1F3E2',
        keywords: [
            'building',
            'bureau',
            'work'
        ],
        sheet: [11, 51],
        shortName: 'office'
    },
    {
        name: 'Second Place Medal',
        unified: '1F948',
        sheet: [41, 43],
        hidden: ['messenger'],
        shortName: 'second_place_medal'
    },
    {
        name: 'Neutral Face',
        unified: '1F610',
        emoticons: [':|', ':-|'],
        keywords: [
            'indifference',
            'meh',
            ':|',
            'neutral'
        ],
        sheet: [30, 40],
        shortName: 'neutral_face'
    },
    {
        name: 'Third Place Medal',
        unified: '1F949',
        sheet: [41, 44],
        hidden: ['messenger'],
        shortName: 'third_place_medal'
    },
    {
        name: 'Mushroom',
        unified: '1F344',
        keywords: ['plant', 'vegetable'],
        sheet: [7, 6],
        shortName: 'mushroom'
    },
    {
        name: 'Barbados Flag',
        unified: '1F1E7-1F1E7',
        sheet: [0, 49],
        shortName: 'flag-bb'
    },
    {
        name: 'Radioactive Sign',
        unified: '2622-FE0F',
        sheet: [47, 33],
        hidden: ['messenger'],
        shortName: 'radioactive_sign'
    },
    {
        name: 'Pig',
        unified: '1F416',
        keywords: ['animal', 'nature'],
        sheet: [13, 0],
        shortName: 'pig2'
    },
    {
        name: 'Expressionless Face',
        unified: '1F611',
        keywords: [
            'face',
            'indifferent',
            '-_-',
            'meh',
            'deadpan'
        ],
        sheet: [30, 41],
        shortName: 'expressionless'
    },
    {
        name: 'Mobile Phone',
        unified: '1F4F1',
        keywords: [
            'technology',
            'apple',
            'gadgets',
            'dial'
        ],
        sheet: [26, 40],
        shortName: 'iphone'
    },
    {
        name: 'Japanese Post Office',
        unified: '1F3E3',
        keywords: [
            'building',
            'envelope',
            'communication'
        ],
        sheet: [12, 0],
        shortName: 'post_office'
    },
    {
        name: 'European Post Office',
        unified: '1F3E4',
        keywords: ['building', 'email'],
        sheet: [12, 1],
        shortName: 'european_post_office'
    },
    {
        name: 'Soccer Ball',
        unified: '26BD',
        keywords: ['sports', 'football'],
        sheet: [48, 26],
        shortName: 'soccer'
    },
    {
        name: 'Boar',
        unified: '1F417',
        keywords: ['animal', 'nature'],
        sheet: [13, 1],
        shortName: 'boar'
    },
    {
        name: 'Peanuts',
        unified: '1F95C',
        keywords: ['food', 'nut'],
        sheet: [42, 8],
        hidden: ['messenger'],
        shortName: 'peanuts'
    },
    {
        name: 'Mobile Phone with Rightwards Arrow at Left',
        unified: '1F4F2',
        keywords: ['iphone', 'incoming'],
        sheet: [26, 41],
        shortName: 'calling'
    },
    {
        name: 'Biohazard Sign',
        unified: '2623-FE0F',
        sheet: [47, 34],
        hidden: ['messenger'],
        shortName: 'biohazard_sign'
    },
    {
        name: 'Bangladesh Flag',
        unified: '1F1E7-1F1E9',
        sheet: [0, 50],
        shortName: 'flag-bd'
    },
    {
        name: 'Face Without Mouth',
        unified: '1F636',
        keywords: ['face', 'hellokitty'],
        sheet: [31, 26],
        shortName: 'no_mouth'
    },
    {
        name: 'Face with Rolling Eyes',
        unified: '1F644',
        sheet: [31, 40],
        hidden: ['messenger'],
        shortName: 'face_with_rolling_eyes'
    },
    {
        name: 'Black Telephone',
        unified: '260E-FE0F',
        keywords: [
            'technology',
            'communication',
            'dial',
            'telephone'
        ],
        sheet: [47, 21],
        shortNames: ['telephone'],
        shortName: 'phone'
    },
    {
        name: 'Pig Nose',
        unified: '1F43D',
        keywords: ['animal', 'oink'],
        sheet: [13, 39],
        shortName: 'pig_nose'
    },
    {
        name: 'Chestnut',
        unified: '1F330',
        keywords: ['food', 'squirrel'],
        sheet: [6, 38],
        shortName: 'chestnut'
    },
    {
        name: 'Upwards Black Arrow',
        unified: '2B06-FE0F',
        keywords: [
            'blue-square',
            'continue',
            'top',
            'direction'
        ],
        sheet: [50, 18],
        shortName: 'arrow_up'
    },
    {
        name: 'Hospital',
        unified: '1F3E5',
        keywords: [
            'building',
            'health',
            'surgery',
            'doctor'
        ],
        sheet: [12, 2],
        shortName: 'hospital'
    },
    {
        name: 'Belgium Flag',
        unified: '1F1E7-1F1EA',
        sheet: [0, 51],
        shortName: 'flag-be'
    },
    {
        name: 'Baseball',
        unified: '26BE',
        keywords: ['sports', 'balls'],
        sheet: [48, 27],
        shortName: 'baseball'
    },
    {
        name: 'Smirking Face',
        unified: '1F60F',
        keywords: [
            'face',
            'smile',
            'mean',
            'prank',
            'smug',
            'sarcasm'
        ],
        sheet: [30, 39],
        shortName: 'smirk'
    },
    {
        name: 'North East Arrow',
        unified: '2197-FE0F',
        keywords: [
            'blue-square',
            'point',
            'direction',
            'diagonal',
            'northeast'
        ],
        sheet: [46, 36],
        shortName: 'arrow_upper_right'
    },
    {
        name: 'Burkina Faso Flag',
        unified: '1F1E7-1F1EB',
        sheet: [1, 0],
        shortName: 'flag-bf'
    },
    {
        name: 'Basketball and Hoop',
        unified: '1F3C0',
        keywords: [
            'sports',
            'balls',
            'NBA'
        ],
        sheet: [9, 26],
        shortName: 'basketball'
    },
    {
        name: 'Ram',
        unified: '1F40F',
        keywords: [
            'animal',
            'sheep',
            'nature'
        ],
        sheet: [12, 45],
        shortName: 'ram'
    },
    {
        name: 'Bank',
        unified: '1F3E6',
        keywords: [
            'building',
            'money',
            'sales',
            'cash',
            'business',
            'enterprise'
        ],
        sheet: [12, 3],
        shortName: 'bank'
    },
    {
        name: 'Bread',
        unified: '1F35E',
        keywords: [
            'food',
            'wheat',
            'breakfast',
            'toast'
        ],
        sheet: [7, 32],
        shortName: 'bread'
    },
    {
        name: 'Telephone Receiver',
        unified: '1F4DE',
        keywords: [
            'technology',
            'communication',
            'dial'
        ],
        sheet: [26, 21],
        shortName: 'telephone_receiver'
    },
    {
        name: 'Croissant',
        unified: '1F950',
        keywords: [
            'food',
            'bread',
            'french'
        ],
        sheet: [41, 48],
        hidden: ['messenger'],
        shortName: 'croissant'
    },
    {
        name: 'Pager',
        unified: '1F4DF',
        keywords: [
            'bbcall',
            'oldschool',
            '90s'
        ],
        sheet: [26, 22],
        shortName: 'pager'
    },
    {
        name: 'Sheep',
        unified: '1F411',
        keywords: [
            'animal',
            'nature',
            'wool',
            'shipit'
        ],
        sheet: [12, 47],
        shortName: 'sheep'
    },
    {
        name: 'Black Rightwards Arrow',
        unified: '27A1-FE0F',
        keywords: ['blue-square', 'next'],
        sheet: [50, 12],
        shortName: 'arrow_right'
    },
    {
        name: 'Persevering Face',
        unified: '1F623',
        keywords: [
            'face',
            'sick',
            'no',
            'upset',
            'oops'
        ],
        sheet: [31, 7],
        shortName: 'persevere'
    },
    {
        name: 'Bulgaria Flag',
        unified: '1F1E7-1F1EC',
        sheet: [1, 1],
        shortName: 'flag-bg'
    },
    {
        name: 'Volleyball',
        unified: '1F3D0',
        keywords: ['sports', 'balls'],
        sheet: [11, 33],
        hidden: ['messenger'],
        shortName: 'volleyball'
    },
    {
        name: 'Hotel',
        unified: '1F3E8',
        keywords: [
            'building',
            'accomodation',
            'checkin'
        ],
        sheet: [12, 5],
        shortName: 'hotel'
    },
    {
        name: 'South East Arrow',
        unified: '2198-FE0F',
        keywords: [
            'blue-square',
            'direction',
            'diagonal',
            'southeast'
        ],
        sheet: [46, 37],
        shortName: 'arrow_lower_right'
    },
    {
        name: 'Goat',
        unified: '1F410',
        keywords: ['animal', 'nature'],
        sheet: [12, 46],
        shortName: 'goat'
    },
    {
        name: 'Bahrain Flag',
        unified: '1F1E7-1F1ED',
        sheet: [1, 2],
        shortName: 'flag-bh'
    },
    {
        name: 'Love Hotel',
        unified: '1F3E9',
        keywords: [
            'like',
            'affection',
            'dating'
        ],
        sheet: [12, 6],
        shortName: 'love_hotel'
    },
    {
        name: 'Disappointed but Relieved Face',
        unified: '1F625',
        keywords: [
            'face',
            'phew',
            'sweat',
            'nervous'
        ],
        sheet: [31, 9],
        shortName: 'disappointed_relieved'
    },
    {
        name: 'Baguette Bread',
        unified: '1F956',
        keywords: [
            'food',
            'bread',
            'french'
        ],
        sheet: [42, 2],
        hidden: ['messenger'],
        shortName: 'baguette_bread'
    },
    {
        name: 'American Football',
        unified: '1F3C8',
        keywords: [
            'sports',
            'balls',
            'NFL'
        ],
        sheet: [10, 26],
        shortName: 'football'
    },
    {
        name: 'Fax Machine',
        unified: '1F4E0',
        keywords: [
            'communication',
            'technology'
        ],
        sheet: [26, 23],
        shortName: 'fax'
    },
    {
        name: 'Convenience Store',
        unified: '1F3EA',
        keywords: [
            'building',
            'shopping',
            'groceries'
        ],
        sheet: [12, 7],
        shortName: 'convenience_store'
    },
    {
        name: 'Dromedary Camel',
        unified: '1F42A',
        keywords: [
            'animal',
            'hot',
            'desert',
            'hump'
        ],
        sheet: [13, 20],
        shortName: 'dromedary_camel'
    },
    {
        name: 'Downwards Black Arrow',
        unified: '2B07-FE0F',
        keywords: [
            'blue-square',
            'direction',
            'bottom'
        ],
        sheet: [50, 19],
        shortName: 'arrow_down'
    },
    {
        name: 'Battery',
        unified: '1F50B',
        keywords: [
            'power',
            'energy',
            'sustain'
        ],
        sheet: [27, 13],
        shortName: 'battery'
    },
    {
        name: 'Rugby Football',
        unified: '1F3C9',
        keywords: ['sports', 'team'],
        sheet: [10, 27],
        shortName: 'rugby_football'
    },
    {
        name: 'Pretzel',
        unified: '1F968',
        keywords: [
            'food',
            'bread',
            'twisted'
        ],
        sheet: [42, 20],
        hidden: ['messenger'],
        shortName: 'pretzel'
    },
    {
        name: 'Face with Open Mouth',
        unified: '1F62E',
        emoticons: [
            ':o',
            ':-o',
            ':O',
            ':-O'
        ],
        keywords: [
            'face',
            'surprise',
            'impressed',
            'wow',
            'whoa',
            ':O'
        ],
        sheet: [31, 18],
        shortName: 'open_mouth'
    },
    {
        name: 'Burundi Flag',
        unified: '1F1E7-1F1EE',
        sheet: [1, 3],
        shortName: 'flag-bi'
    },
    {
        name: 'Benin Flag',
        unified: '1F1E7-1F1EF',
        sheet: [1, 4],
        shortName: 'flag-bj'
    },
    {
        name: 'Pancakes',
        unified: '1F95E',
        keywords: [
            'food',
            'breakfast',
            'flapjacks',
            'hotcakes'
        ],
        sheet: [42, 10],
        hidden: ['messenger'],
        shortName: 'pancakes'
    },
    {
        name: 'School',
        unified: '1F3EB',
        keywords: [
            'building',
            'student',
            'education',
            'learn',
            'teach'
        ],
        sheet: [12, 8],
        shortName: 'school'
    },
    {
        name: 'Tennis Racquet and Ball',
        unified: '1F3BE',
        keywords: [
            'sports',
            'balls',
            'green'
        ],
        sheet: [9, 24],
        shortName: 'tennis'
    },
    {
        name: 'Zipper-Mouth Face',
        unified: '1F910',
        keywords: [
            'face',
            'sealed',
            'zipper',
            'secret'
        ],
        sheet: [37, 24],
        hidden: ['messenger'],
        shortName: 'zipper_mouth_face'
    },
    {
        name: 'Bactrian Camel',
        unified: '1F42B',
        keywords: [
            'animal',
            'nature',
            'hot',
            'desert',
            'hump'
        ],
        sheet: [13, 21],
        shortName: 'camel'
    },
    {
        name: 'South West Arrow',
        unified: '2199-FE0F',
        keywords: [
            'blue-square',
            'direction',
            'diagonal',
            'southwest'
        ],
        sheet: [46, 38],
        shortName: 'arrow_lower_left'
    },
    {
        name: 'Electric Plug',
        unified: '1F50C',
        keywords: ['charger', 'power'],
        sheet: [27, 14],
        shortName: 'electric_plug'
    },
    {
        name: 'Cheese Wedge',
        unified: '1F9C0',
        sheet: [42, 48],
        hidden: ['messenger'],
        shortName: 'cheese_wedge'
    },
    {
        name: 'Hushed Face',
        unified: '1F62F',
        keywords: ['face', 'woo', 'shh'],
        sheet: [31, 19],
        shortName: 'hushed'
    },
    {
        name: 'Personal Computer',
        unified: '1F4BB',
        keywords: [
            'technology',
            'laptop',
            'screen',
            'display',
            'monitor'
        ],
        sheet: [25, 38],
        shortName: 'computer'
    },
    {
        name: 'Giraffe Face',
        unified: '1F992',
        sheet: [42, 42],
        hidden: ['messenger'],
        shortName: 'giraffe_face'
    },
    {
        name: 'Billiards',
        unified: '1F3B1',
        keywords: [
            'pool',
            'hobby',
            'game',
            'luck',
            'magic'
        ],
        sheet: [9, 11],
        shortName: '8ball'
    },
    {
        name: 'St. Barthélemy Flag',
        unified: '1F1E7-1F1F1',
        sheet: [1, 5],
        hidden: ['google'],
        shortName: 'flag-bl'
    },
    {
        name: 'Leftwards Black Arrow',
        unified: '2B05-FE0F',
        keywords: [
            'blue-square',
            'previous',
            'back'
        ],
        sheet: [50, 17],
        shortName: 'arrow_left'
    },
    {
        name: 'Department Store',
        unified: '1F3EC',
        keywords: [
            'building',
            'shopping',
            'mall'
        ],
        sheet: [12, 9],
        shortName: 'department_store'
    },
    {
        name: 'Meat on Bone',
        unified: '1F356',
        keywords: [
            'good',
            'food',
            'drumstick'
        ],
        sheet: [7, 24],
        shortName: 'meat_on_bone'
    },
    {
        name: 'North West Arrow',
        unified: '2196-FE0F',
        keywords: [
            'blue-square',
            'point',
            'direction',
            'diagonal',
            'northwest'
        ],
        sheet: [46, 35],
        shortName: 'arrow_upper_left'
    },
    {
        name: 'Bermuda Flag',
        unified: '1F1E7-1F1F2',
        sheet: [1, 6],
        shortName: 'flag-bm'
    },
    {
        name: 'Sleepy Face',
        unified: '1F62A',
        keywords: [
            'face',
            'tired',
            'rest',
            'nap'
        ],
        sheet: [31, 14],
        shortName: 'sleepy'
    },
    {
        name: 'Bowling',
        unified: '1F3B3',
        keywords: ['sports', 'fun', 'play'],
        sheet: [9, 13],
        shortName: 'bowling'
    },
    {
        name: 'Factory',
        unified: '1F3ED',
        keywords: [
            'building',
            'industry',
            'pollution',
            'smoke'
        ],
        sheet: [12, 10],
        shortName: 'factory'
    },
    {
        name: 'Desktop Computer',
        unified: '1F5A5-FE0F',
        keywords: [
            'technology',
            'computing',
            'screen'
        ],
        sheet: [29, 51],
        hidden: ['messenger'],
        shortName: 'desktop_computer'
    },
    {
        name: 'Elephant',
        unified: '1F418',
        keywords: [
            'animal',
            'nature',
            'nose',
            'th',
            'circus'
        ],
        sheet: [13, 2],
        shortName: 'elephant'
    },
    {
        name: 'Rhinoceros',
        unified: '1F98F',
        keywords: [
            'animal',
            'nature',
            'horn'
        ],
        sheet: [42, 39],
        hidden: ['messenger'],
        shortName: 'rhinoceros'
    },
    {
        name: 'Up Down Arrow',
        unified: '2195-FE0F',
        keywords: [
            'blue-square',
            'direction',
            'way',
            'vertical'
        ],
        sheet: [46, 34],
        shortName: 'arrow_up_down'
    },
    {
        name: 'Cricket Bat and Ball',
        unified: '1F3CF',
        sheet: [11, 32],
        hidden: ['messenger'],
        shortName: 'cricket_bat_and_ball'
    },
    {
        name: 'Printer',
        unified: '1F5A8-FE0F',
        keywords: ['paper', 'ink'],
        sheet: [30, 0],
        hidden: ['messenger'],
        shortName: 'printer'
    },
    {
        name: 'Poultry Leg',
        unified: '1F357',
        keywords: [
            'food',
            'meat',
            'drumstick',
            'bird',
            'chicken',
            'turkey'
        ],
        sheet: [7, 25],
        shortName: 'poultry_leg'
    },
    {
        name: 'Tired Face',
        unified: '1F62B',
        keywords: [
            'sick',
            'whine',
            'upset',
            'frustrated'
        ],
        sheet: [31, 15],
        shortName: 'tired_face'
    },
    {
        name: 'Japanese Castle',
        unified: '1F3EF',
        keywords: ['photo', 'building'],
        sheet: [12, 12],
        shortName: 'japanese_castle'
    },
    {
        name: 'Brunei Flag',
        unified: '1F1E7-1F1F3',
        sheet: [1, 7],
        hidden: ['messenger'],
        shortName: 'flag-bn'
    },
    {
        name: 'Field Hockey Stick and Ball',
        unified: '1F3D1',
        sheet: [11, 34],
        hidden: ['messenger'],
        shortName: 'field_hockey_stick_and_ball'
    },
    {
        name: 'Sleeping Face',
        unified: '1F634',
        keywords: [
            'face',
            'tired',
            'sleepy',
            'night',
            'zzz'
        ],
        sheet: [31, 24],
        shortName: 'sleeping'
    },
    {
        name: 'Left Right Arrow',
        unified: '2194-FE0F',
        keywords: [
            'shape',
            'direction',
            'horizontal',
            'sideways'
        ],
        sheet: [46, 33],
        shortName: 'left_right_arrow'
    },
    {
        name: 'Keyboard',
        unified: '2328-FE0F',
        keywords: [
            'technology',
            'computer',
            'type',
            'input',
            'text'
        ],
        sheet: [46, 43],
        hidden: ['messenger'],
        shortName: 'keyboard'
    },
    {
        name: 'European Castle',
        unified: '1F3F0',
        keywords: [
            'building',
            'royalty',
            'history'
        ],
        sheet: [12, 13],
        shortName: 'european_castle'
    },
    {
        name: 'Mouse Face',
        unified: '1F42D',
        keywords: [
            'animal',
            'nature',
            'cheese_wedge',
            'rodent'
        ],
        sheet: [13, 23],
        shortName: 'mouse'
    },
    {
        name: 'Bolivia Flag',
        unified: '1F1E7-1F1F4',
        sheet: [1, 8],
        shortName: 'flag-bo'
    },
    {
        name: 'Cut of Meat',
        unified: '1F969',
        sheet: [42, 21],
        hidden: ['messenger'],
        shortName: 'cut_of_meat'
    },
    {
        name: 'Ice Hockey Stick and Puck',
        unified: '1F3D2',
        sheet: [11, 35],
        hidden: ['messenger'],
        shortName: 'ice_hockey_stick_and_puck'
    },
    {
        name: 'Mouse',
        unified: '1F401',
        keywords: [
            'animal',
            'nature',
            'rodent'
        ],
        sheet: [12, 31],
        shortName: 'mouse2'
    },
    {
        name: 'Three Button Mouse',
        unified: '1F5B1-FE0F',
        sheet: [30, 1],
        hidden: ['messenger'],
        shortName: 'three_button_mouse'
    },
    {
        name: 'Leftwards Arrow with Hook',
        unified: '21A9-FE0F',
        keywords: [
            'back',
            'return',
            'blue-square',
            'undo',
            'enter'
        ],
        sheet: [46, 39],
        shortName: 'leftwards_arrow_with_hook'
    },
    {
        name: 'Bacon',
        unified: '1F953',
        keywords: [
            'food',
            'breakfast',
            'pork',
            'pig',
            'meat'
        ],
        sheet: [41, 51],
        hidden: ['messenger'],
        shortName: 'bacon'
    },
    {
        name: 'Relieved Face',
        unified: '1F60C',
        keywords: [
            'face',
            'relaxed',
            'phew',
            'massage',
            'happiness'
        ],
        sheet: [30, 36],
        shortName: 'relieved'
    },
    {
        name: 'Caribbean Netherlands Flag',
        unified: '1F1E7-1F1F6',
        sheet: [1, 9],
        hidden: ['google'],
        shortName: 'flag-bq'
    },
    {
        name: 'Wedding',
        unified: '1F492',
        keywords: [
            'love',
            'like',
            'affection',
            'couple',
            'marriage',
            'bride',
            'groom'
        ],
        sheet: [24, 44],
        shortName: 'wedding'
    },
    {
        name: 'Tokyo Tower',
        unified: '1F5FC',
        keywords: ['photo', 'japanese'],
        sheet: [30, 20],
        shortName: 'tokyo_tower'
    },
    {
        name: 'Rightwards Arrow with Hook',
        unified: '21AA-FE0F',
        keywords: [
            'blue-square',
            'return',
            'rotate',
            'direction'
        ],
        sheet: [46, 40],
        shortName: 'arrow_right_hook'
    },
    {
        name: 'Hamburger',
        unified: '1F354',
        keywords: [
            'meat',
            'fast food',
            'beef',
            'cheeseburger',
            'mcdonalds',
            'burger king'
        ],
        sheet: [7, 22],
        shortName: 'hamburger'
    },
    {
        name: 'Face with Stuck-out Tongue',
        unified: '1F61B',
        text: ':p',
        emoticons: [
            ':p',
            ':-p',
            ':P',
            ':-P',
            ':b',
            ':-b'
        ],
        keywords: [
            'face',
            'prank',
            'childish',
            'playful',
            'mischievous',
            'smile',
            'tongue'
        ],
        sheet: [30, 51],
        shortName: 'stuck_out_tongue'
    },
    {
        name: 'Trackball',
        unified: '1F5B2-FE0F',
        keywords: [
            'technology',
            'trackpad'
        ],
        sheet: [30, 2],
        hidden: ['messenger'],
        shortName: 'trackball'
    },
    {
        name: 'Brazil Flag',
        unified: '1F1E7-1F1F7',
        sheet: [1, 10],
        shortName: 'flag-br'
    },
    {
        name: 'Rat',
        unified: '1F400',
        keywords: [
            'animal',
            'mouse',
            'rodent'
        ],
        sheet: [12, 30],
        shortName: 'rat'
    },
    {
        name: 'Table Tennis Paddle and Ball',
        unified: '1F3D3',
        sheet: [11, 36],
        hidden: ['messenger'],
        shortName: 'table_tennis_paddle_and_ball'
    },
    {
        name: 'Minidisc',
        unified: '1F4BD',
        keywords: [
            'technology',
            'record',
            'data',
            'disk',
            '90s'
        ],
        sheet: [25, 40],
        shortName: 'minidisc'
    },
    {
        name: 'Face with Stuck-out Tongue and Winking Eye',
        unified: '1F61C',
        text: ';p',
        emoticons: [
            ';p',
            ';-p',
            ';b',
            ';-b',
            ';P',
            ';-P'
        ],
        keywords: [
            'face',
            'prank',
            'childish',
            'playful',
            'mischievous',
            'smile',
            'wink',
            'tongue'
        ],
        sheet: [31, 0],
        shortName: 'stuck_out_tongue_winking_eye'
    },
    {
        name: 'French Fries',
        unified: '1F35F',
        keywords: [
            'chips',
            'snack',
            'fast food'
        ],
        sheet: [7, 33],
        shortName: 'fries'
    },
    {
        name: 'Badminton Racquet and Shuttlecock',
        unified: '1F3F8',
        sheet: [12, 22],
        hidden: ['messenger'],
        shortName: 'badminton_racquet_and_shuttlecock'
    },
    {
        name: 'Statue of Liberty',
        unified: '1F5FD',
        keywords: ['american', 'newyork'],
        sheet: [30, 21],
        shortName: 'statue_of_liberty'
    },
    {
        name: 'Bahamas Flag',
        unified: '1F1E7-1F1F8',
        sheet: [1, 11],
        shortName: 'flag-bs'
    },
    {
        name: 'Arrow Pointing Rightwards Then Curving Upwards',
        unified: '2934-FE0F',
        keywords: [
            'blue-square',
            'direction',
            'top'
        ],
        sheet: [50, 15],
        shortName: 'arrow_heading_up'
    },
    {
        name: 'Hamster Face',
        unified: '1F439',
        keywords: ['animal', 'nature'],
        sheet: [13, 35],
        shortName: 'hamster'
    },
    {
        name: 'Face with Stuck-out Tongue and Tightly-Closed Eyes',
        unified: '1F61D',
        keywords: [
            'face',
            'prank',
            'playful',
            'mischievous',
            'smile',
            'tongue'
        ],
        sheet: [31, 1],
        shortName: 'stuck_out_tongue_closed_eyes'
    },
    {
        name: 'Slice of Pizza',
        unified: '1F355',
        keywords: ['food', 'party'],
        sheet: [7, 23],
        shortName: 'pizza'
    },
    {
        name: 'Boxing Glove',
        unified: '1F94A',
        keywords: ['sports', 'fighting'],
        sheet: [41, 45],
        hidden: ['messenger'],
        shortName: 'boxing_glove'
    },
    {
        name: 'Floppy Disk',
        unified: '1F4BE',
        keywords: [
            'oldschool',
            'technology',
            'save',
            '90s',
            '80s'
        ],
        sheet: [25, 41],
        shortName: 'floppy_disk'
    },
    {
        name: 'Arrow Pointing Rightwards Then Curving Downwards',
        unified: '2935-FE0F',
        keywords: [
            'blue-square',
            'direction',
            'bottom'
        ],
        sheet: [50, 16],
        shortName: 'arrow_heading_down'
    },
    {
        name: 'Bhutan Flag',
        unified: '1F1E7-1F1F9',
        sheet: [1, 12],
        shortName: 'flag-bt'
    },
    {
        name: 'Rabbit Face',
        unified: '1F430',
        keywords: [
            'animal',
            'nature',
            'pet',
            'spring',
            'magic',
            'bunny'
        ],
        sheet: [13, 26],
        shortName: 'rabbit'
    },
    {
        name: 'Church',
        unified: '26EA',
        keywords: [
            'building',
            'religion',
            'christ'
        ],
        sheet: [48, 37],
        shortName: 'church'
    },
    {
        name: 'Drooling Face',
        unified: '1F924',
        keywords: ['face'],
        sheet: [38, 27],
        hidden: ['messenger'],
        shortName: 'drooling_face'
    },
    {
        name: 'Bouvet Island Flag',
        unified: '1F1E7-1F1FB',
        sheet: [1, 13],
        shortName: 'flag-bv'
    },
    {
        name: 'Mosque',
        unified: '1F54C',
        keywords: [
            'islam',
            'worship',
            'minaret'
        ],
        sheet: [28, 15],
        hidden: ['messenger'],
        shortName: 'mosque'
    },
    {
        name: 'Rabbit',
        unified: '1F407',
        keywords: [
            'animal',
            'nature',
            'pet',
            'magic',
            'spring'
        ],
        sheet: [12, 37],
        shortName: 'rabbit2'
    },
    {
        name: 'Hot Dog',
        unified: '1F32D',
        keywords: ['food', 'frankfurter'],
        sheet: [6, 35],
        hidden: ['messenger'],
        shortName: 'hotdog'
    },
    {
        name: 'Martial Arts Uniform',
        unified: '1F94B',
        keywords: [
            'judo',
            'karate',
            'taekwondo'
        ],
        sheet: [41, 46],
        hidden: ['messenger'],
        shortName: 'martial_arts_uniform'
    },
    {
        name: 'Clockwise Downwards and Upwards Open Circle Arrows',
        unified: '1F503',
        keywords: [
            'sync',
            'cycle',
            'round',
            'repeat'
        ],
        sheet: [27, 5],
        shortName: 'arrows_clockwise'
    },
    {
        name: 'Optical Disc',
        unified: '1F4BF',
        keywords: [
            'technology',
            'dvd',
            'disk',
            'disc',
            '90s'
        ],
        sheet: [25, 42],
        shortName: 'cd'
    },
    {
        name: 'Anticlockwise Downwards and Upwards Open Circle Arrows',
        unified: '1F504',
        keywords: [
            'blue-square',
            'sync',
            'cycle'
        ],
        sheet: [27, 6],
        shortName: 'arrows_counterclockwise'
    },
    {
        name: 'Sandwich',
        unified: '1F96A',
        keywords: [
            'food',
            'lunch',
            'bread'
        ],
        sheet: [42, 22],
        hidden: ['messenger'],
        shortName: 'sandwich'
    },
    {
        name: 'Chipmunk',
        unified: '1F43F-FE0F',
        keywords: [
            'animal',
            'nature',
            'rodent',
            'squirrel'
        ],
        sheet: [13, 41],
        hidden: ['messenger'],
        shortName: 'chipmunk'
    },
    {
        name: 'Synagogue',
        unified: '1F54D',
        keywords: [
            'judaism',
            'worship',
            'temple',
            'jewish'
        ],
        sheet: [28, 16],
        hidden: ['messenger'],
        shortName: 'synagogue'
    },
    {
        name: 'Unamused Face',
        unified: '1F612',
        text: ':(',
        keywords: [
            'indifference',
            'bored',
            'straight face',
            'serious',
            'sarcasm',
            'unimpressed',
            'skeptical',
            'dubious',
            'side_eye'
        ],
        sheet: [30, 42],
        shortName: 'unamused'
    },
    {
        name: 'Goal Net',
        unified: '1F945',
        keywords: ['sports'],
        sheet: [41, 41],
        hidden: ['messenger'],
        shortName: 'goal_net'
    },
    {
        name: 'Botswana Flag',
        unified: '1F1E7-1F1FC',
        sheet: [1, 14],
        shortName: 'flag-bw'
    },
    {
        name: 'Dvd',
        unified: '1F4C0',
        keywords: ['cd', 'disk', 'disc'],
        sheet: [25, 43],
        shortName: 'dvd'
    },
    {
        name: 'Hedgehog',
        unified: '1F994',
        keywords: [
            'animal',
            'nature',
            'spiny'
        ],
        sheet: [42, 44],
        hidden: ['messenger'],
        shortName: 'hedgehog'
    },
    {
        name: 'Direct Hit',
        unified: '1F3AF',
        keywords: [
            'game',
            'play',
            'bar',
            'target',
            'bullseye'
        ],
        sheet: [9, 9],
        shortName: 'dart'
    },
    {
        name: 'Taco',
        unified: '1F32E',
        keywords: ['food', 'mexican'],
        sheet: [6, 36],
        hidden: ['messenger'],
        shortName: 'taco'
    },
    {
        name: 'Back with Leftwards Arrow Above',
        unified: '1F519',
        keywords: [
            'arrow',
            'words',
            'return'
        ],
        sheet: [27, 27],
        shortName: 'back'
    },
    {
        name: 'Belarus Flag',
        unified: '1F1E7-1F1FE',
        sheet: [1, 15],
        shortName: 'flag-by'
    },
    {
        name: 'Shinto Shrine',
        unified: '26E9-FE0F',
        keywords: [
            'temple',
            'japan',
            'kyoto'
        ],
        sheet: [48, 36],
        hidden: ['messenger'],
        shortName: 'shinto_shrine'
    },
    {
        name: 'Movie Camera',
        unified: '1F3A5',
        keywords: ['film', 'record'],
        sheet: [8, 51],
        shortName: 'movie_camera'
    },
    {
        name: 'Face with Cold Sweat',
        unified: '1F613',
        keywords: [
            'face',
            'hot',
            'sad',
            'tired',
            'exercise'
        ],
        sheet: [30, 43],
        shortName: 'sweat'
    },
    {
        name: 'Burrito',
        unified: '1F32F',
        keywords: ['food', 'mexican'],
        sheet: [6, 37],
        hidden: ['messenger'],
        shortName: 'burrito'
    },
    {
        name: 'Belize Flag',
        unified: '1F1E7-1F1FF',
        sheet: [1, 16],
        shortName: 'flag-bz'
    },
    {
        name: 'Pensive Face',
        unified: '1F614',
        keywords: [
            'face',
            'sad',
            'depressed',
            'upset'
        ],
        sheet: [30, 44],
        shortName: 'pensive'
    },
    {
        name: 'Kaaba',
        unified: '1F54B',
        keywords: [
            'mecca',
            'mosque',
            'islam'
        ],
        sheet: [28, 14],
        hidden: ['messenger'],
        shortName: 'kaaba'
    },
    {
        name: 'Film Frames',
        unified: '1F39E-FE0F',
        sheet: [8, 44],
        hidden: ['messenger'],
        shortName: 'film_frames'
    },
    {
        name: 'Bat',
        unified: '1F987',
        keywords: [
            'animal',
            'nature',
            'blind',
            'vampire'
        ],
        sheet: [42, 31],
        hidden: ['messenger'],
        shortName: 'bat'
    },
    {
        name: 'Flag in Hole',
        unified: '26F3',
        keywords: [
            'sports',
            'business',
            'flag',
            'hole',
            'summer'
        ],
        sheet: [48, 41],
        shortName: 'golf'
    },
    {
        name: 'End with Leftwards Arrow Above',
        unified: '1F51A',
        keywords: ['words', 'arrow'],
        sheet: [27, 28],
        shortName: 'end'
    },
    {
        name: 'Film Projector',
        unified: '1F4FD-FE0F',
        keywords: [
            'video',
            'tape',
            'record',
            'movie'
        ],
        sheet: [27, 0],
        hidden: ['messenger'],
        shortName: 'film_projector'
    },
    {
        name: 'Bear Face',
        unified: '1F43B',
        keywords: [
            'animal',
            'nature',
            'wild'
        ],
        sheet: [13, 37],
        shortName: 'bear'
    },
    {
        name: 'Ice Skate',
        unified: '26F8-FE0F',
        keywords: ['sports'],
        sheet: [48, 45],
        hidden: ['messenger'],
        shortName: 'ice_skate'
    },
    {
        name: 'Fountain',
        unified: '26F2',
        keywords: [
            'photo',
            'summer',
            'water',
            'fresh'
        ],
        sheet: [48, 40],
        shortName: 'fountain'
    },
    {
        name: 'Confused Face',
        unified: '1F615',
        emoticons: [
            ':\\',
            ':-\\',
            ':/',
            ':-/'
        ],
        keywords: [
            'face',
            'indifference',
            'huh',
            'weird',
            'hmmm',
            ':/'
        ],
        sheet: [30, 45],
        shortName: 'confused'
    },
    {
        name: 'Canada Flag',
        unified: '1F1E8-1F1E6',
        sheet: [1, 17],
        shortName: 'flag-ca'
    },
    {
        name: 'On with Exclamation Mark with Left Right Arrow Above',
        unified: '1F51B',
        keywords: ['arrow', 'words'],
        sheet: [27, 29],
        shortName: 'on'
    },
    {
        name: 'Stuffed Flatbread',
        unified: '1F959',
        keywords: [
            'food',
            'flatbread',
            'stuffed',
            'gyro'
        ],
        sheet: [42, 5],
        hidden: ['messenger'],
        shortName: 'stuffed_flatbread'
    },
    {
        name: 'Soon with Rightwards Arrow Above',
        unified: '1F51C',
        keywords: ['arrow', 'words'],
        sheet: [27, 30],
        shortName: 'soon'
    },
    {
        name: 'Upside-Down Face',
        unified: '1F643',
        keywords: [
            'face',
            'flipped',
            'silly',
            'smile'
        ],
        sheet: [31, 39],
        hidden: ['messenger'],
        shortName: 'upside_down_face'
    },
    {
        name: 'Fishing Pole and Fish',
        unified: '1F3A3',
        keywords: [
            'food',
            'hobby',
            'summer'
        ],
        sheet: [8, 49],
        shortName: 'fishing_pole_and_fish'
    },
    {
        name: 'Tent',
        unified: '26FA',
        keywords: [
            'photo',
            'camping',
            'outdoors'
        ],
        sheet: [49, 12],
        shortName: 'tent'
    },
    {
        name: 'Clapper Board',
        unified: '1F3AC',
        keywords: [
            'movie',
            'film',
            'record'
        ],
        sheet: [9, 6],
        shortName: 'clapper'
    },
    {
        name: 'Egg',
        unified: '1F95A',
        keywords: [
            'food',
            'chicken',
            'breakfast'
        ],
        sheet: [42, 6],
        hidden: ['messenger'],
        shortName: 'egg'
    },
    {
        name: 'Cocos (keeling) Islands Flag',
        unified: '1F1E8-1F1E8',
        sheet: [1, 18],
        shortName: 'flag-cc'
    },
    {
        name: 'Koala',
        unified: '1F428',
        keywords: ['animal', 'nature'],
        sheet: [13, 18],
        shortName: 'koala'
    },
    {
        name: 'Foggy',
        unified: '1F301',
        keywords: ['photo', 'mountain'],
        sheet: [5, 45],
        shortName: 'foggy'
    },
    {
        name: 'Television',
        unified: '1F4FA',
        keywords: [
            'technology',
            'program',
            'oldschool',
            'show',
            'television'
        ],
        sheet: [26, 49],
        shortName: 'tv'
    },
    {
        name: 'Panda Face',
        unified: '1F43C',
        keywords: [
            'animal',
            'nature',
            'panda'
        ],
        sheet: [13, 38],
        shortName: 'panda_face'
    },
    {
        name: 'Cooking',
        unified: '1F373',
        keywords: [
            'food',
            'breakfast',
            'kitchen',
            'egg'
        ],
        sheet: [8, 1],
        shortNames: ['cooking'],
        shortName: 'fried_egg'
    },
    {
        name: 'Top with Upwards Arrow Above',
        unified: '1F51D',
        keywords: ['words', 'blue-square'],
        sheet: [27, 31],
        shortName: 'top'
    },
    {
        name: 'Congo - Kinshasa Flag',
        unified: '1F1E8-1F1E9',
        sheet: [1, 19],
        shortName: 'flag-cd'
    },
    {
        name: 'Money-Mouth Face',
        unified: '1F911',
        keywords: [
            'face',
            'rich',
            'dollar',
            'money'
        ],
        sheet: [37, 25],
        hidden: ['messenger'],
        shortName: 'money_mouth_face'
    },
    {
        name: 'Running Shirt with Sash',
        unified: '1F3BD',
        keywords: ['play', 'pageant'],
        sheet: [9, 23],
        shortName: 'running_shirt_with_sash'
    },
    {
        name: 'Astonished Face',
        unified: '1F632',
        keywords: [
            'face',
            'xox',
            'surprised',
            'poisoned'
        ],
        sheet: [31, 22],
        shortName: 'astonished'
    },
    {
        name: 'Paw Prints',
        unified: '1F43E',
        sheet: [13, 40],
        shortNames: ['paw_prints'],
        shortName: 'feet'
    },
    {
        name: 'Camera',
        unified: '1F4F7',
        keywords: [
            'gadgets',
            'photography'
        ],
        sheet: [26, 46],
        shortName: 'camera'
    },
    {
        name: 'Central African Republic Flag',
        unified: '1F1E8-1F1EB',
        sheet: [1, 20],
        shortName: 'flag-cf'
    },
    {
        name: 'Place of Worship',
        unified: '1F6D0',
        keywords: [
            'religion',
            'church',
            'temple',
            'prayer'
        ],
        sheet: [37, 5],
        hidden: ['messenger'],
        shortName: 'place_of_worship'
    },
    {
        name: 'Night with Stars',
        unified: '1F303',
        keywords: [
            'evening',
            'city',
            'downtown'
        ],
        sheet: [5, 47],
        shortName: 'night_with_stars'
    },
    {
        name: 'Ski and Ski Boot',
        unified: '1F3BF',
        keywords: [
            'sports',
            'winter',
            'cold',
            'snow'
        ],
        sheet: [9, 25],
        shortName: 'ski'
    },
    {
        name: 'Shallow Pan of Food',
        unified: '1F958',
        keywords: [
            'food',
            'cooking',
            'casserole',
            'paella'
        ],
        sheet: [42, 4],
        hidden: ['messenger'],
        shortName: 'shallow_pan_of_food'
    },
    {
        name: 'Camera with Flash',
        unified: '1F4F8',
        sheet: [26, 47],
        hidden: ['messenger'],
        shortName: 'camera_with_flash'
    },
    {
        name: 'Sunrise over Mountains',
        unified: '1F304',
        keywords: [
            'view',
            'vacation',
            'photo'
        ],
        sheet: [5, 48],
        shortName: 'sunrise_over_mountains'
    },
    {
        name: 'Turkey',
        unified: '1F983',
        keywords: ['animal', 'bird'],
        sheet: [42, 27],
        hidden: ['messenger'],
        shortName: 'turkey'
    },
    {
        name: 'White Frowning Face',
        unified: '2639-FE0F',
        sheet: [47, 40],
        hidden: ['messenger'],
        shortName: 'white_frowning_face'
    },
    {
        name: 'Congo - Brazzaville Flag',
        unified: '1F1E8-1F1EC',
        sheet: [1, 21],
        shortName: 'flag-cg'
    },
    {
        name: 'Pot of Food',
        unified: '1F372',
        keywords: ['food', 'meat', 'soup'],
        sheet: [8, 0],
        shortName: 'stew'
    },
    {
        name: 'Sled',
        unified: '1F6F7',
        keywords: [
            'sleigh',
            'luge',
            'toboggan'
        ],
        sheet: [37, 22],
        hidden: ['messenger'],
        shortName: 'sled'
    },
    {
        name: 'Atom Symbol',
        unified: '269B-FE0F',
        keywords: [
            'science',
            'physics',
            'chemistry'
        ],
        sheet: [48, 18],
        hidden: ['messenger'],
        shortName: 'atom_symbol'
    },
    {
        name: 'Curling Stone',
        unified: '1F94C',
        keywords: ['sports'],
        sheet: [41, 47],
        hidden: ['messenger'],
        shortName: 'curling_stone'
    },
    {
        name: 'Slightly Frowning Face',
        unified: '1F641',
        keywords: [
            'face',
            'frowning',
            'disappointed',
            'sad',
            'upset'
        ],
        sheet: [31, 37],
        hidden: ['messenger'],
        shortName: 'slightly_frowning_face'
    },
    {
        name: 'Sunrise',
        unified: '1F305',
        keywords: [
            'morning',
            'view',
            'vacation',
            'photo'
        ],
        sheet: [5, 49],
        shortName: 'sunrise'
    },
    {
        name: 'Om Symbol',
        unified: '1F549-FE0F',
        sheet: [28, 12],
        hidden: ['messenger'],
        shortName: 'om_symbol'
    },
    {
        name: 'Chicken',
        unified: '1F414',
        keywords: [
            'animal',
            'cluck',
            'nature',
            'bird'
        ],
        sheet: [12, 50],
        shortName: 'chicken'
    },
    {
        name: 'Bowl with Spoon',
        unified: '1F963',
        keywords: [
            'food',
            'breakfast',
            'cereal',
            'oatmeal',
            'porridge'
        ],
        sheet: [42, 15],
        hidden: ['messenger'],
        shortName: 'bowl_with_spoon'
    },
    {
        name: 'Switzerland Flag',
        unified: '1F1E8-1F1ED',
        sheet: [1, 22],
        shortName: 'flag-ch'
    },
    {
        name: 'Video Camera',
        unified: '1F4F9',
        keywords: ['film', 'record'],
        sheet: [26, 48],
        shortName: 'video_camera'
    },
    {
        name: 'Video Game',
        unified: '1F3AE',
        keywords: [
            'play',
            'console',
            'PS4',
            'controller'
        ],
        sheet: [9, 8],
        shortName: 'video_game'
    },
    {
        name: 'Rooster',
        unified: '1F413',
        keywords: [
            'animal',
            'nature',
            'chicken'
        ],
        sheet: [12, 49],
        shortName: 'rooster'
    },
    {
        name: 'Videocassette',
        unified: '1F4FC',
        keywords: [
            'record',
            'video',
            'oldschool',
            '90s',
            '80s'
        ],
        sheet: [26, 51],
        shortName: 'vhs'
    },
    {
        name: 'Cityscape at Dusk',
        unified: '1F306',
        keywords: [
            'photo',
            'evening',
            'sky',
            'buildings'
        ],
        sheet: [5, 50],
        shortName: 'city_sunset'
    },
    {
        name: 'Confounded Face',
        unified: '1F616',
        keywords: [
            'face',
            'confused',
            'sick',
            'unwell',
            'oops',
            ':S'
        ],
        sheet: [30, 46],
        shortName: 'confounded'
    },
    {
        name: 'Green Salad',
        unified: '1F957',
        keywords: [
            'food',
            'healthy',
            'lettuce'
        ],
        sheet: [42, 3],
        hidden: ['messenger'],
        shortName: 'green_salad'
    },
    {
        name: 'Star of David',
        unified: '2721-FE0F',
        keywords: ['judaism'],
        sheet: [49, 47],
        hidden: ['messenger'],
        shortName: 'star_of_david'
    },
    {
        name: 'Côte D’ivoire Flag',
        unified: '1F1E8-1F1EE',
        sheet: [1, 23],
        shortName: 'flag-ci'
    },
    {
        name: 'Popcorn',
        unified: '1F37F',
        keywords: [
            'food',
            'movie theater',
            'films',
            'snack'
        ],
        sheet: [8, 13],
        hidden: ['messenger'],
        shortName: 'popcorn'
    },
    {
        name: 'Sunset over Buildings',
        unified: '1F307',
        keywords: [
            'photo',
            'good morning',
            'dawn'
        ],
        sheet: [5, 51],
        shortName: 'city_sunrise'
    },
    {
        name: 'Disappointed Face',
        unified: '1F61E',
        text: ':(',
        emoticons: ['):', ':(', ':-('],
        keywords: [
            'face',
            'sad',
            'upset',
            'depressed',
            ':('
        ],
        sheet: [31, 2],
        shortName: 'disappointed'
    },
    {
        name: 'Left-Pointing Magnifying Glass',
        unified: '1F50D',
        keywords: [
            'search',
            'zoom',
            'find',
            'detective'
        ],
        sheet: [27, 15],
        shortName: 'mag'
    },
    {
        name: 'Hatching Chick',
        unified: '1F423',
        keywords: [
            'animal',
            'chicken',
            'egg',
            'born',
            'baby',
            'bird'
        ],
        sheet: [13, 13],
        shortName: 'hatching_chick'
    },
    {
        name: 'Joystick',
        unified: '1F579-FE0F',
        keywords: ['game', 'play'],
        sheet: [29, 20],
        hidden: ['messenger'],
        shortName: 'joystick'
    },
    {
        name: 'Wheel of Dharma',
        unified: '2638-FE0F',
        keywords: [
            'hinduism',
            'buddhism',
            'sikhism',
            'jainism'
        ],
        sheet: [47, 39],
        hidden: ['messenger'],
        shortName: 'wheel_of_dharma'
    },
    {
        name: 'Cook Islands Flag',
        unified: '1F1E8-1F1F0',
        sheet: [1, 24],
        shortName: 'flag-ck'
    },
    {
        name: 'Canned Food',
        unified: '1F96B',
        keywords: ['food', 'soup'],
        sheet: [42, 23],
        hidden: ['messenger'],
        shortName: 'canned_food'
    },
    {
        name: 'Worried Face',
        unified: '1F61F',
        keywords: [
            'face',
            'concern',
            'nervous',
            ':('
        ],
        sheet: [31, 3],
        shortName: 'worried'
    },
    {
        name: 'Baby Chick',
        unified: '1F424',
        keywords: [
            'animal',
            'chicken',
            'bird'
        ],
        sheet: [13, 14],
        shortName: 'baby_chick'
    },
    {
        name: 'Chile Flag',
        unified: '1F1E8-1F1F1',
        sheet: [1, 25],
        shortName: 'flag-cl'
    },
    {
        name: 'Game Die',
        unified: '1F3B2',
        keywords: [
            'dice',
            'random',
            'tabletop',
            'play',
            'luck'
        ],
        sheet: [9, 12],
        shortName: 'game_die'
    },
    {
        name: 'Right-Pointing Magnifying Glass',
        unified: '1F50E',
        keywords: [
            'search',
            'zoom',
            'find',
            'detective'
        ],
        sheet: [27, 16],
        shortName: 'mag_right'
    },
    {
        name: 'Yin Yang',
        unified: '262F-FE0F',
        keywords: ['balance'],
        sheet: [47, 38],
        hidden: ['messenger'],
        shortName: 'yin_yang'
    },
    {
        name: 'Bridge at Night',
        unified: '1F309',
        keywords: ['photo', 'sanfrancisco'],
        sheet: [6, 1],
        shortName: 'bridge_at_night'
    },
    {
        name: 'Black Spade Suit',
        unified: '2660-FE0F',
        keywords: [
            'poker',
            'cards',
            'suits',
            'magic'
        ],
        sheet: [48, 4],
        shortName: 'spades'
    },
    {
        name: 'Front-Facing Baby Chick',
        unified: '1F425',
        keywords: [
            'animal',
            'chicken',
            'baby',
            'bird'
        ],
        sheet: [13, 15],
        shortName: 'hatched_chick'
    },
    {
        name: 'Cameroon Flag',
        unified: '1F1E8-1F1F2',
        sheet: [1, 26],
        shortName: 'flag-cm'
    },
    {
        name: 'Latin Cross',
        unified: '271D-FE0F',
        keywords: ['christianity'],
        sheet: [49, 46],
        hidden: ['messenger'],
        shortName: 'latin_cross'
    },
    {
        name: 'Face with Look of Triumph',
        unified: '1F624',
        keywords: [
            'face',
            'gas',
            'phew',
            'proud',
            'pride'
        ],
        sheet: [31, 8],
        shortName: 'triumph'
    },
    {
        name: 'Hot Springs',
        unified: '2668-FE0F',
        keywords: ['bath', 'warm', 'relax'],
        sheet: [48, 8],
        shortName: 'hotsprings'
    },
    {
        name: 'Bento Box',
        unified: '1F371',
        keywords: [
            'food',
            'japanese',
            'box'
        ],
        sheet: [7, 51],
        shortName: 'bento'
    },
    {
        name: 'Microscope',
        unified: '1F52C',
        keywords: [
            'laboratory',
            'experiment',
            'zoomin',
            'science',
            'study'
        ],
        sheet: [27, 46],
        shortName: 'microscope'
    },
    {
        name: 'Crying Face',
        unified: '1F622',
        text: ':\'(',
        emoticons: [':\'('],
        keywords: [
            'face',
            'tears',
            'sad',
            'depressed',
            'upset',
            ':\'('
        ],
        sheet: [31, 6],
        shortName: 'cry'
    },
    {
        name: 'Bird',
        unified: '1F426',
        keywords: [
            'animal',
            'nature',
            'fly',
            'tweet',
            'spring'
        ],
        sheet: [13, 16],
        shortName: 'bird'
    },
    {
        name: 'China Flag',
        unified: '1F1E8-1F1F3',
        keywords: [
            'china',
            'chinese',
            'prc',
            'flag',
            'country',
            'nation',
            'banner'
        ],
        sheet: [1, 27],
        shortNames: ['flag-cn'],
        shortName: 'cn'
    },
    {
        name: 'Telescope',
        unified: '1F52D',
        keywords: [
            'stars',
            'space',
            'zoom',
            'science',
            'astronomy'
        ],
        sheet: [27, 47],
        shortName: 'telescope'
    },
    {
        name: 'Rice Cracker',
        unified: '1F358',
        keywords: ['food', 'japanese'],
        sheet: [7, 26],
        shortName: 'rice_cracker'
    },
    {
        name: 'Black Heart Suit',
        unified: '2665-FE0F',
        keywords: [
            'poker',
            'cards',
            'magic',
            'suits'
        ],
        sheet: [48, 6],
        shortName: 'hearts'
    },
    {
        name: 'Orthodox Cross',
        unified: '2626-FE0F',
        keywords: [
            'suppedaneum',
            'religion'
        ],
        sheet: [47, 35],
        hidden: ['messenger'],
        shortName: 'orthodox_cross'
    },
    {
        name: 'Milky Way',
        unified: '1F30C',
        keywords: [
            'photo',
            'space',
            'stars'
        ],
        sheet: [6, 4],
        shortName: 'milky_way'
    },
    {
        name: 'Rice Ball',
        unified: '1F359',
        keywords: ['food', 'japanese'],
        sheet: [7, 27],
        shortName: 'rice_ball'
    },
    {
        name: 'Satellite Antenna',
        unified: '1F4E1',
        sheet: [26, 24],
        shortName: 'satellite_antenna'
    },
    {
        name: 'Colombia Flag',
        unified: '1F1E8-1F1F4',
        sheet: [1, 28],
        shortName: 'flag-co'
    },
    {
        name: 'Carousel Horse',
        unified: '1F3A0',
        keywords: ['photo', 'carnival'],
        sheet: [8, 46],
        shortName: 'carousel_horse'
    },
    {
        name: 'Loudly Crying Face',
        unified: '1F62D',
        text: ':\'(',
        keywords: [
            'face',
            'cry',
            'tears',
            'sad',
            'upset',
            'depressed'
        ],
        sheet: [31, 17],
        shortName: 'sob'
    },
    {
        name: 'Black Diamond Suit',
        unified: '2666-FE0F',
        keywords: [
            'poker',
            'cards',
            'magic',
            'suits'
        ],
        sheet: [48, 7],
        shortName: 'diamonds'
    },
    {
        name: 'Star and Crescent',
        unified: '262A-FE0F',
        keywords: ['islam'],
        sheet: [47, 36],
        hidden: ['messenger'],
        shortName: 'star_and_crescent'
    },
    {
        name: 'Penguin',
        unified: '1F427',
        keywords: ['animal', 'nature'],
        sheet: [13, 17],
        shortName: 'penguin'
    },
    {
        name: 'Dove of Peace',
        unified: '1F54A-FE0F',
        sheet: [28, 13],
        hidden: ['messenger'],
        shortName: 'dove_of_peace'
    },
    {
        name: 'Clipperton Island Flag',
        unified: '1F1E8-1F1F5',
        sheet: [1, 29],
        hidden: ['messenger'],
        shortName: 'flag-cp'
    },
    {
        name: 'Ferris Wheel',
        unified: '1F3A1',
        keywords: [
            'photo',
            'carnival',
            'londoneye'
        ],
        sheet: [8, 47],
        shortName: 'ferris_wheel'
    },
    {
        name: 'Black Club Suit',
        unified: '2663-FE0F',
        keywords: [
            'poker',
            'cards',
            'magic',
            'suits'
        ],
        sheet: [48, 5],
        shortName: 'clubs'
    },
    {
        name: 'Peace Symbol',
        unified: '262E-FE0F',
        keywords: ['hippie'],
        sheet: [47, 37],
        hidden: ['messenger'],
        shortName: 'peace_symbol'
    },
    {
        name: 'Candle',
        unified: '1F56F-FE0F',
        keywords: ['fire', 'wax'],
        sheet: [28, 42],
        hidden: ['messenger'],
        shortName: 'candle'
    },
    {
        name: 'Frowning Face with Open Mouth',
        unified: '1F626',
        keywords: ['face', 'aw', 'what'],
        sheet: [31, 10],
        shortName: 'frowning'
    },
    {
        name: 'Cooked Rice',
        unified: '1F35A',
        keywords: [
            'food',
            'china',
            'asian'
        ],
        sheet: [7, 28],
        shortName: 'rice'
    },
    {
        name: 'Costa Rica Flag',
        unified: '1F1E8-1F1F7',
        sheet: [1, 30],
        shortName: 'flag-cr'
    },
    {
        name: 'Roller Coaster',
        unified: '1F3A2',
        keywords: [
            'carnival',
            'playground',
            'photo',
            'fun'
        ],
        sheet: [8, 48],
        shortName: 'roller_coaster'
    },
    {
        name: 'Menorah with Nine Branches',
        unified: '1F54E',
        sheet: [28, 17],
        hidden: ['messenger'],
        shortName: 'menorah_with_nine_branches'
    },
    {
        name: 'Playing Card Black Joker',
        unified: '1F0CF',
        keywords: [
            'poker',
            'cards',
            'game',
            'play',
            'magic'
        ],
        sheet: [0, 15],
        shortName: 'black_joker'
    },
    {
        name: 'Eagle',
        unified: '1F985',
        keywords: [
            'animal',
            'nature',
            'bird'
        ],
        sheet: [42, 29],
        hidden: ['messenger'],
        shortName: 'eagle'
    },
    {
        name: 'Curry and Rice',
        unified: '1F35B',
        keywords: [
            'food',
            'spicy',
            'hot',
            'indian'
        ],
        sheet: [7, 29],
        shortName: 'curry'
    },
    {
        name: 'Electric Light Bulb',
        unified: '1F4A1',
        keywords: [
            'light',
            'electricity',
            'idea'
        ],
        sheet: [25, 7],
        shortName: 'bulb'
    },
    {
        name: 'Anguished Face',
        unified: '1F627',
        emoticons: ['D:'],
        keywords: [
            'face',
            'stunned',
            'nervous'
        ],
        sheet: [31, 11],
        shortName: 'anguished'
    },
    {
        name: 'Cuba Flag',
        unified: '1F1E8-1F1FA',
        sheet: [1, 31],
        shortName: 'flag-cu'
    },
    {
        name: 'Barber Pole',
        unified: '1F488',
        keywords: [
            'hair',
            'salon',
            'style'
        ],
        sheet: [24, 34],
        shortName: 'barber'
    },
    {
        name: 'Duck',
        unified: '1F986',
        keywords: [
            'animal',
            'nature',
            'bird',
            'mallard'
        ],
        sheet: [42, 30],
        hidden: ['messenger'],
        shortName: 'duck'
    },
    {
        name: 'Six Pointed Star with Middle Dot',
        unified: '1F52F',
        keywords: [
            'purple-square',
            'religion',
            'jewish',
            'hexagram'
        ],
        sheet: [27, 49],
        shortName: 'six_pointed_star'
    },
    {
        name: 'Steaming Bowl',
        unified: '1F35C',
        keywords: [
            'food',
            'japanese',
            'noodle',
            'chopsticks'
        ],
        sheet: [7, 30],
        shortName: 'ramen'
    },
    {
        name: 'Electric Torch',
        unified: '1F526',
        keywords: [
            'dark',
            'camping',
            'sight',
            'night'
        ],
        sheet: [27, 40],
        shortName: 'flashlight'
    },
    {
        name: 'Mahjong Tile Red Dragon',
        unified: '1F004',
        keywords: [
            'game',
            'play',
            'chinese',
            'kanji'
        ],
        sheet: [0, 14],
        shortName: 'mahjong'
    },
    {
        name: 'Fearful Face',
        unified: '1F628',
        keywords: [
            'face',
            'scared',
            'terrified',
            'nervous',
            'oops',
            'huh'
        ],
        sheet: [31, 12],
        shortName: 'fearful'
    },
    {
        name: 'Aries',
        unified: '2648',
        keywords: [
            'sign',
            'purple-square',
            'zodiac',
            'astrology'
        ],
        sheet: [47, 44],
        shortName: 'aries'
    },
    {
        name: 'Spaghetti',
        unified: '1F35D',
        keywords: [
            'food',
            'italian',
            'noodle'
        ],
        sheet: [7, 31],
        shortName: 'spaghetti'
    },
    {
        name: 'Circus Tent',
        unified: '1F3AA',
        keywords: [
            'festival',
            'carnival',
            'party'
        ],
        sheet: [9, 4],
        shortName: 'circus_tent'
    },
    {
        name: 'Izakaya Lantern',
        unified: '1F3EE',
        keywords: [
            'light',
            'paper',
            'halloween',
            'spooky'
        ],
        sheet: [12, 11],
        shortNames: ['lantern'],
        shortName: 'izakaya_lantern'
    },
    {
        name: 'Cape Verde Flag',
        unified: '1F1E8-1F1FB',
        sheet: [1, 32],
        shortName: 'flag-cv'
    },
    {
        name: 'Weary Face',
        unified: '1F629',
        keywords: [
            'face',
            'tired',
            'sleepy',
            'sad',
            'frustrated',
            'upset'
        ],
        sheet: [31, 13],
        shortName: 'weary'
    },
    {
        name: 'Flower Playing Cards',
        unified: '1F3B4',
        keywords: ['game', 'sunset', 'red'],
        sheet: [9, 14],
        shortName: 'flower_playing_cards'
    },
    {
        name: 'Owl',
        unified: '1F989',
        keywords: [
            'animal',
            'nature',
            'bird',
            'hoot'
        ],
        sheet: [42, 33],
        hidden: ['messenger'],
        shortName: 'owl'
    },
    {
        name: 'Performing Arts',
        unified: '1F3AD',
        keywords: [
            'acting',
            'theater',
            'drama'
        ],
        sheet: [9, 7],
        shortName: 'performing_arts'
    },
    {
        name: 'Frog Face',
        unified: '1F438',
        keywords: [
            'animal',
            'nature',
            'croak',
            'toad'
        ],
        sheet: [13, 34],
        shortName: 'frog'
    },
    {
        name: 'Curaçao Flag',
        unified: '1F1E8-1F1FC',
        sheet: [1, 33],
        shortName: 'flag-cw'
    },
    {
        name: 'Notebook with Decorative Cover',
        unified: '1F4D4',
        keywords: [
            'classroom',
            'notes',
            'record',
            'paper',
            'study'
        ],
        sheet: [26, 11],
        shortName: 'notebook_with_decorative_cover'
    },
    {
        name: 'Shocked Face with Exploding Head',
        unified: '1F92F',
        keywords: [
            'face',
            'shocked',
            'mind',
            'blown'
        ],
        sheet: [39, 3],
        hidden: ['messenger'],
        shortNames: [
            'shocked_face_with_exploding_head'
        ],
        shortName: 'exploding_head'
    },
    {
        name: 'Taurus',
        unified: '2649',
        keywords: [
            'purple-square',
            'sign',
            'zodiac',
            'astrology'
        ],
        sheet: [47, 45],
        shortName: 'taurus'
    },
    {
        name: 'Roasted Sweet Potato',
        unified: '1F360',
        keywords: ['food', 'nature'],
        sheet: [7, 34],
        shortName: 'sweet_potato'
    },
    {
        name: 'Closed Book',
        unified: '1F4D5',
        keywords: [
            'read',
            'library',
            'knowledge',
            'textbook',
            'learn'
        ],
        sheet: [26, 12],
        shortName: 'closed_book'
    },
    {
        name: 'Gemini',
        unified: '264A',
        keywords: [
            'sign',
            'zodiac',
            'purple-square',
            'astrology'
        ],
        sheet: [47, 46],
        shortName: 'gemini'
    },
    {
        name: 'Frame with Picture',
        unified: '1F5BC-FE0F',
        sheet: [30, 3],
        hidden: ['messenger'],
        shortName: 'frame_with_picture'
    },
    {
        name: 'Christmas Island Flag',
        unified: '1F1E8-1F1FD',
        sheet: [1, 34],
        shortName: 'flag-cx'
    },
    {
        name: 'Grimacing Face',
        unified: '1F62C',
        keywords: [
            'face',
            'grimace',
            'teeth'
        ],
        sheet: [31, 16],
        shortName: 'grimacing'
    },
    {
        name: 'Crocodile',
        unified: '1F40A',
        keywords: [
            'animal',
            'nature',
            'reptile',
            'lizard',
            'alligator'
        ],
        sheet: [12, 40],
        shortName: 'crocodile'
    },
    {
        name: 'Oden',
        unified: '1F362',
        keywords: ['food', 'japanese'],
        sheet: [7, 36],
        shortName: 'oden'
    },
    {
        name: 'Cyprus Flag',
        unified: '1F1E8-1F1FE',
        sheet: [1, 35],
        shortName: 'flag-cy'
    },
    {
        name: 'Open Book',
        unified: '1F4D6',
        sheet: [26, 13],
        shortNames: ['open_book'],
        shortName: 'book'
    },
    {
        name: 'Turtle',
        unified: '1F422',
        keywords: [
            'animal',
            'slow',
            'nature',
            'tortoise'
        ],
        sheet: [13, 12],
        shortName: 'turtle'
    },
    {
        name: 'Artist Palette',
        unified: '1F3A8',
        keywords: [
            'design',
            'paint',
            'draw',
            'colors'
        ],
        sheet: [9, 2],
        shortName: 'art'
    },
    {
        name: 'Sushi',
        unified: '1F363',
        keywords: [
            'food',
            'fish',
            'japanese',
            'rice'
        ],
        sheet: [7, 37],
        shortName: 'sushi'
    },
    {
        name: 'Face with Open Mouth and Cold Sweat',
        unified: '1F630',
        keywords: [
            'face',
            'nervous',
            'sweat'
        ],
        sheet: [31, 20],
        shortName: 'cold_sweat'
    },
    {
        name: 'Cancer',
        unified: '264B',
        keywords: [
            'sign',
            'zodiac',
            'purple-square',
            'astrology'
        ],
        sheet: [47, 47],
        shortName: 'cancer'
    },
    {
        name: 'Fried Shrimp',
        unified: '1F364',
        keywords: [
            'food',
            'animal',
            'appetizer',
            'summer'
        ],
        sheet: [7, 38],
        shortName: 'fried_shrimp'
    },
    {
        name: 'Slot Machine',
        unified: '1F3B0',
        keywords: [
            'bet',
            'gamble',
            'vegas',
            'fruit machine',
            'luck',
            'casino'
        ],
        sheet: [9, 10],
        shortName: 'slot_machine'
    },
    {
        name: 'Face Screaming in Fear',
        unified: '1F631',
        keywords: [
            'face',
            'munch',
            'scared',
            'omg'
        ],
        sheet: [31, 21],
        shortName: 'scream'
    },
    {
        name: 'Green Book',
        unified: '1F4D7',
        keywords: [
            'read',
            'library',
            'knowledge',
            'study'
        ],
        sheet: [26, 14],
        shortName: 'green_book'
    },
    {
        name: 'Leo',
        unified: '264C',
        keywords: [
            'sign',
            'purple-square',
            'zodiac',
            'astrology'
        ],
        sheet: [47, 48],
        shortName: 'leo'
    },
    {
        name: 'Czechia Flag',
        unified: '1F1E8-1F1FF',
        sheet: [1, 36],
        shortName: 'flag-cz'
    },
    {
        name: 'Lizard',
        unified: '1F98E',
        keywords: [
            'animal',
            'nature',
            'reptile'
        ],
        sheet: [42, 38],
        hidden: ['messenger'],
        shortName: 'lizard'
    },
    {
        name: 'Virgo',
        unified: '264D',
        keywords: [
            'sign',
            'zodiac',
            'purple-square',
            'astrology'
        ],
        sheet: [47, 49],
        shortName: 'virgo'
    },
    {
        name: 'Steam Locomotive',
        unified: '1F682',
        keywords: [
            'transportation',
            'vehicle',
            'train'
        ],
        sheet: [34, 10],
        shortName: 'steam_locomotive'
    },
    {
        name: 'Germany Flag',
        unified: '1F1E9-1F1EA',
        keywords: [
            'german',
            'nation',
            'flag',
            'country',
            'banner'
        ],
        sheet: [1, 37],
        shortNames: ['flag-de'],
        shortName: 'de'
    },
    {
        name: 'Flushed Face',
        unified: '1F633',
        keywords: [
            'face',
            'blush',
            'shy',
            'flattered'
        ],
        sheet: [31, 23],
        shortName: 'flushed'
    },
    {
        name: 'Blue Book',
        unified: '1F4D8',
        keywords: [
            'read',
            'library',
            'knowledge',
            'learn',
            'study'
        ],
        sheet: [26, 15],
        shortName: 'blue_book'
    },
    {
        name: 'Snake',
        unified: '1F40D',
        keywords: [
            'animal',
            'evil',
            'nature',
            'hiss',
            'python'
        ],
        sheet: [12, 43],
        shortName: 'snake'
    },
    {
        name: 'Fish Cake with Swirl Design',
        unified: '1F365',
        keywords: [
            'food',
            'japan',
            'sea',
            'beach',
            'narutomaki',
            'pink',
            'swirl',
            'kamaboko',
            'surimi',
            'ramen'
        ],
        sheet: [7, 39],
        shortName: 'fish_cake'
    },
    {
        name: 'Railway Car',
        unified: '1F683',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 11],
        shortName: 'railway_car'
    },
    {
        name: 'Dango',
        unified: '1F361',
        keywords: [
            'food',
            'dessert',
            'sweet',
            'japanese',
            'barbecue',
            'meat'
        ],
        sheet: [7, 35],
        shortName: 'dango'
    },
    {
        name: 'Orange Book',
        unified: '1F4D9',
        keywords: [
            'read',
            'library',
            'knowledge',
            'textbook',
            'study'
        ],
        sheet: [26, 16],
        shortName: 'orange_book'
    },
    {
        name: 'Libra',
        unified: '264E',
        keywords: [
            'sign',
            'purple-square',
            'zodiac',
            'astrology'
        ],
        sheet: [47, 50],
        shortName: 'libra'
    },
    {
        name: 'Dragon Face',
        unified: '1F432',
        keywords: [
            'animal',
            'myth',
            'nature',
            'chinese',
            'green'
        ],
        sheet: [13, 28],
        shortName: 'dragon_face'
    },
    {
        name: 'Diego Garcia Flag',
        unified: '1F1E9-1F1EC',
        sheet: [1, 38],
        hidden: ['google'],
        shortName: 'flag-dg'
    },
    {
        name: 'Grinning Face with One Large and One Small Eye',
        unified: '1F92A',
        sheet: [38, 50],
        hidden: ['messenger'],
        shortNames: [
            'grinning_face_with_one_large_and_one_small_eye'
        ],
        shortName: 'zany_face'
    },
    {
        name: 'Books',
        unified: '1F4DA',
        keywords: [
            'literature',
            'library',
            'study'
        ],
        sheet: [26, 17],
        shortName: 'books'
    },
    {
        name: 'Dragon',
        unified: '1F409',
        keywords: [
            'animal',
            'myth',
            'nature',
            'chinese',
            'green'
        ],
        sheet: [12, 39],
        shortName: 'dragon'
    },
    {
        name: 'Djibouti Flag',
        unified: '1F1E9-1F1EF',
        sheet: [1, 39],
        shortName: 'flag-dj'
    },
    {
        name: 'Dumpling',
        unified: '1F95F',
        keywords: [
            'food',
            'empanada',
            'pierogi',
            'potsticker'
        ],
        sheet: [42, 11],
        hidden: ['messenger'],
        shortName: 'dumpling'
    },
    {
        name: 'Dizzy Face',
        unified: '1F635',
        keywords: [
            'spent',
            'unconscious',
            'xox',
            'dizzy'
        ],
        sheet: [31, 25],
        shortName: 'dizzy_face'
    },
    {
        name: 'Scorpius',
        unified: '264F',
        keywords: [
            'sign',
            'zodiac',
            'purple-square',
            'astrology',
            'scorpio'
        ],
        sheet: [47, 51],
        shortName: 'scorpius'
    },
    {
        name: 'High-Speed Train',
        unified: '1F684',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 12],
        shortName: 'bullettrain_side'
    },
    {
        name: 'High-Speed Train with Bullet Nose',
        unified: '1F685',
        keywords: [
            'transportation',
            'vehicle',
            'speed',
            'fast',
            'public',
            'travel'
        ],
        sheet: [34, 13],
        shortName: 'bullettrain_front'
    },
    {
        name: 'Notebook',
        unified: '1F4D3',
        keywords: [
            'stationery',
            'record',
            'notes',
            'paper',
            'study'
        ],
        sheet: [26, 10],
        shortName: 'notebook'
    },
    {
        name: 'Fortune Cookie',
        unified: '1F960',
        keywords: ['food', 'prophecy'],
        sheet: [42, 12],
        hidden: ['messenger'],
        shortName: 'fortune_cookie'
    },
    {
        name: 'Sagittarius',
        unified: '2650',
        keywords: [
            'sign',
            'zodiac',
            'purple-square',
            'astrology'
        ],
        sheet: [48, 0],
        shortName: 'sagittarius'
    },
    {
        name: 'Sauropod',
        unified: '1F995',
        keywords: [
            'animal',
            'nature',
            'dinosaur',
            'brachiosaurus',
            'brontosaurus',
            'diplodocus',
            'extinct'
        ],
        sheet: [42, 45],
        hidden: ['messenger'],
        shortName: 'sauropod'
    },
    {
        name: 'Denmark Flag',
        unified: '1F1E9-1F1F0',
        sheet: [1, 40],
        shortName: 'flag-dk'
    },
    {
        name: 'Pouting Face',
        unified: '1F621',
        keywords: [
            'angry',
            'mad',
            'hate',
            'despise'
        ],
        sheet: [31, 5],
        shortName: 'rage'
    },
    {
        name: 'Ledger',
        unified: '1F4D2',
        keywords: ['notes', 'paper'],
        sheet: [26, 9],
        shortName: 'ledger'
    },
    {
        name: 'Angry Face',
        unified: '1F620',
        emoticons: ['>:(', '>:-('],
        keywords: [
            'mad',
            'face',
            'annoyed',
            'frustrated'
        ],
        sheet: [31, 4],
        shortName: 'angry'
    },
    {
        name: 'T-Rex',
        unified: '1F996',
        keywords: [
            'animal',
            'nature',
            'dinosaur',
            'tyrannosaurus',
            'extinct'
        ],
        sheet: [42, 46],
        hidden: ['messenger'],
        shortName: 't-rex'
    },
    {
        name: 'Capricorn',
        unified: '2651',
        keywords: [
            'sign',
            'zodiac',
            'purple-square',
            'astrology'
        ],
        sheet: [48, 1],
        shortName: 'capricorn'
    },
    {
        name: 'Takeout Box',
        unified: '1F961',
        keywords: ['food', 'leftovers'],
        sheet: [42, 13],
        hidden: ['messenger'],
        shortName: 'takeout_box'
    },
    {
        name: 'Dominica Flag',
        unified: '1F1E9-1F1F2',
        sheet: [1, 41],
        shortName: 'flag-dm'
    },
    {
        name: 'Train',
        unified: '1F686',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 14],
        shortName: 'train2'
    },
    {
        name: 'Page with Curl',
        unified: '1F4C3',
        keywords: [
            'documents',
            'office',
            'paper'
        ],
        sheet: [25, 46],
        shortName: 'page_with_curl'
    },
    {
        name: 'Spouting Whale',
        unified: '1F433',
        keywords: [
            'animal',
            'nature',
            'sea',
            'ocean'
        ],
        sheet: [13, 29],
        shortName: 'whale'
    },
    {
        name: 'Serious Face with Symbols Covering Mouth',
        unified: '1F92C',
        sheet: [39, 0],
        hidden: ['messenger'],
        shortNames: [
            'serious_face_with_symbols_covering_mouth'
        ],
        shortName: 'face_with_symbols_on_mouth'
    },
    {
        name: 'Dominican Republic Flag',
        unified: '1F1E9-1F1F4',
        sheet: [1, 42],
        shortName: 'flag-do'
    },
    {
        name: 'Metro',
        unified: '1F687',
        keywords: [
            'transportation',
            'blue-square',
            'mrt',
            'underground',
            'tube'
        ],
        sheet: [34, 15],
        shortName: 'metro'
    },
    {
        name: 'Soft Ice Cream',
        unified: '1F366',
        keywords: [
            'food',
            'hot',
            'dessert',
            'summer'
        ],
        sheet: [7, 40],
        shortName: 'icecream'
    },
    {
        name: 'Aquarius',
        unified: '2652',
        keywords: [
            'sign',
            'purple-square',
            'zodiac',
            'astrology'
        ],
        sheet: [48, 2],
        shortName: 'aquarius'
    },
    {
        name: 'Algeria Flag',
        unified: '1F1E9-1F1FF',
        sheet: [1, 43],
        shortName: 'flag-dz'
    },
    {
        name: 'Whale',
        unified: '1F40B',
        keywords: [
            'animal',
            'nature',
            'sea',
            'ocean'
        ],
        sheet: [12, 41],
        shortName: 'whale2'
    },
    {
        name: 'Face with Medical Mask',
        unified: '1F637',
        keywords: [
            'face',
            'sick',
            'ill',
            'disease'
        ],
        sheet: [31, 27],
        shortName: 'mask'
    },
    {
        name: 'Scroll',
        unified: '1F4DC',
        keywords: [
            'documents',
            'ancient',
            'history',
            'paper'
        ],
        sheet: [26, 19],
        shortName: 'scroll'
    },
    {
        name: 'Shaved Ice',
        unified: '1F367',
        keywords: [
            'hot',
            'dessert',
            'summer'
        ],
        sheet: [7, 41],
        shortName: 'shaved_ice'
    },
    {
        name: 'Pisces',
        unified: '2653',
        keywords: [
            'purple-square',
            'sign',
            'zodiac',
            'astrology'
        ],
        sheet: [48, 3],
        shortName: 'pisces'
    },
    {
        name: 'Light Rail',
        unified: '1F688',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 16],
        shortName: 'light_rail'
    },
    {
        name: 'Dolphin',
        unified: '1F42C',
        keywords: [
            'animal',
            'nature',
            'fish',
            'sea',
            'ocean',
            'flipper',
            'fins',
            'beach'
        ],
        sheet: [13, 22],
        shortNames: ['flipper'],
        shortName: 'dolphin'
    },
    {
        name: 'Face with Thermometer',
        unified: '1F912',
        keywords: [
            'sick',
            'temperature',
            'thermometer',
            'cold',
            'fever'
        ],
        sheet: [37, 26],
        hidden: ['messenger'],
        shortName: 'face_with_thermometer'
    },
    {
        name: 'Ceuta & Melilla Flag',
        unified: '1F1EA-1F1E6',
        sheet: [1, 44],
        hidden: ['google'],
        shortName: 'flag-ea'
    },
    {
        name: 'Ophiuchus',
        unified: '26CE',
        keywords: [
            'sign',
            'purple-square',
            'constellation',
            'astrology'
        ],
        sheet: [48, 31],
        shortName: 'ophiuchus'
    },
    {
        name: 'Station',
        unified: '1F689',
        keywords: [
            'transportation',
            'vehicle',
            'public'
        ],
        sheet: [34, 17],
        shortName: 'station'
    },
    {
        name: 'Ice Cream',
        unified: '1F368',
        keywords: [
            'food',
            'hot',
            'dessert'
        ],
        sheet: [7, 42],
        shortName: 'ice_cream'
    },
    {
        name: 'Page Facing Up',
        unified: '1F4C4',
        keywords: [
            'documents',
            'office',
            'paper',
            'information'
        ],
        sheet: [25, 47],
        shortName: 'page_facing_up'
    },
    {
        name: 'Doughnut',
        unified: '1F369',
        keywords: [
            'food',
            'dessert',
            'snack',
            'sweet',
            'donut'
        ],
        sheet: [7, 43],
        shortName: 'doughnut'
    },
    {
        name: 'Face with Head-Bandage',
        unified: '1F915',
        keywords: [
            'injured',
            'clumsy',
            'bandage',
            'hurt'
        ],
        sheet: [37, 29],
        hidden: ['messenger'],
        shortName: 'face_with_head_bandage'
    },
    {
        name: 'Fish',
        unified: '1F41F',
        keywords: [
            'animal',
            'food',
            'nature'
        ],
        sheet: [13, 9],
        shortName: 'fish'
    },
    {
        name: 'Newspaper',
        unified: '1F4F0',
        keywords: ['press', 'headline'],
        sheet: [26, 39],
        shortName: 'newspaper'
    },
    {
        name: 'Tram',
        unified: '1F68A',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 18],
        shortName: 'tram'
    },
    {
        name: 'Ecuador Flag',
        unified: '1F1EA-1F1E8',
        sheet: [1, 45],
        shortName: 'flag-ec'
    },
    {
        name: 'Twisted Rightwards Arrows',
        unified: '1F500',
        keywords: [
            'blue-square',
            'shuffle',
            'music',
            'random'
        ],
        sheet: [27, 2],
        shortName: 'twisted_rightwards_arrows'
    },
    {
        name: 'Estonia Flag',
        unified: '1F1EA-1F1EA',
        sheet: [1, 46],
        shortName: 'flag-ee'
    },
    {
        name: 'Cookie',
        unified: '1F36A',
        keywords: [
            'food',
            'snack',
            'oreo',
            'chocolate',
            'sweet',
            'dessert'
        ],
        sheet: [7, 44],
        shortName: 'cookie'
    },
    {
        name: 'Monorail',
        unified: '1F69D',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 37],
        shortName: 'monorail'
    },
    {
        name: 'Tropical Fish',
        unified: '1F420',
        keywords: [
            'animal',
            'swim',
            'ocean',
            'beach',
            'nemo'
        ],
        sheet: [13, 10],
        shortName: 'tropical_fish'
    },
    {
        name: 'Rolled Up Newspaper',
        unified: '1F5DE-FE0F',
        sheet: [30, 12],
        hidden: ['messenger'],
        shortName: 'rolled_up_newspaper'
    },
    {
        name: 'Nauseated Face',
        unified: '1F922',
        keywords: [
            'face',
            'vomit',
            'gross',
            'green',
            'sick',
            'throw up',
            'ill'
        ],
        sheet: [38, 25],
        hidden: ['messenger'],
        shortName: 'nauseated_face'
    },
    {
        name: 'Clockwise Rightwards and Leftwards Open Circle Arrows',
        unified: '1F501',
        keywords: ['loop', 'record'],
        sheet: [27, 3],
        shortName: 'repeat'
    },
    {
        name: 'Bookmark Tabs',
        unified: '1F4D1',
        keywords: [
            'favorite',
            'save',
            'order',
            'tidy'
        ],
        sheet: [26, 8],
        shortName: 'bookmark_tabs'
    },
    {
        name: 'Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay',
        unified: '1F502',
        keywords: ['blue-square', 'loop'],
        sheet: [27, 4],
        shortName: 'repeat_one'
    },
    {
        name: 'Egypt Flag',
        unified: '1F1EA-1F1EC',
        sheet: [1, 47],
        shortName: 'flag-eg'
    },
    {
        name: 'Mountain Railway',
        unified: '1F69E',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 38],
        shortName: 'mountain_railway'
    },
    {
        name: 'Birthday Cake',
        unified: '1F382',
        keywords: [
            'food',
            'dessert',
            'cake'
        ],
        sheet: [8, 16],
        shortName: 'birthday'
    },
    {
        name: 'Blowfish',
        unified: '1F421',
        keywords: [
            'animal',
            'nature',
            'food',
            'sea',
            'ocean'
        ],
        sheet: [13, 11],
        shortName: 'blowfish'
    },
    {
        name: 'Face with Open Mouth Vomiting',
        unified: '1F92E',
        sheet: [39, 2],
        hidden: ['messenger'],
        shortNames: [
            'face_with_open_mouth_vomiting'
        ],
        shortName: 'face_vomiting'
    },
    {
        name: 'Black Right-Pointing Triangle',
        unified: '25B6-FE0F',
        keywords: [
            'blue-square',
            'right',
            'direction',
            'play'
        ],
        sheet: [47, 10],
        shortName: 'arrow_forward'
    },
    {
        name: 'Bookmark',
        unified: '1F516',
        keywords: [
            'favorite',
            'label',
            'save'
        ],
        sheet: [27, 24],
        shortName: 'bookmark'
    },
    {
        name: 'Western Sahara Flag',
        unified: '1F1EA-1F1ED',
        sheet: [1, 48],
        hidden: ['google'],
        shortName: 'flag-eh'
    },
    {
        name: 'Shark',
        unified: '1F988',
        keywords: [
            'animal',
            'nature',
            'fish',
            'sea',
            'ocean',
            'jaws',
            'fins',
            'beach'
        ],
        sheet: [42, 32],
        hidden: ['messenger'],
        shortName: 'shark'
    },
    {
        name: 'Tram Car',
        unified: '1F68B',
        keywords: [
            'transportation',
            'vehicle',
            'carriage',
            'public',
            'travel'
        ],
        sheet: [34, 19],
        shortName: 'train'
    },
    {
        name: 'Sneezing Face',
        unified: '1F927',
        keywords: [
            'face',
            'gesundheit',
            'sneeze',
            'sick',
            'allergy'
        ],
        sheet: [38, 47],
        hidden: ['messenger'],
        shortName: 'sneezing_face'
    },
    {
        name: 'Shortcake',
        unified: '1F370',
        keywords: ['food', 'dessert'],
        sheet: [7, 50],
        shortName: 'cake'
    },
    {
        name: 'Bus',
        unified: '1F68C',
        keywords: [
            'car',
            'vehicle',
            'transportation'
        ],
        sheet: [34, 20],
        shortName: 'bus'
    },
    {
        name: 'Pie',
        unified: '1F967',
        keywords: [
            'food',
            'dessert',
            'pastry'
        ],
        sheet: [42, 19],
        hidden: ['messenger'],
        shortName: 'pie'
    },
    {
        name: 'Smiling Face with Halo',
        unified: '1F607',
        keywords: [
            'face',
            'angel',
            'heaven',
            'halo'
        ],
        sheet: [30, 31],
        shortName: 'innocent'
    },
    {
        name: 'Black Right-Pointing Double Triangle',
        unified: '23E9',
        keywords: [
            'blue-square',
            'play',
            'speed',
            'continue'
        ],
        sheet: [46, 45],
        shortName: 'fast_forward'
    },
    {
        name: 'Label',
        unified: '1F3F7-FE0F',
        keywords: ['sale', 'tag'],
        sheet: [12, 21],
        hidden: ['messenger'],
        shortName: 'label'
    },
    {
        name: 'Octopus',
        unified: '1F419',
        keywords: [
            'animal',
            'creature',
            'ocean',
            'sea',
            'nature',
            'beach'
        ],
        sheet: [13, 3],
        shortName: 'octopus'
    },
    {
        name: 'Eritrea Flag',
        unified: '1F1EA-1F1F7',
        sheet: [1, 49],
        shortName: 'flag-er'
    },
    {
        name: 'Black Right Pointing Double Triangle with Vertical Bar',
        unified: '23ED-FE0F',
        sheet: [46, 49],
        hidden: ['messenger'],
        shortName: 'black_right_pointing_double_triangle_with_vertical_bar'
    },
    {
        name: 'Chocolate Bar',
        unified: '1F36B',
        keywords: [
            'food',
            'snack',
            'dessert',
            'sweet'
        ],
        sheet: [7, 45],
        shortName: 'chocolate_bar'
    },
    {
        name: 'Oncoming Bus',
        unified: '1F68D',
        keywords: [
            'vehicle',
            'transportation'
        ],
        sheet: [34, 21],
        shortName: 'oncoming_bus'
    },
    {
        name: 'Spiral Shell',
        unified: '1F41A',
        keywords: [
            'nature',
            'sea',
            'beach'
        ],
        sheet: [13, 4],
        shortName: 'shell'
    },
    {
        name: 'Face with Cowboy Hat',
        unified: '1F920',
        sheet: [38, 23],
        hidden: ['messenger'],
        shortName: 'face_with_cowboy_hat'
    },
    {
        name: 'Money Bag',
        unified: '1F4B0',
        keywords: [
            'dollar',
            'payment',
            'coins',
            'sale'
        ],
        sheet: [25, 27],
        shortName: 'moneybag'
    },
    {
        name: 'Spain Flag',
        unified: '1F1EA-1F1F8',
        keywords: [
            'spain',
            'flag',
            'nation',
            'country',
            'banner'
        ],
        sheet: [1, 50],
        shortNames: ['flag-es'],
        shortName: 'es'
    },
    {
        name: 'Crab',
        unified: '1F980',
        keywords: ['animal', 'crustacean'],
        sheet: [42, 24],
        hidden: ['messenger'],
        shortName: 'crab'
    },
    {
        name: 'Banknote with Yen Sign',
        unified: '1F4B4',
        keywords: [
            'money',
            'sales',
            'japanese',
            'dollar',
            'currency'
        ],
        sheet: [25, 31],
        shortName: 'yen'
    },
    {
        name: 'Ethiopia Flag',
        unified: '1F1EA-1F1F9',
        sheet: [1, 51],
        shortName: 'flag-et'
    },
    {
        name: 'Clown Face',
        unified: '1F921',
        keywords: ['face'],
        sheet: [38, 24],
        hidden: ['messenger'],
        shortName: 'clown_face'
    },
    {
        name: 'Black Right Pointing Triangle with Double Vertical Bar',
        unified: '23EF-FE0F',
        sheet: [46, 51],
        hidden: ['messenger'],
        shortName: 'black_right_pointing_triangle_with_double_vertical_bar'
    },
    {
        name: 'Trolleybus',
        unified: '1F68E',
        keywords: [
            'bart',
            'transportation',
            'vehicle'
        ],
        sheet: [34, 22],
        shortName: 'trolleybus'
    },
    {
        name: 'Candy',
        unified: '1F36C',
        keywords: [
            'snack',
            'dessert',
            'sweet',
            'lolly'
        ],
        sheet: [7, 46],
        shortName: 'candy'
    },
    {
        name: 'Lying Face',
        unified: '1F925',
        keywords: [
            'face',
            'lie',
            'pinocchio'
        ],
        sheet: [38, 28],
        hidden: ['messenger'],
        shortName: 'lying_face'
    },
    {
        name: 'Black Left-Pointing Triangle',
        unified: '25C0-FE0F',
        keywords: [
            'blue-square',
            'left',
            'direction'
        ],
        sheet: [47, 11],
        shortName: 'arrow_backward'
    },
    {
        name: 'Banknote with Dollar Sign',
        unified: '1F4B5',
        keywords: [
            'money',
            'sales',
            'bill',
            'currency'
        ],
        sheet: [25, 32],
        shortName: 'dollar'
    },
    {
        name: 'Shrimp',
        unified: '1F990',
        keywords: [
            'animal',
            'ocean',
            'nature',
            'seafood'
        ],
        sheet: [42, 40],
        hidden: ['messenger'],
        shortName: 'shrimp'
    },
    {
        name: 'Minibus',
        unified: '1F690',
        keywords: [
            'vehicle',
            'car',
            'transportation'
        ],
        sheet: [34, 24],
        shortName: 'minibus'
    },
    {
        name: 'European Union Flag',
        unified: '1F1EA-1F1FA',
        sheet: [2, 0],
        shortName: 'flag-eu'
    },
    {
        name: 'Lollipop',
        unified: '1F36D',
        keywords: [
            'food',
            'snack',
            'candy',
            'sweet'
        ],
        sheet: [7, 47],
        shortName: 'lollipop'
    },
    {
        name: 'Squid',
        unified: '1F991',
        keywords: [
            'animal',
            'nature',
            'ocean',
            'sea'
        ],
        sheet: [42, 41],
        hidden: ['messenger'],
        shortName: 'squid'
    },
    {
        name: 'Banknote with Euro Sign',
        unified: '1F4B6',
        keywords: [
            'money',
            'sales',
            'dollar',
            'currency'
        ],
        sheet: [25, 33],
        shortName: 'euro'
    },
    {
        name: 'Finland Flag',
        unified: '1F1EB-1F1EE',
        sheet: [2, 1],
        shortName: 'flag-fi'
    },
    {
        name: 'Ambulance',
        unified: '1F691',
        keywords: [
            'health',
            '911',
            'hospital'
        ],
        sheet: [34, 25],
        shortName: 'ambulance'
    },
    {
        name: 'Custard',
        unified: '1F36E',
        keywords: ['dessert', 'food'],
        sheet: [7, 48],
        shortName: 'custard'
    },
    {
        name: 'Face with Finger Covering Closed Lips',
        unified: '1F92B',
        sheet: [38, 51],
        hidden: ['messenger'],
        shortNames: [
            'face_with_finger_covering_closed_lips'
        ],
        shortName: 'shushing_face'
    },
    {
        name: 'Black Left-Pointing Double Triangle',
        unified: '23EA',
        keywords: ['play', 'blue-square'],
        sheet: [46, 46],
        shortName: 'rewind'
    },
    {
        name: 'Black Left Pointing Double Triangle with Vertical Bar',
        unified: '23EE-FE0F',
        sheet: [46, 50],
        hidden: ['messenger'],
        shortName: 'black_left_pointing_double_triangle_with_vertical_bar'
    },
    {
        name: 'Smiling Face with Smiling Eyes and Hand Covering Mouth',
        unified: '1F92D',
        sheet: [39, 1],
        hidden: ['messenger'],
        shortNames: [
            'smiling_face_with_smiling_eyes_and_hand_covering_mouth'
        ],
        shortName: 'face_with_hand_over_mouth'
    },
    {
        name: 'Fiji Flag',
        unified: '1F1EB-1F1EF',
        sheet: [2, 2],
        shortName: 'flag-fj'
    },
    {
        name: 'Honey Pot',
        unified: '1F36F',
        keywords: [
            'bees',
            'sweet',
            'kitchen'
        ],
        sheet: [7, 49],
        shortName: 'honey_pot'
    },
    {
        name: 'Snail',
        unified: '1F40C',
        keywords: [
            'slow',
            'animal',
            'shell'
        ],
        sheet: [12, 42],
        shortName: 'snail'
    },
    {
        name: 'Banknote with Pound Sign',
        unified: '1F4B7',
        keywords: [
            'british',
            'sterling',
            'money',
            'sales',
            'bills',
            'uk',
            'england',
            'currency'
        ],
        sheet: [25, 34],
        shortName: 'pound'
    },
    {
        name: 'Fire Engine',
        unified: '1F692',
        keywords: [
            'transportation',
            'cars',
            'vehicle'
        ],
        sheet: [34, 26],
        shortName: 'fire_engine'
    },
    {
        name: 'Baby Bottle',
        unified: '1F37C',
        keywords: [
            'food',
            'container',
            'milk'
        ],
        sheet: [8, 10],
        shortName: 'baby_bottle'
    },
    {
        name: 'Falkland Islands Flag',
        unified: '1F1EB-1F1F0',
        sheet: [2, 3],
        hidden: ['google'],
        shortName: 'flag-fk'
    },
    {
        name: 'Butterfly',
        unified: '1F98B',
        keywords: [
            'animal',
            'insect',
            'nature',
            'caterpillar'
        ],
        sheet: [42, 35],
        hidden: ['messenger'],
        shortName: 'butterfly'
    },
    {
        name: 'Money with Wings',
        unified: '1F4B8',
        keywords: [
            'dollar',
            'bills',
            'payment',
            'sale'
        ],
        sheet: [25, 35],
        shortName: 'money_with_wings'
    },
    {
        name: 'Face with Monocle',
        unified: '1F9D0',
        sheet: [42, 49],
        hidden: ['messenger'],
        shortName: 'face_with_monocle'
    },
    {
        name: 'Police Car',
        unified: '1F693',
        keywords: [
            'vehicle',
            'cars',
            'transportation',
            'law',
            'legal',
            'enforcement'
        ],
        sheet: [34, 27],
        shortName: 'police_car'
    },
    {
        name: 'Up-Pointing Small Red Triangle',
        unified: '1F53C',
        keywords: [
            'blue-square',
            'triangle',
            'direction',
            'point',
            'forward',
            'top'
        ],
        sheet: [28, 10],
        shortName: 'arrow_up_small'
    },
    {
        name: 'Micronesia Flag',
        unified: '1F1EB-1F1F2',
        sheet: [2, 4],
        shortName: 'flag-fm'
    },
    {
        name: 'Glass of Milk',
        unified: '1F95B',
        sheet: [42, 7],
        hidden: ['messenger'],
        shortName: 'glass_of_milk'
    },
    {
        name: 'Credit Card',
        unified: '1F4B3',
        keywords: [
            'money',
            'sales',
            'dollar',
            'bill',
            'payment',
            'shopping'
        ],
        sheet: [25, 30],
        shortName: 'credit_card'
    },
    {
        name: 'Oncoming Police Car',
        unified: '1F694',
        keywords: [
            'vehicle',
            'law',
            'legal',
            'enforcement',
            '911'
        ],
        sheet: [34, 28],
        shortName: 'oncoming_police_car'
    },
    {
        name: 'Bug',
        unified: '1F41B',
        keywords: [
            'animal',
            'insect',
            'nature',
            'worm'
        ],
        sheet: [13, 5],
        shortName: 'bug'
    },
    {
        name: 'Nerd Face',
        unified: '1F913',
        keywords: [
            'face',
            'nerdy',
            'geek',
            'dork'
        ],
        sheet: [37, 27],
        hidden: ['messenger'],
        shortName: 'nerd_face'
    },
    {
        name: 'Black Up-Pointing Double Triangle',
        unified: '23EB',
        keywords: [
            'blue-square',
            'direction',
            'top'
        ],
        sheet: [46, 47],
        shortName: 'arrow_double_up'
    },
    {
        name: 'Chart with Upwards Trend and Yen Sign',
        unified: '1F4B9',
        keywords: [
            'green-square',
            'graph',
            'presentation',
            'stats'
        ],
        sheet: [25, 36],
        shortName: 'chart'
    },
    {
        name: 'Faroe Islands Flag',
        unified: '1F1EB-1F1F4',
        sheet: [2, 5],
        shortName: 'flag-fo'
    },
    {
        name: 'Ant',
        unified: '1F41C',
        keywords: [
            'animal',
            'insect',
            'nature',
            'bug'
        ],
        sheet: [13, 6],
        shortName: 'ant'
    },
    {
        name: 'Down-Pointing Small Red Triangle',
        unified: '1F53D',
        keywords: [
            'blue-square',
            'direction',
            'bottom'
        ],
        sheet: [28, 11],
        shortName: 'arrow_down_small'
    },
    {
        name: 'Smiling Face with Horns',
        unified: '1F608',
        keywords: ['devil', 'horns'],
        sheet: [30, 32],
        shortName: 'smiling_imp'
    },
    {
        name: 'Taxi',
        unified: '1F695',
        keywords: [
            'uber',
            'vehicle',
            'cars',
            'transportation'
        ],
        sheet: [34, 29],
        shortName: 'taxi'
    },
    {
        name: 'Hot Beverage',
        unified: '2615',
        keywords: [
            'beverage',
            'caffeine',
            'latte',
            'espresso'
        ],
        sheet: [47, 24],
        shortName: 'coffee'
    },
    {
        name: 'France Flag',
        unified: '1F1EB-1F1F7',
        keywords: [
            'banner',
            'flag',
            'nation',
            'france',
            'french',
            'country'
        ],
        sheet: [2, 6],
        shortNames: ['flag-fr'],
        shortName: 'fr'
    },
    {
        name: 'Oncoming Taxi',
        unified: '1F696',
        keywords: [
            'vehicle',
            'cars',
            'uber'
        ],
        sheet: [34, 30],
        shortName: 'oncoming_taxi'
    },
    {
        name: 'Black Down-Pointing Double Triangle',
        unified: '23EC',
        keywords: [
            'blue-square',
            'direction',
            'bottom'
        ],
        sheet: [46, 48],
        shortName: 'arrow_double_down'
    },
    {
        name: 'Imp',
        unified: '1F47F',
        keywords: [
            'devil',
            'angry',
            'horns'
        ],
        sheet: [22, 51],
        shortName: 'imp'
    },
    {
        name: 'Currency Exchange',
        unified: '1F4B1',
        keywords: [
            'money',
            'sales',
            'dollar',
            'travel'
        ],
        sheet: [25, 28],
        shortName: 'currency_exchange'
    },
    {
        name: 'Teacup Without Handle',
        unified: '1F375',
        keywords: [
            'drink',
            'bowl',
            'breakfast',
            'green',
            'british'
        ],
        sheet: [8, 3],
        shortName: 'tea'
    },
    {
        name: 'Honeybee',
        unified: '1F41D',
        sheet: [13, 7],
        shortNames: ['honeybee'],
        shortName: 'bee'
    },
    {
        name: 'Heavy Dollar Sign',
        unified: '1F4B2',
        keywords: [
            'money',
            'sales',
            'payment',
            'currency',
            'buck'
        ],
        sheet: [25, 29],
        shortName: 'heavy_dollar_sign'
    },
    {
        name: 'Automobile',
        unified: '1F697',
        sheet: [34, 31],
        shortNames: ['red_car'],
        shortName: 'car'
    },
    {
        name: 'Sake Bottle and Cup',
        unified: '1F376',
        keywords: [
            'wine',
            'drink',
            'drunk',
            'beverage',
            'japanese',
            'alcohol',
            'booze'
        ],
        sheet: [8, 4],
        shortName: 'sake'
    },
    {
        name: 'Gabon Flag',
        unified: '1F1EC-1F1E6',
        sheet: [2, 7],
        shortName: 'flag-ga'
    },
    {
        name: 'Lady Beetle',
        unified: '1F41E',
        keywords: [
            'animal',
            'insect',
            'nature',
            'ladybug'
        ],
        sheet: [13, 8],
        shortName: 'beetle'
    },
    {
        name: 'Japanese Ogre',
        unified: '1F479',
        keywords: [
            'monster',
            'red',
            'mask',
            'halloween',
            'scary',
            'creepy',
            'devil',
            'demon',
            'japanese',
            'ogre'
        ],
        sheet: [22, 40],
        shortName: 'japanese_ogre'
    },
    {
        name: 'Double Vertical Bar',
        unified: '23F8-FE0F',
        sheet: [47, 4],
        hidden: ['messenger'],
        shortName: 'double_vertical_bar'
    },
    {
        name: 'Bottle with Popping Cork',
        unified: '1F37E',
        keywords: [
            'drink',
            'wine',
            'bottle',
            'celebration'
        ],
        sheet: [8, 12],
        hidden: ['messenger'],
        shortName: 'champagne'
    },
    {
        name: 'Japanese Goblin',
        unified: '1F47A',
        keywords: [
            'red',
            'evil',
            'mask',
            'monster',
            'scary',
            'creepy',
            'japanese',
            'goblin'
        ],
        sheet: [22, 41],
        shortName: 'japanese_goblin'
    },
    {
        name: 'Black Square for Stop',
        unified: '23F9-FE0F',
        sheet: [47, 5],
        hidden: ['messenger'],
        shortName: 'black_square_for_stop'
    },
    {
        name: 'Oncoming Automobile',
        unified: '1F698',
        keywords: [
            'car',
            'vehicle',
            'transportation'
        ],
        sheet: [34, 32],
        shortName: 'oncoming_automobile'
    },
    {
        name: 'Envelope',
        unified: '2709-FE0F',
        keywords: [
            'letter',
            'postal',
            'inbox',
            'communication'
        ],
        sheet: [49, 17],
        shortNames: ['envelope'],
        shortName: 'email'
    },
    {
        name: 'Cricket',
        unified: '1F997',
        keywords: ['sports'],
        sheet: [42, 47],
        hidden: ['messenger'],
        shortName: 'cricket'
    },
    {
        name: 'United Kingdom Flag',
        unified: '1F1EC-1F1E7',
        sheet: [2, 8],
        shortNames: ['uk', 'flag-gb'],
        shortName: 'gb'
    },
    {
        name: 'Black Circle for Record',
        unified: '23FA-FE0F',
        sheet: [47, 6],
        hidden: ['messenger'],
        shortName: 'black_circle_for_record'
    },
    {
        name: 'Grenada Flag',
        unified: '1F1EC-1F1E9',
        sheet: [2, 9],
        shortName: 'flag-gd'
    },
    {
        name: 'Spider',
        unified: '1F577-FE0F',
        keywords: ['animal', 'arachnid'],
        sheet: [29, 18],
        hidden: ['messenger'],
        shortName: 'spider'
    },
    {
        name: 'Recreational Vehicle',
        unified: '1F699',
        keywords: [
            'transportation',
            'vehicle'
        ],
        sheet: [34, 33],
        shortName: 'blue_car'
    },
    {
        name: 'Skull',
        unified: '1F480',
        keywords: [
            'dead',
            'skeleton',
            'creepy',
            'death'
        ],
        sheet: [23, 0],
        shortName: 'skull'
    },
    {
        name: 'E-Mail Symbol',
        unified: '1F4E7',
        keywords: [
            'communication',
            'inbox'
        ],
        sheet: [26, 30],
        shortName: 'e-mail'
    },
    {
        name: 'Wine Glass',
        unified: '1F377',
        keywords: [
            'drink',
            'beverage',
            'drunk',
            'alcohol',
            'booze'
        ],
        sheet: [8, 5],
        shortName: 'wine_glass'
    },
    {
        name: 'Spider Web',
        unified: '1F578-FE0F',
        keywords: [
            'animal',
            'insect',
            'arachnid',
            'silk'
        ],
        sheet: [29, 19],
        hidden: ['messenger'],
        shortName: 'spider_web'
    },
    {
        name: 'Cocktail Glass',
        unified: '1F378',
        keywords: [
            'drink',
            'drunk',
            'alcohol',
            'beverage',
            'booze',
            'mojito'
        ],
        sheet: [8, 6],
        shortName: 'cocktail'
    },
    {
        name: 'Skull and Crossbones',
        unified: '2620-FE0F',
        keywords: [
            'poison',
            'danger',
            'deadly',
            'scary',
            'death',
            'pirate',
            'evil'
        ],
        sheet: [47, 32],
        hidden: ['messenger'],
        shortName: 'skull_and_crossbones'
    },
    {
        name: 'Georgia Flag',
        unified: '1F1EC-1F1EA',
        sheet: [2, 10],
        shortName: 'flag-ge'
    },
    {
        name: 'Eject',
        unified: '23CF-FE0F',
        sheet: [46, 44],
        hidden: ['messenger'],
        shortName: 'eject'
    },
    {
        name: 'Delivery Truck',
        unified: '1F69A',
        keywords: [
            'cars',
            'transportation'
        ],
        sheet: [34, 34],
        shortName: 'truck'
    },
    {
        name: 'Incoming Envelope',
        unified: '1F4E8',
        keywords: ['email', 'inbox'],
        sheet: [26, 31],
        shortName: 'incoming_envelope'
    },
    {
        name: 'Tropical Drink',
        unified: '1F379',
        keywords: [
            'beverage',
            'cocktail',
            'summer',
            'beach',
            'alcohol',
            'booze',
            'mojito'
        ],
        sheet: [8, 7],
        shortName: 'tropical_drink'
    },
    {
        name: 'Scorpion',
        unified: '1F982',
        keywords: ['animal', 'arachnid'],
        sheet: [42, 26],
        hidden: ['messenger'],
        shortName: 'scorpion'
    },
    {
        name: 'Cinema',
        unified: '1F3A6',
        keywords: [
            'blue-square',
            'record',
            'film',
            'movie',
            'curtain',
            'stage',
            'theater'
        ],
        sheet: [9, 0],
        shortName: 'cinema'
    },
    {
        name: 'Articulated Lorry',
        unified: '1F69B',
        keywords: [
            'vehicle',
            'cars',
            'transportation',
            'express'
        ],
        sheet: [34, 35],
        shortName: 'articulated_lorry'
    },
    {
        name: 'Envelope with Downwards Arrow Above',
        unified: '1F4E9',
        keywords: [
            'email',
            'communication'
        ],
        sheet: [26, 32],
        shortName: 'envelope_with_arrow'
    },
    {
        name: 'Ghost',
        unified: '1F47B',
        keywords: [
            'halloween',
            'spooky',
            'scary'
        ],
        sheet: [22, 42],
        shortName: 'ghost'
    },
    {
        name: 'French Guiana Flag',
        unified: '1F1EC-1F1EB',
        sheet: [2, 11],
        hidden: ['google'],
        shortName: 'flag-gf'
    },
    {
        name: 'Bouquet',
        unified: '1F490',
        keywords: [
            'flowers',
            'nature',
            'spring'
        ],
        sheet: [24, 42],
        shortName: 'bouquet'
    },
    {
        name: 'Tractor',
        unified: '1F69C',
        keywords: [
            'vehicle',
            'car',
            'farming',
            'agriculture'
        ],
        sheet: [34, 36],
        shortName: 'tractor'
    },
    {
        name: 'Beer Mug',
        unified: '1F37A',
        keywords: [
            'relax',
            'beverage',
            'drink',
            'drunk',
            'party',
            'pub',
            'summer',
            'alcohol',
            'booze'
        ],
        sheet: [8, 8],
        shortName: 'beer'
    },
    {
        name: 'Outbox Tray',
        unified: '1F4E4',
        keywords: ['inbox', 'email'],
        sheet: [26, 27],
        shortName: 'outbox_tray'
    },
    {
        name: 'Low Brightness Symbol',
        unified: '1F505',
        keywords: [
            'sun',
            'afternoon',
            'warm',
            'summer'
        ],
        sheet: [27, 7],
        shortName: 'low_brightness'
    },
    {
        name: 'Extraterrestrial Alien',
        unified: '1F47D',
        keywords: [
            'UFO',
            'paul',
            'weird',
            'outer_space'
        ],
        sheet: [22, 49],
        shortName: 'alien'
    },
    {
        name: 'Guernsey Flag',
        unified: '1F1EC-1F1EC',
        sheet: [2, 12],
        shortName: 'flag-gg'
    },
    {
        name: 'Cherry Blossom',
        unified: '1F338',
        keywords: [
            'nature',
            'plant',
            'spring',
            'flower'
        ],
        sheet: [6, 46],
        shortName: 'cherry_blossom'
    },
    {
        name: 'Inbox Tray',
        unified: '1F4E5',
        keywords: ['email', 'documents'],
        sheet: [26, 28],
        shortName: 'inbox_tray'
    },
    {
        name: 'Ghana Flag',
        unified: '1F1EC-1F1ED',
        sheet: [2, 13],
        shortName: 'flag-gh'
    },
    {
        name: 'Bicycle',
        unified: '1F6B2',
        keywords: [
            'sports',
            'bicycle',
            'exercise',
            'hipster'
        ],
        sheet: [35, 23],
        shortName: 'bike'
    },
    {
        name: 'Alien Monster',
        unified: '1F47E',
        keywords: [
            'game',
            'arcade',
            'play'
        ],
        sheet: [22, 50],
        shortName: 'space_invader'
    },
    {
        name: 'Clinking Beer Mugs',
        unified: '1F37B',
        keywords: [
            'relax',
            'beverage',
            'drink',
            'drunk',
            'party',
            'pub',
            'summer',
            'alcohol',
            'booze'
        ],
        sheet: [8, 9],
        shortName: 'beers'
    },
    {
        name: 'High Brightness Symbol',
        unified: '1F506',
        keywords: ['sun', 'light'],
        sheet: [27, 8],
        shortName: 'high_brightness'
    },
    {
        name: 'Package',
        unified: '1F4E6',
        keywords: [
            'mail',
            'gift',
            'cardboard',
            'box',
            'moving'
        ],
        sheet: [26, 29],
        shortName: 'package'
    },
    {
        name: 'Scooter',
        unified: '1F6F4',
        sheet: [37, 19],
        hidden: ['messenger'],
        shortName: 'scooter'
    },
    {
        name: 'White Flower',
        unified: '1F4AE',
        keywords: ['japanese', 'spring'],
        sheet: [25, 25],
        shortName: 'white_flower'
    },
    {
        name: 'Clinking Glasses',
        unified: '1F942',
        keywords: [
            'beverage',
            'drink',
            'party',
            'alcohol',
            'celebrate',
            'cheers',
            'wine',
            'champagne',
            'toast'
        ],
        sheet: [41, 38],
        hidden: ['messenger'],
        shortName: 'clinking_glasses'
    },
    {
        name: 'Robot Face',
        unified: '1F916',
        sheet: [37, 30],
        hidden: ['messenger'],
        shortName: 'robot_face'
    },
    {
        name: 'Antenna with Bars',
        unified: '1F4F6',
        keywords: [
            'blue-square',
            'reception',
            'phone',
            'internet',
            'connection',
            'wifi',
            'bluetooth',
            'bars'
        ],
        sheet: [26, 45],
        shortName: 'signal_strength'
    },
    {
        name: 'Gibraltar Flag',
        unified: '1F1EC-1F1EE',
        sheet: [2, 14],
        shortName: 'flag-gi'
    },
    {
        name: 'Greenland Flag',
        unified: '1F1EC-1F1F1',
        sheet: [2, 15],
        shortName: 'flag-gl'
    },
    {
        name: 'Motor Scooter',
        unified: '1F6F5',
        keywords: [
            'vehicle',
            'vespa',
            'sasha'
        ],
        sheet: [37, 20],
        hidden: ['messenger'],
        shortName: 'motor_scooter'
    },
    {
        name: 'Closed Mailbox with Raised Flag',
        unified: '1F4EB',
        keywords: [
            'email',
            'inbox',
            'communication'
        ],
        sheet: [26, 34],
        shortName: 'mailbox'
    },
    {
        name: 'Vibration Mode',
        unified: '1F4F3',
        keywords: [
            'orange-square',
            'phone'
        ],
        sheet: [26, 42],
        shortName: 'vibration_mode'
    },
    {
        name: 'Pile of Poo',
        unified: '1F4A9',
        sheet: [25, 15],
        shortNames: ['poop', 'shit'],
        shortName: 'hankey'
    },
    {
        name: 'Rosette',
        unified: '1F3F5-FE0F',
        keywords: [
            'flower',
            'decoration',
            'military'
        ],
        sheet: [12, 20],
        hidden: ['messenger'],
        shortName: 'rosette'
    },
    {
        name: 'Tumbler Glass',
        unified: '1F943',
        keywords: [
            'drink',
            'beverage',
            'drunk',
            'alcohol',
            'liquor',
            'booze',
            'bourbon',
            'scotch',
            'whisky',
            'glass',
            'shot'
        ],
        sheet: [41, 39],
        hidden: ['messenger'],
        shortName: 'tumbler_glass'
    },
    {
        name: 'Cup with Straw',
        unified: '1F964',
        keywords: ['drink', 'soda'],
        sheet: [42, 16],
        hidden: ['messenger'],
        shortName: 'cup_with_straw'
    },
    {
        name: 'Gambia Flag',
        unified: '1F1EC-1F1F2',
        sheet: [2, 16],
        shortName: 'flag-gm'
    },
    {
        name: 'Closed Mailbox with Lowered Flag',
        unified: '1F4EA',
        keywords: [
            'email',
            'communication',
            'inbox'
        ],
        sheet: [26, 33],
        shortName: 'mailbox_closed'
    },
    {
        name: 'Mobile Phone off',
        unified: '1F4F4',
        keywords: [
            'mute',
            'orange-square',
            'silence',
            'quiet'
        ],
        sheet: [26, 43],
        shortName: 'mobile_phone_off'
    },
    {
        name: 'Bus Stop',
        unified: '1F68F',
        keywords: [
            'transportation',
            'wait'
        ],
        sheet: [34, 23],
        shortName: 'busstop'
    },
    {
        name: 'Smiling Cat Face with Open Mouth',
        unified: '1F63A',
        keywords: [
            'animal',
            'cats',
            'happy',
            'smile'
        ],
        sheet: [31, 30],
        shortName: 'smiley_cat'
    },
    {
        name: 'Rose',
        unified: '1F339',
        keywords: [
            'flowers',
            'valentines',
            'love',
            'spring'
        ],
        sheet: [6, 47],
        shortName: 'rose'
    },
    {
        name: 'Motorway',
        unified: '1F6E3-FE0F',
        keywords: [
            'road',
            'cupertino',
            'interstate',
            'highway'
        ],
        sheet: [37, 11],
        hidden: ['messenger'],
        shortName: 'motorway'
    },
    {
        name: 'Grinning Cat Face with Smiling Eyes',
        unified: '1F638',
        keywords: [
            'animal',
            'cats',
            'smile'
        ],
        sheet: [31, 28],
        shortName: 'smile_cat'
    },
    {
        name: 'Guinea Flag',
        unified: '1F1EC-1F1F3',
        sheet: [2, 17],
        shortName: 'flag-gn'
    },
    {
        name: 'Wilted Flower',
        unified: '1F940',
        keywords: [
            'plant',
            'nature',
            'flower'
        ],
        sheet: [41, 36],
        hidden: ['messenger'],
        shortName: 'wilted_flower'
    },
    {
        name: 'Open Mailbox with Raised Flag',
        unified: '1F4EC',
        keywords: [
            'email',
            'inbox',
            'communication'
        ],
        sheet: [26, 35],
        shortName: 'mailbox_with_mail'
    },
    {
        name: 'Chopsticks',
        unified: '1F962',
        keywords: ['food'],
        sheet: [42, 14],
        hidden: ['messenger'],
        shortName: 'chopsticks'
    },
    {
        name: 'Female Sign',
        unified: '2640-FE0F',
        sheet: [47, 42],
        hidden: ['apple', 'messenger'],
        shortName: 'female_sign'
    },
    {
        name: 'Open Mailbox with Lowered Flag',
        unified: '1F4ED',
        keywords: ['email', 'inbox'],
        sheet: [26, 36],
        shortName: 'mailbox_with_no_mail'
    },
    {
        name: 'Knife Fork Plate',
        unified: '1F37D-FE0F',
        sheet: [8, 11],
        hidden: ['messenger'],
        shortName: 'knife_fork_plate'
    },
    {
        name: 'Hibiscus',
        unified: '1F33A',
        keywords: [
            'plant',
            'vegetable',
            'flowers',
            'beach'
        ],
        sheet: [6, 48],
        shortName: 'hibiscus'
    },
    {
        name: 'Guadeloupe Flag',
        unified: '1F1EC-1F1F5',
        sheet: [2, 18],
        hidden: ['google'],
        shortName: 'flag-gp'
    },
    {
        name: 'Railway Track',
        unified: '1F6E4-FE0F',
        keywords: [
            'train',
            'transportation'
        ],
        sheet: [37, 12],
        hidden: ['messenger'],
        shortName: 'railway_track'
    },
    {
        name: 'Male Sign',
        unified: '2642-FE0F',
        sheet: [47, 43],
        hidden: ['apple', 'messenger'],
        shortName: 'male_sign'
    },
    {
        name: 'Cat Face with Tears of Joy',
        unified: '1F639',
        keywords: [
            'animal',
            'cats',
            'haha',
            'happy',
            'tears'
        ],
        sheet: [31, 29],
        shortName: 'joy_cat'
    },
    {
        name: 'Fuel Pump',
        unified: '26FD',
        keywords: [
            'gas station',
            'petroleum'
        ],
        sheet: [49, 13],
        shortName: 'fuelpump'
    },
    {
        name: 'Sunflower',
        unified: '1F33B',
        keywords: [
            'nature',
            'plant',
            'fall'
        ],
        sheet: [6, 49],
        shortName: 'sunflower'
    },
    {
        name: 'Postbox',
        unified: '1F4EE',
        keywords: [
            'email',
            'letter',
            'envelope'
        ],
        sheet: [26, 37],
        shortName: 'postbox'
    },
    {
        name: 'Equatorial Guinea Flag',
        unified: '1F1EC-1F1F6',
        sheet: [2, 19],
        shortName: 'flag-gq'
    },
    {
        name: 'Smiling Cat Face with Heart-Shaped Eyes',
        unified: '1F63B',
        keywords: [
            'animal',
            'love',
            'like',
            'affection',
            'cats',
            'valentines',
            'heart'
        ],
        sheet: [31, 31],
        shortName: 'heart_eyes_cat'
    },
    {
        name: 'Fork and Knife',
        unified: '1F374',
        keywords: ['cutlery', 'kitchen'],
        sheet: [8, 2],
        shortName: 'fork_and_knife'
    },
    {
        name: 'Medical Symbol',
        unified: '2695-FE0F',
        sheet: [48, 14],
        hidden: ['apple', 'messenger'],
        shortNames: ['staff_of_aesculapius'],
        shortName: 'medical_symbol'
    },
    {
        name: 'Black Universal Recycling Symbol',
        unified: '267B-FE0F',
        keywords: [
            'arrow',
            'environment',
            'garbage',
            'trash'
        ],
        sheet: [48, 9],
        shortName: 'recycle'
    },
    {
        name: 'Spoon',
        unified: '1F944',
        keywords: [
            'cutlery',
            'kitchen',
            'tableware'
        ],
        sheet: [41, 40],
        hidden: ['messenger'],
        shortName: 'spoon'
    },
    {
        name: 'Blossom',
        unified: '1F33C',
        keywords: [
            'nature',
            'flowers',
            'yellow'
        ],
        sheet: [6, 50],
        shortName: 'blossom'
    },
    {
        name: 'Police Cars Revolving Light',
        unified: '1F6A8',
        keywords: [
            'police',
            'ambulance',
            '911',
            'emergency',
            'alert',
            'error',
            'pinged',
            'law',
            'legal'
        ],
        sheet: [35, 13],
        shortName: 'rotating_light'
    },
    {
        name: 'Cat Face with Wry Smile',
        unified: '1F63C',
        keywords: [
            'animal',
            'cats',
            'smirk'
        ],
        sheet: [31, 32],
        shortName: 'smirk_cat'
    },
    {
        name: 'Ballot Box with Ballot',
        unified: '1F5F3-FE0F',
        sheet: [30, 17],
        hidden: ['messenger'],
        shortName: 'ballot_box_with_ballot'
    },
    {
        name: 'Greece Flag',
        unified: '1F1EC-1F1F7',
        sheet: [2, 20],
        shortName: 'flag-gr'
    },
    {
        name: 'Kissing Cat Face with Closed Eyes',
        unified: '1F63D',
        keywords: [
            'animal',
            'cats',
            'kiss'
        ],
        sheet: [31, 33],
        shortName: 'kissing_cat'
    },
    {
        name: 'Pencil',
        unified: '270F-FE0F',
        keywords: [
            'stationery',
            'write',
            'paper',
            'writing',
            'school',
            'study'
        ],
        sheet: [49, 42],
        shortName: 'pencil2'
    },
    {
        name: 'Horizontal Traffic Light',
        unified: '1F6A5',
        keywords: [
            'transportation',
            'signal'
        ],
        sheet: [35, 10],
        shortName: 'traffic_light'
    },
    {
        name: 'Fleur De Lis',
        unified: '269C-FE0F',
        keywords: ['decorative', 'scout'],
        sheet: [48, 19],
        hidden: ['messenger'],
        shortName: 'fleur_de_lis'
    },
    {
        name: 'Tulip',
        unified: '1F337',
        keywords: [
            'flowers',
            'plant',
            'nature',
            'summer',
            'spring'
        ],
        sheet: [6, 45],
        shortName: 'tulip'
    },
    {
        name: 'Hocho',
        unified: '1F52A',
        keywords: [
            'knife',
            'blade',
            'cutlery',
            'kitchen',
            'weapon'
        ],
        sheet: [27, 44],
        shortNames: ['knife'],
        shortName: 'hocho'
    },
    {
        name: 'South Georgia & South Sandwich Islands Flag',
        unified: '1F1EC-1F1F8',
        sheet: [2, 21],
        hidden: ['google'],
        shortName: 'flag-gs'
    },
    {
        name: 'Seedling',
        unified: '1F331',
        keywords: [
            'plant',
            'nature',
            'grass',
            'lawn',
            'spring'
        ],
        sheet: [6, 39],
        shortName: 'seedling'
    },
    {
        name: 'Amphora',
        unified: '1F3FA',
        keywords: ['vase', 'jar'],
        sheet: [12, 24],
        hidden: ['messenger'],
        shortName: 'amphora'
    },
    {
        name: 'Weary Cat Face',
        unified: '1F640',
        keywords: [
            'animal',
            'cats',
            'munch',
            'scared',
            'scream'
        ],
        sheet: [31, 36],
        shortName: 'scream_cat'
    },
    {
        name: 'Vertical Traffic Light',
        unified: '1F6A6',
        keywords: [
            'transportation',
            'driving'
        ],
        sheet: [35, 11],
        shortName: 'vertical_traffic_light'
    },
    {
        name: 'Black Nib',
        unified: '2712-FE0F',
        keywords: [
            'pen',
            'stationery',
            'writing',
            'write'
        ],
        sheet: [49, 43],
        shortName: 'black_nib'
    },
    {
        name: 'Guatemala Flag',
        unified: '1F1EC-1F1F9',
        sheet: [2, 22],
        shortName: 'flag-gt'
    },
    {
        name: 'Trident Emblem',
        unified: '1F531',
        keywords: ['weapon', 'spear'],
        sheet: [27, 51],
        shortName: 'trident'
    },
    {
        name: 'Guam Flag',
        unified: '1F1EC-1F1FA',
        sheet: [2, 23],
        shortName: 'flag-gu'
    },
    {
        name: 'Name Badge',
        unified: '1F4DB',
        keywords: ['fire', 'forbid'],
        sheet: [26, 18],
        shortName: 'name_badge'
    },
    {
        name: 'Construction Sign',
        unified: '1F6A7',
        keywords: [
            'wip',
            'progress',
            'caution',
            'warning'
        ],
        sheet: [35, 12],
        shortName: 'construction'
    },
    {
        name: 'Lower Left Fountain Pen',
        unified: '1F58B-FE0F',
        sheet: [29, 29],
        hidden: ['messenger'],
        shortName: 'lower_left_fountain_pen'
    },
    {
        name: 'Evergreen Tree',
        unified: '1F332',
        keywords: ['plant', 'nature'],
        sheet: [6, 40],
        shortName: 'evergreen_tree'
    },
    {
        name: 'Crying Cat Face',
        unified: '1F63F',
        keywords: [
            'animal',
            'tears',
            'weep',
            'sad',
            'cats',
            'upset',
            'cry'
        ],
        sheet: [31, 35],
        shortName: 'crying_cat_face'
    },
    {
        name: 'Guinea-Bissau Flag',
        unified: '1F1EC-1F1FC',
        sheet: [2, 24],
        shortName: 'flag-gw'
    },
    {
        name: 'Lower Left Ballpoint Pen',
        unified: '1F58A-FE0F',
        sheet: [29, 28],
        hidden: ['messenger'],
        shortName: 'lower_left_ballpoint_pen'
    },
    {
        name: 'Pouting Cat Face',
        unified: '1F63E',
        keywords: ['animal', 'cats'],
        sheet: [31, 34],
        shortName: 'pouting_cat'
    },
    {
        name: 'Deciduous Tree',
        unified: '1F333',
        keywords: ['plant', 'nature'],
        sheet: [6, 41],
        shortName: 'deciduous_tree'
    },
    {
        name: 'Octagonal Sign',
        unified: '1F6D1',
        sheet: [37, 6],
        hidden: ['messenger'],
        shortName: 'octagonal_sign'
    },
    {
        name: 'Japanese Symbol for Beginner',
        unified: '1F530',
        keywords: ['badge', 'shield'],
        sheet: [27, 50],
        shortName: 'beginner'
    },
    {
        name: 'Guyana Flag',
        unified: '1F1EC-1F1FE',
        sheet: [2, 25],
        shortName: 'flag-gy'
    },
    {
        name: 'Lower Left Paintbrush',
        unified: '1F58C-FE0F',
        sheet: [29, 30],
        hidden: ['messenger'],
        shortName: 'lower_left_paintbrush'
    },
    {
        name: 'Heavy Large Circle',
        unified: '2B55',
        keywords: ['circle', 'round'],
        sheet: [50, 23],
        shortName: 'o'
    },
    {
        name: 'Palm Tree',
        unified: '1F334',
        keywords: [
            'plant',
            'vegetable',
            'nature',
            'summer',
            'beach',
            'mojito',
            'tropical'
        ],
        sheet: [6, 42],
        shortName: 'palm_tree'
    },
    {
        name: 'Anchor',
        unified: '2693',
        keywords: [
            'ship',
            'ferry',
            'sea',
            'boat'
        ],
        sheet: [48, 12],
        shortName: 'anchor'
    },
    {
        name: 'See-No-Evil Monkey',
        unified: '1F648',
        keywords: [
            'monkey',
            'animal',
            'nature',
            'haha'
        ],
        sheet: [32, 43],
        shortName: 'see_no_evil'
    },
    {
        name: 'Sailboat',
        unified: '26F5',
        sheet: [48, 43],
        shortNames: ['sailboat'],
        shortName: 'boat'
    },
    {
        name: 'White Heavy Check Mark',
        unified: '2705',
        keywords: [
            'green-square',
            'ok',
            'agree',
            'vote',
            'election',
            'answer',
            'tick'
        ],
        sheet: [49, 15],
        shortName: 'white_check_mark'
    },
    {
        name: 'Hong Kong Sar China Flag',
        unified: '1F1ED-1F1F0',
        sheet: [2, 26],
        shortName: 'flag-hk'
    },
    {
        name: 'Lower Left Crayon',
        unified: '1F58D-FE0F',
        sheet: [29, 31],
        hidden: ['messenger'],
        shortName: 'lower_left_crayon'
    },
    {
        name: 'Hear-No-Evil Monkey',
        unified: '1F649',
        keywords: [
            'animal',
            'monkey',
            'nature'
        ],
        sheet: [32, 44],
        shortName: 'hear_no_evil'
    },
    {
        name: 'Cactus',
        unified: '1F335',
        keywords: [
            'vegetable',
            'plant',
            'nature'
        ],
        sheet: [6, 43],
        shortName: 'cactus'
    },
    {
        name: 'Ear of Rice',
        unified: '1F33E',
        keywords: ['nature', 'plant'],
        sheet: [7, 0],
        shortName: 'ear_of_rice'
    },
    {
        name: 'Speak-No-Evil Monkey',
        unified: '1F64A',
        keywords: [
            'monkey',
            'animal',
            'nature',
            'omg'
        ],
        sheet: [32, 45],
        shortName: 'speak_no_evil'
    },
    {
        name: 'Heard & Mcdonald Islands Flag',
        unified: '1F1ED-1F1F2',
        sheet: [2, 27],
        shortName: 'flag-hm'
    },
    {
        name: 'Ballot Box with Check',
        unified: '2611-FE0F',
        keywords: [
            'ok',
            'agree',
            'confirm',
            'black-square',
            'vote',
            'election',
            'yes',
            'tick'
        ],
        sheet: [47, 22],
        shortName: 'ballot_box_with_check'
    },
    {
        name: 'Canoe',
        unified: '1F6F6',
        keywords: [
            'boat',
            'paddle',
            'water',
            'ship'
        ],
        sheet: [37, 21],
        hidden: ['messenger'],
        shortName: 'canoe'
    },
    {
        name: 'Memo',
        unified: '1F4DD',
        keywords: [
            'write',
            'documents',
            'stationery',
            'pencil',
            'paper',
            'writing',
            'legal',
            'exam',
            'quiz',
            'test',
            'study',
            'compose'
        ],
        sheet: [26, 20],
        shortNames: ['pencil'],
        shortName: 'memo'
    },
    {
        name: 'Herb',
        unified: '1F33F',
        keywords: [
            'vegetable',
            'plant',
            'medicine',
            'weed',
            'grass',
            'lawn'
        ],
        sheet: [7, 1],
        shortName: 'herb'
    },
    {
        name: 'Honduras Flag',
        unified: '1F1ED-1F1F3',
        sheet: [2, 28],
        shortName: 'flag-hn'
    },
    {
        name: 'Heavy Check Mark',
        unified: '2714-FE0F',
        keywords: [
            'ok',
            'nike',
            'answer',
            'yes',
            'tick'
        ],
        sheet: [49, 44],
        shortName: 'heavy_check_mark'
    },
    {
        name: 'Briefcase',
        unified: '1F4BC',
        keywords: [
            'business',
            'documents',
            'work',
            'law',
            'legal',
            'job',
            'career'
        ],
        sheet: [25, 39],
        shortName: 'briefcase'
    },
    {
        name: 'Speedboat',
        unified: '1F6A4',
        keywords: [
            'ship',
            'transportation',
            'vehicle',
            'summer'
        ],
        sheet: [35, 9],
        shortName: 'speedboat'
    },
    {
        name: 'Baby',
        unified: '1F476',
        keywords: [
            'child',
            'boy',
            'girl',
            'toddler'
        ],
        sheet: [22, 10],
        skinVariations: [
            {
                unified: '1F476-1F3FB',
                sheet: [22, 11]
            },
            {
                unified: '1F476-1F3FC',
                sheet: [22, 12]
            },
            {
                unified: '1F476-1F3FD',
                sheet: [22, 13]
            },
            {
                unified: '1F476-1F3FE',
                sheet: [22, 14]
            },
            {
                unified: '1F476-1F3FF',
                sheet: [22, 15]
            }
        ],
        shortName: 'baby'
    },
    {
        name: 'Heavy Multiplication X',
        unified: '2716-FE0F',
        keywords: ['math', 'calculation'],
        sheet: [49, 45],
        shortName: 'heavy_multiplication_x'
    },
    {
        name: 'Child',
        unified: '1F9D2',
        keywords: [
            'gender-neutral',
            'young'
        ],
        sheet: [43, 4],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D2-1F3FB',
                sheet: [43, 5],
                hidden: ['messenger']
            },
            {
                unified: '1F9D2-1F3FC',
                sheet: [43, 6],
                hidden: ['messenger']
            },
            {
                unified: '1F9D2-1F3FD',
                sheet: [43, 7],
                hidden: ['messenger']
            },
            {
                unified: '1F9D2-1F3FE',
                sheet: [43, 8],
                hidden: ['messenger']
            },
            {
                unified: '1F9D2-1F3FF',
                sheet: [43, 9],
                hidden: ['messenger']
            }
        ],
        shortName: 'child'
    },
    {
        name: 'Shamrock',
        unified: '2618-FE0F',
        keywords: [
            'vegetable',
            'plant',
            'nature',
            'irish',
            'clover'
        ],
        sheet: [47, 25],
        hidden: ['messenger'],
        shortName: 'shamrock'
    },
    {
        name: 'Passenger Ship',
        unified: '1F6F3-FE0F',
        keywords: [
            'yacht',
            'cruise',
            'ferry'
        ],
        sheet: [37, 18],
        hidden: ['messenger'],
        shortName: 'passenger_ship'
    },
    {
        name: 'Croatia Flag',
        unified: '1F1ED-1F1F7',
        sheet: [2, 29],
        shortName: 'flag-hr'
    },
    {
        name: 'File Folder',
        unified: '1F4C1',
        keywords: [
            'documents',
            'business',
            'office'
        ],
        sheet: [25, 44],
        shortName: 'file_folder'
    },
    {
        name: 'Cross Mark',
        unified: '274C',
        keywords: [
            'no',
            'delete',
            'remove',
            'cancel'
        ],
        sheet: [50, 1],
        shortName: 'x'
    },
    {
        name: 'Four Leaf Clover',
        unified: '1F340',
        keywords: [
            'vegetable',
            'plant',
            'nature',
            'lucky',
            'irish'
        ],
        sheet: [7, 2],
        shortName: 'four_leaf_clover'
    },
    {
        name: 'Open File Folder',
        unified: '1F4C2',
        keywords: ['documents', 'load'],
        sheet: [25, 45],
        shortName: 'open_file_folder'
    },
    {
        name: 'Boy',
        unified: '1F466',
        keywords: [
            'man',
            'male',
            'guy',
            'teenager'
        ],
        sheet: [15, 42],
        skinVariations: [
            {
                unified: '1F466-1F3FB',
                sheet: [15, 43]
            },
            {
                unified: '1F466-1F3FC',
                sheet: [15, 44]
            },
            {
                unified: '1F466-1F3FD',
                sheet: [15, 45]
            },
            {
                unified: '1F466-1F3FE',
                sheet: [15, 46]
            },
            {
                unified: '1F466-1F3FF',
                sheet: [15, 47]
            }
        ],
        shortName: 'boy'
    },
    {
        name: 'Ferry',
        unified: '26F4-FE0F',
        keywords: ['boat', 'ship', 'yacht'],
        sheet: [48, 42],
        hidden: ['messenger'],
        shortName: 'ferry'
    },
    {
        name: 'Haiti Flag',
        unified: '1F1ED-1F1F9',
        sheet: [2, 30],
        shortName: 'flag-ht'
    },
    {
        name: 'Girl',
        unified: '1F467',
        keywords: [
            'female',
            'woman',
            'teenager'
        ],
        sheet: [15, 48],
        skinVariations: [
            {
                unified: '1F467-1F3FB',
                sheet: [15, 49]
            },
            {
                unified: '1F467-1F3FC',
                sheet: [15, 50]
            },
            {
                unified: '1F467-1F3FD',
                sheet: [15, 51]
            },
            {
                unified: '1F467-1F3FE',
                sheet: [16, 0]
            },
            {
                unified: '1F467-1F3FF',
                sheet: [16, 1]
            }
        ],
        shortName: 'girl'
    },
    {
        name: 'Negative Squared Cross Mark',
        unified: '274E',
        keywords: [
            'x',
            'green-square',
            'no',
            'deny'
        ],
        sheet: [50, 2],
        shortName: 'negative_squared_cross_mark'
    },
    {
        name: 'Hungary Flag',
        unified: '1F1ED-1F1FA',
        sheet: [2, 31],
        shortName: 'flag-hu'
    },
    {
        name: 'Card Index Dividers',
        unified: '1F5C2-FE0F',
        keywords: [
            'organizing',
            'business',
            'stationery'
        ],
        sheet: [30, 4],
        hidden: ['messenger'],
        shortName: 'card_index_dividers'
    },
    {
        name: 'Maple Leaf',
        unified: '1F341',
        keywords: [
            'nature',
            'plant',
            'vegetable',
            'ca',
            'fall'
        ],
        sheet: [7, 3],
        shortName: 'maple_leaf'
    },
    {
        name: 'Motor Boat',
        unified: '1F6E5-FE0F',
        keywords: ['ship'],
        sheet: [37, 13],
        hidden: ['messenger'],
        shortName: 'motor_boat'
    },
    {
        name: 'Canary Islands Flag',
        unified: '1F1EE-1F1E8',
        sheet: [2, 32],
        shortName: 'flag-ic'
    },
    {
        name: 'Fallen Leaf',
        unified: '1F342',
        keywords: [
            'nature',
            'plant',
            'vegetable',
            'leaves'
        ],
        sheet: [7, 4],
        shortName: 'fallen_leaf'
    },
    {
        name: 'Adult',
        unified: '1F9D1',
        keywords: [
            'gender-neutral',
            'person'
        ],
        sheet: [42, 50],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D1-1F3FB',
                sheet: [42, 51],
                hidden: ['messenger']
            },
            {
                unified: '1F9D1-1F3FC',
                sheet: [43, 0],
                hidden: ['messenger']
            },
            {
                unified: '1F9D1-1F3FD',
                sheet: [43, 1],
                hidden: ['messenger']
            },
            {
                unified: '1F9D1-1F3FE',
                sheet: [43, 2],
                hidden: ['messenger']
            },
            {
                unified: '1F9D1-1F3FF',
                sheet: [43, 3],
                hidden: ['messenger']
            }
        ],
        shortName: 'adult'
    },
    {
        name: 'Ship',
        unified: '1F6A2',
        keywords: [
            'transportation',
            'titanic',
            'deploy'
        ],
        sheet: [34, 42],
        shortName: 'ship'
    },
    {
        name: 'Heavy Plus Sign',
        unified: '2795',
        keywords: [
            'math',
            'calculation',
            'addition',
            'more',
            'increase'
        ],
        sheet: [50, 9],
        shortName: 'heavy_plus_sign'
    },
    {
        name: 'Calendar',
        unified: '1F4C5',
        keywords: ['calendar', 'schedule'],
        sheet: [25, 48],
        shortName: 'date'
    },
    {
        name: 'Man',
        unified: '1F468',
        keywords: [
            'mustache',
            'father',
            'dad',
            'guy',
            'classy',
            'sir',
            'moustache'
        ],
        sheet: [18, 11],
        skinVariations: [
            {
                unified: '1F468-1F3FB',
                sheet: [18, 12]
            },
            {
                unified: '1F468-1F3FC',
                sheet: [18, 13]
            },
            {
                unified: '1F468-1F3FD',
                sheet: [18, 14]
            },
            {
                unified: '1F468-1F3FE',
                sheet: [18, 15]
            },
            {
                unified: '1F468-1F3FF',
                sheet: [18, 16]
            }
        ],
        shortName: 'man'
    },
    {
        name: 'Indonesia Flag',
        unified: '1F1EE-1F1E9',
        sheet: [2, 33],
        shortName: 'flag-id'
    },
    {
        name: 'Leaf Fluttering in Wind',
        unified: '1F343',
        keywords: [
            'nature',
            'plant',
            'tree',
            'vegetable',
            'grass',
            'lawn',
            'spring'
        ],
        sheet: [7, 5],
        shortName: 'leaves'
    },
    {
        name: 'Heavy Minus Sign',
        unified: '2796',
        keywords: [
            'math',
            'calculation',
            'subtract',
            'less'
        ],
        sheet: [50, 10],
        shortName: 'heavy_minus_sign'
    },
    {
        name: 'Tear-off Calendar',
        unified: '1F4C6',
        keywords: [
            'schedule',
            'date',
            'planning'
        ],
        sheet: [25, 49],
        shortName: 'calendar'
    },
    {
        name: 'Airplane',
        unified: '2708-FE0F',
        keywords: [
            'vehicle',
            'transportation',
            'flight',
            'fly'
        ],
        sheet: [49, 16],
        shortName: 'airplane'
    },
    {
        name: 'Spiral Note Pad',
        unified: '1F5D2-FE0F',
        sheet: [30, 8],
        hidden: ['messenger'],
        shortName: 'spiral_note_pad'
    },
    {
        name: 'Heavy Division Sign',
        unified: '2797',
        keywords: [
            'divide',
            'math',
            'calculation'
        ],
        sheet: [50, 11],
        shortName: 'heavy_division_sign'
    },
    {
        name: 'Small Airplane',
        unified: '1F6E9-FE0F',
        keywords: [
            'flight',
            'transportation',
            'fly',
            'vehicle'
        ],
        sheet: [37, 14],
        hidden: ['messenger'],
        shortName: 'small_airplane'
    },
    {
        name: 'Woman',
        unified: '1F469',
        keywords: [
            'female',
            'girls',
            'lady'
        ],
        sheet: [20, 23],
        skinVariations: [
            {
                unified: '1F469-1F3FB',
                sheet: [20, 24]
            },
            {
                unified: '1F469-1F3FC',
                sheet: [20, 25]
            },
            {
                unified: '1F469-1F3FD',
                sheet: [20, 26]
            },
            {
                unified: '1F469-1F3FE',
                sheet: [20, 27]
            },
            {
                unified: '1F469-1F3FF',
                sheet: [20, 28]
            }
        ],
        shortName: 'woman'
    },
    {
        name: 'Ireland Flag',
        unified: '1F1EE-1F1EA',
        sheet: [2, 34],
        shortName: 'flag-ie'
    },
    {
        name: 'Curly Loop',
        unified: '27B0',
        keywords: [
            'scribble',
            'draw',
            'shape',
            'squiggle'
        ],
        sheet: [50, 13],
        shortName: 'curly_loop'
    },
    {
        name: 'Israel Flag',
        unified: '1F1EE-1F1F1',
        sheet: [2, 35],
        shortName: 'flag-il'
    },
    {
        name: 'Airplane Departure',
        unified: '1F6EB',
        sheet: [37, 15],
        hidden: ['messenger'],
        shortName: 'airplane_departure'
    },
    {
        name: 'Spiral Calendar Pad',
        unified: '1F5D3-FE0F',
        sheet: [30, 9],
        hidden: ['messenger'],
        shortName: 'spiral_calendar_pad'
    },
    {
        name: 'Older Adult',
        unified: '1F9D3',
        keywords: [
            'human',
            'elder',
            'senior',
            'gender-neutral'
        ],
        sheet: [43, 10],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D3-1F3FB',
                sheet: [43, 11],
                hidden: ['messenger']
            },
            {
                unified: '1F9D3-1F3FC',
                sheet: [43, 12],
                hidden: ['messenger']
            },
            {
                unified: '1F9D3-1F3FD',
                sheet: [43, 13],
                hidden: ['messenger']
            },
            {
                unified: '1F9D3-1F3FE',
                sheet: [43, 14],
                hidden: ['messenger']
            },
            {
                unified: '1F9D3-1F3FF',
                sheet: [43, 15],
                hidden: ['messenger']
            }
        ],
        shortName: 'older_adult'
    },
    {
        name: 'Airplane Arriving',
        unified: '1F6EC',
        sheet: [37, 16],
        hidden: ['messenger'],
        shortName: 'airplane_arriving'
    },
    {
        name: 'Card Index',
        unified: '1F4C7',
        keywords: [
            'business',
            'stationery'
        ],
        sheet: [25, 50],
        shortName: 'card_index'
    },
    {
        name: 'Double Curly Loop',
        unified: '27BF',
        keywords: ['tape', 'cassette'],
        sheet: [50, 14],
        shortName: 'loop'
    },
    {
        name: 'Older Man',
        unified: '1F474',
        keywords: [
            'human',
            'male',
            'men',
            'old',
            'elder',
            'senior'
        ],
        sheet: [21, 50],
        skinVariations: [
            {
                unified: '1F474-1F3FB',
                sheet: [21, 51]
            },
            {
                unified: '1F474-1F3FC',
                sheet: [22, 0]
            },
            {
                unified: '1F474-1F3FD',
                sheet: [22, 1]
            },
            {
                unified: '1F474-1F3FE',
                sheet: [22, 2]
            },
            {
                unified: '1F474-1F3FF',
                sheet: [22, 3]
            }
        ],
        shortName: 'older_man'
    },
    {
        name: 'Isle of Man Flag',
        unified: '1F1EE-1F1F2',
        sheet: [2, 36],
        shortName: 'flag-im'
    },
    {
        name: 'India Flag',
        unified: '1F1EE-1F1F3',
        sheet: [2, 37],
        shortName: 'flag-in'
    },
    {
        name: 'Chart with Upwards Trend',
        unified: '1F4C8',
        keywords: [
            'graph',
            'presentation',
            'stats',
            'recovery',
            'business',
            'economics',
            'money',
            'sales',
            'good',
            'success'
        ],
        sheet: [25, 51],
        shortName: 'chart_with_upwards_trend'
    },
    {
        name: 'Part Alternation Mark',
        unified: '303D-FE0F',
        keywords: [
            'graph',
            'presentation',
            'stats',
            'business',
            'economics',
            'bad'
        ],
        sheet: [50, 25],
        shortName: 'part_alternation_mark'
    },
    {
        name: 'Seat',
        unified: '1F4BA',
        keywords: [
            'sit',
            'airplane',
            'transport',
            'bus',
            'flight',
            'fly'
        ],
        sheet: [25, 37],
        shortName: 'seat'
    },
    {
        name: 'Older Woman',
        unified: '1F475',
        keywords: [
            'human',
            'female',
            'women',
            'lady',
            'old',
            'elder',
            'senior'
        ],
        sheet: [22, 4],
        skinVariations: [
            {
                unified: '1F475-1F3FB',
                sheet: [22, 5]
            },
            {
                unified: '1F475-1F3FC',
                sheet: [22, 6]
            },
            {
                unified: '1F475-1F3FD',
                sheet: [22, 7]
            },
            {
                unified: '1F475-1F3FE',
                sheet: [22, 8]
            },
            {
                unified: '1F475-1F3FF',
                sheet: [22, 9]
            }
        ],
        shortName: 'older_woman'
    },
    {
        name: 'Eight Spoked Asterisk',
        unified: '2733-FE0F',
        keywords: [
            'star',
            'sparkle',
            'green-square'
        ],
        sheet: [49, 49],
        shortName: 'eight_spoked_asterisk'
    },
    {
        name: 'Chart with Downwards Trend',
        unified: '1F4C9',
        keywords: [
            'graph',
            'presentation',
            'stats',
            'recession',
            'business',
            'economics',
            'money',
            'sales',
            'bad',
            'failure'
        ],
        sheet: [26, 0],
        shortName: 'chart_with_downwards_trend'
    },
    {
        name: 'British Indian Ocean Territory Flag',
        unified: '1F1EE-1F1F4',
        sheet: [2, 38],
        shortName: 'flag-io'
    },
    {
        name: 'Male Doctor',
        unified: '1F468-200D-2695-FE0F',
        sheet: [17, 43],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-2695-FE0F',
                sheet: [17, 44],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FC-200D-2695-FE0F',
                sheet: [17, 45],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FD-200D-2695-FE0F',
                sheet: [17, 46],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FE-200D-2695-FE0F',
                sheet: [17, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FF-200D-2695-FE0F',
                sheet: [17, 48],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male-doctor'
    },
    {
        name: 'Helicopter',
        unified: '1F681',
        keywords: [
            'transportation',
            'vehicle',
            'fly'
        ],
        sheet: [34, 9],
        shortName: 'helicopter'
    },
    {
        name: 'Female Doctor',
        unified: '1F469-200D-2695-FE0F',
        sheet: [20, 1],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-2695-FE0F',
                sheet: [20, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FC-200D-2695-FE0F',
                sheet: [20, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FD-200D-2695-FE0F',
                sheet: [20, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FE-200D-2695-FE0F',
                sheet: [20, 5],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FF-200D-2695-FE0F',
                sheet: [20, 6],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female-doctor'
    },
    {
        name: 'Suspension Railway',
        unified: '1F69F',
        keywords: [
            'vehicle',
            'transportation'
        ],
        sheet: [34, 39],
        shortName: 'suspension_railway'
    },
    {
        name: 'Bar Chart',
        unified: '1F4CA',
        keywords: [
            'graph',
            'presentation',
            'stats'
        ],
        sheet: [26, 1],
        shortName: 'bar_chart'
    },
    {
        name: 'Iraq Flag',
        unified: '1F1EE-1F1F6',
        sheet: [2, 39],
        shortName: 'flag-iq'
    },
    {
        name: 'Eight Pointed Black Star',
        unified: '2734-FE0F',
        keywords: [
            'orange-square',
            'shape',
            'polygon'
        ],
        sheet: [49, 50],
        shortName: 'eight_pointed_black_star'
    },
    {
        name: 'Mountain Cableway',
        unified: '1F6A0',
        keywords: [
            'transportation',
            'vehicle',
            'ski'
        ],
        sheet: [34, 40],
        shortName: 'mountain_cableway'
    },
    {
        name: 'Male Student',
        unified: '1F468-200D-1F393',
        sheet: [16, 14],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F393',
                sheet: [16, 15],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F393',
                sheet: [16, 16],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F393',
                sheet: [16, 17],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F393',
                sheet: [16, 18],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F393',
                sheet: [16, 19],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-student'
    },
    {
        name: 'Clipboard',
        unified: '1F4CB',
        keywords: [
            'stationery',
            'documents'
        ],
        sheet: [26, 2],
        shortName: 'clipboard'
    },
    {
        name: 'Iran Flag',
        unified: '1F1EE-1F1F7',
        sheet: [2, 40],
        shortName: 'flag-ir'
    },
    {
        name: 'Sparkle',
        unified: '2747-FE0F',
        keywords: [
            'stars',
            'green-square',
            'awesome',
            'good',
            'fireworks'
        ],
        sheet: [50, 0],
        shortName: 'sparkle'
    },
    {
        name: 'Female Student',
        unified: '1F469-200D-1F393',
        sheet: [18, 29],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F393',
                sheet: [18, 30],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F393',
                sheet: [18, 31],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F393',
                sheet: [18, 32],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F393',
                sheet: [18, 33],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F393',
                sheet: [18, 34],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-student'
    },
    {
        name: 'Pushpin',
        unified: '1F4CC',
        keywords: [
            'stationery',
            'mark',
            'here'
        ],
        sheet: [26, 3],
        shortName: 'pushpin'
    },
    {
        name: 'Aerial Tramway',
        unified: '1F6A1',
        keywords: [
            'transportation',
            'vehicle',
            'ski'
        ],
        sheet: [34, 41],
        shortName: 'aerial_tramway'
    },
    {
        name: 'Iceland Flag',
        unified: '1F1EE-1F1F8',
        sheet: [2, 41],
        shortName: 'flag-is'
    },
    {
        name: 'Double Exclamation Mark',
        unified: '203C-FE0F',
        keywords: [
            'exclamation',
            'surprise'
        ],
        sheet: [46, 29],
        shortName: 'bangbang'
    },
    {
        name: 'Exclamation Question Mark',
        unified: '2049-FE0F',
        keywords: [
            'wat',
            'punctuation',
            'surprise'
        ],
        sheet: [46, 30],
        shortName: 'interrobang'
    },
    {
        name: 'Satellite',
        unified: '1F6F0-FE0F',
        keywords: [
            'communication',
            'future',
            'radio',
            'space'
        ],
        sheet: [37, 17],
        hidden: ['messenger'],
        shortName: 'satellite'
    },
    {
        name: 'Italy Flag',
        unified: '1F1EE-1F1F9',
        keywords: [
            'italy',
            'flag',
            'nation',
            'country',
            'banner'
        ],
        sheet: [2, 42],
        shortNames: ['flag-it'],
        shortName: 'it'
    },
    {
        name: 'Male Teacher',
        unified: '1F468-200D-1F3EB',
        sheet: [16, 32],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F3EB',
                sheet: [16, 33],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F3EB',
                sheet: [16, 34],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F3EB',
                sheet: [16, 35],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F3EB',
                sheet: [16, 36],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F3EB',
                sheet: [16, 37],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-teacher'
    },
    {
        name: 'Round Pushpin',
        unified: '1F4CD',
        keywords: [
            'stationery',
            'location',
            'map',
            'here'
        ],
        sheet: [26, 4],
        shortName: 'round_pushpin'
    },
    {
        name: 'Jersey Flag',
        unified: '1F1EF-1F1EA',
        sheet: [2, 43],
        shortName: 'flag-je'
    },
    {
        name: 'Black Question Mark Ornament',
        unified: '2753',
        keywords: ['doubt', 'confused'],
        sheet: [50, 3],
        shortName: 'question'
    },
    {
        name: 'Rocket',
        unified: '1F680',
        keywords: [
            'launch',
            'ship',
            'staffmode',
            'NASA',
            'outer space',
            'outer_space',
            'fly'
        ],
        sheet: [34, 8],
        shortName: 'rocket'
    },
    {
        name: 'Female Teacher',
        unified: '1F469-200D-1F3EB',
        sheet: [18, 47],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F3EB',
                sheet: [18, 48],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F3EB',
                sheet: [18, 49],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F3EB',
                sheet: [18, 50],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F3EB',
                sheet: [18, 51],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F3EB',
                sheet: [19, 0],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-teacher'
    },
    {
        name: 'Paperclip',
        unified: '1F4CE',
        keywords: [
            'documents',
            'stationery'
        ],
        sheet: [26, 5],
        shortName: 'paperclip'
    },
    {
        name: 'Linked Paperclips',
        unified: '1F587-FE0F',
        sheet: [29, 27],
        hidden: ['messenger'],
        shortName: 'linked_paperclips'
    },
    {
        name: 'Flying Saucer',
        unified: '1F6F8',
        keywords: [
            'transportation',
            'vehicle',
            'ufo'
        ],
        sheet: [37, 23],
        hidden: ['messenger'],
        shortName: 'flying_saucer'
    },
    {
        name: 'Male Judge',
        unified: '1F468-200D-2696-FE0F',
        sheet: [17, 49],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-2696-FE0F',
                sheet: [17, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FC-200D-2696-FE0F',
                sheet: [17, 51],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FD-200D-2696-FE0F',
                sheet: [18, 0],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FE-200D-2696-FE0F',
                sheet: [18, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FF-200D-2696-FE0F',
                sheet: [18, 2],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male-judge'
    },
    {
        name: 'White Question Mark Ornament',
        unified: '2754',
        keywords: [
            'doubts',
            'gray',
            'huh',
            'confused'
        ],
        sheet: [50, 4],
        shortName: 'grey_question'
    },
    {
        name: 'Jamaica Flag',
        unified: '1F1EF-1F1F2',
        sheet: [2, 44],
        shortName: 'flag-jm'
    },
    {
        name: 'Bellhop Bell',
        unified: '1F6CE-FE0F',
        keywords: ['service'],
        sheet: [37, 3],
        hidden: ['messenger'],
        shortName: 'bellhop_bell'
    },
    {
        name: 'Straight Ruler',
        unified: '1F4CF',
        keywords: [
            'stationery',
            'calculate',
            'length',
            'math',
            'school',
            'drawing',
            'architect',
            'sketch'
        ],
        sheet: [26, 6],
        shortName: 'straight_ruler'
    },
    {
        name: 'Jordan Flag',
        unified: '1F1EF-1F1F4',
        sheet: [2, 45],
        shortName: 'flag-jo'
    },
    {
        name: 'Female Judge',
        unified: '1F469-200D-2696-FE0F',
        sheet: [20, 7],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-2696-FE0F',
                sheet: [20, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FC-200D-2696-FE0F',
                sheet: [20, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FD-200D-2696-FE0F',
                sheet: [20, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FE-200D-2696-FE0F',
                sheet: [20, 11],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FF-200D-2696-FE0F',
                sheet: [20, 12],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female-judge'
    },
    {
        name: 'White Exclamation Mark Ornament',
        unified: '2755',
        keywords: [
            'surprise',
            'punctuation',
            'gray',
            'wow',
            'warning'
        ],
        sheet: [50, 5],
        shortName: 'grey_exclamation'
    },
    {
        name: 'Door',
        unified: '1F6AA',
        keywords: [
            'house',
            'entry',
            'exit'
        ],
        sheet: [35, 15],
        shortName: 'door'
    },
    {
        name: 'Male Farmer',
        unified: '1F468-200D-1F33E',
        sheet: [16, 2],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F33E',
                sheet: [16, 3],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F33E',
                sheet: [16, 4],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F33E',
                sheet: [16, 5],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F33E',
                sheet: [16, 6],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F33E',
                sheet: [16, 7],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-farmer'
    },
    {
        name: 'Japan Flag',
        unified: '1F1EF-1F1F5',
        keywords: [
            'japanese',
            'nation',
            'flag',
            'country',
            'banner'
        ],
        sheet: [2, 46],
        shortNames: ['flag-jp'],
        shortName: 'jp'
    },
    {
        name: 'Triangular Ruler',
        unified: '1F4D0',
        keywords: [
            'stationery',
            'math',
            'architect',
            'sketch'
        ],
        sheet: [26, 7],
        shortName: 'triangular_ruler'
    },
    {
        name: 'Heavy Exclamation Mark Symbol',
        unified: '2757',
        keywords: [
            'heavy_exclamation_mark',
            'danger',
            'surprise',
            'punctuation',
            'wow',
            'warning'
        ],
        sheet: [50, 6],
        shortNames: [
            'heavy_exclamation_mark'
        ],
        shortName: 'exclamation'
    },
    {
        name: 'Bed',
        unified: '1F6CF-FE0F',
        keywords: ['sleep', 'rest'],
        sheet: [37, 4],
        hidden: ['messenger'],
        shortName: 'bed'
    },
    {
        name: 'Female Farmer',
        unified: '1F469-200D-1F33E',
        sheet: [18, 17],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F33E',
                sheet: [18, 18],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F33E',
                sheet: [18, 19],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F33E',
                sheet: [18, 20],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F33E',
                sheet: [18, 21],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F33E',
                sheet: [18, 22],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-farmer'
    },
    {
        name: 'Black Scissors',
        unified: '2702-FE0F',
        keywords: ['stationery', 'cut'],
        sheet: [49, 14],
        shortName: 'scissors'
    },
    {
        name: 'Wavy Dash',
        unified: '3030-FE0F',
        keywords: [
            'draw',
            'line',
            'moustache',
            'mustache',
            'squiggle',
            'scribble'
        ],
        sheet: [50, 24],
        shortName: 'wavy_dash'
    },
    {
        name: 'Kenya Flag',
        unified: '1F1F0-1F1EA',
        sheet: [2, 47],
        shortName: 'flag-ke'
    },
    {
        name: 'Kyrgyzstan Flag',
        unified: '1F1F0-1F1EC',
        sheet: [2, 48],
        shortName: 'flag-kg'
    },
    {
        name: 'Couch and Lamp',
        unified: '1F6CB-FE0F',
        keywords: ['read', 'chill'],
        sheet: [36, 47],
        hidden: ['messenger'],
        shortName: 'couch_and_lamp'
    },
    {
        name: 'Male Cook',
        unified: '1F468-200D-1F373',
        sheet: [16, 8],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F373',
                sheet: [16, 9],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F373',
                sheet: [16, 10],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F373',
                sheet: [16, 11],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F373',
                sheet: [16, 12],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F373',
                sheet: [16, 13],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-cook'
    },
    {
        name: 'Card File Box',
        unified: '1F5C3-FE0F',
        keywords: [
            'business',
            'stationery'
        ],
        sheet: [30, 5],
        hidden: ['messenger'],
        shortName: 'card_file_box'
    },
    {
        name: 'Copyright Sign',
        unified: '00A9-FE0F',
        keywords: [
            'ip',
            'license',
            'circle',
            'law',
            'legal'
        ],
        sheet: [0, 12],
        hidden: [
            'twitter',
            'facebook',
            'messenger'
        ],
        shortName: 'copyright'
    },
    {
        name: 'File Cabinet',
        unified: '1F5C4-FE0F',
        keywords: ['filing', 'organizing'],
        sheet: [30, 6],
        hidden: ['messenger'],
        shortName: 'file_cabinet'
    },
    {
        name: 'Registered Sign',
        unified: '00AE-FE0F',
        keywords: ['alphabet', 'circle'],
        sheet: [0, 13],
        hidden: [
            'twitter',
            'facebook',
            'messenger'
        ],
        shortName: 'registered'
    },
    {
        name: 'Cambodia Flag',
        unified: '1F1F0-1F1ED',
        sheet: [2, 49],
        shortName: 'flag-kh'
    },
    {
        name: 'Female Cook',
        unified: '1F469-200D-1F373',
        sheet: [18, 23],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F373',
                sheet: [18, 24],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F373',
                sheet: [18, 25],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F373',
                sheet: [18, 26],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F373',
                sheet: [18, 27],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F373',
                sheet: [18, 28],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-cook'
    },
    {
        name: 'Toilet',
        unified: '1F6BD',
        keywords: [
            'restroom',
            'wc',
            'washroom',
            'bathroom',
            'potty'
        ],
        sheet: [36, 33],
        shortName: 'toilet'
    },
    {
        name: 'Wastebasket',
        unified: '1F5D1-FE0F',
        keywords: [
            'bin',
            'trash',
            'rubbish',
            'garbage',
            'toss'
        ],
        sheet: [30, 7],
        hidden: ['messenger'],
        shortName: 'wastebasket'
    },
    {
        name: 'Kiribati Flag',
        unified: '1F1F0-1F1EE',
        sheet: [2, 50],
        shortName: 'flag-ki'
    },
    {
        name: 'Shower',
        unified: '1F6BF',
        keywords: [
            'clean',
            'water',
            'bathroom'
        ],
        sheet: [36, 35],
        shortName: 'shower'
    },
    {
        name: 'Male Mechanic',
        unified: '1F468-200D-1F527',
        sheet: [17, 19],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F527',
                sheet: [17, 20],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F527',
                sheet: [17, 21],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F527',
                sheet: [17, 22],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F527',
                sheet: [17, 23],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F527',
                sheet: [17, 24],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-mechanic'
    },
    {
        name: 'Trade Mark Sign',
        unified: '2122-FE0F',
        keywords: [
            'trademark',
            'brand',
            'law',
            'legal'
        ],
        sheet: [46, 31],
        shortName: 'tm'
    },
    {
        name: 'Hash Key',
        unified: '0023-FE0F-20E3',
        keywords: [
            'symbol',
            'blue-square',
            'twitter'
        ],
        sheet: [0, 0],
        hidden: ['facebook', 'messenger'],
        shortName: 'hash'
    },
    {
        name: 'Comoros Flag',
        unified: '1F1F0-1F1F2',
        sheet: [2, 51],
        shortName: 'flag-km'
    },
    {
        name: 'Bathtub',
        unified: '1F6C1',
        keywords: [
            'clean',
            'shower',
            'bathroom'
        ],
        sheet: [36, 42],
        shortName: 'bathtub'
    },
    {
        name: 'Female Mechanic',
        unified: '1F469-200D-1F527',
        sheet: [19, 29],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F527',
                sheet: [19, 30],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F527',
                sheet: [19, 31],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F527',
                sheet: [19, 32],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F527',
                sheet: [19, 33],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F527',
                sheet: [19, 34],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-mechanic'
    },
    {
        name: 'Lock',
        unified: '1F512',
        keywords: [
            'security',
            'password',
            'padlock'
        ],
        sheet: [27, 20],
        shortName: 'lock'
    },
    {
        name: 'Male Factory Worker',
        unified: '1F468-200D-1F3ED',
        sheet: [16, 38],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F3ED',
                sheet: [16, 39],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F3ED',
                sheet: [16, 40],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F3ED',
                sheet: [16, 41],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F3ED',
                sheet: [16, 42],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F3ED',
                sheet: [16, 43],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-factory-worker'
    },
    {
        name: 'St. Kitts & Nevis Flag',
        unified: '1F1F0-1F1F3',
        sheet: [3, 0],
        shortName: 'flag-kn'
    },
    {
        name: 'Hourglass',
        unified: '231B',
        keywords: [
            'time',
            'clock',
            'oldschool',
            'limit',
            'exam',
            'quiz',
            'test'
        ],
        sheet: [46, 42],
        shortName: 'hourglass'
    },
    {
        name: 'Keycap Star',
        unified: '002A-FE0F-20E3',
        sheet: [0, 1],
        hidden: ['facebook', 'messenger'],
        shortName: 'keycap_star'
    },
    {
        name: 'Open Lock',
        unified: '1F513',
        keywords: ['privacy', 'security'],
        sheet: [27, 21],
        shortName: 'unlock'
    },
    {
        name: 'North Korea Flag',
        unified: '1F1F0-1F1F5',
        sheet: [3, 1],
        shortName: 'flag-kp'
    },
    {
        name: 'Female Factory Worker',
        unified: '1F469-200D-1F3ED',
        sheet: [19, 1],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F3ED',
                sheet: [19, 2],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F3ED',
                sheet: [19, 3],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F3ED',
                sheet: [19, 4],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F3ED',
                sheet: [19, 5],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F3ED',
                sheet: [19, 6],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-factory-worker'
    },
    {
        name: 'Keycap 0',
        unified: '0030-FE0F-20E3',
        keywords: [
            '0',
            'numbers',
            'blue-square',
            'null'
        ],
        sheet: [0, 2],
        hidden: ['facebook', 'messenger'],
        shortName: 'zero'
    },
    {
        name: 'Lock with Ink Pen',
        unified: '1F50F',
        keywords: ['security', 'secret'],
        sheet: [27, 17],
        shortName: 'lock_with_ink_pen'
    },
    {
        name: 'Hourglass with Flowing Sand',
        unified: '23F3',
        keywords: [
            'oldschool',
            'time',
            'countdown'
        ],
        sheet: [47, 3],
        shortName: 'hourglass_flowing_sand'
    },
    {
        name: 'Keycap 1',
        unified: '0031-FE0F-20E3',
        keywords: [
            'blue-square',
            'numbers',
            '1'
        ],
        sheet: [0, 3],
        hidden: ['facebook', 'messenger'],
        shortName: 'one'
    },
    {
        name: 'South Korea Flag',
        unified: '1F1F0-1F1F7',
        keywords: [
            'south',
            'korea',
            'nation',
            'flag',
            'country',
            'banner'
        ],
        sheet: [3, 2],
        shortNames: ['flag-kr'],
        shortName: 'kr'
    },
    {
        name: 'Watch',
        unified: '231A',
        keywords: ['time', 'accessories'],
        sheet: [46, 41],
        shortName: 'watch'
    },
    {
        name: 'Male Office Worker',
        unified: '1F468-200D-1F4BC',
        sheet: [17, 13],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F4BC',
                sheet: [17, 14],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F4BC',
                sheet: [17, 15],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F4BC',
                sheet: [17, 16],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F4BC',
                sheet: [17, 17],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F4BC',
                sheet: [17, 18],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-office-worker'
    },
    {
        name: 'Closed Lock with Key',
        unified: '1F510',
        keywords: ['security', 'privacy'],
        sheet: [27, 18],
        shortName: 'closed_lock_with_key'
    },
    {
        name: 'Female Office Worker',
        unified: '1F469-200D-1F4BC',
        sheet: [19, 23],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F4BC',
                sheet: [19, 24],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F4BC',
                sheet: [19, 25],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F4BC',
                sheet: [19, 26],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F4BC',
                sheet: [19, 27],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F4BC',
                sheet: [19, 28],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-office-worker'
    },
    {
        name: 'Keycap 2',
        unified: '0032-FE0F-20E3',
        keywords: [
            'numbers',
            '2',
            'prime',
            'blue-square'
        ],
        sheet: [0, 4],
        hidden: ['facebook', 'messenger'],
        shortName: 'two'
    },
    {
        name: 'Alarm Clock',
        unified: '23F0',
        keywords: ['time', 'wake'],
        sheet: [47, 0],
        shortName: 'alarm_clock'
    },
    {
        name: 'Key',
        unified: '1F511',
        keywords: [
            'lock',
            'door',
            'password'
        ],
        sheet: [27, 19],
        shortName: 'key'
    },
    {
        name: 'Kuwait Flag',
        unified: '1F1F0-1F1FC',
        sheet: [3, 3],
        shortName: 'flag-kw'
    },
    {
        name: 'Stopwatch',
        unified: '23F1-FE0F',
        keywords: ['time', 'deadline'],
        sheet: [47, 1],
        hidden: ['messenger'],
        shortName: 'stopwatch'
    },
    {
        name: 'Male Scientist',
        unified: '1F468-200D-1F52C',
        sheet: [17, 25],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F52C',
                sheet: [17, 26],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F52C',
                sheet: [17, 27],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F52C',
                sheet: [17, 28],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F52C',
                sheet: [17, 29],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F52C',
                sheet: [17, 30],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-scientist'
    },
    {
        name: 'Keycap 3',
        unified: '0033-FE0F-20E3',
        keywords: [
            '3',
            'numbers',
            'prime',
            'blue-square'
        ],
        sheet: [0, 5],
        hidden: ['facebook', 'messenger'],
        shortName: 'three'
    },
    {
        name: 'Cayman Islands Flag',
        unified: '1F1F0-1F1FE',
        sheet: [3, 4],
        shortName: 'flag-ky'
    },
    {
        name: 'Old Key',
        unified: '1F5DD-FE0F',
        keywords: [
            'lock',
            'door',
            'password'
        ],
        sheet: [30, 11],
        hidden: ['messenger'],
        shortName: 'old_key'
    },
    {
        name: 'Kazakhstan Flag',
        unified: '1F1F0-1F1FF',
        sheet: [3, 5],
        shortName: 'flag-kz'
    },
    {
        name: 'Hammer',
        unified: '1F528',
        keywords: [
            'tools',
            'build',
            'create'
        ],
        sheet: [27, 42],
        shortName: 'hammer'
    },
    {
        name: 'Female Scientist',
        unified: '1F469-200D-1F52C',
        sheet: [19, 35],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F52C',
                sheet: [19, 36],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F52C',
                sheet: [19, 37],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F52C',
                sheet: [19, 38],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F52C',
                sheet: [19, 39],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F52C',
                sheet: [19, 40],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-scientist'
    },
    {
        name: 'Timer Clock',
        unified: '23F2-FE0F',
        keywords: ['alarm'],
        sheet: [47, 2],
        hidden: ['messenger'],
        shortName: 'timer_clock'
    },
    {
        name: 'Keycap 4',
        unified: '0034-FE0F-20E3',
        keywords: [
            '4',
            'numbers',
            'blue-square'
        ],
        sheet: [0, 6],
        hidden: ['facebook', 'messenger'],
        shortName: 'four'
    },
    {
        name: 'Male Technologist',
        unified: '1F468-200D-1F4BB',
        sheet: [17, 7],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F4BB',
                sheet: [17, 8],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F4BB',
                sheet: [17, 9],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F4BB',
                sheet: [17, 10],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F4BB',
                sheet: [17, 11],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F4BB',
                sheet: [17, 12],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-technologist'
    },
    {
        name: 'Mantelpiece Clock',
        unified: '1F570-FE0F',
        keywords: ['time'],
        sheet: [28, 43],
        hidden: ['messenger'],
        shortName: 'mantelpiece_clock'
    },
    {
        name: 'Keycap 5',
        unified: '0035-FE0F-20E3',
        keywords: [
            '5',
            'numbers',
            'blue-square',
            'prime'
        ],
        sheet: [0, 7],
        hidden: ['facebook', 'messenger'],
        shortName: 'five'
    },
    {
        name: 'Laos Flag',
        unified: '1F1F1-1F1E6',
        sheet: [3, 6],
        shortName: 'flag-la'
    },
    {
        name: 'Pick',
        unified: '26CF-FE0F',
        keywords: ['tools', 'dig'],
        sheet: [48, 32],
        hidden: ['messenger'],
        shortName: 'pick'
    },
    {
        name: 'Lebanon Flag',
        unified: '1F1F1-1F1E7',
        sheet: [3, 7],
        shortName: 'flag-lb'
    },
    {
        name: 'Clock Face Twelve Oclock',
        unified: '1F55B',
        keywords: [
            'time',
            'noon',
            'midnight',
            'midday',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 29],
        shortName: 'clock12'
    },
    {
        name: 'Hammer and Pick',
        unified: '2692-FE0F',
        keywords: [
            'tools',
            'build',
            'create'
        ],
        sheet: [48, 11],
        hidden: ['messenger'],
        shortName: 'hammer_and_pick'
    },
    {
        name: 'Keycap 6',
        unified: '0036-FE0F-20E3',
        keywords: [
            '6',
            'numbers',
            'blue-square'
        ],
        sheet: [0, 8],
        hidden: ['facebook', 'messenger'],
        shortName: 'six'
    },
    {
        name: 'Female Technologist',
        unified: '1F469-200D-1F4BB',
        sheet: [19, 17],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F4BB',
                sheet: [19, 18],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F4BB',
                sheet: [19, 19],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F4BB',
                sheet: [19, 20],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F4BB',
                sheet: [19, 21],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F4BB',
                sheet: [19, 22],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-technologist'
    },
    {
        name: 'Hammer and Wrench',
        unified: '1F6E0-FE0F',
        keywords: [
            'tools',
            'build',
            'create'
        ],
        sheet: [37, 8],
        hidden: ['messenger'],
        shortName: 'hammer_and_wrench'
    },
    {
        name: 'St. Lucia Flag',
        unified: '1F1F1-1F1E8',
        sheet: [3, 8],
        shortName: 'flag-lc'
    },
    {
        name: 'Clock Face Twelve-Thirty',
        unified: '1F567',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 41],
        shortName: 'clock1230'
    },
    {
        name: 'Keycap 7',
        unified: '0037-FE0F-20E3',
        keywords: [
            '7',
            'numbers',
            'blue-square',
            'prime'
        ],
        sheet: [0, 9],
        hidden: ['facebook', 'messenger'],
        shortName: 'seven'
    },
    {
        name: 'Male Singer',
        unified: '1F468-200D-1F3A4',
        sheet: [16, 20],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F3A4',
                sheet: [16, 21],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F3A4',
                sheet: [16, 22],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F3A4',
                sheet: [16, 23],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F3A4',
                sheet: [16, 24],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F3A4',
                sheet: [16, 25],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-singer'
    },
    {
        name: 'Keycap 8',
        unified: '0038-FE0F-20E3',
        keywords: [
            '8',
            'blue-square',
            'numbers'
        ],
        sheet: [0, 10],
        hidden: ['facebook', 'messenger'],
        shortName: 'eight'
    },
    {
        name: 'Liechtenstein Flag',
        unified: '1F1F1-1F1EE',
        sheet: [3, 9],
        shortName: 'flag-li'
    },
    {
        name: 'Dagger Knife',
        unified: '1F5E1-FE0F',
        sheet: [30, 13],
        hidden: ['messenger'],
        shortName: 'dagger_knife'
    },
    {
        name: 'Clock Face One Oclock',
        unified: '1F550',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 18],
        shortName: 'clock1'
    },
    {
        name: 'Female Singer',
        unified: '1F469-200D-1F3A4',
        sheet: [18, 35],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F3A4',
                sheet: [18, 36],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F3A4',
                sheet: [18, 37],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F3A4',
                sheet: [18, 38],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F3A4',
                sheet: [18, 39],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F3A4',
                sheet: [18, 40],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-singer'
    },
    {
        name: 'Male Artist',
        unified: '1F468-200D-1F3A8',
        sheet: [16, 26],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F3A8',
                sheet: [16, 27],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F3A8',
                sheet: [16, 28],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F3A8',
                sheet: [16, 29],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F3A8',
                sheet: [16, 30],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F3A8',
                sheet: [16, 31],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-artist'
    },
    {
        name: 'Crossed Swords',
        unified: '2694-FE0F',
        keywords: ['weapon'],
        sheet: [48, 13],
        hidden: ['messenger'],
        shortName: 'crossed_swords'
    },
    {
        name: 'Keycap 9',
        unified: '0039-FE0F-20E3',
        keywords: [
            'blue-square',
            'numbers',
            '9'
        ],
        sheet: [0, 11],
        hidden: ['facebook', 'messenger'],
        shortName: 'nine'
    },
    {
        name: 'Sri Lanka Flag',
        unified: '1F1F1-1F1F0',
        sheet: [3, 10],
        shortName: 'flag-lk'
    },
    {
        name: 'Clock Face One-Thirty',
        unified: '1F55C',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 30],
        shortName: 'clock130'
    },
    {
        name: 'Clock Face Two Oclock',
        unified: '1F551',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 19],
        shortName: 'clock2'
    },
    {
        name: 'Pistol',
        unified: '1F52B',
        keywords: [
            'violence',
            'weapon',
            'pistol',
            'revolver'
        ],
        sheet: [27, 45],
        shortName: 'gun'
    },
    {
        name: 'Keycap Ten',
        unified: '1F51F',
        keywords: [
            'numbers',
            '10',
            'blue-square'
        ],
        sheet: [27, 33],
        shortName: 'keycap_ten'
    },
    {
        name: 'Female Artist',
        unified: '1F469-200D-1F3A8',
        sheet: [18, 41],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F3A8',
                sheet: [18, 42],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F3A8',
                sheet: [18, 43],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F3A8',
                sheet: [18, 44],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F3A8',
                sheet: [18, 45],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F3A8',
                sheet: [18, 46],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-artist'
    },
    {
        name: 'Liberia Flag',
        unified: '1F1F1-1F1F7',
        sheet: [3, 11],
        shortName: 'flag-lr'
    },
    {
        name: 'Clock Face Two-Thirty',
        unified: '1F55D',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 31],
        shortName: 'clock230'
    },
    {
        name: 'Hundred Points Symbol',
        unified: '1F4AF',
        keywords: [
            'score',
            'perfect',
            'numbers',
            'century',
            'exam',
            'quiz',
            'test',
            'pass',
            'hundred'
        ],
        sheet: [25, 26],
        shortName: '100'
    },
    {
        name: 'Bow and Arrow',
        unified: '1F3F9',
        keywords: ['sports'],
        sheet: [12, 23],
        hidden: ['messenger'],
        shortName: 'bow_and_arrow'
    },
    {
        name: 'Male Pilot',
        unified: '1F468-200D-2708-FE0F',
        sheet: [18, 3],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-2708-FE0F',
                sheet: [18, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FC-200D-2708-FE0F',
                sheet: [18, 5],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FD-200D-2708-FE0F',
                sheet: [18, 6],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FE-200D-2708-FE0F',
                sheet: [18, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F468-1F3FF-200D-2708-FE0F',
                sheet: [18, 8],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male-pilot'
    },
    {
        name: 'Lesotho Flag',
        unified: '1F1F1-1F1F8',
        sheet: [3, 12],
        shortName: 'flag-ls'
    },
    {
        name: 'Lithuania Flag',
        unified: '1F1F1-1F1F9',
        sheet: [3, 13],
        shortName: 'flag-lt'
    },
    {
        name: 'Input Symbol for Latin Capital Letters',
        unified: '1F520',
        keywords: [
            'alphabet',
            'words',
            'blue-square'
        ],
        sheet: [27, 34],
        shortName: 'capital_abcd'
    },
    {
        name: 'Female Pilot',
        unified: '1F469-200D-2708-FE0F',
        sheet: [20, 13],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-2708-FE0F',
                sheet: [20, 14],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FC-200D-2708-FE0F',
                sheet: [20, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FD-200D-2708-FE0F',
                sheet: [20, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FE-200D-2708-FE0F',
                sheet: [20, 17],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F469-1F3FF-200D-2708-FE0F',
                sheet: [20, 18],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female-pilot'
    },
    {
        name: 'Clock Face Three Oclock',
        unified: '1F552',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 20],
        shortName: 'clock3'
    },
    {
        name: 'Shield',
        unified: '1F6E1-FE0F',
        keywords: [
            'protection',
            'security'
        ],
        sheet: [37, 9],
        hidden: ['messenger'],
        shortName: 'shield'
    },
    {
        name: 'Male Astronaut',
        unified: '1F468-200D-1F680',
        sheet: [17, 31],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F680',
                sheet: [17, 32],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F680',
                sheet: [17, 33],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F680',
                sheet: [17, 34],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F680',
                sheet: [17, 35],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F680',
                sheet: [17, 36],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-astronaut'
    },
    {
        name: 'Input Symbol for Latin Small Letters',
        unified: '1F521',
        keywords: [
            'blue-square',
            'alphabet'
        ],
        sheet: [27, 35],
        shortName: 'abcd'
    },
    {
        name: 'Clock Face Three-Thirty',
        unified: '1F55E',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 32],
        shortName: 'clock330'
    },
    {
        name: 'Luxembourg Flag',
        unified: '1F1F1-1F1FA',
        sheet: [3, 14],
        shortName: 'flag-lu'
    },
    {
        name: 'Wrench',
        unified: '1F527',
        keywords: [
            'tools',
            'diy',
            'ikea',
            'fix',
            'maintainer'
        ],
        sheet: [27, 41],
        shortName: 'wrench'
    },
    {
        name: 'Nut and Bolt',
        unified: '1F529',
        keywords: ['handy', 'tools', 'fix'],
        sheet: [27, 43],
        shortName: 'nut_and_bolt'
    },
    {
        name: 'Input Symbol for Numbers',
        unified: '1F522',
        keywords: [
            'numbers',
            'blue-square'
        ],
        sheet: [27, 36],
        shortName: '1234'
    },
    {
        name: 'Clock Face Four Oclock',
        unified: '1F553',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 21],
        shortName: 'clock4'
    },
    {
        name: 'Female Astronaut',
        unified: '1F469-200D-1F680',
        sheet: [19, 41],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F680',
                sheet: [19, 42],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F680',
                sheet: [19, 43],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F680',
                sheet: [19, 44],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F680',
                sheet: [19, 45],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F680',
                sheet: [19, 46],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-astronaut'
    },
    {
        name: 'Latvia Flag',
        unified: '1F1F1-1F1FB',
        sheet: [3, 15],
        shortName: 'flag-lv'
    },
    {
        name: 'Gear',
        unified: '2699-FE0F',
        keywords: ['cog'],
        sheet: [48, 17],
        hidden: ['messenger'],
        shortName: 'gear'
    },
    {
        name: 'Male Firefighter',
        unified: '1F468-200D-1F692',
        sheet: [17, 37],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F468-1F3FB-200D-1F692',
                sheet: [17, 38],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FC-200D-1F692',
                sheet: [17, 39],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FD-200D-1F692',
                sheet: [17, 40],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FE-200D-1F692',
                sheet: [17, 41],
                hidden: ['messenger']
            },
            {
                unified: '1F468-1F3FF-200D-1F692',
                sheet: [17, 42],
                hidden: ['messenger']
            }
        ],
        shortName: 'male-firefighter'
    },
    {
        name: 'Libya Flag',
        unified: '1F1F1-1F1FE',
        sheet: [3, 16],
        shortName: 'flag-ly'
    },
    {
        name: 'Input Symbol for Symbols',
        unified: '1F523',
        keywords: [
            'blue-square',
            'music',
            'note',
            'ampersand',
            'percent',
            'glyphs',
            'characters'
        ],
        sheet: [27, 37],
        shortName: 'symbols'
    },
    {
        name: 'Clock Face Four-Thirty',
        unified: '1F55F',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 33],
        shortName: 'clock430'
    },
    {
        name: 'Morocco Flag',
        unified: '1F1F2-1F1E6',
        sheet: [3, 17],
        shortName: 'flag-ma'
    },
    {
        name: 'Compression',
        unified: '1F5DC-FE0F',
        sheet: [30, 10],
        hidden: ['messenger'],
        shortName: 'compression'
    },
    {
        name: 'Female Firefighter',
        unified: '1F469-200D-1F692',
        sheet: [19, 47],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F469-1F3FB-200D-1F692',
                sheet: [19, 48],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FC-200D-1F692',
                sheet: [19, 49],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FD-200D-1F692',
                sheet: [19, 50],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FE-200D-1F692',
                sheet: [19, 51],
                hidden: ['messenger']
            },
            {
                unified: '1F469-1F3FF-200D-1F692',
                sheet: [20, 0],
                hidden: ['messenger']
            }
        ],
        shortName: 'female-firefighter'
    },
    {
        name: 'Input Symbol for Latin Letters',
        unified: '1F524',
        keywords: [
            'blue-square',
            'alphabet'
        ],
        sheet: [27, 38],
        shortName: 'abc'
    },
    {
        name: 'Clock Face Five Oclock',
        unified: '1F554',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 22],
        shortName: 'clock5'
    },
    {
        name: 'Clock Face Five-Thirty',
        unified: '1F560',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 34],
        shortName: 'clock530'
    },
    {
        name: 'Negative Squared Latin Capital Letter a',
        unified: '1F170-FE0F',
        keywords: [
            'red-square',
            'alphabet',
            'letter'
        ],
        sheet: [0, 16],
        shortName: 'a'
    },
    {
        name: 'Alembic',
        unified: '2697-FE0F',
        keywords: [
            'distilling',
            'science',
            'experiment',
            'chemistry'
        ],
        sheet: [48, 16],
        hidden: ['messenger'],
        shortName: 'alembic'
    },
    {
        name: 'Monaco Flag',
        unified: '1F1F2-1F1E8',
        sheet: [3, 18],
        shortName: 'flag-mc'
    },
    {
        name: 'Police Officer',
        unified: '1F46E',
        sheet: [20, 45],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F46E-1F3FB',
                sheet: [20, 46],
                hidden: ['facebook']
            },
            {
                unified: '1F46E-1F3FC',
                sheet: [20, 47],
                hidden: ['facebook']
            },
            {
                unified: '1F46E-1F3FD',
                sheet: [20, 48],
                hidden: ['facebook']
            },
            {
                unified: '1F46E-1F3FE',
                sheet: [20, 49],
                hidden: ['facebook']
            },
            {
                unified: '1F46E-1F3FF',
                sheet: [20, 50],
                hidden: ['facebook']
            }
        ],
        shortName: 'cop',
        obsoletedBy: '1F46E-200D-2642-FE0F'
    },
    {
        name: 'Scales',
        unified: '2696-FE0F',
        sheet: [48, 15],
        hidden: ['messenger'],
        shortName: 'scales'
    },
    {
        name: 'Clock Face Six Oclock',
        unified: '1F555',
        keywords: [
            'time',
            'late',
            'early',
            'schedule',
            'dawn',
            'dusk'
        ],
        sheet: [28, 23],
        shortName: 'clock6'
    },
    {
        name: 'Moldova Flag',
        unified: '1F1F2-1F1E9',
        sheet: [3, 19],
        shortName: 'flag-md'
    },
    {
        name: 'Negative Squared Ab',
        unified: '1F18E',
        keywords: [
            'red-square',
            'alphabet'
        ],
        sheet: [0, 20],
        shortName: 'ab'
    },
    {
        name: 'Male Police Officer',
        unified: '1F46E-200D-2642-FE0F',
        obsoletes: '1F46E',
        sheet: [20, 39],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F46E-1F3FB-200D-2642-FE0F',
                sheet: [20, 40],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FC-200D-2642-FE0F',
                sheet: [20, 41],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FD-200D-2642-FE0F',
                sheet: [20, 42],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FE-200D-2642-FE0F',
                sheet: [20, 43],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FF-200D-2642-FE0F',
                sheet: [20, 44],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male-police-officer'
    },
    {
        name: 'Link Symbol',
        unified: '1F517',
        keywords: ['rings', 'url'],
        sheet: [27, 25],
        shortName: 'link'
    },
    {
        name: 'Montenegro Flag',
        unified: '1F1F2-1F1EA',
        sheet: [3, 20],
        shortName: 'flag-me'
    },
    {
        name: 'Clock Face Six-Thirty',
        unified: '1F561',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 35],
        shortName: 'clock630'
    },
    {
        name: 'Negative Squared Latin Capital Letter B',
        unified: '1F171-FE0F',
        keywords: [
            'red-square',
            'alphabet',
            'letter'
        ],
        sheet: [0, 17],
        shortName: 'b'
    },
    {
        name: 'Female Police Officer',
        unified: '1F46E-200D-2640-FE0F',
        sheet: [20, 33],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F46E-1F3FB-200D-2640-FE0F',
                sheet: [20, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FC-200D-2640-FE0F',
                sheet: [20, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FD-200D-2640-FE0F',
                sheet: [20, 36],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FE-200D-2640-FE0F',
                sheet: [20, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F46E-1F3FF-200D-2640-FE0F',
                sheet: [20, 38],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female-police-officer'
    },
    {
        name: 'Clock Face Seven Oclock',
        unified: '1F556',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 24],
        shortName: 'clock7'
    },
    {
        name: 'Squared Cl',
        unified: '1F191',
        keywords: [
            'alphabet',
            'words',
            'red-square'
        ],
        sheet: [0, 21],
        shortName: 'cl'
    },
    {
        name: 'Sleuth or Spy',
        unified: '1F575-FE0F',
        sheet: [29, 11],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F575-1F3FB',
                sheet: [29, 12],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FC',
                sheet: [29, 13],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FD',
                sheet: [29, 14],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FE',
                sheet: [29, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FF',
                sheet: [29, 16],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'sleuth_or_spy',
        obsoletedBy: '1F575-FE0F-200D-2642-FE0F'
    },
    {
        name: 'St. Martin Flag',
        unified: '1F1F2-1F1EB',
        sheet: [3, 21],
        hidden: ['google'],
        shortName: 'flag-mf'
    },
    {
        name: 'Chains',
        unified: '26D3-FE0F',
        keywords: ['lock', 'arrest'],
        sheet: [48, 34],
        hidden: ['messenger'],
        shortName: 'chains'
    },
    {
        name: 'Syringe',
        unified: '1F489',
        keywords: [
            'health',
            'hospital',
            'drugs',
            'blood',
            'medicine',
            'needle',
            'doctor',
            'nurse'
        ],
        sheet: [24, 35],
        shortName: 'syringe'
    },
    {
        name: 'Male Detective',
        unified: '1F575-FE0F-200D-2642-FE0F',
        obsoletes: '1F575-FE0F',
        sheet: [29, 5],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F575-1F3FB-200D-2642-FE0F',
                sheet: [29, 6],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FC-200D-2642-FE0F',
                sheet: [29, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FD-200D-2642-FE0F',
                sheet: [29, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FE-200D-2642-FE0F',
                sheet: [29, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FF-200D-2642-FE0F',
                sheet: [29, 10],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male-detective'
    },
    {
        name: 'Squared Cool',
        unified: '1F192',
        keywords: ['words', 'blue-square'],
        sheet: [0, 22],
        shortName: 'cool'
    },
    {
        name: 'Clock Face Seven-Thirty',
        unified: '1F562',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 36],
        shortName: 'clock730'
    },
    {
        name: 'Madagascar Flag',
        unified: '1F1F2-1F1EC',
        sheet: [3, 22],
        shortName: 'flag-mg'
    },
    {
        name: 'Squared Free',
        unified: '1F193',
        keywords: ['blue-square', 'words'],
        sheet: [0, 23],
        shortName: 'free'
    },
    {
        name: 'Marshall Islands Flag',
        unified: '1F1F2-1F1ED',
        sheet: [3, 23],
        shortName: 'flag-mh'
    },
    {
        name: 'Clock Face Eight Oclock',
        unified: '1F557',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 25],
        shortName: 'clock8'
    },
    {
        name: 'Pill',
        unified: '1F48A',
        keywords: [
            'health',
            'medicine',
            'doctor',
            'pharmacy',
            'drug'
        ],
        sheet: [24, 36],
        shortName: 'pill'
    },
    {
        name: 'Female Detective',
        unified: '1F575-FE0F-200D-2640-FE0F',
        sheet: [28, 51],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F575-1F3FB-200D-2640-FE0F',
                sheet: [29, 0],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FC-200D-2640-FE0F',
                sheet: [29, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FD-200D-2640-FE0F',
                sheet: [29, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FE-200D-2640-FE0F',
                sheet: [29, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F575-1F3FF-200D-2640-FE0F',
                sheet: [29, 4],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female-detective'
    },
    {
        name: 'Clock Face Eight-Thirty',
        unified: '1F563',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 37],
        shortName: 'clock830'
    },
    {
        name: 'Guardsman',
        unified: '1F482',
        keywords: [
            'uk',
            'gb',
            'british',
            'male',
            'guy',
            'royal'
        ],
        sheet: [23, 31],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F482-1F3FB',
                sheet: [23, 32],
                hidden: ['facebook']
            },
            {
                unified: '1F482-1F3FC',
                sheet: [23, 33],
                hidden: ['facebook']
            },
            {
                unified: '1F482-1F3FD',
                sheet: [23, 34],
                hidden: ['facebook']
            },
            {
                unified: '1F482-1F3FE',
                sheet: [23, 35],
                hidden: ['facebook']
            },
            {
                unified: '1F482-1F3FF',
                sheet: [23, 36],
                hidden: ['facebook']
            }
        ],
        shortName: 'guardsman',
        obsoletedBy: '1F482-200D-2642-FE0F'
    },
    {
        name: 'Information Source',
        unified: '2139-FE0F',
        keywords: [
            'blue-square',
            'alphabet',
            'letter'
        ],
        sheet: [46, 32],
        shortName: 'information_source'
    },
    {
        name: 'Macedonia Flag',
        unified: '1F1F2-1F1F0',
        sheet: [3, 24],
        shortName: 'flag-mk'
    },
    {
        name: 'Smoking Symbol',
        unified: '1F6AC',
        keywords: [
            'kills',
            'tobacco',
            'cigarette',
            'joint',
            'smoke'
        ],
        sheet: [35, 17],
        shortName: 'smoking'
    },
    {
        name: 'Squared Id',
        unified: '1F194',
        keywords: [
            'purple-square',
            'words'
        ],
        sheet: [0, 24],
        shortName: 'id'
    },
    {
        name: 'Clock Face Nine Oclock',
        unified: '1F558',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 26],
        shortName: 'clock9'
    },
    {
        name: 'Mali Flag',
        unified: '1F1F2-1F1F1',
        sheet: [3, 25],
        shortName: 'flag-ml'
    },
    {
        name: 'Coffin',
        unified: '26B0-FE0F',
        keywords: [
            'vampire',
            'dead',
            'die',
            'death',
            'rip',
            'graveyard',
            'cemetery',
            'casket',
            'funeral',
            'box'
        ],
        sheet: [48, 24],
        hidden: ['messenger'],
        shortName: 'coffin'
    },
    {
        name: 'Male Guard',
        unified: '1F482-200D-2642-FE0F',
        obsoletes: '1F482',
        sheet: [23, 25],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F482-1F3FB-200D-2642-FE0F',
                sheet: [23, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FC-200D-2642-FE0F',
                sheet: [23, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FD-200D-2642-FE0F',
                sheet: [23, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FE-200D-2642-FE0F',
                sheet: [23, 29],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FF-200D-2642-FE0F',
                sheet: [23, 30],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male-guard'
    },
    {
        name: 'Circled Latin Capital Letter M',
        unified: '24C2-FE0F',
        keywords: [
            'alphabet',
            'blue-circle',
            'letter'
        ],
        sheet: [47, 7],
        shortName: 'm'
    },
    {
        name: 'Funeral Urn',
        unified: '26B1-FE0F',
        keywords: [
            'dead',
            'die',
            'death',
            'rip',
            'ashes'
        ],
        sheet: [48, 25],
        hidden: ['messenger'],
        shortName: 'funeral_urn'
    },
    {
        name: 'Female Guard',
        unified: '1F482-200D-2640-FE0F',
        sheet: [23, 19],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F482-1F3FB-200D-2640-FE0F',
                sheet: [23, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FC-200D-2640-FE0F',
                sheet: [23, 21],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FD-200D-2640-FE0F',
                sheet: [23, 22],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FE-200D-2640-FE0F',
                sheet: [23, 23],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F482-1F3FF-200D-2640-FE0F',
                sheet: [23, 24],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female-guard'
    },
    {
        name: 'Myanmar (burma) Flag',
        unified: '1F1F2-1F1F2',
        sheet: [3, 26],
        shortName: 'flag-mm'
    },
    {
        name: 'Clock Face Nine-Thirty',
        unified: '1F564',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 38],
        shortName: 'clock930'
    },
    {
        name: 'Moyai',
        unified: '1F5FF',
        keywords: [
            'rock',
            'easter island',
            'moai'
        ],
        sheet: [30, 23],
        shortName: 'moyai'
    },
    {
        name: 'Squared New',
        unified: '1F195',
        keywords: [
            'blue-square',
            'words',
            'start'
        ],
        sheet: [0, 25],
        shortName: 'new'
    },
    {
        name: 'Mongolia Flag',
        unified: '1F1F2-1F1F3',
        sheet: [3, 27],
        shortName: 'flag-mn'
    },
    {
        name: 'Construction Worker',
        unified: '1F477',
        sheet: [22, 28],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F477-1F3FB',
                sheet: [22, 29],
                hidden: ['facebook']
            },
            {
                unified: '1F477-1F3FC',
                sheet: [22, 30],
                hidden: ['facebook']
            },
            {
                unified: '1F477-1F3FD',
                sheet: [22, 31],
                hidden: ['facebook']
            },
            {
                unified: '1F477-1F3FE',
                sheet: [22, 32],
                hidden: ['facebook']
            },
            {
                unified: '1F477-1F3FF',
                sheet: [22, 33],
                hidden: ['facebook']
            }
        ],
        shortName: 'construction_worker',
        obsoletedBy: '1F477-200D-2642-FE0F'
    },
    {
        name: 'Clock Face Ten Oclock',
        unified: '1F559',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 27],
        shortName: 'clock10'
    },
    {
        name: 'Clock Face Ten-Thirty',
        unified: '1F565',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 39],
        shortName: 'clock1030'
    },
    {
        name: 'Squared Ng',
        unified: '1F196',
        keywords: [
            'blue-square',
            'words',
            'shape',
            'icon'
        ],
        sheet: [0, 26],
        shortName: 'ng'
    },
    {
        name: 'Male Construction Worker',
        unified: '1F477-200D-2642-FE0F',
        obsoletes: '1F477',
        sheet: [22, 22],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F477-1F3FB-200D-2642-FE0F',
                sheet: [22, 23],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FC-200D-2642-FE0F',
                sheet: [22, 24],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FD-200D-2642-FE0F',
                sheet: [22, 25],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FE-200D-2642-FE0F',
                sheet: [22, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FF-200D-2642-FE0F',
                sheet: [22, 27],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male-construction-worker'
    },
    {
        name: 'Macau Sar China Flag',
        unified: '1F1F2-1F1F4',
        sheet: [3, 28],
        shortName: 'flag-mo'
    },
    {
        name: 'Oil Drum',
        unified: '1F6E2-FE0F',
        keywords: ['barrell'],
        sheet: [37, 10],
        hidden: ['messenger'],
        shortName: 'oil_drum'
    },
    {
        name: 'Negative Squared Latin Capital Letter O',
        unified: '1F17E-FE0F',
        keywords: [
            'alphabet',
            'red-square',
            'letter'
        ],
        sheet: [0, 18],
        shortName: 'o2'
    },
    {
        name: 'Female Construction Worker',
        unified: '1F477-200D-2640-FE0F',
        sheet: [22, 16],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F477-1F3FB-200D-2640-FE0F',
                sheet: [22, 17],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FC-200D-2640-FE0F',
                sheet: [22, 18],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FD-200D-2640-FE0F',
                sheet: [22, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FE-200D-2640-FE0F',
                sheet: [22, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F477-1F3FF-200D-2640-FE0F',
                sheet: [22, 21],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female-construction-worker'
    },
    {
        name: 'Clock Face Eleven Oclock',
        unified: '1F55A',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 28],
        shortName: 'clock11'
    },
    {
        name: 'Crystal Ball',
        unified: '1F52E',
        keywords: [
            'disco',
            'party',
            'magic',
            'circus',
            'fortune_teller'
        ],
        sheet: [27, 48],
        shortName: 'crystal_ball'
    },
    {
        name: 'Northern Mariana Islands Flag',
        unified: '1F1F2-1F1F5',
        sheet: [3, 29],
        shortName: 'flag-mp'
    },
    {
        name: 'Martinique Flag',
        unified: '1F1F2-1F1F6',
        sheet: [3, 30],
        hidden: ['google'],
        shortName: 'flag-mq'
    },
    {
        name: 'Prince',
        unified: '1F934',
        keywords: [
            'boy',
            'man',
            'male',
            'crown',
            'royal',
            'king'
        ],
        sheet: [39, 28],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F934-1F3FB',
                sheet: [39, 29],
                hidden: ['messenger']
            },
            {
                unified: '1F934-1F3FC',
                sheet: [39, 30],
                hidden: ['messenger']
            },
            {
                unified: '1F934-1F3FD',
                sheet: [39, 31],
                hidden: ['messenger']
            },
            {
                unified: '1F934-1F3FE',
                sheet: [39, 32],
                hidden: ['messenger']
            },
            {
                unified: '1F934-1F3FF',
                sheet: [39, 33],
                hidden: ['messenger']
            }
        ],
        shortName: 'prince'
    },
    {
        name: 'Squared Ok',
        unified: '1F197',
        keywords: [
            'good',
            'agree',
            'yes',
            'blue-square'
        ],
        sheet: [0, 27],
        shortName: 'ok'
    },
    {
        name: 'Clock Face Eleven-Thirty',
        unified: '1F566',
        keywords: [
            'time',
            'late',
            'early',
            'schedule'
        ],
        sheet: [28, 40],
        shortName: 'clock1130'
    },
    {
        name: 'Shopping Trolley',
        unified: '1F6D2',
        sheet: [37, 7],
        hidden: ['messenger'],
        shortName: 'shopping_trolley'
    },
    {
        name: 'Mauritania Flag',
        unified: '1F1F2-1F1F7',
        sheet: [3, 31],
        shortName: 'flag-mr'
    },
    {
        name: 'Princess',
        unified: '1F478',
        keywords: [
            'girl',
            'woman',
            'female',
            'blond',
            'crown',
            'royal',
            'queen'
        ],
        sheet: [22, 34],
        skinVariations: [
            {
                unified: '1F478-1F3FB',
                sheet: [22, 35]
            },
            {
                unified: '1F478-1F3FC',
                sheet: [22, 36]
            },
            {
                unified: '1F478-1F3FD',
                sheet: [22, 37]
            },
            {
                unified: '1F478-1F3FE',
                sheet: [22, 38]
            },
            {
                unified: '1F478-1F3FF',
                sheet: [22, 39]
            }
        ],
        shortName: 'princess'
    },
    {
        name: 'New Moon Symbol',
        unified: '1F311',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 9],
        shortName: 'new_moon'
    },
    {
        name: 'Negative Squared Latin Capital Letter P',
        unified: '1F17F-FE0F',
        keywords: [
            'cars',
            'blue-square',
            'alphabet',
            'letter'
        ],
        sheet: [0, 19],
        shortName: 'parking'
    },
    {
        name: 'Squared Sos',
        unified: '1F198',
        keywords: [
            'help',
            'red-square',
            'words',
            'emergency',
            '911'
        ],
        sheet: [0, 28],
        shortName: 'sos'
    },
    {
        name: 'Man with Turban',
        unified: '1F473',
        keywords: [
            'male',
            'indian',
            'hinduism',
            'arabs'
        ],
        sheet: [21, 44],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F473-1F3FB',
                sheet: [21, 45],
                hidden: ['facebook']
            },
            {
                unified: '1F473-1F3FC',
                sheet: [21, 46],
                hidden: ['facebook']
            },
            {
                unified: '1F473-1F3FD',
                sheet: [21, 47],
                hidden: ['facebook']
            },
            {
                unified: '1F473-1F3FE',
                sheet: [21, 48],
                hidden: ['facebook']
            },
            {
                unified: '1F473-1F3FF',
                sheet: [21, 49],
                hidden: ['facebook']
            }
        ],
        shortName: 'man_with_turban',
        obsoletedBy: '1F473-200D-2642-FE0F'
    },
    {
        name: 'Montserrat Flag',
        unified: '1F1F2-1F1F8',
        sheet: [3, 32],
        shortName: 'flag-ms'
    },
    {
        name: 'Waxing Crescent Moon Symbol',
        unified: '1F312',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 10],
        shortName: 'waxing_crescent_moon'
    },
    {
        name: 'Squared Up with Exclamation Mark',
        unified: '1F199',
        keywords: [
            'blue-square',
            'above',
            'high'
        ],
        sheet: [0, 29],
        shortName: 'up'
    },
    {
        name: 'First Quarter Moon Symbol',
        unified: '1F313',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 11],
        shortName: 'first_quarter_moon'
    },
    {
        name: 'Malta Flag',
        unified: '1F1F2-1F1F9',
        sheet: [3, 33],
        shortName: 'flag-mt'
    },
    {
        name: 'Man Wearing Turban',
        unified: '1F473-200D-2642-FE0F',
        obsoletes: '1F473',
        sheet: [21, 38],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F473-1F3FB-200D-2642-FE0F',
                sheet: [21, 39],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FC-200D-2642-FE0F',
                sheet: [21, 40],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FD-200D-2642-FE0F',
                sheet: [21, 41],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FE-200D-2642-FE0F',
                sheet: [21, 42],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FF-200D-2642-FE0F',
                sheet: [21, 43],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-wearing-turban'
    },
    {
        name: 'Waxing Gibbous Moon Symbol',
        unified: '1F314',
        sheet: [6, 12],
        shortNames: ['waxing_gibbous_moon'],
        shortName: 'moon'
    },
    {
        name: 'Woman Wearing Turban',
        unified: '1F473-200D-2640-FE0F',
        sheet: [21, 32],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F473-1F3FB-200D-2640-FE0F',
                sheet: [21, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FC-200D-2640-FE0F',
                sheet: [21, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FD-200D-2640-FE0F',
                sheet: [21, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FE-200D-2640-FE0F',
                sheet: [21, 36],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F473-1F3FF-200D-2640-FE0F',
                sheet: [21, 37],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-wearing-turban'
    },
    {
        name: 'Squared Vs',
        unified: '1F19A',
        keywords: [
            'words',
            'orange-square'
        ],
        sheet: [0, 30],
        shortName: 'vs'
    },
    {
        name: 'Mauritius Flag',
        unified: '1F1F2-1F1FA',
        sheet: [3, 34],
        shortName: 'flag-mu'
    },
    {
        name: 'Man with Gua Pi Mao',
        unified: '1F472',
        keywords: [
            'male',
            'boy',
            'chinese'
        ],
        sheet: [21, 26],
        skinVariations: [
            {
                unified: '1F472-1F3FB',
                sheet: [21, 27]
            },
            {
                unified: '1F472-1F3FC',
                sheet: [21, 28]
            },
            {
                unified: '1F472-1F3FD',
                sheet: [21, 29]
            },
            {
                unified: '1F472-1F3FE',
                sheet: [21, 30]
            },
            {
                unified: '1F472-1F3FF',
                sheet: [21, 31]
            }
        ],
        shortName: 'man_with_gua_pi_mao'
    },
    {
        name: 'Squared Katakana Koko',
        unified: '1F201',
        keywords: [
            'blue-square',
            'here',
            'katakana',
            'japanese',
            'destination'
        ],
        sheet: [5, 29],
        shortName: 'koko'
    },
    {
        name: 'Full Moon Symbol',
        unified: '1F315',
        keywords: [
            'nature',
            'yellow',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 13],
        shortName: 'full_moon'
    },
    {
        name: 'Maldives Flag',
        unified: '1F1F2-1F1FB',
        sheet: [3, 35],
        shortName: 'flag-mv'
    },
    {
        name: 'Person with Headscarf',
        unified: '1F9D5',
        sheet: [43, 22],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D5-1F3FB',
                sheet: [43, 23],
                hidden: ['messenger']
            },
            {
                unified: '1F9D5-1F3FC',
                sheet: [43, 24],
                hidden: ['messenger']
            },
            {
                unified: '1F9D5-1F3FD',
                sheet: [43, 25],
                hidden: ['messenger']
            },
            {
                unified: '1F9D5-1F3FE',
                sheet: [43, 26],
                hidden: ['messenger']
            },
            {
                unified: '1F9D5-1F3FF',
                sheet: [43, 27],
                hidden: ['messenger']
            }
        ],
        shortName: 'person_with_headscarf'
    },
    {
        name: 'Waning Gibbous Moon Symbol',
        unified: '1F316',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep',
            'waxing_gibbous_moon'
        ],
        sheet: [6, 14],
        shortName: 'waning_gibbous_moon'
    },
    {
        name: 'Squared Katakana Sa',
        unified: '1F202-FE0F',
        keywords: [
            'japanese',
            'blue-square',
            'katakana'
        ],
        sheet: [5, 30],
        shortName: 'sa'
    },
    {
        name: 'Malawi Flag',
        unified: '1F1F2-1F1FC',
        sheet: [3, 36],
        shortName: 'flag-mw'
    },
    {
        name: 'Last Quarter Moon Symbol',
        unified: '1F317',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 15],
        shortName: 'last_quarter_moon'
    },
    {
        name: 'Squared Cjk Unified Ideograph-6708',
        unified: '1F237-FE0F',
        keywords: [
            'chinese',
            'month',
            'moon',
            'japanese',
            'orange-square',
            'kanji'
        ],
        sheet: [5, 38],
        shortName: 'u6708'
    },
    {
        name: 'Bearded Person',
        unified: '1F9D4',
        keywords: ['person', 'bewhiskered'],
        sheet: [43, 16],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D4-1F3FB',
                sheet: [43, 17],
                hidden: ['messenger']
            },
            {
                unified: '1F9D4-1F3FC',
                sheet: [43, 18],
                hidden: ['messenger']
            },
            {
                unified: '1F9D4-1F3FD',
                sheet: [43, 19],
                hidden: ['messenger']
            },
            {
                unified: '1F9D4-1F3FE',
                sheet: [43, 20],
                hidden: ['messenger']
            },
            {
                unified: '1F9D4-1F3FF',
                sheet: [43, 21],
                hidden: ['messenger']
            }
        ],
        shortName: 'bearded_person'
    },
    {
        name: 'Mexico Flag',
        unified: '1F1F2-1F1FD',
        sheet: [3, 37],
        shortName: 'flag-mx'
    },
    {
        name: 'Squared Cjk Unified Ideograph-6709',
        unified: '1F236',
        keywords: [
            'orange-square',
            'chinese',
            'have',
            'kanji'
        ],
        sheet: [5, 37],
        shortName: 'u6709'
    },
    {
        name: 'Person with Blond Hair',
        unified: '1F471',
        sheet: [21, 20],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F471-1F3FB',
                sheet: [21, 21],
                hidden: ['facebook']
            },
            {
                unified: '1F471-1F3FC',
                sheet: [21, 22],
                hidden: ['facebook']
            },
            {
                unified: '1F471-1F3FD',
                sheet: [21, 23],
                hidden: ['facebook']
            },
            {
                unified: '1F471-1F3FE',
                sheet: [21, 24],
                hidden: ['facebook']
            },
            {
                unified: '1F471-1F3FF',
                sheet: [21, 25],
                hidden: ['facebook']
            }
        ],
        shortName: 'person_with_blond_hair',
        obsoletedBy: '1F471-200D-2642-FE0F'
    },
    {
        name: 'Waning Crescent Moon Symbol',
        unified: '1F318',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 16],
        shortName: 'waning_crescent_moon'
    },
    {
        name: 'Malaysia Flag',
        unified: '1F1F2-1F1FE',
        sheet: [3, 38],
        shortName: 'flag-my'
    },
    {
        name: 'Squared Cjk Unified Ideograph-6307',
        unified: '1F22F',
        keywords: [
            'chinese',
            'point',
            'green-square',
            'kanji'
        ],
        sheet: [5, 32],
        shortName: 'u6307'
    },
    {
        name: 'Blond Haired Man',
        unified: '1F471-200D-2642-FE0F',
        obsoletes: '1F471',
        sheet: [21, 14],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F471-1F3FB-200D-2642-FE0F',
                sheet: [21, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FC-200D-2642-FE0F',
                sheet: [21, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FD-200D-2642-FE0F',
                sheet: [21, 17],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FE-200D-2642-FE0F',
                sheet: [21, 18],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FF-200D-2642-FE0F',
                sheet: [21, 19],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'blond-haired-man'
    },
    {
        name: 'Crescent Moon',
        unified: '1F319',
        keywords: [
            'night',
            'sleep',
            'sky',
            'evening',
            'magic'
        ],
        sheet: [6, 17],
        shortName: 'crescent_moon'
    },
    {
        name: 'Mozambique Flag',
        unified: '1F1F2-1F1FF',
        sheet: [3, 39],
        shortName: 'flag-mz'
    },
    {
        name: 'New Moon with Face',
        unified: '1F31A',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 18],
        shortName: 'new_moon_with_face'
    },
    {
        name: 'Namibia Flag',
        unified: '1F1F3-1F1E6',
        sheet: [3, 40],
        shortName: 'flag-na'
    },
    {
        name: 'Blond Haired Woman',
        unified: '1F471-200D-2640-FE0F',
        sheet: [21, 8],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F471-1F3FB-200D-2640-FE0F',
                sheet: [21, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FC-200D-2640-FE0F',
                sheet: [21, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FD-200D-2640-FE0F',
                sheet: [21, 11],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FE-200D-2640-FE0F',
                sheet: [21, 12],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F471-1F3FF-200D-2640-FE0F',
                sheet: [21, 13],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'blond-haired-woman'
    },
    {
        name: 'Circled Ideograph Advantage',
        unified: '1F250',
        keywords: [
            'chinese',
            'kanji',
            'obtain',
            'get',
            'circle'
        ],
        sheet: [5, 42],
        shortName: 'ideograph_advantage'
    },
    {
        name: 'First Quarter Moon with Face',
        unified: '1F31B',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 19],
        shortName: 'first_quarter_moon_with_face'
    },
    {
        name: 'Man in Tuxedo',
        unified: '1F935',
        keywords: [
            'couple',
            'marriage',
            'wedding',
            'groom'
        ],
        sheet: [39, 34],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F935-1F3FB',
                sheet: [39, 35],
                hidden: ['messenger']
            },
            {
                unified: '1F935-1F3FC',
                sheet: [39, 36],
                hidden: ['messenger']
            },
            {
                unified: '1F935-1F3FD',
                sheet: [39, 37],
                hidden: ['messenger']
            },
            {
                unified: '1F935-1F3FE',
                sheet: [39, 38],
                hidden: ['messenger']
            },
            {
                unified: '1F935-1F3FF',
                sheet: [39, 39],
                hidden: ['messenger']
            }
        ],
        shortName: 'man_in_tuxedo'
    },
    {
        name: 'New Caledonia Flag',
        unified: '1F1F3-1F1E8',
        sheet: [3, 41],
        hidden: ['google'],
        shortName: 'flag-nc'
    },
    {
        name: 'Squared Cjk Unified Ideograph-5272',
        unified: '1F239',
        keywords: [
            'cut',
            'divide',
            'chinese',
            'kanji',
            'pink-square'
        ],
        sheet: [5, 40],
        shortName: 'u5272'
    },
    {
        name: 'Niger Flag',
        unified: '1F1F3-1F1EA',
        sheet: [3, 42],
        shortName: 'flag-ne'
    },
    {
        name: 'Last Quarter Moon with Face',
        unified: '1F31C',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 20],
        shortName: 'last_quarter_moon_with_face'
    },
    {
        name: 'Squared Cjk Unified Ideograph-7121',
        unified: '1F21A',
        keywords: [
            'nothing',
            'chinese',
            'kanji',
            'japanese',
            'orange-square'
        ],
        sheet: [5, 31],
        shortName: 'u7121'
    },
    {
        name: 'Bride with Veil',
        unified: '1F470',
        keywords: [
            'couple',
            'marriage',
            'wedding',
            'woman',
            'bride'
        ],
        sheet: [21, 2],
        skinVariations: [
            {
                unified: '1F470-1F3FB',
                sheet: [21, 3]
            },
            {
                unified: '1F470-1F3FC',
                sheet: [21, 4]
            },
            {
                unified: '1F470-1F3FD',
                sheet: [21, 5]
            },
            {
                unified: '1F470-1F3FE',
                sheet: [21, 6]
            },
            {
                unified: '1F470-1F3FF',
                sheet: [21, 7]
            }
        ],
        shortName: 'bride_with_veil'
    },
    {
        name: 'Squared Cjk Unified Ideograph-7981',
        unified: '1F232',
        keywords: [
            'kanji',
            'japanese',
            'chinese',
            'forbidden',
            'limit',
            'restricted',
            'red-square'
        ],
        sheet: [5, 33],
        shortName: 'u7981'
    },
    {
        name: 'Pregnant Woman',
        unified: '1F930',
        keywords: ['baby'],
        sheet: [39, 4],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F930-1F3FB',
                sheet: [39, 5],
                hidden: ['messenger']
            },
            {
                unified: '1F930-1F3FC',
                sheet: [39, 6],
                hidden: ['messenger']
            },
            {
                unified: '1F930-1F3FD',
                sheet: [39, 7],
                hidden: ['messenger']
            },
            {
                unified: '1F930-1F3FE',
                sheet: [39, 8],
                hidden: ['messenger']
            },
            {
                unified: '1F930-1F3FF',
                sheet: [39, 9],
                hidden: ['messenger']
            }
        ],
        shortName: 'pregnant_woman'
    },
    {
        name: 'Thermometer',
        unified: '1F321-FE0F',
        keywords: [
            'weather',
            'temperature',
            'hot',
            'cold'
        ],
        sheet: [6, 25],
        hidden: ['messenger'],
        shortName: 'thermometer'
    },
    {
        name: 'Norfolk Island Flag',
        unified: '1F1F3-1F1EB',
        sheet: [3, 43],
        shortName: 'flag-nf'
    },
    {
        name: 'Black Sun with Rays',
        unified: '2600-FE0F',
        keywords: [
            'weather',
            'nature',
            'brightness',
            'summer',
            'beach',
            'spring'
        ],
        sheet: [47, 16],
        shortName: 'sunny'
    },
    {
        name: 'Circled Ideograph Accept',
        unified: '1F251',
        keywords: [
            'ok',
            'good',
            'chinese',
            'kanji',
            'agree',
            'yes',
            'orange-circle'
        ],
        sheet: [5, 43],
        shortName: 'accept'
    },
    {
        name: 'Nigeria Flag',
        unified: '1F1F3-1F1EC',
        sheet: [3, 44],
        shortName: 'flag-ng'
    },
    {
        name: 'Breast-Feeding',
        unified: '1F931',
        sheet: [39, 10],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F931-1F3FB',
                sheet: [39, 11],
                hidden: ['messenger']
            },
            {
                unified: '1F931-1F3FC',
                sheet: [39, 12],
                hidden: ['messenger']
            },
            {
                unified: '1F931-1F3FD',
                sheet: [39, 13],
                hidden: ['messenger']
            },
            {
                unified: '1F931-1F3FE',
                sheet: [39, 14],
                hidden: ['messenger']
            },
            {
                unified: '1F931-1F3FF',
                sheet: [39, 15],
                hidden: ['messenger']
            }
        ],
        shortName: 'breast-feeding'
    },
    {
        name: 'Full Moon with Face',
        unified: '1F31D',
        keywords: [
            'nature',
            'twilight',
            'planet',
            'space',
            'night',
            'evening',
            'sleep'
        ],
        sheet: [6, 21],
        shortName: 'full_moon_with_face'
    },
    {
        name: 'Nicaragua Flag',
        unified: '1F1F3-1F1EE',
        sheet: [3, 45],
        shortName: 'flag-ni'
    },
    {
        name: 'Squared Cjk Unified Ideograph-7533',
        unified: '1F238',
        keywords: [
            'chinese',
            'japanese',
            'kanji',
            'orange-square'
        ],
        sheet: [5, 39],
        shortName: 'u7533'
    },
    {
        name: 'Baby Angel',
        unified: '1F47C',
        keywords: [
            'heaven',
            'wings',
            'halo'
        ],
        sheet: [22, 43],
        skinVariations: [
            {
                unified: '1F47C-1F3FB',
                sheet: [22, 44]
            },
            {
                unified: '1F47C-1F3FC',
                sheet: [22, 45]
            },
            {
                unified: '1F47C-1F3FD',
                sheet: [22, 46]
            },
            {
                unified: '1F47C-1F3FE',
                sheet: [22, 47]
            },
            {
                unified: '1F47C-1F3FF',
                sheet: [22, 48]
            }
        ],
        shortName: 'angel'
    },
    {
        name: 'Sun with Face',
        unified: '1F31E',
        keywords: [
            'nature',
            'morning',
            'sky'
        ],
        sheet: [6, 22],
        shortName: 'sun_with_face'
    },
    {
        name: 'Father Christmas',
        unified: '1F385',
        keywords: [
            'festival',
            'man',
            'male',
            'xmas',
            'father christmas'
        ],
        sheet: [8, 19],
        skinVariations: [
            {
                unified: '1F385-1F3FB',
                sheet: [8, 20]
            },
            {
                unified: '1F385-1F3FC',
                sheet: [8, 21]
            },
            {
                unified: '1F385-1F3FD',
                sheet: [8, 22]
            },
            {
                unified: '1F385-1F3FE',
                sheet: [8, 23]
            },
            {
                unified: '1F385-1F3FF',
                sheet: [8, 24]
            }
        ],
        shortName: 'santa'
    },
    {
        name: 'Squared Cjk Unified Ideograph-5408',
        unified: '1F234',
        keywords: [
            'japanese',
            'chinese',
            'join',
            'kanji',
            'red-square'
        ],
        sheet: [5, 35],
        shortName: 'u5408'
    },
    {
        name: 'Netherlands Flag',
        unified: '1F1F3-1F1F1',
        sheet: [3, 46],
        shortName: 'flag-nl'
    },
    {
        name: 'Mother Christmas',
        unified: '1F936',
        keywords: [
            'woman',
            'female',
            'xmas',
            'mother christmas'
        ],
        sheet: [39, 40],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F936-1F3FB',
                sheet: [39, 41],
                hidden: ['messenger']
            },
            {
                unified: '1F936-1F3FC',
                sheet: [39, 42],
                hidden: ['messenger']
            },
            {
                unified: '1F936-1F3FD',
                sheet: [39, 43],
                hidden: ['messenger']
            },
            {
                unified: '1F936-1F3FE',
                sheet: [39, 44],
                hidden: ['messenger']
            },
            {
                unified: '1F936-1F3FF',
                sheet: [39, 45],
                hidden: ['messenger']
            }
        ],
        shortNames: ['mother_christmas'],
        shortName: 'mrs_claus'
    },
    {
        name: 'Squared Cjk Unified Ideograph-7a7a',
        unified: '1F233',
        keywords: [
            'kanji',
            'japanese',
            'chinese',
            'empty',
            'sky',
            'blue-square'
        ],
        sheet: [5, 34],
        shortName: 'u7a7a'
    },
    {
        name: 'White Medium Star',
        unified: '2B50',
        keywords: ['night', 'yellow'],
        sheet: [50, 22],
        shortName: 'star'
    },
    {
        name: 'Norway Flag',
        unified: '1F1F3-1F1F4',
        sheet: [3, 47],
        shortName: 'flag-no'
    },
    {
        name: 'Mage',
        unified: '1F9D9',
        sheet: [44, 42],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D9-1F3FB',
                sheet: [44, 43],
                hidden: ['messenger']
            },
            {
                unified: '1F9D9-1F3FC',
                sheet: [44, 44],
                hidden: ['messenger']
            },
            {
                unified: '1F9D9-1F3FD',
                sheet: [44, 45],
                hidden: ['messenger']
            },
            {
                unified: '1F9D9-1F3FE',
                sheet: [44, 46],
                hidden: ['messenger']
            },
            {
                unified: '1F9D9-1F3FF',
                sheet: [44, 47],
                hidden: ['messenger']
            }
        ],
        shortName: 'mage',
        obsoletedBy: '1F9D9-200D-2640-FE0F'
    },
    {
        name: 'Glowing Star',
        unified: '1F31F',
        keywords: [
            'night',
            'sparkle',
            'awesome',
            'good',
            'magic'
        ],
        sheet: [6, 23],
        shortName: 'star2'
    },
    {
        name: 'Nepal Flag',
        unified: '1F1F3-1F1F5',
        sheet: [3, 48],
        shortName: 'flag-np'
    },
    {
        name: 'Circled Ideograph Congratulation',
        unified: '3297-FE0F',
        keywords: [
            'chinese',
            'kanji',
            'japanese',
            'red-circle'
        ],
        sheet: [50, 26],
        shortName: 'congratulations'
    },
    {
        name: 'Nauru Flag',
        unified: '1F1F3-1F1F7',
        sheet: [3, 49],
        shortName: 'flag-nr'
    },
    {
        name: 'Shooting Star',
        unified: '1F320',
        keywords: ['night', 'photo'],
        sheet: [6, 24],
        shortName: 'stars'
    },
    {
        name: 'Female Mage',
        unified: '1F9D9-200D-2640-FE0F',
        obsoletes: '1F9D9',
        sheet: [44, 30],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D9-1F3FB-200D-2640-FE0F',
                sheet: [44, 31],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FC-200D-2640-FE0F',
                sheet: [44, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FD-200D-2640-FE0F',
                sheet: [44, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FE-200D-2640-FE0F',
                sheet: [44, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FF-200D-2640-FE0F',
                sheet: [44, 35],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female_mage'
    },
    {
        name: 'Circled Ideograph Secret',
        unified: '3299-FE0F',
        keywords: [
            'privacy',
            'chinese',
            'sshh',
            'kanji',
            'red-circle'
        ],
        sheet: [50, 27],
        shortName: 'secret'
    },
    {
        name: 'Niue Flag',
        unified: '1F1F3-1F1FA',
        sheet: [3, 50],
        shortName: 'flag-nu'
    },
    {
        name: 'Squared Cjk Unified Ideograph-55b6',
        unified: '1F23A',
        keywords: [
            'japanese',
            'opening hours',
            'orange-square'
        ],
        sheet: [5, 41],
        shortName: 'u55b6'
    },
    {
        name: 'Male Mage',
        unified: '1F9D9-200D-2642-FE0F',
        sheet: [44, 36],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D9-1F3FB-200D-2642-FE0F',
                sheet: [44, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FC-200D-2642-FE0F',
                sheet: [44, 38],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FD-200D-2642-FE0F',
                sheet: [44, 39],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FE-200D-2642-FE0F',
                sheet: [44, 40],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D9-1F3FF-200D-2642-FE0F',
                sheet: [44, 41],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male_mage'
    },
    {
        name: 'Cloud',
        unified: '2601-FE0F',
        keywords: ['weather', 'sky'],
        sheet: [47, 17],
        shortName: 'cloud'
    },
    {
        name: 'New Zealand Flag',
        unified: '1F1F3-1F1FF',
        sheet: [3, 51],
        shortName: 'flag-nz'
    },
    {
        name: 'Sun Behind Cloud',
        unified: '26C5',
        keywords: [
            'weather',
            'nature',
            'cloudy',
            'morning',
            'fall',
            'spring'
        ],
        sheet: [48, 29],
        shortName: 'partly_sunny'
    },
    {
        name: 'Fairy',
        unified: '1F9DA',
        sheet: [45, 8],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DA-1F3FB',
                sheet: [45, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FC',
                sheet: [45, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FD',
                sheet: [45, 11],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FE',
                sheet: [45, 12],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FF',
                sheet: [45, 13],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'fairy',
        obsoletedBy: '1F9DA-200D-2640-FE0F'
    },
    {
        name: 'Squared Cjk Unified Ideograph-6e80',
        unified: '1F235',
        keywords: [
            'full',
            'chinese',
            'japanese',
            'red-square',
            'kanji'
        ],
        sheet: [5, 36],
        shortName: 'u6e80'
    },
    {
        name: 'Black Small Square',
        unified: '25AA-FE0F',
        keywords: ['shape', 'icon'],
        sheet: [47, 8],
        shortName: 'black_small_square'
    },
    {
        name: 'Thunder Cloud and Rain',
        unified: '26C8-FE0F',
        sheet: [48, 30],
        hidden: ['messenger'],
        shortName: 'thunder_cloud_and_rain'
    },
    {
        name: 'Female Fairy',
        unified: '1F9DA-200D-2640-FE0F',
        obsoletes: '1F9DA',
        sheet: [44, 48],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DA-1F3FB-200D-2640-FE0F',
                sheet: [44, 49],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FC-200D-2640-FE0F',
                sheet: [44, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FD-200D-2640-FE0F',
                sheet: [44, 51],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FE-200D-2640-FE0F',
                sheet: [45, 0],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FF-200D-2640-FE0F',
                sheet: [45, 1],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female_fairy'
    },
    {
        name: 'Oman Flag',
        unified: '1F1F4-1F1F2',
        sheet: [4, 0],
        shortName: 'flag-om'
    },
    {
        name: 'White Small Square',
        unified: '25AB-FE0F',
        keywords: ['shape', 'icon'],
        sheet: [47, 9],
        shortName: 'white_small_square'
    },
    {
        name: 'Panama Flag',
        unified: '1F1F5-1F1E6',
        sheet: [4, 1],
        shortName: 'flag-pa'
    },
    {
        name: 'Mostly Sunny',
        unified: '1F324-FE0F',
        sheet: [6, 26],
        hidden: ['messenger'],
        shortNames: ['sun_small_cloud'],
        shortName: 'mostly_sunny'
    },
    {
        name: 'Male Fairy',
        unified: '1F9DA-200D-2642-FE0F',
        sheet: [45, 2],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DA-1F3FB-200D-2642-FE0F',
                sheet: [45, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FC-200D-2642-FE0F',
                sheet: [45, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FD-200D-2642-FE0F',
                sheet: [45, 5],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FE-200D-2642-FE0F',
                sheet: [45, 6],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DA-1F3FF-200D-2642-FE0F',
                sheet: [45, 7],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male_fairy'
    },
    {
        name: 'Barely Sunny',
        unified: '1F325-FE0F',
        sheet: [6, 27],
        hidden: ['messenger'],
        shortNames: ['sun_behind_cloud'],
        shortName: 'barely_sunny'
    },
    {
        name: 'White Medium Square',
        unified: '25FB-FE0F',
        keywords: [
            'shape',
            'stone',
            'icon'
        ],
        sheet: [47, 12],
        shortName: 'white_medium_square'
    },
    {
        name: 'Peru Flag',
        unified: '1F1F5-1F1EA',
        sheet: [4, 2],
        shortName: 'flag-pe'
    },
    {
        name: 'Vampire',
        unified: '1F9DB',
        sheet: [45, 26],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DB-1F3FB',
                sheet: [45, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FC',
                sheet: [45, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FD',
                sheet: [45, 29],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FE',
                sheet: [45, 30],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FF',
                sheet: [45, 31],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'vampire',
        obsoletedBy: '1F9DB-200D-2640-FE0F'
    },
    {
        name: 'Female Vampire',
        unified: '1F9DB-200D-2640-FE0F',
        obsoletes: '1F9DB',
        sheet: [45, 14],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DB-1F3FB-200D-2640-FE0F',
                sheet: [45, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FC-200D-2640-FE0F',
                sheet: [45, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FD-200D-2640-FE0F',
                sheet: [45, 17],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FE-200D-2640-FE0F',
                sheet: [45, 18],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FF-200D-2640-FE0F',
                sheet: [45, 19],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female_vampire'
    },
    {
        name: 'Partly Sunny Rain',
        unified: '1F326-FE0F',
        sheet: [6, 28],
        hidden: ['messenger'],
        shortNames: ['sun_behind_rain_cloud'],
        shortName: 'partly_sunny_rain'
    },
    {
        name: 'French Polynesia Flag',
        unified: '1F1F5-1F1EB',
        sheet: [4, 3],
        shortName: 'flag-pf'
    },
    {
        name: 'Black Medium Square',
        unified: '25FC-FE0F',
        keywords: [
            'shape',
            'button',
            'icon'
        ],
        sheet: [47, 13],
        shortName: 'black_medium_square'
    },
    {
        name: 'White Medium Small Square',
        unified: '25FD',
        keywords: [
            'shape',
            'stone',
            'icon',
            'button'
        ],
        sheet: [47, 14],
        shortName: 'white_medium_small_square'
    },
    {
        name: 'Rain Cloud',
        unified: '1F327-FE0F',
        sheet: [6, 29],
        hidden: ['messenger'],
        shortName: 'rain_cloud'
    },
    {
        name: 'Papua New Guinea Flag',
        unified: '1F1F5-1F1EC',
        sheet: [4, 4],
        shortName: 'flag-pg'
    },
    {
        name: 'Male Vampire',
        unified: '1F9DB-200D-2642-FE0F',
        sheet: [45, 20],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DB-1F3FB-200D-2642-FE0F',
                sheet: [45, 21],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FC-200D-2642-FE0F',
                sheet: [45, 22],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FD-200D-2642-FE0F',
                sheet: [45, 23],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FE-200D-2642-FE0F',
                sheet: [45, 24],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DB-1F3FF-200D-2642-FE0F',
                sheet: [45, 25],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male_vampire'
    },
    {
        name: 'Philippines Flag',
        unified: '1F1F5-1F1ED',
        sheet: [4, 5],
        shortName: 'flag-ph'
    },
    {
        name: 'Merperson',
        unified: '1F9DC',
        sheet: [45, 44],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DC-1F3FB',
                sheet: [45, 45],
                hidden: ['messenger']
            },
            {
                unified: '1F9DC-1F3FC',
                sheet: [45, 46],
                hidden: ['messenger']
            },
            {
                unified: '1F9DC-1F3FD',
                sheet: [45, 47],
                hidden: ['messenger']
            },
            {
                unified: '1F9DC-1F3FE',
                sheet: [45, 48],
                hidden: ['messenger']
            },
            {
                unified: '1F9DC-1F3FF',
                sheet: [45, 49],
                hidden: ['messenger']
            }
        ],
        shortName: 'merperson',
        obsoletedBy: '1F9DC-200D-2642-FE0F'
    },
    {
        name: 'Black Medium Small Square',
        unified: '25FE',
        keywords: [
            'icon',
            'shape',
            'button'
        ],
        sheet: [47, 15],
        shortName: 'black_medium_small_square'
    },
    {
        name: 'Snow Cloud',
        unified: '1F328-FE0F',
        sheet: [6, 30],
        hidden: ['messenger'],
        shortName: 'snow_cloud'
    },
    {
        name: 'Lightning',
        unified: '1F329-FE0F',
        sheet: [6, 31],
        hidden: ['messenger'],
        shortNames: ['lightning_cloud'],
        shortName: 'lightning'
    },
    {
        name: 'Black Large Square',
        unified: '2B1B',
        keywords: [
            'shape',
            'icon',
            'button'
        ],
        sheet: [50, 20],
        shortName: 'black_large_square'
    },
    {
        name: 'Mermaid',
        unified: '1F9DC-200D-2640-FE0F',
        keywords: [
            'woman',
            'female',
            'merwoman',
            'ariel'
        ],
        sheet: [45, 32],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DC-1F3FB-200D-2640-FE0F',
                sheet: [45, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FC-200D-2640-FE0F',
                sheet: [45, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FD-200D-2640-FE0F',
                sheet: [45, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FE-200D-2640-FE0F',
                sheet: [45, 36],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FF-200D-2640-FE0F',
                sheet: [45, 37],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'mermaid'
    },
    {
        name: 'Pakistan Flag',
        unified: '1F1F5-1F1F0',
        sheet: [4, 6],
        shortName: 'flag-pk'
    },
    {
        name: 'Merman',
        unified: '1F9DC-200D-2642-FE0F',
        obsoletes: '1F9DC',
        keywords: ['man', 'male', 'triton'],
        sheet: [45, 38],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DC-1F3FB-200D-2642-FE0F',
                sheet: [45, 39],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FC-200D-2642-FE0F',
                sheet: [45, 40],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FD-200D-2642-FE0F',
                sheet: [45, 41],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FE-200D-2642-FE0F',
                sheet: [45, 42],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DC-1F3FF-200D-2642-FE0F',
                sheet: [45, 43],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'merman'
    },
    {
        name: 'White Large Square',
        unified: '2B1C',
        keywords: [
            'shape',
            'icon',
            'stone',
            'button'
        ],
        sheet: [50, 21],
        shortName: 'white_large_square'
    },
    {
        name: 'Tornado',
        unified: '1F32A-FE0F',
        keywords: [
            'weather',
            'cyclone',
            'twister'
        ],
        sheet: [6, 32],
        hidden: ['messenger'],
        shortNames: ['tornado_cloud'],
        shortName: 'tornado'
    },
    {
        name: 'Poland Flag',
        unified: '1F1F5-1F1F1',
        sheet: [4, 7],
        shortName: 'flag-pl'
    },
    {
        name: 'Elf',
        unified: '1F9DD',
        sheet: [46, 10],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DD-1F3FB',
                sheet: [46, 11],
                hidden: ['messenger']
            },
            {
                unified: '1F9DD-1F3FC',
                sheet: [46, 12],
                hidden: ['messenger']
            },
            {
                unified: '1F9DD-1F3FD',
                sheet: [46, 13],
                hidden: ['messenger']
            },
            {
                unified: '1F9DD-1F3FE',
                sheet: [46, 14],
                hidden: ['messenger']
            },
            {
                unified: '1F9DD-1F3FF',
                sheet: [46, 15],
                hidden: ['messenger']
            }
        ],
        shortName: 'elf',
        obsoletedBy: '1F9DD-200D-2642-FE0F'
    },
    {
        name: 'Fog',
        unified: '1F32B-FE0F',
        keywords: ['weather'],
        sheet: [6, 33],
        hidden: ['messenger'],
        shortName: 'fog'
    },
    {
        name: 'Large Orange Diamond',
        unified: '1F536',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 4],
        shortName: 'large_orange_diamond'
    },
    {
        name: 'St. Pierre & Miquelon Flag',
        unified: '1F1F5-1F1F2',
        sheet: [4, 8],
        hidden: ['google'],
        shortName: 'flag-pm'
    },
    {
        name: 'Pitcairn Islands Flag',
        unified: '1F1F5-1F1F3',
        sheet: [4, 9],
        shortName: 'flag-pn'
    },
    {
        name: 'Wind Blowing Face',
        unified: '1F32C-FE0F',
        sheet: [6, 34],
        hidden: ['messenger'],
        shortName: 'wind_blowing_face'
    },
    {
        name: 'Female Elf',
        unified: '1F9DD-200D-2640-FE0F',
        sheet: [45, 50],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DD-1F3FB-200D-2640-FE0F',
                sheet: [45, 51],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FC-200D-2640-FE0F',
                sheet: [46, 0],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FD-200D-2640-FE0F',
                sheet: [46, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FE-200D-2640-FE0F',
                sheet: [46, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FF-200D-2640-FE0F',
                sheet: [46, 3],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'female_elf'
    },
    {
        name: 'Large Blue Diamond',
        unified: '1F537',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 5],
        shortName: 'large_blue_diamond'
    },
    {
        name: 'Male Elf',
        unified: '1F9DD-200D-2642-FE0F',
        obsoletes: '1F9DD',
        sheet: [46, 4],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9DD-1F3FB-200D-2642-FE0F',
                sheet: [46, 5],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FC-200D-2642-FE0F',
                sheet: [46, 6],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FD-200D-2642-FE0F',
                sheet: [46, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FE-200D-2642-FE0F',
                sheet: [46, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9DD-1F3FF-200D-2642-FE0F',
                sheet: [46, 9],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'male_elf'
    },
    {
        name: 'Small Orange Diamond',
        unified: '1F538',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 6],
        shortName: 'small_orange_diamond'
    },
    {
        name: 'Puerto Rico Flag',
        unified: '1F1F5-1F1F7',
        sheet: [4, 10],
        shortName: 'flag-pr'
    },
    {
        name: 'Cyclone',
        unified: '1F300',
        keywords: [
            'weather',
            'swirl',
            'blue',
            'cloud',
            'vortex',
            'spiral',
            'whirlpool',
            'spin',
            'tornado',
            'hurricane',
            'typhoon'
        ],
        sheet: [5, 44],
        shortName: 'cyclone'
    },
    {
        name: 'Rainbow',
        unified: '1F308',
        keywords: [
            'nature',
            'happy',
            'unicorn_face',
            'photo',
            'sky',
            'spring'
        ],
        sheet: [6, 0],
        shortName: 'rainbow'
    },
    {
        name: 'Small Blue Diamond',
        unified: '1F539',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 7],
        shortName: 'small_blue_diamond'
    },
    {
        name: 'Genie',
        unified: '1F9DE',
        sheet: [46, 18],
        hidden: ['messenger'],
        shortName: 'genie',
        obsoletedBy: '1F9DE-200D-2642-FE0F'
    },
    {
        name: 'Palestinian Territories Flag',
        unified: '1F1F5-1F1F8',
        sheet: [4, 11],
        shortName: 'flag-ps'
    },
    {
        name: 'Up-Pointing Red Triangle',
        unified: '1F53A',
        keywords: [
            'shape',
            'direction',
            'up',
            'top'
        ],
        sheet: [28, 8],
        shortName: 'small_red_triangle'
    },
    {
        name: 'Closed Umbrella',
        unified: '1F302',
        keywords: [
            'weather',
            'rain',
            'drizzle'
        ],
        sheet: [5, 46],
        shortName: 'closed_umbrella'
    },
    {
        name: 'Female Genie',
        unified: '1F9DE-200D-2640-FE0F',
        sheet: [46, 16],
        hidden: ['messenger'],
        shortName: 'female_genie'
    },
    {
        name: 'Portugal Flag',
        unified: '1F1F5-1F1F9',
        sheet: [4, 12],
        shortName: 'flag-pt'
    },
    {
        name: 'Palau Flag',
        unified: '1F1F5-1F1FC',
        sheet: [4, 13],
        shortName: 'flag-pw'
    },
    {
        name: 'Down-Pointing Red Triangle',
        unified: '1F53B',
        keywords: [
            'shape',
            'direction',
            'bottom'
        ],
        sheet: [28, 9],
        shortName: 'small_red_triangle_down'
    },
    {
        name: 'Umbrella',
        unified: '2602-FE0F',
        keywords: [
            'rainy',
            'weather',
            'spring'
        ],
        sheet: [47, 18],
        hidden: ['messenger'],
        shortName: 'umbrella'
    },
    {
        name: 'Male Genie',
        unified: '1F9DE-200D-2642-FE0F',
        obsoletes: '1F9DE',
        sheet: [46, 17],
        hidden: ['messenger'],
        shortName: 'male_genie'
    },
    {
        name: 'Zombie',
        unified: '1F9DF',
        sheet: [46, 21],
        hidden: ['messenger'],
        shortName: 'zombie',
        obsoletedBy: '1F9DF-200D-2642-FE0F'
    },
    {
        name: 'Paraguay Flag',
        unified: '1F1F5-1F1FE',
        sheet: [4, 14],
        shortName: 'flag-py'
    },
    {
        name: 'Diamond Shape with a Dot Inside',
        unified: '1F4A0',
        keywords: [
            'jewel',
            'blue',
            'gem',
            'crystal',
            'fancy'
        ],
        sheet: [25, 6],
        shortName: 'diamond_shape_with_a_dot_inside'
    },
    {
        name: 'Umbrella with Rain Drops',
        unified: '2614',
        sheet: [47, 23],
        shortName: 'umbrella_with_rain_drops'
    },
    {
        name: 'Radio Button',
        unified: '1F518',
        keywords: [
            'input',
            'old',
            'music',
            'circle'
        ],
        sheet: [27, 26],
        shortName: 'radio_button'
    },
    {
        name: 'Female Zombie',
        unified: '1F9DF-200D-2640-FE0F',
        sheet: [46, 19],
        hidden: ['messenger'],
        shortName: 'female_zombie'
    },
    {
        name: 'Qatar Flag',
        unified: '1F1F6-1F1E6',
        sheet: [4, 15],
        shortName: 'flag-qa'
    },
    {
        name: 'Umbrella on Ground',
        unified: '26F1-FE0F',
        sheet: [48, 39],
        hidden: ['messenger'],
        shortName: 'umbrella_on_ground'
    },
    {
        name: 'Black Square Button',
        unified: '1F532',
        keywords: [
            'shape',
            'input',
            'frame'
        ],
        sheet: [28, 0],
        shortName: 'black_square_button'
    },
    {
        name: 'High Voltage Sign',
        unified: '26A1',
        keywords: [
            'thunder',
            'weather',
            'lightning bolt',
            'fast'
        ],
        sheet: [48, 21],
        shortName: 'zap'
    },
    {
        name: 'Male Zombie',
        unified: '1F9DF-200D-2642-FE0F',
        obsoletes: '1F9DF',
        sheet: [46, 20],
        hidden: ['messenger'],
        shortName: 'male_zombie'
    },
    {
        name: 'Réunion Flag',
        unified: '1F1F7-1F1EA',
        sheet: [4, 16],
        hidden: ['google'],
        shortName: 'flag-re'
    },
    {
        name: 'Romania Flag',
        unified: '1F1F7-1F1F4',
        sheet: [4, 17],
        shortName: 'flag-ro'
    },
    {
        name: 'Snowflake',
        unified: '2744-FE0F',
        keywords: [
            'winter',
            'season',
            'cold',
            'weather',
            'christmas',
            'xmas'
        ],
        sheet: [49, 51],
        shortName: 'snowflake'
    },
    {
        name: 'White Square Button',
        unified: '1F533',
        keywords: ['shape', 'input'],
        sheet: [28, 1],
        shortName: 'white_square_button'
    },
    {
        name: 'Person Frowning',
        unified: '1F64D',
        sheet: [33, 30],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F64D-1F3FB',
                sheet: [33, 31],
                hidden: ['facebook']
            },
            {
                unified: '1F64D-1F3FC',
                sheet: [33, 32],
                hidden: ['facebook']
            },
            {
                unified: '1F64D-1F3FD',
                sheet: [33, 33],
                hidden: ['facebook']
            },
            {
                unified: '1F64D-1F3FE',
                sheet: [33, 34],
                hidden: ['facebook']
            },
            {
                unified: '1F64D-1F3FF',
                sheet: [33, 35],
                hidden: ['facebook']
            }
        ],
        shortName: 'person_frowning',
        obsoletedBy: '1F64D-200D-2640-FE0F'
    },
    {
        name: 'Serbia Flag',
        unified: '1F1F7-1F1F8',
        sheet: [4, 18],
        shortName: 'flag-rs'
    },
    {
        name: 'Man Frowning',
        unified: '1F64D-200D-2642-FE0F',
        sheet: [33, 24],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F64D-1F3FB-200D-2642-FE0F',
                sheet: [33, 25],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FC-200D-2642-FE0F',
                sheet: [33, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FD-200D-2642-FE0F',
                sheet: [33, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FE-200D-2642-FE0F',
                sheet: [33, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FF-200D-2642-FE0F',
                sheet: [33, 29],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-frowning'
    },
    {
        name: 'Medium White Circle',
        unified: '26AA',
        keywords: ['shape', 'round'],
        sheet: [48, 22],
        shortName: 'white_circle'
    },
    {
        name: 'Snowman',
        unified: '2603-FE0F',
        keywords: [
            'winter',
            'season',
            'cold',
            'weather',
            'christmas',
            'xmas',
            'frozen',
            'without_snow'
        ],
        sheet: [47, 19],
        hidden: ['messenger'],
        shortName: 'snowman'
    },
    {
        name: 'Snowman Without Snow',
        unified: '26C4',
        sheet: [48, 28],
        shortName: 'snowman_without_snow'
    },
    {
        name: 'Russia Flag',
        unified: '1F1F7-1F1FA',
        keywords: [
            'russian',
            'federation',
            'flag',
            'nation',
            'country',
            'banner'
        ],
        sheet: [4, 19],
        shortNames: ['flag-ru'],
        shortName: 'ru'
    },
    {
        name: 'Medium Black Circle',
        unified: '26AB',
        keywords: [
            'shape',
            'button',
            'round'
        ],
        sheet: [48, 23],
        shortName: 'black_circle'
    },
    {
        name: 'Woman Frowning',
        unified: '1F64D-200D-2640-FE0F',
        obsoletes: '1F64D',
        sheet: [33, 18],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F64D-1F3FB-200D-2640-FE0F',
                sheet: [33, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FC-200D-2640-FE0F',
                sheet: [33, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FD-200D-2640-FE0F',
                sheet: [33, 21],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FE-200D-2640-FE0F',
                sheet: [33, 22],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64D-1F3FF-200D-2640-FE0F',
                sheet: [33, 23],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-frowning'
    },
    {
        name: 'Rwanda Flag',
        unified: '1F1F7-1F1FC',
        sheet: [4, 20],
        shortName: 'flag-rw'
    },
    {
        name: 'Comet',
        unified: '2604-FE0F',
        keywords: ['space'],
        sheet: [47, 20],
        hidden: ['messenger'],
        shortName: 'comet'
    },
    {
        name: 'Person with Pouting Face',
        unified: '1F64E',
        sheet: [33, 48],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F64E-1F3FB',
                sheet: [33, 49],
                hidden: ['facebook']
            },
            {
                unified: '1F64E-1F3FC',
                sheet: [33, 50],
                hidden: ['facebook']
            },
            {
                unified: '1F64E-1F3FD',
                sheet: [33, 51],
                hidden: ['facebook']
            },
            {
                unified: '1F64E-1F3FE',
                sheet: [34, 0],
                hidden: ['facebook']
            },
            {
                unified: '1F64E-1F3FF',
                sheet: [34, 1],
                hidden: ['facebook']
            }
        ],
        shortName: 'person_with_pouting_face',
        obsoletedBy: '1F64E-200D-2640-FE0F'
    },
    {
        name: 'Large Red Circle',
        unified: '1F534',
        keywords: [
            'shape',
            'error',
            'danger'
        ],
        sheet: [28, 2],
        shortName: 'red_circle'
    },
    {
        name: 'Large Blue Circle',
        unified: '1F535',
        keywords: [
            'shape',
            'icon',
            'button'
        ],
        sheet: [28, 3],
        shortName: 'large_blue_circle'
    },
    {
        name: 'Man Pouting',
        unified: '1F64E-200D-2642-FE0F',
        sheet: [33, 42],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F64E-1F3FB-200D-2642-FE0F',
                sheet: [33, 43],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FC-200D-2642-FE0F',
                sheet: [33, 44],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FD-200D-2642-FE0F',
                sheet: [33, 45],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FE-200D-2642-FE0F',
                sheet: [33, 46],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FF-200D-2642-FE0F',
                sheet: [33, 47],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-pouting'
    },
    {
        name: 'Saudi Arabia Flag',
        unified: '1F1F8-1F1E6',
        sheet: [4, 21],
        shortName: 'flag-sa'
    },
    {
        name: 'Fire',
        unified: '1F525',
        keywords: ['hot', 'cook', 'flame'],
        sheet: [27, 39],
        shortName: 'fire'
    },
    {
        name: 'Woman Pouting',
        unified: '1F64E-200D-2640-FE0F',
        obsoletes: '1F64E',
        sheet: [33, 36],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F64E-1F3FB-200D-2640-FE0F',
                sheet: [33, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FC-200D-2640-FE0F',
                sheet: [33, 38],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FD-200D-2640-FE0F',
                sheet: [33, 39],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FE-200D-2640-FE0F',
                sheet: [33, 40],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64E-1F3FF-200D-2640-FE0F',
                sheet: [33, 41],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-pouting'
    },
    {
        name: 'Solomon Islands Flag',
        unified: '1F1F8-1F1E7',
        sheet: [4, 22],
        shortName: 'flag-sb'
    },
    {
        name: 'Droplet',
        unified: '1F4A7',
        keywords: [
            'water',
            'drip',
            'faucet',
            'spring'
        ],
        sheet: [25, 13],
        shortName: 'droplet'
    },
    {
        name: 'Face with No Good Gesture',
        unified: '1F645',
        sheet: [32, 1],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F645-1F3FB',
                sheet: [32, 2],
                hidden: ['facebook']
            },
            {
                unified: '1F645-1F3FC',
                sheet: [32, 3],
                hidden: ['facebook']
            },
            {
                unified: '1F645-1F3FD',
                sheet: [32, 4],
                hidden: ['facebook']
            },
            {
                unified: '1F645-1F3FE',
                sheet: [32, 5],
                hidden: ['facebook']
            },
            {
                unified: '1F645-1F3FF',
                sheet: [32, 6],
                hidden: ['facebook']
            }
        ],
        shortName: 'no_good',
        obsoletedBy: '1F645-200D-2640-FE0F'
    },
    {
        name: 'Seychelles Flag',
        unified: '1F1F8-1F1E8',
        sheet: [4, 23],
        shortName: 'flag-sc'
    },
    {
        name: 'Water Wave',
        unified: '1F30A',
        keywords: [
            'sea',
            'water',
            'wave',
            'nature',
            'tsunami',
            'disaster'
        ],
        sheet: [6, 2],
        shortName: 'ocean'
    },
    {
        name: 'Man Gesturing No',
        unified: '1F645-200D-2642-FE0F',
        sheet: [31, 47],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F645-1F3FB-200D-2642-FE0F',
                sheet: [31, 48],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FC-200D-2642-FE0F',
                sheet: [31, 49],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FD-200D-2642-FE0F',
                sheet: [31, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FE-200D-2642-FE0F',
                sheet: [31, 51],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FF-200D-2642-FE0F',
                sheet: [32, 0],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-gesturing-no'
    },
    {
        name: 'Sudan Flag',
        unified: '1F1F8-1F1E9',
        sheet: [4, 24],
        shortName: 'flag-sd'
    },
    {
        name: 'Woman Gesturing No',
        unified: '1F645-200D-2640-FE0F',
        obsoletes: '1F645',
        sheet: [31, 41],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F645-1F3FB-200D-2640-FE0F',
                sheet: [31, 42],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FC-200D-2640-FE0F',
                sheet: [31, 43],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FD-200D-2640-FE0F',
                sheet: [31, 44],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FE-200D-2640-FE0F',
                sheet: [31, 45],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F645-1F3FF-200D-2640-FE0F',
                sheet: [31, 46],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-gesturing-no'
    },
    {
        name: 'Sweden Flag',
        unified: '1F1F8-1F1EA',
        sheet: [4, 25],
        shortName: 'flag-se'
    },
    {
        name: 'Singapore Flag',
        unified: '1F1F8-1F1EC',
        sheet: [4, 26],
        shortName: 'flag-sg'
    },
    {
        name: 'Face with Ok Gesture',
        unified: '1F646',
        keywords: [
            'women',
            'girl',
            'female',
            'pink',
            'human',
            'woman'
        ],
        sheet: [32, 19],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F646-1F3FB',
                sheet: [32, 20],
                hidden: ['facebook']
            },
            {
                unified: '1F646-1F3FC',
                sheet: [32, 21],
                hidden: ['facebook']
            },
            {
                unified: '1F646-1F3FD',
                sheet: [32, 22],
                hidden: ['facebook']
            },
            {
                unified: '1F646-1F3FE',
                sheet: [32, 23],
                hidden: ['facebook']
            },
            {
                unified: '1F646-1F3FF',
                sheet: [32, 24],
                hidden: ['facebook']
            }
        ],
        shortName: 'ok_woman',
        obsoletedBy: '1F646-200D-2640-FE0F'
    },
    {
        name: 'St. Helena Flag',
        unified: '1F1F8-1F1ED',
        sheet: [4, 27],
        shortName: 'flag-sh'
    },
    {
        name: 'Man Gesturing Ok',
        unified: '1F646-200D-2642-FE0F',
        sheet: [32, 13],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F646-1F3FB-200D-2642-FE0F',
                sheet: [32, 14],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FC-200D-2642-FE0F',
                sheet: [32, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FD-200D-2642-FE0F',
                sheet: [32, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FE-200D-2642-FE0F',
                sheet: [32, 17],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FF-200D-2642-FE0F',
                sheet: [32, 18],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-gesturing-ok'
    },
    {
        name: 'Slovenia Flag',
        unified: '1F1F8-1F1EE',
        sheet: [4, 28],
        shortName: 'flag-si'
    },
    {
        name: 'Woman Gesturing Ok',
        unified: '1F646-200D-2640-FE0F',
        obsoletes: '1F646',
        sheet: [32, 7],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F646-1F3FB-200D-2640-FE0F',
                sheet: [32, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FC-200D-2640-FE0F',
                sheet: [32, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FD-200D-2640-FE0F',
                sheet: [32, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FE-200D-2640-FE0F',
                sheet: [32, 11],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F646-1F3FF-200D-2640-FE0F',
                sheet: [32, 12],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-gesturing-ok'
    },
    {
        name: 'Information Desk Person',
        unified: '1F481',
        sheet: [23, 13],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F481-1F3FB',
                sheet: [23, 14],
                hidden: ['facebook']
            },
            {
                unified: '1F481-1F3FC',
                sheet: [23, 15],
                hidden: ['facebook']
            },
            {
                unified: '1F481-1F3FD',
                sheet: [23, 16],
                hidden: ['facebook']
            },
            {
                unified: '1F481-1F3FE',
                sheet: [23, 17],
                hidden: ['facebook']
            },
            {
                unified: '1F481-1F3FF',
                sheet: [23, 18],
                hidden: ['facebook']
            }
        ],
        shortName: 'information_desk_person',
        obsoletedBy: '1F481-200D-2640-FE0F'
    },
    {
        name: 'Svalbard & Jan Mayen Flag',
        unified: '1F1F8-1F1EF',
        sheet: [4, 29],
        shortName: 'flag-sj'
    },
    {
        name: 'Man Tipping Hand',
        unified: '1F481-200D-2642-FE0F',
        sheet: [23, 7],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F481-1F3FB-200D-2642-FE0F',
                sheet: [23, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FC-200D-2642-FE0F',
                sheet: [23, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FD-200D-2642-FE0F',
                sheet: [23, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FE-200D-2642-FE0F',
                sheet: [23, 11],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FF-200D-2642-FE0F',
                sheet: [23, 12],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-tipping-hand'
    },
    {
        name: 'Slovakia Flag',
        unified: '1F1F8-1F1F0',
        sheet: [4, 30],
        shortName: 'flag-sk'
    },
    {
        name: 'Sierra Leone Flag',
        unified: '1F1F8-1F1F1',
        sheet: [4, 31],
        shortName: 'flag-sl'
    },
    {
        name: 'Woman Tipping Hand',
        unified: '1F481-200D-2640-FE0F',
        obsoletes: '1F481',
        sheet: [23, 1],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F481-1F3FB-200D-2640-FE0F',
                sheet: [23, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FC-200D-2640-FE0F',
                sheet: [23, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FD-200D-2640-FE0F',
                sheet: [23, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FE-200D-2640-FE0F',
                sheet: [23, 5],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F481-1F3FF-200D-2640-FE0F',
                sheet: [23, 6],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-tipping-hand'
    },
    {
        name: 'San Marino Flag',
        unified: '1F1F8-1F1F2',
        sheet: [4, 32],
        shortName: 'flag-sm'
    },
    {
        name: 'Happy Person Raising One Hand',
        unified: '1F64B',
        sheet: [33, 6],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F64B-1F3FB',
                sheet: [33, 7],
                hidden: ['facebook']
            },
            {
                unified: '1F64B-1F3FC',
                sheet: [33, 8],
                hidden: ['facebook']
            },
            {
                unified: '1F64B-1F3FD',
                sheet: [33, 9],
                hidden: ['facebook']
            },
            {
                unified: '1F64B-1F3FE',
                sheet: [33, 10],
                hidden: ['facebook']
            },
            {
                unified: '1F64B-1F3FF',
                sheet: [33, 11],
                hidden: ['facebook']
            }
        ],
        shortName: 'raising_hand',
        obsoletedBy: '1F64B-200D-2640-FE0F'
    },
    {
        name: 'Senegal Flag',
        unified: '1F1F8-1F1F3',
        sheet: [4, 33],
        shortName: 'flag-sn'
    },
    {
        name: 'Man Raising Hand',
        unified: '1F64B-200D-2642-FE0F',
        sheet: [33, 0],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F64B-1F3FB-200D-2642-FE0F',
                sheet: [33, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FC-200D-2642-FE0F',
                sheet: [33, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FD-200D-2642-FE0F',
                sheet: [33, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FE-200D-2642-FE0F',
                sheet: [33, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FF-200D-2642-FE0F',
                sheet: [33, 5],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-raising-hand'
    },
    {
        name: 'Somalia Flag',
        unified: '1F1F8-1F1F4',
        sheet: [4, 34],
        shortName: 'flag-so'
    },
    {
        name: 'Woman Raising Hand',
        unified: '1F64B-200D-2640-FE0F',
        obsoletes: '1F64B',
        sheet: [32, 46],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F64B-1F3FB-200D-2640-FE0F',
                sheet: [32, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FC-200D-2640-FE0F',
                sheet: [32, 48],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FD-200D-2640-FE0F',
                sheet: [32, 49],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FE-200D-2640-FE0F',
                sheet: [32, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F64B-1F3FF-200D-2640-FE0F',
                sheet: [32, 51],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-raising-hand'
    },
    {
        name: 'Suriname Flag',
        unified: '1F1F8-1F1F7',
        sheet: [4, 35],
        shortName: 'flag-sr'
    },
    {
        name: 'Person Bowing Deeply',
        unified: '1F647',
        sheet: [32, 37],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F647-1F3FB',
                sheet: [32, 38],
                hidden: ['facebook']
            },
            {
                unified: '1F647-1F3FC',
                sheet: [32, 39],
                hidden: ['facebook']
            },
            {
                unified: '1F647-1F3FD',
                sheet: [32, 40],
                hidden: ['facebook']
            },
            {
                unified: '1F647-1F3FE',
                sheet: [32, 41],
                hidden: ['facebook']
            },
            {
                unified: '1F647-1F3FF',
                sheet: [32, 42],
                hidden: ['facebook']
            }
        ],
        shortName: 'bow',
        obsoletedBy: '1F647-200D-2642-FE0F'
    },
    {
        name: 'Man Bowing',
        unified: '1F647-200D-2642-FE0F',
        obsoletes: '1F647',
        sheet: [32, 31],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F647-1F3FB-200D-2642-FE0F',
                sheet: [32, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FC-200D-2642-FE0F',
                sheet: [32, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FD-200D-2642-FE0F',
                sheet: [32, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FE-200D-2642-FE0F',
                sheet: [32, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FF-200D-2642-FE0F',
                sheet: [32, 36],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-bowing'
    },
    {
        name: 'South Sudan Flag',
        unified: '1F1F8-1F1F8',
        sheet: [4, 36],
        shortName: 'flag-ss'
    },
    {
        name: 'Woman Bowing',
        unified: '1F647-200D-2640-FE0F',
        sheet: [32, 25],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F647-1F3FB-200D-2640-FE0F',
                sheet: [32, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FC-200D-2640-FE0F',
                sheet: [32, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FD-200D-2640-FE0F',
                sheet: [32, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FE-200D-2640-FE0F',
                sheet: [32, 29],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F647-1F3FF-200D-2640-FE0F',
                sheet: [32, 30],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-bowing'
    },
    {
        name: 'São Tomé & Príncipe Flag',
        unified: '1F1F8-1F1F9',
        sheet: [4, 37],
        shortName: 'flag-st'
    },
    {
        name: 'Face Palm',
        unified: '1F926',
        sheet: [38, 41],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F926-1F3FB',
                sheet: [38, 42],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FC',
                sheet: [38, 43],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FD',
                sheet: [38, 44],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FE',
                sheet: [38, 45],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FF',
                sheet: [38, 46],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'face_palm'
    },
    {
        name: 'El Salvador Flag',
        unified: '1F1F8-1F1FB',
        sheet: [4, 38],
        shortName: 'flag-sv'
    },
    {
        name: 'Man Facepalming',
        unified: '1F926-200D-2642-FE0F',
        sheet: [38, 35],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F926-1F3FB-200D-2642-FE0F',
                sheet: [38, 36],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FC-200D-2642-FE0F',
                sheet: [38, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FD-200D-2642-FE0F',
                sheet: [38, 38],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FE-200D-2642-FE0F',
                sheet: [38, 39],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FF-200D-2642-FE0F',
                sheet: [38, 40],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-facepalming'
    },
    {
        name: 'Sint Maarten Flag',
        unified: '1F1F8-1F1FD',
        sheet: [4, 39],
        shortName: 'flag-sx'
    },
    {
        name: 'Syria Flag',
        unified: '1F1F8-1F1FE',
        sheet: [4, 40],
        shortName: 'flag-sy'
    },
    {
        name: 'Woman Facepalming',
        unified: '1F926-200D-2640-FE0F',
        sheet: [38, 29],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F926-1F3FB-200D-2640-FE0F',
                sheet: [38, 30],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FC-200D-2640-FE0F',
                sheet: [38, 31],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FD-200D-2640-FE0F',
                sheet: [38, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FE-200D-2640-FE0F',
                sheet: [38, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F926-1F3FF-200D-2640-FE0F',
                sheet: [38, 34],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-facepalming'
    },
    {
        name: 'Shrug',
        unified: '1F937',
        sheet: [40, 6],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F937-1F3FB',
                sheet: [40, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FC',
                sheet: [40, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FD',
                sheet: [40, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FE',
                sheet: [40, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FF',
                sheet: [40, 11],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'shrug'
    },
    {
        name: 'Swaziland Flag',
        unified: '1F1F8-1F1FF',
        sheet: [4, 41],
        shortName: 'flag-sz'
    },
    {
        name: 'Tristan Da Cunha Flag',
        unified: '1F1F9-1F1E6',
        sheet: [4, 42],
        shortName: 'flag-ta'
    },
    {
        name: 'Man Shrugging',
        unified: '1F937-200D-2642-FE0F',
        sheet: [40, 0],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F937-1F3FB-200D-2642-FE0F',
                sheet: [40, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FC-200D-2642-FE0F',
                sheet: [40, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FD-200D-2642-FE0F',
                sheet: [40, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FE-200D-2642-FE0F',
                sheet: [40, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FF-200D-2642-FE0F',
                sheet: [40, 5],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-shrugging'
    },
    {
        name: 'Woman Shrugging',
        unified: '1F937-200D-2640-FE0F',
        sheet: [39, 46],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F937-1F3FB-200D-2640-FE0F',
                sheet: [39, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FC-200D-2640-FE0F',
                sheet: [39, 48],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FD-200D-2640-FE0F',
                sheet: [39, 49],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FE-200D-2640-FE0F',
                sheet: [39, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F937-1F3FF-200D-2640-FE0F',
                sheet: [39, 51],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-shrugging'
    },
    {
        name: 'Turks & Caicos Islands Flag',
        unified: '1F1F9-1F1E8',
        sheet: [4, 43],
        shortName: 'flag-tc'
    },
    {
        name: 'Face Massage',
        unified: '1F486',
        sheet: [24, 10],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F486-1F3FB',
                sheet: [24, 11],
                hidden: ['facebook']
            },
            {
                unified: '1F486-1F3FC',
                sheet: [24, 12],
                hidden: ['facebook']
            },
            {
                unified: '1F486-1F3FD',
                sheet: [24, 13],
                hidden: ['facebook']
            },
            {
                unified: '1F486-1F3FE',
                sheet: [24, 14],
                hidden: ['facebook']
            },
            {
                unified: '1F486-1F3FF',
                sheet: [24, 15],
                hidden: ['facebook']
            }
        ],
        shortName: 'massage',
        obsoletedBy: '1F486-200D-2640-FE0F'
    },
    {
        name: 'Chad Flag',
        unified: '1F1F9-1F1E9',
        sheet: [4, 44],
        shortName: 'flag-td'
    },
    {
        name: 'Man Getting Massage',
        unified: '1F486-200D-2642-FE0F',
        sheet: [24, 4],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F486-1F3FB-200D-2642-FE0F',
                sheet: [24, 5],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FC-200D-2642-FE0F',
                sheet: [24, 6],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FD-200D-2642-FE0F',
                sheet: [24, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FE-200D-2642-FE0F',
                sheet: [24, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FF-200D-2642-FE0F',
                sheet: [24, 9],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-getting-massage'
    },
    {
        name: 'French Southern Territories Flag',
        unified: '1F1F9-1F1EB',
        sheet: [4, 45],
        hidden: ['google'],
        shortName: 'flag-tf'
    },
    {
        name: 'Woman Getting Massage',
        unified: '1F486-200D-2640-FE0F',
        obsoletes: '1F486',
        sheet: [23, 50],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F486-1F3FB-200D-2640-FE0F',
                sheet: [23, 51],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FC-200D-2640-FE0F',
                sheet: [24, 0],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FD-200D-2640-FE0F',
                sheet: [24, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FE-200D-2640-FE0F',
                sheet: [24, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F486-1F3FF-200D-2640-FE0F',
                sheet: [24, 3],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-getting-massage'
    },
    {
        name: 'Togo Flag',
        unified: '1F1F9-1F1EC',
        sheet: [4, 46],
        shortName: 'flag-tg'
    },
    {
        name: 'Haircut',
        unified: '1F487',
        sheet: [24, 28],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F487-1F3FB',
                sheet: [24, 29],
                hidden: ['facebook']
            },
            {
                unified: '1F487-1F3FC',
                sheet: [24, 30],
                hidden: ['facebook']
            },
            {
                unified: '1F487-1F3FD',
                sheet: [24, 31],
                hidden: ['facebook']
            },
            {
                unified: '1F487-1F3FE',
                sheet: [24, 32],
                hidden: ['facebook']
            },
            {
                unified: '1F487-1F3FF',
                sheet: [24, 33],
                hidden: ['facebook']
            }
        ],
        shortName: 'haircut',
        obsoletedBy: '1F487-200D-2640-FE0F'
    },
    {
        name: 'Thailand Flag',
        unified: '1F1F9-1F1ED',
        sheet: [4, 47],
        shortName: 'flag-th'
    },
    {
        name: 'Man Getting Haircut',
        unified: '1F487-200D-2642-FE0F',
        sheet: [24, 22],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F487-1F3FB-200D-2642-FE0F',
                sheet: [24, 23],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FC-200D-2642-FE0F',
                sheet: [24, 24],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FD-200D-2642-FE0F',
                sheet: [24, 25],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FE-200D-2642-FE0F',
                sheet: [24, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FF-200D-2642-FE0F',
                sheet: [24, 27],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-getting-haircut'
    },
    {
        name: 'Tajikistan Flag',
        unified: '1F1F9-1F1EF',
        sheet: [4, 48],
        shortName: 'flag-tj'
    },
    {
        name: 'Tokelau Flag',
        unified: '1F1F9-1F1F0',
        sheet: [4, 49],
        shortName: 'flag-tk'
    },
    {
        name: 'Woman Getting Haircut',
        unified: '1F487-200D-2640-FE0F',
        obsoletes: '1F487',
        sheet: [24, 16],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F487-1F3FB-200D-2640-FE0F',
                sheet: [24, 17],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FC-200D-2640-FE0F',
                sheet: [24, 18],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FD-200D-2640-FE0F',
                sheet: [24, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FE-200D-2640-FE0F',
                sheet: [24, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F487-1F3FF-200D-2640-FE0F',
                sheet: [24, 21],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-getting-haircut'
    },
    {
        name: 'Pedestrian',
        unified: '1F6B6',
        sheet: [36, 21],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F6B6-1F3FB',
                sheet: [36, 22],
                hidden: ['facebook']
            },
            {
                unified: '1F6B6-1F3FC',
                sheet: [36, 23],
                hidden: ['facebook']
            },
            {
                unified: '1F6B6-1F3FD',
                sheet: [36, 24],
                hidden: ['facebook']
            },
            {
                unified: '1F6B6-1F3FE',
                sheet: [36, 25],
                hidden: ['facebook']
            },
            {
                unified: '1F6B6-1F3FF',
                sheet: [36, 26],
                hidden: ['facebook']
            }
        ],
        shortName: 'walking',
        obsoletedBy: '1F6B6-200D-2642-FE0F'
    },
    {
        name: 'Timor-Leste Flag',
        unified: '1F1F9-1F1F1',
        sheet: [4, 50],
        shortName: 'flag-tl'
    },
    {
        name: 'Man Walking',
        unified: '1F6B6-200D-2642-FE0F',
        obsoletes: '1F6B6',
        sheet: [36, 15],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6B6-1F3FB-200D-2642-FE0F',
                sheet: [36, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FC-200D-2642-FE0F',
                sheet: [36, 17],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FD-200D-2642-FE0F',
                sheet: [36, 18],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FE-200D-2642-FE0F',
                sheet: [36, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FF-200D-2642-FE0F',
                sheet: [36, 20],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-walking'
    },
    {
        name: 'Turkmenistan Flag',
        unified: '1F1F9-1F1F2',
        sheet: [4, 51],
        shortName: 'flag-tm'
    },
    {
        name: 'Woman Walking',
        unified: '1F6B6-200D-2640-FE0F',
        sheet: [36, 9],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6B6-1F3FB-200D-2640-FE0F',
                sheet: [36, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FC-200D-2640-FE0F',
                sheet: [36, 11],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FD-200D-2640-FE0F',
                sheet: [36, 12],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FE-200D-2640-FE0F',
                sheet: [36, 13],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B6-1F3FF-200D-2640-FE0F',
                sheet: [36, 14],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-walking'
    },
    {
        name: 'Tunisia Flag',
        unified: '1F1F9-1F1F3',
        sheet: [5, 0],
        shortName: 'flag-tn'
    },
    {
        name: 'Runner',
        unified: '1F3C3',
        sheet: [9, 46],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F3C3-1F3FB',
                sheet: [9, 47],
                hidden: ['facebook']
            },
            {
                unified: '1F3C3-1F3FC',
                sheet: [9, 48],
                hidden: ['facebook']
            },
            {
                unified: '1F3C3-1F3FD',
                sheet: [9, 49],
                hidden: ['facebook']
            },
            {
                unified: '1F3C3-1F3FE',
                sheet: [9, 50],
                hidden: ['facebook']
            },
            {
                unified: '1F3C3-1F3FF',
                sheet: [9, 51],
                hidden: ['facebook']
            }
        ],
        shortNames: ['running'],
        shortName: 'runner',
        obsoletedBy: '1F3C3-200D-2642-FE0F'
    },
    {
        name: 'Tonga Flag',
        unified: '1F1F9-1F1F4',
        sheet: [5, 1],
        shortName: 'flag-to'
    },
    {
        name: 'Man Running',
        unified: '1F3C3-200D-2642-FE0F',
        obsoletes: '1F3C3',
        sheet: [9, 40],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F3C3-1F3FB-200D-2642-FE0F',
                sheet: [9, 41],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FC-200D-2642-FE0F',
                sheet: [9, 42],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FD-200D-2642-FE0F',
                sheet: [9, 43],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FE-200D-2642-FE0F',
                sheet: [9, 44],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FF-200D-2642-FE0F',
                sheet: [9, 45],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-running'
    },
    {
        name: 'Turkey Flag',
        unified: '1F1F9-1F1F7',
        sheet: [5, 2],
        shortName: 'flag-tr'
    },
    {
        name: 'Trinidad & Tobago Flag',
        unified: '1F1F9-1F1F9',
        sheet: [5, 3],
        shortName: 'flag-tt'
    },
    {
        name: 'Woman Running',
        unified: '1F3C3-200D-2640-FE0F',
        sheet: [9, 34],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F3C3-1F3FB-200D-2640-FE0F',
                sheet: [9, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FC-200D-2640-FE0F',
                sheet: [9, 36],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FD-200D-2640-FE0F',
                sheet: [9, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FE-200D-2640-FE0F',
                sheet: [9, 38],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C3-1F3FF-200D-2640-FE0F',
                sheet: [9, 39],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-running'
    },
    {
        name: 'Tuvalu Flag',
        unified: '1F1F9-1F1FB',
        sheet: [5, 4],
        shortName: 'flag-tv'
    },
    {
        name: 'Dancer',
        unified: '1F483',
        keywords: [
            'female',
            'girl',
            'woman',
            'fun'
        ],
        sheet: [23, 37],
        skinVariations: [
            {
                unified: '1F483-1F3FB',
                sheet: [23, 38]
            },
            {
                unified: '1F483-1F3FC',
                sheet: [23, 39]
            },
            {
                unified: '1F483-1F3FD',
                sheet: [23, 40]
            },
            {
                unified: '1F483-1F3FE',
                sheet: [23, 41]
            },
            {
                unified: '1F483-1F3FF',
                sheet: [23, 42]
            }
        ],
        shortName: 'dancer'
    },
    {
        name: 'Taiwan Flag',
        unified: '1F1F9-1F1FC',
        sheet: [5, 5],
        shortName: 'flag-tw'
    },
    {
        name: 'Man Dancing',
        unified: '1F57A',
        keywords: [
            'male',
            'boy',
            'fun',
            'dancer'
        ],
        sheet: [29, 21],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F57A-1F3FB',
                sheet: [29, 22],
                hidden: ['messenger']
            },
            {
                unified: '1F57A-1F3FC',
                sheet: [29, 23],
                hidden: ['messenger']
            },
            {
                unified: '1F57A-1F3FD',
                sheet: [29, 24],
                hidden: ['messenger']
            },
            {
                unified: '1F57A-1F3FE',
                sheet: [29, 25],
                hidden: ['messenger']
            },
            {
                unified: '1F57A-1F3FF',
                sheet: [29, 26],
                hidden: ['messenger']
            }
        ],
        shortName: 'man_dancing'
    },
    {
        name: 'Woman with Bunny Ears',
        unified: '1F46F',
        sheet: [21, 1],
        hidden: ['facebook'],
        shortName: 'dancers',
        obsoletedBy: '1F46F-200D-2640-FE0F'
    },
    {
        name: 'Tanzania Flag',
        unified: '1F1F9-1F1FF',
        sheet: [5, 6],
        shortName: 'flag-tz'
    },
    {
        name: 'Ukraine Flag',
        unified: '1F1FA-1F1E6',
        sheet: [5, 7],
        shortName: 'flag-ua'
    },
    {
        name: 'Man with Bunny Ears Partying',
        unified: '1F46F-200D-2642-FE0F',
        sheet: [21, 0],
        hidden: ['messenger'],
        shortName: 'man-with-bunny-ears-partying'
    },
    {
        name: 'Woman with Bunny Ears Partying',
        unified: '1F46F-200D-2640-FE0F',
        obsoletes: '1F46F',
        sheet: [20, 51],
        hidden: ['messenger'],
        shortName: 'woman-with-bunny-ears-partying'
    },
    {
        name: 'Uganda Flag',
        unified: '1F1FA-1F1EC',
        sheet: [5, 8],
        shortName: 'flag-ug'
    },
    {
        name: 'U.s. Outlying Islands Flag',
        unified: '1F1FA-1F1F2',
        sheet: [5, 9],
        shortName: 'flag-um'
    },
    {
        name: 'Person in Steamy Room',
        unified: '1F9D6',
        sheet: [43, 40],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D6-1F3FB',
                sheet: [43, 41],
                hidden: ['messenger']
            },
            {
                unified: '1F9D6-1F3FC',
                sheet: [43, 42],
                hidden: ['messenger']
            },
            {
                unified: '1F9D6-1F3FD',
                sheet: [43, 43],
                hidden: ['messenger']
            },
            {
                unified: '1F9D6-1F3FE',
                sheet: [43, 44],
                hidden: ['messenger']
            },
            {
                unified: '1F9D6-1F3FF',
                sheet: [43, 45],
                hidden: ['messenger']
            }
        ],
        shortName: 'person_in_steamy_room',
        obsoletedBy: '1F9D6-200D-2642-FE0F'
    },
    {
        name: 'Woman in Steamy Room',
        unified: '1F9D6-200D-2640-FE0F',
        keywords: [
            'female',
            'woman',
            'spa',
            'steamroom',
            'sauna'
        ],
        sheet: [43, 28],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D6-1F3FB-200D-2640-FE0F',
                sheet: [43, 29],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FC-200D-2640-FE0F',
                sheet: [43, 30],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FD-200D-2640-FE0F',
                sheet: [43, 31],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FE-200D-2640-FE0F',
                sheet: [43, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FF-200D-2640-FE0F',
                sheet: [43, 33],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman_in_steamy_room'
    },
    {
        name: 'United Nations Flag',
        unified: '1F1FA-1F1F3',
        sheet: [5, 10],
        hidden: ['apple', 'messenger'],
        shortName: 'flag-un'
    },
    {
        name: 'United States Flag',
        unified: '1F1FA-1F1F8',
        keywords: [
            'united',
            'states',
            'america',
            'flag',
            'nation',
            'country',
            'banner'
        ],
        sheet: [5, 11],
        shortNames: ['flag-us'],
        shortName: 'us'
    },
    {
        name: 'Man in Steamy Room',
        unified: '1F9D6-200D-2642-FE0F',
        obsoletes: '1F9D6',
        keywords: [
            'male',
            'man',
            'spa',
            'steamroom',
            'sauna'
        ],
        sheet: [43, 34],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D6-1F3FB-200D-2642-FE0F',
                sheet: [43, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FC-200D-2642-FE0F',
                sheet: [43, 36],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FD-200D-2642-FE0F',
                sheet: [43, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FE-200D-2642-FE0F',
                sheet: [43, 38],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D6-1F3FF-200D-2642-FE0F',
                sheet: [43, 39],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man_in_steamy_room'
    },
    {
        name: 'Person Climbing',
        unified: '1F9D7',
        sheet: [44, 6],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D7-1F3FB',
                sheet: [44, 7],
                hidden: ['messenger']
            },
            {
                unified: '1F9D7-1F3FC',
                sheet: [44, 8],
                hidden: ['messenger']
            },
            {
                unified: '1F9D7-1F3FD',
                sheet: [44, 9],
                hidden: ['messenger']
            },
            {
                unified: '1F9D7-1F3FE',
                sheet: [44, 10],
                hidden: ['messenger']
            },
            {
                unified: '1F9D7-1F3FF',
                sheet: [44, 11],
                hidden: ['messenger']
            }
        ],
        shortName: 'person_climbing',
        obsoletedBy: '1F9D7-200D-2640-FE0F'
    },
    {
        name: 'Uruguay Flag',
        unified: '1F1FA-1F1FE',
        sheet: [5, 12],
        shortName: 'flag-uy'
    },
    {
        name: 'Woman Climbing',
        unified: '1F9D7-200D-2640-FE0F',
        obsoletes: '1F9D7',
        sheet: [43, 46],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D7-1F3FB-200D-2640-FE0F',
                sheet: [43, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FC-200D-2640-FE0F',
                sheet: [43, 48],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FD-200D-2640-FE0F',
                sheet: [43, 49],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FE-200D-2640-FE0F',
                sheet: [43, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FF-200D-2640-FE0F',
                sheet: [43, 51],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman_climbing'
    },
    {
        name: 'Uzbekistan Flag',
        unified: '1F1FA-1F1FF',
        sheet: [5, 13],
        shortName: 'flag-uz'
    },
    {
        name: 'Man Climbing',
        unified: '1F9D7-200D-2642-FE0F',
        sheet: [44, 0],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D7-1F3FB-200D-2642-FE0F',
                sheet: [44, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FC-200D-2642-FE0F',
                sheet: [44, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FD-200D-2642-FE0F',
                sheet: [44, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FE-200D-2642-FE0F',
                sheet: [44, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D7-1F3FF-200D-2642-FE0F',
                sheet: [44, 5],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man_climbing'
    },
    {
        name: 'Vatican City Flag',
        unified: '1F1FB-1F1E6',
        sheet: [5, 14],
        shortName: 'flag-va'
    },
    {
        name: 'Person in Lotus Position',
        unified: '1F9D8',
        sheet: [44, 24],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D8-1F3FB',
                sheet: [44, 25],
                hidden: ['messenger']
            },
            {
                unified: '1F9D8-1F3FC',
                sheet: [44, 26],
                hidden: ['messenger']
            },
            {
                unified: '1F9D8-1F3FD',
                sheet: [44, 27],
                hidden: ['messenger']
            },
            {
                unified: '1F9D8-1F3FE',
                sheet: [44, 28],
                hidden: ['messenger']
            },
            {
                unified: '1F9D8-1F3FF',
                sheet: [44, 29],
                hidden: ['messenger']
            }
        ],
        shortName: 'person_in_lotus_position',
        obsoletedBy: '1F9D8-200D-2640-FE0F'
    },
    {
        name: 'St. Vincent & Grenadines Flag',
        unified: '1F1FB-1F1E8',
        sheet: [5, 15],
        shortName: 'flag-vc'
    },
    {
        name: 'Venezuela Flag',
        unified: '1F1FB-1F1EA',
        sheet: [5, 16],
        shortName: 'flag-ve'
    },
    {
        name: 'Woman in Lotus Position',
        unified: '1F9D8-200D-2640-FE0F',
        obsoletes: '1F9D8',
        keywords: [
            'woman',
            'female',
            'meditation',
            'yoga',
            'serenity',
            'zen',
            'mindfulness'
        ],
        sheet: [44, 12],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D8-1F3FB-200D-2640-FE0F',
                sheet: [44, 13],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FC-200D-2640-FE0F',
                sheet: [44, 14],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FD-200D-2640-FE0F',
                sheet: [44, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FE-200D-2640-FE0F',
                sheet: [44, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FF-200D-2640-FE0F',
                sheet: [44, 17],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman_in_lotus_position'
    },
    {
        name: 'Man in Lotus Position',
        unified: '1F9D8-200D-2642-FE0F',
        keywords: [
            'man',
            'male',
            'meditation',
            'yoga',
            'serenity',
            'zen',
            'mindfulness'
        ],
        sheet: [44, 18],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F9D8-1F3FB-200D-2642-FE0F',
                sheet: [44, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FC-200D-2642-FE0F',
                sheet: [44, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FD-200D-2642-FE0F',
                sheet: [44, 21],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FE-200D-2642-FE0F',
                sheet: [44, 22],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F9D8-1F3FF-200D-2642-FE0F',
                sheet: [44, 23],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man_in_lotus_position'
    },
    {
        name: 'British Virgin Islands Flag',
        unified: '1F1FB-1F1EC',
        sheet: [5, 17],
        shortName: 'flag-vg'
    },
    {
        name: 'U.s. Virgin Islands Flag',
        unified: '1F1FB-1F1EE',
        sheet: [5, 18],
        shortName: 'flag-vi'
    },
    {
        name: 'Bath',
        unified: '1F6C0',
        keywords: [
            'clean',
            'shower',
            'bathroom'
        ],
        sheet: [36, 36],
        skinVariations: [
            {
                unified: '1F6C0-1F3FB',
                sheet: [36, 37]
            },
            {
                unified: '1F6C0-1F3FC',
                sheet: [36, 38]
            },
            {
                unified: '1F6C0-1F3FD',
                sheet: [36, 39]
            },
            {
                unified: '1F6C0-1F3FE',
                sheet: [36, 40]
            },
            {
                unified: '1F6C0-1F3FF',
                sheet: [36, 41]
            }
        ],
        shortName: 'bath'
    },
    {
        name: 'Sleeping Accommodation',
        unified: '1F6CC',
        sheet: [36, 48],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6CC-1F3FB',
                sheet: [36, 49],
                hidden: ['messenger']
            },
            {
                unified: '1F6CC-1F3FC',
                sheet: [36, 50],
                hidden: ['messenger']
            },
            {
                unified: '1F6CC-1F3FD',
                sheet: [36, 51],
                hidden: ['messenger']
            },
            {
                unified: '1F6CC-1F3FE',
                sheet: [37, 0],
                hidden: ['messenger']
            },
            {
                unified: '1F6CC-1F3FF',
                sheet: [37, 1],
                hidden: ['messenger']
            }
        ],
        shortName: 'sleeping_accommodation'
    },
    {
        name: 'Vietnam Flag',
        unified: '1F1FB-1F1F3',
        sheet: [5, 19],
        shortName: 'flag-vn'
    },
    {
        name: 'Man in Business Suit Levitating',
        unified: '1F574-FE0F',
        sheet: [28, 45],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F574-1F3FB',
                sheet: [28, 46],
                hidden: ['messenger']
            },
            {
                unified: '1F574-1F3FC',
                sheet: [28, 47],
                hidden: ['messenger']
            },
            {
                unified: '1F574-1F3FD',
                sheet: [28, 48],
                hidden: ['messenger']
            },
            {
                unified: '1F574-1F3FE',
                sheet: [28, 49],
                hidden: ['messenger']
            },
            {
                unified: '1F574-1F3FF',
                sheet: [28, 50],
                hidden: ['messenger']
            }
        ],
        shortName: 'man_in_business_suit_levitating'
    },
    {
        name: 'Vanuatu Flag',
        unified: '1F1FB-1F1FA',
        sheet: [5, 20],
        shortName: 'flag-vu'
    },
    {
        name: 'Wallis & Futuna Flag',
        unified: '1F1FC-1F1EB',
        sheet: [5, 21],
        hidden: ['google'],
        shortName: 'flag-wf'
    },
    {
        name: 'Speaking Head in Silhouette',
        unified: '1F5E3-FE0F',
        sheet: [30, 14],
        hidden: ['messenger'],
        shortName: 'speaking_head_in_silhouette'
    },
    {
        name: 'Bust in Silhouette',
        unified: '1F464',
        keywords: [
            'user',
            'person',
            'human'
        ],
        sheet: [15, 40],
        shortName: 'bust_in_silhouette'
    },
    {
        name: 'Samoa Flag',
        unified: '1F1FC-1F1F8',
        sheet: [5, 22],
        shortName: 'flag-ws'
    },
    {
        name: 'Busts in Silhouette',
        unified: '1F465',
        keywords: [
            'user',
            'person',
            'human',
            'group',
            'team'
        ],
        sheet: [15, 41],
        shortName: 'busts_in_silhouette'
    },
    {
        name: 'Kosovo Flag',
        unified: '1F1FD-1F1F0',
        sheet: [5, 23],
        hidden: ['google'],
        shortName: 'flag-xk'
    },
    {
        name: 'Fencer',
        unified: '1F93A',
        sheet: [40, 48],
        hidden: ['messenger'],
        shortName: 'fencer'
    },
    {
        name: 'Yemen Flag',
        unified: '1F1FE-1F1EA',
        sheet: [5, 24],
        shortName: 'flag-ye'
    },
    {
        name: 'Mayotte Flag',
        unified: '1F1FE-1F1F9',
        sheet: [5, 25],
        hidden: ['google'],
        shortName: 'flag-yt'
    },
    {
        name: 'Horse Racing',
        unified: '1F3C7',
        keywords: [
            'animal',
            'betting',
            'competition',
            'gambling',
            'luck'
        ],
        sheet: [10, 20],
        skinVariations: [
            {
                unified: '1F3C7-1F3FB',
                sheet: [10, 21]
            },
            {
                unified: '1F3C7-1F3FC',
                sheet: [10, 22]
            },
            {
                unified: '1F3C7-1F3FD',
                sheet: [10, 23]
            },
            {
                unified: '1F3C7-1F3FE',
                sheet: [10, 24]
            },
            {
                unified: '1F3C7-1F3FF',
                sheet: [10, 25]
            }
        ],
        shortName: 'horse_racing'
    },
    {
        name: 'South Africa Flag',
        unified: '1F1FF-1F1E6',
        sheet: [5, 26],
        shortName: 'flag-za'
    },
    {
        name: 'Skier',
        unified: '26F7-FE0F',
        keywords: [
            'sports',
            'winter',
            'snow'
        ],
        sheet: [48, 44],
        hidden: ['messenger'],
        shortName: 'skier'
    },
    {
        name: 'Zambia Flag',
        unified: '1F1FF-1F1F2',
        sheet: [5, 27],
        shortName: 'flag-zm'
    },
    {
        name: 'Snowboarder',
        unified: '1F3C2',
        keywords: ['sports', 'winter'],
        sheet: [9, 28],
        skinVariations: [
            {
                unified: '1F3C2-1F3FB',
                sheet: [9, 29]
            },
            {
                unified: '1F3C2-1F3FC',
                sheet: [9, 30]
            },
            {
                unified: '1F3C2-1F3FD',
                sheet: [9, 31]
            },
            {
                unified: '1F3C2-1F3FE',
                sheet: [9, 32]
            },
            {
                unified: '1F3C2-1F3FF',
                sheet: [9, 33]
            }
        ],
        shortName: 'snowboarder'
    },
    {
        name: 'Golfer',
        unified: '1F3CC-FE0F',
        sheet: [11, 24],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F3CC-1F3FB',
                sheet: [11, 25],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FC',
                sheet: [11, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FD',
                sheet: [11, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FE',
                sheet: [11, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FF',
                sheet: [11, 29],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'golfer',
        obsoletedBy: '1F3CC-FE0F-200D-2642-FE0F'
    },
    {
        name: 'Zimbabwe Flag',
        unified: '1F1FF-1F1FC',
        sheet: [5, 28],
        shortName: 'flag-zw'
    },
    {
        name: 'Man Golfing',
        unified: '1F3CC-FE0F-200D-2642-FE0F',
        obsoletes: '1F3CC-FE0F',
        sheet: [11, 18],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F3CC-1F3FB-200D-2642-FE0F',
                sheet: [11, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FC-200D-2642-FE0F',
                sheet: [11, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FD-200D-2642-FE0F',
                sheet: [11, 21],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FE-200D-2642-FE0F',
                sheet: [11, 22],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FF-200D-2642-FE0F',
                sheet: [11, 23],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-golfing'
    },
    {
        name: 'England Flag',
        unified: '1F3F4-E0067-E0062-E0065-E006E-E0067-E007F',
        sheet: [12, 16],
        hidden: ['messenger'],
        shortName: 'flag-england'
    },
    {
        name: 'Woman Golfing',
        unified: '1F3CC-FE0F-200D-2640-FE0F',
        sheet: [11, 12],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F3CC-1F3FB-200D-2640-FE0F',
                sheet: [11, 13],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FC-200D-2640-FE0F',
                sheet: [11, 14],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FD-200D-2640-FE0F',
                sheet: [11, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FE-200D-2640-FE0F',
                sheet: [11, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CC-1F3FF-200D-2640-FE0F',
                sheet: [11, 17],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-golfing'
    },
    {
        name: 'Scotland Flag',
        unified: '1F3F4-E0067-E0062-E0073-E0063-E0074-E007F',
        sheet: [12, 17],
        hidden: ['messenger'],
        shortName: 'flag-scotland'
    },
    {
        name: 'Wales Flag',
        unified: '1F3F4-E0067-E0062-E0077-E006C-E0073-E007F',
        sheet: [12, 18],
        hidden: ['messenger'],
        shortName: 'flag-wales'
    },
    {
        name: 'Surfer',
        unified: '1F3C4',
        sheet: [10, 12],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F3C4-1F3FB',
                sheet: [10, 13],
                hidden: ['facebook']
            },
            {
                unified: '1F3C4-1F3FC',
                sheet: [10, 14],
                hidden: ['facebook']
            },
            {
                unified: '1F3C4-1F3FD',
                sheet: [10, 15],
                hidden: ['facebook']
            },
            {
                unified: '1F3C4-1F3FE',
                sheet: [10, 16],
                hidden: ['facebook']
            },
            {
                unified: '1F3C4-1F3FF',
                sheet: [10, 17],
                hidden: ['facebook']
            }
        ],
        shortName: 'surfer',
        obsoletedBy: '1F3C4-200D-2642-FE0F'
    },
    {
        name: 'Man Surfing',
        unified: '1F3C4-200D-2642-FE0F',
        obsoletes: '1F3C4',
        sheet: [10, 6],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F3C4-1F3FB-200D-2642-FE0F',
                sheet: [10, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FC-200D-2642-FE0F',
                sheet: [10, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FD-200D-2642-FE0F',
                sheet: [10, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FE-200D-2642-FE0F',
                sheet: [10, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FF-200D-2642-FE0F',
                sheet: [10, 11],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-surfing'
    },
    {
        name: 'Woman Surfing',
        unified: '1F3C4-200D-2640-FE0F',
        sheet: [10, 0],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F3C4-1F3FB-200D-2640-FE0F',
                sheet: [10, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FC-200D-2640-FE0F',
                sheet: [10, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FD-200D-2640-FE0F',
                sheet: [10, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FE-200D-2640-FE0F',
                sheet: [10, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3C4-1F3FF-200D-2640-FE0F',
                sheet: [10, 5],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-surfing'
    },
    {
        name: 'Rowboat',
        unified: '1F6A3',
        sheet: [35, 3],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F6A3-1F3FB',
                sheet: [35, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FC',
                sheet: [35, 5],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FD',
                sheet: [35, 6],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FE',
                sheet: [35, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FF',
                sheet: [35, 8],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'rowboat',
        obsoletedBy: '1F6A3-200D-2642-FE0F'
    },
    {
        name: 'Man Rowing Boat',
        unified: '1F6A3-200D-2642-FE0F',
        obsoletes: '1F6A3',
        sheet: [34, 49],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6A3-1F3FB-200D-2642-FE0F',
                sheet: [34, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FC-200D-2642-FE0F',
                sheet: [34, 51],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FD-200D-2642-FE0F',
                sheet: [35, 0],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FE-200D-2642-FE0F',
                sheet: [35, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FF-200D-2642-FE0F',
                sheet: [35, 2],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-rowing-boat'
    },
    {
        name: 'Woman Rowing Boat',
        unified: '1F6A3-200D-2640-FE0F',
        sheet: [34, 43],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6A3-1F3FB-200D-2640-FE0F',
                sheet: [34, 44],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FC-200D-2640-FE0F',
                sheet: [34, 45],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FD-200D-2640-FE0F',
                sheet: [34, 46],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FE-200D-2640-FE0F',
                sheet: [34, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6A3-1F3FF-200D-2640-FE0F',
                sheet: [34, 48],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-rowing-boat'
    },
    {
        name: 'Swimmer',
        unified: '1F3CA',
        sheet: [10, 40],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F3CA-1F3FB',
                sheet: [10, 41],
                hidden: ['facebook']
            },
            {
                unified: '1F3CA-1F3FC',
                sheet: [10, 42],
                hidden: ['facebook']
            },
            {
                unified: '1F3CA-1F3FD',
                sheet: [10, 43],
                hidden: ['facebook']
            },
            {
                unified: '1F3CA-1F3FE',
                sheet: [10, 44],
                hidden: ['facebook']
            },
            {
                unified: '1F3CA-1F3FF',
                sheet: [10, 45],
                hidden: ['facebook']
            }
        ],
        shortName: 'swimmer',
        obsoletedBy: '1F3CA-200D-2642-FE0F'
    },
    {
        name: 'Man Swimming',
        unified: '1F3CA-200D-2642-FE0F',
        obsoletes: '1F3CA',
        sheet: [10, 34],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F3CA-1F3FB-200D-2642-FE0F',
                sheet: [10, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FC-200D-2642-FE0F',
                sheet: [10, 36],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FD-200D-2642-FE0F',
                sheet: [10, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FE-200D-2642-FE0F',
                sheet: [10, 38],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FF-200D-2642-FE0F',
                sheet: [10, 39],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-swimming'
    },
    {
        name: 'Woman Swimming',
        unified: '1F3CA-200D-2640-FE0F',
        sheet: [10, 28],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F3CA-1F3FB-200D-2640-FE0F',
                sheet: [10, 29],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FC-200D-2640-FE0F',
                sheet: [10, 30],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FD-200D-2640-FE0F',
                sheet: [10, 31],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FE-200D-2640-FE0F',
                sheet: [10, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CA-1F3FF-200D-2640-FE0F',
                sheet: [10, 33],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-swimming'
    },
    {
        name: 'Person with Ball',
        unified: '26F9-FE0F',
        sheet: [49, 6],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '26F9-1F3FB',
                sheet: [49, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FC',
                sheet: [49, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FD',
                sheet: [49, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FE',
                sheet: [49, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FF',
                sheet: [49, 11],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'person_with_ball',
        obsoletedBy: '26F9-FE0F-200D-2642-FE0F'
    },
    {
        name: 'Man Bouncing Ball',
        unified: '26F9-FE0F-200D-2642-FE0F',
        obsoletes: '26F9-FE0F',
        sheet: [49, 0],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '26F9-1F3FB-200D-2642-FE0F',
                sheet: [49, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FC-200D-2642-FE0F',
                sheet: [49, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FD-200D-2642-FE0F',
                sheet: [49, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FE-200D-2642-FE0F',
                sheet: [49, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FF-200D-2642-FE0F',
                sheet: [49, 5],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-bouncing-ball'
    },
    {
        name: 'Woman Bouncing Ball',
        unified: '26F9-FE0F-200D-2640-FE0F',
        sheet: [48, 46],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '26F9-1F3FB-200D-2640-FE0F',
                sheet: [48, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FC-200D-2640-FE0F',
                sheet: [48, 48],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FD-200D-2640-FE0F',
                sheet: [48, 49],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FE-200D-2640-FE0F',
                sheet: [48, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '26F9-1F3FF-200D-2640-FE0F',
                sheet: [48, 51],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-bouncing-ball'
    },
    {
        name: 'Weight Lifter',
        unified: '1F3CB-FE0F',
        sheet: [11, 6],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F3CB-1F3FB',
                sheet: [11, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FC',
                sheet: [11, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FD',
                sheet: [11, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FE',
                sheet: [11, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FF',
                sheet: [11, 11],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'weight_lifter',
        obsoletedBy: '1F3CB-FE0F-200D-2642-FE0F'
    },
    {
        name: 'Man Lifting Weights',
        unified: '1F3CB-FE0F-200D-2642-FE0F',
        obsoletes: '1F3CB-FE0F',
        sheet: [11, 0],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F3CB-1F3FB-200D-2642-FE0F',
                sheet: [11, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FC-200D-2642-FE0F',
                sheet: [11, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FD-200D-2642-FE0F',
                sheet: [11, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FE-200D-2642-FE0F',
                sheet: [11, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FF-200D-2642-FE0F',
                sheet: [11, 5],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-lifting-weights'
    },
    {
        name: 'Woman Lifting Weights',
        unified: '1F3CB-FE0F-200D-2640-FE0F',
        sheet: [10, 46],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F3CB-1F3FB-200D-2640-FE0F',
                sheet: [10, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FC-200D-2640-FE0F',
                sheet: [10, 48],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FD-200D-2640-FE0F',
                sheet: [10, 49],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FE-200D-2640-FE0F',
                sheet: [10, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F3CB-1F3FF-200D-2640-FE0F',
                sheet: [10, 51],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-lifting-weights'
    },
    {
        name: 'Bicyclist',
        unified: '1F6B4',
        sheet: [35, 37],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F6B4-1F3FB',
                sheet: [35, 38],
                hidden: ['facebook']
            },
            {
                unified: '1F6B4-1F3FC',
                sheet: [35, 39],
                hidden: ['facebook']
            },
            {
                unified: '1F6B4-1F3FD',
                sheet: [35, 40],
                hidden: ['facebook']
            },
            {
                unified: '1F6B4-1F3FE',
                sheet: [35, 41],
                hidden: ['facebook']
            },
            {
                unified: '1F6B4-1F3FF',
                sheet: [35, 42],
                hidden: ['facebook']
            }
        ],
        shortName: 'bicyclist',
        obsoletedBy: '1F6B4-200D-2642-FE0F'
    },
    {
        name: 'Man Biking',
        unified: '1F6B4-200D-2642-FE0F',
        obsoletes: '1F6B4',
        sheet: [35, 31],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6B4-1F3FB-200D-2642-FE0F',
                sheet: [35, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FC-200D-2642-FE0F',
                sheet: [35, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FD-200D-2642-FE0F',
                sheet: [35, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FE-200D-2642-FE0F',
                sheet: [35, 35],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FF-200D-2642-FE0F',
                sheet: [35, 36],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-biking'
    },
    {
        name: 'Woman Biking',
        unified: '1F6B4-200D-2640-FE0F',
        sheet: [35, 25],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6B4-1F3FB-200D-2640-FE0F',
                sheet: [35, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FC-200D-2640-FE0F',
                sheet: [35, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FD-200D-2640-FE0F',
                sheet: [35, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FE-200D-2640-FE0F',
                sheet: [35, 29],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B4-1F3FF-200D-2640-FE0F',
                sheet: [35, 30],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-biking'
    },
    {
        name: 'Mountain Bicyclist',
        unified: '1F6B5',
        sheet: [36, 3],
        hidden: ['facebook'],
        skinVariations: [
            {
                unified: '1F6B5-1F3FB',
                sheet: [36, 4],
                hidden: ['facebook']
            },
            {
                unified: '1F6B5-1F3FC',
                sheet: [36, 5],
                hidden: ['facebook']
            },
            {
                unified: '1F6B5-1F3FD',
                sheet: [36, 6],
                hidden: ['facebook']
            },
            {
                unified: '1F6B5-1F3FE',
                sheet: [36, 7],
                hidden: ['facebook']
            },
            {
                unified: '1F6B5-1F3FF',
                sheet: [36, 8],
                hidden: ['facebook']
            }
        ],
        shortName: 'mountain_bicyclist',
        obsoletedBy: '1F6B5-200D-2642-FE0F'
    },
    {
        name: 'Man Mountain Biking',
        unified: '1F6B5-200D-2642-FE0F',
        obsoletes: '1F6B5',
        sheet: [35, 49],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6B5-1F3FB-200D-2642-FE0F',
                sheet: [35, 50],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FC-200D-2642-FE0F',
                sheet: [35, 51],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FD-200D-2642-FE0F',
                sheet: [36, 0],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FE-200D-2642-FE0F',
                sheet: [36, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FF-200D-2642-FE0F',
                sheet: [36, 2],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-mountain-biking'
    },
    {
        name: 'Woman Mountain Biking',
        unified: '1F6B5-200D-2640-FE0F',
        sheet: [35, 43],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F6B5-1F3FB-200D-2640-FE0F',
                sheet: [35, 44],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FC-200D-2640-FE0F',
                sheet: [35, 45],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FD-200D-2640-FE0F',
                sheet: [35, 46],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FE-200D-2640-FE0F',
                sheet: [35, 47],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F6B5-1F3FF-200D-2640-FE0F',
                sheet: [35, 48],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-mountain-biking'
    },
    {
        name: 'Racing Car',
        unified: '1F3CE-FE0F',
        keywords: [
            'sports',
            'race',
            'fast',
            'formula',
            'f1'
        ],
        sheet: [11, 31],
        hidden: ['messenger'],
        shortName: 'racing_car'
    },
    {
        name: 'Racing Motorcycle',
        unified: '1F3CD-FE0F',
        sheet: [11, 30],
        hidden: ['messenger'],
        shortName: 'racing_motorcycle'
    },
    {
        name: 'Person Doing Cartwheel',
        unified: '1F938',
        sheet: [40, 24],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F938-1F3FB',
                sheet: [40, 25],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FC',
                sheet: [40, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FD',
                sheet: [40, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FE',
                sheet: [40, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FF',
                sheet: [40, 29],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'person_doing_cartwheel'
    },
    {
        name: 'Man Cartwheeling',
        unified: '1F938-200D-2642-FE0F',
        sheet: [40, 18],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F938-1F3FB-200D-2642-FE0F',
                sheet: [40, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FC-200D-2642-FE0F',
                sheet: [40, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FD-200D-2642-FE0F',
                sheet: [40, 21],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FE-200D-2642-FE0F',
                sheet: [40, 22],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FF-200D-2642-FE0F',
                sheet: [40, 23],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-cartwheeling'
    },
    {
        name: 'Woman Cartwheeling',
        unified: '1F938-200D-2640-FE0F',
        sheet: [40, 12],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F938-1F3FB-200D-2640-FE0F',
                sheet: [40, 13],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FC-200D-2640-FE0F',
                sheet: [40, 14],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FD-200D-2640-FE0F',
                sheet: [40, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FE-200D-2640-FE0F',
                sheet: [40, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F938-1F3FF-200D-2640-FE0F',
                sheet: [40, 17],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-cartwheeling'
    },
    {
        name: 'Wrestlers',
        unified: '1F93C',
        sheet: [40, 51],
        hidden: ['facebook', 'messenger'],
        shortName: 'wrestlers'
    },
    {
        name: 'Man Wrestling',
        unified: '1F93C-200D-2642-FE0F',
        sheet: [40, 50],
        hidden: ['messenger'],
        shortName: 'man-wrestling'
    },
    {
        name: 'Woman Wrestling',
        unified: '1F93C-200D-2640-FE0F',
        sheet: [40, 49],
        hidden: ['messenger'],
        shortName: 'woman-wrestling'
    },
    {
        name: 'Water Polo',
        unified: '1F93D',
        sheet: [41, 12],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F93D-1F3FB',
                sheet: [41, 13],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FC',
                sheet: [41, 14],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FD',
                sheet: [41, 15],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FE',
                sheet: [41, 16],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FF',
                sheet: [41, 17],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'water_polo'
    },
    {
        name: 'Man Playing Water Polo',
        unified: '1F93D-200D-2642-FE0F',
        sheet: [41, 6],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F93D-1F3FB-200D-2642-FE0F',
                sheet: [41, 7],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FC-200D-2642-FE0F',
                sheet: [41, 8],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FD-200D-2642-FE0F',
                sheet: [41, 9],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FE-200D-2642-FE0F',
                sheet: [41, 10],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FF-200D-2642-FE0F',
                sheet: [41, 11],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-playing-water-polo'
    },
    {
        name: 'Woman Playing Water Polo',
        unified: '1F93D-200D-2640-FE0F',
        sheet: [41, 0],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F93D-1F3FB-200D-2640-FE0F',
                sheet: [41, 1],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FC-200D-2640-FE0F',
                sheet: [41, 2],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FD-200D-2640-FE0F',
                sheet: [41, 3],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FE-200D-2640-FE0F',
                sheet: [41, 4],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93D-1F3FF-200D-2640-FE0F',
                sheet: [41, 5],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-playing-water-polo'
    },
    {
        name: 'Handball',
        unified: '1F93E',
        sheet: [41, 30],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F93E-1F3FB',
                sheet: [41, 31],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FC',
                sheet: [41, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FD',
                sheet: [41, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FE',
                sheet: [41, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FF',
                sheet: [41, 35],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'handball'
    },
    {
        name: 'Man Playing Handball',
        unified: '1F93E-200D-2642-FE0F',
        sheet: [41, 24],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F93E-1F3FB-200D-2642-FE0F',
                sheet: [41, 25],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FC-200D-2642-FE0F',
                sheet: [41, 26],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FD-200D-2642-FE0F',
                sheet: [41, 27],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FE-200D-2642-FE0F',
                sheet: [41, 28],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FF-200D-2642-FE0F',
                sheet: [41, 29],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-playing-handball'
    },
    {
        name: 'Woman Playing Handball',
        unified: '1F93E-200D-2640-FE0F',
        sheet: [41, 18],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F93E-1F3FB-200D-2640-FE0F',
                sheet: [41, 19],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FC-200D-2640-FE0F',
                sheet: [41, 20],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FD-200D-2640-FE0F',
                sheet: [41, 21],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FE-200D-2640-FE0F',
                sheet: [41, 22],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F93E-1F3FF-200D-2640-FE0F',
                sheet: [41, 23],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-playing-handball'
    },
    {
        name: 'Juggling',
        unified: '1F939',
        sheet: [40, 42],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F939-1F3FB',
                sheet: [40, 43],
                hidden: ['messenger']
            },
            {
                unified: '1F939-1F3FC',
                sheet: [40, 44],
                hidden: ['messenger']
            },
            {
                unified: '1F939-1F3FD',
                sheet: [40, 45],
                hidden: ['messenger']
            },
            {
                unified: '1F939-1F3FE',
                sheet: [40, 46],
                hidden: ['messenger']
            },
            {
                unified: '1F939-1F3FF',
                sheet: [40, 47],
                hidden: ['messenger']
            }
        ],
        shortName: 'juggling'
    },
    {
        name: 'Man Juggling',
        unified: '1F939-200D-2642-FE0F',
        sheet: [40, 36],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F939-1F3FB-200D-2642-FE0F',
                sheet: [40, 37],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FC-200D-2642-FE0F',
                sheet: [40, 38],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FD-200D-2642-FE0F',
                sheet: [40, 39],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FE-200D-2642-FE0F',
                sheet: [40, 40],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FF-200D-2642-FE0F',
                sheet: [40, 41],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'man-juggling'
    },
    {
        name: 'Woman Juggling',
        unified: '1F939-200D-2640-FE0F',
        sheet: [40, 30],
        hidden: ['facebook', 'messenger'],
        skinVariations: [
            {
                unified: '1F939-1F3FB-200D-2640-FE0F',
                sheet: [40, 31],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FC-200D-2640-FE0F',
                sheet: [40, 32],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FD-200D-2640-FE0F',
                sheet: [40, 33],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FE-200D-2640-FE0F',
                sheet: [40, 34],
                hidden: ['facebook', 'messenger']
            },
            {
                unified: '1F939-1F3FF-200D-2640-FE0F',
                sheet: [40, 35],
                hidden: ['facebook', 'messenger']
            }
        ],
        shortName: 'woman-juggling'
    },
    {
        name: 'Man and Woman Holding Hands',
        unified: '1F46B',
        keywords: [
            'pair',
            'people',
            'human',
            'love',
            'date',
            'dating',
            'like',
            'affection',
            'valentines',
            'marriage'
        ],
        sheet: [20, 30],
        shortNames: [
            'man_and_woman_holding_hands'
        ],
        shortName: 'couple'
    },
    {
        name: 'Two Men Holding Hands',
        unified: '1F46C',
        keywords: [
            'pair',
            'couple',
            'love',
            'like',
            'bromance',
            'friendship',
            'people',
            'human'
        ],
        sheet: [20, 31],
        shortName: 'two_men_holding_hands'
    },
    {
        name: 'Two Women Holding Hands',
        unified: '1F46D',
        keywords: [
            'pair',
            'friendship',
            'couple',
            'love',
            'like',
            'female',
            'people',
            'human'
        ],
        sheet: [20, 32],
        shortName: 'two_women_holding_hands'
    },
    {
        name: 'Kiss',
        unified: '1F48F',
        sheet: [24, 41],
        hidden: ['facebook'],
        shortName: 'couplekiss',
        obsoletedBy: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468'
    },
    {
        name: 'Woman Kiss Man',
        unified: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468',
        obsoletes: '1F48F',
        sheet: [20, 21],
        hidden: ['messenger'],
        shortName: 'woman-kiss-man'
    },
    {
        name: 'Man Kiss Man',
        unified: '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468',
        sheet: [18, 10],
        shortName: 'man-kiss-man'
    },
    {
        name: 'Woman Kiss Woman',
        unified: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469',
        sheet: [20, 22],
        shortName: 'woman-kiss-woman'
    },
    {
        name: 'Couple with Heart',
        unified: '1F491',
        sheet: [24, 43],
        hidden: ['facebook'],
        shortName: 'couple_with_heart',
        obsoletedBy: '1F469-200D-2764-FE0F-200D-1F468'
    },
    {
        name: 'Woman Heart Man',
        unified: '1F469-200D-2764-FE0F-200D-1F468',
        obsoletes: '1F491',
        sheet: [20, 19],
        hidden: ['messenger'],
        shortName: 'woman-heart-man'
    },
    {
        name: 'Man Heart Man',
        unified: '1F468-200D-2764-FE0F-200D-1F468',
        sheet: [18, 9],
        shortName: 'man-heart-man'
    },
    {
        name: 'Woman Heart Woman',
        unified: '1F469-200D-2764-FE0F-200D-1F469',
        sheet: [20, 20],
        shortName: 'woman-heart-woman'
    },
    {
        name: 'Family',
        unified: '1F46A',
        sheet: [20, 29],
        hidden: ['facebook'],
        shortNames: ['man-woman-boy'],
        shortName: 'family',
        obsoletedBy: '1F468-200D-1F469-200D-1F466'
    },
    {
        name: 'Man Woman Boy',
        unified: '1F468-200D-1F469-200D-1F466',
        obsoletes: '1F46A',
        sheet: [17, 2],
        shortNames: ['family'],
        shortName: 'man-woman-boy'
    },
    {
        name: 'Man Woman Girl',
        unified: '1F468-200D-1F469-200D-1F467',
        sheet: [17, 4],
        shortName: 'man-woman-girl'
    },
    {
        name: 'Man Woman Girl Boy',
        unified: '1F468-200D-1F469-200D-1F467-200D-1F466',
        sheet: [17, 5],
        shortName: 'man-woman-girl-boy'
    },
    {
        name: 'Man Woman Boy Boy',
        unified: '1F468-200D-1F469-200D-1F466-200D-1F466',
        sheet: [17, 3],
        shortName: 'man-woman-boy-boy'
    },
    {
        name: 'Man Woman Girl Girl',
        unified: '1F468-200D-1F469-200D-1F467-200D-1F467',
        sheet: [17, 6],
        shortName: 'man-woman-girl-girl'
    },
    {
        name: 'Man Man Boy',
        unified: '1F468-200D-1F468-200D-1F466',
        sheet: [16, 49],
        shortName: 'man-man-boy'
    },
    {
        name: 'Man Man Girl',
        unified: '1F468-200D-1F468-200D-1F467',
        sheet: [16, 51],
        shortName: 'man-man-girl'
    },
    {
        name: 'Man Man Girl Boy',
        unified: '1F468-200D-1F468-200D-1F467-200D-1F466',
        sheet: [17, 0],
        shortName: 'man-man-girl-boy'
    },
    {
        name: 'Man Man Boy Boy',
        unified: '1F468-200D-1F468-200D-1F466-200D-1F466',
        sheet: [16, 50],
        shortName: 'man-man-boy-boy'
    },
    {
        name: 'Man Man Girl Girl',
        unified: '1F468-200D-1F468-200D-1F467-200D-1F467',
        sheet: [17, 1],
        shortName: 'man-man-girl-girl'
    },
    {
        name: 'Woman Woman Boy',
        unified: '1F469-200D-1F469-200D-1F466',
        sheet: [19, 12],
        shortName: 'woman-woman-boy'
    },
    {
        name: 'Woman Woman Girl',
        unified: '1F469-200D-1F469-200D-1F467',
        sheet: [19, 14],
        shortName: 'woman-woman-girl'
    },
    {
        name: 'Woman Woman Girl Boy',
        unified: '1F469-200D-1F469-200D-1F467-200D-1F466',
        sheet: [19, 15],
        shortName: 'woman-woman-girl-boy'
    },
    {
        name: 'Woman Woman Boy Boy',
        unified: '1F469-200D-1F469-200D-1F466-200D-1F466',
        sheet: [19, 13],
        shortName: 'woman-woman-boy-boy'
    },
    {
        name: 'Woman Woman Girl Girl',
        unified: '1F469-200D-1F469-200D-1F467-200D-1F467',
        sheet: [19, 16],
        shortName: 'woman-woman-girl-girl'
    },
    {
        name: 'Man Boy',
        unified: '1F468-200D-1F466',
        sheet: [16, 45],
        hidden: ['messenger'],
        shortName: 'man-boy'
    },
    {
        name: 'Man Boy Boy',
        unified: '1F468-200D-1F466-200D-1F466',
        sheet: [16, 44],
        hidden: ['messenger'],
        shortName: 'man-boy-boy'
    },
    {
        name: 'Man Girl',
        unified: '1F468-200D-1F467',
        sheet: [16, 48],
        hidden: ['messenger'],
        shortName: 'man-girl'
    },
    {
        name: 'Man Girl Boy',
        unified: '1F468-200D-1F467-200D-1F466',
        sheet: [16, 46],
        hidden: ['messenger'],
        shortName: 'man-girl-boy'
    },
    {
        name: 'Man Girl Girl',
        unified: '1F468-200D-1F467-200D-1F467',
        sheet: [16, 47],
        hidden: ['messenger'],
        shortName: 'man-girl-girl'
    },
    {
        name: 'Woman Boy',
        unified: '1F469-200D-1F466',
        sheet: [19, 8],
        hidden: ['messenger'],
        shortName: 'woman-boy'
    },
    {
        name: 'Woman Boy Boy',
        unified: '1F469-200D-1F466-200D-1F466',
        sheet: [19, 7],
        hidden: ['messenger'],
        shortName: 'woman-boy-boy'
    },
    {
        name: 'Woman Girl',
        unified: '1F469-200D-1F467',
        sheet: [19, 11],
        hidden: ['messenger'],
        shortName: 'woman-girl'
    },
    {
        name: 'Woman Girl Boy',
        unified: '1F469-200D-1F467-200D-1F466',
        sheet: [19, 9],
        hidden: ['messenger'],
        shortName: 'woman-girl-boy'
    },
    {
        name: 'Woman Girl Girl',
        unified: '1F469-200D-1F467-200D-1F467',
        sheet: [19, 10],
        hidden: ['messenger'],
        shortName: 'woman-girl-girl'
    },
    {
        name: 'Selfie',
        unified: '1F933',
        keywords: ['camera', 'phone'],
        sheet: [39, 22],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F933-1F3FB',
                sheet: [39, 23],
                hidden: ['messenger']
            },
            {
                unified: '1F933-1F3FC',
                sheet: [39, 24],
                hidden: ['messenger']
            },
            {
                unified: '1F933-1F3FD',
                sheet: [39, 25],
                hidden: ['messenger']
            },
            {
                unified: '1F933-1F3FE',
                sheet: [39, 26],
                hidden: ['messenger']
            },
            {
                unified: '1F933-1F3FF',
                sheet: [39, 27],
                hidden: ['messenger']
            }
        ],
        shortName: 'selfie'
    },
    {
        name: 'Flexed Biceps',
        unified: '1F4AA',
        keywords: [
            'arm',
            'flex',
            'hand',
            'summer',
            'strong',
            'biceps'
        ],
        sheet: [25, 16],
        skinVariations: [
            {
                unified: '1F4AA-1F3FB',
                sheet: [25, 17]
            },
            {
                unified: '1F4AA-1F3FC',
                sheet: [25, 18]
            },
            {
                unified: '1F4AA-1F3FD',
                sheet: [25, 19]
            },
            {
                unified: '1F4AA-1F3FE',
                sheet: [25, 20]
            },
            {
                unified: '1F4AA-1F3FF',
                sheet: [25, 21]
            }
        ],
        shortName: 'muscle'
    },
    {
        name: 'White Left Pointing Backhand Index',
        unified: '1F448',
        keywords: [
            'direction',
            'fingers',
            'hand',
            'left'
        ],
        sheet: [14, 19],
        skinVariations: [
            {
                unified: '1F448-1F3FB',
                sheet: [14, 20]
            },
            {
                unified: '1F448-1F3FC',
                sheet: [14, 21]
            },
            {
                unified: '1F448-1F3FD',
                sheet: [14, 22]
            },
            {
                unified: '1F448-1F3FE',
                sheet: [14, 23]
            },
            {
                unified: '1F448-1F3FF',
                sheet: [14, 24]
            }
        ],
        shortName: 'point_left'
    },
    {
        name: 'White Right Pointing Backhand Index',
        unified: '1F449',
        keywords: [
            'fingers',
            'hand',
            'direction',
            'right'
        ],
        sheet: [14, 25],
        skinVariations: [
            {
                unified: '1F449-1F3FB',
                sheet: [14, 26]
            },
            {
                unified: '1F449-1F3FC',
                sheet: [14, 27]
            },
            {
                unified: '1F449-1F3FD',
                sheet: [14, 28]
            },
            {
                unified: '1F449-1F3FE',
                sheet: [14, 29]
            },
            {
                unified: '1F449-1F3FF',
                sheet: [14, 30]
            }
        ],
        shortName: 'point_right'
    },
    {
        name: 'White Up Pointing Index',
        unified: '261D-FE0F',
        keywords: [
            'hand',
            'fingers',
            'direction',
            'up'
        ],
        sheet: [47, 26],
        skinVariations: [
            {
                unified: '261D-1F3FB',
                sheet: [47, 27]
            },
            {
                unified: '261D-1F3FC',
                sheet: [47, 28]
            },
            {
                unified: '261D-1F3FD',
                sheet: [47, 29]
            },
            {
                unified: '261D-1F3FE',
                sheet: [47, 30]
            },
            {
                unified: '261D-1F3FF',
                sheet: [47, 31]
            }
        ],
        shortName: 'point_up'
    },
    {
        name: 'White Up Pointing Backhand Index',
        unified: '1F446',
        keywords: [
            'fingers',
            'hand',
            'direction',
            'up'
        ],
        sheet: [14, 7],
        skinVariations: [
            {
                unified: '1F446-1F3FB',
                sheet: [14, 8]
            },
            {
                unified: '1F446-1F3FC',
                sheet: [14, 9]
            },
            {
                unified: '1F446-1F3FD',
                sheet: [14, 10]
            },
            {
                unified: '1F446-1F3FE',
                sheet: [14, 11]
            },
            {
                unified: '1F446-1F3FF',
                sheet: [14, 12]
            }
        ],
        shortName: 'point_up_2'
    },
    {
        name: 'Reversed Hand with Middle Finger Extended',
        unified: '1F595',
        sheet: [29, 38],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F595-1F3FB',
                sheet: [29, 39],
                hidden: ['messenger']
            },
            {
                unified: '1F595-1F3FC',
                sheet: [29, 40],
                hidden: ['messenger']
            },
            {
                unified: '1F595-1F3FD',
                sheet: [29, 41],
                hidden: ['messenger']
            },
            {
                unified: '1F595-1F3FE',
                sheet: [29, 42],
                hidden: ['messenger']
            },
            {
                unified: '1F595-1F3FF',
                sheet: [29, 43],
                hidden: ['messenger']
            }
        ],
        shortNames: [
            'reversed_hand_with_middle_finger_extended'
        ],
        shortName: 'middle_finger'
    },
    {
        name: 'White Down Pointing Backhand Index',
        unified: '1F447',
        keywords: [
            'fingers',
            'hand',
            'direction',
            'down'
        ],
        sheet: [14, 13],
        skinVariations: [
            {
                unified: '1F447-1F3FB',
                sheet: [14, 14]
            },
            {
                unified: '1F447-1F3FC',
                sheet: [14, 15]
            },
            {
                unified: '1F447-1F3FD',
                sheet: [14, 16]
            },
            {
                unified: '1F447-1F3FE',
                sheet: [14, 17]
            },
            {
                unified: '1F447-1F3FF',
                sheet: [14, 18]
            }
        ],
        shortName: 'point_down'
    },
    {
        name: 'Victory Hand',
        unified: '270C-FE0F',
        keywords: [
            'fingers',
            'ohyeah',
            'hand',
            'peace',
            'victory',
            'two'
        ],
        sheet: [49, 30],
        skinVariations: [
            {
                unified: '270C-1F3FB',
                sheet: [49, 31]
            },
            {
                unified: '270C-1F3FC',
                sheet: [49, 32]
            },
            {
                unified: '270C-1F3FD',
                sheet: [49, 33]
            },
            {
                unified: '270C-1F3FE',
                sheet: [49, 34]
            },
            {
                unified: '270C-1F3FF',
                sheet: [49, 35]
            }
        ],
        shortName: 'v'
    },
    {
        name: 'Hand with Index and Middle Fingers Crossed',
        unified: '1F91E',
        keywords: ['good', 'lucky'],
        sheet: [38, 11],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F91E-1F3FB',
                sheet: [38, 12],
                hidden: ['messenger']
            },
            {
                unified: '1F91E-1F3FC',
                sheet: [38, 13],
                hidden: ['messenger']
            },
            {
                unified: '1F91E-1F3FD',
                sheet: [38, 14],
                hidden: ['messenger']
            },
            {
                unified: '1F91E-1F3FE',
                sheet: [38, 15],
                hidden: ['messenger']
            },
            {
                unified: '1F91E-1F3FF',
                sheet: [38, 16],
                hidden: ['messenger']
            }
        ],
        shortNames: [
            'hand_with_index_and_middle_fingers_crossed'
        ],
        shortName: 'crossed_fingers'
    },
    {
        name: 'Raised Hand with Part Between Middle and Ring Fingers',
        unified: '1F596',
        sheet: [29, 44],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F596-1F3FB',
                sheet: [29, 45],
                hidden: ['messenger']
            },
            {
                unified: '1F596-1F3FC',
                sheet: [29, 46],
                hidden: ['messenger']
            },
            {
                unified: '1F596-1F3FD',
                sheet: [29, 47],
                hidden: ['messenger']
            },
            {
                unified: '1F596-1F3FE',
                sheet: [29, 48],
                hidden: ['messenger']
            },
            {
                unified: '1F596-1F3FF',
                sheet: [29, 49],
                hidden: ['messenger']
            }
        ],
        shortName: 'spock-hand'
    },
    {
        name: 'Sign of the Horns',
        unified: '1F918',
        sheet: [37, 32],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F918-1F3FB',
                sheet: [37, 33],
                hidden: ['messenger']
            },
            {
                unified: '1F918-1F3FC',
                sheet: [37, 34],
                hidden: ['messenger']
            },
            {
                unified: '1F918-1F3FD',
                sheet: [37, 35],
                hidden: ['messenger']
            },
            {
                unified: '1F918-1F3FE',
                sheet: [37, 36],
                hidden: ['messenger']
            },
            {
                unified: '1F918-1F3FF',
                sheet: [37, 37],
                hidden: ['messenger']
            }
        ],
        shortNames: ['sign_of_the_horns'],
        shortName: 'the_horns'
    },
    {
        name: 'Call Me Hand',
        unified: '1F919',
        keywords: ['hands', 'gesture'],
        sheet: [37, 38],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F919-1F3FB',
                sheet: [37, 39],
                hidden: ['messenger']
            },
            {
                unified: '1F919-1F3FC',
                sheet: [37, 40],
                hidden: ['messenger']
            },
            {
                unified: '1F919-1F3FD',
                sheet: [37, 41],
                hidden: ['messenger']
            },
            {
                unified: '1F919-1F3FE',
                sheet: [37, 42],
                hidden: ['messenger']
            },
            {
                unified: '1F919-1F3FF',
                sheet: [37, 43],
                hidden: ['messenger']
            }
        ],
        shortName: 'call_me_hand'
    },
    {
        name: 'Raised Hand with Fingers Splayed',
        unified: '1F590-FE0F',
        keywords: [
            'hand',
            'fingers',
            'palm'
        ],
        sheet: [29, 32],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F590-1F3FB',
                sheet: [29, 33],
                hidden: ['messenger']
            },
            {
                unified: '1F590-1F3FC',
                sheet: [29, 34],
                hidden: ['messenger']
            },
            {
                unified: '1F590-1F3FD',
                sheet: [29, 35],
                hidden: ['messenger']
            },
            {
                unified: '1F590-1F3FE',
                sheet: [29, 36],
                hidden: ['messenger']
            },
            {
                unified: '1F590-1F3FF',
                sheet: [29, 37],
                hidden: ['messenger']
            }
        ],
        shortName: 'raised_hand_with_fingers_splayed'
    },
    {
        name: 'Raised Hand',
        unified: '270B',
        sheet: [49, 24],
        skinVariations: [
            {
                unified: '270B-1F3FB',
                sheet: [49, 25]
            },
            {
                unified: '270B-1F3FC',
                sheet: [49, 26]
            },
            {
                unified: '270B-1F3FD',
                sheet: [49, 27]
            },
            {
                unified: '270B-1F3FE',
                sheet: [49, 28]
            },
            {
                unified: '270B-1F3FF',
                sheet: [49, 29]
            }
        ],
        shortNames: ['raised_hand'],
        shortName: 'hand'
    },
    {
        name: 'Ok Hand Sign',
        unified: '1F44C',
        keywords: [
            'fingers',
            'limbs',
            'perfect',
            'ok',
            'okay'
        ],
        sheet: [14, 43],
        skinVariations: [
            {
                unified: '1F44C-1F3FB',
                sheet: [14, 44]
            },
            {
                unified: '1F44C-1F3FC',
                sheet: [14, 45]
            },
            {
                unified: '1F44C-1F3FD',
                sheet: [14, 46]
            },
            {
                unified: '1F44C-1F3FE',
                sheet: [14, 47]
            },
            {
                unified: '1F44C-1F3FF',
                sheet: [14, 48]
            }
        ],
        shortName: 'ok_hand'
    },
    {
        name: 'Thumbs Up Sign',
        unified: '1F44D',
        keywords: [
            'thumbsup',
            'yes',
            'awesome',
            'good',
            'agree',
            'accept',
            'cool',
            'hand',
            'like'
        ],
        sheet: [14, 49],
        skinVariations: [
            {
                unified: '1F44D-1F3FB',
                sheet: [14, 50]
            },
            {
                unified: '1F44D-1F3FC',
                sheet: [14, 51]
            },
            {
                unified: '1F44D-1F3FD',
                sheet: [15, 0]
            },
            {
                unified: '1F44D-1F3FE',
                sheet: [15, 1]
            },
            {
                unified: '1F44D-1F3FF',
                sheet: [15, 2]
            }
        ],
        shortNames: ['thumbsup'],
        shortName: '+1'
    },
    {
        name: 'Thumbs Down Sign',
        unified: '1F44E',
        keywords: [
            'thumbsdown',
            'no',
            'dislike',
            'hand'
        ],
        sheet: [15, 3],
        skinVariations: [
            {
                unified: '1F44E-1F3FB',
                sheet: [15, 4]
            },
            {
                unified: '1F44E-1F3FC',
                sheet: [15, 5]
            },
            {
                unified: '1F44E-1F3FD',
                sheet: [15, 6]
            },
            {
                unified: '1F44E-1F3FE',
                sheet: [15, 7]
            },
            {
                unified: '1F44E-1F3FF',
                sheet: [15, 8]
            }
        ],
        shortNames: ['thumbsdown'],
        shortName: '-1'
    },
    {
        name: 'Raised Fist',
        unified: '270A',
        keywords: [
            'fingers',
            'hand',
            'grasp'
        ],
        sheet: [49, 18],
        skinVariations: [
            {
                unified: '270A-1F3FB',
                sheet: [49, 19]
            },
            {
                unified: '270A-1F3FC',
                sheet: [49, 20]
            },
            {
                unified: '270A-1F3FD',
                sheet: [49, 21]
            },
            {
                unified: '270A-1F3FE',
                sheet: [49, 22]
            },
            {
                unified: '270A-1F3FF',
                sheet: [49, 23]
            }
        ],
        shortName: 'fist'
    },
    {
        name: 'Fisted Hand Sign',
        unified: '1F44A',
        keywords: [
            'angry',
            'violence',
            'fist',
            'hit',
            'attack',
            'hand'
        ],
        sheet: [14, 31],
        skinVariations: [
            {
                unified: '1F44A-1F3FB',
                sheet: [14, 32]
            },
            {
                unified: '1F44A-1F3FC',
                sheet: [14, 33]
            },
            {
                unified: '1F44A-1F3FD',
                sheet: [14, 34]
            },
            {
                unified: '1F44A-1F3FE',
                sheet: [14, 35]
            },
            {
                unified: '1F44A-1F3FF',
                sheet: [14, 36]
            }
        ],
        shortNames: ['punch'],
        shortName: 'facepunch'
    },
    {
        name: 'Left-Facing Fist',
        unified: '1F91B',
        sheet: [37, 50],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F91B-1F3FB',
                sheet: [37, 51],
                hidden: ['messenger']
            },
            {
                unified: '1F91B-1F3FC',
                sheet: [38, 0],
                hidden: ['messenger']
            },
            {
                unified: '1F91B-1F3FD',
                sheet: [38, 1],
                hidden: ['messenger']
            },
            {
                unified: '1F91B-1F3FE',
                sheet: [38, 2],
                hidden: ['messenger']
            },
            {
                unified: '1F91B-1F3FF',
                sheet: [38, 3],
                hidden: ['messenger']
            }
        ],
        shortName: 'left-facing_fist'
    },
    {
        name: 'Right-Facing Fist',
        unified: '1F91C',
        sheet: [38, 4],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F91C-1F3FB',
                sheet: [38, 5],
                hidden: ['messenger']
            },
            {
                unified: '1F91C-1F3FC',
                sheet: [38, 6],
                hidden: ['messenger']
            },
            {
                unified: '1F91C-1F3FD',
                sheet: [38, 7],
                hidden: ['messenger']
            },
            {
                unified: '1F91C-1F3FE',
                sheet: [38, 8],
                hidden: ['messenger']
            },
            {
                unified: '1F91C-1F3FF',
                sheet: [38, 9],
                hidden: ['messenger']
            }
        ],
        shortName: 'right-facing_fist'
    },
    {
        name: 'Raised Back of Hand',
        unified: '1F91A',
        keywords: [
            'fingers',
            'raised',
            'backhand'
        ],
        sheet: [37, 44],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F91A-1F3FB',
                sheet: [37, 45],
                hidden: ['messenger']
            },
            {
                unified: '1F91A-1F3FC',
                sheet: [37, 46],
                hidden: ['messenger']
            },
            {
                unified: '1F91A-1F3FD',
                sheet: [37, 47],
                hidden: ['messenger']
            },
            {
                unified: '1F91A-1F3FE',
                sheet: [37, 48],
                hidden: ['messenger']
            },
            {
                unified: '1F91A-1F3FF',
                sheet: [37, 49],
                hidden: ['messenger']
            }
        ],
        shortName: 'raised_back_of_hand'
    },
    {
        name: 'Waving Hand Sign',
        unified: '1F44B',
        keywords: [
            'hands',
            'gesture',
            'goodbye',
            'solong',
            'farewell',
            'hello',
            'hi',
            'palm'
        ],
        sheet: [14, 37],
        skinVariations: [
            {
                unified: '1F44B-1F3FB',
                sheet: [14, 38]
            },
            {
                unified: '1F44B-1F3FC',
                sheet: [14, 39]
            },
            {
                unified: '1F44B-1F3FD',
                sheet: [14, 40]
            },
            {
                unified: '1F44B-1F3FE',
                sheet: [14, 41]
            },
            {
                unified: '1F44B-1F3FF',
                sheet: [14, 42]
            }
        ],
        shortName: 'wave'
    },
    {
        name: 'I Love You Hand Sign',
        unified: '1F91F',
        sheet: [38, 17],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F91F-1F3FB',
                sheet: [38, 18],
                hidden: ['messenger']
            },
            {
                unified: '1F91F-1F3FC',
                sheet: [38, 19],
                hidden: ['messenger']
            },
            {
                unified: '1F91F-1F3FD',
                sheet: [38, 20],
                hidden: ['messenger']
            },
            {
                unified: '1F91F-1F3FE',
                sheet: [38, 21],
                hidden: ['messenger']
            },
            {
                unified: '1F91F-1F3FF',
                sheet: [38, 22],
                hidden: ['messenger']
            }
        ],
        shortName: 'i_love_you_hand_sign'
    },
    {
        name: 'Writing Hand',
        unified: '270D-FE0F',
        keywords: [
            'lower_left_ballpoint_pen',
            'stationery',
            'write',
            'compose'
        ],
        sheet: [49, 36],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '270D-1F3FB',
                sheet: [49, 37],
                hidden: ['messenger']
            },
            {
                unified: '270D-1F3FC',
                sheet: [49, 38],
                hidden: ['messenger']
            },
            {
                unified: '270D-1F3FD',
                sheet: [49, 39],
                hidden: ['messenger']
            },
            {
                unified: '270D-1F3FE',
                sheet: [49, 40],
                hidden: ['messenger']
            },
            {
                unified: '270D-1F3FF',
                sheet: [49, 41],
                hidden: ['messenger']
            }
        ],
        shortName: 'writing_hand'
    },
    {
        name: 'Clapping Hands Sign',
        unified: '1F44F',
        keywords: [
            'hands',
            'praise',
            'applause',
            'congrats',
            'yay'
        ],
        sheet: [15, 9],
        skinVariations: [
            {
                unified: '1F44F-1F3FB',
                sheet: [15, 10]
            },
            {
                unified: '1F44F-1F3FC',
                sheet: [15, 11]
            },
            {
                unified: '1F44F-1F3FD',
                sheet: [15, 12]
            },
            {
                unified: '1F44F-1F3FE',
                sheet: [15, 13]
            },
            {
                unified: '1F44F-1F3FF',
                sheet: [15, 14]
            }
        ],
        shortName: 'clap'
    },
    {
        name: 'Open Hands Sign',
        unified: '1F450',
        keywords: [
            'fingers',
            'butterfly',
            'hands',
            'open'
        ],
        sheet: [15, 15],
        skinVariations: [
            {
                unified: '1F450-1F3FB',
                sheet: [15, 16]
            },
            {
                unified: '1F450-1F3FC',
                sheet: [15, 17]
            },
            {
                unified: '1F450-1F3FD',
                sheet: [15, 18]
            },
            {
                unified: '1F450-1F3FE',
                sheet: [15, 19]
            },
            {
                unified: '1F450-1F3FF',
                sheet: [15, 20]
            }
        ],
        shortName: 'open_hands'
    },
    {
        name: 'Person Raising Both Hands in Celebration',
        unified: '1F64C',
        keywords: [
            'gesture',
            'hooray',
            'yea',
            'celebration',
            'hands'
        ],
        sheet: [33, 12],
        skinVariations: [
            {
                unified: '1F64C-1F3FB',
                sheet: [33, 13]
            },
            {
                unified: '1F64C-1F3FC',
                sheet: [33, 14]
            },
            {
                unified: '1F64C-1F3FD',
                sheet: [33, 15]
            },
            {
                unified: '1F64C-1F3FE',
                sheet: [33, 16]
            },
            {
                unified: '1F64C-1F3FF',
                sheet: [33, 17]
            }
        ],
        shortName: 'raised_hands'
    },
    {
        name: 'Palms Up Together',
        unified: '1F932',
        sheet: [39, 16],
        hidden: ['messenger'],
        skinVariations: [
            {
                unified: '1F932-1F3FB',
                sheet: [39, 17],
                hidden: ['messenger']
            },
            {
                unified: '1F932-1F3FC',
                sheet: [39, 18],
                hidden: ['messenger']
            },
            {
                unified: '1F932-1F3FD',
                sheet: [39, 19],
                hidden: ['messenger']
            },
            {
                unified: '1F932-1F3FE',
                sheet: [39, 20],
                hidden: ['messenger']
            },
            {
                unified: '1F932-1F3FF',
                sheet: [39, 21],
                hidden: ['messenger']
            }
        ],
        shortName: 'palms_up_together'
    },
    {
        name: 'Person with Folded Hands',
        unified: '1F64F',
        keywords: [
            'please',
            'hope',
            'wish',
            'namaste',
            'highfive'
        ],
        sheet: [34, 2],
        skinVariations: [
            {
                unified: '1F64F-1F3FB',
                sheet: [34, 3]
            },
            {
                unified: '1F64F-1F3FC',
                sheet: [34, 4]
            },
            {
                unified: '1F64F-1F3FD',
                sheet: [34, 5]
            },
            {
                unified: '1F64F-1F3FE',
                sheet: [34, 6]
            },
            {
                unified: '1F64F-1F3FF',
                sheet: [34, 7]
            }
        ],
        shortName: 'pray'
    },
    {
        name: 'Handshake',
        unified: '1F91D',
        keywords: ['agreement', 'shake'],
        sheet: [38, 10],
        hidden: ['messenger'],
        shortName: 'handshake'
    },
    {
        name: 'Nail Polish',
        unified: '1F485',
        keywords: [
            'beauty',
            'manicure',
            'finger',
            'fashion',
            'nail'
        ],
        sheet: [23, 44],
        skinVariations: [
            {
                unified: '1F485-1F3FB',
                sheet: [23, 45]
            },
            {
                unified: '1F485-1F3FC',
                sheet: [23, 46]
            },
            {
                unified: '1F485-1F3FD',
                sheet: [23, 47]
            },
            {
                unified: '1F485-1F3FE',
                sheet: [23, 48]
            },
            {
                unified: '1F485-1F3FF',
                sheet: [23, 49]
            }
        ],
        shortName: 'nail_care'
    },
    {
        name: 'Ear',
        unified: '1F442',
        keywords: [
            'face',
            'hear',
            'sound',
            'listen'
        ],
        sheet: [13, 45],
        skinVariations: [
            {
                unified: '1F442-1F3FB',
                sheet: [13, 46]
            },
            {
                unified: '1F442-1F3FC',
                sheet: [13, 47]
            },
            {
                unified: '1F442-1F3FD',
                sheet: [13, 48]
            },
            {
                unified: '1F442-1F3FE',
                sheet: [13, 49]
            },
            {
                unified: '1F442-1F3FF',
                sheet: [13, 50]
            }
        ],
        shortName: 'ear'
    },
    {
        name: 'Nose',
        unified: '1F443',
        keywords: ['smell', 'sniff'],
        sheet: [13, 51],
        skinVariations: [
            {
                unified: '1F443-1F3FB',
                sheet: [14, 0]
            },
            {
                unified: '1F443-1F3FC',
                sheet: [14, 1]
            },
            {
                unified: '1F443-1F3FD',
                sheet: [14, 2]
            },
            {
                unified: '1F443-1F3FE',
                sheet: [14, 3]
            },
            {
                unified: '1F443-1F3FF',
                sheet: [14, 4]
            }
        ],
        shortName: 'nose'
    },
    {
        name: 'Footprints',
        unified: '1F463',
        keywords: [
            'feet',
            'tracking',
            'walking',
            'beach'
        ],
        sheet: [15, 39],
        shortName: 'footprints'
    },
    {
        name: 'Eyes',
        unified: '1F440',
        keywords: [
            'look',
            'watch',
            'stalk',
            'peek',
            'see'
        ],
        sheet: [13, 42],
        shortName: 'eyes'
    },
    {
        name: 'Eye',
        unified: '1F441-FE0F',
        keywords: [
            'face',
            'look',
            'see',
            'watch',
            'stare'
        ],
        sheet: [13, 44],
        hidden: ['messenger'],
        shortName: 'eye'
    },
    {
        name: 'Eye in Speech Bubble',
        unified: '1F441-FE0F-200D-1F5E8-FE0F',
        sheet: [13, 43],
        hidden: [
            'twitter',
            'facebook',
            'messenger'
        ],
        shortName: 'eye-in-speech-bubble'
    },
    {
        name: 'Brain',
        unified: '1F9E0',
        keywords: ['smart', 'intelligent'],
        sheet: [46, 22],
        hidden: ['messenger'],
        shortName: 'brain'
    },
    {
        name: 'Tongue',
        unified: '1F445',
        keywords: ['mouth', 'playful'],
        sheet: [14, 6],
        shortName: 'tongue'
    },
    {
        name: 'Mouth',
        unified: '1F444',
        keywords: ['mouth', 'kiss'],
        sheet: [14, 5],
        shortName: 'lips'
    },
    {
        name: 'Kiss Mark',
        unified: '1F48B',
        keywords: [
            'face',
            'lips',
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [24, 37],
        shortName: 'kiss'
    },
    {
        name: 'Heart with Arrow',
        unified: '1F498',
        keywords: [
            'love',
            'like',
            'heart',
            'affection',
            'valentines'
        ],
        sheet: [24, 50],
        shortName: 'cupid'
    },
    {
        name: 'Heavy Black Heart',
        unified: '2764-FE0F',
        text: '<3',
        emoticons: ['<3'],
        keywords: [
            'love',
            'like',
            'valentines'
        ],
        sheet: [50, 8],
        shortName: 'heart'
    },
    {
        name: 'Beating Heart',
        unified: '1F493',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines',
            'pink',
            'heart'
        ],
        sheet: [24, 45],
        shortName: 'heartbeat'
    },
    {
        name: 'Broken Heart',
        unified: '1F494',
        text: '</3',
        emoticons: ['</3'],
        keywords: [
            'sad',
            'sorry',
            'break',
            'heart',
            'heartbreak'
        ],
        sheet: [24, 46],
        shortName: 'broken_heart'
    },
    {
        name: 'Two Hearts',
        unified: '1F495',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines',
            'heart'
        ],
        sheet: [24, 47],
        shortName: 'two_hearts'
    },
    {
        name: 'Sparkling Heart',
        unified: '1F496',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [24, 48],
        shortName: 'sparkling_heart'
    },
    {
        name: 'Growing Heart',
        unified: '1F497',
        keywords: [
            'like',
            'love',
            'affection',
            'valentines',
            'pink'
        ],
        sheet: [24, 49],
        shortName: 'heartpulse'
    },
    {
        name: 'Blue Heart',
        unified: '1F499',
        text: '<3',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [24, 51],
        shortName: 'blue_heart'
    },
    {
        name: 'Green Heart',
        unified: '1F49A',
        text: '<3',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [25, 0],
        shortName: 'green_heart'
    },
    {
        name: 'Yellow Heart',
        unified: '1F49B',
        text: '<3',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [25, 1],
        shortName: 'yellow_heart'
    },
    {
        name: 'Orange Heart',
        unified: '1F9E1',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [46, 23],
        hidden: ['messenger'],
        shortName: 'orange_heart'
    },
    {
        name: 'Purple Heart',
        unified: '1F49C',
        text: '<3',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [25, 2],
        shortName: 'purple_heart'
    },
    {
        name: 'Black Heart',
        unified: '1F5A4',
        keywords: ['evil'],
        sheet: [29, 50],
        hidden: ['messenger'],
        shortName: 'black_heart'
    },
    {
        name: 'Heart with Ribbon',
        unified: '1F49D',
        keywords: ['love', 'valentines'],
        sheet: [25, 3],
        shortName: 'gift_heart'
    },
    {
        name: 'Revolving Hearts',
        unified: '1F49E',
        keywords: [
            'love',
            'like',
            'affection',
            'valentines'
        ],
        sheet: [25, 4],
        shortName: 'revolving_hearts'
    },
    {
        name: 'Heart Decoration',
        unified: '1F49F',
        keywords: [
            'purple-square',
            'love',
            'like'
        ],
        sheet: [25, 5],
        shortName: 'heart_decoration'
    },
    {
        name: 'Heavy Heart Exclamation Mark Ornament',
        unified: '2763-FE0F',
        sheet: [50, 7],
        hidden: ['messenger'],
        shortName: 'heavy_heart_exclamation_mark_ornament'
    },
    {
        name: 'Love Letter',
        unified: '1F48C',
        keywords: [
            'email',
            'like',
            'affection',
            'envelope',
            'valentines'
        ],
        sheet: [24, 38],
        shortName: 'love_letter'
    },
    {
        name: 'Sleeping Symbol',
        unified: '1F4A4',
        keywords: [
            'sleepy',
            'tired',
            'dream'
        ],
        sheet: [25, 10],
        shortName: 'zzz'
    },
    {
        name: 'Anger Symbol',
        unified: '1F4A2',
        keywords: ['angry', 'mad'],
        sheet: [25, 8],
        shortName: 'anger'
    },
    {
        name: 'Bomb',
        unified: '1F4A3',
        keywords: [
            'boom',
            'explode',
            'explosion',
            'terrorism'
        ],
        sheet: [25, 9],
        shortName: 'bomb'
    },
    {
        name: 'Collision Symbol',
        unified: '1F4A5',
        keywords: [
            'bomb',
            'explode',
            'explosion',
            'collision',
            'blown'
        ],
        sheet: [25, 11],
        shortNames: ['collision'],
        shortName: 'boom'
    },
    {
        name: 'Splashing Sweat Symbol',
        unified: '1F4A6',
        keywords: ['water', 'drip', 'oops'],
        sheet: [25, 12],
        shortName: 'sweat_drops'
    },
    {
        name: 'Dash Symbol',
        unified: '1F4A8',
        keywords: [
            'wind',
            'air',
            'fast',
            'shoo',
            'fart',
            'smoke',
            'puff'
        ],
        sheet: [25, 14],
        shortName: 'dash'
    },
    {
        name: 'Dizzy Symbol',
        unified: '1F4AB',
        keywords: [
            'star',
            'sparkle',
            'shoot',
            'magic'
        ],
        sheet: [25, 22],
        shortName: 'dizzy'
    },
    {
        name: 'Speech Balloon',
        unified: '1F4AC',
        keywords: [
            'bubble',
            'words',
            'message',
            'talk',
            'chatting'
        ],
        sheet: [25, 23],
        shortName: 'speech_balloon'
    },
    {
        name: 'Left Speech Bubble',
        unified: '1F5E8-FE0F',
        keywords: [
            'words',
            'message',
            'talk',
            'chatting'
        ],
        sheet: [30, 15],
        hidden: ['messenger'],
        shortName: 'left_speech_bubble'
    },
    {
        name: 'Right Anger Bubble',
        unified: '1F5EF-FE0F',
        keywords: [
            'caption',
            'speech',
            'thinking',
            'mad'
        ],
        sheet: [30, 16],
        hidden: ['messenger'],
        shortName: 'right_anger_bubble'
    },
    {
        name: 'Thought Balloon',
        unified: '1F4AD',
        keywords: [
            'bubble',
            'cloud',
            'speech',
            'thinking',
            'dream'
        ],
        sheet: [25, 24],
        shortName: 'thought_balloon'
    },
    {
        name: 'Hole',
        unified: '1F573-FE0F',
        keywords: ['embarrassing'],
        sheet: [28, 44],
        hidden: ['messenger'],
        shortName: 'hole'
    },
    {
        name: 'Eyeglasses',
        unified: '1F453',
        keywords: [
            'fashion',
            'accessories',
            'eyesight',
            'nerdy',
            'dork',
            'geek'
        ],
        sheet: [15, 23],
        shortName: 'eyeglasses'
    },
    {
        name: 'Dark Sunglasses',
        unified: '1F576-FE0F',
        keywords: [
            'face',
            'cool',
            'accessories'
        ],
        sheet: [29, 17],
        hidden: ['messenger'],
        shortName: 'dark_sunglasses'
    },
    {
        name: 'Necktie',
        unified: '1F454',
        keywords: [
            'shirt',
            'suitup',
            'formal',
            'fashion',
            'cloth',
            'business'
        ],
        sheet: [15, 24],
        shortName: 'necktie'
    },
    {
        name: 'T-Shirt',
        unified: '1F455',
        sheet: [15, 25],
        shortNames: ['tshirt'],
        shortName: 'shirt'
    },
    {
        name: 'Jeans',
        unified: '1F456',
        keywords: ['fashion', 'shopping'],
        sheet: [15, 26],
        shortName: 'jeans'
    },
    {
        name: 'Scarf',
        unified: '1F9E3',
        keywords: [
            'neck',
            'winter',
            'clothes'
        ],
        sheet: [46, 25],
        hidden: ['messenger'],
        shortName: 'scarf'
    },
    {
        name: 'Gloves',
        unified: '1F9E4',
        keywords: [
            'hands',
            'winter',
            'clothes'
        ],
        sheet: [46, 26],
        hidden: ['messenger'],
        shortName: 'gloves'
    },
    {
        name: 'Coat',
        unified: '1F9E5',
        keywords: ['jacket'],
        sheet: [46, 27],
        hidden: ['messenger'],
        shortName: 'coat'
    },
    {
        name: 'Socks',
        unified: '1F9E6',
        keywords: ['stockings', 'clothes'],
        sheet: [46, 28],
        hidden: ['messenger'],
        shortName: 'socks'
    },
    {
        name: 'Dress',
        unified: '1F457',
        keywords: [
            'clothes',
            'fashion',
            'shopping'
        ],
        sheet: [15, 27],
        shortName: 'dress'
    },
    {
        name: 'Kimono',
        unified: '1F458',
        keywords: [
            'dress',
            'fashion',
            'women',
            'female',
            'japanese'
        ],
        sheet: [15, 28],
        shortName: 'kimono'
    },
    {
        name: 'Bikini',
        unified: '1F459',
        keywords: [
            'swimming',
            'female',
            'woman',
            'girl',
            'fashion',
            'beach',
            'summer'
        ],
        sheet: [15, 29],
        shortName: 'bikini'
    },
    {
        name: 'Womans Clothes',
        unified: '1F45A',
        keywords: [
            'fashion',
            'shopping_bags',
            'female'
        ],
        sheet: [15, 30],
        shortName: 'womans_clothes'
    },
    {
        name: 'Purse',
        unified: '1F45B',
        keywords: [
            'fashion',
            'accessories',
            'money',
            'sales',
            'shopping'
        ],
        sheet: [15, 31],
        shortName: 'purse'
    },
    {
        name: 'Handbag',
        unified: '1F45C',
        keywords: [
            'fashion',
            'accessory',
            'accessories',
            'shopping'
        ],
        sheet: [15, 32],
        shortName: 'handbag'
    },
    {
        name: 'Pouch',
        unified: '1F45D',
        keywords: [
            'bag',
            'accessories',
            'shopping'
        ],
        sheet: [15, 33],
        shortName: 'pouch'
    },
    {
        name: 'Shopping Bags',
        unified: '1F6CD-FE0F',
        sheet: [37, 2],
        hidden: ['messenger'],
        shortName: 'shopping_bags'
    },
    {
        name: 'School Satchel',
        unified: '1F392',
        keywords: [
            'student',
            'education',
            'bag',
            'backpack'
        ],
        sheet: [8, 37],
        shortName: 'school_satchel'
    },
    {
        name: 'Mans Shoe',
        unified: '1F45E',
        keywords: ['fashion', 'male'],
        sheet: [15, 34],
        shortNames: ['shoe'],
        shortName: 'mans_shoe'
    },
    {
        name: 'Athletic Shoe',
        unified: '1F45F',
        keywords: [
            'shoes',
            'sports',
            'sneakers'
        ],
        sheet: [15, 35],
        shortName: 'athletic_shoe'
    },
    {
        name: 'High-Heeled Shoe',
        unified: '1F460',
        keywords: [
            'fashion',
            'shoes',
            'female',
            'pumps',
            'stiletto'
        ],
        sheet: [15, 36],
        shortName: 'high_heel'
    },
    {
        name: 'Womans Sandal',
        unified: '1F461',
        keywords: [
            'shoes',
            'fashion',
            'flip flops'
        ],
        sheet: [15, 37],
        shortName: 'sandal'
    },
    {
        name: 'Womans Boots',
        unified: '1F462',
        keywords: ['shoes', 'fashion'],
        sheet: [15, 38],
        shortName: 'boot'
    },
    {
        name: 'Crown',
        unified: '1F451',
        keywords: [
            'king',
            'kod',
            'leader',
            'royalty',
            'lord'
        ],
        sheet: [15, 21],
        shortName: 'crown'
    },
    {
        name: 'Womans Hat',
        unified: '1F452',
        keywords: [
            'fashion',
            'accessories',
            'female',
            'lady',
            'spring'
        ],
        sheet: [15, 22],
        shortName: 'womans_hat'
    },
    {
        name: 'Top Hat',
        unified: '1F3A9',
        keywords: [
            'magic',
            'gentleman',
            'classy',
            'circus'
        ],
        sheet: [9, 3],
        shortName: 'tophat'
    },
    {
        name: 'Graduation Cap',
        unified: '1F393',
        keywords: [
            'school',
            'college',
            'degree',
            'university',
            'graduation',
            'cap',
            'hat',
            'legal',
            'learn',
            'education'
        ],
        sheet: [8, 38],
        shortName: 'mortar_board'
    },
    {
        name: 'Billed Cap',
        unified: '1F9E2',
        sheet: [46, 24],
        hidden: ['messenger'],
        shortName: 'billed_cap'
    },
    {
        name: 'Helmet with White Cross',
        unified: '26D1-FE0F',
        sheet: [48, 33],
        hidden: ['messenger'],
        shortName: 'helmet_with_white_cross'
    },
    {
        name: 'Prayer Beads',
        unified: '1F4FF',
        keywords: ['dhikr', 'religious'],
        sheet: [27, 1],
        hidden: ['messenger'],
        shortName: 'prayer_beads'
    },
    {
        name: 'Lipstick',
        unified: '1F484',
        keywords: [
            'female',
            'girl',
            'fashion',
            'woman'
        ],
        sheet: [23, 43],
        shortName: 'lipstick'
    },
    {
        name: 'Ring',
        unified: '1F48D',
        keywords: [
            'wedding',
            'propose',
            'marriage',
            'valentines',
            'diamond',
            'fashion',
            'jewelry',
            'gem',
            'engagement'
        ],
        sheet: [24, 39],
        shortName: 'ring'
    },
    {
        name: 'Gem Stone',
        unified: '1F48E',
        keywords: [
            'blue',
            'ruby',
            'diamond',
            'jewelry'
        ],
        sheet: [24, 40],
        shortName: 'gem'
    }
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var skins = [
    {
        name: 'Emoji Modifier Fitzpatrick Type-1-2',
        unified: '1F3FB',
        sheet: [12, 25],
        hidden: ['messenger'],
        shortName: 'skin-tone-2'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-3',
        unified: '1F3FC',
        sheet: [12, 26],
        hidden: ['messenger'],
        shortName: 'skin-tone-3'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-4',
        unified: '1F3FD',
        sheet: [12, 27],
        hidden: ['messenger'],
        shortName: 'skin-tone-4'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-5',
        unified: '1F3FE',
        sheet: [12, 28],
        hidden: ['messenger'],
        shortName: 'skin-tone-5'
    },
    {
        name: 'Emoji Modifier Fitzpatrick Type-6',
        unified: '1F3FF',
        sheet: [12, 29],
        hidden: ['messenger'],
        shortName: 'skin-tone-6'
    }
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
/** @type {?} */
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
/** @type {?} */
var DEFAULT_BACKGROUNDFN = function (set, sheetSize) { return "https://unpkg.com/emoji-datasource-" + set + "@4.0.4/img/" + set + "/sheets-256/" + sheetSize + ".png"; };
var EmojiService = /** @class */ /*@__PURE__*/ (function () {
    function EmojiService() {
        this.uncompressed = false;
        this.names = {};
        this.emojis = [];
        if (!this.uncompressed) {
            this.uncompress(emojis);
            this.uncompressed = true;
        }
    }
    /**
     * @param {?} list
     * @return {?}
     */
    EmojiService.prototype.uncompress = /**
     * @param {?} list
     * @return {?}
     */
        function (list) {
            var _this = this;
            this.emojis = list.map(function (emoji) {
                var e_1, _a;
                /** @type {?} */
                var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emoji);
                if (!data.shortNames) {
                    data.shortNames = [];
                }
                data.shortNames.unshift(data.shortName);
                data.id = data.shortName;
                data.native = _this.unifiedToNative(data.unified);
                if (!data.skinVariations) {
                    data.skinVariations = [];
                }
                if (!data.keywords) {
                    data.keywords = [];
                }
                if (!data.emoticons) {
                    data.emoticons = [];
                }
                if (!data.hidden) {
                    data.hidden = [];
                }
                if (!data.text) {
                    data.text = '';
                }
                if (data.obsoletes) {
                    // get keywords from emoji that it obsoletes since that is shared
                    /** @type {?} */
                    var f = list.find(function (x) { return x.unified === data.obsoletes; });
                    if (f) {
                        if (f.keywords) {
                            data.keywords = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(data.keywords, f.keywords, [f.shortName]);
                        }
                        else {
                            data.keywords = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(data.keywords, [f.shortName]);
                        }
                    }
                }
                _this.names[data.unified] = data;
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(data.shortNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var n = _c.value;
                        _this.names[n] = data;
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return data;
            });
        };
    /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    EmojiService.prototype.getData = /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
        function (emoji, skin, set) {
            /** @type {?} */
            var emojiData;
            if (typeof emoji === 'string') {
                /** @type {?} */
                var matches = emoji.match(COLONS_REGEX);
                if (matches) {
                    emoji = matches[1];
                    if (matches[2]) {
                        skin = ( /** @type {?} */(parseInt(matches[2], 10)));
                    }
                }
                if (this.names.hasOwnProperty(emoji)) {
                    emojiData = this.names[emoji];
                }
                else {
                    return null;
                }
            }
            else if (emoji.id) {
                emojiData = this.names[emoji.id];
            }
            else if (emoji.unified) {
                emojiData = this.names[emoji.unified.toUpperCase()];
            }
            if (!emojiData) {
                emojiData = emoji;
                emojiData.custom = true;
            }
            /** @type {?} */
            var hasSkinVariations = emojiData.skinVariations && emojiData.skinVariations.length;
            if (hasSkinVariations && skin && skin > 1 && set) {
                emojiData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emojiData);
                /** @type {?} */
                var skinKey_1 = SKINS[skin - 1];
                /** @type {?} */
                var variationData = emojiData.skinVariations.find(function (n) {
                    return n.unified.includes(skinKey_1);
                });
                if (!variationData.hidden || !variationData.hidden.includes(set)) {
                    emojiData.skinTone = skin;
                    emojiData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emojiData, variationData);
                }
                emojiData.native = this.unifiedToNative(emojiData.unified);
            }
            emojiData.set = set || '';
            return ( /** @type {?} */(emojiData));
        };
    /**
     * @param {?} unified
     * @return {?}
     */
    EmojiService.prototype.unifiedToNative = /**
     * @param {?} unified
     * @return {?}
     */
        function (unified) {
            /** @type {?} */
            var codePoints = unified.split('-').map(function (u) { return parseInt("0x" + u, 16); });
            return String.fromCodePoint.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(codePoints));
        };
    /**
     * @param {?} sheet
     * @param {?=} set
     * @param {?=} size
     * @param {?=} sheetSize
     * @param {?=} backgroundImageFn
     * @param {?=} sheetColumns
     * @return {?}
     */
    EmojiService.prototype.emojiSpriteStyles = /**
     * @param {?} sheet
     * @param {?=} set
     * @param {?=} size
     * @param {?=} sheetSize
     * @param {?=} backgroundImageFn
     * @param {?=} sheetColumns
     * @return {?}
     */
        function (sheet, set, size, sheetSize, backgroundImageFn, sheetColumns) {
            if (set === void 0) {
                set = 'apple';
            }
            if (size === void 0) {
                size = 24;
            }
            if (sheetSize === void 0) {
                sheetSize = 64;
            }
            if (backgroundImageFn === void 0) {
                backgroundImageFn = DEFAULT_BACKGROUNDFN;
            }
            if (sheetColumns === void 0) {
                sheetColumns = 52;
            }
            return {
                width: size + "px",
                height: size + "px",
                display: 'inline-block',
                'background-image': "url(" + backgroundImageFn(set, sheetSize) + ")",
                'background-size': 100 * sheetColumns + "%",
                'background-position': this.getSpritePosition(sheet, sheetColumns),
            };
        };
    /**
     * @param {?} sheet
     * @param {?} sheetColumns
     * @return {?}
     */
    EmojiService.prototype.getSpritePosition = /**
     * @param {?} sheet
     * @param {?} sheetColumns
     * @return {?}
     */
        function (sheet, sheetColumns) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(sheet, 2), sheet_x = _a[0], sheet_y = _a[1];
            /** @type {?} */
            var multiply = 100 / (sheetColumns - 1);
            return multiply * sheet_x + "% " + multiply * sheet_y + "%";
        };
    /**
     * @param {?} emoji
     * @return {?}
     */
    EmojiService.prototype.sanitize = /**
     * @param {?} emoji
     * @return {?}
     */
        function (emoji) {
            if (emoji === null) {
                return null;
            }
            /** @type {?} */
            var id = emoji.id || emoji.shortNames[0];
            /** @type {?} */
            var colons = ":" + id + ":";
            if (emoji.skinTone) {
                colons += ":skin-tone-" + emoji.skinTone + ":";
            }
            emoji.colons = colons;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emoji);
        };
    /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    EmojiService.prototype.getSanitizedData = /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
        function (emoji, skin, set) {
            return this.sanitize(this.getData(emoji, skin, set));
        };
    /** @nocollapse */ EmojiService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function EmojiService_Factory() { return new EmojiService(); }, token: EmojiService, providedIn: "root" });
    return EmojiService;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiComponent = /** @class */ /*@__PURE__*/ (function () {
    function EmojiComponent(emojiService) {
        this.emojiService = emojiService;
        this.skin = 1;
        this.set = 'apple';
        this.sheetSize = 64;
        /**
         * Renders the native unicode emoji
         */
        this.isNative = false;
        this.forceSize = false;
        this.tooltip = false;
        this.size = 24;
        this.emoji = '';
        this.hideObsolete = false;
        this.SHEET_COLUMNS = 52;
        this.emojiOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.emojiLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.emojiClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.title = '';
        this.custom = false;
        this.isVisible = true;
        // TODO: replace 4.0.3 w/ dynamic get verison from emoji-datasource in package.json
        this.backgroundImageFn = DEFAULT_BACKGROUNDFN;
    }
    /**
     * @return {?}
     */
    EmojiComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
        function () {
            if (!this.emoji) {
                return (this.isVisible = false);
            }
            /** @type {?} */
            var data = this.getData();
            if (!data) {
                return (this.isVisible = false);
            }
            // const children = this.children;
            this.unified = data.native || null;
            if (data.custom) {
                this.custom = data.custom;
            }
            if (!data.unified && !data.custom) {
                return (this.isVisible = false);
            }
            if (this.tooltip) {
                this.title = data.shortNames[0];
            }
            if (data.obsoletedBy && this.hideObsolete) {
                return (this.isVisible = false);
            }
            if (this.isNative && data.unified && data.native) {
                // hide older emoji before the split into gendered emoji
                this.style = { fontSize: this.size + "px" };
                if (this.forceSize) {
                    this.style.display = 'inline-block';
                    this.style.width = this.size + "px";
                    this.style.height = this.size + "px";
                }
            }
            else if (data.custom) {
                this.style = {
                    width: this.size + "px",
                    height: this.size + "px",
                    display: 'inline-block',
                };
                if (data.spriteUrl && this.sheetRows && this.sheetColumns) {
                    this.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.style, { backgroundImage: "url(" + data.spriteUrl + ")", backgroundSize: 100 * this.sheetColumns + "% " + 100 *
                            this.sheetRows + "%", backgroundPosition: this.emojiService.getSpritePosition(data.sheet, this.sheetColumns) });
                }
                else {
                    this.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.style, { backgroundImage: "url(" + data.imageUrl + ")", backgroundSize: 'contain' });
                }
            }
            else {
                if (data.hidden.length && data.hidden.includes(this.set)) {
                    if (this.fallback) {
                        this.style = { fontSize: this.size + "px" };
                        this.unified = this.fallback(data, this);
                    }
                    else {
                        return (this.isVisible = false);
                    }
                }
                else {
                    this.style = this.emojiService.emojiSpriteStyles(data.sheet, this.set, this.size, this.sheetSize, this.backgroundImageFn, this.SHEET_COLUMNS);
                }
            }
            return (this.isVisible = true);
        };
    /**
     * @return {?}
     */
    EmojiComponent.prototype.getData = /**
     * @return {?}
     */
        function () {
            return this.emojiService.getData(this.emoji, this.skin, this.set);
        };
    /**
     * @return {?}
     */
    EmojiComponent.prototype.getSanitizedData = /**
     * @return {?}
     */
        function () {
            return ( /** @type {?} */(this.emojiService.getSanitizedData(this.emoji, this.skin, this.set)));
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    EmojiComponent.prototype.handleClick = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            /** @type {?} */
            var emoji = this.getSanitizedData();
            this.emojiClick.emit({ emoji: emoji, $event: $event });
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    EmojiComponent.prototype.handleOver = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            /** @type {?} */
            var emoji = this.getSanitizedData();
            this.emojiOver.emit({ emoji: emoji, $event: $event });
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    EmojiComponent.prototype.handleLeave = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            /** @type {?} */
            var emoji = this.getSanitizedData();
            this.emojiLeave.emit({ emoji: emoji, $event: $event });
        };
    return EmojiComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmojiModule = /** @class */ /*@__PURE__*/ (function () {
    function EmojiModule() {
    }
    return EmojiModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.ngfactory.js":
/*!***************************************************************************************************************!*\
  !*** ./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_NewConversationModalComponent, View_NewConversationModalComponent_0, View_NewConversationModalComponent_Host_0, NewConversationModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewConversationModalComponent", function() { return RenderType_NewConversationModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewConversationModalComponent_0", function() { return View_NewConversationModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewConversationModalComponent_Host_0", function() { return View_NewConversationModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewConversationModalComponentNgFactory", function() { return NewConversationModalComponentNgFactory; });
/* harmony import */ var _new_conversation_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-conversation-modal.component.scss.shim.ngstyle */ "./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_conversation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-conversation-modal.component */ "./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/conversation-service */ "./src/app/conversations/shared/services/conversation-service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */







var styles_NewConversationModalComponent = [_new_conversation_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NewConversationModalComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NewConversationModalComponent, data: {} });

function View_NewConversationModalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorMessage; _ck(_v, 1, 0, currVal_0); }); }
function View_NewConversationModalComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Phone number is required"]))], null, null); }
function View_NewConversationModalComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback d-block mb-2 ml-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewConversationModalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.newConversationForm.controls["phoneNumber"].hasError("required"); _ck(_v, 2, 0, currVal_0); }, null); }
function View_NewConversationModalComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "invalid-feedback d-block ml-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Message text is required"]))], null, null); }
function View_NewConversationModalComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New Conversation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "close-button"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.close() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "\u274C"], ["aria-hidden", "true"], ["src", "../static/upbook/dist/assets/images/close_button.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 23, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewConversationModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 20, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            if (("submit" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "input", [["formControlName", "phoneNumber"], ["name", "phoneNumber"], ["placeholder", "Phone number"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewConversationModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "textarea", [["cols", "30"], ["formControlName", "message"], ["name", "message"], ["placeholder", "Type message"], ["rows", "3"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewConversationModalComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "div", [["class", "modal-footer text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "button", [["class", "btn btn-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.send() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "i", [["class", "fa fa-spinner fa-spin mr-2"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Send "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorMessage; _ck(_v, 7, 0, currVal_0); var currVal_8 = _co.newConversationForm; _ck(_v, 10, 0, currVal_8); var currVal_16 = "phoneNumber"; _ck(_v, 16, 0, currVal_16); var currVal_17 = _co.isInvalid("phoneNumber"); _ck(_v, 20, 0, currVal_17); var currVal_25 = "message"; _ck(_v, 24, 0, currVal_25); var currVal_26 = _co.isInvalid("message"); _ck(_v, 28, 0, currVal_26); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPending; _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending; _ck(_v, 21, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_27 = (_co.newConversationForm.invalid || _co.isPending); _ck(_v, 30, 0, currVal_27); var currVal_28 = !_co.isPending; _ck(_v, 31, 0, currVal_28); });
}
function View_NewConversationModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_NewConversationModalComponent_0, RenderType_NewConversationModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _new_conversation_modal_component__WEBPACK_IMPORTED_MODULE_4__["NewConversationModalComponent"], [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"], _shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_6__["ConversationsService"]], null, null)], null, null); }
var NewConversationModalComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _new_conversation_modal_component__WEBPACK_IMPORTED_MODULE_4__["NewConversationModalComponent"], View_NewConversationModalComponent_Host_0, {}, { isPending: "isPending" }, []);




/***/ }),

/***/ "./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.scss.shim.ngstyle.js":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************/
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
var styles = ["form[_ngcontent-%COMP%] {\n  font-size: 1.1rem; }\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 10px 0; }\n\nbutton[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n  outline: none; }\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none; }\n\ntextarea[_ngcontent-%COMP%], input[type='text'][_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e2e2;\n  border-radius: 4px;\n  padding: 10px; }\n\n.modal-header[_ngcontent-%COMP%] {\n  align-items: center; }\n\n.close-button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer; }\n\n.close-button[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  cursor: default; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1bmFyZC9jb2RlL3VwYm9vay1jbGllbnQtbWlncmF0aW9uL3NyYy9hcHAvY29udmVyc2F0aW9ucy9jb21wb25lbnRzL25ldy1jb252ZXJzYXRpb24tbW9kYWwvbmV3LWNvbnZlcnNhdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjs7RUFFRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUFHRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7O0VBRUUsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFHakI7O0VBRUUsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udmVyc2F0aW9ucy9jb21wb25lbnRzL25ldy1jb252ZXJzYXRpb24tbW9kYWwvbmV3LWNvbnZlcnNhdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5idXR0b246Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhLFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsb3NlLWJ1dHRvbjpkaXNhYmxlZCxcbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4iXX0= */"];




/***/ }),

/***/ "./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NewConversationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewConversationModalComponent", function() { return NewConversationModalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/validators/validators.service */ "./src/app/shared/validators/validators.service.ts");


var NewConversationModalComponent = /** @class */ /*@__PURE__*/ (function () {
    function NewConversationModalComponent(bsModalRef, conversationsService) {
        this.bsModalRef = bsModalRef;
        this.conversationsService = conversationsService;
        this.isPending = false;
        this.errorMessage = undefined;
        this.newConversationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"].noWhitespaceValidator])
        });
    }
    /**
     * Checks the form for validity, return new conversation values, and closes the modal
     */
    NewConversationModalComponent.prototype.send = function () {
        var _this = this;
        if (this.newConversationForm.invalid || this.isPending) {
            return;
        }
        this.errorMessage = undefined;
        this.isPending = true;
        this.conversationsService
            .startConversation(this.newConversationForm.value)
            .then(function () {
            _this.isPending = false;
            _this.bsModalRef.hide();
        })
            .catch(function (error) {
            _this.errorMessage = error.error.message;
            _this.isPending = false;
        });
    };
    /**
     * Closes the modal
     */
    NewConversationModalComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    /**
     * Shows whether is attribute invalid
     * @param attribute
     */
    NewConversationModalComponent.prototype.isInvalid = function (attribute) {
        return this.newConversationForm.controls[attribute].invalid && this.newConversationForm.controls[attribute].touched;
    };
    return NewConversationModalComponent;
}());




/***/ }),

/***/ "./src/app/conversations/conversations.module.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/conversations/conversations.module.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: ConversationsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsModuleNgFactory", function() { return ConversationsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conversations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversations.module */ "./src/app/conversations/conversations.module.ts");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_modal_backdrop_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/modal/modal-backdrop.component.ngfactory */ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_modal_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/modal/modal-container.component.ngfactory */ "./node_modules/ngx-bootstrap/modal/modal-container.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
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
/* harmony import */ var _components_new_conversation_modal_new_conversation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/new-conversation-modal/new-conversation-modal.component.ngfactory */ "./src/app/conversations/components/new-conversation-modal/new-conversation-modal.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_base_path_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../api/base-path.interceptor */ "./src/app/api/base-path.interceptor.ts");
/* harmony import */ var _api_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../api/auth.interceptor */ "./src/app/api/auth.interceptor.ts");
/* harmony import */ var _shared_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/loader/loader.interceptor */ "./src/app/shared/loader/loader.interceptor.ts");
/* harmony import */ var _api_system_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../api/system.interceptor */ "./src/app/api/system.interceptor.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _store_loader_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../store/loader-store */ "./src/app/store/loader-store.ts");
/* harmony import */ var _api_company_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../api/company.service */ "./src/app/api/company.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _api_feedback_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../api/feedback.service */ "./src/app/api/feedback.service.ts");
/* harmony import */ var _api_reports_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../api/reports.service */ "./src/app/api/reports.service.ts");
/* harmony import */ var _api_target_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../api/target.service */ "./src/app/api/target.service.ts");
/* harmony import */ var _api_payment_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../api/payment.service */ "./src/app/api/payment.service.ts");
/* harmony import */ var _api_rewards_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../api/rewards.service */ "./src/app/api/rewards.service.ts");
/* harmony import */ var _api_system_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../api/system.service */ "./src/app/api/system.service.ts");
/* harmony import */ var _api_activity_log_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../api/activity-log.service */ "./src/app/api/activity-log.service.ts");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var ngx_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-bootstrap/carousel/carousel.config */ "./node_modules/ngx-bootstrap/carousel/carousel.config.js");
/* harmony import */ var ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-bootstrap/positioning/positioning.service */ "./node_modules/ngx-bootstrap/positioning/positioning.service.js");
/* harmony import */ var ngx_bootstrap_component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-bootstrap/component-loader/component-loader.factory */ "./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal.service */ "./node_modules/ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../shared/confirmation-modal/confirmation-modal.service */ "./src/app/shared/confirmation-modal/confirmation-modal.service.ts");
/* harmony import */ var ngx_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-bootstrap/tooltip/tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var ngx_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-bootstrap/timepicker/timepicker.config */ "./node_modules/ngx-bootstrap/timepicker/timepicker.config.js");
/* harmony import */ var ngx_bootstrap_timepicker_reducer_timepicker_actions__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-bootstrap/timepicker/reducer/timepicker.actions */ "./node_modules/ngx-bootstrap/timepicker/reducer/timepicker.actions.js");
/* harmony import */ var ngx_bootstrap_timepicker_reducer_timepicker_store__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-bootstrap/timepicker/reducer/timepicker.store */ "./node_modules/ngx-bootstrap/timepicker/reducer/timepicker.store.js");
/* harmony import */ var _shared_aws_services_aws_s3_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../shared/aws-services/aws-s3-service */ "./src/app/shared/aws-services/aws-s3-service.ts");
/* harmony import */ var _shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../shared/validators/validators.service */ "./src/app/shared/validators/validators.service.ts");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../shared/auth/auth.guard */ "./src/app/shared/auth/auth.guard.ts");
/* harmony import */ var _shared_company_selected_company_selected_guard__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../shared/company-selected/company-selected.guard */ "./src/app/shared/company-selected/company-selected.guard.ts");
/* harmony import */ var _shared_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../shared/auth/non-auth.guard */ "./src/app/shared/auth/non-auth.guard.ts");
/* harmony import */ var _shared_can_deactivate_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../shared/can-deactivate/can-deactivate.guard */ "./src/app/shared/can-deactivate/can-deactivate.guard.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./shared/services/api-service */ "./src/app/conversations/shared/services/api-service.ts");
/* harmony import */ var _shared_services_conversations_real_time_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shared/services/conversations-real-time-service */ "./src/app/conversations/shared/services/conversations-real-time-service.ts");
/* harmony import */ var _shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./shared/services/conversation-service */ "./src/app/conversations/shared/services/conversation-service.ts");
/* harmony import */ var _shared_services_attachment_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./shared/services/attachment-service */ "./src/app/conversations/shared/services/attachment-service.ts");
/* harmony import */ var _shared_services_note_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./shared/services/note-service */ "./src/app/conversations/shared/services/note-service.ts");
/* harmony import */ var _shared_services_chat_settings_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./shared/services/chat-settings-service */ "./src/app/conversations/shared/services/chat-settings-service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./shared/services/message-service */ "./src/app/conversations/shared/services/message-service.ts");
/* harmony import */ var ngx_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ngx-bootstrap/modal/modal.module */ "./node_modules/ngx-bootstrap/modal/modal.module.js");
/* harmony import */ var ngx_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ngx-bootstrap/timepicker/timepicker.module */ "./node_modules/ngx-bootstrap/timepicker/timepicker.module.js");
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ "./node_modules/@ctrl/ngx-emoji-mart/ngx-emoji/fesm5/ctrl-ngx-emoji-mart-ngx-emoji.js");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/fesm5/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../api/api.module */ "./src/app/api/api.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown_bs_dropdown_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ngx-bootstrap/dropdown/bs-dropdown.module */ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.module.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! mobx-angular */ "./node_modules/mobx-angular/dist/mobx-angular.js");
/* harmony import */ var ngx_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ngx-bootstrap/tooltip/tooltip.module */ "./node_modules/ngx-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var ngx_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ngx-bootstrap/collapse/collapse.module */ "./node_modules/ngx-bootstrap/collapse/collapse.module.js");
/* harmony import */ var ngx_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ngx-bootstrap/carousel/carousel.module */ "./node_modules/ngx-bootstrap/carousel/carousel.module.js");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../shared/confirmation-modal/confirmation-modal.module */ "./src/app/shared/confirmation-modal/confirmation-modal.module.ts");
/* harmony import */ var _inline_svg_inline_svg_module__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../inline-svg/inline-svg.module */ "./src/app/inline-svg/inline-svg.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */










































































var ConversationsModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_conversations_module__WEBPACK_IMPORTED_MODULE_1__["ConversationsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ngx_bootstrap_modal_modal_backdrop_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ModalBackdropComponentNgFactory"], _node_modules_ngx_bootstrap_modal_modal_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ModalContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵEmptyOutletComponentNgFactory"], _node_modules_ngx_bootstrap_dropdown_bs_dropdown_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["BsDropdownContainerComponentNgFactory"], _node_modules_ngx_bootstrap_tooltip_tooltip_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipContainerComponentNgFactory"], _shared_confirmation_modal_confirmation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ConfirmationModalComponentNgFactory"], _shared_enter_pin_modal_enter_pin_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["EnterPinModalComponentNgFactory"], _shared_call_details_modal_call_details_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CallDetailsModalComponentNgFactory"], _shared_call_update_modal_call_update_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CallUpdateModalComponentNgFactory"], _shared_initials_modal_initials_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["InitialsModalComponentNgFactory"], _shared_manage_user_modal_member_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["MemberModalComponentNgFactory"], _shared_verify_bank_modal_verify_bank_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["VerifyBankModalComponentNgFactory"], _shared_chat_settings_modal_chat_settings_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ChatSettingsModalComponentNgFactory"], _shared_send_individual_reward_modal_send_individual_reward_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["SendIndividualRewardModalComponentNgFactory"], _components_new_conversation_modal_new_conversation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["NewConversationModalComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], function (p0_0, p2_0, p2_1, p2_2, p3_0, p4_0) { return [p0_0, new _api_base_path_interceptor__WEBPACK_IMPORTED_MODULE_20__["BasePathInterceptor"](), new _api_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthHttpInterceptor"](p2_0, p2_1, p2_2), new _shared_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_22__["LoaderInterceptor"](p3_0), new _api_system_interceptor__WEBPACK_IMPORTED_MODULE_23__["SystemInterceptor"](p4_0)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_h"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _api_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrService"], _store_loader_store__WEBPACK_IMPORTED_MODULE_27__["LoaderStore"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_company_service__WEBPACK_IMPORTED_MODULE_28__["CompanyService"], _api_company_service__WEBPACK_IMPORTED_MODULE_28__["CompanyService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_29__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_user_service__WEBPACK_IMPORTED_MODULE_30__["UserService"], _api_user_service__WEBPACK_IMPORTED_MODULE_30__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_feedback_service__WEBPACK_IMPORTED_MODULE_31__["FeedbackService"], _api_feedback_service__WEBPACK_IMPORTED_MODULE_31__["FeedbackService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_reports_service__WEBPACK_IMPORTED_MODULE_32__["ReportsService"], _api_reports_service__WEBPACK_IMPORTED_MODULE_32__["ReportsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_target_service__WEBPACK_IMPORTED_MODULE_33__["TargetService"], _api_target_service__WEBPACK_IMPORTED_MODULE_33__["TargetService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_payment_service__WEBPACK_IMPORTED_MODULE_34__["PaymentService"], _api_payment_service__WEBPACK_IMPORTED_MODULE_34__["PaymentService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_rewards_service__WEBPACK_IMPORTED_MODULE_35__["RewardsService"], _api_rewards_service__WEBPACK_IMPORTED_MODULE_35__["RewardsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_system_service__WEBPACK_IMPORTED_MODULE_36__["SystemService"], _api_system_service__WEBPACK_IMPORTED_MODULE_36__["SystemService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_activity_log_service__WEBPACK_IMPORTED_MODULE_37__["ActivityLogService"], _api_activity_log_service__WEBPACK_IMPORTED_MODULE_37__["ActivityLogService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_38__["AmChartsService"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_38__["AmChartsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_39__["CarouselConfig"], ngx_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_39__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_40__["PositioningService"], ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_40__["PositioningService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_41__["ComponentLoaderFactory"], ngx_bootstrap_component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_41__["ComponentLoaderFactory"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_bootstrap_positioning_positioning_service__WEBPACK_IMPORTED_MODULE_40__["PositioningService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_42__["BsModalService"], ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_42__["BsModalService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], ngx_bootstrap_component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_41__["ComponentLoaderFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_confirmation_modal_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_43__["ConfirmationModalService"], _shared_confirmation_modal_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_43__["ConfirmationModalService"], [ngx_bootstrap_modal_bs_modal_service__WEBPACK_IMPORTED_MODULE_42__["BsModalService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_44__["TooltipConfig"], ngx_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_44__["TooltipConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_45__["TimepickerConfig"], ngx_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_45__["TimepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker_reducer_timepicker_actions__WEBPACK_IMPORTED_MODULE_46__["TimepickerActions"], ngx_bootstrap_timepicker_reducer_timepicker_actions__WEBPACK_IMPORTED_MODULE_46__["TimepickerActions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker_reducer_timepicker_store__WEBPACK_IMPORTED_MODULE_47__["TimepickerStore"], ngx_bootstrap_timepicker_reducer_timepicker_store__WEBPACK_IMPORTED_MODULE_47__["TimepickerStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_aws_services_aws_s3_service__WEBPACK_IMPORTED_MODULE_48__["AWSS3Service"], _shared_aws_services_aws_s3_service__WEBPACK_IMPORTED_MODULE_48__["AWSS3Service"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_49__["ValidationService"], _shared_validators_validators_service__WEBPACK_IMPORTED_MODULE_49__["ValidationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_50__["AuthenticatedGuard"], _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_50__["AuthenticatedGuard"], [_api_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_company_selected_company_selected_guard__WEBPACK_IMPORTED_MODULE_51__["CompanySelectedGuard"], _shared_company_selected_company_selected_guard__WEBPACK_IMPORTED_MODULE_51__["CompanySelectedGuard"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_29__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_52__["NonAuthenticatedGuard"], _shared_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_52__["NonAuthenticatedGuard"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_29__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_can_deactivate_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_53__["CanDeactivateGuard"], _shared_can_deactivate_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_53__["CanDeactivateGuard"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__["ConversationsApiService"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__["ConversationsApiService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_conversations_real_time_service__WEBPACK_IMPORTED_MODULE_55__["ConversationsRealTimeService"], _shared_services_conversations_real_time_service__WEBPACK_IMPORTED_MODULE_55__["ConversationsRealTimeService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_56__["ConversationsService"], _shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_56__["ConversationsService"], [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__["ConversationsApiService"], _shared_services_conversations_real_time_service__WEBPACK_IMPORTED_MODULE_55__["ConversationsRealTimeService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_29__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_attachment_service__WEBPACK_IMPORTED_MODULE_57__["AttachmentsService"], _shared_services_attachment_service__WEBPACK_IMPORTED_MODULE_57__["AttachmentsService"], [_shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_56__["ConversationsService"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__["ConversationsApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_note_service__WEBPACK_IMPORTED_MODULE_58__["NotesService"], _shared_services_note_service__WEBPACK_IMPORTED_MODULE_58__["NotesService"], [_shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_56__["ConversationsService"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__["ConversationsApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_chat_settings_service__WEBPACK_IMPORTED_MODULE_59__["ChatSettingsService"], _shared_services_chat_settings_service__WEBPACK_IMPORTED_MODULE_59__["ChatSettingsService"], [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__["ConversationsApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_message_service__WEBPACK_IMPORTED_MODULE_60__["MessagesService"], _shared_services_message_service__WEBPACK_IMPORTED_MODULE_60__["MessagesService"], [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_54__["ConversationsApiService"], _shared_services_conversation_service__WEBPACK_IMPORTED_MODULE_56__["ConversationsService"], _shared_services_conversations_real_time_service__WEBPACK_IMPORTED_MODULE_55__["ConversationsRealTimeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_61__["ModalModule"], ngx_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_61__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_62__["TimepickerModule"], ngx_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_62__["TimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_63__["EmojiModule"], _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_63__["EmojiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_64__["PickerModule"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_64__["PickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _api_api_module__WEBPACK_IMPORTED_MODULE_65__["ApiModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_65__["ApiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_dropdown_bs_dropdown_module__WEBPACK_IMPORTED_MODULE_66__["BsDropdownModule"], ngx_bootstrap_dropdown_bs_dropdown_module__WEBPACK_IMPORTED_MODULE_66__["BsDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_38__["AmChartsModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_38__["AmChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, mobx_angular__WEBPACK_IMPORTED_MODULE_67__["MobxAngularModule"], mobx_angular__WEBPACK_IMPORTED_MODULE_67__["MobxAngularModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_68__["TooltipModule"], ngx_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_68__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_69__["CollapseModule"], ngx_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_69__["CollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_70__["CarouselModule"], ngx_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_70__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_71__["ConfirmationModalModule"], _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_71__["ConfirmationModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _inline_svg_inline_svg_module__WEBPACK_IMPORTED_MODULE_72__["InlineSvgModule"], _inline_svg_inline_svg_module__WEBPACK_IMPORTED_MODULE_72__["InlineSvgModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_73__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_73__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _conversations_module__WEBPACK_IMPORTED_MODULE_1__["ConversationsModule"], _conversations_module__WEBPACK_IMPORTED_MODULE_1__["ConversationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });




/***/ }),

/***/ "./src/app/conversations/conversations.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/conversations/conversations.module.ts ***!
  \*******************************************************/
/*! exports provided: ConversationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsModule", function() { return ConversationsModule; });
var ConversationsModule = /** @class */ /*@__PURE__*/ (function () {
    function ConversationsModule() {
    }
    return ConversationsModule;
}());




/***/ }),

/***/ "./src/app/conversations/shared/services/api-service.ts":
/*!**************************************************************!*\
  !*** ./src/app/conversations/shared/services/api-service.ts ***!
  \**************************************************************/
/*! exports provided: ConversationsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsApiService", function() { return ConversationsApiService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

var conversationUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].CONVERSATION_BASE_URL;
// models
var ConversationsApiService = /** @class */ /*@__PURE__*/ (function () {
    function ConversationsApiService(http) {
        this.http = http;
    }
    ConversationsApiService.prototype.get = function (url) {
        return this.http.get(conversationUrl + "/" + url);
    };
    ConversationsApiService.prototype.post = function (url, data) {
        return this.http.post(conversationUrl + "/" + url, data);
    };
    ConversationsApiService.prototype.file = function (url) {
        return this.http.get(conversationUrl + "/" + url, {
            responseType: 'blob',
            observe: 'body'
        });
    };
    return ConversationsApiService;
}());




/***/ }),

/***/ "./src/app/conversations/shared/services/attachment-service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/conversations/shared/services/attachment-service.ts ***!
  \*********************************************************************/
/*! exports provided: AttachmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsService", function() { return AttachmentsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// RxJS

var AttachmentsService = /** @class */ /*@__PURE__*/ (function () {
    function AttachmentsService(conversationService, apiService, rendererFactory) {
        var _this = this;
        this.conversationService = conversationService;
        this.apiService = apiService;
        this._userAttachmentsStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.renderer = rendererFactory.createRenderer(null, null);
        this.conversationService.currentConversation.subscribe(function (currentConversation) {
            if (currentConversation === null) {
                _this._userAttachmentsStream.next([]);
            }
            else if (currentConversation.contact != null) {
                _this.apiService
                    .get('Contact/Attachment/' + currentConversation.contact.contactId)
                    .subscribe(function (attachments) {
                    _this._userAttachmentsStream.next(attachments);
                });
            }
        });
    }
    Object.defineProperty(AttachmentsService.prototype, "userAttachments", {
        get: function () {
            return this._userAttachmentsStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tries to store uploaded file and put it in the list of current conversation attachments
     */
    AttachmentsService.prototype.addAttachment = function (formData) {
        var _this = this;
        return this.storeAttachment(formData).then(function (uploadedAttachment) {
            var currentAttachments = _this._userAttachmentsStream.getValue();
            currentAttachments.push(uploadedAttachment);
            _this._userAttachmentsStream.next(currentAttachments);
            return true;
        });
    };
    /**
     * Tries to store an uploaded file
     */
    AttachmentsService.prototype.storeAttachment = function (formData) {
        var currentConversation = this.conversationService.currentConversationSnapshot;
        var contactId = currentConversation.contact.contactId;
        return this.apiService.post('Contact/Attachment/' + contactId, formData).toPromise();
    };
    /**
     * Loads a file from the server and sends it to client's device
     * @param attachment Attachment that should be loaded
     */
    AttachmentsService.prototype.downloadAttachment = function (attachment) {
        var _this = this;
        this.apiService
            .file('Contact/Attachment/Download/' + attachment.attachmentId)
            .toPromise()
            .then(function (res) {
            var url = window.URL.createObjectURL(res);
            var a = _this.renderer.createElement('a');
            _this.renderer.appendChild(document.body, a);
            _this.renderer.setStyle(a, 'display', 'none');
            _this.renderer.setAttribute(a, 'href', url);
            _this.renderer.setAttribute(a, 'download', attachment.fileName);
            a.click();
            window.URL.revokeObjectURL(url);
            _this.renderer.removeChild(document.body, a);
        });
    };
    return AttachmentsService;
}());




/***/ }),

/***/ "./src/app/conversations/shared/services/conversation-service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/conversations/shared/services/conversation-service.ts ***!
  \***********************************************************************/
/*! exports provided: ConversationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsService", function() { return ConversationsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// RxJS


// services


var ConversationsService = /** @class */ /*@__PURE__*/ (function () {
    function ConversationsService(apiService, realTimeService, store) {
        this.apiService = apiService;
        this.realTimeService = realTimeService;
        this.store = store;
        this._filters = [];
        this._conversationsStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._currentConversationStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.subscriptions = [];
    }
    ConversationsService.prototype.unsubscribe = function () {
        for (var i = 0; i < this.subscriptions.length; i++) {
            this.subscriptions[i].unsubscribe();
        }
        this.subscriptions = [];
    };
    Object.defineProperty(ConversationsService.prototype, "conversations", {
        get: function () {
            return this._conversationsStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationsService.prototype, "conversationsSnapshot", {
        get: function () {
            return this._conversationsStream.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationsService.prototype, "filters", {
        get: function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._filters);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationsService.prototype, "currentConversation", {
        get: function () {
            return this._currentConversationStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationsService.prototype, "currentConversationSnapshot", {
        get: function () {
            return this._currentConversationStream.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets or updates the conversations list filter
     * @param name Filter name
     * @param value Filter value
     */
    ConversationsService.prototype.setFilter = function (name, value) {
        var filterIndex = this._filters.findIndex(function (filter) { return filter.name === name; });
        if (filterIndex === -1) {
            this._filters.push({ name: name, value: value });
        }
        else {
            this._filters[filterIndex]['value'] = value;
        }
        this.loadConversations();
    };
    /**
     * Loads the most recent conversations
     */
    ConversationsService.prototype.loadConversations = function () {
        var _this = this;
        this.unsubscribe();
        var companyId = sessionStorage.getItem('upbookClientCompanyId');
        this.apiService.get('Conversation/' + companyId).subscribe(function (conversations) {
            _this._conversationsStream.next(conversations);
        });
        // subscribes for conversations list changes, which include new incoming and outgoing conversations
        this.realTimeService.connect();
        var conversationSubscription = this.realTimeService.conversationsStream.subscribe(function (data) {
            _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getAuthUser"])).subscribe(function (user) {
                // add at begin of list
                var conversations = _this.conversationsSnapshot;
                conversations.unshift({
                    conversationId: data.conversationId,
                    phoneNumber: data.payload.phoneNumber,
                    messagePreview: data.payload.messagePreview,
                    contact: data.payload.contact,
                    lastUpdate: data.payload.lastUpdate,
                    answeredBy: data.payload.answeredBy
                });
                // update unread counter
                if (user.id !== data.userId) {
                    if (conversations[0].unread == null) {
                        conversations[0].unread = 1;
                    }
                    else {
                        conversations[0].unread++;
                    }
                }
                _this._conversationsStream.next(conversations);
            });
        });
        this.subscriptions.push(conversationSubscription);
        // subscribes for messages changes to update messagePreview and lastUpdate properties when new message come
        var messageSubscription = this.realTimeService.messagesStream.subscribe(function (data) {
            var conversations = _this._conversationsStream.getValue();
            var messageConversationIndex = conversations.findIndex(function (conversation) {
                return conversation.conversationId === data.conversationId;
            });
            if (messageConversationIndex !== -1) {
                // message info
                var conversation = conversations[messageConversationIndex];
                conversation.messagePreview = data.payload.message;
                conversation.lastUpdate = data.payload.created;
                if (data.direction === 'in') {
                    conversation.answeredBy = '';
                }
                else {
                    conversation.answeredBy = data.payload.userFullName;
                }
                // update unread counter only if chat is not currently opened
                if (_this.currentConversationSnapshot == null ||
                    _this.currentConversationSnapshot.conversationId !== data.conversationId) {
                    // update unread counter
                    if (conversation.unread == null) {
                        conversation.unread = 1;
                    }
                    else {
                        conversation.unread++;
                    }
                }
                // reorder
                _this.moveElement(conversations, messageConversationIndex, 0);
                // update
                _this._conversationsStream.next(conversations);
            }
        });
        this.subscriptions.push(messageSubscription);
    };
    ConversationsService.prototype.chatAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var companyId;
            return __generator(this, function (_a) {
                companyId = sessionStorage.getItem('upbookClientCompanyId');
                if (!companyId) {
                    return [2 /*return*/, Promise.resolve({ success: false })];
                }
                return [2 /*return*/, this.apiService.get('Conversation/Available/' + companyId).toPromise()];
            });
        });
    };
    /**
     * Refreshes the current conversation property
     * @param conversation Chosen conversation
     */
    ConversationsService.prototype.setCurrentConversation = function (conversation) {
        this._currentConversationStream.next(null);
        this._currentConversationStream.next(conversation);
    };
    /**
     * Tries to create a conversation
     */
    ConversationsService.prototype.startConversation = function (newConversation) {
        var companyId = sessionStorage.getItem('upbookClientCompanyId');
        return this.apiService
            .post('Conversation/' + companyId, newConversation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var conversationId = _a.conversationId;
            return conversationId;
        }))
            .toPromise();
    };
    /**
     * Zero the "unread" property of a conversation which ID is equal to the ID of the passed conversation
     * Refreshes the list of conversations
     */
    ConversationsService.prototype.zeroUnreadMessages = function (conversationToUpdate) {
        var conversations = this.conversationsSnapshot;
        var conversationToUpdateIndex = conversations.findIndex(function (conversation) {
            return conversation.conversationId === conversationToUpdate.conversationId;
        });
        if (conversationToUpdateIndex !== -1) {
            conversations[conversationToUpdateIndex].unread = 0;
        }
        this._conversationsStream.next(conversations);
    };
    /**
     * Move elemtn in array (help function)
     */
    ConversationsService.prototype.moveElement = function (arr, oldIndex, newIndex) {
        if (newIndex >= arr.length) {
            var k = newIndex - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr; // for testing
    };
    return ConversationsService;
}());




/***/ }),

/***/ "./src/app/conversations/shared/services/conversations-real-time-service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/conversations/shared/services/conversations-real-time-service.ts ***!
  \**********************************************************************************/
/*! exports provided: ConversationsRealTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsRealTimeService", function() { return ConversationsRealTimeService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

// services
// import { TokenService } from 'src/app/api/token/token.service';
// import { environment } from 'src/environments/environment';
// const socketUrl = environment.CONVERSATION_SOCKET_URL;
var ConversationsRealTimeService = /** @class */ /*@__PURE__*/ (function () {
    function ConversationsRealTimeService() {
    }
    // constructor(private tokenService: TokenService) {
    //
    // }
    ConversationsRealTimeService.prototype.connect = function () {
        // const companyId = sessionStorage.getItem('upbookClientCompanyId');
        // this._eventsStream = new RxWebsocketSubject(socketUrl + `?companyId=${companyId}`, this.tokenService.getToken());
    };
    Object.defineProperty(ConversationsRealTimeService.prototype, "messagesStream", {
        /**
         * Returns an Observable that emits when new message comes which is related to conversation message
         */
        get: function () {
            return this._eventsStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (message) { return message.type != null && message.type === 'message'; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationsRealTimeService.prototype, "conversationsStream", {
        /**
         * Returns an Observable that emits when new message comes which is related to conversations
         */
        get: function () {
            return this._eventsStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (message) { return message.type != null && message.type === 'conversation'; }));
        },
        enumerable: true,
        configurable: true
    });
    return ConversationsRealTimeService;
}());




/***/ }),

/***/ "./src/app/conversations/shared/services/message-service.ts":
/*!******************************************************************!*\
  !*** ./src/app/conversations/shared/services/message-service.ts ***!
  \******************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// RxJS


var MESSAGES_PER_PAGE = 10;
var MessagesService = /** @class */ /*@__PURE__*/ (function () {
    function MessagesService(apiService, conversationService, realTimeService) {
        this.apiService = apiService;
        this.conversationService = conversationService;
        this.realTimeService = realTimeService;
        this.page = 0;
        this.allMessagesLoaded = false;
        this.subscriptions = [];
    }
    MessagesService.prototype.unsubscribe = function () {
        for (var i = 0; i < this.subscriptions.length; i++) {
            this.subscriptions[i].unsubscribe();
        }
        this.subscriptions = [];
    };
    MessagesService.prototype.LoadMessages = function () {
        var _this = this;
        this.unsubscribe();
        this._conversationMessagesStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        // refreshes a list of messages and related properties when current conversation changes
        var changeConversationSubscription = this.conversationService.currentConversation
            .subscribe(function (currentConversation) {
            if (currentConversation === null) {
                _this._conversationMessagesStream.next([]);
                _this.page = 0;
                _this.allMessagesLoaded = false;
            }
            else {
                _this.apiService
                    .get('Message/' + currentConversation.conversationId + '?page=' + _this.page)
                    .subscribe(function (conversationMessages) {
                    if (conversationMessages.length < MESSAGES_PER_PAGE) {
                        _this.allMessagesLoaded = true;
                    }
                    _this._conversationMessagesStream.next(conversationMessages);
                });
            }
        });
        this.subscriptions.push(changeConversationSubscription);
        // subscribes to new messages from sockets
        // loads only those ones which are associated to the current conversation
        // marks new messages as read
        var messagesSubscription = this.realTimeService.messagesStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (data) {
            var currentConversation = _this.conversationService.currentConversationSnapshot;
            return currentConversation !== null && currentConversation.conversationId === data.conversationId;
        }))
            .subscribe(function (data) {
            var messages = _this._conversationMessagesStream.getValue();
            messages.push({
                direction: data.direction,
                message: data.payload.message,
                userFullName: data.payload.userFullName,
                messageId: data.payload.messageId,
                created: data.payload.created
            });
            _this._conversationMessagesStream.next(messages);
            _this.markMessageAsRead(data.payload.messageId);
        });
        this.subscriptions.push(messagesSubscription);
    };
    Object.defineProperty(MessagesService.prototype, "currentConversationMessages", {
        /**
         * Returns an observable with messages sorted from the latest to the newest
         */
        get: function () {
            return this._conversationMessagesStream.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (messages) {
                messages.sort(function (first, second) {
                    return first.messageId < second.messageId ? -1 : 1;
                });
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessagesService.prototype, "currentConversationMessagesSnapshot", {
        get: function () {
            return this._conversationMessagesStream.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loads messages that were sent earlier that the last one from the current chat and adds them to the chat log
     */
    MessagesService.prototype.loadPreviousMessages = function () {
        var _this = this;
        if (!this.allMessagesLoaded) {
            var currentConversation = this.conversationService.currentConversationSnapshot;
            this.page++;
            this.apiService
                .get('Message/' + currentConversation.conversationId + '?page=' + this.page)
                .subscribe(function (previousMessages) {
                if (previousMessages.length < MESSAGES_PER_PAGE) {
                    _this.allMessagesLoaded = true;
                }
                var currentMessages = _this.currentConversationMessagesSnapshot;
                _this._conversationMessagesStream.next(previousMessages.concat(currentMessages));
            });
        }
    };
    /**
     * Sends a new message to the server
     */
    MessagesService.prototype.sendMessage = function (message) {
        return this.apiService
            .post('Message', {
            conversationId: this.conversationService.currentConversationSnapshot.conversationId,
            message: message
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var messageId = _a.messageId;
            return !!messageId;
        }))
            .toPromise();
    };
    /**
     * Sends a request to mark a message and previous ones as read
     */
    MessagesService.prototype.markMessageAsRead = function (messageId) {
        return this.apiService
            .post('Message/Read', {
            messageId: messageId
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var success = _a.success;
            return success;
        }))
            .toPromise();
    };
    return MessagesService;
}());




/***/ }),

/***/ "./src/app/conversations/shared/services/note-service.ts":
/*!***************************************************************!*\
  !*** ./src/app/conversations/shared/services/note-service.ts ***!
  \***************************************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// RxJS


var NotesService = /** @class */ /*@__PURE__*/ (function () {
    function NotesService(conversationService, apiService) {
        var _this = this;
        this.conversationService = conversationService;
        this.apiService = apiService;
        this._userNotesStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        // refreshes a list of contact notes when current conversation changes
        this.conversationService.currentConversation.subscribe(function (currentConversation) {
            if (currentConversation === null) {
                _this._userNotesStream.next([]);
            }
            else if (currentConversation.contact != null) {
                _this.apiService.get('Contact/Note/' + currentConversation.contact.contactId).subscribe(function (notes) {
                    _this._userNotesStream.next(notes);
                });
            }
        });
    }
    Object.defineProperty(NotesService.prototype, "userNotes", {
        get: function () {
            return this._userNotesStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tries to store a new note and puts it in the list of notes if the note was stored
     */
    NotesService.prototype.createNote = function (note) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storeContactNote(note).then(function (noteId) {
                        if (!!noteId) {
                            var currentNotes = _this._userNotesStream.getValue();
                            currentNotes.push({
                                noteId: noteId,
                                note: note
                            });
                        }
                        return !!noteId;
                    })];
            });
        });
    };
    /**
     * Tries to store a new note
     */
    NotesService.prototype.storeContactNote = function (note) {
        var currentConversation = this.conversationService.currentConversationSnapshot;
        return this.apiService
            .post('Contact/Note', {
            contactId: currentConversation.contact.contactId,
            note: note
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var noteId = _a.noteId;
            return noteId;
        }))
            .toPromise();
    };
    return NotesService;
}());




/***/ })

}]);
//# sourceMappingURL=3.99f7a22f3b397cd7272a.js.map