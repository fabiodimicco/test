;(function(r){var f=typeof exports=='object'&&exports;var a=typeof module=='object'&&module&&module.exports==f&&module;var b=typeof global=='object'&&global;if(b.global===b||b.window===b){r=b}var p,c=2147483647,d=36,e=1,g=26,s=38,h=700,l=72,o=128,u='-',v=/^xn--/,x=/[^ -~]/,y=/\x2E|\u3002|\uFF0E|\uFF61/g,z={'overflow':'Overflow: input needs wider integers to process','not-basic':'Illegal input >= 0x80 (not a basic code point)','invalid-input':'Invalid input'},A=d-e,B=Math.floor,C=String.fromCharCode,D;function E(t){throw RangeError(z[t])}function F(i,j){var k=i.length;while(k--){i[k]=j(i[k])}return i}function G(i,j){return F(i.split(y),j).join('.')}function H(i){var j=[],k=0,m=i.length,n,q;while(k<m){n=i.charCodeAt(k++);if(n>=0xD800&&n<=0xDBFF&&k<m){q=i.charCodeAt(k++);if((q&0xFC00)==0xDC00){j.push(((n&0x3FF)<<10)+(q&0x3FF)+0x10000)}else{j.push(n);k--}}else{j.push(n)}}return j}function I(i){return F(i,function(j){var k='';if(j>0xFFFF){j-=0x10000;k+=C(j>>>10&0x3FF|0xD800);j=0xDC00|j&0x3FF}k+=C(j);return k}).join('')}function J(i){if(i-48<10){return i-22}if(i-65<26){return i-65}if(i-97<26){return i-97}return d}function K(i,j){return i+22+75*(i<26)-((j!=0)<<5)}function L(i,n,j){var k=0;i=j?B(i/h):i>>1;i+=B(i/n);for(;i>A*g>>1;k+=d){i=B(i/A)}return B(k+(A+1)*i/(i+s))}function M(m){var q=[],Q=m.length,R,i=0,n=o,S=l,T,j,U,V,w,k,W,t,X;T=m.lastIndexOf(u);if(T<0){T=0}for(j=0;j<T;++j){if(m.charCodeAt(j)>=0x80){E('not-basic')}q.push(m.charCodeAt(j))}for(U=T>0?T+1:0;U<Q;){for(V=i,w=1,k=d;;k+=d){if(U>=Q){E('invalid-input')}W=J(m.charCodeAt(U++));if(W>=d||W>B((c-i)/w)){E('overflow')}i+=W*w;t=k<=S?e:(k>=S+g?g:k-S);if(W<t){break}X=d-t;if(w>B(c/X)){E('overflow')}w*=X}R=q.length+1;S=L(i-V,R,V==0);if(B(i/R)>c-n){E('overflow')}n+=B(i/R);i%=R;q.splice(i++,0,n)}return I(q)}function N(i){var n,w,Q,R,S,j,m,q,k,t,T,U=[],V,W,X,Y;i=H(i);V=i.length;n=o;w=0;S=l;for(j=0;j<V;++j){T=i[j];if(T<0x80){U.push(C(T))}}Q=R=U.length;if(R){U.push(u)}while(Q<V){for(m=c,j=0;j<V;++j){T=i[j];if(T>=n&&T<m){m=T}}W=Q+1;if(m-n>B((c-w)/W)){E('overflow')}w+=(m-n)*W;n=m;for(j=0;j<V;++j){T=i[j];if(T<n&&++w>c){E('overflow')}if(T==n){for(q=w,k=d;;k+=d){t=k<=S?e:(k>=S+g?g:k-S);if(q<t){break}Y=q-t;X=d-t;U.push(C(K(t+Y%X,0)));q=B(Y/X)}U.push(C(K(q,0)));S=L(w,W,Q==R);w=0;++Q}}++w;++n}return U.join('')}function O(i){return G(i,function(j){return v.test(j)?M(j.slice(4).toLowerCase()):j})}function P(i){return G(i,function(j){return x.test(j)?'xn--'+N(j):j})}p={'version':'1.2.3','ucs2':{'decode':H,'encode':I},'decode':M,'encode':N,'toASCII':P,'toUnicode':O};if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){define(function(){return p})}else if(f&&!f.nodeType){if(a){a.exports=p}else{for(D in p){p.hasOwnProperty(D)&&(f[D]=p[D])}}}else{r.punycode=p}}(this));

