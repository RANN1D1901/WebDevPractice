var button= document.getElementById("submit-btn")
console.log(button)
button.addEventListener('click',function(e){
    console.log("Button clicked");
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        button.innerHTML="Change"
    }
    request.open('GET',"http://localhost:3000",true);
    request.send(null);
});