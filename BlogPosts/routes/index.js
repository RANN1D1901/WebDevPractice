var dict={}
var button= document.getElementById("submit-btn")
console.log(button)
button.addEventListener('click',function(e){
    console.log("Button clicked");
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        let article_title=document.getElementById("article_title").value;
        let article_content=document.getElementById("content").value;
        dict[article_title]=article_content;
        let keys=Object.keys(dict);
        var li="";
        for(var i=0;i<Object.keys(dict).length;i++){
            li+='<li>'+keys[0]+'</li>';
        }
        var ul=document.getElementById("view_blogs");
        ul.innerHTML=li;
    }
    request.open('GET',"http://localhost:3000",true);
    request.send(null);
});