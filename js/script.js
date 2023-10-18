// Navbar Toogle for All Pages ******************************
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuBtn = document.querySelector("button.menu_toggle");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
if(top>= offset && top < offset + height){
  navLinks.forEach(links => {
    links.classList.remove('active');
    documents.querySelector('header nav a[href*=' + id + ']').classList.add('active');


  });

}

  });

}
// Hide Navbar on Scroll ******************************

let navBar = document.querySelector("header");
let scrollPos = 0;

window.addEventListener("scroll", () => {
  let scrollPosNow = window.pageYOffset || document.pageYOffset;

  if (scrollPosNow > scrollPos) {
    navBar.style.transform = "translateY(-100%)";
  } else {
    navBar.style.transform = "translateY(0)";
  }

  scrollPos = scrollPosNow;
});

// Add Your Scripts Here:
// <Topic/Explain> ******************************

//events
// JavaScript to handle toggling between upcoming and past events
document.addEventListener("DOMContentLoaded", function () {
  const upcomingEventsLink = document.getElementById("upcoming-events-link");
  const pastEventsLink = document.getElementById("past-events-link");
  const upcomingEventsSection = document.getElementById("upcoming-events");
  const pastEventsSection = document.getElementById("past-events");

  // Show upcoming events by default
  upcomingEventsLink.classList.add("active-link");
  upcomingEventsSection.classList.add("active-section");

  // Toggle to show upcoming events
  upcomingEventsLink.addEventListener("click", function (e) {
    e.preventDefault();
    upcomingEventsLink.classList.add("active-link");
    pastEventsLink.classList.remove("active-link");
    upcomingEventsSection.classList.add("active-section");
    pastEventsSection.classList.remove("active-section");
  });

  // Toggle to show past events
  pastEventsLink.addEventListener("click", function (e) {
    e.preventDefault();
    upcomingEventsLink.classList.remove("active-link");
    pastEventsLink.classList.add("active-link");
    upcomingEventsSection.classList.remove("active-section");
    pastEventsSection.classList.add("active-section");
  });
});

//smooth transitions


(function($) { "use strict";

$(document).ready(function(){"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 30;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


	});

})(jQuery);