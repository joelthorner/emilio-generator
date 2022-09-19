// v4 file template
export const LANGUAGE_IT = {
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
  moreInfo: 'Per ulteriori informazioni, si prega di leggere la nostra <a href="' ~ general.privacyPolicyLink ~ '">informativa sulla privacy</a> y <a href="' ~ general.termsOfUseLink ~ '">condizioni d\\'uso</a>.'
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
      subject: "{{ general.ecommerceName }} - Grazie per la registrazione",
      html: `
{% set languageSheet = {
  premessage: 'Benvenuti a ' ~ general.ecommerceName ~ '!',
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Siamo lieti di confermare che il tuo account cliente su <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageBody2: "Grazie al tuo account cliente potrai aggiornare il tuo profilo e la tua password, consultare il tuo storico ordini ed altre informazioni utili.",
  messageBody3: "Ci auguriamo di vederti presto su  " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Cancellazione dell'utente",
      html: `
{% set languageSheet = {
  premessage: 'Conferma account eliminato',
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody: 'Come da te richiesto durante la tua ultima visita su ' ~ general.ecommerceName ~ ", ti confermiamo che l'account utente " ~ user.email ~ " è stato eliminato dal nostro database.",
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Ricorda la password",
      html: `
{% set languageSheet = {
  premessage: 'Ricorda la password',
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "Come da te richiesto durante la tua ultima visita su " ~ general.ecommerceName ~ ", ti inviamo il link di accesso alla sezione dedicata al recupero della password:",
  messageBody2: '<a href="' ~ user.lostPasswordLink ~ '" style="color:#000">Clicca qui per recuperare la password</a>',
  messageBody3: 'Questo link sar&agrave; attivo solamente per le 24 ore successive al suo invio.',
  messageBody4: "Ci auguriamo di vederti presto su  " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Cambio della password",
      html: `
{% set languageSheet = {
  premessage: 'Cambio della password',
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "Ti confermiamo che la tua password è stata modificata.",
  messageBody2: "Accertati di conservare le credenziali in un luogo sicuro per gli accessi futuri.",
  messageBody3: "Ci auguriamo di vederti presto su  " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - {{ wishlist.user.name }} raccomanda i suoi prodotti preferiti",
      html: `
{% set languageSheet = {
  premessage: 'Raccomandazione sui preferiti',
  messageHeader1: 'Ciao ' ~ wishlist.toName ~ ',',
  messageHeader2: "Il tuo amico/a " ~ wishlist.user.firstName ~ " " ~ wishlist.user.lastName ~ " (" ~ wishlist.user.email ~ ") ti invia questo prodotto a cui potresti essere interessato.",
  messageBody: 'Se desideri maggiori informazioni sul prodotto puoi contattarci su <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName,
  recommendedProducts: 'Prodotti raccomandati',
  product: 'Prodotto',
  price: 'Prezzo',
  comments: 'Messaggio del tuo amico:'
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader1 }}<br><br>
      {{ languageSheet.messageHeader2 }}<br><br>
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
      subject: "{{ general.ecommerceName }} - {{ recommend.name }} raccomanda un prodotto",
      html: `
{% set languageSheet = {
  premessage: 'Raccomandazione di prodotto',
  messageHeader1: "Il tuo amico/a " ~ recommend.name ~ " (" ~ recommend.email ~ ") ti invia questo prodotto a cui potresti essere interessato.",
  messageBody: 'Se desideri maggiori informazioni sul prodotto puoi contattarci su <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName,
  recommendedProducts: 'Prodotti raccomandati',
  product: 'Prodotto',
  price: 'Prezzo',
  comments: 'Messaggio del tuo amico:'
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
      subject: "{{ general.ecommerceName }} - Modulo di contatto",
      html: `
{% set languageSheet = {
  premessage: 'Modulo di contatto',
  name: 'Nome:',
  email: 'Email:',
  phone: 'Telefono:',
  motive: 'Motivo della richiesta:',
  comments: 'Messaggio:',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
  name: 'Nome:',
  email: 'Email:',
  phone: 'Telefono:',
  comments: 'Messaggio:',
  productName: 'Nome Prodotto:',
  productSku: 'Codice Prodotto:',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - {{ (sales.reserve) ? ('Ordine ricevuto') : ('Conferma d\\'ordine') }} {{ sales.documentNumber }}",
      html: `
{% set languageSheet = {
  premessage: 'Conferma d\\'ordine',
  premessageReserve: 'Ordine ricevuto',
  messageHeader: 'Grazie mille per averci dato fiducia. Il suo acquisto è stato elaborato correttamente. Potete trovare questo ordine nel file PDF allegato.',
  messageHeaderReserve: 'Grazie mille per averci dato fiducia. Abbiamo ricevuto il suo ordine, dato che abbiamo alcuni prodotti in ordine lo abbiamo in attesa di revisione.',
  messageBody1: 'Di seguito troverete i dettagli dell\\'ordine.',
  messageBody2: 'Grazie per aver fatto acquisti da <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName,
  orderNumber: 'Numero d\\'ordine:',
  orderDate: 'Data dell\\'ordine:',
  paymentSystem: 'Metodo di pagamento:',
  shippingName: 'Metodo di spedizione:',
  address: 'Indirizzo',
  addressBilling: 'Indirizzo di fatturazione',
  addressShipping: 'Indirizzo di spedizione',
  orderResume: 'Riassunto dell\\'ordine',
  quantity: 'Quantità:',
  product: 'Prodotto',
  gift: 'Regalo',
  total: 'Totale:',
  comment: 'Commenti:',
  pickup: 'Hai scelto la consegna in negozio',
  pickupMessage: 'Ti avviseremo via e-mail quando il tuo ordine sarà disponibile per il ritiro.'
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

            {% if sales.delivery.physicalLocation %}
              <strong>{{ languageSheet.pickup }}:</strong><br>
              <div style="font-size:13px; display:block;line-height:13px;margin-bottom: 5px;">
                {{ languageSheet.pickupMessage }}
              </div>
              {{ sales.delivery.physicalLocation.name }}<br>
              {{ sales.delivery.physicalLocation.address }}<br>
              {{ sales.delivery.physicalLocation.postalCode }} {{ sales.delivery.physicalLocation.city }} {{ sales.delivery.physicalLocation.state }}<br>
              {{ sales.delivery.physicalLocation.country }}<br>
              {% if sales.delivery.physicalLocation.phone|length %}{{ sales.delivery.physicalLocation.phone }}<br>{% endif %}
              {% if sales.delivery.physicalLocation.email|length %}{{ sales.delivery.physicalLocation.email }}<br>{% endif %}
            {% elseif sales.user.shippingAddress %}
              <strong>{{ languageSheet.addressShipping }}:</strong><br>
              {{ sales.user.shippingAddress.firstName }} {{ sales.user.shippingAddress.lastName }} <br>
              {{ sales.user.shippingAddress.address }} {{ sales.user.shippingAddress.number }}<br>
              {{ sales.user.shippingAddress.postalCode }} {{ sales.user.shippingAddress.city }} {{ sales.user.shippingAddress.state }}<br>
              {{ sales.user.shippingAddress.country }}
            {% else %}
              <strong>{{ languageSheet.addressShipping }}:</strong><br>
              {{ sales.user.billingAddress.firstName }} {{ sales.user.billingAddress.lastName }}<br>
              {{ sales.user.billingAddress.address }} {{ sales.user.billingAddress.number }} <br>
              {{ sales.user.billingAddress.postalCode }} {{ sales.user.billingAddress.city }} {{ sales.user.billingAddress.state }} <br>
              {{ sales.user.billingAddress.country }}
            {% endif %}
          </td>
        </tr>
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
            {% if item.type == 'BUNDLE' %}
              <tr>
                <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;">
                  <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;">
                    <tbody>
                      <tr>
                        <td style="padding: 10px 0px;">
                          <b>{{ item.name }}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;padding-right:8px;text-align:right;">
                  {{ item.quantity }}
                </td>
              </tr>
              {% for bundleItem in item.items %}
                <tr>
                  <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;{% if loop.last %}border-bottom:1px solid #dcdcdc;{% endif %}">
                    <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;">
                      <tbody>
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img src="{{ bundleItem.image }}" alt="{{ bundleItem.name }}" width="60">
                          </td>
                          <td style="padding: 10px 0px 0px 10px;">
                            <a href="{{ bundleItem.link }}" title="{{ bundleItem.name }}" target="_blank" rel="noreferrer" style="text-decoration:none;">
                              <span style="color: #454545; text-decoration: none">{{ bundleItem.name }}</b></span>
                            </a>
                            {% if bundleItem.options|length %}
                              <div style="font-size: 14px; line-height: 20px; color: #666;">
                                {% for option in bundleItem.options %}
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
                  <td style="text-align: center;padding-right:8px;text-align:right;{% if loop.last %}border-bottom:1px solid #dcdcdc;{% endif %}">
                    &nbsp;
                  </td>
                </tr>
              {% endfor %}
            {% else %}
              <tr>
                <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                  <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;">
                    <tbody>
                      <tr>
                        <td style="padding: 10px 0px;">
                          <img src="{{ item.image }}" alt="{{ item.name }}" width="60">
                        </td>
                        <td style="padding: 10px 0px 0px 10px;">
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
            {% endif %}
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
      subject: "",
      html: ``,
    },

    15: {
      name: "Pedido incompleto",
      subject: "{{ general.ecommerceName }} - Ordine incompleto",
      html: `
{% set languageSheet = {
  premessage: "Informazioni ordine incompleto",
  messageHeader: 'Ciao ' ~ abandonedCart.user.firstName ~ ' ' ~ abandonedCart.user.lastName ~ ',',
  messageBody1: 'Durante la tua ultima visita al nostro negozio, hai aggiunto al carrello i seguenti prodotti, ma non hai completato l\\'ordine.',
  messageBody2: 'Clicca <a target="_blank" href="' ~ abandonedCart.link ~ '" style="color: #000;">qui</a> se desideri recuperare il tuo ordine.',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Verifica dell\\'indirizzo e-mail",
      html: `
{% set languageSheet = {
  premessage: "Verifica dell'indirizzo e-mail",
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Grazie per esserti registrato su ' ~ general.ecommerceUrl ~ '. Per favore attiva il tuo account cliccando <a href="' ~ user.verifyAccountLink ~ '" style="color: #000;">qui</a>.',
  messageBody2: "Ci auguriamo di vederti presto su  " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Attivazione dell'account",
      html: `
{% set languageSheet = {
  premessage: "Attivazione dell'account",
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Ti informiamo che il tuo account su ' ~ general.ecommerceUrl ~ ' è stato attivato correttamente.',
  messageBody2: 'Per visualizzare i tuoi dati e tutte le informazioni relative al tuo account accedi tramite il pannello di controllo: <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">Modifica il tuo profilo</a>',
  messageBody3: "Ci auguriamo di vederti presto su  " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Stock disponibile",
      html: `
{% set languageSheet = {
  premessage: 'Disponibilit&agrave; del prodotto <a href="' ~ stockAlert.product.productLink ~ '" style="color: #000;">' ~ stockAlert.product.name ~ '</a>',
  messageHeader: 'Ciao ' ~ stockAlert.user.firstName ~ ' ' ~ stockAlert.user.lastName ~ ',',
  messageBody1: "L'articolo che tanto desideravi è ora disponibile!",
  messageBody2: "Ti ricordiamo che questo messaggio e-mail fornisce delle informazioni indicative riguardo alla disponibilit&agrave; dell'articolo e tale disponibilit&agrave; dipende da molti fattori (persone interessate, pezzi disponibili).",
  messageBody3: "Questo messaggio è stato inviato a tutti i clienti interessati a questo articolo, di conseguenza è possibile che molto presto non sia pi&ugrave; disponibile.",
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
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
      subject: "{{ general.ecommerceName }} - Iscrizione all'avviso di disponibilit&agrave;",
      html: `
{% set languageSheet = {
  premessage: 'Iscrizione all\\'avviso di disponibilit&agrave; del prodotto <br><a href="' ~ stockAlert.product.productLink ~ '" style="color: #000;">' ~ stockAlert.product.name ~ '</a>',
  messageHeader: 'Ciao ' ~ stockAlert.user.firstName ~ ' ' ~ stockAlert.user.lastName ~ ',',
  messageBody1: "Ti sei iscritto agli avvisi di disponibilit&agrave; del " ~ stockAlert.product.name,
  messageBody2: "Nel caso in cui questo articolo fosse nuovamente disponibile ti avviseremo immediatamente per fare in modo che non ti sfugga.",
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;background-color: #fff;" align="center">
    <table style="width: 100%; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 15px; border-collapse: collapse;">
      <tbody>
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
                            <img width="60" src="{{ stockAlert.product.images.smallImage }}" alt="{{ stockAlert.product.name }}" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            <a href="{{ stockAlert.product.productLink }}" title="{{ stockAlert.product.name }}" target="_blank" rel="noreferrer" style="text-decoration: none;"><span style="color: #454545; text-decoration: none;">{{ stockAlert.product.name }}</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: right; padding-right: 8px; border-bottom: 1px solid #dcdcdc;"><span><span>{{ stockAlert.product.price|number_format(2) }}{{ general.defaultCurrencyCode }}</span></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td style="text-align: center;">
            <br><br>
            {{ languageSheet.messageSignature }}
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
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
