(function() {
    document.getElementById("get-dom").addEventListener("click", function() {
        getDom();
    });
})();

var getDom = function() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          document.getElementById("container").innerHTML = xmlhttp.responseText;

          //The DOM is ready here!!
        }
    }

    xmlhttp.open("GET","http://localhost:3000/dynamicdom",true);
    xmlhttp.send();
}