$(document).ready(function() {
    $("nav [href]").each(function() {
    	console.log(this.href);
    	console.log('window:' + window.location.href);
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});