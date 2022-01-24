<?php

use Chloe\Routeur\RequestContext;
use Chloe\Routeur\Route;
use Chloe\Routeur\Router;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;

require "../vendor/autoload.php";

$router = new Router(RequestContext::fromRequest(new Request("GET", "/")));

$route = new Route("home", "/", function (): ResponseInterface {
    require_once "./view/index.html";
    return new Response(200, [], "Hello world !");
});

$router->add($route);

echo "Nom de la route : " . $route->getName();

/** @var ResponseInterface $response */
$response = $router->call();