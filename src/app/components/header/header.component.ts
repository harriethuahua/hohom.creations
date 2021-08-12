import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  public toggleMenu() {
    if ( $('.header').hasClass('active') ) {
      $('html, body').css('overflow-y', 'scroll');
      $('.header').removeClass('active');
    } else {
      $('html, body').css('overflow-y', 'hidden');
      $('.header').addClass('active');
    }
  }

  public closeMenu() {
    $('html, body').css('overflow-y', 'scroll');
    $('.header').removeClass('active');
  }


}
