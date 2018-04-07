Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

APP.scriptGenerator = {
	
	LANGUAGE_ID : 1,
	VALID_MAILS_IDS : [],

	init : function () {
		this.saveInfo();

		this.openModal();
	},

	saveInfo : function() {
		APP.scriptGenerator.VALID_MAILS_IDS = [];
		APP.scriptGenerator.LANGUAGE_ID = $('#data-tabs-cont .nav-link.active').data('lang-id');	

		$('#tab-lang-c-' + APP.scriptGenerator.LANGUAGE_ID + ' [data-valid="true"]').find('[data-id]')
			.each(function(index, el) {
				APP.scriptGenerator.VALID_MAILS_IDS.push($(el).data('id'))
			});
	},

	openModal : function() {
		$('#scriptGenerated').on('shown.bs.modal', function(event) {
			var $modal = $(this);
			
			$modal.find('.data-mails .arr').text(APP.scriptGenerator.VALID_MAILS_IDS);
			$modal.find('.data-mails .badge').text(APP.scriptGenerator.VALID_MAILS_IDS.length + '/' + Object.size(DATA.mails));
			$modal.find('.data-lang .badge').text(APP.scriptGenerator.LANGUAGE_ID);
			
			var editor = ace.edit($modal.find('.editor')[0]);
			editor.session.setOption("wrap", true);
			editor.session.setMode("ace/mode/javascript");
			editor.setValue(APP.scriptGenerator.getScript());
		});
	},

	// AQUI VE EL TEMA
	// falta agafa el que editi el user
	getScript : function(){
		var __SCRIPT__ = "";
		var arrMailsIds_OK = APP.scriptGenerator.VALID_MAILS_IDS;
		var languageID_OK = APP.scriptGenerator.LANGUAGE_ID;

		var T1 = 1000, T2 = 100, T3 = 500, T4 = 500;

		var _arrMailIds = '[' + arrMailsIds_OK.join(', ') + ']';
		var langInitial = DATA.langs[languageID_OK].toLocaleLowerCase();
		
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
			var arrMailIds = ${_arrMailIds};
			var arrMailConts = ${_arrMailConts};
			var arrMailSubjects = ${_arrMailSubjects};
			var HEADER_VALUE = ${_HEADER};
			var FOOTER_VALUE = ${_FOOTER};
	      var T1 = ${T1}, T2 = ${T2}, T3 = ${T3}, T4 = ${T4};
	      var ST_T1 = null, ST_T2 = null, ST_T3 = null, ST_T4 = null;
			var LANG = ${languageID_OK};

			var i = 0;

			
			   var SI_MAIN = setInterval(function () {
			      
			      if(i<arrMailIds.length){
						var ID_TEMPLATE = arrMailIds[i];
						var SUBJECT_VALUE = arrMailSubjects[i];
						var HTML_VALUE = arrMailConts[i];

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
									for (var i = 0; i < allSubjects.length; i++) {
										if (!allSubjects[i].value.length) {
											allSubjects[i].value = " ";
										}
									}

									var img = windowForm.querySelectorAll('.languageTabsContainer div.tab img.previewWindowTab[onclick*="languageId=' + LANG + '\\');"]');
									if(img[0]){
										var tab = img[0].parentElement;
										tab.click();
										/* SET DATA */
										try{
											ST_T2 = setTimeout(function(){
												var contentTab = windowForm.querySelectorAll('.tabsContent .tabContent:not([style*="none"])');
												if(contentTab[0]){
													var editorsToPlain = contentTab[0].querySelectorAll('._viewPlain');
													for (var i = 0; i < editorsToPlain.length; i++) {
														editorsToPlain[i].click();
													}
													/* set subject */
													var subject = contentTab[0].querySelectorAll('input[name="subject_' + LANG + '"][type="text"]');
													if(subject[0]){
														subject[0].setAttribute('value', SUBJECT_VALUE);
													}
													/* set header */
													var header = contentTab[0].querySelectorAll('textarea[name="header_' + LANG + '"]');
													if(header[0]){
														header[0].value = HEADER_VALUE;
													}
													/* set footer */
													var footer = contentTab[0].querySelectorAll('textarea[name="footer_' + LANG + '"]');
													if(footer[0]){
														footer[0].value = FOOTER_VALUE;
													}
													/* set htmlcontent */
													var body = contentTab[0].querySelectorAll('textarea[name="body_' + LANG + '"]');
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

											console.log('[OK] Success save template id-' + ID_TEMPLATE + ' time: ' + (T1+T2+T3+T4) + 'ms');
										}catch(e){
											console.error('[ERROR] Fail save template id-' + ID_TEMPLATE + '. Pls send report!', e);
										}
									}
									
								}
							}, T1);
						};

						i++;
					}else{
						clearInterval(SI_MAIN);
					}

			   }, T1+T2+T3+T4 + 5000)
			
		`;

		__SCRIPT__ = __SCRIPT__.replace(/[\t\n]/g, '');

		if (!arrMailsIds_OK.length) __SCRIPT__ = "";

		return __SCRIPT__;
	}

};