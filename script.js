

const bodyEl1 =document.createElement('div');
bodyEl1.innerHTML = "";
bodyEl1.setAttribute("id", "div1");
bodyEl1.setAttribute("class", "container");

const ele1 = document.body;
ele1.appendChild(bodyEl1);


const El2 = document.createElement('p');
El2.innerHTML = "";
El2.setAttribute("id", "pagenation");
El2.setAttribute("class", "pragraph");

const nes2 = document.querySelector("div#div1");
nes2.appendChild(El2);


const show = document.getElementById('pagenation');

// this part is XMLHttpRequest code
var http = new XMLHttpRequest();

http.onreadystatechange = function(){
 if(this.readyState ==4){
   if(this.status == 200){
        const id = JSON.parse(this.responseText);
        let anws = "";
        id.forEach(({id , name, email}) => {
          //     anws = anws + `<p>Id:${id} Name:${name} Email:${email} `;

              if(id <= 10){

                
                 anws = anws + `<p>Id:${id} Name:${name} Email:${email} `;

              }
               if(id <=20 && id >=11){
                //  anws = anws + `<p>Id:${id} Name:${name} Email:${email} `;
              }
        });
        show.innerHTML = anws;


   }
   else{
    console.error("404 Not Found")
   }
 }
}
http.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
http.send();



 const bodyEl =document.createElement('div');
 bodyEl.innerHTML = "";
 bodyEl.setAttribute("id", "page");
 bodyEl.setAttribute("class", "container1");

 const ele = document.body;
 ele.appendChild(bodyEl);

const Ele = document.createElement('a');
Ele.innerHTML = "Next";
Ele.setAttribute("id", "page1");
Ele.setAttribute("class", "a-link");
Ele.setAttribute("href","#");


const nes = document.querySelector("div#page");
nes.appendChild(Ele);


for(let i=1 ; i<=10; i++){
    const Ele = document.createElement('a');
    Ele.innerHTML = i;
    Ele.setAttribute("class", "a-link");
    Ele.setAttribute("href","#");
     
    
    const nes = document.querySelector("div#page");
nes.appendChild(Ele);
}
const Ele1 = document.createElement('a');

Ele1.innerHTML = "pevs";
Ele1.setAttribute("id", "page1");
Ele1.setAttribute("class", "a-link");
Ele1.setAttribute("href","#");

nes.appendChild(Ele1);


