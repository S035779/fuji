<?php

namespace S035779\Fuji;

$loader = require __DIR__ . '/../vendor/autoload.php';

ini_set('date.timezone', 'asia/tokyo');

if(file_exists(__DIR__ . '/../.env')) {
  $dotenv = new \Dotenv\Dotenv(__DIR__ . '/../');
  $dotenv->load();
  $dotenv->required(['MY_PHP_ENV']);
}

if (is_production()) {
  error_reporting(0);
  ini_set('display_errors', '0');
  $whoops_handler = new \Whoops\Handler\CallbackHandler(
    '\S035779\Fuji\my_shutdown_handler');
} else {
  error_reporting(E_ALL);
  $whoops_handler = new \Whoops\Handler\PrettyPageHandler;
}

if (PHP_SAPI === 'cli') {
  $whoops_handler = new \Whoops\Handler\PlaneTextHandler;
}

$whoops = new \Whoops\Run;
$whoops->pushHandler($whoops_handler);
$whoops->pushHandler('\S035779\Fuji\my_whoops_logger_handler');
$whoops->register();

$monolog_handlers = [];
if (is_production()) {
  init_set('log_errors', '1');
  $monolog_handlers[] = new \Monolog\Handler\ErrorLogHandler(0
    , \Monolog\Logger::WARNING);
} else {
  $log_file = __DIR__ . "/../{$_ENV['MY_PHP_ENV']}.log";
  $monolog_handlers[] = new \Monolog\Handler\StreamHandler($log_file);
  $monolog_handlers[] = new \Monolog\Handler\ChromePHPHandler();
}
$monolog = new \Monolog\Logger('watch-web', $monolog_handlers);
logger($monolog);
