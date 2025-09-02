let count = document.getElementById("count")
let c =0
function Increasebtn(){
    c++;
    count.textContent = c;

}
function Resetbtn(){
    c=0
    count.textContent = c;
}
function Decreasebtn(){
    if(c>0){
        c--;
        count.textContent = c;
    }
}