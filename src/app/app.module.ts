import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EqualValidator } from './equal-validator.directive';
import { HideafterDirective } from './hideafter.directive';
import { ButtonBusyDirective } from './busy-button.directive';
import { ComplexityValidator } from './password-complexity-validator.directive';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';



@NgModule({
  declarations: [
    AppComponent,
    HideafterDirective,
    EqualValidator,
    ComplexityValidator,
    ButtonBusyDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [EqualValidator],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
