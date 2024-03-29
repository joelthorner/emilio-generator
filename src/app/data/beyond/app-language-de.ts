// v4 file template
export const LANGUAGE_DE = {
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
  moreInfo: "Für weitere Informationen lesen Sie bitte unsere <a href='{{privacyPolicyLink}}'>Datenschutzbestimmungen</a> y <a href='{{termsOfUseLink}}'>Benutzungsbedingungen</a>."
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
                  {{ replace(languageSheet.moreInfo, { '{{privacyPolicyLink}}': general.privacyPolicyLink, '{{termsOfUseLink}}': general.termsOfUseLink }) }}
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
      name: `Bienvenida`,
      subject: `{{ general.ecommerceName }} - Vielen Dank für Ihre Anmeldung`,
      html: `
{% set languageSheet = {
  premessage: "Willkommen bei {{ecommerceName}}",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Wir freuen uns, Ihnen die Einrichtung Ihres Kundenkontos bei <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>",
  messageBody2: "Dank Ihres Kundenkontos können Sie Ihr Profil und Ihr Passwort aktualisieren, Ihre Bestellhistorie einsehen und andere Informationen, die Sie interessieren, abrufen.",
  messageBody3: "Wir hoffen, dass wir Sie bald in <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ replace(languageSheet.premessage, { '{{ecommerceName}}': general.ecommerceName }) }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ replace(languageSheet.messageBody3, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    }, // end 1

    2: {
      name: `Baja de usuarios`,
      subject: `{{ general.ecommerceName }} - Abmeldung eines Benutzers`,
      html: `
{% set languageSheet = {
  premessage: "Bestätigung des gelöschten Kontos",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody: "Wie bei Ihrem jüngsten Besuch bei {{ecommerceName}}, wir bestätigen, dass Ihr Benutzerkonto {{userEmail}} wurde aus unserer Datenbank entfernt.",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ replace(languageSheet.messageBody, { '{{ecommerceName}}': general.ecommerceName, '{{userEmail}}': user.email }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    }, // end 2

    3: {
      name: `Recordarios de contraseña`,
      subject: `{{ general.ecommerceName }} - Passwort merken`,
      html: `
{% set languageSheet = {
  premessage: "Passwort merken",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Wie bei Ihrem jüngsten Besuch bei {{ecommerceName}}, hier ist Ihre Zugangsadresse zum Bereich für die Passwortwiederherstellung:",
  messageBody2: "<a href='{{lostPasswordLink}}' style='color:#000'>Klicken Sie hier, um das Passwort wiederherzustellen</a>",
  messageBody3: "Dieser Link ist nur für 24 Stunden ab dem Zeitpunkt der Übermittlung gültig.",
  messageBody4: "Wir hoffen, dass wir Sie bald in <a href='{{ecommerceUrl}}' style='color:#000'>{{ecommerceName}}</a>.",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{ecommerceName}}': general.ecommerceName }) }}<br>
      {{ replace(languageSheet.messageBody2, { '{{lostPasswordLink}}': user.lostPasswordLink }) }}<br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ replace(languageSheet.messageBody4, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    }, // end 3

    4: {
      name: `Cambio de contraseña`,
      subject: `{{ general.ecommerceName }} - Änderung des Passworts`,
      html: `
{% set languageSheet = {
  premessage: "Änderung des Passworts",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Wir bestätigen, dass Ihr Passwort geändert worden ist.",
  messageBody2: "Notieren Sie sich Ihre Anmeldedaten an einem sicheren Ort, damit Sie sie bei Bedarf nachlesen können.",
  messageBody3: "Wir hoffen, dass wir Sie bald in <a href='{{ecommerceUrl}}' style='color:#000'>{{ecommerceName}}</a>.",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ replace(languageSheet.messageBody3, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    }, // end 4

    5: {
      name: `Registro de newsletter`,
      subject: ``,
      html: ``,
    }, // end 5

    6: {
      name: `Recomendación de wishlist`,
      subject: `{{ general.ecommerceName }} - {{ wishlist.user.name }} er empfiehlt seine Lieblingsprodukte`,
      html: `
{% set languageSheet = {
  premessage: "Empfehlung für Favoriten",
  messageHeader1: "Hallo {{toName}},",
  messageHeader2: "Ihr Freund {{firstName}} {{lastName}} ({{email}}) schickt Ihnen diese Produkte, die für Sie von Interesse sein könnten.",
  messageBody: "Wenn Sie weitere Informationen über dieses Produkt benötigen, können Sie uns kontaktieren unter <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>",
  messageSignature: 'Mit freundlichen Grüßen, das Team von {{ecommerceName}}',
  recommendedProducts: 'Empfohlene Produkte',
  product: 'Produkt',
  price: 'Preis',
  comments: 'Nachricht von deinem Freund:'
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader1, { '{{toName}}': wishlist.toName }) }}<br><br>
      {{ replace(languageSheet.messageHeader2, { '{{firstName}}': wishlist.user.firstName, '{{lastName}}': wishlist.user.lastName, '{{email}}': wishlist.user.email }) }}<br><br>
      {{ replace(languageSheet.messageBody, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}<br><br>
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
      name: `Recomendación de producto`,
      subject: `{{ general.ecommerceName }} - {{ recommend.name }} empfiehlt ein Produkt`,
      html: `
{% set languageSheet = {
  premessage: "Empfehlung des Produkts",
  messageHeader1: "Ihr Freund {{name}} ({{email}}) schickt Ihnen dieses Produkt, das Sie interessieren könnte.",
  messageBody: "Wenn Sie weitere Informationen über dieses Produkt benötigen, können Sie uns kontaktieren unter <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}",
  recommendedProducts: "Empfohlene Produkte",
  product: "Produkt",
  price: "Preis",
  comments: "Nachricht von deinem Freund:"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader1, { '{{name}}': recommend.name, '{{email}}': recommend.email }) }}<br><br>
      {{ replace(languageSheet.messageBody, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}<br><br>
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
      name: `Contacto general`,
      subject: `{{ general.ecommerceName }} - Kontakt-Formular`,
      html: `
{% set languageSheet = {
  premessage: "Kontakt-Formular",
  name: "Name:",
  email: "E-Mail:",
  phone: "Telefon:",
  motive: "Grund für die Konsultation:",
  comments: "Nachricht:",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
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
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    }, // end 8

    9: {
      name: `Consulta de producto`,
      subject: `{{ general.ecommerceName }} - Produkt-Anfrage`,
      html: `
{% set languageSheet = {
  premessage: "Produkt-Anfrage",
  name: "Name:",
  email: "E-Mail:",
  phone: "Telefon:",
  comments: "Nachricht:",
  productName: "Name des Produkts:",
  productSku: "Produktbezeichnung:",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
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
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    }, // end 9

    10: {
      name: `Confirmación de pedido`,
      subject: `{{ general.ecommerceName }} - {{ (sales.reserve) ? ('Bestellung erhalten') : ('Bestätigung der Bestellung') }} {{ sales.documentNumber }}`,
      html: `
{% set languageSheet = {
  premessage: "Bestätigung der Bestellung",
  premessageReserve: "Bestellung erhalten",
  messageHeader: "Vielen Dank, dass Sie uns Ihr Vertrauen geschenkt haben. Ihr Kauf wurde korrekt abgewickelt. Diesen Auftrag finden Sie in der beigefügten PDF-Datei.",
  messageHeaderReserve: "Vielen Dank, dass Sie uns Ihr Vertrauen geschenkt haben. Wir haben Ihre Bestellung erhalten, da wir einige Produkte auf Bestellung haben, die wir noch überprüfen müssen.",
  messageBody1: "Nachstehend finden Sie die Einzelheiten der Bestellung.",
  messageBody2: "Vielen Dank für Ihren Einkauf bei <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}",
  orderNumber: "Bestellnummer:",
  orderDate: "Datum der Bestellung:",
  paymentSystem: "Art der Bezahlung:",
  shippingName: "Versandart:",
  address: "Adresse",
  addressBilling: "Factuuradres",
  addressShipping: "Verzendadres",
  orderResume: "Zusammenfassung der Bestellung",
  quantity: "Menge:",
  product: "Product",
  gift: "Geschenk",
  total: "Insgesamt:",
  comment: "Kommentare:",
  pickup: "Sie haben Shop-Lieferung gewählt",
  pickupMessage: "Wir werden Sie per E-Mail benachrichtigen, wenn Ihre Bestellung zur Abholung bereitsteht.",
  rewardPoints: "Sie erhalten eine Summe von {{ecommerceName}} bei Ihrem nächsten Einkauf {{value}}"
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
                              <span style="color: #454545; text-decoration: none"><b>{{ bundleItem.name }}</b></span>
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
                            <span style="color: #454545; text-decoration: none"><b>{{ item.name }}</b>{% if item.type == "GIFT" %} ({{ languageSheet.gift }}){% endif %}</span>
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
            {% if sales.rewardPoints|length %}
              {% for rewardPoint in sales.rewardPoints %}
                <div style="padding: 10px 12px;border: 1px solid #dee2e6;">
                  <p style="font-size: 14px; line-height: 22px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin: 1em 0;">
                    <strong>{{ rewardPoint.language.name }}</strong><br>
                    {{ replace(languageSheet.rewardPoints, { '{{ecommerceName}}': rewardPoint.language.name, '{{value}}': rewardPoint.summary.totalEarned }) }}<br><br>
                  </p>
                </div>
              {% endfor %}
            {% endif %}
            <div style="font-size: 14px; line-height: 22px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin: 1em 0;">
              {{ replace(languageSheet.messageBody2, { '{{ecommerceUrl}}': general.ecommerceUrl, '{{ecommerceName}}': general.ecommerceName }) }}<br>{{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
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
      name: `Baja de newsletter`,
      subject: ``,
      html: ``,
    },

    12: {
      name: `Apadrinamiento`,
      subject: ``,
      html: ``,
    },

    13: {
      name: `Apadrinamiento completo`,
      subject: ``,
      html: ``,
    },

    14: {
      name: `Documento de RMA`,
      subject: `{{ general.ecommerceName }} - Antrag auf Rückgabe`,
      html: `
{% set languageSheet = {
  premessage: "Informationen über den Rückgabeantrag",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Bitte beachten Sie, dass wir Ihren Antrag auf Rückerstattung erhalten haben der Bestellung {{documentNumber}}.",
  messageBody2: "Wenn Sie Fragen zu Ihrer Rücksendung oder einem anderen Problem haben, können Sie uns kontaktieren.",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}

<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ languageSheet.messageHeader }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{documentNumber}}': first(sales.documentParents).documentNumber }) }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    },

    15: {
      name: `Pedido incompleto`,
      subject: `{{ general.ecommerceName }} - Unvollständige Bestellung`,
      html: `
{% set languageSheet = {
  premessage: "Unvollständige Bestellinformationen",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Bei Ihrem letzten Besuch in unserem Shop haben Sie die folgenden Produkte in den Warenkorb gelegt, aber Ihre Bestellung nicht abgeschlossen.",
  messageBody2: "Klicken Sie hier <a target='_blank' href='{{link}}' style='color: #000;'>hier</a> wenn Sie Ihre Bestellung abrufen möchten.",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': abandonedCart.basketUser.user.defaultBillingAddress.firstName, '{{lastName}}': abandonedCart.basketUser.user.defaultBillingAddress.lastName }) }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ replace(languageSheet.messageBody2, { '{{link}}': abandonedCart.link }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    },

    16: {
      name: `Notificación transportista`,
      subject: ``,
      html: ``,
    },

    17: {
      name: `Verificación de correo`,
      subject: `{{ general.ecommerceName }} - Überprüfung per E-Mail`,
      html: `
{% set languageSheet = {
  premessage: "Überprüfung per E-Mail",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Vielen Dank für Ihre Anmeldung bei {{ecommerceUrl}}. Bitte aktivieren Sie Ihr Konto, indem Sie auf <a href='{{verifyAccountLink}}' style='color: #000;'>hier</a>.",
  messageBody2: "Wir hoffen, dass wir Sie bald in <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{ecommerceUrl}}': general.ecommerceUrl, '{{verifyAccountLink}}': user.verifyAccountLink }) }}<br><br>
      {{ replace(languageSheet.messageBody2, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    },

    18: {
      name: `Cuenta activada`,
      subject: `{{ general.ecommerceName }} - Aktivierung des Kontos`,
      html: `
{% set languageSheet = {
  premessage: "Aktivierung des Kontos",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Wir benachrichtigen Sie, dass Ihr Konto in {{ecommerceUrl}} korrekt aktiviert wurde.",
  messageBody2: "Um Ihre Daten und alle Informationen über Ihr Konto einzusehen, loggen Sie sich über das Bedienfeld ein: <a href='{{ecommerceUrl}}' style='color: #000;'>Ihr Profil bearbeiten</a>",
  messageBody3: "Wir hoffen, dass wir Sie bald in <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br>
      {{ replace(languageSheet.messageBody2, { '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    },

    19: {
      name: `Aviso a proveedores`,
      subject: ``,
      html: ``,
    },

    20: {
      name: `Stock disponible`,
      subject: `{{ general.ecommerceName }} - Vorrat an Waren`,
      html: `
{% set languageSheet = {
  premessage: "Produkt auf Lager <a href='{{productLink}}' style='color: #000;'>{{name}}</a>",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Der Artikel, den Sie sich so sehr gewünscht haben, ist jetzt verfügbar!",
  messageBody2: "Wir möchten Sie daran erinnern, dass diese E-Mail eine unverbindliche Information über die Verfügbarkeit dieses Artikels enthält und von vielen Faktoren abhängt (Interessenten, verfügbare Einheiten).",
  messageBody3: "Wir haben diese E-Mail an alle Kunden geschickt, die an diesem Artikel interessiert sind, so dass er sehr bald ausverkauft sein könnte.",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ replace(languageSheet.premessage, { '{{productLink}}': stockAlert.product.productLink, '{{name}}': stockAlert.product.name }) }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': stockAlert.user.firstName, '{{lastName}}': stockAlert.user.lastName }) }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ languageSheet.messageBody3 }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    },

    22: {
      name: `Blog - Notificación de Nuevo Artículo`,
      subject: ``,
      html: ``,
    },

    23: {
      name: `Blog - Notificación de Nuevo Comentario`,
      subject: ``,
      html: ``,
    },

    24: {
      name: `Blog - Email de Bienvenida`,
      subject: ``,
      html: ``,
    },

    25: {
      name: `Confirmar suscripción de Stock`,
      subject: `{{ general.ecommerceName }} - Aktienzeichnung`,
      html: `
{% set languageSheet = {
  premessage: "Abonnement des Produktbestands <br><a href='{{productLink}}' style='color: #000;'>{{name}}</a>",
  messageHeader: "Hallo {{firstName}} {{lastName}},",
  messageBody1: "Sie haben Aktienwarnungen abonniert von {{name}}",
  messageBody2: "Wenn wir diesen Artikel wieder erhalten, werden wir Sie sofort informieren, damit Sie ihn nicht verpassen.",
  product: "Produkt",
  price: "Preis",
  messageSignature: "Mit freundlichen Grüßen, das Team von {{ecommerceName}}"
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ replace(languageSheet.premessage, { '{{productLink}}': stockAlert.product.productLink, '{{name}}': stockAlert.product.name }) }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': stockAlert.user.firstName, '{{lastName}}': stockAlert.user.lastName }) }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{name}}': stockAlert.product.name }) }}<br>
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
            {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>`,
    },

    32: {
      name: `Documento de pedido`,
      subject: ``,
      html: ``,
    },

    33: {
      name: `Documento de albarán de entrega`,
      subject: ``,
      html: ``,
    },

    34: {
      name: `Documento de factura`,
      subject: ``,
      html: ``,
    },

    35: {
      name: `Documento de factura rectificativa`,
      subject: ``,
      html: ``,
    },

    36: {
      name: `Activación Two Factor Auth`,
      subject: ``,
      html: ``,
    },

    37: {
      name: `Desactivación Two Factor Auth`,
      subject: ``,
      html: ``,
    },

    38: {
      name: `Enviar código dispositivo Two Factor Auth`,
      subject: ``,
      html: ``,
    },

    39: {
      name: `Notificar Bloqueo de Dispositivo Two Factor Auth`,
      subject: ``,
      html: ``,
    },

    40: {
      name: `Documento de Devolución`,
      subject: ``,
      html: ``,
    },
  }, // end emails
};
