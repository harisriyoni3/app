import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { onClick, getValue } from "https://jscroot.github.io/element/croot.js";
import { Urlpost, AmbilResponse} from "../config/url2.js";


function forOnClick(){
  let data = {
    subject : getValue("subject"),
    isisurat : getValue("isisurat")
  }
  postWithToken(Urlpost, "Token", "haris", data, AmbilResponse);

}

onClick("button", forOnClick);

