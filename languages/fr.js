// language file v2.0.2

DATA.fr = {

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
                      <td width="30" style="text-align: center; ">
                        <a href="%%BannerLink%%" target="">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                    <!-- %%/Banners-502-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="">
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
                <td align="center" class="footercopy" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
              <!-- %%/Pages-504-Loop%% -->  
            </tr>
            <tr>
              <td align="center" heigth="50" class="footercopy" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                Pour plus d'informations, lire notre %%privacy%% i %%termsOfUse%%.
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
    subject : "Bienvenue a %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong> Bienvenue a %%ecommerceName%%</strong><br /><br />
    <span style="font-size:15px;">
      Bonjour, %%firstName%% %%lastName%%:<br /><br />
      Nous avons le plaisir de vous confirmer la création de votre compte client sur %%ecommerceURL%%.<br /><br />
      Votre compte client vous permettra de mettre à jour votre profil et votre mot de passe, et de consulter votre historique de commandes parmi d’autres informations.<br /><br />
      Nous espérons vous voir bientôt sur  %%ecommerceURL%%<br /><br />
      Sincères salutations.<br /><br />
      L’équipe %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
      <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Se désabonner</a> <span style="color:#333;font-size:10px;">de la Newsletter</span>
    </span>
  </td>
</tr>
`
  }, // end 1

  2 : {
    subject : "Annulation de compte %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Annulation newsletter </strong><br /><br />
    <span style="font-size:15px;">
    Bonjour,<br/><br/>

    Nous vous confirmons l’annulation de votre inscription au site.<br/><br/>

    Cordialement.<br/><br/>

    L’équipe %%ecommerceName%%</span>
  </td>
</tr>  
`
  }, // end 2

  3 : {
    subject : "Rappel de mot de passe de %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Rappel de mot de passe</strong><br><br>
    <span style="font-size:15px;">

    Bonjour, %%firstName%% %%lastName%%:<br><br>Conformément à votre demande lors de la visite à %%ecommerceName%%, voici le lien qui vous donne accés à la zone pour la récupération de votre mot de passe:<br><br><span><a href="%%lostPasswordLink%%" style="color:#000">Cliquez ici pour récupérer le mot de passe</a></span><br><br>Ce lien sera valable uniquement pendant 24 heures suivant votre demande de récupération:<br><br>Nous espérons vous revoir bientôt sur.<br><br>Sincères salutations,<br><br>L'équipe %%ecommerceName%%<br>
  </td>
</tr>
`
  }, // end 3

  4 : {
    subject : "Changement de mot de passe - %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong> Changement de mot de passe </strong><br><br>
    <span style="font-size:15px;">Bonjour, %%firstName%% %%lastName%%:<br><br>Se il vous plaît noter que votre mot de passe a été changé. <br><br> 
    Au plaisir de vous voir bientôt <a href="%%ecommerceURL%%" style="font-weight:bold">%%ecommerceName%%</a><br><br>Cordialement,<br><br>L'équipe %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 4

  5 : {
    subject : "Newsletter - %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Subscripción a la newsletter</strong><br><br>
    <span style="font-size:15px;">Bonjour<br/><br/>Vous êtes bien inscrit(e) à notre newsletter, vous recevrez désormais tous nos e-mails concernant les nouveautés et promotions de la e-boutique.<br/><br/>Rendez-nous visite sur <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a></span>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
      <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Se désabonner</a> <span style="color:#333;font-size:10px;">de la Newsletter</span>
    </span>
  </td>
</tr>
`
  }, // end 5

  6 : {
    subject : "%%anonymousName%% vous recommande les produits de %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recommande les produits de %%ecommerceName%%</strong><br /><br />
    <span style="font-size:15px;">
    Bonjour,<br /><br />Ton ami %%anonymousName%% (%%anonymousEmail%%) vous envoie ce produit qui pourrait intéresser.<br /><br />Si vous avez besoin de plus amples informations sur ce produit, vous pouvez nous contacter à  <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br /><br />Cordialement, L'équipe  %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Produits recommandés</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produit</td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prix</td>
                  </tr>
                  <!-- %loop% -->
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
                  <!-- %/loop% -->
                  
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
                  <strong style="">Message de votre ami:</strong><br/>
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
    subject : "%%anonymousName%% vous recommande ce produit de %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Recommandation d'un produit</strong><br /><br />
    <span style="font-size:15px;">Bonjour %%friendName%% <br /><br />Un ami %%anonymousName%% (%%anonymousEmail%%) vous envoie ce produit qui pourrait intéresser.<br /><br />Si vous avez besoin de plus amples informations sur ce produit, vous pouvez nous contacter à  <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br /><br />Cordialement, L'équipe  %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">



      <tr><td>&nbsp;</td></tr>
      <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Produits recommandés</span></td></tr>
      <tr><td>&nbsp;</td></tr>
      <tr>
        <td width="" style="vertical-align: top">
          <div style="padding: 0 0">
            <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">

              <tr>
                <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produit</td>

                <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prix</td>
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
                <strong >Message à votre ami:</strong><br/>
                %%comments%% 

              </td>
            </tr>
          </table>        
        </td>
      </tr>
      <tr><td>&nbsp;</td></tr>

    </table>
  </td>
</tr>
`
  }, // end 7

  8 : {
    subject : "Contacte general de %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Contacte general</strong><br><br>
    <span style="font-size:15px;"><p>Prénom: %%anonymousFirstName%%<br />
    Nom: %%anonymousLastName%%<br />
    Email: %%anonymousEmail%%<br />
    Téléphone: %%anonymousPhone%%<br />
    Message: %%comments%%</p></span>
  </td>
</tr>
`
  }, // end 8

  9 : {
    subject : "Question sur un article de %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Question sur un article </strong><br><br>
    <span style="font-size:15px;">
      <p>Prénom: %%anonymousFirstName%%<br />
      Nom: %%anonymousLastName%%<br />
      Email: %%anonymousEmail%%<br />
      Téléphone: %%anonymousPhone%%<br />
      Message: %%comments%%</p>
      <br />
      Titre de l’article: %%name%%<br />
      Référence de l’article: %%sku%%
    </span>
  </td>
</tr>
`
  }, // end 9

  10 : {
    subject : "Confirmation de commande - %%ecommerceName%%",
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
    <strong>Confirmation de commande</strong><br>
    <span style="font-size:15px;">
      Bonjour %%firstName%% %%lastName%%,<br><br>

      Nous vous remercions de faire vos achats à %%ecommerceName%%. Nous vous confirmons que la commande numéro %%orderNumber%% a été traitée correctement.<br><br>
    </span>
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
                  Numéro de commande:<br>
                  Date de la commande:<br>
                  État:<br>
                </td>
                <td width="80%" style="vertical-align: middle; background:#d9efef;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" class="dir2">
                  <strong>%%orderNumber%% </strong><br>
                  <strong>%%orderDate%%</strong><br>
                  <strong>Confirmé</strong><br>
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
                  <strong>Adresse de facturation:</strong><br>
                  %%firstName%% %%lastName%%<br>
                  %%address%% <br>
                  %%zip%%  %%city%%<br>
                  %%state%%<br>
                </td>
                <td width="50%" style="vertical-align: middle; background:#d9efef;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" class="dir2">
                  <strong>Adresse de livraison:</strong><br>
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
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Détails de la commande</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produit</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Quantité</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prix</td>
                  </tr>
                  <!-- %loop% -->
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
                  <!-- %/loop% -->
                  
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
                <!-- %%ifOrderDiscount%% -->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Réductions</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span class="price">
                      <span class="integerPrice">- %%orderDiscounts%%</span>
                    </span>
                  </td>
                </tr>
                <!-- %%/ifOrderDiscount%% -->
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
        <!-- %%ifComments%% -->
        <tr>
          <td>
            <table class="orderComments" width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong>Commentaires:</strong><br/>
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
    subject : "Annulation newsletter - %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>Annulation newsletter </strong><br /><br />
  <span style="font-size:15px;">
  Bonjour,<br/><br/>
  L’annulation de l’inscription à la newsletter s’est effectuée correctement.<br/><br/>
  Cordialement.<br/><br/>
  L’équipe %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 11

  12 : {
    subject : "Vous ami veut vous parrainez",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Demande de parrainage</strong><br><br>
    <span>Bonjour,<br><br>%%firstName%% vous invite à rejoindre  <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>Devenez membre et inscrivez-vous ici: </span><a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>Merci pour votre soutien.<br><br>Cordialement, L'équipe %%ecommerceName%%
  </td>
</tr>
`
  }, // end 12

  13 : {
    subject : "Votre mentor ont fait un achat: profiter de votre remise.",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>Parrainage complété</strong><br><br>
    <span>Bonjour,<br/><br/>Un de vos amis vient de faire un achat dans notre boutique sur XX (€) valeur, par conséquent, nous offrons un rabais de XX sur votre prochaine commande.<br/><br/>La réduction entrera en vigueur automatiquement sur votre prochaine commande.<br/><br/>Merci pour votre soutien.<br /><br />Sincèrement, l'équipe %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 13

  14 : {
    subject : "Demande de retour %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Demande d'information Retour</strong><br /><br />
    <span style="font-size:15px;">Bonjour %firstName% %lastName%, <br /><br />Nous sommes heureux de confirmer votre demande de remboursement.<br/><br/>Numéro de commande: %%orderNumber%%<br/><br/>L'équipe %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 14

  15 : {
    subject : "Demande incomplète %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Incomplete demande d'information</strong><br /><br />
    <span style="font-size:15px;">Bonjour %%firstName%% %%lastName%%, <br /><br />Sur votre dernière visite à notre magasin, vous avez ajouté les produits suivants à votre panier, mais n'a pas terminé la commande.<br /><br />
      Cliquez <a target="_blank" href="%recoverOrderLink%" style="color:#000;">ici</a> pour récupérer votre commande. <br/><br/>Sincèrement, l'équipe %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Détails commande incomplète</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produit</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Quantité</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Prix</td>
                  </tr>
                  <!-- %loop% -->
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
    subject : "Notification du transporteur",
    html : `
TEXTHERE
`
  }, // end 16

  17 : {
    subject : "Vérification e-mail - %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Vérification e-mail</strong><br /><br />
    <span style="font-size:15px;">Bonjour %firstName% %lastName%,<br/><br/>Merci à la signature à  %%ecommerceURL%%. S'il vous plaît activer votre compte ,  cliquez <a href="%verifyLink%"  style="color:#000;">ici </a>.<br /><br />Nous espérons vous voir bientôt dans <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br /><br />Cordialement, L'équipe %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 17

  18 : {
    subject : "Activation du compte - %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Activation du compte</strong><br><br>
    <span style="font-size:15px;">Bonjour %firstName% %lastName%,<br/><br/>Nous vous informons que votre compte %%ecommerceURL%% a été activé avec succès.<br /><br />Pour afficher vos données et toutes les informations concernant votre compte accessible via le panneau de commande: <a href="%%ecommerceURL%%" style="color:#000">Modifier votre profil</a><br /><br />Nous espérons vous voir bientôt dans <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br /><br />Cordialement, L'équipe %%ecommerceName%%</span>
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
    <strong>Stock disponible du produit <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br/><br>
    <span style="font-size:15px;">Bonjour,<br/><br/>L'article que vous voulez tant est déjà disponible!</span>
    <span style="font-size:15px;">Nous souhaitons vous rappeler que cet e-mail fournit des conseils sur la disponibilité de cet article et dépend de nombreux facteurs (personnes intéressées, unités disponibles). Nous avons envoyé cet email à tous les clients intéressés par l'article, il est donc possible d'être épuisé très bientôt.<br/><br/>L'équipe %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 20

  22 : {
    subject : "%%postName%% - %%blogName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Ci-dessous vous pouvez lire les derniers articles publiés dans <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br/><br/>
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

    <span style="font-size:15px;">%%postShortText%%<br /><br /><a href="%%postUrl%%" style="color:#000;text-decoration:none;"><strong>Continuer la lecture!</strong></a>.</span>
  </td>
</tr>
`
  }, // end 22

  23 : {
    subject : "Nouveau commentaire sur %%postName%% - %%blogName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Quelqu'un vient de répondre à l'article <a href="%%postUrl%%" style="color:#000">%%postName%%</a>.<br/><br/>
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
          <span style="font-size:15px;"><a href="%%postUrl%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Continuer à lire!</strong></a>.</span>
        </td>
      </tr>
    </table>
    

  </td>
</tr>
`
  }, // end 23

  24 : {
    subject : "Bienvenue a %%blogName%%!",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bienvenue a <a href="%%blogUrl%%"  style="color:#000;">%%blogName%%</a>!</strong><br/><br/>
    <span style="font-size:15px;">Bonjour, %%firstName%% %%lastName%%,<br/><br/>Merci pour votre inscription à notre blog. Bientôt vous recevrez les nouveaux articles par email, des informations sur des remises, des promotions, des cadeaux et des informations générales concernant l'activité du boutique en ligne.<br /><br />Nous espérons vous voir bientôt sur <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a>.<br /><br />L’équipe %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 24

  25 : {
    subject : "Abonnement de stock",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Abonnement de stock de produit <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">Bonjour,<br/><br/> Vous avez souscrit à des avis d'achat %name%</span>
    %productOptions%<br/>
    <span style="font-size:15px;">Dans le cas où nous recevons à nouveau cet article, nous vous en informerons immédiatement afin que vous ne puissiez pas vous échapper.<br/><br/>Cordialement, l'équipe %%ecommerceName%%</span>
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
