import { Component, OnInit } from '@angular/core';

import 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ICareApp';

  ngOnInit() {
    (function ($) {
      'use strict';
      // ---------------------------------------------//
      //  Background
      //--------------------------------------------- //
      $('[data-background]').each(function () {
        $(this).attr(
          'style',
          'background-image:url(' + $(this).attr('data-background') + ')'
        );
      });
      // ---------------------------------------------//
      //  Background
      //--------------------------------------------- //

      //-------------------------------------------------------
      // Date Picker
      //-------------------------------------------------------*/

      // -------------------------------------------//
      //  Custom Select
      // -------------------------------------------//

      // ---------------------------------------------//
      // add Remove item
      // ---------------------------------------------//

      // ---------------------------------------------//
      // File Upload name add
      // ---------------------------------------------//

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

      $('.open-sidebar').on('click', function (event) {
        $('.menu-sidebar').addClass('show');
        $('.overlay').addClass('show');
      });
      $('.close').on('click', function (event) {
        $('.menu-sidebar').removeClass('show');
        $('.overlay').removeClass('show');
      });
      $('.overlay').on('click', function (event) {
        $('.menu-sidebar').removeClass('show');
        $('.overlay').removeClass('show');
      });
    })(jQuery);
  }
}
