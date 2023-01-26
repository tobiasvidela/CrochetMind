'use strict';
/*SideNavBar*/
const btnMenuSidebar = document.querySelector('#btn-menu-sidebar'),
      btnSearch = document.querySelector('.fa-magnifying-glass'),
      btnLogOut = document.querySelector('#log-out'),
      sidebar = document.querySelector('.sidebar');

btnMenuSidebar.onclick = () => {
    sidebar.classList.toggle('active');
};
btnSearch.onclick = () => {
    sidebar.classList.toggle('active');
};
btnLogOut.onclick = () => {
    window.open('../index.html','_parent')
}