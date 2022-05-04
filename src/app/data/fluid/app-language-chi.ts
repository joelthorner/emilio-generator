// v3 file template
export const LANGUAGE_CHI = {

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
    subject: '欢迎您登陆 %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>欢迎您登陆 %%ecommerceName%%</strong><br><br>
      <span style="font-size: 15px;">您好 %firstName% %lastName%, <br><br>您的顾客账号已成功创建。<br><br>谢谢您使用我们的顾客账户，现在您可以完善您的个人主页, 密码，并查看您的订单信息和其他您感兴趣的详情。<br><br>
      我们期待能在 <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>%%ecommerceName%%</span>
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
    <td style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
      <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">取消订阅简报</a>
      </span>
    </td>
  </tr>
</table>
`
    }
  }, // end 1

  2: {
    name: 'Baja de usuarios',
    subject: '注销账户',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>确认删除账户</strong><br><br>
    <span style="font-size: 15px;">您好<br><br>您在访问我们的页面时提出的注销账户申请已确认，您从我们的数据库中删除账户邮箱成功。<br><br> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 2

  3: {
    name: 'Recordarios de contraseña',
    subject: '恢复密码 %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>恢复密码</strong><br><br>
    <span style="font-size: 15px;">您在浏览页面 %%ecommerceName%% 的时候这是您进入页面的密码恢复邮件<br><br><a href="%%lostPasswordLink%%" style="color:#000">点击此处</a><br><br>
    请记住该网址，该验证网址将会在邮件发送起24小时内有效<br><br>我们期待能在 <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a> 见到您<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 3

  4: {
    name: 'Cambio de contraseña',
    subject: '修改密码 %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>修改密码</strong><br><br>
    <span style="font-size: 15px;">您好 %%firstName%% %%lastName%%,<br><br>此封邮件通知您的账户密码已修改成功<br><br>确认此邮件为安全邮件以保护您的账户<br><br>我们期待能在 <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 4

  5: {
    name: 'Registro de newsletter',
    subject: '%%ecommerceName%% 资讯',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>订阅资讯</strong><br><br>
    <span style="font-size: 15px;">
      您好</span><br><br><span style="font-size: 15px;">谢谢您订阅我们的资讯，我们会为您发送我们的公司相关的最新动态，活动，热门产品和促销信息。</span><br><br><span style="font-size: 15px;">我们期待能在 </span><a href="%%ecommerceURL%%" style="font-size: 15px; color: rgb(0, 0, 0);">%%ecommerceName%%</a><span style="font-size: 15px;"> 见到您
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
    <td style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
      <span style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;">
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">取消订阅简报</a>
      </span>
    </td>
  </tr>
</table>
`
    }
  }, // end 5

  6: {
    name: 'Recomendación de wishlist',
    subject: '%%anonymousName%%  收藏了喜欢的产品',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>收藏推荐</strong><br><br>
  <span style="font-size: 15px;">您的好友发送了您可能感兴趣的产品给您。<br><br>您若是想了解更多产品咨询可以在 <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a> 联系我们<br><br>The %%ecommerceName%% Team</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
产品款式 </span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">产品款式 </td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">价格</td>
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
                    <strong>来自好友的消息  评论</strong><br>
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
    subject: '产品推荐',
    html: `

<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>昵称 给您推荐产品</strong><br><br>
  <span style="font-size: 15px;"> Hello %%friendName%%,<br>您的朋友 %%anonymousName%% (%%anonymousEmail%%) 认为这款产品是你喜欢的类别 <br><br>若你需要更多相关信息您可以联系我们。 <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br><br> %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
产品款式</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">产品款式</td>

                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">价格</td>
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
                    <strong>来自好友的推荐:</strong><br>
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
    subject: '来自 %%ecommerceName%% 的联系',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>联系方式</strong><br><br>
  <span style="font-size: 15px;">名字: %%anonymousFirstName%%<br>姓氏: %%anonymousLastName%%<br>邮箱: %%anonymousEmail%%<br>手机: %%anonymousPhone%%<br>查询信息:  %%queryMotive%%<br>消息内容: %%comments%%</span>
  </td>
</tr>
`
  }, // end 8

  9: {
    name: 'Consulta de producto',
    subject: '产品的相关问题',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>问题关于 </strong><br><br>
    <span style="font-size: 15px;">名字: %%anonymousFirstName%%<br>姓氏: %%anonymousLastName%%<br>邮箱: %%anonymousEmail%%<br>电话: %%anonymousPhone%%<br>消息内容: %%comments%%<br><br>产品名称: %%name%%<br>产品货号: %%sku%%</span>
  </td>
</tr>
`
  }, // end 9

  10: {
    name: 'Confirmación de pedido',
    subject: '确认订单',
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
    <strong>欢迎您登陆 %%ecommerceName%%</strong><br><br>
    <span style="font-size: 15px;">亲爱的 %%firstName%% %%lastname%%,<br>
      您的订单已确认并正确处理成功。<br>
      已将订单信息以pdf的格式发送给您。 <br>
    注意查收并查看您的订单详情。</span>
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
                  <b>订单编号:</b><br>
                  %%orderNumber%%
                </td>
                <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                  <b>订单日期:</b><br>
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
                    <b>付款方式:</b><br>
                    %%paymentMethod%%
                  </td>
                  <td style="padding: 15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;vertical-align: middle;text-align: center;" align="center">
                    <b>运输方式:</b><br>
                    %%shipperName%% %%shippingTypeName%%
                  </td>
                </tr>
              </table>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">邮寄地址</span></td></tr>
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
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">订单详情</span></td></tr>
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
                            <div><br>数量: %quantity%</div>
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
                              <span style="color: #454545; text-decoration: none">%name% <span style="font-size: 10px;">(礼物)</span></span>
                            </a>
                            <div><br>数量: %quantity%</div>
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
                    总计: %%total%%
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
                  <strong>订单评论:</strong><br>
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
    subject: '退订资讯',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>资讯退订</strong><br><br>
    <span style="font-size: 15px;">您好<br><br>您已经成功退订我们的资讯。<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 11

  12: {
    name: 'Apadrinamiento',
    subject: '您的好友要赞助你',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">

    <strong>赞助要求 </strong><br><br>
    <span style="font-size: 15px;">您好<br><br> %%firstName%% 名字 邀请您加入 <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>成为其中一员请在此注册: <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>谢谢您的支持<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 12

  13: {
    name: 'Apadrinamiento completo',
    subject: '完成募集',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>您的募集已经完成一个订单，享受收益吧！</strong><br><br>
    <span style="font-size: 15px;">您好,<br><br>您的好友已完成了一个订单，您可以在下一次的订单中享受     折扣。<br><br>折扣将会自动使用在您下次的订单。<br><br>谢谢您的支持。<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 13

  14: {
    name: 'Petición devolución',
    subject: '',
    html: ``
  }, // end 14

  15: {
    name: 'Pedido incompleto',
    subject: 'Inquiry from %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>您的購物車錯過了您</strong><br><br>
    <span style="font-size: 15px;">你好 %firstName% %lastName%, <br><br>在您最后一次浏览我们网页后将以下商品放入购物车，但是您没有完成订单填写。请点击这里： <br><br>
    <a target="_blank" href="%recoverOrderLink%" style="color:#000;">购物车</a> 返回您的购物车.<br><br>%%ecommerceName%% 团队</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">购物车:</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">产品名 （款式）</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">数量</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">价格</td>
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
    subject: 'Email verification - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Email verification</strong><br><br>
    <span style="font-size: 15px;">
      Hello %firstName% %lastName%,<br><br>
      Thanks for registring on %%ecommerceURL%%. Please, follow the link in order to verify your e-mail account: <a href="%verifyLink%"  style="color:#000;">Click here</a>.<br><br>
      We are looking forward to seeing you on <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team
    </span>
  </td>
</tr>
`
  }, // end 17

  18: {
    name: 'Cuenta activada',
    subject: 'Account activated - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Account activated</strong><br><br>
    <span style="font-size: 15px;">
      Hello %firstName% %lastName%,<br><br>
      We are pleased to inform you that your customer account in %%ecommerceURL%% has been successfully activated.<br><br>
      You can view and modify all your details at any time by accessing this control panel: <a href="%%ecommerceURL%%" style="color:#000">Edit your profile</a><br><br>
      We hope to see you soon in <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team
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
    subject: '',
    html: ``
  }, // end 20

  22: {
    name: 'Blog - Notificación de Nuevo Artículo',
    subject: '',
    html: ``
  }, // end 22

  23: {
    name: 'Blog - Notificación de Nuevo Comentario',
    subject: '',
    html: ``
  }, // end 23

  24: {
    name: 'Blog - Email de Bienvenida',
    subject: '',
    html: ``
  }, // end 24

  25: {
    name: 'Confirmar suscripción de Stock',
    subject: '',
    html: ``
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
