import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProveedoresService implements OnInit{
  presURL='https://comprasapp-7773d.firebaseio.com/proveedores.json';
  preURL = 'https://comprasapp-7773d.firebaseio.com/proveedores.json';
  valueChanges: any;
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(){ 
    this.postProveedor;
  }

  postProveedor( proveedor: any) {
    const newpres= JSON.stringify(proveedor);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<JSON>( this.presURL, newpres, {headers}).pipe(map( res => {
      console.log(res);
      return res
    }))
  }

  getProveedores(){

    return this.httpClient.get(this.presURL)
      .pipe(map(res=>res))
  }

  getProveedor(id$: string){
    const url='${this.preURL}/${id$}';
    return this.httpClient.get(url).pipe(map(res=> res));
  }

  putProveedor(proveedor: any,id$:string){
    const newpre = JSON.stringify(proveedor);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    const url = '${ this.preURL }/${ id$ }.json';
 
    return this.httpClient.put( url, newpre, {headers})
      .pipe(map(res=>{
        console.log(res);
        return res;
    }))
  }

  delProveedor(id$:string){
    const url='${ this.preURL }/${ id$ }.json';
    return this.httpClient.delete(url).pipe(map(res=>res));
  }
}