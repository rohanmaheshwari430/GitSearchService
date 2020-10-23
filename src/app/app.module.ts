import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositorySearchService } from './repository-search.service';
import { SearchComponent } from './search/search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path:'search', component: SearchComponent},
  {path:'home', component: HomepageComponent},
  {path:'notfound', component: NotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomepageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RepositorySearchService],
  bootstrap: [AppComponent, HomepageComponent, NotfoundComponent]
})
export class AppModule { }
