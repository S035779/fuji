<?php
require __DIR__ . '/../vendor/autoload.php';
use tutorial\CalculatorIf;
use tutorial\CalculatorProcessor;
use tutorial\Operation;
use tutorial\Work;
use tutorial\InvalidOperation;
use shared\SharedStruct;

if (php_sapi_name() == 'cli') {
    ini_set("display_errors", "stderr");
}

use Thrift\Protocol\TBinaryProtocol;
use Thrift\Transport\TPhpStream;
use Thrift\Transport\TBufferedTransport;

class CalculatorHandler implements CalculatorIf {
  protected $log = array();

  public function ping() {
    error_log("ping()");
  }

  public function zip() {
    error_log("zip()");
  }

  public function getStruct($key) {
    error_log("getStruct({$key})");
    return new SharedStruct(
      array("key" => $key, "value" => "PHP is stateless!")
    );
  }

  public function add($num1, $num2) {
    error_log("add({$num1}, {$num2})");
    return $num1 + $num2;
  }

  public function calculate($logid, Work $w) {
    error_log("calculate({$logid}, {{$w->op}, {$w->num1}, {$w->num2}})");
    switch ($w->op) {
      case Operation::ADD:
        $val = $w->num1 + $w->num2;
        break;
      case Operation::SUBTRACT:
        $val = $w->num1 - $w->num2;
        break;
      case Operation::MULTIPLY:
        $val = $w->num1 * $w->num2;
        break;
      case Operation::DIVIDE:
        if ($w->num2 == 0) {
          $io = new InvalidOperation();
          $io->whatOp = $w->op;
          $io->why = "Cannot divide by 0";
          throw $io;
        }
        $val = $w->num1 / $w->num2;
        break;
      default:
        $io = new InvalidOperation();
        $io->whatOp = $w->op;
        $io->why = "Invalid Operation";
        throw $io;
    }
    $log = new SharedStruct();
    $log->key = $logid;
    $log->value = (string)$val;
    $this->log[$logid] = $log;
    return $val;
  }
}

header('Content-Type', 'application/x-thrift');
if (php_sapi_name() == 'cli') {
    echo "\r\n";
}

$handler = new CalculatorHandler();
$processor = new CalculatorProcessor($handler);
$transport = new TBufferedTransport(new TPhpStream(TPhpStream::MODE_R | TPhpStream::MODE_W));
$protocol = new TBinaryProtocol($transport, true, true);
$transport->open();
$processor->process($protocol, $protocol);
$transport->close();
