const _0x54fdc8=_0x323b;(function(_0x31c146,_0x52b96f){const _0x3f6c8f=_0x323b,_0xb60910=_0x31c146();while(!![]){try{const _0x2318df=-parseInt(_0x3f6c8f(0x187))/0x1+-parseInt(_0x3f6c8f(0x1a3))/0x2*(-parseInt(_0x3f6c8f(0x182))/0x3)+-parseInt(_0x3f6c8f(0x191))/0x4+parseInt(_0x3f6c8f(0x178))/0x5*(parseInt(_0x3f6c8f(0x179))/0x6)+parseInt(_0x3f6c8f(0x195))/0x7*(-parseInt(_0x3f6c8f(0x188))/0x8)+-parseInt(_0x3f6c8f(0x1a0))/0x9*(parseInt(_0x3f6c8f(0x18e))/0xa)+parseInt(_0x3f6c8f(0x17f))/0xb;if(_0x2318df===_0x52b96f)break;else _0xb60910['push'](_0xb60910['shift']());}catch(_0x38c588){_0xb60910['push'](_0xb60910['shift']());}}}(_0x2e88,0x922e4));const chalk=require(_0x54fdc8(0x176)),figlet=require(_0x54fdc8(0x184)),inquirer=require(_0x54fdc8(0x19c)),request=require(_0x54fdc8(0x19d)),questions=[{'type':'input','name':_0x54fdc8(0x19e),'message':color('\x20Auth\x20:'),'prefix':color('[',_0x54fdc8(0x194))+'+'+color(']',_0x54fdc8(0x194)),'suffix':'','validate':function(_0x22b670){const _0x371891=_0x54fdc8,_0x20304c=this[_0x371891(0x18a)]();if(!_0x22b670)return _0x20304c(_0x371891(0x19b)),![];let _0x2ff66f;try{_0x2ff66f=JSON['parse'](_0x22b670);}catch(_0x214c6d){_0x2ff66f=_0x214c6d[_0x371891(0x173)];}if(typeof _0x2ff66f!=_0x371891(0x199))return _0x20304c(_0x371891(0x17b)),![];return _0x20304c(null,!![]);}},{'type':_0x54fdc8(0x197),'name':_0x54fdc8(0x198),'message':color(_0x54fdc8(0x185)),'prefix':color('[','redBright')+'+'+color(']',_0x54fdc8(0x194)),'suffix':'','choices':[_0x54fdc8(0x172),_0x54fdc8(0x19a),'Round\x203'],'filter':_0x29b7d3=>{return{'Round\x201':0x1,'Round\x202':0x2,'Round\x203':0x3}[_0x29b7d3];}},{'type':'input','name':_0x54fdc8(0x196),'message':color(_0x54fdc8(0x18d)),'prefix':color('[',_0x54fdc8(0x194))+'+'+color(']','redBright'),'suffix':'','default':0x3e8,'validate':function(_0x5c3f19){const _0x3d68b4=_0x54fdc8,_0x54c3e0=this[_0x3d68b4(0x18a)]();if(_0x5c3f19&&isNaN(_0x5c3f19))return _0x54c3e0(_0x3d68b4(0x18f)),![];return _0x54c3e0(null,!![]);}}];console[_0x54fdc8(0x171)](''),console[_0x54fdc8(0x17d)]('');const asciiText=figlet['textSync'](_0x54fdc8(0x189),{'font':_0x54fdc8(0x186),'horizontalLayout':'default','verticalLayout':'default','width':0x37,'whitespaceBreak':!![]});console[_0x54fdc8(0x171)](color(asciiText,'redBright')),console[_0x54fdc8(0x171)](''),inquirer[_0x54fdc8(0x17a)](questions)[_0x54fdc8(0x192)](async({authorization:_0x46bd15,round:_0x5811db,interval:_0x36f34a})=>{const _0x5d5168=_0x54fdc8,_0x244824=JSON[_0x5d5168(0x1a1)](_0x46bd15);iStumble(_0x36f34a,_0x5811db,_0x244824);});function iStumble(_0x3e8f66,_0x254d0f,_0x48f58c){setInterval(async function _0x2e7600(){const _0x49e044=_0x323b;try{const {data:_0x13c6a3}=await stageRequest(_0x48f58c,_0x254d0f);if(typeof _0x13c6a3==_0x49e044(0x19f)&&_0x13c6a3[_0x49e044(0x170)](_0x49e044(0x1a2)))console[_0x49e044(0x177)](color(_0x49e044(0x1a2),_0x49e044(0x194)));else{if(typeof _0x13c6a3==_0x49e044(0x199)){const _0x31f86c=new Date();let {Id:_0x190d84,Username:_0x1ee3fe,Country:_0x43da75,Region:_0x215c82,Crowns:_0x572b5f,SkillRating:_0x694357}=_0x13c6a3[_0x49e044(0x18b)];const _0x3c87cc='['+color(_0x31f86c[_0x49e044(0x183)]())+':'+_0x31f86c[_0x49e044(0x18c)]()+_0x49e044(0x190)+[color(_0x1ee3fe,_0x49e044(0x194)),color(_0x694357,'yellowBright'),color(_0x572b5f,_0x49e044(0x16f))]['join'](_0x49e044(0x175));console[_0x49e044(0x171)](_0x3c87cc);}}}catch(_0x451085){}},Number(_0x3e8f66));}function _0x323b(_0x11866e,_0x1a2510){const _0x2e88f6=_0x2e88();return _0x323b=function(_0x323b86,_0x38b3e8){_0x323b86=_0x323b86-0x16f;let _0x5db753=_0x2e88f6[_0x323b86];return _0x5db753;},_0x323b(_0x11866e,_0x1a2510);}function color(_0x4c238f,_0x2391ab){const _0x12ff1e=_0x54fdc8;return _0x2391ab?chalk[_0x2391ab]['bold'](_0x4c238f):chalk[_0x12ff1e(0x17c)][_0x12ff1e(0x180)](_0x4c238f);}function stageRequest(_0x5d948e,_0x3afd24,_0x11d5bf){return new Promise((_0x3b30e5,_0x4172c5)=>{const _0x483f25=_0x323b;request({'url':_0x483f25(0x181)+_0x3afd24,'headers':{'Authorization':JSON[_0x483f25(0x174)](_0x5d948e),'use_response_compression':!![],'Accept-Encoding':_0x483f25(0x193),'User-Agent':_0x483f25(0x17e)}})[_0x483f25(0x192)](_0x292d30=>{_0x3b30e5(_0x292d30);})['catch'](_0x4172c5);});}function _0x2e88(){const _0x280b9a=['inquirer','@i-scrapper/plugins-request','authorization','string','1454301TKoUct','parse','BANNED','32tClibt','greenBright','includes','log','Round\x201','message','stringify','\x20|\x20','chalk','error','5HGezzZ','1356774CGtCqC','prompt','Authorized\x20Salah\x20!!','white','clear','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64))','16545353geLmIG','bold','http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/','174345mPtTkb','getHours','figlet','\x20Round\x20:','ANSI\x20Shadow','297397UTgbGg','7142888jMxyKG','VIP\x20NOLIMIT','async','User','getMinutes','\x20Delay\x20:','10UEgACr','You\x20need\x20to\x20provide\x20a\x20number',']\x20|\x20','2837956SQfTWi','then','gzip','redBright','7iMXazn','interval','list','round','object','Round\x202','Masukkan\x20Authorized\x20!!'];_0x2e88=function(){return _0x280b9a;};return _0x2e88();}
