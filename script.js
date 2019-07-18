var header = document.getElementsByClassName('header')[0];
var header__button = document.getElementsByClassName('header__button')[0];
var header__menu = document.getElementsByClassName('header__menu')[0];
var menu_stick_one = document.getElementsByClassName('menu-stick-1')[0];
var menu_stick_two = document.getElementsByClassName('menu-stick-2')[0];
var menu_stick_three = document.getElementsByClassName('menu-stick-3')[0];
var menu__bg = document.getElementsByClassName('menu__bg')[0];
var header__leftline = document.getElementsByClassName('header__leftline')[0];
var header__title = document.getElementsByClassName('header__title')[0];
var header__rightline = document.getElementsByClassName('header__rightline')[0];
var header__iphoneimg = document.getElementsByClassName('header__iphoneimg')[0];
var header__phoneline = document.getElementsByClassName('header__phoneline')[0];
var header__bockline = document.getElementsByClassName('header__bockline')[0];
var connect__hidetext = document.getElementsByClassName('connect__hidetext');
var connect__plus = document.getElementsByClassName('connect__plus');
var header__item = document.getElementsByClassName('header__item');
var body = document.body;

function showMenu(){
  if(body.offsetWidth < 720){
    header__menu.style.width = "100%";
  }else{
    header__menu.style.width = "358px";
    header__button.style.right = header__menu.style.width.match(/\d+/) - 75 + "px";
    menu__bg.style.height = "100vh";
  }

  if(document.documentElement.clientHeight < 700){

  }else{body.style.overflow = "hidden";}


  menu_stick_two.style.display = "none";
  menu_stick_one.style.background = "#636363";
  menu_stick_three.style.background = "#636363";
  menu_stick_one.style.transform = "rotate(45deg)";
  menu_stick_three.style.transform = "rotate(-45deg)";
  header__button.classList.remove('button-notActive');

}
function hideMenu(){
  header__menu.style.width = "0";
  header__button.classList.add('button-notActive');

  if(body.offsetWidth < 720){
    header__button.style.right = "20px";
  }else{
    header__button.style.right = "50px";
    menu__bg.style.height = "0";
  }

  menu_stick_two.style.display = "block";
  menu_stick_one.style.background = "white";
  menu_stick_three.style.background = "white";
  menu_stick_one.style.transform = "rotate(0)";
  menu_stick_three.style.transform = "rotate(0)";

  body.style.overflow = "auto";
}
function centerText(elems){
    for(var i = 0; i < elems.length; i++){
      elems[i].style.marginLeft = "-" + elems[i].clientWidth / 2 + "px";
      if(elems === connect__hidetext){
        elems[i].style.marginTop = "-" + elems[i].clientHeight + "px";
      }else{
        elems[i].style.marginTop = "-" + (elems[i].clientHeight/2 - 10) + "px";
      }
    }
}
function linesCorrect(){
  if(body.clientWidth>1200){
      header__rightline.style.left = header__title.getBoundingClientRect().left + header__title.getBoundingClientRect().width - 60  + "px";
      header__rightline.style.width = header__iphoneimg.getBoundingClientRect().left - header__title.getBoundingClientRect().right + 120 + "px";
      header__leftline.style.top = getTop(header__title) + header__title.clientHeight/4*3 + "px";
      header__leftline.style.width = header__title.getBoundingClientRect().left - 35 + "px";
      header__rightline.style.top = getTop(header__title) + header__title.clientHeight/4*3 - header__rightline.clientHeight + 2 + "px";
      header__phoneline.style.height = header__iphoneimg.getBoundingClientRect().height / 100 * 70 + "px";
      header__phoneline.style.top = getTop(header__title) + header__title.clientHeight/4*3 + "px";
      header__phoneline.style.right = body.clientWidth - header__iphoneimg.getBoundingClientRect().right + "px";
      header__bockline.style.top = getTop(header__title) + header__title.clientHeight/4*3 + "px";
      header__bockline.style.width = body.clientWidth - header__iphoneimg.getBoundingClientRect().right + "px";
  }
  else{}
}
function getTop(elem){
  return elem.getBoundingClientRect().top - body.getBoundingClientRect().top;
}


header__button.onclick = function () {
  if(this.classList.contains('button-notActive')){
    showMenu();
  }else{
    hideMenu();
  }
}
menu__bg.onclick = function (){
  hideMenu();
}
for(var i =0; i<header__item.length; i++){
  header__item[i].onclick = function () {
    hideMenu();
  }
}









linesCorrect();
centerText(connect__hidetext);
centerText(connect__plus);

window.addEventListener("resize", function(){
   linesCorrect();
   centerText(connect__hidetext);
   centerText(connect__plus);
  });



















/**/
