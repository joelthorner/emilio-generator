// v3 file template
export const LANGUAGE_CA = {
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
                  Per més informació, llegeixi la nostra %%privacy%% i %%termsOfUse%%.
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

    1 : {
      name: 'Bienvenida',
      subject: 'Gràcies per donar-se d\'alta a %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Benvinguts a %%ecommerceName%%!</strong><br><br>
    <span style="font-size:15px;">Hola  %firstName% %lastName%, <br><br>
    Ens complau confirmar-li la creació del seu compte de client a %%ecommerceURL%%.<br><br>
    Gràcies al seu compte de client podrà actualitzar el seu perfil i contrasenya, consultar el seu historial de comandes i altra informació del seu interès.<br><br>Esperem veure'l aviat a <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>
    Atentament, l'equip de %%ecommerceName%%</span>
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
                  Per més informació, llegeixi la nostra %%privacy%% i %%termsOfUse%%.
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
      <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Donar-se de baixa</a> <span style="color:#333;font-size:10px;">de la subscripció de Newsletter</span>
      </span>
    </td>
  </tr>
</table>
`
      }
    }, // end 1

    2 : {
      name: 'Baja de usuarios',
      subject: 'Baixa a %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Confirmació de compte eliminat</strong><br><br>
    <span style="font-size:15px;">Hola,<br><br>D'acord a la sol·licitud durant la teva recent visita a %%ecommerceName%%, confirmem que el teu compte d'usuari %%email%% ha sigut eliminat de la nostra base de dades.<br><br>Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 2

    3 : {
      name: 'Recordarios de contraseña',
      subject: 'Recordar contrasenya de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recordar contrasenya</strong><br><br>
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br><br>
    D'acord a la sol·licitud durant la teva recent visita a %%ecommerceName%%, aquí tens la teva direcció d'accés a la zona de recuperació de contrasenya:<br><br>
    <a href="%%lostPasswordLink%%" style="color:#000">Fes clic aquí per recuperar la teva contrasenya</a><br><br>
    Aquest enllaç només serà vàlid durant les 24 hores següents al moment del seu enviament.<br><br>
    Esperem veure't aviat a <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
    Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 3

    4 : {
      name: 'Cambio de contraseña',
      subject: 'Canvi de contrasenya de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Canvi de contrasenya</strong><br><br>
    <span style="font-size:15px;">Hola %%firstName%% %%lastName%%,<br><br>
    Et confirmem que la teva contrasenya ha sigut modificada.<br><br>
    Assegura't d'anotar les teves credencials en un lloc segur per futures referències.<br><br>
    Esperem veure't aviat a <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
    Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 4

    5 : {
      name: 'Registro de newsletter',
      subject: 'Subscripció a la newsletter a %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Subscripció a la newsletter</strong><br><br>
    <span style="font-size:15px;">Hola<br><br>
    Gràcies per subscriure't al nostre butlletí de notícies. Aviat rebràs informació sobre activitats, notícies sobre la nostra empresa i novetats en productes i promocions.<br><br>
    Esperamos verte pronto en <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a></span>
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
                  Per més informació, llegeixi la nostra %%privacy%% i %%termsOfUse%%.
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
      <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Donar-se de baixa</a> <span style="color:#333;font-size:10px;">de la subscripció de Newsletter</span>
      </span>
    </td>
  </tr>
</table>
`
      }
    }, // end 5

    6 : {
      name: 'Recomendación de wishlist',
      subject: '%%anonymousName%% et recomana els seus productes preferits de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recomanació de wishlist</strong><br><br>
    <span style="font-size:15px;">El teu amic/ga %%anonymousName%% (%%anonymousEmail%%) t'envia aquest producte que pot resultar del teu interès.<br><br>
    Si necessites més informació sobre aquest producte pots contactar amb nosaltres a <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br><br>
    Atentament, l'equip de  %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Productes recomanats</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producte</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preu</td>
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
                  <strong>Missatge del teu amic/ga:</strong><br>
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

    7 : {
      name: 'Recomendación de producto',
      subject: '%%anonymousName%% et recomana un producte de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recomanació de producte</strong><br><br>
    <span style="font-size:15px;"> el teu amic/ga %%anonymousName%% (%%anonymousEmail%%) t'envía aquest producte que pot resultar del teu interès.<br><br>
    Si necessites més informació sobre aquest producte pots contactar amb nosaltres a<a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br><br>
    Atentament, l'equip de  %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Productes recomanats</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producte</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preu</td>
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
                  <strong>Missatge del teu amic/ga:</strong><br>
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

    8 : {
      name: 'Contacto general',
      subject: 'Formulari de contacte de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Formulari de contacte</strong><br><br>
    <span style="font-size:15px;">Nom: %%anonymousFirstName%%<br>Email: %%anonymousEmail%%<br>Telèfon: %%anonymousPhone%%<br>Motiu de consulta:  %%queryMotive%%<br>Missatge: %%comments%%</span>
  </td>
</tr>
`
    }, // end 8

    9 : {
      name: 'Consulta de producto',
      subject: 'Consulta sobre producte de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Consulta sobre producte</strong><br><br>
    <span style="font-size:15px;">Nom: %%anonymousFirstName%%<br>Cognoms: %%anonymousLastName%%<br>Email: %%anonymousEmail%%<br>Telèfon: %%anonymousPhone%%<br>Missatge: %%comments%%<br><br>Nom del producte: %%name%%<br>Referència del producte: %%sku%%</span>
  </td>
</tr>
`
    }, // end 9

    10 : {
      name: 'Confirmación de pedido',
      subject: 'Confirmació de comanda - %%orderNumber%% - %%ecommerceName%%',
      html : `
<style type="text/css">
  ul {
    list-style-type: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
<tr>
  <td style="padding: 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Confirmació de comanda</strong><br><br>
    <span style="font-size:15px;">Moltes gràcies per confiar en nosaltres. La seva compra ha sigut processada correctament. A continuació et mostrem les dades de la comanda.</span>
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
                  <b>Núm. de la comanda:</b><br>
                  %%orderNumber%%
                </td>
                <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                  <b>Data de la comanda:</b><br>
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
                    <b>Mètode de pagament:</b><br>
                    %%paymentMethod%%
                  </td>
                  <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                    <b>Mètode d'enviament:</b><br>
                    %%shipperName%% %%shippingTypeName%%
                  </td>
                </tr>
              </table>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Adreça</span></td></tr>
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
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Resum de la comanda</span></td></tr>
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
                            <div><br>Quantitat: %quantity%</div>
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
                              <span style="color: #454545; text-decoration: none">%name% <span style="font-size: 10px;">(Regal)</span></span>
                            </a>
                            <div><br>Quantitat: %quantity%</div>
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
                    Total: %%total%%
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
                  <strong>Comentaris:</strong><br>
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

    11 : {
      name: 'Baja de newsletter',
      subject: 'Baixa de la newsletter de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Confirmació de la baixa de la newsletter</strong><br><br>
    <span style="font-size:15px;">Hola<br><br>Has sigut dona't de baixa amb èxit de la nostra newsletter.<br><br>Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 11

    12 : {
      name: 'Apadrinamiento',
      subject: 'El teu amic et vol apadrinar',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Sol·licitud d'apadrinament</strong><br><br>
    <span style="font-size:15px;">Hola,<br><br>%%firstName%% t'invita a unir-te a  <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>
    Fes-te soci i registra't aquí: <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>
    Gràcies pel teu suport<br><br>Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 12

    13 : {
      name: 'Apadrinamiento completo',
      subject: 'El teu apadrinament ha realitzat una compra: disfruta del teu descompte.',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Apadrinament completat</strong><br><br>
    <span style="font-size:15px;">
      Hola,<br><br>
      Un dels teus amics acaba de fer una compra a la nostra botiga de més de XX (€) de valor, per tant, t'oferim un descompte de XX en la pròxima comanda.<br><br>
      El descompte entrará automáticament en vigor en la teva prxima comanda. <br><br>
      Gràcies pel teu suport.<br><br>Atentament, l'equip de %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 13

    14 : {
      name: 'Petición devolución',
      subject: 'Petició de devolució %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Informació de la petició de devolució</strong><br><br>
    <span style="font-size:15px;">Hola %firstName% %lastName%, <br><br>Ens complau confirmar-te la petició de la teva devolució.<br><br>Número de comanda: %%orderNumber%%<br><br>Atentament, l'equip %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 14

    15 : {
      name: 'Pedido incompleto',
      subject: 'Comanda no completada de %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Informació d la comanda no completada</strong><br><br>
    <span style="font-size:15px;">Hola %firstName% %lastName%, <br><br>A la teva ultima visita a la nostra botiga, vas afegir els següents productes a la cistella de la compra, però no has completat la comanda.<br><br>
      Fes clic <a target="_blank" href="%recoverOrderLink%" style="color:#000;">aquí</a> si desitges recuperar la teva comanda. <br><br>Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Detalls de la comanda no completada</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producte</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Quantitat</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preu</td>
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

    16 : {
      name: 'Notificación transportista',
      subject: 'Notificació transportista',
      html : ``
    }, // end 16

    17 : {
      name: 'Verificación de correo',
      subject: 'Verificació de correu - %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Verificació de correu</strong><br><br>
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br><br>
    Gràcies per registrar-te a %%ecommerceURL%%. Per favor activa el teu compte fent clic <a href="%verifyLink%"  style="color:#000;">aquí</a>.<br><br>
    Esperem veure't aviat a <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
    Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 17

    18 : {
      name: 'Cuenta activada',
      subject: 'Activació del compte- %%ecommerceName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Activació del compte</strong><br><br>
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br><br>
    Et notifiquem que el teu compte a %%ecommerceURL%% ha sigut activat correctament.<br><br>
    Per veure les teves dades i tota la informació referent al teu compte accedeix a través del panell de control: <a href="%%ecommerceURL%%" style="color:#000">Editar el teu perfil</a><br><br>
    Esperem veure't aviat a <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
    Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 18

    19 : {
      name: 'Aviso a proveedores',
      subject: '',
      html : ``
    }, // end 19

    20 : {
      name: 'Stock disponible',
      subject: 'Stock disponible',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Stock disponible del producte <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br><br>
    <span style="font-size:15px;">Hola,<br><br>L'article que tant volíes ja està disponible!</span>
    <span style="font-size:15px;">
      Volem recordar-te que aquest email aporta informació orientativa sobre la disponibilitat d'aquest artícle i depen de molts factors (persones interesades, unitats disponibles).<br>
      Hem enviat aquest email a tots els clients interessats en l'artícle, per tant es posible que s'esgoti molt aviat.<br><br>
      Atentament, l'equip de %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 20

    22 : {
      name: 'Blog - Notificación de Nuevo Artículo',
      subject: 'Nou article del blog de %ecommerceName%!',
      html : `
<!-- %loop% -->
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    A continuació pots llegir els últims articles publicats a <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br><br>
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
    <span style="font-size:15px;">%%postShortText%%<br><br><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>Segueix llegint!</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
    }, // end 22

    23 : {
      name: 'Blog - Notificación de Nuevo Comentario',
      subject: 'Nou comentari a %%postName%% - %%blogName%%',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Algú acaba de respondre l'article "<a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br><br>
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
          <span style="font-size:15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Segueix llegint!</strong></a>.</span>
        </td>
      </tr>
    </table>

  </td>
</tr>
`
    }, // end 23

    24 : {
      name: 'Blog - Email de Bienvenida',
      subject: 'Benvingut a %%blogName%%!',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Benvingut a <a href="%%blogUrl%%"  style="color:#000;">%%blogName%%</a>!</strong><br><br>
    <span style="font-size:15px;">Hola,<br><br>
    Gracies per subscriure't al nostre blog. Aviat rebrás els nous articles per email, informació sobre descomptes, promocions, regals y dades d'interés relacionats a l'activitat de la botiga online.<br><br>
    Esperem veure't aviat a <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
    Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 24

    25 : {
      name: 'Confirmar suscripción de Stock',
      subject: 'Subscripció de stock',
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Subscripció de stock del producte <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">Hola,<br><br>T'has subscrit als avisos de stock de %name%</span>
    %productOptions%<br>
    <span style="font-size:15px;">En cas de que tornem a rebre aquest artícle t'avisarem d'inmediat per a que no se t'escapi.<br><br>Atentament, l'equip de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 25

    26 : {
      name: 'SocialCurrency - Socialización',
      subject: '',
      html : ``
    }, // end 26

    27 : {
      name: 'SocialCurrency - Notificación incentivos',
      subject: '',
      html : ``
    }, // end 27

    32 : {
      name: 'Documento de pedido',
      subject: '',
      html : ``
    }, // end 32

    33 : {
      name: 'Documento de albarán de entrega',
      subject: '',
      html : ``
    }, // end 33

    34 : {
      name: 'Documento de factura',
      subject: '',
      html : ``
    }, // end 34

    35 : {
      name: 'Documento de factura rectificativa',
      subject: '',
      html : ``
    }, // end 35

    36 : {
      name: 'Activación Two Factor Auth',
      subject: '',
      html : ``
    }, // end 36

    37 : {
      name: 'Activación Two Factor Auth',
      subject: '',
      html : ``
    }, // end 37

    38 : {
      name: 'Enviar código dispositivo Two Factor Auth',
      subject: '',
      html : ``
    }, // end 38

    39 : {
      name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
      subject: '',
      html : ``
    }, // end 39

  } // end emails
};
