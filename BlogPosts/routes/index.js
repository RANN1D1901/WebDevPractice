var button= document.getElementById("submit-btn")
console.log(button)
button.addEventListener('click',function(e){
    console.log("Button clicked");
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        let article_title=document.getElementById("article_title").value;
        let article_content=document.getElementById("content").value;
        console.log(article_content);
        var blog = new Blog({
            title:JSON.stringify(article_title),
            content: JSON.stringify(article_content)
          });
          blog.save().then((result)=>{
            res.send(result)
          })
          .catch((err)=>{
            console.log("Error");
          })
    }
    request.open('GET',"http://localhost:3000",true);
    request.send(null);
});