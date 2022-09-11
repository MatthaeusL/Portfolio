import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImDevComponent } from './im-dev/im-dev.component';
import { SkillComponent } from './tamplates/skill/skill.component';
import { WorkSwitchComponent } from './tamplates/work-switch/work-switch.component';
import { WorkCardComponent } from './tamplates/work-card/work-card.component';
import { AboutmeCardsComponent } from './tamplates/aboutme-cards/aboutme-cards.component';
import { MainComponent } from './main/main.component';
import { LegalComponent } from './legal/legal.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SentMessageComponent } from './sent-message/sent-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MySkillsComponent,
    MyWorkComponent,
    ContactComponent,
    AboutMeComponent,
    ImDevComponent,
    SkillComponent,
    WorkSwitchComponent,
    WorkCardComponent,
    AboutmeCardsComponent,
    MainComponent,
    LegalComponent,
    PrivacyComponent,
    SentMessageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
