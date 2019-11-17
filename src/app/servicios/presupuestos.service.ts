import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  
})
export class PresupuestosService implements OnInit{

  presURL='https://comprasapp-7773d.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-7773d.firebaseio.com/presupuestos.json';
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(){ 
    this.postPresupuesto;
  }

  postPresupuesto( presupuesto: any) {
    const newpres= JSON.stringify(presupuesto);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<JSON>( this.presURL, newpres, {headers}).pipe(map( res => {
      console.log(res);
      return res
    }))
  }

  getPresupuestos(){

    return this.httpClient.get(this.presURL)
      .pipe(map(res=>res))
  }

  getPresupuesto(id$: string){
    const url='${this.preURL}/${id$}';
    return this.httpClient.get(url).pipe(map(res=> res));
  }

  putPresupuesto(presupuesto: any,id$:string){
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    const url = '${ this.preURL }/${ id$ }.json';
 
    return this.httpClient.put( url, newpre, {headers})
      .pipe(map(res=>{
        console.log(res);
        return res;
    }))
  }

  delPresupuesto(id$:string){
    const url='${ this.preURL }/${ id$ }.json';
    return this.httpClient.delete(url).pipe(map(res=>res));
  }

  
}
