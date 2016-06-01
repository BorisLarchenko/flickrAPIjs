/**
 * Created by boris on 6/1/16.
 */

function HelloFunction() {
    if (i == 0){
        i = 29;
    }
    else {
    i = i - 1;
    }
    var aplm = respon.photos.photo[i].url_m;
    var image=document.getElementById('change');
    image.src = aplm;
}

function RightFunc() {
   if (i == 29){
       i = 0;
   }
    else {
           i = i + 1;

   }
var aplm = respon.photos.photo[i].url_m;
var image=document.getElementById('change');
image.src = aplm;
}
var i = 10;
var aplm = respon.photos.photo[i].url_m;
var image=document.getElementById('change');
image.src = aplm;

