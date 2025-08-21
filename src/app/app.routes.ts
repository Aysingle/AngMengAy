import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { CardAdded } from './card-added/card-added';
import { ErrorPage } from './error-page/error-page';
import { About } from './about/about';
import { Contact } from './contact/contact';



export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path:'cart',
        component:CardAdded
    },
    {
        path:'about',
        component:About
    },
  
    {
        path:'contact',
        component:Contact
    },
    
    {
        path:'**',
        component:ErrorPage
    },
];
