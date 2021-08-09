(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-language-language-module"],{

/***/ "./node_modules/brace/ext/searchbox.js":
/*!*********************************************!*\
  !*** ./node_modules/brace/ext/searchbox.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/keyboard/hash_handler","ace/lib/keys"], function(acequire, exports, module) {
"use strict";

var dom = acequire("../lib/dom");
var lang = acequire("../lib/lang");
var event = acequire("../lib/event");
var searchboxCss = "\
.ace_search {\
background-color: #ddd;\
color: #666;\
border: 1px solid #cbcbcb;\
border-top: 0 none;\
overflow: hidden;\
margin: 0;\
padding: 4px 6px 0 4px;\
position: absolute;\
top: 0;\
z-index: 99;\
white-space: normal;\
}\
.ace_search.left {\
border-left: 0 none;\
border-radius: 0px 0px 5px 0px;\
left: 0;\
}\
.ace_search.right {\
border-radius: 0px 0px 0px 5px;\
border-right: 0 none;\
right: 0;\
}\
.ace_search_form, .ace_replace_form {\
margin: 0 20px 4px 0;\
overflow: hidden;\
line-height: 1.9;\
}\
.ace_replace_form {\
margin-right: 0;\
}\
.ace_search_form.ace_nomatch {\
outline: 1px solid red;\
}\
.ace_search_field {\
border-radius: 3px 0 0 3px;\
background-color: white;\
color: black;\
border: 1px solid #cbcbcb;\
border-right: 0 none;\
box-sizing: border-box!important;\
outline: 0;\
padding: 0;\
font-size: inherit;\
margin: 0;\
line-height: inherit;\
padding: 0 6px;\
min-width: 17em;\
vertical-align: top;\
}\
.ace_searchbtn {\
border: 1px solid #cbcbcb;\
line-height: inherit;\
display: inline-block;\
padding: 0 6px;\
background: #fff;\
border-right: 0 none;\
border-left: 1px solid #dcdcdc;\
cursor: pointer;\
margin: 0;\
position: relative;\
box-sizing: content-box!important;\
color: #666;\
}\
.ace_searchbtn:last-child {\
border-radius: 0 3px 3px 0;\
border-right: 1px solid #cbcbcb;\
}\
.ace_searchbtn:disabled {\
background: none;\
cursor: default;\
}\
.ace_searchbtn:hover {\
background-color: #eef1f6;\
}\
.ace_searchbtn.prev, .ace_searchbtn.next {\
padding: 0px 0.7em\
}\
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {\
content: \"\";\
border: solid 2px #888;\
width: 0.5em;\
height: 0.5em;\
border-width:  2px 0 0 2px;\
display:inline-block;\
transform: rotate(-45deg);\
}\
.ace_searchbtn.next:after {\
border-width: 0 2px 2px 0 ;\
}\
.ace_searchbtn_close {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;\
border-radius: 50%;\
border: 0 none;\
color: #656565;\
cursor: pointer;\
font: 16px/16px Arial;\
padding: 0;\
height: 14px;\
width: 14px;\
top: 9px;\
right: 7px;\
position: absolute;\
}\
.ace_searchbtn_close:hover {\
background-color: #656565;\
background-position: 50% 100%;\
color: white;\
}\
.ace_button {\
margin-left: 2px;\
cursor: pointer;\
-webkit-user-select: none;\
-moz-user-select: none;\
-o-user-select: none;\
-ms-user-select: none;\
user-select: none;\
overflow: hidden;\
opacity: 0.7;\
border: 1px solid rgba(100,100,100,0.23);\
padding: 1px;\
box-sizing:    border-box!important;\
color: black;\
}\
.ace_button:hover {\
background-color: #eee;\
opacity:1;\
}\
.ace_button:active {\
background-color: #ddd;\
}\
.ace_button.checked {\
border-color: #3399ff;\
opacity:1;\
}\
.ace_search_options{\
margin-bottom: 3px;\
text-align: right;\
-webkit-user-select: none;\
-moz-user-select: none;\
-o-user-select: none;\
-ms-user-select: none;\
user-select: none;\
clear: both;\
}\
.ace_search_counter {\
float: left;\
font-family: arial;\
padding: 0 8px;\
}";
var HashHandler = acequire("../keyboard/hash_handler").HashHandler;
var keyUtil = acequire("../lib/keys");

var MAX_COUNT = 999;

dom.importCssString(searchboxCss, "ace_searchbox");

var html = '<div class="ace_search right">\
    <span action="hide" class="ace_searchbtn_close"></span>\
    <div class="ace_search_form">\
        <input class="ace_search_field" placeholder="Search for" spellcheck="false"></input>\
        <span action="findPrev" class="ace_searchbtn prev"></span>\
        <span action="findNext" class="ace_searchbtn next"></span>\
        <span action="findAll" class="ace_searchbtn" title="Alt-Enter">All</span>\
    </div>\
    <div class="ace_replace_form">\
        <input class="ace_search_field" placeholder="Replace with" spellcheck="false"></input>\
        <span action="replaceAndFindNext" class="ace_searchbtn">Replace</span>\
        <span action="replaceAll" class="ace_searchbtn">All</span>\
    </div>\
    <div class="ace_search_options">\
        <span action="toggleReplace" class="ace_button" title="Toggel Replace mode"\
            style="float:left;margin-top:-2px;padding:0 5px;">+</span>\
        <span class="ace_search_counter"></span>\
        <span action="toggleRegexpMode" class="ace_button" title="RegExp Search">.*</span>\
        <span action="toggleCaseSensitive" class="ace_button" title="CaseSensitive Search">Aa</span>\
        <span action="toggleWholeWords" class="ace_button" title="Whole Word Search">\\b</span>\
        <span action="searchInSelection" class="ace_button" title="Search In Selection">S</span>\
    </div>\
</div>'.replace(/> +/g, ">");

var SearchBox = function(editor, range, showReplaceForm) {
    var div = dom.createElement("div");
    div.innerHTML = html;
    this.element = div.firstChild;

    this.setSession = this.setSession.bind(this);

    this.$init();
    this.setEditor(editor);
};

(function() {
    this.setEditor = function(editor) {
        editor.searchBox = this;
        editor.renderer.scroller.appendChild(this.element);
        this.editor = editor;
    };

    this.setSession = function(e) {
        this.searchRange = null;
        this.$syncOptions(true);
    };

    this.$initElements = function(sb) {
        this.searchBox = sb.querySelector(".ace_search_form");
        this.replaceBox = sb.querySelector(".ace_replace_form");
        this.searchOption = sb.querySelector("[action=searchInSelection]");
        this.replaceOption = sb.querySelector("[action=toggleReplace]");
        this.regExpOption = sb.querySelector("[action=toggleRegexpMode]");
        this.caseSensitiveOption = sb.querySelector("[action=toggleCaseSensitive]");
        this.wholeWordOption = sb.querySelector("[action=toggleWholeWords]");
        this.searchInput = this.searchBox.querySelector(".ace_search_field");
        this.replaceInput = this.replaceBox.querySelector(".ace_search_field");
        this.searchCounter = sb.querySelector(".ace_search_counter");
    };
    
    this.$init = function() {
        var sb = this.element;
        
        this.$initElements(sb);
        
        var _this = this;
        event.addListener(sb, "mousedown", function(e) {
            setTimeout(function(){
                _this.activeInput.focus();
            }, 0);
            event.stopPropagation(e);
        });
        event.addListener(sb, "click", function(e) {
            var t = e.target || e.srcElement;
            var action = t.getAttribute("action");
            if (action && _this[action])
                _this[action]();
            else if (_this.$searchBarKb.commands[action])
                _this.$searchBarKb.commands[action].exec(_this);
            event.stopPropagation(e);
        });

        event.addCommandKeyListener(sb, function(e, hashId, keyCode) {
            var keyString = keyUtil.keyCodeToString(keyCode);
            var command = _this.$searchBarKb.findKeyCommand(hashId, keyString);
            if (command && command.exec) {
                command.exec(_this);
                event.stopEvent(e);
            }
        });

        this.$onChange = lang.delayedCall(function() {
            _this.find(false, false);
        });

        event.addListener(this.searchInput, "input", function() {
            _this.$onChange.schedule(20);
        });
        event.addListener(this.searchInput, "focus", function() {
            _this.activeInput = _this.searchInput;
            _this.searchInput.value && _this.highlight();
        });
        event.addListener(this.replaceInput, "focus", function() {
            _this.activeInput = _this.replaceInput;
            _this.searchInput.value && _this.highlight();
        });
    };
    this.$closeSearchBarKb = new HashHandler([{
        bindKey: "Esc",
        name: "closeSearchBar",
        exec: function(editor) {
            editor.searchBox.hide();
        }
    }]);
    this.$searchBarKb = new HashHandler();
    this.$searchBarKb.bindKeys({
        "Ctrl-f|Command-f": function(sb) {
            var isReplace = sb.isReplace = !sb.isReplace;
            sb.replaceBox.style.display = isReplace ? "" : "none";
            sb.replaceOption.checked = false;
            sb.$syncOptions();
            sb.searchInput.focus();
        },
        "Ctrl-H|Command-Option-F": function(sb) {
            sb.replaceOption.checked = true;
            sb.$syncOptions();
            sb.replaceInput.focus();
        },
        "Ctrl-G|Command-G": function(sb) {
            sb.findNext();
        },
        "Ctrl-Shift-G|Command-Shift-G": function(sb) {
            sb.findPrev();
        },
        "esc": function(sb) {
            setTimeout(function() { sb.hide();});
        },
        "Return": function(sb) {
            if (sb.activeInput == sb.replaceInput)
                sb.replace();
            sb.findNext();
        },
        "Shift-Return": function(sb) {
            if (sb.activeInput == sb.replaceInput)
                sb.replace();
            sb.findPrev();
        },
        "Alt-Return": function(sb) {
            if (sb.activeInput == sb.replaceInput)
                sb.replaceAll();
            sb.findAll();
        },
        "Tab": function(sb) {
            (sb.activeInput == sb.replaceInput ? sb.searchInput : sb.replaceInput).focus();
        }
    });

    this.$searchBarKb.addCommands([{
        name: "toggleRegexpMode",
        bindKey: {win: "Alt-R|Alt-/", mac: "Ctrl-Alt-R|Ctrl-Alt-/"},
        exec: function(sb) {
            sb.regExpOption.checked = !sb.regExpOption.checked;
            sb.$syncOptions();
        }
    }, {
        name: "toggleCaseSensitive",
        bindKey: {win: "Alt-C|Alt-I", mac: "Ctrl-Alt-R|Ctrl-Alt-I"},
        exec: function(sb) {
            sb.caseSensitiveOption.checked = !sb.caseSensitiveOption.checked;
            sb.$syncOptions();
        }
    }, {
        name: "toggleWholeWords",
        bindKey: {win: "Alt-B|Alt-W", mac: "Ctrl-Alt-B|Ctrl-Alt-W"},
        exec: function(sb) {
            sb.wholeWordOption.checked = !sb.wholeWordOption.checked;
            sb.$syncOptions();
        }
    }, {
        name: "toggleReplace",
        exec: function(sb) {
            sb.replaceOption.checked = !sb.replaceOption.checked;
            sb.$syncOptions();
        }
    }, {
        name: "searchInSelection",
        exec: function(sb) {
            sb.searchOption.checked = !sb.searchRange;
            sb.setSearchRange(sb.searchOption.checked && sb.editor.getSelectionRange());
            sb.$syncOptions();
        }
    }]);

    this.setSearchRange = function(range) {
        this.searchRange = range;
        if (range) {
            this.searchRangeMarker = this.editor.session.addMarker(range, "ace_active-line");
        } else if (this.searchRangeMarker) {
            this.editor.session.removeMarker(this.searchRangeMarker);
            this.searchRangeMarker = null;
        }
    };

    this.$syncOptions = function(preventScroll) {
        dom.setCssClass(this.replaceOption, "checked", this.searchRange);
        dom.setCssClass(this.searchOption, "checked", this.searchOption.checked);
        this.replaceOption.textContent = this.replaceOption.checked ? "-" : "+";
        dom.setCssClass(this.regExpOption, "checked", this.regExpOption.checked);
        dom.setCssClass(this.wholeWordOption, "checked", this.wholeWordOption.checked);
        dom.setCssClass(this.caseSensitiveOption, "checked", this.caseSensitiveOption.checked);
        this.replaceBox.style.display = this.replaceOption.checked ? "" : "none";
        this.find(false, false, preventScroll);
    };

    this.highlight = function(re) {
        this.editor.session.highlight(re || this.editor.$search.$options.re);
        this.editor.renderer.updateBackMarkers();
    };
    this.find = function(skipCurrent, backwards, preventScroll) {
        var range = this.editor.find(this.searchInput.value, {
            skipCurrent: skipCurrent,
            backwards: backwards,
            wrap: true,
            regExp: this.regExpOption.checked,
            caseSensitive: this.caseSensitiveOption.checked,
            wholeWord: this.wholeWordOption.checked,
            preventScroll: preventScroll,
            range: this.searchRange
        });
        var noMatch = !range && this.searchInput.value;
        dom.setCssClass(this.searchBox, "ace_nomatch", noMatch);
        this.editor._emit("findSearchBox", { match: !noMatch });
        this.highlight();
        this.updateCounter();
    };
    this.updateCounter = function() {
        var editor = this.editor;
        var regex = editor.$search.$options.re;
        var all = 0;
        var before = 0;
        if (regex) {
            var value = this.searchRange
                ? editor.session.getTextRange(this.searchRange)
                : editor.getValue();

            var offset = editor.session.doc.positionToIndex(editor.selection.anchor);
            if (this.searchRange)
                offset -= editor.session.doc.positionToIndex(this.searchRange.start);

            var last = regex.lastIndex = 0;
            var m;
            while ((m = regex.exec(value))) {
                all++;
                last = m.index;
                if (last <= offset)
                    before++;
                if (all > MAX_COUNT)
                    break;
                if (!m[0]) {
                    regex.lastIndex = last += 1;
                    if (last >= value.length)
                        break;
                }
            }
        }
        this.searchCounter.textContent = before + " of " + (all > MAX_COUNT ? MAX_COUNT + "+" : all);
    };
    this.findNext = function() {
        this.find(true, false);
    };
    this.findPrev = function() {
        this.find(true, true);
    };
    this.findAll = function(){
        var range = this.editor.findAll(this.searchInput.value, {            
            regExp: this.regExpOption.checked,
            caseSensitive: this.caseSensitiveOption.checked,
            wholeWord: this.wholeWordOption.checked
        });
        var noMatch = !range && this.searchInput.value;
        dom.setCssClass(this.searchBox, "ace_nomatch", noMatch);
        this.editor._emit("findSearchBox", { match: !noMatch });
        this.highlight();
        this.hide();
    };
    this.replace = function() {
        if (!this.editor.getReadOnly())
            this.editor.replace(this.replaceInput.value);
    };    
    this.replaceAndFindNext = function() {
        if (!this.editor.getReadOnly()) {
            this.editor.replace(this.replaceInput.value);
            this.findNext();
        }
    };
    this.replaceAll = function() {
        if (!this.editor.getReadOnly())
            this.editor.replaceAll(this.replaceInput.value);
    };

    this.hide = function() {
        this.active = false;
        this.setSearchRange(null);
        this.editor.off("changeSession", this.setSession);

        this.element.style.display = "none";
        this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb);
        this.editor.focus();
    };
    this.show = function(value, isReplace) {
        this.active = true;
        this.editor.on("changeSession", this.setSession);
        this.element.style.display = "";
        this.replaceOption.checked = isReplace;

        if (value)
            this.searchInput.value = value;
        
        this.searchInput.focus();
        this.searchInput.select();

        this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb);

        this.$syncOptions(true);
    };

    this.isFocused = function() {
        var el = document.activeElement;
        return el == this.searchInput || el == this.replaceInput;
    };
}).call(SearchBox.prototype);

exports.SearchBox = SearchBox;

exports.Search = function(editor, isReplace) {
    var sb = editor.searchBox || new SearchBox(editor);
    sb.show(editor.session.getTextRange(), isReplace);
};

});
                (function() {
                    ace.acequire(["ace/ext/searchbox"], function() {});
                })();
            

/***/ }),

/***/ "./node_modules/brace/mode/html.js":
/*!*****************************************!*\
  !*** ./node_modules/brace/mode/html.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var DocCommentHighlightRules = function() {
    this.$rules = {
        "start" : [ {
            token : "comment.doc.tag",
            regex : "@[\\w\\d_]+" // TODO: fix email addresses
        }, 
        DocCommentHighlightRules.getTagRule(),
        {
            defaultToken : "comment.doc",
            caseInsensitive: true
        }]
    };
};

oop.inherits(DocCommentHighlightRules, TextHighlightRules);

DocCommentHighlightRules.getTagRule = function(start) {
    return {
        token : "comment.doc.tag.storage.type",
        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
};

DocCommentHighlightRules.getStartRule = function(start) {
    return {
        token : "comment.doc", // doc comment
        regex : "\\/\\*(?=\\*)",
        next  : start
    };
};

DocCommentHighlightRules.getEndRule = function (start) {
    return {
        token : "comment.doc", // closing comment
        regex : "\\*\\/",
        next  : start
    };
};


exports.DocCommentHighlightRules = DocCommentHighlightRules;

});

ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var DocCommentHighlightRules = acequire("./doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*";

var JavaScriptHighlightRules = function(options) {
    var keywordMapper = this.createKeywordMapper({
        "variable.language":
            "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|"  + // Constructors
            "Namespace|QName|XML|XMLList|"                                             + // E4X
            "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|"   +
            "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|"                    +
            "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|"   + // Errors
            "SyntaxError|TypeError|URIError|"                                          +
            "decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|" + // Non-constructor functions
            "isNaN|parseFloat|parseInt|"                                               +
            "JSON|Math|"                                                               + // Other
            "this|arguments|prototype|window|document"                                 , // Pseudo
        "keyword":
            "const|yield|import|get|set|async|await|" +
            "break|case|catch|continue|default|delete|do|else|finally|for|function|" +
            "if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|" +
            "__parent__|__count__|escape|unescape|with|__proto__|" +
            "class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
        "storage.type":
            "const|let|var|function",
        "constant.language":
            "null|Infinity|NaN|undefined",
        "support.function":
            "alert",
        "constant.language.boolean": "true|false"
    }, "identifier");
    var kwBeforeRe = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void";

    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" + // hex
        "u[0-9a-fA-F]{4}|" + // unicode
        "u{[0-9a-fA-F]{1,6}}|" + // es6 unicode
        "[0-2][0-7]{0,2}|" + // oct
        "3[0-7][0-7]?|" + // oct
        "[4-7][0-7]?|" + //oct
        ".)";

    this.$rules = {
        "no_regex" : [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("no_regex"),
            {
                token : "string",
                regex : "'(?=.)",
                next  : "qstring"
            }, {
                token : "string",
                regex : '"(?=.)',
                next  : "qqstring"
            }, {
                token : "constant.numeric", // hexadecimal, octal and binary
                regex : /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
            }, {
                token : "constant.numeric", // decimal integers and floats
                regex : /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
            }, {
                token : [
                    "storage.type", "punctuation.operator", "support.function",
                    "punctuation.operator", "entity.name.function", "text","keyword.operator"
                ],
                regex : "(" + identifierRe + ")(\\.)(prototype)(\\.)(" + identifierRe +")(\\s*)(=)",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "keyword.operator", "text", "storage.type",
                    "text", "paren.lparen"
                ],
                regex : "(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(function)(\\s+)(" + identifierRe + ")(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "punctuation.operator",
                    "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "text", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "keyword",
                regex : "from(?=\\s*('|\"))"
            }, {
                token : "keyword",
                regex : "(?:" + kwBeforeRe + ")\\b",
                next : "start"
            }, {
                token : ["support.constant"],
                regex : /that\b/
            }, {
                token : ["storage.type", "punctuation.operator", "support.function.firebug"],
                regex : /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
            }, {
                token : keywordMapper,
                regex : identifierRe
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/,
                next  : "property"
            }, {
                token : "storage.type",
                regex : /=>/
            }, {
                token : "keyword.operator",
                regex : /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next  : "start"
            }, {
                token : "punctuation.operator",
                regex : /[?:,;.]/,
                next  : "start"
            }, {
                token : "paren.lparen",
                regex : /[\[({]/,
                next  : "start"
            }, {
                token : "paren.rparen",
                regex : /[\])}]/
            }, {
                token: "comment",
                regex: /^#!.*$/
            }
        ],
        property: [{
                token : "text",
                regex : "\\s+"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/
            }, {
                token : "support.function",
                regex : /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            }, {
                token : "support.function.dom",
                regex : /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            }, {
                token :  "support.constant",
                regex : /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            }, {
                token : "identifier",
                regex : identifierRe
            }, {
                regex: "",
                token: "empty",
                next: "no_regex"
            }
        ],
        "start": [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("start"),
            {
                token: "string.regexp",
                regex: "\\/",
                next: "regex"
            }, {
                token : "text",
                regex : "\\s+|^$",
                next : "start"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "regex": [
            {
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
            }, {
                token : "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                token : "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                token : "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp"
            }
        ],
        "regex_character_class": [
            {
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp.charachterclass"
            }
        ],
        "function_arguments": [
            {
                token: "variable.parameter",
                regex: identifierRe
            }, {
                token: "punctuation.operator",
                regex: "[, ]+"
            }, {
                token: "punctuation.operator",
                regex: "$"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "qqstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                consumeLineEnd  : true
            }, {
                token : "string",
                regex : '"|$',
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ],
        "qstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                consumeLineEnd  : true
            }, {
                token : "string",
                regex : "'|$",
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ]
    };


    if (!options || !options.noES6) {
        this.$rules.no_regex.unshift({
            regex: "[{}]", onMatch: function(val, state, stack) {
                this.next = val == "{" ? this.nextState : "";
                if (val == "{" && stack.length) {
                    stack.unshift("start", state);
                }
                else if (val == "}" && stack.length) {
                    stack.shift();
                    this.next = stack.shift();
                    if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)
                        return "paren.quasi.end";
                }
                return val == "{" ? "paren.lparen" : "paren.rparen";
            },
            nextState: "start"
        }, {
            token : "string.quasi.start",
            regex : /`/,
            push  : [{
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "paren.quasi.start",
                regex : /\${/,
                push  : "start"
            }, {
                token : "string.quasi.end",
                regex : /`/,
                next  : "pop"
            }, {
                defaultToken: "string.quasi"
            }]
        });

        if (!options || options.jsx != false)
            JSX.call(this);
    }

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("no_regex") ]);

    this.normalizeRules();
};

oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

function JSX() {
    var tagRegex = identifierRe.replace("\\d", "\\d\\-");
    var jsxTag = {
        onMatch : function(val, state, stack) {
            var offset = val.charAt(1) == "/" ? 2 : 1;
            if (offset == 1) {
                if (state != this.nextState)
                    stack.unshift(this.next, this.nextState, 0);
                else
                    stack.unshift(this.next);
                stack[2]++;
            } else if (offset == 2) {
                if (state == this.nextState) {
                    stack[1]--;
                    if (!stack[1] || stack[1] < 0) {
                        stack.shift();
                        stack.shift();
                    }
                }
            }
            return [{
                type: "meta.tag.punctuation." + (offset == 1 ? "" : "end-") + "tag-open.xml",
                value: val.slice(0, offset)
            }, {
                type: "meta.tag.tag-name.xml",
                value: val.substr(offset)
            }];
        },
        regex : "</?" + tagRegex + "",
        next: "jsxAttributes",
        nextState: "jsx"
    };
    this.$rules.start.unshift(jsxTag);
    var jsxJsRule = {
        regex: "{",
        token: "paren.quasi.start",
        push: "start"
    };
    this.$rules.jsx = [
        jsxJsRule,
        jsxTag,
        {include : "reference"},
        {defaultToken: "string"}
    ];
    this.$rules.jsxAttributes = [{
        token : "meta.tag.punctuation.tag-close.xml",
        regex : "/?>",
        onMatch : function(value, currentState, stack) {
            if (currentState == stack[0])
                stack.shift();
            if (value.length == 2) {
                if (stack[0] == this.nextState)
                    stack[1]--;
                if (!stack[1] || stack[1] < 0) {
                    stack.splice(0, 2);
                }
            }
            this.next = stack[0] || "start";
            return [{type: this.token, value: value}];
        },
        nextState: "jsx"
    },
    jsxJsRule,
    comments("jsxAttributes"),
    {
        token : "entity.other.attribute-name.xml",
        regex : tagRegex
    }, {
        token : "keyword.operator.attribute-equals.xml",
        regex : "="
    }, {
        token : "text.tag-whitespace.xml",
        regex : "\\s+"
    }, {
        token : "string.attribute-value.xml",
        regex : "'",
        stateName : "jsx_attr_q",
        push : [
            {token : "string.attribute-value.xml", regex: "'", next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    }, {
        token : "string.attribute-value.xml",
        regex : '"',
        stateName : "jsx_attr_qq",
        push : [
            {token : "string.attribute-value.xml", regex: '"', next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    },
    jsxTag
    ];
    this.$rules.reference = [{
        token : "constant.language.escape.reference.xml",
        regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
    }];
}

function comments(next) {
    return [
        {
            token : "comment", // multi line comment
            regex : /\/\*/,
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "\\*\\/", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }, {
            token : "comment",
            regex : "\\/\\/",
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "$|^", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }
    ];
}
exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
});

ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(acequire, exports, module) {
"use strict";

var Range = acequire("../range").Range;

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Range = acequire("../../range").Range;
var BaseFoldMode = acequire("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var JavaScriptHighlightRules = acequire("./javascript_highlight_rules").JavaScriptHighlightRules;
var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
var WorkerClient = acequire("../worker/worker_client").WorkerClient;
var CstyleBehaviour = acequire("./behaviour/cstyle").CstyleBehaviour;
var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = JavaScriptHighlightRules;
    
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    this.$quotes = {'"': '"', "'": "'", "`": "`"};

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        if (state == "start" || state == "no_regex") {
            var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
            if (match) {
                indent += tab;
            }
        } else if (state == "doc-start") {
            if (endState == "start" || endState == "no_regex") {
                return "";
            }
            var match = line.match(/^\s*(\/?)\*/);
            if (match) {
                if (match[1]) {
                    indent += " ";
                }
                indent += "* ";
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], __webpack_require__(/*! ../worker/javascript */ "./node_modules/brace/worker/javascript.js"), "JavaScriptWorker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(results) {
            session.setAnnotations(results.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/javascript";
}).call(Mode.prototype);

exports.Mode = Mode;
});

ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var lang = acequire("../lib/lang");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
var supportType = exports.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index";
var supportFunction = exports.supportFunction = "rgb|rgba|url|attr|counter|counters";
var supportConstant = exports.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero";
var supportConstantColor = exports.supportConstantColor = "aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen";
var supportConstantFonts = exports.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace";

var numRe = exports.numRe = "\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))";
var pseudoElements = exports.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b";
var pseudoClasses  = exports.pseudoClasses =  "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|acequired|root|target|valid|visited)\\b";

var CssHighlightRules = function() {

    var keywordMapper = this.createKeywordMapper({
        "support.function": supportFunction,
        "support.constant": supportConstant,
        "support.type": supportType,
        "support.constant.color": supportConstantColor,
        "support.constant.fonts": supportConstantFonts
    }, "text", true);

    this.$rules = {
        "start" : [{
            include : ["strings", "url", "comments"]
        }, {
            token: "paren.lparen",
            regex: "\\{",
            next:  "ruleset"
        }, {
            token: "paren.rparen",
            regex: "\\}"
        }, {
            token: "string",
            regex: "@",
            next:  "media"
        }, {
            token: "keyword",
            regex: "#[a-z0-9-_]+"
        }, {
            token: "keyword",
            regex: "%"
        }, {
            token: "variable",
            regex: "\\.[a-z0-9-_]+"
        }, {
            token: "string",
            regex: ":[a-z0-9-_]+"
        }, {
            token : "constant.numeric",
            regex : numRe
        }, {
            token: "constant",
            regex: "[a-z0-9-_]+"
        }, {
            caseInsensitive: true
        }],

        "media": [{
            include : ["strings", "url", "comments"]
        }, {
            token: "paren.lparen",
            regex: "\\{",
            next:  "start"
        }, {
            token: "paren.rparen",
            regex: "\\}",
            next:  "start"
        }, {
            token: "string",
            regex: ";",
            next:  "start"
        }, {
            token: "keyword",
            regex: "(?:media|supports|document|charset|import|namespace|media|supports|document"
                + "|page|font|keyframes|viewport|counter-style|font-feature-values"
                + "|swash|ornaments|annotation|stylistic|styleset|character-variant)"
        }],

        "comments" : [{
            token: "comment", // multi line comment
            regex: "\\/\\*",
            push: [{
                token : "comment",
                regex : "\\*\\/",
                next : "pop"
            }, {
                defaultToken : "comment"
            }]
        }],

        "ruleset" : [{
            regex : "-(webkit|ms|moz|o)-",
            token : "text"
        }, {
            token : "paren.rparen",
            regex : "\\}",
            next : "start"
        }, {
            include : ["strings", "url", "comments"]
        }, {
            token : ["constant.numeric", "keyword"],
            regex : "(" + numRe + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
        }, {
            token : "constant.numeric",
            regex : numRe
        }, {
            token : "constant.numeric",  // hex6 color
            regex : "#[a-f0-9]{6}"
        }, {
            token : "constant.numeric", // hex3 color
            regex : "#[a-f0-9]{3}"
        }, {
            token : ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
            regex : pseudoElements
        }, {
            token : ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
            regex : pseudoClasses
        }, {
            include: "url"
        }, {
            token : keywordMapper,
            regex : "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
        }, {
            caseInsensitive: true
        }],

        url: [{
            token : "support.function",
            regex : "(?:url(:?-prefix)?|domain|regexp)\\(",
            push: [{
                token : "support.function",
                regex : "\\)",
                next : "pop"
            }, {
                defaultToken: "string"
            }]
        }],

        strings: [{
            token : "string.start",
            regex : "'",
            push : [{
                token : "string.end",
                regex : "'|$",
                next: "pop"
            }, {
                include : "escapes"
            }, {
                token : "constant.language.escape",
                regex : /\\$/,
                consumeLineEnd: true
            }, {
                defaultToken: "string"
            }]
        }, {
            token : "string.start",
            regex : '"',
            push : [{
                token : "string.end",
                regex : '"|$',
                next: "pop"
            }, {
                include : "escapes"
            }, {
                token : "constant.language.escape",
                regex : /\\$/,
                consumeLineEnd: true
            }, {
                defaultToken: "string"
            }]
        }],
        escapes: [{
            token : "constant.language.escape",
            regex : /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/
        }]

    };

    this.normalizeRules();
};

oop.inherits(CssHighlightRules, TextHighlightRules);

exports.CssHighlightRules = CssHighlightRules;

});

ace.define("ace/mode/css_completions",["require","exports","module"], function(acequire, exports, module) {
"use strict";

var propertyMap = {
    "background": {"#$0": 1},
    "background-color": {"#$0": 1, "transparent": 1, "fixed": 1},
    "background-image": {"url('/$0')": 1},
    "background-repeat": {"repeat": 1, "repeat-x": 1, "repeat-y": 1, "no-repeat": 1, "inherit": 1},
    "background-position": {"bottom":2, "center":2, "left":2, "right":2, "top":2, "inherit":2},
    "background-attachment": {"scroll": 1, "fixed": 1},
    "background-size": {"cover": 1, "contain": 1},
    "background-clip": {"border-box": 1, "padding-box": 1, "content-box": 1},
    "background-origin": {"border-box": 1, "padding-box": 1, "content-box": 1},
    "border": {"solid $0": 1, "dashed $0": 1, "dotted $0": 1, "#$0": 1},
    "border-color": {"#$0": 1},
    "border-style": {"solid":2, "dashed":2, "dotted":2, "double":2, "groove":2, "hidden":2, "inherit":2, "inset":2, "none":2, "outset":2, "ridged":2},
    "border-collapse": {"collapse": 1, "separate": 1},
    "bottom": {"px": 1, "em": 1, "%": 1},
    "clear": {"left": 1, "right": 1, "both": 1, "none": 1},
    "color": {"#$0": 1, "rgb(#$00,0,0)": 1},
    "cursor": {"default": 1, "pointer": 1, "move": 1, "text": 1, "wait": 1, "help": 1, "progress": 1, "n-resize": 1, "ne-resize": 1, "e-resize": 1, "se-resize": 1, "s-resize": 1, "sw-resize": 1, "w-resize": 1, "nw-resize": 1},
    "display": {"none": 1, "block": 1, "inline": 1, "inline-block": 1, "table-cell": 1},
    "empty-cells": {"show": 1, "hide": 1},
    "float": {"left": 1, "right": 1, "none": 1},
    "font-family": {"Arial":2,"Comic Sans MS":2,"Consolas":2,"Courier New":2,"Courier":2,"Georgia":2,"Monospace":2,"Sans-Serif":2, "Segoe UI":2,"Tahoma":2,"Times New Roman":2,"Trebuchet MS":2,"Verdana": 1},
    "font-size": {"px": 1, "em": 1, "%": 1},
    "font-weight": {"bold": 1, "normal": 1},
    "font-style": {"italic": 1, "normal": 1},
    "font-variant": {"normal": 1, "small-caps": 1},
    "height": {"px": 1, "em": 1, "%": 1},
    "left": {"px": 1, "em": 1, "%": 1},
    "letter-spacing": {"normal": 1},
    "line-height": {"normal": 1},
    "list-style-type": {"none": 1, "disc": 1, "circle": 1, "square": 1, "decimal": 1, "decimal-leading-zero": 1, "lower-roman": 1, "upper-roman": 1, "lower-greek": 1, "lower-latin": 1, "upper-latin": 1, "georgian": 1, "lower-alpha": 1, "upper-alpha": 1},
    "margin": {"px": 1, "em": 1, "%": 1},
    "margin-right": {"px": 1, "em": 1, "%": 1},
    "margin-left": {"px": 1, "em": 1, "%": 1},
    "margin-top": {"px": 1, "em": 1, "%": 1},
    "margin-bottom": {"px": 1, "em": 1, "%": 1},
    "max-height": {"px": 1, "em": 1, "%": 1},
    "max-width": {"px": 1, "em": 1, "%": 1},
    "min-height": {"px": 1, "em": 1, "%": 1},
    "min-width": {"px": 1, "em": 1, "%": 1},
    "overflow": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
    "overflow-x": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
    "overflow-y": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
    "padding": {"px": 1, "em": 1, "%": 1},
    "padding-top": {"px": 1, "em": 1, "%": 1},
    "padding-right": {"px": 1, "em": 1, "%": 1},
    "padding-bottom": {"px": 1, "em": 1, "%": 1},
    "padding-left": {"px": 1, "em": 1, "%": 1},
    "page-break-after": {"auto": 1, "always": 1, "avoid": 1, "left": 1, "right": 1},
    "page-break-before": {"auto": 1, "always": 1, "avoid": 1, "left": 1, "right": 1},
    "position": {"absolute": 1, "relative": 1, "fixed": 1, "static": 1},
    "right": {"px": 1, "em": 1, "%": 1},
    "table-layout": {"fixed": 1, "auto": 1},
    "text-decoration": {"none": 1, "underline": 1, "line-through": 1, "blink": 1},
    "text-align": {"left": 1, "right": 1, "center": 1, "justify": 1},
    "text-transform": {"capitalize": 1, "uppercase": 1, "lowercase": 1, "none": 1},
    "top": {"px": 1, "em": 1, "%": 1},
    "vertical-align": {"top": 1, "bottom": 1},
    "visibility": {"hidden": 1, "visible": 1},
    "white-space": {"nowrap": 1, "normal": 1, "pre": 1, "pre-line": 1, "pre-wrap": 1},
    "width": {"px": 1, "em": 1, "%": 1},
    "word-spacing": {"normal": 1},
    "filter": {"alpha(opacity=$0100)": 1},

    "text-shadow": {"$02px 2px 2px #777": 1},
    "text-overflow": {"ellipsis-word": 1, "clip": 1, "ellipsis": 1},
    "-moz-border-radius": 1,
    "-moz-border-radius-topright": 1,
    "-moz-border-radius-bottomright": 1,
    "-moz-border-radius-topleft": 1,
    "-moz-border-radius-bottomleft": 1,
    "-webkit-border-radius": 1,
    "-webkit-border-top-right-radius": 1,
    "-webkit-border-top-left-radius": 1,
    "-webkit-border-bottom-right-radius": 1,
    "-webkit-border-bottom-left-radius": 1,
    "-moz-box-shadow": 1,
    "-webkit-box-shadow": 1,
    "transform": {"rotate($00deg)": 1, "skew($00deg)": 1},
    "-moz-transform": {"rotate($00deg)": 1, "skew($00deg)": 1},
    "-webkit-transform": {"rotate($00deg)": 1, "skew($00deg)": 1 }
};

var CssCompletions = function() {

};

(function() {

    this.completionsDefined = false;

    this.defineCompletions = function() {
        if (document) {
            var style = document.createElement('c').style;

            for (var i in style) {
                if (typeof style[i] !== 'string')
                    continue;

                var name = i.replace(/[A-Z]/g, function(x) {
                    return '-' + x.toLowerCase();
                });

                if (!propertyMap.hasOwnProperty(name))
                    propertyMap[name] = 1;
            }
        }

        this.completionsDefined = true;
    };

    this.getCompletions = function(state, session, pos, prefix) {
        if (!this.completionsDefined) {
            this.defineCompletions();
        }

        var token = session.getTokenAt(pos.row, pos.column);

        if (!token)
            return [];
        if (state==='ruleset'){
            var line = session.getLine(pos.row).substr(0, pos.column);
            if (/:[^;]+$/.test(line)) {
                /([\w\-]+):[^:]*$/.test(line);

                return this.getPropertyValueCompletions(state, session, pos, prefix);
            } else {
                return this.getPropertyCompletions(state, session, pos, prefix);
            }
        }

        return [];
    };

    this.getPropertyCompletions = function(state, session, pos, prefix) {
        var properties = Object.keys(propertyMap);
        return properties.map(function(property){
            return {
                caption: property,
                snippet: property + ': $0;',
                meta: "property",
                score: Number.MAX_VALUE
            };
        });
    };

    this.getPropertyValueCompletions = function(state, session, pos, prefix) {
        var line = session.getLine(pos.row).substr(0, pos.column);
        var property = (/([\w\-]+):[^:]*$/.exec(line) || {})[1];

        if (!property)
            return [];
        var values = [];
        if (property in propertyMap && typeof propertyMap[property] === "object") {
            values = Object.keys(propertyMap[property]);
        }
        return values.map(function(value){
            return {
                caption: value,
                snippet: value,
                meta: "property value",
                score: Number.MAX_VALUE
            };
        });
    };

}).call(CssCompletions.prototype);

exports.CssCompletions = CssCompletions;
});

ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Behaviour = acequire("../behaviour").Behaviour;
var CstyleBehaviour = acequire("./cstyle").CstyleBehaviour;
var TokenIterator = acequire("../../token_iterator").TokenIterator;

var CssBehaviour = function () {

    this.inherit(CstyleBehaviour);

    this.add("colon", "insertion", function (state, action, editor, session, text) {
        if (text === ':') {
            var cursor = editor.getCursorPosition();
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();
            if (token && token.value.match(/\s+/)) {
                token = iterator.stepBackward();
            }
            if (token && token.type === 'support.type') {
                var line = session.doc.getLine(cursor.row);
                var rightChar = line.substring(cursor.column, cursor.column + 1);
                if (rightChar === ':') {
                    return {
                       text: '',
                       selection: [1, 1]
                    };
                }
                if (!line.substring(cursor.column).match(/^\s*;/)) {
                    return {
                       text: ':;',
                       selection: [1, 1]
                    };
                }
            }
        }
    });

    this.add("colon", "deletion", function (state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && selected === ':') {
            var cursor = editor.getCursorPosition();
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();
            if (token && token.value.match(/\s+/)) {
                token = iterator.stepBackward();
            }
            if (token && token.type === 'support.type') {
                var line = session.doc.getLine(range.start.row);
                var rightChar = line.substring(range.end.column, range.end.column + 1);
                if (rightChar === ';') {
                    range.end.column ++;
                    return range;
                }
            }
        }
    });

    this.add("semicolon", "insertion", function (state, action, editor, session, text) {
        if (text === ';') {
            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            if (rightChar === ';') {
                return {
                   text: '',
                   selection: [1, 1]
                };
            }
        }
    });

};
oop.inherits(CssBehaviour, CstyleBehaviour);

exports.CssBehaviour = CssBehaviour;
});

ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var CssHighlightRules = acequire("./css_highlight_rules").CssHighlightRules;
var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
var WorkerClient = acequire("../worker/worker_client").WorkerClient;
var CssCompletions = acequire("./css_completions").CssCompletions;
var CssBehaviour = acequire("./behaviour/css").CssBehaviour;
var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = CssHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CssBehaviour();
    this.$completer = new CssCompletions();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.foldingRules = "cStyle";
    this.blockComment = {start: "/*", end: "*/"};

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;
        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        var match = line.match(/^.*\{\s*$/);
        if (match) {
            indent += tab;
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.getCompletions = function(state, session, pos, prefix) {
        return this.$completer.getCompletions(state, session, pos, prefix);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], __webpack_require__(/*! ../worker/css */ "./node_modules/brace/worker/css.js"), "Worker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(e) {
            session.setAnnotations(e.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/css";
}).call(Mode.prototype);

exports.Mode = Mode;

});

ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var XmlHighlightRules = function(normalize) {
    var tagRegex = "[_:a-zA-Z\xc0-\uffff][-_:.a-zA-Z0-9\xc0-\uffff]*";

    this.$rules = {
        start : [
            {token : "string.cdata.xml", regex : "<\\!\\[CDATA\\[", next : "cdata"},
            {
                token : ["punctuation.instruction.xml", "keyword.instruction.xml"],
                regex : "(<\\?)(" + tagRegex + ")", next : "processing_instruction"
            },
            {token : "comment.start.xml", regex : "<\\!--", next : "comment"},
            {
                token : ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
                regex : "(<\\!)(DOCTYPE)(?=[\\s])", next : "doctype", caseInsensitive: true
            },
            {include : "tag"},
            {token : "text.end-tag-open.xml", regex: "</"},
            {token : "text.tag-open.xml", regex: "<"},
            {include : "reference"},
            {defaultToken : "text.xml"}
        ],

        processing_instruction : [{
            token : "entity.other.attribute-name.decl-attribute-name.xml",
            regex : tagRegex
        }, {
            token : "keyword.operator.decl-attribute-equals.xml",
            regex : "="
        }, {
            include: "whitespace"
        }, {
            include: "string"
        }, {
            token : "punctuation.xml-decl.xml",
            regex : "\\?>",
            next : "start"
        }],

        doctype : [
            {include : "whitespace"},
            {include : "string"},
            {token : "xml-pe.doctype.xml", regex : ">", next : "start"},
            {token : "xml-pe.xml", regex : "[-_a-zA-Z0-9:]+"},
            {token : "punctuation.int-subset", regex : "\\[", push : "int_subset"}
        ],

        int_subset : [{
            token : "text.xml",
            regex : "\\s+"
        }, {
            token: "punctuation.int-subset.xml",
            regex: "]",
            next: "pop"
        }, {
            token : ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
            regex : "(<\\!)(" + tagRegex + ")",
            push : [{
                token : "text",
                regex : "\\s+"
            },
            {
                token : "punctuation.markup-decl.xml",
                regex : ">",
                next : "pop"
            },
            {include : "string"}]
        }],

        cdata : [
            {token : "string.cdata.xml", regex : "\\]\\]>", next : "start"},
            {token : "text.xml", regex : "\\s+"},
            {token : "text.xml", regex : "(?:[^\\]]|\\](?!\\]>))+"}
        ],

        comment : [
            {token : "comment.end.xml", regex : "-->", next : "start"},
            {defaultToken : "comment.xml"}
        ],

        reference : [{
            token : "constant.language.escape.reference.xml",
            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],

        attr_reference : [{
            token : "constant.language.escape.reference.attribute-value.xml",
            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],

        tag : [{
            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
            regex : "(?:(<)|(</))((?:" + tagRegex + ":)?" + tagRegex + ")",
            next: [
                {include : "attributes"},
                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "start"}
            ]
        }],

        tag_whitespace : [
            {token : "text.tag-whitespace.xml", regex : "\\s+"}
        ],
        whitespace : [
            {token : "text.whitespace.xml", regex : "\\s+"}
        ],
        string: [{
            token : "string.xml",
            regex : "'",
            push : [
                {token : "string.xml", regex: "'", next: "pop"},
                {defaultToken : "string.xml"}
            ]
        }, {
            token : "string.xml",
            regex : '"',
            push : [
                {token : "string.xml", regex: '"', next: "pop"},
                {defaultToken : "string.xml"}
            ]
        }],

        attributes: [{
            token : "entity.other.attribute-name.xml",
            regex : tagRegex
        }, {
            token : "keyword.operator.attribute-equals.xml",
            regex : "="
        }, {
            include: "tag_whitespace"
        }, {
            include: "attribute_value"
        }],

        attribute_value: [{
            token : "string.attribute-value.xml",
            regex : "'",
            push : [
                {token : "string.attribute-value.xml", regex: "'", next: "pop"},
                {include : "attr_reference"},
                {defaultToken : "string.attribute-value.xml"}
            ]
        }, {
            token : "string.attribute-value.xml",
            regex : '"',
            push : [
                {token : "string.attribute-value.xml", regex: '"', next: "pop"},
                {include : "attr_reference"},
                {defaultToken : "string.attribute-value.xml"}
            ]
        }]
    };

    if (this.constructor === XmlHighlightRules)
        this.normalizeRules();
};


(function() {

    this.embedTagRules = function(HighlightRules, prefix, tag){
        this.$rules.tag.unshift({
            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
            regex : "(<)(" + tag + "(?=\\s|>|$))",
            next: [
                {include : "attributes"},
                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : prefix + "start"}
            ]
        });

        this.$rules[tag + "-end"] = [
            {include : "attributes"},
            {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>",  next: "start",
                onMatch : function(value, currentState, stack) {
                    stack.splice(0);
                    return this.token;
            }}
        ];

        this.embedRules(HighlightRules, prefix, [{
            token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
            regex : "(</)(" + tag + "(?=\\s|>|$))",
            next: tag + "-end"
        }, {
            token: "string.cdata.xml",
            regex : "<\\!\\[CDATA\\["
        }, {
            token: "string.cdata.xml",
            regex : "\\]\\]>"
        }]);
    };

}).call(TextHighlightRules.prototype);

oop.inherits(XmlHighlightRules, TextHighlightRules);

exports.XmlHighlightRules = XmlHighlightRules;
});

ace.define("ace/mode/html_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/css_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var lang = acequire("../lib/lang");
var CssHighlightRules = acequire("./css_highlight_rules").CssHighlightRules;
var JavaScriptHighlightRules = acequire("./javascript_highlight_rules").JavaScriptHighlightRules;
var XmlHighlightRules = acequire("./xml_highlight_rules").XmlHighlightRules;

var tagMap = lang.createMap({
    a           : 'anchor',
    button 	    : 'form',
    form        : 'form',
    img         : 'image',
    input       : 'form',
    label       : 'form',
    option      : 'form',
    script      : 'script',
    select      : 'form',
    textarea    : 'form',
    style       : 'style',
    table       : 'table',
    tbody       : 'table',
    td          : 'table',
    tfoot       : 'table',
    th          : 'table',
    tr          : 'table'
});

var HtmlHighlightRules = function() {
    XmlHighlightRules.call(this);

    this.addRules({
        attributes: [{
            include : "tag_whitespace"
        }, {
            token : "entity.other.attribute-name.xml",
            regex : "[-_a-zA-Z0-9:.]+"
        }, {
            token : "keyword.operator.attribute-equals.xml",
            regex : "=",
            push : [{
                include: "tag_whitespace"
            }, {
                token : "string.unquoted.attribute-value.html",
                regex : "[^<>='\"`\\s]+",
                next : "pop"
            }, {
                token : "empty",
                regex : "",
                next : "pop"
            }]
        }, {
            include : "attribute_value"
        }],
        tag: [{
            token : function(start, tag) {
                var group = tagMap[tag];
                return ["meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
                    "meta.tag" + (group ? "." + group : "") + ".tag-name.xml"];
            },
            regex : "(</?)([-_a-zA-Z0-9:.]+)",
            next: "tag_stuff"
        }],
        tag_stuff: [
            {include : "attributes"},
            {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "start"}
        ]
    });

    this.embedTagRules(CssHighlightRules, "css-", "style");
    this.embedTagRules(new JavaScriptHighlightRules({jsx: false}).getRules(), "js-", "script");

    if (this.constructor === HtmlHighlightRules)
        this.normalizeRules();
};

oop.inherits(HtmlHighlightRules, XmlHighlightRules);

exports.HtmlHighlightRules = HtmlHighlightRules;
});

ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Behaviour = acequire("../behaviour").Behaviour;
var TokenIterator = acequire("../../token_iterator").TokenIterator;
var lang = acequire("../../lib/lang");

function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
}

var XmlBehaviour = function () {

    this.add("string_dquotes", "insertion", function (state, action, editor, session, text) {
        if (text == '"' || text == "'") {
            var quote = text;
            var selected = session.doc.getTextRange(editor.getSelectionRange());
            if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
                return {
                    text: quote + selected + quote,
                    selection: false
                };
            }

            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();

            if (rightChar == quote && (is(token, "attribute-value") || is(token, "string"))) {
                return {
                    text: "",
                    selection: [1, 1]
                };
            }

            if (!token)
                token = iterator.stepBackward();

            if (!token)
                return;

            while (is(token, "tag-whitespace") || is(token, "whitespace")) {
                token = iterator.stepBackward();
            }
            var rightSpace = !rightChar || rightChar.match(/\s/);
            if (is(token, "attribute-equals") && (rightSpace || rightChar == '>') || (is(token, "decl-attribute-equals") && (rightSpace || rightChar == '?'))) {
                return {
                    text: quote + quote,
                    selection: [1, 1]
                };
            }
        }
    });

    this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
            if (rightChar == selected) {
                range.end.column++;
                return range;
            }
        }
    });

    this.add("autoclosing", "insertion", function (state, action, editor, session, text) {
        if (text == '>') {
            var position = editor.getSelectionRange().start;
            var iterator = new TokenIterator(session, position.row, position.column);
            var token = iterator.getCurrentToken() || iterator.stepBackward();
            if (!token || !(is(token, "tag-name") || is(token, "tag-whitespace") || is(token, "attribute-name") || is(token, "attribute-equals") || is(token, "attribute-value")))
                return;
            if (is(token, "reference.attribute-value"))
                return;
            if (is(token, "attribute-value")) {
                var firstChar = token.value.charAt(0);
                if (firstChar == '"' || firstChar == "'") {
                    var lastChar = token.value.charAt(token.value.length - 1);
                    var tokenEnd = iterator.getCurrentTokenColumn() + token.value.length;
                    if (tokenEnd > position.column || tokenEnd == position.column && firstChar != lastChar)
                        return;
                }
            }
            while (!is(token, "tag-name")) {
                token = iterator.stepBackward();
                if (token.value == "<") {
                    token = iterator.stepForward();
                    break;
                }
            }

            var tokenRow = iterator.getCurrentTokenRow();
            var tokenColumn = iterator.getCurrentTokenColumn();
            if (is(iterator.stepBackward(), "end-tag-open"))
                return;

            var element = token.value;
            if (tokenRow == position.row)
                element = element.substring(0, position.column - tokenColumn);

            if (this.voidElements.hasOwnProperty(element.toLowerCase()))
                 return;

            return {
               text: ">" + "</" + element + ">",
               selection: [1, 1]
            };
        }
    });

    this.add("autoindent", "insertion", function (state, action, editor, session, text) {
        if (text == "\n") {
            var cursor = editor.getCursorPosition();
            var line = session.getLine(cursor.row);
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();

            if (token && token.type.indexOf("tag-close") !== -1) {
                if (token.value == "/>")
                    return;
                while (token && token.type.indexOf("tag-name") === -1) {
                    token = iterator.stepBackward();
                }

                if (!token) {
                    return;
                }

                var tag = token.value;
                var row = iterator.getCurrentTokenRow();
                token = iterator.stepBackward();
                if (!token || token.type.indexOf("end-tag") !== -1) {
                    return;
                }

                if (this.voidElements && !this.voidElements[tag]) {
                    var nextToken = session.getTokenAt(cursor.row, cursor.column+1);
                    var line = session.getLine(row);
                    var nextIndent = this.$getIndent(line);
                    var indent = nextIndent + session.getTabString();

                    if (nextToken && nextToken.value === "</") {
                        return {
                            text: "\n" + indent + "\n" + nextIndent,
                            selection: [1, indent.length, 1, indent.length]
                        };
                    } else {
                        return {
                            text: "\n" + indent
                        };
                    }
                }
            }
        }
    });

};

oop.inherits(XmlBehaviour, Behaviour);

exports.XmlBehaviour = XmlBehaviour;
});

ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var BaseFoldMode = acequire("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(defaultMode, subModes) {
    this.defaultMode = defaultMode;
    this.subModes = subModes;
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {


    this.$getMode = function(state) {
        if (typeof state != "string") 
            state = state[0];
        for (var key in this.subModes) {
            if (state.indexOf(key) === 0)
                return this.subModes[key];
        }
        return null;
    };
    
    this.$tryMode = function(state, session, foldStyle, row) {
        var mode = this.$getMode(state);
        return (mode ? mode.getFoldWidget(session, foldStyle, row) : "");
    };

    this.getFoldWidget = function(session, foldStyle, row) {
        return (
            this.$tryMode(session.getState(row-1), session, foldStyle, row) ||
            this.$tryMode(session.getState(row), session, foldStyle, row) ||
            this.defaultMode.getFoldWidget(session, foldStyle, row)
        );
    };

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var mode = this.$getMode(session.getState(row-1));
        
        if (!mode || !mode.getFoldWidget(session, foldStyle, row))
            mode = this.$getMode(session.getState(row));
        
        if (!mode || !mode.getFoldWidget(session, foldStyle, row))
            mode = this.defaultMode;
        
        return mode.getFoldWidgetRange(session, foldStyle, row);
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var lang = acequire("../../lib/lang");
var Range = acequire("../../range").Range;
var BaseFoldMode = acequire("./fold_mode").FoldMode;
var TokenIterator = acequire("../../token_iterator").TokenIterator;

var FoldMode = exports.FoldMode = function(voidElements, optionalEndTags) {
    BaseFoldMode.call(this);
    this.voidElements = voidElements || {};
    this.optionalEndTags = oop.mixin({}, this.voidElements);
    if (optionalEndTags)
        oop.mixin(this.optionalEndTags, optionalEndTags);
    
};
oop.inherits(FoldMode, BaseFoldMode);

var Tag = function() {
    this.tagName = "";
    this.closing = false;
    this.selfClosing = false;
    this.start = {row: 0, column: 0};
    this.end = {row: 0, column: 0};
};

function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
}

(function() {

    this.getFoldWidget = function(session, foldStyle, row) {
        var tag = this._getFirstTagInLine(session, row);

        if (!tag)
            return this.getCommentFoldWidget(session, row);

        if (tag.closing || (!tag.tagName && tag.selfClosing))
            return foldStyle == "markbeginend" ? "end" : "";

        if (!tag.tagName || tag.selfClosing || this.voidElements.hasOwnProperty(tag.tagName.toLowerCase()))
            return "";

        if (this._findEndTagInLine(session, row, tag.tagName, tag.end.column))
            return "";

        return "start";
    };

    this.getCommentFoldWidget = function(session, row) {
        if (/comment/.test(session.getState(row)) && /<!-/.test(session.getLine(row)))
            return "start";
        return "";
    };
    this._getFirstTagInLine = function(session, row) {
        var tokens = session.getTokens(row);
        var tag = new Tag();

        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (is(token, "tag-open")) {
                tag.end.column = tag.start.column + token.value.length;
                tag.closing = is(token, "end-tag-open");
                token = tokens[++i];
                if (!token)
                    return null;
                tag.tagName = token.value;
                tag.end.column += token.value.length;
                for (i++; i < tokens.length; i++) {
                    token = tokens[i];
                    tag.end.column += token.value.length;
                    if (is(token, "tag-close")) {
                        tag.selfClosing = token.value == '/>';
                        break;
                    }
                }
                return tag;
            } else if (is(token, "tag-close")) {
                tag.selfClosing = token.value == '/>';
                return tag;
            }
            tag.start.column += token.value.length;
        }

        return null;
    };

    this._findEndTagInLine = function(session, row, tagName, startColumn) {
        var tokens = session.getTokens(row);
        var column = 0;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            column += token.value.length;
            if (column < startColumn)
                continue;
            if (is(token, "end-tag-open")) {
                token = tokens[i + 1];
                if (token && token.value == tagName)
                    return true;
            }
        }
        return false;
    };
    this._readTagForward = function(iterator) {
        var token = iterator.getCurrentToken();
        if (!token)
            return null;

        var tag = new Tag();
        do {
            if (is(token, "tag-open")) {
                tag.closing = is(token, "end-tag-open");
                tag.start.row = iterator.getCurrentTokenRow();
                tag.start.column = iterator.getCurrentTokenColumn();
            } else if (is(token, "tag-name")) {
                tag.tagName = token.value;
            } else if (is(token, "tag-close")) {
                tag.selfClosing = token.value == "/>";
                tag.end.row = iterator.getCurrentTokenRow();
                tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
                iterator.stepForward();
                return tag;
            }
        } while(token = iterator.stepForward());

        return null;
    };
    
    this._readTagBackward = function(iterator) {
        var token = iterator.getCurrentToken();
        if (!token)
            return null;

        var tag = new Tag();
        do {
            if (is(token, "tag-open")) {
                tag.closing = is(token, "end-tag-open");
                tag.start.row = iterator.getCurrentTokenRow();
                tag.start.column = iterator.getCurrentTokenColumn();
                iterator.stepBackward();
                return tag;
            } else if (is(token, "tag-name")) {
                tag.tagName = token.value;
            } else if (is(token, "tag-close")) {
                tag.selfClosing = token.value == "/>";
                tag.end.row = iterator.getCurrentTokenRow();
                tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
            }
        } while(token = iterator.stepBackward());

        return null;
    };
    
    this._pop = function(stack, tag) {
        while (stack.length) {
            
            var top = stack[stack.length-1];
            if (!tag || top.tagName == tag.tagName) {
                return stack.pop();
            }
            else if (this.optionalEndTags.hasOwnProperty(top.tagName)) {
                stack.pop();
                continue;
            } else {
                return null;
            }
        }
    };
    
    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var firstTag = this._getFirstTagInLine(session, row);
        
        if (!firstTag) {
            return this.getCommentFoldWidget(session, row)
                && session.getCommentFoldRange(row, session.getLine(row).length);
        }
        
        var isBackward = firstTag.closing || firstTag.selfClosing;
        var stack = [];
        var tag;
        
        if (!isBackward) {
            var iterator = new TokenIterator(session, row, firstTag.start.column);
            var start = {
                row: row,
                column: firstTag.start.column + firstTag.tagName.length + 2
            };
            if (firstTag.start.row == firstTag.end.row)
                start.column = firstTag.end.column;
            while (tag = this._readTagForward(iterator)) {
                if (tag.selfClosing) {
                    if (!stack.length) {
                        tag.start.column += tag.tagName.length + 2;
                        tag.end.column -= 2;
                        return Range.fromPoints(tag.start, tag.end);
                    } else
                        continue;
                }
                
                if (tag.closing) {
                    this._pop(stack, tag);
                    if (stack.length == 0)
                        return Range.fromPoints(start, tag.start);
                }
                else {
                    stack.push(tag);
                }
            }
        }
        else {
            var iterator = new TokenIterator(session, row, firstTag.end.column);
            var end = {
                row: row,
                column: firstTag.start.column
            };
            
            while (tag = this._readTagBackward(iterator)) {
                if (tag.selfClosing) {
                    if (!stack.length) {
                        tag.start.column += tag.tagName.length + 2;
                        tag.end.column -= 2;
                        return Range.fromPoints(tag.start, tag.end);
                    } else
                        continue;
                }
                
                if (!tag.closing) {
                    this._pop(stack, tag);
                    if (stack.length == 0) {
                        tag.start.column += tag.tagName.length + 2;
                        if (tag.start.row == tag.end.row && tag.start.column < tag.end.column)
                            tag.start.column = tag.end.column;
                        return Range.fromPoints(tag.start, end);
                    }
                }
                else {
                    stack.push(tag);
                }
            }
        }
        
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/folding/html",["require","exports","module","ace/lib/oop","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var MixedFoldMode = acequire("./mixed").FoldMode;
var XmlFoldMode = acequire("./xml").FoldMode;
var CStyleFoldMode = acequire("./cstyle").FoldMode;

var FoldMode = exports.FoldMode = function(voidElements, optionalTags) {
    MixedFoldMode.call(this, new XmlFoldMode(voidElements, optionalTags), {
        "js-": new CStyleFoldMode(),
        "css-": new CStyleFoldMode()
    });
};

oop.inherits(FoldMode, MixedFoldMode);

});

ace.define("ace/mode/html_completions",["require","exports","module","ace/token_iterator"], function(acequire, exports, module) {
"use strict";

var TokenIterator = acequire("../token_iterator").TokenIterator;

var commonAttributes = [
    "accesskey",
    "class",
    "contenteditable",
    "contextmenu",
    "dir",
    "draggable",
    "dropzone",
    "hidden",
    "id",
    "inert",
    "itemid",
    "itemprop",
    "itemref",
    "itemscope",
    "itemtype",
    "lang",
    "spellcheck",
    "style",
    "tabindex",
    "title",
    "translate"
];

var eventAttributes = [
    "onabort",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextmenu",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmousedown",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onreset",
    "onscroll",
    "onseeked",
    "onseeking",
    "onselect",
    "onshow",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "onvolumechange",
    "onwaiting"
];

var globalAttributes = commonAttributes.concat(eventAttributes);

var attributeMap = {
    "html": {"manifest": 1},
    "head": {},
    "title": {},
    "base": {"href": 1, "target": 1},
    "link": {"href": 1, "hreflang": 1, "rel": {"stylesheet": 1, "icon": 1}, "media": {"all": 1, "screen": 1, "print": 1}, "type": {"text/css": 1, "image/png": 1, "image/jpeg": 1, "image/gif": 1}, "sizes": 1},
    "meta": {"http-equiv": {"content-type": 1}, "name": {"description": 1, "keywords": 1}, "content": {"text/html; charset=UTF-8": 1}, "charset": 1},
    "style": {"type": 1, "media": {"all": 1, "screen": 1, "print": 1}, "scoped": 1},
    "script": {"charset": 1, "type": {"text/javascript": 1}, "src": 1, "defer": 1, "async": 1},
    "noscript": {"href": 1},
    "body": {"onafterprint": 1, "onbeforeprint": 1, "onbeforeunload": 1, "onhashchange": 1, "onmessage": 1, "onoffline": 1, "onpopstate": 1, "onredo": 1, "onresize": 1, "onstorage": 1, "onundo": 1, "onunload": 1},
    "section": {},
    "nav": {},
    "article": {"pubdate": 1},
    "aside": {},
    "h1": {},
    "h2": {},
    "h3": {},
    "h4": {},
    "h5": {},
    "h6": {},
    "header": {},
    "footer": {},
    "address": {},
    "main": {},
    "p": {},
    "hr": {},
    "pre": {},
    "blockquote": {"cite": 1},
    "ol": {"start": 1, "reversed": 1},
    "ul": {},
    "li": {"value": 1},
    "dl": {},
    "dt": {},
    "dd": {},
    "figure": {},
    "figcaption": {},
    "div": {},
    "a": {"href": 1, "target": {"_blank": 1, "top": 1}, "ping": 1, "rel": {"nofollow": 1, "alternate": 1, "author": 1, "bookmark": 1, "help": 1, "license": 1, "next": 1, "noreferrer": 1, "prefetch": 1, "prev": 1, "search": 1, "tag": 1}, "media": 1, "hreflang": 1, "type": 1},
    "em": {},
    "strong": {},
    "small": {},
    "s": {},
    "cite": {},
    "q": {"cite": 1},
    "dfn": {},
    "abbr": {},
    "data": {},
    "time": {"datetime": 1},
    "code": {},
    "var": {},
    "samp": {},
    "kbd": {},
    "sub": {},
    "sup": {},
    "i": {},
    "b": {},
    "u": {},
    "mark": {},
    "ruby": {},
    "rt": {},
    "rp": {},
    "bdi": {},
    "bdo": {},
    "span": {},
    "br": {},
    "wbr": {},
    "ins": {"cite": 1, "datetime": 1},
    "del": {"cite": 1, "datetime": 1},
    "img": {"alt": 1, "src": 1, "height": 1, "width": 1, "usemap": 1, "ismap": 1},
    "iframe": {"name": 1, "src": 1, "height": 1, "width": 1, "sandbox": {"allow-same-origin": 1, "allow-top-navigation": 1, "allow-forms": 1, "allow-scripts": 1}, "seamless": {"seamless": 1}},
    "embed": {"src": 1, "height": 1, "width": 1, "type": 1},
    "object": {"param": 1, "data": 1, "type": 1, "height" : 1, "width": 1, "usemap": 1, "name": 1, "form": 1, "classid": 1},
    "param": {"name": 1, "value": 1},
    "video": {"src": 1, "autobuffer": 1, "autoplay": {"autoplay": 1}, "loop": {"loop": 1}, "controls": {"controls": 1}, "width": 1, "height": 1, "poster": 1, "muted": {"muted": 1}, "preload": {"auto": 1, "metadata": 1, "none": 1}},
    "audio": {"src": 1, "autobuffer": 1, "autoplay": {"autoplay": 1}, "loop": {"loop": 1}, "controls": {"controls": 1}, "muted": {"muted": 1}, "preload": {"auto": 1, "metadata": 1, "none": 1 }},
    "source": {"src": 1, "type": 1, "media": 1},
    "track": {"kind": 1, "src": 1, "srclang": 1, "label": 1, "default": 1},
    "canvas": {"width": 1, "height": 1},
    "map": {"name": 1},
    "area": {"shape": 1, "coords": 1, "href": 1, "hreflang": 1, "alt": 1, "target": 1, "media": 1, "rel": 1, "ping": 1, "type": 1},
    "svg": {},
    "math": {},
    "table": {"summary": 1},
    "caption": {},
    "colgroup": {"span": 1},
    "col": {"span": 1},
    "tbody": {},
    "thead": {},
    "tfoot": {},
    "tr": {},
    "td": {"headers": 1, "rowspan": 1, "colspan": 1},
    "th": {"headers": 1, "rowspan": 1, "colspan": 1, "scope": 1},
    "form": {"accept-charset": 1, "action": 1, "autocomplete": 1, "enctype": {"multipart/form-data": 1, "application/x-www-form-urlencoded": 1}, "method": {"get": 1, "post": 1}, "name": 1, "novalidate": 1, "target": {"_blank": 1, "top": 1}},
    "fieldset": {"disabled": 1, "form": 1, "name": 1},
    "legend": {},
    "label": {"form": 1, "for": 1},
    "input": {
        "type": {"text": 1, "password": 1, "hidden": 1, "checkbox": 1, "submit": 1, "radio": 1, "file": 1, "button": 1, "reset": 1, "image": 31, "color": 1, "date": 1, "datetime": 1, "datetime-local": 1, "email": 1, "month": 1, "number": 1, "range": 1, "search": 1, "tel": 1, "time": 1, "url": 1, "week": 1},
        "accept": 1, "alt": 1, "autocomplete": {"on": 1, "off": 1}, "autofocus": {"autofocus": 1}, "checked": {"checked": 1}, "disabled": {"disabled": 1}, "form": 1, "formaction": 1, "formenctype": {"application/x-www-form-urlencoded": 1, "multipart/form-data": 1, "text/plain": 1}, "formmethod": {"get": 1, "post": 1}, "formnovalidate": {"formnovalidate": 1}, "formtarget": {"_blank": 1, "_self": 1, "_parent": 1, "_top": 1}, "height": 1, "list": 1, "max": 1, "maxlength": 1, "min": 1, "multiple": {"multiple": 1}, "name": 1, "pattern": 1, "placeholder": 1, "readonly": {"readonly": 1}, "acequired": {"acequired": 1}, "size": 1, "src": 1, "step": 1, "width": 1, "files": 1, "value": 1},
    "button": {"autofocus": 1, "disabled": {"disabled": 1}, "form": 1, "formaction": 1, "formenctype": 1, "formmethod": 1, "formnovalidate": 1, "formtarget": 1, "name": 1, "value": 1, "type": {"button": 1, "submit": 1}},
    "select": {"autofocus": 1, "disabled": 1, "form": 1, "multiple": {"multiple": 1}, "name": 1, "size": 1, "readonly":{"readonly": 1}},
    "datalist": {},
    "optgroup": {"disabled": 1, "label": 1},
    "option": {"disabled": 1, "selected": 1, "label": 1, "value": 1},
    "textarea": {"autofocus": {"autofocus": 1}, "disabled": {"disabled": 1}, "form": 1, "maxlength": 1, "name": 1, "placeholder": 1, "readonly": {"readonly": 1}, "acequired": {"acequired": 1}, "rows": 1, "cols": 1, "wrap": {"on": 1, "off": 1, "hard": 1, "soft": 1}},
    "keygen": {"autofocus": 1, "challenge": {"challenge": 1}, "disabled": {"disabled": 1}, "form": 1, "keytype": {"rsa": 1, "dsa": 1, "ec": 1}, "name": 1},
    "output": {"for": 1, "form": 1, "name": 1},
    "progress": {"value": 1, "max": 1},
    "meter": {"value": 1, "min": 1, "max": 1, "low": 1, "high": 1, "optimum": 1},
    "details": {"open": 1},
    "summary": {},
    "command": {"type": 1, "label": 1, "icon": 1, "disabled": 1, "checked": 1, "radiogroup": 1, "command": 1},
    "menu": {"type": 1, "label": 1},
    "dialog": {"open": 1}
};

var elements = Object.keys(attributeMap);

function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
}

function findTagName(session, pos) {
    var iterator = new TokenIterator(session, pos.row, pos.column);
    var token = iterator.getCurrentToken();
    while (token && !is(token, "tag-name")){
        token = iterator.stepBackward();
    }
    if (token)
        return token.value;
}

function findAttributeName(session, pos) {
    var iterator = new TokenIterator(session, pos.row, pos.column);
    var token = iterator.getCurrentToken();
    while (token && !is(token, "attribute-name")){
        token = iterator.stepBackward();
    }
    if (token)
        return token.value;
}

var HtmlCompletions = function() {

};

(function() {

    this.getCompletions = function(state, session, pos, prefix) {
        var token = session.getTokenAt(pos.row, pos.column);

        if (!token)
            return [];
        if (is(token, "tag-name") || is(token, "tag-open") || is(token, "end-tag-open"))
            return this.getTagCompletions(state, session, pos, prefix);
        if (is(token, "tag-whitespace") || is(token, "attribute-name"))
            return this.getAttributeCompletions(state, session, pos, prefix);
        if (is(token, "attribute-value"))
            return this.getAttributeValueCompletions(state, session, pos, prefix);
        var line = session.getLine(pos.row).substr(0, pos.column);
        if (/&[a-z]*$/i.test(line))
            return this.getHTMLEntityCompletions(state, session, pos, prefix);

        return [];
    };

    this.getTagCompletions = function(state, session, pos, prefix) {
        return elements.map(function(element){
            return {
                value: element,
                meta: "tag",
                score: Number.MAX_VALUE
            };
        });
    };

    this.getAttributeCompletions = function(state, session, pos, prefix) {
        var tagName = findTagName(session, pos);
        if (!tagName)
            return [];
        var attributes = globalAttributes;
        if (tagName in attributeMap) {
            attributes = attributes.concat(Object.keys(attributeMap[tagName]));
        }
        return attributes.map(function(attribute){
            return {
                caption: attribute,
                snippet: attribute + '="$0"',
                meta: "attribute",
                score: Number.MAX_VALUE
            };
        });
    };

    this.getAttributeValueCompletions = function(state, session, pos, prefix) {
        var tagName = findTagName(session, pos);
        var attributeName = findAttributeName(session, pos);
        
        if (!tagName)
            return [];
        var values = [];
        if (tagName in attributeMap && attributeName in attributeMap[tagName] && typeof attributeMap[tagName][attributeName] === "object") {
            values = Object.keys(attributeMap[tagName][attributeName]);
        }
        return values.map(function(value){
            return {
                caption: value,
                snippet: value,
                meta: "attribute value",
                score: Number.MAX_VALUE
            };
        });
    };

    this.getHTMLEntityCompletions = function(state, session, pos, prefix) {
        var values = ['Aacute;', 'aacute;', 'Acirc;', 'acirc;', 'acute;', 'AElig;', 'aelig;', 'Agrave;', 'agrave;', 'alefsym;', 'Alpha;', 'alpha;', 'amp;', 'and;', 'ang;', 'Aring;', 'aring;', 'asymp;', 'Atilde;', 'atilde;', 'Auml;', 'auml;', 'bdquo;', 'Beta;', 'beta;', 'brvbar;', 'bull;', 'cap;', 'Ccedil;', 'ccedil;', 'cedil;', 'cent;', 'Chi;', 'chi;', 'circ;', 'clubs;', 'cong;', 'copy;', 'crarr;', 'cup;', 'curren;', 'Dagger;', 'dagger;', 'dArr;', 'darr;', 'deg;', 'Delta;', 'delta;', 'diams;', 'divide;', 'Eacute;', 'eacute;', 'Ecirc;', 'ecirc;', 'Egrave;', 'egrave;', 'empty;', 'emsp;', 'ensp;', 'Epsilon;', 'epsilon;', 'equiv;', 'Eta;', 'eta;', 'ETH;', 'eth;', 'Euml;', 'euml;', 'euro;', 'exist;', 'fnof;', 'forall;', 'frac12;', 'frac14;', 'frac34;', 'frasl;', 'Gamma;', 'gamma;', 'ge;', 'gt;', 'hArr;', 'harr;', 'hearts;', 'hellip;', 'Iacute;', 'iacute;', 'Icirc;', 'icirc;', 'iexcl;', 'Igrave;', 'igrave;', 'image;', 'infin;', 'int;', 'Iota;', 'iota;', 'iquest;', 'isin;', 'Iuml;', 'iuml;', 'Kappa;', 'kappa;', 'Lambda;', 'lambda;', 'lang;', 'laquo;', 'lArr;', 'larr;', 'lceil;', 'ldquo;', 'le;', 'lfloor;', 'lowast;', 'loz;', 'lrm;', 'lsaquo;', 'lsquo;', 'lt;', 'macr;', 'mdash;', 'micro;', 'middot;', 'minus;', 'Mu;', 'mu;', 'nabla;', 'nbsp;', 'ndash;', 'ne;', 'ni;', 'not;', 'notin;', 'nsub;', 'Ntilde;', 'ntilde;', 'Nu;', 'nu;', 'Oacute;', 'oacute;', 'Ocirc;', 'ocirc;', 'OElig;', 'oelig;', 'Ograve;', 'ograve;', 'oline;', 'Omega;', 'omega;', 'Omicron;', 'omicron;', 'oplus;', 'or;', 'ordf;', 'ordm;', 'Oslash;', 'oslash;', 'Otilde;', 'otilde;', 'otimes;', 'Ouml;', 'ouml;', 'para;', 'part;', 'permil;', 'perp;', 'Phi;', 'phi;', 'Pi;', 'pi;', 'piv;', 'plusmn;', 'pound;', 'Prime;', 'prime;', 'prod;', 'prop;', 'Psi;', 'psi;', 'quot;', 'radic;', 'rang;', 'raquo;', 'rArr;', 'rarr;', 'rceil;', 'rdquo;', 'real;', 'reg;', 'rfloor;', 'Rho;', 'rho;', 'rlm;', 'rsaquo;', 'rsquo;', 'sbquo;', 'Scaron;', 'scaron;', 'sdot;', 'sect;', 'shy;', 'Sigma;', 'sigma;', 'sigmaf;', 'sim;', 'spades;', 'sub;', 'sube;', 'sum;', 'sup;', 'sup1;', 'sup2;', 'sup3;', 'supe;', 'szlig;', 'Tau;', 'tau;', 'there4;', 'Theta;', 'theta;', 'thetasym;', 'thinsp;', 'THORN;', 'thorn;', 'tilde;', 'times;', 'trade;', 'Uacute;', 'uacute;', 'uArr;', 'uarr;', 'Ucirc;', 'ucirc;', 'Ugrave;', 'ugrave;', 'uml;', 'upsih;', 'Upsilon;', 'upsilon;', 'Uuml;', 'uuml;', 'weierp;', 'Xi;', 'xi;', 'Yacute;', 'yacute;', 'yen;', 'Yuml;', 'yuml;', 'Zeta;', 'zeta;', 'zwj;', 'zwnj;'];

        return values.map(function(value){
            return {
                caption: value,
                snippet: value,
                meta: "html entity",
                score: Number.MAX_VALUE
            };
        });
    };

}).call(HtmlCompletions.prototype);

exports.HtmlCompletions = HtmlCompletions;
});

ace.define("ace/mode/html",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/javascript","ace/mode/css","ace/mode/html_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/html","ace/mode/html_completions","ace/worker/worker_client"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var lang = acequire("../lib/lang");
var TextMode = acequire("./text").Mode;
var JavaScriptMode = acequire("./javascript").Mode;
var CssMode = acequire("./css").Mode;
var HtmlHighlightRules = acequire("./html_highlight_rules").HtmlHighlightRules;
var XmlBehaviour = acequire("./behaviour/xml").XmlBehaviour;
var HtmlFoldMode = acequire("./folding/html").FoldMode;
var HtmlCompletions = acequire("./html_completions").HtmlCompletions;
var WorkerClient = acequire("../worker/worker_client").WorkerClient;
var voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"];
var optionalEndTags = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"];

var Mode = function(options) {
    this.fragmentContext = options && options.fragmentContext;
    this.HighlightRules = HtmlHighlightRules;
    this.$behaviour = new XmlBehaviour();
    this.$completer = new HtmlCompletions();
    
    this.createModeDelegates({
        "js-": JavaScriptMode,
        "css-": CssMode
    });
    
    this.foldingRules = new HtmlFoldMode(this.voidElements, lang.arrayToMap(optionalEndTags));
};
oop.inherits(Mode, TextMode);

(function() {

    this.blockComment = {start: "<!--", end: "-->"};

    this.voidElements = lang.arrayToMap(voidElements);

    this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
    };

    this.checkOutdent = function(state, line, input) {
        return false;
    };

    this.getCompletions = function(state, session, pos, prefix) {
        return this.$completer.getCompletions(state, session, pos, prefix);
    };

    this.createWorker = function(session) {
        if (this.constructor != Mode)
            return;
        var worker = new WorkerClient(["ace"], __webpack_require__(/*! ../worker/html */ "./node_modules/brace/worker/html.js"), "Worker");
        worker.attachToDocument(session.getDocument());

        if (this.fragmentContext)
            worker.call("setOptions", [{context: this.fragmentContext}]);

        worker.on("error", function(e) {
            session.setAnnotations(e.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/html";
}).call(Mode.prototype);

exports.Mode = Mode;
});


/***/ }),

/***/ "./node_modules/brace/worker/css.js":
/*!******************************************!*\
  !*** ./node_modules/brace/worker/css.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.id = 'ace/mode/css_worker';
module.exports.src = "\"no use strict\";!function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}}(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}if(\"[object Object]\"!==Object.prototype.toString.call(obj))return obj;copy={};for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/css/csslint\",[\"require\",\"exports\",\"module\"],function(acequire,exports,module){function objectToString(o){return Object.prototype.toString.call(o)}function clone(parent,circular,depth,prototype){function _clone(parent,depth){if(null===parent)return null;if(0==depth)return parent;var child;if(\"object\"!=typeof parent)return parent;if(util.isArray(parent))child=[];else if(util.isRegExp(parent))child=RegExp(parent.source,util.getRegExpFlags(parent)),parent.lastIndex&&(child.lastIndex=parent.lastIndex);else if(util.isDate(parent))child=new Date(parent.getTime());else{if(useBuffer&&Buffer.isBuffer(parent))return child=new Buffer(parent.length),parent.copy(child),child;child=prototype===void 0?Object.create(Object.getPrototypeOf(parent)):Object.create(prototype)}if(circular){var index=allParents.indexOf(parent);if(-1!=index)return allChildren[index];allParents.push(parent),allChildren.push(child)}for(var i in parent)child[i]=_clone(parent[i],depth-1);return child}var allParents=[],allChildren=[],useBuffer=\"undefined\"!=typeof Buffer;return circular===void 0&&(circular=!0),depth===void 0&&(depth=1/0),_clone(parent,depth)}function Reporter(lines,ruleset){this.messages=[],this.stats=[],this.lines=lines,this.ruleset=ruleset}var parserlib={};(function(){function EventTarget(){this._listeners={}}function StringReader(text){this._input=text.replace(/\\n\\r?/g,\"\\n\"),this._line=1,this._col=1,this._cursor=0}function SyntaxError(message,line,col){this.col=col,this.line=line,this.message=message}function SyntaxUnit(text,line,col,type){this.col=col,this.line=line,this.text=text,this.type=type}function TokenStreamBase(input,tokenData){this._reader=input?new StringReader(\"\"+input):null,this._token=null,this._tokenData=tokenData,this._lt=[],this._ltIndex=0,this._ltIndexCache=[]}EventTarget.prototype={constructor:EventTarget,addListener:function(type,listener){this._listeners[type]||(this._listeners[type]=[]),this._listeners[type].push(listener)},fire:function(event){if(\"string\"==typeof event&&(event={type:event}),event.target!==void 0&&(event.target=this),event.type===void 0)throw Error(\"Event object missing 'type' property.\");if(this._listeners[event.type])for(var listeners=this._listeners[event.type].concat(),i=0,len=listeners.length;len>i;i++)listeners[i].call(this,event)},removeListener:function(type,listener){if(this._listeners[type])for(var listeners=this._listeners[type],i=0,len=listeners.length;len>i;i++)if(listeners[i]===listener){listeners.splice(i,1);break}}},StringReader.prototype={constructor:StringReader,getCol:function(){return this._col},getLine:function(){return this._line},eof:function(){return this._cursor==this._input.length},peek:function(count){var c=null;return count=count===void 0?1:count,this._cursor<this._input.length&&(c=this._input.charAt(this._cursor+count-1)),c},read:function(){var c=null;return this._cursor<this._input.length&&(\"\\n\"==this._input.charAt(this._cursor)?(this._line++,this._col=1):this._col++,c=this._input.charAt(this._cursor++)),c},mark:function(){this._bookmark={cursor:this._cursor,line:this._line,col:this._col}},reset:function(){this._bookmark&&(this._cursor=this._bookmark.cursor,this._line=this._bookmark.line,this._col=this._bookmark.col,delete this._bookmark)},readTo:function(pattern){for(var c,buffer=\"\";buffer.length<pattern.length||buffer.lastIndexOf(pattern)!=buffer.length-pattern.length;){if(c=this.read(),!c)throw Error('Expected \"'+pattern+'\" at line '+this._line+\", col \"+this._col+\".\");buffer+=c}return buffer},readWhile:function(filter){for(var buffer=\"\",c=this.read();null!==c&&filter(c);)buffer+=c,c=this.read();return buffer},readMatch:function(matcher){var source=this._input.substring(this._cursor),value=null;return\"string\"==typeof matcher?0===source.indexOf(matcher)&&(value=this.readCount(matcher.length)):matcher instanceof RegExp&&matcher.test(source)&&(value=this.readCount(RegExp.lastMatch.length)),value},readCount:function(count){for(var buffer=\"\";count--;)buffer+=this.read();return buffer}},SyntaxError.prototype=Error(),SyntaxUnit.fromToken=function(token){return new SyntaxUnit(token.value,token.startLine,token.startCol)},SyntaxUnit.prototype={constructor:SyntaxUnit,valueOf:function(){return this.text},toString:function(){return this.text}},TokenStreamBase.createTokenData=function(tokens){var nameMap=[],typeMap={},tokenData=tokens.concat([]),i=0,len=tokenData.length+1;for(tokenData.UNKNOWN=-1,tokenData.unshift({name:\"EOF\"});len>i;i++)nameMap.push(tokenData[i].name),tokenData[tokenData[i].name]=i,tokenData[i].text&&(typeMap[tokenData[i].text]=i);return tokenData.name=function(tt){return nameMap[tt]},tokenData.type=function(c){return typeMap[c]},tokenData},TokenStreamBase.prototype={constructor:TokenStreamBase,match:function(tokenTypes,channel){tokenTypes instanceof Array||(tokenTypes=[tokenTypes]);\nfor(var tt=this.get(channel),i=0,len=tokenTypes.length;len>i;)if(tt==tokenTypes[i++])return!0;return this.unget(),!1},mustMatch:function(tokenTypes){var token;if(tokenTypes instanceof Array||(tokenTypes=[tokenTypes]),!this.match.apply(this,arguments))throw token=this.LT(1),new SyntaxError(\"Expected \"+this._tokenData[tokenTypes[0]].name+\" at line \"+token.startLine+\", col \"+token.startCol+\".\",token.startLine,token.startCol)},advance:function(tokenTypes,channel){for(;0!==this.LA(0)&&!this.match(tokenTypes,channel);)this.get();return this.LA(0)},get:function(channel){var token,info,tokenInfo=this._tokenData,i=(this._reader,0);if(tokenInfo.length,this._lt.length&&this._ltIndex>=0&&this._ltIndex<this._lt.length){for(i++,this._token=this._lt[this._ltIndex++],info=tokenInfo[this._token.type];void 0!==info.channel&&channel!==info.channel&&this._ltIndex<this._lt.length;)this._token=this._lt[this._ltIndex++],info=tokenInfo[this._token.type],i++;if((void 0===info.channel||channel===info.channel)&&this._ltIndex<=this._lt.length)return this._ltIndexCache.push(i),this._token.type}return token=this._getToken(),token.type>-1&&!tokenInfo[token.type].hide&&(token.channel=tokenInfo[token.type].channel,this._token=token,this._lt.push(token),this._ltIndexCache.push(this._lt.length-this._ltIndex+i),this._lt.length>5&&this._lt.shift(),this._ltIndexCache.length>5&&this._ltIndexCache.shift(),this._ltIndex=this._lt.length),info=tokenInfo[token.type],info&&(info.hide||void 0!==info.channel&&channel!==info.channel)?this.get(channel):token.type},LA:function(index){var tt,total=index;if(index>0){if(index>5)throw Error(\"Too much lookahead.\");for(;total;)tt=this.get(),total--;for(;index>total;)this.unget(),total++}else if(0>index){if(!this._lt[this._ltIndex+index])throw Error(\"Too much lookbehind.\");tt=this._lt[this._ltIndex+index].type}else tt=this._token.type;return tt},LT:function(index){return this.LA(index),this._lt[this._ltIndex+index-1]},peek:function(){return this.LA(1)},token:function(){return this._token},tokenName:function(tokenType){return 0>tokenType||tokenType>this._tokenData.length?\"UNKNOWN_TOKEN\":this._tokenData[tokenType].name},tokenType:function(tokenName){return this._tokenData[tokenName]||-1},unget:function(){if(!this._ltIndexCache.length)throw Error(\"Too much lookahead.\");this._ltIndex-=this._ltIndexCache.pop(),this._token=this._lt[this._ltIndex-1]}},parserlib.util={StringReader:StringReader,SyntaxError:SyntaxError,SyntaxUnit:SyntaxUnit,EventTarget:EventTarget,TokenStreamBase:TokenStreamBase}})(),function(){function Combinator(text,line,col){SyntaxUnit.call(this,text,line,col,Parser.COMBINATOR_TYPE),this.type=\"unknown\",/^\\s+$/.test(text)?this.type=\"descendant\":\">\"==text?this.type=\"child\":\"+\"==text?this.type=\"adjacent-sibling\":\"~\"==text&&(this.type=\"sibling\")}function MediaFeature(name,value){SyntaxUnit.call(this,\"(\"+name+(null!==value?\":\"+value:\"\")+\")\",name.startLine,name.startCol,Parser.MEDIA_FEATURE_TYPE),this.name=name,this.value=value}function MediaQuery(modifier,mediaType,features,line,col){SyntaxUnit.call(this,(modifier?modifier+\" \":\"\")+(mediaType?mediaType:\"\")+(mediaType&&features.length>0?\" and \":\"\")+features.join(\" and \"),line,col,Parser.MEDIA_QUERY_TYPE),this.modifier=modifier,this.mediaType=mediaType,this.features=features}function Parser(options){EventTarget.call(this),this.options=options||{},this._tokenStream=null}function PropertyName(text,hack,line,col){SyntaxUnit.call(this,text,line,col,Parser.PROPERTY_NAME_TYPE),this.hack=hack}function PropertyValue(parts,line,col){SyntaxUnit.call(this,parts.join(\" \"),line,col,Parser.PROPERTY_VALUE_TYPE),this.parts=parts}function PropertyValueIterator(value){this._i=0,this._parts=value.parts,this._marks=[],this.value=value}function PropertyValuePart(text,line,col){SyntaxUnit.call(this,text,line,col,Parser.PROPERTY_VALUE_PART_TYPE),this.type=\"unknown\";var temp;if(/^([+\\-]?[\\d\\.]+)([a-z]+)$/i.test(text))switch(this.type=\"dimension\",this.value=+RegExp.$1,this.units=RegExp.$2,this.units.toLowerCase()){case\"em\":case\"rem\":case\"ex\":case\"px\":case\"cm\":case\"mm\":case\"in\":case\"pt\":case\"pc\":case\"ch\":case\"vh\":case\"vw\":case\"vmax\":case\"vmin\":this.type=\"length\";break;case\"deg\":case\"rad\":case\"grad\":this.type=\"angle\";break;case\"ms\":case\"s\":this.type=\"time\";break;case\"hz\":case\"khz\":this.type=\"frequency\";break;case\"dpi\":case\"dpcm\":this.type=\"resolution\"}else/^([+\\-]?[\\d\\.]+)%$/i.test(text)?(this.type=\"percentage\",this.value=+RegExp.$1):/^([+\\-]?\\d+)$/i.test(text)?(this.type=\"integer\",this.value=+RegExp.$1):/^([+\\-]?[\\d\\.]+)$/i.test(text)?(this.type=\"number\",this.value=+RegExp.$1):/^#([a-f0-9]{3,6})/i.test(text)?(this.type=\"color\",temp=RegExp.$1,3==temp.length?(this.red=parseInt(temp.charAt(0)+temp.charAt(0),16),this.green=parseInt(temp.charAt(1)+temp.charAt(1),16),this.blue=parseInt(temp.charAt(2)+temp.charAt(2),16)):(this.red=parseInt(temp.substring(0,2),16),this.green=parseInt(temp.substring(2,4),16),this.blue=parseInt(temp.substring(4,6),16))):/^rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)/i.test(text)?(this.type=\"color\",this.red=+RegExp.$1,this.green=+RegExp.$2,this.blue=+RegExp.$3):/^rgb\\(\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*\\)/i.test(text)?(this.type=\"color\",this.red=255*+RegExp.$1/100,this.green=255*+RegExp.$2/100,this.blue=255*+RegExp.$3/100):/^rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*([\\d\\.]+)\\s*\\)/i.test(text)?(this.type=\"color\",this.red=+RegExp.$1,this.green=+RegExp.$2,this.blue=+RegExp.$3,this.alpha=+RegExp.$4):/^rgba\\(\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*([\\d\\.]+)\\s*\\)/i.test(text)?(this.type=\"color\",this.red=255*+RegExp.$1/100,this.green=255*+RegExp.$2/100,this.blue=255*+RegExp.$3/100,this.alpha=+RegExp.$4):/^hsl\\(\\s*(\\d+)\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*\\)/i.test(text)?(this.type=\"color\",this.hue=+RegExp.$1,this.saturation=+RegExp.$2/100,this.lightness=+RegExp.$3/100):/^hsla\\(\\s*(\\d+)\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*([\\d\\.]+)\\s*\\)/i.test(text)?(this.type=\"color\",this.hue=+RegExp.$1,this.saturation=+RegExp.$2/100,this.lightness=+RegExp.$3/100,this.alpha=+RegExp.$4):/^url\\([\"']?([^\\)\"']+)[\"']?\\)/i.test(text)?(this.type=\"uri\",this.uri=RegExp.$1):/^([^\\(]+)\\(/i.test(text)?(this.type=\"function\",this.name=RegExp.$1,this.value=text):/^[\"'][^\"']*[\"']/.test(text)?(this.type=\"string\",this.value=eval(text)):Colors[text.toLowerCase()]?(this.type=\"color\",temp=Colors[text.toLowerCase()].substring(1),this.red=parseInt(temp.substring(0,2),16),this.green=parseInt(temp.substring(2,4),16),this.blue=parseInt(temp.substring(4,6),16)):/^[\\,\\/]$/.test(text)?(this.type=\"operator\",this.value=text):/^[a-z\\-_\\u0080-\\uFFFF][a-z0-9\\-_\\u0080-\\uFFFF]*$/i.test(text)&&(this.type=\"identifier\",this.value=text)}function Selector(parts,line,col){SyntaxUnit.call(this,parts.join(\" \"),line,col,Parser.SELECTOR_TYPE),this.parts=parts,this.specificity=Specificity.calculate(this)}function SelectorPart(elementName,modifiers,text,line,col){SyntaxUnit.call(this,text,line,col,Parser.SELECTOR_PART_TYPE),this.elementName=elementName,this.modifiers=modifiers}function SelectorSubPart(text,type,line,col){SyntaxUnit.call(this,text,line,col,Parser.SELECTOR_SUB_PART_TYPE),this.type=type,this.args=[]}function Specificity(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d}function isHexDigit(c){return null!==c&&h.test(c)}function isDigit(c){return null!==c&&/\\d/.test(c)}function isWhitespace(c){return null!==c&&/\\s/.test(c)}function isNewLine(c){return null!==c&&nl.test(c)}function isNameStart(c){return null!==c&&/[a-z_\\u0080-\\uFFFF\\\\]/i.test(c)}function isNameChar(c){return null!==c&&(isNameStart(c)||/[0-9\\-\\\\]/.test(c))}function isIdentStart(c){return null!==c&&(isNameStart(c)||/\\-\\\\/.test(c))}function mix(receiver,supplier){for(var prop in supplier)supplier.hasOwnProperty(prop)&&(receiver[prop]=supplier[prop]);return receiver}function TokenStream(input){TokenStreamBase.call(this,input,Tokens)}function ValidationError(message,line,col){this.col=col,this.line=line,this.message=message}var EventTarget=parserlib.util.EventTarget,TokenStreamBase=parserlib.util.TokenStreamBase,StringReader=parserlib.util.StringReader,SyntaxError=parserlib.util.SyntaxError,SyntaxUnit=parserlib.util.SyntaxUnit,Colors={aliceblue:\"#f0f8ff\",antiquewhite:\"#faebd7\",aqua:\"#00ffff\",aquamarine:\"#7fffd4\",azure:\"#f0ffff\",beige:\"#f5f5dc\",bisque:\"#ffe4c4\",black:\"#000000\",blanchedalmond:\"#ffebcd\",blue:\"#0000ff\",blueviolet:\"#8a2be2\",brown:\"#a52a2a\",burlywood:\"#deb887\",cadetblue:\"#5f9ea0\",chartreuse:\"#7fff00\",chocolate:\"#d2691e\",coral:\"#ff7f50\",cornflowerblue:\"#6495ed\",cornsilk:\"#fff8dc\",crimson:\"#dc143c\",cyan:\"#00ffff\",darkblue:\"#00008b\",darkcyan:\"#008b8b\",darkgoldenrod:\"#b8860b\",darkgray:\"#a9a9a9\",darkgrey:\"#a9a9a9\",darkgreen:\"#006400\",darkkhaki:\"#bdb76b\",darkmagenta:\"#8b008b\",darkolivegreen:\"#556b2f\",darkorange:\"#ff8c00\",darkorchid:\"#9932cc\",darkred:\"#8b0000\",darksalmon:\"#e9967a\",darkseagreen:\"#8fbc8f\",darkslateblue:\"#483d8b\",darkslategray:\"#2f4f4f\",darkslategrey:\"#2f4f4f\",darkturquoise:\"#00ced1\",darkviolet:\"#9400d3\",deeppink:\"#ff1493\",deepskyblue:\"#00bfff\",dimgray:\"#696969\",dimgrey:\"#696969\",dodgerblue:\"#1e90ff\",firebrick:\"#b22222\",floralwhite:\"#fffaf0\",forestgreen:\"#228b22\",fuchsia:\"#ff00ff\",gainsboro:\"#dcdcdc\",ghostwhite:\"#f8f8ff\",gold:\"#ffd700\",goldenrod:\"#daa520\",gray:\"#808080\",grey:\"#808080\",green:\"#008000\",greenyellow:\"#adff2f\",honeydew:\"#f0fff0\",hotpink:\"#ff69b4\",indianred:\"#cd5c5c\",indigo:\"#4b0082\",ivory:\"#fffff0\",khaki:\"#f0e68c\",lavender:\"#e6e6fa\",lavenderblush:\"#fff0f5\",lawngreen:\"#7cfc00\",lemonchiffon:\"#fffacd\",lightblue:\"#add8e6\",lightcoral:\"#f08080\",lightcyan:\"#e0ffff\",lightgoldenrodyellow:\"#fafad2\",lightgray:\"#d3d3d3\",lightgrey:\"#d3d3d3\",lightgreen:\"#90ee90\",lightpink:\"#ffb6c1\",lightsalmon:\"#ffa07a\",lightseagreen:\"#20b2aa\",lightskyblue:\"#87cefa\",lightslategray:\"#778899\",lightslategrey:\"#778899\",lightsteelblue:\"#b0c4de\",lightyellow:\"#ffffe0\",lime:\"#00ff00\",limegreen:\"#32cd32\",linen:\"#faf0e6\",magenta:\"#ff00ff\",maroon:\"#800000\",mediumaquamarine:\"#66cdaa\",mediumblue:\"#0000cd\",mediumorchid:\"#ba55d3\",mediumpurple:\"#9370d8\",mediumseagreen:\"#3cb371\",mediumslateblue:\"#7b68ee\",mediumspringgreen:\"#00fa9a\",mediumturquoise:\"#48d1cc\",mediumvioletred:\"#c71585\",midnightblue:\"#191970\",mintcream:\"#f5fffa\",mistyrose:\"#ffe4e1\",moccasin:\"#ffe4b5\",navajowhite:\"#ffdead\",navy:\"#000080\",oldlace:\"#fdf5e6\",olive:\"#808000\",olivedrab:\"#6b8e23\",orange:\"#ffa500\",orangered:\"#ff4500\",orchid:\"#da70d6\",palegoldenrod:\"#eee8aa\",palegreen:\"#98fb98\",paleturquoise:\"#afeeee\",palevioletred:\"#d87093\",papayawhip:\"#ffefd5\",peachpuff:\"#ffdab9\",peru:\"#cd853f\",pink:\"#ffc0cb\",plum:\"#dda0dd\",powderblue:\"#b0e0e6\",purple:\"#800080\",red:\"#ff0000\",rosybrown:\"#bc8f8f\",royalblue:\"#4169e1\",saddlebrown:\"#8b4513\",salmon:\"#fa8072\",sandybrown:\"#f4a460\",seagreen:\"#2e8b57\",seashell:\"#fff5ee\",sienna:\"#a0522d\",silver:\"#c0c0c0\",skyblue:\"#87ceeb\",slateblue:\"#6a5acd\",slategray:\"#708090\",slategrey:\"#708090\",snow:\"#fffafa\",springgreen:\"#00ff7f\",steelblue:\"#4682b4\",tan:\"#d2b48c\",teal:\"#008080\",thistle:\"#d8bfd8\",tomato:\"#ff6347\",turquoise:\"#40e0d0\",violet:\"#ee82ee\",wheat:\"#f5deb3\",white:\"#ffffff\",whitesmoke:\"#f5f5f5\",yellow:\"#ffff00\",yellowgreen:\"#9acd32\",activeBorder:\"Active window border.\",activecaption:\"Active window caption.\",appworkspace:\"Background color of multiple document interface.\",background:\"Desktop background.\",buttonface:\"The face background color for 3-D elements that appear 3-D due to one layer of surrounding border.\",buttonhighlight:\"The color of the border facing the light source for 3-D elements that appear 3-D due to one layer of surrounding border.\",buttonshadow:\"The color of the border away from the light source for 3-D elements that appear 3-D due to one layer of surrounding border.\",buttontext:\"Text on push buttons.\",captiontext:\"Text in caption, size box, and scrollbar arrow box.\",graytext:\"Grayed (disabled) text. This color is set to #000 if the current display driver does not support a solid gray color.\",greytext:\"Greyed (disabled) text. This color is set to #000 if the current display driver does not support a solid grey color.\",highlight:\"Item(s) selected in a control.\",highlighttext:\"Text of item(s) selected in a control.\",inactiveborder:\"Inactive window border.\",inactivecaption:\"Inactive window caption.\",inactivecaptiontext:\"Color of text in an inactive caption.\",infobackground:\"Background color for tooltip controls.\",infotext:\"Text color for tooltip controls.\",menu:\"Menu background.\",menutext:\"Text in menus.\",scrollbar:\"Scroll bar gray area.\",threeddarkshadow:\"The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedface:\"The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedhighlight:\"The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedlightshadow:\"The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedshadow:\"The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",window:\"Window background.\",windowframe:\"Window frame.\",windowtext:\"Text in windows.\"};Combinator.prototype=new SyntaxUnit,Combinator.prototype.constructor=Combinator,MediaFeature.prototype=new SyntaxUnit,MediaFeature.prototype.constructor=MediaFeature,MediaQuery.prototype=new SyntaxUnit,MediaQuery.prototype.constructor=MediaQuery,Parser.DEFAULT_TYPE=0,Parser.COMBINATOR_TYPE=1,Parser.MEDIA_FEATURE_TYPE=2,Parser.MEDIA_QUERY_TYPE=3,Parser.PROPERTY_NAME_TYPE=4,Parser.PROPERTY_VALUE_TYPE=5,Parser.PROPERTY_VALUE_PART_TYPE=6,Parser.SELECTOR_TYPE=7,Parser.SELECTOR_PART_TYPE=8,Parser.SELECTOR_SUB_PART_TYPE=9,Parser.prototype=function(){var prop,proto=new EventTarget,additions={constructor:Parser,DEFAULT_TYPE:0,COMBINATOR_TYPE:1,MEDIA_FEATURE_TYPE:2,MEDIA_QUERY_TYPE:3,PROPERTY_NAME_TYPE:4,PROPERTY_VALUE_TYPE:5,PROPERTY_VALUE_PART_TYPE:6,SELECTOR_TYPE:7,SELECTOR_PART_TYPE:8,SELECTOR_SUB_PART_TYPE:9,_stylesheet:function(){var count,token,tt,tokenStream=this._tokenStream;for(this.fire(\"startstylesheet\"),this._charset(),this._skipCruft();tokenStream.peek()==Tokens.IMPORT_SYM;)this._import(),this._skipCruft();for(;tokenStream.peek()==Tokens.NAMESPACE_SYM;)this._namespace(),this._skipCruft();for(tt=tokenStream.peek();tt>Tokens.EOF;){try{switch(tt){case Tokens.MEDIA_SYM:this._media(),this._skipCruft();break;case Tokens.PAGE_SYM:this._page(),this._skipCruft();break;case Tokens.FONT_FACE_SYM:this._font_face(),this._skipCruft();break;case Tokens.KEYFRAMES_SYM:this._keyframes(),this._skipCruft();break;case Tokens.VIEWPORT_SYM:this._viewport(),this._skipCruft();break;case Tokens.UNKNOWN_SYM:if(tokenStream.get(),this.options.strict)throw new SyntaxError(\"Unknown @ rule.\",tokenStream.LT(0).startLine,tokenStream.LT(0).startCol);for(this.fire({type:\"error\",error:null,message:\"Unknown @ rule: \"+tokenStream.LT(0).value+\".\",line:tokenStream.LT(0).startLine,col:tokenStream.LT(0).startCol}),count=0;tokenStream.advance([Tokens.LBRACE,Tokens.RBRACE])==Tokens.LBRACE;)count++;for(;count;)tokenStream.advance([Tokens.RBRACE]),count--;break;case Tokens.S:this._readWhitespace();break;default:if(!this._ruleset())switch(tt){case Tokens.CHARSET_SYM:throw token=tokenStream.LT(1),this._charset(!1),new SyntaxError(\"@charset not allowed here.\",token.startLine,token.startCol);case Tokens.IMPORT_SYM:throw token=tokenStream.LT(1),this._import(!1),new SyntaxError(\"@import not allowed here.\",token.startLine,token.startCol);case Tokens.NAMESPACE_SYM:throw token=tokenStream.LT(1),this._namespace(!1),new SyntaxError(\"@namespace not allowed here.\",token.startLine,token.startCol);default:tokenStream.get(),this._unexpectedToken(tokenStream.token())}}}catch(ex){if(!(ex instanceof SyntaxError)||this.options.strict)throw ex;this.fire({type:\"error\",error:ex,message:ex.message,line:ex.line,col:ex.col})}tt=tokenStream.peek()}tt!=Tokens.EOF&&this._unexpectedToken(tokenStream.token()),this.fire(\"endstylesheet\")},_charset:function(emit){var charset,token,line,col,tokenStream=this._tokenStream;tokenStream.match(Tokens.CHARSET_SYM)&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),tokenStream.mustMatch(Tokens.STRING),token=tokenStream.token(),charset=token.value,this._readWhitespace(),tokenStream.mustMatch(Tokens.SEMICOLON),emit!==!1&&this.fire({type:\"charset\",charset:charset,line:line,col:col}))},_import:function(emit){var uri,importToken,tokenStream=this._tokenStream,mediaList=[];tokenStream.mustMatch(Tokens.IMPORT_SYM),importToken=tokenStream.token(),this._readWhitespace(),tokenStream.mustMatch([Tokens.STRING,Tokens.URI]),uri=tokenStream.token().value.replace(/^(?:url\\()?[\"']?([^\"']+?)[\"']?\\)?$/,\"$1\"),this._readWhitespace(),mediaList=this._media_query_list(),tokenStream.mustMatch(Tokens.SEMICOLON),this._readWhitespace(),emit!==!1&&this.fire({type:\"import\",uri:uri,media:mediaList,line:importToken.startLine,col:importToken.startCol})},_namespace:function(emit){var line,col,prefix,uri,tokenStream=this._tokenStream;tokenStream.mustMatch(Tokens.NAMESPACE_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),tokenStream.match(Tokens.IDENT)&&(prefix=tokenStream.token().value,this._readWhitespace()),tokenStream.mustMatch([Tokens.STRING,Tokens.URI]),uri=tokenStream.token().value.replace(/(?:url\\()?[\"']([^\"']+)[\"']\\)?/,\"$1\"),this._readWhitespace(),tokenStream.mustMatch(Tokens.SEMICOLON),this._readWhitespace(),emit!==!1&&this.fire({type:\"namespace\",prefix:prefix,uri:uri,line:line,col:col})},_media:function(){var line,col,mediaList,tokenStream=this._tokenStream;for(tokenStream.mustMatch(Tokens.MEDIA_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),mediaList=this._media_query_list(),tokenStream.mustMatch(Tokens.LBRACE),this._readWhitespace(),this.fire({type:\"startmedia\",media:mediaList,line:line,col:col});;)if(tokenStream.peek()==Tokens.PAGE_SYM)this._page();else if(tokenStream.peek()==Tokens.FONT_FACE_SYM)this._font_face();else if(tokenStream.peek()==Tokens.VIEWPORT_SYM)this._viewport();else if(!this._ruleset())break;tokenStream.mustMatch(Tokens.RBRACE),this._readWhitespace(),this.fire({type:\"endmedia\",media:mediaList,line:line,col:col})},_media_query_list:function(){var tokenStream=this._tokenStream,mediaList=[];for(this._readWhitespace(),(tokenStream.peek()==Tokens.IDENT||tokenStream.peek()==Tokens.LPAREN)&&mediaList.push(this._media_query());tokenStream.match(Tokens.COMMA);)this._readWhitespace(),mediaList.push(this._media_query());return mediaList},_media_query:function(){var tokenStream=this._tokenStream,type=null,ident=null,token=null,expressions=[];if(tokenStream.match(Tokens.IDENT)&&(ident=tokenStream.token().value.toLowerCase(),\"only\"!=ident&&\"not\"!=ident?(tokenStream.unget(),ident=null):token=tokenStream.token()),this._readWhitespace(),tokenStream.peek()==Tokens.IDENT?(type=this._media_type(),null===token&&(token=tokenStream.token())):tokenStream.peek()==Tokens.LPAREN&&(null===token&&(token=tokenStream.LT(1)),expressions.push(this._media_expression())),null===type&&0===expressions.length)return null;for(this._readWhitespace();tokenStream.match(Tokens.IDENT);)\"and\"!=tokenStream.token().value.toLowerCase()&&this._unexpectedToken(tokenStream.token()),this._readWhitespace(),expressions.push(this._media_expression());return new MediaQuery(ident,type,expressions,token.startLine,token.startCol)},_media_type:function(){return this._media_feature()},_media_expression:function(){var token,tokenStream=this._tokenStream,feature=null,expression=null;return tokenStream.mustMatch(Tokens.LPAREN),this._readWhitespace(),feature=this._media_feature(),this._readWhitespace(),tokenStream.match(Tokens.COLON)&&(this._readWhitespace(),token=tokenStream.LT(1),expression=this._expression()),tokenStream.mustMatch(Tokens.RPAREN),this._readWhitespace(),new MediaFeature(feature,expression?new SyntaxUnit(expression,token.startLine,token.startCol):null)},_media_feature:function(){var tokenStream=this._tokenStream;return tokenStream.mustMatch(Tokens.IDENT),SyntaxUnit.fromToken(tokenStream.token())},_page:function(){var line,col,tokenStream=this._tokenStream,identifier=null,pseudoPage=null;tokenStream.mustMatch(Tokens.PAGE_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),tokenStream.match(Tokens.IDENT)&&(identifier=tokenStream.token().value,\"auto\"===identifier.toLowerCase()&&this._unexpectedToken(tokenStream.token())),tokenStream.peek()==Tokens.COLON&&(pseudoPage=this._pseudo_page()),this._readWhitespace(),this.fire({type:\"startpage\",id:identifier,pseudo:pseudoPage,line:line,col:col}),this._readDeclarations(!0,!0),this.fire({type:\"endpage\",id:identifier,pseudo:pseudoPage,line:line,col:col})},_margin:function(){var line,col,tokenStream=this._tokenStream,marginSym=this._margin_sym();return marginSym?(line=tokenStream.token().startLine,col=tokenStream.token().startCol,this.fire({type:\"startpagemargin\",margin:marginSym,line:line,col:col}),this._readDeclarations(!0),this.fire({type:\"endpagemargin\",margin:marginSym,line:line,col:col}),!0):!1},_margin_sym:function(){var tokenStream=this._tokenStream;return tokenStream.match([Tokens.TOPLEFTCORNER_SYM,Tokens.TOPLEFT_SYM,Tokens.TOPCENTER_SYM,Tokens.TOPRIGHT_SYM,Tokens.TOPRIGHTCORNER_SYM,Tokens.BOTTOMLEFTCORNER_SYM,Tokens.BOTTOMLEFT_SYM,Tokens.BOTTOMCENTER_SYM,Tokens.BOTTOMRIGHT_SYM,Tokens.BOTTOMRIGHTCORNER_SYM,Tokens.LEFTTOP_SYM,Tokens.LEFTMIDDLE_SYM,Tokens.LEFTBOTTOM_SYM,Tokens.RIGHTTOP_SYM,Tokens.RIGHTMIDDLE_SYM,Tokens.RIGHTBOTTOM_SYM])?SyntaxUnit.fromToken(tokenStream.token()):null},_pseudo_page:function(){var tokenStream=this._tokenStream;return tokenStream.mustMatch(Tokens.COLON),tokenStream.mustMatch(Tokens.IDENT),tokenStream.token().value},_font_face:function(){var line,col,tokenStream=this._tokenStream;tokenStream.mustMatch(Tokens.FONT_FACE_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),this.fire({type:\"startfontface\",line:line,col:col}),this._readDeclarations(!0),this.fire({type:\"endfontface\",line:line,col:col})},_viewport:function(){var line,col,tokenStream=this._tokenStream;tokenStream.mustMatch(Tokens.VIEWPORT_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),this.fire({type:\"startviewport\",line:line,col:col}),this._readDeclarations(!0),this.fire({type:\"endviewport\",line:line,col:col})},_operator:function(inFunction){var tokenStream=this._tokenStream,token=null;return(tokenStream.match([Tokens.SLASH,Tokens.COMMA])||inFunction&&tokenStream.match([Tokens.PLUS,Tokens.STAR,Tokens.MINUS]))&&(token=tokenStream.token(),this._readWhitespace()),token?PropertyValuePart.fromToken(token):null},_combinator:function(){var token,tokenStream=this._tokenStream,value=null;return tokenStream.match([Tokens.PLUS,Tokens.GREATER,Tokens.TILDE])&&(token=tokenStream.token(),value=new Combinator(token.value,token.startLine,token.startCol),this._readWhitespace()),value},_unary_operator:function(){var tokenStream=this._tokenStream;return tokenStream.match([Tokens.MINUS,Tokens.PLUS])?tokenStream.token().value:null},_property:function(){var tokenValue,token,line,col,tokenStream=this._tokenStream,value=null,hack=null;return tokenStream.peek()==Tokens.STAR&&this.options.starHack&&(tokenStream.get(),token=tokenStream.token(),hack=token.value,line=token.startLine,col=token.startCol),tokenStream.match(Tokens.IDENT)&&(token=tokenStream.token(),tokenValue=token.value,\"_\"==tokenValue.charAt(0)&&this.options.underscoreHack&&(hack=\"_\",tokenValue=tokenValue.substring(1)),value=new PropertyName(tokenValue,hack,line||token.startLine,col||token.startCol),this._readWhitespace()),value},_ruleset:function(){var tt,selectors,tokenStream=this._tokenStream;try{selectors=this._selectors_group()}catch(ex){if(!(ex instanceof SyntaxError)||this.options.strict)throw ex;if(this.fire({type:\"error\",error:ex,message:ex.message,line:ex.line,col:ex.col}),tt=tokenStream.advance([Tokens.RBRACE]),tt!=Tokens.RBRACE)throw ex;return!0}return selectors&&(this.fire({type:\"startrule\",selectors:selectors,line:selectors[0].line,col:selectors[0].col}),this._readDeclarations(!0),this.fire({type:\"endrule\",selectors:selectors,line:selectors[0].line,col:selectors[0].col})),selectors},_selectors_group:function(){var selector,tokenStream=this._tokenStream,selectors=[];if(selector=this._selector(),null!==selector)for(selectors.push(selector);tokenStream.match(Tokens.COMMA);)this._readWhitespace(),selector=this._selector(),null!==selector?selectors.push(selector):this._unexpectedToken(tokenStream.LT(1));return selectors.length?selectors:null},_selector:function(){var tokenStream=this._tokenStream,selector=[],nextSelector=null,combinator=null,ws=null;if(nextSelector=this._simple_selector_sequence(),null===nextSelector)return null;for(selector.push(nextSelector);;)if(combinator=this._combinator(),null!==combinator)selector.push(combinator),nextSelector=this._simple_selector_sequence(),null===nextSelector?this._unexpectedToken(tokenStream.LT(1)):selector.push(nextSelector);else{if(!this._readWhitespace())break;ws=new Combinator(tokenStream.token().value,tokenStream.token().startLine,tokenStream.token().startCol),combinator=this._combinator(),nextSelector=this._simple_selector_sequence(),null===nextSelector?null!==combinator&&this._unexpectedToken(tokenStream.LT(1)):(null!==combinator?selector.push(combinator):selector.push(ws),selector.push(nextSelector))}return new Selector(selector,selector[0].line,selector[0].col)},_simple_selector_sequence:function(){var line,col,tokenStream=this._tokenStream,elementName=null,modifiers=[],selectorText=\"\",components=[function(){return tokenStream.match(Tokens.HASH)?new SelectorSubPart(tokenStream.token().value,\"id\",tokenStream.token().startLine,tokenStream.token().startCol):null},this._class,this._attrib,this._pseudo,this._negation],i=0,len=components.length,component=null;for(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol,elementName=this._type_selector(),elementName||(elementName=this._universal()),null!==elementName&&(selectorText+=elementName);;){if(tokenStream.peek()===Tokens.S)break;for(;len>i&&null===component;)component=components[i++].call(this);if(null===component){if(\"\"===selectorText)return null;break}i=0,modifiers.push(component),selectorText+=\"\"+component,component=null}return\"\"!==selectorText?new SelectorPart(elementName,modifiers,selectorText,line,col):null},_type_selector:function(){var tokenStream=this._tokenStream,ns=this._namespace_prefix(),elementName=this._element_name();return elementName?(ns&&(elementName.text=ns+elementName.text,elementName.col-=ns.length),elementName):(ns&&(tokenStream.unget(),ns.length>1&&tokenStream.unget()),null)},_class:function(){var token,tokenStream=this._tokenStream;return tokenStream.match(Tokens.DOT)?(tokenStream.mustMatch(Tokens.IDENT),token=tokenStream.token(),new SelectorSubPart(\".\"+token.value,\"class\",token.startLine,token.startCol-1)):null},_element_name:function(){var token,tokenStream=this._tokenStream;return tokenStream.match(Tokens.IDENT)?(token=tokenStream.token(),new SelectorSubPart(token.value,\"elementName\",token.startLine,token.startCol)):null},_namespace_prefix:function(){var tokenStream=this._tokenStream,value=\"\";return(tokenStream.LA(1)===Tokens.PIPE||tokenStream.LA(2)===Tokens.PIPE)&&(tokenStream.match([Tokens.IDENT,Tokens.STAR])&&(value+=tokenStream.token().value),tokenStream.mustMatch(Tokens.PIPE),value+=\"|\"),value.length?value:null},_universal:function(){var ns,tokenStream=this._tokenStream,value=\"\";return ns=this._namespace_prefix(),ns&&(value+=ns),tokenStream.match(Tokens.STAR)&&(value+=\"*\"),value.length?value:null},_attrib:function(){var ns,token,tokenStream=this._tokenStream,value=null;return tokenStream.match(Tokens.LBRACKET)?(token=tokenStream.token(),value=token.value,value+=this._readWhitespace(),ns=this._namespace_prefix(),ns&&(value+=ns),tokenStream.mustMatch(Tokens.IDENT),value+=tokenStream.token().value,value+=this._readWhitespace(),tokenStream.match([Tokens.PREFIXMATCH,Tokens.SUFFIXMATCH,Tokens.SUBSTRINGMATCH,Tokens.EQUALS,Tokens.INCLUDES,Tokens.DASHMATCH])&&(value+=tokenStream.token().value,value+=this._readWhitespace(),tokenStream.mustMatch([Tokens.IDENT,Tokens.STRING]),value+=tokenStream.token().value,value+=this._readWhitespace()),tokenStream.mustMatch(Tokens.RBRACKET),new SelectorSubPart(value+\"]\",\"attribute\",token.startLine,token.startCol)):null},_pseudo:function(){var line,col,tokenStream=this._tokenStream,pseudo=null,colons=\":\";return tokenStream.match(Tokens.COLON)&&(tokenStream.match(Tokens.COLON)&&(colons+=\":\"),tokenStream.match(Tokens.IDENT)?(pseudo=tokenStream.token().value,line=tokenStream.token().startLine,col=tokenStream.token().startCol-colons.length):tokenStream.peek()==Tokens.FUNCTION&&(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol-colons.length,pseudo=this._functional_pseudo()),pseudo&&(pseudo=new SelectorSubPart(colons+pseudo,\"pseudo\",line,col))),pseudo},_functional_pseudo:function(){var tokenStream=this._tokenStream,value=null;return tokenStream.match(Tokens.FUNCTION)&&(value=tokenStream.token().value,value+=this._readWhitespace(),value+=this._expression(),tokenStream.mustMatch(Tokens.RPAREN),value+=\")\"),value},_expression:function(){for(var tokenStream=this._tokenStream,value=\"\";tokenStream.match([Tokens.PLUS,Tokens.MINUS,Tokens.DIMENSION,Tokens.NUMBER,Tokens.STRING,Tokens.IDENT,Tokens.LENGTH,Tokens.FREQ,Tokens.ANGLE,Tokens.TIME,Tokens.RESOLUTION,Tokens.SLASH]);)value+=tokenStream.token().value,value+=this._readWhitespace();return value.length?value:null},_negation:function(){var line,col,arg,tokenStream=this._tokenStream,value=\"\",subpart=null;return tokenStream.match(Tokens.NOT)&&(value=tokenStream.token().value,line=tokenStream.token().startLine,col=tokenStream.token().startCol,value+=this._readWhitespace(),arg=this._negation_arg(),value+=arg,value+=this._readWhitespace(),tokenStream.match(Tokens.RPAREN),value+=tokenStream.token().value,subpart=new SelectorSubPart(value,\"not\",line,col),subpart.args.push(arg)),subpart},_negation_arg:function(){var line,col,part,tokenStream=this._tokenStream,args=[this._type_selector,this._universal,function(){return tokenStream.match(Tokens.HASH)?new SelectorSubPart(tokenStream.token().value,\"id\",tokenStream.token().startLine,tokenStream.token().startCol):null},this._class,this._attrib,this._pseudo],arg=null,i=0,len=args.length;for(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol;len>i&&null===arg;)arg=args[i].call(this),i++;return null===arg&&this._unexpectedToken(tokenStream.LT(1)),part=\"elementName\"==arg.type?new SelectorPart(arg,[],\"\"+arg,line,col):new SelectorPart(null,[arg],\"\"+arg,line,col)},_declaration:function(){var tokenStream=this._tokenStream,property=null,expr=null,prio=null,invalid=null,propertyName=\"\";if(property=this._property(),null!==property){tokenStream.mustMatch(Tokens.COLON),this._readWhitespace(),expr=this._expr(),expr&&0!==expr.length||this._unexpectedToken(tokenStream.LT(1)),prio=this._prio(),propertyName=\"\"+property,(this.options.starHack&&\"*\"==property.hack||this.options.underscoreHack&&\"_\"==property.hack)&&(propertyName=property.text);try{this._validateProperty(propertyName,expr)}catch(ex){invalid=ex}return this.fire({type:\"property\",property:property,value:expr,important:prio,line:property.line,col:property.col,invalid:invalid}),!0}return!1},_prio:function(){var tokenStream=this._tokenStream,result=tokenStream.match(Tokens.IMPORTANT_SYM);return this._readWhitespace(),result},_expr:function(inFunction){var values=(this._tokenStream,[]),value=null,operator=null;if(value=this._term(inFunction),null!==value)for(values.push(value);;){if(operator=this._operator(inFunction),operator&&values.push(operator),value=this._term(inFunction),null===value)break;\nvalues.push(value)}return values.length>0?new PropertyValue(values,values[0].line,values[0].col):null},_term:function(inFunction){var token,line,col,tokenStream=this._tokenStream,unary=null,value=null,endChar=null;return unary=this._unary_operator(),null!==unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol),tokenStream.peek()==Tokens.IE_FUNCTION&&this.options.ieFilters?(value=this._ie_function(),null===unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol)):inFunction&&tokenStream.match([Tokens.LPAREN,Tokens.LBRACE,Tokens.LBRACKET])?(token=tokenStream.token(),endChar=token.endChar,value=token.value+this._expr(inFunction).text,null===unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol),tokenStream.mustMatch(Tokens.type(endChar)),value+=endChar,this._readWhitespace()):tokenStream.match([Tokens.NUMBER,Tokens.PERCENTAGE,Tokens.LENGTH,Tokens.ANGLE,Tokens.TIME,Tokens.FREQ,Tokens.STRING,Tokens.IDENT,Tokens.URI,Tokens.UNICODE_RANGE])?(value=tokenStream.token().value,null===unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol),this._readWhitespace()):(token=this._hexcolor(),null===token?(null===unary&&(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol),null===value&&(value=tokenStream.LA(3)==Tokens.EQUALS&&this.options.ieFilters?this._ie_function():this._function())):(value=token.value,null===unary&&(line=token.startLine,col=token.startCol))),null!==value?new PropertyValuePart(null!==unary?unary+value:value,line,col):null},_function:function(){var lt,tokenStream=this._tokenStream,functionText=null,expr=null;if(tokenStream.match(Tokens.FUNCTION)){if(functionText=tokenStream.token().value,this._readWhitespace(),expr=this._expr(!0),functionText+=expr,this.options.ieFilters&&tokenStream.peek()==Tokens.EQUALS)do for(this._readWhitespace()&&(functionText+=tokenStream.token().value),tokenStream.LA(0)==Tokens.COMMA&&(functionText+=tokenStream.token().value),tokenStream.match(Tokens.IDENT),functionText+=tokenStream.token().value,tokenStream.match(Tokens.EQUALS),functionText+=tokenStream.token().value,lt=tokenStream.peek();lt!=Tokens.COMMA&&lt!=Tokens.S&&lt!=Tokens.RPAREN;)tokenStream.get(),functionText+=tokenStream.token().value,lt=tokenStream.peek();while(tokenStream.match([Tokens.COMMA,Tokens.S]));tokenStream.match(Tokens.RPAREN),functionText+=\")\",this._readWhitespace()}return functionText},_ie_function:function(){var lt,tokenStream=this._tokenStream,functionText=null;if(tokenStream.match([Tokens.IE_FUNCTION,Tokens.FUNCTION])){functionText=tokenStream.token().value;do for(this._readWhitespace()&&(functionText+=tokenStream.token().value),tokenStream.LA(0)==Tokens.COMMA&&(functionText+=tokenStream.token().value),tokenStream.match(Tokens.IDENT),functionText+=tokenStream.token().value,tokenStream.match(Tokens.EQUALS),functionText+=tokenStream.token().value,lt=tokenStream.peek();lt!=Tokens.COMMA&&lt!=Tokens.S&&lt!=Tokens.RPAREN;)tokenStream.get(),functionText+=tokenStream.token().value,lt=tokenStream.peek();while(tokenStream.match([Tokens.COMMA,Tokens.S]));tokenStream.match(Tokens.RPAREN),functionText+=\")\",this._readWhitespace()}return functionText},_hexcolor:function(){var color,tokenStream=this._tokenStream,token=null;if(tokenStream.match(Tokens.HASH)){if(token=tokenStream.token(),color=token.value,!/#[a-f0-9]{3,6}/i.test(color))throw new SyntaxError(\"Expected a hex color but found '\"+color+\"' at line \"+token.startLine+\", col \"+token.startCol+\".\",token.startLine,token.startCol);this._readWhitespace()}return token},_keyframes:function(){var token,tt,name,tokenStream=this._tokenStream,prefix=\"\";for(tokenStream.mustMatch(Tokens.KEYFRAMES_SYM),token=tokenStream.token(),/^@\\-([^\\-]+)\\-/.test(token.value)&&(prefix=RegExp.$1),this._readWhitespace(),name=this._keyframe_name(),this._readWhitespace(),tokenStream.mustMatch(Tokens.LBRACE),this.fire({type:\"startkeyframes\",name:name,prefix:prefix,line:token.startLine,col:token.startCol}),this._readWhitespace(),tt=tokenStream.peek();tt==Tokens.IDENT||tt==Tokens.PERCENTAGE;)this._keyframe_rule(),this._readWhitespace(),tt=tokenStream.peek();this.fire({type:\"endkeyframes\",name:name,prefix:prefix,line:token.startLine,col:token.startCol}),this._readWhitespace(),tokenStream.mustMatch(Tokens.RBRACE)},_keyframe_name:function(){var tokenStream=this._tokenStream;return tokenStream.mustMatch([Tokens.IDENT,Tokens.STRING]),SyntaxUnit.fromToken(tokenStream.token())},_keyframe_rule:function(){var keyList=(this._tokenStream,this._key_list());this.fire({type:\"startkeyframerule\",keys:keyList,line:keyList[0].line,col:keyList[0].col}),this._readDeclarations(!0),this.fire({type:\"endkeyframerule\",keys:keyList,line:keyList[0].line,col:keyList[0].col})},_key_list:function(){var tokenStream=this._tokenStream,keyList=[];for(keyList.push(this._key()),this._readWhitespace();tokenStream.match(Tokens.COMMA);)this._readWhitespace(),keyList.push(this._key()),this._readWhitespace();return keyList},_key:function(){var token,tokenStream=this._tokenStream;if(tokenStream.match(Tokens.PERCENTAGE))return SyntaxUnit.fromToken(tokenStream.token());if(tokenStream.match(Tokens.IDENT)){if(token=tokenStream.token(),/from|to/i.test(token.value))return SyntaxUnit.fromToken(token);tokenStream.unget()}this._unexpectedToken(tokenStream.LT(1))},_skipCruft:function(){for(;this._tokenStream.match([Tokens.S,Tokens.CDO,Tokens.CDC]););},_readDeclarations:function(checkStart,readMargins){var tt,tokenStream=this._tokenStream;this._readWhitespace(),checkStart&&tokenStream.mustMatch(Tokens.LBRACE),this._readWhitespace();try{for(;;){if(tokenStream.match(Tokens.SEMICOLON)||readMargins&&this._margin());else{if(!this._declaration())break;if(!tokenStream.match(Tokens.SEMICOLON))break}this._readWhitespace()}tokenStream.mustMatch(Tokens.RBRACE),this._readWhitespace()}catch(ex){if(!(ex instanceof SyntaxError)||this.options.strict)throw ex;if(this.fire({type:\"error\",error:ex,message:ex.message,line:ex.line,col:ex.col}),tt=tokenStream.advance([Tokens.SEMICOLON,Tokens.RBRACE]),tt==Tokens.SEMICOLON)this._readDeclarations(!1,readMargins);else if(tt!=Tokens.RBRACE)throw ex}},_readWhitespace:function(){for(var tokenStream=this._tokenStream,ws=\"\";tokenStream.match(Tokens.S);)ws+=tokenStream.token().value;return ws},_unexpectedToken:function(token){throw new SyntaxError(\"Unexpected token '\"+token.value+\"' at line \"+token.startLine+\", col \"+token.startCol+\".\",token.startLine,token.startCol)},_verifyEnd:function(){this._tokenStream.LA(1)!=Tokens.EOF&&this._unexpectedToken(this._tokenStream.LT(1))},_validateProperty:function(property,value){Validation.validate(property,value)},parse:function(input){this._tokenStream=new TokenStream(input,Tokens),this._stylesheet()},parseStyleSheet:function(input){return this.parse(input)},parseMediaQuery:function(input){this._tokenStream=new TokenStream(input,Tokens);var result=this._media_query();return this._verifyEnd(),result},parsePropertyValue:function(input){this._tokenStream=new TokenStream(input,Tokens),this._readWhitespace();var result=this._expr();return this._readWhitespace(),this._verifyEnd(),result},parseRule:function(input){this._tokenStream=new TokenStream(input,Tokens),this._readWhitespace();var result=this._ruleset();return this._readWhitespace(),this._verifyEnd(),result},parseSelector:function(input){this._tokenStream=new TokenStream(input,Tokens),this._readWhitespace();var result=this._selector();return this._readWhitespace(),this._verifyEnd(),result},parseStyleAttribute:function(input){input+=\"}\",this._tokenStream=new TokenStream(input,Tokens),this._readDeclarations()}};for(prop in additions)additions.hasOwnProperty(prop)&&(proto[prop]=additions[prop]);return proto}();var Properties={\"align-items\":\"flex-start | flex-end | center | baseline | stretch\",\"align-content\":\"flex-start | flex-end | center | space-between | space-around | stretch\",\"align-self\":\"auto | flex-start | flex-end | center | baseline | stretch\",\"-webkit-align-items\":\"flex-start | flex-end | center | baseline | stretch\",\"-webkit-align-content\":\"flex-start | flex-end | center | space-between | space-around | stretch\",\"-webkit-align-self\":\"auto | flex-start | flex-end | center | baseline | stretch\",\"alignment-adjust\":\"auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | <percentage> | <length>\",\"alignment-baseline\":\"baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical\",animation:1,\"animation-delay\":{multi:\"<time>\",comma:!0},\"animation-direction\":{multi:\"normal | reverse | alternate | alternate-reverse\",comma:!0},\"animation-duration\":{multi:\"<time>\",comma:!0},\"animation-fill-mode\":{multi:\"none | forwards | backwards | both\",comma:!0},\"animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"animation-name\":{multi:\"none | <ident>\",comma:!0},\"animation-play-state\":{multi:\"running | paused\",comma:!0},\"animation-timing-function\":1,\"-moz-animation-delay\":{multi:\"<time>\",comma:!0},\"-moz-animation-direction\":{multi:\"normal | reverse | alternate | alternate-reverse\",comma:!0},\"-moz-animation-duration\":{multi:\"<time>\",comma:!0},\"-moz-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-moz-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-moz-animation-play-state\":{multi:\"running | paused\",comma:!0},\"-ms-animation-delay\":{multi:\"<time>\",comma:!0},\"-ms-animation-direction\":{multi:\"normal | reverse | alternate | alternate-reverse\",comma:!0},\"-ms-animation-duration\":{multi:\"<time>\",comma:!0},\"-ms-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-ms-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-ms-animation-play-state\":{multi:\"running | paused\",comma:!0},\"-webkit-animation-delay\":{multi:\"<time>\",comma:!0},\"-webkit-animation-direction\":{multi:\"normal | reverse | alternate | alternate-reverse\",comma:!0},\"-webkit-animation-duration\":{multi:\"<time>\",comma:!0},\"-webkit-animation-fill-mode\":{multi:\"none | forwards | backwards | both\",comma:!0},\"-webkit-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-webkit-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-webkit-animation-play-state\":{multi:\"running | paused\",comma:!0},\"-o-animation-delay\":{multi:\"<time>\",comma:!0},\"-o-animation-direction\":{multi:\"normal | reverse | alternate | alternate-reverse\",comma:!0},\"-o-animation-duration\":{multi:\"<time>\",comma:!0},\"-o-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-o-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-o-animation-play-state\":{multi:\"running | paused\",comma:!0},appearance:\"icon | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal | none | inherit\",azimuth:function(expression){var part,simple=\"<angle> | leftwards | rightwards | inherit\",direction=\"left-side | far-left | left | center-left | center | center-right | right | far-right | right-side\",behind=!1,valid=!1;if(ValidationTypes.isAny(expression,simple)||(ValidationTypes.isAny(expression,\"behind\")&&(behind=!0,valid=!0),ValidationTypes.isAny(expression,direction)&&(valid=!0,behind||ValidationTypes.isAny(expression,\"behind\"))),expression.hasNext())throw part=expression.next(),valid?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected (<'azimuth'>) but found '\"+part+\"'.\",part.line,part.col)},\"backface-visibility\":\"visible | hidden\",background:1,\"background-attachment\":{multi:\"<attachment>\",comma:!0},\"background-clip\":{multi:\"<box>\",comma:!0},\"background-color\":\"<color> | inherit\",\"background-image\":{multi:\"<bg-image>\",comma:!0},\"background-origin\":{multi:\"<box>\",comma:!0},\"background-position\":{multi:\"<bg-position>\",comma:!0},\"background-repeat\":{multi:\"<repeat-style>\"},\"background-size\":{multi:\"<bg-size>\",comma:!0},\"baseline-shift\":\"baseline | sub | super | <percentage> | <length>\",behavior:1,binding:1,bleed:\"<length>\",\"bookmark-label\":\"<content> | <attr> | <string>\",\"bookmark-level\":\"none | <integer>\",\"bookmark-state\":\"open | closed\",\"bookmark-target\":\"none | <uri> | <attr>\",border:\"<border-width> || <border-style> || <color>\",\"border-bottom\":\"<border-width> || <border-style> || <color>\",\"border-bottom-color\":\"<color> | inherit\",\"border-bottom-left-radius\":\"<x-one-radius>\",\"border-bottom-right-radius\":\"<x-one-radius>\",\"border-bottom-style\":\"<border-style>\",\"border-bottom-width\":\"<border-width>\",\"border-collapse\":\"collapse | separate | inherit\",\"border-color\":{multi:\"<color> | inherit\",max:4},\"border-image\":1,\"border-image-outset\":{multi:\"<length> | <number>\",max:4},\"border-image-repeat\":{multi:\"stretch | repeat | round\",max:2},\"border-image-slice\":function(expression){var part,valid=!1,numeric=\"<number> | <percentage>\",fill=!1,count=0,max=4;for(ValidationTypes.isAny(expression,\"fill\")&&(fill=!0,valid=!0);expression.hasNext()&&max>count&&(valid=ValidationTypes.isAny(expression,numeric));)count++;if(fill?valid=!0:ValidationTypes.isAny(expression,\"fill\"),expression.hasNext())throw part=expression.next(),valid?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected ([<number> | <percentage>]{1,4} && fill?) but found '\"+part+\"'.\",part.line,part.col)},\"border-image-source\":\"<image> | none\",\"border-image-width\":{multi:\"<length> | <percentage> | <number> | auto\",max:4},\"border-left\":\"<border-width> || <border-style> || <color>\",\"border-left-color\":\"<color> | inherit\",\"border-left-style\":\"<border-style>\",\"border-left-width\":\"<border-width>\",\"border-radius\":function(expression){for(var part,valid=!1,simple=\"<length> | <percentage> | inherit\",slash=!1,count=0,max=8;expression.hasNext()&&max>count;){if(valid=ValidationTypes.isAny(expression,simple),!valid){if(!(\"/\"==expression.peek()&&count>0)||slash)break;slash=!0,max=count+5,expression.next()}count++}if(expression.hasNext())throw part=expression.next(),valid?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected (<'border-radius'>) but found '\"+part+\"'.\",part.line,part.col)},\"border-right\":\"<border-width> || <border-style> || <color>\",\"border-right-color\":\"<color> | inherit\",\"border-right-style\":\"<border-style>\",\"border-right-width\":\"<border-width>\",\"border-spacing\":{multi:\"<length> | inherit\",max:2},\"border-style\":{multi:\"<border-style>\",max:4},\"border-top\":\"<border-width> || <border-style> || <color>\",\"border-top-color\":\"<color> | inherit\",\"border-top-left-radius\":\"<x-one-radius>\",\"border-top-right-radius\":\"<x-one-radius>\",\"border-top-style\":\"<border-style>\",\"border-top-width\":\"<border-width>\",\"border-width\":{multi:\"<border-width>\",max:4},bottom:\"<margin-width> | inherit\",\"-moz-box-align\":\"start | end | center | baseline | stretch\",\"-moz-box-decoration-break\":\"slice |clone\",\"-moz-box-direction\":\"normal | reverse | inherit\",\"-moz-box-flex\":\"<number>\",\"-moz-box-flex-group\":\"<integer>\",\"-moz-box-lines\":\"single | multiple\",\"-moz-box-ordinal-group\":\"<integer>\",\"-moz-box-orient\":\"horizontal | vertical | inline-axis | block-axis | inherit\",\"-moz-box-pack\":\"start | end | center | justify\",\"-webkit-box-align\":\"start | end | center | baseline | stretch\",\"-webkit-box-decoration-break\":\"slice |clone\",\"-webkit-box-direction\":\"normal | reverse | inherit\",\"-webkit-box-flex\":\"<number>\",\"-webkit-box-flex-group\":\"<integer>\",\"-webkit-box-lines\":\"single | multiple\",\"-webkit-box-ordinal-group\":\"<integer>\",\"-webkit-box-orient\":\"horizontal | vertical | inline-axis | block-axis | inherit\",\"-webkit-box-pack\":\"start | end | center | justify\",\"box-shadow\":function(expression){var part;if(ValidationTypes.isAny(expression,\"none\")){if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)}else Validation.multiProperty(\"<shadow>\",expression,!0,1/0)},\"box-sizing\":\"content-box | border-box | inherit\",\"break-after\":\"auto | always | avoid | left | right | page | column | avoid-page | avoid-column\",\"break-before\":\"auto | always | avoid | left | right | page | column | avoid-page | avoid-column\",\"break-inside\":\"auto | avoid | avoid-page | avoid-column\",\"caption-side\":\"top | bottom | inherit\",clear:\"none | right | left | both | inherit\",clip:1,color:\"<color> | inherit\",\"color-profile\":1,\"column-count\":\"<integer> | auto\",\"column-fill\":\"auto | balance\",\"column-gap\":\"<length> | normal\",\"column-rule\":\"<border-width> || <border-style> || <color>\",\"column-rule-color\":\"<color>\",\"column-rule-style\":\"<border-style>\",\"column-rule-width\":\"<border-width>\",\"column-span\":\"none | all\",\"column-width\":\"<length> | auto\",columns:1,content:1,\"counter-increment\":1,\"counter-reset\":1,crop:\"<shape> | auto\",cue:\"cue-after | cue-before | inherit\",\"cue-after\":1,\"cue-before\":1,cursor:1,direction:\"ltr | rtl | inherit\",display:\"inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | grid | inline-grid | none | inherit | -moz-box | -moz-inline-block | -moz-inline-box | -moz-inline-grid | -moz-inline-stack | -moz-inline-table | -moz-grid | -moz-grid-group | -moz-grid-line | -moz-groupbox | -moz-deck | -moz-popup | -moz-stack | -moz-marker | -webkit-box | -webkit-inline-box | -ms-flexbox | -ms-inline-flexbox | flex | -webkit-flex | inline-flex | -webkit-inline-flex\",\"dominant-baseline\":1,\"drop-initial-after-adjust\":\"central | middle | after-edge | text-after-edge | ideographic | alphabetic | mathematical | <percentage> | <length>\",\"drop-initial-after-align\":\"baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical\",\"drop-initial-before-adjust\":\"before-edge | text-before-edge | central | middle | hanging | mathematical | <percentage> | <length>\",\"drop-initial-before-align\":\"caps-height | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical\",\"drop-initial-size\":\"auto | line | <length> | <percentage>\",\"drop-initial-value\":\"initial | <integer>\",elevation:\"<angle> | below | level | above | higher | lower | inherit\",\"empty-cells\":\"show | hide | inherit\",filter:1,fit:\"fill | hidden | meet | slice\",\"fit-position\":1,flex:\"<flex>\",\"flex-basis\":\"<width>\",\"flex-direction\":\"row | row-reverse | column | column-reverse\",\"flex-flow\":\"<flex-direction> || <flex-wrap>\",\"flex-grow\":\"<number>\",\"flex-shrink\":\"<number>\",\"flex-wrap\":\"nowrap | wrap | wrap-reverse\",\"-webkit-flex\":\"<flex>\",\"-webkit-flex-basis\":\"<width>\",\"-webkit-flex-direction\":\"row | row-reverse | column | column-reverse\",\"-webkit-flex-flow\":\"<flex-direction> || <flex-wrap>\",\"-webkit-flex-grow\":\"<number>\",\"-webkit-flex-shrink\":\"<number>\",\"-webkit-flex-wrap\":\"nowrap | wrap | wrap-reverse\",\"-ms-flex\":\"<flex>\",\"-ms-flex-align\":\"start | end | center | stretch | baseline\",\"-ms-flex-direction\":\"row | row-reverse | column | column-reverse | inherit\",\"-ms-flex-order\":\"<number>\",\"-ms-flex-pack\":\"start | end | center | justify\",\"-ms-flex-wrap\":\"nowrap | wrap | wrap-reverse\",\"float\":\"left | right | none | inherit\",\"float-offset\":1,font:1,\"font-family\":1,\"font-size\":\"<absolute-size> | <relative-size> | <length> | <percentage> | inherit\",\"font-size-adjust\":\"<number> | none | inherit\",\"font-stretch\":\"normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | inherit\",\"font-style\":\"normal | italic | oblique | inherit\",\"font-variant\":\"normal | small-caps | inherit\",\"font-weight\":\"normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit\",\"grid-cell-stacking\":\"columns | rows | layer\",\"grid-column\":1,\"grid-columns\":1,\"grid-column-align\":\"start | end | center | stretch\",\"grid-column-sizing\":1,\"grid-column-span\":\"<integer>\",\"grid-flow\":\"none | rows | columns\",\"grid-layer\":\"<integer>\",\"grid-row\":1,\"grid-rows\":1,\"grid-row-align\":\"start | end | center | stretch\",\"grid-row-span\":\"<integer>\",\"grid-row-sizing\":1,\"hanging-punctuation\":1,height:\"<margin-width> | <content-sizing> | inherit\",\"hyphenate-after\":\"<integer> | auto\",\"hyphenate-before\":\"<integer> | auto\",\"hyphenate-character\":\"<string> | auto\",\"hyphenate-lines\":\"no-limit | <integer>\",\"hyphenate-resource\":1,hyphens:\"none | manual | auto\",icon:1,\"image-orientation\":\"angle | auto\",\"image-rendering\":1,\"image-resolution\":1,\"inline-box-align\":\"initial | last | <integer>\",\"justify-content\":\"flex-start | flex-end | center | space-between | space-around\",\"-webkit-justify-content\":\"flex-start | flex-end | center | space-between | space-around\",left:\"<margin-width> | inherit\",\"letter-spacing\":\"<length> | normal | inherit\",\"line-height\":\"<number> | <length> | <percentage> | normal | inherit\",\"line-break\":\"auto | loose | normal | strict\",\"line-stacking\":1,\"line-stacking-ruby\":\"exclude-ruby | include-ruby\",\"line-stacking-shift\":\"consider-shifts | disregard-shifts\",\"line-stacking-strategy\":\"inline-line-height | block-line-height | max-height | grid-height\",\"list-style\":1,\"list-style-image\":\"<uri> | none | inherit\",\"list-style-position\":\"inside | outside | inherit\",\"list-style-type\":\"disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit\",margin:{multi:\"<margin-width> | inherit\",max:4},\"margin-bottom\":\"<margin-width> | inherit\",\"margin-left\":\"<margin-width> | inherit\",\"margin-right\":\"<margin-width> | inherit\",\"margin-top\":\"<margin-width> | inherit\",mark:1,\"mark-after\":1,\"mark-before\":1,marks:1,\"marquee-direction\":1,\"marquee-play-count\":1,\"marquee-speed\":1,\"marquee-style\":1,\"max-height\":\"<length> | <percentage> | <content-sizing> | none | inherit\",\"max-width\":\"<length> | <percentage> | <content-sizing> | none | inherit\",\"min-height\":\"<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats | inherit\",\"min-width\":\"<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats | inherit\",\"move-to\":1,\"nav-down\":1,\"nav-index\":1,\"nav-left\":1,\"nav-right\":1,\"nav-up\":1,opacity:\"<number> | inherit\",order:\"<integer>\",\"-webkit-order\":\"<integer>\",orphans:\"<integer> | inherit\",outline:1,\"outline-color\":\"<color> | invert | inherit\",\"outline-offset\":1,\"outline-style\":\"<border-style> | inherit\",\"outline-width\":\"<border-width> | inherit\",overflow:\"visible | hidden | scroll | auto | inherit\",\"overflow-style\":1,\"overflow-wrap\":\"normal | break-word\",\"overflow-x\":1,\"overflow-y\":1,padding:{multi:\"<padding-width> | inherit\",max:4},\"padding-bottom\":\"<padding-width> | inherit\",\"padding-left\":\"<padding-width> | inherit\",\"padding-right\":\"<padding-width> | inherit\",\"padding-top\":\"<padding-width> | inherit\",page:1,\"page-break-after\":\"auto | always | avoid | left | right | inherit\",\"page-break-before\":\"auto | always | avoid | left | right | inherit\",\"page-break-inside\":\"auto | avoid | inherit\",\"page-policy\":1,pause:1,\"pause-after\":1,\"pause-before\":1,perspective:1,\"perspective-origin\":1,phonemes:1,pitch:1,\"pitch-range\":1,\"play-during\":1,\"pointer-events\":\"auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit\",position:\"static | relative | absolute | fixed | inherit\",\"presentation-level\":1,\"punctuation-trim\":1,quotes:1,\"rendering-intent\":1,resize:1,rest:1,\"rest-after\":1,\"rest-before\":1,richness:1,right:\"<margin-width> | inherit\",rotation:1,\"rotation-point\":1,\"ruby-align\":1,\"ruby-overhang\":1,\"ruby-position\":1,\"ruby-span\":1,size:1,speak:\"normal | none | spell-out | inherit\",\"speak-header\":\"once | always | inherit\",\"speak-numeral\":\"digits | continuous | inherit\",\"speak-punctuation\":\"code | none | inherit\",\"speech-rate\":1,src:1,stress:1,\"string-set\":1,\"table-layout\":\"auto | fixed | inherit\",\"tab-size\":\"<integer> | <length>\",target:1,\"target-name\":1,\"target-new\":1,\"target-position\":1,\"text-align\":\"left | right | center | justify | inherit\",\"text-align-last\":1,\"text-decoration\":1,\"text-emphasis\":1,\"text-height\":1,\"text-indent\":\"<length> | <percentage> | inherit\",\"text-justify\":\"auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida\",\"text-outline\":1,\"text-overflow\":1,\"text-rendering\":\"auto | optimizeSpeed | optimizeLegibility | geometricPrecision | inherit\",\"text-shadow\":1,\"text-transform\":\"capitalize | uppercase | lowercase | none | inherit\",\"text-wrap\":\"normal | none | avoid\",top:\"<margin-width> | inherit\",\"-ms-touch-action\":\"auto | none | pan-x | pan-y\",\"touch-action\":\"auto | none | pan-x | pan-y\",transform:1,\"transform-origin\":1,\"transform-style\":1,transition:1,\"transition-delay\":1,\"transition-duration\":1,\"transition-property\":1,\"transition-timing-function\":1,\"unicode-bidi\":\"normal | embed | isolate | bidi-override | isolate-override | plaintext | inherit\",\"user-modify\":\"read-only | read-write | write-only | inherit\",\"user-select\":\"none | text | toggle | element | elements | all | inherit\",\"vertical-align\":\"auto | use-script | baseline | sub | super | top | text-top | central | middle | bottom | text-bottom | <percentage> | <length>\",visibility:\"visible | hidden | collapse | inherit\",\"voice-balance\":1,\"voice-duration\":1,\"voice-family\":1,\"voice-pitch\":1,\"voice-pitch-range\":1,\"voice-rate\":1,\"voice-stress\":1,\"voice-volume\":1,volume:1,\"white-space\":\"normal | pre | nowrap | pre-wrap | pre-line | inherit | -pre-wrap | -o-pre-wrap | -moz-pre-wrap | -hp-pre-wrap\",\"white-space-collapse\":1,widows:\"<integer> | inherit\",width:\"<length> | <percentage> | <content-sizing> | auto | inherit\",\"word-break\":\"normal | keep-all | break-all\",\"word-spacing\":\"<length> | normal | inherit\",\"word-wrap\":\"normal | break-word\",\"writing-mode\":\"horizontal-tb | vertical-rl | vertical-lr | lr-tb | rl-tb | tb-rl | bt-rl | tb-lr | bt-lr | lr-bt | rl-bt | lr | rl | tb | inherit\",\"z-index\":\"<integer> | auto | inherit\",zoom:\"<number> | <percentage> | normal\"};PropertyName.prototype=new SyntaxUnit,PropertyName.prototype.constructor=PropertyName,PropertyName.prototype.toString=function(){return(this.hack?this.hack:\"\")+this.text},PropertyValue.prototype=new SyntaxUnit,PropertyValue.prototype.constructor=PropertyValue,PropertyValueIterator.prototype.count=function(){return this._parts.length},PropertyValueIterator.prototype.isFirst=function(){return 0===this._i},PropertyValueIterator.prototype.hasNext=function(){return this._i<this._parts.length},PropertyValueIterator.prototype.mark=function(){this._marks.push(this._i)},PropertyValueIterator.prototype.peek=function(count){return this.hasNext()?this._parts[this._i+(count||0)]:null},PropertyValueIterator.prototype.next=function(){return this.hasNext()?this._parts[this._i++]:null},PropertyValueIterator.prototype.previous=function(){return this._i>0?this._parts[--this._i]:null},PropertyValueIterator.prototype.restore=function(){this._marks.length&&(this._i=this._marks.pop())},PropertyValuePart.prototype=new SyntaxUnit,PropertyValuePart.prototype.constructor=PropertyValuePart,PropertyValuePart.fromToken=function(token){return new PropertyValuePart(token.value,token.startLine,token.startCol)};var Pseudos={\":first-letter\":1,\":first-line\":1,\":before\":1,\":after\":1};Pseudos.ELEMENT=1,Pseudos.CLASS=2,Pseudos.isElement=function(pseudo){return 0===pseudo.indexOf(\"::\")||Pseudos[pseudo.toLowerCase()]==Pseudos.ELEMENT},Selector.prototype=new SyntaxUnit,Selector.prototype.constructor=Selector,SelectorPart.prototype=new SyntaxUnit,SelectorPart.prototype.constructor=SelectorPart,SelectorSubPart.prototype=new SyntaxUnit,SelectorSubPart.prototype.constructor=SelectorSubPart,Specificity.prototype={constructor:Specificity,compare:function(other){var i,len,comps=[\"a\",\"b\",\"c\",\"d\"];for(i=0,len=comps.length;len>i;i++){if(this[comps[i]]<other[comps[i]])return-1;if(this[comps[i]]>other[comps[i]])return 1}return 0},valueOf:function(){return 1e3*this.a+100*this.b+10*this.c+this.d},toString:function(){return this.a+\",\"+this.b+\",\"+this.c+\",\"+this.d}},Specificity.calculate=function(selector){function updateValues(part){var i,j,len,num,modifier,elementName=part.elementName?part.elementName.text:\"\";for(elementName&&\"*\"!=elementName.charAt(elementName.length-1)&&d++,i=0,len=part.modifiers.length;len>i;i++)switch(modifier=part.modifiers[i],modifier.type){case\"class\":case\"attribute\":c++;break;case\"id\":b++;break;case\"pseudo\":Pseudos.isElement(modifier.text)?d++:c++;break;case\"not\":for(j=0,num=modifier.args.length;num>j;j++)updateValues(modifier.args[j])}}var i,len,part,b=0,c=0,d=0;for(i=0,len=selector.parts.length;len>i;i++)part=selector.parts[i],part instanceof SelectorPart&&updateValues(part);return new Specificity(0,b,c,d)};var h=/^[0-9a-fA-F]$/,nonascii=/^[\\u0080-\\uFFFF]$/,nl=/\\n|\\r\\n|\\r|\\f/;TokenStream.prototype=mix(new TokenStreamBase,{_getToken:function(){var c,reader=this._reader,token=null,startLine=reader.getLine(),startCol=reader.getCol();for(c=reader.read();c;){switch(c){case\"/\":token=\"*\"==reader.peek()?this.commentToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\"|\":case\"~\":case\"^\":case\"$\":case\"*\":token=\"=\"==reader.peek()?this.comparisonToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case'\"':case\"'\":token=this.stringToken(c,startLine,startCol);break;case\"#\":token=isNameChar(reader.peek())?this.hashToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\".\":token=isDigit(reader.peek())?this.numberToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\"-\":token=\"-\"==reader.peek()?this.htmlCommentEndToken(c,startLine,startCol):isNameStart(reader.peek())?this.identOrFunctionToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\"!\":token=this.importantToken(c,startLine,startCol);break;case\"@\":token=this.atRuleToken(c,startLine,startCol);break;case\":\":token=this.notToken(c,startLine,startCol);break;case\"<\":token=this.htmlCommentStartToken(c,startLine,startCol);break;case\"U\":case\"u\":if(\"+\"==reader.peek()){token=this.unicodeRangeToken(c,startLine,startCol);break}default:token=isDigit(c)?this.numberToken(c,startLine,startCol):isWhitespace(c)?this.whitespaceToken(c,startLine,startCol):isIdentStart(c)?this.identOrFunctionToken(c,startLine,startCol):this.charToken(c,startLine,startCol)}break}return token||null!==c||(token=this.createToken(Tokens.EOF,null,startLine,startCol)),token},createToken:function(tt,value,startLine,startCol,options){var reader=this._reader;return options=options||{},{value:value,type:tt,channel:options.channel,endChar:options.endChar,hide:options.hide||!1,startLine:startLine,startCol:startCol,endLine:reader.getLine(),endCol:reader.getCol()}},atRuleToken:function(first,startLine,startCol){var ident,rule=first,reader=this._reader,tt=Tokens.CHAR;return reader.mark(),ident=this.readName(),rule=first+ident,tt=Tokens.type(rule.toLowerCase()),(tt==Tokens.CHAR||tt==Tokens.UNKNOWN)&&(rule.length>1?tt=Tokens.UNKNOWN_SYM:(tt=Tokens.CHAR,rule=first,reader.reset())),this.createToken(tt,rule,startLine,startCol)},charToken:function(c,startLine,startCol){var tt=Tokens.type(c),opts={};return-1==tt?tt=Tokens.CHAR:opts.endChar=Tokens[tt].endChar,this.createToken(tt,c,startLine,startCol,opts)},commentToken:function(first,startLine,startCol){var comment=(this._reader,this.readComment(first));return this.createToken(Tokens.COMMENT,comment,startLine,startCol)},comparisonToken:function(c,startLine,startCol){var reader=this._reader,comparison=c+reader.read(),tt=Tokens.type(comparison)||Tokens.CHAR;return this.createToken(tt,comparison,startLine,startCol)\n},hashToken:function(first,startLine,startCol){var name=(this._reader,this.readName(first));return this.createToken(Tokens.HASH,name,startLine,startCol)},htmlCommentStartToken:function(first,startLine,startCol){var reader=this._reader,text=first;return reader.mark(),text+=reader.readCount(3),\"<!--\"==text?this.createToken(Tokens.CDO,text,startLine,startCol):(reader.reset(),this.charToken(first,startLine,startCol))},htmlCommentEndToken:function(first,startLine,startCol){var reader=this._reader,text=first;return reader.mark(),text+=reader.readCount(2),\"-->\"==text?this.createToken(Tokens.CDC,text,startLine,startCol):(reader.reset(),this.charToken(first,startLine,startCol))},identOrFunctionToken:function(first,startLine,startCol){var reader=this._reader,ident=this.readName(first),tt=Tokens.IDENT;return\"(\"==reader.peek()?(ident+=reader.read(),\"url(\"==ident.toLowerCase()?(tt=Tokens.URI,ident=this.readURI(ident),\"url(\"==ident.toLowerCase()&&(tt=Tokens.FUNCTION)):tt=Tokens.FUNCTION):\":\"==reader.peek()&&\"progid\"==ident.toLowerCase()&&(ident+=reader.readTo(\"(\"),tt=Tokens.IE_FUNCTION),this.createToken(tt,ident,startLine,startCol)},importantToken:function(first,startLine,startCol){var temp,c,reader=this._reader,important=first,tt=Tokens.CHAR;for(reader.mark(),c=reader.read();c;){if(\"/\"==c){if(\"*\"!=reader.peek())break;if(temp=this.readComment(c),\"\"===temp)break}else{if(!isWhitespace(c)){if(/i/i.test(c)){temp=reader.readCount(8),/mportant/i.test(temp)&&(important+=c+temp,tt=Tokens.IMPORTANT_SYM);break}break}important+=c+this.readWhitespace()}c=reader.read()}return tt==Tokens.CHAR?(reader.reset(),this.charToken(first,startLine,startCol)):this.createToken(tt,important,startLine,startCol)},notToken:function(first,startLine,startCol){var reader=this._reader,text=first;return reader.mark(),text+=reader.readCount(4),\":not(\"==text.toLowerCase()?this.createToken(Tokens.NOT,text,startLine,startCol):(reader.reset(),this.charToken(first,startLine,startCol))},numberToken:function(first,startLine,startCol){var ident,reader=this._reader,value=this.readNumber(first),tt=Tokens.NUMBER,c=reader.peek();return isIdentStart(c)?(ident=this.readName(reader.read()),value+=ident,tt=/^em$|^ex$|^px$|^gd$|^rem$|^vw$|^vh$|^vmax$|^vmin$|^ch$|^cm$|^mm$|^in$|^pt$|^pc$/i.test(ident)?Tokens.LENGTH:/^deg|^rad$|^grad$/i.test(ident)?Tokens.ANGLE:/^ms$|^s$/i.test(ident)?Tokens.TIME:/^hz$|^khz$/i.test(ident)?Tokens.FREQ:/^dpi$|^dpcm$/i.test(ident)?Tokens.RESOLUTION:Tokens.DIMENSION):\"%\"==c&&(value+=reader.read(),tt=Tokens.PERCENTAGE),this.createToken(tt,value,startLine,startCol)},stringToken:function(first,startLine,startCol){for(var delim=first,string=first,reader=this._reader,prev=first,tt=Tokens.STRING,c=reader.read();c&&(string+=c,c!=delim||\"\\\\\"==prev);){if(isNewLine(reader.peek())&&\"\\\\\"!=c){tt=Tokens.INVALID;break}prev=c,c=reader.read()}return null===c&&(tt=Tokens.INVALID),this.createToken(tt,string,startLine,startCol)},unicodeRangeToken:function(first,startLine,startCol){var temp,reader=this._reader,value=first,tt=Tokens.CHAR;return\"+\"==reader.peek()&&(reader.mark(),value+=reader.read(),value+=this.readUnicodeRangePart(!0),2==value.length?reader.reset():(tt=Tokens.UNICODE_RANGE,-1==value.indexOf(\"?\")&&\"-\"==reader.peek()&&(reader.mark(),temp=reader.read(),temp+=this.readUnicodeRangePart(!1),1==temp.length?reader.reset():value+=temp))),this.createToken(tt,value,startLine,startCol)},whitespaceToken:function(first,startLine,startCol){var value=(this._reader,first+this.readWhitespace());return this.createToken(Tokens.S,value,startLine,startCol)},readUnicodeRangePart:function(allowQuestionMark){for(var reader=this._reader,part=\"\",c=reader.peek();isHexDigit(c)&&6>part.length;)reader.read(),part+=c,c=reader.peek();if(allowQuestionMark)for(;\"?\"==c&&6>part.length;)reader.read(),part+=c,c=reader.peek();return part},readWhitespace:function(){for(var reader=this._reader,whitespace=\"\",c=reader.peek();isWhitespace(c);)reader.read(),whitespace+=c,c=reader.peek();return whitespace},readNumber:function(first){for(var reader=this._reader,number=first,hasDot=\".\"==first,c=reader.peek();c;){if(isDigit(c))number+=reader.read();else{if(\".\"!=c)break;if(hasDot)break;hasDot=!0,number+=reader.read()}c=reader.peek()}return number},readString:function(){for(var reader=this._reader,delim=reader.read(),string=delim,prev=delim,c=reader.peek();c&&(c=reader.read(),string+=c,c!=delim||\"\\\\\"==prev);){if(isNewLine(reader.peek())&&\"\\\\\"!=c){string=\"\";break}prev=c,c=reader.peek()}return null===c&&(string=\"\"),string},readURI:function(first){var reader=this._reader,uri=first,inner=\"\",c=reader.peek();for(reader.mark();c&&isWhitespace(c);)reader.read(),c=reader.peek();for(inner=\"'\"==c||'\"'==c?this.readString():this.readURL(),c=reader.peek();c&&isWhitespace(c);)reader.read(),c=reader.peek();return\"\"===inner||\")\"!=c?(uri=first,reader.reset()):uri+=inner+reader.read(),uri},readURL:function(){for(var reader=this._reader,url=\"\",c=reader.peek();/^[!#$%&\\\\*-~]$/.test(c);)url+=reader.read(),c=reader.peek();return url},readName:function(first){for(var reader=this._reader,ident=first||\"\",c=reader.peek();;)if(\"\\\\\"==c)ident+=this.readEscape(reader.read()),c=reader.peek();else{if(!c||!isNameChar(c))break;ident+=reader.read(),c=reader.peek()}return ident},readEscape:function(first){var reader=this._reader,cssEscape=first||\"\",i=0,c=reader.peek();if(isHexDigit(c))do cssEscape+=reader.read(),c=reader.peek();while(c&&isHexDigit(c)&&6>++i);return 3==cssEscape.length&&/\\s/.test(c)||7==cssEscape.length||1==cssEscape.length?reader.read():c=\"\",cssEscape+c},readComment:function(first){var reader=this._reader,comment=first||\"\",c=reader.read();if(\"*\"==c){for(;c;){if(comment+=c,comment.length>2&&\"*\"==c&&\"/\"==reader.peek()){comment+=reader.read();break}c=reader.read()}return comment}return\"\"}});var Tokens=[{name:\"CDO\"},{name:\"CDC\"},{name:\"S\",whitespace:!0},{name:\"COMMENT\",comment:!0,hide:!0,channel:\"comment\"},{name:\"INCLUDES\",text:\"~=\"},{name:\"DASHMATCH\",text:\"|=\"},{name:\"PREFIXMATCH\",text:\"^=\"},{name:\"SUFFIXMATCH\",text:\"$=\"},{name:\"SUBSTRINGMATCH\",text:\"*=\"},{name:\"STRING\"},{name:\"IDENT\"},{name:\"HASH\"},{name:\"IMPORT_SYM\",text:\"@import\"},{name:\"PAGE_SYM\",text:\"@page\"},{name:\"MEDIA_SYM\",text:\"@media\"},{name:\"FONT_FACE_SYM\",text:\"@font-face\"},{name:\"CHARSET_SYM\",text:\"@charset\"},{name:\"NAMESPACE_SYM\",text:\"@namespace\"},{name:\"VIEWPORT_SYM\",text:[\"@viewport\",\"@-ms-viewport\"]},{name:\"UNKNOWN_SYM\"},{name:\"KEYFRAMES_SYM\",text:[\"@keyframes\",\"@-webkit-keyframes\",\"@-moz-keyframes\",\"@-o-keyframes\"]},{name:\"IMPORTANT_SYM\"},{name:\"LENGTH\"},{name:\"ANGLE\"},{name:\"TIME\"},{name:\"FREQ\"},{name:\"DIMENSION\"},{name:\"PERCENTAGE\"},{name:\"NUMBER\"},{name:\"URI\"},{name:\"FUNCTION\"},{name:\"UNICODE_RANGE\"},{name:\"INVALID\"},{name:\"PLUS\",text:\"+\"},{name:\"GREATER\",text:\">\"},{name:\"COMMA\",text:\",\"},{name:\"TILDE\",text:\"~\"},{name:\"NOT\"},{name:\"TOPLEFTCORNER_SYM\",text:\"@top-left-corner\"},{name:\"TOPLEFT_SYM\",text:\"@top-left\"},{name:\"TOPCENTER_SYM\",text:\"@top-center\"},{name:\"TOPRIGHT_SYM\",text:\"@top-right\"},{name:\"TOPRIGHTCORNER_SYM\",text:\"@top-right-corner\"},{name:\"BOTTOMLEFTCORNER_SYM\",text:\"@bottom-left-corner\"},{name:\"BOTTOMLEFT_SYM\",text:\"@bottom-left\"},{name:\"BOTTOMCENTER_SYM\",text:\"@bottom-center\"},{name:\"BOTTOMRIGHT_SYM\",text:\"@bottom-right\"},{name:\"BOTTOMRIGHTCORNER_SYM\",text:\"@bottom-right-corner\"},{name:\"LEFTTOP_SYM\",text:\"@left-top\"},{name:\"LEFTMIDDLE_SYM\",text:\"@left-middle\"},{name:\"LEFTBOTTOM_SYM\",text:\"@left-bottom\"},{name:\"RIGHTTOP_SYM\",text:\"@right-top\"},{name:\"RIGHTMIDDLE_SYM\",text:\"@right-middle\"},{name:\"RIGHTBOTTOM_SYM\",text:\"@right-bottom\"},{name:\"RESOLUTION\",state:\"media\"},{name:\"IE_FUNCTION\"},{name:\"CHAR\"},{name:\"PIPE\",text:\"|\"},{name:\"SLASH\",text:\"/\"},{name:\"MINUS\",text:\"-\"},{name:\"STAR\",text:\"*\"},{name:\"LBRACE\",endChar:\"}\",text:\"{\"},{name:\"RBRACE\",text:\"}\"},{name:\"LBRACKET\",endChar:\"]\",text:\"[\"},{name:\"RBRACKET\",text:\"]\"},{name:\"EQUALS\",text:\"=\"},{name:\"COLON\",text:\":\"},{name:\"SEMICOLON\",text:\";\"},{name:\"LPAREN\",endChar:\")\",text:\"(\"},{name:\"RPAREN\",text:\")\"},{name:\"DOT\",text:\".\"}];(function(){var nameMap=[],typeMap={};Tokens.UNKNOWN=-1,Tokens.unshift({name:\"EOF\"});for(var i=0,len=Tokens.length;len>i;i++)if(nameMap.push(Tokens[i].name),Tokens[Tokens[i].name]=i,Tokens[i].text)if(Tokens[i].text instanceof Array)for(var j=0;Tokens[i].text.length>j;j++)typeMap[Tokens[i].text[j]]=i;else typeMap[Tokens[i].text]=i;Tokens.name=function(tt){return nameMap[tt]},Tokens.type=function(c){return typeMap[c]||-1}})();var Validation={validate:function(property,value){var name=(\"\"+property).toLowerCase(),expression=(value.parts,new PropertyValueIterator(value)),spec=Properties[name];if(spec)\"number\"!=typeof spec&&(\"string\"==typeof spec?spec.indexOf(\"||\")>-1?this.groupProperty(spec,expression):this.singleProperty(spec,expression,1):spec.multi?this.multiProperty(spec.multi,expression,spec.comma,spec.max||1/0):\"function\"==typeof spec&&spec(expression));else if(0!==name.indexOf(\"-\"))throw new ValidationError(\"Unknown property '\"+property+\"'.\",property.line,property.col)},singleProperty:function(types,expression,max){for(var part,result=!1,value=expression.value,count=0;expression.hasNext()&&max>count&&(result=ValidationTypes.isAny(expression,types));)count++;if(!result)throw expression.hasNext()&&!expression.isFirst()?(part=expression.peek(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)):new ValidationError(\"Expected (\"+types+\") but found '\"+value+\"'.\",value.line,value.col);if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)},multiProperty:function(types,expression,comma,max){for(var part,result=!1,value=expression.value,count=0;expression.hasNext()&&!result&&max>count&&ValidationTypes.isAny(expression,types);)if(count++,expression.hasNext()){if(comma){if(\",\"!=expression.peek())break;part=expression.next()}}else result=!0;if(!result)throw expression.hasNext()&&!expression.isFirst()?(part=expression.peek(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)):(part=expression.previous(),comma&&\",\"==part?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected (\"+types+\") but found '\"+value+\"'.\",value.line,value.col));if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)},groupProperty:function(types,expression){for(var name,part,result=!1,value=expression.value,typeCount=types.split(\"||\").length,groups={count:0},partial=!1;expression.hasNext()&&!result&&(name=ValidationTypes.isAnyOfGroup(expression,types))&&!groups[name];)groups[name]=1,groups.count++,partial=!0,groups.count!=typeCount&&expression.hasNext()||(result=!0);if(!result)throw partial&&expression.hasNext()?(part=expression.peek(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)):new ValidationError(\"Expected (\"+types+\") but found '\"+value+\"'.\",value.line,value.col);if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)}};ValidationError.prototype=Error();var ValidationTypes={isLiteral:function(part,literals){var i,len,text=(\"\"+part.text).toLowerCase(),args=literals.split(\" | \"),found=!1;for(i=0,len=args.length;len>i&&!found;i++)text==args[i].toLowerCase()&&(found=!0);return found},isSimple:function(type){return!!this.simple[type]},isComplex:function(type){return!!this.complex[type]},isAny:function(expression,types){var i,len,args=types.split(\" | \"),found=!1;for(i=0,len=args.length;len>i&&!found&&expression.hasNext();i++)found=this.isType(expression,args[i]);return found},isAnyOfGroup:function(expression,types){var i,len,args=types.split(\" || \"),found=!1;for(i=0,len=args.length;len>i&&!found;i++)found=this.isType(expression,args[i]);return found?args[i-1]:!1},isType:function(expression,type){var part=expression.peek(),result=!1;return\"<\"!=type.charAt(0)?(result=this.isLiteral(part,type),result&&expression.next()):this.simple[type]?(result=this.simple[type](part),result&&expression.next()):result=this.complex[type](expression),result},simple:{\"<absolute-size>\":function(part){return ValidationTypes.isLiteral(part,\"xx-small | x-small | small | medium | large | x-large | xx-large\")},\"<attachment>\":function(part){return ValidationTypes.isLiteral(part,\"scroll | fixed | local\")},\"<attr>\":function(part){return\"function\"==part.type&&\"attr\"==part.name},\"<bg-image>\":function(part){return this[\"<image>\"](part)||this[\"<gradient>\"](part)||\"none\"==part},\"<gradient>\":function(part){return\"function\"==part.type&&/^(?:\\-(?:ms|moz|o|webkit)\\-)?(?:repeating\\-)?(?:radial\\-|linear\\-)?gradient/i.test(part)},\"<box>\":function(part){return ValidationTypes.isLiteral(part,\"padding-box | border-box | content-box\")},\"<content>\":function(part){return\"function\"==part.type&&\"content\"==part.name},\"<relative-size>\":function(part){return ValidationTypes.isLiteral(part,\"smaller | larger\")},\"<ident>\":function(part){return\"identifier\"==part.type},\"<length>\":function(part){return\"function\"==part.type&&/^(?:\\-(?:ms|moz|o|webkit)\\-)?calc/i.test(part)?!0:\"length\"==part.type||\"number\"==part.type||\"integer\"==part.type||\"0\"==part},\"<color>\":function(part){return\"color\"==part.type||\"transparent\"==part},\"<number>\":function(part){return\"number\"==part.type||this[\"<integer>\"](part)},\"<integer>\":function(part){return\"integer\"==part.type},\"<line>\":function(part){return\"integer\"==part.type},\"<angle>\":function(part){return\"angle\"==part.type},\"<uri>\":function(part){return\"uri\"==part.type},\"<image>\":function(part){return this[\"<uri>\"](part)},\"<percentage>\":function(part){return\"percentage\"==part.type||\"0\"==part},\"<border-width>\":function(part){return this[\"<length>\"](part)||ValidationTypes.isLiteral(part,\"thin | medium | thick\")},\"<border-style>\":function(part){return ValidationTypes.isLiteral(part,\"none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset\")},\"<content-sizing>\":function(part){return ValidationTypes.isLiteral(part,\"fill-available | -moz-available | -webkit-fill-available | max-content | -moz-max-content | -webkit-max-content | min-content | -moz-min-content | -webkit-min-content | fit-content | -moz-fit-content | -webkit-fit-content\")},\"<margin-width>\":function(part){return this[\"<length>\"](part)||this[\"<percentage>\"](part)||ValidationTypes.isLiteral(part,\"auto\")},\"<padding-width>\":function(part){return this[\"<length>\"](part)||this[\"<percentage>\"](part)},\"<shape>\":function(part){return\"function\"==part.type&&(\"rect\"==part.name||\"inset-rect\"==part.name)},\"<time>\":function(part){return\"time\"==part.type},\"<flex-grow>\":function(part){return this[\"<number>\"](part)},\"<flex-shrink>\":function(part){return this[\"<number>\"](part)},\"<width>\":function(part){return this[\"<margin-width>\"](part)},\"<flex-basis>\":function(part){return this[\"<width>\"](part)},\"<flex-direction>\":function(part){return ValidationTypes.isLiteral(part,\"row | row-reverse | column | column-reverse\")},\"<flex-wrap>\":function(part){return ValidationTypes.isLiteral(part,\"nowrap | wrap | wrap-reverse\")}},complex:{\"<bg-position>\":function(expression){for(var result=!1,numeric=\"<percentage> | <length>\",xDir=\"left | right\",yDir=\"top | bottom\",count=0;expression.peek(count)&&\",\"!=expression.peek(count);)count++;return 3>count?ValidationTypes.isAny(expression,xDir+\" | center | \"+numeric)?(result=!0,ValidationTypes.isAny(expression,yDir+\" | center | \"+numeric)):ValidationTypes.isAny(expression,yDir)&&(result=!0,ValidationTypes.isAny(expression,xDir+\" | center\")):ValidationTypes.isAny(expression,xDir)?ValidationTypes.isAny(expression,yDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,numeric)&&(ValidationTypes.isAny(expression,yDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,\"center\")&&(result=!0)):ValidationTypes.isAny(expression,yDir)?ValidationTypes.isAny(expression,xDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,numeric)&&(ValidationTypes.isAny(expression,xDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,\"center\")&&(result=!0)):ValidationTypes.isAny(expression,\"center\")&&ValidationTypes.isAny(expression,xDir+\" | \"+yDir)&&(result=!0,ValidationTypes.isAny(expression,numeric)),result},\"<bg-size>\":function(expression){var result=!1,numeric=\"<percentage> | <length> | auto\";return ValidationTypes.isAny(expression,\"cover | contain\")?result=!0:ValidationTypes.isAny(expression,numeric)&&(result=!0,ValidationTypes.isAny(expression,numeric)),result},\"<repeat-style>\":function(expression){var part,result=!1,values=\"repeat | space | round | no-repeat\";return expression.hasNext()&&(part=expression.next(),ValidationTypes.isLiteral(part,\"repeat-x | repeat-y\")?result=!0:ValidationTypes.isLiteral(part,values)&&(result=!0,expression.hasNext()&&ValidationTypes.isLiteral(expression.peek(),values)&&expression.next())),result},\"<shadow>\":function(expression){var result=!1,count=0,inset=!1,color=!1;if(expression.hasNext()){for(ValidationTypes.isAny(expression,\"inset\")&&(inset=!0),ValidationTypes.isAny(expression,\"<color>\")&&(color=!0);ValidationTypes.isAny(expression,\"<length>\")&&4>count;)count++;expression.hasNext()&&(color||ValidationTypes.isAny(expression,\"<color>\"),inset||ValidationTypes.isAny(expression,\"inset\")),result=count>=2&&4>=count}return result},\"<x-one-radius>\":function(expression){var result=!1,simple=\"<length> | <percentage> | inherit\";return ValidationTypes.isAny(expression,simple)&&(result=!0,ValidationTypes.isAny(expression,simple)),result},\"<flex>\":function(expression){var part,result=!1;if(ValidationTypes.isAny(expression,\"none | inherit\")?result=!0:ValidationTypes.isType(expression,\"<flex-grow>\")?expression.peek()?ValidationTypes.isType(expression,\"<flex-shrink>\")?result=expression.peek()?ValidationTypes.isType(expression,\"<flex-basis>\"):!0:ValidationTypes.isType(expression,\"<flex-basis>\")&&(result=null===expression.peek()):result=!0:ValidationTypes.isType(expression,\"<flex-basis>\")&&(result=!0),!result)throw part=expression.peek(),new ValidationError(\"Expected (none | [ <flex-grow> <flex-shrink>? || <flex-basis> ]) but found '\"+expression.value.text+\"'.\",part.line,part.col);return result}}};parserlib.css={Colors:Colors,Combinator:Combinator,Parser:Parser,PropertyName:PropertyName,PropertyValue:PropertyValue,PropertyValuePart:PropertyValuePart,MediaFeature:MediaFeature,MediaQuery:MediaQuery,Selector:Selector,SelectorPart:SelectorPart,SelectorSubPart:SelectorSubPart,Specificity:Specificity,TokenStream:TokenStream,Tokens:Tokens,ValidationError:ValidationError}}(),function(){for(var prop in parserlib)exports[prop]=parserlib[prop]}();var util={isArray:function(ar){return Array.isArray(ar)||\"object\"==typeof ar&&\"[object Array]\"===objectToString(ar)},isDate:function(d){return\"object\"==typeof d&&\"[object Date]\"===objectToString(d)},isRegExp:function(re){return\"object\"==typeof re&&\"[object RegExp]\"===objectToString(re)},getRegExpFlags:function(re){var flags=\"\";return re.global&&(flags+=\"g\"),re.ignoreCase&&(flags+=\"i\"),re.multiline&&(flags+=\"m\"),flags}};\"object\"==typeof module&&(module.exports=clone),clone.clonePrototype=function(parent){if(null===parent)return null;var c=function(){};return c.prototype=parent,new c};var CSSLint=function(){function applyEmbeddedRuleset(text,ruleset){var valueMap,embedded=text&&text.match(embeddedRuleset),rules=embedded&&embedded[1];return rules&&(valueMap={\"true\":2,\"\":1,\"false\":0,2:2,1:1,0:0},rules.toLowerCase().split(\",\").forEach(function(rule){var pair=rule.split(\":\"),property=pair[0]||\"\",value=pair[1]||\"\";ruleset[property.trim()]=valueMap[value.trim()]})),ruleset}var rules=[],formatters=[],embeddedRuleset=/\\/\\*csslint([^\\*]*)\\*\\//,api=new parserlib.util.EventTarget;return api.version=\"@VERSION@\",api.addRule=function(rule){rules.push(rule),rules[rule.id]=rule},api.clearRules=function(){rules=[]},api.getRules=function(){return[].concat(rules).sort(function(a,b){return a.id>b.id?1:0})},api.getRuleset=function(){for(var ruleset={},i=0,len=rules.length;len>i;)ruleset[rules[i++].id]=1;return ruleset},api.addFormatter=function(formatter){formatters[formatter.id]=formatter},api.getFormatter=function(formatId){return formatters[formatId]},api.format=function(results,filename,formatId,options){var formatter=this.getFormatter(formatId),result=null;return formatter&&(result=formatter.startFormat(),result+=formatter.formatResults(results,filename,options||{}),result+=formatter.endFormat()),result},api.hasFormat=function(formatId){return formatters.hasOwnProperty(formatId)},api.verify=function(text,ruleset){var reporter,lines,report,i=0,parser=new parserlib.css.Parser({starHack:!0,ieFilters:!0,underscoreHack:!0,strict:!1});lines=text.replace(/\\n\\r?/g,\"$split$\").split(\"$split$\"),ruleset||(ruleset=this.getRuleset()),embeddedRuleset.test(text)&&(ruleset=clone(ruleset),ruleset=applyEmbeddedRuleset(text,ruleset)),reporter=new Reporter(lines,ruleset),ruleset.errors=2;for(i in ruleset)ruleset.hasOwnProperty(i)&&ruleset[i]&&rules[i]&&rules[i].init(parser,reporter);try{parser.parse(text)}catch(ex){reporter.error(\"Fatal error, cannot continue: \"+ex.message,ex.line,ex.col,{})}return report={messages:reporter.messages,stats:reporter.stats,ruleset:reporter.ruleset},report.messages.sort(function(a,b){return a.rollup&&!b.rollup?1:!a.rollup&&b.rollup?-1:a.line-b.line}),report},api}();Reporter.prototype={constructor:Reporter,error:function(message,line,col,rule){this.messages.push({type:\"error\",line:line,col:col,message:message,evidence:this.lines[line-1],rule:rule||{}})},warn:function(message,line,col,rule){this.report(message,line,col,rule)},report:function(message,line,col,rule){this.messages.push({type:2===this.ruleset[rule.id]?\"error\":\"warning\",line:line,col:col,message:message,evidence:this.lines[line-1],rule:rule})},info:function(message,line,col,rule){this.messages.push({type:\"info\",line:line,col:col,message:message,evidence:this.lines[line-1],rule:rule})},rollupError:function(message,rule){this.messages.push({type:\"error\",rollup:!0,message:message,rule:rule})},rollupWarn:function(message,rule){this.messages.push({type:\"warning\",rollup:!0,message:message,rule:rule})},stat:function(name,value){this.stats[name]=value}},CSSLint._Reporter=Reporter,CSSLint.Util={mix:function(receiver,supplier){var prop;for(prop in supplier)supplier.hasOwnProperty(prop)&&(receiver[prop]=supplier[prop]);return prop},indexOf:function(values,value){if(values.indexOf)return values.indexOf(value);for(var i=0,len=values.length;len>i;i++)if(values[i]===value)return i;return-1},forEach:function(values,func){if(values.forEach)return values.forEach(func);for(var i=0,len=values.length;len>i;i++)func(values[i],i,values)}},CSSLint.addRule({id:\"adjoining-classes\",name:\"Disallow adjoining classes\",desc:\"Don't use adjoining classes.\",browsers:\"IE6\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,classCount,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(classCount=0,k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"class\"===modifier.type&&classCount++,classCount>1&&reporter.report(\"Don't use adjoining classes.\",part.line,part.col,rule)})}}),CSSLint.addRule({id:\"box-model\",name:\"Beware of broken box size\",desc:\"Don't use width or height when using padding or border.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={},boxSizing=!1}function endRule(){var prop,value;if(!boxSizing){if(properties.height)for(prop in heightProperties)heightProperties.hasOwnProperty(prop)&&properties[prop]&&(value=properties[prop].value,(\"padding\"!==prop||2!==value.parts.length||0!==value.parts[0].value)&&reporter.report(\"Using height with \"+prop+\" can sometimes make elements larger than you expect.\",properties[prop].line,properties[prop].col,rule));if(properties.width)for(prop in widthProperties)widthProperties.hasOwnProperty(prop)&&properties[prop]&&(value=properties[prop].value,(\"padding\"!==prop||2!==value.parts.length||0!==value.parts[1].value)&&reporter.report(\"Using width with \"+prop+\" can sometimes make elements larger than you expect.\",properties[prop].line,properties[prop].col,rule))}}var properties,rule=this,widthProperties={border:1,\"border-left\":1,\"border-right\":1,padding:1,\"padding-left\":1,\"padding-right\":1},heightProperties={border:1,\"border-bottom\":1,\"border-top\":1,padding:1,\"padding-bottom\":1,\"padding-top\":1},boxSizing=!1;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();heightProperties[name]||widthProperties[name]?/^0\\S*$/.test(event.value)||\"border\"===name&&\"none\"==\"\"+event.value||(properties[name]={line:event.property.line,col:event.property.col,value:event.value}):/^(width|height)/i.test(name)&&/^(length|percentage)/.test(event.value.parts[0].type)?properties[name]=1:\"box-sizing\"===name&&(boxSizing=!0)}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endpage\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endkeyframerule\",endRule)}}),CSSLint.addRule({id:\"box-sizing\",name:\"Disallow use of box-sizing\",desc:\"The box-sizing properties isn't supported in IE6 and IE7.\",browsers:\"IE6, IE7\",tags:[\"Compatibility\"],init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();\"box-sizing\"===name&&reporter.report(\"The box-sizing property isn't supported in IE6 and IE7.\",event.line,event.col,rule)})}}),CSSLint.addRule({id:\"bulletproof-font-face\",name:\"Use the bulletproof @font-face syntax\",desc:\"Use the bulletproof @font-face syntax to avoid 404's in old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).\",browsers:\"All\",init:function(parser,reporter){var line,col,rule=this,fontFaceRule=!1,firstSrc=!0,ruleFailed=!1;parser.addListener(\"startfontface\",function(){fontFaceRule=!0}),parser.addListener(\"property\",function(event){if(fontFaceRule){var propertyName=(\"\"+event.property).toLowerCase(),value=\"\"+event.value;if(line=event.line,col=event.col,\"src\"===propertyName){var regex=/^\\s?url\\(['\"].+\\.eot\\?.*['\"]\\)\\s*format\\(['\"]embedded-opentype['\"]\\).*$/i;!value.match(regex)&&firstSrc?(ruleFailed=!0,firstSrc=!1):value.match(regex)&&!firstSrc&&(ruleFailed=!1)}}}),parser.addListener(\"endfontface\",function(){fontFaceRule=!1,ruleFailed&&reporter.report(\"@font-face declaration doesn't follow the fontspring bulletproof syntax.\",line,col,rule)})}}),CSSLint.addRule({id:\"compatible-vendor-prefixes\",name:\"Require compatible vendor prefixes\",desc:\"Include all compatible vendor prefixes to reach a wider range of users.\",browsers:\"All\",init:function(parser,reporter){var compatiblePrefixes,properties,prop,variations,prefixed,i,len,rule=this,inKeyFrame=!1,arrayPush=Array.prototype.push,applyTo=[];compatiblePrefixes={animation:\"webkit moz\",\"animation-delay\":\"webkit moz\",\"animation-direction\":\"webkit moz\",\"animation-duration\":\"webkit moz\",\"animation-fill-mode\":\"webkit moz\",\"animation-iteration-count\":\"webkit moz\",\"animation-name\":\"webkit moz\",\"animation-play-state\":\"webkit moz\",\"animation-timing-function\":\"webkit moz\",appearance:\"webkit moz\",\"border-end\":\"webkit moz\",\"border-end-color\":\"webkit moz\",\"border-end-style\":\"webkit moz\",\"border-end-width\":\"webkit moz\",\"border-image\":\"webkit moz o\",\"border-radius\":\"webkit\",\"border-start\":\"webkit moz\",\"border-start-color\":\"webkit moz\",\"border-start-style\":\"webkit moz\",\"border-start-width\":\"webkit moz\",\"box-align\":\"webkit moz ms\",\"box-direction\":\"webkit moz ms\",\"box-flex\":\"webkit moz ms\",\"box-lines\":\"webkit ms\",\"box-ordinal-group\":\"webkit moz ms\",\"box-orient\":\"webkit moz ms\",\"box-pack\":\"webkit moz ms\",\"box-sizing\":\"webkit moz\",\"box-shadow\":\"webkit moz\",\"column-count\":\"webkit moz ms\",\"column-gap\":\"webkit moz ms\",\"column-rule\":\"webkit moz ms\",\"column-rule-color\":\"webkit moz ms\",\"column-rule-style\":\"webkit moz ms\",\"column-rule-width\":\"webkit moz ms\",\"column-width\":\"webkit moz ms\",hyphens:\"epub moz\",\"line-break\":\"webkit ms\",\"margin-end\":\"webkit moz\",\"margin-start\":\"webkit moz\",\"marquee-speed\":\"webkit wap\",\"marquee-style\":\"webkit wap\",\"padding-end\":\"webkit moz\",\"padding-start\":\"webkit moz\",\"tab-size\":\"moz o\",\"text-size-adjust\":\"webkit ms\",transform:\"webkit moz ms o\",\"transform-origin\":\"webkit moz ms o\",transition:\"webkit moz o\",\"transition-delay\":\"webkit moz o\",\"transition-duration\":\"webkit moz o\",\"transition-property\":\"webkit moz o\",\"transition-timing-function\":\"webkit moz o\",\"user-modify\":\"webkit moz\",\"user-select\":\"webkit moz ms\",\"word-break\":\"epub ms\",\"writing-mode\":\"epub ms\"};for(prop in compatiblePrefixes)if(compatiblePrefixes.hasOwnProperty(prop)){for(variations=[],prefixed=compatiblePrefixes[prop].split(\" \"),i=0,len=prefixed.length;len>i;i++)variations.push(\"-\"+prefixed[i]+\"-\"+prop);compatiblePrefixes[prop]=variations,arrayPush.apply(applyTo,variations)}parser.addListener(\"startrule\",function(){properties=[]}),parser.addListener(\"startkeyframes\",function(event){inKeyFrame=event.prefix||!0}),parser.addListener(\"endkeyframes\",function(){inKeyFrame=!1}),parser.addListener(\"property\",function(event){var name=event.property;CSSLint.Util.indexOf(applyTo,name.text)>-1&&(inKeyFrame&&\"string\"==typeof inKeyFrame&&0===name.text.indexOf(\"-\"+inKeyFrame+\"-\")||properties.push(name))}),parser.addListener(\"endrule\",function(){if(properties.length){var i,len,name,prop,variations,value,full,actual,item,propertiesSpecified,propertyGroups={};for(i=0,len=properties.length;len>i;i++){name=properties[i];for(prop in compatiblePrefixes)compatiblePrefixes.hasOwnProperty(prop)&&(variations=compatiblePrefixes[prop],CSSLint.Util.indexOf(variations,name.text)>-1&&(propertyGroups[prop]||(propertyGroups[prop]={full:variations.slice(0),actual:[],actualNodes:[]}),-1===CSSLint.Util.indexOf(propertyGroups[prop].actual,name.text)&&(propertyGroups[prop].actual.push(name.text),propertyGroups[prop].actualNodes.push(name))))}for(prop in propertyGroups)if(propertyGroups.hasOwnProperty(prop)&&(value=propertyGroups[prop],full=value.full,actual=value.actual,full.length>actual.length))for(i=0,len=full.length;len>i;i++)item=full[i],-1===CSSLint.Util.indexOf(actual,item)&&(propertiesSpecified=1===actual.length?actual[0]:2===actual.length?actual.join(\" and \"):actual.join(\", \"),reporter.report(\"The property \"+item+\" is compatible with \"+propertiesSpecified+\" and should be included as well.\",value.actualNodes[0].line,value.actualNodes[0].col,rule))}})}}),CSSLint.addRule({id:\"display-property-grouping\",name:\"Require properties appropriate for display\",desc:\"Certain properties shouldn't be used with certain display property values.\",browsers:\"All\",init:function(parser,reporter){function reportProperty(name,display,msg){properties[name]&&(\"string\"!=typeof propertiesToCheck[name]||properties[name].value.toLowerCase()!==propertiesToCheck[name])&&reporter.report(msg||name+\" can't be used with display: \"+display+\".\",properties[name].line,properties[name].col,rule)}function startRule(){properties={}}function endRule(){var display=properties.display?properties.display.value:null;if(display)switch(display){case\"inline\":reportProperty(\"height\",display),reportProperty(\"width\",display),reportProperty(\"margin\",display),reportProperty(\"margin-top\",display),reportProperty(\"margin-bottom\",display),reportProperty(\"float\",display,\"display:inline has no effect on floated elements (but may be used to fix the IE6 double-margin bug).\");break;case\"block\":reportProperty(\"vertical-align\",display);\nbreak;case\"inline-block\":reportProperty(\"float\",display);break;default:0===display.indexOf(\"table-\")&&(reportProperty(\"margin\",display),reportProperty(\"margin-left\",display),reportProperty(\"margin-right\",display),reportProperty(\"margin-top\",display),reportProperty(\"margin-bottom\",display),reportProperty(\"float\",display))}}var properties,rule=this,propertiesToCheck={display:1,\"float\":\"none\",height:1,width:1,margin:1,\"margin-left\":1,\"margin-right\":1,\"margin-bottom\":1,\"margin-top\":1,padding:1,\"padding-left\":1,\"padding-right\":1,\"padding-bottom\":1,\"padding-top\":1,\"vertical-align\":1};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();propertiesToCheck[name]&&(properties[name]={value:event.value.text,line:event.property.line,col:event.property.col})}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endkeyframerule\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endpage\",endRule)}}),CSSLint.addRule({id:\"duplicate-background-images\",name:\"Disallow duplicate background images\",desc:\"Every background-image should be unique. Use a common class for e.g. sprites.\",browsers:\"All\",init:function(parser,reporter){var rule=this,stack={};parser.addListener(\"property\",function(event){var i,len,name=event.property.text,value=event.value;if(name.match(/background/i))for(i=0,len=value.parts.length;len>i;i++)\"uri\"===value.parts[i].type&&(stack[value.parts[i].uri]===void 0?stack[value.parts[i].uri]=event:reporter.report(\"Background image '\"+value.parts[i].uri+\"' was used multiple times, first declared at line \"+stack[value.parts[i].uri].line+\", col \"+stack[value.parts[i].uri].col+\".\",event.line,event.col,rule))})}}),CSSLint.addRule({id:\"duplicate-properties\",name:\"Disallow duplicate properties\",desc:\"Duplicate properties must appear one after the other.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={}}var properties,lastProperty,rule=this;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var property=event.property,name=property.text.toLowerCase();!properties[name]||lastProperty===name&&properties[name]!==event.value.text||reporter.report(\"Duplicate property '\"+event.property+\"' found.\",event.line,event.col,rule),properties[name]=event.value.text,lastProperty=name})}}),CSSLint.addRule({id:\"empty-rules\",name:\"Disallow empty rules\",desc:\"Rules without any properties specified should be removed.\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startrule\",function(){count=0}),parser.addListener(\"property\",function(){count++}),parser.addListener(\"endrule\",function(event){var selectors=event.selectors;0===count&&reporter.report(\"Rule is empty.\",selectors[0].line,selectors[0].col,rule)})}}),CSSLint.addRule({id:\"errors\",name:\"Parsing Errors\",desc:\"This rule looks for recoverable syntax errors.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"error\",function(event){reporter.error(event.message,event.line,event.col,rule)})}}),CSSLint.addRule({id:\"fallback-colors\",name:\"Require fallback colors\",desc:\"For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.\",browsers:\"IE6,IE7,IE8\",init:function(parser,reporter){function startRule(){properties={},lastProperty=null}var lastProperty,properties,rule=this,propertiesToCheck={color:1,background:1,\"border-color\":1,\"border-top-color\":1,\"border-right-color\":1,\"border-bottom-color\":1,\"border-left-color\":1,border:1,\"border-top\":1,\"border-right\":1,\"border-bottom\":1,\"border-left\":1,\"background-color\":1};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var property=event.property,name=property.text.toLowerCase(),parts=event.value.parts,i=0,colorType=\"\",len=parts.length;if(propertiesToCheck[name])for(;len>i;)\"color\"===parts[i].type&&(\"alpha\"in parts[i]||\"hue\"in parts[i]?(/([^\\)]+)\\(/.test(parts[i])&&(colorType=RegExp.$1.toUpperCase()),lastProperty&&lastProperty.property.text.toLowerCase()===name&&\"compat\"===lastProperty.colorType||reporter.report(\"Fallback \"+name+\" (hex or RGB) should precede \"+colorType+\" \"+name+\".\",event.line,event.col,rule)):event.colorType=\"compat\"),i++;lastProperty=event})}}),CSSLint.addRule({id:\"floats\",name:\"Disallow too many floats\",desc:\"This rule tests if the float property is used too many times\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"property\",function(event){\"float\"===event.property.text.toLowerCase()&&\"none\"!==event.value.text.toLowerCase()&&count++}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"floats\",count),count>=10&&reporter.rollupWarn(\"Too many floats (\"+count+\"), you're probably using them for layout. Consider using a grid system instead.\",rule)})}}),CSSLint.addRule({id:\"font-faces\",name:\"Don't use too many web fonts\",desc:\"Too many different web fonts in the same stylesheet.\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startfontface\",function(){count++}),parser.addListener(\"endstylesheet\",function(){count>5&&reporter.rollupWarn(\"Too many @font-face declarations (\"+count+\").\",rule)})}}),CSSLint.addRule({id:\"font-sizes\",name:\"Disallow too many font sizes\",desc:\"Checks the number of font-size declarations.\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"property\",function(event){\"font-size\"==\"\"+event.property&&count++}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"font-sizes\",count),count>=10&&reporter.rollupWarn(\"Too many font-size declarations (\"+count+\"), abstraction needed.\",rule)})}}),CSSLint.addRule({id:\"gradients\",name:\"Require all gradient definitions\",desc:\"When using a vendor-prefixed gradient, make sure to use them all.\",browsers:\"All\",init:function(parser,reporter){var gradients,rule=this;parser.addListener(\"startrule\",function(){gradients={moz:0,webkit:0,oldWebkit:0,o:0}}),parser.addListener(\"property\",function(event){/\\-(moz|o|webkit)(?:\\-(?:linear|radial))\\-gradient/i.test(event.value)?gradients[RegExp.$1]=1:/\\-webkit\\-gradient/i.test(event.value)&&(gradients.oldWebkit=1)}),parser.addListener(\"endrule\",function(event){var missing=[];gradients.moz||missing.push(\"Firefox 3.6+\"),gradients.webkit||missing.push(\"Webkit (Safari 5+, Chrome)\"),gradients.oldWebkit||missing.push(\"Old Webkit (Safari 4+, Chrome)\"),gradients.o||missing.push(\"Opera 11.1+\"),missing.length&&4>missing.length&&reporter.report(\"Missing vendor-prefixed CSS gradients for \"+missing.join(\", \")+\".\",event.selectors[0].line,event.selectors[0].col,rule)})}}),CSSLint.addRule({id:\"ids\",name:\"Disallow IDs in selectors\",desc:\"Selectors should not contain IDs.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,idCount,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++){for(selector=selectors[i],idCount=0,j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"id\"===modifier.type&&idCount++;1===idCount?reporter.report(\"Don't use IDs in selectors.\",selector.line,selector.col,rule):idCount>1&&reporter.report(idCount+\" IDs in the selector, really?\",selector.line,selector.col,rule)}})}}),CSSLint.addRule({id:\"import\",name:\"Disallow @import\",desc:\"Don't use @import, use <link> instead.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"import\",function(event){reporter.report(\"@import prevents parallel downloads, use <link> instead.\",event.line,event.col,rule)})}}),CSSLint.addRule({id:\"important\",name:\"Disallow !important\",desc:\"Be careful when using !important declaration\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"property\",function(event){event.important===!0&&(count++,reporter.report(\"Use of !important\",event.line,event.col,rule))}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"important\",count),count>=10&&reporter.rollupWarn(\"Too many !important declarations (\"+count+\"), try to use less than 10 to avoid specificity issues.\",rule)})}}),CSSLint.addRule({id:\"known-properties\",name:\"Require use of known properties\",desc:\"Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){event.invalid&&reporter.report(event.invalid.message,event.line,event.col,rule)})}}),CSSLint.addRule({id:\"order-alphabetical\",name:\"Alphabetical order\",desc:\"Assure properties are in alphabetical order\",browsers:\"All\",init:function(parser,reporter){var properties,rule=this,startRule=function(){properties=[]};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text,lowerCasePrefixLessName=name.toLowerCase().replace(/^-.*?-/,\"\");properties.push(lowerCasePrefixLessName)}),parser.addListener(\"endrule\",function(event){var currentProperties=properties.join(\",\"),expectedProperties=properties.sort().join(\",\");currentProperties!==expectedProperties&&reporter.report(\"Rule doesn't have all its properties in alphabetical ordered.\",event.line,event.col,rule)})}}),CSSLint.addRule({id:\"outline-none\",name:\"Disallow outline: none\",desc:\"Use of outline: none or outline: 0 should be limited to :focus rules.\",browsers:\"All\",tags:[\"Accessibility\"],init:function(parser,reporter){function startRule(event){lastRule=event.selectors?{line:event.line,col:event.col,selectors:event.selectors,propCount:0,outline:!1}:null}function endRule(){lastRule&&lastRule.outline&&(-1===(\"\"+lastRule.selectors).toLowerCase().indexOf(\":focus\")?reporter.report(\"Outlines should only be modified using :focus.\",lastRule.line,lastRule.col,rule):1===lastRule.propCount&&reporter.report(\"Outlines shouldn't be hidden unless other visual changes are made.\",lastRule.line,lastRule.col,rule))}var lastRule,rule=this;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase(),value=event.value;lastRule&&(lastRule.propCount++,\"outline\"!==name||\"none\"!=\"\"+value&&\"0\"!=\"\"+value||(lastRule.outline=!0))}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endpage\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endkeyframerule\",endRule)}}),CSSLint.addRule({id:\"overqualified-elements\",name:\"Disallow overqualified elements\",desc:\"Don't use classes or IDs with elements (a.foo or a#foo).\",browsers:\"All\",init:function(parser,reporter){var rule=this,classes={};parser.addListener(\"startrule\",function(event){var selector,part,modifier,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],part.elementName&&\"id\"===modifier.type?reporter.report(\"Element (\"+part+\") is overqualified, just use \"+modifier+\" without element name.\",part.line,part.col,rule):\"class\"===modifier.type&&(classes[modifier]||(classes[modifier]=[]),classes[modifier].push({modifier:modifier,part:part}))}),parser.addListener(\"endstylesheet\",function(){var prop;for(prop in classes)classes.hasOwnProperty(prop)&&1===classes[prop].length&&classes[prop][0].part.elementName&&reporter.report(\"Element (\"+classes[prop][0].part+\") is overqualified, just use \"+classes[prop][0].modifier+\" without element name.\",classes[prop][0].part.line,classes[prop][0].part.col,rule)})}}),CSSLint.addRule({id:\"qualified-headings\",name:\"Disallow qualified headings\",desc:\"Headings should not be qualified (namespaced).\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,i,j,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE&&part.elementName&&/h[1-6]/.test(\"\"+part.elementName)&&j>0&&reporter.report(\"Heading (\"+part.elementName+\") should not be qualified.\",part.line,part.col,rule)})}}),CSSLint.addRule({id:\"regex-selectors\",name:\"Disallow selectors that look like regexs\",desc:\"Selectors that look like regular expressions are slow and should be avoided.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"attribute\"===modifier.type&&/([\\~\\|\\^\\$\\*]=)/.test(modifier)&&reporter.report(\"Attribute selectors with \"+RegExp.$1+\" are slow!\",modifier.line,modifier.col,rule)})}}),CSSLint.addRule({id:\"rules-count\",name:\"Rules Count\",desc:\"Track how many rules there are.\",browsers:\"All\",init:function(parser,reporter){var count=0;parser.addListener(\"startrule\",function(){count++}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"rule-count\",count)})}}),CSSLint.addRule({id:\"selector-max-approaching\",name:\"Warn when approaching the 4095 selector limit for IE\",desc:\"Will warn when selector count is >= 3800 selectors.\",browsers:\"IE\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startrule\",function(event){count+=event.selectors.length}),parser.addListener(\"endstylesheet\",function(){count>=3800&&reporter.report(\"You have \"+count+\" selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.\",0,0,rule)})}}),CSSLint.addRule({id:\"selector-max\",name:\"Error when past the 4095 selector limit for IE\",desc:\"Will error when selector count is > 4095.\",browsers:\"IE\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startrule\",function(event){count+=event.selectors.length}),parser.addListener(\"endstylesheet\",function(){count>4095&&reporter.report(\"You have \"+count+\" selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.\",0,0,rule)})}}),CSSLint.addRule({id:\"selector-newline\",name:\"Disallow new-line characters in selectors\",desc:\"New-line characters in selectors are usually a forgotten comma and not a descendant combinator.\",browsers:\"All\",init:function(parser,reporter){function startRule(event){var i,len,selector,p,n,pLen,part,part2,type,currentLine,nextLine,selectors=event.selectors;for(i=0,len=selectors.length;len>i;i++)for(selector=selectors[i],p=0,pLen=selector.parts.length;pLen>p;p++)for(n=p+1;pLen>n;n++)part=selector.parts[p],part2=selector.parts[n],type=part.type,currentLine=part.line,nextLine=part2.line,\"descendant\"===type&&nextLine>currentLine&&reporter.report(\"newline character found in selector (forgot a comma?)\",currentLine,selectors[i].parts[0].col,rule)}var rule=this;parser.addListener(\"startrule\",startRule)}}),CSSLint.addRule({id:\"shorthand\",name:\"Require shorthand properties\",desc:\"Use shorthand properties where possible.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={}}function endRule(event){var prop,i,len,total;for(prop in mapping)if(mapping.hasOwnProperty(prop)){for(total=0,i=0,len=mapping[prop].length;len>i;i++)total+=properties[mapping[prop][i]]?1:0;total===mapping[prop].length&&reporter.report(\"The properties \"+mapping[prop].join(\", \")+\" can be replaced by \"+prop+\".\",event.line,event.col,rule)}}var prop,i,len,properties,rule=this,propertiesToCheck={},mapping={margin:[\"margin-top\",\"margin-bottom\",\"margin-left\",\"margin-right\"],padding:[\"padding-top\",\"padding-bottom\",\"padding-left\",\"padding-right\"]};for(prop in mapping)if(mapping.hasOwnProperty(prop))for(i=0,len=mapping[prop].length;len>i;i++)propertiesToCheck[mapping[prop][i]]=prop;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"property\",function(event){var name=(\"\"+event.property).toLowerCase();propertiesToCheck[name]&&(properties[name]=1)}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule)}}),CSSLint.addRule({id:\"star-property-hack\",name:\"Disallow properties with a star prefix\",desc:\"Checks for the star property hack (targets IE6/7)\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){var property=event.property;\"*\"===property.hack&&reporter.report(\"Property with star prefix found.\",event.property.line,event.property.col,rule)})}}),CSSLint.addRule({id:\"text-indent\",name:\"Disallow negative text-indent\",desc:\"Checks for text indent less than -99px\",browsers:\"All\",init:function(parser,reporter){function startRule(){textIndent=!1,direction=\"inherit\"}function endRule(){textIndent&&\"ltr\"!==direction&&reporter.report(\"Negative text-indent doesn't work well with RTL. If you use text-indent for image replacement explicitly set direction for that item to ltr.\",textIndent.line,textIndent.col,rule)}var textIndent,direction,rule=this;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"property\",function(event){var name=(\"\"+event.property).toLowerCase(),value=event.value;\"text-indent\"===name&&-99>value.parts[0].value?textIndent=event.property:\"direction\"===name&&\"ltr\"==\"\"+value&&(direction=\"ltr\")}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule)}}),CSSLint.addRule({id:\"underscore-property-hack\",name:\"Disallow properties with an underscore prefix\",desc:\"Checks for the underscore property hack (targets IE6)\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){var property=event.property;\"_\"===property.hack&&reporter.report(\"Property with underscore prefix found.\",event.property.line,event.property.col,rule)})}}),CSSLint.addRule({id:\"unique-headings\",name:\"Headings should only be defined once\",desc:\"Headings should be defined only once.\",browsers:\"All\",init:function(parser,reporter){var rule=this,headings={h1:0,h2:0,h3:0,h4:0,h5:0,h6:0};parser.addListener(\"startrule\",function(event){var selector,part,pseudo,i,j,selectors=event.selectors;for(i=0;selectors.length>i;i++)if(selector=selectors[i],part=selector.parts[selector.parts.length-1],part.elementName&&/(h[1-6])/i.test(\"\"+part.elementName)){for(j=0;part.modifiers.length>j;j++)if(\"pseudo\"===part.modifiers[j].type){pseudo=!0;break}pseudo||(headings[RegExp.$1]++,headings[RegExp.$1]>1&&reporter.report(\"Heading (\"+part.elementName+\") has already been defined.\",part.line,part.col,rule))}}),parser.addListener(\"endstylesheet\",function(){var prop,messages=[];for(prop in headings)headings.hasOwnProperty(prop)&&headings[prop]>1&&messages.push(headings[prop]+\" \"+prop+\"s\");messages.length&&reporter.rollupWarn(\"You have \"+messages.join(\", \")+\" defined in this stylesheet.\",rule)})}}),CSSLint.addRule({id:\"universal-selector\",name:\"Disallow universal selector\",desc:\"The universal selector (*) is known to be slow.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,i,selectors=event.selectors;for(i=0;selectors.length>i;i++)selector=selectors[i],part=selector.parts[selector.parts.length-1],\"*\"===part.elementName&&reporter.report(rule.desc,part.line,part.col,rule)})}}),CSSLint.addRule({id:\"unqualified-attributes\",name:\"Disallow unqualified attribute selectors\",desc:\"Unqualified attribute selectors are known to be slow.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,i,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)if(selector=selectors[i],part=selector.parts[selector.parts.length-1],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"attribute\"!==modifier.type||part.elementName&&\"*\"!==part.elementName||reporter.report(rule.desc,part.line,part.col,rule)})}}),CSSLint.addRule({id:\"vendor-prefix\",name:\"Require standard property with vendor prefix\",desc:\"When using a vendor-prefixed property, make sure to include the standard one.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={},num=1}function endRule(){var prop,i,len,needed,actual,needsStandard=[];for(prop in properties)propertiesToCheck[prop]&&needsStandard.push({actual:prop,needed:propertiesToCheck[prop]});for(i=0,len=needsStandard.length;len>i;i++)needed=needsStandard[i].needed,actual=needsStandard[i].actual,properties[needed]?properties[needed][0].pos<properties[actual][0].pos&&reporter.report(\"Standard property '\"+needed+\"' should come after vendor-prefixed property '\"+actual+\"'.\",properties[actual][0].name.line,properties[actual][0].name.col,rule):reporter.report(\"Missing standard property '\"+needed+\"' to go along with '\"+actual+\"'.\",properties[actual][0].name.line,properties[actual][0].name.col,rule)}var properties,num,rule=this,propertiesToCheck={\"-webkit-border-radius\":\"border-radius\",\"-webkit-border-top-left-radius\":\"border-top-left-radius\",\"-webkit-border-top-right-radius\":\"border-top-right-radius\",\"-webkit-border-bottom-left-radius\":\"border-bottom-left-radius\",\"-webkit-border-bottom-right-radius\":\"border-bottom-right-radius\",\"-o-border-radius\":\"border-radius\",\"-o-border-top-left-radius\":\"border-top-left-radius\",\"-o-border-top-right-radius\":\"border-top-right-radius\",\"-o-border-bottom-left-radius\":\"border-bottom-left-radius\",\"-o-border-bottom-right-radius\":\"border-bottom-right-radius\",\"-moz-border-radius\":\"border-radius\",\"-moz-border-radius-topleft\":\"border-top-left-radius\",\"-moz-border-radius-topright\":\"border-top-right-radius\",\"-moz-border-radius-bottomleft\":\"border-bottom-left-radius\",\"-moz-border-radius-bottomright\":\"border-bottom-right-radius\",\"-moz-column-count\":\"column-count\",\"-webkit-column-count\":\"column-count\",\"-moz-column-gap\":\"column-gap\",\"-webkit-column-gap\":\"column-gap\",\"-moz-column-rule\":\"column-rule\",\"-webkit-column-rule\":\"column-rule\",\"-moz-column-rule-style\":\"column-rule-style\",\"-webkit-column-rule-style\":\"column-rule-style\",\"-moz-column-rule-color\":\"column-rule-color\",\"-webkit-column-rule-color\":\"column-rule-color\",\"-moz-column-rule-width\":\"column-rule-width\",\"-webkit-column-rule-width\":\"column-rule-width\",\"-moz-column-width\":\"column-width\",\"-webkit-column-width\":\"column-width\",\"-webkit-column-span\":\"column-span\",\"-webkit-columns\":\"columns\",\"-moz-box-shadow\":\"box-shadow\",\"-webkit-box-shadow\":\"box-shadow\",\"-moz-transform\":\"transform\",\"-webkit-transform\":\"transform\",\"-o-transform\":\"transform\",\"-ms-transform\":\"transform\",\"-moz-transform-origin\":\"transform-origin\",\"-webkit-transform-origin\":\"transform-origin\",\"-o-transform-origin\":\"transform-origin\",\"-ms-transform-origin\":\"transform-origin\",\"-moz-box-sizing\":\"box-sizing\",\"-webkit-box-sizing\":\"box-sizing\"};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();properties[name]||(properties[name]=[]),properties[name].push({name:event.property,value:event.value,pos:num++})}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endpage\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endkeyframerule\",endRule)}}),CSSLint.addRule({id:\"zero-units\",name:\"Disallow units for 0 values\",desc:\"You don't need to specify units when a value is 0.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){for(var parts=event.value.parts,i=0,len=parts.length;len>i;)!parts[i].units&&\"percentage\"!==parts[i].type||0!==parts[i].value||\"time\"===parts[i].type||reporter.report(\"Values of 0 shouldn't have units specified.\",parts[i].line,parts[i].col,rule),i++})}}),function(){var xmlEscape=function(str){return str&&str.constructor===String?str.replace(/[\\\"&><]/g,function(match){switch(match){case'\"':return\"&quot;\";case\"&\":return\"&amp;\";case\"<\":return\"&lt;\";case\">\":return\"&gt;\"}}):\"\"};CSSLint.addFormatter({id:\"checkstyle-xml\",name:\"Checkstyle XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><checkstyle>'},endFormat:function(){return\"</checkstyle>\"},readError:function(filename,message){return'<file name=\"'+xmlEscape(filename)+'\"><error line=\"0\" column=\"0\" severty=\"error\" message=\"'+xmlEscape(message)+'\"></error></file>'},formatResults:function(results,filename){var messages=results.messages,output=[],generateSource=function(rule){return rule&&\"name\"in rule?\"net.csslint.\"+rule.name.replace(/\\s/g,\"\"):\"\"};return messages.length>0&&(output.push('<file name=\"'+filename+'\">'),CSSLint.Util.forEach(messages,function(message){message.rollup||output.push('<error line=\"'+message.line+'\" column=\"'+message.col+'\" severity=\"'+message.type+'\"'+' message=\"'+xmlEscape(message.message)+'\" source=\"'+generateSource(message.rule)+'\"/>')}),output.push(\"</file>\")),output.join(\"\")}})}(),CSSLint.addFormatter({id:\"compact\",name:\"Compact, 'porcelain' format\",startFormat:function(){return\"\"},endFormat:function(){return\"\"},formatResults:function(results,filename,options){var messages=results.messages,output=\"\";options=options||{};var capitalize=function(str){return str.charAt(0).toUpperCase()+str.slice(1)};return 0===messages.length?options.quiet?\"\":filename+\": Lint Free!\":(CSSLint.Util.forEach(messages,function(message){output+=message.rollup?filename+\": \"+capitalize(message.type)+\" - \"+message.message+\"\\n\":filename+\": \"+\"line \"+message.line+\", col \"+message.col+\", \"+capitalize(message.type)+\" - \"+message.message+\" (\"+message.rule.id+\")\\n\"}),output)}}),CSSLint.addFormatter({id:\"csslint-xml\",name:\"CSSLint XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><csslint>'},endFormat:function(){return\"</csslint>\"},formatResults:function(results,filename){var messages=results.messages,output=[],escapeSpecialCharacters=function(str){return str&&str.constructor===String?str.replace(/\\\"/g,\"'\").replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"):\"\"};return messages.length>0&&(output.push('<file name=\"'+filename+'\">'),CSSLint.Util.forEach(messages,function(message){message.rollup?output.push('<issue severity=\"'+message.type+'\" reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>'):output.push('<issue line=\"'+message.line+'\" char=\"'+message.col+'\" severity=\"'+message.type+'\"'+' reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>')}),output.push(\"</file>\")),output.join(\"\")}}),CSSLint.addFormatter({id:\"junit-xml\",name:\"JUNIT XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><testsuites>'},endFormat:function(){return\"</testsuites>\"},formatResults:function(results,filename){var messages=results.messages,output=[],tests={error:0,failure:0},generateSource=function(rule){return rule&&\"name\"in rule?\"net.csslint.\"+rule.name.replace(/\\s/g,\"\"):\"\"},escapeSpecialCharacters=function(str){return str&&str.constructor===String?str.replace(/\\\"/g,\"'\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"):\"\"};return messages.length>0&&(messages.forEach(function(message){var type=\"warning\"===message.type?\"error\":message.type;message.rollup||(output.push('<testcase time=\"0\" name=\"'+generateSource(message.rule)+'\">'),output.push(\"<\"+type+' message=\"'+escapeSpecialCharacters(message.message)+'\"><![CDATA['+message.line+\":\"+message.col+\":\"+escapeSpecialCharacters(message.evidence)+\"]]></\"+type+\">\"),output.push(\"</testcase>\"),tests[type]+=1)}),output.unshift('<testsuite time=\"0\" tests=\"'+messages.length+'\" skipped=\"0\" errors=\"'+tests.error+'\" failures=\"'+tests.failure+'\" package=\"net.csslint\" name=\"'+filename+'\">'),output.push(\"</testsuite>\")),output.join(\"\")}}),CSSLint.addFormatter({id:\"lint-xml\",name:\"Lint XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><lint>'},endFormat:function(){return\"</lint>\"},formatResults:function(results,filename){var messages=results.messages,output=[],escapeSpecialCharacters=function(str){return str&&str.constructor===String?str.replace(/\\\"/g,\"'\").replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"):\"\"};return messages.length>0&&(output.push('<file name=\"'+filename+'\">'),CSSLint.Util.forEach(messages,function(message){message.rollup?output.push('<issue severity=\"'+message.type+'\" reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>'):output.push('<issue line=\"'+message.line+'\" char=\"'+message.col+'\" severity=\"'+message.type+'\"'+' reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>')}),output.push(\"</file>\")),output.join(\"\")}}),CSSLint.addFormatter({id:\"text\",name:\"Plain Text\",startFormat:function(){return\"\"},endFormat:function(){return\"\"},formatResults:function(results,filename,options){var messages=results.messages,output=\"\";if(options=options||{},0===messages.length)return options.quiet?\"\":\"\\n\\ncsslint: No errors in \"+filename+\".\";output=\"\\n\\ncsslint: There \",output+=1===messages.length?\"is 1 problem\":\"are \"+messages.length+\" problems\",output+=\" in \"+filename+\".\";var pos=filename.lastIndexOf(\"/\"),shortFilename=filename;return-1===pos&&(pos=filename.lastIndexOf(\"\\\\\")),pos>-1&&(shortFilename=filename.substring(pos+1)),CSSLint.Util.forEach(messages,function(message,i){output=output+\"\\n\\n\"+shortFilename,message.rollup?(output+=\"\\n\"+(i+1)+\": \"+message.type,output+=\"\\n\"+message.message):(output+=\"\\n\"+(i+1)+\": \"+message.type+\" at line \"+message.line+\", col \"+message.col,output+=\"\\n\"+message.message,output+=\"\\n\"+message.evidence)}),output}}),module.exports.CSSLint=CSSLint}),ace.define(\"ace/mode/css_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/worker/mirror\",\"ace/mode/css/csslint\"],function(acequire,exports){\"use strict\";var oop=acequire(\"../lib/oop\"),lang=acequire(\"../lib/lang\"),Mirror=acequire(\"../worker/mirror\").Mirror,CSSLint=acequire(\"./css/csslint\").CSSLint,Worker=exports.Worker=function(sender){Mirror.call(this,sender),this.setTimeout(400),this.ruleset=null,this.setDisabledRules(\"ids|order-alphabetical\"),this.setInfoRules(\"adjoining-classes|qualified-headings|zero-units|gradients|import|outline-none|vendor-prefix\")};oop.inherits(Worker,Mirror),function(){this.setInfoRules=function(ruleNames){\"string\"==typeof ruleNames&&(ruleNames=ruleNames.split(\"|\")),this.infoRules=lang.arrayToMap(ruleNames),this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.setDisabledRules=function(ruleNames){if(ruleNames){\"string\"==typeof ruleNames&&(ruleNames=ruleNames.split(\"|\"));\nvar all={};CSSLint.getRules().forEach(function(x){all[x.id]=!0}),ruleNames.forEach(function(x){delete all[x]}),this.ruleset=all}else this.ruleset=null;this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.onUpdate=function(){var value=this.doc.getValue();if(!value)return this.sender.emit(\"annotate\",[]);var infoRules=this.infoRules,result=CSSLint.verify(value,this.ruleset);this.sender.emit(\"annotate\",result.messages.map(function(msg){return{row:msg.line-1,column:msg.col-1,text:msg.message,type:infoRules[msg.rule.id]?\"info\":msg.type,rule:msg.rule.name}}))}}.call(Worker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ }),

/***/ "./node_modules/brace/worker/html.js":
/*!*******************************************!*\
  !*** ./node_modules/brace/worker/html.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.id = 'ace/mode/html_worker';
module.exports.src = "\"no use strict\";!function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}}(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}if(\"[object Object]\"!==Object.prototype.toString.call(obj))return obj;copy={};for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/html/saxparser\",[\"require\",\"exports\",\"module\"],function(acequire,exports,module){module.exports=function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=\"function\"==typeof acequire&&acequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw Error(\"Cannot find module '\"+o+\"'\")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i=\"function\"==typeof acequire&&acequire,o=0;r.length>o;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){function isScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI?\"applet\"===node.localName||\"caption\"===node.localName||\"marquee\"===node.localName||\"object\"===node.localName||\"table\"===node.localName||\"td\"===node.localName||\"th\"===node.localName:\"http://www.w3.org/1998/Math/MathML\"===node.namespaceURI?\"mi\"===node.localName||\"mo\"===node.localName||\"mn\"===node.localName||\"ms\"===node.localName||\"mtext\"===node.localName||\"annotation-xml\"===node.localName:\"http://www.w3.org/2000/svg\"===node.namespaceURI?\"foreignObject\"===node.localName||\"desc\"===node.localName||\"title\"===node.localName:void 0}function isListItemScopeMarker(node){return isScopeMarker(node)||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"ol\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"ul\"===node.localName}function isTableScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"table\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"html\"===node.localName}function isTableBodyScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"tbody\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"tfoot\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"thead\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"html\"===node.localName}function isTableRowScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"tr\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"html\"===node.localName}function isButtonScopeMarker(node){return isScopeMarker(node)||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"button\"===node.localName}function isSelectScopeMarker(node){return!(\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"optgroup\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"option\"===node.localName)}function ElementStack(){this.elements=[],this.rootNode=null,this.headElement=null,this.bodyElement=null}ElementStack.prototype._inScope=function(localName,isMarker){for(var i=this.elements.length-1;i>=0;i--){var node=this.elements[i];if(node.localName===localName)return!0;if(isMarker(node))return!1}},ElementStack.prototype.push=function(item){this.elements.push(item)},ElementStack.prototype.pushHtmlElement=function(item){this.rootNode=item.node,this.push(item)},ElementStack.prototype.pushHeadElement=function(item){this.headElement=item.node,this.push(item)},ElementStack.prototype.pushBodyElement=function(item){this.bodyElement=item.node,this.push(item)},ElementStack.prototype.pop=function(){return this.elements.pop()},ElementStack.prototype.remove=function(item){this.elements.splice(this.elements.indexOf(item),1)},ElementStack.prototype.popUntilPopped=function(localName){var element;do element=this.pop();while(element.localName!=localName)},ElementStack.prototype.popUntilTableScopeMarker=function(){for(;!isTableScopeMarker(this.top);)this.pop()},ElementStack.prototype.popUntilTableBodyScopeMarker=function(){for(;!isTableBodyScopeMarker(this.top);)this.pop()},ElementStack.prototype.popUntilTableRowScopeMarker=function(){for(;!isTableRowScopeMarker(this.top);)this.pop()},ElementStack.prototype.item=function(index){return this.elements[index]},ElementStack.prototype.contains=function(element){return-1!==this.elements.indexOf(element)},ElementStack.prototype.inScope=function(localName){return this._inScope(localName,isScopeMarker)},ElementStack.prototype.inListItemScope=function(localName){return this._inScope(localName,isListItemScopeMarker)},ElementStack.prototype.inTableScope=function(localName){return this._inScope(localName,isTableScopeMarker)},ElementStack.prototype.inButtonScope=function(localName){return this._inScope(localName,isButtonScopeMarker)},ElementStack.prototype.inSelectScope=function(localName){return this._inScope(localName,isSelectScopeMarker)},ElementStack.prototype.hasNumberedHeaderElementInScope=function(){for(var i=this.elements.length-1;i>=0;i--){var node=this.elements[i];if(node.isNumberedHeader())return!0;if(isScopeMarker(node))return!1}},ElementStack.prototype.furthestBlockForFormattingElement=function(element){for(var furthestBlock=null,i=this.elements.length-1;i>=0;i--){var node=this.elements[i];\nif(node.node===element)break;node.isSpecial()&&(furthestBlock=node)}return furthestBlock},ElementStack.prototype.findIndex=function(localName){for(var i=this.elements.length-1;i>=0;i--)if(this.elements[i].localName==localName)return i;return-1},ElementStack.prototype.remove_openElements_until=function(callback){for(var element,finished=!1;!finished;)element=this.elements.pop(),finished=callback(element);return element},Object.defineProperty(ElementStack.prototype,\"top\",{get:function(){return this.elements[this.elements.length-1]}}),Object.defineProperty(ElementStack.prototype,\"length\",{get:function(){return this.elements.length}}),exports.ElementStack=ElementStack},{}],2:[function(_dereq_,module,exports){function isAlphaNumeric(c){return c>=\"0\"&&\"9\">=c||c>=\"a\"&&\"z\">=c||c>=\"A\"&&\"Z\">=c}function isHexDigit(c){return c>=\"0\"&&\"9\">=c||c>=\"a\"&&\"f\">=c||c>=\"A\"&&\"F\">=c}function isDecimalDigit(c){return c>=\"0\"&&\"9\">=c}var entities=_dereq_(\"html5-entities\"),InputStream=_dereq_(\"./InputStream\").InputStream,namedEntityPrefixes={};Object.keys(entities).forEach(function(entityKey){for(var i=0;entityKey.length>i;i++)namedEntityPrefixes[entityKey.substring(0,i+1)]=!0});var EntityParser={};EntityParser.consumeEntity=function(buffer,tokenizer,additionalAllowedCharacter){var decodedCharacter=\"\",consumedCharacters=\"\",ch=buffer.char();if(ch===InputStream.EOF)return!1;if(consumedCharacters+=ch,\"\t\"==ch||\"\\n\"==ch||\"\u000b\"==ch||\" \"==ch||\"<\"==ch||\"&\"==ch)return buffer.unget(consumedCharacters),!1;if(additionalAllowedCharacter===ch)return buffer.unget(consumedCharacters),!1;if(\"#\"==ch){if(ch=buffer.shift(1),ch===InputStream.EOF)return tokenizer._parseError(\"expected-numeric-entity-but-got-eof\"),buffer.unget(consumedCharacters),!1;consumedCharacters+=ch;var radix=10,isDigit=isDecimalDigit;if(\"x\"==ch||\"X\"==ch){if(radix=16,isDigit=isHexDigit,ch=buffer.shift(1),ch===InputStream.EOF)return tokenizer._parseError(\"expected-numeric-entity-but-got-eof\"),buffer.unget(consumedCharacters),!1;consumedCharacters+=ch}if(isDigit(ch)){for(var code=\"\";ch!==InputStream.EOF&&isDigit(ch);)code+=ch,ch=buffer.char();code=parseInt(code,radix);var replacement=this.replaceEntityNumbers(code);if(replacement&&(tokenizer._parseError(\"invalid-numeric-entity-replaced\"),code=replacement),code>65535&&1114111>=code){code-=65536;var first=((1047552&code)>>10)+55296,second=(1023&code)+56320;decodedCharacter=String.fromCharCode(first,second)}else decodedCharacter=String.fromCharCode(code);return\";\"!==ch&&(tokenizer._parseError(\"numeric-entity-without-semicolon\"),buffer.unget(ch)),decodedCharacter}return buffer.unget(consumedCharacters),tokenizer._parseError(\"expected-numeric-entity\"),!1}if(ch>=\"a\"&&\"z\">=ch||ch>=\"A\"&&\"Z\">=ch){for(var mostRecentMatch=\"\";namedEntityPrefixes[consumedCharacters]&&(entities[consumedCharacters]&&(mostRecentMatch=consumedCharacters),\";\"!=ch)&&(ch=buffer.char(),ch!==InputStream.EOF);)consumedCharacters+=ch;return mostRecentMatch?(decodedCharacter=entities[mostRecentMatch],\";\"===ch||!additionalAllowedCharacter||!isAlphaNumeric(ch)&&\"=\"!==ch?(consumedCharacters.length>mostRecentMatch.length&&buffer.unget(consumedCharacters.substring(mostRecentMatch.length)),\";\"!==ch&&tokenizer._parseError(\"named-entity-without-semicolon\"),decodedCharacter):(buffer.unget(consumedCharacters),!1)):(tokenizer._parseError(\"expected-named-entity\"),buffer.unget(consumedCharacters),!1)}},EntityParser.replaceEntityNumbers=function(c){switch(c){case 0:return 65533;case 19:return 16;case 128:return 8364;case 129:return 129;case 130:return 8218;case 131:return 402;case 132:return 8222;case 133:return 8230;case 134:return 8224;case 135:return 8225;case 136:return 710;case 137:return 8240;case 138:return 352;case 139:return 8249;case 140:return 338;case 141:return 141;case 142:return 381;case 143:return 143;case 144:return 144;case 145:return 8216;case 146:return 8217;case 147:return 8220;case 148:return 8221;case 149:return 8226;case 150:return 8211;case 151:return 8212;case 152:return 732;case 153:return 8482;case 154:return 353;case 155:return 8250;case 156:return 339;case 157:return 157;case 158:return 382;case 159:return 376;default:if(c>=55296&&57343>=c||c>1114111)return 65533;if(c>=1&&8>=c||c>=14&&31>=c||c>=127&&159>=c||c>=64976&&65007>=c||11==c||65534==c||131070==c||3145726==c||196607==c||262142==c||262143==c||327678==c||327679==c||393214==c||393215==c||458750==c||458751==c||524286==c||524287==c||589822==c||589823==c||655358==c||655359==c||720894==c||720895==c||786430==c||786431==c||851966==c||851967==c||917502==c||917503==c||983038==c||983039==c||1048574==c||1048575==c||1114110==c||1114111==c)return c}},exports.EntityParser=EntityParser},{\"./InputStream\":3,\"html5-entities\":12}],3:[function(_dereq_,module,exports){function InputStream(){this.data=\"\",this.start=0,this.committed=0,this.eof=!1,this.lastLocation={line:0,column:0}}InputStream.EOF=-1,InputStream.DRAIN=-2,InputStream.prototype={slice:function(){if(this.start>=this.data.length){if(!this.eof)throw InputStream.DRAIN;return InputStream.EOF}return this.data.slice(this.start,this.data.length)},\"char\":function(){if(!this.eof&&this.start>=this.data.length-1)throw InputStream.DRAIN;if(this.start>=this.data.length)return InputStream.EOF;var ch=this.data[this.start++];return\"\\r\"===ch&&(ch=\"\\n\"),ch},advance:function(amount){if(this.start+=amount,this.start>=this.data.length){if(!this.eof)throw InputStream.DRAIN;return InputStream.EOF}this.committed>this.data.length/2&&(this.lastLocation=this.location(),this.data=this.data.slice(this.committed),this.start=this.start-this.committed,this.committed=0)},matchWhile:function(re){if(this.eof&&this.start>=this.data.length)return\"\";var r=RegExp(\"^\"+re+\"+\"),m=r.exec(this.slice());if(m){if(!this.eof&&m[0].length==this.data.length-this.start)throw InputStream.DRAIN;return this.advance(m[0].length),m[0]}return\"\"},matchUntil:function(re){var m,s;if(s=this.slice(),s===InputStream.EOF)return\"\";if(m=RegExp(re+(this.eof?\"|$\":\"\")).exec(s)){var t=this.data.slice(this.start,this.start+m.index);return this.advance(m.index),t.replace(/\\r/g,\"\\n\").replace(/\\n{2,}/g,\"\\n\")}throw InputStream.DRAIN},append:function(data){this.data+=data},shift:function(n){if(!this.eof&&this.start+n>=this.data.length)throw InputStream.DRAIN;if(this.eof&&this.start>=this.data.length)return InputStream.EOF;var d=\"\"+this.data.slice(this.start,this.start+n);return this.advance(Math.min(n,this.data.length-this.start)),d},peek:function(n){if(!this.eof&&this.start+n>=this.data.length)throw InputStream.DRAIN;return this.eof&&this.start>=this.data.length?InputStream.EOF:\"\"+this.data.slice(this.start,Math.min(this.start+n,this.data.length))},length:function(){return this.data.length-this.start-1},unget:function(d){d!==InputStream.EOF&&(this.start-=d.length)},undo:function(){this.start=this.committed},commit:function(){this.committed=this.start},location:function(){var lastLine=this.lastLocation.line,lastColumn=this.lastLocation.column,read=this.data.slice(0,this.committed),newlines=read.match(/\\n/g),line=newlines?lastLine+newlines.length:lastLine,column=newlines?read.length-read.lastIndexOf(\"\\n\")-1:lastColumn+read.length;return{line:line,column:column}}},exports.InputStream=InputStream},{}],4:[function(_dereq_,module,exports){function StackItem(namespaceURI,localName,attributes,node){this.localName=localName,this.namespaceURI=namespaceURI,this.attributes=attributes,this.node=node}function getAttribute(item,name){for(var i=0;item.attributes.length>i;i++)if(item.attributes[i].nodeName==name)return item.attributes[i].nodeValue;return null}var SpecialElements={\"http://www.w3.org/1999/xhtml\":[\"address\",\"applet\",\"area\",\"article\",\"aside\",\"base\",\"basefont\",\"bgsound\",\"blockquote\",\"body\",\"br\",\"button\",\"caption\",\"center\",\"col\",\"colgroup\",\"dd\",\"details\",\"dir\",\"div\",\"dl\",\"dt\",\"embed\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"frame\",\"frameset\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"iframe\",\"img\",\"input\",\"isindex\",\"li\",\"link\",\"listing\",\"main\",\"marquee\",\"menu\",\"menuitem\",\"meta\",\"nav\",\"noembed\",\"noframes\",\"noscript\",\"object\",\"ol\",\"p\",\"param\",\"plaintext\",\"pre\",\"script\",\"section\",\"select\",\"source\",\"style\",\"summary\",\"table\",\"tbody\",\"td\",\"textarea\",\"tfoot\",\"th\",\"thead\",\"title\",\"tr\",\"track\",\"ul\",\"wbr\",\"xmp\"],\"http://www.w3.org/1998/Math/MathML\":[\"mi\",\"mo\",\"mn\",\"ms\",\"mtext\",\"annotation-xml\"],\"http://www.w3.org/2000/svg\":[\"foreignObject\",\"desc\",\"title\"]};StackItem.prototype.isSpecial=function(){return this.namespaceURI in SpecialElements&&SpecialElements[this.namespaceURI].indexOf(this.localName)>-1},StackItem.prototype.isFosterParenting=function(){return\"http://www.w3.org/1999/xhtml\"===this.namespaceURI?\"table\"===this.localName||\"tbody\"===this.localName||\"tfoot\"===this.localName||\"thead\"===this.localName||\"tr\"===this.localName:!1},StackItem.prototype.isNumberedHeader=function(){return\"http://www.w3.org/1999/xhtml\"===this.namespaceURI?\"h1\"===this.localName||\"h2\"===this.localName||\"h3\"===this.localName||\"h4\"===this.localName||\"h5\"===this.localName||\"h6\"===this.localName:!1},StackItem.prototype.isForeign=function(){return\"http://www.w3.org/1999/xhtml\"!=this.namespaceURI},StackItem.prototype.isHtmlIntegrationPoint=function(){if(\"http://www.w3.org/1998/Math/MathML\"===this.namespaceURI){if(\"annotation-xml\"!==this.localName)return!1;var encoding=getAttribute(this,\"encoding\");return encoding?(encoding=encoding.toLowerCase(),\"text/html\"===encoding||\"application/xhtml+xml\"===encoding):!1}return\"http://www.w3.org/2000/svg\"===this.namespaceURI?\"foreignObject\"===this.localName||\"desc\"===this.localName||\"title\"===this.localName:!1},StackItem.prototype.isMathMLTextIntegrationPoint=function(){return\"http://www.w3.org/1998/Math/MathML\"===this.namespaceURI?\"mi\"===this.localName||\"mo\"===this.localName||\"mn\"===this.localName||\"ms\"===this.localName||\"mtext\"===this.localName:!1},exports.StackItem=StackItem},{}],5:[function(_dereq_,module,exports){function isWhitespace(c){return\" \"===c||\"\\n\"===c||\"\t\"===c||\"\\r\"===c||\"\\f\"===c}function isAlpha(c){return c>=\"A\"&&\"Z\">=c||c>=\"a\"&&\"z\">=c}function Tokenizer(tokenHandler){this._tokenHandler=tokenHandler,this._state=Tokenizer.DATA,this._inputStream=new InputStream,this._currentToken=null,this._temporaryBuffer=\"\",this._additionalAllowedCharacter=\"\"}var InputStream=_dereq_(\"./InputStream\").InputStream,EntityParser=_dereq_(\"./EntityParser\").EntityParser;Tokenizer.prototype._parseError=function(code,args){this._tokenHandler.parseError(code,args)},Tokenizer.prototype._emitToken=function(token){if(\"StartTag\"===token.type)for(var i=1;token.data.length>i;i++)token.data[i].nodeName||token.data.splice(i--,1);else\"EndTag\"===token.type&&(token.selfClosing&&this._parseError(\"self-closing-flag-on-end-tag\"),0!==token.data.length&&this._parseError(\"attributes-in-end-tag\"));this._tokenHandler.processToken(token),\"StartTag\"===token.type&&token.selfClosing&&!this._tokenHandler.isSelfClosingFlagAcknowledged()&&this._parseError(\"non-void-element-with-trailing-solidus\",{name:token.name})},Tokenizer.prototype._emitCurrentToken=function(){this._state=Tokenizer.DATA,this._emitToken(this._currentToken)},Tokenizer.prototype._currentAttribute=function(){return this._currentToken.data[this._currentToken.data.length-1]},Tokenizer.prototype.setState=function(state){this._state=state},Tokenizer.prototype.tokenize=function(source){function data_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"&\"===data)tokenizer.setState(character_reference_in_data_state);else if(\"<\"===data)tokenizer.setState(tag_open_state);else if(\"\\0\"===data)tokenizer._emitToken({type:\"Characters\",data:data}),buffer.commit();else{var chars=buffer.matchUntil(\"&|<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars}),buffer.commit()}return!0}function character_reference_in_data_state(buffer){var character=EntityParser.consumeEntity(buffer,tokenizer);return tokenizer.setState(data_state),tokenizer._emitToken({type:\"Characters\",data:character||\"&\"}),!0}function rcdata_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"&\"===data)tokenizer.setState(character_reference_in_rcdata_state);else if(\"<\"===data)tokenizer.setState(rcdata_less_than_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"&|<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars}),buffer.commit()}return!0}function character_reference_in_rcdata_state(buffer){var character=EntityParser.consumeEntity(buffer,tokenizer);return tokenizer.setState(rcdata_state),tokenizer._emitToken({type:\"Characters\",data:character||\"&\"}),!0}function rawtext_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"<\"===data)tokenizer.setState(rawtext_less_than_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function plaintext_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function script_data_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"<\"===data)tokenizer.setState(script_data_less_than_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function rcdata_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(rcdata_end_tag_open_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(rcdata_state)),!0}function rcdata_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer+=data,tokenizer.setState(rcdata_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(rcdata_state)),!0}function rcdata_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(rcdata_state)),!0}function rawtext_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(rawtext_end_tag_open_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(rawtext_state)),!0}function rawtext_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer+=data,tokenizer.setState(rawtext_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(rawtext_state)),!0}function rawtext_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(rawtext_state)),!0}function script_data_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(script_data_end_tag_open_state)):\"!\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<!\"}),tokenizer.setState(script_data_escape_start_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer+=data,tokenizer.setState(script_data_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer._emitCurrentToken()):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_escape_start_state(buffer){var data=buffer.char();return\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escape_start_dash_state)):(buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_escape_start_dash_state(buffer){var data=buffer.char();return\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escaped_dash_dash_state)):(buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_escaped_state(buffer){var data=buffer.char();if(data===InputStream.EOF)buffer.unget(data),tokenizer.setState(data_state);else if(\"-\"===data)tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escaped_dash_state);else if(\"<\"===data)tokenizer.setState(script_data_escaped_less_then_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"<|-|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function script_data_escaped_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escaped_dash_dash_state)):\"<\"===data?tokenizer.setState(script_data_escaped_less_then_sign_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_dash_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"<\"===data?tokenizer.setState(script_data_escaped_less_then_sign_state):\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:\">\"}),tokenizer.setState(script_data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_less_then_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(script_data_escaped_end_tag_open_state)):isAlpha(data)?(tokenizer._emitToken({type:\"Characters\",data:\"<\"+data}),this._temporaryBuffer=data,tokenizer.setState(script_data_double_escape_start_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer=data,tokenizer.setState(script_data_escaped_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_double_escape_start_state(buffer){var data=buffer.char();return isWhitespace(data)||\"/\"===data||\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:data}),\"script\"===this._temporaryBuffer.toLowerCase()?tokenizer.setState(script_data_double_escaped_state):tokenizer.setState(script_data_escaped_state)):isAlpha(data)?(tokenizer._emitToken({type:\"Characters\",data:data}),this._temporaryBuffer+=data,buffer.commit()):(buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_double_escaped_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_double_escaped_dash_state)):\"<\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),tokenizer.setState(script_data_double_escaped_less_than_sign_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:data}),buffer.commit()),!0}function script_data_double_escaped_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_double_escaped_dash_dash_state)):\"<\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),tokenizer.setState(script_data_double_escaped_less_than_sign_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_double_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_double_escaped_state)),!0}function script_data_double_escaped_dash_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),buffer.commit()):\"<\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),tokenizer.setState(script_data_double_escaped_less_than_sign_state)):\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:\">\"}),tokenizer.setState(script_data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_double_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_double_escaped_state)),!0}function script_data_double_escaped_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"/\"}),this._temporaryBuffer=\"\",tokenizer.setState(script_data_double_escape_end_state)):(buffer.unget(data),tokenizer.setState(script_data_double_escaped_state)),!0}function script_data_double_escape_end_state(buffer){var data=buffer.char();return isWhitespace(data)||\"/\"===data||\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:data}),\"script\"===this._temporaryBuffer.toLowerCase()?tokenizer.setState(script_data_escaped_state):tokenizer.setState(script_data_double_escaped_state)):isAlpha(data)?(tokenizer._emitToken({type:\"Characters\",data:data}),this._temporaryBuffer+=data,buffer.commit()):(buffer.unget(data),tokenizer.setState(script_data_double_escaped_state)),!0}function tag_open_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"bare-less-than-sign-at-eof\"),tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(data_state)):isAlpha(data)?(tokenizer._currentToken={type:\"StartTag\",name:data.toLowerCase(),data:[]},tokenizer.setState(tag_name_state)):\"!\"===data?tokenizer.setState(markup_declaration_open_state):\"/\"===data?tokenizer.setState(close_tag_open_state):\">\"===data?(tokenizer._parseError(\"expected-tag-name-but-got-right-bracket\"),tokenizer._emitToken({type:\"Characters\",data:\"<>\"}),tokenizer.setState(data_state)):\"?\"===data?(tokenizer._parseError(\"expected-tag-name-but-got-question-mark\"),buffer.unget(data),tokenizer.setState(bogus_comment_state)):(tokenizer._parseError(\"expected-tag-name\"),tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(data_state)),!0}function close_tag_open_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"expected-closing-tag-but-got-eof\"),tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(data_state)):isAlpha(data)?(tokenizer._currentToken={type:\"EndTag\",name:data.toLowerCase(),data:[]},tokenizer.setState(tag_name_state)):\">\"===data?(tokenizer._parseError(\"expected-closing-tag-but-got-right-bracket\"),tokenizer.setState(data_state)):(tokenizer._parseError(\"expected-closing-tag-but-got-char\",{data:data}),buffer.unget(data),tokenizer.setState(bogus_comment_state)),!0}function tag_name_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-tag-name\"),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(before_attribute_name_state):isAlpha(data)?tokenizer._currentToken.name+=data.toLowerCase():\">\"===data?tokenizer._emitCurrentToken():\"/\"===data?tokenizer.setState(self_closing_tag_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.name+=\"�\"):tokenizer._currentToken.name+=data,buffer.commit(),!0}function before_attribute_name_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"expected-attribute-name-but-got-eof\"),buffer.unget(data),tokenizer.setState(data_state);else{if(isWhitespace(data))return!0;isAlpha(data)?(tokenizer._currentToken.data.push({nodeName:data.toLowerCase(),nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\">\"===data?tokenizer._emitCurrentToken():\"/\"===data?tokenizer.setState(self_closing_tag_state):\"'\"===data||'\"'===data||\"=\"===data||\"<\"===data?(tokenizer._parseError(\"invalid-character-in-attribute-name\"),tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data.push({nodeName:\"�\",nodeValue:\"\"})):(tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state))}return!0}function attribute_name_state(buffer){var data=buffer.char(),leavingThisState=!0,shouldEmit=!1;if(data===InputStream.EOF?(tokenizer._parseError(\"eof-in-attribute-name\"),buffer.unget(data),tokenizer.setState(data_state),shouldEmit=!0):\"=\"===data?tokenizer.setState(before_attribute_value_state):isAlpha(data)?(tokenizer._currentAttribute().nodeName+=data.toLowerCase(),leavingThisState=!1):\">\"===data?shouldEmit=!0:isWhitespace(data)?tokenizer.setState(after_attribute_name_state):\"/\"===data?tokenizer.setState(self_closing_tag_state):\"'\"===data||'\"'===data?(tokenizer._parseError(\"invalid-character-in-attribute-name\"),tokenizer._currentAttribute().nodeName+=data,leavingThisState=!1):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeName+=\"�\"):(tokenizer._currentAttribute().nodeName+=data,leavingThisState=!1),leavingThisState){for(var attributes=tokenizer._currentToken.data,currentAttribute=attributes[attributes.length-1],i=attributes.length-2;i>=0;i--)if(currentAttribute.nodeName===attributes[i].nodeName){tokenizer._parseError(\"duplicate-attribute\",{name:currentAttribute.nodeName}),currentAttribute.nodeName=null;break}shouldEmit&&tokenizer._emitCurrentToken()}else buffer.commit();return!0}function after_attribute_name_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"expected-end-of-tag-but-got-eof\"),buffer.unget(data),tokenizer.setState(data_state);else{if(isWhitespace(data))return!0;\"=\"===data?tokenizer.setState(before_attribute_value_state):\">\"===data?tokenizer._emitCurrentToken():isAlpha(data)?(tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\"/\"===data?tokenizer.setState(self_closing_tag_state):\"'\"===data||'\"'===data||\"<\"===data?(tokenizer._parseError(\"invalid-character-after-attribute-name\"),tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data.push({nodeName:\"�\",nodeValue:\"\"})):(tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state))}return!0}function before_attribute_value_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"expected-attribute-value-but-got-eof\"),buffer.unget(data),tokenizer.setState(data_state);else{if(isWhitespace(data))return!0;'\"'===data?tokenizer.setState(attribute_value_double_quoted_state):\"&\"===data?(tokenizer.setState(attribute_value_unquoted_state),buffer.unget(data)):\"'\"===data?tokenizer.setState(attribute_value_single_quoted_state):\">\"===data?(tokenizer._parseError(\"expected-attribute-value-but-got-right-bracket\"),tokenizer._emitCurrentToken()):\"=\"===data||\"<\"===data||\"`\"===data?(tokenizer._parseError(\"unexpected-character-in-unquoted-attribute-value\"),tokenizer._currentAttribute().nodeValue+=data,tokenizer.setState(attribute_value_unquoted_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\"):(tokenizer._currentAttribute().nodeValue+=data,tokenizer.setState(attribute_value_unquoted_state))}return!0\n}function attribute_value_double_quoted_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"eof-in-attribute-value-double-quote\"),buffer.unget(data),tokenizer.setState(data_state);else if('\"'===data)tokenizer.setState(after_attribute_value_state);else if(\"&\"===data)this._additionalAllowedCharacter='\"',tokenizer.setState(character_reference_in_attribute_value_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\";else{var s=buffer.matchUntil('[\\0\"&]');data+=s,tokenizer._currentAttribute().nodeValue+=data}return!0}function attribute_value_single_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-attribute-value-single-quote\"),buffer.unget(data),tokenizer.setState(data_state)):\"'\"===data?tokenizer.setState(after_attribute_value_state):\"&\"===data?(this._additionalAllowedCharacter=\"'\",tokenizer.setState(character_reference_in_attribute_value_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\"):tokenizer._currentAttribute().nodeValue+=data+buffer.matchUntil(\"\\0|['&]\"),!0}function attribute_value_unquoted_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"eof-after-attribute-value\"),buffer.unget(data),tokenizer.setState(data_state);else if(isWhitespace(data))tokenizer.setState(before_attribute_name_state);else if(\"&\"===data)this._additionalAllowedCharacter=\">\",tokenizer.setState(character_reference_in_attribute_value_state);else if(\">\"===data)tokenizer._emitCurrentToken();else if('\"'===data||\"'\"===data||\"=\"===data||\"`\"===data||\"<\"===data)tokenizer._parseError(\"unexpected-character-in-unquoted-attribute-value\"),tokenizer._currentAttribute().nodeValue+=data,buffer.commit();else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\";else{var o=buffer.matchUntil(\"\\0|[\t\\n\u000b\\f \\r&<>\\\"'=`]\");o===InputStream.EOF&&(tokenizer._parseError(\"eof-in-attribute-value-no-quotes\"),tokenizer._emitCurrentToken()),buffer.commit(),tokenizer._currentAttribute().nodeValue+=data+o}return!0}function character_reference_in_attribute_value_state(buffer){var character=EntityParser.consumeEntity(buffer,tokenizer,this._additionalAllowedCharacter);return this._currentAttribute().nodeValue+=character||\"&\",'\"'===this._additionalAllowedCharacter?tokenizer.setState(attribute_value_double_quoted_state):\"'\"===this._additionalAllowedCharacter?tokenizer.setState(attribute_value_single_quoted_state):\">\"===this._additionalAllowedCharacter&&tokenizer.setState(attribute_value_unquoted_state),!0}function after_attribute_value_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-after-attribute-value\"),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(before_attribute_name_state):\">\"===data?(tokenizer.setState(data_state),tokenizer._emitCurrentToken()):\"/\"===data?tokenizer.setState(self_closing_tag_state):(tokenizer._parseError(\"unexpected-character-after-attribute-value\"),buffer.unget(data),tokenizer.setState(before_attribute_name_state)),!0}function self_closing_tag_state(buffer){var c=buffer.char();return c===InputStream.EOF?(tokenizer._parseError(\"unexpected-eof-after-solidus-in-tag\"),buffer.unget(c),tokenizer.setState(data_state)):\">\"===c?(tokenizer._currentToken.selfClosing=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(tokenizer._parseError(\"unexpected-character-after-solidus-in-tag\"),buffer.unget(c),tokenizer.setState(before_attribute_name_state)),!0}function bogus_comment_state(buffer){var data=buffer.matchUntil(\">\");return data=data.replace(/\\u0000/g,\"�\"),buffer.char(),tokenizer._emitToken({type:\"Comment\",data:data}),tokenizer.setState(data_state),!0}function markup_declaration_open_state(buffer){var chars=buffer.shift(2);if(\"--\"===chars)tokenizer._currentToken={type:\"Comment\",data:\"\"},tokenizer.setState(comment_start_state);else{var newchars=buffer.shift(5);if(newchars===InputStream.EOF||chars===InputStream.EOF)return tokenizer._parseError(\"expected-dashes-or-doctype\"),tokenizer.setState(bogus_comment_state),buffer.unget(chars),!0;chars+=newchars,\"DOCTYPE\"===chars.toUpperCase()?(tokenizer._currentToken={type:\"Doctype\",name:\"\",publicId:null,systemId:null,forceQuirks:!1},tokenizer.setState(doctype_state)):tokenizer._tokenHandler.isCdataSectionAllowed()&&\"[CDATA[\"===chars?tokenizer.setState(cdata_section_state):(tokenizer._parseError(\"expected-dashes-or-doctype\"),buffer.unget(chars),tokenizer.setState(bogus_comment_state))}return!0}function cdata_section_state(buffer){var data=buffer.matchUntil(\"]]>\");return buffer.shift(3),data&&tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(data_state),!0}function comment_start_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_start_dash_state):\">\"===data?(tokenizer._parseError(\"incorrect-comment\"),tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"�\"):(tokenizer._currentToken.data+=data,tokenizer.setState(comment_state)),!0}function comment_start_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_end_state):\">\"===data?(tokenizer._parseError(\"incorrect-comment\"),tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"�\"):(tokenizer._currentToken.data+=\"-\"+data,tokenizer.setState(comment_state)),!0}function comment_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_end_dash_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"�\"):(tokenizer._currentToken.data+=data,buffer.commit()),!0}function comment_end_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment-end-dash\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_end_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"-�\",tokenizer.setState(comment_state)):(tokenizer._currentToken.data+=\"-\"+data+buffer.matchUntil(\"\\0|-\"),buffer.char()),!0}function comment_end_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment-double-dash\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\">\"===data?(tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"!\"===data?(tokenizer._parseError(\"unexpected-bang-after-double-dash-in-comment\"),tokenizer.setState(comment_end_bang_state)):\"-\"===data?(tokenizer._parseError(\"unexpected-dash-after-double-dash-in-comment\"),tokenizer._currentToken.data+=data):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"--�\",tokenizer.setState(comment_state)):(tokenizer._parseError(\"unexpected-char-in-comment\"),tokenizer._currentToken.data+=\"--\"+data,tokenizer.setState(comment_state)),!0}function comment_end_bang_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment-end-bang-state\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\">\"===data?(tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._currentToken.data+=\"--!\",tokenizer.setState(comment_end_dash_state)):(tokenizer._currentToken.data+=\"--!\"+data,tokenizer.setState(comment_state)),!0}function doctype_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"expected-doctype-name-but-got-eof\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)?tokenizer.setState(before_doctype_name_state):(tokenizer._parseError(\"need-space-after-doctype\"),buffer.unget(data),tokenizer.setState(before_doctype_name_state)),!0}function before_doctype_name_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"expected-doctype-name-but-got-eof\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)||(\">\"===data?(tokenizer._parseError(\"expected-doctype-name-but-got-right-bracket\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(isAlpha(data)&&(data=data.toLowerCase()),tokenizer._currentToken.name=data,tokenizer.setState(doctype_name_state))),!0}function doctype_name_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer._parseError(\"eof-in-doctype-name\"),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)?tokenizer.setState(after_doctype_name_state):\">\"===data?(tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(isAlpha(data)&&(data=data.toLowerCase()),tokenizer._currentToken.name+=data,buffer.commit()),!0}function after_doctype_name_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer._parseError(\"eof-in-doctype\"),tokenizer.setState(data_state),tokenizer._emitCurrentToken();else if(isWhitespace(data));else if(\">\"===data)tokenizer.setState(data_state),tokenizer._emitCurrentToken();else{if([\"p\",\"P\"].indexOf(data)>-1){var expected=[[\"u\",\"U\"],[\"b\",\"B\"],[\"l\",\"L\"],[\"i\",\"I\"],[\"c\",\"C\"]],matched=expected.every(function(expected){return data=buffer.char(),expected.indexOf(data)>-1});if(matched)return tokenizer.setState(after_doctype_public_keyword_state),!0}else if([\"s\",\"S\"].indexOf(data)>-1){var expected=[[\"y\",\"Y\"],[\"s\",\"S\"],[\"t\",\"T\"],[\"e\",\"E\"],[\"m\",\"M\"]],matched=expected.every(function(expected){return data=buffer.char(),expected.indexOf(data)>-1});if(matched)return tokenizer.setState(after_doctype_system_keyword_state),!0}buffer.unget(data),tokenizer._currentToken.forceQuirks=!0,data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(tokenizer._parseError(\"expected-space-or-right-bracket-in-doctype\",{data:data}),tokenizer.setState(bogus_doctype_state))}return!0}function after_doctype_public_keyword_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)?tokenizer.setState(before_doctype_public_identifier_state):\"'\"===data||'\"'===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),buffer.unget(data),tokenizer.setState(before_doctype_public_identifier_state)):(buffer.unget(data),tokenizer.setState(before_doctype_public_identifier_state)),!0}function before_doctype_public_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)||('\"'===data?(tokenizer._currentToken.publicId=\"\",tokenizer.setState(doctype_public_identifier_double_quoted_state)):\"'\"===data?(tokenizer._currentToken.publicId=\"\",tokenizer.setState(doctype_public_identifier_single_quoted_state)):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state))),!0}function doctype_public_identifier_double_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):'\"'===data?tokenizer.setState(after_doctype_public_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):tokenizer._currentToken.publicId+=data,!0}function doctype_public_identifier_single_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):\"'\"===data?tokenizer.setState(after_doctype_public_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):tokenizer._currentToken.publicId+=data,!0}function after_doctype_public_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(between_doctype_public_and_system_identifiers_state):\">\"===data?(tokenizer.setState(data_state),tokenizer._emitCurrentToken()):'\"'===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_double_quoted_state)):\"'\"===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_single_quoted_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state)),!0}function between_doctype_public_and_system_identifiers_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)||(\">\"===data?(tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):'\"'===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_double_quoted_state)):\"'\"===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_single_quoted_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state))),!0}function after_doctype_system_keyword_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(before_doctype_system_identifier_state):\"'\"===data||'\"'===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),buffer.unget(data),tokenizer.setState(before_doctype_system_identifier_state)):(buffer.unget(data),tokenizer.setState(before_doctype_system_identifier_state)),!0}function before_doctype_system_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)||('\"'===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_double_quoted_state)):\"'\"===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_single_quoted_state)):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state))),!0}function doctype_system_identifier_double_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):'\"'===data?tokenizer.setState(after_doctype_system_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):tokenizer._currentToken.systemId+=data,!0}function doctype_system_identifier_single_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):\"'\"===data?tokenizer.setState(after_doctype_system_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):tokenizer._currentToken.systemId+=data,!0}function after_doctype_system_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)||(\">\"===data?(tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer.setState(bogus_doctype_state))),!0}function bogus_doctype_state(buffer){var data=buffer.char();return data===InputStream.EOF?(buffer.unget(data),tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):\">\"===data&&(tokenizer._emitCurrentToken(),tokenizer.setState(data_state)),!0}Tokenizer.DATA=data_state,Tokenizer.RCDATA=rcdata_state,Tokenizer.RAWTEXT=rawtext_state,Tokenizer.SCRIPT_DATA=script_data_state,Tokenizer.PLAINTEXT=plaintext_state,this._state=Tokenizer.DATA,this._inputStream.append(source),this._tokenHandler.startTokenization(this),this._inputStream.eof=!0;for(var tokenizer=this;this._state.call(this,this._inputStream););},Object.defineProperty(Tokenizer.prototype,\"lineNumber\",{get:function(){return this._inputStream.location().line}}),Object.defineProperty(Tokenizer.prototype,\"columnNumber\",{get:function(){return this._inputStream.location().column}}),exports.Tokenizer=Tokenizer},{\"./EntityParser\":2,\"./InputStream\":3}],6:[function(_dereq_,module,exports){function isWhitespace(ch){return\" \"===ch||\"\\n\"===ch||\"\t\"===ch||\"\\r\"===ch||\"\\f\"===ch}function isWhitespaceOrReplacementCharacter(ch){return isWhitespace(ch)||\"�\"===ch}function isAllWhitespace(characters){for(var i=0;characters.length>i;i++){var ch=characters[i];if(!isWhitespace(ch))return!1}return!0}function isAllWhitespaceOrReplacementCharacters(characters){for(var i=0;characters.length>i;i++){var ch=characters[i];if(!isWhitespaceOrReplacementCharacter(ch))return!1}return!0}function getAttribute(node,name){for(var i=0;node.attributes.length>i;i++){var attribute=node.attributes[i];if(attribute.nodeName===name)return attribute}return null}function CharacterBuffer(characters){this.characters=characters,this.current=0,this.end=this.characters.length}function TreeBuilder(){this.tokenizer=null,this.errorHandler=null,this.scriptingEnabled=!1,this.document=null,this.head=null,this.form=null,this.openElements=new ElementStack,this.activeFormattingElements=[],this.insertionMode=null,this.insertionModeName=\"\",this.originalInsertionMode=\"\",this.inQuirksMode=!1,this.compatMode=\"no quirks\",this.framesetOk=!0,this.redirectAttachToFosterParent=!1,this.selfClosingFlagAcknowledged=!1,this.context=\"\",this.pendingTableCharacters=[],this.shouldSkipLeadingNewline=!1;var tree=this,modes=this.insertionModes={};modes.base={end_tag_handlers:{\"-default\":\"endTagOther\"},start_tag_handlers:{\"-default\":\"startTagOther\"},processEOF:function(){tree.generateImpliedEndTags(),tree.openElements.length>2?tree.parseError(\"expected-closing-tag-but-got-eof\"):2==tree.openElements.length&&\"body\"!=tree.openElements.item(1).localName?tree.parseError(\"expected-closing-tag-but-got-eof\"):tree.context&&tree.openElements.length>1},processComment:function(data){tree.insertComment(data,tree.currentStackItem().node)},processDoctype:function(){tree.parseError(\"unexpected-doctype\")},processStartTag:function(name,attributes,selfClosing){if(this[this.start_tag_handlers[name]])this[this.start_tag_handlers[name]](name,attributes,selfClosing);else{if(!this[this.start_tag_handlers[\"-default\"]])throw Error(\"No handler found for \"+name);this[this.start_tag_handlers[\"-default\"]](name,attributes,selfClosing)}},processEndTag:function(name){if(this[this.end_tag_handlers[name]])this[this.end_tag_handlers[name]](name);else{if(!this[this.end_tag_handlers[\"-default\"]])throw Error(\"No handler found for \"+name);this[this.end_tag_handlers[\"-default\"]](name)}},startTagHtml:function(name,attributes){modes.inBody.startTagHtml(name,attributes)}},modes.initial=Object.create(modes.base),modes.initial.processEOF=function(){tree.parseError(\"expected-doctype-but-got-eof\"),this.anythingElse(),tree.insertionMode.processEOF()},modes.initial.processComment=function(data){tree.insertComment(data,tree.document)},modes.initial.processDoctype=function(name,publicId,systemId,forceQuirks){function publicIdStartsWith(string){return 0===publicId.toLowerCase().indexOf(string)}tree.insertDoctype(name||\"\",publicId||\"\",systemId||\"\"),forceQuirks||\"html\"!=name||null!=publicId&&([\"+//silmaril//dtd html pro v0r11 19970101//\",\"-//advasoft ltd//dtd html 3.0 aswedit + extensions//\",\"-//as//dtd html 3.0 aswedit + extensions//\",\"-//ietf//dtd html 2.0 level 1//\",\"-//ietf//dtd html 2.0 level 2//\",\"-//ietf//dtd html 2.0 strict level 1//\",\"-//ietf//dtd html 2.0 strict level 2//\",\"-//ietf//dtd html 2.0 strict//\",\"-//ietf//dtd html 2.0//\",\"-//ietf//dtd html 2.1e//\",\"-//ietf//dtd html 3.0//\",\"-//ietf//dtd html 3.0//\",\"-//ietf//dtd html 3.2 final//\",\"-//ietf//dtd html 3.2//\",\"-//ietf//dtd html 3//\",\"-//ietf//dtd html level 0//\",\"-//ietf//dtd html level 0//\",\"-//ietf//dtd html level 1//\",\"-//ietf//dtd html level 1//\",\"-//ietf//dtd html level 2//\",\"-//ietf//dtd html level 2//\",\"-//ietf//dtd html level 3//\",\"-//ietf//dtd html level 3//\",\"-//ietf//dtd html strict level 0//\",\"-//ietf//dtd html strict level 0//\",\"-//ietf//dtd html strict level 1//\",\"-//ietf//dtd html strict level 1//\",\"-//ietf//dtd html strict level 2//\",\"-//ietf//dtd html strict level 2//\",\"-//ietf//dtd html strict level 3//\",\"-//ietf//dtd html strict level 3//\",\"-//ietf//dtd html strict//\",\"-//ietf//dtd html strict//\",\"-//ietf//dtd html strict//\",\"-//ietf//dtd html//\",\"-//ietf//dtd html//\",\"-//ietf//dtd html//\",\"-//metrius//dtd metrius presentational//\",\"-//microsoft//dtd internet explorer 2.0 html strict//\",\"-//microsoft//dtd internet explorer 2.0 html//\",\"-//microsoft//dtd internet explorer 2.0 tables//\",\"-//microsoft//dtd internet explorer 3.0 html strict//\",\"-//microsoft//dtd internet explorer 3.0 html//\",\"-//microsoft//dtd internet explorer 3.0 tables//\",\"-//netscape comm. corp.//dtd html//\",\"-//netscape comm. corp.//dtd strict html//\",\"-//o'reilly and associates//dtd html 2.0//\",\"-//o'reilly and associates//dtd html extended 1.0//\",\"-//spyglass//dtd html 2.0 extended//\",\"-//sq//dtd html 2.0 hotmetal + extensions//\",\"-//sun microsystems corp.//dtd hotjava html//\",\"-//sun microsystems corp.//dtd hotjava strict html//\",\"-//w3c//dtd html 3 1995-03-24//\",\"-//w3c//dtd html 3.2 draft//\",\"-//w3c//dtd html 3.2 final//\",\"-//w3c//dtd html 3.2//\",\"-//w3c//dtd html 3.2s draft//\",\"-//w3c//dtd html 4.0 frameset//\",\"-//w3c//dtd html 4.0 transitional//\",\"-//w3c//dtd html experimental 19960712//\",\"-//w3c//dtd html experimental 970421//\",\"-//w3c//dtd w3 html//\",\"-//w3o//dtd w3 html 3.0//\",\"-//webtechs//dtd mozilla html 2.0//\",\"-//webtechs//dtd mozilla html//\",\"html\"].some(publicIdStartsWith)||[\"-//w3o//dtd w3 html strict 3.0//en//\",\"-/w3c/dtd html 4.0 transitional/en\",\"html\"].indexOf(publicId.toLowerCase())>-1||null==systemId&&[\"-//w3c//dtd html 4.01 transitional//\",\"-//w3c//dtd html 4.01 frameset//\"].some(publicIdStartsWith))||null!=systemId&&\"http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd\"==systemId.toLowerCase()?(tree.compatMode=\"quirks\",tree.parseError(\"quirky-doctype\")):null!=publicId&&([\"-//w3c//dtd xhtml 1.0 transitional//\",\"-//w3c//dtd xhtml 1.0 frameset//\"].some(publicIdStartsWith)||null!=systemId&&[\"-//w3c//dtd html 4.01 transitional//\",\"-//w3c//dtd html 4.01 frameset//\"].indexOf(publicId.toLowerCase())>-1)?(tree.compatMode=\"limited quirks\",tree.parseError(\"almost-standards-doctype\")):\"-//W3C//DTD HTML 4.0//EN\"==publicId&&(null==systemId||\"http://www.w3.org/TR/REC-html40/strict.dtd\"==systemId)||\"-//W3C//DTD HTML 4.01//EN\"==publicId&&(null==systemId||\"http://www.w3.org/TR/html4/strict.dtd\"==systemId)||\"-//W3C//DTD XHTML 1.0 Strict//EN\"==publicId&&\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"==systemId||\"-//W3C//DTD XHTML 1.1//EN\"==publicId&&\"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\"==systemId||(null!=systemId&&\"about:legacy-compat\"!=systemId||null!=publicId)&&tree.parseError(\"unknown-doctype\"),tree.setInsertionMode(\"beforeHTML\")},modes.initial.processCharacters=function(buffer){buffer.skipLeadingWhitespace(),buffer.length&&(tree.parseError(\"expected-doctype-but-got-chars\"),this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.initial.processStartTag=function(name,attributes,selfClosing){tree.parseError(\"expected-doctype-but-got-start-tag\",{name:name}),this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.initial.processEndTag=function(name){tree.parseError(\"expected-doctype-but-got-end-tag\",{name:name}),this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.initial.anythingElse=function(){tree.compatMode=\"quirks\",tree.setInsertionMode(\"beforeHTML\")},modes.beforeHTML=Object.create(modes.base),modes.beforeHTML.start_tag_handlers={html:\"startTagHtml\",\"-default\":\"startTagOther\"},modes.beforeHTML.processEOF=function(){this.anythingElse(),tree.insertionMode.processEOF()},modes.beforeHTML.processComment=function(data){tree.insertComment(data,tree.document)},modes.beforeHTML.processCharacters=function(buffer){buffer.skipLeadingWhitespace(),buffer.length&&(this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.beforeHTML.startTagHtml=function(name,attributes){tree.insertHtmlElement(attributes),tree.setInsertionMode(\"beforeHead\")},modes.beforeHTML.startTagOther=function(name,attributes,selfClosing){this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.beforeHTML.processEndTag=function(name){this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.beforeHTML.anythingElse=function(){tree.insertHtmlElement(),tree.setInsertionMode(\"beforeHead\")},modes.afterAfterBody=Object.create(modes.base),modes.afterAfterBody.start_tag_handlers={html:\"startTagHtml\",\"-default\":\"startTagOther\"},modes.afterAfterBody.processComment=function(data){tree.insertComment(data,tree.document)},modes.afterAfterBody.processDoctype=function(data){modes.inBody.processDoctype(data)},modes.afterAfterBody.startTagHtml=function(data,attributes){modes.inBody.startTagHtml(data,attributes)},modes.afterAfterBody.startTagOther=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.afterAfterBody.endTagOther=function(name){tree.parseError(\"unexpected-end-tag\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processEndTag(name)},modes.afterAfterBody.processCharacters=function(data){return isAllWhitespace(data.characters)?(modes.inBody.processCharacters(data),void 0):(tree.parseError(\"unexpected-char-after-body\"),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processCharacters(data))},modes.afterBody=Object.create(modes.base),modes.afterBody.end_tag_handlers={html:\"endTagHtml\",\"-default\":\"endTagOther\"},modes.afterBody.processComment=function(data){tree.insertComment(data,tree.openElements.rootNode)},modes.afterBody.processCharacters=function(data){return isAllWhitespace(data.characters)?(modes.inBody.processCharacters(data),void 0):(tree.parseError(\"unexpected-char-after-body\"),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processCharacters(data))},modes.afterBody.processStartTag=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag-after-body\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.afterBody.endTagHtml=function(){tree.context?tree.parseError(\"end-html-in-innerhtml\"):tree.setInsertionMode(\"afterAfterBody\")},modes.afterBody.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-after-body\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processEndTag(name)},modes.afterFrameset=Object.create(modes.base),modes.afterFrameset.start_tag_handlers={html:\"startTagHtml\",noframes:\"startTagNoframes\",\"-default\":\"startTagOther\"},modes.afterFrameset.end_tag_handlers={html:\"endTagHtml\",\"-default\":\"endTagOther\"},modes.afterFrameset.processCharacters=function(buffer){for(var characters=buffer.takeRemaining(),whitespace=\"\",i=0;characters.length>i;i++){var ch=characters[i];isWhitespace(ch)&&(whitespace+=ch)}whitespace&&tree.insertText(whitespace),whitespace.length<characters.length&&tree.parseError(\"expected-eof-but-got-char\")},modes.afterFrameset.startTagNoframes=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.afterFrameset.startTagOther=function(name){tree.parseError(\"unexpected-start-tag-after-frameset\",{name:name})},modes.afterFrameset.endTagHtml=function(){tree.setInsertionMode(\"afterAfterFrameset\")},modes.afterFrameset.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-after-frameset\",{name:name})},modes.beforeHead=Object.create(modes.base),modes.beforeHead.start_tag_handlers={html:\"startTagHtml\",head:\"startTagHead\",\"-default\":\"startTagOther\"},modes.beforeHead.end_tag_handlers={html:\"endTagImplyHead\",head:\"endTagImplyHead\",body:\"endTagImplyHead\",br:\"endTagImplyHead\",\"-default\":\"endTagOther\"},modes.beforeHead.processEOF=function(){this.startTagHead(\"head\",[]),tree.insertionMode.processEOF()},modes.beforeHead.processCharacters=function(buffer){buffer.skipLeadingWhitespace(),buffer.length&&(this.startTagHead(\"head\",[]),tree.insertionMode.processCharacters(buffer))},modes.beforeHead.startTagHead=function(name,attributes){tree.insertHeadElement(attributes),tree.setInsertionMode(\"inHead\")},modes.beforeHead.startTagOther=function(name,attributes,selfClosing){this.startTagHead(\"head\",[]),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.beforeHead.endTagImplyHead=function(name){this.startTagHead(\"head\",[]),tree.insertionMode.processEndTag(name)},modes.beforeHead.endTagOther=function(name){tree.parseError(\"end-tag-after-implied-root\",{name:name})},modes.inHead=Object.create(modes.base),modes.inHead.start_tag_handlers={html:\"startTagHtml\",head:\"startTagHead\",title:\"startTagTitle\",script:\"startTagScript\",style:\"startTagNoFramesStyle\",noscript:\"startTagNoScript\",noframes:\"startTagNoFramesStyle\",base:\"startTagBaseBasefontBgsoundLink\",basefont:\"startTagBaseBasefontBgsoundLink\",bgsound:\"startTagBaseBasefontBgsoundLink\",link:\"startTagBaseBasefontBgsoundLink\",meta:\"startTagMeta\",\"-default\":\"startTagOther\"},modes.inHead.end_tag_handlers={head:\"endTagHead\",html:\"endTagHtmlBodyBr\",body:\"endTagHtmlBodyBr\",br:\"endTagHtmlBodyBr\",\"-default\":\"endTagOther\"},modes.inHead.processEOF=function(){var name=tree.currentStackItem().localName;\n-1!=[\"title\",\"style\",\"script\"].indexOf(name)&&(tree.parseError(\"expected-named-closing-tag-but-got-eof\",{name:name}),tree.popElement()),this.anythingElse(),tree.insertionMode.processEOF()},modes.inHead.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length&&(this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.inHead.startTagHtml=function(name,attributes){modes.inBody.processStartTag(name,attributes)},modes.inHead.startTagHead=function(){tree.parseError(\"two-heads-are-not-better-than-one\")},modes.inHead.startTagTitle=function(name,attributes){tree.processGenericRCDATAStartTag(name,attributes)},modes.inHead.startTagNoScript=function(name,attributes){return tree.scriptingEnabled?tree.processGenericRawTextStartTag(name,attributes):(tree.insertElement(name,attributes),tree.setInsertionMode(\"inHeadNoscript\"),void 0)},modes.inHead.startTagNoFramesStyle=function(name,attributes){tree.processGenericRawTextStartTag(name,attributes)},modes.inHead.startTagScript=function(name,attributes){tree.insertElement(name,attributes),tree.tokenizer.setState(Tokenizer.SCRIPT_DATA),tree.originalInsertionMode=tree.insertionModeName,tree.setInsertionMode(\"text\")},modes.inHead.startTagBaseBasefontBgsoundLink=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inHead.startTagMeta=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inHead.startTagOther=function(name,attributes,selfClosing){this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.inHead.endTagHead=function(){\"head\"==tree.openElements.item(tree.openElements.length-1).localName?tree.openElements.pop():tree.parseError(\"unexpected-end-tag\",{name:\"head\"}),tree.setInsertionMode(\"afterHead\")},modes.inHead.endTagHtmlBodyBr=function(name){this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.inHead.endTagOther=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inHead.anythingElse=function(){this.endTagHead(\"head\")},modes.afterHead=Object.create(modes.base),modes.afterHead.start_tag_handlers={html:\"startTagHtml\",head:\"startTagHead\",body:\"startTagBody\",frameset:\"startTagFrameset\",base:\"startTagFromHead\",link:\"startTagFromHead\",meta:\"startTagFromHead\",script:\"startTagFromHead\",style:\"startTagFromHead\",title:\"startTagFromHead\",\"-default\":\"startTagOther\"},modes.afterHead.end_tag_handlers={body:\"endTagBodyHtmlBr\",html:\"endTagBodyHtmlBr\",br:\"endTagBodyHtmlBr\",\"-default\":\"endTagOther\"},modes.afterHead.processEOF=function(){this.anythingElse(),tree.insertionMode.processEOF()},modes.afterHead.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length&&(this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.afterHead.startTagHtml=function(name,attributes){modes.inBody.processStartTag(name,attributes)},modes.afterHead.startTagBody=function(name,attributes){tree.framesetOk=!1,tree.insertBodyElement(attributes),tree.setInsertionMode(\"inBody\")},modes.afterHead.startTagFrameset=function(name,attributes){tree.insertElement(name,attributes),tree.setInsertionMode(\"inFrameset\")},modes.afterHead.startTagFromHead=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag-out-of-my-head\",{name:name}),tree.openElements.push(tree.head),modes.inHead.processStartTag(name,attributes,selfClosing),tree.openElements.remove(tree.head)},modes.afterHead.startTagHead=function(name){tree.parseError(\"unexpected-start-tag\",{name:name})},modes.afterHead.startTagOther=function(name,attributes,selfClosing){this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.afterHead.endTagBodyHtmlBr=function(name){this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.afterHead.endTagOther=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.afterHead.anythingElse=function(){tree.insertBodyElement([]),tree.setInsertionMode(\"inBody\"),tree.framesetOk=!0},modes.inBody=Object.create(modes.base),modes.inBody.start_tag_handlers={html:\"startTagHtml\",head:\"startTagMisplaced\",base:\"startTagProcessInHead\",basefont:\"startTagProcessInHead\",bgsound:\"startTagProcessInHead\",link:\"startTagProcessInHead\",meta:\"startTagProcessInHead\",noframes:\"startTagProcessInHead\",script:\"startTagProcessInHead\",style:\"startTagProcessInHead\",title:\"startTagProcessInHead\",body:\"startTagBody\",form:\"startTagForm\",plaintext:\"startTagPlaintext\",a:\"startTagA\",button:\"startTagButton\",xmp:\"startTagXmp\",table:\"startTagTable\",hr:\"startTagHr\",image:\"startTagImage\",input:\"startTagInput\",textarea:\"startTagTextarea\",select:\"startTagSelect\",isindex:\"startTagIsindex\",applet:\"startTagAppletMarqueeObject\",marquee:\"startTagAppletMarqueeObject\",object:\"startTagAppletMarqueeObject\",li:\"startTagListItem\",dd:\"startTagListItem\",dt:\"startTagListItem\",address:\"startTagCloseP\",article:\"startTagCloseP\",aside:\"startTagCloseP\",blockquote:\"startTagCloseP\",center:\"startTagCloseP\",details:\"startTagCloseP\",dir:\"startTagCloseP\",div:\"startTagCloseP\",dl:\"startTagCloseP\",fieldset:\"startTagCloseP\",figcaption:\"startTagCloseP\",figure:\"startTagCloseP\",footer:\"startTagCloseP\",header:\"startTagCloseP\",hgroup:\"startTagCloseP\",main:\"startTagCloseP\",menu:\"startTagCloseP\",nav:\"startTagCloseP\",ol:\"startTagCloseP\",p:\"startTagCloseP\",section:\"startTagCloseP\",summary:\"startTagCloseP\",ul:\"startTagCloseP\",listing:\"startTagPreListing\",pre:\"startTagPreListing\",b:\"startTagFormatting\",big:\"startTagFormatting\",code:\"startTagFormatting\",em:\"startTagFormatting\",font:\"startTagFormatting\",i:\"startTagFormatting\",s:\"startTagFormatting\",small:\"startTagFormatting\",strike:\"startTagFormatting\",strong:\"startTagFormatting\",tt:\"startTagFormatting\",u:\"startTagFormatting\",nobr:\"startTagNobr\",area:\"startTagVoidFormatting\",br:\"startTagVoidFormatting\",embed:\"startTagVoidFormatting\",img:\"startTagVoidFormatting\",keygen:\"startTagVoidFormatting\",wbr:\"startTagVoidFormatting\",param:\"startTagParamSourceTrack\",source:\"startTagParamSourceTrack\",track:\"startTagParamSourceTrack\",iframe:\"startTagIFrame\",noembed:\"startTagRawText\",noscript:\"startTagRawText\",h1:\"startTagHeading\",h2:\"startTagHeading\",h3:\"startTagHeading\",h4:\"startTagHeading\",h5:\"startTagHeading\",h6:\"startTagHeading\",caption:\"startTagMisplaced\",col:\"startTagMisplaced\",colgroup:\"startTagMisplaced\",frame:\"startTagMisplaced\",frameset:\"startTagFrameset\",tbody:\"startTagMisplaced\",td:\"startTagMisplaced\",tfoot:\"startTagMisplaced\",th:\"startTagMisplaced\",thead:\"startTagMisplaced\",tr:\"startTagMisplaced\",option:\"startTagOptionOptgroup\",optgroup:\"startTagOptionOptgroup\",math:\"startTagMath\",svg:\"startTagSVG\",rt:\"startTagRpRt\",rp:\"startTagRpRt\",\"-default\":\"startTagOther\"},modes.inBody.end_tag_handlers={p:\"endTagP\",body:\"endTagBody\",html:\"endTagHtml\",address:\"endTagBlock\",article:\"endTagBlock\",aside:\"endTagBlock\",blockquote:\"endTagBlock\",button:\"endTagBlock\",center:\"endTagBlock\",details:\"endTagBlock\",dir:\"endTagBlock\",div:\"endTagBlock\",dl:\"endTagBlock\",fieldset:\"endTagBlock\",figcaption:\"endTagBlock\",figure:\"endTagBlock\",footer:\"endTagBlock\",header:\"endTagBlock\",hgroup:\"endTagBlock\",listing:\"endTagBlock\",main:\"endTagBlock\",menu:\"endTagBlock\",nav:\"endTagBlock\",ol:\"endTagBlock\",pre:\"endTagBlock\",section:\"endTagBlock\",summary:\"endTagBlock\",ul:\"endTagBlock\",form:\"endTagForm\",applet:\"endTagAppletMarqueeObject\",marquee:\"endTagAppletMarqueeObject\",object:\"endTagAppletMarqueeObject\",dd:\"endTagListItem\",dt:\"endTagListItem\",li:\"endTagListItem\",h1:\"endTagHeading\",h2:\"endTagHeading\",h3:\"endTagHeading\",h4:\"endTagHeading\",h5:\"endTagHeading\",h6:\"endTagHeading\",a:\"endTagFormatting\",b:\"endTagFormatting\",big:\"endTagFormatting\",code:\"endTagFormatting\",em:\"endTagFormatting\",font:\"endTagFormatting\",i:\"endTagFormatting\",nobr:\"endTagFormatting\",s:\"endTagFormatting\",small:\"endTagFormatting\",strike:\"endTagFormatting\",strong:\"endTagFormatting\",tt:\"endTagFormatting\",u:\"endTagFormatting\",br:\"endTagBr\",\"-default\":\"endTagOther\"},modes.inBody.processCharacters=function(buffer){tree.shouldSkipLeadingNewline&&(tree.shouldSkipLeadingNewline=!1,buffer.skipAtMostOneLeadingNewline()),tree.reconstructActiveFormattingElements();var characters=buffer.takeRemaining();characters=characters.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"\"}),characters&&(tree.insertText(characters),tree.framesetOk&&!isAllWhitespaceOrReplacementCharacters(characters)&&(tree.framesetOk=!1))},modes.inBody.startTagHtml=function(name,attributes){tree.parseError(\"non-html-root\"),tree.addAttributesToElement(tree.openElements.rootNode,attributes)},modes.inBody.startTagProcessInHead=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inBody.startTagBody=function(name,attributes){tree.parseError(\"unexpected-start-tag\",{name:\"body\"}),1==tree.openElements.length||\"body\"!=tree.openElements.item(1).localName?assert.ok(tree.context):(tree.framesetOk=!1,tree.addAttributesToElement(tree.openElements.bodyElement,attributes))},modes.inBody.startTagFrameset=function(name,attributes){if(tree.parseError(\"unexpected-start-tag\",{name:\"frameset\"}),1==tree.openElements.length||\"body\"!=tree.openElements.item(1).localName)assert.ok(tree.context);else if(tree.framesetOk){for(tree.detachFromParent(tree.openElements.bodyElement);tree.openElements.length>1;)tree.openElements.pop();tree.insertElement(name,attributes),tree.setInsertionMode(\"inFrameset\")}},modes.inBody.startTagCloseP=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes)},modes.inBody.startTagPreListing=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.framesetOk=!1,tree.shouldSkipLeadingNewline=!0},modes.inBody.startTagForm=function(name,attributes){tree.form?tree.parseError(\"unexpected-start-tag\",{name:name}):(tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.form=tree.currentStackItem())},modes.inBody.startTagRpRt=function(name,attributes){tree.openElements.inScope(\"ruby\")&&(tree.generateImpliedEndTags(),\"ruby\"!=tree.currentStackItem().localName&&tree.parseError(\"unexpected-start-tag\",{name:name})),tree.insertElement(name,attributes)},modes.inBody.startTagListItem=function(name,attributes){for(var stopNames={li:[\"li\"],dd:[\"dd\",\"dt\"],dt:[\"dd\",\"dt\"]},stopName=stopNames[name],els=tree.openElements,i=els.length-1;i>=0;i--){var node=els.item(i);if(-1!=stopName.indexOf(node.localName)){tree.insertionMode.processEndTag(node.localName);break}if(node.isSpecial()&&\"p\"!==node.localName&&\"address\"!==node.localName&&\"div\"!==node.localName)break}tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.framesetOk=!1},modes.inBody.startTagPlaintext=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.tokenizer.setState(Tokenizer.PLAINTEXT)},modes.inBody.startTagHeading=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.currentStackItem().isNumberedHeader()&&(tree.parseError(\"unexpected-start-tag\",{name:name}),tree.popElement()),tree.insertElement(name,attributes)},modes.inBody.startTagA=function(name,attributes){var activeA=tree.elementInActiveFormattingElements(\"a\");activeA&&(tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"a\",endName:\"a\"}),tree.adoptionAgencyEndTag(\"a\"),tree.openElements.contains(activeA)&&tree.openElements.remove(activeA),tree.removeElementFromActiveFormattingElements(activeA)),tree.reconstructActiveFormattingElements(),tree.insertFormattingElement(name,attributes)},modes.inBody.startTagFormatting=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertFormattingElement(name,attributes)},modes.inBody.startTagNobr=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.openElements.inScope(\"nobr\")&&(tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"nobr\",endName:\"nobr\"}),this.processEndTag(\"nobr\"),tree.reconstructActiveFormattingElements()),tree.insertFormattingElement(name,attributes)},modes.inBody.startTagButton=function(name,attributes){tree.openElements.inScope(\"button\")?(tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"button\",endName:\"button\"}),this.processEndTag(\"button\"),tree.insertionMode.processStartTag(name,attributes)):(tree.framesetOk=!1,tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes))},modes.inBody.startTagAppletMarqueeObject=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes),tree.activeFormattingElements.push(Marker),tree.framesetOk=!1},modes.inBody.endTagAppletMarqueeObject=function(name){tree.openElements.inScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.popUntilPopped(name),tree.clearActiveFormattingElements()):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.startTagXmp=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.processEndTag(\"p\"),tree.reconstructActiveFormattingElements(),tree.processGenericRawTextStartTag(name,attributes),tree.framesetOk=!1},modes.inBody.startTagTable=function(name,attributes){\"quirks\"!==tree.compatMode&&tree.openElements.inButtonScope(\"p\")&&this.processEndTag(\"p\"),tree.insertElement(name,attributes),tree.setInsertionMode(\"inTable\"),tree.framesetOk=!1},modes.inBody.startTagVoidFormatting=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertSelfClosingElement(name,attributes),tree.framesetOk=!1},modes.inBody.startTagParamSourceTrack=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inBody.startTagHr=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertSelfClosingElement(name,attributes),tree.framesetOk=!1},modes.inBody.startTagImage=function(name,attributes){tree.parseError(\"unexpected-start-tag-treated-as\",{originalName:\"image\",newName:\"img\"}),this.processStartTag(\"img\",attributes)},modes.inBody.startTagInput=function(name,attributes){var currentFramesetOk=tree.framesetOk;this.startTagVoidFormatting(name,attributes);for(var key in attributes)if(\"type\"==attributes[key].nodeName){\"hidden\"==attributes[key].nodeValue.toLowerCase()&&(tree.framesetOk=currentFramesetOk);break}},modes.inBody.startTagIsindex=function(name,attributes){if(tree.parseError(\"deprecated-tag\",{name:\"isindex\"}),tree.selfClosingFlagAcknowledged=!0,!tree.form){var formAttributes=[],inputAttributes=[],prompt=\"This is a searchable index. Enter search keywords: \";for(var key in attributes)switch(attributes[key].nodeName){case\"action\":formAttributes.push({nodeName:\"action\",nodeValue:attributes[key].nodeValue});break;case\"prompt\":prompt=attributes[key].nodeValue;break;case\"name\":break;default:inputAttributes.push({nodeName:attributes[key].nodeName,nodeValue:attributes[key].nodeValue})}inputAttributes.push({nodeName:\"name\",nodeValue:\"isindex\"}),this.processStartTag(\"form\",formAttributes),this.processStartTag(\"hr\"),this.processStartTag(\"label\"),this.processCharacters(new CharacterBuffer(prompt)),this.processStartTag(\"input\",inputAttributes),this.processEndTag(\"label\"),this.processStartTag(\"hr\"),this.processEndTag(\"form\")}},modes.inBody.startTagTextarea=function(name,attributes){tree.insertElement(name,attributes),tree.tokenizer.setState(Tokenizer.RCDATA),tree.originalInsertionMode=tree.insertionModeName,tree.shouldSkipLeadingNewline=!0,tree.framesetOk=!1,tree.setInsertionMode(\"text\")},modes.inBody.startTagIFrame=function(name,attributes){tree.framesetOk=!1,this.startTagRawText(name,attributes)},modes.inBody.startTagRawText=function(name,attributes){tree.processGenericRawTextStartTag(name,attributes)},modes.inBody.startTagSelect=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes),tree.framesetOk=!1;var insertionModeName=tree.insertionModeName;\"inTable\"==insertionModeName||\"inCaption\"==insertionModeName||\"inColumnGroup\"==insertionModeName||\"inTableBody\"==insertionModeName||\"inRow\"==insertionModeName||\"inCell\"==insertionModeName?tree.setInsertionMode(\"inSelectInTable\"):tree.setInsertionMode(\"inSelect\")},modes.inBody.startTagMisplaced=function(name){tree.parseError(\"unexpected-start-tag-ignored\",{name:name})},modes.inBody.endTagMisplaced=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagBr=function(name){tree.parseError(\"unexpected-end-tag-treated-as\",{originalName:\"br\",newName:\"br element\"}),tree.reconstructActiveFormattingElements(),tree.insertElement(name,[]),tree.popElement()},modes.inBody.startTagOptionOptgroup=function(name,attributes){\"option\"==tree.currentStackItem().localName&&tree.popElement(),tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes)},modes.inBody.startTagOther=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes)},modes.inBody.endTagOther=function(name){for(var node,i=tree.openElements.length-1;i>0;i--){if(node=tree.openElements.item(i),node.localName==name){tree.generateImpliedEndTags(name),tree.currentStackItem().localName!=name&&tree.parseError(\"unexpected-end-tag\",{name:name}),tree.openElements.remove_openElements_until(function(x){return x===node});break}if(node.isSpecial()){tree.parseError(\"unexpected-end-tag\",{name:name});break}}},modes.inBody.startTagMath=function(name,attributes,selfClosing){tree.reconstructActiveFormattingElements(),attributes=tree.adjustMathMLAttributes(attributes),attributes=tree.adjustForeignAttributes(attributes),tree.insertForeignElement(name,attributes,\"http://www.w3.org/1998/Math/MathML\",selfClosing)},modes.inBody.startTagSVG=function(name,attributes,selfClosing){tree.reconstructActiveFormattingElements(),attributes=tree.adjustSVGAttributes(attributes),attributes=tree.adjustForeignAttributes(attributes),tree.insertForeignElement(name,attributes,\"http://www.w3.org/2000/svg\",selfClosing)},modes.inBody.endTagP=function(name){tree.openElements.inButtonScope(\"p\")?(tree.generateImpliedEndTags(\"p\"),\"p\"!=tree.currentStackItem().localName&&tree.parseError(\"unexpected-implied-end-tag\",{name:\"p\"}),tree.openElements.popUntilPopped(name)):(tree.parseError(\"unexpected-end-tag\",{name:\"p\"}),this.startTagCloseP(\"p\",[]),this.endTagP(\"p\"))},modes.inBody.endTagBody=function(name){return tree.openElements.inScope(\"body\")?(\"body\"!=tree.currentStackItem().localName&&tree.parseError(\"expected-one-end-tag-but-got-another\",{expectedName:tree.currentStackItem().localName,gotName:name}),tree.setInsertionMode(\"afterBody\"),void 0):(tree.parseError(\"unexpected-end-tag\",{name:name}),void 0)},modes.inBody.endTagHtml=function(name){return tree.openElements.inScope(\"body\")?(\"body\"!=tree.currentStackItem().localName&&tree.parseError(\"expected-one-end-tag-but-got-another\",{expectedName:tree.currentStackItem().localName,gotName:name}),tree.setInsertionMode(\"afterBody\"),tree.insertionMode.processEndTag(name),void 0):(tree.parseError(\"unexpected-end-tag\",{name:name}),void 0)},modes.inBody.endTagBlock=function(name){tree.openElements.inScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.popUntilPopped(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagForm=function(name){var node=tree.form;tree.form=null,node&&tree.openElements.inScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem()!=node&&tree.parseError(\"end-tag-too-early-ignored\",{name:\"form\"}),tree.openElements.remove(node)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagListItem=function(name){tree.openElements.inListItemScope(name)?(tree.generateImpliedEndTags(name),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.popUntilPopped(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagHeading=function(name){return tree.openElements.hasNumberedHeaderElementInScope()?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.remove_openElements_until(function(e){return e.isNumberedHeader()}),void 0):(tree.parseError(\"unexpected-end-tag\",{name:name}),void 0)},modes.inBody.endTagFormatting=function(name,attributes){tree.adoptionAgencyEndTag(name)||this.endTagOther(name,attributes)},modes.inCaption=Object.create(modes.base),modes.inCaption.start_tag_handlers={html:\"startTagHtml\",caption:\"startTagTableElement\",col:\"startTagTableElement\",colgroup:\"startTagTableElement\",tbody:\"startTagTableElement\",td:\"startTagTableElement\",tfoot:\"startTagTableElement\",thead:\"startTagTableElement\",tr:\"startTagTableElement\",\"-default\":\"startTagOther\"},modes.inCaption.end_tag_handlers={caption:\"endTagCaption\",table:\"endTagTable\",body:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",tbody:\"endTagIgnore\",td:\"endTagIgnore\",tfood:\"endTagIgnore\",thead:\"endTagIgnore\",tr:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inCaption.processCharacters=function(data){modes.inBody.processCharacters(data)},modes.inCaption.startTagTableElement=function(name,attributes){tree.parseError(\"unexpected-end-tag\",{name:name});var ignoreEndTag=!tree.openElements.inTableScope(\"caption\");tree.insertionMode.processEndTag(\"caption\"),ignoreEndTag||tree.insertionMode.processStartTag(name,attributes)},modes.inCaption.startTagOther=function(name,attributes,selfClosing){modes.inBody.processStartTag(name,attributes,selfClosing)},modes.inCaption.endTagCaption=function(name){tree.openElements.inTableScope(\"caption\")?(tree.generateImpliedEndTags(),\"caption\"!=tree.currentStackItem().localName&&tree.parseError(\"expected-one-end-tag-but-got-another\",{gotName:\"caption\",expectedName:tree.currentStackItem().localName}),tree.openElements.popUntilPopped(\"caption\"),tree.clearActiveFormattingElements(),tree.setInsertionMode(\"inTable\")):(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name}))},modes.inCaption.endTagTable=function(name){tree.parseError(\"unexpected-end-table-in-caption\");var ignoreEndTag=!tree.openElements.inTableScope(\"caption\");tree.insertionMode.processEndTag(\"caption\"),ignoreEndTag||tree.insertionMode.processEndTag(name)},modes.inCaption.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCaption.endTagOther=function(name){modes.inBody.processEndTag(name)},modes.inCell=Object.create(modes.base),modes.inCell.start_tag_handlers={html:\"startTagHtml\",caption:\"startTagTableOther\",col:\"startTagTableOther\",colgroup:\"startTagTableOther\",tbody:\"startTagTableOther\",td:\"startTagTableOther\",tfoot:\"startTagTableOther\",th:\"startTagTableOther\",thead:\"startTagTableOther\",tr:\"startTagTableOther\",\"-default\":\"startTagOther\"},modes.inCell.end_tag_handlers={td:\"endTagTableCell\",th:\"endTagTableCell\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",table:\"endTagImply\",tbody:\"endTagImply\",tfoot:\"endTagImply\",thead:\"endTagImply\",tr:\"endTagImply\",\"-default\":\"endTagOther\"},modes.inCell.processCharacters=function(data){modes.inBody.processCharacters(data)},modes.inCell.startTagTableOther=function(name,attributes,selfClosing){tree.openElements.inTableScope(\"td\")||tree.openElements.inTableScope(\"th\")?(this.closeCell(),tree.insertionMode.processStartTag(name,attributes,selfClosing)):tree.parseError(\"unexpected-start-tag\",{name:name})},modes.inCell.startTagOther=function(name,attributes,selfClosing){modes.inBody.processStartTag(name,attributes,selfClosing)},modes.inCell.endTagTableCell=function(name){tree.openElements.inTableScope(name)?(tree.generateImpliedEndTags(name),tree.currentStackItem().localName!=name.toLowerCase()?(tree.parseError(\"unexpected-cell-end-tag\",{name:name}),tree.openElements.popUntilPopped(name)):tree.popElement(),tree.clearActiveFormattingElements(),tree.setInsertionMode(\"inRow\")):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCell.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCell.endTagImply=function(name){tree.openElements.inTableScope(name)?(this.closeCell(),tree.insertionMode.processEndTag(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCell.endTagOther=function(name){modes.inBody.processEndTag(name)},modes.inCell.closeCell=function(){tree.openElements.inTableScope(\"td\")?this.endTagTableCell(\"td\"):tree.openElements.inTableScope(\"th\")&&this.endTagTableCell(\"th\")},modes.inColumnGroup=Object.create(modes.base),modes.inColumnGroup.start_tag_handlers={html:\"startTagHtml\",col:\"startTagCol\",\"-default\":\"startTagOther\"},modes.inColumnGroup.end_tag_handlers={colgroup:\"endTagColgroup\",col:\"endTagCol\",\"-default\":\"endTagOther\"},modes.inColumnGroup.ignoreEndTagColgroup=function(){return\"html\"==tree.currentStackItem().localName},modes.inColumnGroup.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();if(leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length){var ignoreEndTag=this.ignoreEndTagColgroup();this.endTagColgroup(\"colgroup\"),ignoreEndTag||tree.insertionMode.processCharacters(buffer)}},modes.inColumnGroup.startTagCol=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inColumnGroup.startTagOther=function(name,attributes,selfClosing){var ignoreEndTag=this.ignoreEndTagColgroup();this.endTagColgroup(\"colgroup\"),ignoreEndTag||tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.inColumnGroup.endTagColgroup=function(name){this.ignoreEndTagColgroup()?(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name})):(tree.popElement(),tree.setInsertionMode(\"inTable\"))},modes.inColumnGroup.endTagCol=function(){tree.parseError(\"no-end-tag\",{name:\"col\"})},modes.inColumnGroup.endTagOther=function(name){var ignoreEndTag=this.ignoreEndTagColgroup();this.endTagColgroup(\"colgroup\"),ignoreEndTag||tree.insertionMode.processEndTag(name)},modes.inForeignContent=Object.create(modes.base),modes.inForeignContent.processStartTag=function(name,attributes,selfClosing){if(-1!=[\"b\",\"big\",\"blockquote\",\"body\",\"br\",\"center\",\"code\",\"dd\",\"div\",\"dl\",\"dt\",\"em\",\"embed\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"hr\",\"i\",\"img\",\"li\",\"listing\",\"menu\",\"meta\",\"nobr\",\"ol\",\"p\",\"pre\",\"ruby\",\"s\",\"small\",\"span\",\"strong\",\"strike\",\"sub\",\"sup\",\"table\",\"tt\",\"u\",\"ul\",\"var\"].indexOf(name)||\"font\"==name&&attributes.some(function(attr){return[\"color\",\"face\",\"size\"].indexOf(attr.nodeName)>=0})){for(tree.parseError(\"unexpected-html-element-in-foreign-content\",{name:name});tree.currentStackItem().isForeign()&&!tree.currentStackItem().isHtmlIntegrationPoint()&&!tree.currentStackItem().isMathMLTextIntegrationPoint();)tree.openElements.pop();return tree.insertionMode.processStartTag(name,attributes,selfClosing),void 0}\"http://www.w3.org/1998/Math/MathML\"==tree.currentStackItem().namespaceURI&&(attributes=tree.adjustMathMLAttributes(attributes)),\"http://www.w3.org/2000/svg\"==tree.currentStackItem().namespaceURI&&(name=tree.adjustSVGTagNameCase(name),attributes=tree.adjustSVGAttributes(attributes)),attributes=tree.adjustForeignAttributes(attributes),tree.insertForeignElement(name,attributes,tree.currentStackItem().namespaceURI,selfClosing)},modes.inForeignContent.processEndTag=function(name){var node=tree.currentStackItem(),index=tree.openElements.length-1;for(node.localName.toLowerCase()!=name&&tree.parseError(\"unexpected-end-tag\",{name:name});;){if(0===index)break;if(node.localName.toLowerCase()==name){for(;tree.openElements.pop()!=node;);break}if(index-=1,node=tree.openElements.item(index),!node.isForeign()){tree.insertionMode.processEndTag(name);break}}},modes.inForeignContent.processCharacters=function(buffer){var characters=buffer.takeRemaining();characters=characters.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"�\"}),tree.framesetOk&&!isAllWhitespaceOrReplacementCharacters(characters)&&(tree.framesetOk=!1),tree.insertText(characters)},modes.inHeadNoscript=Object.create(modes.base),modes.inHeadNoscript.start_tag_handlers={html:\"startTagHtml\",basefont:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",bgsound:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",link:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",meta:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",noframes:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",style:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",head:\"startTagHeadNoscript\",noscript:\"startTagHeadNoscript\",\"-default\":\"startTagOther\"},modes.inHeadNoscript.end_tag_handlers={noscript:\"endTagNoscript\",br:\"endTagBr\",\"-default\":\"endTagOther\"},modes.inHeadNoscript.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length&&(tree.parseError(\"unexpected-char-in-frameset\"),this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.inHeadNoscript.processComment=function(data){modes.inHead.processComment(data)},modes.inHeadNoscript.startTagBasefontBgsoundLinkMetaNoframesStyle=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inHeadNoscript.startTagHeadNoscript=function(name){tree.parseError(\"unexpected-start-tag-in-frameset\",{name:name})},modes.inHeadNoscript.startTagOther=function(name,attributes){tree.parseError(\"unexpected-start-tag-in-frameset\",{name:name}),this.anythingElse(),tree.insertionMode.processStartTag(name,attributes)},modes.inHeadNoscript.endTagBr=function(name,attributes){tree.parseError(\"unexpected-end-tag-in-frameset\",{name:name}),this.anythingElse(),tree.insertionMode.processEndTag(name,attributes)},modes.inHeadNoscript.endTagNoscript=function(){tree.popElement(),tree.setInsertionMode(\"inHead\")},modes.inHeadNoscript.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-in-frameset\",{name:name})},modes.inHeadNoscript.anythingElse=function(){tree.popElement(),tree.setInsertionMode(\"inHead\")},modes.inFrameset=Object.create(modes.base),modes.inFrameset.start_tag_handlers={html:\"startTagHtml\",frameset:\"startTagFrameset\",frame:\"startTagFrame\",noframes:\"startTagNoframes\",\"-default\":\"startTagOther\"},modes.inFrameset.end_tag_handlers={frameset:\"endTagFrameset\",noframes:\"endTagNoframes\",\"-default\":\"endTagOther\"},modes.inFrameset.processCharacters=function(){tree.parseError(\"unexpected-char-in-frameset\")},modes.inFrameset.startTagFrameset=function(name,attributes){tree.insertElement(name,attributes)},modes.inFrameset.startTagFrame=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inFrameset.startTagNoframes=function(name,attributes){modes.inBody.processStartTag(name,attributes)},modes.inFrameset.startTagOther=function(name){tree.parseError(\"unexpected-start-tag-in-frameset\",{name:name})},modes.inFrameset.endTagFrameset=function(){\"html\"==tree.currentStackItem().localName?tree.parseError(\"unexpected-frameset-in-frameset-innerhtml\"):tree.popElement(),tree.context||\"frameset\"==tree.currentStackItem().localName||tree.setInsertionMode(\"afterFrameset\")},modes.inFrameset.endTagNoframes=function(name){modes.inBody.processEndTag(name)},modes.inFrameset.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-in-frameset\",{name:name})},modes.inTable=Object.create(modes.base),modes.inTable.start_tag_handlers={html:\"startTagHtml\",caption:\"startTagCaption\",colgroup:\"startTagColgroup\",col:\"startTagCol\",table:\"startTagTable\",tbody:\"startTagRowGroup\",tfoot:\"startTagRowGroup\",thead:\"startTagRowGroup\",td:\"startTagImplyTbody\",th:\"startTagImplyTbody\",tr:\"startTagImplyTbody\",style:\"startTagStyleScript\",script:\"startTagStyleScript\",input:\"startTagInput\",form:\"startTagForm\",\"-default\":\"startTagOther\"},modes.inTable.end_tag_handlers={table:\"endTagTable\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",tbody:\"endTagIgnore\",td:\"endTagIgnore\",tfoot:\"endTagIgnore\",th:\"endTagIgnore\",thead:\"endTagIgnore\",tr:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inTable.processCharacters=function(data){if(tree.currentStackItem().isFosterParenting()){var originalInsertionMode=tree.insertionModeName;\ntree.setInsertionMode(\"inTableText\"),tree.originalInsertionMode=originalInsertionMode,tree.insertionMode.processCharacters(data)}else tree.redirectAttachToFosterParent=!0,modes.inBody.processCharacters(data),tree.redirectAttachToFosterParent=!1},modes.inTable.startTagCaption=function(name,attributes){tree.openElements.popUntilTableScopeMarker(),tree.activeFormattingElements.push(Marker),tree.insertElement(name,attributes),tree.setInsertionMode(\"inCaption\")},modes.inTable.startTagColgroup=function(name,attributes){tree.openElements.popUntilTableScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inColumnGroup\")},modes.inTable.startTagCol=function(name,attributes){this.startTagColgroup(\"colgroup\",[]),tree.insertionMode.processStartTag(name,attributes)},modes.inTable.startTagRowGroup=function(name,attributes){tree.openElements.popUntilTableScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inTableBody\")},modes.inTable.startTagImplyTbody=function(name,attributes){this.startTagRowGroup(\"tbody\",[]),tree.insertionMode.processStartTag(name,attributes)},modes.inTable.startTagTable=function(name,attributes){tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"table\",endName:\"table\"}),tree.insertionMode.processEndTag(\"table\"),tree.context||tree.insertionMode.processStartTag(name,attributes)},modes.inTable.startTagStyleScript=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inTable.startTagInput=function(name,attributes){for(var key in attributes)if(\"type\"==attributes[key].nodeName.toLowerCase()){if(\"hidden\"==attributes[key].nodeValue.toLowerCase())return tree.parseError(\"unexpected-hidden-input-in-table\"),tree.insertElement(name,attributes),tree.openElements.pop(),void 0;break}this.startTagOther(name,attributes)},modes.inTable.startTagForm=function(name,attributes){tree.parseError(\"unexpected-form-in-table\"),tree.form||(tree.insertElement(name,attributes),tree.form=tree.currentStackItem(),tree.openElements.pop())},modes.inTable.startTagOther=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag-implies-table-voodoo\",{name:name}),tree.redirectAttachToFosterParent=!0,modes.inBody.processStartTag(name,attributes,selfClosing),tree.redirectAttachToFosterParent=!1},modes.inTable.endTagTable=function(name){tree.openElements.inTableScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early-named\",{gotName:\"table\",expectedName:tree.currentStackItem().localName}),tree.openElements.popUntilPopped(\"table\"),tree.resetInsertionMode()):(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name}))},modes.inTable.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inTable.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-implies-table-voodoo\",{name:name}),tree.redirectAttachToFosterParent=!0,modes.inBody.processEndTag(name),tree.redirectAttachToFosterParent=!1},modes.inTableText=Object.create(modes.base),modes.inTableText.flushCharacters=function(){var characters=tree.pendingTableCharacters.join(\"\");isAllWhitespace(characters)?tree.insertText(characters):(tree.redirectAttachToFosterParent=!0,tree.reconstructActiveFormattingElements(),tree.insertText(characters),tree.framesetOk=!1,tree.redirectAttachToFosterParent=!1),tree.pendingTableCharacters=[]},modes.inTableText.processComment=function(data){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processComment(data)},modes.inTableText.processEOF=function(){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processEOF()},modes.inTableText.processCharacters=function(buffer){var characters=buffer.takeRemaining();characters=characters.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"\"}),characters&&tree.pendingTableCharacters.push(characters)},modes.inTableText.processStartTag=function(name,attributes,selfClosing){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.inTableText.processEndTag=function(name,attributes){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processEndTag(name,attributes)},modes.inTableBody=Object.create(modes.base),modes.inTableBody.start_tag_handlers={html:\"startTagHtml\",tr:\"startTagTr\",td:\"startTagTableCell\",th:\"startTagTableCell\",caption:\"startTagTableOther\",col:\"startTagTableOther\",colgroup:\"startTagTableOther\",tbody:\"startTagTableOther\",tfoot:\"startTagTableOther\",thead:\"startTagTableOther\",\"-default\":\"startTagOther\"},modes.inTableBody.end_tag_handlers={table:\"endTagTable\",tbody:\"endTagTableRowGroup\",tfoot:\"endTagTableRowGroup\",thead:\"endTagTableRowGroup\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",td:\"endTagIgnore\",th:\"endTagIgnore\",tr:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inTableBody.processCharacters=function(data){modes.inTable.processCharacters(data)},modes.inTableBody.startTagTr=function(name,attributes){tree.openElements.popUntilTableBodyScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inRow\")},modes.inTableBody.startTagTableCell=function(name,attributes){tree.parseError(\"unexpected-cell-in-table-body\",{name:name}),this.startTagTr(\"tr\",[]),tree.insertionMode.processStartTag(name,attributes)},modes.inTableBody.startTagTableOther=function(name,attributes){tree.openElements.inTableScope(\"tbody\")||tree.openElements.inTableScope(\"thead\")||tree.openElements.inTableScope(\"tfoot\")?(tree.openElements.popUntilTableBodyScopeMarker(),this.endTagTableRowGroup(tree.currentStackItem().localName),tree.insertionMode.processStartTag(name,attributes)):tree.parseError(\"unexpected-start-tag\",{name:name})},modes.inTableBody.startTagOther=function(name,attributes){modes.inTable.processStartTag(name,attributes)},modes.inTableBody.endTagTableRowGroup=function(name){tree.openElements.inTableScope(name)?(tree.openElements.popUntilTableBodyScopeMarker(),tree.popElement(),tree.setInsertionMode(\"inTable\")):tree.parseError(\"unexpected-end-tag-in-table-body\",{name:name})},modes.inTableBody.endTagTable=function(name){tree.openElements.inTableScope(\"tbody\")||tree.openElements.inTableScope(\"thead\")||tree.openElements.inTableScope(\"tfoot\")?(tree.openElements.popUntilTableBodyScopeMarker(),this.endTagTableRowGroup(tree.currentStackItem().localName),tree.insertionMode.processEndTag(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inTableBody.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag-in-table-body\",{name:name})},modes.inTableBody.endTagOther=function(name){modes.inTable.processEndTag(name)},modes.inSelect=Object.create(modes.base),modes.inSelect.start_tag_handlers={html:\"startTagHtml\",option:\"startTagOption\",optgroup:\"startTagOptgroup\",select:\"startTagSelect\",input:\"startTagInput\",keygen:\"startTagInput\",textarea:\"startTagInput\",script:\"startTagScript\",\"-default\":\"startTagOther\"},modes.inSelect.end_tag_handlers={option:\"endTagOption\",optgroup:\"endTagOptgroup\",select:\"endTagSelect\",caption:\"endTagTableElements\",table:\"endTagTableElements\",tbody:\"endTagTableElements\",tfoot:\"endTagTableElements\",thead:\"endTagTableElements\",tr:\"endTagTableElements\",td:\"endTagTableElements\",th:\"endTagTableElements\",\"-default\":\"endTagOther\"},modes.inSelect.processCharacters=function(buffer){var data=buffer.takeRemaining();data=data.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"\"}),data&&tree.insertText(data)},modes.inSelect.startTagOption=function(name,attributes){\"option\"==tree.currentStackItem().localName&&tree.popElement(),tree.insertElement(name,attributes)},modes.inSelect.startTagOptgroup=function(name,attributes){\"option\"==tree.currentStackItem().localName&&tree.popElement(),\"optgroup\"==tree.currentStackItem().localName&&tree.popElement(),tree.insertElement(name,attributes)},modes.inSelect.endTagOption=function(name){return\"option\"!==tree.currentStackItem().localName?(tree.parseError(\"unexpected-end-tag-in-select\",{name:name}),void 0):(tree.popElement(),void 0)},modes.inSelect.endTagOptgroup=function(){\"option\"==tree.currentStackItem().localName&&\"optgroup\"==tree.openElements.item(tree.openElements.length-2).localName&&tree.popElement(),\"optgroup\"==tree.currentStackItem().localName?tree.popElement():tree.parseError(\"unexpected-end-tag-in-select\",{name:\"optgroup\"})},modes.inSelect.startTagSelect=function(){tree.parseError(\"unexpected-select-in-select\"),this.endTagSelect(\"select\")},modes.inSelect.endTagSelect=function(name){tree.openElements.inTableScope(\"select\")?(tree.openElements.popUntilPopped(\"select\"),tree.resetInsertionMode()):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inSelect.startTagInput=function(name,attributes){tree.parseError(\"unexpected-input-in-select\"),tree.openElements.inSelectScope(\"select\")&&(this.endTagSelect(\"select\"),tree.insertionMode.processStartTag(name,attributes))},modes.inSelect.startTagScript=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inSelect.endTagTableElements=function(name){tree.parseError(\"unexpected-end-tag-in-select\",{name:name}),tree.openElements.inTableScope(name)&&(this.endTagSelect(\"select\"),tree.insertionMode.processEndTag(name))},modes.inSelect.startTagOther=function(name){tree.parseError(\"unexpected-start-tag-in-select\",{name:name})},modes.inSelect.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-in-select\",{name:name})},modes.inSelectInTable=Object.create(modes.base),modes.inSelectInTable.start_tag_handlers={caption:\"startTagTable\",table:\"startTagTable\",tbody:\"startTagTable\",tfoot:\"startTagTable\",thead:\"startTagTable\",tr:\"startTagTable\",td:\"startTagTable\",th:\"startTagTable\",\"-default\":\"startTagOther\"},modes.inSelectInTable.end_tag_handlers={caption:\"endTagTable\",table:\"endTagTable\",tbody:\"endTagTable\",tfoot:\"endTagTable\",thead:\"endTagTable\",tr:\"endTagTable\",td:\"endTagTable\",th:\"endTagTable\",\"-default\":\"endTagOther\"},modes.inSelectInTable.processCharacters=function(data){modes.inSelect.processCharacters(data)},modes.inSelectInTable.startTagTable=function(name,attributes){tree.parseError(\"unexpected-table-element-start-tag-in-select-in-table\",{name:name}),this.endTagOther(\"select\"),tree.insertionMode.processStartTag(name,attributes)},modes.inSelectInTable.startTagOther=function(name,attributes,selfClosing){modes.inSelect.processStartTag(name,attributes,selfClosing)},modes.inSelectInTable.endTagTable=function(name){tree.parseError(\"unexpected-table-element-end-tag-in-select-in-table\",{name:name}),tree.openElements.inTableScope(name)&&(this.endTagOther(\"select\"),tree.insertionMode.processEndTag(name))},modes.inSelectInTable.endTagOther=function(name){modes.inSelect.processEndTag(name)},modes.inRow=Object.create(modes.base),modes.inRow.start_tag_handlers={html:\"startTagHtml\",td:\"startTagTableCell\",th:\"startTagTableCell\",caption:\"startTagTableOther\",col:\"startTagTableOther\",colgroup:\"startTagTableOther\",tbody:\"startTagTableOther\",tfoot:\"startTagTableOther\",thead:\"startTagTableOther\",tr:\"startTagTableOther\",\"-default\":\"startTagOther\"},modes.inRow.end_tag_handlers={tr:\"endTagTr\",table:\"endTagTable\",tbody:\"endTagTableRowGroup\",tfoot:\"endTagTableRowGroup\",thead:\"endTagTableRowGroup\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",td:\"endTagIgnore\",th:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inRow.processCharacters=function(data){modes.inTable.processCharacters(data)},modes.inRow.startTagTableCell=function(name,attributes){tree.openElements.popUntilTableRowScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inCell\"),tree.activeFormattingElements.push(Marker)},modes.inRow.startTagTableOther=function(name,attributes){var ignoreEndTag=this.ignoreEndTagTr();this.endTagTr(\"tr\"),ignoreEndTag||tree.insertionMode.processStartTag(name,attributes)},modes.inRow.startTagOther=function(name,attributes,selfClosing){modes.inTable.processStartTag(name,attributes,selfClosing)},modes.inRow.endTagTr=function(name){this.ignoreEndTagTr()?(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name})):(tree.openElements.popUntilTableRowScopeMarker(),tree.popElement(),tree.setInsertionMode(\"inTableBody\"))},modes.inRow.endTagTable=function(name){var ignoreEndTag=this.ignoreEndTagTr();this.endTagTr(\"tr\"),ignoreEndTag||tree.insertionMode.processEndTag(name)},modes.inRow.endTagTableRowGroup=function(name){tree.openElements.inTableScope(name)?(this.endTagTr(\"tr\"),tree.insertionMode.processEndTag(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inRow.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag-in-table-row\",{name:name})},modes.inRow.endTagOther=function(name){modes.inTable.processEndTag(name)},modes.inRow.ignoreEndTagTr=function(){return!tree.openElements.inTableScope(\"tr\")},modes.afterAfterFrameset=Object.create(modes.base),modes.afterAfterFrameset.start_tag_handlers={html:\"startTagHtml\",noframes:\"startTagNoFrames\",\"-default\":\"startTagOther\"},modes.afterAfterFrameset.processEOF=function(){},modes.afterAfterFrameset.processComment=function(data){tree.insertComment(data,tree.document)},modes.afterAfterFrameset.processCharacters=function(buffer){for(var characters=buffer.takeRemaining(),whitespace=\"\",i=0;characters.length>i;i++){var ch=characters[i];isWhitespace(ch)&&(whitespace+=ch)}whitespace&&(tree.reconstructActiveFormattingElements(),tree.insertText(whitespace)),whitespace.length<characters.length&&tree.parseError(\"expected-eof-but-got-char\")},modes.afterAfterFrameset.startTagNoFrames=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.afterAfterFrameset.startTagOther=function(name){tree.parseError(\"expected-eof-but-got-start-tag\",{name:name})},modes.afterAfterFrameset.processEndTag=function(name){tree.parseError(\"expected-eof-but-got-end-tag\",{name:name})},modes.text=Object.create(modes.base),modes.text.start_tag_handlers={\"-default\":\"startTagOther\"},modes.text.end_tag_handlers={script:\"endTagScript\",\"-default\":\"endTagOther\"},modes.text.processCharacters=function(buffer){tree.shouldSkipLeadingNewline&&(tree.shouldSkipLeadingNewline=!1,buffer.skipAtMostOneLeadingNewline());var data=buffer.takeRemaining();data&&tree.insertText(data)},modes.text.processEOF=function(){tree.parseError(\"expected-named-closing-tag-but-got-eof\",{name:tree.currentStackItem().localName}),tree.openElements.pop(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processEOF()},modes.text.startTagOther=function(name){throw\"Tried to process start tag \"+name+\" in RCDATA/RAWTEXT mode\"},modes.text.endTagScript=function(){var node=tree.openElements.pop();assert.ok(\"script\"==node.localName),tree.setInsertionMode(tree.originalInsertionMode)},modes.text.endTagOther=function(){tree.openElements.pop(),tree.setInsertionMode(tree.originalInsertionMode)}}function formatMessage(format,args){return format.replace(RegExp(\"{[0-9a-z-]+}\",\"gi\"),function(match){return args[match.slice(1,-1)]||match})}var assert=_dereq_(\"assert\"),messages=_dereq_(\"./messages.json\"),constants=_dereq_(\"./constants\");_dereq_(\"events\").EventEmitter;var Tokenizer=_dereq_(\"./Tokenizer\").Tokenizer,ElementStack=_dereq_(\"./ElementStack\").ElementStack,StackItem=_dereq_(\"./StackItem\").StackItem,Marker={};CharacterBuffer.prototype.skipAtMostOneLeadingNewline=function(){\"\\n\"===this.characters[this.current]&&this.current++},CharacterBuffer.prototype.skipLeadingWhitespace=function(){for(;isWhitespace(this.characters[this.current]);)if(++this.current==this.end)return},CharacterBuffer.prototype.skipLeadingNonWhitespace=function(){for(;!isWhitespace(this.characters[this.current]);)if(++this.current==this.end)return},CharacterBuffer.prototype.takeRemaining=function(){return this.characters.substring(this.current)},CharacterBuffer.prototype.takeLeadingWhitespace=function(){var start=this.current;return this.skipLeadingWhitespace(),start===this.current?\"\":this.characters.substring(start,this.current-start)},Object.defineProperty(CharacterBuffer.prototype,\"length\",{get:function(){return this.end-this.current}}),TreeBuilder.prototype.setInsertionMode=function(name){this.insertionMode=this.insertionModes[name],this.insertionModeName=name},TreeBuilder.prototype.adoptionAgencyEndTag=function(name){function isActiveFormattingElement(el){return el===formattingElement}for(var formattingElement,outerIterationLimit=8,innerIterationLimit=3,outerLoopCounter=0;outerIterationLimit>outerLoopCounter++;){if(formattingElement=this.elementInActiveFormattingElements(name),!formattingElement||this.openElements.contains(formattingElement)&&!this.openElements.inScope(formattingElement.localName))return this.parseError(\"adoption-agency-1.1\",{name:name}),!1;if(!this.openElements.contains(formattingElement))return this.parseError(\"adoption-agency-1.2\",{name:name}),this.removeElementFromActiveFormattingElements(formattingElement),!0;this.openElements.inScope(formattingElement.localName)||this.parseError(\"adoption-agency-4.4\",{name:name}),formattingElement!=this.currentStackItem()&&this.parseError(\"adoption-agency-1.3\",{name:name});var furthestBlock=this.openElements.furthestBlockForFormattingElement(formattingElement.node);if(!furthestBlock)return this.openElements.remove_openElements_until(isActiveFormattingElement),this.removeElementFromActiveFormattingElements(formattingElement),!0;for(var afeIndex=this.openElements.elements.indexOf(formattingElement),commonAncestor=this.openElements.item(afeIndex-1),bookmark=this.activeFormattingElements.indexOf(formattingElement),node=furthestBlock,lastNode=furthestBlock,index=this.openElements.elements.indexOf(node),innerLoopCounter=0;innerIterationLimit>innerLoopCounter++;)if(index-=1,node=this.openElements.item(index),0>this.activeFormattingElements.indexOf(node))this.openElements.elements.splice(index,1);else{if(node==formattingElement)break;lastNode==furthestBlock&&(bookmark=this.activeFormattingElements.indexOf(node)+1);var clone=this.createElement(node.namespaceURI,node.localName,node.attributes),newNode=new StackItem(node.namespaceURI,node.localName,node.attributes,clone);this.activeFormattingElements[this.activeFormattingElements.indexOf(node)]=newNode,this.openElements.elements[this.openElements.elements.indexOf(node)]=newNode,node=newNode,this.detachFromParent(lastNode.node),this.attachNode(lastNode.node,node.node),lastNode=node}this.detachFromParent(lastNode.node),commonAncestor.isFosterParenting()?this.insertIntoFosterParent(lastNode.node):this.attachNode(lastNode.node,commonAncestor.node);var clone=this.createElement(\"http://www.w3.org/1999/xhtml\",formattingElement.localName,formattingElement.attributes),formattingClone=new StackItem(formattingElement.namespaceURI,formattingElement.localName,formattingElement.attributes,clone);this.reparentChildren(furthestBlock.node,clone),this.attachNode(clone,furthestBlock.node),this.removeElementFromActiveFormattingElements(formattingElement),this.activeFormattingElements.splice(Math.min(bookmark,this.activeFormattingElements.length),0,formattingClone),this.openElements.remove(formattingElement),this.openElements.elements.splice(this.openElements.elements.indexOf(furthestBlock)+1,0,formattingClone)}return!0},TreeBuilder.prototype.start=function(){throw\"Not mplemented\"},TreeBuilder.prototype.startTokenization=function(tokenizer){if(this.tokenizer=tokenizer,this.compatMode=\"no quirks\",this.originalInsertionMode=\"initial\",this.framesetOk=!0,this.openElements=new ElementStack,this.activeFormattingElements=[],this.start(),this.context){switch(this.context){case\"title\":case\"textarea\":this.tokenizer.setState(Tokenizer.RCDATA);break;case\"style\":case\"xmp\":case\"iframe\":case\"noembed\":case\"noframes\":this.tokenizer.setState(Tokenizer.RAWTEXT);break;case\"script\":this.tokenizer.setState(Tokenizer.SCRIPT_DATA);break;case\"noscript\":this.scriptingEnabled&&this.tokenizer.setState(Tokenizer.RAWTEXT);break;case\"plaintext\":this.tokenizer.setState(Tokenizer.PLAINTEXT)}this.insertHtmlElement(),this.resetInsertionMode()}else this.setInsertionMode(\"initial\")},TreeBuilder.prototype.processToken=function(token){this.selfClosingFlagAcknowledged=!1;var insertionMode,currentNode=this.openElements.top||null;switch(insertionMode=!currentNode||!currentNode.isForeign()||currentNode.isMathMLTextIntegrationPoint()&&(\"StartTag\"==token.type&&!(token.name in{mglyph:0,malignmark:0})||\"Characters\"===token.type)||\"http://www.w3.org/1998/Math/MathML\"==currentNode.namespaceURI&&\"annotation-xml\"==currentNode.localName&&\"StartTag\"==token.type&&\"svg\"==token.name||currentNode.isHtmlIntegrationPoint()&&token.type in{StartTag:0,Characters:0}||\"EOF\"==token.type?this.insertionMode:this.insertionModes.inForeignContent,token.type){case\"Characters\":var buffer=new CharacterBuffer(token.data);insertionMode.processCharacters(buffer);break;case\"Comment\":insertionMode.processComment(token.data);break;case\"StartTag\":insertionMode.processStartTag(token.name,token.data,token.selfClosing);break;case\"EndTag\":insertionMode.processEndTag(token.name);break;case\"Doctype\":insertionMode.processDoctype(token.name,token.publicId,token.systemId,token.forceQuirks);break;case\"EOF\":insertionMode.processEOF()}},TreeBuilder.prototype.isCdataSectionAllowed=function(){return this.openElements.length>0&&this.currentStackItem().isForeign()},TreeBuilder.prototype.isSelfClosingFlagAcknowledged=function(){return this.selfClosingFlagAcknowledged},TreeBuilder.prototype.createElement=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.attachNode=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.attachNodeToFosterParent=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.detachFromParent=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.addAttributesToElement=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.insertHtmlElement=function(attributes){var root=this.createElement(\"http://www.w3.org/1999/xhtml\",\"html\",attributes);return this.attachNode(root,this.document),this.openElements.pushHtmlElement(new StackItem(\"http://www.w3.org/1999/xhtml\",\"html\",attributes,root)),root},TreeBuilder.prototype.insertHeadElement=function(attributes){var element=this.createElement(\"http://www.w3.org/1999/xhtml\",\"head\",attributes);return this.head=new StackItem(\"http://www.w3.org/1999/xhtml\",\"head\",attributes,element),this.attachNode(element,this.openElements.top.node),this.openElements.pushHeadElement(this.head),element},TreeBuilder.prototype.insertBodyElement=function(attributes){var element=this.createElement(\"http://www.w3.org/1999/xhtml\",\"body\",attributes);return this.attachNode(element,this.openElements.top.node),this.openElements.pushBodyElement(new StackItem(\"http://www.w3.org/1999/xhtml\",\"body\",attributes,element)),element},TreeBuilder.prototype.insertIntoFosterParent=function(node){var tableIndex=this.openElements.findIndex(\"table\"),tableElement=this.openElements.item(tableIndex).node;return 0===tableIndex?this.attachNode(node,tableElement):(this.attachNodeToFosterParent(node,tableElement,this.openElements.item(tableIndex-1).node),void 0)},TreeBuilder.prototype.insertElement=function(name,attributes,namespaceURI,selfClosing){namespaceURI||(namespaceURI=\"http://www.w3.org/1999/xhtml\");var element=this.createElement(namespaceURI,name,attributes);this.shouldFosterParent()?this.insertIntoFosterParent(element):this.attachNode(element,this.openElements.top.node),selfClosing||this.openElements.push(new StackItem(namespaceURI,name,attributes,element))},TreeBuilder.prototype.insertFormattingElement=function(name,attributes){this.insertElement(name,attributes,\"http://www.w3.org/1999/xhtml\"),this.appendElementToActiveFormattingElements(this.currentStackItem())},TreeBuilder.prototype.insertSelfClosingElement=function(name,attributes){this.selfClosingFlagAcknowledged=!0,this.insertElement(name,attributes,\"http://www.w3.org/1999/xhtml\",!0)},TreeBuilder.prototype.insertForeignElement=function(name,attributes,namespaceURI,selfClosing){selfClosing&&(this.selfClosingFlagAcknowledged=!0),this.insertElement(name,attributes,namespaceURI,selfClosing)},TreeBuilder.prototype.insertComment=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.insertDoctype=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.insertText=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.currentStackItem=function(){return this.openElements.top},TreeBuilder.prototype.popElement=function(){return this.openElements.pop()},TreeBuilder.prototype.shouldFosterParent=function(){return this.redirectAttachToFosterParent&&this.currentStackItem().isFosterParenting()},TreeBuilder.prototype.generateImpliedEndTags=function(exclude){var name=this.openElements.top.localName;-1!=[\"dd\",\"dt\",\"li\",\"option\",\"optgroup\",\"p\",\"rp\",\"rt\"].indexOf(name)&&name!=exclude&&(this.popElement(),this.generateImpliedEndTags(exclude))},TreeBuilder.prototype.reconstructActiveFormattingElements=function(){if(0!==this.activeFormattingElements.length){var i=this.activeFormattingElements.length-1,entry=this.activeFormattingElements[i];if(entry!=Marker&&!this.openElements.contains(entry)){for(;entry!=Marker&&!this.openElements.contains(entry)&&(i-=1,entry=this.activeFormattingElements[i]););for(;;){i+=1,entry=this.activeFormattingElements[i],this.insertElement(entry.localName,entry.attributes);var element=this.currentStackItem();if(this.activeFormattingElements[i]=element,element==this.activeFormattingElements[this.activeFormattingElements.length-1])break}}}},TreeBuilder.prototype.ensureNoahsArkCondition=function(item){var kNoahsArkCapacity=3;if(!(kNoahsArkCapacity>this.activeFormattingElements.length)){for(var candidates=[],newItemAttributeCount=item.attributes.length,i=this.activeFormattingElements.length-1;i>=0;i--){var candidate=this.activeFormattingElements[i];if(candidate===Marker)break;item.localName===candidate.localName&&item.namespaceURI===candidate.namespaceURI&&candidate.attributes.length==newItemAttributeCount&&candidates.push(candidate)}if(!(kNoahsArkCapacity>candidates.length)){for(var remainingCandidates=[],attributes=item.attributes,i=0;attributes.length>i;i++){for(var attribute=attributes[i],j=0;candidates.length>j;j++){var candidate=candidates[j],candidateAttribute=getAttribute(candidate,attribute.nodeName);candidateAttribute&&candidateAttribute.nodeValue===attribute.nodeValue&&remainingCandidates.push(candidate)}if(kNoahsArkCapacity>remainingCandidates.length)return;candidates=remainingCandidates,remainingCandidates=[]}for(var i=kNoahsArkCapacity-1;candidates.length>i;i++)this.removeElementFromActiveFormattingElements(candidates[i])}}},TreeBuilder.prototype.appendElementToActiveFormattingElements=function(item){this.ensureNoahsArkCondition(item),this.activeFormattingElements.push(item)},TreeBuilder.prototype.removeElementFromActiveFormattingElements=function(item){var index=this.activeFormattingElements.indexOf(item);index>=0&&this.activeFormattingElements.splice(index,1)},TreeBuilder.prototype.elementInActiveFormattingElements=function(name){for(var els=this.activeFormattingElements,i=els.length-1;i>=0&&els[i]!=Marker;i--)if(els[i].localName==name)return els[i];return!1},TreeBuilder.prototype.clearActiveFormattingElements=function(){for(;0!==this.activeFormattingElements.length&&this.activeFormattingElements.pop()!=Marker;);},TreeBuilder.prototype.reparentChildren=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.setFragmentContext=function(context){this.context=context},TreeBuilder.prototype.parseError=function(code,args){if(this.errorHandler){var message=formatMessage(messages[code],args);this.errorHandler.error(message,this.tokenizer._inputStream.location(),code)}},TreeBuilder.prototype.resetInsertionMode=function(){for(var last=!1,node=null,i=this.openElements.length-1;i>=0;i--){if(node=this.openElements.item(i),0===i&&(assert.ok(this.context),last=!0,node=new StackItem(\"http://www.w3.org/1999/xhtml\",this.context,[],null)),\"http://www.w3.org/1999/xhtml\"===node.namespaceURI){if(\"select\"===node.localName)return this.setInsertionMode(\"inSelect\");if(\"td\"===node.localName||\"th\"===node.localName)return this.setInsertionMode(\"inCell\");if(\"tr\"===node.localName)return this.setInsertionMode(\"inRow\");if(\"tbody\"===node.localName||\"thead\"===node.localName||\"tfoot\"===node.localName)return this.setInsertionMode(\"inTableBody\");if(\"caption\"===node.localName)return this.setInsertionMode(\"inCaption\");if(\"colgroup\"===node.localName)return this.setInsertionMode(\"inColumnGroup\");if(\"table\"===node.localName)return this.setInsertionMode(\"inTable\");if(\"head\"===node.localName&&!last)return this.setInsertionMode(\"inHead\");if(\"body\"===node.localName)return this.setInsertionMode(\"inBody\");if(\"frameset\"===node.localName)return this.setInsertionMode(\"inFrameset\");if(\"html\"===node.localName)return this.openElements.headElement?this.setInsertionMode(\"afterHead\"):this.setInsertionMode(\"beforeHead\")}if(last)return this.setInsertionMode(\"inBody\")}},TreeBuilder.prototype.processGenericRCDATAStartTag=function(name,attributes){this.insertElement(name,attributes),this.tokenizer.setState(Tokenizer.RCDATA),this.originalInsertionMode=this.insertionModeName,this.setInsertionMode(\"text\")},TreeBuilder.prototype.processGenericRawTextStartTag=function(name,attributes){this.insertElement(name,attributes),this.tokenizer.setState(Tokenizer.RAWTEXT),this.originalInsertionMode=this.insertionModeName,this.setInsertionMode(\"text\")},TreeBuilder.prototype.adjustMathMLAttributes=function(attributes){return attributes.forEach(function(a){a.namespaceURI=\"http://www.w3.org/1998/Math/MathML\",constants.MATHMLAttributeMap[a.nodeName]&&(a.nodeName=constants.MATHMLAttributeMap[a.nodeName])}),attributes},TreeBuilder.prototype.adjustSVGTagNameCase=function(name){return constants.SVGTagMap[name]||name},TreeBuilder.prototype.adjustSVGAttributes=function(attributes){return attributes.forEach(function(a){a.namespaceURI=\"http://www.w3.org/2000/svg\",constants.SVGAttributeMap[a.nodeName]&&(a.nodeName=constants.SVGAttributeMap[a.nodeName])}),attributes},TreeBuilder.prototype.adjustForeignAttributes=function(attributes){for(var i=0;attributes.length>i;i++){var attribute=attributes[i],adjusted=constants.ForeignAttributeMap[attribute.nodeName];adjusted&&(attribute.nodeName=adjusted.localName,attribute.prefix=adjusted.prefix,attribute.namespaceURI=adjusted.namespaceURI)}return attributes},exports.TreeBuilder=TreeBuilder},{\"./ElementStack\":1,\"./StackItem\":4,\"./Tokenizer\":5,\"./constants\":7,\"./messages.json\":8,assert:13,events:16}],7:[function(_dereq_,module,exports){exports.SVGTagMap={altglyph:\"altGlyph\",altglyphdef:\"altGlyphDef\",altglyphitem:\"altGlyphItem\",animatecolor:\"animateColor\",animatemotion:\"animateMotion\",animatetransform:\"animateTransform\",clippath:\"clipPath\",feblend:\"feBlend\",fecolormatrix:\"feColorMatrix\",fecomponenttransfer:\"feComponentTransfer\",fecomposite:\"feComposite\",feconvolvematrix:\"feConvolveMatrix\",fediffuselighting:\"feDiffuseLighting\",fedisplacementmap:\"feDisplacementMap\",fedistantlight:\"feDistantLight\",feflood:\"feFlood\",fefunca:\"feFuncA\",fefuncb:\"feFuncB\",fefuncg:\"feFuncG\",fefuncr:\"feFuncR\",fegaussianblur:\"feGaussianBlur\",feimage:\"feImage\",femerge:\"feMerge\",femergenode:\"feMergeNode\",femorphology:\"feMorphology\",feoffset:\"feOffset\",fepointlight:\"fePointLight\",fespecularlighting:\"feSpecularLighting\",fespotlight:\"feSpotLight\",fetile:\"feTile\",feturbulence:\"feTurbulence\",foreignobject:\"foreignObject\",glyphref:\"glyphRef\",lineargradient:\"linearGradient\",radialgradient:\"radialGradient\",textpath:\"textPath\"},exports.MATHMLAttributeMap={definitionurl:\"definitionURL\"},exports.SVGAttributeMap={attributename:\"attributeName\",attributetype:\"attributeType\",basefrequency:\"baseFrequency\",baseprofile:\"baseProfile\",calcmode:\"calcMode\",clippathunits:\"clipPathUnits\",contentscripttype:\"contentScriptType\",contentstyletype:\"contentStyleType\",diffuseconstant:\"diffuseConstant\",edgemode:\"edgeMode\",externalresourcesacequired:\"externalResourcesRequired\",filterres:\"filterRes\",filterunits:\"filterUnits\",glyphref:\"glyphRef\",gradienttransform:\"gradientTransform\",gradientunits:\"gradientUnits\",kernelmatrix:\"kernelMatrix\",kernelunitlength:\"kernelUnitLength\",keypoints:\"keyPoints\",keysplines:\"keySplines\",keytimes:\"keyTimes\",lengthadjust:\"lengthAdjust\",limitingconeangle:\"limitingConeAngle\",markerheight:\"markerHeight\",markerunits:\"markerUnits\",markerwidth:\"markerWidth\",maskcontentunits:\"maskContentUnits\",maskunits:\"maskUnits\",numoctaves:\"numOctaves\",pathlength:\"pathLength\",patterncontentunits:\"patternContentUnits\",patterntransform:\"patternTransform\",patternunits:\"patternUnits\",pointsatx:\"pointsAtX\",pointsaty:\"pointsAtY\",pointsatz:\"pointsAtZ\",preservealpha:\"preserveAlpha\",preserveaspectratio:\"preserveAspectRatio\",primitiveunits:\"primitiveUnits\",refx:\"refX\",refy:\"refY\",repeatcount:\"repeatCount\",repeatdur:\"repeatDur\",acequiredextensions:\"acequiredExtensions\",acequiredfeatures:\"acequiredFeatures\",specularconstant:\"specularConstant\",specularexponent:\"specularExponent\",spreadmethod:\"spreadMethod\",startoffset:\"startOffset\",stddeviation:\"stdDeviation\",stitchtiles:\"stitchTiles\",surfacescale:\"surfaceScale\",systemlanguage:\"systemLanguage\",tablevalues:\"tableValues\",targetx:\"targetX\",targety:\"targetY\",textlength:\"textLength\",viewbox:\"viewBox\",viewtarget:\"viewTarget\",xchannelselector:\"xChannelSelector\",ychannelselector:\"yChannelSelector\",zoomandpan:\"zoomAndPan\"},exports.ForeignAttributeMap={\"xlink:actuate\":{prefix:\"xlink\",localName:\"actuate\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:arcrole\":{prefix:\"xlink\",localName:\"arcrole\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:href\":{prefix:\"xlink\",localName:\"href\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:role\":{prefix:\"xlink\",localName:\"role\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:show\":{prefix:\"xlink\",localName:\"show\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:title\":{prefix:\"xlink\",localName:\"title\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:type\":{prefix:\"xlink\",localName:\"title\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xml:base\":{prefix:\"xml\",localName:\"base\",namespaceURI:\"http://www.w3.org/XML/1998/namespace\"},\"xml:lang\":{prefix:\"xml\",localName:\"lang\",namespaceURI:\"http://www.w3.org/XML/1998/namespace\"},\"xml:space\":{prefix:\"xml\",localName:\"space\",namespaceURI:\"http://www.w3.org/XML/1998/namespace\"},xmlns:{prefix:null,localName:\"xmlns\",namespaceURI:\"http://www.w3.org/2000/xmlns/\"},\"xmlns:xlink\":{prefix:\"xmlns\",localName:\"xlink\",namespaceURI:\"http://www.w3.org/2000/xmlns/\"}}\n},{}],8:[function(_dereq_,module){module.exports={\"null-character\":\"Null character in input stream, replaced with U+FFFD.\",\"invalid-codepoint\":\"Invalid codepoint in stream\",\"incorrectly-placed-solidus\":\"Solidus (/) incorrectly placed in tag.\",\"incorrect-cr-newline-entity\":\"Incorrect CR newline entity, replaced with LF.\",\"illegal-windows-1252-entity\":\"Entity used with illegal number (windows-1252 reference).\",\"cant-convert-numeric-entity\":\"Numeric entity couldn't be converted to character (codepoint U+{charAsInt}).\",\"invalid-numeric-entity-replaced\":\"Numeric entity represents an illegal codepoint. Expanded to the C1 controls range.\",\"numeric-entity-without-semicolon\":\"Numeric entity didn't end with ';'.\",\"expected-numeric-entity-but-got-eof\":\"Numeric entity expected. Got end of file instead.\",\"expected-numeric-entity\":\"Numeric entity expected but none found.\",\"named-entity-without-semicolon\":\"Named entity didn't end with ';'.\",\"expected-named-entity\":\"Named entity expected. Got none.\",\"attributes-in-end-tag\":\"End tag contains unexpected attributes.\",\"self-closing-flag-on-end-tag\":\"End tag contains unexpected self-closing flag.\",\"bare-less-than-sign-at-eof\":\"End of file after <.\",\"expected-tag-name-but-got-right-bracket\":\"Expected tag name. Got '>' instead.\",\"expected-tag-name-but-got-question-mark\":\"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)\",\"expected-tag-name\":\"Expected tag name. Got something else instead.\",\"expected-closing-tag-but-got-right-bracket\":\"Expected closing tag. Got '>' instead. Ignoring '</>'.\",\"expected-closing-tag-but-got-eof\":\"Expected closing tag. Unexpected end of file.\",\"expected-closing-tag-but-got-char\":\"Expected closing tag. Unexpected character '{data}' found.\",\"eof-in-tag-name\":\"Unexpected end of file in the tag name.\",\"expected-attribute-name-but-got-eof\":\"Unexpected end of file. Expected attribute name instead.\",\"eof-in-attribute-name\":\"Unexpected end of file in attribute name.\",\"invalid-character-in-attribute-name\":\"Invalid character in attribute name.\",\"duplicate-attribute\":\"Dropped duplicate attribute '{name}' on tag.\",\"expected-end-of-tag-but-got-eof\":\"Unexpected end of file. Expected = or end of tag.\",\"expected-attribute-value-but-got-eof\":\"Unexpected end of file. Expected attribute value.\",\"expected-attribute-value-but-got-right-bracket\":\"Expected attribute value. Got '>' instead.\",\"unexpected-character-in-unquoted-attribute-value\":\"Unexpected character in unquoted attribute\",\"invalid-character-after-attribute-name\":\"Unexpected character after attribute name.\",\"unexpected-character-after-attribute-value\":\"Unexpected character after attribute value.\",\"eof-in-attribute-value-double-quote\":'Unexpected end of file in attribute value (\").',\"eof-in-attribute-value-single-quote\":\"Unexpected end of file in attribute value (').\",\"eof-in-attribute-value-no-quotes\":\"Unexpected end of file in attribute value.\",\"eof-after-attribute-value\":\"Unexpected end of file after attribute value.\",\"unexpected-eof-after-solidus-in-tag\":\"Unexpected end of file in tag. Expected >.\",\"unexpected-character-after-solidus-in-tag\":\"Unexpected character after / in tag. Expected >.\",\"expected-dashes-or-doctype\":\"Expected '--' or 'DOCTYPE'. Not found.\",\"unexpected-bang-after-double-dash-in-comment\":\"Unexpected ! after -- in comment.\",\"incorrect-comment\":\"Incorrect comment.\",\"eof-in-comment\":\"Unexpected end of file in comment.\",\"eof-in-comment-end-dash\":\"Unexpected end of file in comment (-).\",\"unexpected-dash-after-double-dash-in-comment\":\"Unexpected '-' after '--' found in comment.\",\"eof-in-comment-double-dash\":\"Unexpected end of file in comment (--).\",\"eof-in-comment-end-bang-state\":\"Unexpected end of file in comment.\",\"unexpected-char-in-comment\":\"Unexpected character in comment found.\",\"need-space-after-doctype\":\"No space after literal string 'DOCTYPE'.\",\"expected-doctype-name-but-got-right-bracket\":\"Unexpected > character. Expected DOCTYPE name.\",\"expected-doctype-name-but-got-eof\":\"Unexpected end of file. Expected DOCTYPE name.\",\"eof-in-doctype-name\":\"Unexpected end of file in DOCTYPE name.\",\"eof-in-doctype\":\"Unexpected end of file in DOCTYPE.\",\"expected-space-or-right-bracket-in-doctype\":\"Expected space or '>'. Got '{data}'.\",\"unexpected-end-of-doctype\":\"Unexpected end of DOCTYPE.\",\"unexpected-char-in-doctype\":\"Unexpected character in DOCTYPE.\",\"eof-in-bogus-doctype\":\"Unexpected end of file in bogus doctype.\",\"eof-in-innerhtml\":\"Unexpected EOF in inner html mode.\",\"unexpected-doctype\":\"Unexpected DOCTYPE. Ignored.\",\"non-html-root\":\"html needs to be the first start tag.\",\"expected-doctype-but-got-eof\":\"Unexpected End of file. Expected DOCTYPE.\",\"unknown-doctype\":\"Erroneous DOCTYPE. Expected <!DOCTYPE html>.\",\"quirky-doctype\":\"Quirky doctype. Expected <!DOCTYPE html>.\",\"almost-standards-doctype\":\"Almost standards mode doctype. Expected <!DOCTYPE html>.\",\"obsolete-doctype\":\"Obsolete doctype. Expected <!DOCTYPE html>.\",\"expected-doctype-but-got-chars\":\"Non-space characters found without seeing a doctype first. Expected e.g. <!DOCTYPE html>.\",\"expected-doctype-but-got-start-tag\":\"Start tag seen without seeing a doctype first. Expected e.g. <!DOCTYPE html>.\",\"expected-doctype-but-got-end-tag\":\"End tag seen without seeing a doctype first. Expected e.g. <!DOCTYPE html>.\",\"end-tag-after-implied-root\":\"Unexpected end tag ({name}) after the (implied) root element.\",\"expected-named-closing-tag-but-got-eof\":\"Unexpected end of file. Expected end tag ({name}).\",\"two-heads-are-not-better-than-one\":\"Unexpected start tag head in existing head. Ignored.\",\"unexpected-end-tag\":\"Unexpected end tag ({name}). Ignored.\",\"unexpected-implied-end-tag\":\"End tag {name} implied, but there were open elements.\",\"unexpected-start-tag-out-of-my-head\":\"Unexpected start tag ({name}) that can be in head. Moved.\",\"unexpected-start-tag\":\"Unexpected start tag ({name}).\",\"missing-end-tag\":\"Missing end tag ({name}).\",\"missing-end-tags\":\"Missing end tags ({name}).\",\"unexpected-start-tag-implies-end-tag\":\"Unexpected start tag ({startName}) implies end tag ({endName}).\",\"unexpected-start-tag-treated-as\":\"Unexpected start tag ({originalName}). Treated as {newName}.\",\"deprecated-tag\":\"Unexpected start tag {name}. Don't use it!\",\"unexpected-start-tag-ignored\":\"Unexpected start tag {name}. Ignored.\",\"expected-one-end-tag-but-got-another\":\"Unexpected end tag ({gotName}). Missing end tag ({expectedName}).\",\"end-tag-too-early\":\"End tag ({name}) seen too early. Expected other end tag.\",\"end-tag-too-early-named\":\"Unexpected end tag ({gotName}). Expected end tag ({expectedName}.\",\"end-tag-too-early-ignored\":\"End tag ({name}) seen too early. Ignored.\",\"adoption-agency-1.1\":\"End tag ({name}) violates step 1, paragraph 1 of the adoption agency algorithm.\",\"adoption-agency-1.2\":\"End tag ({name}) violates step 1, paragraph 2 of the adoption agency algorithm.\",\"adoption-agency-1.3\":\"End tag ({name}) violates step 1, paragraph 3 of the adoption agency algorithm.\",\"adoption-agency-4.4\":\"End tag ({name}) violates step 4, paragraph 4 of the adoption agency algorithm.\",\"unexpected-end-tag-treated-as\":\"Unexpected end tag ({originalName}). Treated as {newName}.\",\"no-end-tag\":\"This element ({name}) has no end tag.\",\"unexpected-implied-end-tag-in-table\":\"Unexpected implied end tag ({name}) in the table phase.\",\"unexpected-implied-end-tag-in-table-body\":\"Unexpected implied end tag ({name}) in the table body phase.\",\"unexpected-char-implies-table-voodoo\":\"Unexpected non-space characters in table context caused voodoo mode.\",\"unexpected-hidden-input-in-table\":\"Unexpected input with type hidden in table context.\",\"unexpected-form-in-table\":\"Unexpected form in table context.\",\"unexpected-start-tag-implies-table-voodoo\":\"Unexpected start tag ({name}) in table context caused voodoo mode.\",\"unexpected-end-tag-implies-table-voodoo\":\"Unexpected end tag ({name}) in table context caused voodoo mode.\",\"unexpected-cell-in-table-body\":\"Unexpected table cell start tag ({name}) in the table body phase.\",\"unexpected-cell-end-tag\":\"Got table cell end tag ({name}) while acequired end tags are missing.\",\"unexpected-end-tag-in-table-body\":\"Unexpected end tag ({name}) in the table body phase. Ignored.\",\"unexpected-implied-end-tag-in-table-row\":\"Unexpected implied end tag ({name}) in the table row phase.\",\"unexpected-end-tag-in-table-row\":\"Unexpected end tag ({name}) in the table row phase. Ignored.\",\"unexpected-select-in-select\":\"Unexpected select start tag in the select phase treated as select end tag.\",\"unexpected-input-in-select\":\"Unexpected input start tag in the select phase.\",\"unexpected-start-tag-in-select\":\"Unexpected start tag token ({name}) in the select phase. Ignored.\",\"unexpected-end-tag-in-select\":\"Unexpected end tag ({name}) in the select phase. Ignored.\",\"unexpected-table-element-start-tag-in-select-in-table\":\"Unexpected table element start tag ({name}) in the select in table phase.\",\"unexpected-table-element-end-tag-in-select-in-table\":\"Unexpected table element end tag ({name}) in the select in table phase.\",\"unexpected-char-after-body\":\"Unexpected non-space characters in the after body phase.\",\"unexpected-start-tag-after-body\":\"Unexpected start tag token ({name}) in the after body phase.\",\"unexpected-end-tag-after-body\":\"Unexpected end tag token ({name}) in the after body phase.\",\"unexpected-char-in-frameset\":\"Unepxected characters in the frameset phase. Characters ignored.\",\"unexpected-start-tag-in-frameset\":\"Unexpected start tag token ({name}) in the frameset phase. Ignored.\",\"unexpected-frameset-in-frameset-innerhtml\":\"Unexpected end tag token (frameset in the frameset phase (innerHTML).\",\"unexpected-end-tag-in-frameset\":\"Unexpected end tag token ({name}) in the frameset phase. Ignored.\",\"unexpected-char-after-frameset\":\"Unexpected non-space characters in the after frameset phase. Ignored.\",\"unexpected-start-tag-after-frameset\":\"Unexpected start tag ({name}) in the after frameset phase. Ignored.\",\"unexpected-end-tag-after-frameset\":\"Unexpected end tag ({name}) in the after frameset phase. Ignored.\",\"expected-eof-but-got-char\":\"Unexpected non-space characters. Expected end of file.\",\"expected-eof-but-got-start-tag\":\"Unexpected start tag ({name}). Expected end of file.\",\"expected-eof-but-got-end-tag\":\"Unexpected end tag ({name}). Expected end of file.\",\"unexpected-end-table-in-caption\":\"Unexpected end table tag in caption. Generates implied end caption.\",\"end-html-in-innerhtml\":\"Unexpected html end tag in inner html mode.\",\"eof-in-table\":\"Unexpected end of file. Expected table content.\",\"eof-in-script\":\"Unexpected end of file. Expected script content.\",\"non-void-element-with-trailing-solidus\":\"Trailing solidus not allowed on element {name}.\",\"unexpected-html-element-in-foreign-content\":'HTML start tag \"{name}\" in a foreign namespace context.',\"unexpected-start-tag-in-table\":\"Unexpected {name}. Expected table content.\"}},{}],9:[function(_dereq_,module,exports){function SAXParser(){this.contentHandler=null,this._errorHandler=null,this._treeBuilder=new SAXTreeBuilder,this._tokenizer=new Tokenizer(this._treeBuilder),this._scriptingEnabled=!1}var SAXTreeBuilder=_dereq_(\"./SAXTreeBuilder\").SAXTreeBuilder,Tokenizer=_dereq_(\"../Tokenizer\").Tokenizer,TreeParser=_dereq_(\"./TreeParser\").TreeParser;SAXParser.prototype.parse=function(source){this._tokenizer.tokenize(source);var document=this._treeBuilder.document;document&&new TreeParser(this.contentHandler).parse(document)},SAXParser.prototype.parseFragment=function(source,context){this._treeBuilder.setFragmentContext(context),this._tokenizer.tokenize(source);var fragment=this._treeBuilder.getFragment();fragment&&new TreeParser(this.contentHandler).parse(fragment)},Object.defineProperty(SAXParser.prototype,\"scriptingEnabled\",{get:function(){return this._scriptingEnabled},set:function(value){this._scriptingEnabled=value,this._treeBuilder.scriptingEnabled=value}}),Object.defineProperty(SAXParser.prototype,\"errorHandler\",{get:function(){return this._errorHandler},set:function(value){this._errorHandler=value,this._treeBuilder.errorHandler=value}}),exports.SAXParser=SAXParser},{\"../Tokenizer\":5,\"./SAXTreeBuilder\":10,\"./TreeParser\":11}],10:[function(_dereq_,module,exports){function SAXTreeBuilder(){TreeBuilder.call(this)}function getAttribute(node,name){for(var i=0;node.attributes.length>i;i++){var attribute=node.attributes[i];if(attribute.nodeName===name)return attribute.nodeValue}}function Node(locator){locator?(this.columnNumber=locator.columnNumber,this.lineNumber=locator.lineNumber):(this.columnNumber=-1,this.lineNumber=-1),this.parentNode=null,this.nextSibling=null,this.firstChild=null}function ParentNode(locator){Node.call(this,locator),this.lastChild=null,this._endLocator=null}function Document(locator){ParentNode.call(this,locator),this.nodeType=NodeType.DOCUMENT}function DocumentFragment(){ParentNode.call(this,new Locator),this.nodeType=NodeType.DOCUMENT_FRAGMENT}function Element(locator,uri,localName,qName,atts,prefixMappings){ParentNode.call(this,locator),this.uri=uri,this.localName=localName,this.qName=qName,this.attributes=atts,this.prefixMappings=prefixMappings,this.nodeType=NodeType.ELEMENT}function Characters(locator,data){Node.call(this,locator),this.data=data,this.nodeType=NodeType.CHARACTERS}function IgnorableWhitespace(locator,data){Node.call(this,locator),this.data=data,this.nodeType=NodeType.IGNORABLE_WHITESPACE}function Comment(locator,data){Node.call(this,locator),this.data=data,this.nodeType=NodeType.COMMENT}function CDATA(locator){ParentNode.call(this,locator),this.nodeType=NodeType.CDATA}function Entity(name){ParentNode.call(this),this.name=name,this.nodeType=NodeType.ENTITY}function SkippedEntity(name){Node.call(this),this.name=name,this.nodeType=NodeType.SKIPPED_ENTITY}function ProcessingInstruction(target,data){Node.call(this),this.target=target,this.data=data}function DTD(name,publicIdentifier,systemIdentifier){ParentNode.call(this),this.name=name,this.publicIdentifier=publicIdentifier,this.systemIdentifier=systemIdentifier,this.nodeType=NodeType.DTD}var util=_dereq_(\"util\"),TreeBuilder=_dereq_(\"../TreeBuilder\").TreeBuilder;util.inherits(SAXTreeBuilder,TreeBuilder),SAXTreeBuilder.prototype.start=function(){this.document=new Document(this.tokenizer)},SAXTreeBuilder.prototype.end=function(){this.document.endLocator=this.tokenizer},SAXTreeBuilder.prototype.insertDoctype=function(name,publicId,systemId){var doctype=new DTD(this.tokenizer,name,publicId,systemId);doctype.endLocator=this.tokenizer,this.document.appendChild(doctype)},SAXTreeBuilder.prototype.createElement=function(namespaceURI,localName,attributes){var element=new Element(this.tokenizer,namespaceURI,localName,localName,attributes||[]);return element},SAXTreeBuilder.prototype.insertComment=function(data,parent){parent||(parent=this.currentStackItem());var comment=new Comment(this.tokenizer,data);parent.appendChild(comment)},SAXTreeBuilder.prototype.appendCharacters=function(parent,data){var text=new Characters(this.tokenizer,data);parent.appendChild(text)},SAXTreeBuilder.prototype.insertText=function(data){if(this.redirectAttachToFosterParent&&this.openElements.top.isFosterParenting()){var tableIndex=this.openElements.findIndex(\"table\"),tableItem=this.openElements.item(tableIndex),table=tableItem.node;if(0===tableIndex)return this.appendCharacters(table,data);var text=new Characters(this.tokenizer,data),parent=table.parentNode;if(parent)return parent.insertBetween(text,table.previousSibling,table),void 0;var stackParent=this.openElements.item(tableIndex-1).node;return stackParent.appendChild(text),void 0}this.appendCharacters(this.currentStackItem().node,data)},SAXTreeBuilder.prototype.attachNode=function(node,parent){parent.appendChild(node)},SAXTreeBuilder.prototype.attachNodeToFosterParent=function(child,table,stackParent){var parent=table.parentNode;parent?parent.insertBetween(child,table.previousSibling,table):stackParent.appendChild(child)},SAXTreeBuilder.prototype.detachFromParent=function(element){element.detach()},SAXTreeBuilder.prototype.reparentChildren=function(oldParent,newParent){newParent.appendChildren(oldParent.firstChild)},SAXTreeBuilder.prototype.getFragment=function(){var fragment=new DocumentFragment;return this.reparentChildren(this.openElements.rootNode,fragment),fragment},SAXTreeBuilder.prototype.addAttributesToElement=function(element,attributes){for(var i=0;attributes.length>i;i++){var attribute=attributes[i];getAttribute(element,attribute.nodeName)||element.attributes.push(attribute)}};var NodeType={CDATA:1,CHARACTERS:2,COMMENT:3,DOCUMENT:4,DOCUMENT_FRAGMENT:5,DTD:6,ELEMENT:7,ENTITY:8,IGNORABLE_WHITESPACE:9,PROCESSING_INSTRUCTION:10,SKIPPED_ENTITY:11};Node.prototype.visit=function(){throw Error(\"Not Implemented\")},Node.prototype.revisit=function(){},Node.prototype.detach=function(){null!==this.parentNode&&(this.parentNode.removeChild(this),this.parentNode=null)},Object.defineProperty(Node.prototype,\"previousSibling\",{get:function(){for(var prev=null,next=this.parentNode.firstChild;;){if(this==next)return prev;prev=next,next=next.nextSibling}}}),ParentNode.prototype=Object.create(Node.prototype),ParentNode.prototype.insertBefore=function(child,sibling){if(!sibling)return this.appendChild(child);if(child.detach(),child.parentNode=this,this.firstChild==sibling)child.nextSibling=sibling,this.firstChild=child;else{for(var prev=this.firstChild,next=this.firstChild.nextSibling;next!=sibling;)prev=next,next=next.nextSibling;prev.nextSibling=child,child.nextSibling=next}return child},ParentNode.prototype.insertBetween=function(child,prev,next){return next?(child.detach(),child.parentNode=this,child.nextSibling=next,prev?prev.nextSibling=child:firstChild=child,child):this.appendChild(child)},ParentNode.prototype.appendChild=function(child){return child.detach(),child.parentNode=this,this.firstChild?this.lastChild.nextSibling=child:this.firstChild=child,this.lastChild=child,child},ParentNode.prototype.appendChildren=function(parent){var child=parent.firstChild;if(child){var another=parent;this.firstChild?this.lastChild.nextSibling=child:this.firstChild=child,this.lastChild=another.lastChild;do child.parentNode=this;while(child=child.nextSibling);another.firstChild=null,another.lastChild=null}},ParentNode.prototype.removeChild=function(node){if(this.firstChild==node)this.firstChild=node.nextSibling,this.lastChild==node&&(this.lastChild=null);else{for(var prev=this.firstChild,next=this.firstChild.nextSibling;next!=node;)prev=next,next=next.nextSibling;prev.nextSibling=node.nextSibling,this.lastChild==node&&(this.lastChild=prev)}return node.parentNode=null,node},Object.defineProperty(ParentNode.prototype,\"endLocator\",{get:function(){return this._endLocator},set:function(endLocator){this._endLocator={lineNumber:endLocator.lineNumber,columnNumber:endLocator.columnNumber}}}),Document.prototype=Object.create(ParentNode.prototype),Document.prototype.visit=function(treeParser){treeParser.startDocument(this)},Document.prototype.revisit=function(treeParser){treeParser.endDocument(this.endLocator)},DocumentFragment.prototype=Object.create(ParentNode.prototype),DocumentFragment.prototype.visit=function(){},Element.prototype=Object.create(ParentNode.prototype),Element.prototype.visit=function(treeParser){if(this.prefixMappings)for(var key in prefixMappings){var mapping=prefixMappings[key];treeParser.startPrefixMapping(mapping.getPrefix(),mapping.getUri(),this)}treeParser.startElement(this.uri,this.localName,this.qName,this.attributes,this)},Element.prototype.revisit=function(treeParser){if(treeParser.endElement(this.uri,this.localName,this.qName,this.endLocator),this.prefixMappings)for(var key in prefixMappings){var mapping=prefixMappings[key];treeParser.endPrefixMapping(mapping.getPrefix(),this.endLocator)}},Characters.prototype=Object.create(Node.prototype),Characters.prototype.visit=function(treeParser){treeParser.characters(this.data,0,this.data.length,this)},IgnorableWhitespace.prototype=Object.create(Node.prototype),IgnorableWhitespace.prototype.visit=function(treeParser){treeParser.ignorableWhitespace(this.data,0,this.data.length,this)},Comment.prototype=Object.create(Node.prototype),Comment.prototype.visit=function(treeParser){treeParser.comment(this.data,0,this.data.length,this)},CDATA.prototype=Object.create(ParentNode.prototype),CDATA.prototype.visit=function(treeParser){treeParser.startCDATA(this)},CDATA.prototype.revisit=function(treeParser){treeParser.endCDATA(this.endLocator)},Entity.prototype=Object.create(ParentNode.prototype),Entity.prototype.visit=function(treeParser){treeParser.startEntity(this.name,this)},Entity.prototype.revisit=function(treeParser){treeParser.endEntity(this.name)},SkippedEntity.prototype=Object.create(Node.prototype),SkippedEntity.prototype.visit=function(treeParser){treeParser.skippedEntity(this.name,this)},ProcessingInstruction.prototype=Object.create(Node.prototype),ProcessingInstruction.prototype.visit=function(treeParser){treeParser.processingInstruction(this.target,this.data,this)},ProcessingInstruction.prototype.getNodeType=function(){return NodeType.PROCESSING_INSTRUCTION},DTD.prototype=Object.create(ParentNode.prototype),DTD.prototype.visit=function(treeParser){treeParser.startDTD(this.name,this.publicIdentifier,this.systemIdentifier,this)},DTD.prototype.revisit=function(treeParser){treeParser.endDTD()},exports.SAXTreeBuilder=SAXTreeBuilder},{\"../TreeBuilder\":6,util:20}],11:[function(_dereq_,module,exports){function TreeParser(contentHandler,lexicalHandler){if(this.contentHandler,this.lexicalHandler,this.locatorDelegate,!contentHandler)throw new IllegalArgumentException(\"contentHandler was null.\");this.contentHandler=contentHandler,this.lexicalHandler=lexicalHandler?lexicalHandler:new NullLexicalHandler}function NullLexicalHandler(){}TreeParser.prototype.parse=function(node){this.contentHandler.documentLocator=this;for(var next,current=node;;)if(current.visit(this),next=current.firstChild)current=next;else for(;;){if(current.revisit(this),current==node)return;if(next=current.nextSibling){current=next;break}current=current.parentNode}},TreeParser.prototype.characters=function(ch,start,length,locator){this.locatorDelegate=locator,this.contentHandler.characters(ch,start,length)},TreeParser.prototype.endDocument=function(locator){this.locatorDelegate=locator,this.contentHandler.endDocument()},TreeParser.prototype.endElement=function(uri,localName,qName,locator){this.locatorDelegate=locator,this.contentHandler.endElement(uri,localName,qName)},TreeParser.prototype.endPrefixMapping=function(prefix,locator){this.locatorDelegate=locator,this.contentHandler.endPrefixMapping(prefix)},TreeParser.prototype.ignorableWhitespace=function(ch,start,length,locator){this.locatorDelegate=locator,this.contentHandler.ignorableWhitespace(ch,start,length)},TreeParser.prototype.processingInstruction=function(target,data,locator){this.locatorDelegate=locator,this.contentHandler.processingInstruction(target,data)},TreeParser.prototype.skippedEntity=function(name,locator){this.locatorDelegate=locator,this.contentHandler.skippedEntity(name)},TreeParser.prototype.startDocument=function(locator){this.locatorDelegate=locator,this.contentHandler.startDocument()},TreeParser.prototype.startElement=function(uri,localName,qName,atts,locator){this.locatorDelegate=locator,this.contentHandler.startElement(uri,localName,qName,atts)},TreeParser.prototype.startPrefixMapping=function(prefix,uri,locator){this.locatorDelegate=locator,this.contentHandler.startPrefixMapping(prefix,uri)},TreeParser.prototype.comment=function(ch,start,length,locator){this.locatorDelegate=locator,this.lexicalHandler.comment(ch,start,length)},TreeParser.prototype.endCDATA=function(locator){this.locatorDelegate=locator,this.lexicalHandler.endCDATA()},TreeParser.prototype.endDTD=function(locator){this.locatorDelegate=locator,this.lexicalHandler.endDTD()},TreeParser.prototype.endEntity=function(name,locator){this.locatorDelegate=locator,this.lexicalHandler.endEntity(name)},TreeParser.prototype.startCDATA=function(locator){this.locatorDelegate=locator,this.lexicalHandler.startCDATA()},TreeParser.prototype.startDTD=function(name,publicId,systemId,locator){this.locatorDelegate=locator,this.lexicalHandler.startDTD(name,publicId,systemId)},TreeParser.prototype.startEntity=function(name,locator){this.locatorDelegate=locator,this.lexicalHandler.startEntity(name)},Object.defineProperty(TreeParser.prototype,\"columnNumber\",{get:function(){return this.locatorDelegate?this.locatorDelegate.columnNumber:-1}}),Object.defineProperty(TreeParser.prototype,\"lineNumber\",{get:function(){return this.locatorDelegate?this.locatorDelegate.lineNumber:-1}}),NullLexicalHandler.prototype.comment=function(){},NullLexicalHandler.prototype.endCDATA=function(){},NullLexicalHandler.prototype.endDTD=function(){},NullLexicalHandler.prototype.endEntity=function(){},NullLexicalHandler.prototype.startCDATA=function(){},NullLexicalHandler.prototype.startDTD=function(){},NullLexicalHandler.prototype.startEntity=function(){},exports.TreeParser=TreeParser},{}],12:[function(_dereq_,module){module.exports={\"Aacute;\":\"Á\",Aacute:\"Á\",\"aacute;\":\"á\",aacute:\"á\",\"Abreve;\":\"Ă\",\"abreve;\":\"ă\",\"ac;\":\"∾\",\"acd;\":\"∿\",\"acE;\":\"∾̳\",\"Acirc;\":\"Â\",Acirc:\"Â\",\"acirc;\":\"â\",acirc:\"â\",\"acute;\":\"´\",acute:\"´\",\"Acy;\":\"А\",\"acy;\":\"а\",\"AElig;\":\"Æ\",AElig:\"Æ\",\"aelig;\":\"æ\",aelig:\"æ\",\"af;\":\"⁡\",\"Afr;\":\"𝔄\",\"afr;\":\"𝔞\",\"Agrave;\":\"À\",Agrave:\"À\",\"agrave;\":\"à\",agrave:\"à\",\"alefsym;\":\"ℵ\",\"aleph;\":\"ℵ\",\"Alpha;\":\"Α\",\"alpha;\":\"α\",\"Amacr;\":\"Ā\",\"amacr;\":\"ā\",\"amalg;\":\"⨿\",\"amp;\":\"&\",amp:\"&\",\"AMP;\":\"&\",AMP:\"&\",\"andand;\":\"⩕\",\"And;\":\"⩓\",\"and;\":\"∧\",\"andd;\":\"⩜\",\"andslope;\":\"⩘\",\"andv;\":\"⩚\",\"ang;\":\"∠\",\"ange;\":\"⦤\",\"angle;\":\"∠\",\"angmsdaa;\":\"⦨\",\"angmsdab;\":\"⦩\",\"angmsdac;\":\"⦪\",\"angmsdad;\":\"⦫\",\"angmsdae;\":\"⦬\",\"angmsdaf;\":\"⦭\",\"angmsdag;\":\"⦮\",\"angmsdah;\":\"⦯\",\"angmsd;\":\"∡\",\"angrt;\":\"∟\",\"angrtvb;\":\"⊾\",\"angrtvbd;\":\"⦝\",\"angsph;\":\"∢\",\"angst;\":\"Å\",\"angzarr;\":\"⍼\",\"Aogon;\":\"Ą\",\"aogon;\":\"ą\",\"Aopf;\":\"𝔸\",\"aopf;\":\"𝕒\",\"apacir;\":\"⩯\",\"ap;\":\"≈\",\"apE;\":\"⩰\",\"ape;\":\"≊\",\"apid;\":\"≋\",\"apos;\":\"'\",\"ApplyFunction;\":\"⁡\",\"approx;\":\"≈\",\"approxeq;\":\"≊\",\"Aring;\":\"Å\",Aring:\"Å\",\"aring;\":\"å\",aring:\"å\",\"Ascr;\":\"𝒜\",\"ascr;\":\"𝒶\",\"Assign;\":\"≔\",\"ast;\":\"*\",\"asymp;\":\"≈\",\"asympeq;\":\"≍\",\"Atilde;\":\"Ã\",Atilde:\"Ã\",\"atilde;\":\"ã\",atilde:\"ã\",\"Auml;\":\"Ä\",Auml:\"Ä\",\"auml;\":\"ä\",auml:\"ä\",\"awconint;\":\"∳\",\"awint;\":\"⨑\",\"backcong;\":\"≌\",\"backepsilon;\":\"϶\",\"backprime;\":\"‵\",\"backsim;\":\"∽\",\"backsimeq;\":\"⋍\",\"Backslash;\":\"∖\",\"Barv;\":\"⫧\",\"barvee;\":\"⊽\",\"barwed;\":\"⌅\",\"Barwed;\":\"⌆\",\"barwedge;\":\"⌅\",\"bbrk;\":\"⎵\",\"bbrktbrk;\":\"⎶\",\"bcong;\":\"≌\",\"Bcy;\":\"Б\",\"bcy;\":\"б\",\"bdquo;\":\"„\",\"becaus;\":\"∵\",\"because;\":\"∵\",\"Because;\":\"∵\",\"bemptyv;\":\"⦰\",\"bepsi;\":\"϶\",\"bernou;\":\"ℬ\",\"Bernoullis;\":\"ℬ\",\"Beta;\":\"Β\",\"beta;\":\"β\",\"beth;\":\"ℶ\",\"between;\":\"≬\",\"Bfr;\":\"𝔅\",\"bfr;\":\"𝔟\",\"bigcap;\":\"⋂\",\"bigcirc;\":\"◯\",\"bigcup;\":\"⋃\",\"bigodot;\":\"⨀\",\"bigoplus;\":\"⨁\",\"bigotimes;\":\"⨂\",\"bigsqcup;\":\"⨆\",\"bigstar;\":\"★\",\"bigtriangledown;\":\"▽\",\"bigtriangleup;\":\"△\",\"biguplus;\":\"⨄\",\"bigvee;\":\"⋁\",\"bigwedge;\":\"⋀\",\"bkarow;\":\"⤍\",\"blacklozenge;\":\"⧫\",\"blacksquare;\":\"▪\",\"blacktriangle;\":\"▴\",\"blacktriangledown;\":\"▾\",\"blacktriangleleft;\":\"◂\",\"blacktriangleright;\":\"▸\",\"blank;\":\"␣\",\"blk12;\":\"▒\",\"blk14;\":\"░\",\"blk34;\":\"▓\",\"block;\":\"█\",\"bne;\":\"=⃥\",\"bnequiv;\":\"≡⃥\",\"bNot;\":\"⫭\",\"bnot;\":\"⌐\",\"Bopf;\":\"𝔹\",\"bopf;\":\"𝕓\",\"bot;\":\"⊥\",\"bottom;\":\"⊥\",\"bowtie;\":\"⋈\",\"boxbox;\":\"⧉\",\"boxdl;\":\"┐\",\"boxdL;\":\"╕\",\"boxDl;\":\"╖\",\"boxDL;\":\"╗\",\"boxdr;\":\"┌\",\"boxdR;\":\"╒\",\"boxDr;\":\"╓\",\"boxDR;\":\"╔\",\"boxh;\":\"─\",\"boxH;\":\"═\",\"boxhd;\":\"┬\",\"boxHd;\":\"╤\",\"boxhD;\":\"╥\",\"boxHD;\":\"╦\",\"boxhu;\":\"┴\",\"boxHu;\":\"╧\",\"boxhU;\":\"╨\",\"boxHU;\":\"╩\",\"boxminus;\":\"⊟\",\"boxplus;\":\"⊞\",\"boxtimes;\":\"⊠\",\"boxul;\":\"┘\",\"boxuL;\":\"╛\",\"boxUl;\":\"╜\",\"boxUL;\":\"╝\",\"boxur;\":\"└\",\"boxuR;\":\"╘\",\"boxUr;\":\"╙\",\"boxUR;\":\"╚\",\"boxv;\":\"│\",\"boxV;\":\"║\",\"boxvh;\":\"┼\",\"boxvH;\":\"╪\",\"boxVh;\":\"╫\",\"boxVH;\":\"╬\",\"boxvl;\":\"┤\",\"boxvL;\":\"╡\",\"boxVl;\":\"╢\",\"boxVL;\":\"╣\",\"boxvr;\":\"├\",\"boxvR;\":\"╞\",\"boxVr;\":\"╟\",\"boxVR;\":\"╠\",\"bprime;\":\"‵\",\"breve;\":\"˘\",\"Breve;\":\"˘\",\"brvbar;\":\"¦\",brvbar:\"¦\",\"bscr;\":\"𝒷\",\"Bscr;\":\"ℬ\",\"bsemi;\":\"⁏\",\"bsim;\":\"∽\",\"bsime;\":\"⋍\",\"bsolb;\":\"⧅\",\"bsol;\":\"\\\\\",\"bsolhsub;\":\"⟈\",\"bull;\":\"•\",\"bullet;\":\"•\",\"bump;\":\"≎\",\"bumpE;\":\"⪮\",\"bumpe;\":\"≏\",\"Bumpeq;\":\"≎\",\"bumpeq;\":\"≏\",\"Cacute;\":\"Ć\",\"cacute;\":\"ć\",\"capand;\":\"⩄\",\"capbrcup;\":\"⩉\",\"capcap;\":\"⩋\",\"cap;\":\"∩\",\"Cap;\":\"⋒\",\"capcup;\":\"⩇\",\"capdot;\":\"⩀\",\"CapitalDifferentialD;\":\"ⅅ\",\"caps;\":\"∩︀\",\"caret;\":\"⁁\",\"caron;\":\"ˇ\",\"Cayleys;\":\"ℭ\",\"ccaps;\":\"⩍\",\"Ccaron;\":\"Č\",\"ccaron;\":\"č\",\"Ccedil;\":\"Ç\",Ccedil:\"Ç\",\"ccedil;\":\"ç\",ccedil:\"ç\",\"Ccirc;\":\"Ĉ\",\"ccirc;\":\"ĉ\",\"Cconint;\":\"∰\",\"ccups;\":\"⩌\",\"ccupssm;\":\"⩐\",\"Cdot;\":\"Ċ\",\"cdot;\":\"ċ\",\"cedil;\":\"¸\",cedil:\"¸\",\"Cedilla;\":\"¸\",\"cemptyv;\":\"⦲\",\"cent;\":\"¢\",cent:\"¢\",\"centerdot;\":\"·\",\"CenterDot;\":\"·\",\"cfr;\":\"𝔠\",\"Cfr;\":\"ℭ\",\"CHcy;\":\"Ч\",\"chcy;\":\"ч\",\"check;\":\"✓\",\"checkmark;\":\"✓\",\"Chi;\":\"Χ\",\"chi;\":\"χ\",\"circ;\":\"ˆ\",\"circeq;\":\"≗\",\"circlearrowleft;\":\"↺\",\"circlearrowright;\":\"↻\",\"circledast;\":\"⊛\",\"circledcirc;\":\"⊚\",\"circleddash;\":\"⊝\",\"CircleDot;\":\"⊙\",\"circledR;\":\"®\",\"circledS;\":\"Ⓢ\",\"CircleMinus;\":\"⊖\",\"CirclePlus;\":\"⊕\",\"CircleTimes;\":\"⊗\",\"cir;\":\"○\",\"cirE;\":\"⧃\",\"cire;\":\"≗\",\"cirfnint;\":\"⨐\",\"cirmid;\":\"⫯\",\"cirscir;\":\"⧂\",\"ClockwiseContourIntegral;\":\"∲\",\"CloseCurlyDoubleQuote;\":\"”\",\"CloseCurlyQuote;\":\"’\",\"clubs;\":\"♣\",\"clubsuit;\":\"♣\",\"colon;\":\":\",\"Colon;\":\"∷\",\"Colone;\":\"⩴\",\"colone;\":\"≔\",\"coloneq;\":\"≔\",\"comma;\":\",\",\"commat;\":\"@\",\"comp;\":\"∁\",\"compfn;\":\"∘\",\"complement;\":\"∁\",\"complexes;\":\"ℂ\",\"cong;\":\"≅\",\"congdot;\":\"⩭\",\"Congruent;\":\"≡\",\"conint;\":\"∮\",\"Conint;\":\"∯\",\"ContourIntegral;\":\"∮\",\"copf;\":\"𝕔\",\"Copf;\":\"ℂ\",\"coprod;\":\"∐\",\"Coproduct;\":\"∐\",\"copy;\":\"©\",copy:\"©\",\"COPY;\":\"©\",COPY:\"©\",\"copysr;\":\"℗\",\"CounterClockwiseContourIntegral;\":\"∳\",\"crarr;\":\"↵\",\"cross;\":\"✗\",\"Cross;\":\"⨯\",\"Cscr;\":\"𝒞\",\"cscr;\":\"𝒸\",\"csub;\":\"⫏\",\"csube;\":\"⫑\",\"csup;\":\"⫐\",\"csupe;\":\"⫒\",\"ctdot;\":\"⋯\",\"cudarrl;\":\"⤸\",\"cudarrr;\":\"⤵\",\"cuepr;\":\"⋞\",\"cuesc;\":\"⋟\",\"cularr;\":\"↶\",\"cularrp;\":\"⤽\",\"cupbrcap;\":\"⩈\",\"cupcap;\":\"⩆\",\"CupCap;\":\"≍\",\"cup;\":\"∪\",\"Cup;\":\"⋓\",\"cupcup;\":\"⩊\",\"cupdot;\":\"⊍\",\"cupor;\":\"⩅\",\"cups;\":\"∪︀\",\"curarr;\":\"↷\",\"curarrm;\":\"⤼\",\"curlyeqprec;\":\"⋞\",\"curlyeqsucc;\":\"⋟\",\"curlyvee;\":\"⋎\",\"curlywedge;\":\"⋏\",\"curren;\":\"¤\",curren:\"¤\",\"curvearrowleft;\":\"↶\",\"curvearrowright;\":\"↷\",\"cuvee;\":\"⋎\",\"cuwed;\":\"⋏\",\"cwconint;\":\"∲\",\"cwint;\":\"∱\",\"cylcty;\":\"⌭\",\"dagger;\":\"†\",\"Dagger;\":\"‡\",\"daleth;\":\"ℸ\",\"darr;\":\"↓\",\"Darr;\":\"↡\",\"dArr;\":\"⇓\",\"dash;\":\"‐\",\"Dashv;\":\"⫤\",\"dashv;\":\"⊣\",\"dbkarow;\":\"⤏\",\"dblac;\":\"˝\",\"Dcaron;\":\"Ď\",\"dcaron;\":\"ď\",\"Dcy;\":\"Д\",\"dcy;\":\"д\",\"ddagger;\":\"‡\",\"ddarr;\":\"⇊\",\"DD;\":\"ⅅ\",\"dd;\":\"ⅆ\",\"DDotrahd;\":\"⤑\",\"ddotseq;\":\"⩷\",\"deg;\":\"°\",deg:\"°\",\"Del;\":\"∇\",\"Delta;\":\"Δ\",\"delta;\":\"δ\",\"demptyv;\":\"⦱\",\"dfisht;\":\"⥿\",\"Dfr;\":\"𝔇\",\"dfr;\":\"𝔡\",\"dHar;\":\"⥥\",\"dharl;\":\"⇃\",\"dharr;\":\"⇂\",\"DiacriticalAcute;\":\"´\",\"DiacriticalDot;\":\"˙\",\"DiacriticalDoubleAcute;\":\"˝\",\"DiacriticalGrave;\":\"`\",\"DiacriticalTilde;\":\"˜\",\"diam;\":\"⋄\",\"diamond;\":\"⋄\",\"Diamond;\":\"⋄\",\"diamondsuit;\":\"♦\",\"diams;\":\"♦\",\"die;\":\"¨\",\"DifferentialD;\":\"ⅆ\",\"digamma;\":\"ϝ\",\"disin;\":\"⋲\",\"div;\":\"÷\",\"divide;\":\"÷\",divide:\"÷\",\"divideontimes;\":\"⋇\",\"divonx;\":\"⋇\",\"DJcy;\":\"Ђ\",\"djcy;\":\"ђ\",\"dlcorn;\":\"⌞\",\"dlcrop;\":\"⌍\",\"dollar;\":\"$\",\"Dopf;\":\"𝔻\",\"dopf;\":\"𝕕\",\"Dot;\":\"¨\",\"dot;\":\"˙\",\"DotDot;\":\"⃜\",\"doteq;\":\"≐\",\"doteqdot;\":\"≑\",\"DotEqual;\":\"≐\",\"dotminus;\":\"∸\",\"dotplus;\":\"∔\",\"dotsquare;\":\"⊡\",\"doublebarwedge;\":\"⌆\",\"DoubleContourIntegral;\":\"∯\",\"DoubleDot;\":\"¨\",\"DoubleDownArrow;\":\"⇓\",\"DoubleLeftArrow;\":\"⇐\",\"DoubleLeftRightArrow;\":\"⇔\",\"DoubleLeftTee;\":\"⫤\",\"DoubleLongLeftArrow;\":\"⟸\",\"DoubleLongLeftRightArrow;\":\"⟺\",\"DoubleLongRightArrow;\":\"⟹\",\"DoubleRightArrow;\":\"⇒\",\"DoubleRightTee;\":\"⊨\",\"DoubleUpArrow;\":\"⇑\",\"DoubleUpDownArrow;\":\"⇕\",\"DoubleVerticalBar;\":\"∥\",\"DownArrowBar;\":\"⤓\",\"downarrow;\":\"↓\",\"DownArrow;\":\"↓\",\"Downarrow;\":\"⇓\",\"DownArrowUpArrow;\":\"⇵\",\"DownBreve;\":\"̑\",\"downdownarrows;\":\"⇊\",\"downharpoonleft;\":\"⇃\",\"downharpoonright;\":\"⇂\",\"DownLeftRightVector;\":\"⥐\",\"DownLeftTeeVector;\":\"⥞\",\"DownLeftVectorBar;\":\"⥖\",\"DownLeftVector;\":\"↽\",\"DownRightTeeVector;\":\"⥟\",\"DownRightVectorBar;\":\"⥗\",\"DownRightVector;\":\"⇁\",\"DownTeeArrow;\":\"↧\",\"DownTee;\":\"⊤\",\"drbkarow;\":\"⤐\",\"drcorn;\":\"⌟\",\"drcrop;\":\"⌌\",\"Dscr;\":\"𝒟\",\"dscr;\":\"𝒹\",\"DScy;\":\"Ѕ\",\"dscy;\":\"ѕ\",\"dsol;\":\"⧶\",\"Dstrok;\":\"Đ\",\"dstrok;\":\"đ\",\"dtdot;\":\"⋱\",\"dtri;\":\"▿\",\"dtrif;\":\"▾\",\"duarr;\":\"⇵\",\"duhar;\":\"⥯\",\"dwangle;\":\"⦦\",\"DZcy;\":\"Џ\",\"dzcy;\":\"џ\",\"dzigrarr;\":\"⟿\",\"Eacute;\":\"É\",Eacute:\"É\",\"eacute;\":\"é\",eacute:\"é\",\"easter;\":\"⩮\",\"Ecaron;\":\"Ě\",\"ecaron;\":\"ě\",\"Ecirc;\":\"Ê\",Ecirc:\"Ê\",\"ecirc;\":\"ê\",ecirc:\"ê\",\"ecir;\":\"≖\",\"ecolon;\":\"≕\",\"Ecy;\":\"Э\",\"ecy;\":\"э\",\"eDDot;\":\"⩷\",\"Edot;\":\"Ė\",\"edot;\":\"ė\",\"eDot;\":\"≑\",\"ee;\":\"ⅇ\",\"efDot;\":\"≒\",\"Efr;\":\"𝔈\",\"efr;\":\"𝔢\",\"eg;\":\"⪚\",\"Egrave;\":\"È\",Egrave:\"È\",\"egrave;\":\"è\",egrave:\"è\",\"egs;\":\"⪖\",\"egsdot;\":\"⪘\",\"el;\":\"⪙\",\"Element;\":\"∈\",\"elinters;\":\"⏧\",\"ell;\":\"ℓ\",\"els;\":\"⪕\",\"elsdot;\":\"⪗\",\"Emacr;\":\"Ē\",\"emacr;\":\"ē\",\"empty;\":\"∅\",\"emptyset;\":\"∅\",\"EmptySmallSquare;\":\"◻\",\"emptyv;\":\"∅\",\"EmptyVerySmallSquare;\":\"▫\",\"emsp13;\":\" \",\"emsp14;\":\" \",\"emsp;\":\" \",\"ENG;\":\"Ŋ\",\"eng;\":\"ŋ\",\"ensp;\":\" \",\"Eogon;\":\"Ę\",\"eogon;\":\"ę\",\"Eopf;\":\"𝔼\",\"eopf;\":\"𝕖\",\"epar;\":\"⋕\",\"eparsl;\":\"⧣\",\"eplus;\":\"⩱\",\"epsi;\":\"ε\",\"Epsilon;\":\"Ε\",\"epsilon;\":\"ε\",\"epsiv;\":\"ϵ\",\"eqcirc;\":\"≖\",\"eqcolon;\":\"≕\",\"eqsim;\":\"≂\",\"eqslantgtr;\":\"⪖\",\"eqslantless;\":\"⪕\",\"Equal;\":\"⩵\",\"equals;\":\"=\",\"EqualTilde;\":\"≂\",\"equest;\":\"≟\",\"Equilibrium;\":\"⇌\",\"equiv;\":\"≡\",\"equivDD;\":\"⩸\",\"eqvparsl;\":\"⧥\",\"erarr;\":\"⥱\",\"erDot;\":\"≓\",\"escr;\":\"ℯ\",\"Escr;\":\"ℰ\",\"esdot;\":\"≐\",\"Esim;\":\"⩳\",\"esim;\":\"≂\",\"Eta;\":\"Η\",\"eta;\":\"η\",\"ETH;\":\"Ð\",ETH:\"Ð\",\"eth;\":\"ð\",eth:\"ð\",\"Euml;\":\"Ë\",Euml:\"Ë\",\"euml;\":\"ë\",euml:\"ë\",\"euro;\":\"€\",\"excl;\":\"!\",\"exist;\":\"∃\",\"Exists;\":\"∃\",\"expectation;\":\"ℰ\",\"exponentiale;\":\"ⅇ\",\"ExponentialE;\":\"ⅇ\",\"fallingdotseq;\":\"≒\",\"Fcy;\":\"Ф\",\"fcy;\":\"ф\",\"female;\":\"♀\",\"ffilig;\":\"ﬃ\",\"fflig;\":\"ﬀ\",\"ffllig;\":\"ﬄ\",\"Ffr;\":\"𝔉\",\"ffr;\":\"𝔣\",\"filig;\":\"ﬁ\",\"FilledSmallSquare;\":\"◼\",\"FilledVerySmallSquare;\":\"▪\",\"fjlig;\":\"fj\",\"flat;\":\"♭\",\"fllig;\":\"ﬂ\",\"fltns;\":\"▱\",\"fnof;\":\"ƒ\",\"Fopf;\":\"𝔽\",\"fopf;\":\"𝕗\",\"forall;\":\"∀\",\"ForAll;\":\"∀\",\"fork;\":\"⋔\",\"forkv;\":\"⫙\",\"Fouriertrf;\":\"ℱ\",\"fpartint;\":\"⨍\",\"frac12;\":\"½\",frac12:\"½\",\"frac13;\":\"⅓\",\"frac14;\":\"¼\",frac14:\"¼\",\"frac15;\":\"⅕\",\"frac16;\":\"⅙\",\"frac18;\":\"⅛\",\"frac23;\":\"⅔\",\"frac25;\":\"⅖\",\"frac34;\":\"¾\",frac34:\"¾\",\"frac35;\":\"⅗\",\"frac38;\":\"⅜\",\"frac45;\":\"⅘\",\"frac56;\":\"⅚\",\"frac58;\":\"⅝\",\"frac78;\":\"⅞\",\"frasl;\":\"⁄\",\"frown;\":\"⌢\",\"fscr;\":\"𝒻\",\"Fscr;\":\"ℱ\",\"gacute;\":\"ǵ\",\"Gamma;\":\"Γ\",\"gamma;\":\"γ\",\"Gammad;\":\"Ϝ\",\"gammad;\":\"ϝ\",\"gap;\":\"⪆\",\"Gbreve;\":\"Ğ\",\"gbreve;\":\"ğ\",\"Gcedil;\":\"Ģ\",\"Gcirc;\":\"Ĝ\",\"gcirc;\":\"ĝ\",\"Gcy;\":\"Г\",\"gcy;\":\"г\",\"Gdot;\":\"Ġ\",\"gdot;\":\"ġ\",\"ge;\":\"≥\",\"gE;\":\"≧\",\"gEl;\":\"⪌\",\"gel;\":\"⋛\",\"geq;\":\"≥\",\"geqq;\":\"≧\",\"geqslant;\":\"⩾\",\"gescc;\":\"⪩\",\"ges;\":\"⩾\",\"gesdot;\":\"⪀\",\"gesdoto;\":\"⪂\",\"gesdotol;\":\"⪄\",\"gesl;\":\"⋛︀\",\"gesles;\":\"⪔\",\"Gfr;\":\"𝔊\",\"gfr;\":\"𝔤\",\"gg;\":\"≫\",\"Gg;\":\"⋙\",\"ggg;\":\"⋙\",\"gimel;\":\"ℷ\",\"GJcy;\":\"Ѓ\",\"gjcy;\":\"ѓ\",\"gla;\":\"⪥\",\"gl;\":\"≷\",\"glE;\":\"⪒\",\"glj;\":\"⪤\",\"gnap;\":\"⪊\",\"gnapprox;\":\"⪊\",\"gne;\":\"⪈\",\"gnE;\":\"≩\",\"gneq;\":\"⪈\",\"gneqq;\":\"≩\",\"gnsim;\":\"⋧\",\"Gopf;\":\"𝔾\",\"gopf;\":\"𝕘\",\"grave;\":\"`\",\"GreaterEqual;\":\"≥\",\"GreaterEqualLess;\":\"⋛\",\"GreaterFullEqual;\":\"≧\",\"GreaterGreater;\":\"⪢\",\"GreaterLess;\":\"≷\",\"GreaterSlantEqual;\":\"⩾\",\"GreaterTilde;\":\"≳\",\"Gscr;\":\"𝒢\",\"gscr;\":\"ℊ\",\"gsim;\":\"≳\",\"gsime;\":\"⪎\",\"gsiml;\":\"⪐\",\"gtcc;\":\"⪧\",\"gtcir;\":\"⩺\",\"gt;\":\">\",gt:\">\",\"GT;\":\">\",GT:\">\",\"Gt;\":\"≫\",\"gtdot;\":\"⋗\",\"gtlPar;\":\"⦕\",\"gtquest;\":\"⩼\",\"gtrapprox;\":\"⪆\",\"gtrarr;\":\"⥸\",\"gtrdot;\":\"⋗\",\"gtreqless;\":\"⋛\",\"gtreqqless;\":\"⪌\",\"gtrless;\":\"≷\",\"gtrsim;\":\"≳\",\"gvertneqq;\":\"≩︀\",\"gvnE;\":\"≩︀\",\"Hacek;\":\"ˇ\",\"hairsp;\":\" \",\"half;\":\"½\",\"hamilt;\":\"ℋ\",\"HARDcy;\":\"Ъ\",\"hardcy;\":\"ъ\",\"harrcir;\":\"⥈\",\"harr;\":\"↔\",\"hArr;\":\"⇔\",\"harrw;\":\"↭\",\"Hat;\":\"^\",\"hbar;\":\"ℏ\",\"Hcirc;\":\"Ĥ\",\"hcirc;\":\"ĥ\",\"hearts;\":\"♥\",\"heartsuit;\":\"♥\",\"hellip;\":\"…\",\"hercon;\":\"⊹\",\"hfr;\":\"𝔥\",\"Hfr;\":\"ℌ\",\"HilbertSpace;\":\"ℋ\",\"hksearow;\":\"⤥\",\"hkswarow;\":\"⤦\",\"hoarr;\":\"⇿\",\"homtht;\":\"∻\",\"hookleftarrow;\":\"↩\",\"hookrightarrow;\":\"↪\",\"hopf;\":\"𝕙\",\"Hopf;\":\"ℍ\",\"horbar;\":\"―\",\"HorizontalLine;\":\"─\",\"hscr;\":\"𝒽\",\"Hscr;\":\"ℋ\",\"hslash;\":\"ℏ\",\"Hstrok;\":\"Ħ\",\"hstrok;\":\"ħ\",\"HumpDownHump;\":\"≎\",\"HumpEqual;\":\"≏\",\"hybull;\":\"⁃\",\"hyphen;\":\"‐\",\"Iacute;\":\"Í\",Iacute:\"Í\",\"iacute;\":\"í\",iacute:\"í\",\"ic;\":\"⁣\",\"Icirc;\":\"Î\",Icirc:\"Î\",\"icirc;\":\"î\",icirc:\"î\",\"Icy;\":\"И\",\"icy;\":\"и\",\"Idot;\":\"İ\",\"IEcy;\":\"Е\",\"iecy;\":\"е\",\"iexcl;\":\"¡\",iexcl:\"¡\",\"iff;\":\"⇔\",\"ifr;\":\"𝔦\",\"Ifr;\":\"ℑ\",\"Igrave;\":\"Ì\",Igrave:\"Ì\",\"igrave;\":\"ì\",igrave:\"ì\",\"ii;\":\"ⅈ\",\"iiiint;\":\"⨌\",\"iiint;\":\"∭\",\"iinfin;\":\"⧜\",\"iiota;\":\"℩\",\"IJlig;\":\"Ĳ\",\"ijlig;\":\"ĳ\",\"Imacr;\":\"Ī\",\"imacr;\":\"ī\",\"image;\":\"ℑ\",\"ImaginaryI;\":\"ⅈ\",\"imagline;\":\"ℐ\",\"imagpart;\":\"ℑ\",\"imath;\":\"ı\",\"Im;\":\"ℑ\",\"imof;\":\"⊷\",\"imped;\":\"Ƶ\",\"Implies;\":\"⇒\",\"incare;\":\"℅\",\"in;\":\"∈\",\"infin;\":\"∞\",\"infintie;\":\"⧝\",\"inodot;\":\"ı\",\"intcal;\":\"⊺\",\"int;\":\"∫\",\"Int;\":\"∬\",\"integers;\":\"ℤ\",\"Integral;\":\"∫\",\"intercal;\":\"⊺\",\"Intersection;\":\"⋂\",\"intlarhk;\":\"⨗\",\"intprod;\":\"⨼\",\"InvisibleComma;\":\"⁣\",\"InvisibleTimes;\":\"⁢\",\"IOcy;\":\"Ё\",\"iocy;\":\"ё\",\"Iogon;\":\"Į\",\"iogon;\":\"į\",\"Iopf;\":\"𝕀\",\"iopf;\":\"𝕚\",\"Iota;\":\"Ι\",\"iota;\":\"ι\",\"iprod;\":\"⨼\",\"iquest;\":\"¿\",iquest:\"¿\",\"iscr;\":\"𝒾\",\"Iscr;\":\"ℐ\",\"isin;\":\"∈\",\"isindot;\":\"⋵\",\"isinE;\":\"⋹\",\"isins;\":\"⋴\",\"isinsv;\":\"⋳\",\"isinv;\":\"∈\",\"it;\":\"⁢\",\"Itilde;\":\"Ĩ\",\"itilde;\":\"ĩ\",\"Iukcy;\":\"І\",\"iukcy;\":\"і\",\"Iuml;\":\"Ï\",Iuml:\"Ï\",\"iuml;\":\"ï\",iuml:\"ï\",\"Jcirc;\":\"Ĵ\",\"jcirc;\":\"ĵ\",\"Jcy;\":\"Й\",\"jcy;\":\"й\",\"Jfr;\":\"𝔍\",\"jfr;\":\"𝔧\",\"jmath;\":\"ȷ\",\"Jopf;\":\"𝕁\",\"jopf;\":\"𝕛\",\"Jscr;\":\"𝒥\",\"jscr;\":\"𝒿\",\"Jsercy;\":\"Ј\",\"jsercy;\":\"ј\",\"Jukcy;\":\"Є\",\"jukcy;\":\"є\",\"Kappa;\":\"Κ\",\"kappa;\":\"κ\",\"kappav;\":\"ϰ\",\"Kcedil;\":\"Ķ\",\"kcedil;\":\"ķ\",\"Kcy;\":\"К\",\"kcy;\":\"к\",\"Kfr;\":\"𝔎\",\"kfr;\":\"𝔨\",\"kgreen;\":\"ĸ\",\"KHcy;\":\"Х\",\"khcy;\":\"х\",\"KJcy;\":\"Ќ\",\"kjcy;\":\"ќ\",\"Kopf;\":\"𝕂\",\"kopf;\":\"𝕜\",\"Kscr;\":\"𝒦\",\"kscr;\":\"𝓀\",\"lAarr;\":\"⇚\",\"Lacute;\":\"Ĺ\",\"lacute;\":\"ĺ\",\"laemptyv;\":\"⦴\",\"lagran;\":\"ℒ\",\"Lambda;\":\"Λ\",\"lambda;\":\"λ\",\"lang;\":\"⟨\",\"Lang;\":\"⟪\",\"langd;\":\"⦑\",\"langle;\":\"⟨\",\"lap;\":\"⪅\",\"Laplacetrf;\":\"ℒ\",\"laquo;\":\"«\",laquo:\"«\",\"larrb;\":\"⇤\",\"larrbfs;\":\"⤟\",\"larr;\":\"←\",\"Larr;\":\"↞\",\"lArr;\":\"⇐\",\"larrfs;\":\"⤝\",\"larrhk;\":\"↩\",\"larrlp;\":\"↫\",\"larrpl;\":\"⤹\",\"larrsim;\":\"⥳\",\"larrtl;\":\"↢\",\"latail;\":\"⤙\",\"lAtail;\":\"⤛\",\"lat;\":\"⪫\",\"late;\":\"⪭\",\"lates;\":\"⪭︀\",\"lbarr;\":\"⤌\",\"lBarr;\":\"⤎\",\"lbbrk;\":\"❲\",\"lbrace;\":\"{\",\"lbrack;\":\"[\",\"lbrke;\":\"⦋\",\"lbrksld;\":\"⦏\",\"lbrkslu;\":\"⦍\",\"Lcaron;\":\"Ľ\",\"lcaron;\":\"ľ\",\"Lcedil;\":\"Ļ\",\"lcedil;\":\"ļ\",\"lceil;\":\"⌈\",\"lcub;\":\"{\",\"Lcy;\":\"Л\",\"lcy;\":\"л\",\"ldca;\":\"⤶\",\"ldquo;\":\"“\",\"ldquor;\":\"„\",\"ldrdhar;\":\"⥧\",\"ldrushar;\":\"⥋\",\"ldsh;\":\"↲\",\"le;\":\"≤\",\"lE;\":\"≦\",\"LeftAngleBracket;\":\"⟨\",\"LeftArrowBar;\":\"⇤\",\"leftarrow;\":\"←\",\"LeftArrow;\":\"←\",\"Leftarrow;\":\"⇐\",\"LeftArrowRightArrow;\":\"⇆\",\"leftarrowtail;\":\"↢\",\"LeftCeiling;\":\"⌈\",\"LeftDoubleBracket;\":\"⟦\",\"LeftDownTeeVector;\":\"⥡\",\"LeftDownVectorBar;\":\"⥙\",\"LeftDownVector;\":\"⇃\",\"LeftFloor;\":\"⌊\",\"leftharpoondown;\":\"↽\",\"leftharpoonup;\":\"↼\",\"leftleftarrows;\":\"⇇\",\"leftrightarrow;\":\"↔\",\"LeftRightArrow;\":\"↔\",\"Leftrightarrow;\":\"⇔\",\"leftrightarrows;\":\"⇆\",\"leftrightharpoons;\":\"⇋\",\"leftrightsquigarrow;\":\"↭\",\"LeftRightVector;\":\"⥎\",\"LeftTeeArrow;\":\"↤\",\"LeftTee;\":\"⊣\",\"LeftTeeVector;\":\"⥚\",\"leftthreetimes;\":\"⋋\",\"LeftTriangleBar;\":\"⧏\",\"LeftTriangle;\":\"⊲\",\"LeftTriangleEqual;\":\"⊴\",\"LeftUpDownVector;\":\"⥑\",\"LeftUpTeeVector;\":\"⥠\",\"LeftUpVectorBar;\":\"⥘\",\"LeftUpVector;\":\"↿\",\"LeftVectorBar;\":\"⥒\",\"LeftVector;\":\"↼\",\"lEg;\":\"⪋\",\"leg;\":\"⋚\",\"leq;\":\"≤\",\"leqq;\":\"≦\",\"leqslant;\":\"⩽\",\"lescc;\":\"⪨\",\"les;\":\"⩽\",\"lesdot;\":\"⩿\",\"lesdoto;\":\"⪁\",\"lesdotor;\":\"⪃\",\"lesg;\":\"⋚︀\",\"lesges;\":\"⪓\",\"lessapprox;\":\"⪅\",\"lessdot;\":\"⋖\",\"lesseqgtr;\":\"⋚\",\"lesseqqgtr;\":\"⪋\",\"LessEqualGreater;\":\"⋚\",\"LessFullEqual;\":\"≦\",\"LessGreater;\":\"≶\",\"lessgtr;\":\"≶\",\"LessLess;\":\"⪡\",\"lesssim;\":\"≲\",\"LessSlantEqual;\":\"⩽\",\"LessTilde;\":\"≲\",\"lfisht;\":\"⥼\",\"lfloor;\":\"⌊\",\"Lfr;\":\"𝔏\",\"lfr;\":\"𝔩\",\"lg;\":\"≶\",\"lgE;\":\"⪑\",\"lHar;\":\"⥢\",\"lhard;\":\"↽\",\"lharu;\":\"↼\",\"lharul;\":\"⥪\",\"lhblk;\":\"▄\",\"LJcy;\":\"Љ\",\"ljcy;\":\"љ\",\"llarr;\":\"⇇\",\"ll;\":\"≪\",\"Ll;\":\"⋘\",\"llcorner;\":\"⌞\",\"Lleftarrow;\":\"⇚\",\"llhard;\":\"⥫\",\"lltri;\":\"◺\",\"Lmidot;\":\"Ŀ\",\"lmidot;\":\"ŀ\",\"lmoustache;\":\"⎰\",\"lmoust;\":\"⎰\",\"lnap;\":\"⪉\",\"lnapprox;\":\"⪉\",\"lne;\":\"⪇\",\"lnE;\":\"≨\",\"lneq;\":\"⪇\",\"lneqq;\":\"≨\",\"lnsim;\":\"⋦\",\"loang;\":\"⟬\",\"loarr;\":\"⇽\",\"lobrk;\":\"⟦\",\"longleftarrow;\":\"⟵\",\"LongLeftArrow;\":\"⟵\",\"Longleftarrow;\":\"⟸\",\"longleftrightarrow;\":\"⟷\",\"LongLeftRightArrow;\":\"⟷\",\"Longleftrightarrow;\":\"⟺\",\"longmapsto;\":\"⟼\",\"longrightarrow;\":\"⟶\",\"LongRightArrow;\":\"⟶\",\"Longrightarrow;\":\"⟹\",\"looparrowleft;\":\"↫\",\"looparrowright;\":\"↬\",\"lopar;\":\"⦅\",\"Lopf;\":\"𝕃\",\"lopf;\":\"𝕝\",\"loplus;\":\"⨭\",\"lotimes;\":\"⨴\",\"lowast;\":\"∗\",\"lowbar;\":\"_\",\"LowerLeftArrow;\":\"↙\",\"LowerRightArrow;\":\"↘\",\"loz;\":\"◊\",\"lozenge;\":\"◊\",\"lozf;\":\"⧫\",\"lpar;\":\"(\",\"lparlt;\":\"⦓\",\"lrarr;\":\"⇆\",\"lrcorner;\":\"⌟\",\"lrhar;\":\"⇋\",\"lrhard;\":\"⥭\",\"lrm;\":\"‎\",\"lrtri;\":\"⊿\",\"lsaquo;\":\"‹\",\"lscr;\":\"𝓁\",\"Lscr;\":\"ℒ\",\"lsh;\":\"↰\",\"Lsh;\":\"↰\",\"lsim;\":\"≲\",\"lsime;\":\"⪍\",\"lsimg;\":\"⪏\",\"lsqb;\":\"[\",\"lsquo;\":\"‘\",\"lsquor;\":\"‚\",\"Lstrok;\":\"Ł\",\"lstrok;\":\"ł\",\"ltcc;\":\"⪦\",\"ltcir;\":\"⩹\",\"lt;\":\"<\",lt:\"<\",\"LT;\":\"<\",LT:\"<\",\"Lt;\":\"≪\",\"ltdot;\":\"⋖\",\"lthree;\":\"⋋\",\"ltimes;\":\"⋉\",\"ltlarr;\":\"⥶\",\"ltquest;\":\"⩻\",\"ltri;\":\"◃\",\"ltrie;\":\"⊴\",\"ltrif;\":\"◂\",\"ltrPar;\":\"⦖\",\"lurdshar;\":\"⥊\",\"luruhar;\":\"⥦\",\"lvertneqq;\":\"≨︀\",\"lvnE;\":\"≨︀\",\"macr;\":\"¯\",macr:\"¯\",\"male;\":\"♂\",\"malt;\":\"✠\",\"maltese;\":\"✠\",\"Map;\":\"⤅\",\"map;\":\"↦\",\"mapsto;\":\"↦\",\"mapstodown;\":\"↧\",\"mapstoleft;\":\"↤\",\"mapstoup;\":\"↥\",\"marker;\":\"▮\",\"mcomma;\":\"⨩\",\"Mcy;\":\"М\",\"mcy;\":\"м\",\"mdash;\":\"—\",\"mDDot;\":\"∺\",\"measuredangle;\":\"∡\",\"MediumSpace;\":\" \",\"Mellintrf;\":\"ℳ\",\"Mfr;\":\"𝔐\",\"mfr;\":\"𝔪\",\"mho;\":\"℧\",\"micro;\":\"µ\",micro:\"µ\",\"midast;\":\"*\",\"midcir;\":\"⫰\",\"mid;\":\"∣\",\"middot;\":\"·\",middot:\"·\",\"minusb;\":\"⊟\",\"minus;\":\"−\",\"minusd;\":\"∸\",\"minusdu;\":\"⨪\",\"MinusPlus;\":\"∓\",\"mlcp;\":\"⫛\",\"mldr;\":\"…\",\"mnplus;\":\"∓\",\"models;\":\"⊧\",\"Mopf;\":\"𝕄\",\"mopf;\":\"𝕞\",\"mp;\":\"∓\",\"mscr;\":\"𝓂\",\"Mscr;\":\"ℳ\",\"mstpos;\":\"∾\",\"Mu;\":\"Μ\",\"mu;\":\"μ\",\"multimap;\":\"⊸\",\"mumap;\":\"⊸\",\"nabla;\":\"∇\",\"Nacute;\":\"Ń\",\"nacute;\":\"ń\",\"nang;\":\"∠⃒\",\"nap;\":\"≉\",\"napE;\":\"⩰̸\",\"napid;\":\"≋̸\",\"napos;\":\"ŉ\",\"napprox;\":\"≉\",\"natural;\":\"♮\",\"naturals;\":\"ℕ\",\"natur;\":\"♮\",\"nbsp;\":\" \",nbsp:\" \",\"nbump;\":\"≎̸\",\"nbumpe;\":\"≏̸\",\"ncap;\":\"⩃\",\"Ncaron;\":\"Ň\",\"ncaron;\":\"ň\",\"Ncedil;\":\"Ņ\",\"ncedil;\":\"ņ\",\"ncong;\":\"≇\",\"ncongdot;\":\"⩭̸\",\"ncup;\":\"⩂\",\"Ncy;\":\"Н\",\"ncy;\":\"н\",\"ndash;\":\"–\",\"nearhk;\":\"⤤\",\"nearr;\":\"↗\",\"neArr;\":\"⇗\",\"nearrow;\":\"↗\",\"ne;\":\"≠\",\"nedot;\":\"≐̸\",\"NegativeMediumSpace;\":\"​\",\"NegativeThickSpace;\":\"​\",\"NegativeThinSpace;\":\"​\",\"NegativeVeryThinSpace;\":\"​\",\"nequiv;\":\"≢\",\"nesear;\":\"⤨\",\"nesim;\":\"≂̸\",\"NestedGreaterGreater;\":\"≫\",\"NestedLessLess;\":\"≪\",\"NewLine;\":\"\\n\",\"nexist;\":\"∄\",\"nexists;\":\"∄\",\"Nfr;\":\"𝔑\",\"nfr;\":\"𝔫\",\"ngE;\":\"≧̸\",\"nge;\":\"≱\",\"ngeq;\":\"≱\",\"ngeqq;\":\"≧̸\",\"ngeqslant;\":\"⩾̸\",\"nges;\":\"⩾̸\",\"nGg;\":\"⋙̸\",\"ngsim;\":\"≵\",\"nGt;\":\"≫⃒\",\"ngt;\":\"≯\",\"ngtr;\":\"≯\",\"nGtv;\":\"≫̸\",\"nharr;\":\"↮\",\"nhArr;\":\"⇎\",\"nhpar;\":\"⫲\",\"ni;\":\"∋\",\"nis;\":\"⋼\",\"nisd;\":\"⋺\",\"niv;\":\"∋\",\"NJcy;\":\"Њ\",\"njcy;\":\"њ\",\"nlarr;\":\"↚\",\"nlArr;\":\"⇍\",\"nldr;\":\"‥\",\"nlE;\":\"≦̸\",\"nle;\":\"≰\",\"nleftarrow;\":\"↚\",\"nLeftarrow;\":\"⇍\",\"nleftrightarrow;\":\"↮\",\"nLeftrightarrow;\":\"⇎\",\"nleq;\":\"≰\",\"nleqq;\":\"≦̸\",\"nleqslant;\":\"⩽̸\",\"nles;\":\"⩽̸\",\"nless;\":\"≮\",\"nLl;\":\"⋘̸\",\"nlsim;\":\"≴\",\"nLt;\":\"≪⃒\",\"nlt;\":\"≮\",\"nltri;\":\"⋪\",\"nltrie;\":\"⋬\",\"nLtv;\":\"≪̸\",\"nmid;\":\"∤\",\"NoBreak;\":\"⁠\",\"NonBreakingSpace;\":\" \",\"nopf;\":\"𝕟\",\"Nopf;\":\"ℕ\",\"Not;\":\"⫬\",\"not;\":\"¬\",not:\"¬\",\"NotCongruent;\":\"≢\",\"NotCupCap;\":\"≭\",\"NotDoubleVerticalBar;\":\"∦\",\"NotElement;\":\"∉\",\"NotEqual;\":\"≠\",\"NotEqualTilde;\":\"≂̸\",\"NotExists;\":\"∄\",\"NotGreater;\":\"≯\",\"NotGreaterEqual;\":\"≱\",\"NotGreaterFullEqual;\":\"≧̸\",\"NotGreaterGreater;\":\"≫̸\",\"NotGreaterLess;\":\"≹\",\"NotGreaterSlantEqual;\":\"⩾̸\",\"NotGreaterTilde;\":\"≵\",\"NotHumpDownHump;\":\"≎̸\",\"NotHumpEqual;\":\"≏̸\",\"notin;\":\"∉\",\"notindot;\":\"⋵̸\",\"notinE;\":\"⋹̸\",\"notinva;\":\"∉\",\"notinvb;\":\"⋷\",\"notinvc;\":\"⋶\",\"NotLeftTriangleBar;\":\"⧏̸\",\"NotLeftTriangle;\":\"⋪\",\"NotLeftTriangleEqual;\":\"⋬\",\"NotLess;\":\"≮\",\"NotLessEqual;\":\"≰\",\"NotLessGreater;\":\"≸\",\"NotLessLess;\":\"≪̸\",\"NotLessSlantEqual;\":\"⩽̸\",\"NotLessTilde;\":\"≴\",\"NotNestedGreaterGreater;\":\"⪢̸\",\"NotNestedLessLess;\":\"⪡̸\",\"notni;\":\"∌\",\"notniva;\":\"∌\",\"notnivb;\":\"⋾\",\"notnivc;\":\"⋽\",\"NotPrecedes;\":\"⊀\",\"NotPrecedesEqual;\":\"⪯̸\",\"NotPrecedesSlantEqual;\":\"⋠\",\"NotReverseElement;\":\"∌\",\"NotRightTriangleBar;\":\"⧐̸\",\"NotRightTriangle;\":\"⋫\",\"NotRightTriangleEqual;\":\"⋭\",\"NotSquareSubset;\":\"⊏̸\",\"NotSquareSubsetEqual;\":\"⋢\",\"NotSquareSuperset;\":\"⊐̸\",\"NotSquareSupersetEqual;\":\"⋣\",\"NotSubset;\":\"⊂⃒\",\"NotSubsetEqual;\":\"⊈\",\"NotSucceeds;\":\"⊁\",\"NotSucceedsEqual;\":\"⪰̸\",\"NotSucceedsSlantEqual;\":\"⋡\",\"NotSucceedsTilde;\":\"≿̸\",\"NotSuperset;\":\"⊃⃒\",\"NotSupersetEqual;\":\"⊉\",\"NotTilde;\":\"≁\",\"NotTildeEqual;\":\"≄\",\"NotTildeFullEqual;\":\"≇\",\"NotTildeTilde;\":\"≉\",\"NotVerticalBar;\":\"∤\",\"nparallel;\":\"∦\",\"npar;\":\"∦\",\"nparsl;\":\"⫽⃥\",\"npart;\":\"∂̸\",\"npolint;\":\"⨔\",\"npr;\":\"⊀\",\"nprcue;\":\"⋠\",\"nprec;\":\"⊀\",\"npreceq;\":\"⪯̸\",\"npre;\":\"⪯̸\",\"nrarrc;\":\"⤳̸\",\"nrarr;\":\"↛\",\"nrArr;\":\"⇏\",\"nrarrw;\":\"↝̸\",\"nrightarrow;\":\"↛\",\"nRightarrow;\":\"⇏\",\"nrtri;\":\"⋫\",\"nrtrie;\":\"⋭\",\"nsc;\":\"⊁\",\"nsccue;\":\"⋡\",\"nsce;\":\"⪰̸\",\"Nscr;\":\"𝒩\",\"nscr;\":\"𝓃\",\"nshortmid;\":\"∤\",\"nshortparallel;\":\"∦\",\"nsim;\":\"≁\",\"nsime;\":\"≄\",\"nsimeq;\":\"≄\",\"nsmid;\":\"∤\",\"nspar;\":\"∦\",\"nsqsube;\":\"⋢\",\"nsqsupe;\":\"⋣\",\"nsub;\":\"⊄\",\"nsubE;\":\"⫅̸\",\"nsube;\":\"⊈\",\"nsubset;\":\"⊂⃒\",\"nsubseteq;\":\"⊈\",\"nsubseteqq;\":\"⫅̸\",\"nsucc;\":\"⊁\",\"nsucceq;\":\"⪰̸\",\"nsup;\":\"⊅\",\"nsupE;\":\"⫆̸\",\"nsupe;\":\"⊉\",\"nsupset;\":\"⊃⃒\",\"nsupseteq;\":\"⊉\",\"nsupseteqq;\":\"⫆̸\",\"ntgl;\":\"≹\",\"Ntilde;\":\"Ñ\",Ntilde:\"Ñ\",\"ntilde;\":\"ñ\",ntilde:\"ñ\",\"ntlg;\":\"≸\",\"ntriangleleft;\":\"⋪\",\"ntrianglelefteq;\":\"⋬\",\"ntriangleright;\":\"⋫\",\"ntrianglerighteq;\":\"⋭\",\"Nu;\":\"Ν\",\"nu;\":\"ν\",\"num;\":\"#\",\"numero;\":\"№\",\"numsp;\":\" \",\"nvap;\":\"≍⃒\",\"nvdash;\":\"⊬\",\"nvDash;\":\"⊭\",\"nVdash;\":\"⊮\",\"nVDash;\":\"⊯\",\"nvge;\":\"≥⃒\",\"nvgt;\":\">⃒\",\"nvHarr;\":\"⤄\",\"nvinfin;\":\"⧞\",\"nvlArr;\":\"⤂\",\"nvle;\":\"≤⃒\",\"nvlt;\":\"<⃒\",\"nvltrie;\":\"⊴⃒\",\"nvrArr;\":\"⤃\",\"nvrtrie;\":\"⊵⃒\",\"nvsim;\":\"∼⃒\",\"nwarhk;\":\"⤣\",\"nwarr;\":\"↖\",\"nwArr;\":\"⇖\",\"nwarrow;\":\"↖\",\"nwnear;\":\"⤧\",\"Oacute;\":\"Ó\",Oacute:\"Ó\",\"oacute;\":\"ó\",oacute:\"ó\",\"oast;\":\"⊛\",\"Ocirc;\":\"Ô\",Ocirc:\"Ô\",\"ocirc;\":\"ô\",ocirc:\"ô\",\"ocir;\":\"⊚\",\"Ocy;\":\"О\",\"ocy;\":\"о\",\"odash;\":\"⊝\",\"Odblac;\":\"Ő\",\"odblac;\":\"ő\",\"odiv;\":\"⨸\",\"odot;\":\"⊙\",\"odsold;\":\"⦼\",\"OElig;\":\"Œ\",\"oelig;\":\"œ\",\"ofcir;\":\"⦿\",\"Ofr;\":\"𝔒\",\"ofr;\":\"𝔬\",\"ogon;\":\"˛\",\"Ograve;\":\"Ò\",Ograve:\"Ò\",\"ograve;\":\"ò\",ograve:\"ò\",\"ogt;\":\"⧁\",\"ohbar;\":\"⦵\",\"ohm;\":\"Ω\",\"oint;\":\"∮\",\"olarr;\":\"↺\",\"olcir;\":\"⦾\",\"olcross;\":\"⦻\",\"oline;\":\"‾\",\"olt;\":\"⧀\",\"Omacr;\":\"Ō\",\"omacr;\":\"ō\",\"Omega;\":\"Ω\",\"omega;\":\"ω\",\"Omicron;\":\"Ο\",\"omicron;\":\"ο\",\"omid;\":\"⦶\",\"ominus;\":\"⊖\",\"Oopf;\":\"𝕆\",\"oopf;\":\"𝕠\",\"opar;\":\"⦷\",\"OpenCurlyDoubleQuote;\":\"“\",\"OpenCurlyQuote;\":\"‘\",\"operp;\":\"⦹\",\"oplus;\":\"⊕\",\"orarr;\":\"↻\",\"Or;\":\"⩔\",\"or;\":\"∨\",\"ord;\":\"⩝\",\"order;\":\"ℴ\",\"orderof;\":\"ℴ\",\"ordf;\":\"ª\",ordf:\"ª\",\"ordm;\":\"º\",ordm:\"º\",\"origof;\":\"⊶\",\"oror;\":\"⩖\",\"orslope;\":\"⩗\",\"orv;\":\"⩛\",\"oS;\":\"Ⓢ\",\"Oscr;\":\"𝒪\",\"oscr;\":\"ℴ\",\"Oslash;\":\"Ø\",Oslash:\"Ø\",\"oslash;\":\"ø\",oslash:\"ø\",\"osol;\":\"⊘\",\"Otilde;\":\"Õ\",Otilde:\"Õ\",\"otilde;\":\"õ\",otilde:\"õ\",\"otimesas;\":\"⨶\",\"Otimes;\":\"⨷\",\"otimes;\":\"⊗\",\"Ouml;\":\"Ö\",Ouml:\"Ö\",\"ouml;\":\"ö\",ouml:\"ö\",\"ovbar;\":\"⌽\",\"OverBar;\":\"‾\",\"OverBrace;\":\"⏞\",\"OverBracket;\":\"⎴\",\"OverParenthesis;\":\"⏜\",\"para;\":\"¶\",para:\"¶\",\"parallel;\":\"∥\",\"par;\":\"∥\",\"parsim;\":\"⫳\",\"parsl;\":\"⫽\",\"part;\":\"∂\",\"PartialD;\":\"∂\",\"Pcy;\":\"П\",\"pcy;\":\"п\",\"percnt;\":\"%\",\"period;\":\".\",\"permil;\":\"‰\",\"perp;\":\"⊥\",\"pertenk;\":\"‱\",\"Pfr;\":\"𝔓\",\"pfr;\":\"𝔭\",\"Phi;\":\"Φ\",\"phi;\":\"φ\",\"phiv;\":\"ϕ\",\"phmmat;\":\"ℳ\",\"phone;\":\"☎\",\"Pi;\":\"Π\",\"pi;\":\"π\",\"pitchfork;\":\"⋔\",\"piv;\":\"ϖ\",\"planck;\":\"ℏ\",\"planckh;\":\"ℎ\",\"plankv;\":\"ℏ\",\"plusacir;\":\"⨣\",\"plusb;\":\"⊞\",\"pluscir;\":\"⨢\",\"plus;\":\"+\",\"plusdo;\":\"∔\",\"plusdu;\":\"⨥\",\"pluse;\":\"⩲\",\"PlusMinus;\":\"±\",\"plusmn;\":\"±\",plusmn:\"±\",\"plussim;\":\"⨦\",\"plustwo;\":\"⨧\",\"pm;\":\"±\",\"Poincareplane;\":\"ℌ\",\"pointint;\":\"⨕\",\"popf;\":\"𝕡\",\"Popf;\":\"ℙ\",\"pound;\":\"£\",pound:\"£\",\"prap;\":\"⪷\",\"Pr;\":\"⪻\",\"pr;\":\"≺\",\"prcue;\":\"≼\",\"precapprox;\":\"⪷\",\"prec;\":\"≺\",\"preccurlyeq;\":\"≼\",\"Precedes;\":\"≺\",\"PrecedesEqual;\":\"⪯\",\"PrecedesSlantEqual;\":\"≼\",\"PrecedesTilde;\":\"≾\",\"preceq;\":\"⪯\",\"precnapprox;\":\"⪹\",\"precneqq;\":\"⪵\",\"precnsim;\":\"⋨\",\"pre;\":\"⪯\",\"prE;\":\"⪳\",\"precsim;\":\"≾\",\"prime;\":\"′\",\"Prime;\":\"″\",\"primes;\":\"ℙ\",\"prnap;\":\"⪹\",\"prnE;\":\"⪵\",\"prnsim;\":\"⋨\",\"prod;\":\"∏\",\"Product;\":\"∏\",\"profalar;\":\"⌮\",\"profline;\":\"⌒\",\"profsurf;\":\"⌓\",\"prop;\":\"∝\",\"Proportional;\":\"∝\",\"Proportion;\":\"∷\",\"propto;\":\"∝\",\"prsim;\":\"≾\",\"prurel;\":\"⊰\",\"Pscr;\":\"𝒫\",\"pscr;\":\"𝓅\",\"Psi;\":\"Ψ\",\"psi;\":\"ψ\",\"puncsp;\":\" \",\"Qfr;\":\"𝔔\",\"qfr;\":\"𝔮\",\"qint;\":\"⨌\",\"qopf;\":\"𝕢\",\"Qopf;\":\"ℚ\",\"qprime;\":\"⁗\",\"Qscr;\":\"𝒬\",\"qscr;\":\"𝓆\",\"quaternions;\":\"ℍ\",\"quatint;\":\"⨖\",\"quest;\":\"?\",\"questeq;\":\"≟\",\"quot;\":'\"',quot:'\"',\"QUOT;\":'\"',QUOT:'\"',\"rAarr;\":\"⇛\",\"race;\":\"∽̱\",\"Racute;\":\"Ŕ\",\"racute;\":\"ŕ\",\"radic;\":\"√\",\"raemptyv;\":\"⦳\",\"rang;\":\"⟩\",\"Rang;\":\"⟫\",\"rangd;\":\"⦒\",\"range;\":\"⦥\",\"rangle;\":\"⟩\",\"raquo;\":\"»\",raquo:\"»\",\"rarrap;\":\"⥵\",\"rarrb;\":\"⇥\",\"rarrbfs;\":\"⤠\",\"rarrc;\":\"⤳\",\"rarr;\":\"→\",\"Rarr;\":\"↠\",\"rArr;\":\"⇒\",\"rarrfs;\":\"⤞\",\"rarrhk;\":\"↪\",\"rarrlp;\":\"↬\",\"rarrpl;\":\"⥅\",\"rarrsim;\":\"⥴\",\"Rarrtl;\":\"⤖\",\"rarrtl;\":\"↣\",\"rarrw;\":\"↝\",\"ratail;\":\"⤚\",\"rAtail;\":\"⤜\",\"ratio;\":\"∶\",\"rationals;\":\"ℚ\",\"rbarr;\":\"⤍\",\"rBarr;\":\"⤏\",\"RBarr;\":\"⤐\",\"rbbrk;\":\"❳\",\"rbrace;\":\"}\",\"rbrack;\":\"]\",\"rbrke;\":\"⦌\",\"rbrksld;\":\"⦎\",\"rbrkslu;\":\"⦐\",\"Rcaron;\":\"Ř\",\"rcaron;\":\"ř\",\"Rcedil;\":\"Ŗ\",\"rcedil;\":\"ŗ\",\"rceil;\":\"⌉\",\"rcub;\":\"}\",\"Rcy;\":\"Р\",\"rcy;\":\"р\",\"rdca;\":\"⤷\",\"rdldhar;\":\"⥩\",\"rdquo;\":\"”\",\"rdquor;\":\"”\",\"rdsh;\":\"↳\",\"real;\":\"ℜ\",\"realine;\":\"ℛ\",\"realpart;\":\"ℜ\",\"reals;\":\"ℝ\",\"Re;\":\"ℜ\",\"rect;\":\"▭\",\"reg;\":\"®\",reg:\"®\",\"REG;\":\"®\",REG:\"®\",\"ReverseElement;\":\"∋\",\"ReverseEquilibrium;\":\"⇋\",\"ReverseUpEquilibrium;\":\"⥯\",\"rfisht;\":\"⥽\",\"rfloor;\":\"⌋\",\"rfr;\":\"𝔯\",\"Rfr;\":\"ℜ\",\"rHar;\":\"⥤\",\"rhard;\":\"⇁\",\"rharu;\":\"⇀\",\"rharul;\":\"⥬\",\"Rho;\":\"Ρ\",\"rho;\":\"ρ\",\"rhov;\":\"ϱ\",\"RightAngleBracket;\":\"⟩\",\"RightArrowBar;\":\"⇥\",\"rightarrow;\":\"→\",\"RightArrow;\":\"→\",\"Rightarrow;\":\"⇒\",\"RightArrowLeftArrow;\":\"⇄\",\"rightarrowtail;\":\"↣\",\"RightCeiling;\":\"⌉\",\"RightDoubleBracket;\":\"⟧\",\"RightDownTeeVector;\":\"⥝\",\"RightDownVectorBar;\":\"⥕\",\"RightDownVector;\":\"⇂\",\"RightFloor;\":\"⌋\",\"rightharpoondown;\":\"⇁\",\"rightharpoonup;\":\"⇀\",\"rightleftarrows;\":\"⇄\",\"rightleftharpoons;\":\"⇌\",\"rightrightarrows;\":\"⇉\",\"rightsquigarrow;\":\"↝\",\"RightTeeArrow;\":\"↦\",\"RightTee;\":\"⊢\",\"RightTeeVector;\":\"⥛\",\"rightthreetimes;\":\"⋌\",\"RightTriangleBar;\":\"⧐\",\"RightTriangle;\":\"⊳\",\"RightTriangleEqual;\":\"⊵\",\"RightUpDownVector;\":\"⥏\",\"RightUpTeeVector;\":\"⥜\",\"RightUpVectorBar;\":\"⥔\",\"RightUpVector;\":\"↾\",\"RightVectorBar;\":\"⥓\",\"RightVector;\":\"⇀\",\"ring;\":\"˚\",\"risingdotseq;\":\"≓\",\"rlarr;\":\"⇄\",\"rlhar;\":\"⇌\",\"rlm;\":\"‏\",\"rmoustache;\":\"⎱\",\"rmoust;\":\"⎱\",\"rnmid;\":\"⫮\",\"roang;\":\"⟭\",\"roarr;\":\"⇾\",\"robrk;\":\"⟧\",\"ropar;\":\"⦆\",\"ropf;\":\"𝕣\",\"Ropf;\":\"ℝ\",\"roplus;\":\"⨮\",\"rotimes;\":\"⨵\",\"RoundImplies;\":\"⥰\",\"rpar;\":\")\",\"rpargt;\":\"⦔\",\"rppolint;\":\"⨒\",\"rrarr;\":\"⇉\",\"Rrightarrow;\":\"⇛\",\"rsaquo;\":\"›\",\"rscr;\":\"𝓇\",\"Rscr;\":\"ℛ\",\"rsh;\":\"↱\",\"Rsh;\":\"↱\",\"rsqb;\":\"]\",\"rsquo;\":\"’\",\"rsquor;\":\"’\",\"rthree;\":\"⋌\",\"rtimes;\":\"⋊\",\"rtri;\":\"▹\",\"rtrie;\":\"⊵\",\"rtrif;\":\"▸\",\"rtriltri;\":\"⧎\",\"RuleDelayed;\":\"⧴\",\"ruluhar;\":\"⥨\",\"rx;\":\"℞\",\"Sacute;\":\"Ś\",\"sacute;\":\"ś\",\"sbquo;\":\"‚\",\"scap;\":\"⪸\",\"Scaron;\":\"Š\",\"scaron;\":\"š\",\"Sc;\":\"⪼\",\"sc;\":\"≻\",\"sccue;\":\"≽\",\"sce;\":\"⪰\",\"scE;\":\"⪴\",\"Scedil;\":\"Ş\",\"scedil;\":\"ş\",\"Scirc;\":\"Ŝ\",\"scirc;\":\"ŝ\",\"scnap;\":\"⪺\",\"scnE;\":\"⪶\",\"scnsim;\":\"⋩\",\"scpolint;\":\"⨓\",\"scsim;\":\"≿\",\"Scy;\":\"С\",\"scy;\":\"с\",\"sdotb;\":\"⊡\",\"sdot;\":\"⋅\",\"sdote;\":\"⩦\",\"searhk;\":\"⤥\",\"searr;\":\"↘\",\"seArr;\":\"⇘\",\"searrow;\":\"↘\",\"sect;\":\"§\",sect:\"§\",\"semi;\":\";\",\"seswar;\":\"⤩\",\"setminus;\":\"∖\",\"setmn;\":\"∖\",\"sext;\":\"✶\",\"Sfr;\":\"𝔖\",\"sfr;\":\"𝔰\",\"sfrown;\":\"⌢\",\"sharp;\":\"♯\",\"SHCHcy;\":\"Щ\",\"shchcy;\":\"щ\",\"SHcy;\":\"Ш\",\"shcy;\":\"ш\",\"ShortDownArrow;\":\"↓\",\"ShortLeftArrow;\":\"←\",\"shortmid;\":\"∣\",\"shortparallel;\":\"∥\",\"ShortRightArrow;\":\"→\",\"ShortUpArrow;\":\"↑\",\"shy;\":\"­\",shy:\"­\",\"Sigma;\":\"Σ\",\"sigma;\":\"σ\",\"sigmaf;\":\"ς\",\"sigmav;\":\"ς\",\"sim;\":\"∼\",\"simdot;\":\"⩪\",\"sime;\":\"≃\",\"simeq;\":\"≃\",\"simg;\":\"⪞\",\"simgE;\":\"⪠\",\"siml;\":\"⪝\",\"simlE;\":\"⪟\",\"simne;\":\"≆\",\"simplus;\":\"⨤\",\"simrarr;\":\"⥲\",\"slarr;\":\"←\",\"SmallCircle;\":\"∘\",\"smallsetminus;\":\"∖\",\"smashp;\":\"⨳\",\"smeparsl;\":\"⧤\",\"smid;\":\"∣\",\"smile;\":\"⌣\",\"smt;\":\"⪪\",\"smte;\":\"⪬\",\"smtes;\":\"⪬︀\",\"SOFTcy;\":\"Ь\",\"softcy;\":\"ь\",\"solbar;\":\"⌿\",\"solb;\":\"⧄\",\"sol;\":\"/\",\"Sopf;\":\"𝕊\",\"sopf;\":\"𝕤\",\"spades;\":\"♠\",\"spadesuit;\":\"♠\",\"spar;\":\"∥\",\"sqcap;\":\"⊓\",\"sqcaps;\":\"⊓︀\",\"sqcup;\":\"⊔\",\"sqcups;\":\"⊔︀\",\"Sqrt;\":\"√\",\"sqsub;\":\"⊏\",\"sqsube;\":\"⊑\",\"sqsubset;\":\"⊏\",\"sqsubseteq;\":\"⊑\",\"sqsup;\":\"⊐\",\"sqsupe;\":\"⊒\",\"sqsupset;\":\"⊐\",\"sqsupseteq;\":\"⊒\",\"square;\":\"□\",\"Square;\":\"□\",\"SquareIntersection;\":\"⊓\",\"SquareSubset;\":\"⊏\",\"SquareSubsetEqual;\":\"⊑\",\"SquareSuperset;\":\"⊐\",\"SquareSupersetEqual;\":\"⊒\",\"SquareUnion;\":\"⊔\",\"squarf;\":\"▪\",\"squ;\":\"□\",\"squf;\":\"▪\",\"srarr;\":\"→\",\"Sscr;\":\"𝒮\",\"sscr;\":\"𝓈\",\"ssetmn;\":\"∖\",\"ssmile;\":\"⌣\",\"sstarf;\":\"⋆\",\"Star;\":\"⋆\",\"star;\":\"☆\",\"starf;\":\"★\",\"straightepsilon;\":\"ϵ\",\"straightphi;\":\"ϕ\",\"strns;\":\"¯\",\"sub;\":\"⊂\",\"Sub;\":\"⋐\",\"subdot;\":\"⪽\",\"subE;\":\"⫅\",\"sube;\":\"⊆\",\"subedot;\":\"⫃\",\"submult;\":\"⫁\",\"subnE;\":\"⫋\",\"subne;\":\"⊊\",\"subplus;\":\"⪿\",\"subrarr;\":\"⥹\",\"subset;\":\"⊂\",\"Subset;\":\"⋐\",\"subseteq;\":\"⊆\",\"subseteqq;\":\"⫅\",\"SubsetEqual;\":\"⊆\",\"subsetneq;\":\"⊊\",\"subsetneqq;\":\"⫋\",\"subsim;\":\"⫇\",\"subsub;\":\"⫕\",\"subsup;\":\"⫓\",\"succapprox;\":\"⪸\",\"succ;\":\"≻\",\"succcurlyeq;\":\"≽\",\"Succeeds;\":\"≻\",\"SucceedsEqual;\":\"⪰\",\"SucceedsSlantEqual;\":\"≽\",\"SucceedsTilde;\":\"≿\",\"succeq;\":\"⪰\",\"succnapprox;\":\"⪺\",\"succneqq;\":\"⪶\",\"succnsim;\":\"⋩\",\"succsim;\":\"≿\",\"SuchThat;\":\"∋\",\"sum;\":\"∑\",\"Sum;\":\"∑\",\"sung;\":\"♪\",\"sup1;\":\"¹\",sup1:\"¹\",\"sup2;\":\"²\",sup2:\"²\",\"sup3;\":\"³\",sup3:\"³\",\"sup;\":\"⊃\",\"Sup;\":\"⋑\",\"supdot;\":\"⪾\",\"supdsub;\":\"⫘\",\"supE;\":\"⫆\",\"supe;\":\"⊇\",\"supedot;\":\"⫄\",\"Superset;\":\"⊃\",\"SupersetEqual;\":\"⊇\",\"suphsol;\":\"⟉\",\"suphsub;\":\"⫗\",\"suplarr;\":\"⥻\",\"supmult;\":\"⫂\",\"supnE;\":\"⫌\",\"supne;\":\"⊋\",\"supplus;\":\"⫀\",\"supset;\":\"⊃\",\"Supset;\":\"⋑\",\"supseteq;\":\"⊇\",\"supseteqq;\":\"⫆\",\"supsetneq;\":\"⊋\",\"supsetneqq;\":\"⫌\",\"supsim;\":\"⫈\",\"supsub;\":\"⫔\",\"supsup;\":\"⫖\",\"swarhk;\":\"⤦\",\"swarr;\":\"↙\",\"swArr;\":\"⇙\",\"swarrow;\":\"↙\",\"swnwar;\":\"⤪\",\"szlig;\":\"ß\",szlig:\"ß\",\"Tab;\":\"\t\",\"target;\":\"⌖\",\"Tau;\":\"Τ\",\"tau;\":\"τ\",\"tbrk;\":\"⎴\",\"Tcaron;\":\"Ť\",\"tcaron;\":\"ť\",\"Tcedil;\":\"Ţ\",\"tcedil;\":\"ţ\",\"Tcy;\":\"Т\",\"tcy;\":\"т\",\"tdot;\":\"⃛\",\"telrec;\":\"⌕\",\"Tfr;\":\"𝔗\",\"tfr;\":\"𝔱\",\"there4;\":\"∴\",\"therefore;\":\"∴\",\"Therefore;\":\"∴\",\"Theta;\":\"Θ\",\"theta;\":\"θ\",\"thetasym;\":\"ϑ\",\"thetav;\":\"ϑ\",\"thickapprox;\":\"≈\",\"thicksim;\":\"∼\",\"ThickSpace;\":\"  \",\"ThinSpace;\":\" \",\"thinsp;\":\" \",\"thkap;\":\"≈\",\"thksim;\":\"∼\",\"THORN;\":\"Þ\",THORN:\"Þ\",\"thorn;\":\"þ\",thorn:\"þ\",\"tilde;\":\"˜\",\"Tilde;\":\"∼\",\"TildeEqual;\":\"≃\",\"TildeFullEqual;\":\"≅\",\"TildeTilde;\":\"≈\",\"timesbar;\":\"⨱\",\"timesb;\":\"⊠\",\"times;\":\"×\",times:\"×\",\"timesd;\":\"⨰\",\"tint;\":\"∭\",\"toea;\":\"⤨\",\"topbot;\":\"⌶\",\"topcir;\":\"⫱\",\"top;\":\"⊤\",\"Topf;\":\"𝕋\",\"topf;\":\"𝕥\",\"topfork;\":\"⫚\",\"tosa;\":\"⤩\",\"tprime;\":\"‴\",\"trade;\":\"™\",\"TRADE;\":\"™\",\"triangle;\":\"▵\",\"triangledown;\":\"▿\",\"triangleleft;\":\"◃\",\"trianglelefteq;\":\"⊴\",\"triangleq;\":\"≜\",\"triangleright;\":\"▹\",\"trianglerighteq;\":\"⊵\",\"tridot;\":\"◬\",\"trie;\":\"≜\",\"triminus;\":\"⨺\",\"TripleDot;\":\"⃛\",\"triplus;\":\"⨹\",\"trisb;\":\"⧍\",\"tritime;\":\"⨻\",\"trpezium;\":\"⏢\",\"Tscr;\":\"𝒯\",\"tscr;\":\"𝓉\",\"TScy;\":\"Ц\",\"tscy;\":\"ц\",\"TSHcy;\":\"Ћ\",\"tshcy;\":\"ћ\",\"Tstrok;\":\"Ŧ\",\"tstrok;\":\"ŧ\",\"twixt;\":\"≬\",\"twoheadleftarrow;\":\"↞\",\"twoheadrightarrow;\":\"↠\",\"Uacute;\":\"Ú\",Uacute:\"Ú\",\"uacute;\":\"ú\",uacute:\"ú\",\"uarr;\":\"↑\",\"Uarr;\":\"↟\",\"uArr;\":\"⇑\",\"Uarrocir;\":\"⥉\",\"Ubrcy;\":\"Ў\",\"ubrcy;\":\"ў\",\"Ubreve;\":\"Ŭ\",\"ubreve;\":\"ŭ\",\"Ucirc;\":\"Û\",Ucirc:\"Û\",\"ucirc;\":\"û\",ucirc:\"û\",\"Ucy;\":\"У\",\"ucy;\":\"у\",\"udarr;\":\"⇅\",\"Udblac;\":\"Ű\",\"udblac;\":\"ű\",\"udhar;\":\"⥮\",\"ufisht;\":\"⥾\",\"Ufr;\":\"𝔘\",\"ufr;\":\"𝔲\",\"Ugrave;\":\"Ù\",Ugrave:\"Ù\",\"ugrave;\":\"ù\",ugrave:\"ù\",\"uHar;\":\"⥣\",\"uharl;\":\"↿\",\"uharr;\":\"↾\",\"uhblk;\":\"▀\",\"ulcorn;\":\"⌜\",\"ulcorner;\":\"⌜\",\"ulcrop;\":\"⌏\",\"ultri;\":\"◸\",\"Umacr;\":\"Ū\",\"umacr;\":\"ū\",\"uml;\":\"¨\",uml:\"¨\",\"UnderBar;\":\"_\",\"UnderBrace;\":\"⏟\",\"UnderBracket;\":\"⎵\",\"UnderParenthesis;\":\"⏝\",\"Union;\":\"⋃\",\"UnionPlus;\":\"⊎\",\"Uogon;\":\"Ų\",\"uogon;\":\"ų\",\"Uopf;\":\"𝕌\",\"uopf;\":\"𝕦\",\"UpArrowBar;\":\"⤒\",\"uparrow;\":\"↑\",\"UpArrow;\":\"↑\",\"Uparrow;\":\"⇑\",\"UpArrowDownArrow;\":\"⇅\",\"updownarrow;\":\"↕\",\"UpDownArrow;\":\"↕\",\"Updownarrow;\":\"⇕\",\"UpEquilibrium;\":\"⥮\",\"upharpoonleft;\":\"↿\",\"upharpoonright;\":\"↾\",\"uplus;\":\"⊎\",\"UpperLeftArrow;\":\"↖\",\"UpperRightArrow;\":\"↗\",\"upsi;\":\"υ\",\"Upsi;\":\"ϒ\",\"upsih;\":\"ϒ\",\"Upsilon;\":\"Υ\",\"upsilon;\":\"υ\",\"UpTeeArrow;\":\"↥\",\"UpTee;\":\"⊥\",\"upuparrows;\":\"⇈\",\"urcorn;\":\"⌝\",\"urcorner;\":\"⌝\",\"urcrop;\":\"⌎\",\"Uring;\":\"Ů\",\"uring;\":\"ů\",\"urtri;\":\"◹\",\"Uscr;\":\"𝒰\",\"uscr;\":\"𝓊\",\"utdot;\":\"⋰\",\"Utilde;\":\"Ũ\",\"utilde;\":\"ũ\",\"utri;\":\"▵\",\"utrif;\":\"▴\",\"uuarr;\":\"⇈\",\"Uuml;\":\"Ü\",Uuml:\"Ü\",\"uuml;\":\"ü\",uuml:\"ü\",\"uwangle;\":\"⦧\",\"vangrt;\":\"⦜\",\"varepsilon;\":\"ϵ\",\"varkappa;\":\"ϰ\",\"varnothing;\":\"∅\",\"varphi;\":\"ϕ\",\"varpi;\":\"ϖ\",\"varpropto;\":\"∝\",\"varr;\":\"↕\",\"vArr;\":\"⇕\",\"varrho;\":\"ϱ\",\"varsigma;\":\"ς\",\"varsubsetneq;\":\"⊊︀\",\"varsubsetneqq;\":\"⫋︀\",\"varsupsetneq;\":\"⊋︀\",\"varsupsetneqq;\":\"⫌︀\",\"vartheta;\":\"ϑ\",\"vartriangleleft;\":\"⊲\",\"vartriangleright;\":\"⊳\",\"vBar;\":\"⫨\",\"Vbar;\":\"⫫\",\"vBarv;\":\"⫩\",\"Vcy;\":\"В\",\"vcy;\":\"в\",\"vdash;\":\"⊢\",\"vDash;\":\"⊨\",\"Vdash;\":\"⊩\",\"VDash;\":\"⊫\",\"Vdashl;\":\"⫦\",\"veebar;\":\"⊻\",\"vee;\":\"∨\",\"Vee;\":\"⋁\",\"veeeq;\":\"≚\",\"vellip;\":\"⋮\",\"verbar;\":\"|\",\"Verbar;\":\"‖\",\"vert;\":\"|\",\"Vert;\":\"‖\",\"VerticalBar;\":\"∣\",\"VerticalLine;\":\"|\",\"VerticalSeparator;\":\"❘\",\"VerticalTilde;\":\"≀\",\"VeryThinSpace;\":\" \",\"Vfr;\":\"𝔙\",\"vfr;\":\"𝔳\",\"vltri;\":\"⊲\",\"vnsub;\":\"⊂⃒\",\"vnsup;\":\"⊃⃒\",\"Vopf;\":\"𝕍\",\"vopf;\":\"𝕧\",\"vprop;\":\"∝\",\"vrtri;\":\"⊳\",\"Vscr;\":\"𝒱\",\"vscr;\":\"𝓋\",\"vsubnE;\":\"⫋︀\",\"vsubne;\":\"⊊︀\",\"vsupnE;\":\"⫌︀\",\"vsupne;\":\"⊋︀\",\"Vvdash;\":\"⊪\",\"vzigzag;\":\"⦚\",\"Wcirc;\":\"Ŵ\",\"wcirc;\":\"ŵ\",\"wedbar;\":\"⩟\",\"wedge;\":\"∧\",\"Wedge;\":\"⋀\",\"wedgeq;\":\"≙\",\"weierp;\":\"℘\",\"Wfr;\":\"𝔚\",\"wfr;\":\"𝔴\",\"Wopf;\":\"𝕎\",\"wopf;\":\"𝕨\",\"wp;\":\"℘\",\"wr;\":\"≀\",\"wreath;\":\"≀\",\"Wscr;\":\"𝒲\",\"wscr;\":\"𝓌\",\"xcap;\":\"⋂\",\"xcirc;\":\"◯\",\"xcup;\":\"⋃\",\"xdtri;\":\"▽\",\"Xfr;\":\"𝔛\",\"xfr;\":\"𝔵\",\"xharr;\":\"⟷\",\"xhArr;\":\"⟺\",\"Xi;\":\"Ξ\",\"xi;\":\"ξ\",\"xlarr;\":\"⟵\",\"xlArr;\":\"⟸\",\"xmap;\":\"⟼\",\"xnis;\":\"⋻\",\"xodot;\":\"⨀\",\"Xopf;\":\"𝕏\",\"xopf;\":\"𝕩\",\"xoplus;\":\"⨁\",\"xotime;\":\"⨂\",\"xrarr;\":\"⟶\",\"xrArr;\":\"⟹\",\"Xscr;\":\"𝒳\",\"xscr;\":\"𝓍\",\"xsqcup;\":\"⨆\",\"xuplus;\":\"⨄\",\"xutri;\":\"△\",\"xvee;\":\"⋁\",\"xwedge;\":\"⋀\",\"Yacute;\":\"Ý\",Yacute:\"Ý\",\"yacute;\":\"ý\",yacute:\"ý\",\"YAcy;\":\"Я\",\"yacy;\":\"я\",\"Ycirc;\":\"Ŷ\",\"ycirc;\":\"ŷ\",\"Ycy;\":\"Ы\",\"ycy;\":\"ы\",\"yen;\":\"¥\",yen:\"¥\",\"Yfr;\":\"𝔜\",\"yfr;\":\"𝔶\",\"YIcy;\":\"Ї\",\"yicy;\":\"ї\",\"Yopf;\":\"𝕐\",\"yopf;\":\"𝕪\",\"Yscr;\":\"𝒴\",\"yscr;\":\"𝓎\",\"YUcy;\":\"Ю\",\"yucy;\":\"ю\",\"yuml;\":\"ÿ\",yuml:\"ÿ\",\"Yuml;\":\"Ÿ\",\"Zacute;\":\"Ź\",\"zacute;\":\"ź\",\"Zcaron;\":\"Ž\",\"zcaron;\":\"ž\",\"Zcy;\":\"З\",\"zcy;\":\"з\",\"Zdot;\":\"Ż\",\"zdot;\":\"ż\",\"zeetrf;\":\"ℨ\",\"ZeroWidthSpace;\":\"​\",\"Zeta;\":\"Ζ\",\"zeta;\":\"ζ\",\"zfr;\":\"𝔷\",\"Zfr;\":\"ℨ\",\"ZHcy;\":\"Ж\",\"zhcy;\":\"ж\",\"zigrarr;\":\"⇝\",\"zopf;\":\"𝕫\",\"Zopf;\":\"ℤ\",\"Zscr;\":\"𝒵\",\"zscr;\":\"𝓏\",\"zwj;\":\"‍\",\"zwnj;\":\"‌\"}\n},{}],13:[function(_dereq_,module){function replacer(key,value){return util.isUndefined(value)?\"\"+value:!util.isNumber(value)||!isNaN(value)&&isFinite(value)?util.isFunction(value)||util.isRegExp(value)?\"\"+value:value:\"\"+value}function truncate(s,n){return util.isString(s)?n>s.length?s:s.slice(0,n):s}function getMessage(self){return truncate(JSON.stringify(self.actual,replacer),128)+\" \"+self.operator+\" \"+truncate(JSON.stringify(self.expected,replacer),128)}function fail(actual,expected,message,operator,stackStartFunction){throw new assert.AssertionError({message:message,actual:actual,expected:expected,operator:operator,stackStartFunction:stackStartFunction})}function ok(value,message){value||fail(value,!0,message,\"==\",assert.ok)}function _deepEqual(actual,expected){if(actual===expected)return!0;if(util.isBuffer(actual)&&util.isBuffer(expected)){if(actual.length!=expected.length)return!1;for(var i=0;actual.length>i;i++)if(actual[i]!==expected[i])return!1;return!0}return util.isDate(actual)&&util.isDate(expected)?actual.getTime()===expected.getTime():util.isRegExp(actual)&&util.isRegExp(expected)?actual.source===expected.source&&actual.global===expected.global&&actual.multiline===expected.multiline&&actual.lastIndex===expected.lastIndex&&actual.ignoreCase===expected.ignoreCase:util.isObject(actual)||util.isObject(expected)?objEquiv(actual,expected):actual==expected}function isArguments(object){return\"[object Arguments]\"==Object.prototype.toString.call(object)}function objEquiv(a,b){if(util.isNullOrUndefined(a)||util.isNullOrUndefined(b))return!1;if(a.prototype!==b.prototype)return!1;if(isArguments(a))return isArguments(b)?(a=pSlice.call(a),b=pSlice.call(b),_deepEqual(a,b)):!1;try{var key,i,ka=objectKeys(a),kb=objectKeys(b)}catch(e){return!1}if(ka.length!=kb.length)return!1;for(ka.sort(),kb.sort(),i=ka.length-1;i>=0;i--)if(ka[i]!=kb[i])return!1;for(i=ka.length-1;i>=0;i--)if(key=ka[i],!_deepEqual(a[key],b[key]))return!1;return!0}function expectedException(actual,expected){return actual&&expected?\"[object RegExp]\"==Object.prototype.toString.call(expected)?expected.test(actual):actual instanceof expected?!0:expected.call({},actual)===!0?!0:!1:!1}function _throws(shouldThrow,block,expected,message){var actual;util.isString(expected)&&(message=expected,expected=null);try{block()}catch(e){actual=e}if(message=(expected&&expected.name?\" (\"+expected.name+\").\":\".\")+(message?\" \"+message:\".\"),shouldThrow&&!actual&&fail(actual,expected,\"Missing expected exception\"+message),!shouldThrow&&expectedException(actual,expected)&&fail(actual,expected,\"Got unwanted exception\"+message),shouldThrow&&actual&&expected&&!expectedException(actual,expected)||!shouldThrow&&actual)throw actual}var util=_dereq_(\"util/\"),pSlice=Array.prototype.slice,hasOwn=Object.prototype.hasOwnProperty,assert=module.exports=ok;assert.AssertionError=function(options){this.name=\"AssertionError\",this.actual=options.actual,this.expected=options.expected,this.operator=options.operator,options.message?(this.message=options.message,this.generatedMessage=!1):(this.message=getMessage(this),this.generatedMessage=!0);var stackStartFunction=options.stackStartFunction||fail;if(Error.captureStackTrace)Error.captureStackTrace(this,stackStartFunction);else{var err=Error();if(err.stack){var out=err.stack,fn_name=stackStartFunction.name,idx=out.indexOf(\"\\n\"+fn_name);if(idx>=0){var next_line=out.indexOf(\"\\n\",idx+1);out=out.substring(next_line+1)}this.stack=out}}},util.inherits(assert.AssertionError,Error),assert.fail=fail,assert.ok=ok,assert.equal=function(actual,expected,message){actual!=expected&&fail(actual,expected,message,\"==\",assert.equal)},assert.notEqual=function(actual,expected,message){actual==expected&&fail(actual,expected,message,\"!=\",assert.notEqual)},assert.deepEqual=function(actual,expected,message){_deepEqual(actual,expected)||fail(actual,expected,message,\"deepEqual\",assert.deepEqual)},assert.notDeepEqual=function(actual,expected,message){_deepEqual(actual,expected)&&fail(actual,expected,message,\"notDeepEqual\",assert.notDeepEqual)},assert.strictEqual=function(actual,expected,message){actual!==expected&&fail(actual,expected,message,\"===\",assert.strictEqual)},assert.notStrictEqual=function(actual,expected,message){actual===expected&&fail(actual,expected,message,\"!==\",assert.notStrictEqual)},assert.throws=function(){_throws.apply(this,[!0].concat(pSlice.call(arguments)))},assert.doesNotThrow=function(){_throws.apply(this,[!1].concat(pSlice.call(arguments)))},assert.ifError=function(err){if(err)throw err};var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj)hasOwn.call(obj,key)&&keys.push(key);return keys}},{\"util/\":15}],14:[function(_dereq_,module){module.exports=function(arg){return arg&&\"object\"==typeof arg&&\"function\"==typeof arg.copy&&\"function\"==typeof arg.fill&&\"function\"==typeof arg.readUInt8}},{}],15:[function(_dereq_,module,exports){(function(process,global){function inspect(obj,opts){var ctx={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(ctx.depth=arguments[2]),arguments.length>=4&&(ctx.colors=arguments[3]),isBoolean(opts)?ctx.showHidden=opts:opts&&exports._extend(ctx,opts),isUndefined(ctx.showHidden)&&(ctx.showHidden=!1),isUndefined(ctx.depth)&&(ctx.depth=2),isUndefined(ctx.colors)&&(ctx.colors=!1),isUndefined(ctx.customInspect)&&(ctx.customInspect=!0),ctx.colors&&(ctx.stylize=stylizeWithColor),formatValue(ctx,obj,ctx.depth)}function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];return style?\"\u001b[\"+inspect.colors[style][0]+\"m\"+str+\"\u001b[\"+inspect.colors[style][1]+\"m\":str}function stylizeNoColor(str){return str}function arrayToHash(array){var hash={};return array.forEach(function(val){hash[val]=!0}),hash}function formatValue(ctx,value,recurseTimes){if(ctx.customInspect&&value&&isFunction(value.inspect)&&value.inspect!==exports.inspect&&(!value.constructor||value.constructor.prototype!==value)){var ret=value.inspect(recurseTimes,ctx);return isString(ret)||(ret=formatValue(ctx,ret,recurseTimes)),ret}var primitive=formatPrimitive(ctx,value);if(primitive)return primitive;var keys=Object.keys(value),visibleKeys=arrayToHash(keys);if(ctx.showHidden&&(keys=Object.getOwnPropertyNames(value)),isError(value)&&(keys.indexOf(\"message\")>=0||keys.indexOf(\"description\")>=0))return formatError(value);if(0===keys.length){if(isFunction(value)){var name=value.name?\": \"+value.name:\"\";return ctx.stylize(\"[Function\"+name+\"]\",\"special\")}if(isRegExp(value))return ctx.stylize(RegExp.prototype.toString.call(value),\"regexp\");if(isDate(value))return ctx.stylize(Date.prototype.toString.call(value),\"date\");if(isError(value))return formatError(value)}var base=\"\",array=!1,braces=[\"{\",\"}\"];if(isArray(value)&&(array=!0,braces=[\"[\",\"]\"]),isFunction(value)){var n=value.name?\": \"+value.name:\"\";base=\" [Function\"+n+\"]\"}if(isRegExp(value)&&(base=\" \"+RegExp.prototype.toString.call(value)),isDate(value)&&(base=\" \"+Date.prototype.toUTCString.call(value)),isError(value)&&(base=\" \"+formatError(value)),0===keys.length&&(!array||0==value.length))return braces[0]+base+braces[1];if(0>recurseTimes)return isRegExp(value)?ctx.stylize(RegExp.prototype.toString.call(value),\"regexp\"):ctx.stylize(\"[Object]\",\"special\");ctx.seen.push(value);var output;return output=array?formatArray(ctx,value,recurseTimes,visibleKeys,keys):keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)}),ctx.seen.pop(),reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize(\"undefined\",\"undefined\");if(isString(value)){var simple=\"'\"+JSON.stringify(value).replace(/^\"|\"$/g,\"\").replace(/'/g,\"\\\\'\").replace(/\\\\\"/g,'\"')+\"'\";return ctx.stylize(simple,\"string\")}return isNumber(value)?ctx.stylize(\"\"+value,\"number\"):isBoolean(value)?ctx.stylize(\"\"+value,\"boolean\"):isNull(value)?ctx.stylize(\"null\",\"null\"):void 0}function formatError(value){return\"[\"+Error.prototype.toString.call(value)+\"]\"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){for(var output=[],i=0,l=value.length;l>i;++i)hasOwnProperty(value,i+\"\")?output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,i+\"\",!0)):output.push(\"\");return keys.forEach(function(key){key.match(/^\\d+$/)||output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,!0))}),output}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;if(desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]},desc.get?str=desc.set?ctx.stylize(\"[Getter/Setter]\",\"special\"):ctx.stylize(\"[Getter]\",\"special\"):desc.set&&(str=ctx.stylize(\"[Setter]\",\"special\")),hasOwnProperty(visibleKeys,key)||(name=\"[\"+key+\"]\"),str||(0>ctx.seen.indexOf(desc.value)?(str=isNull(recurseTimes)?formatValue(ctx,desc.value,null):formatValue(ctx,desc.value,recurseTimes-1),str.indexOf(\"\\n\")>-1&&(str=array?str.split(\"\\n\").map(function(line){return\"  \"+line}).join(\"\\n\").substr(2):\"\\n\"+str.split(\"\\n\").map(function(line){return\"   \"+line}).join(\"\\n\"))):str=ctx.stylize(\"[Circular]\",\"special\")),isUndefined(name)){if(array&&key.match(/^\\d+$/))return str;name=JSON.stringify(\"\"+key),name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?(name=name.substr(1,name.length-2),name=ctx.stylize(name,\"name\")):(name=name.replace(/'/g,\"\\\\'\").replace(/\\\\\"/g,'\"').replace(/(^\"|\"$)/g,\"'\"),name=ctx.stylize(name,\"string\"))}return name+\": \"+str}function reduceToSingleString(output,base,braces){var numLinesEst=0,length=output.reduce(function(prev,cur){return numLinesEst++,cur.indexOf(\"\\n\")>=0&&numLinesEst++,prev+cur.replace(/\\u001b\\[\\d\\d?m/g,\"\").length+1},0);return length>60?braces[0]+(\"\"===base?\"\":base+\"\\n \")+\" \"+output.join(\",\\n  \")+\" \"+braces[1]:braces[0]+base+\" \"+output.join(\", \")+\" \"+braces[1]}function isArray(ar){return Array.isArray(ar)}function isBoolean(arg){return\"boolean\"==typeof arg}function isNull(arg){return null===arg}function isNullOrUndefined(arg){return null==arg}function isNumber(arg){return\"number\"==typeof arg}function isString(arg){return\"string\"==typeof arg}function isSymbol(arg){return\"symbol\"==typeof arg}function isUndefined(arg){return void 0===arg}function isRegExp(re){return isObject(re)&&\"[object RegExp]\"===objectToString(re)}function isObject(arg){return\"object\"==typeof arg&&null!==arg}function isDate(d){return isObject(d)&&\"[object Date]\"===objectToString(d)}function isError(e){return isObject(e)&&(\"[object Error]\"===objectToString(e)||e instanceof Error)}function isFunction(arg){return\"function\"==typeof arg}function isPrimitive(arg){return null===arg||\"boolean\"==typeof arg||\"number\"==typeof arg||\"string\"==typeof arg||\"symbol\"==typeof arg||arg===void 0}function objectToString(o){return Object.prototype.toString.call(o)}function pad(n){return 10>n?\"0\"+n.toString(10):n.toString(10)}function timestamp(){var d=new Date,time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(\":\");return[d.getDate(),months[d.getMonth()],time].join(\" \")}function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){for(var objects=[],i=0;arguments.length>i;i++)objects.push(inspect(arguments[i]));return objects.join(\" \")}for(var i=1,args=arguments,len=args.length,str=(f+\"\").replace(formatRegExp,function(x){if(\"%%\"===x)return\"%\";if(i>=len)return x;switch(x){case\"%s\":return args[i++]+\"\";case\"%d\":return Number(args[i++]);case\"%j\":try{return JSON.stringify(args[i++])}catch(_){return\"[Circular]\"}default:return x}}),x=args[i];len>i;x=args[++i])str+=isNull(x)||!isObject(x)?\" \"+x:\" \"+inspect(x);return str},exports.deprecate=function(fn,msg){function deprecated(){if(!warned){if(process.throwDeprecation)throw Error(msg);process.traceDeprecation?console.trace(msg):console.error(msg),warned=!0}return fn.apply(this,arguments)}if(isUndefined(global.process))return function(){return exports.deprecate(fn,msg).apply(this,arguments)};if(process.noDeprecation===!0)return fn;var warned=!1;return deprecated};var debugEnviron,debugs={};exports.debuglog=function(set){if(isUndefined(debugEnviron)&&(debugEnviron=process.env.NODE_DEBUG||\"\"),set=set.toUpperCase(),!debugs[set])if(RegExp(\"\\\\b\"+set+\"\\\\b\",\"i\").test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error(\"%s %d: %s\",set,pid,msg)}}else debugs[set]=function(){};return debugs[set]},exports.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:\"cyan\",number:\"yellow\",\"boolean\":\"yellow\",undefined:\"grey\",\"null\":\"bold\",string:\"green\",date:\"magenta\",regexp:\"red\"},exports.isArray=isArray,exports.isBoolean=isBoolean,exports.isNull=isNull,exports.isNullOrUndefined=isNullOrUndefined,exports.isNumber=isNumber,exports.isString=isString,exports.isSymbol=isSymbol,exports.isUndefined=isUndefined,exports.isRegExp=isRegExp,exports.isObject=isObject,exports.isDate=isDate,exports.isError=isError,exports.isFunction=isFunction,exports.isPrimitive=isPrimitive,exports.isBuffer=_dereq_(\"./support/isBuffer\");var months=[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"];exports.log=function(){console.log(\"%s - %s\",timestamp(),exports.format.apply(exports,arguments))},exports.inherits=_dereq_(\"inherits\"),exports._extend=function(origin,add){if(!add||!isObject(add))return origin;for(var keys=Object.keys(add),i=keys.length;i--;)origin[keys[i]]=add[keys[i]];return origin}}).call(this,_dereq_(\"/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js\"),\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{\"./support/isBuffer\":14,\"/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js\":18,inherits:17}],16:[function(_dereq_,module){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(arg){return\"function\"==typeof arg}function isNumber(arg){return\"number\"==typeof arg}function isObject(arg){return\"object\"==typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||0>n||isNaN(n))throw TypeError(\"n must be a positive number\");return this._maxListeners=n,this},EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(this._events||(this._events={}),\"error\"===type&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length))throw er=arguments[1],er instanceof Error?er:TypeError('Uncaught, unspecified \"error\" event.');if(handler=this._events[type],isUndefined(handler))return!1;if(isFunction(handler))switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];handler.apply(this,args)}else if(isObject(handler)){for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];for(listeners=handler.slice(),len=listeners.length,i=0;len>i;i++)listeners[i].apply(this,args)}return!0},EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(this._events||(this._events={}),this._events.newListener&&this.emit(\"newListener\",type,isFunction(listener.listener)?listener.listener:listener),this._events[type]?isObject(this._events[type])?this._events[type].push(listener):this._events[type]=[this._events[type],listener]:this._events[type]=listener,isObject(this._events[type])&&!this._events[type].warned){var m;m=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,m&&m>0&&this._events[type].length>m&&(this._events[type].warned=!0,console.error(\"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\",this._events[type].length),console.trace())}return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(type,listener){function g(){this.removeListener(type,g),fired||(fired=!0,listener.apply(this,arguments))}if(!isFunction(listener))throw TypeError(\"listener must be a function\");var fired=!1;return g.listener=listener,this.on(type,g),this},EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(!this._events||!this._events[type])return this;if(list=this._events[type],length=list.length,position=-1,list===listener||isFunction(list.listener)&&list.listener===listener)delete this._events[type],this._events.removeListener&&this.emit(\"removeListener\",type,listener);else if(isObject(list)){for(i=length;i-->0;)if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}if(0>position)return this;1===list.length?(list.length=0,delete this._events[type]):list.splice(position,1),this._events.removeListener&&this.emit(\"removeListener\",type,listener)}return this},EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[type]&&delete this._events[type],this;if(0===arguments.length){for(key in this._events)\"removeListener\"!==key&&this.removeAllListeners(key);return this.removeAllListeners(\"removeListener\"),this._events={},this}if(listeners=this._events[type],isFunction(listeners))this.removeListener(type,listeners);else for(;listeners.length;)this.removeListener(type,listeners[listeners.length-1]);return delete this._events[type],this},EventEmitter.prototype.listeners=function(type){var ret;return ret=this._events&&this._events[type]?isFunction(this._events[type])?[this._events[type]]:this._events[type].slice():[]},EventEmitter.listenerCount=function(emitter,type){var ret;return ret=emitter._events&&emitter._events[type]?isFunction(emitter._events[type])?1:emitter._events[type].length:0}},{}],17:[function(_dereq_,module){module.exports=\"function\"==typeof Object.create?function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})}:function(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype,ctor.prototype=new TempCtor,ctor.prototype.constructor=ctor}},{}],18:[function(_dereq_,module){function noop(){}var process=module.exports={};process.nextTick=function(){var canSetImmediate=\"undefined\"!=typeof window&&window.setImmediate,canPost=\"undefined\"!=typeof window&&window.postMessage&&window.addEventListener;if(canSetImmediate)return function(f){return window.setImmediate(f)};if(canPost){var queue=[];return window.addEventListener(\"message\",function(ev){var source=ev.source;if((source===window||null===source)&&\"process-tick\"===ev.data&&(ev.stopPropagation(),queue.length>0)){var fn=queue.shift();fn()}},!0),function(fn){queue.push(fn),window.postMessage(\"process-tick\",\"*\")}}return function(fn){setTimeout(fn,0)}}(),process.title=\"browser\",process.browser=!0,process.env={},process.argv=[],process.on=noop,process.once=noop,process.off=noop,process.emit=noop,process.binding=function(){throw Error(\"process.binding is not supported\")},process.cwd=function(){return\"/\"},process.chdir=function(){throw Error(\"process.chdir is not supported\")}},{}],19:[function(_dereq_,module){module.exports=_dereq_(14)},{}],20:[function(_dereq_,module){module.exports=_dereq_(15)},{\"./support/isBuffer\":19,\"/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js\":18,inherits:17}]},{},[9])(9)}),ace.define(\"ace/mode/html_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/worker/mirror\",\"ace/mode/html/saxparser\"],function(acequire,exports){\"use strict\";var oop=acequire(\"../lib/oop\");acequire(\"../lib/lang\");var Mirror=acequire(\"../worker/mirror\").Mirror,SAXParser=acequire(\"./html/saxparser\").SAXParser,errorTypes={\"expected-doctype-but-got-start-tag\":\"info\",\"expected-doctype-but-got-chars\":\"info\",\"non-html-root\":\"info\"},Worker=exports.Worker=function(sender){Mirror.call(this,sender),this.setTimeout(400),this.context=null};oop.inherits(Worker,Mirror),function(){this.setOptions=function(options){this.context=options.context},this.onUpdate=function(){var value=this.doc.getValue();if(value){var parser=new SAXParser,errors=[],noop=function(){};parser.contentHandler={startDocument:noop,endDocument:noop,startElement:noop,endElement:noop,characters:noop},parser.errorHandler={error:function(message,location,code){errors.push({row:location.line,column:location.column,text:message,type:errorTypes[code]||\"error\"})}},this.context?parser.parseFragment(value,this.context):parser.parse(value),this.sender.emit(\"error\",errors)}}}.call(Worker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object\n});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ }),

/***/ "./src/app/lib/services/search.service.ts":
/*!************************************************!*\
  !*** ./src/app/lib/services/search.service.ts ***!
  \************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SearchService = /** @class */ (function () {
    function SearchService() {
        this.searchSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentSearch = this.searchSource.asObservable();
    }
    SearchService.prototype.changeSearch = function (search) {
        search = search.toLowerCase().trim();
        this.searchSource.next(search);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/views/language/editor/editor.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/language/editor/editor.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-wrap\">\r\n  <label for=\"editor\">{{ label }}</label>\r\n  <span class=\"info\">Fullscreen: F11 with focus on editor</span>\r\n</div>\r\n\r\n<ace-editor\r\n  class=\"ace-editor-default\"\r\n  #editor\r\n  [(text)]=\"content\"\r\n  [mode]=\"'html'\"\r\n  [theme]=\"'xcode'\"\r\n  [options]=\"aceOptions\"\r\n  [readOnly]=\"false\"\r\n  [autoUpdateContent]=\"true\"\r\n  [durationBeforeCallback]=\"100\"\r\n  (textChanged)=\"onChangeAce($event)\"\r\n></ace-editor>\r\n"

/***/ }),

/***/ "./src/app/views/language/editor/editor.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/language/editor/editor.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ace-editor-default {\n  min-height: 200px;\n  width: 100%;\n  overflow: auto;\n  border-radius: 7px;\n  border: 1px solid #ced4da;\n  transition: all 0.2s ease-in-out; }\n  .ace-editor-default:focus, .ace-editor-default.ace_focus {\n    background-color: #FFF;\n    border-color: #ff4dff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(204, 0, 204, 0.25); }\n  .label-wrap {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between; }\n  .label-wrap .info {\n    font-size: 10px;\n    opacity: 0.75; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvZWRpdG9yL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0aHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcYXBwXFx2aWV3c1xcbGFuZ3VhZ2VcXGVkaXRvclxcZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5ndWFnZS9lZGl0b3IvQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRodWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxzY3NzXFxzdHlsZXMtdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xhbmd1YWdlL2VkaXRvci9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdGh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXHNjc3NcXHN0eWxlcy11dGlscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQzREeUM7RUQzRHpDLGdDQ29DNkMsRUFBQTtFRDFDL0M7SUUwR0ksc0JGbEd3QztJRW1HeEMscUJGbkdnRTtJRW9HaEUsVUFBVTtJQUNWLGdERHpHb0IsRUFBQTtFRE94QjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsOEJBQThCLEVBQUE7RUFIaEM7SUFNSSxlQUFlO0lBQ2YsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMtdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMtdXRpbHNcIjtcclxuXHJcbi5hY2UtZWRpdG9yLWRlZmF1bHQge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXItY29sb3I7XHJcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuXHJcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLWZvY3VzKCRwcmltYXJ5LCAjRkZGLCBsaWdodGVuKCRwcmltYXJ5LCAyNSUpLCAwIDAgMCAuMnJlbSByZ2JhKCRwcmltYXJ5LCAuMjUpKTtcclxufVxyXG5cclxuLmxhYmVsLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRiZy1saWdodDogICAgICAgI2Y3ZjdmYTtcclxuJGxpZ2h0LWJvcmRlcjogICAjZjdlZmY2OyAvLyBib3JkZXIgb3ZlciB3aGl0ZVxyXG4kYmxhY2stMTogICAgICAgICMyMjFiMjY7XHJcblxyXG4kYmx1ZS0xOiAgICAgICAgICM1YzY0OWM7XHJcbiRibHVlLTI6ICAgICAgICAgIzljYTFiOTtcclxuJHBpbmstMTogICAgICAgICAjY2MwMGNjO1xyXG5cclxuJHNoYWRvdy0xOiAgICAgICAjZTlkZGY3OyAvLyBzaGFkb3cgYm94IGNvbG9yXHJcblxyXG4kZGlzYWJsZWQtYmc6ICAgICM4ODg7XHJcbiRkaXNhYmxlZC10ZXh0OiAgIzY2NjtcclxuXHJcbi8vIExheW91dFxyXG4kc2lkZWJhci13OiAgICAgICAgICAgICAgIDI1MHB4O1xyXG4kc2lkZWJhci1pdGVtLWg6ICAgICAgICAgIDYwcHg7XHJcbiRuYXZiYXItaDogICAgICAgICAgICAgICAgNjBweDtcclxuJHNpZGViYXItYmFkZ2Utc2l6ZTogICAgICAyM3B4O1xyXG4kc21hbGwtYnJlYWtwb2ludHM6ICAgICAgIDEzNjZweDtcclxuXHJcblxyXG4vLyBCVCBvdmVycml0ZXNcclxuJHByaW1hcnk6ICAgICAgICAgICAgICAgICAgICRwaW5rLTEgIWRlZmF1bHQ7XHJcbiRkYXJrOiAgICAgICAgICAgICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgICAgICAgICAgICAgICAgI2ZmMDA2NiAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICAgICAgICAgICAgICAgICNmZjk5MDAgIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAgICAgICAgICAgICAgICAjMDA5OWNjICFkZWZhdWx0O1xyXG5cclxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICRiZy1saWdodCAhZGVmYXVsdDtcclxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRibHVlLTEgIWRlZmF1bHQ7XHJcblxyXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJHBpbmstMSAhZGVmYXVsdDtcclxuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICBkYXJrZW4oJHBpbmstMSwgMTUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgIG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgMzBweCAhZGVmYXVsdDtcclxuXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICBcIk51bml0b1wiLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4vLyAkZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgIDAuODc1cmVtICFkZWZhdWx0OyAvLyAxNHB4XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XHJcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgMHB4ICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICA3cHggIWRlZmF1bHQ7XHJcbi8vICRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcclxuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGNhcmQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gY2FsYygjeyRjYXJkLWJvcmRlci1yYWRpdXN9IC0gI3skY2FyZC1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcclxuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgI0ZGRiAhZGVmYXVsdDtcclxuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcclxuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgI0ZGRiAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xyXG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xyXG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcclxuXHJcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgI2NlZDRkYSAhZGVmYXVsdDtcclxuIiwiJHJlbS1iYXNlbGluZTogMTZweCAhZGVmYXVsdDtcclxuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XHJcbiRyZW0tcHgtb25seTogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcclxuICBAaWYgJHNlcGFyYXRvciA9PSBcImNvbW1hXCIgb3IgJHNlcGFyYXRvciA9PSBcInNwYWNlXCIge1xyXG4gICAgQHJldHVybiBhcHBlbmQoJGxpc3QsIG51bGwsICRzZXBhcmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgQGlmIGZ1bmN0aW9uLWV4aXN0cyhcImxpc3Qtc2VwYXJhdG9yXCIpID09IHRydWUge1xyXG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XHJcbiAgfVxyXG5cclxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxyXG4gICR0ZXN0LWxpc3Q6ICgpO1xyXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcclxuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xyXG59XHJcblxyXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XHJcbiAgZm9udC1zaXplOiAkem9vbSAvIDE2cHggKiAkcmVtLWJhc2VsaW5lO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWVzLi4uKSB7XHJcbiAgJHJlc3VsdDogKCk7XHJcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcclxuXHJcbiAgQGVhY2ggJHZhbHVlIGluICR2YWx1ZXMge1xyXG4gICAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJyZW1cIiBhbmQgJHRvID09IFwicHhcIiB7XHJcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XHJcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJweFwiIGFuZCAkdG8gPT0gXCJyZW1cIiB7XHJcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAkcmVtLWJhc2VsaW5lICogMXJlbSwgJHNlcGFyYXRvcik7XHJcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XHJcbiAgICAgICR2YWx1ZS1zZXBhcmF0b3I6IHJlbS1zZXBhcmF0b3IoJHZhbHVlKTtcclxuICAgICAgJHZhbHVlOiByZW0tY29udmVydCgkdG8sICR2YWx1ZS4uLik7XHJcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xyXG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gaWYobGVuZ3RoKCRyZXN1bHQpID09IDEsIG50aCgkcmVzdWx0LCAxKSwgJHJlc3VsdCk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiByZW0oJHZhbHVlcy4uLikge1xyXG4gIEBpZiAkcmVtLXB4LW9ubHkge1xyXG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XHJcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnRpZXMpID09IFwibWFwXCIge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluIG1hcC1rZXlzKCRwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgQGlmICRyZW0tZmFsbGJhY2sgb3IgJHJlbS1weC1vbmx5IHtcclxuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHB4LCAkdmFsdWVzLi4uKTtcclxuICAgICAgfVxyXG4gICAgICBAaWYgbm90ICRyZW0tcHgtb25seSB7XHJcbiAgICAgICAgI3skcHJvcGVydHl9OiByZW0tY29udmVydChyZW0sICR2YWx1ZXMuLi4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1peGluIHNjcm9sbGJhcnMoJHNpemUsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6ICAkc2l6ZTtcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gIGJvZHkge1xyXG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gICAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCgpIHtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWNvbnRyb2wtZm9jdXMoJGlucHV0LWZvY3VzLWNvbG9yLCAkaW5wdXQtZm9jdXMtYmcsICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93KSB7XHJcbiAgJjpmb2N1cywgJi5hY2VfZm9jdXMge1xyXG4gICAgLy8gY29sb3I6ICRpbnB1dC1mb2N1cy1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1mb2N1cy1iZztcclxuICAgIGJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/language/editor/editor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/language/editor/editor.component.ts ***!
  \***********************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_theme_xcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/theme/xcode */ "./node_modules/brace/theme/xcode.js");
/* harmony import */ var brace_theme_xcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_theme_xcode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! brace/mode/html */ "./node_modules/brace/mode/html.js");
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(brace_mode_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! brace/ext/searchbox */ "./node_modules/brace/ext/searchbox.js");
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_6__);







var EditorComponent = /** @class */ (function () {
    function EditorComponent(renderer, appData) {
        this.renderer = renderer;
        this.appData = appData;
        this.aceOptions = {
            useWorker: false,
            // maxLines: 15,
            minLines: 10,
            tabSize: 2,
            showPrintMargin: false
        };
        this.fullScreen = false;
    }
    EditorComponent.prototype.ngAfterViewInit = function () {
        var renderer = this.renderer;
        var editorInstance = this.editor.getEditor();
        editorInstance.commands.addCommand({
            name: 'Toggle Fullscreen',
            bindKey: 'F11',
            exec: function (editor) {
                if (this.fullScreen) {
                    renderer.removeClass(document.body, 'editor-full-screen');
                    renderer.removeClass(editor.container, 'editor-full-screen');
                }
                else {
                    renderer.addClass(document.body, 'editor-full-screen');
                    renderer.addClass(editor.container, 'editor-full-screen');
                }
                editorInstance.setOptions({
                    maxLines: (this.fullScreen ? 15 : window.innerHeight / 14)
                });
                editorInstance.resize();
                this.fullScreen = !this.fullScreen;
            }
        });
    };
    EditorComponent.prototype.onChangeAce = function (code) {
        this.appData.setStringVal(this.langKey, this.contentKey, code);
        this.appData.setPreviewIframeContent(this.langKey);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditorComponent.prototype, "langKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditorComponent.prototype, "contentKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditorComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorComponent.prototype, "editor", void 0);
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/views/language/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/views/language/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/views/language/language-navbar/language-navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/language/language-navbar/language-navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\r\n  <form class=\"form-inline mr-3 search-form\">\r\n    <svg class=\"icon icon-search\"><use xlink:href=\"#search\"></use></svg>\r\n    <input\r\n      class=\"form-control\"\r\n      type=\"search\"\r\n      placeholder=\"Search\"\r\n      aria-label=\"Search\"\r\n      [ngModel]=\"searchValue\"\r\n      [ngModelOptions]=\"{ standalone: true, debounce: 500 }\"\r\n      (ngModelChange)=\"searchChange($event)\"\r\n    >\r\n  </form>\r\n\r\n  <button class=\"btn btn-danger btn-clear-search\" type=\"button\" [hidden]=\"!searchValue.length\" (click)=\"clearSearch()\">\r\n    <svg class=\"icon\"><use xlink:href=\"#close\"></use></svg>\r\n  </button>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"downloadZipLanguage($event)\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zM128.4 336c-17.9 0-32.4 12.1-32.4 27 0 15 14.6 27 32.5 27s32.4-12.1 32.4-27-14.6-27-32.5-27zM224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM95.9 32h32v32h-32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6z\"></path></svg>\r\n          <span>Download zip</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#modal-tags-legend\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path d=\"M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z\"></path></svg>\r\n          <span>Tags legend</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#modal-preview-settings\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z\"></path></svg>\r\n          <span>Preview settings</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <a class=\"btn btn-primary generate-script\" routerLink=\"/generate-script/{{ langKey }}\">Generate script</a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/views/language/language-navbar/language-navbar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/language/language-navbar/language-navbar.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #FFF;\n  border-bottom: 1px solid #f7eff6;\n  border-left: 1px solid #f7eff6;\n  padding: 0 30px;\n  height: 60px; }\n\n.navbar .navbar-nav .nav-link svg {\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n  display: inline-block;\n  fill: #cc00cc; }\n\n.navbar .navbar-nav .nav-link > span {\n  vertical-align: middle;\n  display: inline-block;\n  margin-left: 6px;\n  font-size: 12px; }\n\n.navbar .navbar-nav .nav-link .badge-danger {\n  float: none;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 0 0 4px; }\n\n@media (min-width: 992px) {\n  .navbar .navbar-nav .nav-link {\n    padding-right: 15px;\n    padding-left: 15px; } }\n\n.navbar-light .navbar-nav .nav-link {\n  color: #221b26; }\n\n.navbar-light .navbar-nav .nav-link:hover {\n    color: purple;\n    background-color: #f7f7fa; }\n\n.search-form {\n  position: relative; }\n\n.search-form .form-control {\n    width: 190px;\n    padding-left: 1rem;\n    padding-right: 40px;\n    background-color: #f2f2f2; }\n\n.search-form .form-control:not(:focus) {\n      border-color: #f2f2f2; }\n\n.search-form .form-control::-webkit-search-decoration, .search-form .form-control::-webkit-search-cancel-button, .search-form .form-control::-webkit-search-results-button, .search-form .form-control::-webkit-search-results-decoration {\n      display: none; }\n\n.search-form .icon-search {\n    fill: #cc00cc;\n    width: 17px;\n    height: 17px;\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n    pointer-events: none; }\n\n.generate-script {\n  width: 190px;\n  font-size: 15px; }\n\n.btn-clear-search {\n  height: 35px;\n  width: 35px;\n  position: relative; }\n\n.btn-clear-search .icon {\n    fill: #FFF;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvbGFuZ3VhZ2UtbmF2YmFyL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0aHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcYXBwXFx2aWV3c1xcbGFuZ3VhZ2VcXGxhbmd1YWdlLW5hdmJhclxcbGFuZ3VhZ2UtbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5ndWFnZS9sYW5ndWFnZS1uYXZiYXIvQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRodWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxzY3NzXFxzdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0NDSHNCO0VESXRCLDhCQ0pzQjtFRFN0QixlQzBCOEI7RUR6QjlCLFlDSzRCLEVBQUE7O0FERjlCO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGFDZG9CLEVBQUE7O0FEUXhCO0VBU0ksc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQVpuQjtFQWVJLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBOztBQUVuQjtFQXBCRjtJQXFCSSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUEsRUFFckI7O0FBQ0Q7RUFDRSxjQ3RDc0IsRUFBQTs7QURxQ3hCO0lBR0ksYUNUNEM7SURVNUMseUJDM0NvQixFQUFBOztBRCtDeEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFJSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTs7QUFQN0I7TUFVTSxxQkFBcUIsRUFBQTs7QUFWM0I7TUFpQk0sYUFBYSxFQUFBOztBQWpCbkI7SUFzQkksYUMvRG9CO0lEZ0VwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSHBCO0lBTUksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5ndWFnZS9sYW5ndWFnZS1uYXZiYXIvbGFuZ3VhZ2UtbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy12YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInN0eWxlcy11dGlsc1wiO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0LWJvcmRlcjtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRsaWdodC1ib3JkZXI7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IC0kZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAtJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG4gIC8vIG1hcmdpbi10b3A6IC0kZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG4gIHBhZGRpbmc6IDAgJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG4gIGhlaWdodDogJG5hdmJhci1oO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZpbGw6ICRwaW5rLTE7XHJcbiAgfVxyXG4gID4gc3BhbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmJhZGdlLWRhbmdlciB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW46IDAgMCAwIDRweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICRibGFjay0xO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1mb3JtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcblxyXG4gICAgJjpub3QoOmZvY3VzKSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2YyZjJmMjtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxyXG4gICAgJjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuICAgICY6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxyXG4gICAgJjo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pY29uLXNlYXJjaCB7XHJcbiAgICBmaWxsOiAkcGluay0xO1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2VuZXJhdGUtc2NyaXB0IHtcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLWNsZWFyLXNlYXJjaCB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmljb24ge1xyXG4gICAgZmlsbDogI0ZGRjtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJGJnLWxpZ2h0OiAgICAgICAjZjdmN2ZhO1xyXG4kbGlnaHQtYm9yZGVyOiAgICNmN2VmZjY7IC8vIGJvcmRlciBvdmVyIHdoaXRlXHJcbiRibGFjay0xOiAgICAgICAgIzIyMWIyNjtcclxuXHJcbiRibHVlLTE6ICAgICAgICAgIzVjNjQ5YztcclxuJGJsdWUtMjogICAgICAgICAjOWNhMWI5O1xyXG4kcGluay0xOiAgICAgICAgICNjYzAwY2M7XHJcblxyXG4kc2hhZG93LTE6ICAgICAgICNlOWRkZjc7IC8vIHNoYWRvdyBib3ggY29sb3JcclxuXHJcbiRkaXNhYmxlZC1iZzogICAgIzg4ODtcclxuJGRpc2FibGVkLXRleHQ6ICAjNjY2O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRzaWRlYmFyLXc6ICAgICAgICAgICAgICAgMjUwcHg7XHJcbiRzaWRlYmFyLWl0ZW0taDogICAgICAgICAgNjBweDtcclxuJG5hdmJhci1oOiAgICAgICAgICAgICAgICA2MHB4O1xyXG4kc2lkZWJhci1iYWRnZS1zaXplOiAgICAgIDIzcHg7XHJcbiRzbWFsbC1icmVha3BvaW50czogICAgICAgMTM2NnB4O1xyXG5cclxuXHJcbi8vIEJUIG92ZXJyaXRlc1xyXG4kcHJpbWFyeTogICAgICAgICAgICAgICAgICAgJHBpbmstMSAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAgICAgICAjZmYwMDY2ICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgICAgICAgICAgICAgICAgI2ZmOTkwMCAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICAgICAgICAgICAgICAgICMwMDk5Y2MgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJGJnLWxpZ2h0ICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtMSAhZGVmYXVsdDtcclxuXHJcbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgIGRhcmtlbigkcGluay0xLCAxNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgIFwiTnVuaXRvXCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250LWZhbWlseS1tb25vc3BhY2U6ICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgMC44NzVyZW0gIWRlZmF1bHQ7IC8vIDE0cHhcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgIDdweCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkY2FyZC1ib3JkZXItcmFkaXVzICFkZWZhdWx0OyAvLyBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xyXG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAjY2VkNGRhICFkZWZhdWx0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/language/language-navbar/language-navbar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/language/language-navbar/language-navbar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LanguageNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageNavbarComponent", function() { return LanguageNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var src_app_lib_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/services/search.service */ "./src/app/lib/services/search.service.ts");





var LanguageNavbarComponent = /** @class */ (function () {
    function LanguageNavbarComponent(appData, route, search) {
        this.appData = appData;
        this.route = route;
        this.search = search;
    }
    LanguageNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search.currentSearch.subscribe(function (searchValue) { return _this.searchValue = searchValue; });
        this.langKey = this.route.snapshot.params['langKey'];
    };
    LanguageNavbarComponent.prototype.downloadZipLanguage = function (event) {
        event.preventDefault();
        this.appData.generateLanguageZip(this.langKey);
    };
    LanguageNavbarComponent.prototype.searchChange = function (event) {
        event = event.toLowerCase().trim();
        this.search.changeSearch(event);
    };
    LanguageNavbarComponent.prototype.clearSearch = function () {
        this.search.changeSearch('');
    };
    LanguageNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-language-navbar',
            template: __webpack_require__(/*! ./language-navbar.component.html */ "./src/app/views/language/language-navbar/language-navbar.component.html"),
            styles: [__webpack_require__(/*! ./language-navbar.component.scss */ "./src/app/views/language/language-navbar/language-navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_app_data__WEBPACK_IMPORTED_MODULE_3__["AppData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_lib_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], LanguageNavbarComponent);
    return LanguageNavbarComponent;
}());



/***/ }),

/***/ "./src/app/views/language/language-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/language/language-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LanguageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageRoutingModule", function() { return LanguageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/language.component */ "./src/app/views/language/language/language.component.ts");




var routes = [
    {
        path: ':langKey',
        component: _language_language_component__WEBPACK_IMPORTED_MODULE_3__["LanguageComponent"]
    }
];
var LanguageRoutingModule = /** @class */ (function () {
    function LanguageRoutingModule() {
    }
    LanguageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LanguageRoutingModule);
    return LanguageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/language/language.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/language/language.module.ts ***!
  \***************************************************/
/*! exports provided: LanguageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModule", function() { return LanguageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _language_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-routing.module */ "./src/app/views/language/language-routing.module.ts");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language/language.component */ "./src/app/views/language/language/language.component.ts");
/* harmony import */ var _language_navbar_language_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language-navbar/language-navbar.component */ "./src/app/views/language/language-navbar/language-navbar.component.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/views/language/editor/editor.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/views/language/preview/preview.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/views/language/subject/subject.component.ts");
/* harmony import */ var _modal_tags_modal_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-tags/modal-tags.component */ "./src/app/views/language/modal-tags/modal-tags.component.ts");
/* harmony import */ var _modal_preview_settings_modal_preview_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-preview-settings/modal-preview-settings.component */ "./src/app/views/language/modal-preview-settings/modal-preview-settings.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var LanguageModule = /** @class */ (function () {
    function LanguageModule() {
    }
    LanguageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _language_language_component__WEBPACK_IMPORTED_MODULE_4__["LanguageComponent"],
                _language_navbar_language_navbar_component__WEBPACK_IMPORTED_MODULE_5__["LanguageNavbarComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_7__["EditorComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_9__["SubjectComponent"],
                _modal_tags_modal_tags_component__WEBPACK_IMPORTED_MODULE_10__["ModalTagsComponent"],
                _modal_preview_settings_modal_preview_settings_component__WEBPACK_IMPORTED_MODULE_11__["ModalPreviewSettingsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _language_routing_module__WEBPACK_IMPORTED_MODULE_3__["LanguageRoutingModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__["AceEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ]
        })
    ], LanguageModule);
    return LanguageModule;
}());



/***/ }),

/***/ "./src/app/views/language/language/language.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/language/language/language.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view view-language\">\r\n  <div class=\"language-navbar\">\r\n    <eg-language-navbar></eg-language-navbar>\r\n  </div>\r\n  <div class=\"view-content\" #scrolling>\r\n    <div class=\"row\">\r\n      <div class=\"col col-editors\">\r\n\r\n        <!-- header -->\r\n        <div\r\n          class=\"lang-item lang-item-header lang-item-generic-header\"\r\n          [ngClass]=\"findedLangItem('Generic Header', 'class', scrolling)\"\r\n          [style.order]=\"findedLangItem('Generic Header', 'order', scrolling)\"\r\n        >\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <a\r\n                class=\"collapse-button collapsed\"\r\n                href=\"#collap-lang-item-generic-header\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#collap-lang-item-generic-header\"\r\n                aria-expanded=\"false\"\r\n              >\r\n                <div class=\"text\">Generic Header</div>\r\n                <div class=\"badges\">\r\n                  <span class=\"badge badge-id\">Header</span>\r\n                  <ng-container *ngFor=\"let tagName of objectKeys(langData.emails.header.tags)\" >\r\n                    <span\r\n                      class=\"badge badge-{{ tagName }}\"\r\n                      *ngIf=\"langData.emails.header.tags[tagName]\"\r\n                    >\r\n                      {{ tagName }}\r\n                    </span>\r\n                  </ng-container>\r\n                </div>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"collapse\" id=\"collap-lang-item-generic-header\">\r\n              <div class=\"card-body\">\r\n                <eg-editor\r\n                  label=\"Html\"\r\n                  [langKey]=\"langKey\"\r\n                  [content]=\"langData.emails.header.html\"\r\n                  [contentKey]=\"'emails.header.html'\"\r\n                ></eg-editor>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /header -->\r\n\r\n        <!-- footer -->\r\n        <div\r\n          class=\"lang-item lang-item-footer lang-item-generic-footer\"\r\n          [ngClass]=\"findedLangItem('Generic Footer', 'class', scrolling)\"\r\n          [style.order]=\"findedLangItem('Generic Footer', 'order', scrolling)\"\r\n        >\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <a\r\n                class=\"collapse-button collapsed\"\r\n                href=\"#collap-lang-item-generic-footer\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#collap-lang-item-generic-footer\"\r\n                aria-expanded=\"false\"\r\n              >\r\n                <div class=\"text\">Generic Footer</div>\r\n                <div class=\"badges\">\r\n                  <span class=\"badge badge-id\">Footer</span>\r\n                  <ng-container *ngFor=\"let tagName of objectKeys(langData.emails.footer.tags)\" >\r\n                    <span\r\n                      class=\"badge badge-{{ tagName }}\"\r\n                      *ngIf=\"langData.emails.footer.tags[tagName]\"\r\n                    >\r\n                      {{ tagName }}\r\n                    </span>\r\n                  </ng-container>\r\n                </div>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"collapse\" id=\"collap-lang-item-generic-footer\">\r\n              <div class=\"card-body\">\r\n                <eg-editor\r\n                  label=\"Html\"\r\n                  [langKey]=\"langKey\"\r\n                  [content]=\"langData.emails.footer.html\"\r\n                  [contentKey]=\"'emails.footer.html'\"\r\n                ></eg-editor>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /footer -->\r\n\r\n        <div\r\n          class=\"lang-item lang-item-email lang-item-email-{{ emailTemplateId }}\"\r\n          *ngFor=\"let emailTemplateId of objectKeys(langData.emails.templates)\"\r\n          [ngClass]=\"findedLangItem(langData.emails.templates[emailTemplateId], 'class', scrolling)\"\r\n          [style.order]=\"findedLangItem(langData.emails.templates[emailTemplateId], 'order', scrolling)\"\r\n        >\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <a\r\n                class=\"collapse-button collapsed\"\r\n                (click)=\"refreshPreview($event, emailTemplateId)\"\r\n                href=\"#collap-lang-item-email-{{ emailTemplateId }}\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#collap-lang-item-email-{{ emailTemplateId }}\"\r\n                aria-expanded=\"false\"\r\n              >\r\n                <div class=\"text\">{{ langData.emails.templates[emailTemplateId].name }}</div>\r\n                <div class=\"badges\">\r\n                  <span class=\"badge badge-id\">Id {{ emailTemplateId }}</span>\r\n                  <ng-container *ngFor=\"let tagName of objectKeys(langData.emails.templates[emailTemplateId].tags)\" >\r\n                    <span\r\n                      class=\"badge badge-{{ tagName }}\"\r\n                      *ngIf=\"langData.emails.templates[emailTemplateId].tags[tagName]\"\r\n                    >\r\n                      {{ tagName }}\r\n                    </span>\r\n                  </ng-container>\r\n                </div>\r\n              </a>\r\n\r\n              <div class=\"buttons-header\">\r\n                <button\r\n                  class=\"btn btn-light over-1400\"\r\n                  type=\"button\"\r\n                  (click)=\"refreshPreview($event, emailTemplateId, true)\"\r\n                >\r\n                  <svg class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add to preview\"><use xlink:href=\"#preview\"></use></svg>\r\n                </button>\r\n\r\n                <button\r\n                  class=\"btn btn-light over-1400\"\r\n                  type=\"button\"\r\n                  (click)=\"appData.generateEmailHtml(langKey, emailTemplateId)\"\r\n                >\r\n                  <svg class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Download .html\"><use xlink:href=\"#download\"></use></svg>\r\n                </button>\r\n\r\n                <div class=\"dropdown\">\r\n                  <button\r\n                    class=\"btn btn-light dropdown-toggle\"\r\n                    type=\"button\"\r\n                    id=\"dropdownMenuButton{{ emailTemplateId }}\"\r\n                    data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\"\r\n                  >\r\n                    <svg class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Email options\"><use xlink:href=\"#tree-dots\"></use></svg>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" attr.aria-labelledby=\"dropdownMenuButton{{ emailTemplateId }}\">\r\n                    <a class=\"dropdown-item over-1400\" href=\"#\" (click)=\"refreshPreview($event, emailTemplateId, true)\">\r\n                      Add to preview\r\n                    </a>\r\n                    <a class=\"dropdown-item over-1400\" href=\"#\" (click)=\"appData.generateEmailHtml(langKey, emailTemplateId)\">\r\n                      Download .html\r\n                    </a>\r\n                    <hr class=\"over-1400\">\r\n                    <a class=\"dropdown-item\" href=\"#\" (click)=\"evalModifyHeader($event, emailTemplateId)\">\r\n                      {{ langData.emails.templates[emailTemplateId].tags.customHeader ? 'Remove header' : 'Add header' }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\" (click)=\"evalModifyFooter($event, emailTemplateId)\">\r\n                      {{ langData.emails.templates[emailTemplateId].tags.customFooter ? 'Remove footer' : 'Add footer' }}\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"collapse\" id=\"collap-lang-item-email-{{ emailTemplateId }}\">\r\n              <div class=\"card-body\">\r\n                <div class=\"form-group\">\r\n                  <eg-subject\r\n                    contentKey=\"emails.templates[{{ emailTemplateId }}].subject\"\r\n                    [value]=\"langData.emails.templates[emailTemplateId].subject\"\r\n                    [langKey]=\"langKey\"\r\n                  ></eg-subject>\r\n                </div>\r\n\r\n                <!-- body -->\r\n                <div class=\"form-group\">\r\n                  <eg-editor\r\n                    label=\"Body\"\r\n                    [langKey]=\"langKey\"\r\n                    [content]=\"langData.emails.templates[emailTemplateId].html\"\r\n                    contentKey=\"emails.templates[{{ emailTemplateId }}].html\"\r\n                  ></eg-editor>\r\n                </div>\r\n\r\n                <!-- customHeader -->\r\n                <div class=\"form-group\">\r\n                  <eg-editor\r\n                    *ngIf=\"langData.emails.templates[emailTemplateId].tags.customHeader\"\r\n                    label=\"Custom header\"\r\n                    [langKey]=\"langKey\"\r\n                    [content]=\"langData.emails.templates[emailTemplateId].header.html\"\r\n                    contentKey=\"emails.templates[{{ emailTemplateId }}].header.html\"\r\n                  ></eg-editor>\r\n                </div>\r\n\r\n                <!-- customFooter -->\r\n                <div class=\"form-group\">\r\n                  <eg-editor\r\n                    *ngIf=\"langData.emails.templates[emailTemplateId].tags.customFooter\"\r\n                    label=\"Custom footer\"\r\n                    [langKey]=\"langKey\"\r\n                    [content]=\"langData.emails.templates[emailTemplateId].footer.html\"\r\n                    contentKey=\"emails.templates[{{ emailTemplateId }}].footer.html\"\r\n                  ></eg-editor>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- preview -->\r\n      <div class=\"col col-preview\">\r\n        <eg-preview [previewEmailId]=\"1\" [previewEmailLangKey]=\"langKey\"></eg-preview>\r\n      </div>\r\n      <!-- preview -->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<eg-modal-tags></eg-modal-tags>\r\n<eg-modal-preview-settings></eg-modal-preview-settings>\r\n"

/***/ }),

/***/ "./src/app/views/language/language/language.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/language/language/language.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-language {\n  padding: 0; }\n  .view-language .view-content {\n    position: absolute;\n    top: 60px;\n    left: 0;\n    right: 0;\n    height: calc(100% - 60px);\n    overflow: auto;\n    padding: 20px 30px; }\n  .view-language .view-content::-webkit-scrollbar {\n      width: 0;\n      height: 0; }\n  .col-editors {\n  display: flex;\n  flex-wrap: wrap; }\n  .language-navbar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 1; }\n  .col-preview {\n  flex: 0 0 650px;\n  max-width: 650px;\n  position: fixed;\n  top: 140px;\n  right: 15px;\n  bottom: 20px;\n  padding-left: 0;\n  padding-right: 0;\n  margin-right: 15px; }\n  .lang-item {\n  max-width: calc(100% - 680px);\n  margin-right: 680px;\n  width: 100%; }\n  .lang-item.finded .card-header .text {\n    color: #cc00cc;\n    font-weight: bold; }\n  .lang-item:not(:last-child) {\n    margin-bottom: 30px; }\n  .lang-item .card {\n    overflow: visible; }\n  .lang-item .card-header {\n    padding: 0;\n    position: relative;\n    background-color: transparent; }\n  .lang-item .card-header .collapse-button {\n      padding: 10px 30px;\n      display: block; }\n  .lang-item .card-header .collapse-button > * {\n        pointer-events: none; }\n  .lang-item .card-header .text {\n      color: #5c649c;\n      max-width: calc(100% - 40px);\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden; }\n  .lang-item .card-header .badges {\n      max-width: calc(100% - 40px); }\n  .lang-item .card-header .buttons-header .over-1400 {\n      display: none; }\n  @media (min-width: 1400px) {\n        .lang-item .card-header .buttons-header .over-1400 {\n          display: block; } }\n  .lang-item .card-header .dropdown-menu .over-1400 {\n      display: block; }\n  @media (min-width: 1400px) {\n        .lang-item .card-header .dropdown-menu .over-1400 {\n          display: none; } }\n  .lang-item .card-body {\n    padding-top: 20px; }\n  .lang-item .card-body .form-group {\n      margin-bottom: 30px; }\n  .lang-item .card-body .form-group:last-child {\n        margin-bottom: 0; }\n  .badges {\n  margin-top: 4px; }\n  .badges:before, .badges:after {\n    content: \"\";\n    display: table; }\n  .badges:after {\n    clear: both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvbGFuZ3VhZ2UvQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRodWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxhcHBcXHZpZXdzXFxsYW5ndWFnZVxcbGFuZ3VhZ2VcXGxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5ndWFnZS9sYW5ndWFnZS9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdGh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXHNjc3NcXHN0eWxlcy12YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvbGFuZ3VhZ2UvQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRodWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxzY3NzXFxzdHlsZXMtdXRpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFVBQVUsRUFBQTtFQURaO0lBSUksa0JBQWtCO0lBQ2xCLFNDUzBCO0lEUjFCLE9BQU87SUFDUCxRQUFRO0lBQ1IseUJBQWlDO0lBQ2pDLGNBQWM7SUFLZCxrQkNvQjRCLEVBQUE7RURsQ2hDO01BV00sUUFBUztNQUNULFNBQVMsRUFBQTtFQU1mO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVLEVBQUE7RUFHWjtFQUNFLGVBQW9DO0VBQ3BDLGdCQUFxQztFQUVyQyxlQUFlO0VBQ2YsVUFBa0Q7RUFDbEQsV0FBNkI7RUFDN0IsWUFBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBb0MsRUFBQTtFQUd0QztFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBSGI7SUFPTSxjQy9Da0I7SURnRGxCLGlCQUFpQixFQUFBO0VBUnZCO0lBYUksbUJDdkI0QixFQUFBO0VEVWhDO0lBZ0JJLGlCQUFpQixFQUFBO0VBaEJyQjtJQW1CSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDZCQUE2QixFQUFBO0VBckJqQztNQXdCTSxrQkNsQzBCO01EbUMxQixjQUFjLEVBQUE7RUF6QnBCO1FBMkJRLG9CQUFvQixFQUFBO0VBM0I1QjtNQStCTSxjQ3pFa0I7TUQwRWxCLDRCQUE0QjtNQUM1QixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGdCQUFnQixFQUFBO0VBbkN0QjtNQXNDTSw0QkFBNEIsRUFBQTtFQXRDbEM7TUEwQ1EsYUFBYSxFQUFBO0VBQ2I7UUEzQ1I7VUE0Q1UsY0FBYyxFQUFBLEVBRWpCO0VBOUNQO01Ba0RRLGNBQWMsRUFBQTtFQUNkO1FBbkRSO1VBb0RVLGFBQWEsRUFBQSxFQUVoQjtFQXREUDtJQTBESSxpQkFBc0MsRUFBQTtFQTFEMUM7TUE2RE0sbUJDdkUwQixFQUFBO0VEVWhDO1FBZ0VRLGdCQUFnQixFQUFBO0VBTXhCO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lFbkJJLFdBQVc7SUFDWCxjQUFjLEVBQUE7RUZrQmxCO0lFZkksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzLXZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3R5bGVzLXV0aWxzXCI7XHJcblxyXG4udmlldy1sYW5ndWFnZSB7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnZpZXctY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICRuYXZiYXItaDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skbmF2YmFyLWh9KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogIDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIHBhZGRpbmc6ICgkZ3JpZC1ndXR0ZXItd2lkdGggLSAxMHB4KSAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sLWVkaXRvcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtbmF2YmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbC1wcmV2aWV3IHtcclxuICBmbGV4OiAwIDAgNjIwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgbWF4LXdpZHRoOiA2MjBweCArICRncmlkLWd1dHRlci13aWR0aDtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogKCRuYXZiYXItaCAqIDIpICsgKCRncmlkLWd1dHRlci13aWR0aCAtIDEwcHgpO1xyXG4gIHJpZ2h0OiAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyO1xyXG4gIGJvdHRvbTogJGdyaWQtZ3V0dGVyLXdpZHRoIC0gMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBtYXJnaW4tcmlnaHQ6ICRncmlkLWd1dHRlci13aWR0aCAvIDI7XHJcbn1cclxuXHJcbi5sYW5nLWl0ZW0ge1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNjgwcHgpO1xyXG4gIG1hcmdpbi1yaWdodDogNjgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYuZmluZGVkIHtcclxuICAgIC5jYXJkLWhlYWRlciAudGV4dCB7XHJcbiAgICAgIGNvbG9yOiAkcGluay0xO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5jb2xsYXBzZS1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4ICRncmlkLWd1dHRlci13aWR0aDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgID4gKiB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgY29sb3I6ICRibHVlLTE7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlcyB7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ucy1oZWFkZXIge1xyXG4gICAgICAub3Zlci0xNDAwIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAub3Zlci0xNDAwIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiAkZ3JpZC1ndXR0ZXItd2lkdGggLSAxMHB4O1xyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2VzIHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJGJnLWxpZ2h0OiAgICAgICAjZjdmN2ZhO1xyXG4kbGlnaHQtYm9yZGVyOiAgICNmN2VmZjY7IC8vIGJvcmRlciBvdmVyIHdoaXRlXHJcbiRibGFjay0xOiAgICAgICAgIzIyMWIyNjtcclxuXHJcbiRibHVlLTE6ICAgICAgICAgIzVjNjQ5YztcclxuJGJsdWUtMjogICAgICAgICAjOWNhMWI5O1xyXG4kcGluay0xOiAgICAgICAgICNjYzAwY2M7XHJcblxyXG4kc2hhZG93LTE6ICAgICAgICNlOWRkZjc7IC8vIHNoYWRvdyBib3ggY29sb3JcclxuXHJcbiRkaXNhYmxlZC1iZzogICAgIzg4ODtcclxuJGRpc2FibGVkLXRleHQ6ICAjNjY2O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRzaWRlYmFyLXc6ICAgICAgICAgICAgICAgMjUwcHg7XHJcbiRzaWRlYmFyLWl0ZW0taDogICAgICAgICAgNjBweDtcclxuJG5hdmJhci1oOiAgICAgICAgICAgICAgICA2MHB4O1xyXG4kc2lkZWJhci1iYWRnZS1zaXplOiAgICAgIDIzcHg7XHJcbiRzbWFsbC1icmVha3BvaW50czogICAgICAgMTM2NnB4O1xyXG5cclxuXHJcbi8vIEJUIG92ZXJyaXRlc1xyXG4kcHJpbWFyeTogICAgICAgICAgICAgICAgICAgJHBpbmstMSAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAgICAgICAjZmYwMDY2ICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgICAgICAgICAgICAgICAgI2ZmOTkwMCAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICAgICAgICAgICAgICAgICMwMDk5Y2MgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJGJnLWxpZ2h0ICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtMSAhZGVmYXVsdDtcclxuXHJcbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgIGRhcmtlbigkcGluay0xLCAxNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgIFwiTnVuaXRvXCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250LWZhbWlseS1tb25vc3BhY2U6ICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgMC44NzVyZW0gIWRlZmF1bHQ7IC8vIDE0cHhcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgIDdweCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkY2FyZC1ib3JkZXItcmFkaXVzICFkZWZhdWx0OyAvLyBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xyXG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAjY2VkNGRhICFkZWZhdWx0O1xyXG4iLCIkcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xyXG4kcmVtLWZhbGxiYWNrOiBmYWxzZSAhZGVmYXVsdDtcclxuJHJlbS1weC1vbmx5OiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbkBmdW5jdGlvbiByZW0tc2VwYXJhdG9yKCRsaXN0LCAkc2VwYXJhdG9yOiBmYWxzZSkge1xyXG4gIEBpZiAkc2VwYXJhdG9yID09IFwiY29tbWFcIiBvciAkc2VwYXJhdG9yID09IFwic3BhY2VcIiB7XHJcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XHJcbiAgfVxyXG5cclxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XHJcbiAgICBAcmV0dXJuIGxpc3Qtc2VwYXJhdG9yKCRsaXN0KTtcclxuICB9XHJcblxyXG4gIC8vIGxpc3Qtc2VwYXJhdG9yIHBvbHlmaWxsIGJ5IEh1Z28gR2lyYXVkZWwgKGh0dHBzOi8vc2Fzcy1jb21wYXRpYmlsaXR5LmdpdGh1Yi5pby8jbGlzdF9zZXBhcmF0b3JfZnVuY3Rpb24pXHJcbiAgJHRlc3QtbGlzdDogKCk7XHJcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xyXG4gICAgJHRlc3QtbGlzdDogYXBwZW5kKCR0ZXN0LWxpc3QsICRpdGVtLCBzcGFjZSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGlmKCR0ZXN0LWxpc3QgPT0gJGxpc3QsIHNwYWNlLCBjb21tYSk7XHJcbn1cclxuXHJcbkBtaXhpbiByZW0tYmFzZWxpbmUoJHpvb206IDEwMCUpIHtcclxuICBmb250LXNpemU6ICR6b29tIC8gMTZweCAqICRyZW0tYmFzZWxpbmU7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiByZW0tY29udmVydCgkdG8sICR2YWx1ZXMuLi4pIHtcclxuICAkcmVzdWx0OiAoKTtcclxuICAkc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZXMpO1xyXG5cclxuICBAZWFjaCAkdmFsdWUgaW4gJHZhbHVlcyB7XHJcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcclxuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvIDFyZW0gKiAkcmVtLWJhc2VsaW5lLCAkc2VwYXJhdG9yKTtcclxuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInB4XCIgYW5kICR0byA9PSBcInJlbVwiIHtcclxuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcclxuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibGlzdFwiIHtcclxuICAgICAgJHZhbHVlLXNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWUpO1xyXG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcclxuICAgICAgJHZhbHVlOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSwgJHZhbHVlLXNlcGFyYXRvcik7XHJcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUsICRzZXBhcmF0b3IpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUsICRzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQHJldHVybiBpZihsZW5ndGgoJHJlc3VsdCkgPT0gMSwgbnRoKCRyZXN1bHQsIDEpLCAkcmVzdWx0KTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHJlbSgkdmFsdWVzLi4uKSB7XHJcbiAgQGlmICRyZW0tcHgtb25seSB7XHJcbiAgICBAcmV0dXJuIHJlbS1jb252ZXJ0KHB4LCAkdmFsdWVzLi4uKTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZW0oJHByb3BlcnRpZXMsICR2YWx1ZXMuLi4pIHtcclxuICBAaWYgdHlwZS1vZigkcHJvcGVydGllcykgPT0gXCJtYXBcIiB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcclxuICAgICAgQGluY2x1ZGUgcmVtKCRwcm9wZXJ0eSwgbWFwLWdldCgkcHJvcGVydGllcywgJHByb3BlcnR5KSk7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICBAaWYgJHJlbS1mYWxsYmFjayBvciAkcmVtLXB4LW9ubHkge1xyXG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xyXG4gICAgICB9XHJcbiAgICAgIEBpZiBub3QgJHJlbS1weC1vbmx5IHtcclxuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcmVncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXHJcbiAgYm9keSB7XHJcbiAgICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XHJcbiAgICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNsZWFyZml4KCkge1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tY29udHJvbC1mb2N1cygkaW5wdXQtZm9jdXMtY29sb3IsICRpbnB1dC1mb2N1cy1iZywgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciwgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cpIHtcclxuICAmOmZvY3VzLCAmLmFjZV9mb2N1cyB7XHJcbiAgICAvLyBjb2xvcjogJGlucHV0LWZvY3VzLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWZvY3VzLWJnO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/language/language/language.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/language/language/language.component.ts ***!
  \***************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var src_app_lib_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/services/search.service */ "./src/app/lib/services/search.service.ts");





var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(route, router, appData, search) {
        this.route = route;
        this.router = router;
        this.appData = appData;
        this.search = search;
        this.objectKeys = Object.keys;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    LanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search.currentSearch.subscribe(function (searchValue) { return _this.searchValue = searchValue; });
        this.langKey = this.route.snapshot.params['langKey'];
        this.langData = this.appData.getLanguage(this.langKey);
        this.previewEmail = this.langData.emails.templates[1];
        // Sorry for this, the next project will build with https://ng-bootstrap.github.io/
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    };
    LanguageComponent.prototype.refreshPreview = function (event, emailTemplateId, freeClick) {
        if (freeClick === void 0) { freeClick = false; }
        if (event.target.classList.contains('collapsed') || freeClick) {
            this.appData.previewData.id = emailTemplateId;
            this.appData.previewData.name = this.appData.getEmailData(this.langKey, emailTemplateId).name;
            this.appData.setPreviewIframeContent(this.langKey);
        }
    };
    LanguageComponent.prototype.evalModifyHeader = function (event, emailId) {
        event.preventDefault();
        if (this.langData.emails.templates[emailId].tags.customHeader) {
            // remove header
            var confirmBool = confirm('Are you sure?');
            if (confirmBool) {
                this.appData.delCustomHeader(this.langKey, emailId);
            }
        }
        else {
            // add header
            this.appData.setCustomHeader(this.langKey, emailId);
        }
    };
    LanguageComponent.prototype.evalModifyFooter = function (event, emailId) {
        event.preventDefault();
        if (this.langData.emails.templates[emailId].tags.customFooter) {
            // remove footer
            var confirmBool = confirm('Are you sure?');
            if (confirmBool) {
                this.appData.delCustomFooter(this.langKey, emailId);
            }
        }
        else {
            // add footer
            this.appData.setCustomFooter(this.langKey, emailId);
        }
    };
    LanguageComponent.prototype.findedLangItem = function (item, type, scrollEl) {
        var finded = false;
        if (this.searchValue.length > 2) {
            if (typeof item === 'string') {
                if (item.toLowerCase().trim().includes(this.searchValue)) {
                    finded = true;
                }
            }
            else {
                if (item.name.toLowerCase().trim().includes(this.searchValue)) {
                    finded = true;
                }
                if (item.subject.toLowerCase().trim().includes(this.searchValue)) {
                    finded = true;
                }
            }
            if (finded) {
                scrollEl.scrollTop = 0;
            }
        }
        if (type === 'class') {
            return finded ? 'finded' : '';
        }
        else if (type === 'order') {
            return finded ? 1 : 10;
        }
    };
    LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/views/language/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.scss */ "./src/app/views/language/language/language.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_data_app_data__WEBPACK_IMPORTED_MODULE_3__["AppData"],
            src_app_lib_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/views/language/modal-preview-settings/modal-preview-settings.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/language/modal-preview-settings/modal-preview-settings.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modal-preview-settings\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-md\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Preview Settings</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">\r\n            <svg class=\"icon\"><use xlink:href=\"#close\"></use></svg>\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"form-group-title\">Logo image</div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"wrap-img\">\r\n                <img [src]=\"logoSrc\" class=\"img-fluid\" width=\"200\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <label for=\"logoInputFile\">Local file image</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"custom-file\">\r\n                  <input type=\"file\" class=\"custom-file-input\" id=\"logoInputFile\" aria-describedby=\"logoInputFileSubmit\" (change)=\"onSelectLogoFile($event)\">\r\n                  <label class=\"custom-file-label\" for=\"logoInputFile\" [innerHTML]=\"logoName.length ? logoName : 'Choose file'\"></label>\r\n                </div>\r\n              </div>\r\n              <small class=\"form-text text-danger\" [hidden]=\"!logoErrorMsg.length\" [innerHTML]=\"logoErrorMsg.length ? logoErrorMsg : ''\"></small>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"form-group-title\">Social banner</div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <div class=\"wrap-img\">\r\n                  <img [src]=\"socialSrc\" class=\"img-fluid\" width=\"200\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-8\">\r\n                <label for=\"socialInputFile\">Local file image</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"custom-file\">\r\n                    <input type=\"file\" class=\"custom-file-input\" id=\"socialInputFile\" aria-describedby=\"socialInputFileSubmit\" (change)=\"onSelectSocialFile($event)\">\r\n                    <label class=\"custom-file-label\" for=\"socialInputFile\" [innerHTML]=\"socialName.length ? socialName : 'Choose file'\"></label>\r\n                  </div>\r\n                </div>\r\n                <small class=\"form-text text-danger\" [hidden]=\"!socialErrorMsg.length\" [innerHTML]=\"socialErrorMsg.length ? socialErrorMsg : ''\"></small>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveAll()\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/language/modal-preview-settings/modal-preview-settings.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/language/modal-preview-settings/modal-preview-settings.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group-title {\n  padding-bottom: 20px; }\n\n.wrap-img {\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  position: relative; }\n\n.wrap-img:after {\n    content: \"\";\n    display: block;\n    padding-bottom: 100%; }\n\n.wrap-img img {\n    position: absolute;\n    -o-object-fit: contain;\n       object-fit: contain;\n    top: 10px;\n    left: 10px;\n    right: 10px;\n    bottom: 10px;\n    margin: auto;\n    max-width: calc(100% - 20px);\n    max-height: calc(100% - 20px); }\n\n.custom-file-label {\n  white-space: nowrap;\n  overflow: hidden; }\n\n.modal-footer {\n  justify-content: space-between; }\n\n.modal-footer .btn {\n    width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvbW9kYWwtcHJldmlldy1zZXR0aW5ncy9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdGh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXGFwcFxcdmlld3NcXGxhbmd1YWdlXFxtb2RhbC1wcmV2aWV3LXNldHRpbmdzXFxtb2RhbC1wcmV2aWV3LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUd0QixrQkFBa0IsRUFBQTs7QUFMcEI7SUFPSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQixFQUFBOztBQVR4QjtJQWFJLGtCQUFrQjtJQUNsQixzQkFBbUI7T0FBbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QixFQUFBOztBQUlqQztFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw4QkFBOEIsRUFBQTs7QUFEaEM7SUFJSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5ndWFnZS9tb2RhbC1wcmV2aWV3LXNldHRpbmdzL21vZGFsLXByZXZpZXctc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMtdXRpbHMnO1xyXG5AaW1wb3J0ICdzdHlsZXMtdmFyaWFibGVzJztcclxuXHJcbi5mb3JtLWdyb3VwLXRpdGxlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLndyYXAtaW1nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtbGFiZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/language/modal-preview-settings/modal-preview-settings.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/language/modal-preview-settings/modal-preview-settings.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ModalPreviewSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPreviewSettingsComponent", function() { return ModalPreviewSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ModalPreviewSettingsComponent = /** @class */ (function () {
    function ModalPreviewSettingsComponent(appData, sanitizer, route) {
        this.appData = appData;
        this.sanitizer = sanitizer;
        this.route = route;
        this.logoName = '';
        this.logoErrorMsg = '';
        this.socialName = '';
        this.socialErrorMsg = '';
    }
    ModalPreviewSettingsComponent.prototype.ngOnInit = function () {
        this.langKey = this.route.snapshot.params['langKey'];
        this.logoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.appData.previewData.options.logo);
        this.logoSrcBase64 = this.appData.previewData.options.logo;
        this.socialSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.appData.previewData.options.social);
        this.socialSrcBase64 = this.appData.previewData.options.social;
    };
    ModalPreviewSettingsComponent.prototype.saveAll = function () {
        this.appData.previewData.options.logo = this.logoSrcBase64;
        this.appData.previewData.options.social = this.socialSrcBase64;
        this.appData.setPreviewIframeContent(this.langKey);
    };
    ModalPreviewSettingsComponent.prototype.onSelectLogoFile = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = void 0;
            reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            var mb_1 = event.target.files[0].size / 1024 / 1024;
            var isImage_1 = event.target.files[0].type.match('(image/jpeg|image/png)');
            var self_1 = this;
            reader.onload = function (imgsrc) {
                if (isImage_1) {
                    if (mb_1 <= 1) {
                        self_1.logoSrc = self_1.sanitizer.bypassSecurityTrustResourceUrl(imgsrc.target.result);
                        self_1.logoSrcBase64 = imgsrc.target.result;
                        self_1.logoName = event.target.files[0].name;
                        self_1.logoErrorMsg = '';
                    }
                    else {
                        self_1.logoErrorMsg = 'Max file size 1MB!';
                    }
                }
                else {
                    self_1.logoErrorMsg = 'Only jpg / jpeg or png files!';
                }
            };
        }
    };
    ModalPreviewSettingsComponent.prototype.onSelectSocialFile = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = void 0;
            reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            var mb_2 = event.target.files[0].size / 1024 / 1024;
            var isImage_2 = event.target.files[0].type.match('(image/jpeg|image/png)');
            var self_2 = this;
            reader.onload = function (imgsrc) {
                if (isImage_2) {
                    if (mb_2 <= 1) {
                        self_2.socialSrc = self_2.sanitizer.bypassSecurityTrustResourceUrl(imgsrc.target.result);
                        self_2.socialSrcBase64 = imgsrc.target.result;
                        self_2.socialName = event.target.files[0].name;
                        self_2.socialErrorMsg = '';
                    }
                    else {
                        self_2.socialErrorMsg = 'Max file size 1MB!';
                    }
                }
                else {
                    self_2.socialErrorMsg = 'Only jpg / jpeg or png files!';
                }
            };
        }
    };
    ModalPreviewSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-modal-preview-settings',
            template: __webpack_require__(/*! ./modal-preview-settings.component.html */ "./src/app/views/language/modal-preview-settings/modal-preview-settings.component.html"),
            styles: [__webpack_require__(/*! ./modal-preview-settings.component.scss */ "./src/app/views/language/modal-preview-settings/modal-preview-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ModalPreviewSettingsComponent);
    return ModalPreviewSettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/language/modal-tags/modal-tags.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/language/modal-tags/modal-tags.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modal-tags-legend\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Tags Legend</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">\r\n            <svg class=\"icon\"><use xlink:href=\"#close\"></use></svg>\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"media\">\r\n            <div class=\"media-object\">\r\n              <span class=\"badge badge-id\">Id 00</span>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h5 class=\"mt-0 mb-1\">Tag id</h5>\r\n              Email template internal id.\r\n            </div>\r\n          </li>\r\n          <li class=\"media my-4\">\r\n            <div class=\"media-object\">\r\n              <span class=\"badge badge-empty\">empty</span>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h5 class=\"mt-0 mb-1\">Empty html</h5>\r\n              Indicates if an html is empty string after a trim.\r\n            </div>\r\n          </li>\r\n          <li class=\"media my-4\">\r\n            <div class=\"media-object\">\r\n              <span class=\"badge badge-noSubject\">noSubject</span>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h5 class=\"mt-0 mb-1\">No subject</h5>\r\n              Show if email subject is empty after trim.\r\n            </div>\r\n          </li>\r\n          <li class=\"media\">\r\n            <div class=\"media-object\">\r\n              <span class=\"badge badge-customHeader\">customHeader</span>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h5 class=\"mt-0 mb-1\">Custom Header/Footer</h5>\r\n              Indicates a possible self email custom header or footer.\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/language/modal-tags/modal-tags.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/language/modal-tags/modal-tags.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-object {\n  width: 100px; }\n\n.badge {\n  width: calc(100% - 10px);\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvbW9kYWwtdGFncy9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdGh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXGFwcFxcdmlld3NcXGxhbmd1YWdlXFxtb2RhbC10YWdzXFxtb2RhbC10YWdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvbW9kYWwtdGFncy9tb2RhbC10YWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGlhLW9iamVjdCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/language/modal-tags/modal-tags.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/language/modal-tags/modal-tags.component.ts ***!
  \*******************************************************************/
/*! exports provided: ModalTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTagsComponent", function() { return ModalTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalTagsComponent = /** @class */ (function () {
    function ModalTagsComponent() {
    }
    ModalTagsComponent.prototype.ngOnInit = function () {
    };
    ModalTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-modal-tags',
            template: __webpack_require__(/*! ./modal-tags.component.html */ "./src/app/views/language/modal-tags/modal-tags.component.html"),
            styles: [__webpack_require__(/*! ./modal-tags.component.scss */ "./src/app/views/language/modal-tags/modal-tags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalTagsComponent);
    return ModalTagsComponent;
}());



/***/ }),

/***/ "./src/app/views/language/preview/preview.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/language/preview/preview.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"text\">Preview</div>\r\n    <div class=\"subtitle\"><span class=\"light\">Email:</span> {{ appData.previewData.name }}</div>\r\n\r\n    <div class=\"buttons-header\">\r\n      <button\r\n        class=\"btn btn-light btn-collapse\"\r\n        type=\"button\"\r\n        (click)=\"toggleCollapsePreview()\"\r\n      >\r\n        <svg class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Collapse preview\"><use xlink:href=\"#menu\"></use></svg>\r\n      </button>\r\n\r\n      <button\r\n        class=\"btn btn-light\"\r\n        type=\"button\"\r\n        data-toggle=\"modal\"\r\n        data-target=\"#modal-preview-settings\"\r\n      >\r\n        <svg class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Preview options\"><use xlink:href=\"#settings\"></use></svg>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\" id=\"card-iframe-container\">\r\n    <iframe [src]=\"getSrc()\" frameborder=\"0\" id=\"card-iframe-preview\"></iframe>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/language/preview/preview.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/language/preview/preview.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subtitle {\n  font-size: 14px;\n  margin-top: 6px; }\n  .subtitle .light {\n    color: #9ca1b9; }\n  .card-header {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .card-body {\n  position: relative; }\n  iframe {\n  position: absolute;\n  width: calc(100% - 2px);\n  height: calc(100% - 1px);\n  top: 0;\n  right: 1px;\n  left: 1px;\n  bottom: 1px;\n  border-radius: 0 0 5px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZ3VhZ2UvcHJldmlldy9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdGh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXGFwcFxcdmlld3NcXGxhbmd1YWdlXFxwcmV2aWV3XFxwcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5ndWFnZS9wcmV2aWV3L0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0aHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcc2Nzc1xcc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTtFQUZqQjtJQUtJLGNDRm9CLEVBQUE7RURLeEI7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7RUFFdEI7RUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtFQUNFLGtCQUFrQjtFQU9sQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLE1BQU07RUFDTixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmd1YWdlL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMtdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMtdXRpbHNcIjtcclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbiAgLmxpZ2h0IHtcclxuICAgIGNvbG9yOiAkYmx1ZS0yO1xyXG4gIH1cclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5pZnJhbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB3aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC1ndXR0ZXItd2lkdGggKyAkZ3JpZC1ndXR0ZXItd2lkdGh9KTtcclxuICAvLyBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGdyaWQtZ3V0dGVyLXdpZHRoICsgKCRncmlkLWd1dHRlci13aWR0aCAtIDIwcHgpfSk7XHJcbiAgLy8gdG9wOiAkZ3JpZC1ndXR0ZXItd2lkdGggLSAxMHB4O1xyXG4gIC8vIHJpZ2h0OiAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgLy8gbGVmdDogJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG4gIC8vIGJvdHRvbTogJGdyaWQtZ3V0dGVyLXdpZHRoIC0gMTBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDFweCk7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgbGVmdDogMXB4O1xyXG4gIGJvdHRvbTogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kYmctbGlnaHQ6ICAgICAgICNmN2Y3ZmE7XHJcbiRsaWdodC1ib3JkZXI6ICAgI2Y3ZWZmNjsgLy8gYm9yZGVyIG92ZXIgd2hpdGVcclxuJGJsYWNrLTE6ICAgICAgICAjMjIxYjI2O1xyXG5cclxuJGJsdWUtMTogICAgICAgICAjNWM2NDljO1xyXG4kYmx1ZS0yOiAgICAgICAgICM5Y2ExYjk7XHJcbiRwaW5rLTE6ICAgICAgICAgI2NjMDBjYztcclxuXHJcbiRzaGFkb3ctMTogICAgICAgI2U5ZGRmNzsgLy8gc2hhZG93IGJveCBjb2xvclxyXG5cclxuJGRpc2FibGVkLWJnOiAgICAjODg4O1xyXG4kZGlzYWJsZWQtdGV4dDogICM2NjY7XHJcblxyXG4vLyBMYXlvdXRcclxuJHNpZGViYXItdzogICAgICAgICAgICAgICAyNTBweDtcclxuJHNpZGViYXItaXRlbS1oOiAgICAgICAgICA2MHB4O1xyXG4kbmF2YmFyLWg6ICAgICAgICAgICAgICAgIDYwcHg7XHJcbiRzaWRlYmFyLWJhZGdlLXNpemU6ICAgICAgMjNweDtcclxuJHNtYWxsLWJyZWFrcG9pbnRzOiAgICAgICAxMzY2cHg7XHJcblxyXG5cclxuLy8gQlQgb3ZlcnJpdGVzXHJcbiRwcmltYXJ5OiAgICAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICAgICAgICAgICAgICAgICNmZjAwNjYgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICAgICAjZmY5OTAwICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgICAgICAgICAgICAgIzAwOTljYyAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkYmctbGlnaHQgIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYmx1ZS0xICFkZWZhdWx0O1xyXG5cclxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRwaW5rLTEgIWRlZmF1bHQ7XHJcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgZGFya2VuKCRwaW5rLTEsIDE1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgXCJOdW5pdG9cIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDsgLy8gMTRweFxyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgN3B4ICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRjYXJkLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIGNhbGMoI3skY2FyZC1ib3JkZXItcmFkaXVzfSAtICN7JGNhcmQtYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/language/preview/preview.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/language/preview/preview.component.ts ***!
  \*************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(appData, sanitizer, renderer) {
        this.appData = appData;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var languageData = this.appData.getLanguage(this.previewEmailLangKey);
        this.langKey = this.previewEmailLangKey;
        this.emailId = this.previewEmailId;
        this.useCommonHeader = languageData.emails.templates[this.emailId].tags.customHeader;
        this.useCommonFooter = languageData.emails.templates[this.emailId].tags.customFooter;
        this.appData.previewData.id = this.emailId;
        this.appData.previewData.name = this.appData.getEmailData(this.langKey, this.emailId).name;
        this.appData.setPreviewIframeContent(this.langKey);
        // Sorry for this, the next project will build with https://ng-bootstrap.github.io/
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    };
    PreviewComponent.prototype.getSrc = function () {
        return this.appData.getPreviewIframeContent();
    };
    PreviewComponent.prototype.toggleCollapsePreview = function () {
        if (document.body.classList.contains('preview-collapsed')) {
            this.renderer.removeClass(document.body, 'preview-collapsed');
        }
        else {
            this.renderer.addClass(document.body, 'preview-collapsed');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewComponent.prototype, "previewEmailId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewComponent.prototype, "previewEmailLangKey", void 0);
    PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/views/language/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.scss */ "./src/app/views/language/preview/preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/views/language/subject/subject.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/language/subject/subject.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"subject\">Subject</label>\r\n\r\n<input\r\n  #subject\r\n  type=\"text\"\r\n  class=\"form-control\"\r\n  [value]=\"value\"\r\n  (input)=\"changeSubject(langKey, contentKey, subject.value);\"\r\n  autocomplete=\"off\"\r\n  autocorrect=\"off\"\r\n  autocapitalize=\"off\"\r\n  spellcheck=\"false\"\r\n>\r\n"

/***/ }),

/***/ "./src/app/views/language/subject/subject.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/language/subject/subject.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmd1YWdlL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/language/subject/subject.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/language/subject/subject.component.ts ***!
  \*************************************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");



var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(appData) {
        this.appData = appData;
    }
    SubjectComponent.prototype.ngOnInit = function () {
    };
    SubjectComponent.prototype.changeSubject = function (langKey, contentKey, value) {
        this.appData.setStringVal(langKey, contentKey, value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SubjectComponent.prototype, "contentKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SubjectComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SubjectComponent.prototype, "langKey", void 0);
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/views/language/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.scss */ "./src/app/views/language/subject/subject.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-language-language-module.js.map