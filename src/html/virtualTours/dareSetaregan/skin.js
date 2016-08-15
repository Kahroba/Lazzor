// Garden Gnome Software - Skin
// Pano2VR 5.0.2/15080
// Filename: setareha.ggsk
// Generated يكشنبه اوت 7 10:05:38 2016

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
		hs+='left : 13px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 18px;';
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
		this._markertemplate0=document.createElement('div');
		this._markertemplate0.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate0);
		this._markertemplate0.ggId="markertemplate";
		this._markertemplate0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate0.ggVisible=true;
		this._markertemplate0.className='ggskin ggskin_mark ';
		this._markertemplate0.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._markertemplate0.setAttribute('style',hs);
		this._markertemplate0.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._markertemplate0.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._markertemplate0.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._markertemplate0.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._markertemplate0.ggUpdateConditionNodeChange=function () {
				me._markertemplate0__normal.ggNodeChangeMain();
				me._markertemplate0__active.ggNodeChangeMain();
		}
		this._markertemplate0.ggUpdatePosition=function () {
		}
		this._markertemplate0.ggNodeChange=function () {
			me._markertemplate0.ggUpdateConditionNodeChange();
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
		this._marker_title0.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title0.ggUpdateText();
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
		this._markertemplate0.appendChild(this._marker_title0);
		this._hide_template0.appendChild(this._markertemplate0);
		this.divSkin.appendChild(this._hide_template0);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container ';
		this._hide_template.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 22px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 68px;';
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
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
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
		this._marker_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
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
		this._markertemplate.appendChild(this._marker_title);
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
		this._right.ggLeft=-20;
		this._right.ggTop=-50;
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg ';
		this._right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
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
		this._up.ggLeft=-20;
		this._up.ggTop=-50;
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg ';
		this._up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
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
		this._down.ggLeft=-20;
		this._down.ggTop=-50;
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg ';
		this._down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._down);
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
		this._normal_screen.ggLeft=-20;
		this._normal_screen.ggTop=-50;
		this._normal_screen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._normal_screen.ggVisible=true;
		this._normal_screen.className='ggskin ggskin_svg ';
		this._normal_screen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
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
		this._full_screen.ggLeft=-20;
		this._full_screen.ggTop=-50;
		this._full_screen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._full_screen.ggVisible=true;
		this._full_screen.className='ggskin ggskin_svg ';
		this._full_screen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._full_screen);
		this._help=document.createElement('div');
		this._help__img=document.createElement('img');
		this._help__img.className='ggskin ggskin_svg';
		this._help__img.setAttribute('src',basePath + 'images/help.svg');
		this._help__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._help__img['ondragstart']=function() { return false; };
		this._help.appendChild(this._help__img);
		this._help__imgo=document.createElement('img');
		this._help__imgo.className='ggskin ggskin_svg';
		this._help__imgo.setAttribute('src',basePath + 'images/help__o.svg');
		this._help__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._help__imgo['ondragstart']=function() { return false; };
		this._help.appendChild(this._help__imgo);
		this._help.ggId="help";
		this._help.ggLeft=-52;
		this._help.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._help.ggVisible=true;
		this._help.className='ggskin ggskin_svg ';
		this._help.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._help.setAttribute('style',hs);
		this._help.style[domTransform + 'Origin']='50% 50%';
		me._help.ggIsActive=function() {
			return false;
		}
		me._help.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._help.onclick=function () {
			me._help_notice.ggVisible = !me._help_notice.ggVisible;
			me._help_notice.style[domTransition]='none';
			me._help_notice.style.visibility=((me._help_notice.ggVisible)&&(Number(me._help_notice.style.opacity)>0||!me._help_notice.style.opacity))?'inherit':'hidden';
		}
		this._help.onmouseover=function () {
			me._help__img.style.visibility='hidden';
			me._help__imgo.style.visibility='inherit';
		}
		this._help.onmouseout=function () {
			me._help__img.style.visibility='inherit';
			me._help__imgo.style.visibility='hidden';
		}
		this._help.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._help);
		this._info=document.createElement('div');
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info__imgo=document.createElement('img');
		this._info__imgo.className='ggskin ggskin_svg';
		this._info__imgo.setAttribute('src',basePath + 'images/info__o.svg');
		this._info__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info__imgo['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__imgo);
		this._info.ggId="info";
		this._info.ggLeft=-52;
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg ';
		this._info.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		me._info.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._info.onmouseover=function () {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
		}
		this._info.onmouseout=function () {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
		}
		this._info.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._info);
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
		this._left.ggLeft=-20;
		this._left.ggTop=-50;
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg ';
		this._left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
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
		this._zoom_out.ggLeft=-20;
		this._zoom_out.ggTop=-49;
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_svg ';
		this._zoom_out.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._zoom_out);
		this._pause=document.createElement('div');
		this._pause__img=document.createElement('img');
		this._pause__img.className='ggskin ggskin_svg';
		this._pause__img.setAttribute('src',basePath + 'images/pause.svg');
		this._pause__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pause__img['ondragstart']=function() { return false; };
		this._pause.appendChild(this._pause__img);
		this._pause__imgo=document.createElement('img');
		this._pause__imgo.className='ggskin ggskin_svg';
		this._pause__imgo.setAttribute('src',basePath + 'images/pause__o.svg');
		this._pause__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._pause__imgo['ondragstart']=function() { return false; };
		this._pause.appendChild(this._pause__imgo);
		this._pause.ggId="pause";
		this._pause.ggLeft=-20;
		this._pause.ggTop=-50;
		this._pause.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pause.ggVisible=true;
		this._pause.className='ggskin ggskin_svg ';
		this._pause.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._pause.setAttribute('style',hs);
		this._pause.style[domTransform + 'Origin']='50% 50%';
		me._pause.ggIsActive=function() {
			return false;
		}
		me._pause.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._pause.onclick=function () {
			me.player.stopAutorotate();
			me._play.style[domTransition]='none';
			me._play.style.visibility=(Number(me._play.style.opacity)>0||!me._play.style.opacity)?'inherit':'hidden';
			me._play.ggVisible=true;
			me._pause.style[domTransition]='none';
			me._pause.style.visibility='hidden';
			me._pause.ggVisible=false;
		}
		this._pause.onmouseover=function () {
			me._pause__img.style.visibility='hidden';
			me._pause__imgo.style.visibility='inherit';
		}
		this._pause.onmouseout=function () {
			me._pause__img.style.visibility='inherit';
			me._pause__imgo.style.visibility='hidden';
		}
		this._pause.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._pause);
		this._play=document.createElement('div');
		this._play__img=document.createElement('img');
		this._play__img.className='ggskin ggskin_svg';
		this._play__img.setAttribute('src',basePath + 'images/play.svg');
		this._play__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._play__img['ondragstart']=function() { return false; };
		this._play.appendChild(this._play__img);
		this._play__imgo=document.createElement('img');
		this._play__imgo.className='ggskin ggskin_svg';
		this._play__imgo.setAttribute('src',basePath + 'images/play__o.svg');
		this._play__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._play__imgo['ondragstart']=function() { return false; };
		this._play.appendChild(this._play__imgo);
		this._play.ggId="play";
		this._play.ggLeft=-20;
		this._play.ggTop=-51;
		this._play.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._play.ggVisible=true;
		this._play.className='ggskin ggskin_svg ';
		this._play.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -51px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._play.setAttribute('style',hs);
		this._play.style[domTransform + 'Origin']='50% 50%';
		me._play.ggIsActive=function() {
			return false;
		}
		me._play.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._play.onclick=function () {
			me.player.startAutorotate("");
			me._pause.style[domTransition]='none';
			me._pause.style.visibility=(Number(me._pause.style.opacity)>0||!me._pause.style.opacity)?'inherit':'hidden';
			me._pause.ggVisible=true;
			me._play.style[domTransition]='none';
			me._play.style.visibility='hidden';
			me._play.ggVisible=false;
		}
		this._play.onmouseover=function () {
			me._play__img.style.visibility='hidden';
			me._play__imgo.style.visibility='inherit';
		}
		this._play.onmouseout=function () {
			me._play__img.style.visibility='inherit';
			me._play__imgo.style.visibility='hidden';
		}
		this._play.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._play);
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
		this._zoom_in.ggLeft=-21;
		this._zoom_in.ggTop=-49;
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_svg ';
		this._zoom_in.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -21px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
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
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._zoom_in);
		this._saying_cloud_down=document.createElement('div');
		this._saying_cloud_down__img=document.createElement('img');
		this._saying_cloud_down__img.className='ggskin ggskin_image';
		this._saying_cloud_down__img.setAttribute('src',basePath + 'images/saying_cloud_down.png');
		this._saying_cloud_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._saying_cloud_down__img.className='ggskin ggskin_image';
		this._saying_cloud_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._saying_cloud_down__img);
		this._saying_cloud_down.appendChild(this._saying_cloud_down__img);
		this._saying_cloud_down.ggId="Saying Cloud down";
		this._saying_cloud_down.ggLeft=-20;
		this._saying_cloud_down.ggTop=-110;
		this._saying_cloud_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._saying_cloud_down.ggVisible=true;
		this._saying_cloud_down.className='ggskin ggskin_image ';
		this._saying_cloud_down.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -110px;';
		hs+='visibility : inherit;';
		hs+='width : 79px;';
		this._saying_cloud_down.setAttribute('style',hs);
		this._saying_cloud_down.style[domTransform + 'Origin']='50% 50%';
		me._saying_cloud_down.ggIsActive=function() {
			return false;
		}
		me._saying_cloud_down.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._saying_cloud_down.onmouseout=function () {
			me._saying_cloud_down.style[domTransition]='none';
			me._saying_cloud_down.style.visibility='hidden';
			me._saying_cloud_down.ggVisible=false;
		}
		this._saying_cloud_down.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__=document.createElement('div');
		this.____text=document.createElement('div');
		this.__.className='ggskin ggskin_textdiv';
		this.__.ggTextDiv=this.____text;
		this.__.ggId="\u0634\u0631\u0648\u0639";
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_text ';
		this.__.ggType='text';
		hs ='';
		hs+='height : 51px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		this.__.setAttribute('style',hs);
		this.__.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 58px;';
		hs+='height: 51px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.____text.setAttribute('style',hs);
		this.____text.innerHTML="\u0634\u0631\u0648\u0639";
		this.__.appendChild(this.____text);
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__.ggUpdatePosition=function () {
		}
		this._saying_cloud_down.appendChild(this.__);
		this.divSkin.appendChild(this._saying_cloud_down);
		this._multi_down=document.createElement('div');
		this._multi_down__img=document.createElement('img');
		this._multi_down__img.className='ggskin ggskin_svg';
		this._multi_down__img.setAttribute('src',basePath + 'images/multi_down.svg');
		this._multi_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._multi_down__img['ondragstart']=function() { return false; };
		this._multi_down.appendChild(this._multi_down__img);
		this._multi_down__imgo=document.createElement('img');
		this._multi_down__imgo.className='ggskin ggskin_svg';
		this._multi_down__imgo.setAttribute('src',basePath + 'images/multi_down__o.svg');
		this._multi_down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._multi_down__imgo['ondragstart']=function() { return false; };
		this._multi_down.appendChild(this._multi_down__imgo);
		this._multi_down.ggId="Multi down";
		this._multi_down.ggLeft=-19;
		this._multi_down.ggTop=-50;
		this._multi_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._multi_down.ggVisible=true;
		this._multi_down.className='ggskin ggskin_svg ';
		this._multi_down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._multi_down.setAttribute('style',hs);
		this._multi_down.style[domTransform + 'Origin']='50% 50%';
		me._multi_down.ggIsActive=function() {
			return false;
		}
		me._multi_down.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._multi_down.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._full_screen.style[domTransition]='none';
			} else {
				me._full_screen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._full_screen.ggParameter.rx=0;me._full_screen.ggParameter.ry=0;
			me._full_screen.style[domTransform]=parameterToTransform(me._full_screen.ggParameter);
			if (me.player.transitionsDisabled) {
				me._normal_screen.style[domTransition]='none';
			} else {
				me._normal_screen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._normal_screen.ggParameter.rx=0;me._normal_screen.ggParameter.ry=0;
			me._normal_screen.style[domTransform]=parameterToTransform(me._normal_screen.ggParameter);
			if (me.player.transitionsDisabled) {
				me._play.style[domTransition]='none';
			} else {
				me._play.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._play.ggParameter.rx=0;me._play.ggParameter.ry=0;
			me._play.style[domTransform]=parameterToTransform(me._play.ggParameter);
			if (me.player.transitionsDisabled) {
				me._pause.style[domTransition]='none';
			} else {
				me._pause.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._pause.ggParameter.rx=0;me._pause.ggParameter.ry=0;
			me._pause.style[domTransform]=parameterToTransform(me._pause.ggParameter);
			if (me.player.transitionsDisabled) {
				me._right.style[domTransition]='none';
			} else {
				me._right.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._right.ggParameter.rx=0;me._right.ggParameter.ry=0;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
			if (me.player.transitionsDisabled) {
				me._left.style[domTransition]='none';
			} else {
				me._left.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._left.ggParameter.rx=0;me._left.ggParameter.ry=0;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
			if (me.player.transitionsDisabled) {
				me._up.style[domTransition]='none';
			} else {
				me._up.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._up.ggParameter.rx=0;me._up.ggParameter.ry=0;
			me._up.style[domTransform]=parameterToTransform(me._up.ggParameter);
			if (me.player.transitionsDisabled) {
				me._down.style[domTransition]='none';
			} else {
				me._down.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._down.ggParameter.rx=0;me._down.ggParameter.ry=0;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			if (me.player.transitionsDisabled) {
				me._zoom_in.style[domTransition]='none';
			} else {
				me._zoom_in.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_in.ggParameter.rx=0;me._zoom_in.ggParameter.ry=0;
			me._zoom_in.style[domTransform]=parameterToTransform(me._zoom_in.ggParameter);
			if (me.player.transitionsDisabled) {
				me._zoom_out.style[domTransition]='none';
			} else {
				me._zoom_out.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_out.ggParameter.rx=0;me._zoom_out.ggParameter.ry=0;
			me._zoom_out.style[domTransform]=parameterToTransform(me._zoom_out.ggParameter);
			me._button_down.style[domTransition]='none';
			me._button_down.style.visibility=(Number(me._button_down.style.opacity)>0||!me._button_down.style.opacity)?'inherit':'hidden';
			me._button_down.ggVisible=true;
		}
		this._multi_down.onmouseover=function () {
			me._multi_down__img.style.visibility='hidden';
			me._multi_down__imgo.style.visibility='inherit';
		}
		this._multi_down.onmouseout=function () {
			me._multi_down__img.style.visibility='inherit';
			me._multi_down__imgo.style.visibility='hidden';
		}
		this._multi_down.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._multi_down);
		this._button_down=document.createElement('div');
		this._button_down__img=document.createElement('img');
		this._button_down__img.className='ggskin ggskin_svg';
		this._button_down__img.setAttribute('src',basePath + 'images/button_down.svg');
		this._button_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_down__img['ondragstart']=function() { return false; };
		this._button_down.appendChild(this._button_down__img);
		this._button_down__imgo=document.createElement('img');
		this._button_down__imgo.className='ggskin ggskin_svg';
		this._button_down__imgo.setAttribute('src',basePath + 'images/button_down__o.svg');
		this._button_down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_down__imgo['ondragstart']=function() { return false; };
		this._button_down.appendChild(this._button_down__imgo);
		this._button_down.ggId="Button Down";
		this._button_down.ggLeft=-20;
		this._button_down.ggTop=-50;
		this._button_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_down.ggVisible=true;
		this._button_down.className='ggskin ggskin_svg ';
		this._button_down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._button_down.setAttribute('style',hs);
		this._button_down.style[domTransform + 'Origin']='50% 50%';
		me._button_down.ggIsActive=function() {
			return false;
		}
		me._button_down.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_down.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._full_screen.style[domTransition]='none';
			} else {
				me._full_screen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._full_screen.ggParameter.rx=130;me._full_screen.ggParameter.ry=-30;
			me._full_screen.style[domTransform]=parameterToTransform(me._full_screen.ggParameter);
			if (me.player.transitionsDisabled) {
				me._play.style[domTransition]='none';
			} else {
				me._play.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._play.ggParameter.rx=90;me._play.ggParameter.ry=-70;
			me._play.style[domTransform]=parameterToTransform(me._play.ggParameter);
			if (me.player.transitionsDisabled) {
				me._right.style[domTransition]='none';
			} else {
				me._right.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._right.ggParameter.rx=40;me._right.ggParameter.ry=-100;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
			if (me.player.transitionsDisabled) {
				me._down.style[domTransition]='none';
			} else {
				me._down.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._down.ggParameter.rx=0;me._down.ggParameter.ry=-80;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			if (me.player.transitionsDisabled) {
				me._up.style[domTransition]='none';
			} else {
				me._up.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._up.ggParameter.rx=0;me._up.ggParameter.ry=-120;
			me._up.style[domTransform]=parameterToTransform(me._up.ggParameter);
			if (me.player.transitionsDisabled) {
				me._left.style[domTransition]='none';
			} else {
				me._left.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._left.ggParameter.rx=-40;me._left.ggParameter.ry=-100;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
			if (me.player.transitionsDisabled) {
				me._zoom_out.style[domTransition]='none';
			} else {
				me._zoom_out.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_out.ggParameter.rx=-90;me._zoom_out.ggParameter.ry=-70;
			me._zoom_out.style[domTransform]=parameterToTransform(me._zoom_out.ggParameter);
			if (me.player.transitionsDisabled) {
				me._zoom_in.style[domTransition]='none';
			} else {
				me._zoom_in.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_in.ggParameter.rx=-130;me._zoom_in.ggParameter.ry=-30;
			me._zoom_in.style[domTransform]=parameterToTransform(me._zoom_in.ggParameter);
			if (me.player.transitionsDisabled) {
				me._pause.style[domTransition]='none';
			} else {
				me._pause.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._pause.ggParameter.rx=90;me._pause.ggParameter.ry=-70;
			me._pause.style[domTransform]=parameterToTransform(me._pause.ggParameter);
			if (me.player.transitionsDisabled) {
				me._normal_screen.style[domTransition]='none';
			} else {
				me._normal_screen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._normal_screen.ggParameter.rx=130;me._normal_screen.ggParameter.ry=-30;
			me._normal_screen.style[domTransform]=parameterToTransform(me._normal_screen.ggParameter);
			me._button_down.style[domTransition]='none';
			me._button_down.style.visibility='hidden';
			me._button_down.ggVisible=false;
		}
		this._button_down.onmouseover=function () {
			me._button_down__img.style.visibility='hidden';
			me._button_down__imgo.style.visibility='inherit';
		}
		this._button_down.onmouseout=function () {
			me._button_down__img.style.visibility='inherit';
			me._button_down__imgo.style.visibility='hidden';
		}
		this._button_down.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._button_down);
		this._facebook=document.createElement('div');
		this._facebook__img=document.createElement('img');
		this._facebook__img.className='ggskin ggskin_svg';
		this._facebook__img.setAttribute('src',basePath + 'images/facebook.svg');
		this._facebook__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._facebook__img['ondragstart']=function() { return false; };
		this._facebook.appendChild(this._facebook__img);
		this._facebook__imgo=document.createElement('img');
		this._facebook__imgo.className='ggskin ggskin_svg';
		this._facebook__imgo.setAttribute('src',basePath + 'images/facebook__o.svg');
		this._facebook__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._facebook__imgo['ondragstart']=function() { return false; };
		this._facebook.appendChild(this._facebook__imgo);
		this._facebook.ggId="facebook";
		this._facebook.ggLeft=-49;
		this._facebook.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._facebook.ggVisible=true;
		this._facebook.className='ggskin ggskin_svg ';
		this._facebook.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		this._facebook.setAttribute('style',hs);
		this._facebook.style[domTransform + 'Origin']='50% 50%';
		me._facebook.ggIsActive=function() {
			return false;
		}
		me._facebook.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._facebook.onclick=function () {
			me.player.openUrl("http:\/\/www.virtual-land.ir","");
		}
		this._facebook.onmouseover=function () {
			me._facebook__img.style.visibility='hidden';
			me._facebook__imgo.style.visibility='inherit';
		}
		this._facebook.onmouseout=function () {
			me._facebook__img.style.visibility='inherit';
			me._facebook__imgo.style.visibility='hidden';
		}
		this._facebook.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._facebook);
		this._multi_right=document.createElement('div');
		this._multi_right__img=document.createElement('img');
		this._multi_right__img.className='ggskin ggskin_svg';
		this._multi_right__img.setAttribute('src',basePath + 'images/multi_right.svg');
		this._multi_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._multi_right__img['ondragstart']=function() { return false; };
		this._multi_right.appendChild(this._multi_right__img);
		this._multi_right__imgo=document.createElement('img');
		this._multi_right__imgo.className='ggskin ggskin_svg';
		this._multi_right__imgo.setAttribute('src',basePath + 'images/multi_right__o.svg');
		this._multi_right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._multi_right__imgo['ondragstart']=function() { return false; };
		this._multi_right.appendChild(this._multi_right__imgo);
		this._multi_right.ggId="Multi right";
		this._multi_right.ggLeft=-51;
		this._multi_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._multi_right.ggVisible=true;
		this._multi_right.className='ggskin ggskin_svg ';
		this._multi_right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -51px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._multi_right.setAttribute('style',hs);
		this._multi_right.style[domTransform + 'Origin']='50% 50%';
		me._multi_right.ggIsActive=function() {
			return false;
		}
		me._multi_right.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._multi_right.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._info.style[domTransition]='none';
			} else {
				me._info.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._info.ggParameter.rx=0;me._info.ggParameter.ry=0;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
			if (me.player.transitionsDisabled) {
				me._help.style[domTransition]='none';
			} else {
				me._help.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._help.ggParameter.rx=0;me._help.ggParameter.ry=0;
			me._help.style[domTransform]=parameterToTransform(me._help.ggParameter);
			if (me.player.transitionsDisabled) {
				me._facebook.style[domTransition]='none';
			} else {
				me._facebook.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._facebook.ggParameter.rx=0;me._facebook.ggParameter.ry=0;
			me._facebook.style[domTransform]=parameterToTransform(me._facebook.ggParameter);
			me._button_right.style[domTransition]='none';
			me._button_right.style.visibility=(Number(me._button_right.style.opacity)>0||!me._button_right.style.opacity)?'inherit':'hidden';
			me._button_right.ggVisible=true;
			me._multi_right.style[domTransition]='none';
			me._multi_right.style.visibility='hidden';
			me._multi_right.ggVisible=false;
		}
		this._multi_right.onmouseover=function () {
			me._multi_right__img.style.visibility='hidden';
			me._multi_right__imgo.style.visibility='inherit';
		}
		this._multi_right.onmouseout=function () {
			me._multi_right__img.style.visibility='inherit';
			me._multi_right__imgo.style.visibility='hidden';
		}
		this._multi_right.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._multi_right);
		this._button_right=document.createElement('div');
		this._button_right__img=document.createElement('img');
		this._button_right__img.className='ggskin ggskin_svg';
		this._button_right__img.setAttribute('src',basePath + 'images/button_right.svg');
		this._button_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_right__img['ondragstart']=function() { return false; };
		this._button_right.appendChild(this._button_right__img);
		this._button_right__imgo=document.createElement('img');
		this._button_right__imgo.className='ggskin ggskin_svg';
		this._button_right__imgo.setAttribute('src',basePath + 'images/button_right__o.svg');
		this._button_right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_right__imgo['ondragstart']=function() { return false; };
		this._button_right.appendChild(this._button_right__imgo);
		this._button_right.ggId="Button Right";
		this._button_right.ggLeft=-53;
		this._button_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_right.ggVisible=true;
		this._button_right.className='ggskin ggskin_svg ';
		this._button_right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._button_right.setAttribute('style',hs);
		this._button_right.style[domTransform + 'Origin']='50% 50%';
		me._button_right.ggIsActive=function() {
			return false;
		}
		me._button_right.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_right.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._info.style[domTransition]='none';
			} else {
				me._info.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._info.ggParameter.rx=0;me._info.ggParameter.ry=80;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
			if (me.player.transitionsDisabled) {
				me._help.style[domTransition]='none';
			} else {
				me._help.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._help.ggParameter.rx=-70;me._help.ggParameter.ry=60;
			me._help.style[domTransform]=parameterToTransform(me._help.ggParameter);
			if (me.player.transitionsDisabled) {
				me._facebook.style[domTransition]='none';
			} else {
				me._facebook.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._facebook.ggParameter.rx=-100;me._facebook.ggParameter.ry=0;
			me._facebook.style[domTransform]=parameterToTransform(me._facebook.ggParameter);
			me._multi_right.style[domTransition]='none';
			me._multi_right.style.visibility=(Number(me._multi_right.style.opacity)>0||!me._multi_right.style.opacity)?'inherit':'hidden';
			me._multi_right.ggVisible=true;
			me._button_right.style[domTransition]='none';
			me._button_right.style.visibility='hidden';
			me._button_right.ggVisible=false;
		}
		this._button_right.onmouseover=function () {
			me._button_right__img.style.visibility='hidden';
			me._button_right__imgo.style.visibility='inherit';
		}
		this._button_right.onmouseout=function () {
			me._button_right__img.style.visibility='inherit';
			me._button_right__imgo.style.visibility='hidden';
		}
		this._button_right.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._button_right);
		this._help_notice=document.createElement('div');
		this._help_notice__img=document.createElement('img');
		this._help_notice__img.className='ggskin ggskin_image';
		this._help_notice__img.setAttribute('src',basePath + 'images/help_notice.png');
		this._help_notice__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._help_notice__img.className='ggskin ggskin_image';
		this._help_notice__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._help_notice__img);
		this._help_notice.appendChild(this._help_notice__img);
		this._help_notice.ggId="Help Notice";
		this._help_notice.ggLeft=-159;
		this._help_notice.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._help_notice.ggVisible=false;
		this._help_notice.className='ggskin ggskin_image ';
		this._help_notice.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 630px;';
		hs+='left : -159px;';
		hs+='position : absolute;';
		hs+='top : -86px;';
		hs+='visibility : hidden;';
		hs+='width : 332px;';
		this._help_notice.setAttribute('style',hs);
		this._help_notice.style[domTransform + 'Origin']='50% 50%';
		me._help_notice.ggIsActive=function() {
			return false;
		}
		me._help_notice.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._help_notice.onclick=function () {
			me._help_notice.style[domTransition]='none';
			me._help_notice.style.visibility='hidden';
			me._help_notice.ggVisible=false;
		}
		this._help_notice.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._help_notice);
		this._map_cover=document.createElement('div');
		this._map_cover.ggId="map cover";
		this._map_cover.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_cover.ggVisible=false;
		this._map_cover.className='ggskin ggskin_rectangle ';
		this._map_cover.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(0,170,255,0.0196078);';
		hs+='border : 3px solid #00aaff;';
		hs+='height : 385px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 561px;';
		this._map_cover.setAttribute('style',hs);
		this._map_cover.style[domTransform + 'Origin']='50% 50%';
		me._map_cover.ggIsActive=function() {
			return false;
		}
		me._map_cover.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map_cover.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._map_cover);
		this._map=document.createElement('div');
		this._map.ggId="map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=false;
		this._map.className='ggskin ggskin_rectangle ';
		this._map.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 3px solid #ffffff;';
		hs+='height : 500px;';
		hs+='left : 67px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : hidden;';
		hs+='width : 731px;';
		this._map.setAttribute('style',hs);
		this._map.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		me._map.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map.ggUpdatePosition=function () {
		}
		this._map_display=document.createElement('div');
		this._map_display__text=document.createElement('div');
		this._map_display.className='ggskin ggskin_textdiv';
		this._map_display.ggTextDiv=this._map_display__text;
		this._map_display.ggId="map display";
		this._map_display.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_display.ggVisible=true;
		this._map_display.className='ggskin ggskin_text ';
		this._map_display.ggType='text';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 598px;';
		this._map_display.setAttribute('style',hs);
		this._map_display.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 598px;';
		hs+='height: 400px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._map_display__text.setAttribute('style',hs);
		this._map_display__text.innerHTML="<div id=\"mapdiv\" style=\"width:600px; height:400px\">map goes here!<\/div>";
		this._map_display.appendChild(this._map_display__text);
		me._map_display.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_display.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_display.ggUpdatePosition=function () {
		}
		this._map.appendChild(this._map_display);
		this._map_title=document.createElement('div');
		this._map_title__text=document.createElement('div');
		this._map_title.className='ggskin ggskin_textdiv';
		this._map_title.ggTextDiv=this._map_title__text;
		this._map_title.ggId="map title";
		this._map_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_title.ggVisible=true;
		this._map_title.className='ggskin ggskin_text ';
		this._map_title.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 17px;';
		hs+='left : 138px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 379px;';
		this._map_title.setAttribute('style',hs);
		this._map_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 379px;';
		hs+='height: 17px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._map_title__text.setAttribute('style',hs);
		this._map_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_title.ggUpdateText();
		this._map_title.appendChild(this._map_title__text);
		me._map_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_title.onclick=function () {
			me.player.openUrl("http:\/\/www.virtual-land.ir","_blank");
		}
		this._map_title.ggUpdatePosition=function () {
		}
		this._map.appendChild(this._map_title);
		this.divSkin.appendChild(this._map);
		this._multi_left2=document.createElement('div');
		this._multi_left2__img=document.createElement('img');
		this._multi_left2__img.className='ggskin ggskin_svg';
		this._multi_left2__img.setAttribute('src',basePath + 'images/multi_left2.svg');
		this._multi_left2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._multi_left2__img['ondragstart']=function() { return false; };
		this._multi_left2.appendChild(this._multi_left2__img);
		this._multi_left2__imgo=document.createElement('img');
		this._multi_left2__imgo.className='ggskin ggskin_svg';
		this._multi_left2__imgo.setAttribute('src',basePath + 'images/multi_left2__o.svg');
		this._multi_left2__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._multi_left2__imgo['ondragstart']=function() { return false; };
		this._multi_left2.appendChild(this._multi_left2__imgo);
		this._multi_left2.ggId="Multi left2";
		this._multi_left2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._multi_left2.ggVisible=true;
		this._multi_left2.className='ggskin ggskin_svg ';
		this._multi_left2.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._multi_left2.setAttribute('style',hs);
		this._multi_left2.style[domTransform + 'Origin']='50% 50%';
		me._multi_left2.ggIsActive=function() {
			return false;
		}
		me._multi_left2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._multi_left2.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._multi_left2.style[domTransition]='none';
			} else {
				me._multi_left2.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._multi_left2.ggParameter.rx=0;me._multi_left2.ggParameter.ry=0;
			me._multi_left2.style[domTransform]=parameterToTransform(me._multi_left2.ggParameter);
			if (me.player.transitionsDisabled) {
				me._mapj.style[domTransition]='none';
			} else {
				me._mapj.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._mapj.ggParameter.rx=-400;me._mapj.ggParameter.ry=-450;
			me._mapj.style[domTransform]=parameterToTransform(me._mapj.ggParameter);
		}
		this._multi_left2.onmouseover=function () {
			me._multi_left2__img.style.visibility='hidden';
			me._multi_left2__imgo.style.visibility='inherit';
		}
		this._multi_left2.onmouseout=function () {
			me._multi_left2__img.style.visibility='inherit';
			me._multi_left2__imgo.style.visibility='hidden';
		}
		this._multi_left2.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._multi_left2);
		this._setareh=document.createElement('div');
		this._setareh__text=document.createElement('div');
		this._setareh.className='ggskin ggskin_textdiv';
		this._setareh.ggTextDiv=this._setareh__text;
		this._setareh.ggId="setareh";
		this._setareh.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._setareh.ggVisible=false;
		this._setareh.className='ggskin ggskin_text ';
		this._setareh.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 62px;';
		hs+='visibility : hidden;';
		hs+='width : 111px;';
		this._setareh.setAttribute('style',hs);
		this._setareh.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 111px;';
		hs+='height: 31px;';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._setareh__text.setAttribute('style',hs);
		this._setareh__text.innerHTML="\u0646\u0642\u0634\u0647 \u062f\u0631\u0647 \u0633\u062a\u0627\u0631\u06af\u0627\u0646";
		this._setareh.appendChild(this._setareh__text);
		me._setareh.ggIsActive=function() {
			return false;
		}
		me._setareh.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._setareh.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._setareh);
		this._mapj=document.createElement('div');
		this._mapj__img=document.createElement('img');
		this._mapj__img.className='ggskin ggskin_image';
		this._mapj__img.setAttribute('src',basePath + 'images/mapj.png');
		this._mapj__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapj__img.className='ggskin ggskin_image';
		this._mapj__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._mapj__img);
		this._mapj.appendChild(this._mapj__img);
		this._mapj.ggId="mapj";
		this._mapj.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapj.ggVisible=false;
		this._mapj.className='ggskin ggskin_image ';
		this._mapj.ggType='image';
		hs ='';
		hs+='height : 364px;';
		hs+='left : 79px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 550px;';
		this._mapj.setAttribute('style',hs);
		this._mapj.style[domTransform + 'Origin']='50% 50%';
		me._mapj.ggIsActive=function() {
			return false;
		}
		me._mapj.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._mapj.ggUpdatePosition=function () {
		}
		this._marker_node1=document.createElement('div');
		this._marker_node1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._marker_node1);
		this._marker_node1.ggId="marker_node1";
		this._marker_node1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node1.ggVisible=true;
		this._marker_node1.className='ggskin ggskin_mark ';
		this._marker_node1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 462px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node1.setAttribute('style',hs);
		this._marker_node1.style[domTransform + 'Origin']='50% 50%';
		me._marker_node1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node1.onclick=function () {
			me.player.openNext('{node1}');
		}
		this._marker_node1.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node1.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node1.ggUpdateConditionNodeChange=function () {
				me._marker_node1__normal.ggNodeChangeMain();
				me._marker_node1__active.ggNodeChangeMain();
		}
		this._marker_node1.ggUpdatePosition=function () {
		}
		this._marker_node1.ggNodeChange=function () {
			me._marker_node1.ggUpdateConditionNodeChange();
		}
		this._mapj.appendChild(this._marker_node1);
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
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node2.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node2);
		this._marker_node3=document.createElement('div');
		this._marker_node3.ggMarkerNodeId='{node3}';
		nodeMarker.push(this._marker_node3);
		this._marker_node3.ggId="marker_node3";
		this._marker_node3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node3.ggVisible=true;
		this._marker_node3.className='ggskin ggskin_mark ';
		this._marker_node3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 229px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node3.setAttribute('style',hs);
		this._marker_node3.style[domTransform + 'Origin']='50% 50%';
		me._marker_node3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node3.onclick=function () {
			me.player.openNext('{node3}');
		}
		this._marker_node3.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node3.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node3.ggUpdateConditionNodeChange=function () {
				me._marker_node3__normal.ggNodeChangeMain();
				me._marker_node3__active.ggNodeChangeMain();
		}
		this._marker_node3.ggUpdatePosition=function () {
		}
		this._marker_node3.ggNodeChange=function () {
			me._marker_node3.ggUpdateConditionNodeChange();
		}
		this._mapj.appendChild(this._marker_node3);
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
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node4.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node4);
		this._marker_node5=document.createElement('div');
		this._marker_node5.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._marker_node5);
		this._marker_node5.ggId="marker_node5";
		this._marker_node5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node5.ggVisible=true;
		this._marker_node5.className='ggskin ggskin_mark ';
		this._marker_node5.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 188px;';
		hs+='position : absolute;';
		hs+='top : 173px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node5.setAttribute('style',hs);
		this._marker_node5.style[domTransform + 'Origin']='50% 50%';
		me._marker_node5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node5.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node5.onclick=function () {
			me.player.openNext('{node5}');
		}
		this._marker_node5.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node5.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node5.ggUpdateConditionNodeChange=function () {
				me._marker_node5__normal.ggNodeChangeMain();
				me._marker_node5__active.ggNodeChangeMain();
		}
		this._marker_node5.ggUpdatePosition=function () {
		}
		this._marker_node5.ggNodeChange=function () {
			me._marker_node5.ggUpdateConditionNodeChange();
		}
		this._mapj.appendChild(this._marker_node5);
		this._marker_node6=document.createElement('div');
		this._marker_node6.ggMarkerNodeId='{node6}';
		nodeMarker.push(this._marker_node6);
		this._marker_node6.ggId="marker_node6";
		this._marker_node6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node6.ggVisible=true;
		this._marker_node6.className='ggskin ggskin_mark ';
		this._marker_node6.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 197px;';
		hs+='position : absolute;';
		hs+='top : 214px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node6.setAttribute('style',hs);
		this._marker_node6.style[domTransform + 'Origin']='50% 50%';
		me._marker_node6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node6.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node6.onclick=function () {
			me.player.openNext('{node6}');
		}
		this._marker_node6.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node6.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node6.ggUpdateConditionNodeChange=function () {
				me._marker_node6__normal.ggNodeChangeMain();
				me._marker_node6__active.ggNodeChangeMain();
		}
		this._marker_node6.ggUpdatePosition=function () {
		}
		this._marker_node6.ggNodeChange=function () {
			me._marker_node6.ggUpdateConditionNodeChange();
		}
		this._mapj.appendChild(this._marker_node6);
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
		hs+='left : 169px;';
		hs+='position : absolute;';
		hs+='top : 203px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node7.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node7);
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
		hs+='left : 144px;';
		hs+='position : absolute;';
		hs+='top : 215px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node8.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node8);
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
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 259px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node9.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node9);
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
		hs+='left : 112px;';
		hs+='position : absolute;';
		hs+='top : 240px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node10.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node10);
		this._marker_node11=document.createElement('div');
		this._marker_node11.ggMarkerNodeId='{node11}';
		nodeMarker.push(this._marker_node11);
		this._marker_node11.ggId="marker_node11";
		this._marker_node11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node11.ggVisible=true;
		this._marker_node11.className='ggskin ggskin_mark ';
		this._marker_node11.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 116px;';
		hs+='position : absolute;';
		hs+='top : 276px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node11.setAttribute('style',hs);
		this._marker_node11.style[domTransform + 'Origin']='50% 50%';
		me._marker_node11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node11.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node11.onclick=function () {
			me.player.openNext('{node11}');
		}
		this._marker_node11.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node11.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node11.ggUpdateConditionNodeChange=function () {
				me._marker_node11__normal.ggNodeChangeMain();
				me._marker_node11__active.ggNodeChangeMain();
		}
		this._marker_node11.ggUpdatePosition=function () {
		}
		this._marker_node11.ggNodeChange=function () {
			me._marker_node11.ggUpdateConditionNodeChange();
		}
		this._mapj.appendChild(this._marker_node11);
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
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 294px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node12.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node12);
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
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node13.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node13);
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
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : 216px;';
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
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node14.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
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
		this._mapj.appendChild(this._marker_node14);
		this.divSkin.appendChild(this._mapj);
		this._multi_left3=document.createElement('div');
		this._multi_left3__img=document.createElement('img');
		this._multi_left3__img.className='ggskin ggskin_svg';
		this._multi_left3__img.setAttribute('src',basePath + 'images/multi_left3.svg');
		this._multi_left3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._multi_left3__img['ondragstart']=function() { return false; };
		this._multi_left3.appendChild(this._multi_left3__img);
		this._multi_left3__imgo=document.createElement('img');
		this._multi_left3__imgo.className='ggskin ggskin_svg';
		this._multi_left3__imgo.setAttribute('src',basePath + 'images/multi_left3__o.svg');
		this._multi_left3__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._multi_left3__imgo['ondragstart']=function() { return false; };
		this._multi_left3.appendChild(this._multi_left3__imgo);
		this._multi_left3.ggId="Multi left3";
		this._multi_left3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._multi_left3.ggVisible=true;
		this._multi_left3.className='ggskin ggskin_svg ';
		this._multi_left3.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 89px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._multi_left3.setAttribute('style',hs);
		this._multi_left3.style[domTransform + 'Origin']='50% 50%';
		me._multi_left3.ggIsActive=function() {
			return false;
		}
		me._multi_left3.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._multi_left3.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._multi_left3.style[domTransition]='none';
			} else {
				me._multi_left3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._multi_left3.ggParameter.rx=0;me._multi_left3.ggParameter.ry=0;
			me._multi_left3.style[domTransform]=parameterToTransform(me._multi_left3.ggParameter);
			if (me.player.transitionsDisabled) {
				me._mapj.style[domTransition]='none';
			} else {
				me._mapj.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._mapj.ggParameter.rx=-350;me._mapj.ggParameter.ry=-438;
			me._mapj.style[domTransform]=parameterToTransform(me._mapj.ggParameter);
		}
		this._multi_left3.onmouseover=function () {
			me._multi_left3__img.style.visibility='hidden';
			me._multi_left3__imgo.style.visibility='inherit';
		}
		this._multi_left3.onmouseout=function () {
			me._multi_left3__img.style.visibility='inherit';
			me._multi_left3__imgo.style.visibility='hidden';
		}
		this._multi_left3.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._multi_left3);
		this._button_left3=document.createElement('div');
		this._button_left3__img=document.createElement('img');
		this._button_left3__img.className='ggskin ggskin_svg';
		this._button_left3__img.setAttribute('src',basePath + 'images/button_left3.svg');
		this._button_left3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_left3__img['ondragstart']=function() { return false; };
		this._button_left3.appendChild(this._button_left3__img);
		this._button_left3__imgo=document.createElement('img');
		this._button_left3__imgo.className='ggskin ggskin_svg';
		this._button_left3__imgo.setAttribute('src',basePath + 'images/button_left3__o.svg');
		this._button_left3__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_left3__imgo['ondragstart']=function() { return false; };
		this._button_left3.appendChild(this._button_left3__imgo);
		this._button_left3.ggId="Button Left3";
		this._button_left3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_left3.ggVisible=true;
		this._button_left3.className='ggskin ggskin_svg ';
		this._button_left3.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 58px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		this._button_left3.setAttribute('style',hs);
		this._button_left3.style[domTransform + 'Origin']='50% 50%';
		me._button_left3.ggIsActive=function() {
			return false;
		}
		me._button_left3.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_left3.onclick=function () {
			me._mapj.ggVisible = !me._mapj.ggVisible;
			me._mapj.style[domTransition]='none';
			me._mapj.style.visibility=((me._mapj.ggVisible)&&(Number(me._mapj.style.opacity)>0||!me._mapj.style.opacity))?'inherit':'hidden';
			me._map_cover.ggVisible = !me._map_cover.ggVisible;
			me._map_cover.style[domTransition]='none';
			me._map_cover.style.visibility=((me._map_cover.ggVisible)&&(Number(me._map_cover.style.opacity)>0||!me._map_cover.style.opacity))?'inherit':'hidden';
			me._map_cover_2.style[domTransition]='none';
			me._map_cover_2.style.visibility='hidden';
			me._map_cover_2.ggVisible=false;
		}
		this._button_left3.onmouseover=function () {
			me._setareh.style[domTransition]='none';
			me._setareh.style.visibility=(Number(me._setareh.style.opacity)>0||!me._setareh.style.opacity)?'inherit':'hidden';
			me._setareh.ggVisible=true;
			me._button_left3__img.style.visibility='hidden';
			me._button_left3__imgo.style.visibility='inherit';
		}
		this._button_left3.onmouseout=function () {
			me._setareh.style[domTransition]='none';
			me._setareh.style.visibility='hidden';
			me._setareh.ggVisible=false;
			me._button_left3__img.style.visibility='inherit';
			me._button_left3__imgo.style.visibility='hidden';
		}
		this._button_left3.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._button_left3);
		this._playmusic=document.createElement('div');
		this._playmusic__img=document.createElement('img');
		this._playmusic__img.className='ggskin ggskin_svg';
		this._playmusic__img.setAttribute('src',basePath + 'images/playmusic.svg');
		this._playmusic__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._playmusic__img['ondragstart']=function() { return false; };
		this._playmusic.appendChild(this._playmusic__img);
		this._playmusic__imgo=document.createElement('img');
		this._playmusic__imgo.className='ggskin ggskin_svg';
		this._playmusic__imgo.setAttribute('src',basePath + 'images/playmusic__o.svg');
		this._playmusic__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._playmusic__imgo['ondragstart']=function() { return false; };
		this._playmusic.appendChild(this._playmusic__imgo);
		this._playmusic.ggId="playmusic";
		this._playmusic.ggTop=-51;
		this._playmusic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._playmusic.ggVisible=true;
		this._playmusic.className='ggskin ggskin_svg ';
		this._playmusic.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : -51px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._playmusic.setAttribute('style',hs);
		this._playmusic.style[domTransform + 'Origin']='50% 50%';
		me._playmusic.ggIsActive=function() {
			return false;
		}
		me._playmusic.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._playmusic.onclick=function () {
			me.player.playSound("","");
		}
		this._playmusic.onmouseover=function () {
			me._playmusic__img.style.visibility='hidden';
			me._playmusic__imgo.style.visibility='inherit';
		}
		this._playmusic.onmouseout=function () {
			me._playmusic__img.style.visibility='inherit';
			me._playmusic__imgo.style.visibility='hidden';
		}
		this._playmusic.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._playmusic);
		this._pausemusic=document.createElement('div');
		this._pausemusic__img=document.createElement('img');
		this._pausemusic__img.className='ggskin ggskin_svg';
		this._pausemusic__img.setAttribute('src',basePath + 'images/pausemusic.svg');
		this._pausemusic__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pausemusic__img['ondragstart']=function() { return false; };
		this._pausemusic.appendChild(this._pausemusic__img);
		this._pausemusic__imgo=document.createElement('img');
		this._pausemusic__imgo.className='ggskin ggskin_svg';
		this._pausemusic__imgo.setAttribute('src',basePath + 'images/pausemusic__o.svg');
		this._pausemusic__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._pausemusic__imgo['ondragstart']=function() { return false; };
		this._pausemusic.appendChild(this._pausemusic__imgo);
		this._pausemusic.ggId="pausemusic";
		this._pausemusic.ggTop=-53;
		this._pausemusic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pausemusic.ggVisible=true;
		this._pausemusic.className='ggskin ggskin_svg ';
		this._pausemusic.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : -53px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._pausemusic.setAttribute('style',hs);
		this._pausemusic.style[domTransform + 'Origin']='50% 50%';
		me._pausemusic.ggIsActive=function() {
			return false;
		}
		me._pausemusic.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._pausemusic.onclick=function () {
			me.player.pauseSound("");
		}
		this._pausemusic.onmouseover=function () {
			me._pausemusic__img.style.visibility='hidden';
			me._pausemusic__imgo.style.visibility='inherit';
		}
		this._pausemusic.onmouseout=function () {
			me._pausemusic__img.style.visibility='inherit';
			me._pausemusic__imgo.style.visibility='hidden';
		}
		this._pausemusic.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._pausemusic);
		this._stopmusic=document.createElement('div');
		this._stopmusic__img=document.createElement('img');
		this._stopmusic__img.className='ggskin ggskin_svg';
		this._stopmusic__img.setAttribute('src',basePath + 'images/stopmusic.svg');
		this._stopmusic__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._stopmusic__img['ondragstart']=function() { return false; };
		this._stopmusic.appendChild(this._stopmusic__img);
		this._stopmusic__imgo=document.createElement('img');
		this._stopmusic__imgo.className='ggskin ggskin_svg';
		this._stopmusic__imgo.setAttribute('src',basePath + 'images/stopmusic__o.svg');
		this._stopmusic__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._stopmusic__imgo['ondragstart']=function() { return false; };
		this._stopmusic.appendChild(this._stopmusic__imgo);
		this._stopmusic.ggId="stopmusic";
		this._stopmusic.ggTop=-49;
		this._stopmusic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stopmusic.ggVisible=true;
		this._stopmusic.className='ggskin ggskin_svg ';
		this._stopmusic.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		this._stopmusic.setAttribute('style',hs);
		this._stopmusic.style[domTransform + 'Origin']='50% 50%';
		me._stopmusic.ggIsActive=function() {
			return false;
		}
		me._stopmusic.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._stopmusic.onclick=function () {
			me.player.stopSound("");
		}
		this._stopmusic.onmouseover=function () {
			me._stopmusic__img.style.visibility='hidden';
			me._stopmusic__imgo.style.visibility='inherit';
		}
		this._stopmusic.onmouseout=function () {
			me._stopmusic__img.style.visibility='inherit';
			me._stopmusic__imgo.style.visibility='hidden';
		}
		this._stopmusic.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._stopmusic);
		this._multi_music=document.createElement('div');
		this._multi_music__img=document.createElement('img');
		this._multi_music__img.className='ggskin ggskin_svg';
		this._multi_music__img.setAttribute('src',basePath + 'images/multi_music.svg');
		this._multi_music__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._multi_music__img['ondragstart']=function() { return false; };
		this._multi_music.appendChild(this._multi_music__img);
		this._multi_music__imgo=document.createElement('img');
		this._multi_music__imgo.className='ggskin ggskin_svg';
		this._multi_music__imgo.setAttribute('src',basePath + 'images/multi_music__o.svg');
		this._multi_music__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._multi_music__imgo['ondragstart']=function() { return false; };
		this._multi_music.appendChild(this._multi_music__imgo);
		this._multi_music.ggId="Multi music";
		this._multi_music.ggTop=-52;
		this._multi_music.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._multi_music.ggVisible=true;
		this._multi_music.className='ggskin ggskin_svg ';
		this._multi_music.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : -52px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		this._multi_music.setAttribute('style',hs);
		this._multi_music.style[domTransform + 'Origin']='50% 50%';
		me._multi_music.ggIsActive=function() {
			return false;
		}
		me._multi_music.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._multi_music.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._playmusic.style[domTransition]='none';
			} else {
				me._playmusic.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._playmusic.ggParameter.rx=0;me._playmusic.ggParameter.ry=0;
			me._playmusic.style[domTransform]=parameterToTransform(me._playmusic.ggParameter);
			if (me.player.transitionsDisabled) {
				me._pausemusic.style[domTransition]='none';
			} else {
				me._pausemusic.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._pausemusic.ggParameter.rx=0;me._pausemusic.ggParameter.ry=0;
			me._pausemusic.style[domTransform]=parameterToTransform(me._pausemusic.ggParameter);
			if (me.player.transitionsDisabled) {
				me._stopmusic.style[domTransition]='none';
			} else {
				me._stopmusic.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._stopmusic.ggParameter.rx=0;me._stopmusic.ggParameter.ry=0;
			me._stopmusic.style[domTransform]=parameterToTransform(me._stopmusic.ggParameter);
			me._music.style[domTransition]='none';
			me._music.style.visibility=(Number(me._music.style.opacity)>0||!me._music.style.opacity)?'inherit':'hidden';
			me._music.ggVisible=true;
			me._multi_music.style[domTransition]='none';
			me._multi_music.style.visibility='hidden';
			me._multi_music.ggVisible=false;
		}
		this._multi_music.onmouseover=function () {
			me._multi_music__img.style.visibility='hidden';
			me._multi_music__imgo.style.visibility='inherit';
		}
		this._multi_music.onmouseout=function () {
			me._multi_music__img.style.visibility='inherit';
			me._multi_music__imgo.style.visibility='hidden';
		}
		this._multi_music.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._multi_music);
		this._music=document.createElement('div');
		this._music__img=document.createElement('img');
		this._music__img.className='ggskin ggskin_svg';
		this._music__img.setAttribute('src',basePath + 'images/music.svg');
		this._music__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._music__img['ondragstart']=function() { return false; };
		this._music.appendChild(this._music__img);
		this._music__imgo=document.createElement('img');
		this._music__imgo.className='ggskin ggskin_svg';
		this._music__imgo.setAttribute('src',basePath + 'images/music__o.svg');
		this._music__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._music__imgo['ondragstart']=function() { return false; };
		this._music.appendChild(this._music__imgo);
		this._music.ggId="music";
		this._music.ggTop=-50;
		this._music.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._music.ggVisible=true;
		this._music.className='ggskin ggskin_svg ';
		this._music.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		this._music.setAttribute('style',hs);
		this._music.style[domTransform + 'Origin']='50% 50%';
		me._music.ggIsActive=function() {
			return false;
		}
		me._music.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._music.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._playmusic.style[domTransition]='none';
			} else {
				me._playmusic.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._playmusic.ggParameter.rx=0;me._playmusic.ggParameter.ry=-80;
			me._playmusic.style[domTransform]=parameterToTransform(me._playmusic.ggParameter);
			if (me.player.transitionsDisabled) {
				me._pausemusic.style[domTransition]='none';
			} else {
				me._pausemusic.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._pausemusic.ggParameter.rx=70;me._pausemusic.ggParameter.ry=-60;
			me._pausemusic.style[domTransform]=parameterToTransform(me._pausemusic.ggParameter);
			if (me.player.transitionsDisabled) {
				me._stopmusic.style[domTransition]='none';
			} else {
				me._stopmusic.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._stopmusic.ggParameter.rx=100;me._stopmusic.ggParameter.ry=0;
			me._stopmusic.style[domTransform]=parameterToTransform(me._stopmusic.ggParameter);
			me._multi_music.style[domTransition]='none';
			me._multi_music.style.visibility=(Number(me._multi_music.style.opacity)>0||!me._multi_music.style.opacity)?'inherit':'hidden';
			me._multi_music.ggVisible=true;
			me._music.style[domTransition]='none';
			me._music.style.visibility='hidden';
			me._music.ggVisible=false;
		}
		this._music.onmouseover=function () {
			me._music__img.style.visibility='hidden';
			me._music__imgo.style.visibility='inherit';
		}
		this._music.onmouseout=function () {
			me._music__img.style.visibility='inherit';
			me._music__imgo.style.visibility='hidden';
		}
		this._music.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._music);
		this._radar=document.createElement('div');
		this._radar__img=document.createElement('img');
		this._radar__img.className='ggskin ggskin_image';
		this._radar__img.setAttribute('src',basePath + 'images/radar.png');
		this._radar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radar__img.className='ggskin ggskin_image';
		this._radar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar__img);
		this._radar.appendChild(this._radar__img);
		this._radar.ggId="radar";
		this._radar.ggLeft=-87;
		this._radar.ggTop=-86;
		this._radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar.ggVisible=true;
		this._radar.className='ggskin ggskin_image ';
		this._radar.ggType='image';
		hs ='';
		hs+='height : 85px;';
		hs+='left : -87px;';
		hs+='position : absolute;';
		hs+='top : -86px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		this._radar.setAttribute('style',hs);
		this._radar.style[domTransform + 'Origin']='50% 50%';
		me._radar.ggIsActive=function() {
			return false;
		}
		me._radar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._radar.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._radar_beam=document.createElement('div');
		this._radar_beam__img=document.createElement('img');
		this._radar_beam__img.className='ggskin ggskin_image';
		this._radar_beam__img.setAttribute('src',basePath + 'images/radar_beam.png');
		this._radar_beam__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radar_beam__img.className='ggskin ggskin_image';
		this._radar_beam__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar_beam__img);
		this._radar_beam.appendChild(this._radar_beam__img);
		this._radar_beam.ggId="radar beam";
		this._radar_beam.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._radar_beam.ggVisible=true;
		this._radar_beam.className='ggskin ggskin_image ';
		this._radar_beam.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		this._radar_beam.setAttribute('style',hs);
		this._radar_beam.style[domTransform + 'Origin']='50% 50%';
		this._radar_beam.style[domTransform]=parameterToTransform(this._radar_beam.ggParameter);
		me._radar_beam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_beam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_beam.ggUpdatePosition=function () {
		}
		this._radar.appendChild(this._radar_beam);
		this._radar_dot=document.createElement('div');
		this._radar_dot__img=document.createElement('img');
		this._radar_dot__img.className='ggskin ggskin_image';
		this._radar_dot__img.setAttribute('src',basePath + 'images/radar_dot.png');
		this._radar_dot__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radar_dot__img.className='ggskin ggskin_image';
		this._radar_dot__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar_dot__img);
		this._radar_dot.appendChild(this._radar_dot__img);
		this._radar_dot.ggId="radar dot";
		this._radar_dot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_dot.ggVisible=true;
		this._radar_dot.className='ggskin ggskin_image ';
		this._radar_dot.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		this._radar_dot.setAttribute('style',hs);
		this._radar_dot.style[domTransform + 'Origin']='50% 50%';
		me._radar_dot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_dot.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_dot.ggUpdatePosition=function () {
		}
		this._radar.appendChild(this._radar_dot);
		this.divSkin.appendChild(this._radar);
		this._map_cover_2=document.createElement('div');
		this._map_cover_2.ggId="map cover 2";
		this._map_cover_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_cover_2.ggVisible=false;
		this._map_cover_2.className='ggskin ggskin_rectangle ';
		this._map_cover_2.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(0,170,255,0.0196078);';
		hs+='border : 3px solid #00aaff;';
		hs+='height : 513px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 781px;';
		this._map_cover_2.setAttribute('style',hs);
		this._map_cover_2.style[domTransform + 'Origin']='50% 50%';
		me._map_cover_2.ggIsActive=function() {
			return false;
		}
		me._map_cover_2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map_cover_2.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._map_cover_2);
		this._markertemplate0__normal=new SkinElement_marker_normal0_Class(this,this._markertemplate0);
		this._markertemplate0__normal.style.visibility='inherit';
		this._markertemplate0__normal.style.left='0px';
		this._markertemplate0__normal.style.top='0px';
		this._markertemplate0.ggMarkerNormal=this._markertemplate0__normal;
		this._markertemplate0__active=new SkinElement_marker_active0_Class(this,this._markertemplate0);
		this._markertemplate0__active.style.visibility='hidden';
		this._markertemplate0__active.style.left='0px';
		this._markertemplate0__active.style.top='0px';
		this._markertemplate0.ggMarkerActive=this._markertemplate0__active;
		if (this._markertemplate0.firstChild) {
			this._markertemplate0.insertBefore(this._markertemplate0__active,this._markertemplate0.firstChild);
		} else {
			this._markertemplate0.appendChild(this._markertemplate0__active);
		}
		if (this._markertemplate0.firstChild) {
			this._markertemplate0.insertBefore(this._markertemplate0__normal,this._markertemplate0.firstChild);
		} else {
			this._markertemplate0.appendChild(this._markertemplate0__normal);
		}
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
		this._marker_node1__normal=new SkinElement_marker_normal0_Class(this,this._marker_node1);
		this._marker_node1__normal.style.visibility='inherit';
		this._marker_node1__normal.style.left='0px';
		this._marker_node1__normal.style.top='0px';
		this._marker_node1.ggMarkerNormal=this._marker_node1__normal;
		this._marker_node1__active=new SkinElement_marker_active0_Class(this,this._marker_node1);
		this._marker_node1__active.style.visibility='hidden';
		this._marker_node1__active.style.left='0px';
		this._marker_node1__active.style.top='0px';
		this._marker_node1.ggMarkerActive=this._marker_node1__active;
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__active,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__active);
		}
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__normal,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__normal);
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
		this._marker_node3__normal=new SkinElement_marker_normal0_Class(this,this._marker_node3);
		this._marker_node3__normal.style.visibility='inherit';
		this._marker_node3__normal.style.left='0px';
		this._marker_node3__normal.style.top='0px';
		this._marker_node3.ggMarkerNormal=this._marker_node3__normal;
		this._marker_node3__active=new SkinElement_marker_active0_Class(this,this._marker_node3);
		this._marker_node3__active.style.visibility='hidden';
		this._marker_node3__active.style.left='0px';
		this._marker_node3__active.style.top='0px';
		this._marker_node3.ggMarkerActive=this._marker_node3__active;
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__active,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__active);
		}
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__normal,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__normal);
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
		this._marker_node5__normal=new SkinElement_marker_normal0_Class(this,this._marker_node5);
		this._marker_node5__normal.style.visibility='inherit';
		this._marker_node5__normal.style.left='0px';
		this._marker_node5__normal.style.top='0px';
		this._marker_node5.ggMarkerNormal=this._marker_node5__normal;
		this._marker_node5__active=new SkinElement_marker_active0_Class(this,this._marker_node5);
		this._marker_node5__active.style.visibility='hidden';
		this._marker_node5__active.style.left='0px';
		this._marker_node5__active.style.top='0px';
		this._marker_node5.ggMarkerActive=this._marker_node5__active;
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__active,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__active);
		}
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__normal,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__normal);
		}
		this._marker_node6__normal=new SkinElement_marker_normal0_Class(this,this._marker_node6);
		this._marker_node6__normal.style.visibility='inherit';
		this._marker_node6__normal.style.left='0px';
		this._marker_node6__normal.style.top='0px';
		this._marker_node6.ggMarkerNormal=this._marker_node6__normal;
		this._marker_node6__active=new SkinElement_marker_active0_Class(this,this._marker_node6);
		this._marker_node6__active.style.visibility='hidden';
		this._marker_node6__active.style.left='0px';
		this._marker_node6__active.style.top='0px';
		this._marker_node6.ggMarkerActive=this._marker_node6__active;
		if (this._marker_node6.firstChild) {
			this._marker_node6.insertBefore(this._marker_node6__active,this._marker_node6.firstChild);
		} else {
			this._marker_node6.appendChild(this._marker_node6__active);
		}
		if (this._marker_node6.firstChild) {
			this._marker_node6.insertBefore(this._marker_node6__normal,this._marker_node6.firstChild);
		} else {
			this._marker_node6.appendChild(this._marker_node6__normal);
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
		this._marker_node11__normal=new SkinElement_marker_normal0_Class(this,this._marker_node11);
		this._marker_node11__normal.style.visibility='inherit';
		this._marker_node11__normal.style.left='0px';
		this._marker_node11__normal.style.top='0px';
		this._marker_node11.ggMarkerNormal=this._marker_node11__normal;
		this._marker_node11__active=new SkinElement_marker_active0_Class(this,this._marker_node11);
		this._marker_node11__active.style.visibility='hidden';
		this._marker_node11__active.style.left='0px';
		this._marker_node11__active.style.top='0px';
		this._marker_node11.ggMarkerActive=this._marker_node11__active;
		if (this._marker_node11.firstChild) {
			this._marker_node11.insertBefore(this._marker_node11__active,this._marker_node11.firstChild);
		} else {
			this._marker_node11.appendChild(this._marker_node11__active);
		}
		if (this._marker_node11.firstChild) {
			this._marker_node11.insertBefore(this._marker_node11__normal,this._marker_node11.firstChild);
		} else {
			this._marker_node11.appendChild(this._marker_node11__normal);
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
		me._markertemplate0.ggNodeChange();
		me._markertemplate.ggNodeChange();
		me._marker_node1.ggNodeChange();
		me._marker_node2.ggNodeChange();
		me._marker_node3.ggNodeChange();
		me._marker_node4.ggNodeChange();
		me._marker_node5.ggNodeChange();
		me._marker_node6.ggNodeChange();
		me._marker_node7.ggNodeChange();
		me._marker_node8.ggNodeChange();
		me._marker_node9.ggNodeChange();
		me._marker_node10.ggNodeChange();
		me._marker_node11.ggNodeChange();
		me._marker_node12.ggNodeChange();
		me._marker_node13.ggNodeChange();
		me._marker_node14.ggNodeChange();
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
		me._marker_title0.ggUpdateText();
		me._marker_title.ggUpdateText();
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
		me._map_title.ggUpdateText();
		var hs='';
		if (me._radar_beam.ggParameter) {
			hs+=parameterToTransform(me._radar_beam.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._radar_beam.style[domTransform]=hs;
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
	this.addSkin();
};