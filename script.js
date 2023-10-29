const Ele = document.createElement("a");
Ele.innerHTML = "1";
Ele.setAttribute("id", "page1");
Ele.setAttribute("class", "page1");


const nes = document.getElementById("page1");


 
 




// this part is XMLHttpRequest code
var http = new XMLHttpRequest();

http.onreadystatechange = function(){
 if(this.readyState ==4){
   if(this.status == 200){
        const id = JSON.parse(this.responseText);
        id.forEach(({id , name, email}) => {
              console.log(`id:${id} name:${name} email:${email}`);
        });
   }
   else{
    console.error("404 Not Found")
   }
 }
}
http.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
http.send();