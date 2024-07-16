import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput, Result } from './investment-input.model';
import { InvetmentResultsComponent } from "./invetment-results/invetment-results.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData?: Result[];
  
}
