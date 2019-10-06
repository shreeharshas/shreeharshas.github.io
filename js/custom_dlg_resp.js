/*! PDFix license http://pdfix.net/terms. Copyright (c) 2016 Pdfix. All Rights Reserved. */
function pdfixUpdateLayout(){pdfixUpdatePages()}function getFirstChild(n,t,i){for(var r=n.firstChild;r!==null;){if(r.nodeType==1&&(t==""||r.nodeName.toLowerCase()==t)&&(i==""||r.getAttribute("data-type")==i))break;r=r.nextSibling}return r}function getNextSibling(n,t,i){for(var r=n.nextSibling;r!==null;){if(r.nodeType==1&&(t==""||r.nodeName.toLowerCase()==t)&&(i==""||r.getAttribute("data-type")==i))break;r=r.nextSibling}return r}function pdfixUpdatePages(){var t=document.getElementById("pdf-document"),n;if(t!=="undefined"&&t.getAttribute("data-type")=="pdf-document")for(n=getNextSibling(t,"div","pdf-page");n!==null;)pdfixUpdatePage(n),n=getNextSibling(n,"div","pdf-page")}function pdfixUpdatePage(n){var t=n.getAttribute("data-layout");t=="responsive"?pdfixUpdatePageResponsive(n):pdfixUpdatePageFixed(n)}function pdfixUpdatePageFixed(n){var u=n.getAttribute("data-ratio"),i=parseFloat(n.offsetWidth),t;if(n.style.height=i*u+"px",t=getFirstChild(n,"div","pdf-page-inner"),t!==null){var f=parseFloat(t.getAttribute("data-page-width")),e=i/f,r=getFirstChild(t,"div","pdf-page-text");r!==null&&updatePageTextsOnce(r);t.style.transform="scale("+e+")";t.style.transformOrigin="0px 0px 0px"}}function pdfixUpdatePageResponsive(n){for(var u,e,f=n.getElementsByTagName("div"),i=0,s=f.length;i<s;i++)if(f[i].getAttribute("data-type")=="pdf-image"){var t=f[i],h=t.parentElement,o=parseFloat(t.getAttribute("data-image-width")),c=parseFloat(t.getAttribute("data-ratio")),l=parseFloat(h.offsetWidth),r=l/o;r>1&&(r=1);t.style.height=o*r/c+"px";u=getFirstChild(t,"div","pdf-image-inner");e=getFirstChild(u,"div","pdf-image-childs");e!=null&&updatePageTextsOnce(e);u.style.transform="scale("+r+")";u.style.transformOrigin="0px 0px 0px"}}function updatePageTextsOnce(n){var t,i;if(n.getAttribute("data-text-scaled")!="1"){for(t=n.firstChild;t!=null;){if(t.nodeType==1&&(i=getFirstChild(t,"span",""),i!=null)){var r=parseFloat(i.offsetWidth),u=parseFloat(t.offsetWidth),f=parseFloat(i.offsetHeight),e=parseFloat(t.offsetHeight)-1,o=u/r,s=e/f;t.style.transform="scaleX("+o+") scaleY("+s+")";t.style.transformOrigin="0px 0px 0px"}t=t.nextSibling}n.setAttribute("data-text-scaled","1")}}window.addEventListener("resize",pdfixUpdateLayout)
/*! PDFix license http://pdfix.net/terms. Copyright (c) 2016 Pdfix. All Rights Reserved. */
function AFNumber_Format(n,t,i,r,u,f){var v=event.target,h,a,c,l,s,o,e;n<0&&(n=-n);(t<0||t>3)&&(t=0);(i<0||i>3)&&(i=0);h=parseFloat(event.value.replace(",","."));h>0&&(h+=DOUBLE_CORRECT);a=h<0;c=Math.abs(h).toFixed(n);c.length==0&&(c="0");l=".";s="";switch(t){case 0:s=",";break;case 2:s=".";l=",";break;case 3:l=",";break;case 4:s="'"}o=c.toString().split(".");s.length>0&&(o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,s));e=o[0];o.length>1&&o[1].length>0&&(e=e+l+o[1]);e=f?u+e:e+u;i!=0?a?((i==2||i==3)&&(e="("+e+")"),(i==1||i==3)&&(v.color=color.red)):v.color=color.black:a&&(e="-"+e);event.value=e}function AFNumber_Keystroke(n,t){var i=event.value,o=event.change,u,f,s,h,c,r,e,a,l;if(event.willCommit){if(u=trim(i),u.length==0)return;u.replace(",",".");isNaN(u)&&(event.rc=!1,app.alert(ERROR_AFNUMBER_KEYSTROKE));return}if(f="",event.selStart!=-1&&(f=f.substr(event.selStart,event.selEnd-event.selStart)),s=i.charAt(0)=="-"&&f.charAt(0)=="-",s){event.rc=!1;return}for((t<0||t>3)&&(t=0),h=t==2||t==3?",":".",c=i.indexOf(h)!=-1,r=0;r<o.length;r++){if(e=o.charAt(r),e==h){if(c){event.rc=!1;return}c=!0;continue}if(e=="-"){if(s||r!=0||event.selStart!=0){event.rc=!1;return}continue}if(isNaN(e)){event.rc=!1;return}}a=i.substr(0,event.selStart);l="";event.selEnd<i.length&&(l=i.substr(event.selEnd));i=a+o+l;event.value=i}function AFPercent_Format(n,t){var f,s,e,o,u,i,r;n<0&&(n=-n);(t<0||t>3)&&(t=0);f=parseFloat(event.value.replace(",","."));f*=100;n>0&&(f+=DOUBLE_CORRECT);s=f<0;e=Math.abs(f).toFixed(n);e.length==0&&(e="0");o=".";u="";switch(t){case 0:u=",";break;case 2:u=".";o=",";break;case 3:o=",";break;case 4:u="'"}i=e.toString().split(".");u.length>0&&(i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,u));r=i[0];i.length>1&&i[1].length>0&&(r=r+o+i[1]);s&&(r="-"+r);r+="%";event.value=r}function AFPercent_Keystroke(n,t){return AFNumber_Keystroke(n,t,0,0,"",!0)}function AFDate_FormatEx(n){if(event.value!=""){var t=AFParseDateEx(event.value,n);if(!t){app.alert(util.printf(ERROR_PARSE_DATETIME,event.value));event.rc=!1;return}event.value=util.printd(n,t)}}function AFDate_KeystrokeEx(n){if(typeof event.value!="string"){event.rc=!1;return}if(event.value!=""){var t=AFParseDateEx(event.value,n);if(!t){app.alert(util.printf(ERROR_PARSE_DATETIME,event.value));event.rc=!1;return}return!0}}function AFDate_Format(n){(n<0||n>=oldDateFormats.length)&&(n=0);AFDate_FormatEx(oldDateFormats[n])}function AFDate_Keystroke(n){(n<0||n>=oldDateFormats.length)&&(n=0);AFDate_KeystrokeEx(oldDateFormats[n])}function AFTime_FormatEx(n){if(event.value!=""){var t=AFParseDateEx(event.value,n);if(!t){app.alert(util.printf(ERROR_PARSE_DATETIME,event.value));event.rc=!1;return}event.value=util.printd(n,t)}}function AFTime_KeystrokeEx(n){if(event.value!=""){var t=AFParseDateEx(event.value,n);if(!t){app.alert(util.printf(ERROR_PARSE_DATETIME,event.value));event.rc=!1;return}}}function AFTime_Format(n){(n<0||n>=timeFormats.length)&&(n=0);AFTime_FormatEx(timeFormats[n])}function AFTime_Keystroke(){if(event.value!=""){var n=AFParseDateEx(event.value,cFormat);if(!n){app.alert(util.printf(ERROR_PARSE_DATETIME,event.value));event.rc=!1;return}}}function AFSpecial_Format(n){if(!isNaN(n)){var t=parseInt(event.value);switch(n){case 0:format="99999";break;case 1:format="99999-9999";break;case 2:format=t>999999999?"(999) 999-9999":"999-9999";break;case 3:format="999-99-9999"}typeof format=="string"&&(event.value=util.printx(format,t))}}function AFSpecial_Keystroke(){console.println("AFSpecial_Keystroke not implemented")}function AFSpecial_KeystrokeEx(){console.println("AFSpecial_KeystrokeEx not implemented")}function AFSimple(n,t,i){switch(n){case"AVG":return(t+i)/2;case"SUM":return t+i;case"PRD":return t*i;case"MIN":return Math.min(t,i);case"MAX":return Math.max(t,i)}return t}function AFMakeNumber(n){if(typeof n=="number")return n;var t=0;return typeof n=="string"&&(t=parseFloat(n.replace(",","."))),isNaN(t)&&(t=0),t}function AFSimple_Calculate(n,t){for(var f,e,i=n=="PRD"?1:0,o=AFMakeArrayFromList(t),u=0,r=0;r<o.length;r++)(f=this.getField(o[r]),f!=null)&&(e=AFMakeNumber(f.value),i=r==0&&(n=="MIN"||n=="MAX")?e:AFSimple(n,i,e),u++);u>0&&n=="AVG"&&(i/=u);event.value=i}function AFRange_Validate(n,t,i,r){if(event.value!=""){var o=parseFloat(event.value.replace(",",".")),f=!n||o>=t,e=!i||o<=r,u="";f&&e||(f||e?f?e||(u=util.printf(ERROR_AFRANGE_LT,r)):u=util.printf(ERROR_AFRANGE_GT,t):u=util.printf(ERROR_AFRANGE_GT_AND_LT,t,r),event.rc=!1);u.length>0&&app.alert(u)}}function AFMergeChange(n){if(n.willCommit)return n.value;var i=n.value.substr(0,n.selStart),t="";return n.selEnd>=0&&n.selEnd<val.length&&(t=val.substr(n.selEnd)),i+change+t}function AFParseDateEx(n,t){var r=new Date,i;if(!n)return r;if(dd=1,HH=0,MM=0,SS=0,(dateFormats.findIndex(function(n){return n==t})!=-1||timeFormats.findIndex(function(n){return n==t})!=-1)&&(regex=/^(\d{1,4}|[a-zA-Z]+)(?:[-/:,. ])?(\d{1,4}|[a-zA-Z]+)?(?:[,-:/.])?(?: )?(\d{1,4})?[ ]?(\d{1,2})?[:]?(\d{1,2})?[:]?(\d{1,2})?[ ]?(am|pm)?$/),typeof regex!="undefined"){if(i=n.match(regex),!i)return null;switch(t){case dateFormats[0]:case dateFormats[1]:case dateFormats[2]:case dateFormats[3]:case dateFormats[4]:case dateFormats[18]:case dateFormats[19]:case dateFormats[20]:case dateFormats[21]:case dateFormats[22]:case dateFormats[23]:mm=i[1];dd=i[2];yy=i[3];HH=i[4];MM=i[5];tt=i[7];break;case dateFormats[5]:case dateFormats[6]:case dateFormats[14]:case dateFormats[15]:case dateFormats[16]:case dateFormats[17]:mm=i[1];yy=i[2];break;case dateFormats[7]:case dateFormats[8]:case dateFormats[9]:case dateFormats[10]:case dateFormats[11]:dd=i[1];mm=i[2];yy=i[3];break;case dateFormats[12]:case dateFormats[13]:yy=i[1];mm=i[2];dd=i[3];break;case timeFormats[0]:case timeFormats[1]:case timeFormats[2]:case timeFormats[3]:HH=i[1];MM=i[2];SS=i[3];tt=i[7]}}if(typeof mm!="undefined"){if(isNaN(mm)){if(mm=mm.substr(0,3).toLowerCase(),mm=months.findIndex(function(n){return mm==n.toLowerCase()}),mm<0)return null}else mm=parseInt(mm)-1;r.setMonth(mm)}return typeof dd!="undefined"&&(dd=parseInt(dd),isNaN(dd)||r.setDate(dd)),typeof yy!="undefined"&&(yy=parseInt(yy),!isNaN(yy)||(yy<50?yy+=2e3:yy<100&&(yy+=1900),r.setFullYear(yy))),typeof HH!="undefined"&&(HH=parseInt(HH),isNaN(HH)||(typeof tt=="string"&&HH>12&&tt.toLowerCase()==="pm"&&(HH-=12),r.setHours(HH))),typeof MM!="undefined"&&(MM=parseInt(MM),isNaN(MM)||r.setMinutes(MM)),typeof SS!="undefined"&&(SS=parseInt(SS),isNaN(SS)||r.setSeconds(SS)),r}function AFMakeArrayFromList(n){var t=typeof n;return t=="string"?n.split(","):Array.isArray(n)?n:[]}var DOUBLE_CORRECT=1e-15,ERROR_AFNUMBER_KEYSTROKE="The input value is invalid.",ERROR_AFRANGE_GT_AND_LT="Invalid value: must be greater than or equal to %s and less than or equal to %s.",ERROR_AFRANGE_GT="Invalid value: must be greater than or equal to %s.",ERROR_AFRANGE_LT="Invalid value: must be less than or equal to %s.",ERROR_PARSE_DATETIME="The input value can't be parsed as a valid date/time (%s).",months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],fullMonths=["January","February","March","April","May","Jun","Jul","August","September","October","November","December"],oldDateFormats=["m/d","m/d/yy","mm/dd/yy","mm/yy","d-mmm","d-mmm-yy","dd-mmm-yy","yy-mm-dd","mmm-yy","mmmm-yy","mmm d, yyyy","mmmm d, yyyy","m/d/yy h:MM tt","m/d/yy HH:MM"],dateFormats=["m/d","m/d/yy","m/d/yyyy","mm/dd/yy","mm/dd/yyyy","mm/yy","mm/yyyy","d-mmm","d-mmm-yy","d-mmm-yyyy","dd-mmm-yy","dd-mmm-yyyy","yy-mm-dd","yyyy-mm-dd","mmm-yy","mmm-yyyy","mmmm-yy","mmmm-yyyy","mmm d, yyyy","mmmm d, yyyy","m/d/yy h:MM tt","","m/d/yyyy h:MM tt","m/d/yy HH:MM","m/d/yyyy HH:MM"],timeFormats=["HH:MM","h:MM tt","HH:MM:ss","h:MM:ss tt"]
/*! PDFix license http://pdfix.net/terms. Copyright (c) 2016 Pdfix. All Rights Reserved. */
function acroform_init(){for(var t=document.getElementsByTagName("input"),n=0;n<t.length;n++)register_widget(t[n]);for(t=document.getElementsByTagName("select"),n=0;n<t.length;n++)register_widget(t[n]);for(t=document.getElementsByTagName("textarea"),n=0;n<t.length;n++)register_widget(t[n]);do_calculations()}function register_widget(n){var t=n.getAttribute("name"),i=n.getAttribute("data-field-id"),r=n.getAttribute("data-annot-id");t!=undefined&&i!=undefined&&r!=undefined&&(n.addEventListener("focus",field_event),n.addEventListener("change",field_event),n.addEventListener("click",field_event),field_add_annot(t,i,n))}function Field(n){var t={},i,f,s,e,h,r,u,o;if(t.subFields=null,i=null,f=document.getElementsByName(n),f.length>=1)i=f[0];else if(f.length!=1)for(s=!1,t.subFields=[],e=0;e<all_fields.length;e++)(h=all_fields[e],r=h.name,r==n&&(s=!0),r.indexOf(n)==0)&&(u=r.substr(n.length,r.length),u.indexOf(".")==0)&&(u=u.substr(1,u.length),o=new init_field(r),o!=null&&t.subFields.push(o));return Object.defineProperty(t,"value",{get:function(){if(typeof this._value_tmp=="string"&&this._value_tmp==""||this._value.toString().search(/[^0123456789.]/)!=-1)return this._value;var n=parseFloat(this._value);return isNaN(n)?this._value:n},set:function(n){var t,u,f,s,h,i,e,o,r;if((this._value=n,t=null,u=document.getElementsByName(this.name),u.length>=1&&(t=u[0]),t!=null)&&(f=t.getAttribute("type"),f!="radio"&&f!="checkbox"))for(s=this.getFormattedValue(),h=t.getAttribute("data-field-id"),this._value_tmp=1,i=0;i<all_fields.length;i++)if(e=all_fields[i],e.id===h){for(o=document.getElementsByName(e.name),r=0;r<o.length;r++)o[r].value=s;break}}}),Object.defineProperty(t,"valueAsString",{get:function(){return this._value.toString()}}),t.name=n,i!=null&&(t.maxLength=i.getAttribute("maxLength"),t.commitOnSelChange=i.getAttribute("commitOnSelChange")=="true",t._value=i.value,t.elem=i,t.k="K"+i.getAttribute("data-field-id")+"()",t.c="C"+i.getAttribute("data-field-id")+"()",t.f="F"+i.getAttribute("data-field-id")+"()"),t.borderStyle=border.s,t.clearItems=function(){for(var n=this.elem.options.length-1;n>=0;n--)this.elem.remove(n)},t.getArray=function(){if(this.subFields!=null)return this.subFields;var n=[];return n.push(this),n},t.setItems=function(n){var t,r;if(i!=null)for(this.clearItems(),t=0;t<n.length;t++)r=document.createElement("option"),n[t].constructor.name=="Array"?(r.text=n[t][0],r.setAttribute("value",n[t][1])):r.text=n[t],this.elem.add(r,t)},t.getFormattedValue=function(){create_event();event.type="Field";event.name="Format";event.target=this;event.source=this;event.maxLength=t.maxLength;event.willCommit=!1;event.value=this.value.toString();event.rc=!0;do_field_event();var n=event.rc?event.value:this.value;return destroy_event(),n.toString()},t}function init_field(n){for(var i,t=0;t<Fields.length;t++)if(Fields[t].name==n)return Fields[t];return(i=new Field(n),i==null)?null:(Fields.push(i),i)}function field_add_annot(n,t,i){for(var u,f,r=0;r<all_fields.length;r++)if(u=all_fields[r],u.id==t){i&&(f=i.getAttribute("data-annot-id"),i.value=this.getField(n).getFormattedValue(),u.annots.push(f));return}all_fields.push({name:n,id:t,annots:[f]});typeof window["C"+t]=="function"&&calc_fields.push(n)}function create_event(){return event={},event.rc=!0,events.push(event),event}function destroy_event(){event=null;events.pop();events.length>0&&(event=events[events.length-1])}function do_field_event(){if(current_events.find(function(n){if(n==event.target)return n})==undefined){current_events.push(event.target);try{event.name=="Keystroke"?eval(event.target.k):event.name=="Format"&&eval(event.target.f)}catch(n){}current_events.pop()}}function field_event(n){var t=init_field(n.target.name),i,r,u,f;return create_event(),event.type="Field",event.name="Keystroke",event.target=t,event.source=t,event.maxLength=t.maxLength,event.willCommit=!1,event.value=n.target.value.toString(),i=!0,n.type=="keypress"&&(i=!1,event.change="",r=0,n.keyCode!=undefined&&n.keyCode>=20?r=n.keyCode:n.charCode!=undefined&&n.charCode>=20&&(r=n.charCode),r!=0&&(event.change=String.fromCharCode(r)),event.selStart=n.target.selectionStart,event.selEnd=n.target.selectionEnd),n.type=="change"&&(i=!1,t.elem.tagName.toLowerCase()=="select"?(u=n.target.selectedIndex,console.log(n.target.options[u].getAttribute("value")),event.changeEx=n.target.options[u].getAttribute("value"),do_field_event(),event.rc?n.preventDefault():(event.target.value=n.target.value,do_calculations(t))):((n.target.type=="radio"||n.target.type=="checkbox")&&(i=!0),event.value=n.target.value),event.willCommit=!0),n.type=="click"&&(i=!1,n.target.type!="radio"&&n.target.type!="checkbox"&&(i=!0),event.value=n.target.value,n.target.type=="checkbox"&&n.target.checked==!1&&(event.value="Off"),event.willCommit=!0),n.type=="focus"&&(n.target.value=t.value,n.target.addEventListener("keystroke",field_event),n.target.addEventListener("blur",field_event)),n.type=="blur"&&(n.target.removeEventListener("keystroke",field_event),n.target.removeEventListener("blur",field_event),n.target.value=t.getFormattedValue()),i||(event.rc=!0,do_field_event(),event.rc==!1?event.willCommit?n.target.value=event.target.value:n.preventDefault():event.willCommit&&(event.target.value=event.value,do_calculations(t))),f=event.rc,destroy_event(),f}function do_calculate(n,t){if(document.calculate!=!1){var i=init_field(n);create_event();event.type="Field";event.name="Calculate";event.targetName=i.name;event.target=i;event.value=i.value;event.source=t;event.willCommit=!0;try{eval(i.c)}catch(r){console.log("do_calculate: "+r.message)}event.rc==!0&&(event.target.value=event.value);destroy_event()}}function do_calculations(n){for(var t=0;t<calc_fields.length;t++)do_calculate(calc_fields[t],n)}var border,color,Fields,app,util,all_fields,calc_fields;document.addEventListener("DOMContentLoaded",acroform_init);border={};border.s="solid";border.b="beveled";border.d="dashed";border.i="inset";border.u="underline";color={};color.transparent=["T"];color.black=["G",0];color.white=["G",1];color.red=["RGB",1,0,0];color.green=["RGB",0,1,0];color.blue=["RGB",0,0,1];color.cyan=["CMYK",1,0,0,0];color.magenta=["CMYK",0,1,0,0];color.yellow=["CMYK",0,0,1,0];color.dkGray=["G",.25];color.gray=["G",.5];color.ltGray=["G",.75];color.convert=function(){};color.equal=function(){};Fields=[];app={};app.viewerVersion=1;app.viewerType="PdfixHTML5";app.response=function(){return null};app.beep=function(){};app.alert=function(n){window.alert(n)};this.external=!1;this.calculate=!1;this.calculateNow=function(){var n=this.calculate;this.calculate=!0;do_calculations();this.calculate=n};this.getField=function(n){return init_field(n)};this.resetForm=function(){for(var i,t,n=0;n<all_fields.length;n++)i=all_fields[n],t=document.getElementById(i.name),t.value=t.getAttribute("defaultValue");calculateNow()};this.submitForm=function(n,t,i){for(var e,r,f={},u=0;u<all_fields.length;u++)(e=all_fields[u],r=document.getElementById(e.name),i==null||i!=!1||r.value!="")&&(f[r.name]=r.value);typeof SubmitForm!="undefined"?SubmitForm(f):console.log("Method SubmitForm is not defined. Once it's deined submitting form data can be customized.")};console.println=function(n){console.log(n)};util={};util.printf=function(){for(var e=0,i=arguments[e++],t,f,v,y,o;e<arguments.length;){if(t=arguments[e++],f=i.search(/%(,[0-3])?[+#0 ]?([.]\d)?[dfsx]/),f==-1)break;var c=1,l="",w=0,a=0,u="",r=f+1,n=i.charAt(r++);for(n==","&&(c=parseInt(i.charAt(r++)),n=i.charAt(r++));n=="+"||n=="#"||n=="0"||n==" ";)if(l+=n,n=i.charAt(r++),l.length==4)break;if(isNaN(n)||(w=parseInt(n),n=i.charAt(r++)),n=="."&&(a=parseInt(i.charAt(r++)),n=i.charAt(r++)),u=n,v=i.substr(0,f),y=i.substr(n,i.length-n),u=="s")t=t.toString();else if(u=="x")t=t.toString(16);else if(u=="d"||u=="f"){t=parseFloat(t);isNaN(t)&&(t=0);o=Math.pow(10,a);t=parseFloat(Math.round(t*o))/o;var s=t.toString().split("."),h="",p=".";switch(c){case 0:h=",";break;case 2:h=".";p=","}s[0]=s[0].replace(/\B(?=(\d{3})+(?!\d))/g,h);t=s.join(p)}i=v+t+y}return i};util.printd=function(){var o=0,n=arguments[o++],i=arguments[o++];typeof n!="string"&&(n="HH:MM:ss");var s=i.getFullYear(),h=parseInt(s.toString().substr(2,2)),r=i.getMonth()+1,c=fullMonths[r-1],l=months[r-1],u=i.getDate(),t=i.getHours(),f=i.getMinutes(),e=i.getSeconds(),a=t>=12?"pm":"am";return n.search("tt")!=-1&&(n=n.replace("tt",a),t>12&&(t-=12)),n=n.replace("yyyy",s),n=n.replace("yy",h),n=n.replace("mmmm",c),n=n.replace("mmm",l),n=n.replace("mm",r<10?"0"+r:r),n=n.replace("m",r),n=n.replace("dd",u<10?"0"+u:u),n=n.replace("d",u),n=n.replace("HH",t<10?"0"+t:t),n=n.replace("H",t),n=n.replace("MM",f<10?"0"+f:f),n=n.replace("M",f),n=n.replace("ss",e<10?"0"+e:e),n.replace("s",e)};util.printx=function(n,t){var r="",i=0,o="",u,f,e;for(t==null||isNaN(t)||(o+=t),t=o,u=t.length,f=0;f<n.length&&i<u;f++){e=n[f];switch(e){case"?":r+=t[i];i++;break;case"X":while(i<u){if(t[i]>="0"&&t[i]<="9"||t[i]>="a"&&t[i]<="z"||t[i]>="A"&&t[i]<="Z"){r+=t[i];i++;break}i++}break;case"A":while(i<u){if(t[i]>="a"&&t[i]<="z"||t[i]>="A"&&t[i]<="Z"){r+=t[i];i++;break}i++}break;case"9":while(i<u){if(t[i]>="0"&&t[i]<="9"){r+=t[i];i++;break}i++}break;case"*":r.append(t,i,u-i);i=u-1;break;case"\\":break;case">":t=t.toUpperCase();break;case"<":t=t.toLowerCase();break;case"=":break;default:r+=e}}return r};all_fields=[];calc_fields=[];var events=[],event=null,current_events=[]