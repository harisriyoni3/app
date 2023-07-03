import { setInner } from "https://jscroot.github.io/element/croot.js";


export let Urlpost = "https://goharis-baru.herokuapp.com/surat/insert"

export function AmbilResponse(result) {
    console.log(result);
    setInner("inisemua", result.message);
}

export function resetform(){

  }