/* GET INFO ALL MAILS only system */
var els = $$('.view2 .nameContent .mail');
var log = "";
for(i=0;i<els.length;i++){
  var data =  JSON.parse(els[i].get('data'));
// console.log(data);
  log = log + data.id + '||' + data.name +"\n";
}
console.log(log);


/*
05/04/2018

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
17||Verificación de correo

*/