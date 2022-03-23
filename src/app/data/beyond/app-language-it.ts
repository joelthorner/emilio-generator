// v4 file template
export const LANGUAGE_IT = {
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
                <a href="{{ general.ecommerceURL }}">
                  <img src="{{ general.imagesURL }}email-logo.png" width="210" height="auto" border="0" alt="{{ general.ecommerceName }}" style="height: auto;" />
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
    <span style="font-size:15px;">
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
    <span style="font-size:15px;">
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
      subject: "{{ general.ecommerceName }} - {{ recommend.name }} raccomanda i suoi prodotti preferiti",
      html: `
{% set languageSheet = {
  premessage: 'Raccomandazione sui preferiti',
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
    <span style="font-size:15px;">
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
    <span style="font-size:15px;">
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
{% if sales.reserve %}
  {% set languageSheet = {
    premessage: 'Ordine ricevuto',
    messageHeader: 'Ciao ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
    messageBody1: 'Abbiamo ricevuto il suo ordine, dato che abbiamo alcuni prodotti in ordine lo abbiamo in attesa di revisione.',
    messageBody2: 'Se tutto è corretto, riceverai un\\'e-mail di conferma automatica.',
    messageBody3: 'Se abbiamo delle domande vi contatteremo.',
    messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
  } %}
{% else %}
  {% set languageSheet = {
    premessage: 'Conferma d\\'ordine',
    messageHeader: 'Ciao ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
    messageBody1: 'Confermiamo che il suo ordine è stato elaborato correttamente.',
    messageBody2: "Potete trovare questo ordine nel file PDF allegato.",
    messageBody3: 'Grazie per aver fatto acquisti da <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
    messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
  } %}
{% endif %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size:15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {% if sales.reserve %}
        {# do nothing #}
      {% else %}
        {% if sales.paymentSystem.message|length %}
          {{ sales.paymentSystem.message }}<br><br>
        {% endif %}
      {% endif %}
      {{ languageSheet.messageBody3 }}<br><br>
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
    <span style="font-size:15px;">
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
    <span style="font-size:15px;">
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
    <span style="font-size:15px;">
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
  premessage: 'Disponibilit&agrave; del prodotto <a href="' ~ data.product.productLink ~ '" style="color: #000;">' ~ data.product.name ~ '</a>',
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "L'articolo che tanto desideravi è ora disponibile!",
  messageBody2: "Ti ricordiamo che questo messaggio e-mail fornisce delle informazioni indicative riguardo alla disponibilit&agrave; dell'articolo e tale disponibilit&agrave; dipende da molti fattori (persone interessate, pezzi disponibili).",
  messageBody3: "Questo messaggio è stato inviato a tutti i clienti interessati a questo articolo, di conseguenza è possibile che molto presto non sia pi&ugrave; disponibile.",
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size:15px;">
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
  premessage: 'Iscrizione all\\'avviso di disponibilit&agrave; del prodotto <a href="' ~ data.product.productLink ~ '" style="color: #000;">' ~ data.product.name ~ '</a>',
  messageHeader: 'Ciao ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "Ti sei iscritto agli avvisi di disponibilit&agrave; del " ~ data.product.name,
  messageBody2: "Nel caso in cui questo articolo fosse nuovamente disponibile ti avviseremo immediatamente per fare in modo che non ti sfugga.",
  messageSignature: 'Cordiali saluti, il team di ' ~ general.ecommerceName
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size:15px;">
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
