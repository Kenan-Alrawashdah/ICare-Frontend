import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/services/token.service';
import { HomeService } from './home.service';
import { CartItemModel } from './models/cartItem.model';
import { DrugModel } from './models/Drug.model';
import { SearchModel } from './models/search.model';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  searchList: SearchModel[];
  cartList:CartItemModel[];
  cartItemNumber:number;
  Name: string ;
  mobileSearch:boolean = false;

  public isLogin: boolean;
  public InputSearch: string;
  constructor(
    private service: HomeService,
    private tokenService: TokenStorageService,
    private toastr:ToastrService,
    private router:Router
  ) {}
  ngOnInit(): void {
    let token = this.tokenService.getToken();
    if (token == null) {
      this.isLogin = false;
    } else {
      this.GetCartItems();
      this.isLogin = true;
      this.Name = this.tokenService.getUser();
    }

  }

  GetDrugByNameSearch() {
    if(this.InputSearch != '' )
    {
      this.service.GetDrugByNameSearch(this.InputSearch).subscribe(
        (data) => {
          if (data.success) {
            console.log(data.data)
            this.searchList = data.data as unknown as SearchModel[];
          }
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
  
  }
  logout() {
    this.tokenService.signOut();
    $(".menu-sidebar").removeClass("show");
    $(".overlay").removeClass("show");
    this.ngOnInit();
  }

  async GetCartItems()
  {
    await this.service.GetCartItems().toPromise()
    .then(
      (response)=>{
        this.cartList = response.data;
        this.cartItemNumber = response.data.length
      }
    )
  }



  ngAfterViewInit() {

    (function ($) {
      'use strict';

      // Close the dropdown if the user clicks outside of it
      window.onclick = function (event) {};
      
        $("#mobile").click(function(){
          if($("#SmSearch2").css('display') == 'none')
        {
          $("#SmSearch2").css('display', 'block');
        }else{
            $("#SmSearch2").css('display', 'none');
        }
        });
      
      $('.header-search input.custom-search ').on('click', function (event) {
        if ($('.search-content .search-product').hasClass('d-none')) {
          $('.search-content').find('.search-product').removeClass('d-none');
          if ($('.search_overlay').length > 0 == false) {
            $('body').append('<div class="search_overlay"></div>');
          }
          $('.header , .announcement-header').css({ zIndex: '99999' });
          $('body').css({ overflow: 'hidden' });
          $('#Navigators').hide();
        } else {
          $('.search-content').find('.search-product').addClass('d-none');
          $('body').find('.search_overlay').remove();
          $('.header , .announcement-header').attr({ style: '' });
          $('body').attr({ style: '' });
          $('#Navigators').show();
        }
      });
      $(document).on('click', '.search_overlay', function (event) {
        $('.search-content').find('.search-product').addClass('d-none');
        $('body').find('.search_overlay').remove();
        $('.header , .announcement-header').attr({ style: '' });
        $('body').attr({ style: '' });
        $('#Navigators').show();
      });
    })(jQuery);

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
    (function ($) {
      "use strict";
      // ---------------------------------------------//
      //  Background
      //--------------------------------------------- //
      $("[data-background]").each(function () {
        $(this).attr(
          "style",
          "background-image:url(" + $(this).attr("data-background") + ")"
        );
      });
      // ---------------------------------------------//
      //  Background
      //--------------------------------------------- //
      if ($(".range-slider").length > 0) {
        var nonLinearSlider = $(".range-slider");
        var startMin = parseInt(nonLinearSlider.data("start-min"));
        var startMax = parseInt(nonLinearSlider.data("start-max"));
        var min = parseInt(nonLinearSlider.data("min"));
        var max = parseInt(nonLinearSlider.data("max"));
        var step = parseInt(nonLinearSlider.data("step"));
    
        var slider = document.getElementById("nouislider");
    
      
      }
      //-------------------------------------------------------
      // Date Picker
      //-------------------------------------------------------*/
   
      // -------------------------------------------//
      //  Custom Select
      // -------------------------------------------//

    
      // ---------------------------------------------//
      // Slick Slider
      // ---------------------------------------------//
   
      // ---------------------------------------------//
      // add Remove item
      // ---------------------------------------------//
   
  
    
      var websiteWidth = $(document).width();
      $(".header-links-item .header-childrenItem-parent").on(
        "mouseover",
        function (event) {
          var liparent = $(this.parentElement);
          var ulChild = liparent.find(".header-childrenItem-child-category-links");
          var xOffset = liparent.offset().left;
          var alignRight = $(document).width() - xOffset < xOffset;
    
          if ($(document).width() > websiteWidth) {
            ulChild.addClass("dropdown-menu-right");
          }
        }
      );
    
      $(".header-search input.custom-search").on("click", function (event) {
        if ($(".search-content .search-product").hasClass("d-none")) {
          $(".search-content").find(".search-product").removeClass("d-none");
          if ($(".search_overlay").length > 0 == false) {
            $("body").append('<div class="search_overlay"></div>');
          }
          $(".header , .announcement-header").css({ zIndex: "99999" });
          $("body").css({ overflow: "hidden" });
        } else {
          $(".search-content").find(".search-product").addClass("d-none");
          $("body").find(".search_overlay").remove();
          $(".header , .announcement-header").attr({ style: "" });
          $("body").attr({ style: "" });
        }
      });
      $(document).on("click", ".search_overlay", function (event) {
        $(".search-content").find(".search-product").addClass("d-none");
        $("body").find(".search_overlay").remove();
        $(".header , .announcement-header").attr({ style: "" });
        $("body").attr({ style: "" });
      });
    
      $(".open-sidebar").on("click", function (event) {
        $(".menu-sidebar").addClass("show");
        $(".overlay").addClass("show");
      });
      $(".close").on("click", function (event) {
        $(".menu-sidebar").removeClass("show");
        $(".overlay").removeClass("show");
      });
      $(".overlay").on("click", function (event) {
        $(".menu-sidebar").removeClass("show");
        $(".overlay").removeClass("show");
      });
    })(jQuery);
  }



  async CheckItemIfInCart(id:number){
    await this.service.CheckItemIfInCart(id).toPromise()
    .then(
      (response)=>{
        if(response.success == true)
        {
          this.addToCart(id);
        }else{
          this.toastr.warning(response.errors[0], '',{
            timeOut: 2000,
          });
        }
      }
    )
  }


  addToCart(id:number)
  {
    $('.search-content').find('.search-product').addClass('d-none');
    $('body').find('.search_overlay').remove();
    $('.header , .announcement-header').attr({ style: '' });
    $('body').attr({ style: '' });
    this.service.AddToCart(id,1).subscribe(
      (data)=>{
      this.ngOnInit();
      if(data.success ==true)
      this.toastr.success('Item added successfully', '',{
        timeOut: 2000,
      });
      }
    );
  }

  public GoToDrug(id:number){
    this.service.DrugId = id;
    this.router.navigate(['Home/Drug']);
    $('.search-content').find('.search-product').addClass('d-none');
    $('body').find('.search_overlay').remove();
    $('.header , .announcement-header').attr({ style: '' });
    $('body').attr({ style: '' });
  }

  sidebarGoTo(route:string)
  {
    this.router.navigate([route]);
    $(".menu-sidebar").removeClass("show");
    $(".overlay").removeClass("show");
  }




}
