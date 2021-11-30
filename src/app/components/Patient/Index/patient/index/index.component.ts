import { Component, OnInit } from '@angular/core';
import 'jquery';
import { Constants } from 'src/app/Helper/constants';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (function ($) {
      'use strict';

      // Close the dropdown if the user clicks outside of it
      window.onclick = function (event) {};

      $('.header-search input.custom-search').on('click', function (event) {
        if ($('.search-content .search-product').hasClass('d-none')) {
          $('.search-content').find('.search-product').removeClass('d-none');
          if ($('.search_overlay').length > 0 == false) {
            $('body').append('<div class="search_overlay"></div>');
          }
          $('.header , .announcement-header').css({ zIndex: '99999' });
          $('body').css({ overflow: 'hidden' });
        } else {
          $('.search-content').find('.search-product').addClass('d-none');
          $('body').find('.search_overlay').remove();
          $('.header , .announcement-header').attr({ style: '' });
          $('body').attr({ style: '' });
        }
      });
      $(document).on('click', '.search_overlay', function (event) {
        $('.search-content').find('.search-product').addClass('d-none');
        $('body').find('.search_overlay').remove();
        $('.header , .announcement-header').attr({ style: '' });
        $('body').attr({ style: '' });
      });

      $(document).click((event) => {
        if (!$(event.target).closest('#element').length) {
          $('.user-links').removeClass('show');
          $('#showCart').removeClass('show');
        }
      });

      $('#account').on('click', function () {
        if ($('.user-links').hasClass('show')) {
          $('.user-links').removeClass('show');
        } else {
          $('.user-links').addClass('show');
        }
      });
      $('#cart').on('click', function () {
        if ($('#showCart').hasClass('show')) {
          $('#showCart').removeClass('show');
        } else {
          $('#showCart').addClass('show');
        }
      });
    })(jQuery);
  }
  logout() {
    localStorage.removeItem(Constants.USER_KEY);
  }
}
