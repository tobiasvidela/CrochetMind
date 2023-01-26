'use strict';
/*SideNavBar*/
const btnMenuSidebar = document.querySelector('#btn-menu-sidebar'),
      sidebar = document.querySelector('.sidebar'),
      btnSearch = document.querySelector('.fa-magnifying-glass');

btnMenuSidebar.onclick = () => {
    sidebar.classList.toggle('active');
};
btnSearch.onclick = () => {
    sidebar.classList.toggle('active');
};