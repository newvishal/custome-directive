import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent',
    template: `
        <app-child></app-child>
        <button class="primary-btn" (click)="addList()">Add List</button>
    `
})

export class ParentComponent implements OnInit, AfterViewInit {
    @ViewChild(ChildComponent) child: ChildComponent
    constructor() { }

    addList(){
        let obj = {
           id: 1,
           userId: 123,
           title: 'ankit',
           body:'every thing mcm complrter'
         }
        this.child.arrList = [...this.child.arrList, obj];
     }
     ngAfterViewInit(){
       this.child.showanothrList(true);
     }

    ngOnInit() { }
}