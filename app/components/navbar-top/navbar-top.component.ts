import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'navbar-top',
    templateUrl:'navbar-top.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class NavbarComponent { }