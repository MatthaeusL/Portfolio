import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './legal/legal.component';
import { MainComponent } from './main/main.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'legal', component: LegalComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
