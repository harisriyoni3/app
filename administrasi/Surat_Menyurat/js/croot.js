import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { rowtabel } from "./template/tabel.js";
import { URLsuratdb } from "./config/url.js";
get(URLsuratdb, tabelContent);
 

function tabelContent(result){
    userTable(result);
}

function userTable(){
    let row = '';
    .forEach((element) => {
    row = rowtabel.replace("#nama#", element.ha).
        replace("#email#", element.email).
        replace("#telepon#", element.telepon);
    addInner("demo",row);
    console.log(jsonParse);
    });
}