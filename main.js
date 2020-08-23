fetch('MOCK_DATA.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let randomPerson = Math.floor(Math.random() * 99) + 1  
    console.log(data[randomPerson]);

    let id = randomPerson;
    let firstName = data.firstName;
    let lastName = data.lastName;
    let image = data.image;
    let bio = data.bio;
    let grade = data.grade;
    let subjects = data.subjects
    

    data.forEach(personHTML);

    function personHTML(item, index) {
        document.getElementsByClassName("carousel-inner")[0].innerHTML += `
        <div class="item item3">
        <div class="fill" style="background-color:#7fc2f4;">
            <div class="inner-content">
                <div class="col-md-6">

                    <div class="carousel-img">
                        <img src="${item.image}" style="height:300px; width: 300px; class="img img-responsive" />
                    </div>
                </div>

                <div class="col-md-6 text-left">
                    <div class="carousel-desc">

                        <h2>${item.first_name} ${item.last_name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit ipsum, scelerisque non semper eu, aliquet vel odio. Sed auctor id purus nec tristique. Donec euismod, urna vel dapibus tristique, dolor arcu ultrices lectus, nec pulvinar est turpis sit amet felis. Duis interdum purus quam, vitae cursus erat ornare at. Donec congue mi a ipsum tincidunt, imperdiet vehicula odio rutrum. Nam porta vulputate magna, id pretium lectus iaculis eu. Ut ut viverra libero.</p>
                        <p> Student is in ${item.grade} and is taking these courses!
                    </div>
                    <label class="switch">
                    <input type="checkbox" onclick=addMatch()>
                    <span class="slider"></span>
                </div>
            </div>
        </label>
        </div>
    </div>
        `;
    }
  })
  .catch(function (err) {
    console.log(err);
  });

$(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval:6000
    });

// scroll slides on mouse scroll 
$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
			
			
        }
        else{
            $(this).carousel('next');
			
        }
    });

//scroll slides on swipe for touch enabled devices  
 	$("#myCarousel").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
    	$(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
    
});
//animated  carousel start
$(document).ready(function(){

//to add  start animation on load for first slide 
$(function(){
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
			 $('.item1.active img').animateCss('slideInDown');
			 $('.item1.active h2').animateCss('zoomIn');
			 $('.item1.active p').animateCss('fadeIn');
			 
});
	
//to start animation on  mousescroll , click and swipe 
  $("#myCarousel").on('slide.bs.carousel', function () {
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
	
// add animation type  from animate.css on the element which you want to animate

		$('.item1 img').animateCss('slideInDown');
		$('.item1 h2').animateCss('zoomIn');
		$('.item1 p').animateCss('fadeIn');
		
		$('.item2 img').animateCss('zoomIn');
		$('.item2 h2').animateCss('swing');
		$('.item2 p').animateCss('fadeIn');
		
		$('.item3 img').animateCss('fadeInLeft');
		$('.item3 h2').animateCss('fadeInDown');
		$('.item3 p').animateCss('fadeIn');
    });
});