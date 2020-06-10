
var screenAnimateElements = {

    '.screen-1' : [
      '.screen-1_header',
      '.screen-1_hubheading',
      '.screen-1_heading',
    ],
    '.screen-2' : [
      '.screen-2_hubheading',
      '.screen-2_heading',
      '.screen-2_bg_1',
      '.screen-2_bg_2',
    ],
    '.screen-3' : [
      '.screen-3_hubheading',
      '.screen-3_heading',
      '.screen-3_con',
    ],
    '.screen-4' : [
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
    '.screen-5' : [
        '.screen-5_hubheading',
        '.screen-5_heading',
        '.screen-5_bg',
      ],
}

function setScreenAnimate(screenCls) {
    var screen = document.querySelector(screenCls);
    var animateElements =  screenAnimateElements[screenCls];
    console.log(animateElements);
    var isSetAnimateClass = false; // 是否有初始化子元素的样式

    var isAnimateDone = false; // 当前屏幕下所有子元素的状态是DONE？
  
    screen.onclick = function(){
        if( isSetAnimateClass === false){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+"_init");
            }
            isSetAnimateClass=true;
            return;
        }
        if(isAnimateDone === false){
            for(var i=0;i<animateElements.length;i++){
              var element = document.querySelector(animateElements[i]);
              var baseCls = element.getAttribute('class');
              element.setAttribute('class',baseCls.replace('_init','_done'));
            }
            isAnimateDone = true;
            return ;
          }
          //  切换所有 animateElements 的  done -> init   A A_init
          if(isAnimateDone === true){
            for(var i=0;i<animateElements.length;i++){
              var element = document.querySelector(animateElements[i]);
              var baseCls = element.getAttribute('class');
              element.setAttribute('class',baseCls.replace('_done','_init'));
            }
            isAnimateDone = false;
            return ;
          }
    }
}



for(k in screenAnimateElements){
    setScreenAnimate(k);
  }
  