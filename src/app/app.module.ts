import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { LinechartComponent } from './components/linechart/linechart.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
