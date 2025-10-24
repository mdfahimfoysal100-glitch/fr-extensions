if(!localStorage.ffrBookmarks) localStorage.ffrBookmarks = JSON.stringify([]);
let bookmarks = JSON.parse(localStorage.ffrBookmarks);
let site = prompt("Enter site URL to bookmark:");
if(site){
    bookmarks.push(site);
    localStorage.ffrBookmarks = JSON.stringify(bookmarks);
    alert("Bookmark Added!");
} else {
    alert("No URL entered.");
}
