const axios = require('axios');

const options = {
  url: "https://www.cvs.com/Services/ICEAGPV1/immunization/1.0.0/getEligibilityQuestions",
  method: 'POST',
  headers: {
    'authority': 'www.cvs.com',
    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    'accept': 'application/json',
    'x-distil-ajax': 'xebztatfusvxtdxdzzerd',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
    'content-type': 'application/json',
    'origin': 'https://www.cvs.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.cvs.com/vaccine/intake/store/eligibility-screener/eligibility-qns',
    'accept-language': 'en-US,en;q=0.9',
    'cookie': 'acctdel_v1=on; adh_new_ps=on; adh_ps_refill=on; buynow=off; db-show-allrx=on; disable-app-dynamics=on; disable-sac=on; dpp_cdc=off; dpp_drug_dir=off; dpp_sft=off; getcust_elastic=on; echome_lean6=on; enable_imz=on; gbi_cvs_coupons=true; ice-phr-offer=off; v3redirecton=false; mc_cloud_service=on; mc_hl7=on; mc_rio_locator2=on; mdpguest=on; memberlite=on; pbmplaceorder=off; pbmrxhistory=on; rxdanshownba=off; rxdfixie=on; rxd_bnr=on; rxd_dot_bnr=off; rxdpromo=on; rxduan=on; rxlite=on; rxlitelob=off; rxm_demo_hide_LN=off; rxm_phdob_hide_LN=on; rxm_rx_challenge=on; s2c_rewardstracker=on; s2cHero_lean6=on; sft_mfr_new=on; v2-dash-redirection=on; dfl=on; ddlsend2card=true; fluCampaignDOTM=false; newDOTMFlow=on; mt.v=2.1849347136.1608040764004; _group=none; AMCVS_06660D1556E030D17F000101%40AdobeOrg=1; _4c_mc_=056e156f-05d1-464b-a616-23382e2d11db; s_cc=true; gbi_visitorId=ckiq1ygww00013f880drmt2nd; QuantumMetricUserID=762d728e80141de6bd31d396dc0e73bd; QuantumMetricSessionLink=https://cvs.quantummetric.com/#/users/search?autoreplay=true&qmsessioncookie=82abf3438b71f4a07c6a5a3791096a49&ts=1607997573-1608083973; acctapi_v2=on; login_v3=on; favorite_store=1022/42.39/-71.1436/CAMBRIDGE/MA; akavpau_vp_www_cvs_com_general=1608041031~id=384fd6232117ae2b64c317b573898ca1; ICE=ice; ICEC=d8WyerPA98U8J0pKTWn5Sefj7NA1HNnk0Xo5V2y%2FxEZVpyNggEqt7iVZBkR%2B3Qz5; mteLoggedIn_RxTied=Y; akavpau_vp_www_cvs_com_pharmacy=1608041776~id=ea0ffedb0a8b787f8f118dd0e6bf4c65; pe=p1; adh_ps_pickup=on; bab_atb=off1; sab_displayads=on; dashboard_v1=off; echomeln6=off-p0; enable_imz_cvd=on; enable_imz_reschedule_instore=on; enable_imz_reschedule_clinic=off; flipp2=on; mc_home_new=off2-p0; mc_ui_ssr=off-p2; mc_videovisit=on; pauth_v1=on; pivotal_forgot_password=off-p0; pivotal_sso=off-p0; ps=on; refill_chkbox_remove=off-p0; rxm=on; rxm_phone_dob=off-p1; s2c_akamaidigitizecoupon=on; s2c_beautyclub=off-p0; s2c_digitizecoupon=on; s2c_dmenrollment=off-p0; s2c_herotimer=off-p0; s2c_newcard=off-p0; s2c_papercoupon=on; s2c_persistEcCookie=on; s2c_rewardstrackerbctile=on; s2c_rewardstrackerbctenpercent=on; s2c_rewardstrackerqebtile=on; s2c_smsenrollment=on; sftg=on; show_exception_status=on; akavpau_vp_www_cvs_com_shop=1616175935~id=093e2d09d8988958408231c926c21b5e; BVImplall_route=3006_3_0; DG_ZID=C4C50BF8-815E-38A5-A604-6A1BD2E2492F; DG_ZUID=96515696-08AF-33AE-BB9C-0F06C8677178; DG_HID=30E033C4-78BA-38F7-AB74-B29A7F5D0DBF; DG_SID=74.104.148.114:zJpOpSRKfBeClQHvXLAFKzEnUmm+5R9OgRHKEaR3ubg; BVBRANDID=163d3c1a-6202-4fa0-9302-43cb193d8810; JSESSIONID=UjvqE9AhzNjQ2BOLO5rpermf4NNDHSk2QQ9q-8Sv.commerce_1101; __gads=ID=6d3591c5ad6dd4fa:T=1616175518:S=ALNI_MZFLoAkrtCZlH4Zs28FMdO5XtwvWQ; aat1=on; _group1=quantum; _gcl_au=1.1.707344661.1616175521; mp_cvs_mixpanel=%7B%22distinct_id%22%3A%20%2217508ed1dfd581-0cd0e17a22167b-31687304-1fa400-17508ed1dfecf9%22%2C%22bc_persist_updated%22%3A%201608040775369%2C%22bc_id%22%3A%20720508869%7D; mt.cem=200810-Homepage-Nav-Order - 200810-Homepage-Nav-Order,experiment | 200503v2-Retail-Rx-Replace - 200503_monetate_rx_dash_aod_dsk_test_50 | 210103-v2-Homepage-Order - 210103-v2-Homepage-Order,control | 210218-Rx-Immunization-COVIDvax - 210218_monetate_covax_timetiles_dsk_control | 210201-Rx-Immunization-COVIDvax - A-Iteration; ak_bmsc=05886AA979B36AB5DA038E291A1C3847B81994078728000001B656607D765A5C~plsC6IRhKigMhjuDb1rGNIE1f274tlolAv1Mj7xRM5EdHof+Ed1+/H5yzabDGni4ieH7NyYehTAg5tYwm2NBHTp7RYgSgRQ0+xF9HMAMZb5/ODyOSFaGoR78qFH5skBUy9CsudR8Lzj8sZ2kIUqyZxZrXllC+vNlJXi/Fzro5ofBq61xSwZEPcNDetvwguefOgnn81v3q1dA68W5K6JC/eSj+8Lq/uil+b4tCF2CCakXs=; akavpau_vp_www_cvs_com_vaccine=1616296025~id=a6fbd05d011eb3e10e7d81b25adaf84a; bm_sz=A213CFDF4B144B2F9107D62573DD9678~YAAQB5QZuGkdLjh4AQAAJPS2Ugv/sXVoLcIAjDVJBn3mcy/kHd2dI4LG6zWytgFqJpbwWxcQLH4XnDGngDcb3B2akAA2nLayZLb6doMNDohV4y6OojDFuxMmgR+1RGtUDHNF0I4N/yRJ9X9M/L6b7B753AmBrGVDf1Wc3Z1bcF095JOxNRnVg6f/YtHu; _abck=B101442642E667FC14DEE009F536240B~0~YAAQB5QZuGodLjh4AQAAJPS2UgVY+Lc6/eCIePlDr9M27BFiPp6U8k8Amz+SXx+VG/oTk5PfIfMsD9ROAIy2x04Tjp2XmNUhbKIX3xTD7EtTwJGFyYSv9IzvxRt34ZsCfcJttss+pVP4x3lMQiIypYtbi8aOn4+ovKsJvDGJoItTd8zDQVaG9Td8qk9Dn5EmlsGjHWHSQ4cBHYYnArfGE9n1b6VjWcIK/oWUjxMgB09gKS54tl1913w3pDJityEdf8TDLyvi0p4MVAo0nmDY+DPPNLKkzcxZRnJcMYTp1LM4CdykYOgUYYvcLKh/zJjlBiAncf8YS7ERudW+rspzZEgT0bDKAXKENaymVTm/9DTkQdtcfeVX7ncZKa+WZkbzqGmTlkf4hk9/cFJQ1dIizyqrMbo6~-1~-1~-1; AMCV_06660D1556E030D17F000101%40AdobeOrg=-330454231%7CMCIDTS%7C18708%7CMCMID%7C68688088971911091921576576038634582023%7CMCAAMLH-1616900226%7C7%7CMCAAMB-1616900226%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1616302626s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C3.1.2; mt.sc=%7B%22i%22%3A1616295427018%2C%22d%22%3A%5B%5D%7D; QuantumMetricSessionID=381642e06c713405e1c825769a0a6e7a; CVPF=3wW2Eaug8F35v0ibrSy6iM1qMsHCnDADcRPYmQxvJ58kn8UxwTYwObg; gbi_sessionId=ckmikkneo00003f96k1e58a1i; akavpau_vp_www_cvs_com_vaccine_covid19=1616296061~id=75bea2e744d5738a366e26709d80cc52; akavpau_www_cvs_com_general=1616295881~id=d4ea0d3ac486df626f3f9c27a63cce21; DG_IID=4ADD02B3-E005-380C-B114-CEB7903533F6; DG_UID=D78BE813-788E-3AA5-9B86-AF9B59AC7F8E; RT="z=1&dm=cvs.com&si=87cc6c94-4d38-4cef-a60a-6e117247911e&ss=kmikkbjh&sl=6&tt=43h&bcn=%2F%2F173c5b08.akstat.io%2F&ld=tfn"; gpv_e5=cvs%7Cdweb%7Cvaccine%7Cintake%7Cstore%7Celigibility-screener%7Crx%3A%20immunizations%3A%20jurisdictions; gpv_p10=www.cvs.com%2Fvaccine%2Fintake%2Fstore%2Feligibility-screener%2Feligibility-covid; bm_sv=8BBE4F3D51B59726B471521B10EB7F7E~040Yg7tqB/m4iUo431YVhNi7SJd91hPjw4CgRWG8OG6IckvSajouz69rOCdbXwx5ze2MScxYDx1SXzKCTXtfouyPtQXT+gMMGj8SJ8gV5GaUIZTVJhGHLWRXn6o0hOLqkPcDF4lYRUe1AaIGwMIFgQ==; qmexp=1616297274862; s_sq=%5B%5BB%5D%5D; utag_main=v_id:017666b2d3aa0080d19c803a5b2003077002e06f00942$_sn:4$_ss:0$_st:1616297274880$vapi_domain:cvs.com$_pn:3%3Bexp-session$ses_id:1616295426490%3Bexp-session',
  },
  "referrer": "https://www.cvs.com/vaccine/intake/store/eligibility-screener/eligibility-qns",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "mode": "cors",
  data: '{"requestMetaData":{"appName":"CVS_WEB","lineOfBusiness":"RETAIL","channelName":"WEB","deviceType":"DESKTOP","deviceToken":"7777","apiKey":"a2ff75c6-2da7-4299-929d-d670d827ab4a","source":"ICE_WEB","securityType":"apiKey","responseFormat":"JSON","type":"cn-dep"},"requestPayloadData":{"eligibilityId":"EID_MA"}}',
};

const currentEligibilityOptions = [
  'Age 65 or over',
  'Teachers K-12, Daycare and preschool workers, and staff members',
  'Age 16+ with 2+ select medical conditions that increase the risk of severe illness from COVID-19',
  'Qualifying healthcare worker or first responder',
  // 'Resident or staff of long-term care, congregate care, and low income and affordable senior housing',
  'None of the above'
];

async function checkEligibilityQs() {
  const response = await axios(options);
  const answerOptions = response.data.responsePayloadData.eligibilityQuestions[1].answerOptions[0].answerOptions;
  const eligibilityOptions = answerOptions.map(a => a.question);

  // console.log(eligibilityOptions);

  for (option of eligibilityOptions) {
    if (currentEligibilityOptions.indexOf(option) < 0) {
      // console.log('Found new option: ', option);
      return option;
    }
  }

  return undefined;
}

module.exports = {
  checkEligibilityQs,
}
