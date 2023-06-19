
      // let options = {
      //   startAngle: -1.55,
      //   size: 150,
      //   value: 0.85,
      //   fill: {gradient: ['#a445b2', '#fa4299']}
      // }
      // $(".circle .bar").circleProgress(options).on('circle-animation-progress',
      // function(event, progress, stepValue){
      //   $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
      // });
      // $(".js .bar").circleProgress({
      //   value: 0.70
      // });
      // $(".react .bar").circleProgress({
      //   value: 0.60
      // });


      $('.owl-carousel').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		loop: true,
        responsive: {
			0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })