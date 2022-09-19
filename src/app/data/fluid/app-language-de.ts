// v3 file template
export const LANGUAGE_DE = {

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
`
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
                Für mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.
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
    name: `Bienvenida`,
    subject: `Vielen Dank für Ihre Anmeldung bei %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Willkommen bei %%ecommerceName%%!</strong><br><br>
    <span style="font-size: 15px;">
      Hallo %firstName% %lastName%, <br><br>
      Wir freuen uns, Ihnen die Erstellung Ihres Kundenkontos bestätigen zu können%%ecommerceURL%%.<br><br>
      Dank Ihres Kundenkonto Sie Ihr Profil und Ihr Passwort aktualisieren, Ihren Bestellverlauf überprüfen und andere interessante Informationen erhalten.<br><br>
      Wir hoffen Sie bald begrüßen zu dürfen, bei <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%</span>
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
                Für mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.
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
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Abmeldung vom</span></a>
      <span style="color:#000;font-size:10px;">Newsletter</span>
    </td>
  </tr>
</table>
`
    }
  }, // end 1

  2: {
    name: `Baja de usuarios`,
    subject: `Niedriger Benutzer in %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bestätigung Löschung Kundenkonto</strong><br><br>
    <span style="font-size: 15px;">
      Hallo,<br><br>
      Wie bei Ihrem letzten Besuch bei %%ecommerceName%% angefordert, bestätigen wir ihnen das Ihr Benutzerkonto %%email%% aus unserer Datenbank entfernt worden ist.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 2

  3: {
    name: `Recordarios de contraseña`,
    subject: `Passwort von %%ecommerceName%% merken`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Passwort erinnern</strong><br><br>
    <span style="font-size: 15px;">
      Hallo %firstName% %lastName%,<br><br>
      Wie bei Ihren letzten Besuch bei %%ecommerceName%%, , angefordert, haben Sie hier Ihre Zugangsadresse zur Passwort-Wiederherstellungszone:<br><br>
      <a href="%%lostPasswordLink%%" style="color:#000">Klicken Sie um das Passwort wiederherzustellen</a><br><br>
      Dieser Link ist nur während der nächsten 24 Stunden mehr gültig.<br><br>
      Wir hoffen ie bald wieder zu sehen, bei <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
      Herzlichst, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 3

  4: {
    name: `Cambio de contraseña`,
    subject: `Passwortänderung für %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Passwort ändern</strong><br><br>
    <span style="font-size: 15px;">
      Hallo %%firstName%% %%lastName%%,<br><br>
      Wir bestätigen Ihnen, dass Ihr Passwort geändert wurde.<br><br>
      Bewahren Sie Ihre Zugangsdaten an einem sicheren Ort auf .<br><br>
      Wir hoffen Sie bald begrüßen zu dürfen, bei <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 4

  5: {
    name: `Registro de newsletter`,
    subject: `Abonnieren Sie den Newsletter in %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Newsletter-Abonnement</strong><br><br>
    <span style="font-size: 15px;">
      Hallo<br><br>
      Danke für das Abonnement unseres Newsletters. Bald werden Sie Infos über Aktivitäten, Nachrichten über unser Unternehmen, Neuigkeiten über Produkte und Angebote erhalten.<br><br>
      Wir hoffen, Sie bald zu sehen, bei <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>
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
                Für mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.
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
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Abmeldung vom</span></a>
      <span style="color:#000;font-size:10px;">Newsletter</span>
    </td>
  </tr>
</table>
`
    }
  }, // end 5

  6: {
    name: `Recomendación de wishlist`,
    subject: `%%anonymousName%% empfiehlt Ihre Lieblingsprodukte von %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Empfehlung für die Wunschliste</strong><br><br>
    <span style="font-size: 15px;">
      Ihr/e Freund/in %%anonymousName%% (%%anonymousEmail%%) schickt Ihnen dieses Produkt das für Sie von Interesse sein könnte.<br><br>
      Sollten Sie weitere Informationen zu diesem Produkt benötigen, können Sie uns kontaktieren, und zwar unter <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br><br>
      Mit freundlichen Grüssen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Empfohlene Produkte
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preis</td>
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
                  <strong>Nachricht Ihres/Ihrer Freund/in:</strong><br>
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
    name: `Recomendación de producto`,
    subject: `%%anonymousName%% empfiehlt ein %%ecommerceName%%-Produkt`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Produktempfehlung</strong><br><br>
    <span style="font-size: 15px;">
      Ihr/e Freund/in %%anonymousName%% (%%anonymousEmail%%) schickt Ihnen dieses Produkt das von Ihrem Interesse sein könnte.<br><br>
      Für weitere Informationen kontaktieren Sie uns bitte unter <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br><br>
      Herzlichst, das Team von %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Empfohlene Produkte
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preis</td>
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
                  <strong>Nachricht von Ihrem Freund:</strong><br>
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
    name: `Contacto general`,
    subject: `%%ecommerceName%%-Kontaktformular`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Kontaktformular</strong><br><br>
    <span style="font-size: 15px;">
      Name: %%anonymousFirstName%%<br>
      Email: %%anonymousEmail%%<br>
      Telefon: %%anonymousPhone%%<br>
      Grund deer Anfrage: %%queryMotive%%<br>
      Nachricht: %%comments%%
    </span>
  </td>
</tr>
`
  }, // end 8

  9: {
    name: `Consulta de producto`,
    subject: `Beratung zu %%ecommerceName%%-Produkten`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Produktanfrage</strong><br><br>
    <span style="font-size: 15px;">
      Name: %%anonymousFirstName%%<br>
      Familienname: %%anonymousLastName%%<br>
      Email: %%anonymousEmail%%<br>
      Telefon: %%anonymousPhone%%<br>
      Nachricht: %%comments%%<br><br>
      Produktname: %%name%%<br>
      Produktreferenz: %%sku%%
    </span>
  </td>
</tr>
`
  }, // end 9

  10: {
    name: `Confirmación de pedido`,
    subject: `Bestellbestätigung - %%orderNumber%% - %%ecommerceName%%`,
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
    <strong>Bestellbestätigung</strong><br><br>
    <span style="font-size: 15px;">Vielen Dank für Ihr Vertrauen. Ihre Bestellung wurde korrekt bearbeitet. Nachfolgend sehen Sie die Bestelldaten</span>
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
                  <b>Bestellnummer:</b><br>
                  %%orderNumber%%
                </td>
                <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                  <b>Auftragsdatum:</b><br>
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
                    <b>Bezahlverfahren:</b><br>
                    %%paymentMethod%%
                  </td>
                  <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                    <b>Versandart:</b><br>
                    %%shipperName%% %%shippingTypeName%%
                  </td>
                </tr>
              </table>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Adresse</span></td></tr>
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
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Bestellübersicht</span></td></tr>
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
                            <div><br>Betrag: %quantity%</div>
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
                              <span style="color: #454545; text-decoration: none">%name% <span style="font-size: 10px;">(Geschenk)</span></span>
                            </a>
                            <div><br>Betrag: %quantity%</div>
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
                    Gesamt: %%total%%
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
                  <strong>Kommentare:</strong><br>
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
    name: `Baja de newsletter`,
    subject: `Laden Sie den %%ecommerceName%%-Newsletter herunter`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bestätigung der Newsletter-Abmeldung</strong><br><br>
    <span style="font-size: 15px;">
      Hallo<br><br>
      Sie wurden erfolgreich vom Newsletter abgemeldet.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 11

  12: {
    name: `Apadrinamiento`,
    subject: `Ihr Freund möchte Sie sponsern`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bewerbung für Sponsoring</strong><br><br>
    <span style="font-size: 15px;">
      Hallo,<br><br>
      %%firstName%% lädt Sie ein, sich<a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a> anzuschließen<br><br>
      Werden Sie Mitglied und registrieren Sie sich hier:
      <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>
      Danke für Ihre Unterstützung.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 12

  13: {
    name: `Apadrinamiento completo`,
    subject: `Ihr Sponsor hat einen Einkauf getätigt: Genießen Sie Ihren Rabatt.`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Sponsoring abgeschlossen</strong><br><br>
    <span style="font-size: 15px;">
      Hallo,<br><br>
     Einer Ihrer Freunde hat gerade einen Einkauf in unserem Shop im Wert von XX (€) getätigt, deshalb bieten wir Ihnen einen Rabatt von XX auf Ihre nächste Bestellung an.<br><br>
      Der Rabatt gilt automatisch bei Ihrer nächsten Bestellung.<br><br>
      Danke für Ihre Unterstützung.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 13

  14: {
    name: `Petición devolución`,
    subject: `Rückgabeanforderung - %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Rücksendeinformationen</strong><br><br>
    <span style="font-size: 15px;">
      Hallo %firstName% %lastName%, <br><br>
      Wir bestätigen Ihnen gerne Ihr Rückgabeansuchen.<br><br>
      Bestellnummer: %%orderNumber%%<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 14

  15: {
    name: `Pedido incompleto`,
    subject: `Unvollständige Bestellung von %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Unvollständige Bestellinformationen</strong><br><br>
    <span style="font-size: 15px;">
      Hallo %firstName% %lastName%, <br><br>
      Bei Ihrem letzten Besuch in unserem Shop haben Sie die folgenden Produkte in den Warenkorb gelegt, aber die Bestellung nicht abgeschlossen.<br><br>
      Klicken Sie auf <a target="_blank" href="%recoverOrderLink%" style="color:#000;">hier</a> wenn Sie Ihre Bestellung wieder aufrufen möchten.<br><br>
      Mit freundlichen Grüßen, das Team %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Details der unvollständigen Bestellung
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Menge</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preis</td>
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
    name: `Notificación transportista`,
    subject: `Trägerbenachrichtigung`,
    html: ``
  }, // end 16

  17: {
    name: `Verificación de correo`,
    subject: `Überprüfung der Post - %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Überprüfung der Email Adresse</strong><br><br>
    <span style="font-size: 15px;">
      Hallo %firstName% %lastName%,<br><br>
      Danke für Ihre Anmeldung bei %%ecommerceURL%%. Bitte aktivieren Sie Ihr Konto und klicken Sie <a href="%verifyLink%" style="color:#000;">hier-</a>.<br><br>
      Wir hoffen, Sie bald zu begrüßen bei <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 17

  18: {
    name: `Cuenta activada`,
    subject: `Kontoaktivierung - %%ecommerceName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Kontoaktivierung</strong><br><br>
    <span style="font-size: 15px;">
      Hallo %firstName% %lastName%,<br><br>
      Wir benachrichtigen Sie, dass Ihr Konto in %%ecommerceURL%% korrekt aktiviert wurde.<br><br>
      Um Ihre Daten und alle Informationen über Ihr Konto anzuzeigen, gehen Sie auf das Kontrollfeld: <a href="%%ecommerceURL%%" style="color:#000">Bearbeiten Sie Ihr Profil</a><br><br>
      Wir hoffen Sie bald zu sehen bei <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 18

  19: {
    name: `Aviso a proveedores`,
    subject: ``,
    html: ``
  }, // end 19

  20: {
    name: `Stock disponible`,
    subject: `Lager verfügbar`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Lagerbestand des Produkts <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br><br>
    <span style="font-size: 15px;">Hallo,<br><br>Der Artikel, den so sehr wollen, ist bereits verfügbar!</span>
    <span style="font-size: 15px;">
      Wir möchten Sie daran erinnern, dass diese E-Mail Informationen über die Verfügbarkeit dieses Artikels enthält und von vielen Faktoren (Interessenten, verfügbare Einheiten) abhängt.
      Wir haben diese E-Mail an alle Kunden geschickt, die sich für diesen Artikel interessieren, so dass es möglich ist, dass er sehr bald wieder vergriffen ist.<br><br>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 20

  22: {
    name: `Blog - Notificación de Nuevo Artículo`,
    subject: `Neuer Artikel im %ecommerceName% Blog!`,
    html: `
<!-- %loop% -->
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Unten können Sie die neuesten, veröffentlichten Artikel lesen <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br><br>
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
    <span style="font-size: 15px;">%%postShortText%%<br><br><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>Lesen Sie weiter!</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
  }, // end 22

  23: {
    name: `Blog - Notificación de Nuevo Comentario`,
    subject: `Neuer Kommentar in %%postName%% - %%blogName%%`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Jemand hat gerade auf den Artikel geantwortet "<a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br><br>
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
          <span style="font-size: 15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Lesen Sie weiter!</strong></a>.</span>
        </td>
      </tr>
    </table>
  </td>
</tr>
`
  }, // end 23

  24: {
    name: `Blog - Email de Bienvenida`,
    subject: `Willkommen bei %%blogName%%!`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Willkommen <a href="%%blogUrl%%" style="color:#000;">%%blogName%%</a>!</strong><br><br>
    <span style="font-size: 15px;">
      Hallo,<br><br>
      Danke für die Anmeldung zu unserem Blog. Bald werden Sie die neuen Artikel per E-Mail erhalten, Informationen über Rabatte, Werbeaktionen, Geschenke und interessante Informationen im Zusammenhang mit der Aktivität des Online-Shops.<br><br>
      Wir hoffen Sie bald begrüßen zu dürfen unter <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 24

  25: {
    name: `Confirmar suscripción de Stock`,
    subject: `Aktienabonnement`,
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Abonnieren Sie den Produktbestand <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size: 15px;">Hallo,<br><br>Sie haben Sich für den Lagerbestand-Alarm angemeldet, von %name%</span>
    %productOptions%<br>
    <span style="font-size: 15px;">
      Wenn wir diesen Artikel wieder erhalten, werden wir Sie sofort informieren, damit er Ihnen nicht entgeht.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 25

  26: {
    name: `SocialCurrency - Socialización`,
    subject: ``,
    html: ``
  }, // end 26

  27: {
    name: `SocialCurrency - Notificación incentivos`,
    subject: ``,
    html: ``
  }, // end 27

  32: {
    name: `Documento de pedido`,
    subject: ``,
    html: ``
  }, // end 32

  33: {
    name: `Documento de albarán de entrega`,
    subject: ``,
    html: ``
  }, // end 33

  34: {
    name: `Documento de factura`,
    subject: ``,
    html: ``
  }, // end 34

  35: {
    name: `Documento de factura rectificativa`,
    subject: ``,
    html: ``
  }, // end 35

  36: {
    name: `Activación Two Factor Auth`,
    subject: ``,
    html: ``
  }, // end 36

  37: {
    name: `Activación Two Factor Auth`,
    subject: ``,
    html: ``
  }, // end 37

  38: {
    name: `Enviar código dispositivo Two Factor Auth`,
    subject: ``,
    html: ``
  }, // end 38

  39: {
    name: `Notificar Bloqueo de Dispositivo Two Factor Auth`,
    subject: ``,
    html: ``
  }, // end 39

  } // end emails
};
