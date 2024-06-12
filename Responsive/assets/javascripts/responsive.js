document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var mobileMenu = document.getElementsByClassName('mobile-menu-btn')[0]; // Fixing the selection of the element
    var headerHeight = header.clientHeight;

    mobileMenu.onclick = function() {
        var isClosed = header.clientHeight === headerHeight; // Fixing the casing for clientHeight
        if (isClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    };

    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        
        
        menuItem.onclick = function(event) {
            var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
            if (isParentMenu){
                event.preventDefault();
                } else {
                    header.style.height = null;
                }
        }

    }
});
