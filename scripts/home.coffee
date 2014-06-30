
$(document).ready(()->
    $(".slider").slick(
      dots: false
      infinite: true
      slidesToShow: 1
      slidesToScroll: 1
      arrows: true
      speed: 500
      autoplay: true
      autoplaySpeed: 4000
    )
  )