import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lef-nav',
  templateUrl: './lef-nav.component.html',
  styleUrls: ['./lef-nav.component.css']
})
export class LefNavComponent {


  showNav() {
    const nav = document.querySelector('.nav');
    nav?.classList.remove("d-none");
    nav?.classList.add('d-block')
  }

  closeNav() {
    const nav = document.querySelector('.nav');
    nav?.classList.remove("d-block");
    nav?.classList.add('d-none')
  }

  showProfileNav() {
    const nav = document.getElementById('developer-profile-nav');
    if (nav?.className === "d-none") {
      const active = document.getElementById('user-info-arrow-down')?.style.setProperty('transform', 'rotate(180deg)');
      nav?.classList.remove('d-none');
      nav?.classList.add('d-block');
    }
    else if(nav?.className === "d-block") {
      const active = document.getElementById('user-info-arrow-down')?.style.setProperty('transform', 'rotate(0deg)');
      nav?.classList.remove('d-block');
      nav?.classList.add('d-none')

    }
  }

  showProjectList(){
    const list = document.getElementById('project-list');
    if(list?.className === "d-none"){
      const active = document.getElementById('project-info-arrow-down')?.style.setProperty('transform', 'rotate(180deg)');
      list?.classList.remove('d-none');
      list?.classList.add('d-block');
    }
    else{
      const active = document.getElementById('project-info-arrow-down')?.style.setProperty('transform', 'rotate(0deg)');
      list?.classList.remove('d-block');
      list?.classList.add('d-none');
    }
  }

}
