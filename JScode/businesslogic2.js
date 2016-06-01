/**
 * Created by boris on 6/1/16.
 */
i=10;

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};


myUrl =  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=92e368e9346b5fc77cc08cb37f55948f&tags=flower&per_page=30&extras=url_m&format=json&nojsoncallback=0%27";
// getJSON( myUrl,
// function(err, data) {
//   // if (err != null) {
//   //   alert("Something went wrong: " + err);
//   // } else {
//     alert("Your query count: " + data.photos.photo[1].url_m);
//  // }
// });


    getJSON( myUrl,
function(err, data) {
   respon = data;
     });


function HelloFunction() {
    if (i == 0){
        i = 29;
    }
    else {
    i = i - 1;
    }
    aplmk = respon.photos.photo[i].url_m;
    var image=document.getElementById('change');
    image.src = aplmk;
        
}

function RightFunc() {
 if (i == 29){
       i = 0;
   }
    else {
           i = i + 1;

   }
    aplmk = respon.photos.photo[i].url_m;
    var image=document.getElementById('change');
    image.src = aplmk;

}