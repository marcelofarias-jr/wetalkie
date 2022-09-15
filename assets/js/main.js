var App = App || {};

App.Main = {
  init: function() {
    this.cacheSelectors();
    this.bindEvents();
  },
  
  cacheSelectors: function() {
    // Anchors
    this.anchors = $('a[href^="#"]');

    // Carousels
    this.invoicePhones = $('.invoice__phones');
    this.chargeImages = $('.charge__carousel');
    this.chargeCards = $('.charge__cards');
    this.integrationCards = $('.integrations__cards');
    this.commsImages = $('.comms__images');
    this.plansCards = $('.plans__cards');

    // Contact
    this.contactHandler = $('[data-contact]');
    this.contactForm = $('.contact-form');
    this.contactBackdrop = $('.contact-form__backdrop');
    this.contactClose = $('.contact-form__close');

    // Mobile menu
    this.mobileMenu = $('.navbar__mobile');
    this.navbarToggle = $('.navbar__toggle');

    // Scroll
    this.scrollPosition = 0;
    this.contactFormHandler = $('.contact-form__handler');
  },

  bindEvents: function() {
    this.anchors.click(this.Events.smoothScrollHandler);

    this.invoicePhones.slick(this.Props.invoiceCarousel);
    this.chargeImages.slick(this.Props.chargeImages);
    this.chargeCards.slick(this.Props.chargeCards);
    this.commsImages.slick(this.Props.commsImages);
    this.plansCards.slick(this.Props.plansCarousel);
    this.contactHandler.click(this.Events.openContactForm);
    this.contactBackdrop.click(this.Events.closeContactForm);
    this.contactClose.click(this.Events.closeContactForm);
    this.navbarToggle.click(this.Events.handleMobileMenu);

    if ( window.innerWidth < 992 ) {
      this.integrationCards.slick(this.Props.integrationCards);
    }
    
    $(window).resize(() => {
      if ( window.innerWidth < 992 ) {
        this.integrationCards.slick(this.Props.integrationCards);
      } else {
        this.integrationCards.slick('unslick');
      }
    })

    $('body').scroll(this.Events.showContactButton);
  },

  Events: {
    smoothScrollHandler: function() {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500)
    },
    
    openContactForm: function() {
      App.Main.contactForm.addClass('active');
    },

    closeContactForm: function() {
      App.Main.contactForm.removeClass('active');
    },

    handleMobileMenu: function() {
      App.Main.mobileMenu.toggleClass('active');
    },

    showContactButton: function() {
      if ( $(this).scrollTop() > 300 ) {
        App.Main.contactFormHandler.addClass('active');
      } else {
        App.Main.contactFormHandler.removeClass('active');
      }
    }
  },

  Props: {
    invoiceCarousel: {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            centerMode: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            centerMode: true
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
      ]
    },

    chargeImages: {
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      dots: false,
      nextArrow: '<button class="arrow arrow__next"><svg width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.20979 54C1.91511 53.9966 1.62481 53.928 1.35952 53.7991C1.09423 53.6702 0.860457 53.4842 0.67482 53.2542C0.264668 52.8442 0.0244779 52.2932 0.00264547 51.7122C-0.0224813 51.2488 0.132144 50.7937 0.434041 50.4424C0.842844 50.0293 1.30514 49.6733 1.80849 49.3841L28.5428 27.268L1.57774 4.51516C1.19163 4.27604 0.851746 3.96874 0.574495 3.6081C0.301206 3.22796 0.163372 2.76641 0.18323 2.29791C0.179403 1.99033 0.237909 1.68518 0.355191 1.40103C0.472472 1.11688 0.646075 0.859676 0.865437 0.645059C1.0736 0.417166 1.33118 0.240455 1.61823 0.128604C1.90528 0.0167533 2.2141 -0.0272358 2.52079 4.21535e-05C2.83083 0.00836119 3.13678 0.0732464 3.42371 0.191532C3.77319 0.331419 4.10904 0.503484 4.42696 0.705529L32.0363 24.2789C33.1097 25.196 33.5676 25.8495 33.6114 27.2117C33.6114 28.3909 32.8489 29.2274 32.267 29.8119L4.17615 53.4155C3.85511 53.5767 3.53407 53.7279 3.1729 53.8589C2.86277 53.9632 2.53662 54.0109 2.20979 54Z" fill="#0058FF"/></svg></button>',
      prevArrow: '<button class="arrow arrow__prev"><svg width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4016 54C31.6962 53.9966 31.9865 53.928 32.2518 53.7991C32.5171 53.6702 32.7509 53.4842 32.9365 53.2542C33.3467 52.8442 33.5869 52.2932 33.6087 51.7122C33.6338 51.2488 33.4792 50.7937 33.1773 50.4424C32.7685 50.0293 32.3062 49.6733 31.8029 49.3841L5.06855 27.268L32.0336 4.51516C32.4197 4.27604 32.7596 3.96874 33.0369 3.6081C33.3102 3.22796 33.448 2.76641 33.4281 2.29791C33.432 1.99033 33.3734 1.68518 33.2562 1.40103C33.1389 1.11688 32.9653 0.859676 32.7459 0.645059C32.5378 0.417166 32.2802 0.240455 31.9931 0.128604C31.7061 0.0167533 31.3973 -0.0272358 31.0906 4.21535e-05C30.7805 0.00836119 30.4746 0.0732464 30.1876 0.191532C29.8382 0.331419 29.5023 0.503484 29.1844 0.705529L1.57508 24.2789C0.501617 25.196 0.0438004 25.8495 -3.8147e-06 27.2117C-3.8147e-06 28.3909 0.76247 29.2274 1.34433 29.8119L29.4352 53.4155C29.7562 53.5767 30.0773 53.7279 30.4385 53.8589C30.7486 53.9632 31.0747 54.0109 31.4016 54Z" fill="#0058FF"/></svg></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            infinite: true,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            arrows: false,
            infinite: true
          }
        }
      ]
    },

    commsImages: {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            centerMode: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            centerMode: true
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
      ]
    },

    chargeCards: {
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            infinite: true,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1.05,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
            arrows: false
          }
        }
      ]
    },

    integrationCards: {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            infinite: true,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
            arrows: false
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1.05,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
            arrows: false
          }
        }
      ]
    },

    plansCarousel: {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      nextArrow: '<button class="arrow arrow__next"><svg width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.20979 54C1.91511 53.9966 1.62481 53.928 1.35952 53.7991C1.09423 53.6702 0.860457 53.4842 0.67482 53.2542C0.264668 52.8442 0.0244779 52.2932 0.00264547 51.7122C-0.0224813 51.2488 0.132144 50.7937 0.434041 50.4424C0.842844 50.0293 1.30514 49.6733 1.80849 49.3841L28.5428 27.268L1.57774 4.51516C1.19163 4.27604 0.851746 3.96874 0.574495 3.6081C0.301206 3.22796 0.163372 2.76641 0.18323 2.29791C0.179403 1.99033 0.237909 1.68518 0.355191 1.40103C0.472472 1.11688 0.646075 0.859676 0.865437 0.645059C1.0736 0.417166 1.33118 0.240455 1.61823 0.128604C1.90528 0.0167533 2.2141 -0.0272358 2.52079 4.21535e-05C2.83083 0.00836119 3.13678 0.0732464 3.42371 0.191532C3.77319 0.331419 4.10904 0.503484 4.42696 0.705529L32.0363 24.2789C33.1097 25.196 33.5676 25.8495 33.6114 27.2117C33.6114 28.3909 32.8489 29.2274 32.267 29.8119L4.17615 53.4155C3.85511 53.5767 3.53407 53.7279 3.1729 53.8589C2.86277 53.9632 2.53662 54.0109 2.20979 54Z" fill="#0058FF"/></svg></button>',
      prevArrow: '<button class="arrow arrow__prev"><svg width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4016 54C31.6962 53.9966 31.9865 53.928 32.2518 53.7991C32.5171 53.6702 32.7509 53.4842 32.9365 53.2542C33.3467 52.8442 33.5869 52.2932 33.6087 51.7122C33.6338 51.2488 33.4792 50.7937 33.1773 50.4424C32.7685 50.0293 32.3062 49.6733 31.8029 49.3841L5.06855 27.268L32.0336 4.51516C32.4197 4.27604 32.7596 3.96874 33.0369 3.6081C33.3102 3.22796 33.448 2.76641 33.4281 2.29791C33.432 1.99033 33.3734 1.68518 33.2562 1.40103C33.1389 1.11688 32.9653 0.859676 32.7459 0.645059C32.5378 0.417166 32.2802 0.240455 31.9931 0.128604C31.7061 0.0167533 31.3973 -0.0272358 31.0906 4.21535e-05C30.7805 0.00836119 30.4746 0.0732464 30.1876 0.191532C29.8382 0.331419 29.5023 0.503484 29.1844 0.705529L1.57508 24.2789C0.501617 25.196 0.0438004 25.8495 -3.8147e-06 27.2117C-3.8147e-06 28.3909 0.76247 29.2274 1.34433 29.8119L29.4352 53.4155C29.7562 53.5767 30.0773 53.7279 30.4385 53.8589C30.7486 53.9632 31.0747 54.0109 31.4016 54Z" fill="#0058FF"/></svg></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            infinite: true,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
            arrows: false
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1.05,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
            arrows: false
          }
        }
      ]
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  App.Main.init();
})