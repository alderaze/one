$(function () {

  'use strict';

  $(".header").height($(window).height());
  $(".over").height($(".header").height());

  $(window).scroll(function () {

    console.log($(this).scrollTop())
 

        if($(window).scrollTop() >= 100){

            $(".ttt").fadeIn();
        }
        if($(window).scrollTop() >= 1200){

            $(".fevort").fadeIn();
        }
      
        if($(window).scrollTop() >= 2000){

            $(".work").fadeIn();
        }
        // if($(window).scrollTop() >= 3300){

        //     $(".price-game ").fadeIn();
        // }
        if($(window).scrollTop() >= 3300){

            $(".like").fadeIn();
        }
        if($(window).scrollTop() >= 4000){

            $(".ul").fadeIn();
        }
        if($(window).scrollTop() >= 4300){

            $(".mor-comment").fadeIn();
        }
        if($(window).scrollTop() >= 4700){

            $(".get").fadeIn();
        }
        if($(window).scrollTop() >= 5600){

            $(".ul2").fadeIn();
        }
        if($(window).scrollTop() >= 6000){

            $("iframe").fadeIn();
        }
        if($(window).scrollTop() >= 6146){

            $(".ul3").fadeIn();
        }

        if($(window).scrollTop() >= 2000){

            $(".up-page").fadeIn();
        }
        if($(window).scrollTop() <= 1999){

            $(".up-page").fadeOut();
        }

        

   
       
});


$(".up-page").on("click", function () {

    $("html,body").animate({
        scrollTop:0
    },1000)

})

$("body .navbar .container li").on("click", function () {

    $(this).addClass("act").siblings().removeClass("act");
    $("html,body").animate({
            
        scrollTop:$($(this).data("scroll")).offset().top-95
   
    },1000)


    console.log($(this).data("scroll"))
})





// start slider show
  var index = -1,
  div = $(".containert [data-img='img']");
  main(index)
  function main (n) {

      // control number index by number div show

      if(n > div.length){

                  index = 1;
                //   console.log(index)
         }
          
         if(n < 0){
          
                index = div.length-1;
                // console.log(index)
         }
  }

  $(".next").on("click", function () {

      next()
  });

  function next() {
       
      index++;
      
      if(index >= 1){

          $(".containert div:first-child").attr("class","one-div").next().attr("class","active").next()
          .attr("class","tow-div").next().attr("class","thre-div").next().attr("class","for-div").next()
          .attr("class","five-div").next().attr("class","six-div")
      }
      if(index == 2){

          $(".containert div:first-child").attr("class","six-div").next().attr("class","one-div").next()
          .attr("class","active").next().attr("class","tow-div").next().attr("class","thre-div").next()
          .attr("class","for-div").next().attr("class","five-div")
      }

      if(index == 3){

          $(".containert div:first-child").attr("class","five-div").next().attr("class","six-div").next()
          .attr("class","one-div").next().attr("class","active").next().attr("class","tow-div").next()
          .attr("class","thre-div").next().attr("class","for-div")
      }
      if(index == 4){

          $(".containert div:first-child").attr("class","for-div").next().attr("class","five-div").next()
          .attr("class","six-div").next().attr("class","one-div").next().attr("class","active").next()
          .attr("class","tow-div").next().attr("class","thre-div")
      }
      if(index == 5){

          $(".containert div:first-child").attr("class","thre-div").next().attr("class","for-div").next()
          .attr("class","five-div").next().attr("class","six-div").next().attr("class","one-div").next()
          .attr("class","active").next().attr("class","tow-div")
      }
      if(index == 6){

          $(".containert div:first-child").attr("class","tow-div").next().attr("class","thre-div").next()
          .attr("class","for-div").next().attr("class","five-div").next().attr("class","six-div").next()
          .attr("class","one-div").next().attr("class","active")
      }
      if(index == 7){

          $(".containert div:first-child").attr("class","active").next().attr("class","tow-div").next()
          .attr("class","thre-div").next().attr("class","for-div").next().attr("class","five-div").next()
          .attr("class","six-div").next().attr("class","one-div")
      }

      main(index)

    //   console.log(index)
  }

  // prev function
  $(".prev").on("click", function () {
      
      prev()

      // main(index)
    //   console.log(index)
  });

  function prev() {

      index--;
      main(index);

      if(index == 0){

          $(".containert div:first-child").attr("class","one1-div").next().attr("class","activet").next()
          .attr("class","tow2-div").next().attr("class","thre3-div").next().attr("class","for4-div").next()
          .attr("class","five5-div").next().attr("class","six6-div");
      }

      if(index == 1){

          $(".containert div:first-child").attr("class","six6-div").next().attr("class","one1-div").next()
          .attr("class","activet").next().attr("class","tow2-div").next().attr("class","thre3-div").next()
          .attr("class","for4-div").next().attr("class","five5-div")
      }
      if(index == 2){

          $(".containert div:first-child").attr("class","five5-div").next().attr("class","six6-div").next()
          .attr("class","one1-div").next().attr("class","activet").next().attr("class","tow2-div").next()
          .attr("class","thre3-div").next().attr("class","for4-div");
      }

      if(index == 3){

          $(".containert div:first-child").attr("class","for4-div").next().attr("class","five5-div").next()
          .attr("class","six6-div").next().attr("class","one1-div").next().attr("class","activet").next()
          .attr("class","tow2-div").next().attr("class","thre3-div");
      }
      if(index == 4){

          $(".containert div:first-child").attr("class","thre3-div").next().attr("class","for4-div").next()
          .attr("class","five5-div").next().attr("class","six6-div").next().attr("class","one1-div").next()
          .attr("class","activet").next().attr("class","tow2-div");
      }
      if(index == 5){

          $(".containert div:first-child").attr("class","tow2-div").next().attr("class","thre3-div").next()
          .attr("class","for4-div").next().attr("class","five5-div").next().attr("class","six6-div").next()
          .attr("class","one1-div").next().attr("class","activet");
      }
      if(index == 6){

          $(".containert div:first-child").attr("class","activet").next().attr("class","tow2-div").next()
          .attr("class","thre3-div").next().attr("class","for4-div").next().attr("class","five5-div").next()
          .attr("class","six6-div").next().attr("class","one1-div");
      }

  }


  //auto function

  auto()
  function auto() {


     
      next()
      setTimeout(auto,10000);
    //   console.log(index)
  }
    
    
    

  // end slider show

  


//start countr up number

 $('.number').each(function(){

      
     var val = $(this).attr('data-counter-end'),
        count = $(this).attr('data-counter-start'),
        dis = $(this);

     var stop =  setInterval(number,30) // this is auto function evry number scend "by function setinterval"

    
     function number(){

             count++;  
             dis.text(count);

             if(count == val){

                 clearInterval(stop) // to stop auto function

             }
         
     }
    
  });

  //end countr up number














});


