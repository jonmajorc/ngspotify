import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

const routes:RouterConfig = [
    {
        path:'',
        component:SearchComponent,
    },
    {
        path:'about',
        component:AboutComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
] 