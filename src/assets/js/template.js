/*! art-template - Template Engine | http://aui.github.com/artTemplate/*/
!(function() { function a(a) { return a.replace(t, '').replace(u, ',').replace(v, '').replace(w, '').replace(x, '').split(/^$|,+/) } function b(a) { return "'" + a.replace(/('|\\)/g, '\\$1').replace(/\r/g, '\\r').replace(/\n/g, '\\n') + "'" } function c(c, d) { function e(a) { return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, ' ').replace(/<!--.*?-->/g, '')), a && (a = s[1] + b(a) + s[2] + '\n'), a } function f(b) { var c = m; if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function() { return m++, '$line=' + m + ';' })), b.indexOf('=') === 0) { var e = l && !/^=[=#]/.test(b); if (b = b.replace(/^=[=#]?|[\s;]*$/g, ''), e) { var f = b.replace(/\s*\([^\)]+\)/, ''); n[f] || /^(include|print)$/.test(f) || (b = '$escape(' + b + ')') } else b = '$string(' + b + ')'; b = s[1] + b + s[2] } return g && (b = '$line=' + c + ';' + b), r(a(b), function(a) { if (a && !p[a]) { var b; b = a === 'print' ? u : a === 'include' ? v : n[a] ? '$utils.' + a : o[a] ? '$helpers.' + a : '$data.' + a, w += a + '=' + b + ',', p[a] = !0 } }), b + '\n' } var g = d.debug; var h = d.openTag; var i = d.closeTag; var j = d.parser; var k = d.compress; var l = d.escape; var m = 1; var p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 }; var q = ''.trim; var s = q ? ["$out='';", '$out+=', ';', '$out'] : ['$out=[];', '$out.push(', ');', "$out.join('')"]; var t = q ? '$out+=text;return $out;' : '$out.push(text);'; var u = "function(){var text=''.concat.apply('',arguments);" + t + '}'; var v = 'function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);' + t + '}'; var w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? '$line=0,' : ''); var x = s[0]; var y = 'return new String(' + s[3] + ');'; r(c.split(h), function(a) { a = a.split(i); var b = a[0]; var c = a[1]; a.length === 1 ? x += e(b) : (x += f(b), c && (x += e(c))) }); var z = w + x + y; g && (z = 'try{' + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}"); try { var A = new Function('$data', '$filename', z); return A.prototype = n, A } catch (B) { throw B.temp = 'function anonymous($data,$filename) {' + z + '}', B } } var d = function(a, b) { return typeof b === 'string' ? q(b, { filename: a }) : g(a, b) }; d.version = '3.0.0', d.config = function(a, b) { e[a] = b }; var e = d.defaults = { openTag: '<%', closeTag: '%>', escape: !0, cache: !0, compress: !1, parser: null }; var f = d.cache = {}; d.render = function(a, b) { return q(a, b) }; var g = d.renderFile = function(a, b) { var c = d.get(a) || p({ filename: a, name: 'Render Error', message: 'Template not found' }); return b ? c(b) : c }; d.get = function(a) { var b; if (f[a])b = f[a]; else if (typeof document === 'object') { var c = document.getElementById(a); if (c) { var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, ''); b = q(d, { filename: a }) } } return b }; var h = function(a, b) { return typeof a !== 'string' && (b = typeof a, b === 'number' ? a += '' : a = b === 'function' ? h(a.call(a)) : ''), a }; var i = { '<': '&#60;', '>': '&#62;', '"': '&#34;', "'": '&#39;', '&': '&#38;' }; var j = function(a) { return i[a] }; var k = function(a) { return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j) }; var l = Array.isArray || function(a) { return {}.toString.call(a) === '[object Array]' }; var m = function(a, b) { var c, d; if (l(a)) for (c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c) }; var n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m }; d.helper = function(a, b) { o[a] = b }; var o = d.helpers = n.$helpers; d.onerror = function(a) { var b = 'Template Error\n\n'; for (var c in a)b += '<' + c + '>\n' + a[c] + '\n\n'; typeof console === 'object' && console.error(b) }; var p = function(a) { return d.onerror(a), function() { return '{Template Error}' } }; var q = d.compile = function(a, b) { function d(c) { try { return new i(c, h) + '' } catch (d) { return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c)) } }b = b || {}; for (var g in e) void 0 === b[g] && (b[g] = e[g]); var h = b.filename; try { var i = c(a, b) } catch (j) { return j.filename = h || 'anonymous', j.name = 'Syntax Error', p(j) } return d.prototype = i.prototype, d.toString = function() { return i.toString() }, h && b.cache && (f[h] = d), d }; var r = n.$each; var s = 'break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined'; var t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g; var u = /[^\w$]+/g; var v = new RegExp(['\\b' + s.replace(/,/g, '\\b|\\b') + '\\b'].join('|'), 'g'); var w = /^\d[^,]*|,\d[^,]*/g; var x = /^,+|,+$/g; e.openTag = '{{', e.closeTag = '}}'; var y = function(a, b) { var c = b.split(':'); var d = c.shift(); var e = c.join(':') || ''; return e && (e = ', ' + e), '$helpers.' + d + '(' + a + e + ')' }; e.parser = function(a, b) { a = a.replace(/^\s/, ''); var c = a.split(' '); var e = c.shift(); var f = c.join(' '); switch (e) { case 'if':a = 'if(' + f + '){'; break; case 'else':c = c.shift() === 'if' ? ' if(' + c.join(' ') + ')' : '', a = '}else' + c + '{'; break; case '/if':a = '}'; break; case 'each':var g = c[0] || '$data'; var h = c[1] || 'as'; var i = c[2] || '$value'; var j = c[3] || '$index'; var k = i + ',' + j; h !== 'as' && (g = '[]'), a = '$each(' + g + ',function(' + k + '){'; break; case '/each':a = '});'; break; case 'echo':a = 'print(' + f + ');'; break; case 'print':case 'include':a = e + '(' + c.join(',') + ');'; break; default:if (f.indexOf('|') !== -1) { var l = b.escape; a.indexOf('#') === 0 && (a = a.substr(1), l = !1); for (var m = 0, n = a.split('|'), o = n.length, p = l ? '$escape' : '$string', q = p + '(' + n[m++] + ')'; o > m; m++)q = y(q, n[m]); a = '=#' + q } else a = d.helpers[e] ? '=#' + e + '(' + c.join(',') + ');' : '=' + a } return a }, typeof define === 'function' ? define(function() { return d }) : typeof exports !== 'undefined' ? module.exports = d : this.template = d }())
