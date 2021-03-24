import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultadosService } from 'src/app/servicos/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  gifs: any = [];
  pesquisa!: string;
  
  constructor(private resultadosServ: ResultadosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.pesquisa = params['palabra'];
      
      this.resultadosServ.getResultados(this.pesquisa).subscribe(gifs => {
      this.gifs = gifs;
      });
    });
  }

}
