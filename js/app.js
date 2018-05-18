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
		this.insertSelectLangsFO();
		this.disableTabPills();
	},

	insertSelectLangsFO : function() {
		$.each(DATA.langs, function(idLang, initLang) {
			initLang = initLang.toLowerCase();
			$('#selectLangsFO').append(`
				<option value="${idLang}">${initLang}</option>
			`);
		});
	},

	insertTabPills : function () {
		var $output = $('#output-tabs .nav'), counter = 0;

		$.each(DATA.langs, function(langId, langKey) {
			if (DATA[langKey.toLowerCase()]) {
				
				var _active = counter == 0 ? 'active' : '',
					 _selected = counter == 0 ? true : false,
					 _langId = langId,
					 _langIdBadge = _langId;
					 _langKey = langKey;

				if (_langIdBadge < 10) _langIdBadge = '0' + _langIdBadge;

				$output.append(`
					<a class="nav-link ${_active}" id="tab-lang-${_langId}" data-toggle="pill" href="#tab-lang-c-${_langId}" role="tab" aria-controls="tab-lang-c-${_langId}" aria-selected="${_selected}" data-lang-id="${_langId}" data-lang-key="${_langKey}">
						${_langKey} <span class="badge badge-pill badge-light">id ${_langIdBadge}</span>
						<div class="download download-all" title="Download ALL" data-toggle="tooltip">
							<i class="material-icons">save</i>
						</div>
					</a>
				`);
				counter++;
			}
		});
	},

	disableTabPills : function() {
		// disable the langs without content
		$('#data-tabs-cont .nav-link').each(function(index, el) {
			var $tab = $(this);
			var id = $tab.attr('href');
			var $cont = $(id);
			var invalids = 0;
			$cont.find('.block-mail').each(function(index, el) {
				if ($(this).data('valid') == false) invalids++;
			});
			if ($cont.find('.block-mail').length-2 == invalids) {
				$tab.addClass('c_disabled');
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
				var _langDataHeader = APP.utils.safe_tags_replace(langData.header).replace('\n', ''),
					 _validBlockData = APP.fillData.getValidBlockData("HEADER", _langDataHeader);

				HTML_header_lang = `
					<button class="btn btn-light btn-block collapsed" type="button" data-toggle="collapse" data-target="#mail-cont-${langId}_H" aria-expanded="false" aria-controls="mail-cont-${langId}_H">
						Header
						<div class="badges">
							${_validBlockData.badge}
							<span class="badge badge-pill badge-secondary">id H</span>
						</div>
					</button>
					<div class="collapse" id="mail-cont-${langId}_H">
						<div class="card card-body">
							<div class="editor" id="editor-${langId}_H" data-id="H">${_langDataHeader}</div>
						</div>
					</div>
				`;

				var _langDataFooter = APP.utils.safe_tags_replace(langData.footer).replace('\n', ''),
					 _validBlockData = APP.fillData.getValidBlockData("FOOTER", _langDataFooter);

				HTML_footer_lang = `
					<button class="btn btn-light btn-block collapsed" type="button" data-toggle="collapse" data-target="#mail-cont-${langId}_F" aria-expanded="false" aria-controls="mail-cont-${langId}_F">
						Footer
						<div class="badges">
							${_validBlockData.badge}
							<span class="badge badge-pill badge-secondary">id F</span>
						</div>
					</button>
					<div class="collapse" id="mail-cont-${langId}_F">
						<div class="card card-body">
							<div class="editor" id="editor-${langId}_F" data-id="F">${_langDataFooter}</div>
						</div>
					</div>
				`;

				// Loop per cada mail del lang
				$.each(langData.mails, function(idMail, dataMail) {
					var _contMail = APP.utils.safe_tags_replace(dataMail.html).replace('\n', ''),
						 _subject = dataMail.subject,
						 _emailNameES = DATA.mails[idMail],
						 _validBlockData = APP.fillData.getValidBlockData(_subject, _contMail);

					HTML_mails_lang += `
						<div class="block-mail" data-valid="${_validBlockData.valid}" data-order-alph="">
							<button class="btn collapsed btn-light btn-block" type="button" data-toggle="collapse" data-target="#mail-cont-${langId}_${idMail}" aria-expanded="false" aria-controls="mail-cont-${langId}_${idMail}">
								${_emailNameES}
								<div class="badges">
									${_validBlockData.badge}
									<span class="badge badge-pill badge-secondary">id ${idMail}</span>
								</div>
								<div class="download" title="Download .html" data-toggle="tooltip">
									<i class="material-icons">save</i>
								</div>
								<div class="preview" title="Basic preview" data-toggle="tooltip">
									<i class="material-icons">visibility</i>
								</div>
							</button>
							<div class="collapse" id="mail-cont-${langId}_${idMail}">
								<div class="card card-body">
									<label class="card-title-custom">Html</label>
									<div class="editor editor-cont" data-id="${idMail}" id="editor-${langId}_${idMail}">${_contMail}</div>
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
							<div class="col-12">
								<div class="scrollable mails">
									<div class="block-mail block-header">${HTML_header_lang}</div>
									<div class="block-mail block-footer">${HTML_footer_lang}</div>
									<hr class="mail-conts-sep">
									${HTML_mails_lang}
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
			_return.badge += '<span class="badge badge-pill badge-warning bd-sbj">No sbj</span>';
		}

		if ($.trim(contentMail).indexOf('TEXTHERE') !== -1 || $.trim(contentMail).length == 0){	
			_return.valid = false;
			_return.badge += '<span class="badge badge-pill badge-danger bd-emp">Empty</span>';
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

			editor.on("change", function(event, editor) {
				var $self = $(editor.container);
				var $blockMail = $self.parents('.block-mail');
				var subject = $blockMail.find('.subject').val();
				var contentMail = editor.getValue();

				// bug fix on edit headr and footer
				if ($blockMail.is('.block-header') || $blockMail.is('.block-footer')) {
					subject = "NON_EMPT_STRING";
				}

				var validBlockData = APP.fillData.getValidBlockData(subject, contentMail);

				$blockMail.data('valid', validBlockData.valid)
				$blockMail.find('.badges').find('.badge').not('.badge-secondary').remove();
				$blockMail.find('.badges')
					.prepend(validBlockData.badge);
			});
		}
	}
};

APP.frontEnd = {
	init : function() {
		this.initsBT();
		this.fakeLogin();
		this.badgesSession();
		this.preview();
		this.generateMailsFile();
	},

	generateMailsFile : function() {
		$('.download').not('.download-all').click(function(event) {
			event.preventDefault();
			event.stopPropagation();


			var $editor = $(this).parents('.block-mail').find('.editor');

			var editor = ace.edit($editor[0]);
			var code = editor.getValue();
			var name = DATA.mails[$editor.data('id')];
			var actualLangId = $('#output-tabs .nav-link.active').data('lang-id');
			var actualLangKey = $('#output-tabs .nav-link.active').data('lang-key');
			var header = ace.edit( $('#editor-'+actualLangId+'_H')[0] ).getValue();
			var footer = ace.edit( $('#editor-'+actualLangId+'_F')[0] ).getValue();


			var a = window.document.createElement('a');
			a.href = window.URL.createObjectURL(new Blob([header, code, footer], {type: 'text/html'}));
			a.download = name + '_' + actualLangKey + '.html';

			// Append anchor to body.
			document.body.appendChild(a);
			a.click();

			// Remove anchor from body
			document.body.removeChild(a);
		});

		$('.download-all').click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			
			var actualLangId = $('#output-tabs .nav-link.active').data('lang-id');

			$('#output-tabs-cont #tab-lang-c-'+actualLangId+' .block-mail').not('.block-header, .block-footer').each(function(index, el) {
				var $editor = $(this).find('.editor');

				var editor = ace.edit($editor[0]);
				var code = editor.getValue();
				var name = DATA.mails[$editor.data('id')];
				var actualLangKey = $('#output-tabs .nav-link.active').data('lang-key');
				var header = ace.edit( $('#editor-'+actualLangId+'_H')[0] ).getValue();
				var footer = ace.edit( $('#editor-'+actualLangId+'_F')[0] ).getValue();


				var a = window.document.createElement('a');
				a.href = window.URL.createObjectURL(new Blob([header, code, footer], {type: 'text/html'}));
				a.download = name + '_' + actualLangKey + '.html';

				// Append anchor to body.
				document.body.appendChild(a);
				a.click();

				// Remove anchor from body
				document.body.removeChild(a);
			});
		});
	},

	preview : function () {
		$('.preview').click(function(event) {
			event.preventDefault();
			event.stopPropagation();

			var $editor = $(this).parents('.block-mail').find('.editor');

			var editor = ace.edit($editor[0]);
			var code = editor.getValue();
			var name = DATA.mails[$editor.data('id')];
			var actualLangId = $('#output-tabs .nav-link.active').data('lang-id');
			var header = ace.edit( $('#editor-'+actualLangId+'_H')[0] ).getValue();
			var footer = ace.edit( $('#editor-'+actualLangId+'_F')[0] ).getValue();

			var data = APP.frontEnd.getPreviewData(header, code, footer);
			var resetCss = '<style>body{margin: 0;}</style>'

			var win = window.open("", "Emilio generator preview - " + name, "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=650,height=850,top=0,left=0");
			win.document.body.innerHTML = resetCss + data.header + data.code + data.footer;
		});
	},

	getPreviewData : function(header, code, footer) {

		// logo
		var emailLogo = $('#data-emailLogo').val().length ? $('#data-emailLogo').val() : 'http://via.placeholder.com/210x100/';
		header = header.replace(new RegExp('[%]{1,2}imagesURL[%]{1,2}logoEmail.(jpg|png|gif|jpeg)', 'g'), emailLogo);
		
		// clear intra tables ifs and simple loops
		var regexp = '[%]{1,2}\/?(if[A-Za-z0-9]{1,}|loop)[%]{1,2}';
		header = header.replace(new RegExp(regexp, 'g'), '');
		code = code.replace(new RegExp(regexp, 'g'), '');
		footer = footer.replace(new RegExp(regexp, 'g'), '');

		// clear intra pages and banners
		var regexp = '[%]{1,2}\/?((Pages|pages)|(Banners|banners))-[0-9]{1,}-(Loop|loop)[%]{1,2}';
		header = header.replace(new RegExp(regexp, 'g'), '');
		code = code.replace(new RegExp(regexp, 'g'), '');
		footer = footer.replace(new RegExp(regexp, 'g'), '');

		// footer default banners
		var emailSocial = $('#data-emailSocial').val().length ? $('#data-emailSocial').val() : 'http://via.placeholder.com/30x30/';
		footer = footer.replace(new RegExp('%%BannerImage%%', 'g'), emailSocial);

		var data = {
			header : header,
			code : code,
			footer : footer
		};

		return data;
	},

	initsBT : function() {
		$('[data-toggle="tooltip"]').tooltip();
	},

	fakeLogin : function() {
		var _0xd5b8=["\x45\x6D\x47\x65\x6E\x5F\x6C\x6F\x67\x67\x65\x64","\x67\x65\x74\x49\x74\x65\x6D","\x23\x70\x61\x73\x73\x77\x6F\x72\x64\x4D\x6F\x64\x61\x6C","\x74\x72\x75\x65","\x73\x68\x6F\x77","\x6D\x6F\x64\x61\x6C","\x76\x61\x6C","\x23\x69\x6E\x70\x75\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x57\x65\x6C\x74\x65\x63\x32\x30\x30\x34","\x68\x69\x64\x65","\x73\x65\x74\x49\x74\x65\x6D","\x69\x73\x2D\x69\x6E\x76\x61\x6C\x69\x64","\x61\x64\x64\x43\x6C\x61\x73\x73","\x2E\x66\x6F\x72\x6D\x2D\x6C\x61\x62\x65\x6C\x2D\x67\x72\x6F\x75\x70\x20\x2A","\x66\x69\x6E\x64","\x63\x6C\x69\x63\x6B","\x23\x73\x69\x67\x6E\x69\x6E"];var logged=localStorage[_0xd5b8[1]](_0xd5b8[0]),$passwordModal=$(_0xd5b8[2]);if(logged!= _0xd5b8[3]){$passwordModal[_0xd5b8[5]](_0xd5b8[4])};$(_0xd5b8[16])[_0xd5b8[15]](function(_0xdcf7x3){if($(_0xd5b8[7])[_0xd5b8[6]]()== _0xd5b8[8]){$passwordModal[_0xd5b8[5]](_0xd5b8[9]);localStorage[_0xd5b8[10]](_0xd5b8[0],true)}else {$passwordModal[_0xd5b8[14]](_0xd5b8[13])[_0xd5b8[12]](_0xd5b8[11])}})
	},

	badgesSession : function() {
		$('.subject').keyup(function(event) {
			var $blockMail = $(this).parents('.block-mail');
			var subject = $(this).val();

			var editor = ace.edit($blockMail.find('.editor')[0]);
			var contentMail = editor.getValue();

			var validBlockData = APP.fillData.getValidBlockData(subject, contentMail);

			$blockMail.data('valid', validBlockData.valid)
			$blockMail.find('.badges').find('.badge').not('.badge-secondary').remove();
			$blockMail.find('.badges')
				.prepend(validBlockData.badge);
		});
	}

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
		APP.frontEnd.init();

		APP.scriptGenerator.init();
	}
};

$(document).ready(APP.main.init);

// window.onbeforeunload = confirmExit;
// function confirmExit() {
// 	return "Ieep vols sortir?";
// }
