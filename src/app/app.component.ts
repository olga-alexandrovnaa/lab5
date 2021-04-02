import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
     <h2>
       <table style="margin-left: 100px">
         <tr><th style="font-size: 40px;color: white;">БИРЖА</th><th style="font-size: small;color: white;"><div style="display: table-cell;text-align: left;">Мир</div><div>Инвестиций</div></th></tr>
       </table>
     </h2>
      <div class = "menu">
        <nav>
          <ul>
            <li><a href = "/brokers">Брокеры</a>
            <li><a href = "/stoks">Акции</a>
            <li><a href = "/setting">Настройка биржи</a>
          </ul>
        </nav>
      </div>
      <router-outlet></router-outlet>`,
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {}
