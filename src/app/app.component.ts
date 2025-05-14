import { AfterViewInit, Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'biogreentech';
  ngAfterViewInit() {
    setTimeout(() => {
      Aos.init({
        duration: 1200,
       offset: 0,
      });
      Aos.refreshHard();
    });
  }



}