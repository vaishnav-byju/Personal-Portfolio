/**
 * Vaishnav Byju - Cybersecurity Portfolio Dynamic Enhancer
 * ========================================================
 * Enhances the static template with interactive certificate lightboxes,
 * smooth anchor scrolling, dynamic project filters, and client-side contact submission.
 */

(function ($) {
  "use strict";

  $(document).ready(function () {
    // 1. Initialize Magnific Popup for all certificate & project lightbox triggers
    if ($.fn.magnificPopup) {
      $(".certificate-popup, .open-cert-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function (item) {
            return item.el.attr("data-title") || item.el.attr("title") || "Vaishnav Byju - Credential Verification";
          }
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function (element) {
            return element.find("img");
          }
        }
      });
    }

    // 2. Client-side recruiter inquiry form handler (zero backend, 100% free hosting compatible)
    const contactForm = document.querySelector("#cyberContactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = (document.querySelector("#contactName") || {}).value || "Recruiter / Hiring Team";
        const email = (document.querySelector("#contactEmail") || {}).value || "";
        const role = (document.querySelector("#contactRole") || {}).value || "Cybersecurity Role Opportunity";
        const message = (document.querySelector("#contactMessage") || {}).value || "";

        const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${role} - ${name}`);
        const mailtoBody = encodeURIComponent(
          `Hi Vaishnav,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
        );

        // Show toast or alert
        const toast = document.getElementById("toast-container");
        if (toast) {
          toast.innerHTML = `
            <div class="alert alert-success shadow-lg text-white" style="background:#ed5a2f; border:none; border-radius:8px; padding:16px 24px; position:fixed; bottom:30px; right:30px; z-index:999999;">
              <i class="ph-bold ph-check-circle me-2"></i> Opening email client to send message to vaishnavbyju444@gmail.com...
            </div>
          `;
          setTimeout(() => {
            toast.innerHTML = "";
          }, 6000);
        }

        window.location.href = `mailto:vaishnavbyju444@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      });
    }

    // 3. Smooth scrolling for internal anchor links (#about, #projects, #experience, #certifications, #contact)
    $('a[href^="#"]').on("click", function (e) {
      const target = $(this.getAttribute("href"));
      if (target.length) {
        e.preventDefault();
        // Close offcanvas if open
        $(".tw-offcanvas-2-area").removeClass("tw-offcanvas-2-opened");
        $(".body-overlay").removeClass("apply");

        $("html, body").stop().animate(
          {
            scrollTop: target.offset().top - 80
          },
          800
        );
      }
    });

    console.log("🛡️ Vaishnav Byju Cybersecurity Portfolio Enhancer Loaded Successfully.");
  });
})(jQuery);
