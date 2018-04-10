Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

APP.scriptGenerator = {
	
	LANGUAGE_ID : 1,
	LANGUAGE_ID_TO : null,
	VALID_MAILS_IDS : [],
	
	totalTimeScript : 0,
	T1 : 0,
	T2 : 0,
	T3 : 0,
	T4 : 0,
	T_MAIL : 0,
	TIMEOPENPLANTS : 0,

	init : function () {
		this.openModal();
		this.changeDestinationLang();
	},

	changeDestinationLang : function() {
		$('#editFinalLCLang').click(function(event) {
			event.preventDefault();
			$('#scriptGenerated').modal('hide')
				.on('hidden.bs.modal', function(event) {
					$('#selectLangsFO').focus();
				});
		});

		$('#output-tabs .nav-link').on('click', function(event) {
			$('#selectLangsFO').val($(this).data('lang-id'))
		});
	},

	saveInfo : function() {
		var SG = APP.scriptGenerator;

		SG.VALID_MAILS_IDS = [];
		SG.LANGUAGE_ID = $('#data-tabs-cont .nav-link.active').data('lang-id');
		SG.LANGUAGE_ID_TO = $('#selectLangsFO').val();
		SG.T1 = 1000;
		SG.T2 = 100;
		SG.T3 = 500;
		SG.T4 = 500;
		SG.T_MAIL = 4500;
		SG.TIMEOPENPLANTS = 1000;

		// save session editors DATA
		$('#output-tabs-cont #tab-lang-c-' + SG.LANGUAGE_ID + ' .editor')
			.each(function(index, el) {
				var editor = ace.edit(el);
				var code = editor.getValue();
				var id = $(el).data('id');
				var langInitial = DATA.langs[SG.LANGUAGE_ID].toLowerCase();

				if (!isNaN(id)) {
					DATA[langInitial].mails[id].html = code;
					DATA[langInitial].mails[id].subject = $(el).parents('.block-mail').find('.subject').val();
				}else{
					if (id == 'H') DATA[langInitial].header = code;
					if (id == 'F') DATA[langInitial].footer = code;
				}
			});

		$('#tab-lang-c-' + SG.LANGUAGE_ID + ' [data-valid="true"]').find('[data-id]')
			.each(function(index, el) {
				SG.VALID_MAILS_IDS.push($(el).data('id'))
			});
			
		SG.totalTimeScript = (SG.T_MAIL * SG.VALID_MAILS_IDS.length) + SG.TIMEOPENPLANTS;
	},

	openModal : function() {
		var SG = APP.scriptGenerator;


		$('#scriptGenerated').on('shown.bs.modal', function(event) {
			SG.saveInfo();

			var $modal = $(this), seconds = (SG.totalTimeScript / 1000);
			
			$modal.find('.data-mails .arr')
				.text(SG.VALID_MAILS_IDS);
			$modal.find('.data-mails .badge')
				.text(SG.VALID_MAILS_IDS.length + '/' + Object.size(DATA.mails));
			$modal.find('.data-lang .badge')
				.text(SG.LANGUAGE_ID);
			$modal.find('.data-lang .text-initials')
				.text(DATA.langs[SG.LANGUAGE_ID]);
			$modal.find('.data-lang .text-initials-2')
				.text(DATA.langs[SG.LANGUAGE_ID_TO]);
			$modal.find('.data-time .badge')
				.text( Math.round(seconds) + 's');
			$modal.find('.data-time .time-desglose')
				.text( Math.round((seconds / SG.VALID_MAILS_IDS.length)) + 's x ' + SG.VALID_MAILS_IDS.length + ' mails');
			
			var editor = ace.edit($modal.find('.editor')[0]);
			editor.session.setOption("wrap", true);
			editor.session.setMode("ace/mode/javascript");
			editor.setValue(SG.getScript());
		});
	},

	// AQUI VE EL TEMA
	getScript : function(){
		var __SCRIPT__ = "";
		var arrMailsIds_OK = APP.scriptGenerator.VALID_MAILS_IDS;
		var languageID_OK = APP.scriptGenerator.LANGUAGE_ID;
		var languageID_OK_DESTI = APP.scriptGenerator.LANGUAGE_ID_TO;

		var T1 = APP.scriptGenerator.T1, 
			 T2 = APP.scriptGenerator.T2, 
			 T3 = APP.scriptGenerator.T3, 
			 T4 = APP.scriptGenerator.T4, 
			 T_MAIL = APP.scriptGenerator.T_MAIL,
			 TIMEOPENPLANTS = APP.scriptGenerator.TIMEOPENPLANTS;

		var _arrMailIds = '[' + arrMailsIds_OK.join(', ') + ']';
		var langInitial = DATA.langs[languageID_OK].toLowerCase();
		
		var _arrMailConts = `[\``;
		$.each(arrMailsIds_OK, function(index, arrID) {
			var content = DATA[langInitial].mails[arrID].html;
			if(index == arrMailsIds_OK.length-1) 
				_arrMailConts += content + `\`]`;
			else
				_arrMailConts += content + `\`, \``;
		});

		var _arrMailSubjects = `[\``;
		$.each(arrMailsIds_OK, function(index, arrID) {
			var subject = DATA[langInitial].mails[arrID].subject;
			if(index == arrMailsIds_OK.length-1) 
				_arrMailSubjects += ($.trim(subject).length ? subject : ' ') + `\`]`;
			else
				_arrMailSubjects += ($.trim(subject).length ? subject : ' ') + `\`, \``;
		});

		var _HEADER = `\`` + DATA[langInitial].header + `\``;
		var _FOOTER = `\`` + DATA[langInitial].footer + `\``;

		__SCRIPT__ += `
			console.log('%c[START] --- Executing script --- ','font-weight:bold;');

			openMailTypes();

			var arrMailIds = ${_arrMailIds};
			var arrMailConts = ${_arrMailConts};
			var arrMailSubjects = ${_arrMailSubjects};
			var HEADER_VALUE = ${_HEADER};
			var FOOTER_VALUE = ${_FOOTER};
			var T1 = ${T1}, T2 = ${T2}, T3 = ${T3}, T4 = ${T4}, T_MAIL = ${T_MAIL}, TIMEOPENPLANTS = ${TIMEOPENPLANTS};
			var ST_T1 = null, ST_T2 = null, ST_T3 = null, ST_T4 = null;
			var LANG_DESTI = ${languageID_OK_DESTI};
			var mailTimeSeconds = T_MAIL / 1000;

			var i_1 = 0;

			setTimeout(function(){

				
				var SI_MAIN = setInterval(function () {
					
					if(i_1<arrMailIds.length){
						var ID_TEMPLATE = arrMailIds[i_1];
						var SUBJECT_VALUE = arrMailSubjects[i_1];
						var HTML_VALUE = arrMailConts[i_1];

						clearTimeout(ST_T1);
						clearTimeout(ST_T2);
						clearTimeout(ST_T3);
						clearTimeout(ST_T4);

						if(document.querySelectorAll('[ondblclick*="editMailType(' + ID_TEMPLATE + '"]').length){
							try{
								editMailType(ID_TEMPLATE);
							}catch(e){
								console.error('[ERROR] Fail open window template id-' + ID_TEMPLATE + '. Pls send report!', e);
							}

							ST_T1 = setTimeout(function(){
								var windowForm = document.querySelectorAll('input[name="mailId"][type="hidden"][value="'+ID_TEMPLATE+'"]');
								
								if(windowForm[0]){
									windowForm = windowForm[0].parentElement;
									var allSubjects = windowForm.querySelectorAll('input[name*="subject_"]');
									for (var i_2 = 0; i_2 < allSubjects.length; i_2++) {
										if (!allSubjects[i_2].value.length) {
											allSubjects[i_2].value = " ";
										}
									}

									var img = windowForm.querySelectorAll('.languageTabsContainer div.tab img.previewWindowTab[onclick*="languageId=' + LANG_DESTI + '\\');"]');
									if(img[0]){
										var tab = img[0].parentElement;
										tab.click();
										/* SET DATA */
										try{
											ST_T2 = setTimeout(function(){
												var contentTab = windowForm.querySelectorAll('.tabsContent .tabContent:not([style*="none"])');
												if(contentTab[0]){
													var editorsToPlain = contentTab[0].querySelectorAll('._viewPlain');
													for (var i_3= 0; i_3 < editorsToPlain.length; i_3++) {
														editorsToPlain[i_3].click();
													}
													/* set subject */
													var subject = contentTab[0].querySelectorAll('input[name="subject_' + LANG_DESTI + '"][type="text"]');
													if(subject[0]){
														subject[0].setAttribute('value', SUBJECT_VALUE);
													}
													/* set header */
													var header = contentTab[0].querySelectorAll('textarea[name="header_' + LANG_DESTI + '"]');
													if(header[0]){
														header[0].value = HEADER_VALUE;
													}
													/* set footer */
													var footer = contentTab[0].querySelectorAll('textarea[name="footer_' + LANG_DESTI + '"]');
													if(footer[0]){
														footer[0].value = FOOTER_VALUE;
													}
													/* set htmlcontent */
													var body = contentTab[0].querySelectorAll('textarea[name="body_' + LANG_DESTI + '"]');
													if(body[0]){
														body[0].value = HTML_VALUE;
													}

													/* SAVE TEMPLATE AND CLOSE */
													ST_T3 = setTimeout(function(){
														var save = windowForm.querySelectorAll('[type="submit"]');
														if (save[0]) {
															save[0].click();

															ST_T4 = setTimeout(function(){
																var close = windowForm.querySelectorAll('[ls="common.cancel"]');
																if (close[0]) {
																	close[0].click();
																}
															}, T4);
														}
													}, T3);
												}
											}, T2);

											console.log('%c[OK] Success save template id-' + ID_TEMPLATE + ' time: ' + mailTimeSeconds + 's [' + i_1 + '/' + arrMailIds.length + ']', 'color:green;background:#e2f5e2');
											mailTimeSeconds += (T_MAIL / 1000);
										}catch(e){
											console.error('[ERROR] Fail save template id-' + ID_TEMPLATE + '. Pls send report!', e);
										}
									}
								}
							}, T1);
						}else{
							console.warn('Template id-' + ID_TEMPLATE + ' not found in LC. [' + (i_1 + 1) + '/' + arrMailIds.length + ']');
						}

						i_1++;

						if (i_1 == arrMailIds.length) {
							console.log('%c[END] --- Executing script --- ', 'font-weight:bold;');
						}
					}else{
						clearInterval(SI_MAIN);
					}

				}, T1+T2+T3+T4 + T_MAIL);
			
			}, TIMEOPENPLANTS);

		`;

		// __SCRIPT__ = __SCRIPT__.replace(/[\t\n]/g, '');

		if (!arrMailsIds_OK.length) __SCRIPT__ = "";

		return __SCRIPT__;
	}

};