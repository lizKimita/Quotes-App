export class Quote {
    public showDetails:boolean;
    constructor (public id:number, public name:string, public message:string, public author: string, public votes:number){
        this.showDetails=false
    }
}
