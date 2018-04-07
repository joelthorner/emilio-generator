APP.utils = {
	tagsToReplace : {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;'
	},

	replaceTag : function(tag) {
		return APP.utils.tagsToReplace[tag] || tag;
	},

	safe_tags_replace : function(str) {
		return str.replace(/[&<>]/g, APP.utils.replaceTag);
	}
};

APP.fillData = {
	init : function () {
		this.insertTabPills();
		this.insertTabConts();
	},

	insertTabPills : function () {
		var $output = $('#output-tabs .nav'), counter = 0;

		$.each(DATA.langs, function(langId, langKey) {
			if (DATA[langKey.toLowerCase()]) {
				
				var _active = counter == 0 ? 'active' : '',
					 _selected = counter == 0 ? true : false,
					 _langId = langId,
					 _langKey = langKey.toLowerCase();

				$output.append(`
					<a class="nav-link ${_active}" id="tab-lang-${_langId}" data-toggle="pill" href="#tab-lang-c-${_langId}" role="tab" aria-controls="tab-lang-c-${_langId}" aria-selected="${_selected}" data-lang-id="${_langId}">
						${_langKey} <code class="badge badge-light">id ${_langId}</code>
					</a>
				`);
				counter++;
			}
		});
	},

	insertTabConts : function () {
		var $output = $('#output-tabs-cont .tab-content'), counter = 0;

		// Loop for arr langs
		$.each(DATA.langs, function(langId, langKey) {

			var _active = counter == 0 ? 'show active' : '';

			var HTML_mails_lang = '', 
				 HTML_header_lang = '',
				 HTML_footer_lang = '';

			var langData = DATA[langKey.toLowerCase()];

			if (langData) {
				var _langDataHeader = APP.utils.safe_tags_replace(langData.header),
					 _validBlockData = APP.fillData.getValidBlockData("HEADER", _langDataHeader);

				HTML_header_lang = `
					<button class="btn btn-light btn-block" type="button" data-toggle="collapse" data-target="#mail-cont-${langId}_H" aria-expanded="false" aria-controls="mail-cont-${langId}_H" data-id="H">
						Header
						<div class="badges">
							${_validBlockData.badge}
							<code class="badge badge-secondary">id H</code>
						</div>
					</button>
					<div class="collapse show in" id="mail-cont-${langId}_H">
						<div class="card card-body">
							<div class="editor">${_langDataHeader}</div>
						</div>
					</div>
				`;

				var _langDataFooter = APP.utils.safe_tags_replace(langData.footer),
					 _validBlockData = APP.fillData.getValidBlockData("FOOTER", _langDataFooter);

				HTML_footer_lang = `
					<button class="btn btn-light btn-block" type="button" data-toggle="collapse" data-target="#mail-cont-${langId}_F" aria-expanded="false" aria-controls="mail-cont-${langId}_F" data-id="F">
						Footer
						<div class="badges">
							${_validBlockData.badge}
							<code class="badge badge-secondary">id F</code>
						</div>
					</button>
					<div class="collapse show in" id="mail-cont-${langId}_F">
						<div class="card card-body">
							<div class="editor">${_langDataFooter}</div>
						</div>
					</div>
				`;

				// Loop per cada mail del lang
				$.each(langData.mails, function(idMail, dataMail) {
					var _contMail = APP.utils.safe_tags_replace(dataMail.html),
						 _subject = dataMail.subject,
						 _emailNameES = DATA.mails[idMail],
						 _validBlockData = APP.fillData.getValidBlockData(_subject, _contMail);

					HTML_mails_lang += `
						<div class="block-mail" data-valid="${_validBlockData.valid}">
							<button class="btn collapsed btn-light btn-block" type="button" data-toggle="collapse" data-target="#mail-cont-${langId}_${idMail}" aria-expanded="false" aria-controls="mail-cont-${langId}_${idMail}" data-id="${idMail}">
								${_emailNameES}
								<div class="badges">
									${_validBlockData.badge}
									<code class="badge badge-secondary">id ${idMail}</code>
								</div>
							</button>
							<div class="collapse" id="mail-cont-${langId}_${idMail}">
								<div class="card card-body">
									<label class="card-title-custom">Html</label>
									<div class="editor editor-cont">${_contMail}</div>
									<label class="card-title-custom">Subject</label>
									<input type="text" class="form-control form-control-sm subject" value="${_subject}" placeholder="Subject">
								</div>
							</div>
						</div>
					`;
				});

				$output.append(`
					<div class="tab-pane fade ${_active}" id="tab-lang-c-${langId}" role="tabpanel" aria-labelledby="tab-lang-${langId}">
						<div class="row">
							<div class="col-7">
								<div class="scrollable">${HTML_mails_lang}</div>
							</div>
							<div class="col-5">
								<div class="scrollable">
									<div class="block-mail block-header">${HTML_header_lang}</div>
									<div class="block-mail block-footer">${HTML_footer_lang}</div>
								</div>
							</div>
						</div>
					</div>
				`);
				counter++;
			}
		});
	},

	getValidBlockData : function(subject, contentMail) {
		var _return = {
			valid : true,
			badge : ''
		};

		if (!$.trim(subject).length){	
			_return.valid = true;
			_return.badge += '<code class="badge badge-warning">No sbj</code>';
		}

		if ($.trim(contentMail).indexOf('TEXTHERE') !== -1 || $.trim(contentMail).length == 0){	
			_return.valid = false;
			_return.badge += '<code class="badge badge-danger">Empty</code>';
		}

		return _return;
	}
};

APP.editors = {
	init : function () {
		this.ace();
	},

	ace : function () {
		
		var $editors = $('.editor');

		for (var i = 0; i < $editors.length; i++) {
			var editor = ace.edit($editors[i]);
			editor.setTheme("ace/theme/xcode");
			editor.session.setMode("ace/mode/html");
			editor.setOptions({
				showPrintMargin: false,
				useWorker:false
			});
		}
	}
};

APP.appVisual = {
	init : function() {
		this.initsBT();
		this.fakeLogin();
	},

	initsBT : function() {
		$('[data-toggle="tooltip"]').tooltip();
	},

	fakeLogin : function() {
		$('#passwordModal').modal('show');
		
	}
};

APP.main = {
	init : function () {
		APP.fillData.init();
		APP.editors.init();
		APP.appVisual.init();

		APP.scriptGenerator.init();
	}
};

$(document).ready(APP.main.init);
