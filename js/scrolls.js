
// Sticky navbar.

$(document).ready(function () {

    $('.about-section').waypoint(function (direction) {
        if (direction === 'down') {
            $('.main-nav').addClass('sticky');
        } else {
            $('.main-nav').removeClass('sticky');

        }
    }, {
        offset: '100px'
    })
});

// Animations on scroll (waypoints)


$('.js--wp-1').waypoint(function(direction) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '80%'
});

$('.js--wp-2').waypoint(function(direction) {
  $('.js--wp-2').addClass('animated pulse');
}, {
  offset: '80%'
});

$('.js--wp-3').waypoint(function(direction) {
  $('.js--wp-3').addClass('animated fadeIn');
}, {
  offset: '80%'
});

$('.js--wp-4').waypoint(function(direction) {
  $('.js--wp-4').addClass('animated pulse');
}, {
  offset: '80%'
});

// Mobile

function mobileNavReset() {
  let nav = $('.js--main-nav');
  let icon = $('.--js-nav-icon i');

  if($(window).width() > 768) {
     return; 
  }

  nav.slideToggle(200);
  /* switch from hamburger to cross icon */
  if (icon.hasClass('ion-navicon-round')) {
      nav.css({
          "display": "block"
      })
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
  } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
  }
}

/* Mobile Navigation */
$('.--js-nav-icon').click(function () {
  let nav = $('.js--main-nav');
  let icon = $('.--js-nav-icon i');

  nav.slideToggle(200);
  /* switch from hamburger to cross icon */
  if (icon.hasClass('ion-navicon-round')) {
      nav.css({
          "display": "block"
      })
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
  } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
  }
});

// Natural offset for fixed navbar.

(function(document, history, location) {
    var HISTORY_SUPPORT = !!(history && history.pushState);
  
    var anchorScrolls = {
      ANCHOR_REGEX: /^#[^ ]+$/,
      OFFSET_HEIGHT_PX: 60, // Amount of offset in pixels
  
      /**
       * Establish events, and fix initial scroll position if a hash is provided.
       */
      init: function() {
        this.scrollToCurrent();
        $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
        $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
      },
  
      /**
       * Return the offset amount to deduct from the normal scroll position.
       * Modify as appropriate to allow for dynamic calculations
       */
      getFixedOffset: function() {
        return this.OFFSET_HEIGHT_PX;
      },
  
      /**
       * If the provided href is an anchor which resolves to an element on the
       * page, scroll to it.
       * @param  {String} href
       * @return {Boolean} - Was the href an anchor.
       */
      scrollIfAnchor: function(href, pushToHistory) {
        var match, anchorOffset;
  
        if(!this.ANCHOR_REGEX.test(href)) {
          return false;
        }
  
        match = document.getElementById(href.slice(1));
  
        if(match) {
          anchorOffset = $(match).offset().top - this.getFixedOffset();
          $('html, body').animate({ scrollTop: anchorOffset});
  
          // Add the state to history as-per normal anchor links
          if(HISTORY_SUPPORT && pushToHistory) {
            history.pushState({}, document.title, location.pathname + href);
          }
        }
  
        return !!match;
      },
      
      /**
       * Attempt to scroll to the current location's hash.
       */
      scrollToCurrent: function(e) { 
        if(this.scrollIfAnchor(window.location.hash) && e) {
            e.preventDefault();
        }
      },
  
      /**
       * If the click event's target was an anchor, fix the scroll position.
       */
      delegateAnchors: function(e) {
        var elem = e.target;
  
        if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
          e.preventDefault();
        }
      }
    };
  
      $(document).ready($.proxy(anchorScrolls, 'init'));
  })(window.document, window.history, window.location);

