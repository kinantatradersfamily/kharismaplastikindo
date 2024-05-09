function handleUrlChange() {
    var currentUrl = window.location.href;
    if (currentUrl.includes("./adminlte-v2/index.html")) {
   
        window.location.href = currentUrl;
    }
}

window.addEventListener('popstate', handleUrlChange);

console.log(window.location.pathname)

$(function(){
    $("#header").load("component/navbar.html");
    $('#footer').load("component/footer.html")
  });