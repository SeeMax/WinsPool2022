<?php
	
	$curl = curl_init();

  curl_setopt_array($curl, [
    CURLOPT_URL => 'https://api-nba-v1.p.rapidapi.com/standings/standard/2021',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => [
      'x-rapidapi-host: api-nba-v1.p.rapidapi.com',
      'x-rapidapi-key: 638e4165efmsh6d47844fdf824b6p126dc9jsneb5a38105a9b'
    ],
  ]);

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

	$file = fopen('/home/maxmea1/www.wins-pool.com/wp-content/themes/seemax-theme/json/standings2.json','w');
  fwrite($file,$response);
  fclose($file);
?>