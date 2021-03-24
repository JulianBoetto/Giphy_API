import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  pesquisa!: string;
  
  
  
  constructor() { }
  
    
    ngOnInit(): void { }

    buscar(form: any) {
      location.href = `/resultados/${form.value.pesquisa}`;
    }
}  

