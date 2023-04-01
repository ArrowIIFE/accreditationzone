const printSingle = document.getElementById("select-print-single");
var selectheadtitle = document.getElementById("select-title-print")
const selectmain = document.getElementById("select-main");
const selecttable = document.getElementById("select-table")
var card = document.querySelector("tr.grid-container");
const printSinglePage= ()=>{
    selectheadtitle.style.display = "none";
    selectmain.style.width="535px"
    selectmain.style.height="780px";
    selectmain.style.margin="0 auto";
    selecttable.style.width="534px"
    selecttable.style.height="780px";
    selecttable.style.margin="0 auto";
    window.print();
}
printSingle.addEventListener("click", ()=>{
    printSinglePage();
    
})