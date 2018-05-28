// language file v2.0.2

DATA.en = {

  header : `
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

  footer : `
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
                  For more information, read our %%privacy%% and %%termsOfUse%%.
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
`,

  mails : {

  1 : {
    subject : "Thank you for signup to %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Welcome to %%ecommerceName%%!</strong><br><br>
    <span style="font-size:15px;">Hello  %firstName% %lastName%, <br><br>We are pleased to inform you that your customer account in %%ecommerceURL%% has been successfully created.<br><br>Thanks to your customer account now you can update your profile and password, view your order history and other details that may be of your interest.<br><br>
      We hope to see you soon in <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>The %%ecommerceName%% Team</span>
  </td>
</tr>
`,
    footer : `
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
                  For more information, read our %%privacy%% and %%termsOfUse%%.
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
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Unsubscribe</a> <span style="color:#333;font-size:10px;">from the Newsletter</span>
      </span>
    </td>
  </tr>
</table>
`
  }, // end 1

  2 : {
    subject : "Unsubscribe - %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Confirmation deleted account</strong><br><br>
    <span style="font-size:15px;">Hello,<br/><br/>As requested during your recent visit to %%ecommerceName%%, we confirm that your user account %%email%% has been removed from our database.<br/><br/>The %%ecommerceName%% Team</span>
  </td>
</tr> 
`
  }, // end 2

  3 : {
    subject : "Password recovery - %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Password recovery</strong><br><br>
    <span style="font-size:15px;">As requested during your recent visit to %%ecommerceName%% here's your address to access the password recovery zone:<br /><br /><a href="%%lostPasswordLink%%" style="color:#000">Click here</a><br /><br />
      Keep in mind that this access code will expire 24 hours after this email was sent.<br /><br />We hope to see you soon in <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
`
  }, // end 3

  4 : {
    subject : "Change password on %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Change password </strong><br><br>
    <span style="font-size:15px;">Hello  %%firstName%% %%lastName%%,<br><br>This email is to inform you that your customer account password has been changed.<br><br>Be sure to note your credentials in a safe place for future reference.<br><br>We hope to see you soon in <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team</span>
  </td>
</tr>
`
  }, // end 4

  5 : {
    subject : "Subscribe to %%ecommerceName%%  newsletter",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Subscription to the newsletter</strong><br><br>
    <span style="font-size:15px;">Hello<br/><br/>Thank you for your registration to our newsletter. Soon you will receive news about our company, information of features and hottest products and promotions.<br/><br/>We are looking forward to seeing you on <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a></span>
  </td>
</tr>
`,
    footer : `
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
                  For more information, read our %%privacy%% and %%termsOfUse%%.
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
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Unsubscribe</a> <span style="color:#333;font-size:10px;">from the Newsletter</span>
      </span>
    </td>
  </tr>
</table>
`
  }, // end 5

  6 : {
    subject : "%%anonymousName%% recommends their favourite products %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Wishlist recommend</strong><br /><br />
    <span style="font-size:15px;"> Your friend %%anonymousName%% (%%anonymousEmail%%) sends you this product that may be of interest for you.<br /><br />If you need more information about this product you can contact us on <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br /><br />The %%ecommerceName%% Team<</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        
        
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
          Recommended products</span></td></tr>
          <tr><td>&nbsp;</td></tr>
          <tr>
            <td style="vertical-align: top">
              <div style="padding: 0 0">
                <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                  <tbody>
                    <tr>
                      <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Product</td>
                      
                      <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Price</td>
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
                    <strong >Message from your friend:</strong><br/>
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
    subject : "%%anonymousName%% recommends you a product on %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Product recommendation</strong><br /><br />
    <span style="font-size:15px;"> Hello %%friendName%%,<br>Your friend %%anonymousName%% (%%anonymousEmail%%) thinks this item could be of your interest.<br /><br />If you need further information about this item you can contact us at <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        
        
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
          Recommended products</span></td></tr>
          <tr><td>&nbsp;</td></tr>
          <tr>
            <td style="vertical-align: top">
              <div style="padding: 0 0">
                <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                  <tbody>
                    <tr>
                      <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Product</td>
                      
                      <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Price</td>
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
                    <strong >Your friend's personal message:</strong><br/>
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
    subject : "Contact form of %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Contact form</strong><br><br>
    <span style="font-size:15px;">Name: %%anonymousFirstName%%<br />Lastname: %%anonymousLastName%%<br />Email: %%anonymousEmail%%<br />Phone: %%anonymousPhone%%<br />Query Motive:  %%queryMotive%%<br />Message: %%comments%%</span>
  </td>
</tr>
`
  }, // end 8

  9 : {
    subject : "Question about a product on %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Question about a product</strong><br><br>
    <span style="font-size:15px;">Name: %%anonymousFirstName%%<br />Lastname: %%anonymousLastName%%<br />Email: %%anonymousEmail%%<br />Phone: %%anonymousPhone%%<br />Message: %%comments%%<br /><br />Product name: %%name%%<br />Product sku: %%sku%%</span>
  </td>
</tr>
`
  }, // end 9

  10 : {
    subject : "Order confirmation - %%orderNumber%% - %%ecommerceName%%",
    html : `
<style type="text/css">
  ul {
    list-style-type: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Order confirmation </strong><br>
    <span style="font-size:15px;">Dear %%firstName%% %%lastname%%,<br>

      We confirm your order has been processed correctly.<br>
      Please find your order attached as a PDF file. <br>
      Your order details</span>
    </td>
  </tr>
  <tr>
    <td style="padding: 0px 0px;" align="center">
      <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
        <tbody>
          <tr>
            <td style="vertical-align: middle;font-family: sans-serif; " align="right">
              <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td width="30%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" >
                    Nº Order:<br>
                    Order date:<br>
                    State:<br>
                  </td>
                  <td width="80%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                    <strong>%%orderNumber%% </strong><br>
                    <strong>%%orderDate%%</strong><br>
                    <strong>Confirmed</strong><br>
                  </td>
                </tr>  
              </table>
            </td>  
          </tr>
          <tr>
            <td style="vertical-align: middle;font-family: sans-serif; " align="right">
              <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td width="50%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" >
                    <strong>Billing Address:</strong><br>
                    %%firstName%% %%lastName%%<br>
                    %%address%% <br>
                    %%zip%%  %%city%%<br>
                    %%state%%<br>
                  </td>
                  <td width="50%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                    <strong>Shipping Address:</strong><br>
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
          <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">Order details</span></td></tr>
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

                  </tbody>
                </table>
                <table align="center" cellpadding="0" cellspacing="0" width="88%" style="color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;">
                  <tr>
                    <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Subtotal</td>
                    <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                      <span>
                        <span>%%orderTotalWithoutTaxes%%  </span> 
                      </span>
                    </td>
                  </tr>
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
                    <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">Descuentos</td>
                    <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                      <span>
                        <span>- %%orderDiscounts%%</span>
                      </span>
                    </td>
                  </tr>
                  <!-- %%/ifOrderDiscount%% -->
                  <tr>
                    <td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">Total</td>
                    <td height="32" width="75" bgColor="#f4f4f4" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">
                      <span>
                        <span>%%total%% </span>
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
                    <strong >Comments:</strong><br/>
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
</table>
</td>
</tr>
`
  }, // end 10

  11 : {
    subject : "Newsletter unsubscribe - %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Newsletter unsubscribe</strong><br><br>
    <span style="font-size:15px;">Hello<br><br>You have been unsubscribed successfully.<br><br>The %%ecommerceName%% Team</span>
  </td>
</tr>

`
  }, // end 11

  12 : {
    subject : "Your friend wants to sponsor you",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>Sponsorship request</strong><br><br>
    <span>Hello,<br><br> %%firstName%% invites you to join <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>Become a member and registrer here: </span><a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>Thanks for your support.<br><br>The %%ecommerceName%% Team
  </td>
</tr>
`
  }, // end 12

  13 : {
    subject : "Your sponsored just finished an order: enjoy the benefits",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>Sponsorship completed</strong><br><br>
    <span>Hello,<br/><br/>One of your friends has just done a purchase in our shop for over XX (€) value, therefore we give you a XX discount in your next order.<br/><br/>The discount will automatically take effect in your next order.<br/><br/>Thanks for your support.<br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
`
  }, // end 13

  14 : {
    subject : "Return request %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Return Request Information</strong><br /><br />
    <span style="font-size:15px;">Hola %firstName% %lastName%, <br /><br />We are pleased to confirm your refund request.<br/><br/>Order number: %%orderNumber%%<br/><br/>The %%ecommerceName%% Team</span>
  </td>
</tr>
`
  }, // end 14

  15 : {
    subject : "Incomplete order %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Incomplete order information</strong><br /><br />
    <span style="font-size:15px;">Hello %firstName% %lastName%, <br /><br />In your last visit to our store %%ecommerceName%% you placed the following item(s) in the shopping cart, but you did not complete the order. <br /><br />
    Click <a target="_blank" href="%recoverOrderLink%" style="color:#000;">here</a> to recover your cart.<br/><br/>The %%ecommerceName%% Team</span>
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
    subject : "Carrier notification",
    html : `
TEXTHERE
`
  }, // end 16

  17 : {
    subject : "Email verification - %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Email verification</strong><br /><br />
    <span style="font-size:15px;">Hello %firstName% %lastName%,<br/><br/>Thanks for registring on %%ecommerceURL%%. Please, follow the link in order to verify your e-mail account: <a href="%verifyLink%"  style="color:#000;">Click here</a>.<br /><br />We are looking forward to seeing you on <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a>.<br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
`
  }, // end 17

  18 : {
    subject : "Account activated - %%ecommerceName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Account activated</strong><br><br>
    <span style="font-size:15px;">Hello %firstName% %lastName%,<br/><br/>We are pleased to inform you that your customer account in %%ecommerceURL%% has been successfully activated.<br /><br />You can view and modify all your details at any time by accessing this control panel: <a href="%%ecommerceURL%%" style="color:#000">Edit your profile</a><br /><br />We hope to see you soon in <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br /><br />The %%ecommerceName%% Team</span>
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
    subject : "Stock available",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Stock available of product <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br/><br>
    <span style="font-size:15px;">Hello,<br/><br/>The article that you want so much is already available!</span>
    <span style="font-size:15px;">We would like to remind you that this email provides guidance on the availability of this article and depends on many factors (people interested, available units). We have sent this email to all the customers interested in the article, so it is possible to be exhausted very soon.<br/><br/>The %%ecommerceName%% Team</span>
  </td>
</tr>
`
  }, // end 20

  22 : {
    subject : "%%postName%% - %%blogName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Below you can read the latest articles published in <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br/><br/>
    <strong><a href="%%postUrl%%" style="color:#000;font-size:18px;text-decoration:none;">%%postName%%</a></strong>
  </td>
</tr>
<tr>
  <td align="center" >
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="30" style="text-align: center; ">
          <a href="%%postUrl%%" style="color:#000;">
            <img src="%%postSmallImage%%" height="auto" width="115" border="0" style="height: auto;" alt="%%postName%%">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <span style="font-size:15px;">%%postShortText%%<br /><br /><a href="%%postUrl%%" style="color:#000;text-decoration:none;"><strong>Read More!</strong></a>.</span>
  </td>
</tr>
`
  }, // end 22

  23 : {
    subject : "New comment on %%postName%% - %%blogName%%",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    There is a new comment on the post "<a href="%%postUrl%%" style="color:#000">%%postName%%</a>.<br/><br/>
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
          <a style="color:#000;text-decoration:none;" href="%%postUrl%%#comment%%commentId%%">%%commentNick%%</a><br/>
          %%commentContent%%<br/><br/>
          <span style="font-size:15px;"><a href="%%postUrl%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Read more!</strong></a>.</span>
        </td>
      </tr>
    </table>
    
  </td>
</tr>
`
  }, // end 23

  24 : {
    subject : "Welcome to %%blogName%%!",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Welcome to <a href="%%blogUrl%%"  style="color:#000;">%%blogName%%</a>!</strong><br/><br/>
    <span style="font-size:15px;">Hola %firstName% %lastName%,<br/><br/>Thank you for your registration to our blog. Soon you will receive new posts by email, information of features and hottest products and promotions.<br /><br />Hope to see you soon at <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a>.<br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
`
  }, // end 24

  25 : {
    subject : "Subscription of stock",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Stock subscription of product <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">Hello,<br/><br/>You have subscribed to the %name% stock notices</span>
    %productOptions%<br/>
    <span style="font-size:15px;">In case we receive this article again we will notify you immediately.<br/><br/>We hope to see you soon in <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br /><br />The %%ecommerceName%% Team</span>
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
