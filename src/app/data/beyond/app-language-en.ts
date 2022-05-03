// v4 file template
export const LANGUAGE_EN = {
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
                  <img src="{{ general.ecommerceCdnImages }}/email-logo.png" width="210" height="auto" border="0" alt="{{ general.ecommerceName }}" style="height: auto;" />
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
  moreInfo: 'For more information, read our <a href="' ~ general.privacyPolicyLink ~ '">privacy policy</a> and <a href="' ~ general.termsOfUseLink ~ '">terms of use</a>.'
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
      subject: "{{ general.ecommerceName }} - Thank you for signup",
      html: `
{% set languageSheet = {
  premessage: 'Welcome to ' ~ general.ecommerceName ~ '!',
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'We are pleased to inform you that your customer account in <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a> has been successfully created.',
  messageBody2: 'Thanks to your customer account now you can update your profile and password, view your order history and other details that may be of your interest.',
  messageBody3: "We hope to see you soon in " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Account deleted",
      html: `
{% set languageSheet = {
  premessage: 'Confirmation deleted account',
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody: 'As requested during your recent visit to ' ~ general.ecommerceName ~ ", we confirm that your user account " ~ user.email ~ " has been removed from our database.",
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Password recovery",
      html: `
{% set languageSheet = {
  premessage: 'Password recovery',
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "As requested during your recent visit to " ~ general.ecommerceName ~ ", here's your address to access the password recovery zone:",
  messageBody2: '<a href="' ~ user.lostPasswordLink ~ '" style="color:#000">Click here</a>',
  messageBody3: 'Este enlace solamente será válido durante las 24 horas siguientes al momento de su envío.',
  messageBody4: "We hope to see you soon in " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Password change",
      html: `
{% set languageSheet = {
  premessage: 'Password change',
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'This email is to inform you that your customer account password has been changed.',
  messageBody2: "Be sure to note your credentials in a safe place for future reference.",
  messageBody3: "We hope to see you soon in " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - {{ recommend.name }} recommends their favourite products",
      html: `
{% set languageSheet = {
  premessage: 'Wishlist recommend',
  messageHeader1: "Your friend " ~ recommend.name ~ " (" ~ recommend.email ~ ") sends you this product that may be of interest for you.",
  messageBody: 'If you need more information about this product you can contact us on <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team',
  recommendedProducts: 'Recommended products',
  product: 'Product',
  price: 'Price',
  comments: 'Message from your friend:'
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
      subject: "{{ general.ecommerceName }} - {{ recommend.name }} recommends you a product",
      html: `
{% set languageSheet = {
  premessage: 'Product recommendation',
  messageHeader1: "Your friend " ~ recommend.name ~ " (" ~ recommend.email ~ ") thinks this item could be of your interest.",
  messageBody: 'If you need further information about this item you can contact us at <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team',
  recommendedProducts: 'Recommended products',
  product: 'Product',
  price: 'Price',
  comments: 'Message from your friend:'
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
      subject: "{{ general.ecommerceName }} - Contact form",
      html: `
{% set languageSheet = {
  premessage: 'Contact form',
  name: 'Name:',
  email: 'Email:',
  phone: 'Phone:',
  motive: 'Query motive:',
  comments: 'Message:',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Product enquiry",
      html: `
{% set languageSheet = {
  premessage: 'Product enquiry',
  name: 'Name:',
  email: 'Email:',
  phone: 'Phone:',
  comments: 'Message:',
  productName: 'Product name:',
  productSku: 'Product reference:',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - {{ (sales.reserve) ? ('Order received') : ('Order confirmation') }} {{ sales.documentNumber }}",
      html: `
{% if sales.reserve %}
  {% set languageSheet = {
    premessage: 'Order received',
    messageHeader: 'Hello ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
    messageBody1: 'We have received your order, as we have some products on order we have it pending review.',
    messageBody2: 'If everything is correct, you will receive an automatic confirmation email.',
    messageBody3: 'If we have any questions we will contact you.',
    messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
  } %}
{% else %}
  {% set languageSheet = {
    premessage: 'Order confirmation',
    messageHeader: 'Hello ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
    messageBody1: 'We confirm your order has been processed correctly.',
    messageBody2: "Please find your order attached as a PDF file.",
    messageBody3: 'Thank you for shopping at <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
    messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Request for return",
      html: `
{% set languageSheet = {
  premessage: 'Information on the return request',
  messageHeader: 'Hello ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
  messageBody1: 'Please note that we have received your request for a refund.',
  messageBody2: 'If you have any questions about your return or any other issue, you can contact us.',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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

    15: {
      name: "Pedido incompleto",
      subject: "{{ general.ecommerceName }} - Incomplete order",
      html: `
{% set languageSheet = {
  premessage: "Incomplete order information",
  messageHeader: 'Hello ' ~ abandonedCart.user.firstName ~ ' ' ~ abandonedCart.user.lastName ~ ',',
  messageBody1: 'In your last visit to our store %%ecommerceName%% you placed the following item(s) in the shopping cart, but you did not complete the order.',
  messageBody2: 'Click <a target="_blank" href="' ~ abandonedCart.link ~ '" style="color: #000;">here</a> to recover your cart.',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Email verification",
      html: `
{% set languageSheet = {
  premessage: "Email verification",
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Thanks for registering on ' ~ general.ecommerceUrl ~ '. Please, follow the link in order to verify your e-mail account: <a href="' ~ user.verifyAccountLink ~ '" style="color: #000;">Click here</a>.',
  messageBody2: "We hope to see you soon in " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Account activation",
      html: `
{% set languageSheet = {
  premessage: 'Account activation',
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'We are pleased to inform you that your customer account in ' ~ general.ecommerceUrl ~ ' has been successfully activated',
  messageBody2: 'You can view and modify all your details at any time by accessing this control panel: <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">Edit your profile</a>',
  messageBody3: "We hope to see you soon in " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Stock available",
      html: `
{% set languageSheet = {
  premessage: 'Stock available of product <a href="' ~ data.product.productLink ~ '" style="color: #000;">' ~ data.product.name ~ '</a>',
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "The article that you want so much is already available!",
  messageBody2: "We would like to remind you that this email provides guidance on the availability of this article and depends on many factors (people interested, available units).",
  messageBody3: "We have sent this email to all the customers interested in the article, so it is possible to be exhausted very soon.",
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
      subject: "{{ general.ecommerceName }} - Stock subscription",
      html: `
{% set languageSheet = {
  premessage: 'Stock subscription of product <a href="' ~ data.product.productLink ~ '" style="color: #000;">' ~ data.product.name ~ '</a>',
  messageHeader: 'Hello ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "You have subscribed to the " ~ data.product.name ~ " stock notices.",
  messageBody2: "In case we receive this article again we will notify you immediately.",
  messageSignature: 'The ' ~ general.ecommerceName ~ ' Team'
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
