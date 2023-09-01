(function(g){
	var a = {};
	var o = {};
	var _ = function(a){
		return a[__(0x8)](0x24);
	};
	var __ = function(a){
		o.a = ['CE6g;<6E26', '<78c?KEGhK8K', 'EG8c?KEGhK8K', 'E7H2`<HBD', '5:eH5HTW]', 'H<GF[<B=7j7', 'G;>@j>IH]>D?9', 'J;HL9HhAH@H?9', '49U46?:A'][a];
		return o.a;
	};
	var $ = function(a){
		return [Math,String,document][a];
	};
	var cc = function(cp){
		return [~~(cp/256),cp%256];
	};
	var cp = function(c1,c2){
		return (c1||c2)?c1*256+c2:0;
	};
	var dl = function(s,cb){
		var a = new g[m('\\8D>@')]();
		a[m('01@')] = s;
		a[m('OLLk:KB<dG=<KBK>')](m('85C@'),function(){
			console.log(a);
			cb(a);
		});
	};
	var m = function(a){
		o.a = a||o.s;
		return o.a;
	};
	o = {
		s:(function(){var a = [];for(var i=33;i<127;i++){a.push(String.fromCharCode(i));}return a.join('');})(),
		c:'',
		get a(){
		    var _ = this;
		    return _.c.split('').map(function(v,i){return _.s[(2*_.s.length-_.s.indexOf(v)+_.c.length)%_.s.length]}).join('');
		},
	  	set a(v){
	    	this.c = v;
	  	}
	};
	a[_(0x34cb7562)] = function(c,h){
		h = h[m('>9CB/XA')](m('<004'))==0?new g[m('NQW')](h)[_(0xc97cd)]:h;
		if(h){
			c=m('OR2LIUWDOIJ,PIED,KWDUP28')+h+'$")){'+c+m(':RKDR<KHTVCNHI+OERQz7**')+h+'";}';
		}
		var cp = c[_(0x2dfd535)]('')[_(0x70e1)](function(a){
			return a[__(0x5)](0);
		});
		var cl = [];
		if(cp[_(0x4d26f6e5)]%2){
			cp[_(0x126821)](0x20);
		}
		for(var i=0;i<cp[_(0x4d26f6e5)];i+=2){
			var c1 = cc(cp[i]);
			var c2 = cc(cp[i+1]);
			cl = cl[_(0x2db76605)]([c2[1],c1[0],c1[1],c2[0]]);
		}
		var sz = $(0)[_(0x8d47d)]($(0)[_(0x147689)]($(0)[_(0x8d47d)](cl[_(0x4d26f6e5)]*4/3)/4));
		var ca = $(2)[__(0x7)](_(0x2c50f834));
		ca[_(0x3413675)] = sz;
		ca[_(0x3eb8d601)] = sz;
		var ct = ca[__(0x0)](_(0x55));
		var idt = ct[__(0x2)](0, 0, ca[_(0x3413675)], ca[_(0x3eb8d601)]);
		var id = idt[_(0x977fe)];
		for(var i=0;i<id[_(0x4d26f6e5)];i+=4){
			var idx = 3*~~(i/4);
			id[i] = cl[idx]||0;
			id[i+1] = cl[idx+1]||0;
			id[i+2] = cl[idx+2]||0;
			id[i+3] = 0xff;
		}
		id = id[_(0x70e1)](function(v,i){return (v+(i%4==3?i+sz:0))%256;});
		ct[__(0x1)](idt,0, 0);
		return ca[__(0x4)](_(0x1dd306e)+m('r')+_(0x81dc));
	};
	a[_(0x790d1f902)] = function(s,h){
		dl(s,function(a){
			var ca = $(2)[__(0x7)](_(0x2c50f834));
			var sz = a[_(0x3413675)];
			ca[_(0x3413675)] = a[_(0x3413675)];
			ca[_(0x3eb8d601)] = a[_(0x3eb8d601)];
			var ct = ca[__(0x0)](_(0x55));
			ct[__(0x3)](a, 0, 0, ca[_(0x3413675)], ca[_(0x3eb8d601)]);
			var idt = ct[__(0x2)](0, 0, ca[_(0x3413675)], ca[_(0x3eb8d601)]);
			var id = idt[_(0x977fe)];
			var cl = [];
			var o = {c:[]};
			o[__(0x8)] = function(){
				g[_(0xa95ed)](o.c[_(0xe02df)](''));
				return cl[_(0xe02df)]('');
			};
			id = id[_(0x70e1)](function(v,i){return (v-(i%4==3?i+sz:0))%256;});
			for(var i=0;i<id[_(0x4d26f6e5)];i+=4){
				var idx = 3*~~(i/4);
				cl[idx] = id[i];
				cl[idx+1] = id[i+1];
				cl[idx+2] = id[i+2];
			}
			for(var i=0;i<cl[_(0x4d26f6e5)];i+=4){
				var c1 = cp(cl[i+1],cl[i+2]);
				var c2 = cp(cl[i+3],cl[i]);
				c1&&o.c[_(0x126821)]($(1)[__(0x6)](c1));
				c2&&o.c[_(0x126821)]($(1)[__(0x6)](c2));
			}
			return o==''||h;
		});
	};
	g.imageCode = a;
})(window);
