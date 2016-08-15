// Garden Gnome Software - Skin
// Pano2VR 5.0.2/15080
// Filename: baghfeyz1.ggsk
// Generated يكشنبه اوت 7 07:23:28 2016

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-97;
		this._loading.ggTop=36;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -97px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle ';
		this._loadingbrd.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loadingbrd.style[domTransform + 'Origin']='50% 50%';
		me._loadingbrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbrd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbrd.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggLeft=-112;
		this._userdata.ggTop=-14;
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container ';
		this._userdata.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -112px;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		this._userdata.setAttribute('style',hs);
		this._userdata.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		me._userdata.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdata.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle ';
		this._userdatabg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdatabg.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabg.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId="userdatabrd";
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		this._userdatabrd.className='ggskin ggskin_rectangle ';
		this._userdatabrd.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 138px;';
		hs+='left : 4px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 233px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdatabrd.style[domTransform + 'Origin']='50% 50%';
		me._userdatabrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabrd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabrd.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text ';
		this._title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._title.setAttribute('style',hs);
		this._title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._title.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text ';
		this._description.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._description.setAttribute('style',hs);
		this._description.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._description.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._description.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text ';
		this._author.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._author.setAttribute('style',hs);
		this._author.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._author.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._author.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text ';
		this._datetime.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._datetime.setAttribute('style',hs);
		this._datetime.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._datetime.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._datetime.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text ';
		this._copyright.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._copyright.setAttribute('style',hs);
		this._copyright.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._copyright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._copyright.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._hide_template0=document.createElement('div');
		this._hide_template0.ggId="hide_template";
		this._hide_template0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template0.ggVisible=false;
		this._hide_template0.className='ggskin ggskin_container ';
		this._hide_template0.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 483px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		this._hide_template0.setAttribute('style',hs);
		this._hide_template0.style[domTransform + 'Origin']='50% 50%';
		me._hide_template0.ggIsActive=function() {
			return false;
		}
		me._hide_template0.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_template0.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._hide_template0);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container ';
		this._hide_template.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 492px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		this._hide_template.setAttribute('style',hs);
		this._hide_template.style[domTransform + 'Origin']='50% 50%';
		me._hide_template.ggIsActive=function() {
			return false;
		}
		me._hide_template.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_template.ggUpdatePosition=function () {
		}
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark ';
		this._markertemplate.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 61px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._markertemplate.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._markertemplate.onmouseover=function () {
			me._marker_title16.style[domTransition]='none';
			me._marker_title16.style.visibility=(Number(me._marker_title16.style.opacity)>0||!me._marker_title16.style.opacity)?'inherit':'hidden';
			me._marker_title16.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title16.style[domTransition]='none';
			me._marker_title16.style.visibility='hidden';
			me._marker_title16.ggVisible=false;
		}
		this._markertemplate.ggUpdateConditionNodeChange=function () {
				me._markertemplate__normal.ggNodeChangeMain();
				me._markertemplate__active.ggNodeChangeMain();
		}
		this._markertemplate.ggUpdatePosition=function () {
		}
		this._markertemplate.ggNodeChange=function () {
			me._markertemplate.ggUpdateConditionNodeChange();
		}
		this._marker_title16=document.createElement('div');
		this._marker_title16__text=document.createElement('div');
		this._marker_title16.className='ggskin ggskin_textdiv';
		this._marker_title16.ggTextDiv=this._marker_title16__text;
		this._marker_title16.ggId="marker_title";
		this._marker_title16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title16.ggVisible=false;
		this._marker_title16.className='ggskin ggskin_text ';
		this._marker_title16.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title16.setAttribute('style',hs);
		this._marker_title16.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title16__text.setAttribute('style',hs);
		this._marker_title16.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title16.ggUpdateText();
		this._marker_title16.appendChild(this._marker_title16__text);
		me._marker_title16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title16.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title16.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._markertemplate.appendChild(this._marker_title16);
		this._hide_template.appendChild(this._markertemplate);
		this.divSkin.appendChild(this._hide_template);
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggLeft=-577;
		this._toolbar.ggTop=-269;
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container ';
		this._toolbar.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -577px;';
		hs+='position : absolute;';
		hs+='top : -269px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		this._toolbar.setAttribute('style',hs);
		this._toolbar.style[domTransform + 'Origin']='50% 50%';
		me._toolbar.ggIsActive=function() {
			return false;
		}
		me._toolbar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._toolbar.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._toolbar);
		this._right=document.createElement('div');
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right__imgo=document.createElement('img');
		this._right__imgo.className='ggskin ggskin_svg';
		this._right__imgo.setAttribute('src',basePath + 'images/right__o.svg');
		this._right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._right__imgo['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__imgo);
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg ';
		this._right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 53px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._right.setAttribute('style',hs);
		this._right.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			return false;
		}
		me._right.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._right.onmouseover=function () {
			me._right__img.style.visibility='hidden';
			me._right__imgo.style.visibility='inherit';
		}
		this._right.onmouseout=function () {
			me._right__img.style.visibility='inherit';
			me._right__imgo.style.visibility='hidden';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._right);
		this._up=document.createElement('div');
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up__imgo=document.createElement('img');
		this._up__imgo.className='ggskin ggskin_svg';
		this._up__imgo.setAttribute('src',basePath + 'images/up__o.svg');
		this._up__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._up__imgo['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__imgo);
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg ';
		this._up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._up.setAttribute('style',hs);
		this._up.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			return false;
		}
		me._up.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._up.onmouseover=function () {
			me._up__img.style.visibility='hidden';
			me._up__imgo.style.visibility='inherit';
		}
		this._up.onmouseout=function () {
			me._up__img.style.visibility='inherit';
			me._up__imgo.style.visibility='hidden';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._up);
		this._down=document.createElement('div');
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down__imgo=document.createElement('img');
		this._down__imgo.className='ggskin ggskin_svg';
		this._down__imgo.setAttribute('src',basePath + 'images/down__o.svg');
		this._down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._down__imgo['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__imgo);
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg ';
		this._down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._down.setAttribute('style',hs);
		this._down.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			return false;
		}
		me._down.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._down.onmouseover=function () {
			me._down__img.style.visibility='hidden';
			me._down__imgo.style.visibility='inherit';
		}
		this._down.onmouseout=function () {
			me._down__img.style.visibility='inherit';
			me._down__imgo.style.visibility='hidden';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._down);
		this._left=document.createElement('div');
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left__imgo=document.createElement('img');
		this._left__imgo.className='ggskin ggskin_svg';
		this._left__imgo.setAttribute('src',basePath + 'images/left__o.svg');
		this._left__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._left__imgo['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__imgo);
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg ';
		this._left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._left.setAttribute('style',hs);
		this._left.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			return false;
		}
		me._left.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._left.onmouseover=function () {
			me._left__img.style.visibility='hidden';
			me._left__imgo.style.visibility='inherit';
		}
		this._left.onmouseout=function () {
			me._left__img.style.visibility='inherit';
			me._left__imgo.style.visibility='hidden';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._left);
		this._zoom_out=document.createElement('div');
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_svg';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.svg');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_out__img['ondragstart']=function() { return false; };
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out__imgo=document.createElement('img');
		this._zoom_out__imgo.className='ggskin ggskin_svg';
		this._zoom_out__imgo.setAttribute('src',basePath + 'images/zoom_out__o.svg');
		this._zoom_out__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoom_out__imgo['ondragstart']=function() { return false; };
		this._zoom_out.appendChild(this._zoom_out__imgo);
		this._zoom_out.ggId="zoom out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_svg ';
		this._zoom_out.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 98px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			return false;
		}
		me._zoom_out.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._zoom_out.onmouseover=function () {
			me._zoom_out__img.style.visibility='hidden';
			me._zoom_out__imgo.style.visibility='inherit';
		}
		this._zoom_out.onmouseout=function () {
			me._zoom_out__img.style.visibility='inherit';
			me._zoom_out__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._zoom_out);
		this._zoom_in=document.createElement('div');
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_svg';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.svg');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_in__img['ondragstart']=function() { return false; };
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in__imgo=document.createElement('img');
		this._zoom_in__imgo.className='ggskin ggskin_svg';
		this._zoom_in__imgo.setAttribute('src',basePath + 'images/zoom_in__o.svg');
		this._zoom_in__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoom_in__imgo['ondragstart']=function() { return false; };
		this._zoom_in.appendChild(this._zoom_in__imgo);
		this._zoom_in.ggId="zoom in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_svg ';
		this._zoom_in.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			return false;
		}
		me._zoom_in.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._zoom_in.onmouseover=function () {
			me._zoom_in__img.style.visibility='hidden';
			me._zoom_in__imgo.style.visibility='inherit';
		}
		this._zoom_in.onmouseout=function () {
			me._zoom_in__img.style.visibility='inherit';
			me._zoom_in__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function () {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._zoom_in);
		this._image_43=document.createElement('div');
		this._image_43__img=document.createElement('img');
		this._image_43__img.className='ggskin ggskin_image';
		this._image_43__img.setAttribute('src',basePath + 'images/image_43.png');
		this._image_43__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_43__img.className='ggskin ggskin_image';
		this._image_43__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_43__img);
		this._image_43.appendChild(this._image_43__img);
		this._image_43.ggId="Image 43";
		this._image_43.ggLeft=-81;
		this._image_43.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_43.ggVisible=true;
		this._image_43.className='ggskin ggskin_image ';
		this._image_43.ggType='image';
		hs ='';
		hs+='height : 51px;';
		hs+='left : -81px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 102px;';
		this._image_43.setAttribute('style',hs);
		this._image_43.style[domTransform + 'Origin']='50% 50%';
		me._image_43.ggIsActive=function() {
			return false;
		}
		me._image_43.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_43.onclick=function () {
			me._map.ggVisible = !me._map.ggVisible;
			me._map.style[domTransition]='none';
			me._map.style.visibility=((me._map.ggVisible)&&(Number(me._map.style.opacity)>0||!me._map.style.opacity))?'inherit':'hidden';
			me._image_41.ggVisible = !me._image_41.ggVisible;
			me._image_41.style[domTransition]='none';
			me._image_41.style.visibility=((me._image_41.ggVisible)&&(Number(me._image_41.style.opacity)>0||!me._image_41.style.opacity))?'inherit':'hidden';
		}
		this._image_43.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_43);
		this._image_42=document.createElement('div');
		this._image_42__img=document.createElement('img');
		this._image_42__img.className='ggskin ggskin_image';
		this._image_42__img.setAttribute('src',basePath + 'images/image_42.png');
		this._image_42__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_42__img.className='ggskin ggskin_image';
		this._image_42__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_42__img);
		this._image_42.appendChild(this._image_42__img);
		this._image_42.ggId="Image 42";
		this._image_42.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_42.ggVisible=false;
		this._image_42.className='ggskin ggskin_image ';
		this._image_42.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		this._image_42.setAttribute('style',hs);
		this._image_42.style[domTransform + 'Origin']='50% 50%';
		me._image_42.ggIsActive=function() {
			return false;
		}
		me._image_42.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_42.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._image_42);
		this._image_53=document.createElement('div');
		this._image_53__img=document.createElement('img');
		this._image_53__img.className='ggskin ggskin_image';
		this._image_53__img.setAttribute('src',basePath + 'images/image_53.png');
		this._image_53__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_53__img.className='ggskin ggskin_image';
		this._image_53__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_53__img);
		this._image_53.appendChild(this._image_53__img);
		this._image_53.ggId="Image 53";
		this._image_53.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_53.ggVisible=false;
		this._image_53.className='ggskin ggskin_image ';
		this._image_53.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 143px;';
		hs+='position : absolute;';
		hs+='top : 181px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		this._image_53.setAttribute('style',hs);
		this._image_53.style[domTransform + 'Origin']='50% 50%';
		me._image_53.ggIsActive=function() {
			return false;
		}
		me._image_53.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_53.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._image_53);
		this._text_=document.createElement('div');
		this._text___text=document.createElement('div');
		this._text_.className='ggskin ggskin_textdiv';
		this._text_.ggTextDiv=this._text___text;
		this._text_.ggId="Text \u06f3\u06f5";
		this._text_.ggLeft=-46;
		this._text_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_.ggVisible=true;
		this._text_.className='ggskin ggskin_text ';
		this._text_.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -46px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		this._text_.setAttribute('style',hs);
		this._text_.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 35px;';
		hs+='height: 17px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text___text.setAttribute('style',hs);
		this._text___text.innerHTML="\u0646\u0642\u0634\u0647";
		this._text_.appendChild(this._text___text);
		me._text_.ggIsActive=function() {
			return false;
		}
		me._text_.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._text_.onclick=function () {
			me._map.ggVisible = !me._map.ggVisible;
			me._map.style[domTransition]='none';
			me._map.style.visibility=((me._map.ggVisible)&&(Number(me._map.style.opacity)>0||!me._map.style.opacity))?'inherit':'hidden';
			me._image_41.ggVisible = !me._image_41.ggVisible;
			me._image_41.style[domTransition]='none';
			me._image_41.style.visibility=((me._image_41.ggVisible)&&(Number(me._image_41.style.opacity)>0||!me._image_41.style.opacity))?'inherit':'hidden';
		}
		this._text_.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._text_);
		this._map=document.createElement('div');
		this._map.ggId="map";
		this._map.ggLeft=-548;
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=false;
		this._map.className='ggskin ggskin_rectangle ';
		this._map.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 3px solid #ffffff;';
		hs+='height : 468px;';
		hs+='left : -549px;';
		hs+='position : absolute;';
		hs+='top : 66px;';
		hs+='visibility : hidden;';
		hs+='width : 539px;';
		this._map.setAttribute('style',hs);
		this._map.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		me._map.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._map_cover=document.createElement('div');
		this._map_cover.ggId="map cover";
		this._map_cover.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_cover.ggVisible=false;
		this._map_cover.className='ggskin ggskin_rectangle ';
		this._map_cover.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(0,0,0,0.0196078);';
		hs+='border : 3px solid #ffffff;';
		hs+='height : 471px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 695px;';
		this._map_cover.setAttribute('style',hs);
		this._map_cover.style[domTransform + 'Origin']='50% 50%';
		me._map_cover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_cover.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_cover.ggUpdatePosition=function () {
		}
		this._map.appendChild(this._map_cover);
		this.divSkin.appendChild(this._map);
		this._image_41=document.createElement('div');
		this._image_41__img=document.createElement('img');
		this._image_41__img.className='ggskin ggskin_image';
		this._image_41__img.setAttribute('src',basePath + 'images/image_41.png');
		this._image_41__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_41__img.className='ggskin ggskin_image';
		this._image_41__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_41__img);
		this._image_41.appendChild(this._image_41__img);
		this._image_41.ggId="Image 41";
		this._image_41.ggLeft=-529;
		this._image_41.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_41.ggVisible=false;
		this._image_41.className='ggskin ggskin_image ';
		this._image_41.ggType='image';
		hs ='';
		hs+='height : 443px;';
		hs+='left : -529px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : hidden;';
		hs+='width : 511px;';
		this._image_41.setAttribute('style',hs);
		this._image_41.style[domTransform + 'Origin']='50% 50%';
		me._image_41.ggIsActive=function() {
			return false;
		}
		me._image_41.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_41.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._marker_node2=document.createElement('div');
		this._marker_node2.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._marker_node2);
		this._marker_node2.ggId="marker_node2";
		this._marker_node2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node2.ggVisible=true;
		this._marker_node2.className='ggskin ggskin_mark ';
		this._marker_node2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 368px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node2.setAttribute('style',hs);
		this._marker_node2.style[domTransform + 'Origin']='50% 50%';
		me._marker_node2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node2.onclick=function () {
			me.player.openNext('{node2}');
		}
		this._marker_node2.onmouseover=function () {
			me._marker_title15.style[domTransition]='none';
			me._marker_title15.style.visibility=(Number(me._marker_title15.style.opacity)>0||!me._marker_title15.style.opacity)?'inherit':'hidden';
			me._marker_title15.ggVisible=true;
		}
		this._marker_node2.onmouseout=function () {
			me._marker_title15.style[domTransition]='none';
			me._marker_title15.style.visibility='hidden';
			me._marker_title15.ggVisible=false;
		}
		this._marker_node2.ggUpdateConditionNodeChange=function () {
				me._marker_node2__normal.ggNodeChangeMain();
				me._marker_node2__active.ggNodeChangeMain();
		}
		this._marker_node2.ggUpdatePosition=function () {
		}
		this._marker_node2.ggNodeChange=function () {
			me._marker_node2.ggUpdateConditionNodeChange();
		}
		this._marker_title15=document.createElement('div');
		this._marker_title15__text=document.createElement('div');
		this._marker_title15.className='ggskin ggskin_textdiv';
		this._marker_title15.ggTextDiv=this._marker_title15__text;
		this._marker_title15.ggId="marker_title";
		this._marker_title15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title15.ggVisible=false;
		this._marker_title15.className='ggskin ggskin_text ';
		this._marker_title15.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title15.setAttribute('style',hs);
		this._marker_title15.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title15__text.setAttribute('style',hs);
		this._marker_title15__text.innerHTML="\u0633\u0627\u0644\u0646";
		this._marker_title15.appendChild(this._marker_title15__text);
		me._marker_title15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title15.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title15.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node2.appendChild(this._marker_title15);
		this._image_41.appendChild(this._marker_node2);
		this._marker_node4=document.createElement('div');
		this._marker_node4.ggMarkerNodeId='{node4}';
		nodeMarker.push(this._marker_node4);
		this._marker_node4.ggId="marker_node4";
		this._marker_node4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node4.ggVisible=true;
		this._marker_node4.className='ggskin ggskin_mark ';
		this._marker_node4.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 202px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node4.setAttribute('style',hs);
		this._marker_node4.style[domTransform + 'Origin']='50% 50%';
		me._marker_node4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node4.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node4.onclick=function () {
			me.player.openNext('{node4}');
		}
		this._marker_node4.onmouseover=function () {
			me._marker_title14.style[domTransition]='none';
			me._marker_title14.style.visibility=(Number(me._marker_title14.style.opacity)>0||!me._marker_title14.style.opacity)?'inherit':'hidden';
			me._marker_title14.ggVisible=true;
		}
		this._marker_node4.onmouseout=function () {
			me._marker_title14.style[domTransition]='none';
			me._marker_title14.style.visibility='hidden';
			me._marker_title14.ggVisible=false;
		}
		this._marker_node4.ggUpdateConditionNodeChange=function () {
				me._marker_node4__normal.ggNodeChangeMain();
				me._marker_node4__active.ggNodeChangeMain();
		}
		this._marker_node4.ggUpdatePosition=function () {
		}
		this._marker_node4.ggNodeChange=function () {
			me._marker_node4.ggUpdateConditionNodeChange();
		}
		this._marker_title14=document.createElement('div');
		this._marker_title14__text=document.createElement('div');
		this._marker_title14.className='ggskin ggskin_textdiv';
		this._marker_title14.ggTextDiv=this._marker_title14__text;
		this._marker_title14.ggId="marker_title";
		this._marker_title14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title14.ggVisible=false;
		this._marker_title14.className='ggskin ggskin_text ';
		this._marker_title14.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -48px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title14.setAttribute('style',hs);
		this._marker_title14.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title14__text.setAttribute('style',hs);
		this._marker_title14__text.innerHTML="\u0622\u0631\u0627\u0645\u0633\u062a\u0627\u0646";
		this._marker_title14.appendChild(this._marker_title14__text);
		me._marker_title14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title14.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node4.appendChild(this._marker_title14);
		this._image_41.appendChild(this._marker_node4);
		this._marker_node7=document.createElement('div');
		this._marker_node7.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._marker_node7);
		this._marker_node7.ggId="marker_node7";
		this._marker_node7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node7.ggVisible=true;
		this._marker_node7.className='ggskin ggskin_mark ';
		this._marker_node7.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 187px;';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node7.setAttribute('style',hs);
		this._marker_node7.style[domTransform + 'Origin']='50% 50%';
		me._marker_node7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node7.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node7.onclick=function () {
			me.player.openNext('{node7}');
		}
		this._marker_node7.onmouseover=function () {
			me._marker_title13.style[domTransition]='none';
			me._marker_title13.style.visibility=(Number(me._marker_title13.style.opacity)>0||!me._marker_title13.style.opacity)?'inherit':'hidden';
			me._marker_title13.ggVisible=true;
		}
		this._marker_node7.onmouseout=function () {
			me._marker_title13.style[domTransition]='none';
			me._marker_title13.style.visibility='hidden';
			me._marker_title13.ggVisible=false;
		}
		this._marker_node7.ggUpdateConditionNodeChange=function () {
				me._marker_node7__normal.ggNodeChangeMain();
				me._marker_node7__active.ggNodeChangeMain();
		}
		this._marker_node7.ggUpdatePosition=function () {
		}
		this._marker_node7.ggNodeChange=function () {
			me._marker_node7.ggUpdateConditionNodeChange();
		}
		this._marker_title13=document.createElement('div');
		this._marker_title13__text=document.createElement('div');
		this._marker_title13.className='ggskin ggskin_textdiv';
		this._marker_title13.ggTextDiv=this._marker_title13__text;
		this._marker_title13.ggId="marker_title";
		this._marker_title13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title13.ggVisible=false;
		this._marker_title13.className='ggskin ggskin_text ';
		this._marker_title13.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title13.setAttribute('style',hs);
		this._marker_title13.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title13__text.setAttribute('style',hs);
		this._marker_title13__text.innerHTML="\u0645\u0632\u0627\u0631 \u0634\u0647\u062f\u0627";
		this._marker_title13.appendChild(this._marker_title13__text);
		me._marker_title13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title13.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node7.appendChild(this._marker_title13);
		this._image_41.appendChild(this._marker_node7);
		this._marker_node8=document.createElement('div');
		this._marker_node8.ggMarkerNodeId='{node8}';
		nodeMarker.push(this._marker_node8);
		this._marker_node8.ggId="marker_node8";
		this._marker_node8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node8.ggVisible=true;
		this._marker_node8.className='ggskin ggskin_mark ';
		this._marker_node8.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node8.setAttribute('style',hs);
		this._marker_node8.style[domTransform + 'Origin']='50% 50%';
		me._marker_node8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node8.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node8.onclick=function () {
			me.player.openNext('{node8}');
		}
		this._marker_node8.onmouseover=function () {
			me._marker_title12.style[domTransition]='none';
			me._marker_title12.style.visibility=(Number(me._marker_title12.style.opacity)>0||!me._marker_title12.style.opacity)?'inherit':'hidden';
			me._marker_title12.ggVisible=true;
		}
		this._marker_node8.onmouseout=function () {
			me._marker_title12.style[domTransition]='none';
			me._marker_title12.style.visibility='hidden';
			me._marker_title12.ggVisible=false;
		}
		this._marker_node8.ggUpdateConditionNodeChange=function () {
				me._marker_node8__normal.ggNodeChangeMain();
				me._marker_node8__active.ggNodeChangeMain();
		}
		this._marker_node8.ggUpdatePosition=function () {
		}
		this._marker_node8.ggNodeChange=function () {
			me._marker_node8.ggUpdateConditionNodeChange();
		}
		this._marker_title12=document.createElement('div');
		this._marker_title12__text=document.createElement('div');
		this._marker_title12.className='ggskin ggskin_textdiv';
		this._marker_title12.ggTextDiv=this._marker_title12__text;
		this._marker_title12.ggId="marker_title";
		this._marker_title12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title12.ggVisible=false;
		this._marker_title12.className='ggskin ggskin_text ';
		this._marker_title12.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title12.setAttribute('style',hs);
		this._marker_title12.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title12__text.setAttribute('style',hs);
		this._marker_title12__text.innerHTML="\u0622\u0631\u0627\u0645\u0633\u062a\u0627\u0646";
		this._marker_title12.appendChild(this._marker_title12__text);
		me._marker_title12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title12.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node8.appendChild(this._marker_title12);
		this._image_41.appendChild(this._marker_node8);
		this._marker_node9=document.createElement('div');
		this._marker_node9.ggMarkerNodeId='{node9}';
		nodeMarker.push(this._marker_node9);
		this._marker_node9.ggId="marker_node9";
		this._marker_node9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node9.ggVisible=true;
		this._marker_node9.className='ggskin ggskin_mark ';
		this._marker_node9.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 144px;';
		hs+='position : absolute;';
		hs+='top : 179px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node9.setAttribute('style',hs);
		this._marker_node9.style[domTransform + 'Origin']='50% 50%';
		me._marker_node9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node9.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node9.onclick=function () {
			me.player.openNext('{node9}');
		}
		this._marker_node9.onmouseover=function () {
			me._marker_title11.style[domTransition]='none';
			me._marker_title11.style.visibility=(Number(me._marker_title11.style.opacity)>0||!me._marker_title11.style.opacity)?'inherit':'hidden';
			me._marker_title11.ggVisible=true;
		}
		this._marker_node9.onmouseout=function () {
			me._marker_title11.style[domTransition]='none';
			me._marker_title11.style.visibility='hidden';
			me._marker_title11.ggVisible=false;
		}
		this._marker_node9.ggUpdateConditionNodeChange=function () {
				me._marker_node9__normal.ggNodeChangeMain();
				me._marker_node9__active.ggNodeChangeMain();
		}
		this._marker_node9.ggUpdatePosition=function () {
		}
		this._marker_node9.ggNodeChange=function () {
			me._marker_node9.ggUpdateConditionNodeChange();
		}
		this._marker_title11=document.createElement('div');
		this._marker_title11__text=document.createElement('div');
		this._marker_title11.className='ggskin ggskin_textdiv';
		this._marker_title11.ggTextDiv=this._marker_title11__text;
		this._marker_title11.ggId="marker_title";
		this._marker_title11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title11.ggVisible=false;
		this._marker_title11.className='ggskin ggskin_text ';
		this._marker_title11.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title11.setAttribute('style',hs);
		this._marker_title11.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title11__text.setAttribute('style',hs);
		this._marker_title11__text.innerHTML="\u0622\u0631\u0627\u0645\u0633\u062a\u0627\u0646 ";
		this._marker_title11.appendChild(this._marker_title11__text);
		me._marker_title11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title11.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node9.appendChild(this._marker_title11);
		this._image_41.appendChild(this._marker_node9);
		this._marker_node12=document.createElement('div');
		this._marker_node12.ggMarkerNodeId='{node12}';
		nodeMarker.push(this._marker_node12);
		this._marker_node12.ggId="marker_node12";
		this._marker_node12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node12.ggVisible=true;
		this._marker_node12.className='ggskin ggskin_mark ';
		this._marker_node12.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 233px;';
		hs+='position : absolute;';
		hs+='top : 278px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node12.setAttribute('style',hs);
		this._marker_node12.style[domTransform + 'Origin']='50% 50%';
		me._marker_node12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node12.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node12.onclick=function () {
			me.player.openNext('{node12}');
		}
		this._marker_node12.onmouseover=function () {
			me._marker_title10.style[domTransition]='none';
			me._marker_title10.style.visibility=(Number(me._marker_title10.style.opacity)>0||!me._marker_title10.style.opacity)?'inherit':'hidden';
			me._marker_title10.ggVisible=true;
		}
		this._marker_node12.onmouseout=function () {
			me._marker_title10.style[domTransition]='none';
			me._marker_title10.style.visibility='hidden';
			me._marker_title10.ggVisible=false;
		}
		this._marker_node12.ggUpdateConditionNodeChange=function () {
				me._marker_node12__normal.ggNodeChangeMain();
				me._marker_node12__active.ggNodeChangeMain();
		}
		this._marker_node12.ggUpdatePosition=function () {
		}
		this._marker_node12.ggNodeChange=function () {
			me._marker_node12.ggUpdateConditionNodeChange();
		}
		this._marker_title10=document.createElement('div');
		this._marker_title10__text=document.createElement('div');
		this._marker_title10.className='ggskin ggskin_textdiv';
		this._marker_title10.ggTextDiv=this._marker_title10__text;
		this._marker_title10.ggId="marker_title";
		this._marker_title10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title10.ggVisible=false;
		this._marker_title10.className='ggskin ggskin_text ';
		this._marker_title10.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title10.setAttribute('style',hs);
		this._marker_title10.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title10__text.setAttribute('style',hs);
		this._marker_title10__text.innerHTML="\u062d\u0648\u0636\u0686\u0647";
		this._marker_title10.appendChild(this._marker_title10__text);
		me._marker_title10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title10.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node12.appendChild(this._marker_title10);
		this._image_41.appendChild(this._marker_node12);
		this._marker_node15=document.createElement('div');
		this._marker_node15.ggMarkerNodeId='{node15}';
		nodeMarker.push(this._marker_node15);
		this._marker_node15.ggId="marker_node15";
		this._marker_node15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node15.ggVisible=true;
		this._marker_node15.className='ggskin ggskin_mark ';
		this._marker_node15.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : 295px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node15.setAttribute('style',hs);
		this._marker_node15.style[domTransform + 'Origin']='50% 50%';
		me._marker_node15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node15.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node15.onclick=function () {
			me.player.openNext('{node15}');
		}
		this._marker_node15.onmouseover=function () {
			me._marker_title9.style[domTransition]='none';
			me._marker_title9.style.visibility=(Number(me._marker_title9.style.opacity)>0||!me._marker_title9.style.opacity)?'inherit':'hidden';
			me._marker_title9.ggVisible=true;
		}
		this._marker_node15.onmouseout=function () {
			me._marker_title9.style[domTransition]='none';
			me._marker_title9.style.visibility='hidden';
			me._marker_title9.ggVisible=false;
		}
		this._marker_node15.ggUpdateConditionNodeChange=function () {
				me._marker_node15__normal.ggNodeChangeMain();
				me._marker_node15__active.ggNodeChangeMain();
		}
		this._marker_node15.ggUpdatePosition=function () {
		}
		this._marker_node15.ggNodeChange=function () {
			me._marker_node15.ggUpdateConditionNodeChange();
		}
		this._marker_title9=document.createElement('div');
		this._marker_title9__text=document.createElement('div');
		this._marker_title9.className='ggskin ggskin_textdiv';
		this._marker_title9.ggTextDiv=this._marker_title9__text;
		this._marker_title9.ggId="marker_title";
		this._marker_title9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title9.ggVisible=false;
		this._marker_title9.className='ggskin ggskin_text ';
		this._marker_title9.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title9.setAttribute('style',hs);
		this._marker_title9.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title9__text.setAttribute('style',hs);
		this._marker_title9__text.innerHTML="\u0641\u0636\u0627\u06cc \u0633\u0628\u0632";
		this._marker_title9.appendChild(this._marker_title9__text);
		me._marker_title9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title9.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node15.appendChild(this._marker_title9);
		this._image_41.appendChild(this._marker_node15);
		this._marker_node18=document.createElement('div');
		this._marker_node18.ggMarkerNodeId='{node18}';
		nodeMarker.push(this._marker_node18);
		this._marker_node18.ggId="marker_node18";
		this._marker_node18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node18.ggVisible=true;
		this._marker_node18.className='ggskin ggskin_mark ';
		this._marker_node18.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 379px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node18.setAttribute('style',hs);
		this._marker_node18.style[domTransform + 'Origin']='50% 50%';
		me._marker_node18.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node18.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node18.onclick=function () {
			me.player.openNext('{node18}');
		}
		this._marker_node18.onmouseover=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility=(Number(me._marker_title8.style.opacity)>0||!me._marker_title8.style.opacity)?'inherit':'hidden';
			me._marker_title8.ggVisible=true;
		}
		this._marker_node18.onmouseout=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility='hidden';
			me._marker_title8.ggVisible=false;
		}
		this._marker_node18.ggUpdateConditionNodeChange=function () {
				me._marker_node18__normal.ggNodeChangeMain();
				me._marker_node18__active.ggNodeChangeMain();
		}
		this._marker_node18.ggUpdatePosition=function () {
		}
		this._marker_node18.ggNodeChange=function () {
			me._marker_node18.ggUpdateConditionNodeChange();
		}
		this._marker_title8=document.createElement('div');
		this._marker_title8__text=document.createElement('div');
		this._marker_title8.className='ggskin ggskin_textdiv';
		this._marker_title8.ggTextDiv=this._marker_title8__text;
		this._marker_title8.ggId="marker_title";
		this._marker_title8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title8.ggVisible=false;
		this._marker_title8.className='ggskin ggskin_text ';
		this._marker_title8.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title8.setAttribute('style',hs);
		this._marker_title8.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title8__text.setAttribute('style',hs);
		this._marker_title8__text.innerHTML="\u0631\u0627\u0647\u0631\u0648";
		this._marker_title8.appendChild(this._marker_title8__text);
		me._marker_title8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title8.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node18.appendChild(this._marker_title8);
		this._image_41.appendChild(this._marker_node18);
		this._marker_node14=document.createElement('div');
		this._marker_node14.ggMarkerNodeId='{node14}';
		nodeMarker.push(this._marker_node14);
		this._marker_node14.ggId="marker_node14";
		this._marker_node14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node14.ggVisible=true;
		this._marker_node14.className='ggskin ggskin_mark ';
		this._marker_node14.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 444px;';
		hs+='position : absolute;';
		hs+='top : 254px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node14.setAttribute('style',hs);
		this._marker_node14.style[domTransform + 'Origin']='50% 50%';
		me._marker_node14.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node14.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node14.onclick=function () {
			me.player.openNext('{node14}');
		}
		this._marker_node14.onmouseover=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility=(Number(me._marker_title7.style.opacity)>0||!me._marker_title7.style.opacity)?'inherit':'hidden';
			me._marker_title7.ggVisible=true;
		}
		this._marker_node14.onmouseout=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility='hidden';
			me._marker_title7.ggVisible=false;
		}
		this._marker_node14.ggUpdateConditionNodeChange=function () {
				me._marker_node14__normal.ggNodeChangeMain();
				me._marker_node14__active.ggNodeChangeMain();
		}
		this._marker_node14.ggUpdatePosition=function () {
		}
		this._marker_node14.ggNodeChange=function () {
			me._marker_node14.ggUpdateConditionNodeChange();
		}
		this._marker_title7=document.createElement('div');
		this._marker_title7__text=document.createElement('div');
		this._marker_title7.className='ggskin ggskin_textdiv';
		this._marker_title7.ggTextDiv=this._marker_title7__text;
		this._marker_title7.ggId="marker_title";
		this._marker_title7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title7.ggVisible=false;
		this._marker_title7.className='ggskin ggskin_text ';
		this._marker_title7.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title7.setAttribute('style',hs);
		this._marker_title7.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title7__text.setAttribute('style',hs);
		this._marker_title7__text.innerHTML="\u062e\u06cc\u0627\u0628\u0627\u0646";
		this._marker_title7.appendChild(this._marker_title7__text);
		me._marker_title7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title7.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node14.appendChild(this._marker_title7);
		this._image_41.appendChild(this._marker_node14);
		this._marker_node13=document.createElement('div');
		this._marker_node13.ggMarkerNodeId='{node13}';
		nodeMarker.push(this._marker_node13);
		this._marker_node13.ggId="marker_node13";
		this._marker_node13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node13.ggVisible=true;
		this._marker_node13.className='ggskin ggskin_mark ';
		this._marker_node13.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 415px;';
		hs+='position : absolute;';
		hs+='top : 255px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node13.setAttribute('style',hs);
		this._marker_node13.style[domTransform + 'Origin']='50% 50%';
		me._marker_node13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node13.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node13.onclick=function () {
			me.player.openNext('{node13}');
		}
		this._marker_node13.onmouseover=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility=(Number(me._marker_title6.style.opacity)>0||!me._marker_title6.style.opacity)?'inherit':'hidden';
			me._marker_title6.ggVisible=true;
		}
		this._marker_node13.onmouseout=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility='hidden';
			me._marker_title6.ggVisible=false;
		}
		this._marker_node13.ggUpdateConditionNodeChange=function () {
				me._marker_node13__normal.ggNodeChangeMain();
				me._marker_node13__active.ggNodeChangeMain();
		}
		this._marker_node13.ggUpdatePosition=function () {
		}
		this._marker_node13.ggNodeChange=function () {
			me._marker_node13.ggUpdateConditionNodeChange();
		}
		this._marker_title6=document.createElement('div');
		this._marker_title6__text=document.createElement('div');
		this._marker_title6.className='ggskin ggskin_textdiv';
		this._marker_title6.ggTextDiv=this._marker_title6__text;
		this._marker_title6.ggId="marker_title";
		this._marker_title6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title6.ggVisible=false;
		this._marker_title6.className='ggskin ggskin_text ';
		this._marker_title6.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title6.setAttribute('style',hs);
		this._marker_title6.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title6__text.setAttribute('style',hs);
		this._marker_title6__text.innerHTML="\u0648\u0631\u0648\u062f\u06cc";
		this._marker_title6.appendChild(this._marker_title6__text);
		me._marker_title6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title6.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node13.appendChild(this._marker_title6);
		this._image_41.appendChild(this._marker_node13);
		this._marker_node19=document.createElement('div');
		this._marker_node19.ggMarkerNodeId='{node19}';
		nodeMarker.push(this._marker_node19);
		this._marker_node19.ggId="marker_node19";
		this._marker_node19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node19.ggVisible=true;
		this._marker_node19.className='ggskin ggskin_mark ';
		this._marker_node19.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 219px;';
		hs+='position : absolute;';
		hs+='top : 153px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node19.setAttribute('style',hs);
		this._marker_node19.style[domTransform + 'Origin']='50% 50%';
		me._marker_node19.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node19.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node19.onclick=function () {
			me.player.openNext('{node19}');
		}
		this._marker_node19.onmouseover=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility=(Number(me._marker_title5.style.opacity)>0||!me._marker_title5.style.opacity)?'inherit':'hidden';
			me._marker_title5.ggVisible=true;
		}
		this._marker_node19.onmouseout=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='hidden';
			me._marker_title5.ggVisible=false;
		}
		this._marker_node19.ggUpdateConditionNodeChange=function () {
				me._marker_node19__normal.ggNodeChangeMain();
				me._marker_node19__active.ggNodeChangeMain();
		}
		this._marker_node19.ggUpdatePosition=function () {
		}
		this._marker_node19.ggNodeChange=function () {
			me._marker_node19.ggUpdateConditionNodeChange();
		}
		this._marker_title5=document.createElement('div');
		this._marker_title5__text=document.createElement('div');
		this._marker_title5.className='ggskin ggskin_textdiv';
		this._marker_title5.ggTextDiv=this._marker_title5__text;
		this._marker_title5.ggId="marker_title";
		this._marker_title5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title5.ggVisible=false;
		this._marker_title5.className='ggskin ggskin_text ';
		this._marker_title5.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title5.setAttribute('style',hs);
		this._marker_title5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title5__text.setAttribute('style',hs);
		this._marker_title5__text.innerHTML="\u0636\u0631\u06cc\u062d";
		this._marker_title5.appendChild(this._marker_title5__text);
		me._marker_title5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title5.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node19.appendChild(this._marker_title5);
		this._image_41.appendChild(this._marker_node19);
		this._marker_node27=document.createElement('div');
		this._marker_node27.ggMarkerNodeId='{node27}';
		nodeMarker.push(this._marker_node27);
		this._marker_node27.ggId="marker_node27";
		this._marker_node27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node27.ggVisible=true;
		this._marker_node27.className='ggskin ggskin_mark ';
		this._marker_node27.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 219px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node27.setAttribute('style',hs);
		this._marker_node27.style[domTransform + 'Origin']='50% 50%';
		me._marker_node27.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node27.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node27.onclick=function () {
			me.player.openNext('{node27}');
		}
		this._marker_node27.onmouseover=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility=(Number(me._marker_title4.style.opacity)>0||!me._marker_title4.style.opacity)?'inherit':'hidden';
			me._marker_title4.ggVisible=true;
		}
		this._marker_node27.onmouseout=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='hidden';
			me._marker_title4.ggVisible=false;
		}
		this._marker_node27.ggUpdateConditionNodeChange=function () {
				me._marker_node27__normal.ggNodeChangeMain();
				me._marker_node27__active.ggNodeChangeMain();
		}
		this._marker_node27.ggUpdatePosition=function () {
		}
		this._marker_node27.ggNodeChange=function () {
			me._marker_node27.ggUpdateConditionNodeChange();
		}
		this._marker_title4=document.createElement('div');
		this._marker_title4__text=document.createElement('div');
		this._marker_title4.className='ggskin ggskin_textdiv';
		this._marker_title4.ggTextDiv=this._marker_title4__text;
		this._marker_title4.ggId="marker_title";
		this._marker_title4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title4.ggVisible=false;
		this._marker_title4.className='ggskin ggskin_text ';
		this._marker_title4.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title4.setAttribute('style',hs);
		this._marker_title4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title4__text.setAttribute('style',hs);
		this._marker_title4__text.innerHTML="";
		this._marker_title4.appendChild(this._marker_title4__text);
		me._marker_title4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title4.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node27.appendChild(this._marker_title4);
		this._image_41.appendChild(this._marker_node27);
		this._marker_node23=document.createElement('div');
		this._marker_node23.ggMarkerNodeId='{node23}';
		nodeMarker.push(this._marker_node23);
		this._marker_node23.ggId="marker_node23";
		this._marker_node23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node23.ggVisible=true;
		this._marker_node23.className='ggskin ggskin_mark ';
		this._marker_node23.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 313px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node23.setAttribute('style',hs);
		this._marker_node23.style[domTransform + 'Origin']='50% 50%';
		me._marker_node23.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node23.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node23.onclick=function () {
			me.player.openNext('{node23}');
		}
		this._marker_node23.onmouseover=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility=(Number(me._marker_title3.style.opacity)>0||!me._marker_title3.style.opacity)?'inherit':'hidden';
			me._marker_title3.ggVisible=true;
		}
		this._marker_node23.onmouseout=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='hidden';
			me._marker_title3.ggVisible=false;
		}
		this._marker_node23.ggUpdateConditionNodeChange=function () {
				me._marker_node23__normal.ggNodeChangeMain();
				me._marker_node23__active.ggNodeChangeMain();
		}
		this._marker_node23.ggUpdatePosition=function () {
		}
		this._marker_node23.ggNodeChange=function () {
			me._marker_node23.ggUpdateConditionNodeChange();
		}
		this._marker_title3=document.createElement('div');
		this._marker_title3__text=document.createElement('div');
		this._marker_title3.className='ggskin ggskin_textdiv';
		this._marker_title3.ggTextDiv=this._marker_title3__text;
		this._marker_title3.ggId="marker_title";
		this._marker_title3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title3.ggVisible=false;
		this._marker_title3.className='ggskin ggskin_text ';
		this._marker_title3.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title3.setAttribute('style',hs);
		this._marker_title3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title3__text.setAttribute('style',hs);
		this._marker_title3__text.innerHTML="\u062d\u0633\u06cc\u0646\u06cc\u0647";
		this._marker_title3.appendChild(this._marker_title3__text);
		me._marker_title3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title3.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node23.appendChild(this._marker_title3);
		this._image_41.appendChild(this._marker_node23);
		this._marker_node24=document.createElement('div');
		this._marker_node24.ggMarkerNodeId='{node24}';
		nodeMarker.push(this._marker_node24);
		this._marker_node24.ggId="marker_node24";
		this._marker_node24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node24.ggVisible=true;
		this._marker_node24.className='ggskin ggskin_mark ';
		this._marker_node24.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 267px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node24.setAttribute('style',hs);
		this._marker_node24.style[domTransform + 'Origin']='50% 50%';
		me._marker_node24.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node24.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node24.onclick=function () {
			me.player.openNext('{node24}');
		}
		this._marker_node24.onmouseover=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility=(Number(me._marker_title2.style.opacity)>0||!me._marker_title2.style.opacity)?'inherit':'hidden';
			me._marker_title2.ggVisible=true;
		}
		this._marker_node24.onmouseout=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='hidden';
			me._marker_title2.ggVisible=false;
		}
		this._marker_node24.ggUpdateConditionNodeChange=function () {
				me._marker_node24__normal.ggNodeChangeMain();
				me._marker_node24__active.ggNodeChangeMain();
		}
		this._marker_node24.ggUpdatePosition=function () {
		}
		this._marker_node24.ggNodeChange=function () {
			me._marker_node24.ggUpdateConditionNodeChange();
		}
		this._marker_title2=document.createElement('div');
		this._marker_title2__text=document.createElement('div');
		this._marker_title2.className='ggskin ggskin_textdiv';
		this._marker_title2.ggTextDiv=this._marker_title2__text;
		this._marker_title2.ggId="marker_title";
		this._marker_title2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title2.ggVisible=false;
		this._marker_title2.className='ggskin ggskin_text ';
		this._marker_title2.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title2.setAttribute('style',hs);
		this._marker_title2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title2__text.setAttribute('style',hs);
		this._marker_title2__text.innerHTML="\u062d\u0633\u06cc\u0646\u06cc\u0647";
		this._marker_title2.appendChild(this._marker_title2__text);
		me._marker_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node24.appendChild(this._marker_title2);
		this._image_41.appendChild(this._marker_node24);
		this._marker_node26=document.createElement('div');
		this._marker_node26.ggMarkerNodeId='{node26}';
		nodeMarker.push(this._marker_node26);
		this._marker_node26.ggId="marker_node26";
		this._marker_node26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node26.ggVisible=true;
		this._marker_node26.className='ggskin ggskin_mark ';
		this._marker_node26.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 343px;';
		hs+='position : absolute;';
		hs+='top : 143px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node26.setAttribute('style',hs);
		this._marker_node26.style[domTransform + 'Origin']='50% 50%';
		me._marker_node26.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node26.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node26.onclick=function () {
			me.player.openNext('{node26}');
		}
		this._marker_node26.onmouseover=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility=(Number(me._marker_title1.style.opacity)>0||!me._marker_title1.style.opacity)?'inherit':'hidden';
			me._marker_title1.ggVisible=true;
		}
		this._marker_node26.onmouseout=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='hidden';
			me._marker_title1.ggVisible=false;
		}
		this._marker_node26.ggUpdateConditionNodeChange=function () {
				me._marker_node26__normal.ggNodeChangeMain();
				me._marker_node26__active.ggNodeChangeMain();
		}
		this._marker_node26.ggUpdatePosition=function () {
		}
		this._marker_node26.ggNodeChange=function () {
			me._marker_node26.ggUpdateConditionNodeChange();
		}
		this._marker_title1=document.createElement('div');
		this._marker_title1__text=document.createElement('div');
		this._marker_title1.className='ggskin ggskin_textdiv';
		this._marker_title1.ggTextDiv=this._marker_title1__text;
		this._marker_title1.ggId="marker_title";
		this._marker_title1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title1.ggVisible=false;
		this._marker_title1.className='ggskin ggskin_text ';
		this._marker_title1.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title1.setAttribute('style',hs);
		this._marker_title1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title1__text.setAttribute('style',hs);
		this._marker_title1__text.innerHTML="\u062d\u0633\u06cc\u0646\u06cc\u0647";
		this._marker_title1.appendChild(this._marker_title1__text);
		me._marker_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node26.appendChild(this._marker_title1);
		this._image_41.appendChild(this._marker_node26);
		this._marker_node25=document.createElement('div');
		this._marker_node25.ggMarkerNodeId='{node25}';
		nodeMarker.push(this._marker_node25);
		this._marker_node25.ggId="marker_node25";
		this._marker_node25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node25.ggVisible=true;
		this._marker_node25.className='ggskin ggskin_mark ';
		this._marker_node25.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 416px;';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node25.setAttribute('style',hs);
		this._marker_node25.style[domTransform + 'Origin']='50% 50%';
		me._marker_node25.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node25.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node25.onclick=function () {
			me.player.openNext('{node25}');
		}
		this._marker_node25.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node25.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node25.ggUpdateConditionNodeChange=function () {
				me._marker_node25__normal.ggNodeChangeMain();
				me._marker_node25__active.ggNodeChangeMain();
		}
		this._marker_node25.ggUpdatePosition=function () {
		}
		this._marker_node25.ggNodeChange=function () {
			me._marker_node25.ggUpdateConditionNodeChange();
		}
		this._marker_title0=document.createElement('div');
		this._marker_title0__text=document.createElement('div');
		this._marker_title0.className='ggskin ggskin_textdiv';
		this._marker_title0.ggTextDiv=this._marker_title0__text;
		this._marker_title0.ggId="marker_title";
		this._marker_title0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title0.ggVisible=false;
		this._marker_title0.className='ggskin ggskin_text ';
		this._marker_title0.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title0.setAttribute('style',hs);
		this._marker_title0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title0__text.setAttribute('style',hs);
		this._marker_title0__text.innerHTML="\u06af\u0644\u062f\u0633\u062a\u0647";
		this._marker_title0.appendChild(this._marker_title0__text);
		me._marker_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node25.appendChild(this._marker_title0);
		this._image_41.appendChild(this._marker_node25);
		this._marker_node10=document.createElement('div');
		this._marker_node10.ggMarkerNodeId='{node10}';
		nodeMarker.push(this._marker_node10);
		this._marker_node10.ggId="marker_node10";
		this._marker_node10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node10.ggVisible=true;
		this._marker_node10.className='ggskin ggskin_mark ';
		this._marker_node10.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 144px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node10.setAttribute('style',hs);
		this._marker_node10.style[domTransform + 'Origin']='50% 50%';
		me._marker_node10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node10.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node10.onclick=function () {
			me.player.openNext('{node10}');
		}
		this._marker_node10.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
			me._marker_title.ggVisible=true;
		}
		this._marker_node10.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_node10.ggUpdateConditionNodeChange=function () {
				me._marker_node10__normal.ggNodeChangeMain();
				me._marker_node10__active.ggNodeChangeMain();
		}
		this._marker_node10.ggUpdatePosition=function () {
		}
		this._marker_node10.ggNodeChange=function () {
			me._marker_node10.ggUpdateConditionNodeChange();
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text ';
		this._marker_title.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title.setAttribute('style',hs);
		this._marker_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title__text.innerHTML="\u0622\u0631\u0627\u0645\u0633\u062a\u0627\u0646";
		this._marker_title.appendChild(this._marker_title__text);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node10.appendChild(this._marker_title);
		this._image_41.appendChild(this._marker_node10);
		this.divSkin.appendChild(this._image_41);
		this._normal_screen=document.createElement('div');
		this._normal_screen__img=document.createElement('img');
		this._normal_screen__img.className='ggskin ggskin_svg';
		this._normal_screen__img.setAttribute('src',basePath + 'images/normal_screen.svg');
		this._normal_screen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._normal_screen__img['ondragstart']=function() { return false; };
		this._normal_screen.appendChild(this._normal_screen__img);
		this._normal_screen__imgo=document.createElement('img');
		this._normal_screen__imgo.className='ggskin ggskin_svg';
		this._normal_screen__imgo.setAttribute('src',basePath + 'images/normal_screen__o.svg');
		this._normal_screen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._normal_screen__imgo['ondragstart']=function() { return false; };
		this._normal_screen.appendChild(this._normal_screen__imgo);
		this._normal_screen.ggId="normal screen";
		this._normal_screen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._normal_screen.ggVisible=true;
		this._normal_screen.className='ggskin ggskin_svg ';
		this._normal_screen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._normal_screen.setAttribute('style',hs);
		this._normal_screen.style[domTransform + 'Origin']='50% 50%';
		me._normal_screen.ggIsActive=function() {
			return false;
		}
		me._normal_screen.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._normal_screen.onclick=function () {
			me.player.exitFullscreen();
			me._full_screen.style[domTransition]='none';
			me._full_screen.style.visibility=(Number(me._full_screen.style.opacity)>0||!me._full_screen.style.opacity)?'inherit':'hidden';
			me._full_screen.ggVisible=true;
			me._normal_screen.style[domTransition]='none';
			me._normal_screen.style.visibility='hidden';
			me._normal_screen.ggVisible=false;
		}
		this._normal_screen.onmouseover=function () {
			me._normal_screen__img.style.visibility='hidden';
			me._normal_screen__imgo.style.visibility='inherit';
		}
		this._normal_screen.onmouseout=function () {
			me._normal_screen__img.style.visibility='inherit';
			me._normal_screen__imgo.style.visibility='hidden';
		}
		this._normal_screen.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._normal_screen);
		this._full_screen=document.createElement('div');
		this._full_screen__img=document.createElement('img');
		this._full_screen__img.className='ggskin ggskin_svg';
		this._full_screen__img.setAttribute('src',basePath + 'images/full_screen.svg');
		this._full_screen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._full_screen__img['ondragstart']=function() { return false; };
		this._full_screen.appendChild(this._full_screen__img);
		this._full_screen__imgo=document.createElement('img');
		this._full_screen__imgo.className='ggskin ggskin_svg';
		this._full_screen__imgo.setAttribute('src',basePath + 'images/full_screen__o.svg');
		this._full_screen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._full_screen__imgo['ondragstart']=function() { return false; };
		this._full_screen.appendChild(this._full_screen__imgo);
		this._full_screen.ggId="full screen";
		this._full_screen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._full_screen.ggVisible=true;
		this._full_screen.className='ggskin ggskin_svg ';
		this._full_screen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : 147px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._full_screen.setAttribute('style',hs);
		this._full_screen.style[domTransform + 'Origin']='50% 50%';
		me._full_screen.ggIsActive=function() {
			return false;
		}
		me._full_screen.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._full_screen.onclick=function () {
			me.player.enterFullscreen();
			me._normal_screen.style[domTransition]='none';
			me._normal_screen.style.visibility=(Number(me._normal_screen.style.opacity)>0||!me._normal_screen.style.opacity)?'inherit':'hidden';
			me._normal_screen.ggVisible=true;
			me._full_screen.style[domTransition]='none';
			me._full_screen.style.visibility='hidden';
			me._full_screen.ggVisible=false;
		}
		this._full_screen.onmouseover=function () {
			me._full_screen__img.style.visibility='hidden';
			me._full_screen__imgo.style.visibility='inherit';
		}
		this._full_screen.onmouseout=function () {
			me._full_screen__img.style.visibility='inherit';
			me._full_screen__imgo.style.visibility='hidden';
		}
		this._full_screen.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._full_screen);
		this._markertemplate__normal=new SkinElement_marker_normal_Class(this,this._markertemplate);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left='0px';
		this._markertemplate__normal.style.top='0px';
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=new SkinElement_marker_active_Class(this,this._markertemplate);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left='0px';
		this._markertemplate__active.style.top='0px';
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this._marker_node2__normal=new SkinElement_marker_normal0_Class(this,this._marker_node2);
		this._marker_node2__normal.style.visibility='inherit';
		this._marker_node2__normal.style.left='0px';
		this._marker_node2__normal.style.top='0px';
		this._marker_node2.ggMarkerNormal=this._marker_node2__normal;
		this._marker_node2__active=new SkinElement_marker_active0_Class(this,this._marker_node2);
		this._marker_node2__active.style.visibility='hidden';
		this._marker_node2__active.style.left='0px';
		this._marker_node2__active.style.top='0px';
		this._marker_node2.ggMarkerActive=this._marker_node2__active;
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__active,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__active);
		}
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__normal,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__normal);
		}
		this._marker_node4__normal=new SkinElement_marker_normal0_Class(this,this._marker_node4);
		this._marker_node4__normal.style.visibility='inherit';
		this._marker_node4__normal.style.left='0px';
		this._marker_node4__normal.style.top='0px';
		this._marker_node4.ggMarkerNormal=this._marker_node4__normal;
		this._marker_node4__active=new SkinElement_marker_active0_Class(this,this._marker_node4);
		this._marker_node4__active.style.visibility='hidden';
		this._marker_node4__active.style.left='0px';
		this._marker_node4__active.style.top='0px';
		this._marker_node4.ggMarkerActive=this._marker_node4__active;
		if (this._marker_node4.firstChild) {
			this._marker_node4.insertBefore(this._marker_node4__active,this._marker_node4.firstChild);
		} else {
			this._marker_node4.appendChild(this._marker_node4__active);
		}
		if (this._marker_node4.firstChild) {
			this._marker_node4.insertBefore(this._marker_node4__normal,this._marker_node4.firstChild);
		} else {
			this._marker_node4.appendChild(this._marker_node4__normal);
		}
		this._marker_node7__normal=new SkinElement_marker_normal0_Class(this,this._marker_node7);
		this._marker_node7__normal.style.visibility='inherit';
		this._marker_node7__normal.style.left='0px';
		this._marker_node7__normal.style.top='0px';
		this._marker_node7.ggMarkerNormal=this._marker_node7__normal;
		this._marker_node7__active=new SkinElement_marker_active0_Class(this,this._marker_node7);
		this._marker_node7__active.style.visibility='hidden';
		this._marker_node7__active.style.left='0px';
		this._marker_node7__active.style.top='0px';
		this._marker_node7.ggMarkerActive=this._marker_node7__active;
		if (this._marker_node7.firstChild) {
			this._marker_node7.insertBefore(this._marker_node7__active,this._marker_node7.firstChild);
		} else {
			this._marker_node7.appendChild(this._marker_node7__active);
		}
		if (this._marker_node7.firstChild) {
			this._marker_node7.insertBefore(this._marker_node7__normal,this._marker_node7.firstChild);
		} else {
			this._marker_node7.appendChild(this._marker_node7__normal);
		}
		this._marker_node8__normal=new SkinElement_marker_normal0_Class(this,this._marker_node8);
		this._marker_node8__normal.style.visibility='inherit';
		this._marker_node8__normal.style.left='0px';
		this._marker_node8__normal.style.top='0px';
		this._marker_node8.ggMarkerNormal=this._marker_node8__normal;
		this._marker_node8__active=new SkinElement_marker_active0_Class(this,this._marker_node8);
		this._marker_node8__active.style.visibility='hidden';
		this._marker_node8__active.style.left='0px';
		this._marker_node8__active.style.top='0px';
		this._marker_node8.ggMarkerActive=this._marker_node8__active;
		if (this._marker_node8.firstChild) {
			this._marker_node8.insertBefore(this._marker_node8__active,this._marker_node8.firstChild);
		} else {
			this._marker_node8.appendChild(this._marker_node8__active);
		}
		if (this._marker_node8.firstChild) {
			this._marker_node8.insertBefore(this._marker_node8__normal,this._marker_node8.firstChild);
		} else {
			this._marker_node8.appendChild(this._marker_node8__normal);
		}
		this._marker_node9__normal=new SkinElement_marker_normal0_Class(this,this._marker_node9);
		this._marker_node9__normal.style.visibility='inherit';
		this._marker_node9__normal.style.left='0px';
		this._marker_node9__normal.style.top='0px';
		this._marker_node9.ggMarkerNormal=this._marker_node9__normal;
		this._marker_node9__active=new SkinElement_marker_active0_Class(this,this._marker_node9);
		this._marker_node9__active.style.visibility='hidden';
		this._marker_node9__active.style.left='0px';
		this._marker_node9__active.style.top='0px';
		this._marker_node9.ggMarkerActive=this._marker_node9__active;
		if (this._marker_node9.firstChild) {
			this._marker_node9.insertBefore(this._marker_node9__active,this._marker_node9.firstChild);
		} else {
			this._marker_node9.appendChild(this._marker_node9__active);
		}
		if (this._marker_node9.firstChild) {
			this._marker_node9.insertBefore(this._marker_node9__normal,this._marker_node9.firstChild);
		} else {
			this._marker_node9.appendChild(this._marker_node9__normal);
		}
		this._marker_node12__normal=new SkinElement_marker_normal0_Class(this,this._marker_node12);
		this._marker_node12__normal.style.visibility='inherit';
		this._marker_node12__normal.style.left='0px';
		this._marker_node12__normal.style.top='0px';
		this._marker_node12.ggMarkerNormal=this._marker_node12__normal;
		this._marker_node12__active=new SkinElement_marker_active0_Class(this,this._marker_node12);
		this._marker_node12__active.style.visibility='hidden';
		this._marker_node12__active.style.left='0px';
		this._marker_node12__active.style.top='0px';
		this._marker_node12.ggMarkerActive=this._marker_node12__active;
		if (this._marker_node12.firstChild) {
			this._marker_node12.insertBefore(this._marker_node12__active,this._marker_node12.firstChild);
		} else {
			this._marker_node12.appendChild(this._marker_node12__active);
		}
		if (this._marker_node12.firstChild) {
			this._marker_node12.insertBefore(this._marker_node12__normal,this._marker_node12.firstChild);
		} else {
			this._marker_node12.appendChild(this._marker_node12__normal);
		}
		this._marker_node15__normal=new SkinElement_marker_normal0_Class(this,this._marker_node15);
		this._marker_node15__normal.style.visibility='inherit';
		this._marker_node15__normal.style.left='0px';
		this._marker_node15__normal.style.top='0px';
		this._marker_node15.ggMarkerNormal=this._marker_node15__normal;
		this._marker_node15__active=new SkinElement_marker_active0_Class(this,this._marker_node15);
		this._marker_node15__active.style.visibility='hidden';
		this._marker_node15__active.style.left='0px';
		this._marker_node15__active.style.top='0px';
		this._marker_node15.ggMarkerActive=this._marker_node15__active;
		if (this._marker_node15.firstChild) {
			this._marker_node15.insertBefore(this._marker_node15__active,this._marker_node15.firstChild);
		} else {
			this._marker_node15.appendChild(this._marker_node15__active);
		}
		if (this._marker_node15.firstChild) {
			this._marker_node15.insertBefore(this._marker_node15__normal,this._marker_node15.firstChild);
		} else {
			this._marker_node15.appendChild(this._marker_node15__normal);
		}
		this._marker_node18__normal=new SkinElement_marker_normal0_Class(this,this._marker_node18);
		this._marker_node18__normal.style.visibility='inherit';
		this._marker_node18__normal.style.left='0px';
		this._marker_node18__normal.style.top='0px';
		this._marker_node18.ggMarkerNormal=this._marker_node18__normal;
		this._marker_node18__active=new SkinElement_marker_active0_Class(this,this._marker_node18);
		this._marker_node18__active.style.visibility='hidden';
		this._marker_node18__active.style.left='0px';
		this._marker_node18__active.style.top='0px';
		this._marker_node18.ggMarkerActive=this._marker_node18__active;
		if (this._marker_node18.firstChild) {
			this._marker_node18.insertBefore(this._marker_node18__active,this._marker_node18.firstChild);
		} else {
			this._marker_node18.appendChild(this._marker_node18__active);
		}
		if (this._marker_node18.firstChild) {
			this._marker_node18.insertBefore(this._marker_node18__normal,this._marker_node18.firstChild);
		} else {
			this._marker_node18.appendChild(this._marker_node18__normal);
		}
		this._marker_node14__normal=new SkinElement_marker_normal0_Class(this,this._marker_node14);
		this._marker_node14__normal.style.visibility='inherit';
		this._marker_node14__normal.style.left='0px';
		this._marker_node14__normal.style.top='0px';
		this._marker_node14.ggMarkerNormal=this._marker_node14__normal;
		this._marker_node14__active=new SkinElement_marker_active0_Class(this,this._marker_node14);
		this._marker_node14__active.style.visibility='hidden';
		this._marker_node14__active.style.left='0px';
		this._marker_node14__active.style.top='0px';
		this._marker_node14.ggMarkerActive=this._marker_node14__active;
		if (this._marker_node14.firstChild) {
			this._marker_node14.insertBefore(this._marker_node14__active,this._marker_node14.firstChild);
		} else {
			this._marker_node14.appendChild(this._marker_node14__active);
		}
		if (this._marker_node14.firstChild) {
			this._marker_node14.insertBefore(this._marker_node14__normal,this._marker_node14.firstChild);
		} else {
			this._marker_node14.appendChild(this._marker_node14__normal);
		}
		this._marker_node13__normal=new SkinElement_marker_normal0_Class(this,this._marker_node13);
		this._marker_node13__normal.style.visibility='inherit';
		this._marker_node13__normal.style.left='0px';
		this._marker_node13__normal.style.top='0px';
		this._marker_node13.ggMarkerNormal=this._marker_node13__normal;
		this._marker_node13__active=new SkinElement_marker_active0_Class(this,this._marker_node13);
		this._marker_node13__active.style.visibility='hidden';
		this._marker_node13__active.style.left='0px';
		this._marker_node13__active.style.top='0px';
		this._marker_node13.ggMarkerActive=this._marker_node13__active;
		if (this._marker_node13.firstChild) {
			this._marker_node13.insertBefore(this._marker_node13__active,this._marker_node13.firstChild);
		} else {
			this._marker_node13.appendChild(this._marker_node13__active);
		}
		if (this._marker_node13.firstChild) {
			this._marker_node13.insertBefore(this._marker_node13__normal,this._marker_node13.firstChild);
		} else {
			this._marker_node13.appendChild(this._marker_node13__normal);
		}
		this._marker_node19__normal=new SkinElement_marker_normal0_Class(this,this._marker_node19);
		this._marker_node19__normal.style.visibility='inherit';
		this._marker_node19__normal.style.left='0px';
		this._marker_node19__normal.style.top='0px';
		this._marker_node19.ggMarkerNormal=this._marker_node19__normal;
		this._marker_node19__active=new SkinElement_marker_active0_Class(this,this._marker_node19);
		this._marker_node19__active.style.visibility='hidden';
		this._marker_node19__active.style.left='0px';
		this._marker_node19__active.style.top='0px';
		this._marker_node19.ggMarkerActive=this._marker_node19__active;
		if (this._marker_node19.firstChild) {
			this._marker_node19.insertBefore(this._marker_node19__active,this._marker_node19.firstChild);
		} else {
			this._marker_node19.appendChild(this._marker_node19__active);
		}
		if (this._marker_node19.firstChild) {
			this._marker_node19.insertBefore(this._marker_node19__normal,this._marker_node19.firstChild);
		} else {
			this._marker_node19.appendChild(this._marker_node19__normal);
		}
		this._marker_node27__normal=new SkinElement_marker_normal0_Class(this,this._marker_node27);
		this._marker_node27__normal.style.visibility='inherit';
		this._marker_node27__normal.style.left='0px';
		this._marker_node27__normal.style.top='0px';
		this._marker_node27.ggMarkerNormal=this._marker_node27__normal;
		this._marker_node27__active=new SkinElement_marker_active0_Class(this,this._marker_node27);
		this._marker_node27__active.style.visibility='hidden';
		this._marker_node27__active.style.left='0px';
		this._marker_node27__active.style.top='0px';
		this._marker_node27.ggMarkerActive=this._marker_node27__active;
		if (this._marker_node27.firstChild) {
			this._marker_node27.insertBefore(this._marker_node27__active,this._marker_node27.firstChild);
		} else {
			this._marker_node27.appendChild(this._marker_node27__active);
		}
		if (this._marker_node27.firstChild) {
			this._marker_node27.insertBefore(this._marker_node27__normal,this._marker_node27.firstChild);
		} else {
			this._marker_node27.appendChild(this._marker_node27__normal);
		}
		this._marker_node23__normal=new SkinElement_marker_normal0_Class(this,this._marker_node23);
		this._marker_node23__normal.style.visibility='inherit';
		this._marker_node23__normal.style.left='0px';
		this._marker_node23__normal.style.top='0px';
		this._marker_node23.ggMarkerNormal=this._marker_node23__normal;
		this._marker_node23__active=new SkinElement_marker_active0_Class(this,this._marker_node23);
		this._marker_node23__active.style.visibility='hidden';
		this._marker_node23__active.style.left='0px';
		this._marker_node23__active.style.top='0px';
		this._marker_node23.ggMarkerActive=this._marker_node23__active;
		if (this._marker_node23.firstChild) {
			this._marker_node23.insertBefore(this._marker_node23__active,this._marker_node23.firstChild);
		} else {
			this._marker_node23.appendChild(this._marker_node23__active);
		}
		if (this._marker_node23.firstChild) {
			this._marker_node23.insertBefore(this._marker_node23__normal,this._marker_node23.firstChild);
		} else {
			this._marker_node23.appendChild(this._marker_node23__normal);
		}
		this._marker_node24__normal=new SkinElement_marker_normal0_Class(this,this._marker_node24);
		this._marker_node24__normal.style.visibility='inherit';
		this._marker_node24__normal.style.left='0px';
		this._marker_node24__normal.style.top='0px';
		this._marker_node24.ggMarkerNormal=this._marker_node24__normal;
		this._marker_node24__active=new SkinElement_marker_active0_Class(this,this._marker_node24);
		this._marker_node24__active.style.visibility='hidden';
		this._marker_node24__active.style.left='0px';
		this._marker_node24__active.style.top='0px';
		this._marker_node24.ggMarkerActive=this._marker_node24__active;
		if (this._marker_node24.firstChild) {
			this._marker_node24.insertBefore(this._marker_node24__active,this._marker_node24.firstChild);
		} else {
			this._marker_node24.appendChild(this._marker_node24__active);
		}
		if (this._marker_node24.firstChild) {
			this._marker_node24.insertBefore(this._marker_node24__normal,this._marker_node24.firstChild);
		} else {
			this._marker_node24.appendChild(this._marker_node24__normal);
		}
		this._marker_node26__normal=new SkinElement_marker_normal0_Class(this,this._marker_node26);
		this._marker_node26__normal.style.visibility='inherit';
		this._marker_node26__normal.style.left='0px';
		this._marker_node26__normal.style.top='0px';
		this._marker_node26.ggMarkerNormal=this._marker_node26__normal;
		this._marker_node26__active=new SkinElement_marker_active0_Class(this,this._marker_node26);
		this._marker_node26__active.style.visibility='hidden';
		this._marker_node26__active.style.left='0px';
		this._marker_node26__active.style.top='0px';
		this._marker_node26.ggMarkerActive=this._marker_node26__active;
		if (this._marker_node26.firstChild) {
			this._marker_node26.insertBefore(this._marker_node26__active,this._marker_node26.firstChild);
		} else {
			this._marker_node26.appendChild(this._marker_node26__active);
		}
		if (this._marker_node26.firstChild) {
			this._marker_node26.insertBefore(this._marker_node26__normal,this._marker_node26.firstChild);
		} else {
			this._marker_node26.appendChild(this._marker_node26__normal);
		}
		this._marker_node25__normal=new SkinElement_marker_normal0_Class(this,this._marker_node25);
		this._marker_node25__normal.style.visibility='inherit';
		this._marker_node25__normal.style.left='0px';
		this._marker_node25__normal.style.top='0px';
		this._marker_node25.ggMarkerNormal=this._marker_node25__normal;
		this._marker_node25__active=new SkinElement_marker_active0_Class(this,this._marker_node25);
		this._marker_node25__active.style.visibility='hidden';
		this._marker_node25__active.style.left='0px';
		this._marker_node25__active.style.top='0px';
		this._marker_node25.ggMarkerActive=this._marker_node25__active;
		if (this._marker_node25.firstChild) {
			this._marker_node25.insertBefore(this._marker_node25__active,this._marker_node25.firstChild);
		} else {
			this._marker_node25.appendChild(this._marker_node25__active);
		}
		if (this._marker_node25.firstChild) {
			this._marker_node25.insertBefore(this._marker_node25__normal,this._marker_node25.firstChild);
		} else {
			this._marker_node25.appendChild(this._marker_node25__normal);
		}
		this._marker_node10__normal=new SkinElement_marker_normal0_Class(this,this._marker_node10);
		this._marker_node10__normal.style.visibility='inherit';
		this._marker_node10__normal.style.left='0px';
		this._marker_node10__normal.style.top='0px';
		this._marker_node10.ggMarkerNormal=this._marker_node10__normal;
		this._marker_node10__active=new SkinElement_marker_active0_Class(this,this._marker_node10);
		this._marker_node10__active.style.visibility='hidden';
		this._marker_node10__active.style.left='0px';
		this._marker_node10__active.style.top='0px';
		this._marker_node10.ggMarkerActive=this._marker_node10__active;
		if (this._marker_node10.firstChild) {
			this._marker_node10.insertBefore(this._marker_node10__active,this._marker_node10.firstChild);
		} else {
			this._marker_node10.appendChild(this._marker_node10__active);
		}
		if (this._marker_node10.firstChild) {
			this._marker_node10.insertBefore(this._marker_node10__normal,this._marker_node10.firstChild);
		} else {
			this._marker_node10.appendChild(this._marker_node10__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._markertemplate.ggNodeChange();
		me._marker_node2.ggNodeChange();
		me._marker_node4.ggNodeChange();
		me._marker_node7.ggNodeChange();
		me._marker_node8.ggNodeChange();
		me._marker_node9.ggNodeChange();
		me._marker_node12.ggNodeChange();
		me._marker_node15.ggNodeChange();
		me._marker_node18.ggNodeChange();
		me._marker_node14.ggNodeChange();
		me._marker_node13.ggNodeChange();
		me._marker_node19.ggNodeChange();
		me._marker_node27.ggNodeChange();
		me._marker_node23.ggNodeChange();
		me._marker_node24.ggNodeChange();
		me._marker_node26.ggNodeChange();
		me._marker_node25.ggNodeChange();
		me._marker_node10.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._title.ggUpdateText();
		me._description.ggUpdateText();
		me._author.ggUpdateText();
		me._datetime.ggUpdateText();
		me._copyright.ggUpdateText();
		me._marker_title16.ggUpdateText();
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hotspot";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 350px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility=(Number(me._hstext.style.opacity)>0||!me._hstext.style.opacity)?'inherit':'hidden';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hsimage=document.createElement('div');
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_svg';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage__img['ondragstart']=function() { return false; };
			this._hsimage.appendChild(this._hsimage__img);
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_svg ';
			this._hsimage.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage.style[domTransform + 'Origin']='50% 50%';
			me._hsimage.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text ';
			this._hstext.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			this._hstext.setAttribute('style',hs);
			this._hstext.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			me._hstext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hstext.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_marker_normal_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_normal=document.createElement('div');
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.svg');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg ';
		this._marker_normal.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal.style[domTransform + 'Origin']='50% 50%';
		me._marker_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_normal.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_normal.ggUpdatePosition=function () {
		}
		this._marker_normal.ggNodeChangeMain=function() {
		}
		return this._marker_normal;
	};
	function SkinElement_marker_active0_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_active0=document.createElement('div');
		this._marker_active0__img=document.createElement('img');
		this._marker_active0__img.className='ggskin ggskin_svg';
		this._marker_active0__img.setAttribute('src',basePath + 'images/marker_active0.svg');
		this._marker_active0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_active0__img['ondragstart']=function() { return false; };
		this._marker_active0.appendChild(this._marker_active0__img);
		this._marker_active0.ggId="marker_active";
		this._marker_active0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active0.ggVisible=true;
		this._marker_active0.className='ggskin ggskin_svg ';
		this._marker_active0.ggType='svg';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_active0.setAttribute('style',hs);
		this._marker_active0.style[domTransform + 'Origin']='50% 50%';
		me._marker_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_active0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_active0.ggUpdatePosition=function () {
		}
		this._marker_active0.ggNodeChangeMain=function() {
		}
		return this._marker_active0;
	};
	function SkinElement_marker_active_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_active=document.createElement('div');
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.svg');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg ';
		this._marker_active.ggType='svg';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active.style[domTransform + 'Origin']='50% 50%';
		me._marker_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_active.ggUpdatePosition=function () {
		}
		this._marker_active.ggNodeChangeMain=function() {
		}
		return this._marker_active;
	};
	function SkinElement_marker_normal0_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_normal0=document.createElement('div');
		this._marker_normal0__img=document.createElement('img');
		this._marker_normal0__img.className='ggskin ggskin_svg';
		this._marker_normal0__img.setAttribute('src',basePath + 'images/marker_normal0.svg');
		this._marker_normal0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_normal0__img['ondragstart']=function() { return false; };
		this._marker_normal0.appendChild(this._marker_normal0__img);
		this._marker_normal0.ggId="marker_normal";
		this._marker_normal0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal0.ggVisible=true;
		this._marker_normal0.className='ggskin ggskin_svg ';
		this._marker_normal0.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_normal0.setAttribute('style',hs);
		this._marker_normal0.style[domTransform + 'Origin']='50% 50%';
		me._marker_normal0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_normal0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_normal0.ggUpdatePosition=function () {
		}
		this._marker_normal0.ggNodeChangeMain=function() {
		}
		return this._marker_normal0;
	};
	this.addSkin();
};