import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})

export class AddproveeComponent implements OnInit { 

  provincias: string[] = [ 
    'Álava',
    'Albacete',
    'Alicante',
    'Almería',
    'Asturias',
    'Ávila',
    'Badajoz',
    'Barcelona',
    'Burgos',
    'Cáceres',
    'Cádiz',
    'Cantabria',
    'Castellón',
    'Ciudad Real',
    'Córdoba',
    'La Coruña',
    'Cuenca',
    'Gerona',
    'Granada',
    'Guadalajara',
    'Guipúzcoa',
    'Huelva',
    'Huesca',
    'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona','Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora','Zaragoza' ]

    proveedorForm: FormGroup;
    proveedor: any;

    nombre: any;
    cif: any;
    direccion: any;
    codigoPostal: any;
    localidad: any;
    provincia: any;
    telefono: any;
    email: any;
    contacto: any;

  constructor(private pf: FormBuilder,
    private proveedoresService: ProveedoresService){
  }
  
  ngOnInit() {
    this.proveedorForm = this.pf.group(
      {nombre: ['',Validators.required ],
      cif: ['', Validators.required ],
      direccion: ['', Validators.required ],
      cp: ['', Validators.required ],
      localidad:['',Validators.required],
      provincia:this.provincia,
      telefono:['', [ Validators.required, Validators.minLength(9)]],
      email:['',Validators.required],
      contacto:['',Validators.required]
    });
  }

  saveProveedor(){
    const saveProveedores= {
      nombre: this.proveedorForm.get('nombre').value,
      cif: this.proveedorForm.get('cif').value,
      direccion: this.proveedorForm.get('direccion').value,
      cp: this.proveedorForm.get('cp').value,
      localidad: this.proveedorForm.get('localidad').value,
      provincia: this.proveedorForm.get('provincia').value,
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value,
      contacto: this.proveedorForm.get('contacto').value
    };
    return saveProveedores;
  }

  onSubmit() {
    this.proveedor= this.saveProveedor();
    this.proveedoresService.postProveedor( this.proveedor ).subscribe(newpres =>{
    });
    this.proveedorForm.reset;
  }
}
