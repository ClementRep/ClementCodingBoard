//listener
document.getElementById("myform").addEventListener('submit', saveBookmark);
function saveBookmark(e) {
    //getting form inputs 
    var siteName = document.getElementById('sitename').value;
    var siteURL = document.getElementById('siteURL').value;
    /*
    if(!siteName || !siteURL){
        alert("please fill in the form");
        return false;
    }
    */
    /*
    var expression=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var regex = new RegExp(expression);
    
    if(siteURL.match(regex)){
    alert("please use valid url")
    return false;
    }
    */
    var bookmark = {
        name: siteName,
        url: siteURL
    }
    //localstorage
    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        //set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //fetch it from localstorage
        //json.parse it turn string into back to json
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //book to array
        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    //prevent form from submmitting
    e.preventDefault();
}

//delete function
function deteleBookmarks(url) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    fetchbookmarks();
}
//FETCH BOOKMARKS
function fetchbookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    var bookmarksResults = document.getElementById('bookmarkerResult');

    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResults.innerHTML += '<div class="well">' +
            '<h3>' + name +
            '<a class="btn btn-default" target="_blank" href="' + url + '">visit</a>' +
            '<a onclick="deteleBookmarks(\'' + url + '\')"   class="btn btn-danger"  href="#">delete</a>' +
            '</h3>'
        '</div>';
    }
}
const input=document.querySelector("#searchBox");
var SearchQuery=document.getElementById("searchBox");
input.addEventListener('input',Search)
function Search(e){
    var bookmarks=localStorage.getItem('bookmarks');
    var bookmarksResults = document.getElementById('bookmarkerResult');
    bookmarksResults.innerHTML = '';
   
    for (var i = 0; i < bookmarks.length; i++) {
       if(bookmarks[i]==input){
        bookmarksResults.innerHTML += '<div class="well">' +
        '<h3>' + input+
        '</h3>'
    '</div>';
       }else
       {
        bookmarksResults.innerHTML += '<div class="well">' +
        '<h3>' +"result not found"+
        '</h3>'
    '</div>';
       }
}
}