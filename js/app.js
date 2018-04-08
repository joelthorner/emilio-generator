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
						<div class="block-mail" data-valid="${_validBlockData.valid}" data-order-alph="">
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
		// this.sendContent();
		this.fakeLogin();
	},

	initsBT : function() {
		$('[data-toggle="tooltip"]').tooltip();
	},

	fakeLogin : function() {
		var _0xd5b8=["\x45\x6D\x47\x65\x6E\x5F\x6C\x6F\x67\x67\x65\x64","\x67\x65\x74\x49\x74\x65\x6D","\x23\x70\x61\x73\x73\x77\x6F\x72\x64\x4D\x6F\x64\x61\x6C","\x74\x72\x75\x65","\x73\x68\x6F\x77","\x6D\x6F\x64\x61\x6C","\x76\x61\x6C","\x23\x69\x6E\x70\x75\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x57\x65\x6C\x74\x65\x63\x32\x30\x30\x34","\x68\x69\x64\x65","\x73\x65\x74\x49\x74\x65\x6D","\x69\x73\x2D\x69\x6E\x76\x61\x6C\x69\x64","\x61\x64\x64\x43\x6C\x61\x73\x73","\x2E\x66\x6F\x72\x6D\x2D\x6C\x61\x62\x65\x6C\x2D\x67\x72\x6F\x75\x70\x20\x2A","\x66\x69\x6E\x64","\x63\x6C\x69\x63\x6B","\x23\x73\x69\x67\x6E\x69\x6E"];var logged=localStorage[_0xd5b8[1]](_0xd5b8[0]),$passwordModal=$(_0xd5b8[2]);if(logged!= _0xd5b8[3]){$passwordModal[_0xd5b8[5]](_0xd5b8[4])};$(_0xd5b8[16])[_0xd5b8[15]](function(_0xdcf7x3){if($(_0xd5b8[7])[_0xd5b8[6]]()== _0xd5b8[8]){$passwordModal[_0xd5b8[5]](_0xd5b8[9]);localStorage[_0xd5b8[10]](_0xd5b8[0],true)}else {$passwordModal[_0xd5b8[14]](_0xd5b8[13])[_0xd5b8[12]](_0xd5b8[11])}})
	},

	// sendContent : function() {
	// 	var $modal = $('#sendContentModal');
		
	// 	$.each(DATA.mails, function(id, name) {
	// 		$('#selectSendContent').append(`
	// 			<option value="${name}">${name}</option>
	// 		`);
	// 	});

	// 	$.each(DATA.langs, function(id, name) {
	// 		$('#selectSendContentLang').append(`
	// 			<option value="${name}">${name}</option>
	// 		`);
	// 	});

	// 	$('#btnSendCont').click(function(event) {
	// 		// var link = "mailto:joel.torner@tlgcommerce.com"
	// 		var link = "mailto:joeltorner@gmail.com"
	// 			// + "?cc=myCCaddress@example.com"
	// 			+ "?subject=" + encodeURIComponent($('#asuntu').val())
	// 			+ "&body=" + encodeURIComponent($('#selectSendContentLang').val() + ' ') 
	// 			+ encodeURIComponent($('#selectSendContent').val() + ' \n')
	// 			+ encodeURIComponent($('#mailcontSend').val())
	// 		;
	// 		$(location).attr('href', link);
	// 	});
	// }
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
