import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';

const routes: Routes = [
  { path: 'Donuts', component: DonutsComponent },
  { path: 'Donuts/:id', component: DonutDetailComponent },
  { path: 'Famouspeople', component: FamousPeopleComponent },
  { path: 'Famouspeople/:firstName', component: FamousPersonDetailComponent },
  { path: '**', redirectTo: '/Donuts', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FamousPersonDetailComponent,
    FamousPeopleComponent,
    DonutsComponent,
    DonutDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
