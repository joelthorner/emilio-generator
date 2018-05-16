// language file v2.0.2

DATA.es = {

  header : `
<table width="100%" bgcolor="#eee" border="0" cellpadding="0" cellspacing="0" class="principalTable" style="padding:25px;background-color:#eee;padding-bottom:0px;">
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
                    <img class="fix" src="%%imagesURL%%logoEmail.jpg" width="210" height="auto" border="0" alt="%%ecommerceName%%" style="height: auto;">
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
`,

  footer : `
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
</table>
`,

  mails : {

    1 : {
      subject : "Gracias por darte de alta en %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>¡Bienvenido a %%ecommerceName%%!</strong><br><br>
    <span style="font-size:15px;">Hola  %firstName% %lastName%, <br><br>Nos complace confirmarte la creación de tu cuenta de cliente en %%ecommerceURL%%.<br><br>Gracias a tu cuenta de cliente podrás actualizar tu perfil y contraseña, consultar tu historial de pedidos y otra información de tu interés.<br><br>Esperamos verte pronto en <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
      <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Darse de baja</a> <span style="color:#333;font-size:10px;">de la subscripción de Newsletter</span>
    </span>
  </td>
</tr>
`
    }, // end 1
    
    2 : {
      subject : "Baja en %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Confirmación de cuenta eliminada</strong><br><br>
    <span style="font-size:15px;">Hola,<br/><br/>Conforme a lo solicitado durante tu reciente visita a %%ecommerceName%%, confirmamos que tu cuenta de usuario %%email%% ha sido eliminada de nuestra base de datos.<br/><br/>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 2

    3 : {
      subject : "Recordar contraseña de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recordar contraseña</strong><br><br>
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br/><br/>Conforme a lo solicitado durante tu reciente visita a %%ecommerceName%%, aquí tienes tu dirección de acceso a la zona de recuperación de contraseña:<br /><br /><a href="%%lostPasswordLink%%" style="color:#000">Click aquí para recuperar contraseña</a><br /><br />Este enlace solamente será válido durante las 24 horas siguientes al momento de su envío.<br /><br />Esperamos verte pronto en <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br /><br />Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 3

    4 : {
      subject : "Cambio contraseña de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Cambio de contraseña</strong><br><br>
    <span style="font-size:15px;">Hola  %%firstName%% %%lastName%%,<br><br>Te confirmamos que tu contraseña ha sido modificada.<br><br>Asegúrate de anotar tus credenciales en un lugar seguro para futuras referencias.<br><br>Esperamos verte pronto en <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 4

    5 : {
      subject : "Subscripción a la newsletter en %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Subscripción a la newsletter</strong><br><br>
    <span style="font-size:15px;">Hola<br/><br/>Gracias por suscribirte a nuestro boletín de noticias. Pronto recibirás información sobre actividades, noticias sobre nuestra empresa y novedades en productos y promociones.<br/><br/>Esperamos verte pronto en <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a></span>
  </td>
</tr>
`
    }, // end 5

    6 : {
      subject : "%%anonymousName%% te recomienda sus productos favoritos de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recomendación de wishlist</strong><br /><br />
    <span style="font-size:15px;"> Tu amigo/a %%anonymousName%% (%%anonymousEmail%%) te envía este producto que puede resultarte de interés.<br /><br />Si necesitas más información acerca de este producto puedes contactar con nosotros en <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br /><br />Atentamente, el equipo de  %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Productos recomendados</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producto</td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Precio</td>
                  </tr>
                  %loop%
                  <tr class="productRow">
                    <td width="" style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" class="productSmallImage miniBasketProductImage" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    
                    <td width="" style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span class="price"><span class="integerPrice">%price%</span></span></td>
                  </tr>
                  %/loop%
                  
                </tbody>
              </table>
              
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table class="orderComments" width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong style="">Mensaje de tu amigo/a:</strong><br/>
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
      subject : "%%anonymousName%% te recomienda un producto de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recomendación de producto</strong><br /><br />
    <span style="font-size:15px;"> Tu amigo/a %%anonymousName%% (%%anonymousEmail%%) te envía este producto que puede resultarte de interés.<br /><br />Si necesitas más información acerca de este producto puedes contactar con nosotros en <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br /><br />Atentamente, el equipo de  %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Productos recomendados</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producto</td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Precio</td>
                  </tr>
                  
                  <tr class="productRow">
                    <td width="" style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" class="productSmallImage miniBasketProductImage" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    
                    <td width="" style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span class="price"><span class="integerPrice">%price%</span></span></td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table class="orderComments" width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong style="">Mensaje de tu amigo/a:</strong><br/>
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
      subject : "Formulario de contacto de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Formulario de contacto</strong><br><br>
    <span style="font-size:15px;">Nombre: %%anonymousFirstName%%<br />Email: %%anonymousEmail%%<br />Teléfono: %%anonymousPhone%%<br />Motivo de consulta:  %%queryMotive%%<br />Mensaje: %%comments%%</span>
  </td>
</tr>
`
    }, // end 8

    9 : {
      subject : "Consulta sobre producto de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Consulta sobre producto</strong><br><br>
    <span style="font-size:15px;">Nombre: %%anonymousFirstName%%<br />Apellidos: %%anonymousLastName%%<br />Email: %%anonymousEmail%%<br />Teléfono: %%anonymousPhone%%<br />Mensaje: %%comments%%<br /><br />Nombre Producto: %%name%%<br />Referencia Producto: %%sku%%</span>
  </td>
</tr>
`
    }, // end 9

    10 : {
      subject : "Confirmación de pedido - %%orderNumber%% - %%ecommerceName%%",
      html : `
<style type="text/css">
  ul {
    list-style-type: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Confirmación de pedido</strong><br>
    <span style="font-size:15px;">Muchas gracias por confiar en nosotros. Su compra ha sido procesada correctamente. A continuación te mostramos los datos del pedido</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif; " class="dir1" align="right">
            <table class="direcciones" width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="30%" style="vertical-align: middle;background:#d9efef;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" class="dir1">
                  Nº de pedido:<br>
                  Fecha del pedido:<br>
                  Estado:<br>
                </td>
                <td width="80%" style="vertical-align: middle; background:#d9efef;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" class="dir2">
                  <strong>%%orderNumber%% </strong><br>
                  <strong>%%orderDate%%</strong><br>
                  <strong>Confirmado</strong><br>
                </td>
              </tr>  
            </table>
          </td>  
        </tr>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif; " class="dir1" align="right">
            <table class="direcciones" width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="50%" style="vertical-align: middle;background:#d9efef;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" class="dir1">
                  <strong>Dirección de facturación:</strong><br>
                  %%firstName%% %%lastName%%<br>
                  %%address%% <br>
                  %%zip%%  %%city%%<br>
                  %%state%%<br>
                </td>
                <td width="50%" style="vertical-align: middle; background:#d9efef;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" class="dir2">
                  <strong>Dirección de envío:</strong><br>
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
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Detalles del pedido</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producto</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Cantidad</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Precio</td>
                  </tr>
                  %loop%
                  <tr class="productRow">
                    <td width="" style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" class="productSmallImage miniBasketProductImage" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                            <div style="font-size: 10px;">%productOptions%</div>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    <td width="" style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td width="" style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span class="price"><span class="integerPrice">%price%</span></span></td>
                  </tr>
                  %/loop%
                  
                </tbody>
              </table>
              <table class="subTotals" align="center" cellpadding="0" cellspacing="0" width="88%" style="color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;">
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Subtotal</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span class="price">
                      <span class="integerPrice">%%orderTotalWithoutTaxes%%  </span> 
                    </span>
                  </td>
                </tr>
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">%%shipperName%%  %%shippingTypeName%%</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span class="price">
                      <span class="integerPrice"> %%shippingMethodWithPrice%% </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">%%paymentMethod%% </td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span class="price">
                      <span class="integerPrice">%%paymentMethodPrice%% </span>
                    </span>
                  </td>
                </tr>
                %%ifOrderDiscount%%
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Descuentos</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span class="price">
                      <span class="integerPrice">- %%orderDiscounts%%</span>
                    </span>
                  </td>
                </tr>
                %%/ifOrderDiscount%%
                <tr>
                  <td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Total</td>
                  <td height="32" width="75" bgColor="#f4f4f4" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">
                    <span class="price">
                      <span class="integerPrice">%%total%% </span>
                    </span>
                  </td>
                </tr>   
                
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        %%ifComments%%
        <tr>
          <td>
            <table class="orderComments" width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong style="">Comentarios:</strong><br/>
                  %%orderComments%% 
                  
                </td>
              </tr>
            </table>        
          </td>
        </tr>
        %%/ifComments%%
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td bgColor="#f4f4f4">
            <table width="88%" align="center" class="paymentSystem" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;" cellspacing="0" cellpadding="0">
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
      subject : "Baja de la newsletter de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Confirmación de la baja de la newsletter</strong><br><br>
    <span style="font-size:15px;">Hola<br><br>Has sido dado de baja con éxito de nuestra newsletter.<br><br>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
      <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Darse de baja</a> <span style="color:#333;font-size:10px;">de la subscripción de Newsletter</span>
    </span>
  </td>
</tr>
`
    }, // end 11

    12 : {
      subject : "Tu amigo te quiere apadrinar",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Solicitud de apadrinamiento</strong><br><br>
    <span>Hola,<br><br>%%firstName%% te invita a unirte a  <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>Hazte socio y regístrate aquí: </span><a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>Gracias por tu apoyo.<br><br>Atentamente, el equipo de %%ecommerceName%%
  </td>
</tr>
`
    }, // end 12

    13 : {
      subject : "Tu apadrinado ha realizado una compra: disfruta de tu descuento.",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>Apadrinamiento completado</strong><br><br>
    <span>Hola,<br/><br/>Uno de tus amigos acaba de hacer una compra en nuestra tienda de más de XX (€) de valor, por lo tanto, te ofrecemos un descuento de XX en tu próximo pedido.<br/><br/>El descuento entrará automáticamente en vigor en tu próximo pedido. <br/><br/>Gracias por tu apoyo.<br/><br/>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 13

    14 : {
      subject : "Petición de devolución %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Información de la petición de devolución</strong><br /><br />
    <span style="font-size:15px;">Hola %firstName% %lastName%, <br /><br />Nos complace confirmarte la petición de tu devolución.<br/><br/>Número de pedido: %%orderNumber%%<br/><br/>Atentamente, el equipo %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 14

    15 : {
      subject : "Pedido incompleto de %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Información del pedido incompleto</strong><br /><br />
    <span style="font-size:15px;">Hola %firstName% %lastName%, <br /><br />En tu última visita a nuestra tienda, añadiste los siguientes productos al carro de la compra, pero no completaste el pedido.<br /><br />
    Haz clic <a target="_blank" href="%recoverOrderLink%" style="color:#000;">aquí</a> si deseas recuperar tu pedido. <br/><br/>Atentamente, el equipo %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Detalles del pedido incompleto</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Producto</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Cantidad</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Precio</td>
                  </tr>
                  %loop%
                  <tr class="productRow">
                    <td width="" style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" class="productSmallImage miniBasketProductImage" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    <td width="" style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td width="" style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span class="price"><span class="integerPrice">%price%</span></span></td>
                  </tr>
                  %/loop%
                  
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
      subject : "Notificación transportista",
      html : `
TEXTHERE
`
    }, // end 16

    17 : {
      subject : "Verificación de correo - %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Verificación de correo</strong><br /><br />
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br/><br/>Gracias por registrarte en %%ecommerceURL%%. Por favor activa tu cuenta clicando <a href="%verifyLink%"  style="color:#000;">aquí</a>.<br /><br />Esperamos verte pronto en <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a>.<br /><br />Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 17

    18 : {
      subject : "Activación de cuenta - %%ecommerceName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Activación de cuenta</strong><br><br>
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br/><br/>Te notificamos que tu cuenta en %%ecommerceURL%% ha sido activada correctamente.<br /><br />Para ver tus datos y toda la información referente a tu cuenta accede a través del panel de control: <a href="%%ecommerceURL%%" style="color:#000">Editar tu perfil</a><br /><br />Esperamos verte pronto en <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br /><br />Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 18

    19 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 19

    20 : {
      subject : "Stock disponible",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Stock disponible del producto <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br/><br>
    <span style="font-size:15px;">Hola,<br/><br/>El artículo que tanto querías ya está disponible!</span>
    <span style="font-size:15px;">Queremos recordarte que este email aporta información orientativa sobre la disponibilidad de este artículo y depende de muchos factores (personas interesadas, unidades disponibles). Hemos enviado este email a todos los clientes interesados en este artículo, por lo que es posible que se agote muy pronto.<br/><br/>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 20

    22 : {
      subject : "%%postName%% - %%blogName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    A continuación puedes leer los últimos artículos publicados en <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br/><br/>
    <strong><a href="%%postUrl%%" style="color:#000;font-size:18px;text-decoration:none;">%%postName%%</a></strong>
  </td>
</tr>
<tr>
  <td align="center" style="">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="30" style="text-align: center; ">
          <a href="%%postUrl%%" style="color:#000;">
            <img class="fix" src="%%postSmallImage%%" height="auto" width="115" border="0" style="height: auto;" alt="%%postName%%">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-size:15px;">%%postShortText%%<br/><br/><a href="%%postUrl%%" style="color:#000;text-decoration:none;"><strong>Continúa Leyendo!</strong></a>.</span>
  </td>
</tr>
`
    }, // end 22

    23 : {
      subject : "Nuevo comentario en %%postName%% - %%blogName%%",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Alguien acaba de responder el artículo "<a href="%%postUrl%%" style="color:#000">%%postName%%</a>.<br/><br/>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <table border="0" cellspacing="10" cellpadding="0" width="100%">
      <tr>
        <td style="text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;" width="30%">
          <img class="fix" src="%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75" width="75" border="0" height="75">
        </td>
        <td style="text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;" width="70%">
          <a style="color:#000;text-decoration:none;" href="%%postUrl%%#comment%%commentId%%">%%commentNick%%</a><br/>
                  %%commentContent%%<br/><br/>
          <span style="font-size:15px;"><a href="%%postUrl%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Continúa Leyendo!</strong></a>.</span>
        </td>
      </tr>
    </table>
  </td>
</tr>
`
    }, // end 23

    24 : {
      subject : "¡Bienvenido a %%blogName%%!",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>¡Welcome to <a href="%%blogUrl%%" style="color:#000;">%%blogName%%</a>!</strong><br/><br/>
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br/><br/>Gracias por suscribirte a nuestro blog. Pronto recibirás los nuevos artículos por email, información sobre descuentos, promociones, regalos y datos de interés relativos a la actividad de la tienda online.<br/><br/>Esperamos verte pronto en <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a>.<br/><br/>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 24

    25 : {
      subject : "Suscripción de stock",
      html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Suscripción de stock del producto <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">Hola,<br/><br/>Te has suscrito a los avisos de stock de %name%</span>
    %productOptions%<br/>
    <span style="font-size:15px;">En caso de que volvamos a recibir este artículo te avisaremos de inmediato para que no se te escape.<br/><br/>Atentamente, el equipo de %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 25

    26 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 26

    27 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 27

    32 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 32

    33 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 33

    34 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 34

    35 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 35

    36 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 36

    37 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 37

    38 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 38

    39 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 39

  } // end emails
};
