document.addEventListener('DOMContentLoaded', () => {
  // Check if elements exist before adding listeners, as the navbar might be injected dynamically
  initNavbar();
});

// Since the navbar is being loaded dynamically via fetch, we might need a function to initialize it 
// explicitly AFTER the fetch is complete.
window.initNavbar = function() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const overlay = document.getElementById('drawer-overlay');
  
  if (!menuBtn || !overlay) return;

  function toggleDrawer() {
    if (document.body.classList.contains('drawer-active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  function openDrawer() {
    document.body.classList.add('drawer-active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    document.body.classList.remove('drawer-active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Mobile Dropdown Accordion Logic
  const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
  if (mobileDropdownToggle) {
    mobileDropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    });
  }
}
