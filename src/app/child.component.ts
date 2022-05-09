import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    template: ``
})

export class ChildComponent implements OnInit {
    arrList: Array<Object> = [] 
    constructor() { }

    ngOnInit() {
        // console.log('data from parent',this.parentDataList);
    }

    showanothrList(val: any) {
        console.log(val)
    }


}