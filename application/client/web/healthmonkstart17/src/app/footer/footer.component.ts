import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {
    private jwtToken: String | null | undefined = '';
    constructor (
    ) { }

    ngOnInit() {
    }

}