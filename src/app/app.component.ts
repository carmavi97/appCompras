import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey:'AIzaSyDon4fUk2fMIBeBntD38d6RRv98jSEhtQo',
      authDomain:'comprasapp-7773d.firebaseapp.com'
    });
  }
  title = 'appCompras';
}
