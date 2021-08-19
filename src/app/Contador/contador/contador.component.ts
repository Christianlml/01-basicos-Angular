import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent{
    public titulo: string = 'Contador app';
    public numero: number = 10;
    public base: number = 5;

    acumular( valor: number ){
        this.numero += valor * this.base;
    }
}