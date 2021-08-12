import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HoHoM.Creations';

  ngOnInit() {
    $('body').attr('style', 'background: #EAD7C8');
  }

}
