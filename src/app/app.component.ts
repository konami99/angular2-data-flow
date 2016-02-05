import { Component } from "angular2/core";
import { Child } from "../child/child.component";

@Component({
    selector: "modern-js",
    template: `
    <div>
        root text: <input type="text" #textInput [(ngModel)]="textqq">
        <button (click)="onChange(textInput.value)">change</button>
        <child-component [textzz]="textqq" (changed)="onChange($event)"></child-component>
        <child-component [textzz]="textqq" (changed)="onChange($event)"></child-component>
        <child-component [textzz]="textqq" (changed)="onChange($event)"></child-component>
    </div>
    `,
    styles: [`
        div {
            background-color: rgb(247,247,247);
            border: solid 1px rgba(0,0,0,0.1);
            padding: 1em;
            margin: 1em;
        }
    `],
    directives: [Child]
})
export class App {
    textqq = "";
    
    onChange(value: string) {
        this.textqq = value;
    }
}
