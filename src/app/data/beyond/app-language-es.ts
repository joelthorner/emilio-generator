// v4 file template
export const LANGUAGE_ES = {
  header: {
    html: `
<table width="100%" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="background-color: #fff; padding-bottom: 0px;">
  <tr>
    <td>
    <!--[if (gte mso 9)|(IE)]>
    <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td>
    <![endif]-->
    <table bgcolor="#fff" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
      <tr>
          <td bgcolor="#fff" style="padding: 20px;">
          <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="text-align: center;">
            <tr>
              <td>
                <a href="{{ general.ecommerceUrl }}">
                  <img src="{{ general.ecommerceCdnImages }}email-logo.png" width="210" height="auto" border="0" alt="{{ general.ecommerceName }}" style="height: auto;" />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>`,
  },

  footer: {
    html: `
{% set languageSheet = {
  moreInfo: 'Para obtener más información, lea nuestra <a href="' ~ general.privacyPolicyLink ~ '">política de privacidad</a> y <a href="' ~ general.termsOfUseLink ~ '">términos de uso</a>.'
} %}
        <tr>
          <td bgcolor="#fff" style="background-color: #fff; padding: 20px 20px 20px 20px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              {% set pages = general.getPages(501) %}
              {% if pages|length %}
                <tr>
                  <td align="center">
                    <table border="0" cellspacing="10" cellpadding="0">
                      <tr>
                        {% for page in pages %}
                          <td style="text-align: left;">
                            <a href="{{ page.link }}" style="padding: 6px 10px; color: #454545; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: bold; text-decoration: none;" target="{{ page.target }}">{{ page.name }}</a>
                          </td>
                        {% endfor %}
                      </tr>
                    </table>
                  </td>
                </tr>
              {% endif %}
              {% set banners = general.getBanners(502) %}
              {% if banners|length %}
                <tr>
                  <td align="center" style="padding: 12px 0 12px 0px;">
                    <table border="0" cellspacing="8" cellpadding="0">
                      <tr>
                        {% for banner in banners %}
                          <td width="30" style="text-align: left;">
                            <a href="{{ banner.link }}">
                              <img src="{{ banner.image }}" width="30" height="auto" alt="{{ banner.alt }}" border="0" style="height: auto;" />
                            </a>
                          </td>
                        {% endfor %}
                      </tr>
                    </table>
                  </td>
                </tr>
              {% endif %}
              {% set pages = general.getPages(503) %}
              {% if pages|length %}
                <tr>
                  <td align="center">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        {% for page in pages %}
                          <td style="text-align: left; padding: 15px 25px 25px 25px; color: #999; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 20px;">
                            <span style="color: #999; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 20px;">{{ page.content }}</span>
                          </td>
                        {% endfor %}
                      </tr>
                    </table>
                  </td>
                </tr>
              {% endif %}
              {% set pages = general.getPages(504) %}
              {% if pages|length %}
                <tr>
                  {% for page in pages %}
                    <td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #454545;">{{ page.content }}</td>
                  {% endfor %}
                </tr>
              {% endif %}
              <tr>
                <td align="center" heigth="50" style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #999; height: 20px;">
                  {{ languageSheet.moreInfo }}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
      </table>
      <![endif]-->
    </td>
  </tr>
  <tr>
    <td align="left" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #ffffff;">
      <span style="color: #000; font-size: 10px;">&nbsp;</span>
    </td>
  </tr>
</table>`,
  },

  templates: {
    1: {
      name: "Bienvenida",
      subject: "{{ general.ecommerceName }} - Gracias por darte de alta",
      html: `
{% set languageSheet = {
  premessage: '¡Bienvenido/a a ' ~ general.ecommerceName ~ '!',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Nos complace confirmarte la creación de tu cuenta de cliente en <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageBody2: 'Gracias a tu cuenta de cliente podrás actualizar tu perfil y contraseña, consultar tu historial de pedidos y otra información de tu interés.',
  messageBody3: "Esperamos verte pronto en " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    }, // end 1

    2: {
      name: "Baja de usuarios",
      subject: "{{ general.ecommerceName }} - Baja de usuario",
      html: `
{% set languageSheet = {
  premessage: 'Confirmación de cuenta eliminada',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody: 'Conforme a lo solicitado durante tu reciente visita a ' ~ general.ecommerceName ~ ", confirmamos que tu cuenta de usuario " ~ user.email ~ " ha sido eliminada de nuestra base de datos.",
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    }, // end 2

    3: {
      name: "Recordarios de contraseña",
      subject: "{{ general.ecommerceName }} - Recordar contraseña",
      html: `
{% set languageSheet = {
  premessage: 'Recordar contraseña',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "Conforme a lo solicitado durante tu reciente visita a " ~ general.ecommerceName ~ ", aquí tienes tu dirección de acceso a la zona de recuperación de contraseña:",
  messageBody2: '<a href="' ~ user.lostPasswordLink ~ '" style="color:#000">Click aquí para recuperar contraseña</a>',
  messageBody3: 'Este enlace solamente será válido durante las 24 horas siguientes al momento de su envío.',
  messageBody4: "Esperamos verte pronto en " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ languageSheet.messageBody4 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    }, // end 3

    4: {
      name: "Cambio de contraseña",
      subject: "{{ general.ecommerceName }} - Cambio de contraseña",
      html: `
{% set languageSheet = {
  premessage: 'Cambio de contraseña',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Te confirmamos que tu contraseña ha sido modificada.',
  messageBody2: "Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.",
  messageBody3: "Esperamos verte pronto en " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    }, // end 4

    5: {
      name: "Registro de newsletter",
      subject: "",
      html: ``,
    }, // end 5

    6: {
      name: "Recomendación de wishlist",
      subject: "{{ general.ecommerceName }} - {{ recommend.name }} te recomienda sus productos favoritos",
      html: `
{% set languageSheet = {
  premessage: 'Recomendación de favoritos',
  messageHeader1: "Tu amigo/a " ~ recommend.name ~ " (" ~ recommend.email ~ ") te envía estos productos que pueden resultarte de interés.",
  messageBody: 'Si necesitas más información acerca de este producto puedes contactar con nosotros en <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName,
  recommendedProducts: 'Productos recomendados',
  product: 'Producto',
  price: 'Precio',
  comments: 'Mensaje de tu amigo/a:'
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader1 }}<br><br>
      {{ languageSheet.messageBody }}<br><br>
      {{ languageSheet.messageSignature }}<br><br>
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 15px; border-collapse: collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; color: #454545; font-weight: bold;">{{ languageSheet.recommendedProducts }}</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0;">
              <table style="border-bottom: 2px solid #dcdcdc; color: #454545; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color: #454545; text-align: left; padding-left: 10px; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight: bold;" bgColor="#F4F4F4">{{ languageSheet.product }}</td>
                    <td width="20%" height="32" style="color: #454545; text-align: right; padding-right: 10px; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight: bold;" bgColor="#F4F4F4">{{ languageSheet.price }}</td>
                  </tr>
                  <tr>
                    <td style="text-align: left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; border-bottom: 1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="{{ recommend.product.images.smallImage }}" alt="{{ recommend.product.name }}" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            {{ recommend.product.sku }} - <a href="{{ recommend.product.productLink }}" title="{{ recommend.product.name }}" target="_blank" rel="noreferrer" style="text-decoration: none;"><span style="color: #454545; text-decoration: none;">{{ recommend.product.name }}</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: right; padding-right: 8px; border-bottom: 1px solid #dcdcdc;"><span><span>{{ recommend.product.price }}</span></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table width="88%" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #454545; line-height: 16px;">
              <tr>
                <td>
                  <strong>{{ languageSheet.comments }}</strong><br>
                  {{ recommend.comments }}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>`,
    }, // end 6

    7: {
      name: "Recomendación de producto",
      subject: "{{ general.ecommerceName }} - {{ recommend.name }} te recomienda un producto",
      html: `
{% set languageSheet = {
  premessage: 'Recomendación de producto',
  messageHeader1: "Tu amigo/a " ~ recommend.name ~ " (" ~ recommend.email ~ ") te envía este producto que puede resultarte de interés.",
  messageBody: 'Si necesitas más información acerca de este producto puedes contactar con nosotros en <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName,
  recommendedProducts: 'Productos recomendados',
  product: 'Producto',
  price: 'Precio',
  comments: 'Mensaje de tu amigo/a:'
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader1 }}<br><br>
      {{ languageSheet.messageBody }}<br><br>
      {{ languageSheet.messageSignature }}<br><br>
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 15px; border-collapse: collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; color: #454545; font-weight: bold;">{{ languageSheet.recommendedProducts }}</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0;">
              <table style="border-bottom: 2px solid #dcdcdc; color: #454545; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color: #454545; text-align: left; padding-left: 10px; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight: bold;" bgColor="#F4F4F4">{{ languageSheet.product }}</td>
                    <td width="20%" height="32" style="color: #454545; text-align: right; padding-right: 10px; font-size: 14px; font-family: Arial, Helvetica, sans-serif; font-weight: bold;" bgColor="#F4F4F4">{{ languageSheet.price }}</td>
                  </tr>
                  <tr>
                    <td style="text-align: left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; border-bottom: 1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="{{ recommend.product.images.smallImage }}" alt="{{ recommend.product.name }}" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            {{ recommend.product.sku }} - <a href="{{ recommend.product.productLink }}" title="{{ recommend.product.name }}" target="_blank" rel="noreferrer" style="text-decoration: none;"><span style="color: #454545; text-decoration: none;">{{ recommend.product.name }}</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: right; padding-right: 8px; border-bottom: 1px solid #dcdcdc;"><span><span>{{ recommend.product.price }}</span></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table width="88%" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #454545; line-height: 16px;">
              <tr>
                <td>
                  <strong>{{ languageSheet.comments }}</strong><br>
                  {{ recommend.comments }}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>`,
    }, // end 7

    8: {
      name: "Contacto general",
      subject: "{{ general.ecommerceName }} - Formulario de contacto",
      html: `
{% set languageSheet = {
  premessage: 'Formulario de contacto',
  name: 'Nombre:',
  email: 'Email:',
  phone: 'Teléfono:',
  motive: 'Motivo de consulta:',
  comments: 'Mensaje:',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {% if contact.name|length %}
        {{ languageSheet.name }} {{ contact.name }}<br>
      {% endif %}
      {% if contact.email|length %}
        {{ languageSheet.email }} {{ contact.email }}<br>
      {% endif %}
      {% if contact.phone|length %}
        {{ languageSheet.phone }} {{ contact.phone }}<br>
      {% endif %}
      {% if contact.motive|length %}
        {{ languageSheet.motive }} {{ contact.motive }}<br>
      {% endif %}
      {% if contact.comments|length %}
        {{ languageSheet.comments }} {{ contact.comments }}<br>
      {% endif %}
      <br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    }, // end 8

    9: {
      name: "Consulta de producto",
      subject: "{{ general.ecommerceName }} - Consulta sobre producto",
      html: `
{% set languageSheet = {
  premessage: 'Consulta sobre producto',
  name: 'Nombre:',
  email: 'Email:',
  phone: 'Teléfono:',
  comments: 'Mensaje:',
  productName: 'Nombre de producto:',
  productSku: 'Referencia de producto:',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {% if data.name|length %}
        {{ languageSheet.name }} {{ data.name }}<br>
      {% endif %}
      {% if data.email|length %}
        {{ languageSheet.email }} {{ data.email }}<br>
      {% endif %}
      {% if data.phone|length %}
        {{ languageSheet.phone }} {{ data.phone }}<br>
      {% endif %}
      {% if data.comments|length %}
        {{ languageSheet.comments }} {{ data.comments }}<br><br>
      {% endif %}
      {% if data.product.name|length %}
        {{ languageSheet.productName }} {{ data.product.name }}<br>
      {% endif %}
      {% if data.product.sku|length %}
        {{ languageSheet.productSku }} {{ data.product.sku }}<br>
      {% endif %}
      <br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    }, // end 9

    10: {
      name: "Confirmación de pedido",
      subject: "{{ general.ecommerceName }} - {{ (sales.reserve) ? ('Pedido recibido') : ('Confirmación de pedido') }} {{ sales.documentNumber }}",
      html: `
{% set languageSheet = {
  premessage: 'Confirmación de pedido',
  premessageReserve: 'Pedido recibido',
  messageHeader: 'Muchas gracias por confiar en nosotros. Su compra ha sido procesada correctamente. Podrás encontrar este pedido en el archivo PDF adjunto.',
  messageHeaderReserve: 'Muchas gracias por confiar en nosotros. Hemos recibido tu pedido, al tener algún producto por encargo lo tenemos pendiente de revisión.',
  messageBody1: 'A continuación te mostramos los datos del pedido.',
  messageBody2: 'Gracias por comprar en <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName,
  orderNumber: 'Número de pedido:',
  orderDate: 'Fecha del pedido:',
  paymentSystem: 'Método de pago:',
  shippingName: 'Método de envío:',
  address: 'Dirección',
  orderResume: 'Resumen del pedido',
  quantity: 'Cantidad:',
  gift: 'Regalo',
  total: 'Total:',
  comment: 'Comentarios:',
  pickup: 'Has elegido entrega en tienda',
  pickupMessage: 'Te avisaremos por mail cuando tu pedido esté disponible para recoger.'
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{% if sales.reserve %}{{ languageSheet.premessageReserve }}{% else %}{{ languageSheet.premessage }}{% endif %}</strong><br><br>
    <span style="font-size: 15px;">
      {% if sales.reserve %}{{ languageSheet.messageHeaderReserve }}{% else %}{{ languageSheet.messageHeader }}{% endif %}<br><br>
      {{ languageSheet.messageBody1 }}
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; border-collapse: collapse;">
      <tbody>
        <tr>
          <td style="vertical-align: middle; font-family: Arial, Helvetica, sans-serif;" align="center">
            <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
              <tr>
                <td style="padding: 15px 15px; line-height: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #000; vertical-align: middle; text-align: center; width: 50%;" align="center" width="50%">
                  <span style="font-size: 15px;">
                    <b>{{ languageSheet.orderNumber }}</b><br>
                    {{ sales.documentNumber }}
                  </span>
                </td>
                <td style="padding: 15px 15px; line-height:20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #000; vertical-align: middle; text-align: center;" align="center">
                  <span style="font-size: 15px;">
                    <b>{{ languageSheet.orderDate }}</b><br>
                    {{ sales.date }}
                  </span>
                </td>
              </tr>
            </table>
          </td>
          <tr>
            <td style="vertical-align: middle;font-family: Arial, Helvetica, sans-serif;" align="center">
              <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding: 15px 15px; line-height: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #000; vertical-align: middle; text-align: center; width: 50%;" align="center" width="50%">
                    <span style="font-size: 15px;">
                      <b>{{ languageSheet.paymentSystem }}</b><br>
                      {{ sales.paymentSystem.name }}
                    </span>
                  </td>
                  <td style="padding: 15px 15px; line-height: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #000; vertical-align: middle; text-align: center;" align="center">
                    <span style="font-size: 15px;">
                      <b>{{ languageSheet.shippingName }}</b><br>
                      {% for shipment in sales.delivery.shipments %}
                        {{ shipment.shipping.name }} {{ shipment.shipping.shippingTypeName }}
                      {% endfor %}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family: Arial, Helvetica, sans-serif;font-size: 18px;color: #000; font-weight: bold;">
              {% if sales.delivery.physicalLocation %}{{ languageSheet.pickup }}{% else %}{{ languageSheet.address }}{% endif %}
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div>
              <table style="color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: middle;" width="85%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td style="text-align: left; font-family: Arial, Helvetica, sans-serif; font-size:13px; line-height: 20px; padding: 20px; border: 1px solid #ddd;">
                      {% if sales.delivery.physicalLocation %}
                        {{ sales.delivery.physicalLocation.name }}<br>
                        {{ sales.delivery.physicalLocation.address }}<br>
                        {{ sales.delivery.physicalLocation.postalCode }} {{ sales.delivery.physicalLocation.city }} {{ sales.delivery.physicalLocation.state }}<br>
                        {{ sales.delivery.physicalLocation.country }}<br>
                        {% if sales.delivery.physicalLocation.phone|length %}{{ sales.delivery.physicalLocation.phone }}<br>{% endif %}
                        {% if sales.delivery.physicalLocation.email|length %}{{ sales.delivery.physicalLocation.email }}<br>{% endif %}
                        <br>
                        <div style="font-size: 13px; display: block; line-height: 13px;">
                          {{ languageSheet.pickupMessage }}
                        </div>
                      {% elseif sales.user.shippingAddress.id %}
                        {{ sales.user.shippingAddress.firstName }} {{ sales.user.shippingAddress.lastName }}<br>
                        {{ sales.user.shippingAddress.address }} {{ sales.user.shippingAddress.number }}<br>
                        {{ sales.user.shippingAddress.postalCode }} {{ sales.user.shippingAddress.city }} {{ sales.user.shippingAddress.state }}<br>
                        {{ sales.user.shippingAddress.country }}
                      {% else %}
                        {{ sales.user.billingAddress.firstName }} {{ sales.user.billingAddress.lastName }}<br>
                        {{ sales.user.billingAddress.address }} {{ sales.user.billingAddress.number }}<br>
                        {{ sales.user.billingAddress.postalCode }} {{ sales.user.billingAddress.city }} {{ sales.user.billingAddress.state }}<br>
                        {{ sales.user.billingAddress.country }}
                      {% endif %}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; color: #000; font-weight: bold;">
              {{ languageSheet.orderResume }}
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top; line-height: 20px;">
            <div>
              <table style="color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: top; border-top: 1px solid #ddd;" width="85%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  {% for item in sales.items %}
                    <tr>
                      <td style="text-align: left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding-left: 10px; padding-right: 10px; border-left: 1px solid #ddd; border-right: 1px solid #ddd; padding-top: 10px;">
                        <table style="color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: top; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 10px 10px; vertical-align: top;">
                              <img width="120" src="{{ item.image }}" alt="{{ item.name }}">
                            </td>
                            <td style="padding: 10px 10px;vertical-align: top;">
                              <div>
                                <a href="{{ item.link }}" title="{{ item.name }}" target="_blank" rel="noreferrer" style="text-decoration: none; display: block; line-height: 20px;">
                                  <span style="color: #000; text-decoration: none"><b>{{ item.name }}</b>{% if item.type == "GIFT" %} ({{ languageSheet.gift }}){% endif %}</span>
                                </a>
                              </div>
                              <br>
                              {% if item.options|length %}
                                <div style="font-size: 14px; line-height: 20px; color: #666;">
                                  {% for option in item.options %}
                                    <div>{{ option.name }}: {{ option.value }}</div>
                                  {% endfor %}
                                </div>
                                <br>
                              {% endif %}
                              <div style="font-size: 14px; line-height: 20px; color: #666;">
                                {{ languageSheet.quantity }} {{ item.quantity }}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  {% endfor %}
                </tbody>
              </table>

              <table align="center" cellpadding="0" cellspacing="0" width="85%" style="color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 15px; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align: middle; text-align: center; font-weight: bold; border-right: 1px solid #ddd; border-left: 1px solid #ddd; border-bottom: 1px solid #ddd; padding-bottom: 20px; padding-top: 10px;">
                    {{ languageSheet.total }} {{ sales.totals.total }}
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
        {% if sales.comment|length %}
          <tr>
            <td>
              <table width="85%" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #000; line-height: 20px; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <strong>{{ languageSheet.comment }}</strong><br>
                    {{ sales.comment }}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        {% endif %}

        {% if sales.reserve %}
          {# do nothing #}
        {% else %}
          {% if sales.paymentSystem.message|length %}
            <tr><td>&nbsp;</td></tr>
            <tr>
              <td bgColor="#f4f4f4">
                <table width="85%" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #000; line-height: 18px; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 15px 0px 15px 0px;">
                    {{ sales.paymentSystem.message }}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr><td>&nbsp;</td></tr>
          {% endif %}
        {% endif %}
      </tbody>
    </table>
  </td>
</tr>
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <span style="font-size: 15px;">
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    },

    11: {
      name: "Baja de newsletter",
      subject: "",
      html: ``,
    },

    12: {
      name: "Apadrinamiento",
      subject: "",
      html: ``,
    },

    13: {
      name: "Apadrinamiento completo",
      subject: "",
      html: ``,
    },

    14: {
      name: "Documento de RMA",
      subject: "{{ general.ecommerceName }} - Petición de devolución",
      html: `
{% set languageSheet = {
  premessage: 'Información de la petición de devolución',
  messageHeader: 'Hola ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
  messageBody1: 'Te informamos que hemos recibido tu petición de devolución.',
  messageBody2: 'Si tienes alguna duda sobre tu devolución o alguna otra cuestión, puedes ponerte en contacto con nosotros.',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}

<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    },

    15: {
      name: "Pedido incompleto",
      subject: "{{ general.ecommerceName }} - Pedido incompleto",
      html: `
{% set languageSheet = {
  premessage: "Información del pedido incompleto",
  messageHeader: 'Hola ' ~ abandonedCart.user.firstName ~ ' ' ~ abandonedCart.user.lastName ~ ',',
  messageBody1: 'En tu última visita a nuestra tienda, añadiste los siguientes productos al carro de la compra, pero no completaste el pedido.',
  messageBody2: 'Haz clic <a target="_blank" href="' ~ abandonedCart.link ~ '" style="color: #000;">aquí</a> si deseas recuperar tu pedido.',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    },

    16: {
      name: "Notificación transportista",
      subject: "",
      html: ``,
    },

    17: {
      name: "Verificación de correo",
      subject: "{{ general.ecommerceName }} - Verificación de correo",
      html: `
{% set languageSheet = {
  premessage: "Verificación de correo",
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Gracias por registrarte en ' ~ general.ecommerceUrl ~ '. Por favor activa tu cuenta clicando <a href="' ~ user.verifyAccountLink ~ '" style="color: #000;">aquí</a>.',
  messageBody2: "Esperamos verte pronto en " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br><br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    },

    18: {
      name: "Cuenta activada",
      subject: "{{ general.ecommerceName }} - Activación de cuenta",
      html: `
{% set languageSheet = {
  premessage: 'Activación de cuenta',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Te notificamos que tu cuenta en ' ~ general.ecommerceUrl ~ ' ha sido activada correctamente.',
  messageBody2: 'Para ver tus datos y toda la información referente a tu cuenta accede a través del panel de control: <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">Editar tu perfil</a>',
  messageBody3: "Esperamos verte pronto en " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    },

    19: {
      name: "Aviso a proveedores",
      subject: "",
      html: ``,
    },

    20: {
      name: "Stock disponible",
      subject: "{{ general.ecommerceName }} - Stock disponible",
      html: `
{% set languageSheet = {
  premessage: 'Stock disponible del producto <a href="' ~ data.product.productLink ~ '" style="color: #000;">' ~ data.product.name ~ '</a>',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "¡El artículo que tanto querías ya está disponible!",
  messageBody2: "Queremos recordarte que este email aporta información orientativa sobre la disponibilidad de este artículo y depende de muchos factores (personas interesadas, unidades disponibles).",
  messageBody3: "Hemos enviado este email a todos los clientes interesados en este artículo, por lo que es posible que se agote muy pronto.",
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    },

    22: {
      name: "Blog - Notificación de Nuevo Artículo",
      subject: "",
      html: ``,
    },

    23: {
      name: "Blog - Notificación de Nuevo Comentario",
      subject: "",
      html: ``,
    },

    24: {
      name: "Blog - Email de Bienvenida",
      subject: "",
      html: ``,
    },

    25: {
      name: "Confirmar suscripción de Stock",
      subject: "{{ general.ecommerceName }} - Subscripción de stock",
      html: `
{% set languageSheet = {
  premessage: 'Suscripción de stock del producto <a href="' ~ data.product.productLink ~ '" style="color: #000;">' ~ data.product.name ~ '</a>',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "Te has suscrito a los avisos de stock de " ~ data.product.name,
  messageBody2: "En caso de que volvamos a recibir este artículo te avisaremos de inmediato para que no se te escape.",
  messageSignature: 'Atentamente, el equipo de ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageSignature }}
    </span>
  </td>
</tr>`,
    },

    32: {
      name: "Documento de pedido",
      subject: "",
      html: ``,
    },

    33: {
      name: "Documento de albarán de entrega",
      subject: "",
      html: ``,
    },

    34: {
      name: "Documento de factura",
      subject: "",
      html: ``,
    },

    35: {
      name: "Documento de factura rectificativa",
      subject: "",
      html: ``,
    },

    36: {
      name: "Activación Two Factor Auth",
      subject: "",
      html: ``,
    },

    37: {
      name: "Desactivación Two Factor Auth",
      subject: "",
      html: ``,
    },

    38: {
      name: "Enviar código dispositivo Two Factor Auth",
      subject: "",
      html: ``,
    },

    39: {
      name: "Notificar Bloqueo de Dispositivo Two Factor Auth",
      subject: "",
      html: ``,
    },

    40: {
      name: "Documento de Devolución",
      subject: "",
      html: ``,
    },
  }, // end emails
};
