import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Shiko','Start every day off with a smile and get it over with!','W.C Fields', new Date(2018,10,12)),
    new Quote(3,'Glamo','If you are going through hell, keep going.', 'Winston Churchill',new Date(2019,0,12)),
    new Quote(4,'Kittony','And so ends another week without me getting rich unexpectedly.','Anonymous', new Date(2019,3,1)),
    new Quote(5,'Kijo','Insanity: doing the same thing over and over again and expecting different results.','Albert Einstein', new Date(2018,11,25)),
    new Quote(6,'Grace','I think it is good that books still exist, but they do make me sleepy.','Frank Zappa', new Date(2019,5.28)),
    new Quote(7,'Asenath','I would like to live like a poor man,only with lots of money.','Pablo Picasso', new Date(2018,5,28)),
]

revealDetails(i){
  this.quotes[i].showDetails = !this.quotes[i].showDetails;
}

deleteQuote(isComplete, index){
  if (isComplete){
    let toDelete=confirm(` Are you sure you want to delete; " ${this.quotes[index].message}"`)

    if (toDelete) {
      this.quotes.splice(index,1)
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
