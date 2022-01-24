<?php

use Chloe\PhpPdoSingleton\DB;

require "../vendor/autoload.php";

$database = new DB("localhost", "madatabase", "root", "");
$database->getPDO()->query("SELECT * blabla WHERE toto=1");