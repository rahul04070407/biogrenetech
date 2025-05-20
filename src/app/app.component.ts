import { AfterViewInit, Component } from '@angular/core';
import Aos from 'aos';
import { HeaderComponent } from "./pages/header/header.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
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