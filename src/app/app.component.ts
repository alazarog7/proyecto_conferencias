import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { interval, timer} from 'rxjs'; 
import { take } from 'rxjs/operators'

const numeros = timer(1000, 1000);
//const takeFourNumbers = numeros.pipe(take(4));
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  homeInicio:boolean = true;

  title = 'Reuniones';
  constructor(public translateService: TranslateService, private router: Router){
      translateService.addLangs(['en','pt','es']);
      translateService.setDefaultLang('en');
      const browserLang = translateService.getBrowserLang();
      translateService.use(browserLang.match(/en|es|pt/) ? browserLang : 'en');

  }

  ocultarHome(nombre){
    if(nombre == 'inicio'){
      this.homeInicio = true;
    }else{
      this.homeInicio = false;
    }
  }

}
