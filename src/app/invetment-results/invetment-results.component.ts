import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-invetment-results',
  templateUrl: './invetment-results.component.html',
  styleUrl: './invetment-results.component.css'
})
export class InvetmentResultsComponent {
  private investmentService = inject(InvestmentService);

  get results(){
    return this.investmentService.resultsData;
  }
}
