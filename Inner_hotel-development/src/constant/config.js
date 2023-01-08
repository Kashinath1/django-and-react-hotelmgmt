import Cookies from "js-cookie"
export const Formconfig = {headers : {Authorization: Cookies.get('access') ?'JWT ' + Cookies.get('access') :null,'Content-Type':'multipart/form-data'}}
export const Jsonconfig = {headers : {Authorization: Cookies.get('access') ?'JWT ' + Cookies.get('access') :null,'Content-Type':'application/json'}}