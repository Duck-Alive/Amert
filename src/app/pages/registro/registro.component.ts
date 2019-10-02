import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { UsuarioModel } from '../../interfaces/registro.interface';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from '../../interfaces/policy.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  policies: Policy[];

  constructor(private auth: RegistroService,
              private router: Router,
              private firestore: AngularFirestore) {}
  ngOnInit() {
    this.auth.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Policy;
      })
    });

    this.usuario = new UsuarioModel();
  }
  create(data: Policy) {
    this.auth.createPolicy(data);
  }

  update(policy: Policy) {
    this.auth.updatePolicy(policy);
  }

  delete(id: string) {
    this.auth.deletePolicy(id);
  }
  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    this.usuario = new UsuarioModel();
    this.firestore.collection('usuarios').add(this.usuario);

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();

        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');

      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          type: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });
      });
  }
}
