var ans = document.getElementsByClassName("ans");
function show_ans(s, j){
    var ico = document.getElementById(j);
    var icon = document.getElementsByTagName("i");
    var ans1 = document.getElementById(s);
    if(ans1.style.transform == "translateY(0px)" && ans1.style.opacity == "1" && ico.style.transform == "rotate(180deg)"){
        ans1.style.transform = "translateY(-50px)";
        ans1.style.opacity = "0";
        ico.style.transform = "rotate(0deg)";
    }else{
        for(var i=0; i<ans.length; i++){
            ans[i].style.opacity = "0";
            ans[i].style.transform = "translateY(-50px)";
        }
        for(var i=0; i<icon.length; i++){
            icon[i].style.transform = "rotate(0deg)";
        }
        ans1.style.transform = "translateY(0px)";
        ico.style.transform = "rotate(180deg)";
        ans1.style.opacity = "1";
    }
}