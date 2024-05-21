import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  randomData = "";

  
  constructor() {

  }

  async call() {
    const response = await axios.get('https://raw.githubusercontent.com/rreichel3/US-Stock-Symbols/main/amex/amex_tickers.json');
    this.randomData = response.data[Math.floor(Math.random() * response.data.length)];
  }

}
