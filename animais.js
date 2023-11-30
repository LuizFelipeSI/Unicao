const menuItems = document.querySelectorAll('#menu-h ul li a');

        menuItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                menuItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                item.classList.add('active');
            });
        });

        document.querySelector('#menu-h').addEventListener('mouseout', () => {
            menuItems.forEach(item => {
                if (item.href === window.location.href) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });