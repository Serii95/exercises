const searchbarContainer = document.querySelector("#searchbar-container");
const searchBar = document.querySelector("#searchbar");
const searchbarDropdown = document.querySelector("#searchbar-dropdown");

const sidebarOptions = document.querySelectorAll(".sidebar-option");

let searchbarActive = false;
let selectedSidebarCategoryIndex = 0;

// Event listeners
document.addEventListener("click", (evt) => {
    if(evt.target == searchBar){
        searchbarContainer.classList.add("selected-searchbar-container");
        searchbarDropdown.classList.remove("not-displayed");
        searchbarActive = true;
    } else {
        for(let i = 0; i < sidebarOptions.length; i++){
            if(sidebarOptions[i] == evt.target && i !== selectedSidebarCategoryIndex){
                sidebarOptions[i].classList.add("selected-sidebar-category");
                sidebarOptions[selectedSidebarCategoryIndex].classList.remove("selected-sidebar-category");
                selectedSidebarCategoryIndex = i;
            } else {
                resetPageToDefault();
            }
        }
    }
});

// Functions
function resetPageToDefault(){
    if(searchbarActive){
        searchbarContainer.classList.remove("selected-searchbar-container");
        searchbarDropdown.classList.add("not-displayed");
        searchbarActive = false;
    }
}
