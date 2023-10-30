var items = document.getElementById("items");
var item ="";

const htpp1 = new XMLHttpRequest();
htpp1.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
       var id = JSON.parse(this.responseText);
        id.forEach(({id, name ,email})=>{
            item += `<p> ${id} ${name} ${email}</p>`;
        });
        items.innerHTML = item;
        
    }
}
htpp1.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
htpp1.send();