import { 
  setupChartTeams,
  teamScroll,
  teamCardSetup,
} from './index.js';

export let setupOwners = () => {  
  $.ajax({          
      url: 'https://www.wins-pool.com/wp-content/themes/seemax-theme/json/owners-102821.json',                                       
      success: function(data) { 
        
        $.each( data, function(k, v) {    
          let ownerID = v.ownerID;
          let teamName = v.nickname;
  
          $('.home-page').append(
            `<section class='single-owner' data-owner='`+ownerID+`'>
              <div class='content'>
                <div class='owner-area'>
                  <div class='owner-background c-block-fill'></div>
                  <div class='owner-rank'></div>
                  <div class='owner-info'>
                    <div class='group-name'>
                      <div class='nickname'>`+teamName+`</div>
                    </div>
                    <div class='title-wins-count titleWinsCount'>
                      <span>Total Wins</span>
                    </div>
                  </div>
                <div class='owner-teams'>
                  <div class='owner-teams-inner ownerTeamsInner'>
                  <div class='chart-titles'>
                    <div class='team-info single-chart-title'>Team</div>
                    <div class='team-info single-chart-title'>Wins</div>
                    <div class='team-info single-chart-title'>Loses</div>
                    <div class='team-info single-chart-title'>Win%</div>
                  </div>
                </div>
              </div>
            </section>`
          );
        });
        setupChartTeams();
      },
      cache: false
  }); 
}

// Get The Total Win Counts for Each Owner
export let buildOwners = () => {
  $('.single-owner').each(function(){
    var sumW = 0;
    var sumL = 0;
    var sumP = 0;
    // Get The Wins for Each Team The owner has and add them
    $(this).find('.single-team').each(function(){
      sumW += Number($(this).data('wins'));
      sumP += Number($(this).data('played'));
      sumL += Number($(this).data('loses'));
    });

    let winsMath = (sumW / sumP).toFixed(3);
    let winPercent = '.' + winsMath * 1000;
    // Add Total Wins as Data Attribute to the owner
    $(this).attr('data-totalw', sumW);
    $(this).attr('data-totalL', sumL);
    $(this).attr('data-totalplayed', sumP);
    $(this).attr('data-winpercent', winPercent);
    $(this).find('.wins-count').prepend(sumW);
    $(this).find('.titleWinsCount').prepend(sumW);
    $(this).find('.loses-count').append(sumL);
    $(this).find('.played-count').prepend(sumP);
    $(this).find('.winPercent').prepend(winPercent);
  });

  orderOwners();
}

// Count The Win Totals Data Attribute for each owner and Set the order of the owners
let orderOwners = () => {
  $('.home-page').find('.single-owner').sort(function(a, b) {
      return +b.dataset.totalw - +a.dataset.totalw;
  }).appendTo($('.home-page'));

  ownerRankIcon();
}


let ownerRankIcon = () => {
  let i = 0;
  $('.single-owner').each(function(){
      i++;
      $(this).find('.owner-rank').prepend('<div class="rank-icon">'+i+'</div>');
  });

  teamCardSetup();
  teamScroll();
}