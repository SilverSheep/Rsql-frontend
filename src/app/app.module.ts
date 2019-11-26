import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimalDetailsComponent} from './animal-details/animal-details.component';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {SearchComponent} from './search/search.component';
import {MainComponent} from './main/main.component';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        AnimalDetailsComponent,
        AnimalListComponent,
        SearchComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        HttpClientModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
