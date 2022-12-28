// v4 file template
export const LANGUAGE_PL = {
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
  moreInfo: "Aby uzyskać więcej informacji, proszę przeczytać naszą <a href='{{privacyPolicyLink}}'>Polityka prywatności</a> i <a href='{{termsOfUseLink}}'>Warunki korzystania</a>."
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
      subject: `{{ general.ecommerceName }} - Dziękujemy za zarejestrowanie się`,
      html: `
{% set languageSheet = {
  premessage: "Witamy w {{ecommerceName}}!",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Mamy przyjemność potwierdzić utworzenie Twojego konta klienta w <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageBody2: "Dzięki kontu klienta będziesz mógł zaktualizować swój profil i hasło, sprawdzić historię zamówień i inne interesujące Cię informacje.",
  messageBody3: "Mamy nadzieję, że wkrótce zobaczymy się na <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ replace(languageSheet.premessage, { '{{ecommerceName}}': general.ecommerceName }) }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{ecommerceUrl}}': general.ecommerceUrl, '{{ecommerceName}}': general.ecommerceName }) }}<br>
      {{ languageSheet.messageBody2 }}<br><br>
      {{ replace(languageSheet.messageBody3, { '{{ecommerceUrl}}': general.ecommerceUrl, '{{ecommerceName}}': general.ecommerceName }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
    }, // end 1

    2: {
      name: `Baja de usuarios`,
      subject: `{{ general.ecommerceName }} - Wyrejestrowanie użytkownika`,
      html: `
{% set languageSheet = {
  premessage: "Potwierdzenie usunięcia konta",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody: "Zgodnie z prośbą podczas Twojej ostatniej wizyty w {{ecommerceName}}, potwierdzamy, że Twoje konto użytkownika {{email}} zostało usunięte z naszej bazy danych.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
      subject: `{{ general.ecommerceName }} - Zapamiętaj hasło`,
      html: `
{% set languageSheet = {
  premessage: "Zapamiętaj hasło",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Zgodnie z prośbą podczas ostatniej wizyty w {{ecommerceName}}, oto Twój adres do logowania w strefie odzyskania hasła:",
  messageBody2: "<a href='{{lostPasswordLink}}' style='color:#000'>Kliknij tutaj, aby odzyskać hasło</a>",
  messageBody3: "Ten link będzie ważny tylko przez 24 godziny od momentu wysłania.",
  messageBody4: "Mamy nadzieję, że wkrótce zobaczymy się na <a href='{{ecommerceUrl}}' style='color:#000'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
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
      subject: `{{ general.ecommerceName }} - Zmiana hasła`,
      html: `
{% set languageSheet = {
  premessage: "Zmiana hasła",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Potwierdzamy, że Twoje hasło zostało zmienione.",
  messageBody2: "Pamiętaj, aby zanotować swoje dane dostępu w bezpiecznym miejscu.",
  messageBody3: "Mamy nadzieję, że wkrótce zobaczymy się na <a href='{{ecommerceUrl}}' style='color:#000'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
      subject: `{{ general.ecommerceName }} - {{ wishlist.user.name }} poleca Ci swoje ulubione produkty`,
      html: `
{% set languageSheet = {
  premessage: "Rekomendacje ulubionych",
  messageHeader1: "Witaj {{toName}},",
  messageHeader2: "Twój znajomy {{firstName}} {{lastName}} ({{email}}) wysyła Ci produkty, które mogą Cię zainteresować.",
  messageBody: "Jeśli potrzebujesz więcej informacji na temat tego produktu, możesz skontaktować się z nami pod adresem <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}.",
  recommendedProducts: "Polecane produkty",
  product: "Produkt",
  price: "Cena",
  comments: "Wiadomość od znajomego:"
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
                    <td style="text-align: right; padding-right: 8px; border-bottom: 1px solid #dcdcdc;">
                      <span>
                        <span>
                          {{ item.price|number_format(2) }}{{ general.defaultCurrencyCode }}
                        </span>
                      </span>
                    </td>
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
      subject: `{{ general.ecommerceName }} - {{ recommend.name }} poleca Ci produkt`,
      html: `
{% set languageSheet = {
  premessage: "Recomendación de producto",
  messageHeader1: "Twój znajomy {{name}} ({{email}}) wysłał Ci produkt, który może Cię zainteresować.",
  messageBody: "Jeśli potrzebujesz więcej informacji na temat tego produktu, możesz skontaktować się z nami pod adresem <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}.",
  recommendedProducts: "Polecane produkty",
  product: "Produkt",
  price: "Cena",
  comments: "Wiadomość od znajomego:"
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
      subject: `{{ general.ecommerceName }} - Formularz kontaktowy`,
      html: `
{% set languageSheet = {
  premessage: 'Formularz kontaktowy',
  name: "Nazwa:",
  email: "Email:",
  phone: "Telefon:",
  motive: "Powód zapytania:",
  comments: "Wiadomość:",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
      subject: `{{ general.ecommerceName }} - Zapytanie o produkt`,
      html: `
{% set languageSheet = {
  premessage: 'Zapytanie o produkt',
  name: "Nazwa:",
  email: "Email:",
  phone: "Telefon:",
  comments: "Wiadomość:",
  productName: "Nazwa produktu:",
  productSku: "Numer referencyjny produktu:",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
      name: `Potwierdzenie zamówienia`,
      subject: `{{ general.ecommerceName }} - {{ (sales.reserve) ? ("Zamówienie otrzymane") : ("Potwierdzenie zamówienia") }} {{ sales.documentNumber }}`,
      html: `
{% set languageSheet = {
  premessage: "Potwierdzenie zamówienia",
  premessageReserve: "Zamówienie otrzymane",
  messageHeader: "Bardzo dziękujemy za zaufanie. Twój zakup został zrealizowany prawidłowo. Zamówienie znajdziecie Państwo w załączonym pliku PDF.",
  messageHeaderReserve: "Bardzo dziękujemy za zaufanie. Otrzymaliśmy Twoje zamówienie, ponieważ mamy kilka produktów na zamówienie, mamy go w oczekiwaniu na przegląd.",
  messageBody1: "Poniżej znajdziecie Państwo szczegóły dotyczące zamówienia.",
  messageBody2: "Dziękujemy za zakupy w <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}.",
  orderNumber: "Numer:",
  orderDate: "Data:",
  paymentSystem: "Sposób płatności:",
  shippingName: "Sposób wysyłki:",
  address: "Adres",
  addressBilling: "Adres do fakturowania",
  addressShipping: "Adres do wysyłki",
  orderResume: "Podsumowanie zamówienia",
  quantity: "Ilość",
  product: "Produkt",
  gift: "Upominek",
  total: "Razem:",
  comment: "Uwagi:",
  pickup: "Wybrałeś dostawę do sklepu",
  pickupMessage: "Powiadomimy Cię e-mailem, gdy Twoje zamówienie będzie gotowe do odbioru.",
  rewardPoints: "Suma {{ecommerceName}}, który otrzymasz przy następnych zakupach to {{value}}"
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
      subject: `{{ general.ecommerceName }} - Wniosek o zwrot`,
      html: `
{% set languageSheet = {
  premessage: "Informacje dotyczące wniosku o zwrot",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Informujemy, że otrzymaliśmy Twoją prośbę o zwrot zamówienia {{documentNumber}}.",
  messageBody2: "Jeśli masz jakiekolwiek pytania dotyczące zwrotu lub innych kwestii, możesz się z nami skontaktować.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
      subject: `{{ general.ecommerceName }} - Zamówienie niekompletne `,
      html: `
{% set languageSheet = {
  premessage: "Informacje o zamówieniu niekompletnym",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Podczas ostatniej wizyty w naszym sklepie dodałeś do koszyka następujące produkty, ale nie zrealizowałeś zamówienia.",
  messageBody2: "Kliknij <a target='_blank' href='{{link}}' style='color: #000;'>tutaj</a> jeśli chcesz odzyskać swoje zamówienie.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': abandonedCart.basketUser.user.defaultBillingAddress.firstName, '{{lastName}}': abandonedCart.basketUser.user.defaultBillingAddress.lastName }) }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ replace(languageSheet.messageBody2, { '{{url}}': abandonedCart.link }) }}<br><br>
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
      subject: `{{ general.ecommerceName }} - Weryfikacja poczty`,
      html: `
{% set languageSheet = {
  premessage: "Weryfikacja poczty",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Dziękujemy za rejestrację w {{ecommerceUrl}}. Proszę aktywować swoje konto klikając <a href='{{verifyAccountLink}}' style='color: #000;'>tutaj</a>.",
  messageBody2: "Mamy nadzieję, że wkrótce zobaczymy się na <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
      subject: `{{ general.ecommerceName }} - Aktywacja konta`,
      html: `
{% set languageSheet = {
  premessage: "Aktywacja konta",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Informujemy, że Twoje konto {{ecommerceUrl}} zostało pomyślnie aktywowane.",
  messageBody2: "Aby zobaczyć swoje dane i inne informacje dotyczące konta, wejdź poprzez panel sterowania: <a href='{{ecommerceUrl}}' style='color: #000;'>Edytuj swój profil</a>.",
  messageBody3: "Mamy nadzieję, że wkrótce zobaczymy się na <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ languageSheet.premessage }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ replace(languageSheet.messageBody1, { '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br>
      {{ replace(languageSheet.messageBody2, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageBody3, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
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
      subject: `{{ general.ecommerceName }} - Produkt dostępny`,
      html: `
{% set languageSheet = {
  premessage: "Produkt w magazynie <a href='{{productLink}}' style='color: #000;'>{name}}</a>.",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Produkt, na który tak bardzo czekałeś, jest już dostępny!",
  messageBody2: "Przypominamy, że ten e-mail ukazuje orientacyjną informację o dostępności tego produktu i zależy od wielu czynników (osoby zainteresowane, dostępna ilość).",
  messageBody3: "Wysłaliśmy ten mail do wszystkich klientów zainteresowanych tym produktem, dlatego istnieje możliwość szybkiego wyczerpania zapasów.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
      subject: `Witamy na {{ blogSubscription.blogName }}!`,
      html: `
{% set languageSheet = {
  premessage: "Witamy w <a href='{blogLink}}' style='color: #000;'>{blogName}}</a>!",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Dziękujemy za subskrypcję naszego bloga. Już wkrótce otrzymasz drogą mailową nowe artykuły, informacje o rabatach, promocjach, upominkach oraz przydatne informacje związane z działalnością sklepu internetowego.",
  messageBody2: "Mamy nadzieję, że wkrótce zobaczymy się na <a href='{{ecommerceUrl}}' style='color: #000;'>{{ecommerceName}}</a>.",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
} %}
<tr>
  <td style="padding: 20px 20px 20px 20px; color: #000; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; text-align: center;">
    <strong>{{ replace(languageSheet.premessage, { '{{blogLink}}': blogSubscription.blogLink, '{{blogName}}': blogSubscription.blogName }) }}</strong><br><br>
    <span style="font-size: 15px;">
      {{ replace(languageSheet.messageHeader, { '{{firstName}}': user.firstName, '{{lastName}}': user.lastName }) }}<br><br>
      {{ languageSheet.messageBody1 }}<br>
      {{ replace(languageSheet.messageBody2, { '{{ecommerceName}}': general.ecommerceName, '{{ecommerceUrl}}': general.ecommerceUrl }) }}<br><br>
      {{ replace(languageSheet.messageSignature, { '{{ecommerceName}}': general.ecommerceName }) }}
    </span>
  </td>
</tr>`,
      footer: {
        html: `
{% set languageSheet = {
  moreInfo: 'Aby uzyskać więcej informacji, proszę przeczytać naszą <a href='{{privacyPolicyLink}}'>Polityka prywatności</a> i <a href='{{termsOfUseLink}}'>Warunki korzystania</a>.',
  unsubscribe: 'Wypisać się z bloga'
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
  <tr>
    <td align="center" style="font-family: sans-serif;font-size: 14px;padding:10px;">
      <span style="color:#8b8b8b;font-size:10px;">
        &nbsp;<br>
        <a href="{{ general.ecommerceUrl }}/blog/unsubscribe?hash={{ blogSubscription.hash }}" style="color: #8b8b8b;text-decoration: underline;font-size:10px;line-height:13px;">
          {{ languageSheet.unsubscribe }}
        </a>
      </span>
    </td>
  </tr>
</table>`,
      },
    },

    25: {
      name: `Confirmar suscripción de Stock`,
      subject: `{{ general.ecommerceName }} - Subskrypcja akcji`,
      html: `
{% set languageSheet = {
  premessage: "Subskrypcja zapasów produktów <br><a href='{{productLink}}' style='color: #000;'>{{name}}</a>",
  messageHeader: "Witaj {{firstName}} {{lastName}},",
  messageBody1: "Zapisałeś się na alerty giełdowe od {{name}}",
  messageBody2: "Jeśli otrzymamy ten przedmiot ponownie, natychmiast damy Ci znać, abyś go nie przegapił.",
  product: "Produkt",
  price: "Cena",
  messageSignature: "Z poważaniem, zespół {{ecommerceName}}."
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
