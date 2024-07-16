import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { InvetmentResultsComponent } from "./invetment-results/invetment-results.component";

@NgModule({
    declarations:[AppComponent, HeaderComponent, UserInputComponent, InvetmentResultsComponent],
    imports:[BrowserModule, FormsModule],
    bootstrap:[AppComponent]

})
export class AppModule{

}