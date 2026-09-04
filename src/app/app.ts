import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilityBarComponent } from './core/layout/utility-bar/utility-bar.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { StickyActionsComponent } from './core/layout/sticky-actions/sticky-actions.component';
import { QuoteModalComponent } from './core/layout/quote-modal/quote-modal.component';
import { ToastContainerComponent } from './core/layout/toast-container/toast-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UtilityBarComponent,
    HeaderComponent,
    FooterComponent,
    StickyActionsComponent,
    QuoteModalComponent,
    ToastContainerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Samarth Engineering';
}
