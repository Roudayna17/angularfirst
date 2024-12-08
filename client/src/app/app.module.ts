import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ClarityModule } from "@clr/angular";
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon,cogIcon, vmBugIcon, pencilIcon, trashIcon, plusIcon, usersIcon, employeeIcon } from '@cds/core/icon';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClientModule } from './client/client.module';
import { ClientRoutingModule } from './client/client-routing.module';
import { UserdetailComponent } from './userdetail/userdetail.component';

ClarityIcons.addIcons(userIcon, cogIcon, vmBugIcon, pencilIcon, trashIcon, plusIcon, usersIcon, employeeIcon);

@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CoreModule,ClarityModule,UserModule,BrowserAnimationsModule,ClientModule,ClientRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
