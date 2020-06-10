// 获取元素
var getElem = function (selector) {
    return document.querySelector(selector)
}
var getAllElem = function (selector) {
    return document.querySelectorAll(selector)
}
//获取元素的样式的class

var getCls = function ( element ) {
    return element.getAttribute('class');
  }
// 设置元素的样式的class
var setCls = function (element, cls) {
    return element.setAttribute('class', cls);
}
//为元素添加样式
var addCls = function (element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) === -1) {//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        /*找不到cls的情况下*/
        setCls(element, baseCls + ' ' + cls); /** 就位baseCls添加上cls这个样式*/
    }
    return;
}
//元素添加删除样式
var delCls = function (element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) != -1) {
        /* ===============================下面这句代码不知道怎么注释，请导师帮忙注释一下？？？？======================================= */
        setCls(element, baseCls.split(cls).join(' ').replace(/\s+/g, ' ')); /*找到cls样式*/
    }
    return;
}



var screenAnimateElements = {

    '.screen-1': [
        '.screen-1_header',
        '.screen-1_hubheading',
        '.screen-1_heading',
        '.header_animate_fadeInDown',
    ],
    '.screen-2': [
        '.screen-2_hubheading',
        '.screen-2_heading',
        '.screen-2_bg_1',
        '.screen-2_bg_2',
        
    ],
    '.screen-3': [
        '.screen-3_hubheading',
        '.screen-3_heading',
        '.screen-3_con',
        '.screen-3_bg',
    ],
    '.screen-4': [
        '.screen-4_hubheading',
        '.screen-4_heading',
        '.screen-4_con_item_1',
        '.screen-4_con_item_2',
        '.screen-4_con_item_3',
        '.screen-4_con_item_4',
        '.screen-4_con_font_1',
        '.screen-4_con_font_2',
        '.screen-4_con_font_3',
        '.screen-4_con_font_4',
    ],
    '.screen-5': [
        '.screen-5_hubheading',
        '.screen-5_heading',
        '.screen-5_bg',
    ],
}


// 为所有元素添加init
function setScreenAnimateInit(screenCls) {
    var screen = document.querySelector(screenCls); // 获取当前屏的元素
    var animateElements =  screenAnimateElements[screenCls]; // 需要设置动画的元素
    for(var i=0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_init');
    }
}
// 为所有元素添加done
function playScreenAnimate(screenCls) {
    var screen = document.querySelector(screenCls);
    var animateElements = screenAnimateElements[screenCls];
    for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls.replace('_init', '_done'));
    }
}

// 初始化设置
// window.onload = function () {
    //为所有元素添加init
    for (k in screenAnimateElements) {
        if(k==1){
            continue;
        }
        setScreenAnimateInit(k);
    }
// }
setTimeout(function(){playScreenAnimate('.screen-1');},100);/* 只执行一次setTimeout和setInterval不同 */

//让被选中的导航呈现不一样的颜色
var navItems = getAllElem('.screen-1_nav_item');
var outLineItems = getAllElem('.outline_item');
var navTip = getElem('.header_nav-tip');/* 提前获取滑动门 */
var switchNavItemsActive = function(idx){
    for(var i=0;i<navItems.length;i++){
        console.log(navItems[i]);
        delCls(navItems[i],'screen-1_nav_item_active');/* 先删除掉所有的active */
         navTip.style.left = 0+'px';/* 下划线的最开始为止 */
        
      }
      addCls(navItems[idx],'screen-1_nav_item_active');/* 给被点击的加上avtive */
      navTip.style.left = ( idx * 96 )+'px';/* idx变动后下划线的位置 */
      
    
      for(var i=0;i<outLineItems.length;i++){
        delCls(outLineItems[i],'outline_item_status_active');
      }
      addCls(outLineItems[idx],'outline_item_status_active');
    }
    

//滚动条设置

window.onscroll = function () {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    if( top > 100 ){
        //隐藏header
        addCls( getElem('.screen-1_header'),'screen-1_header_status_black' );
        // 隐藏侧边导航栏
        addCls( getElem('.outline'),'outline_status_in' );
    }else{
        delCls( getElem('.screen-1_header'),'screen-1_header_status_black' );
        delCls( getElem('.outline'),'outline_status_in' );
        switchNavItemsActive(0); 
  
        // // 后面添加的，不需要立刻
    }
    
    if (top > (800 * 1 - 200)) {
        playScreenAnimate('.screen-2');

        switchNavItemsActive(1); // 后面添加的，不需要立刻
    }
    if (top > (800 * 2 - 500)) {
        playScreenAnimate('.screen-3');
        switchNavItemsActive(2);
    }
    if (top > (800 * 3 - 600)) {
        playScreenAnimate('.screen-4');
        switchNavItemsActive(3);
    }
    if (top > (800 * 4- 700)) {
        playScreenAnimate('.screen-5');
        switchNavItemsActive(4);
    }
    // if (top > (800 * 4- 700)) {
    //     playScreenAnimate('.screen-6');
    //     switchNavItemsActive(4);
    // }
}
/* 导航条的双向定位 */

var setNavJump = function(i,lib){
    var item = lib[i];/*？*/
    item.onclick = function(){
        
        document.documentElement.scrollTop = 640*i;
    }
}
for(var i=0;i<navItems.length;i++){
    setNavJump(i,navItems);
  }
for(var i=0;i<outLineItems.length;i++){
    setNavJump(i,outLineItems);
  }


  //滑动门

console.log(navTip+"a");
var setTip = function(idx,lib){
  lib[idx].onmouseover =function(){
    // alert("a");
    navTip.style.left = ( idx * 96 )+'px';
  }
  var currentIdx = 0;
  lib[idx].onmouseout = function(){
    console.log(currentIdx);
    for(var i=0;i<lib.length;i++){
        if( getCls( lib[i] ).indexOf('header_nav-item_active') > -1  ){
          currentIdx = i;
          break;
        }
    }
    navTip.style.left = ( currentIdx * 96 )+'px';
  }

}
for(var i=0;i<navItems.length;i++){
    setTip(i,navItems);
}