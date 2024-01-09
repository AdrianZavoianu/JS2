/*Name this external file gallery.js*/

function upDate(previewPic){
   
       x=document.getElementById('image');
       x.innerHTML=previewPic.alt;
       link='url('+previewPic.src+')';
       x.style.backgroundImage=link;

       }
   
       function unDo(){
        x=document.getElementById('image');
        x.style.backgroundImage='url()';
        x.innerHTML='Hover over an image below to display here.';
       }