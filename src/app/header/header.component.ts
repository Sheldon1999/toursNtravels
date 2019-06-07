import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  triggerDropdown = false;

  toggleDropdown(){
    this.triggerDropdown = true;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scroll(el:HTMLElement){
    el.scrollIntoView();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

}
