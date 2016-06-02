/**
 * Created by boris on 6/2/16.
 */
var xhr = new XMLHttpRequest();

myUrl =  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=92e368e9346b5fc77cc08cb37f55948f&tags=flower&per_page=30&extras=url_m&format=json&nojsoncallback=0%27";

xhr.open('GET', myUrl, false);

xhr.send();

// document.write(xhr.responseText);
text = xhr.responseText;
alert( typeof text);
obj = JSON.parse( xhr.response );
alert( typeof obj );
// document.write(obj.photos.photo[1].url_m);
var url = document.getElementById('h1');
    url.innerHTML = obj.photos.photo[1].url_m;