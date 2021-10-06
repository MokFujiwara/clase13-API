import { Component } from '@angular/core';
/* Importar librerías */
import { APIService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiServ: APIService) { }

  recuperarTodo() {
    this.apiServ.getPosts().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  }
  recuperarID() {
    this.apiServ.getPost(20).subscribe(
      (data) => { console.log(data); },
      (error) => { console.log(error); }
    );
  }
  recuperarBitcoin() {
    this.apiServ.getBitcoin().subscribe(
      (data) => { console.log(data.serie[0].valor); },
      (error) => { console.log(error); }
    );
  }
  crearPost() {
    var post = {
      userId: 1,
      id: 101,
      title: 'hola mundo',
      body: 'bom dia'
    };
    this.apiServ.crearPost(post).subscribe(
      (success) => { console.log(success); },
      (error) => { console.log(error); }
    );
  }
  updatePost() {
    var post = {
      userId: 1,
      id: 101,
      title: 'hola mundo',
      body: 'bom dia'
    };
    this.apiServ.updatePost(20, post).subscribe(
      (success) => { console.log(success); },
      (error) => { console.log(error); }
    );
  }
  eliminarPost() {
    this.apiServ.deletePost(20).subscribe(
      (success) => { console.log(success); },
      (error) => { console.log(error); }
    );
  }
}
