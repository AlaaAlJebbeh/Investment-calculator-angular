import { Component,Output, EventEmitter } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
constructor(private investmentService: InvestmentService){}
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn= '5';
  enteredDuration = '10';

  onCalculate(){
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment

    })
    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment ='0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }
}
