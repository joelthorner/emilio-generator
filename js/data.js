var APP = {}, DATA = {};

// Definició de les plantilles de mail ID - nom (el nom es per aclararnos pero no es important)
DATA.mails = {
	1	: "Bienvenida",
	2	: "Baja de usuarios",
	3	: "Recordarios de contraseña",
	4	: "Cambio de contraseña",
	5	: "Registro de newsletter",
	6	: "Recomendación de wishlist",
	7	: "Recomendación de producto",
	8	: "Contacto general",
	9	: "Consulta de producto",
	10	: "Confirmación de pedido",
	11	: "Baja de newsletter",
	12	: "Apadrinamiento",
	13	: "Apadrinamiento completo",
	14	: "Petición devolución",
	15	: "Pedido incompleto",
	16	: "Notificación transportista",
	17	: "Verificación de correo",
	18	: "Cuenta activada",
	19	: "Aviso a proveedores",
	20	: "Stock disponible",
	
	22	: "Blog - Notificación de Nuevo Artículo",
	23	: "Blog - Notificación de Nuevo Comentario",
	24	: "Blog - Email de Bienvenida",
	25	: "Confirmar suscripción de Stock",
	26	: "SocialCurrency - Socialización",					// new
	27	: "SocialCurrency - Notificación incentivos",	// new
	
	32	: "Documento de pedido",
	33	: "Documento de albarán de entrega",
	34	: "Documento de factura",
	35	: "Documento de factura rectificativa",
	36	: "Activación Two Factor Auth",
	37	: "Activación Two Factor Auth",
	38	: "Enviar código dispositivo Two Factor Auth",
	39	: "Notificar Bloqueo de Dispositivo Two Factor Auth",
};

// All defined languages: ID lang, Inicials en uppercase
// 06/04/2018 common translated languages (el LC en te més)
DATA.langs = {
	1	: "ES",
	2	: "EN",
	3	: "CA",
	4	: "FR",
	5	: "DE",
	6	: "ZHO",		// chino tradicional
	10	: "CHI",
	11	: "JA",		// japonés
	13	: "IT",
	15	: "KO",		// korean
	17	: "PT",
	24	: "EU",		// basque
	// ?	: "LT",
};
