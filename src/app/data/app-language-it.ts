// v3 file template
export const LANGUAGE_IT = {

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
        <td bgcolor="#E8E8E8" style="padding: 30px 30px 15px 30px;">
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
                Per ulteriori informazioni, leggi la nostra %%privacy%% e %%termsOfUse%%.
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
    subject: 'Grazie per esserti registrato a %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>¡Benvenuto in %%ecommerceName%%!</strong><br><br>
    <span style="font-size:15px;">
      Ciao %firstName% %lastName%, <br><br>
      Siamo lieti di confermare che il tuo account cliente su %%ecommerceURL%% è stato creato.<br><br>
      Grazie al tuo account cliente potrai aggiornare il tuo profilo e la tua password, consultare il tuo storico ordini ed altre informazioni utili.<br><br>
      Ci auguriamo di vederti presto su <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`,
    footer: {
      html: `
      <tr>
        <td bgcolor="#E8E8E8" style="padding: 30px 30px 15px 30px;">
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
                Per ulteriori informazioni, leggi la nostra %%privacy%% e %%termsOfUse%%.
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
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Cancellare</span></a>
      <span style="color:#000;font-size:10px;">l'iscrizione alla Newsletter</span>
    </td>
  </tr>
</table>
`
    }
  }, // end 1

  2: {
    name: 'Baja de usuarios',
    subject: 'Basso in %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Conferma account eliminato</strong><br><br>
    <span style="font-size:15px;">
      Ciao,<br><br>
      Come da te richiesto durante la tua ultima visita su %%ecommerceName%%, ti confermiamo che l'account utente %%email%%  è stato eliminato dal nostro database.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 2

  3: {
    name: 'Recordarios de contraseña',
    subject: 'Ricorda la password di %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recupero password</strong><br><br>
    <span style="font-size:15px;">
      Ciao %firstName% %lastName%,<br><br>
      Come da te richiesto durante la tua ultima visita su %%ecommerceName%%, ti inviamo il link di accesso alla sezione dedicata al recupero della password:<br><br>
      <a href="%%lostPasswordLink%%" style="color:#000">Clicca qui per recuperare la password</a><br><br>
      Questo link sar&agrave; attivo solamente per le 24 ore successive al suo invio.<br><br>
      Ci auguriamo di vederti presto su <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 3

  4: {
    name: 'Cambio de contraseña',
    subject: 'Cambio della password per %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Modifica password</strong><br><br>
    <span style="font-size:15px;">
      Ciao  %%firstName%% %%lastName%%,<br><br>
      Ti confermiamo che la tua password è stata modificata.<br><br>
      Accertati di conservare le credenziali in un luogo sicuro per gli accessi futuri<br><br>
      Ci auguriamo di vederti presto su <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 4

  5: {
    name: 'Registro de newsletter',
    subject: 'Iscrizione alla newsletter in %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Iscrizione alla newsletter</strong><br><br>
    <span style="font-size:15px;">
      Ciao<br><br>
      Grazie per esserti iscritto alla nostra newsletter. Riceverai presto informazioni sulle nostre attivit&agrave;, notizie sulla nostra azienda e le novit&agrave; relative ai prodotti e alle promozioni.<br><br>
      Ci auguriamo di vederti presto su <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>
    </span>
  </td>
</tr>
`,
    footer: {
      html: `
      <tr>
        <td bgcolor="#E8E8E8" style="padding: 30px 30px 15px 30px;">
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
                Per ulteriori informazioni, leggi la nostra %%privacy%% e %%termsOfUse%%.
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
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Cancellare</span></a>
      <span style="color:#000;font-size:10px;">l'iscrizione alla Newsletter</span>
    </td>
  </tr>
</table>
`
    }
  }, // end 5

  6: {
    name: 'Recomendación de wishlist',
    subject: '%%anonymousName%% ti consiglia i tuoi prodotti %%ecommerceName%% preferiti',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Wishlist consigliata</strong><br><br>
    <span style="font-size:15px;">
      Il tuo amico/a %%anonymousName%% (%%anonymousEmail%%) ti invia questo prodotto a cui potresti essere interessato.<br><br>
      Se desideri maggiori informazioni sul prodotto puoi contattarci su <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br><br>
      Cordiali saluti, il team di %%ecommerceName%%
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
              Prodotti consigliati
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
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prodotto</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prezzo</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';">
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
                  <strong >Prezzo</strong><br>
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
    subject: '%%anonymousName%% consiglia un prodotto da %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recomendación de producto</strong><br><br>
    <span style="font-size:15px;">
      Il tuo amico/a %%anonymousName%% (%%anonymousEmail%%) ti invia questo prodotto a cui potresti essere interessato.<br><br>
      Se desideri maggiori informazioni sul prodotto puoi contattarci su <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br><br>
      Cordiali saluti, il team di %%ecommerceName%%
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
              Prodotti consigliati
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
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prodotto</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prezzo</td>
                  </tr>

                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';">
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
                  <strong >Messaggio del tuo amico/a:</strong><br>
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
    subject: 'Modulo di contatto %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Modulo di contatto</strong><br><br>
    <span style="font-size:15px;">
      Nome: %%anonymousFirstName%%<br>
      Email: %%anonymousEmail%%<br>
      Telefono: %%anonymousPhone%%<br>
      Motivo della richiesta:  %%queryMotive%%<br>
      Messaggio: %%comments%%
    </span>
  </td>
</tr>
`
  }, // end 8

  9: {
    name: 'Consulta de producto',
    subject: 'Consultazione sul prodotto %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Richiesta relativa al prodotto</strong><br><br>
    <span style="font-size:15px;">
      Nome: %%anonymousFirstName%%<br>
      Cognome: %%anonymousLastName%%<br>
      Email: %%anonymousEmail%%<br>
      Telefono: %%anonymousPhone%%<br>
      Messaggio: %%comments%%<br><br>
      Nome Prodotto: %%name%%<br>
      Codice Prodotto: %%sku%%
    </span>
  </td>
</tr>
`
  }, // end 9

  10: {
    name: 'Confirmación de pedido',
    subject: 'Conferma d\'ordine - %%orderNumber%% - %%ecommerceName%%',
    html: `
<style type="text/css">
  ul {
    list-style-type: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Conferma d'ordine</strong><br>
    <span style="font-size:15px;">
      Ti ringraziamo per la fiducia. Il tuo acquisto è andato a buon fine. Qui di seguito potrai visualizzare i dettagli dell'ordine
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif;" align="right">
            <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="30%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" >
                  NB: dell'ordine:<br>
                  Data dell'ordine:<br>
                  Stato:<br>
                </td>
                <td width="80%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                  <strong>%%orderNumber%% </strong><br>
                  <strong>%%orderDate%%</strong><br>
                  <strong>Confermato</strong><br>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif;" align="right">
            <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="50%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" >
                  <strong>Indirizzo di fatturazione:</strong><br>
                  %%firstName%% %%lastName%%<br>
                  %%address%% <br>
                  %%zip%%  %%city%%<br>
                  %%state%%<br>
                </td>
                <td width="50%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                  <strong>Indirizzo di spedizione:</strong><br>
                  %%shippingFirstName%%  %%shippingLastName%% <br>
                  %%shippingAddress%% <br>
                  %%shippingZip%%  %%shippingCity%% <br>
                  %%shippingState%% <br>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Dettagli dell'ordine
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
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prodotto</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Quantit</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prezzo</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                            <div style="font-size: 10px;">%productOptions%</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                  <!-- %/loop% -->

                  <!-- %ifOrderGifts% -->
                  <!-- %giftsLoop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage%" alt="%name%" onerror="this.style.display='none';">
                          </td>
                          <td style="padding: 10px 0px;">
                            <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;">&nbsp;</td>
                  </tr>
                  <!-- %/giftsLoop% -->
                  <!-- %/ifOrderGifts% -->

                </tbody>
              </table>
              <table align="center" cellpadding="0" cellspacing="0" width="88%" style="color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;">
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">%%shipperName%%  %%shippingTypeName%%</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span> %%shippingMethodWithPrice%% </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">%%paymentMethod%% </td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%paymentMethodPrice%% </span>
                    </span>
                  </td>
                </tr>
                <!-- %%ifOrderDiscount%% -->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Sconti</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>- %%orderDiscounts%%</span>
                    </span>
                  </td>
                </tr>
                <!-- %%/ifOrderDiscount%% -->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Totale parziale</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%orderTotalWithoutTaxes%%  </span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Imposte</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%orderTaxes%% </span>
                    </span>
                  </td>
                </tr>
                <!--%%ifOrderBalanceCodes%%-->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Buoni acquisto</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>- %%orderBalanceCodes%%</span>
                    </span>
                  </td>
                </tr>
                <!--%%/ifOrderBalanceCodes%%-->
                <tr>
                  <td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Totale</td>
                  <td height="32" width="75" bgColor="#f4f4f4" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">
                    <span>
                      <span>%%total%%</span>
                    </span>
                  </td>
                </tr>

              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <!-- %%ifComments%% -->
        <tr>
          <td>
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong >Commenti:</strong><br>
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
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;" cellspacing="0" cellpadding="0">
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
    subject: 'Scarica la newsletter %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Conferma cancellazione iscrizione newsletter</strong><br><br>
    <span style="font-size:15px;">
      Ciao<br><br>
      La tua iscrizione alla nostra newsletter è stata cancellata con successo.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 11

  12: {
    name: 'Apadrinamiento',
    subject: 'Il tuo amico vuole sponsorizzarti',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Richiesta di sponsorizzazione</strong><br><br>
    <span>
      Ciao,<br><br>
      %%firstName%% ti invita ad unirti a <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>
      Diventa socio e registrati qui:
    </span>
    <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>
    Grazie per il tuo sostegno.<br><br>
    Cordiali saluti, il team di %%ecommerceName%%
  </td>
</tr>
`
  }, // end 12

  13: {
    name: 'Apadrinamiento completo',
    subject: 'Il tuo sponsorizzato ha effettuato un acquisto: goditi il tuo sconto.',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>Sponsorizzazione completata</strong><br><br>
    <span>
      Ciao,<br><br>
      Uno dei tuoi amici ha appena effettuato un acquisto nel nostro negozio per un valore superiore a XX (€) quindi, ti offriamo uno sconto di XX sul tuo prossimo ordine.<br><br>
      sul tuo prossimo ordine <br><br>
      Grazie per il tuo sostegno.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 13

  14: {
    name: 'Petición devolución',
    subject: 'Richiesta di ritorno %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Informazioni sulla richiesta di reso</strong><br><br>
    <span style="font-size:15px;">
      Ciao %firstName% %lastName%, <br><br>
      Siamo lieti di comunicarti che la tua richiesta di reso è stata confermata.<br><br>
      Numero d'ordine: %%orderNumber%%<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 14

  15: {
    name: 'Pedido incompleto',
    subject: 'Ordine incompleto di%%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Informazioni ordine incompleto</strong><br><br>
    <span style="font-size:15px;">
      Ciao %firstName% %lastName%, <br><br>
      Durante la tua ultima visita al nostro negozio, hai aggiunto al carrello i seguenti prodotti, ma non hai completato l'ordine.<br><br>
      Clicca <a target="_blank" href="%recoverOrderLink%" style="color:#000;">qui</a> se desideri recuperare il tuo ordine. <br><br>
      Cordiali saluti, il team di %%ecommerceName%%
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
              Dettagli dell'ordine incompleto
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
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prodotto</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Quantit</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prezzo</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';">
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
    subject: 'Notifica del vettore',
    html: ``
  }, // end 16

  17: {
    name: 'Verificación de correo',
    subject: 'Verifica dell\'indirizzo e-mail - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Verifica dell'indirizzo e-mail</strong><br><br>
    <span style="font-size:15px;">
      Ciao %firstName% %lastName%,<br><br>
      Grazie per esserti registrato su %%ecommerceURL%%. Per favore attiva il tuo account cliccando <a href="%verifyLink%" style="color:#000;">qui</a>.<br><br>
      Ci auguriamo di vederti presto su <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 17

  18: {
    name: 'Cuenta activada',
    subject: 'Attivazione account - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Attivazione account</strong><br><br>
    <span style="font-size:15px;">
      Ciao %firstName% %lastName%,<br><br>
      Ti informiamo che il tuo account su %%ecommerceURL%% è stato attivato correttamente.<br><br>
      Per visualizzare i tuoi dati e tutte le informazioni relative al tuo account accedi tramite il pannello di controllo: <a href="%%ecommerceURL%%" style="color:#000">Modifica il tuo profilo</a><br><br>
      Ci auguriamo di vederti presto su <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
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
    subject: 'Stock disponibile',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>
      Disponibilit&agrave; del prodotto <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a>
    </strong>
    %productOptions%<br><br>
    <span style="font-size:15px;">
      Ciao,<br><br>
      L'articolo che tanto desideravi è ora disponibile!
    </span>
    <span style="font-size:15px;">
      Ti ricordiamo che questo messaggio e-mail fornisce delle informazioni indicative riguardo alla disponibilit&agrave; dell'articolo e tale disponibilit&agrave; dipende da molti fattori (persone interessate, pezzi disponibili).
      Questo messaggio è stato inviato a tutti i clienti interessati a questo articolo, di conseguenza è possibile che molto presto non sia pi&ugrave; disponibile.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 20

  22: {
    name: 'Blog - Notificación de Nuevo Artículo',
    subject: 'Nuovo articolo nel blog di %ecommerceName%!',
    html: `
<!-- %loop% -->
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    In seguito puoi leggere gli ultimi articoli pubblicati su <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br><br>
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
    <span style="font-size:15px;">%%postShortText%%<br><br><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>Continua a leggere!</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
  }, // end 22

  23: {
    name: 'Blog - Notificación de Nuevo Comentario',
    subject: 'Nuovo commento %%postName%% - %%blogName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Qualcuno ha appena risposto all'articolo "<a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br><br>
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
          <span style="font-size:15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Continua a leggere!</strong></a>.</span>
        </td>
      </tr>
    </table>
  </td>
</tr>
`
  }, // end 23

  24: {
    name: 'Blog - Email de Bienvenida',
    subject: 'Benvenuto a %%blogName%%!',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>¡Benvenuto a <a href="%%blogUrl%%" style="color:#000;">%%blogName%%</a>!</strong><br><br>
    <span style="font-size:15px;">
      Ciao,<br><br>
      Grazie per esserti iscritto al nostro blog. Riceverai presto via mail i nuovi articoli, le informazioni relative agli sconti, alle promozioni, ai regali e le informazioni importanti che riguardano l'attivit&agrave; del nostro negozio online.<br><br>
      Ci auguriamo di vederti presto su <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      Cordiali saluti, il team di %%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 24

  25: {
    name: 'Confirmar suscripción de Stock',
    subject: 'Iscrizione all\'avviso di disponibilit&agrave;',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Iscrizione all'avviso di disponibilit&agrave; del prodotto <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">
      Ciao,<br><br>
      Ti sei iscritto agli avvisi di disponibilit&agrave; del %name%
    </span>
    %productOptions%<br>
    <span style="font-size:15px;">
    Nel caso in cui questo articolo fosse nuovamente disponibile ti avviseremo immediatamente per fare in modo che non ti sfugga.<br><br>
    Cordiali saluti, il team di %%ecommerceName%%
  </span>
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
