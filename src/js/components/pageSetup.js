export let preLoader = () => {
  let tl = new gsap.timeline({
    duration:0.05,
    ease:'power4.out',
    onComplete: function(){
      $('#preloader').remove();
    }
  })
	tl.to('#preloader', {opacity:0})
}