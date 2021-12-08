import { 
  buildOwners,
  orderOwners,
  ownerRankIcon
} from './index.js';




export let setupChartTeams = () => {  
  $.ajax({          
      url: 'https://www.wins-pool.com/wp-content/themes/seemax-theme/json/teams102821.json',                                       
      success: function(data) { 
        
        $.each( data, function(k, v) {    
          let conf = v.leagues.standard.confName;
          let teamId = v.teamId;
          let city = v.city;
          let nickname = v.nickname;
          let logo = v.logo;
          let owner = v.owner;
          let pick = v.pick;
          let isNBA = v.nbaFranchise;
          
          $('*[data-owner="'+owner+'"]').find('.ownerTeamsInner').append(
            "<div class='single-team c-width-100 "+conf.toLowerCase()+"-conf' \
            style='order:"+pick+"' \
            data-id='"+teamId+"' data-owned='"+owner+"'> \
              <div class='team-info team-logo'> \
                <img src='"+logo+"'> \
              </div> \
            </div>");
        });
        setupChartTotals();
        setupChartTeamRecords();
      },
      cache: false
  }); 
}


let setupChartTotals = () => {
  $('.single-owner').each( function() {
    $(this).find('.ownerTeamsInner').append(
      `<div class='c-width-100 owner-stats'>
        <div class='team-info single-owner-stat'>Totals</div>
        <div class='team-info single-owner-stat wins-count'></div>
        <div class='team-info single-owner-stat loses-count'></div>
        <div class='team-info single-owner-stat winPercent'></div>
      </div>`
    );
  })
}

// <div class='team-info single-owner-stat played-count'></div>


let setupChartTeamRecords = () => {

  $.ajax({          
    url: 'https://www.wins-pool.com/wp-content/themes/seemax-theme/json/standings2.json',                                       
    success: function(data) { 

      $.each(data.api.standings, function(k, v) {

        let thisId = v.teamId;
        let thisWins = v.win;
        let thisPercent = v.winPercentage;
        let thisLosses = v.loss;
        let thisPlayed = parseInt(thisLosses) + parseInt(thisWins);
        let thisTeamInfo = $('*[data-id='+thisId+']');
        let thisTeam = $('*[data-id='+thisId+']');
  
        thisTeamInfo.append(
          // "<div class='team-info team-played c-width-25'>"+thisPlayed +"</div> \
          `<div class='team-info team-wins c-width-25'>`+thisWins+`</div>
          <div class='team-info team-loses c-width-25'>`+thisLosses+`</div>
          <div class='team-info team-percent c-width-25'>`+thisPercent +`</div>
        `);
  
        thisTeam.attr({
          "data-wins":thisWins,"data-loses":thisLosses,"data-played":thisPlayed
        });
      });

      buildOwners();
    },
    cache: false
  }); 
}

