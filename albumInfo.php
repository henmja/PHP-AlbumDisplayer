<?php
require("albumdata.php");
$album = $_GET['album'];
if (array_key_exists($album, $albums)) {
    echo json_encode($albums[$album]);
}
