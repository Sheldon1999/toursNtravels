import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { PageFooterComponent } from './page-footer/page-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    SliderComponent,
    PackagesComponent,
    ContactComponent,
    PageFooterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
