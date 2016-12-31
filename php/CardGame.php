<?php

  // example request: http://iscorecards.com/service/CardGame.php?method=getCardGames
  
  require_once "RestServer.php";

  $rest = new RestServer(CardGame);
  $rest->handle();
  

  class CardGame
  {
	  //public $db = 'db544593513.db.1and1.com'; 
	  //public $user = 'dbo544593513';
	  //public $pwd = 'doscar@';
	  
	  public static function getHistory(){
        $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
		//$con = mysql_connect($db, $user, $pwd); 
      	if (!$con) { 
              return die('Could not connect: ' . mysql_error()); 
      	}
		$sql = "SELECT idPlayer, COUNT(winner) AS won FROM db544593513.Score WHERE winner = true GROUP BY idPlayer";
		$result_array = array();
		$result = mysql_query($sql,$con);
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    		$row_array['idPlayer'] = $row['idPlayer'];
			//alert($row['idPlayer']);
    		$row_array['won'] = $row['won'];

    		array_push($result_array,$row_array);
		}

		return json_encode($result_array);
	  }
	  
	  public static function saveNewGroupName($groupName, $idCardGame, $hash){
          $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
        	if (!$con) { 
                return die('Could not connect: ' . mysql_error()); 
        	}
		
  		$sql = "INSERT INTO db544593513.GroupName (groupName, idCardGame, hash) VALUES ( '$groupName', '$idCardGame', '$hash')";
  		if (mysql_query($sql)) {
  			$last_id = mysql_insert_id($con); //$con->insert_id;
  			return $last_id;
  		} else {
    		return die('Insert Error: ' . mysql_error());
		}
	}

  		// {
  		//   	return die('Insert Error: ' . mysql_error());
  		// }
		
  		// return 1;
  	 //  }
	  
	public static function deleteGroupName($idGroupName) {
          $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
        	if (!$con) { 
                return die('Could not connect: ' . mysql_error()); 
        	}
		
  		$sql = "DELETE FROM db544593513.GroupName WHERE  idGroupName =  $idGroupName LIMIT 1";
  		if (!mysql_query($sql))
  		{
  		  	return die('Delete Error: ' . mysql_error());
  		}
		
  		return 1;
  	  }





	  public static function saveNewPlayerGroup($idPlayer, $idCardGame, $playerGroup){
          $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
        	if (!$con) { 
                return die('Could not connect: ' . mysql_error()); 
        	}
		
  		$sql = "INSERT INTO db544593513.PlayerGroup (idPlayer, idCardGame, playerGroup) VALUES ( $idPlayer, $idCardGame, $playerGroup)";
  		if (!mysql_query($sql))
  		{
  		  	return die('Insert Error: ' . mysql_error());
  		}
		
  		return 1;
  	  }
	  
	  public static function saveNewPlayer($playerName){
        $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
      	if (!$con) { 
              return die('Could not connect: ' . mysql_error()); 
      	}
		
		$sql = "INSERT INTO db544593513.Player (playerName) VALUES ( $playerName)";
		if (!mysql_query($sql))
		{
		  	return die('Insert Error: ' . mysql_error());
		}
		
		return 1;
	  }
	  
	  public static function saveUser($email, $pwd){
        $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
      	if (!$con) { 
              return die('Could not connect: ' . mysql_error()); 
      	}
		$hash = md5($email.$pwd);
		$sql = "INSERT INTO db544593513.User (email, hash) VALUES ( '$email', '$hash')";
		if (!mysql_query($sql))
		{
		  	return die('Insert Error: ' . mysql_error());
		}
		
		return $hash;
	  }
	  
	  public static function validateUser($email, $pwd)
     {
     	$con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@');  
		if (!$con) { 
    		return die('Could not connect: ' . mysql_error()); 
		}
		$hash = md5($email.$pwd);
		$sql = "SELECT hash FROM db544593513.User WHERE email = '$email' AND hash = '$hash' limit 1";
// 		$result_array = array();
		$result = mysql_query($sql,$con);
		
		$value = mysql_fetch_object($result);
		
		return $value->hash; 
		
		// while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
//     			$row_array['hash'] = $row['hash'];
// 
//     			array_push($result_array,$row_array);
// 		}
// 
// 		return json_encode($result_array);		
     }
