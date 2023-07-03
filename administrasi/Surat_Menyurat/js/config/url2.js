import { setInner } from "https://jscroot.github.io/element/croot.js";


export let Urlpost = "https://goharis-baru.herokuapp.com/surat/"

export function AmbilResponse(result) {
    console.log(result);
    setInner("di", result.message);
}

export function resetform(){

  }