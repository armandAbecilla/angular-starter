import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import layout components here
import { LayoutStandardComponent } from '../layouts/layout-standard/layout-standard.component';

// import global components here
import { HeaderComponent } from '../globals/header/header.component';
import { FooterComponent } from '../globals/footer/footer.component';

const LAYOUT_COMPONENTS: any = [LayoutStandardComponent]

const GLOBAL_COMPONENTS: any = [HeaderComponent, FooterComponent]

const COMPONENTS: any = []

const CONTAINER_COMPONENTS: any = []

const PIPES: any = []

const DIRECTIVES: any = []

// add module or component exports here
const COMPONENT_EXPORTS: any = []

// do not modify these two unless necessary
const APP_DECLARATIONS = [].concat(
  LAYOUT_COMPONENTS,
  GLOBAL_COMPONENTS,
  COMPONENTS,
  CONTAINER_COMPONENTS,
  PIPES,
  DIRECTIVES,
);

const APP_DECLARATION_EXPORTS = [].concat(APP_DECLARATIONS, COMPONENT_EXPORTS);

@NgModule({
  declarations: [APP_DECLARATIONS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: APP_DECLARATION_EXPORTS,
})
export class SharedModule { }
