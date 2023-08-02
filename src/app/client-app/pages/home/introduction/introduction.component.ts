import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ProductIntroduction } from 'src/app/client-app/interfaces/global-products.interface';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  contentDetails: ProductIntroduction[] = [
    {
      name: 'tourism',
      title: 'Turismo',
      description: 'Aqui podras ver todos los lugares turisticos que puedes visitar en chignahuapan, contaras con un mapa para saber en donde se encuentra cada lugar, pusla el boton para conocer todos!!',
      img: './assets/imgs/home/tourism.png',
      color: '#5A1080',
    },
    {
      name: 'events',
      title: 'Eventos',
      description: 'Quieres divertirte? en esta seccion podras descubrir los eventos mas proximos en Chignahuapan! si quieres reservar un evento en especial nosotros podemos ayudarte con el boleto',
      img: './assets/imgs/home/events.png',
      color: '#26A52F',
    },
    {
      name: 'lodging',
      title: 'Hospedaje',
      description: 'Estas por venir y no sabes donde hospedarte? nosotros te dejamos algunas recomendaciones, al igual que la ubicacion del lugar',
      img: './assets/imgs/home/lodging.png',
      color: '#DA007F',
    },
    {
      name: 'restaurant',
      title: 'Restaurantes',
      description: 'Si ya te encuentras aqui y no sabes donde comer, aqui te dejaremos los mejores restaurantes de Chignahuapan, aqui podras observar el menu de cada restaurante!',
      img: './assets/imgs/home/restaurant.png',
      color: '#EA7500',
    },
    {
      name: 'booking',
      title: 'Reserva con nosotros',
      description: 'Puedes armar tu paquete de lugares turisticos, hospedaje, eventos y restaurantes con nosotros, solo dinos que quieres incluir y nosotros te haremos reservaciones!',
      img: './assets/imgs/home/booking.png',
      color: '#009CDE',
    }
  ]
  titleDetail: string = '';
  desciptionDetail: string = '';
  imgDetail: string = '';
  colorDetail: string = '';

  @ViewChildren('asMenuButtons') menuButtons! : QueryList<ElementRef>

  constructor( private render2: Renderer2 ) {}

  ngOnInit() {
    this.setContentDetails(0)
  }

  statusDetail(event: MouseEvent, index: number): void {
    let backgroundStyle = '';

    switch ((event.target! as HTMLButtonElement).value) {
      case 'tourism':
        backgroundStyle = '#5A1080';
        break;
      case 'events':
        backgroundStyle = '#26A52F';
        break;
      case 'lodging':
          backgroundStyle = '#DA007F';
          break;
      case 'restaurant':
        backgroundStyle = '#EA7500';
        break;
      case 'booking':
        backgroundStyle = '#009CDE';
        break;
      default:
        backgroundStyle = '#5A1080';
    }

    for(let i = 0; i < this.menuButtons.length; i++) {
      if(i == index) {

        this.render2.addClass(this.menuButtons.get(index)?.nativeElement, 'activeDetails')
        this.render2.setStyle(this.menuButtons.get(index)?.nativeElement, 'background', backgroundStyle)

      } else {

        this.render2.removeClass(this.menuButtons.get(i)?.nativeElement, 'activeDetails')
        this.render2.removeStyle(this.menuButtons.get(i)?.nativeElement, 'background')

      }
    }

    this.setContentDetails(index);
  }

  setContentDetails(index: number) {
    this.titleDetail = this.contentDetails[index].title
    this.desciptionDetail = this.contentDetails[index].description
    this.imgDetail = this.contentDetails[index].img
    this.colorDetail = this.contentDetails[index].color
  }

}
