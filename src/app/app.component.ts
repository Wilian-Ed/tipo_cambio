import { Component } from '@angular/core';
import { Cambio } from './model.model';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService]
})
export class AppComponent {
  cambio!: Cambio;


  constructor(request: RequestService){
    request.getCambio().subscribe((cambio:any) => (
        this.cambio = cambio,
        console.log(cambio)))
  }
}
