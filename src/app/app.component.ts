import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public infoPaginaService: InfoPaginaService,
               public productosService: ProductosService,
               private db: AngularFirestore ) {
              const things = db.collection('usuarios').valueChanges();
              things.subscribe(console.log);

  }

}
