import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ApiMemberService } from './services/api-member.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  

@NgModule({
  declarations: [
    AppComponent,
    ListMemberComponent,
    LoginComponent,
    AdminComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ApiMemberService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
