var PDFView={dataPDF:"",scale:1,LoadScroller:function(){var e=document.getElementById("pdfWrapper");pdfScroll=new IScroll(e,{zoom:true,scrollbars:true,scrollX:true,scrollY:true})},ZoomOut:function(){PDFView.scale=PDFView.scale+.2;PDFView.Render()},ZoomIn:function(){PDFView.scale=PDFView.scale-.2;PDFView.Render()},MakeBinary:function(e){var t=window.atob(e);var n=t.length;var r=new Uint8Array(n);for(i=0;i<n;i++){r[i]=t.charCodeAt(i)}return r},RenderPage:function(e,t,n,r){t.getPage(n).then(function(t){var n=document.body.offsetWidth-30;var i=t.getViewport(n/t.getViewport(PDFView.scale).width);var s=i.width;var o=i.height;var u=document.getElementById("pdfScroller");u.style.width=i.width+30+"px";var a=document.createElement("div");a.className="pdfPage";a.style.width=n+"px";a.style.height=o+"px";e.appendChild(a);var f=document.createElement("canvas");var l=f.getContext("2d");var c=(n-i.width)/2;if(c<0){c=0}f.width=i.width;f.height=o;f.style.left=c+"px";a.appendChild(f);var h={canvasContext:l,viewport:i};t.render(h).then(r);var p=document.createElement("div");a.appendChild(p)})},Show:function(e){PDFView.dataPDF=e;PDFView.Render();if(typeof pdfScroll=="undefined"){PDFView.LoadScroller()}},AfterRender:function(){pdfScroll.refresh()},Render:function(){var e=document.getElementById("pdfScroller");if(e){while(e.hasChildNodes()){e.removeChild(e.lastChild)}}var t=PDFView.MakeBinary(PDFView.dataPDF);PDFJS.getDocument(t).then(function(t){var n=document.getElementById("pdfScroller");var r=1;PDFView.RenderPage(n,t,r++,function i(){if(r>t.numPages){PDFView.AfterRender();return}PDFView.RenderPage(n,t,r++,i)})})}}
