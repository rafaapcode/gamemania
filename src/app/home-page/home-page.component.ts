import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = ['Computadores', 'Periféricos', 'Componentes'];
  public pcs = [

    {
      id: 'pc1',
      imageUrl: '../../assets/img/Pc.jpg',
      title: 'Computador Gamer One',
      textBody: ['I7-9900k', 'GTX 1080TI', '16GB RAM', '1TB', 'SSD 256 GB'],
    },
    {
      id: 'pc2',
      imageUrl: '../../assets/img/Pc.jpg',
      title: 'Computador Gamer Two',
      textBody: ['I7-9900k', 'GTX 1080TI', '16GB RAM', '1TB', 'SSD 256 GB'],
    },
    {
      id: 'pc3',
      imageUrl: '../../assets/img/Pc.jpg',
      title: 'Computador Gamer Three',
      textBody: ['I7-9900k', 'GTX 1080TI', '16GB RAM', '1TB', 'SSD 256 GB'],
    },
    {
      id: 'pc4',
      imageUrl: '../../assets/img/Pc.jpg',
      title: 'Computador Gamer Four',
      textBody: ['I7-9900k', 'GTX 1080TI', '16GB RAM', '1TB', 'SSD 256 GB'],
    },
    {
      id: 'pc5',
      imageUrl: '../../assets/img/Pc.jpg',
      title: 'Computador Gamer Five',
      textBody: ['I7-9900k', 'GTX 1080TI', '16GB RAM', '1TB', 'SSD 256 GB'],
    },

  ]

  public perfifericos = [

    {
      id: 'p1',
      imageUrl: '../../assets/img/fone.jpg',
      title: 'FONE',
      textBody: 'USB 3.0',
    },
    {
      id: 'p2',
      imageUrl: '../../assets/img/TecladoMec.jpg',
      title: 'Teclado Mecânico',
      textBody: ['Teclas Personalizáveis', 'Switch Outemu Red', 'Silencioso'],
    },
    {
      id: 'p3',
      imageUrl: '../../assets/img/MOuse.jpg',
      title: 'Mouse',
      textBody: ['5000 DPI', 'RGB'],
    },
    {
      id: 'p4',
      imageUrl: '../../assets/img/fone.jpg',
      title: 'FONE',
      textBody: 'USB 3.0',
    },
    {
      id: 'p5',
      imageUrl: '../../assets/img/TecladoMec.jpg',
      title: 'Teclado Mecânico',
      textBody: ['Teclas Personalizáveis', 'Switch Outemu Red', 'Silencioso'],
    },

  ]

  public componente = [

    {
      id: 'c1',
      imageUrl: '../../assets/img/Processador.jpg',
      title: 'Processador',
      textBody: ['8 Núcleos', '2.5 mb cache', '2.5 GHZ'],
    },
    {
      id: 'c2',
      imageUrl: '../../assets/img/memoria ram.jpg',
      title: 'Memória Ram',
      textBody: ['16 GB', '3000 MHZ'],
    },
    {
      id: 'c3',
      imageUrl: '../../assets/img/ventoinha.jpg',
      title: 'Ventoinha',
      textBody: ['Personalizável', 'Software Próprio'],
    },
    {
      id: 'c4',
      imageUrl: '../../assets/img/Processador.jpg',
      title: 'Processador',
      textBody: ['8 Núcleos', '2.5 mb cache', '2.5 GHZ'],
    },
    {
      id: 'c5',
      imageUrl: '../../assets/img/memoria ram.jpg',
      title: 'Memória Ram',
      textBody: ['16 GB', '3000 MHZ'],
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
