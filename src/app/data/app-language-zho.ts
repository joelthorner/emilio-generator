// v3 file template
export const LANGUAGE_ZHO = {

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
                <td>
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
                  有關更多信息，請閱讀我們的 %%privacy%% 和 %%termsOfUse%%.
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
    subject: 'Thank you for signup to %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>歡迎您登陸&nbsp;%%ecommerceName%%</strong>
    <br><br>
    <span style="font-size: 15px;">您好 %firstName% %lastName%,</span>
    <br><br>
    <span style="font-size: 15px;">您的顧客賬號已成功創建。</span>
    <br><br>
    <span style="font-size: 15px;">謝謝您使用我們的顧客賬戶，現在您可以完善您的個人主頁, 密碼，並查看您的訂單信息和其他您感興趣的詳情。</span><div><span style="font-size: 15px;"><br></span></div><div><span style="font-size: 15px;">我們期待能在&nbsp;</span>
    <a href="%%ecommerceURL%%" style="font-size: 15px; color: rgb(0, 0, 0);">%%ecommerceName%%</a>
    <br><br>
    <span style="font-size: 15px;">%%ecommerceName%%</span>
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
                  有關更多信息，請閱讀我們的 %%privacy%% 和 %%termsOfUse%%.
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
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">取消訂閱時事通訊</a> <span style="color:#333;font-size:10px;"></span>
      </span>
    </td>
  </tr>
</table>
`
    }
  }, // end 1

  2: {
    name: 'Baja de usuarios',
    subject: 'Unsubscribe - %%ecommerceName%%',
    html: `
<tr>
  <td class="innerpadding bodycopy borderbottom" style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>确认删除账户</strong><br><br>
    <span style="font-size:15px;">您好<br><br>您在访问我们的页面时提出的注销账户申请已确认，您从我们的数据库中删除账户邮箱成功。<br><br> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 2

  3: {
    name: 'Recordarios de contraseña',
    subject: '恢复密码 - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>恢復密碼</strong><br><br>
    <span style="font-size:15px;">
    您在瀏覽頁面 %%ecommerceName%% 的時候這是您進入頁面的密碼恢復郵件<br><br><a href="%%lostPasswordLink%%" style="color:#000">點擊此處</a><br><br>請記住該網址，該驗證網址將會在郵件發送起24小時內有效<br><br>我們期待能在 <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a> 見到您<br><br>%%ecommerceName%%
    </span>
  </td>
</tr>
`
  }, // end 3

  4: {
    name: 'Cambio de contraseña',
    subject: 'Change password on %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>修改密码</strong><br><br>
    <span style="font-size:15px;">您好 %%firstName%% %%lastName%%,<br><br>此封邮件通知您的账户密码已修改成功<br><br>确认此邮件为安全邮件以保护您的账户<br><br>我们期待能在 <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 4

  5: {
    name: 'Registro de newsletter',
    subject: '%%ecommerceName%% 資訊',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>訂閱資訊</strong><br><br>
    <span style="font-size: 15px;">您好</span><br><br>
    <span style="font-size: 15px;">謝謝您訂閱我們的資訊，我們會為您發送我們的公司相關的最新動態，活動，熱門產品和促銷信息。</span><br><br><span style="font-size: 15px;">我們期待能在</span><a href="%%ecommerceURL%%" style="font-size: 15px; color: rgb(0, 0, 0);">%%ecommerceName%%</a><span style="font-size: 15px;">&nbsp;見到您</span>
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
                  有關更多信息，請閱讀我們的 %%privacy%% 和 %%termsOfUse%%.
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
        <a href="%linkDeleteSubscription%" style="color: #333;text-decoration: underline;font-size:10px;line-height:13px;">取消訂閱時事通訊</a> <span style="color:#333;font-size:10px;"></span>
      </span>
    </td>
  </tr>
</table>
`
    }
  }, // end 5

  6: {
    name: 'Recomendación de wishlist',
    subject: '%%anonymousName%% 收藏了喜欢的产品',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>收藏推荐</strong><br><br>
    <span style="font-size:15px;">您的好友发送了您可能感兴趣的产品给您。<br><br>您若是想了解更多产品咨询可以在 <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a> 联系我们<br><br>The %%ecommerceName%% Team</span>
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
                    <strong >来自好友的消息 评论</strong><br>
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
    subject: '%%anonymousName%% 产品推荐',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>昵称 给您推荐产品</strong><br><br>
    <span style="font-size:15px;"> Hello %%friendName%%,<br>您的朋友 %%anonymousName%% (%%anonymousEmail%%) 认为这款产品是你喜欢的类别 <br><br>若你需要更多相关信息您可以联系我们。 <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br><br> %%ecommerceName%%</span>
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
                    <strong >来自好友的推荐</strong><br>
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
    <span style="font-size:15px;">名字: %%anonymousFirstName%%<br>姓氏: %%anonymousLastName%%<br>邮箱: %%anonymousEmail%%<br>手机: %%anonymousPhone%%<br>查询信息:  %%queryMotive%%<br>消息内容: %%comments%%</span>
  </td>
</tr>
`
  }, // end 8

  9: {
    name: 'Consulta de producto',
    subject: '产品的相关问题 %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>问题关于 </strong><br><br>
    <span style="font-size:15px;">名字: %%anonymousFirstName%%<br>姓氏: %%anonymousLastName%%<br>邮箱: %%anonymousEmail%%<br>电话: %%anonymousPhone%%<br>消息内容: %%comments%%<br><br>产品名称: %%name%%<br>产品货号: %%sku%%</span>
  </td>
</tr>
`
  }, // end 9

  10: {
    name: 'Confirmación de pedido',
    subject: '訂單確認 - %%orderNumber%% - %%ecommerceName%%',
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
    <strong>確認訂單</strong><br>
    <span style="font-size:15px;">亲爱的 %%firstName%% %%lastname%%,<br>
      您的订单已确认并正确处理成功。<br>
      已将订单信息以pdf的格式发送给您。 <br>
      注意查收并查看您的订单详情。
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
                  订单编号<br>
                  订单日期<br>
                  订单状态<br>
                </td>

                <td width="80%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                  <strong>%%orderNumber%% </strong><br>
                  <strong>%%orderDate%%</strong><br>
                  <strong>已确认</strong><br>
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
                  <strong>支付账号</strong><br>
                  %%firstName%% %%lastName%%<br>
                  %%address%% <br>
                  %%zip%%  %%city%%<br>
                  %%state%%<br>
                </td>
                <td width="50%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                  <strong>邮寄地址</strong><br>
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
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">折扣</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>- %%orderDiscounts%%</span>
                    </span>
                  </td>
                </tr>
                <!-- %%/ifOrderDiscount%% -->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">小計</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%orderTotalWithoutTaxes%%  </span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">稅收</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%orderTaxes%% </span>
                    </span>
                  </td>
                </tr>
                <!--%%ifOrderBalanceCodes%%-->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">優惠券</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>- %%orderBalanceCodes%%</span>
                    </span>
                  </td>
                </tr>
                <!--%%/ifOrderBalanceCodes%%-->
                <tr>
                  <td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">總</td>
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
                  <strong >订单评论</strong><br>
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
    subject: '退订资讯 - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>资讯退订</strong><br><br>
    <span style="font-size:15px;">您好<br><br>您已经成功退订我们的资讯。<br><br>%%ecommerceName%%</span>
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
    <span>您好<br><br> %%firstName%% 名字 邀请您加入 <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>成为其中一员请在此注册: </span>
    <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>谢谢您的支持<br><br>%%ecommerceName%%
  </td>
</tr>
`
  }, // end 12

  13: {
    name: 'Apadrinamiento completo',
    subject: '完成募集',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>您的募集已经完成一个订单，享受收益吧！　　</strong><br><br>
    <span>您好,<br><br>您的好友已完成了一个订单，您可以在下一次的订单中享受     折扣。<br><br>折扣将会自动使用在您下次的订单。<br><br>谢谢您的支持。<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 13

  14: {
    name: 'Petición devolución',
    subject: '退貨請求 %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>退貨申請信息</strong><br><br>
    <span style="font-size:15px;">你好 %firstName% %lastName%, <br><br>我們很高興確認您的退款申請。<br><br>訂單號: %%orderNumber%%<br><br> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 14

  15: {
    name: 'Pedido incompleto',
    subject: '來自的詢問 %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>您的購物車錯過了您</strong><br><br>
    <span style="font-size:15px;">你好 %firstName% %lastName%, <br><br>在您最後一次瀏覽我們網頁後將以下商品放入購物車，但是您沒有完成訂單填寫。請點擊這裡： <br><br>
    <a target="_blank" href="%recoverOrderLink%" style="color:#000;">購物車</a> 返回您的購物車.<br><br>%%ecommerceName%% 團隊</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>


        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">購物車:</span></td></tr>
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
    subject: '送貨公告 - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>您的訂單在運送中。我們和您一樣興奮地期待！</strong><br><br>
    <span style="font-size:15px;">您好  %firstName% %lastName%, <br><br>您的訂單 %orderNumber% 已經從我們的倉庫派出。<br><br>我們的運輸通信員將很快與您聯繫，並提供有關裝運的更多細節。 <br><br>
  </td>
</tr>
`
  }, // end 16

  17: {
    name: 'Verificación de correo',
    subject: '電子郵件驗證 - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>電子郵件驗證</strong><br><br>
    <span style="font-size:15px;">你好 %firstName% %lastName%,<br><br>感謝您註冊%% ecommerceURL %%。 請按照鏈接驗證您的電子郵件帳戶： <a href="%verifyLink%"  style="color:#000;">點擊這裡</a>.<br><br>我們期待著與您相見 <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a>.<br><br> %%ecommerceName%% 球隊</span>
  </td>
</tr>
`
  }, // end 17

  18: {
    name: 'Cuenta activada',
    subject: '帳戶已激活 - %%ecommerceName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>帳戶已激活</strong><br><br>
    <span style="font-size:15px;">
      您好 %firstName% %lastName%,<br><br>我們很高興地通知您，%%ecommerceURL%% 中的客戶帳戶已成功激活。<br><br>您可以通過訪問此控制面板隨時查看和修改所有詳細信息 <a href="%%ecommerceURL%%" style="color:#000">編輯您的個人資料</a><br><br>我們希望很快能見到你 <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br><br>%%ecommerceName%% 球隊
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
    subject: '現貨供應',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>庫存可用產品 <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br><br>
    <span style="font-size:15px;">你好,<br><br>你想要的那篇文章已經有了！</span>
    <span style="font-size:15px;">我們想提醒您，此電子郵件提供了有關本文可用性的指導，並取決於許多因素（有興趣的人，可用單位）。 我們已將此電子郵件發送給對該文章感興趣的所有客戶，因此可能很快就會用盡。<br><br>%%ecommerceName%% 球隊</span>
  </td>
</tr>
`
  }, // end 20

  22: {
    name: 'Blog - Notificación de Nuevo Artículo',
    subject: '新帖子 %ecommerceName% blog!',
    html: `
<!-- %loop% -->
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    您可以在下面閱讀發表的最新文章 <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br><br>
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

    <span style="font-size:15px;">%%postShortText%%<br><br><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>閱讀更多！</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
  }, // end 22

  23: {
    name: 'Blog - Notificación de Nuevo Comentario',
    subject: '新評論 %%postName%% - %%blogName%%',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    這篇文章有新的評論 <a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br><br>
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
          <span style="font-size:15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>閱讀更多！</strong></a>.</span>
        </td>
      </tr>
    </table>

  </td>
</tr>
`
  }, // end 23

  24: {
    name: 'Blog - Email de Bienvenida',
    subject: '歡迎來到 %%blogName%%!',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>歡迎來到 <a href="%%blogUrl%%"  style="color:#000;">%%blogName%%</a>!</strong><br><br>
    <span style="font-size:15px;">你好 %firstName% %lastName%,<br><br>感謝您註冊我們的博客。 很快，您將通過電子郵件，功能信息以及最熱門的產品和促銷活動收到新帖子。<br><br>希望很快能在 <a href="%%ecommerceURL%%"  style="color:#000;">%%ecommerceName%%</a> 見到你.<br><br>%%ecommerceName%% 球隊</span>
  </td>
</tr>
`
  }, // end 24

  25: {
    name: 'Confirmar suscripción de Stock',
    subject: '認購股票',
    html: `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>庫存訂購產品 <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">您好,<br><br>您已訂閱 %name% 股票通知</span>
    %productOptions%<br>
    <span style="font-size:15px;">如果我們再次收到這篇文章，我們會立即通知您。<br><br>我們希望很快能見到你.<br><br>%%ecommerceName%% 球隊</span>
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
