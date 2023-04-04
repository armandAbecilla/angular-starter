import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutStandardComponent } from './layouts/layout-standard/layout-standard.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutStandardComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => import(`./pages/home/home.module`).then((m) => m.HomeModule)
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            paramsInheritanceStrategy: 'always',
            scrollPositionRestoration: 'enabled',
        })
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent],
})
export class AppRoutingModule { }
