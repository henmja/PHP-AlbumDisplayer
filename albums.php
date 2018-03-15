<?php
/**
 * Server-side PHP script that generates a list of albums (in JSON format)
 */
require("albumdata.php");
$album_list = array();
foreach ($albums as $band => $album_data) {
    $album_list[] = array(
        'band' => $band,
        'artist' => $album_data['artist'],
        'title' => $album_data['title'],
    );
}
echo json_encode($album_list);
