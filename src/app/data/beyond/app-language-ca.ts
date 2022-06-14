// v4 file template
export const LANGUAGE_CA = {
  header: {
    html: `
<table width="100%" bgcolor="#ebedef" border="0" cellpadding="0" cellspacing="0" style="padding:25px; color:#0C1C3E; background-color: #ebedef;text-align:center;">
  <tr>
    <td>
      <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
      <![endif]-->
      <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%;max-width: 600px;font-family: Arial;text-align:center;color:#0C1C3E;">
        <tr>
          <td bgcolor="#fff" style="padding: 20px;padding-bottom:10px;color:#0C1C3E;">
            <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="text-align:center;">
              <tr>
                <td >
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
  moreInfo: 'Per més informació, llegeixi la nostra <a href="' ~ general.privacyPolicyLink ~ '">política de privacitat</a> i les <a href="' ~ general.termsOfUseLink ~ '">condicions d\\'ús</a>.'
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
                    <td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #454545;padding: 10px 0;">{{ page.content }}</td>
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
    <td align="left" style="font-family: sans-serif; font-size: 14px; color: #ffffff;">
      <span style="color: #000; font-size: 10px;">&nbsp;</span>
    </td>
  </tr>
</table>`,
  },

  templates: {
    1: {
      name: "Bienvenida",
      subject: "{{ general.ecommerceName }} - Gràcies per donar-te d'alta",
      html: `
{% set languageSheet = {
  premessage: 'Benvingut/da a ' ~ general.ecommerceName ~ '!',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Ens complau confirmar-te la creació del teu compte de client a <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageBody2: 'Gràcies al teu compte de client podràs actualitzar el teu perfil i contrasenya, consultar el teu historial de comandes i altra informació del teu interès.',
  messageBody3: "Esperem veure't aviat a " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Baixa d'usuari",
      html: `
{% set languageSheet = {
  premessage: 'Confirmació de compte eliminat',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody: 'Tal i com ens has sol·licitat al web ' ~ general.ecommerceName ~ ", confirmem que el teu compte d'usuari " ~ user.email ~ " ha estat eliminat de la nostra base de dades.",
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Recordar contrasenya",
      html: `
{% set languageSheet = {
  premessage: 'Recordar contrasenya',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "D'acord a la sol·licitud durant la teva recent visita a " ~ general.ecommerceName ~ ", aquí tens la teva direcció d'accés a la zona de recuperació de contrasenya:",
  messageBody2: '<a href="' ~ user.lostPasswordLink ~ '" style="color:#000">Fes clic aquí per recuperar la teva contrasenya</a>',
  messageBody3: 'Aquest enllaç només serà vàlid durant les 24 hores següents al moment del seu enviament.',
  messageBody4: "Esperem veure't aviat a " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Canvi de contrasenya",
      html: `
{% set languageSheet = {
  premessage: 'Canvi de contrasenya',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Et confirmem que la teva contrasenya ha sigut modificada.',
  messageBody2: "Assegura't d'anotar les teves credencials en un lloc segur per futures referències.",
  messageBody3: "Esperem veure't aviat a " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - {{ wishlist.user.name }} et recomana els seus productes favorits",
      html: `
{% set languageSheet = {
  premessage: 'Recomanació de favorits',
  messageHeader1: "El teu amic/ga " ~ wishlist.user.name ~ " (" ~ wishlist.user.email ~ ") t'envia aquests productes que poden resultar del teu interès.",
  messageBody: 'Si necessites més informació sobre aquests productes pots contactar amb nosaltres a <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName,
  recommendedProducts: 'Productes recomanats',
  product: 'Producte',
  price: 'Preu',
  comments: 'Missatge del teu amic/ga:'
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
                  {% for item in wishlist.products %}
                  <tr>
                    <td style="text-align: left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; border-bottom: 1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="{{ item.images.smallImage }}" alt="{{ item.name }}" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            {{ item.sku }} - <a href="{{ item.productLink }}" title="{{ item.name }}" target="_blank" rel="noreferrer" style="text-decoration: none;"><span style="color: #454545; text-decoration: none;">{{ item.name }}</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: right; padding-right: 8px; border-bottom: 1px solid #dcdcdc;"><span><span>
                      {{ item.price|number_format(2) }}{{ general.defaultCurrencyCode }}
                    </span></span></td>
                  </tr>
                  {% endfor %}
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
                  {{ wishlist.comments }}
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
      subject: "{{ general.ecommerceName }} - {{ recommend.name }} et recomana un producte",
      html: `
{% set languageSheet = {
  premessage: 'Recomanació de producte',
  messageHeader1: "El teu amic/ga " ~ recommend.name ~ " (" ~ recommend.email ~ ") t'envia aquest producte que pot resultar del teu interès.",
  messageBody: 'Si necessites més informació sobre aquest producte pots contactar amb nosaltres a <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName,
  recommendedProducts: 'Productes recomanats',
  product: 'Producte',
  price: 'Preu',
  comments: 'Missatge del teu amic/ga:'
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
      subject: "{{ general.ecommerceName }} - Formulari de contacte",
      html: `
{% set languageSheet = {
  premessage: 'Formulari de contacte',
  name: 'Nom:',
  email: 'Email:',
  phone: 'Telèfon:',
  motive: 'Motiu de consulta:',
  comments: 'Missatge:',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Consulta sobre producte",
      html: `
{% set languageSheet = {
  premessage: 'Consulta sobre producte',
  name: 'Nom:',
  email: 'Email:',
  phone: 'Telèfon:',
  comments: 'Missatge:',
  productName: 'Nom del producte:',
  productSku: 'Referència del producte:',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - {{ (sales.reserve) ? ('Comanda rebuda') : ('Confirmació de comanda') }} {{ sales.documentNumber }}",
      html: `
{% set languageSheet = {
  premessage: 'Confirmació de comanda',
  premessageReserve: 'Comanda rebuda',
  messageHeader: 'Moltes gràcies per confiar en nosaltres. La vostra compra s\\'ha processat correctament. Podeu trobar aquesta comanda al fitxer PDF adjunt.',
  messageHeaderReserve: 'Moltes gràcies per confiar en nosaltres. Hem rebut la vostra comanda, al tenir un producte per encàrrec, la tenim pendent de revisió.',
  messageBody1: 'A continuació, us mostrem les dades de la comanda.',
  messageBody2: 'Gràcies per comprar <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName,
  orderNumber: 'Número de comanda:',
  orderDate: 'Data de la comanda:',
  paymentSystem: 'Mètode de pagament:',
  shippingName: 'Mètode d\\'enviament:',
  address: 'Direcció',
  addressBilling: 'Adreça de facturació',
  addressShipping: 'Adreça d\\'enviament',
  orderResume: 'Resum de la comanda',
  quantity: 'Quantitat:',
  product: 'Producte',
  gift: 'Regal',
  total: 'Total:',
  comment: 'Comentaris:',
  pickup: 'Heu triat el lliurament a la botiga',
  pickupMessage: 'Us notificarem per correu quan la vostra comanda estigui disponible per recollir -la.'
} %}
<tr>
  <td style="vertical-align: middle;font-family: sans-serif; padding: 20px" align="center">
    <strong>{% if sales.reserve %}{{ languageSheet.premessageReserve }}{% else %}{{ languageSheet.premessage }}{% endif %}</strong><br><br>
    <span style="font-size: 15px;">
      {% if sales.reserve %}{{ languageSheet.messageHeaderReserve }}{% else %}{{ languageSheet.messageHeader }}{% endif %}<br><br>
      {{ languageSheet.messageBody1 }}<br><br>
    </span>
  </td>
</tr>
<tr>
  <td style="vertical-align: middle;font-family: sans-serif;" align="right">
    <table style="border-collapse:collapse;" width="100%" cellspacing="0" cellpadding="0" align="right">
      <tbody>
        <tr>
          <td style="vertical-align: middle;background:#e2e6eb;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" width="30%">
            {{ languageSheet.orderNumber }}<br>
            {{ languageSheet.orderDate }}<br>
            {{ languageSheet.paymentSystem }}<br>
            {{ languageSheet.shippingName }}<br>
          </td>
          <td style="vertical-align: middle; background:#e2e6eb;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" width="80%">
            <strong>{{ sales.documentNumber }}</strong><br>
            <strong>{{ sales.date }}</strong><br>
            <strong>{{ sales.paymentSystem.name }}</strong><br>
            <strong>{% for shipment in sales.delivery.shipments %}{{ shipment.shipping.name }} {{ shipment.shipping.shippingTypeName }}{% endfor %}</strong><br>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<tr>
  <td style="vertical-align: middle;font-family: sans-serif;" align="right">
    <table style="border-collapse:collapse;" width="100%" cellspacing="0" cellpadding="0" align="right">
      <tbody>
        <tr>
          <td style="vertical-align: middle;background:#e2e6eb;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left: 40px;" width="50%">
            {% if sales.user.billingAddress %}
              <strong>{{ languageSheet.addressBilling }}:</strong><br>
              {{ sales.user.billingAddress.firstName }} {{ sales.user.billingAddress.lastName }}<br>
              {{ sales.user.billingAddress.address }} {{ sales.user.billingAddress.number }} <br>
              {{ sales.user.billingAddress.postalCode }} {{ sales.user.billingAddress.city }} {{ sales.user.billingAddress.state }} <br>
              {{ sales.user.billingAddress.country }}
            {% endif %}
          </td>
          <td style="vertical-align: middle; background:#e2e6eb;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right: 40px;" width="50%">
            <strong>{{ languageSheet.addressShipping }}:</strong><br>
            {% if sales.user.shippingAddress %}
              {{ sales.user.shippingAddress.firstName }} {{ sales.user.shippingAddress.lastName }} <br>
              {{ sales.user.shippingAddress.address }} {{ sales.user.shippingAddress.number }}<br>
              {{ sales.user.shippingAddress.postalCode }} {{ sales.user.shippingAddress.city }} {{ sales.user.shippingAddress.state }}<br>
              {{ sales.user.shippingAddress.country }}
            {% else %}
              {{ sales.user.billingAddress.firstName }} {{ sales.user.billingAddress.lastName }}<br>
              {{ sales.user.billingAddress.address }} {{ sales.user.billingAddress.number }} <br>
              {{ sales.user.billingAddress.postalCode }} {{ sales.user.billingAddress.city }} {{ sales.user.billingAddress.state }} <br>
              {{ sales.user.billingAddress.country }}
            {% endif %}
          </td>
        </tr>
        <!-- warehouse -->
        {% if sales.delivery.physicalLocation %}
          <tr>
            <td style="vertical-align: middle; background:#fff;padding:15px 20px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545; border-bottom: 2px solid #e8e8e8;padding-left: 40px;" width="50%">
              <strong>{{ languageSheet.pickup }}:</strong><br><br>
              <div style="font-size:13px; display:block;line-height:13px;">
                {{ languageSheet.pickupMessage }}
              </div>
            </td>
            <td style="vertical-align: middle; background:#fff;padding:15px 20px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545; border-bottom: 2px solid #e8e8e8;padding-right: 40px;" width="50%">
              {{ sales.delivery.physicalLocation.name }}<br>
              {{ sales.delivery.physicalLocation.address }}<br>
              {{ sales.delivery.physicalLocation.postalCode }} {{ sales.delivery.physicalLocation.city }} {{ sales.delivery.physicalLocation.state }}<br>
              {{ sales.delivery.physicalLocation.country }}<br>
              {% if sales.delivery.physicalLocation.phone|length %}{{ sales.delivery.physicalLocation.phone }}<br>{% endif %}
              {% if sales.delivery.physicalLocation.email|length %}{{ sales.delivery.physicalLocation.email }}<br>{% endif %}
            </td>
          </tr>
        {% endif %}
        <!-- endwarehouse -->
      </tbody>
    </table>
  </td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr><td>&nbsp;</td></tr>
<tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">{{ languageSheet.orderResume }}</span></td></tr>
<tr><td>&nbsp;</td></tr>
<tr>
  <td style="vertical-align: top">
    <div style="padding: 0 0;">
      <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellspacing="0" cellpadding="0" align="center">
        <tbody>
          <tr>
            <td style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" width="60%" height="32" bgcolor="#F4F4F4">
              {{ languageSheet.product }}
            </td>
            <td style="color:#454545;text-align: center;padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;text-align:right;" width="20%" height="32" bgcolor="#F4F4F4">
              {{ languageSheet.quantity }}
            </td>
          </tr>
          {% for item in sales.items %}
            <tr>
              <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;">
                  <tbody>
                    <tr>
                      <td style="padding: 10px 0px;">
                        <img src="{{ item.image }}" alt="{{ item.name }}" width="60">
                      </td>
                      <td style="padding: 10px 0px;">
                        <a href="{{ item.link }}" title="{{ item.name }}" target="_blank" rel="noreferrer" style="text-decoration:none;">
                          <span style="color: #454545; text-decoration: none">{{ item.name }}</b>{% if item.type == "GIFT" %} ({{ languageSheet.gift }}){% endif %}</span>
                        </a>
                        {% if item.options|length %}
                          <div style="font-size: 14px; line-height: 20px; color: #666;">
                            {% for option in item.options %}
                              <div>{{ option.name }}: {{ option.value }}</div>
                            {% endfor %}
                          </div>
                          <br>
                        {% endif %}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style="text-align: center;padding-right:8px;border-bottom:1px solid #dcdcdc;text-align:right;">
                {{ item.quantity }}
              </td>
            </tr>
          {% endfor %}
        </tbody>
      </table>
      <table style="color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;" width="88%" cellspacing="0" cellpadding="0" align="center">
        <tbody>
          <tr>
            <td style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;" width="120" height="32" bgcolor="#f4f4f4">
              {{ languageSheet.total }}
            </td>
            <td style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;" width="75" height="32" bgcolor="#f4f4f4">
              <span>{{ sales.totals.totalWithDiscountsWithTaxes }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </td>
</tr>
<tr><td>&nbsp;</td></tr>

{% if sales.reserve %}
  {# do nothing #}
{% else %}
  {% if sales.paymentSystem.message|length %}
    <tr>
      <td>
        <table style="font-family:Arial, Helvetica, sans-serif;font-size:15px;color:#000;line-height:22px;" width="88%" align="center">
          <tbody><tr>
            <td>
              {{ sales.paymentSystem.message }}
            <br><br></td>
          </tr>
        </tbody></table>
      </td>
    </tr>
  {% endif %}
{% endif %}

<tr><td>&nbsp;</td></tr>
<tr>
  <td>
    <table style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;" width="88%" align="center">
      <tbody>
        <tr>
          <td>
            {% if sales.comment|length %}
              <p style="font-size: 14px; line-height: 22px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin: 1em 0;">
                <strong>{{ languageSheet.comment }}</strong><br>{{ sales.comment }}<br><br>
              </p>
            {% endif %}
            <div style="font-size: 14px; line-height: 22px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin: 1em 0;">
              {{ languageSheet.messageBody2 }}<br>{{ languageSheet.messageSignature }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<tr><td>&nbsp;</td></tr>`,
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
      subject: "{{ general.ecommerceName }} - Petició de devolució",
      html: `
{% set languageSheet = {
  premessage: 'Informació de la petició de devolució',
  messageHeader: 'Hola ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
  messageBody1: 'T\\'informem que hem rebut la teva petició de devolució.',
  messageBody2: 'Si tens algun dubte sobre la teva devolució o algun altre qüestió, pots posar-te en contacte amb nosaltres.',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Comanda no completada",
      html: `
{% set languageSheet = {
  premessage: "Informació de la comanda no completada",
  messageHeader: 'Hola ' ~ abandonedCart.user.firstName ~ ' ' ~ abandonedCart.user.lastName ~ ',',
  messageBody1: 'A la teva ultima visita a la nostra botiga, vas afegir els següents productes a la cistella de la compra, però no has completat la comanda.',
  messageBody2: 'Fes clic <a target="_blank" href="' ~ abandonedCart.link ~ '" style="color: #000;">aquí</a> si desitges recuperar la teva comanda.',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Verificació de correu",
      html: `
{% set languageSheet = {
  premessage: "Verificació de correu",
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Gràcies per registrar-te a ' ~ general.ecommerceUrl ~ '. Si us plau, activa el teu compte fent clic <a href="' ~ user.verifyAccountLink ~ '" style="color: #000;">aquí</a>.',
  messageBody2: "Esperem veure't aviat a " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Activació del compte",
      html: `
{% set languageSheet = {
  premessage: 'Activació del compte',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Et notifiquem que el teu compte a ' ~ general.ecommerceUrl ~ ' ha sigut activat correctament.',
  messageBody2: 'Per veure les teves dades i tota la informació referent al teu compte accedeix a través del panell de control: <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">Editar el teu perfil</a>',
  messageBody3: "Esperem veure't aviat a " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Estoc disponible",
      html: `
{% set languageSheet = {
  premessage: 'Estoc disponible del producte <a href="' ~ stockAlert.product.productLink ~ '" style="color: #000;">' ~ stockAlert.product.name ~ '</a>',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "L'article que tant volíes ja està disponible!",
  messageBody2: "Volem recordar-te que aquest email aporta informació orientativa sobre la disponibilitat d'aquest artícle i depen de molts factors (persones interesades, unitats disponibles).",
  messageBody3: "Hem enviat aquest email a tots els clients interessats en l'artícle, per tant es posible que s'esgoti molt aviat.",
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Subscripció de estoc",
      html: `
{% set languageSheet = {
  premessage: 'Subscripció de estoc del producte <a href="' ~ stockAlert.product.productLink ~ '" style="color: #000;">' ~ stockAlert.product.name ~ '</a>',
  messageHeader: 'Hola ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "T'has subscrit als avisos de stock de " ~ stockAlert.product.name,
  messageBody2: "En cas de que tornem a rebre aquest artícle t'avisarem d'inmediat per a que no se t'escapi.",
  messageSignature: 'Atentament, l\\'equip de ' ~ general.ecommerceName
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
