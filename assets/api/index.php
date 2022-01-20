<?php
$requestType = $_SERVER['REQUEST_METHOD'];

switch ($requestType) {
    case 'GET':
        $person = [
            "prenom" => "Maurice",
            "nom" => "dujardin",
            "age" => "56"
        ];

        return print_r(json_encode($person));
}
