import { Injectable } from '@angular/core';
import { UsuarioModel } from '../interfaces/registro.interface';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from '../interfaces/policy.model';

@Injectable()
export class RegistroService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyC7ucx6Dj9FRiTM8NUm33I89yLZ-FkJfx4';

  userToken: string;


  constructor(private http: HttpClient,
              private firestore: AngularFirestore) {
    // this.leerToken();
                }


  logout() {
    localStorage.removeItem('token');
  }
  getPolicies() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }
  createPolicy(policy: Policy) {
    return this.firestore.collection('usuarios').add(policy);
  }
  updatePolicy(policy: Policy) {
    delete policy.id;
    this.firestore.doc('usuarios/' + policy.id).update(policy);
  }
  deletePolicy(policyId: string) {
    this.firestore.doc('usuarios/' + policyId).delete();
  }
  login(usuario: UsuarioModel) {

    const authData = {usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  nuevoUsuario(usuario: UsuarioModel) {

    const authData = {usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }


  private guardarToken(idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());


  }

  leerToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }


  estaAutenticado(): boolean {

    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }


  }




}
