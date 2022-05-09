import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpLoader } from './http-loader';
import { HttpClientModule } from '@angular/common/http';

import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER
} from "@ngneat/transloco";
import { FormFocusDirective } from './form-focus.directive';

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
    SessionTimeoutComponent,
    FormFocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    TranslocoModule,
    ReactiveFormsModule
  ],
  exports: [EqualValidator],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        prodMode: false,
        availableLangs: [
          { id: 'en', label: 'English' },
          { id: 'hi', label: 'Spanish' },
        ],
        reRenderOnLangChange: true,
        fallbackLang: 'es',
        defaultLang: 'hi',
        missingHandler: {
          useFallbackTranslation: false,
        },
        // interpolation: ['<<<', '>>>']
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: HttpLoader },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
