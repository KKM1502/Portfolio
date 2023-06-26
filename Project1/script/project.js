//current position
//var pos = 0;
var pos=[];
//number of slides
//var totalSlides = $('#swrapper #slider-wrap ul li').length;
var totalSlides=[];
//get the slide width
//var sliderWidth = $('#swrapper #slider-wrap').width();
var sliderWidth=[];

var totalcontent=$('#content').children().length-2;
console.log(totalcontent)

for(var i = 0; i<totalcontent; i++){
  pos.push(0);
  totalSlides.push($('#swrapper'+i+' #slider-wrap ul li').length);
  sliderWidth.push($('#swrapper'+i+' #slider-wrap').width());
  console.log(totalSlides[i]);
  console.log(sliderWidth[i]);
  console.log(pos[i]);
}
$(document).ready(function(){


  
  for(var i = 0; i<totalcontent; i++){

  /*****************
   BUILD THE SLIDER
  *****************/
  //set width to be 'x' times the number of slides
  $('#swrapper'+i+' #slider-wrap ul#slider').width(sliderWidth[i]*totalSlides[i]);
  

  

  
  
  /*************************
   //*> OPTIONAL SETTINGS
  ************************/
  //automatic slider
 // var autoSlider = setInterval(slideRight, 3000);
  
  //for each slide 
  $.each($('#swrapper'+i+' #slider-wrap ul li'), function() { 

     //create a pagination
     var li = document.createElement('li');
     $('#swrapper'+i+' #slider-wrap #pagination-wrap ul').append(li);    
  });
 
//countSlides();
$('#swrapper'+i+' #slider-wrap #counter').html(pos[i]+1 + ' / ' + totalSlides[i]);
//pagination();
$('#swrapper'+i+' #slider-wrap #pagination-wrap ul li').removeClass('active');
$('#swrapper'+i+' #slider-wrap #pagination-wrap ul li:eq(0)').addClass('active');
  
  //hide/show controls/btns when hover
  //pause automatic slide when hover
  $('#swrapper'+i+' #slider-wrap').hover(
    function(){ $(this).addClass('active'); }, 
    function(){ $(this).removeClass('active'); }
    
  );
  
  
}
});//DOCUMENT READY
     //next slide  
$('.next').click(function(){
  pos[parseInt($(this).data("index"))]++;
  console.log('pos['+parseInt($(this).data("index"))+']='+pos[parseInt($(this).data("index"))]);
  if(pos[parseInt($(this).data("index"))]==totalSlides[parseInt($(this).data("index"))]){ pos[parseInt($(this).data("index"))] = 0; }
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap ul#slider').css('left', -(sliderWidth[parseInt($(this).data("index"))]*pos[parseInt($(this).data("index"))])); 
  
  //*> optional 
  //countSlides();
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap #counter').html(pos[parseInt($(this).data("index"))]+1 + ' / ' + totalSlides[parseInt($(this).data("index"))]);
  //pagination();
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap #pagination-wrap ul li').removeClass('active');
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap #pagination-wrap ul li:eq('+pos[parseInt($(this).data("index"))]+')').addClass('active');
});

  
  //previous slide
$('.previous').click(function(){
  
  pos[parseInt($(this).data("index"))]--;
  console.log('pos['+parseInt($(this).data("index"))+']='+pos[parseInt($(this).data("index"))]);
  if(pos[parseInt($(this).data("index"))]==-1){ pos[parseInt($(this).data("index"))] =totalSlides[parseInt($(this).data("index"))]-1; }
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap ul#slider').css('left', -(sliderWidth[parseInt($(this).data("index"))]*pos[parseInt($(this).data("index"))]));  
  
    //*> optional
    //countSlides();
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap #counter').html(pos[parseInt($(this).data("index"))]+1 + ' / ' + totalSlides[parseInt($(this).data("index"))]);
    //pagination();
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap #pagination-wrap ul li').removeClass('active');
  $('#swrapper'+parseInt($(this).data("index"))+' #slider-wrap #pagination-wrap ul li:eq('+pos[parseInt($(this).data("index"))]+')').addClass('active');
});


