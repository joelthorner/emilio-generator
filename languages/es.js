// no tabular continguts preserve spaces amb ``

DATA.es = {

	header : 
`<table width="100%" bgcolor="#eee" border="0" cellpadding="0" cellspacing="0" class="principalTable" style="padding:25px;background-color:#eee;padding-bottom:0px;">

  <tr>
    <td>
   <!--[if (gte mso 9)|(IE)]>
    <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="principalTable">
      <tr>
       <td>
       <![endif]-->     
       <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%;max-width: 600px;">

        <tr>
          <td bgcolor="#fff" class="header" style="padding: 20px;">
            <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="text-align:center;">  
              <tr>
                <td style="">
                  <a href="%%ecommerceURL%%">
                    <img class="fix" src="%%imagesURL%%logoEmail.jpg" width="210" height="auto" border="0" alt="" style="height: auto;">
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>`,

	footer : 
`
        <tr>
          <td class="footer" bgcolor="#E8E8E8" style="padding: 30px 30px 15px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">    
              <tr>
                <td align="center" style="">
                  <table border="0" cellspacing="10" cellpadding="0">
                    <tr>
                      %%Pages-501-Loop%%
                      <td style="text-align: center;">
                        <a href="%%pageLink%%" style="padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;" target="%%pageTarget%%"> %%pageName%% </a>
                      </td>
                      %%/Pages-501-Loop%%
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding: 12px 0 12px 0px;">
                  <table border="0" cellspacing="8" cellpadding="0">
                    <tr>
                      %%Banners-502-Loop%% 
                      <td width="30" style="text-align: center; ">
                        <a href="%%BannerLink%%" target="">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                      %%/Banners-502-Loop%%
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      %%Pages-503-Loop%% 
                      <td style="text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                        <span style="color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                          %%pageContent%%
                        </span>
                      </td>
                      %%/Pages-503-Loop%%
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>

                %%Pages-504-Loop%% 
                <td align="center" class="footercopy" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
                %%/Pages-504-Loop%%  

              </tr>
              <tr>
                <td align="center" heigth="50" class="footercopy" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                  Para más información, lee nuestra %%privacy%% y  %%termsOfUse%%.
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
  <td align="center" class="footercopy" style="font-family: sans-serif;font-size: 14px;color: #ffffff;">   
    <span class="hide" style="color:#000;font-size:10px;">&nbsp; </span>
  </td>
</tr>
</table>`,

	mails : {

		36	: 
``, 
// end 36

		37	: 
``, 
// end 37

		12	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 12

		13	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 13

		19	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 19

		11	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 11

		2	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 2

		1	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 1

		24	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 24

		22	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 22

		23	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 23

		4	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 4

		10	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 10

		9	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 9

		8	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 8

		18	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 18

		33	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 33

		34	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 34

		35	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 35

		32	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 32

		38	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 38

		16	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 16

		39	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 39

		15	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 15

		14	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 14

		7	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 7

		6	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 6

		3	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 3

		5	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 5

		17	: 
`Hola, %%firstName%% %%lastName%%:<br /><br />
Te confirmamos que tu contraseña ha sido modificada.<br /><br />
Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br /><br />
Esperamos verte pronto en <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br /><br />
Saludos,<br /><br />El equipo de %%ecommerceName%%`, 
// end 17

	}
};
