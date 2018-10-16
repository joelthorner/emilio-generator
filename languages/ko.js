// language file v2.0.2

DATA.ko = {

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
                  자세한 내용은 %%privacy%% 과 %%termsOfUse%%.
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
    subject : "%%ecommerceName%% 에 등록해 주셔서 감사합니다",
    html : `
<tr>
  <td style="padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>%%ecommerceName%% 에 등록해 주셔서 감사합니다</strong><br><br>
    <span style="font-size:15px;">안녕하세요  %firstName% %lastName%, <br><br>고객 계정이 성공적으로 생성되었습니다 <br><br>고객의 계정을 사용하여 주셔서 감사합니다,지금은 개인홈페이지 과  비밀번호를  업데이트 할 수 있습니다, 주문 내역과 기타 사항 을 볼 수 있습니다.<br><br>
    <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a> 에서 당신을 뵙기를 기대합니다<br><br>%%ecommerceName%%</span>
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
                  자세한 내용은 %%privacy%% 과 %%termsOfUse%%.
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
    subject : "%%ecommerceName%% 계정 취소하기",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>계정 삭제를 확인하기</strong><br><br>
  <span style="font-size:15px;">안녕하세요<br/><br/>페이지를 방문하면에서 계정을 취소한요천이 확인되었습니다,우리의 데이타베이스에서성 공적으로 삭제되었습니다 <br/><br/>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 2

  3 : {
    subject : "%%ecommerceName%% 의비밀번호를 복구하기 ",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>비밀번호를 복구하기</strong><br><br>
  <span style="font-size:15px;">%%ecommerceName%% 의페이지 방문할때 바로 비밀 번호 복구 영역에 액세스 할<br /><br /><a href="%%lostPasswordLink%%" style="color:#000">수있는 주소입니다 , 여기를 클릭하십시오</a><br /><br />
  이 이메일을 보낸 후이 액세스 코드가 24 시간 동안 유효합니다 <br /><br /><a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a> 에서 당신을 뵙기를 기대합니다<br /><br /> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 3

  4 : {
    subject : "%%ecommerceName%% 의 비밀번호 변경하기",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>비밀번호 변경하기 </strong><br><br>
    <span style="font-size:15px;">안녕하세요 %%firstName%% %%lastName%%,<br><br>이 메일은 고객 계정의 비밀번호가  변경되었음을 알려드립니다.<br><br>단싱의계정을보호하기위해서 이메시지가 안전 메시지로 확인하세요<br><br><a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>에서 당신을 뵙기를 기대합니다<br><br>%%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 4

  5 : {
    subject : "%%ecommerceName%% 을구독하기",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>콘텐츠를 구독하기</strong><br><br>
    <span style="font-size:15px;">안녕하세요<br><br>우리의 뉴스 레터에 구독 해 주셔서 감사합니다.  곧 우리 회사에 대해 뉴스,  제품 기능,인기 제품과 판촉을 받을 것입니다 <br><br><a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a> 에서 당신을 뵙기를 기대합니다</span>
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
                  자세한 내용은 %%privacy%% 과 %%termsOfUse%%.
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
    subject : "%%anonymousName%% 마음에 드는 제품을소장했습니다 ",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>추천을 소장하기</strong><br /><br />
  <span style="font-size:15px;">당신의친구는  당신이관심이 있을 수 있는제품을 보내되었습니다 <br /><br />좀 더 자세한 정보가 필요하면 당신은 문의하실 수 있습니다, <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">제품 추천</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">제품 모델 </td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">가격</td>
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
                    <strong >친구의 메시지             댓글:</strong><br/>
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
    subject : "제품 추천",
    html : `
      
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>애칭   당신에게 추천한제품 </strong><br /><br />
  <span style="font-size:15px;"> Hello %%friendName%%,<br>당신의 친구 %%anonymousName%% (%%anonymousEmail%%) 이 상품은 관심이 될 수 있다고 생각합니다 .<br /><br />좀 더 자세한 정보가 필요하면 당신은 문의하실 수 있습니다, <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br /><br />The %%ecommerceName%% Team</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
      
        
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">제품 추천</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">제품 모델</td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">가격</td>
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
                  <strong >친구의 추천입니다 :</strong><br/>
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
    subject : "%%ecommerceName%% 에게서 연락을 왔습니다",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>연럭서</strong><br><br>
  <span style="font-size:15px;">이름: %%anonymousFirstName%%<br />성씨: %%anonymousLastName%%<br />이메일: %%anonymousEmail%%<br />행드폰: %%anonymousPhone%%<br />정보를 조회:  %%queryMotive%%<br />소식내용: %%comments%%</span>
  </td>
</tr>
`
  }, // end 8

  9 : {
    subject : "제품의관련한문제",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
  <strong>질문대한</strong><br><br>
  <span style="font-size:15px;">이름: %%anonymousFirstName%%<br />성씨: %%anonymousLastName%%<br />이메일: %%anonymousEmail%%<br />전화: %%anonymousPhone%%<br />메시지 내용: %%comments%%<br /><br />제품 이름: %%name%%<br />제품 모델: %%sku%%</span>
  </td>
</tr>
`
  }, // end 9

  10 : {
    subject : "주문을 확인하기",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>주문을 확인하기 </strong><br>
    <span style="font-size:15px;">안녕허세요 %%firstName%% %%lastname%%,<br>

    주문이 올바르게 식별하고 성공적으로 처리되었습니다.<br>
    주문 정보는 pdf 형식으로 발송되었습니다 <br>
    주의하세요. 당신의 주문서를 보고 확인하세요 </span>
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
                     주문 번호:<br>
                      주문 날짜:<br>
                      주문 상태 :<br>
                    </td>
                    <td width="80%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                      <strong>%%orderNumber%% </strong><br>
                      <strong>%%orderDate%%</strong><br>
                      <strong>확인되었습니다</strong><br>
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
                      <strong>지불 계정 :</strong><br>
                      %%firstName%% %%lastName%%<br>
                      %%address%% <br>
                      %%zip%%  %%city%%<br>
                      %%state%%<br>
                    </td>
                    <td width="50%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                      <strong>비송주소:</strong><br>
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
          <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">주문 정보</span></td></tr>
          <tr><td>&nbsp;</td></tr>
          <tr>
            <td style="vertical-align: top">
              <div style="padding: 0 0">
                <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                  <tbody>
                    <tr>
                      <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">제품 이름 (모텔)</td>
                      <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">수량<</td>
                      <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">가격</td>
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
                    <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">할인</td>
                    <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                      <span>
                        <span>- %%orderDiscounts%%</span>
                      </span>
                    </td>
                  </tr>
                  <!-- %%/ifOrderDiscount%% -->
                  
                  <tr>
                    <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">소계</td>
                    <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                      <span>
                        <span>%%orderTotalWithoutTaxes%%  </span> 
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">속이기</td>
                    <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                      <span>
                        <span>%%orderTaxes%% </span>
                      </span>
                    </td>
                  </tr>
                  <!--%%ifOrderBalanceCodes%%-->
                  <tr>
                    <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">바우처</td>
                    <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                      <span>
                        <span>- %%orderBalanceCodes%%</span>
                      </span>
                    </td>
                  </tr>
                  <!--%%/ifOrderBalanceCodes%%-->
                  <tr>
                    <td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">합계</td>
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
                      <strong >주문 평가:</strong><br/>
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
`
  }, // end 10

  11 : {
    subject : "수신 거부한콘텐츠",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    
    <strong>콘텐츠를 수신 거부하기 </strong><br><br>
    <span style="font-size:15px;">안녕하세요<br><br>우리의콘텐츠를  성공적으로 수신 거부했습니다.<br><br> %%ecommerceName%%</span>
  </td>
</tr>
`
  }, // end 11

  12 : {
    subject : "당신의 친구는 신을  찬조할것입니다 ",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>찬조요구</strong><br><br>
    <span>안녕하세요,<br><br> %%firstName%% 에당신을 초청해 가입합니다 <a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a><br><br>회원이되기 위해서는 여기 로그인하세요: </span><a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>지지해 주셔서 감사합니다.<br><br>%%ecommerceName%%
  </td>
</tr>
`
  }, // end 12

  13 : {
    subject : "모집을완성되었습니다",
    html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>당신의모집은     한주문을 완성되었습니다,즐기십시오!</strong><br><br>
    <span>안녕하세요,<br/><br/>딩신의친구는 한주문을 완성되었습니다,다음 주문에서 (     %)할인을 받을 수 있습니다<br/><br/>다음주문에  할인이 자동으로 사용합니다<br/><br/>지지해 주셔서 감사합니다<br /><br />The %%ecommerceName%% Team</span>
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
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>너 쇼핑 카트가 그리워.</strong><br /><br />
    <span style="font-size:15px;">님 안녕하세요 %firstName% %lastName%, <br /><br />저희 홈페이지에 마지막 찾아볼떼 다음상품을 장바구니에 놓았습니다. 하지만 주문을 완성하지 않습니다. 여기 클릭하세요: <br /><br />
    <a target="_blank" href="%recoverOrderLink%" style="color:#000;">쇼핑 카트</a>장바구니에 돌라가기<br/><br/>%%ecommerceName%% 팀</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
       
       
        <tr><td>&nbsp;</td></tr>
        <tr><td align="center"><span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">쇼핑 카트:</span></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">제품 이름 (모텔)</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">수량</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">가격</td>
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
    subject : "",
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
