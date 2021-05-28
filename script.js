"use strict"

const header = document.querySelector('.header');
const tabHeader = document.querySelectorAll('.tab .header')
const tab = document.querySelectorAll('.tab');
const tabSheet = document.querySelectorAll('.tab_content')

tab.forEach(function(item){
    item.addEventListener("click", function(){
        let currentTab = item;
        let tabID = currentTab.getAttribute('data-tab');
        let headerID = currentTab.getAttribute('data-header')
        let currentSheet = document.querySelector(tabID);
        let currentHeader = document.querySelector(headerID);   

        tabSheet.forEach(classRemove);

        tab.forEach(classRemove);

        tabHeader.forEach(classRemove);

        function classRemove(item){
            item.classList.remove('active');
        };

        currentHeader.classList.add('active');
        currentTab.classList.add('active');
        currentSheet.classList.add('active');
    });
});
    

window.addEventListener("scroll", checkScroll);


function checkScroll(){
    let scrollPos = window.scrollY;
    if(scrollPos > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
}