// v3 file template
export const LANGUAGE_SV = {
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
                  För mer information läs vår %%privacy%% och %%termsOfUse%%.
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
      subject: 'Tack för din registrering på %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Välkommen till %%ecommerceName%%!</strong><br><br>
    <span style="font-size:15px;">
      Hej  %firstName% %lastName%, <br><br>
      Vi är glada att informera dig om att ditt kundkonto i %%ecommerceURL%% har skapats.<br><br>
      Med ditt kundkonto kan du nu uppdatera din profil och ditt lösenord, visa din orderhistorik och andra detaljer som kan vara av intresse för dig.<br><br>
      Vi hoppas att vi ses snart <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>
      De %%ecommerceName%% Team
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
                  För mer information läs vår %%privacy%% och %%termsOfUse%%.
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
    <td style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
      <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Avbeställa</a> <span style="color:#333;font-size:10px;">nyhetsbrevet</span>
      </span>
    </td>
  </tr>
</table>
`
      }
    }, // end 1

    2 : {
      name: 'Baja de usuarios',
      subject: 'Avregistrering från - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Ditt konto är nu borttaget</strong><br><br>
    <span style="font-size:15px;">
      Hej!<br><br>
      Enligt din begäran efter ditt besök hos %%ecommerceName%%, kan vi nu bekräfta att ditt användarkonto %%email%% har blivit borttaget från vår databas.<br><br>
      Du är alltid välkommen tillbaka till oss!<br><br>
      Med vänliga hälsningar<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
    }, // end 2

    3 : {
      name: 'Recordarios de contraseña',
      subject: 'Lösenordsåterställning - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Lösenordsåterställning</strong><br><br>
    <span style="font-size:15px;">På begäran efter ditt senaste besök på %%ecommerceName%% så kommer här en länk där du kan återställa ditt lösenord:<br><br><a href="%%lostPasswordLink%%" style="color:#000">Klicka här</a><br><br>
      Observera att koden är giltig i 24 timmar efter du mottagit detta mail.<br><br>VHoppas vi syns snart i <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>
      Med vänliga hälsningar<br><br>
      De %%ecommerceName%% Team</span>
  </td>
</tr>
`
    }, // end 3

    4 : {
      name: 'Cambio de contraseña',
      subject: 'Byt lösenord på %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Byta lösenord</strong><br><br>
    <span style="font-size:15px;">
      Hej %%firstName%% %%lastName%%,<br><br>Vi vill informera dig om att ditt lösenord på <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a> nu är ändrat.<br>
      Skriv ner ditt lösenord för framtida besök.<br><br>
      Vi syns i <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a><br><br><br>
      Med vänliga hälsningar<br><br>
      Teamet bakom %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 4

    5 : {
      name: 'Registro de newsletter',
      subject: 'Prenumeration på %%ecommerceName%% nyhetsbrev',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Prenumeration på vårat nyhetsbrev</strong><br><br>
    <span style="font-size:15px;">
      Hej!<br><br>Tack för att du registrerat dig till vårt nyhetsbrev.<br>
      Snart kommer du få nyhetesbrev med information om dom hetaste produkterna, kampanjer och ny information.<br><br><br>
      Med vänliga hälsningar<br><br>
      De %%ecommerceName%% Team
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
                  För mer information läs vår %%privacy%% och %%termsOfUse%%.
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
    <td style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
      <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Avbeställa</a> <span style="color:#333;font-size:10px;">nyhetsbrevet</span>
      </span>
    </td>
  </tr>
</table>
`
      }
    }, // end 5

    6 : {
      name: 'Recomendación de wishlist',
      subject: '%%anonymousName%% rekommenderar sina favoritprodukter %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Wishlist rekommendation</strong><br><br>
    <span style="font-size:15px;">
      Er vän %%anonymousName%% (%%anonymousEmail%%) Tror att ni kan vara intresserad av denna/dessa produkter.<br><br>
      Vill ni ha mer information om denna/dessa produkter, vänligen kontakta oss på <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br><br><br>
      Med vänliga hälsningar<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
          Rekommenderade produkter</span></td></tr>
          <tr><td>&nbsp;</td></tr>
          <tr>
            <td style="vertical-align: top">
              <div style="padding: 0 0">
                <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                  <tbody>
                    <tr>
                      <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>

                      <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Pris</td>
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
                    <strong >Meddelande från er vän:</strong><br>
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
      subject: '%%anonymousName%% rekommenderar sina favoritprodukter %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Product recommendation</strong><br><br>
    <span style="font-size:15px;">
      Hello %%friendName%%,<br>Your friend %%anonymousName%% (%%anonymousEmail%%) thinks this item could be of your interest.<br><br>
      If you need further information about this item you can contact us at <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br><br>
      De %%ecommerceName%% Team
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
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Recommended products</span>
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

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Pris</td>
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
                  <strong >Your friend's personal message:</strong><br>
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
      subject: 'Kontaktformulär från %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Kontaktformulär</strong><br><br>
    <span style="font-size:15px;">
      Förnamn: %%anonymousFirstName%%<br>
      Efternamn: %%anonymousLastName%%<br>
      Email: %%anonymousEmail%%<br>
      Telefon: %%anonymousPhone%%<br>
      Typ av fråga: %%queryMotive%%<br>
      Meddelande: %%comments%%
    </span>
  </td>
</tr>
`
    }, // end 8

    9 : {
      name: 'Consulta de producto',
      subject: 'Fråga ang produkt från %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Fråga om en produkt</strong><br><br>
    <span style="font-size:15px;">
      Förnamn: %%anonymousFirstName%%<br>
      Efternamn: %%anonymousLastName%%<br>
      Email: %%anonymousEmail%%<br>
      Telefon: %%anonymousPhone%%<br>
      Meddelande: %%comments%%<br><br>
      Produktnamn: %%name%%<br>
      Artikelnummer: %%sku%%
    </span>
  </td>
</tr>
`
    }, // end 9

    10 : {
      name: 'Confirmación de pedido',
      subject: 'Orderbekräftelse - %%orderNumber%% - %%ecommerceName%%',
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
		<strong>Orderbekräftelse från %%ecommerceName%%</strong><br><br>
		<span style="font-size:15px;">
			Hej %%firstName%% %%lastname%%,<br>

			Tack för att du handlar hos oss. Vi bekräftar härmed att er order har behandlats.<br>
			Vi kommer att maila er när er order levereras. Vi bifogar även din order i den inkluderade pdf filen.<br><br>
			Din order
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
									Ordernummer:<br>
									Order datum:<br>
									Status:<br>
								</td>

								<td width="80%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
									<strong>%%orderNumber%% </strong><br>
									<strong>%%orderDate%%</strong><br>
									<strong>Bekräftad</strong><br>
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
									<strong>Faktura adress:</strong><br>
									%%firstName%% %%lastName%%<br>
									%%address%% <br>
									%%zip%%  %%city%%<br>
									%%state%%<br>
								</td>
								<td width="50%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
									<strong>Leveransadress:</strong><br>
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
				<tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Orderdetaljer</span></td></tr>
				<tr><td>&nbsp;</td></tr>
				<tr>
					<td style="vertical-align: top">
						<div style="padding: 0 0">
							<table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
								<tbody>
									<tr>
										<td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>
										<td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Antal</td>
										<td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Pris</td>
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
									<td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Discount</td>
									<td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
										<span>
											<span>- %%orderDiscounts%%</span>
										</span>
									</td>
								</tr>
								<!-- %%/ifOrderDiscount%% -->
								<tr>
									<td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Subtotal</td>
									<td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
										<span>
											<span>%%orderTotalWithoutTaxes%%  </span>
										</span>
									</td>
								</tr>

								<tr>
									<td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Taxes</td>
									<td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
										<span>
											<span>%%orderTaxes%%</span>
										</span>
									</td>
								</tr>
								<!-- %%ifOrderBalanceCodes%% -->
								<tr>
									<td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Vouchers</td>
									<td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
										<span>
											<span>- %%orderBalanceCodes%%</span>
										</span>
									</td>
								</tr>
								<!-- %%/ifOrderBalanceCodes%% -->
								<tr>
									<td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Totalt</td>
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
									<strong >Kommentarer:</strong><br>
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

    11 : {
      name: 'Baja de newsletter',
      subject: 'Avregistrering från nyhetsbrev - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Avregistrering nyhetsbrev</strong><br><br>
    <span style="font-size:15px;">
      Hej<br><br>
      Din avregistrering är nu slutförd.<br><br><br>
      Med vänliga hälsningar<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
    }, // end 11

    12 : {
      name: 'Apadrinamiento',
      subject: 'Din vän vill tipsa dig om något',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Sponsringsförfrågan</strong><br><br>
    <span style="font-size:15px;">Hej,<br><br> %%firstName%% bjuder in dig till <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>
    Registrera dig som medlem här: <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>
    Tack för din support.<br><br>De %%ecommerceName%% Team</span>
  </td>
</tr>
`
    }, // end 12

    13 : {
      name: 'Apadrinamiento completo',
      subject: 'Din sponsring blev precis utförd: njuta av din belöning',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Sponsring</strong><br><br>
    <span style="font-size:15px;">
      Hej!<br><br>
      En av din vänner har just gjort ett köp i vår webshop för ett värde över XX (€), därför ger vi dig en XX rabatt på din nästa order.<br><br>
      Rabatten kommer automatiskt att dras av i din nästa order.<br><br>
      Tack för din insats.<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
    }, // end 13

    14 : {
      name: 'Petición devolución',
      subject: 'Returförfrågan bekräftad %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Retur information</strong><br><br>
    <span style="font-size:15px;">
      Hej %firstName% %lastName%! <br><br>
      Din returförfrågan är nu bekräftad.<br><br>
      Order nummer: %%orderNumber%%<br><br><br>
      Med vänlig hälsning<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
    }, // end 14

    15 : {
      name: 'Pedido incompleto',
      subject: 'Ej slutförd beställning %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Ej slutförd beställning</strong><br><br>
    <span style="font-size:15px;">Hej %firstName% %lastName%!<br><br>I ditt senaste besök hos oss  i %%ecommerceName%% lade du till följande artiklar i din varukorg, men slutförde inte din beställning.<br><br>
    Klicka <a target="_blank" href="%recoverOrderLink%" style="color:#000;">här</a> för att återgå till din varukorg.<br><br><br>Med vänliga hälsningar<br><br>De %%ecommerceName%% Team</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Varukorg:</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Quantity</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Pris</td>
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

    16 : {
      name: 'Notificación transportista',
      subject: '%%ecommerceName%% - Leveransbesked',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-size:15px;">
      Hej %firstName% %lastName%!<br><br>
      Vi är glada över att kunna meddela att er order %orderNumber% har skickats från vårt lager.<br><br>
      Du kan följa din order via %shippingTypeName% med trackingnummer: %trackingNumber%<br><br><br>
      Med vänlig hälsning<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
      `
    }, // end 16

    17 : {
      name: 'Verificación de correo',
      subject: 'Email bekräftelse - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Email bekräftelse</strong><br><br>
    <span style="font-size:15px;">
      Hej %firstName% %lastName%!<br><br>
      Tack för att du registrerat dig på %%ecommerceURL%%. Vänligen följ länken för att verifiera din mailadress: <a href="%verifyLink%" style="color:#000;">Klicka här</a>.<br><br>
      Vi syns på <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br><br>
      Med vänliga hälsningar<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
    }, // end 17

    18 : {
      name: 'Cuenta activada',
      subject: 'Konto skapat - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Konto skapat</strong><br><br>
    <span style="font-size:15px;">
      Hej %firstName% %lastName%,<br><br>
      Ditt konto hos %%ecommerceURL%% har nu blivit skapat.<br><br>
      Du kan granska och ändra dina uppgifter närsomhelst via kontrollpanelen: <a href="%%ecommerceURL%%" style="color:#000">Redigera din profil</a><br><br>

      Välkommen till %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 18

    19 : {
      name: 'Aviso a proveedores',
      subject: '',
      html: ``
    }, // end 19

    20 : {
      name: 'Stock disponible',
      subject: 'Lager tillgänglig',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Lager i lager av produkt <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br><br>
    <span style="font-size:15px;">Hej,<br><br>Artikeln du vill ha så mycket är redan tillgänglig!</span>
    <span style="font-size:15px;">
      Vi vill påminna dig om att det här meddelandet innehåller vägledning om tillgängligheten av den här artikeln och beror på många faktorer (intresserade personer, tillgängliga enheter).<br>
      Vi har skickat det här mailet till alla kunder som är intresserade av artikeln, så det är möjligt att bli utmattad snart.<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
    }, // end 20

    22 : {
      name: 'Blog - Notificación de Nuevo Artículo',
      subject: ' Nytt blogginlägg! - %ecommerceName%',
      html: `
<!-- %loop% -->
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Här kan du läsa dom senaste inläggen i <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br><br>
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
    <span style="font-size:15px;">%%postShortText%%<br><br><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>Läs mer.</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
    }, // end 22

    23 : {
      name: 'Blog - Notificación de Nuevo Comentario',
      subject: 'Det finns en ny kommentar på %%postName%% - %%blogName%%',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Det finns en ny kommentar på "<a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br><br>
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
          <span style="font-size:15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Läs mer.</strong></a>.</span>
        </td>
      </tr>
    </table>

  </td>
</tr>
`
    }, // end 23

    24 : {
      name: 'Blog - Email de Bienvenida',
      subject: 'Välkommen till %%blogName%%!',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Välkommen till <a href="%%blogUrl%%"  style="color:#000;">%%blogName%%</a>!</strong><br><br>
    <span style="font-size:15px;">
      Hej,<br><br>
      Tack för att du registrerade dig i vår blogg.<br>
      Snart kommer du få nya blogg inlägg med information om dom hetaste produkterna, kampanjer och ny information.<br><br>
      Vi syns på <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a>.<br><br><br>
      Med vänliga hälsningar<br><br>
      De %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
    }, // end 24

    25 : {
      name: 'Confirmar suscripción de Stock',
      subject: 'Prenumeration av lager',
      html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Aktieabonnemang på produkt <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">Hej,<br><br>Du har prenumererat på %name% stock notices</span>
    %productOptions%<br>
    <span style="font-size:15px;">Om vi får den här artikeln igen, meddelar vi dig omedelbart.<br><br>
    Vi hoppas att vi ses snart <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>De %%ecommerceName%% Team</span>
  </td>
</tr>
`
    }, // end 25

    26 : {
      name: 'SocialCurrency - Socialización',
      subject: '',
      html: ``
    }, // end 26

    27 : {
      name: 'SocialCurrency - Notificación incentivos',
      subject: '',
      html: ``
    }, // end 27

    32 : {
      name: 'Documento de pedido',
      subject: '',
      html: ``
    }, // end 32

    33 : {
      name: 'Documento de albarán de entrega',
      subject: '',
      html: ``
    }, // end 33

    34 : {
      name: 'Documento de factura',
      subject: '',
      html: ``
    }, // end 34

    35 : {
      name: 'Documento de factura rectificativa',
      subject: '',
      html: ``
    }, // end 35

    36 : {
      name: 'Activación Two Factor Auth',
      subject: '',
      html: ``
    }, // end 36

    37 : {
      name: 'Activación Two Factor Auth',
      subject: '',
      html: ``
    }, // end 37

    38 : {
      name: 'Enviar código dispositivo Two Factor Auth',
      subject: '',
      html: ``
    }, // end 38

    39 : {
      name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
      subject: '',
      html: ``
    }, // end 39

  } // end emails
};
