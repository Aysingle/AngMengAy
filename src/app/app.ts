import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FooterPage } from './footer-page/footer-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FooterPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-web');
}
