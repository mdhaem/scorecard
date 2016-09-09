var players = [{"id":1,"playerName":"Bill"},{"id":2,"playerName":"Bev"},
                        {"id":3,"playerName":"Mike"},{"id":4,"playerName":"Sandy"}];
                        
var wins = [{"id":1,"wins":5},{"id":2,"wins":5},
                        {"id":2,"wins":5},{"id":2,"wins":6}];                      


$('#teams').change(function(){
    
    var sc = S$(players,7,wins,true);
    var ok = $('#games').children(":selected").attr("value");
    alert(ok);
    
    if(ok == 0){
        alert('Please select a game...');
        return;}
    else{
        
        $('#selects').hide();
        sc.HTMLScoreCard('#scorecard').AddRow(this.document).DeleteRow(this.document).AutoTallyScore(this.document);
    
    }
});

var validate = function(){
    
}
