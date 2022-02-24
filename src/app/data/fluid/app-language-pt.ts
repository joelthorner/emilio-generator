// v3 file template
export const LANGUAGE_PT = {
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
                Para mais informações, leia nossa %%privacy%% e %%termsOfUse%%.
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
      subject: 'Bem-vindo a %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bem-vindo a %%ecommerceName%%!</strong><br><br>
    <span style="font-size:15px;">
     Olá %%firstName%%,<br><br>
      Temos o prazer de confirmar a criação da sua conta de cliente em %%ecommerceURL%%.<br><br>
      Recomendamos-lhe que guarde este e-mail com os seus dados de acesso à nossa loja online, de maneira a que a sua próxima compra seja mais fácil e rápida.  <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>
      A equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
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
                Para mais informações, leia nossa %%privacy%% e %%termsOfUse%%.
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
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Anular subscrição</span></a>
      <span style="color:#000;font-size:10px;">do boletim informativo</span>
    </td>
  </tr>
</table>
`
      }
    }, // end 1

    2: {
      name: 'Baja de usuarios',
      subject: 'Baixa em %%ecommerceName%%',
      html: `
<tr>
 <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Confirmação de conta excluída</strong><br><br>
    <span style="font-size:15px;">Hola,<br><br>Confirmamos que a sua conta foi eliminada da nossa base de dados.
    Esperamos por si em <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>.<br><br>A equipa  de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a></span>
  </td>
</tr>

`
    }, // end 2

    3: {
      name: 'Recordarios de contraseña',
      subject: 'Recordar a password %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Lembrar senha</strong><br><br>
    <span style="font-size:15px;">
      Olá, %firstName% %lastName%,<br><br>
      Conforme solicitado durante sua recente visita a %%ecommerceName%%, aqui está seu endereço de acesso à área de recuperação de senha:<br><br>
      <a href="%%lostPasswordLink%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">Clique aqui para recuperar a senha </a> <br> <br>
      Este link só será válido por 24 horas após o momento de sua entrega. <br> <br>
      Esperamos vê-lo em breve em <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>. <br> <br>
      Atenciosamente, a equipe de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
    </span>
  </td>
</tr>

`
    }, // end 3

    4: {
      name: 'Cambio de contraseña',
      subject: 'Modificação de password %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Modificação de password</strong><br><br>
    <span style="font-size:15px;">
      Olá  %%firstName%% %%lastName%%,<br><br>
      Confirmamos que a sua password foi modificada.<br><br>
      Recomendamos-lhe que conserve este email com os seus dados para que a sua futura compra seja mais fácil e rápida. <br><br>
      Esperamos por si em  <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">%%ecommerceName%%</a>.<br><br>
      A equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
    </span>
  </td>
</tr>

`
    }, // end 4

    5: {
      name: 'Registro de newsletter',
      subject: 'Subscrição Newsletter %%ecommerceName%%',
      html: `
<tr>
 <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong> Assinatura da newsletter </strong> <br> <br>
     <span style = "font-size: 15px;">
       Olá. <br> <br>
       Obrigado por se inscrever em nossa newsletter. Em breve você receberá informações sobre atividades, notícias sobre nossa empresa e novidades sobre produtos e promoções. <br> <br>
       Esperamos vê-lo em breve em <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
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
                Para mais informações, leia nossa %%privacy%% e %%termsOfUse%%.
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
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Anular subscrição</span></a>
      <span style="color:#000;font-size:10px;">do boletim informativo</span>
    </td>
  </tr>
</table>
`
      }
    }, // end 5

    6: {
      name: 'Recomendación de wishlist',
      subject: '%%anonymousName%% Recomende os seus produtos preferidos %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recomendação da lista de desejos</strong><br><br>
    <span style="font-size:15px;">
      O seu amigo %%anonymousName%% (%%anonymousEmail%%) envia-lhe os seus produtos preferidos.<br><br>
      Se necessitar de mais informações sobre este produto, pode contactar-nos em <a href="%%ecommerceURL%%" style="color:#000"> %%ecommerceName%% </a> <br> <br>
      Atenciosamente, a equipe de %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Productos recomendados</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producto</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Precio</td>
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
                  <strong>Mensaje de tu amigo/a:</strong><br>
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
      subject: '%%anonymousName%% recomenda-lhe um produto de  %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recomendação de produto</strong><br><br>
    <span style="font-size:15px;">
      O seu amigo %%anonymousName%% (%%anonymousEmail%%) envia-lhe os seus produtos preferidos.<br><br>
      Se necessitar de mais informações sobre este produto, pode contactar-nos em <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a> <br> <br>
      Atenciosamente, a equipe de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Productos recomendados</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producto</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Precio</td>
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
                  <strong>Mensaje de tu amigo/a:</strong><br>
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
      subject: 'Contacto Geral de %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Contacto Geral</strong><br><br>
    <span style="font-size:15px;">Nome: %%anonymousFirstName%%<br>
    Apelidos: %%anonymousLastName%%<br>
    Email: %%anonymousEmail%%<br>
    Telefone: %%anonymousPhone%%<br>
    Motivo da consulta:  %%queryMotive%%<br>
    Mensagem: %%comments%%<br></span>
  </td>
</tr>

`
    }, // end 8

    9: {
      name: 'Consulta de producto',
      subject: 'Dúvida sobre um produto %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Dúvida sobre um produto</strong><br><br>
    <span style="font-size:15px;"Nome: %%anonymousFirstName%%<br />
    Apelidos: %%anonymousLastName%%<br />
    Email: %%anonymousEmail%%<br />
    Telefone: %%anonymousPhone%%<br />
    Mensagem: %%comments%%<br />
    <br />
    Nome Produto: %%name%%<br />
    Referência Produto: %%sku%%</span>
  </td>
</tr>

`
    }, // end 9

    10: {
      name: 'Confirmación de pedido',
      subject: 'Confirmação pedido %%orderNumber%% - %%ecommerceName%%',
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
    <strong>Confirmação pedido</strong><br><br>
    <span style="font-size:15px;">Confirmamos que o seu pedido número %%orderNumber%% foi processado correctamente.</span>
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
                  <b>Número do pedido:</b><br>
                  %%orderNumber%%
                </td>
                <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                  <b>Data do pedido:</b><br>
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
                    <b>Forma de pagamento:</b><br>
                    %%paymentMethod%%
                  </td>
                  <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                    <b>Método de envio:</b><br>
                    %%shipperName%% %%shippingTypeName%%
                  </td>
                </tr>
              </table>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Endereço</span></td></tr>
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
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Resumo do pedido</span></td></tr>
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
                            <div><br>Quantidade: %quantity%</div>
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
                              <span style="color: #454545; text-decoration: none">%name% <span style="font-size: 10px;">(Presente)</span></span>
                            </a>
                            <div><br>Quantidade: %quantity%</div>
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
                  <strong>Comentarios:</strong><br>
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
      subject: 'Baixa da Subscrição %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Baixa da Subscrição</strong><br><br>
    <span style="font-size:15px;">Olá,<br><br>Confirmamos que foi eliminado da nossa lista de subscrição.<br><br>A equipa de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 11

    12: {
      name: 'Apadrinamiento',
      subject: 'Seu amigo quer te patrocinar',
      html: `
<tr>
 <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Pedido de patrocínio</strong><br><br>
    <span style="font-size:15px;">Olá,<br><br> %%firstName%% convida você a participar do  <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">%%ecommerceName%%</a><br><br>
    Torne-se um membro e registrador aqui: : <a href="%%urlRegisterSponsorShip%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">%%ecommerceName%%</a><br><br>
    Obrigado pelo seu apoio.<br><br>a equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a> </span>
  </td>
</tr>

`
    }, // end 12

    13: {
      name: 'Apadrinamiento completo',
      subject: 'Seu patrocinador acabou de concluir um pedido: aproveite os benefícios',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Patrocínio concluído</strong><br><br>
    <span style="font-size:15px;">
      Olá,<br><br>
      Um de seus amigos acabou de fazer uma compra em nossa loja por mais de XX (€), portanto, oferecemos um desconto XX em seu próximo pedido.<br><br>
      O desconto entrará automaticamente em vigor no seu próximo pedido.<br><br>
      Obrigado por seu apoio.<br><br>
      a equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a> </span>
    </span>
  </td>
</tr>
`
    }, // end 13

    14: {
      name: 'Petición devolución',
      subject: 'Pedido de devolução %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Informações sobre pedidos de devolução</strong><br><br>
    <span style="font-size:15px;">Olá, %firstName% %lastName%, <br><br>
    Temos o prazer de confirmar o seu pedido de reembolso.<br><br>Número de encomenda: %%orderNumber%%<br><br> a equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a> </span></span>
  </td>
</tr>
`
    }, // end 14

    15: {
      name: 'Pedido incompleto',
      subject: 'Encomenda incompleta %%ecommerceName%%',
      html: `
<tr>
 <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Informação incompleta do pedido</strong><br><br>
    <span style="font-size:15px;">Olá %firstName% %lastName%, <br><br> Em sua última visita à nossa loja %%ecommerceName%% você colocou o (s) item (ns) seguinte (s) nas compras carrinho, mas você não concluiu o pedido. <br><br>
    Clique <a target="_blank" href="%recoverOrderLink%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">aqui </a> recuperar seu carrinho.<br><br>a equipa de %%ecommerceName%% </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Shopping Cart:</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Product</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Quantity</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Price</td>
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
      subject: '',
      html: ``
    }, // end 16

    17: {
      name: 'Verificación de correo',
      subject: 'Confirmação de e-mail',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Verificação de e-mail</strong><br><br>
    <span style="font-size:15px;">
      Olá %firstName% %lastName%,<br><br>
      Obrigado por se registar em  %%ecommerceURL%%. Por favor, siga o link para verificar sua conta de e-mail: <a href="%verifyLink%"  style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">Clique aqui</a>.<br><br>
      Estamos ansiosos para vê-lo em <a href="%%ecommerceURL%%"  style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">%%ecommerceName%%</a>.<br><br>
      a equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
    </span>
  </td>
</tr>
`
    }, // end 17

    18: {
      name: 'Cuenta activada',
      subject: 'Conta ativada - %%ecommerceName%%',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Conta ativada</strong><br><br>
    <span style="font-size:15px;">
      Olà %firstName% %lastName%,<br><br>
      Temos o prazer de informar que sua conta de cliente em %%ecommerceURL%% foi ativada com sucesso.<br><br>
      Você pode visualizar e modificar todos os seus detalhes a qualquer momento acessando este painel de controle: <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> Edite seu perfil </a><br><br>
      We hope to see you soon in <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;">%%ecommerceName%%</a>.<br><br>
       A equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
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
      subject: 'Disponível em estoque',
      html: `
<tr>
 <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Estoque disponível do produto <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br><br>
    <span style="font-size:15px;">Olà,<br><br>O artigo que você quer tanto já está disponível!</span>
    <span style="font-size:15px;">
      Gostaríamos de lembrar que este e-mail fornece orientações sobre a disponibilidade deste artigo e depende de muitos fatores (pessoas interessadas, unidades disponíveis).
      Enviámos este email a todos os clientes interessados no artigo, pelo que é possível esgotar-se muito em breve.<br><br>
      A equipa  de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
    </span>
  </td>
</tr>
`
    }, // end 20

    22: {
      name: 'Blog - Notificación de Nuevo Artículo',
      subject: 'Nova postagem no blog% ecommerceName%!',
      html: `
<!-- %loop% -->
<tr>
 <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    Abaixo você pode ler os últimos artigos publicados em <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br><br>
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

    <span style="font-size:15px;">%%postShortText%%<br><br><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>Read More!</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
    }, // end 22

    23: {
      name: 'Blog - Notificación de Nuevo Comentario',
      subject: 'Novo comentário sobre %%postName%% - %%blogName%%',
      html: `
<tr>
 <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    Há um novo comentário na postagem <a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br><br>
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
          <span style="font-size:15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Leia mais!</strong></a>.</span>
        </td>
      </tr>
    </table>

  </td>
</tr>

`
    }, // end 23

    24: {
      name: 'Blog - Email de Bienvenida',
      subject: 'Bem-vindo ao %%blogName%%!',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bem-vindo a <a href="%%blogUrl%%"  style="color:#000;">%%blogName%%</a>!</strong><br><br>
    <span style="font-size:15px;">
      Olà,<br><br>
      Obrigado por sua inscrição em nosso blog. Em breve você receberá novos posts por e-mail, informações de recursos e produtos e promoções mais quentes.<br><br>
      Espero ver você em breve em<a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>  A equipa de <a href="%%ecommerceURL%%" style="color: #2a3a4a;text-decoration:none;font-weight:bolder;"> %%ecommerceName%% </a>
    </span>
  </td>
</tr>
`
    }, // end 24

    25: {
      name: 'Confirmar suscripción de Stock',
      subject: 'Subscrição de Ações',
      html: `
<tr>
  <td style="padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Assinatura de estoque de produtos <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">Olà,<br><br>Você se inscreveu nos anúncios de ações da %name%</span>
    %productOptions%<br>
    <span style="font-size:15px;">Caso recebamos este artigo novamente iremos notificá-lo imediatamente para que ele não escape.<br><br>Atenciosamente, a equipe de %% ecommerceName %%</span>
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
