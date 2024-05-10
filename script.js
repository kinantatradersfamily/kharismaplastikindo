function handleUrlChange() {
    var currentUrl = window.location.href;
    if (currentUrl.includes("./adminlte-v2/index.html")) {
   
        window.location.href = currentUrl;
    }
}

console.log('qweqw')

window.addEventListener('popstate', handleUrlChange);
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        var href = e.target.getAttribute('href');
        
        if (href.endsWith('.html')) {
            e.preventDefault();
            
            var newHref = href.slice(0, -5);
            window.location.href = newHref;
        }
    }
});


console.log(window.location.pathname)

$(function(){
    $('#footer').load("component/footer.html")
  });