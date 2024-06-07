let srh=document.getElementById("srch");
let srchicon=document.getElementById("srchicon");
srh.onsubmit=search;
srchicon.onclick=search;
function search()
{
    window.location="https://www.google.com/search?q="+document.getElementById("txtsrch").value;
    return false;
}