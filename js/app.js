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
						${_langKey} <span class="badge badge-light">id ${_langIdBadge}</span>
						<div class="download download-all" title="Download ALL" data-toggle="tooltip">
							<i class="material-icons">get_app</i>
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
					<div class="block-mail block-header" data-lang="${langId}">
						<div class="card">
							<div class="card-body">
								<a class="header-collapsible collapsed clearfix" data-toggle="collapse" href="#mail-cont-${langId}_H" role="button" aria-expanded="false" aria-controls="mail-cont-${langId}_H">
									<div class="card-title h5">Generic Header</div>
									<div class="badges">
										${_validBlockData.badge}
										<span class="badge badge-secondary">Header</span>
									</div>
								</a>

								<div class="collapse" id="mail-cont-${langId}_H">
									<ul class="list-group list-group-flush">
										<li class="list-group-item">
											<label class="card-title-custom">Html</label>
											<div class="editor editor-cont editor-header" id="editor-${langId}_H">${_langDataHeader}</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				`;

				var _langDataFooter = APP.utils.safe_tags_replace(langData.footer).replace('\n', ''),
					 _validBlockData = APP.fillData.getValidBlockData("FOOTER", _langDataFooter);

				HTML_footer_lang = `
					<div class="block-mail block-footer" data-lang="${langId}">
						<div class="card">
							<div class="card-body">
								<a class="header-collapsible collapsed clearfix" data-toggle="collapse" href="#mail-cont-${langId}_F" role="button" aria-expanded="false" aria-controls="mail-cont-${langId}_F">
									<div class="card-title h5">Generic Footer</div>
									<div class="badges">
										${_validBlockData.badge}
										<span class="badge badge-secondary">Footer</span>
									</div>
								</a>

								<div class="collapse" id="mail-cont-${langId}_F">
									<ul class="list-group list-group-flush">
										<li class="list-group-item">
											<label class="card-title-custom">Html</label>
											<div class="editor editor-cont editor-footer" id="editor-${langId}_F">${_langDataFooter}</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				`;

				// Loop per cada mail del lang
				$.each(langData.mails, function(idMail, dataMail) {
					var _contMail = APP.utils.safe_tags_replace(dataMail.html).replace('\n', ''),
						 _subject = dataMail.subject,
						 _emailNameES = DATA.mails[idMail],
						 _validBlockData = APP.fillData.getValidBlockData(_subject, _contMail);

					// new
					var _customFooter = '', _customHeader = '', _customBadges = '', 
						 customHeaderLbl = 'Add', customFooterLbl = 'Add',
						 customHeaderIco = 'add', customFooterIco = 'add';

					// header
					if (dataMail.hasOwnProperty('header')) {
						var _contHead = APP.utils.safe_tags_replace(dataMail.header).replace('\n', '');
						_customHeader = `
							<li class="list-group-item custom-header">
								<label class="card-title-custom">Custom header</label>
								<div class="editor editor-cont editor-custom-header" id="editor-${langId}_${idMail}_header">${_contHead}</div>
							</li>
						`;
						_customBadges += '<span class="badge badge-info">Custom Foot</span>';
						customHeaderLbl = 'Remove';
						customHeaderIco = 'delete';
					}
					// foot 
					if (dataMail.hasOwnProperty('footer')) {
						var _contFoot = APP.utils.safe_tags_replace(dataMail.footer).replace('\n', '');
						_customFooter = `
							<li class="list-group-item custom-footer">
								<label class="card-title-custom">Custom footer</label>
								<div class="editor editor-cont editor-custom-footer" id="editor-${langId}_${idMail}_footer">${_contFoot}</div>
							</li>
						`;
						_customBadges += '<span class="badge badge-info">Custom Foot</span>';
						customFooterLbl = 'Remove';
						customFooterIco = 'delete';
					}

					HTML_mails_lang += `
						<div class="block-mail block-mail-mail" data-valid="${_validBlockData.valid}" data-id="${idMail}" data-lang="${langId}">
							<div class="card">
								<div class="card-body">
									<div class="dropdown">
										<button class="dropdown-toggle btn" type="button" id="drp-${langId}_${idMail}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i class="material-icons">more_vert</i>
										</button>
										<div class="dropdown-menu" aria-labelledby="drp-${langId}_${idMail}">
											<div class="download dropdown-item">
												<i class="material-icons">get_app</i> Download .html
											</div>
											<div class="preview dropdown-item">
												<i class="material-icons">visibility</i> Basic preview
											</div>
										  	<div class="dropdown-divider"></div>
										  	<div class="toggle-header dropdown-item">
												<i class="material-icons">${customHeaderIco}</i> <span class="text">${customHeaderLbl}</span> header
											</div>
											<div class="toggle-footer dropdown-item">
												<i class="material-icons">${customFooterIco}</i> <span class="text">${customFooterLbl}</span> footer
											</div>
										</div>
									</div>

									<a class="header-collapsible collapsed clearfix" data-toggle="collapse" href="#mail-cont-${langId}_${idMail}" role="button" aria-expanded="false" aria-controls="mail-cont-${langId}_${idMail}">
										<div class="card-title h5">${_emailNameES}</div>
										<div class="badges">
											${_validBlockData.badge}
											${_customBadges}
											<span class="badge badge-secondary">id ${idMail}</span>
										</div>
									</a>

									<div class="collapse" id="mail-cont-${langId}_${idMail}">
										<ul class="list-group list-group-flush">
											<li class="list-group-item">
												<label class="card-title-custom">Subject</label>
												<input type="text" class="form-control form-control-sm subject" value="${_subject}" placeholder="Subject">
											</li>
											<li class="list-group-item">
												<label class="card-title-custom">Html</label>
												<div class="editor editor-cont editor-body" id="editor-${langId}_${idMail}">${_contMail}</div>
											</li>
											${_customHeader}
											${_customFooter}
										</ul>
									</div>
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
									${HTML_header_lang}
									${HTML_footer_lang}
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
			_return.badge += '<span class="badge badge-warning bd-sbj">No subject</span>';
		}

		if ($.trim(contentMail).indexOf('TEXTHERE') !== -1 || $.trim(contentMail).length == 0){	
			_return.valid = false;
			_return.badge += '<span class="badge badge-danger bd-emp">No content</span>';
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
				useWorker: false,
				maxLines: 15,
				minLines: 10,
				showPrintMargin: false
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

				// fix update attribute valid html change required
				$blockMail.attr('data-valid', validBlockData.valid);
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
		this.search();
	},

	search : function() {
		$('#search-submit').click(function(event) {
			var VAL = $.trim($('#search').val()).toLowerCase();
			$('.finded-search').css('order', '').removeClass('finded-search');

			if (VAL.length) {
				var actualLangId = $('#output-tabs .nav-link.active').data('lang-id');

				$('#output-tabs-cont #tab-lang-c-'+actualLangId+' .block-mail').not('.block-header, .block-footer').each(function(index, el) {
					var name = $.trim($(this).find('[data-toggle="collapse"]').text()).toLowerCase();
					if (name.includes(VAL)) {
						$(this).addClass('finded-search');
					}
				});

				$('.finded-search').each(function(index, el) {
					$(this).css('order', '-' + (100 - index));
				});
			}
		});

		$('#search-reset').click(function(event) {
			$('#search').val('');
			$('.finded-search').css('order', '').removeClass('finded-search');
		});
	},

	generateMailsFile : function() {
		$('.download').not('.download-all').click(function(event) {
			event.preventDefault();
			event.stopPropagation();

			var $editor = $(this).parents('.block-mail').find('.editor');
			APP.frontEnd.generateLinkDownload($editor, 'link');
		});

		$('.download-all').click(function(event) {
			event.preventDefault();
			event.stopPropagation();

			var zip = new JSZip();
			
			var actualLangId = $('#output-tabs .nav-link.active').data('lang-id');

			$('#output-tabs-cont #tab-lang-c-' + actualLangId + ' .block-mail').not('.block-header, .block-footer')
				.each(function(index, el) {
					var $editor = $(this).find('.editor');
					var data = APP.frontEnd.generateLinkDownload($editor, 'code');
					zip.file(data.fileName, data.content);
				});

			zip.generateAsync({type:"blob"})
				.then(function(content) {
					// see FileSaver.js
					saveAs(content, "example.zip");
				});
		});
	},

	generateLinkDownload : function ($editor, mode) {
		var editor = ace.edit($editor[0]);
		var code = editor.getValue();
		var mailId = $editor.parents('.block-mail').data('id');
		var name = DATA.mails[mailId];
		var actualLangId = $('#output-tabs .nav-link.active').data('lang-id');
		var actualLangKey = $('#output-tabs .nav-link.active').data('lang-key');
		
		var header = ace.edit( $('#editor-'+actualLangId+'_H')[0] ).getValue();
		var footer = ace.edit( $('#editor-'+actualLangId+'_F')[0] ).getValue();

		var fileName = name + '_' + actualLangKey + '_id-' + mailId + '.html';

		// get custom header/footer
		if ($editor.parents('.block-mail').find('.custom-header').length)
			header = ace.edit( $editor.parents('.block-mail').find('.custom-header .editor')[0] ).getValue();

		if ($editor.parents('.block-mail').find('.custom-footer').length)
			footer = ace.edit( $editor.parents('.block-mail').find('.custom-footer .editor')[0] ).getValue();

		if (mode == 'link') {
			var a = window.document.createElement('a');
			a.href = window.URL.createObjectURL(new Blob([header, code, footer], {type: 'text/html'}));
			a.download = fileName;

			// Append anchor to body.
			document.body.appendChild(a);
			a.click();

			// Remove anchor from body
			document.body.removeChild(a);
		}
		if (mode == 'code') {
			return {
				fileName: fileName,
				content: header + code + footer
			};
		}
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
			
			// get custom header/footer
			if ($(this).parents('.block-mail').find('.custom-header').length)
				header = ace.edit( $(this).parents('.block-mail').find('.custom-header .editor')[0] ).getValue();

			if ($(this).parents('.block-mail').find('.custom-footer').length)
				footer = ace.edit( $(this).parents('.block-mail').find('.custom-footer .editor')[0] ).getValue();

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

// exit
if (window.location.host.indexOf('.github.io') > -1) {
	window.onbeforeunload = confirmExit;
	function confirmExit() {
		return "Ieep vols sortir?";
	}
}
