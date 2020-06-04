window.onload = function () {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "/include/header.html";//読み込まれるHTMLを指定
    var layout_area = document.getElementById("layout_area");//読み込みたい位置を指定

    xhr.responseType = "document";//XMLとして扱いたいので一応記述
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var restxt = xhr.responseXML;//重要
            var int = restxt.getElementsByTagName("body")[0].getElementsByTagName("nav")[0];//読み込まれるセレクタを指定
            layout_area.innerHTML = int.outerHTML;//完了
        };
    };
    xhr.send();
};