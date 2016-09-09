/**
 * Created by miked on 3/8/2016.
 */
///
/// players::json array of idPlayer and playerName objects (defaults to four players named First, Second, Third, Fourth)
/// history::JSON array of idPlayer and  wins total
/// rows::number of initial scorecard rows
/// totals::display scorecard game totals (normally set to true)
///
;(function(global, $){
    
  var ScoreCard = function(players, rows, history, totals) {
    return new ScoreCard.init(players, rows, history, totals);   
  }
  
  var defaultplayers = [{"id":1,"playerName":"First"},{"id":2,"playerName":"Second"},
                        {"id":2,"playerName":"Third"},{"id":2,"playerName":"Fourth"}];
                        
  var defaulthistorywins = [{"id":1,"wins":10},{"id":2,"wins":10},
                        {"id":2,"wins":9},{"id":2,"wins":12}];
                      
  var defaultrows = 8;
  var inputclass = ['one','two','three','four','five','six'];
  var card = '';
   
  ScoreCard.init = function(players, rows, history, totals){
      var self = this;
     
      if(players && players.length !== 0){
          self.players = players;
      }
      else{
          self.players = defaultplayers;
      }
    
      self.rows = rows || defaultrows;
      
      if(history && history.length !== 0){
          self.history = history;
      }
      else{
          self.history = false;
      }
      
      self.totals = totals || defaulttotals;
      self.scorecard = makeScoreCard(self.players, self.rows, self.history,self.totals,self.rowadder);
      self.columns = self.players.length;
  }
  
  ScoreCard.prototype = {
      HTMLScoreCard: function(selector){
          
            if(!$){
                throw 'jQuery not loaded';
            }
            
            if(!selector){
                throw 'Missing jQuery selector';
            }
            
            $(selector).html(this.scorecard);
            
            return this;
        },
        AddRow: function(document){
            $(".addrow").on("click",function(){
                
                var newrow;
                newrow += "<tr>";
                var rowNumber = $('table tr:last-child td:first-child').html()*1 + 1;
                newrow += "<td id='scorecardsidemenu'>"+rowNumber+"</td>";
                for(var b=0; b < 4; b++) {
                    newrow += "<td><input class=scoreplayer"+inputclass[b]+" type='number' /></td>";
                }
                newrow += "</tr>";
                
                
                $('table tr:last').after(newrow);
                
                addautotallyscoreevent(document);
            }); 
            
            return this;
        },
        DeleteRow: function(document){
            
            $(".deleterow").on("click",function(){
                $('table tr:last').remove();
                var players = $("table").find("tr:first td").length;
                for(var i = 0;i < players - 1; i++){
                    //player = 'scoreplayer' + inputclass[i];
                    calculateSum('scoreplayer' + inputclass[i]);
                }
                //alert(players);
            })
            
            return this;
        },
        validate: function(){
            // if(supportedLangs.indexOf(this.language) === -1){
            //     throw "Invalid language";
            // }
        },
        AutoTallyScore: function(document){
           
            ///AUTOMATIC SCORE TALLY 
            addautotallyscoreevent(document);
            
            return this;
        }
        
  };
  
  /// Must add event after every new row is added to the table.
  var addautotallyscoreevent = function(document){
      
    $("table tr td input[class*='scoreplayer']").on("change", function(){
                
        var target = $( event.target );
        if (target.is('input')){
            var scoreplayer =  "." + target.attr('class');
        }
        var row = $(this).closest('tr');
        var score = parseFloat(row.find(scoreplayer).val());

        if($.isNumeric(score)) {
            calculateSum(target.attr('class'));
        }
    });
  };
  
  var calculateSum = function(player) {
    
    var score = '.' + player;
    var total = '#' + player.replace(/player/i, 'total');
    var sum = 0;

    $(score).each(function () {
        if (!isNaN(this.value) && this.value.length != 0) {
            sum += parseInt(this.value);
        }
    });
    
    $(total).val(sum);      
   };

  var makeScoreCard = function(players, rows, history, totals, rowadder){
    var columns = players.length;
    card = "<div id='table'><input type='button' value='Add Row' class='addrow' /><table>";
    if(history){
        var wins = history;
        //alert(history);
        card += "<tr><td class='scorecardsidemenu'>History</td>";
        for(var h=0; h < columns; h++) {
            card += "<td><input id='scorehistory"+inputclass[h]+"' type='number' value='"+wins[h].wins+"' /></td>";
        }
        card += "</tr>";
    }

    if(totals){
        card += "<tr><td class='scorecardsidemenu'>Totals</td>";
        for(var t=0; t < columns; t++) {
            card += "<td><input id='scoretotal"+inputclass[t]+"' type='number' value='0' /></td>";
        }
        card += "</tr>";
    }

    card += "<tr id='scorecardnamerow'><th class='scorecardsidemenu'></th>";
    for (var c = 0; c < columns; c++) {
        var arr = (players[c].playerName).split(' ');
        card += '<td class="playername" value="' + players[c].idPlayer + '"><p class="rotate">' + arr[0] + '</p></td>';
    }
    card += "</tr>";

    for(var r=0; r < rows; r++) {
        card += "<tr>";
        var rowNumber = r + 1;
        card += "<td id='scorecardsidemenu'>"+rowNumber+"</td>";
        for(var b=0; b < columns; b++) {
            card += "<td><input class=scoreplayer"+inputclass[b]+" type='number' /></td>";
        }
        card += "</tr>";
    }
    card += "</table><input type='button' value='Add Row' class='addrow' /><input type='button' value='Delete Last Row' class='deleterow' /></div>";

    return card;  
    };

    ScoreCard.init.prototype = ScoreCard.prototype;

    global.ScoreCard = global.S$ = ScoreCard; 

})(window, jQuery);
