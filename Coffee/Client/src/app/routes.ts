
import { HomeComponent } from './home/home.component';


export const appRoutes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
]