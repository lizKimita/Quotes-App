import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Shiko','Start every day off with a smile and get it over with','W.C Fields'),
    new Quote(2,'Mwathi','I finally realized that people are prisoners of their phones,that is why it is called a cell phone', 'Anonymous'),
    new Quote(3,'Glamo','If you are going through hell, keep going', 'Winston Churchill'),
    new Quote(4,'Kittony','And so ends another week without me getting rich unexpectedly','Anonymous'),
    new Quote(5,'Kijo','Insanity: doing the same thing over and over again and expecting different results','Albert Einstein'),
    new Quote(6,'Grace','I think it is good that books still exist, but they do make me sleepy','Frank Zappa'),
    new Quote(7,'Asenath','I would like to live like a poor man,only with lots of money','Pablo Picasso'),
]

  constructor() { }

  ngOnInit() {
  }

}
