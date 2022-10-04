// v4 file template
export const LANGUAGE_RU = {
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
  moreInfo: 'Для получения дополнительной информации ознакомьтесь с нашей <a href="' ~ general.privacyPolicyLink ~ '">политикой конфиденциальности</a> и <a href="' ~ general.termsOfUseLink ~ '">условиями пользования</a>'
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
      name: `Bienvenida`,
      subject: `{{ general.ecommerceName }} - Благодарим Вас за регистрацию`,
      html: `
{% set languageSheet = {
  premessage: 'Добро пожаловать на сайт ' ~ general.ecommerceName ~ '!',
  messageHeader: 'Уважаемый (-ая) ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Мы рады подтвердить создание Вашей учетной записи клиента на сайте <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageBody2: 'В учетной записи клиента вы можете обновлять свой профиль и пароль, проверять историю заказов и другую интересующую вас информацию.',
  messageBody3: "Надеемся скоро увидеть Вас на сайте " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Baja de usuarios`,
      subject: `{{ general.ecommerceName }} - Удаление пользовательской записи`,
      html: `
{% set languageSheet = {
  premessage: 'Подтверждение удаления записи',
  messageHeader: 'Уважаемый (-ая) ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody: 'В соответствии с запросом, сделанным во время недавнего посещения сайта ' ~ general.ecommerceName ~ ', подтверждаем, что Ваша учетная запись пользователя ' ~ user.email ~ ' удалена из нашей базы данных.",
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Recordarios de contraseña`,
      subject: `{{ general.ecommerceName }} - Напомнить пароль`,
      html: `
{% set languageSheet = {
  premessage: 'Напомнить пароль',
  messageHeader: 'Уважаемый (-ая) ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: "В соответствии с запросом, сделанным во время недавнего посещения сайта " ~ general.ecommerceName ~ ", отправляем Вам ссылку для перехода на страницу восстановления пароля:",
  messageBody2: '<a href="' ~ user.lostPasswordLink ~ '" style="color:#000">Нажмите здесь для восстановления пароля</a>',
  messageBody3: 'Ссылка действительна в течение 24 часов с момента отправки.',
  messageBody4: "Надеемся скоро увидеть Вас на сайте " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Cambio de contraseña`,
      subject: `{{ general.ecommerceName }} - Смена пароля`,
      html: `
{% set languageSheet = {
  premessage: 'Смена пароля',
  messageHeader: 'Уважаемый (-ая) ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Подтверждаем, что Ваш пароль успешно изменен.',
  messageBody2: "Сохраните свои учетные данные в надежном месте для их последующего просмотра.",
  messageBody3: "Надеемся скоро увидеть Вас на сайте " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color:#000">' ~ general.ecommerceName ~ '</a>.',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Registro de newsletter`,
      subject: ``,
      html: ``,
    }, // end 5

    6: {
      name: `Recomendación de wishlist`,
      subject: `{{ general.ecommerceName }} - {{ wishlist.user.name }} te recomienda sus productos favoritos`,
      html: `
{% set languageSheet = {
  premessage: 'Recomendación de favoritos',
  messageHeader1: 'Уважаемый (-ая) ' ~ wishlist.toName ~ ',',
  messageHeader2: "Ваш друг " ~ wishlist.user.firstName ~ " " ~ wishlist.user.lastName ~ " (" ~ wishlist.user.email ~ ") отправляет Вам эти товары, которые могут Вас заинтересовать.",
  messageBody: 'Для получения дополнительной информации об этих товарах свяжитесь с нами на сайте <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName,
  recommendedProducts: 'Рекомендованные товары',
  product: Товар,
  price: 'Цена',
  comments: 'Сообщение от Вашего друга:'
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
      name: `Recomendación de producto`,
      subject: `{{ general.ecommerceName }} - {{ recommend.name }} рекомендует Вам товар`,
      html: `
{% set languageSheet = {
  premessage: 'Рекомендация товара',
  messageHeader1: "Ваш друг " ~ recommend.name ~ " (" ~ recommend.email ~ ") отправляет Вам этот товар, который может Вас заинтересовать.",
  messageBody: 'Для получения дополнительной информации об этих товарах свяжитесь с нами на сайте <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName,
  recommendedProducts: 'Рекомендованные товары',
  product: Товар,
  price: 'Цена',
  comments: 'Сообщение от Вашего друга:'
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
      name: `Contacto general`,
      subject: `{{ general.ecommerceName }} - Форма обратной связи`,
      html: `
{% set languageSheet = {
  premessage: 'Форма обратной связи',
  name: 'Имя:',
  email: 'Электронная почта:',
  phone: 'Телефон:',
  motive: 'Повод обращения:',
  comments: 'Текст сообщения:',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Consulta de producto`,
      subject: `{{ general.ecommerceName }} - Поиск информации о товаре`,
      html: `
{% set languageSheet = {
  premessage: 'Поиск информации о товаре',
  name: 'Имя:',
  email: 'Электронная почта:',
  phone: 'Телефон:',
  comments: 'Текст сообщения:',
  productName: 'Название продукта:',
  productSku: 'Ссылка на продукт:',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Confirmación de pedido`,
      subject: `{{ general.ecommerceName }} - {{ (sales.reserve) ? (\'Заказ получен\') : (\'Подтверждение заказа\') }} {{ sales.documentNumber }}`,
      html: `
{% set languageSheet = {
  premessage: 'Подтверждение заказа',
  premessageReserve: 'Заказ получен',
  messageHeader: 'Благодарим Вас за доверие. Ваша покупка успешно оформлена. Отправляем Вам подтверждение заказа в прикрепленном PDF-файле.',
  messageHeaderReserve: 'Благодарим Вас за доверие. Ваш заказ получен и в настоящее время находится на этапе проверки, поскольку некоторые из выбранных товаров поставляются по индивидуальному заказу.',
  messageBody1: 'Далее приведена информация о Вашем заказе.',
  messageBody2: 'Спасибо за покупку на сайте <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName,
  orderNumber: 'Номер:',
  orderDate: 'Дата:',
  paymentSystem: 'Способ оплаты:',
  shippingName: 'Способ доставки:',
  address: 'Адрес',
  addressBilling: 'Платежный адрес',
  addressShipping: 'Адрес доставки',
  orderResume: 'Краткая информация о заказе',
  quantity: 'Количество',
  product: Товар,
  gift: 'Подарок',
  total: 'Итого:',
  comment: 'Комментарии:',
  pickup: 'Вы выбрали получение заказа в магазине',
  pickupMessage: 'Мы оповестим Вас по электронной почте, когда заказ будет готов к получению.',
  rewardPoints: 'Общая сумма {{name}}, которую вы получите за следующую покупку, составляет {{value}}.'
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
            {% if sales.rewardPoints|length %}
              {% for rewardPoint in sales.rewardPoints %}
                <p style="font-size: 14px; line-height: 22px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin: 1em 0;">
                  <strong>{{ rewardPoint.language.name }}</strong><br>
                  {{ replace(languageSheet.rewardPoints, { '{{name}}': rewardPoint.language.name, '{{value}}': rewardPoint.summary.totalEarned }) }}<br><br>
                </p>
              {% endfor %}
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
      subject: `{{ general.ecommerceName }} - Запрос о возврате товара`,
      html: `
{% set languageSheet = {
  premessage: 'Информация касательно запроса о возврате товара',
  messageHeader: 'Уважаемый (-ая) ' ~ sales.user.billingAddress.firstName ~ ' ' ~ sales.user.billingAddress.lastName ~ ',',
  messageBody1: 'Сообщаем о получении Вашего запроса о возврате товара.',
  messageBody2: 'Свяжитесь с нами, если у Вас есть вопросы по поводу возврата товара или иные вопросы.',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Pedido incompleto`,
      subject: `{{ general.ecommerceName }} - Незавершенный заказ`,
      html: `
{% set languageSheet = {
  premessage: "Информация о незавершенном заказе",
  messageHeader: 'Уважаемый (-ая) ' ~ abandonedCart.user.firstName ~ ' ' ~ abandonedCart.user.lastName ~ ',',
  messageBody1: 'Во время последнего посещения нашего магазина Вы добавили в корзину следующие товары, но не завершили заказ.',
  messageBody2: 'Нажмите <a target="_blank" href="' ~ abandonedCart.link ~ '" style="color: #000;">здесь</a> для восстановления незавершенного заказа.',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Notificación transportista`,
      subject: ``,
      html: ``,
    },

    17: {
      name: `Verificación de correo`,
      subject: `{{ general.ecommerceName }} - Проверка электронной почты`,
      html: `
{% set languageSheet = {
  premessage: "Проверка электронной почты",
  messageHeader: 'Уважаемый (-ая) ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Спасибо, что Вы зарегистрировались на сайте ' ~ general.ecommerceUrl ~ '. Для активации Вашей учетной записи нажмите <a href="' ~ user.verifyAccountLink ~ '" style="color: #000;">здесь</a>.',
  messageBody2: "Надеемся скоро увидеть Вас на сайте " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Cuenta activada`,
      subject: `{{ general.ecommerceName }} - Активация учетной записи`,
      html: `
{% set languageSheet = {
  premessage: 'Активация учетной записи',
  messageHeader: 'Уважаемый (-ая) ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Сообщаем, что Ваша учетная запись на сайте ' ~ general.ecommerceUrl ~ ' успешно активирована.',
  messageBody2: 'Для просмотра Ваших данных и всей информации, связанной с Вашей учетной записью, выполните вход из панели управления, раздел <a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">Редактировать профиль</a>',
  messageBody3: "Надеемся скоро увидеть Вас на сайте " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      name: `Aviso a proveedores`,
      subject: ``,
      html: ``,
    },

    20: {
      name: `Stock disponible`,
      subject: `{{ general.ecommerceName }} - Товар в наличии`,
      html: `
{% set languageSheet = {
  premessage: 'Товар в наличии <a href="' ~ stockAlert.product.productLink ~ '" style="color: #000;">' ~ stockAlert.product.name ~ '</a>',
  messageHeader: 'Уважаемый (-ая) ' ~ stockAlert.user.firstName ~ ' ' ~ stockAlert.user.lastName ~ ',',
  messageBody1: "Товар, который вы так хотели, теперь доступен!",
  messageBody2: "Напоминаем вам, что данное письмо предоставляет ориентировочную информацию о наличии данного товара и зависит от многих факторов (заинтересованные лица, доступные единицы товара).",
  messageBody3: "Мы отправили это письмо всем покупателям, заинтересованным в этом товаре, поэтому он может быть распродан очень скоро.",
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      subject: `Добро пожаловать в  {{ blogSubscription.blogName }}!`,
      html: `
{% set languageSheet = {
  premessage: 'Добро пожаловать в ' ~ '<a href="' ~ blogSubscription.blogLink ~ '" style="color: #000;">' ~ blogSubscription.blogName ~ '</a>!',

  messageHeader: 'Уважаемый (-ая) ' ~ user.firstName ~ ' ' ~ user.lastName ~ ',',
  messageBody1: 'Спасибо, что подписались на наш блог. Вскоре вы будете получать по электронной почте новые статьи, информацию о скидках, акциях, подарках и интересующую вас информацию, связанную с деятельностью интернет-магазина.',
  messageBody2: "Надеемся скоро увидеть Вас на сайте " ~ '<a href="' ~ general.ecommerceUrl ~ '" style="color: #000;">' ~ general.ecommerceName ~ '</a>',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
      footer: {
        html: `
{% set languageSheet = {
  moreInfo: 'Для получения дополнительной информации ознакомьтесь с нашей <a href="' ~ general.privacyPolicyLink ~ '">политикой конфиденциальности</a> и <a href="' ~ general.termsOfUseLink ~ '">условиями пользования</a>',
  unsubscribe: 'Отписаться от блога'
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
      subject: `{{ general.ecommerceName }} - Подписка на акции`,
      html: `
{% set languageSheet = {
  premessage: 'Подписка на товарные запасы <br><a href="' ~ stockAlert.product.productLink ~ '" style="color: #000;">' ~ stockAlert.product.name ~ '</a>',
  messageHeader: 'Уважаемый (-ая) ' ~ stockAlert.user.firstName ~ ' ' ~ stockAlert.user.lastName ~ ',',
  messageBody1: "Вы подписались на уведомления об акциях от " ~ stockAlert.product.name,
  messageBody2: "Если мы получим этот товар снова, мы немедленно сообщим вам об этом, чтобы вы не пропустили его.",
  product: Товар,
  price: 'Цена',
  messageSignature: 'С уважением, персонал компании ' ~ general.ecommerceName
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
