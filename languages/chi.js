// language file v2.0.2 

DATA.chi = {

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
                如需要更多信息，请参见%%privacy%% and %%termsOfUse%%.
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
    subject : "欢迎您登陆 %%ecommerceName%%",
    html : `
<tr>
  <td>
    <strong>欢迎您登陆 %%ecommerceName%%</strong><br><br>
        <span style="font-size:15px;">您好 %firstName% %lastName%, <br><br>您的顾客账号已成功创建。<br><br>谢谢您使用我们的顾客账户，现在您可以完善您的个人主页, 密码，并查看您的订单信息和其他您感兴趣的详情。<br><br>
我们期待能在 <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>%%ecommerceName%%</span>    
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
      <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">Unsubscribe</a> <span style="color:#333;font-size:10px;">from the Newsletter</span>
    </span>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
      <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">取消订阅简报</a>
    </span>
  </td>
</tr>
`
  }, // end 1

  2 : {
    subject : "注销账户",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>确认删除账户</strong><br><br>
    <span style="font-size:15px;">您好<br/><br/>您在访问我们的页面时提出的注销账户申请已确认，您从我们的数据库中删除账户邮箱成功。<br/><br/> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 2

  3 : {
    subject : "恢复密码 %%ecommerceName%%",
    html : `
<tr>
  <td>
    <strong>恢复密码</strong><br><br>
    <span style="font-size:15px;">您在浏览页面 %%ecommerceName%% 的时候这是您进入页面的密码恢复邮件<br><br><a href="%%lostPasswordLink%%" style="color:#000">点击此处</a><br><br>
请记住该网址，该验证网址将会在邮件发送起24小时内有效<br><br>我们期待能在 <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a> 见到您<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 3

  4 : {
    subject : "修改密码 %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>修改密码</strong><br><br>
    <span style="font-size:15px;">您好 %%firstName%% %%lastName%%,<br><br>此封邮件通知您的账户密码已修改成功<br><br>确认此邮件为安全邮件以保护您的账户<br><br>我们期待能在 <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 4

  5 : {
    subject : "%%ecommerceName%% 资讯",
    html : `
<tr>
  <td>
    <strong>订阅资讯</strong><br><br>
    <span style="font-size: 15px;">您好</span><br><br><span style="font-size: 15px;">谢谢您订阅我们的资讯，我们会为您发送我们的公司相关的最新动态，活动，热门产品和促销信息。</span><br><br><span style="font-size: 15px;">我们期待能在 </span><a href="%%ecommerceURL%%" style="font-size: 15px; color: rgb(0, 0, 0);">%%ecommerceName%%</a><span style="font-size: 15px;"> 见到您</span>
  </td>
</tr>
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
      <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">取消订阅简报</a>
    </span>
  </td>
</tr>
`
  }, // end 5

  6 : {
    subject : "%%anonymousName%%  收藏了喜欢的产品",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>收藏推荐</strong><br /><br />
  <span style="font-size:15px;">您的好友发送了您可能感兴趣的产品给您。<br /><br />您若是想了解更多产品咨询可以在 <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a> 联系我们<br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
      
        
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
产品款式 </span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">产品款式 </td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">价格</td>
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
                    <strong style="">来自好友的消息  评论</strong><br/>
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
    subject : "产品推荐",
    html : `
      
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>昵称 给您推荐产品</strong><br /><br />
  <span style="font-size:15px;"> Hello %%friendName%%,<br>您的朋友 %%anonymousName%% (%%anonymousEmail%%) 认为这款产品是你喜欢的类别 <br /><br />若你需要更多相关信息您可以联系我们。 <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br /><br /> %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
      
        
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
产品款式</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">产品款式</td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">价格</td>
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
                    <strong style="">来自好友的推荐:</strong><br/>
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
    subject : "来自 %%ecommerceName%% 的联系",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>联系方式</strong><br><br>
  <span style="font-size:15px;">名字: %%anonymousFirstName%%<br />姓氏: %%anonymousLastName%%<br />邮箱: %%anonymousEmail%%<br />手机: %%anonymousPhone%%<br />查询信息:  %%queryMotive%%<br />消息内容: %%comments%%</span>
  </td>
</tr>
`
  }, // end 8

  9 : {
    subject : "产品的相关问题",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>问题关于 </strong><br><br>
    <span style="font-size:15px;">名字: %%anonymousFirstName%%<br />姓氏: %%anonymousLastName%%<br />邮箱: %%anonymousEmail%%<br />电话: %%anonymousPhone%%<br />消息内容: %%comments%%<br /><br />产品名称: %%name%%<br />产品货号: %%sku%%</span>
  </td>
</tr>
`
  }, // end 9

  10 : {
    subject : "确认订单",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>确认订单</strong><br>
    <span style="font-size:15px;">亲爱的 %%firstName%% %%lastname%%,<br>

      您的订单已确认并正确处理成功。<br>
      已将订单信息以pdf的格式发送给您。 <br>
    注意查收并查看您的订单详情。</span>
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
                <td width="30%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" class="dir1">
                  订单编号:<br>
                  订单日期:<br>
                  订单状态:<br>
                </td>
                <td width="80%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" class="dir2">
                  <strong>%%orderNumber%% </strong><br>
                  <strong>%%orderDate%%</strong><br>
                  <strong>已确认</strong><br>
                </td>
              </tr>  
            </table>
          </td>  
        </tr>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif; " class="dir1" align="right">
            <table class="direcciones" width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="50%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" class="dir1">
                  <strong>支付账号:</strong><br>
                  %%firstName%% %%lastName%%<br>
                  %%address%% <br>
                  %%zip%%  %%city%%<br>
                  %%state%%<br>
                </td>
                <td width="50%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" class="dir2">
                  <strong>邮寄地址:</strong><br>
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
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">订单详情</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">产品名 （款式） </td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">数量</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">价格</td>
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
              <table class="subTotals" align="center" cellpadding="0" cellspacing="0" width="88%" style="color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;">
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">小计</td>
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
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">折扣</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span class="price">
                      <span class="integerPrice">- %%orderDiscounts%%</span>
                    </span>
                  </td>
                </tr>
                <!-- %%/ifOrderDiscount%% -->
                <tr>
                  <td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">总计 </td>
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
                  <strong style="">订单评论</strong><br/>
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
    subject : "退订资讯",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
        
    <strong>资讯退订</strong><br><br>
    <span style="font-size:15px;">您好<br><br>您已经成功退订我们的资讯。<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 11

  12 : {
    subject : "您的好友要赞助你",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  
    <strong>赞助要求 </strong><br><br>
    <span>您好<br><br> %%firstName%% 名字 邀请您加入 <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>成为其中一员请在此注册: </span><a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>谢谢您的支持<br><br>%%ecommerceName%%
  </td>
</tr> 
`
  }, // end 12

  13 : {
    subject : "完成募集",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>您的募集已经完成一个订单，享受收益吧！　　/strong><br><br>
    <span>您好,<br/><br/>您的好友已完成了一个订单，您可以在下一次的订单中享受     折扣。<br/><br/>折扣将会自动使用在您下次的订单。<br/><br/>谢谢您的支持。<br /><br />%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 13

  14 : {
    subject : "",
    html : `
TEXTHERE
`
  }, // end 14

  15 : {
    subject : "Inquiry from %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>您的購物車錯過了您</strong><br /><br />
    <span style="font-size:15px;">你好 %firstName% %lastName%, <br /><br />在您最后一次浏览我们网页后将以下商品放入购物车，但是您没有完成订单填写。请点击这里： <br /><br />
    <a target="_blank" href="%recoverOrderLink%" style="color:#000;">购物车</a> 返回您的购物车.<br/><br/>%%ecommerceName%% 团队</span>
  </td>
</tr>
<tr>
  <td class="tablaPedido" style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">购物车:</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td width="" style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">产品名 （款式）</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">数量</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">价格</td>
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
    subject : "Shipping announcement",
    html : `
TEXTHERE
`
  }, // end 16

  17 : {
    subject : "Email verification - %%ecommerceName%%",
    html : `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
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
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
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
    subject : "",
    html : `
TEXTHERE
`
  }, // end 20

  22 : {
    subject : "",
    html : `
TEXTHERE
`
  }, // end 22

  23 : {
    subject : "",
    html : `
TEXTHERE
`
  }, // end 23

  24 : {
    subject : "",
    html : `
TEXTHERE
`
  }, // end 24

  25 : {
    subject : "",
    html : `
TEXTHERE
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
