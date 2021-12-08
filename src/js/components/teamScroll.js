export let teamScroll = () => {

  $('.single-owner').each(function(){
    let theContent = $(this).find('.content');
    let ownerTeams = $(this).find('.owner-teams-inner');
    let oneTeam = $(this).find('.single-team');
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger:this,
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        end:"top center-=200",
        scrub: 0.1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        toggleActions: "play none none reverse",
      }
    });
    tl.to(theContent, {scale:1, rotationX:0}, "teamIn");
    tl.to(ownerTeams, {y:0}, "teamIn");
    // tl.to(oneTeam, {height:40}, "teamIn");
  });
}

export let teamCardSetup = () => {
  gsap.set($('.single-owner .content'), {rotationX:-60});
  gsap.set($('.owner-teams-inner'), {y:-120});
  // gsap.set($('.single-team'), {height:0});
}
