var els = $$('.view2 .nameContent .mail');
var log = "";
console.log(els.length);
for(i=0;i<els.length;i++){
  var data =  JSON.parse(els[i].get('data'));
// console.log(data);
  log = log + data.id + '||' + data.name +"\n";
}
console.log(log);


/*
06/04/2018 (32)

36||Activación Two Factor Auth
37||Activación Two Factor Auth
12||Apadrinamiento
13||Apadrinamiento completo
19||Aviso a proveedores
11||Baja de newsletter
2||Baja de usuarios
1||Bienvenida
24||Blog - Email de Bienvenida
22||Blog - Notificación de Nuevo Artículo
23||Blog - Notificación de Nuevo Comentario
4||Cambio de contraseña
10||Confirmación de pedido
25||Confirmar suscripción de Stock
9||Consulta de producto
8||Contacto general
18||Cuenta activada
33||Documento de albarán de entrega
34||Documento de factura
35||Documento de factura rectificativa
32||Documento de pedido
38||Enviar código dispositivo Two Factor Auth
16||Notificación transportista
39||Notificar Bloqueo de Dispositivo Two Factor Auth
15||Pedido incompleto
14||Petición devolución
7||Recomendación de producto
6||Recomendación de wishlist
3||Recordarios de contraseña
5||Registro de newsletter
20||Stock disponible
17||Verificación de correo

*/
<<<<<<< HEAD

// js for set data into one mail
// js for set data into one mail
var T1 = 1000, T2 = 500, T3 = 500, T4 = 500;
var LANG = 1;
var ID_TEMPLATE = 1;
var SUBJECT_VALUE = HEADER_VALUE = FOOTER_VALUE = HTML_VALUE = "Test auto 666 " + LANG + '_' + ID_TEMPLATE;

try{
	editMailType(ID_TEMPLATE);
}catch(e){
	console.error('[ERROR] Fail open window template id-' + ID_TEMPLATE + '. Pls send report!', e);
}

setTimeout(function(){
	var windowForm = document.querySelectorAll('form[action*="editMailType/editMailTypeActions"]');
	if(windowForm[0]){
		var img = windowForm[0].querySelectorAll('.languageTabsContainer div.tab img.previewWindowTab[onclick*="languageId=' + LANG + '\');"]');
		if(img[0]){
			var tab = img[0].parentElement;
			tab.click();
			// SET DATA
			try{
				setTimeout(function(){
					var contentTab = windowForm[0].querySelectorAll('.tabsContent .tabContent:not([style*="none"])');
					if(contentTab[0]){
						var editorsToPlain = contentTab[0].querySelectorAll('._viewPlain');
						for (var i = 0; i < editorsToPlain.length; i++) {
							editorsToPlain[i].click();
							console.log(editorsToPlain[i]);
						}
						// set subject
						var subject = contentTab[0].querySelectorAll('input[name="subject_' + LANG + '"][type="text"]');
						if(subject[0]){
							subject[0].setAttribute('value', SUBJECT_VALUE);
						}
						// set header
						var header = contentTab[0].querySelectorAll('textarea[name="header_' + LANG + '"]');
						if(header[0]){
							// var iframe = header[0].nextElementSibling;
							header[0].value = HEADER_VALUE;
							// iframe.contentDocument.body.innerHTML = HEADER_VALUE;
						}
						// set footer
						var footer = contentTab[0].querySelectorAll('textarea[name="footer_' + LANG + '"]');
						if(footer[0]){
							// var iframe = footer[0].nextElementSibling;
							footer[0].value = FOOTER_VALUE;
							// iframe.contentDocument.body.innerHTML = FOOTER_VALUE;
						}
						// set htmlcontent
						var body = contentTab[0].querySelectorAll('textarea[name="body_' + LANG + '"]');
						if(body[0]){
							// var iframe = body[0].nextElementSibling;
							body[0].value = HTML_VALUE;
							// iframe.contentDocument.body.innerHTML = HTML_VALUE;
						}

						// SAVE TEMPLATE AND CLOSE
						setTimeout(function(){
							var save = windowForm[0].querySelectorAll('[type="submit"]');
                            if (save[0]) {
                           		save[0].click();

                           // setTimeout(function(){
                           //    var close = windowForm[0].querySelectorAll('[ls="common.cancel"]');
                           //    if (close[0]) {
                           //        close[0].click();
                           //    }
                           // }, T4)
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
=======
>>>>>>> b48e7c2dfd7d1175a31ec315e7f09be191e59c19
