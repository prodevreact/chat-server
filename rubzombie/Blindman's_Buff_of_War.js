// https://es.chaturbate.com/apps/user_uploads/0/rubzombie/
// https://es.chaturbate.com/apps/sourcecode/blindmans-buff-of-war/?version=&slot=0

// startof CBSv2 module - not for re-compilation
(function(a,k){function g(a){this.message=a}g.prototype=Error();g.prototype.name="InvalidCharacterError";a.btoa||(a.btoa=function(a){a=String(a);for(var f,b,n=0,c=k,q="";a.charAt(n|0)||(c="=",n%1);q+=c.charAt(63&f>>8-n%1*8)){b=a.charCodeAt(n+=.75);if(255<b)throw new g('"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.');f=f<<8|b}return q});a.atob||(a.atob=function(a){a=String(a).replace(/=+$/,"");if(1==a.length%4)throw new g('"atob" failed: The string to be decoded is not correctly encoded.');
for(var f=0,b,n,c=0,q="";n=a.charAt(c++);~n&&(b=f%4?64*b+n:n,f++%4)?q+=String.fromCharCode(255&b>>(-2*f&6)):0)n=k.indexOf(n);return q})})("undefined"===typeof exports?this:exports,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
(function(a){var k=cb.onMessage,g=null,u=null,f,b="#"+(cb.settings.hasOwnProperty("slot")?cb.settings.slot:"")+"CBSv2",n=/^\/#[0-3]CBSv2\//;cb.log("CBS::v2::CB app/bot data Save/restore::20170923.009::Release");cb.onMessage=function(c){if("function"!==typeof c)throw new TypeError(c+" is not a function");k(function(k){var d=k.m.replace(/\s*/g,"").split("/");if(3<d.length&&""===d[0]&&d[1]===b){if(g&&u&&k.user===cb.room_slug){var p=d[2];if(4===d.length)d[3]="?",k.m=d.join("/");else if(6===d.length){if(!(f||
{}).hasOwnProperty(p)){var q=g();f={};f[p]=a.btoa(a.unescape(a.encodeURIComponent(q)));q||cb.log("onSave returned no data.")}f.hasOwnProperty(p)&&(q=parseInt(d[3],10),p=f[p].slice(q,q+512),d[4]=p,d[5]=p.length,k.m=d.join("/"))}else 7===d.length&&("0"===d[3]&&(f={},f[p]=""),f.hasOwnProperty(p)&&(d[3]=f[p].length,d[6]=d[4].length,k.m=d.join("/"),d[4]?f[p]+=d[4]:(q=a.decodeURIComponent(a.escape(a.atob(f[p]))),u(q),cb.chatNotice("Previously Saved Data Restored.",cb.room_slug))))}k["X-Spam"]=!0}else n.test(k.m)&&
(k["X-Spam"]=!0);return c(k)});return c};cb.onRestore=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");return u=a};cb.onSave=function(a){if("function"!==typeof a)throw new TypeError(a+" is not a function");return g=a};cb.onMessage(function(a){return a})})("undefined"===typeof exports?this:exports);
// endof CBSv2 module - not for re-compilation
var k=function(){function t(c,a){c=c||"??";return a&&c.length>a?c.substring(0,a-1)+"\u2026":c}function v(c,a){cb.setTimeout(c,1E3>a?1E3:a)}function f(c){if(c&&"string"===typeof c){f.hasOwnProperty("log")||(f.log=[]);var a=/(..)(:..)(:..)/.exec(new Date),b=a[1]%12||12;f.log.push((10>b?"0"+b:b)+a[2]+a[3]+" "+(12>a[1]?"A":"P")+"M : "+c);25<f.log.length&&f.log.shift();c=("Blindman's Buff of War: "+c).replace(/\+/g,"\uff0b").replace(/&/g,encodeURIComponent("&"))}f.hasOwnProperty("log")||cb.log(c.replace(/(\r\n|\n|\r|\\n)/gm,
" ").trim())}function A(c){var a=Array.prototype.slice.call(arguments),b,d=0,e;c&&"string"===typeof c&&("Enable"===cb.settings.multi_line_safe&&(b=c.split(/ *\n */),d=b.length,c=b[0]),a[0]=("Blindman's Buff of War: "+c.replace(/\+/g,"\uff0b")).replace(/&/g,encodeURIComponent("&")));cb.chatNotice.apply(cb,a);for(e=1;e<d;e++)a[0]=b[e].replace(/\+/g,"\uff0b").replace(/&/g,encodeURIComponent("&")),cb.chatNotice.apply(cb,a)}function l(c,a){var b=Array.prototype.slice.call(arguments);a&&"string"===typeof a&&
a.length&&(b[0]=""+c,A.apply(R,b))}function J(c){return c===d.a?d.b:d.a}function E(c){return null===F?"?@"+n:p[(c+F)%p.length]}function K(){var c=e[d.a],a=e[d.b],b=n;return c>b||a>b?!0:c<b||a<b?!1:c===b&&a===b}function L(c){function a(){1E3<(new Date).valueOf()-b.last_update?(b.subject!==b.new_subject&&(w?cb.changeRoomSubject(b.new_subject):A(b.new_subject,"","","#dc5500","bold"),b.subject=b.new_subject),b.pending=!1,b.last_update=(new Date).valueOf()):v(a,1E3)}var b=L;b.hasOwnProperty("last_update")||
(b.last_update=0);b.hasOwnProperty("pending")||(b.pending=!1);b.hasOwnProperty("subject")||(b.subject="");b.new_subject=c||g[d.a]+"s vs "+g[d.b]+"s - First team to "+(n+1)+" wins! Each team's goal ('"+p.join("' or '")+"') revealed @"+n;b.last_update=(new Date).valueOf();b.pending||(b.pending=!0,v(a,1E3))}function O(){return e[d.a]===e[d.b]?J(h):e[d.a]<e[d.b]?d.a:d.b}function q(){var c=["May the best team/goal win","Let battle commence","Let the 'tugging' :\u00adP begin"],c=e.length&&e.reduce(function(a,
c){return a+c})?"":c[Math.floor(Math.random()*c.length)]+"\u2026",c=c.length?"\n\nBlindman's Buff of War: "+c:"";q.hasOwnProperty("last_promo")||(q.last_promo=0);9E5<(new Date).valueOf()-q.last_promo&&(A(g[d.a]+"s vs "+g[d.b]+"s\n\u00a0\u00a0/tip to tug for the indicated team.\n\u00a0\u00a0First team to "+(n+1)+" wins.\n\u00a0\u00a0Which goal each team tugs for ('"+p.join("' or '")+"') will be revealed @"+n+".\n\u00a0\u00a0Type /help for help; /hint for tip hints."+c,"","#d5ebf8","",""),q.last_promo=
(new Date).valueOf());K()||v(q,6E4)}function G(){function c(){if(1E3<(new Date).valueOf()-a.last_update){var b=!1;w&&!H||A([a.title,a.info,a.prompt].join("\n\u00a0\u00a0"),"","#d5ebf8","","");H&&(a.title="Blindman's Buff of War",a.info="...",a.prompt="...");w&&(x.row1_value!==a.title&&(x.row1_value=a.title,b=!0),x.row2_value!==a.info&&(x.row2_value=a.info,b=!0),x.row3_value!==a.prompt&&(x.row3_value=a.prompt,b=!0),b&&cb.drawPanel());a.pending=!1;a.last_update=(new Date).valueOf();q.last_promo=a.last_update}else v(c,
1E3)}var a=G,b=h,f=O(),y=w?12:0;a.hasOwnProperty("last_update")||(a.last_update=0);a.hasOwnProperty("pending")||(a.pending=!1);null===F&&(e[d.a]>=n||e[d.b]>=n)&&(F=Math.floor(2*Math.random()));K()?(e[d.a]===e[d.b]&&(b=J(h)),a.title="Game Over!",a.info=g[b]+" Team Wins!!!",a.prompt=E(b),L(a.info+" "+a.prompt),B||(l(a.title+" Deactivate & Re-start Blindman's Buff of War to set new game.",cb.room_slug,"#f2f9fd"),B=!0)):(a.title="("+g[d.a]+"s) "+e[d.a]+"/"+(n+1)+" vs "+e[d.b]+"/"+(n+1)+" ("+g[d.b]+"s)",
a.info="("+g[d.a][0]+") "+t(E(d.a),y)+" --"+(f===d.a?"<-<-<":">->->")+"-- "+t(E(d.b),y)+" ("+g[d.b][0]+")",a.prompt="Next /tip tugs for the "+g[f]+" team\u2026",L());a.last_update=(new Date).valueOf();a.pending||(a.pending=!0,v(c,1E3))}function P(c){function a(a){I?a():l("Sorry, /"+(z[1]||"")+z[2]+" is a broadcaster-only command.",r,"#f37e7e","#f5f5f5")}function b(){var a="";v&&(a+="version: 2014/12/25.0\n");a+="Tippers tip to win a token tug of war. Tips always go to the losing side, or previously untipped side, if they are tied. Only when one side is within one token of victory, is the goal each side is tugging for revealed.\nBlindman's Buff of War: Commands:\n";
v&&(a+="\u00a0\u00a0/log - to display recent log messages\n");I&&(a+="\u00a0\u00a0/high - to enable high traffic mode\n\u00a0\u00a0/safe - to enable multi-line safe mode\n");a+="\u00a0\u00a0/hint - for tip hints\n\u00a0\u00a0/?\n\u00a0\u00a0/help - to show this help message.\nFor more details, see "+(w?"app":"bot")+" Description.";l(a,r,"#f2f9fd")}function p(){H=!0;G();l("High Traffic Mode enabled.",r,"#f2f9fd")}function y(){var a,c=O(),b=J(c),f=e[b]-e[c],M=n-e[c],y=M+1;a=""+("Tip Hints for ("+g[d.a][0]+
") "+e[d.a]+"\u00ad:\u00ad"+e[d.b]+" ("+g[d.b][0]+"):");f=f||1;a=K()?a+' "Game over, man! Game over!"':null===F?a+("\n\u00a0\u00a0/tip "+M+" - to reveal team goals\n\u00a0\u00a0/tip "+y+" - for "+g[c]+"s to win\n\u00a0\u00a0/tip "+f+", then /tip "+(y-f+1)+" - for "+g[b]+"s to win"):a+("\n\u00a0\u00a0/tip "+M+" - for ("+g[b][0]+") '"+E(b)+"' to win\n\u00a0\u00a0/tip "+y+" - for ("+g[c][0]+") '"+E(c)+"' to win");l(a,r,"#f2f9fd")}function q(){cb.settings.multi_line_safe="Enabled";l("Multi-line Safe Mode enabled.",
r,"#f2f9fd")}function t(){var a=u.replace(/[\W_]/g,"").toLowerCase(),c=a.replace(/[aeiou]/g,""),b,d,e=!1;b=u;d=r;e=!1;d=d.replace(/_[0-9a-f]+/ig,"");h.hasOwnProperty("echo_user")&&h.hasOwnProperty("echo_text")&&(e=h.echo_text===b&&h.echo_user===d);h.echo_user=d;h.echo_text=b;!0===e&&f("SpamBlockerAd: echo match");b=0;for(d=m.g.length;!e&&b<d&&!(c.length<m.g[b].length);b++)!0===(e=-1!==c.indexOf(m.g[b]))&&f("SpamBlockerAd: simple match ("+b+"): "+m.g[b]);b=0;for(d=m.text.length;!e&&b<d;b++)!0===(e=
m.text[b].test(u))&&f("SpamBlockerAd: text match ("+b+"): "+m.text[b].source);b=0;for(d=m.i.length;!e&&b<d;b++)!0===(e=m.i[b].test(a))&&f("SpamBlockerAd: plain match ("+b+"): "+m.i[b].source);b=0;for(d=m.h.length;!e&&b<d;b++)!0===(e=(new RegExp("(?:^|\\s):"+m.h[b]+"(?=\\s|$)","")).test(u))&&f("SpamBlockerAd: blacklist emoticons match ("+b+"): "+m.h[b]);e&&(l(["Message from the author:\n\u00a0\u00a0Thanks for using my "+(w?"app":"bot")+" :)\n\u00a0\u00a0By the way, user "+r+" has just spammed your chat!\n\u00a0\u00a0To stop them doing it again, launch my spam blocker, No\u00a0Grey\u00a0Spammers.\n\u00a0\u00a0See this "+
(w?"app":"bot")+"'s Description for a link ;)","End of Message"].join("\nBlindman's Buff of War: "),cb.room_slug,"#f37e7e"),C=!1)}var h=P,x=(new Date).valueOf(),u=c.m,r=c.user,v="rubzombie"===r,I=r===cb.room_slug,D=c.is_mod,A=c.hasOwnProperty("is_pm")&&c.is_pm,B=/\/(tow|#[0-3])?(bip|help|high|hint|log|safe|\?)\s*(\d*)/ig,z;if(C)if(I||D){if(/\/(sh|sphammer|#[0-3])?(english|enonly|sphammered)/i.test(u)||/\/(sh|sphammer)(help|spam)/i.test(u))C=!1,f("SpamBlockerAd: SpHammer detected");/\/(ngs|nogreyspammers)(help|spam|\?)/i.test(u)&&
(C=!1,f("SpamBlockerAd: No Grey Spammers detected"))}else/<<<( has been SPAM HAMMERED| spHammer hit#)/.test(u)&&"#595959"===c.background&&"#999999"===c.c&&(C=!1,f("SpamBlockerAd: SpHammer detected"));if(!c["X-Spam"]&&"/"===u.trim()[0])for(;null!==(z=B.exec(u));)if(D=(z[1]||"tow").toLowerCase(),"tow"===D||D===N)switch(c["X-Spam"]=!0,z[3].replace(/^\s+|\s+$/g,""),D=z[2].toLowerCase(),D){case "log":(I||v)&&f.hasOwnProperty("log")&&l("Log:\n\u00a0\u00a0"+f.log.join("\n\u00a0\u00a0"),r,"#f37ef3");break;
case "high":a(p);break;case "hint":y();break;case "safe":a(q);break;case "bip":l("Sorry, /"+(z[1]||"")+z[2]+" is a broadcaster-only, author-only, pre-release-only command.",r,"#f37e7e","#f5f5f5");break;default:b()}I||c["X-Spam"]||!A&&C&&t();f("onMessage: "+((new Date).valueOf()-x)+"ms");return c}var g=["Red","Blue"],d={a:g.indexOf(g[0]),b:g.indexOf(g[1])},m={text:[/[^\u0000-\u0080\u00ad\u2605\u2606\u2654\u2655\u265a\u265b]/],i:[],g:"dlnws mcmcm rtmnt chnskv cht4fr frtkns wgwgwg bst4cms httpggl lv4prty lvtrffn nd4strp prfllsn bnjknntt kkmlvlns nsxyjngs pssy4shw vcmsssns wlchstdt 100kstnls chnnmnwhr cmsssnscm grls4prty prmmchtcm rgclsngsn sndtdrtch tknsgnrtr tmrqrllh1 tpgmscrck bfrtsptchd glsmtrprtl mnhndynmmr schnmnprfl schtglbntr snddrtchlv wwwsxchtsr knntjmlgckn lslsnndmldn stdchlngwlg strmngnkdcm wtchmcmgrls chbnnjngsgls dtschmtrprtl fndfrtknshck hrgldtschkrl pyplrwstrnnn schfdsmwgdch wsnddglnpmml wstrnnnrpypl jckjxshrngnds kstnlsndhnrsk llrdngsnchthr mncmstjtztchn wndmrmnfrrlds dknnmnglbwchsn mprdndstrngtrk n1gnhmpgstfrtg chtwththswsmgrl stdnglchnnmnwhr wnnjrktwthmfrfr fsllnghtpcsndvds dsthtdstwchmmrsnd hbknfnnzllnntrssn nrnchbzckmtdntpps schfcktrffnndcmsx fdrstdnglchnnmnwhr llnfssthnmprflvnmr nynwnnjrktwthmfrfr vrllmsndfstnrdtsch glbdgbtsgrnchtmhrdr snddwskstnlsndglrst wsnddnnnndglndtschn chtrbtknnmndchvrgssn ftzstmgglndbrchtshrt mchvrdrcmllswshrwllt nynhrdrmstfckldrmlfs mchnchtlngwrtnndkmmzmr wrbckhtknnmchdjmlbschn kstnlsdtngprtlndtschlnd ntrssntbrmchfndstdnmnmprfl wnnjschtnmnprflndkntktrtmchdrt hbthrgntlchdhlfschlgschffthrvlldtn thsmnstrlysnfbtchsllngthmtfhsgrlfrnd dspmmrsndnfchzdmmvnjdmmdwrdnsgbnntndnsnstnflltdchknrfsnbldsnngwrbngrn".split(" "),
h:"anarchy dance69 endlesspoop exbf extremevomit extremevomit2 extremevomitscat FISTING fuckass1 gape420 gay gay6 gaybj gayfuck2 gayfuck5 gaysuck2 goats3 gross kena kisshug55 kisshug56 kisshug57 powerbottom prolapse56 prolapse57 prolapse58 shit50 shit55 shithead takeit tubgirl3 vbutt wag".split(" ")},R=this,N=null,w,p=[],e=[],n,H,F=null,h,Q={},B=!1,x={template:"3_rows_11_21_31",row1_value:"Blindman's Buff of War",row2_value:"...",row3_value:"..."},C=!0;return{u:function(){f("version: 2014/12/25.0");
cb.settings.hasOwnProperty("slot")&&(N="#"+cb.settings.slot);w="#0"===N;H="Enabled"===cb.settings.high_traffic;n=cb.settings.token_target-1;h=d.b;var c,a;for(c=1;3>c;c++)""!==(a=cb.settings["goal"+c]||"")&&0<(a=a.replace(/\|/g,"_").trim()).length&&-1===p.indexOf(a)&&(p.push(a),e[p.indexOf(a)]=0);p.length&&2>p.length?l("Sorry, there need to be at least two different goals. Please, re-launch Blindman's Buff of War and check the Goal Description settings :)",cb.room_slug,"#f2f9fd"):(c=(c=cb.settings.token_target)||
0,l("Settings:\n\u00a0\u00a0goal choices: '"+p.join("' vs '")+"'\n\u00a0\u00a0token target: "+(c.toString()+" "+(1===c?"tkn":"tkns"))+"\n\u00a0\u00a0high traffic mode: "+(cb.settings.high_traffic||"").toLowerCase()+"\n\u00a0\u00a0multi-line safe mode: "+(cb.settings.multi_line_safe||"").toLowerCase(),cb.room_slug,"#f2f9fd"),q(),G())},v:function(c){c.user!==cb.room_slug||w&&!H||(q.last_promo=0,q(),G())},onMessage:P,w:function(c){var a=(new Date).valueOf(),b=c.from_user;c=c.amount;var g=e[d.a]-e[d.b];
K()?(Q.hasOwnProperty(b)||(l("Sorry, "+b+", the game is over. But, thank you for tipping :)",b,"#f2f9fd"),Q[b]=!0),B||(l(b+" tipped after the game was won.\n\u00a0\u00a0Deactivate & Re-start Blindman's Buff of War to set new game.",cb.room_slug,"#f2f9fd"),B=!0)):(h=0<g?d.b:0>g?d.a:J(h),e[h]+=c,G());f("onTip: "+((new Date).valueOf()-a)+"ms")},A:x,f:{l:32,B:100,s:2,o:5E3,j:function(c,a,b,d){var e,f=arguments.length-4;if(1<f&&-1<Array.prototype.slice.call(arguments).indexOf(d,4))for(e=0;e<f;e++)this["choice"+
(e+1)]=arguments[e+4];else for(f++,e=0;e<f;e++)this["choice"+(e+1)]=arguments[e+3];this.defaultValue=d;this.label=c;this.name=a;null===b||b||(this.required=!!b);this.type="choice"}}}}();cb.settings_choices=[{label:"Goal A Description",maxLength:k.f.l,minLength:1,name:"goal1",type:"str"},{label:"Goal B Description",maxLength:k.f.l,minLength:1,name:"goal2",type:"str"},{defaultValue:k.f.B,label:"Token Target ... ["+k.f.s+" - "+k.f.o+" tks]",maxValue:k.f.o,minValue:k.f.s,name:"token_target",type:"int"}];
cb.settings_choices.push(new k.f.j("High Traffic Mode (see app Description)","high_traffic",!1,"Disabled","Enabled"));cb.settings_choices.push(new k.f.j("Multi-line Safe Mode (see app Description)","multi_line_safe",!1,"Disabled","Enabled"));cb.onDrawPanel(function(){return k.A});cb.onEnter(function(t){return k.v(t)});cb.onMessage(function(t){return k.onMessage(t)});cb.onTip(function(t){k.w(t)});k.u();