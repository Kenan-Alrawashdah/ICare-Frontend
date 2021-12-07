import { Component, OnInit } from '@angular/core';
import 'jquery';
@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
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

    
      // ---------------------------------------------//
      // Slick Slider
      // ---------------------------------------------//
      $(".slider").each(function () {
        var play = $(this).data("autoplay");
        var playSpeed = $(this).data("autoplay-speed");
        var nav = $(this).data("nav");
        var dot = $(this).data("dots");
        var slidesToshow = $(this).data("slides-to-show");
        var slidesToscroll = $(this).data("slides-to-scroll");
        var slideCenter = $(this).data("slick-center-mode");
       
      });
      $(".slider-for").each(function () {
        var play = $(this).data("autoplay");
        var playSpeed = $(this).data("autoplay-speed");
        var nav = $(this).data("nav");
        var dot = $(this).data("dots");
        var slidesToshow = $(this).data("slides-to-show");
        var slidesToscroll = $(this).data("slides-to-scroll");
        var slideCenter = $(this).data("slick-center-mode");
      
      });
      $(".slider-nav").each(function () {
        var play = $(this).data("autoplay");
        var playSpeed = $(this).data("autoplay-speed");
        var nav = $(this).data("nav");
        var dot = $(this).data("dots");
        var slidesToshow = $(this).data("slides-to-show");
        var slidesToscroll = $(this).data("slides-to-scroll");
        var slideCenter = $(this).data("slick-center-mode");
       
      });
    
      // ---------------------------------------------//
      // add Remove item
      // ---------------------------------------------//
   
    
      // ---------------------------------------------//
      // File Upload name add
      // ---------------------------------------------//
      $(".custom-input-file").each(function () {
        var $input = $(this),
          $label = $input.next("label"),
          labelVal = $label.html();
    
       
    
        // Firefox bug fix
        $input
          .on("focus", function () {
            $input.addClass("has-focus");
          })
          .on("blur", function () {
            $input.removeClass("has-focus");
          });
      });
    
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
    

    

}
