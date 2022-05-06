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
import { SessionTimeoutModalComponent } from './comman/session-timeout/session-timeout-modal.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SessionTimeoutComponent } from './comman/session-timeout/session-timeout.component';

@NgModule({
  declarations: [
    AppComponent,
    HideafterDirective,
    EqualValidator,
    ComplexityValidator,
    ButtonBusyDirective,
    ParentComponent,
    ChildComponent,
    SessionTimeoutModalComponent,
    SessionTimeoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [EqualValidator],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
