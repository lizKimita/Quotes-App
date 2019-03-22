export class Quote {
    public showDetails:boolean;
    constructor (public id:number, public name:string, public message:string, public author: string, public inputDate:Date){
        this.showDetails=false
    }
}
