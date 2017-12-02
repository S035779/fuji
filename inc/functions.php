<?php

namespace S035779\Fuji;

use Monolog\Logger;
 
/**
 * Function to return the operating location as an environment variable.
 *
 * @return bool
 */
function is_production() {
  return getenv('MY_PHP_ENV') === 'production';
}

/**
 * Function to return PDO instance for database access.
 *
 * @return \Aura\Sql\ExtendedPdo
 */
function getpdo() {
  static $pdo;
  if ($pdo === null) {
    $pdo = new \Aura\Sql\ExendedPdo(
      getenv('DB_DSN'), getenv('DB_USER'), getenv('DB_PASSWORD')
    );
  }
  return $pdo;
}

/**
 * Function to escape charactor string to HTML docuent.
 *
 * @param string $s
 * @return string
 */
function h($s) {
  return htmlspecialchars($s, ENT_QUOTES);
}

/**
 * Function to return instance for Logger function.
 * logger()->warn
 *
 * @param \Monolog\Logger $logger
 * @return \Monolog\Logger
 */
function logger(\Monolog\Logger $new_logger = null) {
  static $logger;
  if ($new_logger !== null) {
    $logger = $new_logger;
  }
  return $logger;
}

/**
 * Function to recode back trace and log infomation.
 * 
 * @return null
 */
function my_whoops_logger_handler($exception, $inspector, $run) {
  $logfile = __DIR__ . '/../error.log';
  if (is_writable($logfile)) {
    $data = \Whoops\Exception\Formatter::formatExceptionAsDataArray(
      $inspector, true) + [
        'time'      =>  (string)$_SERVER['REQUEST_TIME_FLOAT'],
        '$_SERVER'  =>  $_SERVER,
        '$_GET'     =>  $_GET,
        '$_POST'    =>  $_POST,
        '$_COOKIE'  =>  $_COOKIE 
      ];
    $json = json_encode($data, JSON_UNESCAPED_SLASHES);
    file_put_contents($logfile, $json . "\n", FILE_APPEND);
  }
  return null;
}

/**
 * Function to get error log.
 *
 * @return string
 */
function get_error_log() {
  $logfile = __DIR__ . '/../error.log';
  $log = [];
  foreach(file($logfile) as $line) {
    $log[] = json_decode($line, true);
  }
  return $log;
}