// 		public static function saveNewGame($gameName){
//         $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@');
//       	if (!$con) {
//               return die('Could not connect: ' . mysql_error());
//       	}
//
// 		$sql = "INSERT INTO db544593513.CardGame (cardGameName) VALUES ( $gameName)";
// 		if (!mysql_query($sql))
// 		{
// 		  	return die('Insert Error: ' . mysql_error());
// 		}
//
// 		return getCardGames();
// 	  }
	  
	  public static function saveScore($idCardGame, $idPlayer, $score, $winner, $date, $team, $game){
        $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@');  
    	if (!$con) { 
            return die('Could not connect: ' . mysql_error()); 
    	}
		//$sql = 'insert into doihaveit.user( id, email, password) values((SELECT UUID()), "' . $email . '", "' . $password . '");';
		//http://doihaveit.net/service/CardGame.php?method=saveScore&idCardGame=1&idPlayer=1&score=25&winner=true&date='2014-08'-09&team=1&game=1
		$date = "'".$date."'";
		$sql = "INSERT INTO db544593513.Score (idCardGame, idPlayer, score, winner, date, team, game) VALUES ($idCardGame, $idPlayer, $score, $winner, $date, $team, $game)";
		if (!mysql_query($sql))
		  		{
		  			return die('Insert Error: ' . mysql_error());
		  		}
		  		return 1;
	  }
	  
	  public static function populateScoreCardNames($groupname){
       	$con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@');  
  		if (!$con) { 
      		return die('Could not connect: ' . mysql_error()); 
  		}
	  	$sql = "SELECT Player.idPlayer , Player.playerName FROM db544593513.Player INNER JOIN db544593513.PlayerGroup ON PlayerGroup.idPlayer = Player.idPlayer INNER JOIN db544593513.GroupName ON PlayerGroup.playerGroup = GroupName.idGroupName WHERE GroupName.idGroupName = $groupname";
		$result_array = array();
		$result = mysql_query($sql,$con);
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    			$row_array['idPlayer'] = $row['idPlayer'];
				//alert($row['idPlayer']);
    			$row_array['playerName'] = $row['playerName'];

    			array_push($result_array,$row_array);
		}

		return json_encode($result_array);  		
     }
	  
     public static function getCardGames($hash)
     {
     	$con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@');  
		if (!$con) { 
    		return die('Could not connect: ' . mysql_error()); 
		}
		$sql = "SELECT * FROM db544593513.CardGame WHERE hash = '$hash'";
		$result_array = array();
		$result = mysql_query($sql,$con);
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    			$row_array['idCardGame'] = $row['idCardGame'];
    			$row_array['cardGameName'] = $row['cardGameName'];
				$row_array['cardHand'] = $row['cardHand'];
				$row_array['hash'] = $row['hash'];
				
    			array_push($result_array,$row_array);
		}

		return json_encode($result_array);  		
     }
	 
  public static function saveNewGame($gameName, $hand, $hash){
       $con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
     	if (!$con) { 
             return die('Could not connect: ' . mysql_error()); 
     	}
	
	$sql = "INSERT INTO db544593513.CardGame (cardGameName, cardHand, hash) VALUES ('$gameName', $hand, '$hash')";
	if (!mysql_query($sql))
	{
	  	return die('Insert Error: ' . mysql_error());
	}
	
	return 1;
  }
	 
     public static function getMaxPlayerGroup()
     {
     	$con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@');  
		if (!$con) { 
    		return die('Could not connect: ' . mysql_error()); 
		}
		$sql = 'SELECT MAX(playerGroup) AS playerGroup FROM db544593513.PlayerGroup';
		$result_array = array();
		$result = mysql_query($sql,$con);
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    			$row_array['playerGroup'] = $row['playerGroup'];

    			array_push($result_array,$row_array);
		}

		return json_encode($result_array);  		
     }
	 
     public static function getNextPlayerGroup()
     {
     	$con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
		if (!$con) { 
    		return die('Could not connect: ' . mysql_error()); 
		}
		$sql = 'SELECT MAX(playerGroup)+1 AS playerGroup FROM db544593513.PlayerGroup';
		$result_array = array();
		$result = mysql_query($sql,$con);
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    			$row_array['playerGroup'] = $row['playerGroup'];

    			array_push($result_array,$row_array);
		}

		return json_encode($result_array);  		
     }

     public static function getGroupNames($hash)
     {
     	$con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@'); 
		if (!$con) { 
    		return die('Could not connect: ' . mysql_error()); 
		}
		$sql = "SELECT * FROM db544593513.GroupName WHERE hash = '$hash'";
		$result_array = array();
		$result = mysql_query($sql,$con);
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    			$row_array['idGroupName'] = $row['idGroupName'];
    			$row_array['groupName'] = $row['groupName'];
				$row_array['hash'] = $row['hash'];
				
    			array_push($result_array,$row_array);
		}

		return json_encode($result_array);  		
     }


     public static function getPlayers($idCardGame, $idGroupName)
     {
     	$con = mysql_connect('db544593513.db.1and1.com', 'dbo544593513', 'doscar@');  
		if (!$con) { 
    		return die('Could not connect: ' . mysql_error()); 
		}
		$sql = "SELECT Player.idPlayer, Player.playerName FROM db544593513.Player
                JOIN db544593513.PlayerGroup ON PlayerGroup.idPlayer = Player.idPlayer
                Join db544593513.GroupName ON GroupName.idGroupName = PlayerGroup.idGroupName
                WHERE PlayerGroup.idCardGame = $idCardGame AND PlayerGroup.idGroupName = $idGroupName";
		$result_array = array();

		$result = mysql_query($sql,$con);

		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    			$row_array['idPlayer'] = $row['idPlayer'];

    			$row_array['playerName'] = $row['playerName'];

    			array_push($result_array,$row_array);
		}
  		return json_encode($result_array);   		
     }
  }
?>
