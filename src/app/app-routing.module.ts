import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './legal/legal.component';
import { MainComponent } from './main/main.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SentMessageComponent } from './sent-message/sent-message.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'sent', component: SentMessageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

