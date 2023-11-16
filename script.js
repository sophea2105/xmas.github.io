window.onscroll = function(){
    var Y = window.scrollY;
    document.getElementById("moon").style.top= 1.5*(-50+Y)+'px';
    document.getElementById("santa").style.top= Y+'px';
    document.getElementById("santa").style.right= 1.5*(-100+Y)+'px';
    if(Y>=184){
        document.getElementById("moon").style.top=184+'px';
        document.getElementById("moon").style.position="fixed";
    }
    if(Y>=1400){
        document.getElementById("paragraph").style.display="block";
        document.getElementById("img_slide").style.display="block";
        document.getElementById("paragraph").style.animationName="pa";
        document.getElementById("paragraph").style.animationDuration= 3+'s';
        document.getElementById("img_slide").style.animationName="im";
        document.getElementById("img_slide").style.animationDuration= 3+'s';
    }else{
        document.getElementById("paragraph").style.display="none";
        document.getElementById("img_slide").style.display="none";
    }
   
}
var i=0;
window.onload = function(){load()};
function load(){
    document.getElementById("christmas_text").className="christmas_text";
    var images = [
        "https://th.bing.com/th/id/OIG.KX_5jFYVB3KK7h3bCIP0?pid=ImgGn&w=1024&h=1024&rs=1",
        "https://th.bing.com/th/id/OIG.5xz2f9pYix8NCJsavmgn?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.ehbY9iuvKph0JUzLWxtR?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.7hqiXTYzCZrvodaY6.qe?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.MvXYLRnutTOgf4R57ARO?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.wW4_QMe4CFcaPna6UF4j?pid=ImgGn&w=1024&h=1024&rs=1",
      ];
      if(i<=5){
        i++;
      }else{
        i=0;
      }
      document.getElementById("slide_show").src=images[i];
      setTimeout(load,2000);
}