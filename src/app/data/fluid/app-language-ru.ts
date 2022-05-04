// v3 file template
export const LANGUAGE_RU = {
  header: {
    html: `
<table width="100%" bgcolor="#eee" border="0" cellpadding="0" cellspacing="0" style="padding:25px;background-color:#eee;padding-bottom:0px;">
  <tr>
    <td>
      <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
      <![endif]-->
      <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%;max-width: 600px;">

        <tr>
          <td bgcolor="#fff" style="padding: 20px;">
            <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="text-align:center;">
              <tr>
                <td >
                  <a href="%%ecommerceURL%%">
                    <img src="%%imagesURL%%logoEmail.jpg" width="210" height="auto" border="0" alt="%%ecommerceName%%" style="height: auto;">
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
`,
  },

  footer: {
    html: `
      <tr>
        <td bgcolor="#E8E8E8" style="background-color: #E8E8E8;padding: 30px 30px 15px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" >
                <table border="0" cellspacing="10" cellpadding="0">
                  <tr>
                    <!-- %%Pages-501-Loop%% -->
                      <td style="text-align: center;">
                        <a href="%%pageLink%%" style="padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;" target="%%pageTarget%%"> %%pageName%% </a>
                      </td>
                    <!-- %%/Pages-501-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 12px 0 12px 0px;">
                <table border="0" cellspacing="8" cellpadding="0">
                  <tr>
                    <!-- %%Banners-502-Loop%% -->
                      <td width="30" style="text-align: center;">
                        <a href="%%BannerLink%%">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                    <!-- %%/Banners-502-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" >
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <!-- %%Pages-503-Loop%% -->
                      <td style="text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                        <span style="color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                          %%pageContent%%
                        </span>
                      </td>
                    <!-- %%/Pages-503-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!-- %%Pages-504-Loop%% -->
                <td align="center" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
              <!-- %%/Pages-504-Loop%% -->
            </tr>
            <tr>
              <td align="center" heigth="50" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                Для получения дополнительной информации прочтите наши %%privacy%% и %%termsOfUse%%.
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
    <td align="center" style="font-family: sans-serif;font-size: 14px;color: #ffffff;">
      <span style="color:#000;font-size:10px;">&nbsp; </span>
    </td>
  </tr>
</table>
`
  },

  templates: {

    1: {
      name: 'Bienvenida',
      subject: 'Добро пожаловать на %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Добро пожаловать в %%ecommerceName%%!</strong><br><br>
    <span style="font-size: 15px;">
      Здравствуйте %firstName% %lastName%,<br><br>
      Nos complace confirmarte la creación de tu cuenta de cliente en %%ecommerceURL%%.<br><br>
      Мы рады подтвердить создание вашей учетной записи клиента. Благодаря вашей учетной записи клиента вы можете обновить свой профиль и пароль, проверить историю своих заказов и другую интересную информацию.<br><br>
      Мы надеемся вскоре увидеть вас в <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>
      С уважением, команда %%ecommerceName%%
    </span>
  </td>
</tr>
`,
      footer: {
        html: `
      <tr>
        <td bgcolor="#E8E8E8" style="background-color: #E8E8E8;padding: 30px 30px 15px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" >
                <table border="0" cellspacing="10" cellpadding="0">
                  <tr>
                    <!-- %%Pages-501-Loop%% -->
                      <td style="text-align: center;">
                        <a href="%%pageLink%%" style="padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;" target="%%pageTarget%%"> %%pageName%% </a>
                      </td>
                    <!-- %%/Pages-501-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 12px 0 12px 0px;">
                <table border="0" cellspacing="8" cellpadding="0">
                  <tr>
                    <!-- %%Banners-502-Loop%% -->
                      <td width="30" style="text-align: center;">
                        <a href="%%BannerLink%%">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                    <!-- %%/Banners-502-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" >
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <!-- %%Pages-503-Loop%% -->
                      <td style="text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                        <span style="color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                          %%pageContent%%
                        </span>
                      </td>
                    <!-- %%/Pages-503-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!-- %%Pages-504-Loop%% -->
                <td align="center" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
              <!-- %%/Pages-504-Loop%% -->
            </tr>
            <tr>
              <td align="center" heigth="50" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                Для получения дополнительной информации прочтите наши %%privacy%% и %%termsOfUse%%.
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
    <td align="center" style="font-family: sans-serif;font-size: 14px;padding:10px;">
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Отказаться от подписки на рассылку новостей</span></a>
    </td>
  </tr>
</table>
`
      }
    }, // end 1

    2: {
      name: 'Baja de usuarios',
      subject: 'Удаление аккаунта - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Подтверждение удаленного аккаунта</strong><br><br>
    <span style="font-size: 15px;">Здравствуй,<br><br>В соответствии с запросом во время вашего недавнего посещения %%ecommerceName%% мы подтверждаем, что ваша учетная запись пользователя %%email%% была удалена из нашей базы данных.<br><br>С уважением, команда %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 2

    3: {
      name: 'Recordarios de contraseña',
      subject: 'Восстановление пароля - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Восстановление пароля</strong><br><br>
    <span style="font-size: 15px;">
      Здравствуйте %firstName% %lastName%,<br><br>
      В соответствии с запросом во время вашего недавнего посещения %%ecommerceName%%, ваш адрес доступа к зоне восстановления пароля:<br><br>
      <a href="%%lostPasswordLink%%" style="color:#000">Нажмите здесь, чтобы восстановить пароль</a><br><br>
      Эта ссылка будет действительна только в течение 24 часов после отправки.<br><br>
      Мы надеемся вскоре увидеть вас в <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
      С уважением, команда %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 3

    4: {
      name: 'Cambio de contraseña',
      subject: 'Изменение пароля на %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Смена пароля</strong><br><br>
    <span style="font-size: 15px;">
      Здравствуйте %%firstName%% %%lastName%%,<br><br>
      Мы подтверждаем, что ваш пароль был изменен.<br><br>
      Обязательно запишите свои учетные данные в безопасном месте для дальнейшего использования.<br><br>
      Мы надеемся вскоре увидеть вас в <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      С уважением, команда %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 4

    5: {
      name: 'Registro de newsletter',
      subject: 'Подписка на рассылку %%ecommerceName%% ',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Подписка на рассылку</strong><br><br>
    <span style="font-size: 15px;">
      Привет<br><br>
      Спасибо за подписку на нашу рассылку. Вскоре вы получите информацию о мероприятиях, новости о нашей компании и новости о продуктах и акциях.<br><br>
      Мы надеемся вскоре увидеть вас в <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>
    </span>
  </td>
</tr>
`,
      footer: {
        html: `
      <tr>
        <td bgcolor="#E8E8E8" style="background-color: #E8E8E8;padding: 30px 30px 15px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" >
                <table border="0" cellspacing="10" cellpadding="0">
                  <tr>
                    <!-- %%Pages-501-Loop%% -->
                      <td style="text-align: center;">
                        <a href="%%pageLink%%" style="padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;" target="%%pageTarget%%"> %%pageName%% </a>
                      </td>
                    <!-- %%/Pages-501-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 12px 0 12px 0px;">
                <table border="0" cellspacing="8" cellpadding="0">
                  <tr>
                    <!-- %%Banners-502-Loop%% -->
                      <td width="30" style="text-align: center;">
                        <a href="%%BannerLink%%">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                    <!-- %%/Banners-502-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" >
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <!-- %%Pages-503-Loop%% -->
                      <td style="text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                        <span style="color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                          %%pageContent%%
                        </span>
                      </td>
                    <!-- %%/Pages-503-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!-- %%Pages-504-Loop%% -->
                <td align="center" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
              <!-- %%/Pages-504-Loop%% -->
            </tr>
            <tr>
              <td align="center" heigth="50" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                Для получения дополнительной информации прочтите наши %%privacy%% и %%termsOfUse%%.
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
    <td align="center" style="font-family: sans-serif;font-size: 14px;padding:10px;">
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Отказаться от подписки на рассылку новостей</span></a>
    </td>
  </tr>
</table>
`
      }
    }, // end 5

    6: {
      name: 'Recomendación de wishlist',
      subject: '%%anonymousName%% рекомендует Вам понравившиеся товары %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Рекомендация продукта</strong><br><br>
    <span style="font-size: 15px;">
      Ваш друг %%anonymousName%% (%%anonymousEmail%%) отправляет вам этот продукт, который может вас заинтересовать.<br><br>
      Если вам нужна дополнительная информация об этом продукте, вы можете связаться с нами по <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br><br>
      С уважением, команда %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Рекомендуемые товары</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">продукт</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">цена</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage%" alt="%name%" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>

                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                  <!-- %/loop% -->

                </tbody>
              </table>

            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong>Сообщение друга:</strong><br>
                  %%comments%%

                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 6

    7: {
      name: 'Recomendación de producto',
      subject: '%%anonymousName%% рекомендует Вам товары на %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Рекомендация продукта</strong><br><br>
    <span style="font-size: 15px;">
      Здравствуйте %%anonymousName%% (%%anonymousEmail%%) отправляет вам этот продукт, который может вас заинтересовать. <br> <br>
      Если вам нужна дополнительная информация об этом продукте, вы можете связаться с нами по <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br><br>
      С уважением, команда %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Рекомендуемые товары</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">продукт</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">цена</td>
                  </tr>

                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage%" alt="%name%" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>

                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                </tbody>
              </table>

            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong>Сообщение друга:</strong><br>
                  %%comments%%
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 7

    8: {
      name: 'Contacto general',
      subject: 'Контактные данные %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Контактные данные</strong><br><br>
    <span style="font-size: 15px;">Имя: %%anonymousFirstName%%<br>E-mail: %%anonymousEmail%%<br>Телефон: %%anonymousPhone%%<br>Ваш вопрос:  %%queryMotive%%<br>Сообщениe: %%comments%%</span>
  </td>
</tr>
`
    }, // end 8

    9: {
      name: 'Consulta de producto',
      subject: 'Вопрос о товарах на %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Запрос продукта</strong><br><br>
    <span style="font-size: 15px;">Имя: %%anonymousFirstName%%<br>Фамилия: %%anonymousLastName%%<br>E-mail: %%anonymousEmail%%<br>Телефон: %%anonymousPhone%%<br>Сообщение: %%comments%%<br><br>Название товара: %%name%%<br>Артикул: %%sku%%</span>
  </td>
</tr>
`
    }, // end 9

    10: {
      name: 'Confirmación de pedido',
      subject: 'Подтверждение заказа - %%ecommerceName%%',
      html: `
<style type="text/css">
  ul {
    list-style-type: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
<tr>
  <td style="padding: 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Подтверждение заказа</strong><br><br>
    <span style="font-size: 15px;">Большое спасибо за доверие к нам. Ваша покупка была успешно обработана. Ниже мы покажем данные заказа</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif;" align="center">
            <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;width: 50%" align="center" width="50%">
                  <b>Номер заказа:</b><br>
                  %%orderNumber%%
                </td>
                <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                  <b>Дата заказа:</b><br>
                  %%orderDate%%
                </td>
              </tr>
            </table>
          </td>
          <tr>
            <td style="vertical-align: middle;font-family: sans-serif;" align="center">
              <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;width: 50%" align="center" width="50%">
                    <b>Способ оплаты:</b><br>
                    %%paymentMethod%%
                  </td>
                  <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                    <b>Способ доставки:</b><br>
                    %%shipperName%% %%shippingTypeName%%
                  </td>
                </tr>
              </table>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Адрес</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div>
              <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="85%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:13px;line-height: 20px;padding: 20px;border: 1px solid #ddd;">
                      %shippingFirstName% %shippingLastName%<br>
                      %shippingAddress% %shippingNumber%<br>
                      %shippingZip% %shippingCity% %shippingState%<br>
                      %shippingCountryName%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Итог заказа</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top;line-height: 20px;">
            <div>
              <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: top;border-top: 1px solid #ddd;" width="85%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;padding-left:10px;padding-right:10px;border-left: 1px solid #ddd;border-right: 1px solid #ddd;padding-top: 10px;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: top;border-collapse:collapse;" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 10px 10px;vertical-align: top;">
                            <img width="120" src="%smallImage%" alt="%name%">
                          </td>
                          <td style="padding: 10px 10px;vertical-align: top;">
                            <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;display: block;line-height: 20px;">
                              <span style="color: #454545; text-decoration: none">%name%</span>
                            </a>
                            <div style="font-size: 10px;line-height: 12px;">%productOptions%</div>
                            <div><br>Количество: %quantity%</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- %/loop% -->

                  <!-- %ifOrderGifts% -->
                  <!-- %giftsLoop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;padding-left:10px;padding-right:10px;border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
                      <table style="color: #454545; font-family:sans-serif;font-size:14px;vertical-align: top;border-collapse:collapse;" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 10px 10px;vertical-align: top;">
                            <img width="120" src="%smallImage%" alt="%name%">
                          </td>
                          <td style="padding: 10px 10px;vertical-align: top;">
                            <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;display: block;line-height: 20px;">
                              <span style="color: #454545; text-decoration: none">%name% <span style="font-size: 10px;">(Подарок)</span></span>
                            </a>
                            <div><br>Количество: %quantity%</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- %/giftsLoop% -->
                  <!-- %/ifOrderGifts% -->

                </tbody>
              </table>

              <table align="center" cellpadding="0" cellspacing="0" width="85%" style="color:#000;font-family:Arial, Helvetica, sans-serif;font-size:15px;border-collapse:collapse;" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align: middle;text-align: center;font-weight:bold;border-right: 1px solid #ddd;border-left: 1px solid #ddd;border-bottom: 1px solid #ddd;padding-bottom: 20px;padding-top: 10px;">
                    Общее: %%total%%
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
        <!-- %%ifComments%% -->
        <tr>
          <td>
            <table width="85%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#454545;line-height:20px;border-collapse:collapse;" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <strong>Комментарии:</strong><br>
                  %%orderComments%%
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- %%/ifComments%% -->
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td bgColor="#f4f4f4">
            <table width="85%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;border-collapse:collapse;" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 15px 0px 15px 0px;">
                  %%textToEmail%%
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 10

    11: {
      name: 'Baja de newsletter',
      subject: 'Отказ от рассылок %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Отказ от рассылок</strong><br><br>
    <span style="font-size:13px;">Здравствуйте,<br><br>Ваш отказ от наших рассылок получен.<br>С уважением,<br><br>Команда %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 11

    12: {
      name: 'Apadrinamiento',
      subject: 'Приглашение Вашего друга',
      html:  `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Приглашение Вашего друга</strong><br><br>
    <span style="font-size:13px;">Здравствуйте,<br><br>
    %%firstName%% приглашает вас присоединиться к <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>
    Станьте членом и зарегистрируйтесь здесь: <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>
    Спасибо за вашу поддержку.<br><br>
    С уважением, команда %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 12

    13: {
      name: 'Apadrinamiento completo',
      subject: 'Ваш друг сделал покупку на нашем сайте. Вам скидка!',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Ваш друг сделал покупку на нашем сайте. Вам скидка!</strong><br><br>
    <span style="font-size:13px;">Здравствуйте,<br><br>
    Один из Ваших друзей сделал заказ на нашем сайте на сумму XX (€), поэтому мы предоставляем Вам скидку на XX при Вашей следующей покупке.<br>
    Скидка будет автоматически посчитана при вашей следующей покупке. <br><br>
    Не забывайте посещать нас на %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 13

    14: {
      name: 'Petición devolución',
      subject: 'Запрос на возврат  %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Информация о запросе на возврат</strong><br><br>
    <span style="font-size:13px;">Здравствуйте,% firstName %% lastName%,<br><br>Мы рады подтвердить ваш запрос на возврат.<br><br>Номер заказа: %%orderNumber%%<br><br>С уважением, команда %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 14

    15: {
      name: 'Pedido incompleto',
      subject: 'Нужна помощь на %%ecommerceName%%?',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Информация о незавершенном заказе</strong><br><br>
    <span style="font-size: 15px;">Здравствуйте %%firstName%% %lastName%, <br><br>При последнем посещении нашего магазина вы добавили следующие товары в корзину, но не завершили заказ.<br><br>
    <a target="_blank" href="%recoverOrderLink%" style="color:#000;">кликните сюда</a> если вы хотите восстановить свой заказ. <br><br>С уважением, команда %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Подробности Неполные заказ</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Товар</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Количество</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Цена</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage%" alt="%name%" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                  <!-- %/loop% -->

                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 15

    16: {
      name: 'Notificación transportista',
      subject: 'Уведомление оператора связи',
      html: ``
    }, // end 16

    17: {
      name: 'Verificación de correo',
      subject: 'Подтверждение аккаунта - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong> Подтверждение электронной почты </strong> <br> <br>
    <span style = "font-size: 13px;">
      Привет% firstName %% lastName%, <br> <br>
      Спасибо за регистрацию в %% ecommerceURL %%. Пожалуйста, активируйте свою учетную запись, нажав <a href="%verifyLink%" style="color:#000;">здесь</a>.<br><br>
      Мы надеемся вскоре увидеть вас в <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      С уважением, команда %%ecommerceName%%
     </span>
  </td>
</tr>
`
    }, // end 17

    18: {
      name: 'Cuenta activada',
      subject: 'Активация аккаунта - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Активация аккаунта</strong><br><br>
    <span style="font-size:13px;"> 
      Здравствуйте, %%firstName%% %%lastName%%,<br><br>
      Мы рады сообщить Вам, что ваша учетная запись клиента в %%ecommerceURL%% была успешно активирована.<br><br>
      Чтобы просмотреть ваши данные и всю информацию, касающуюся вашей учетной записи, откройте панель управления: <a href="%%ecommerceURL%%" style="color:#000"> Изменить свой профиль</a><br><br>
      Мы надеемся вскоре увидеть вас на <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.
      С уважением, Команда %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 18

    19: {
      name: 'Aviso a proveedores',
      subject: '',
      html: ``
    }, // end 19

    20: {
      name: 'Stock disponible',
      subject: 'Доступный запас',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Товар в наличии на складе <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br><br>
    <span style="font-size: 15px;">Здравствуйте,<br><br>Статья, которую вы так хотели, теперь доступна!</span>
    <span style="font-size: 15px;">
      Напоминаем, что в этом письме содержится информация о доступности данной статьи, которая зависит от многих факторов (заинтересованных лиц, доступных единиц). <br>
      Мы разослали это электронное письмо всем клиентам, заинтересованным в этой статье, поэтому в ближайшее время ее может не хватить.<br><br>
      С уважением, команда %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 20

    22: {
      name: 'Blog - Notificación de Nuevo Artículo',
      subject: 'Новая статья в блоге %ecommerceName%!',
      html: `
<!-- %loop% -->
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Ниже вы можете прочитать последние статьи, опубликованные в <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br><br>
    <strong><a href="%%postLink%%" style="color:#000;font-size:18px;text-decoration:none;">%%postName%%</a></strong>
  </td>
</tr>
<tr>
  <td align="center" >
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="30" style="text-align: center;">
          <a href="%%postLink%%" style="color:#000;">
            <img src="%%postSmallImage%%" height="auto" width="115" border="0" style="height: auto;" alt="%%postName%%">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-size: 15px;">%%postShortText%%<br><br><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>Продолжить чтение!</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
    }, // end 22

    23: {
      name: 'Blog - Notificación de Nuevo Comentario',
      subject: 'Новый комментарий в %%postName%% - %%blogName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Кто-то только что ответил на статью "<a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br><br>
  </td>
</tr>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <table border="0" cellspacing="10" cellpadding="0" width="100%">
      <tr>
        <td style="text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;" width="30%">
          <img src="%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75" width="75" border="0" height="75">
        </td>
        <td style="text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;" width="70%">
          <a style="color:#000;text-decoration:none;" href="%%postLink%%#comment%%commentId%%">%%commentNick%%</a><br>
                  %%commentContent%%<br><br>
          <span style="font-size: 15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Продолжить чтение!</strong></a>.</span>
        </td>
      </tr>
    </table>
  </td>
</tr>
`
    }, // end 23

    24: {
      name: 'Blog - Email de Bienvenida',
      subject: 'Добро пожаловать в %%blogName%%!',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>¡Bienvenido a <a href="%%blogUrl%%" style="color:#000;">%%blogName%%</a>!</strong><br><br>
    <span style="font-size: 15px;">
      Здравствуй,<br><br>
      Спасибо за подписку на наш блог. Вскоре вы получите по электронной почте новые статьи, информацию о скидках, акциях, подарках и интересную информацию, связанную с деятельностью интернет-магазина.<br><br>
      Надеемся скоро увидеть вас в<a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      С уважением, коллектив %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 24

    25: {
      name: 'Confirmar suscripción de Stock',
      subject: 'Подписка на акции',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Подписка на акции <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size: 15px;">Hola,<br><br>Вы подписались на уведомления об акциях %name%</span>
    %productOptions%<br>
    <span style="font-size: 15px;">Если мы снова получим эту статью, мы немедленно уведомим вас, чтобы она не ускользнула от вас.<br><br>С уважением, коллектив %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 25

    26: {
      name: 'SocialCurrency - Socialización',
      subject: '',
      html: ``
    }, // end 26

    27: {
      name: 'SocialCurrency - Notificación incentivos',
      subject: '',
      html: ``
    }, // end 27

    32: {
      name: 'Documento de pedido',
      subject: '',
      html: ``
    }, // end 32

    33: {
      name: 'Documento de albarán de entrega',
      subject: '',
      html: ``
    }, // end 33

    34: {
      name: 'Documento de factura',
      subject: '',
      html: ``
    }, // end 34

    35: {
      name: 'Documento de factura rectificativa',
      subject: '',
      html: ``
    }, // end 35

    36: {
      name: 'Activación Two Factor Auth',
      subject: '',
      html: ``
    }, // end 36

    37: {
      name: 'Activación Two Factor Auth',
      subject: '',
      html: ``
    }, // end 37

    38: {
      name: 'Enviar código dispositivo Two Factor Auth',
      subject: '',
      html: ``
    }, // end 38

    39: {
      name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
      subject: '',
      html: ``
    }, // end 39

  } // end emails
};
