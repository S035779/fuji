<?php
require __DIR__ . '/../vendor/autoload.php';
use Thrift\Protocol\TBinaryProtocol;
use Thrift\Transport\TPhpStream;
use Thrift\Transport\TBufferedTransport;

use Fuji\Item\ItemServiceIf;
use Fuji\Item\ItemServiceProcessor;
use Fuji\Item\ItemOption;
use Fuji\Item\Item;
use Fuji\Item\Constant;

class ItemServiceHandler implements ItemServiceIf {
  public function ping() {
    error_log("ping()");
  }

  public function zip() {
    error_log("zip()");
  }

  public function add($num1, $num2) {
    error_log("add({$num1}, {$num2})");
    return $num1 + $num2;
  }

  public function findById($id) {
    error_log('findById');
    return new Item(array(
      'id'          =>  1
      , 'name'      =>  'S035779'
      , 'language'=>Constant::get('LANGUAGE_EN')
    ));
  }

  public function findByIds(array $ids, ItemOption $opt) {
    error_log('findByIds');
    return [new Item(array(
      'id'          =>  1
      , 'name'      =>  'S035779'
      , 'language'=>Constant::get('LANGUAGE_EN')
    ))];
  }
}

try {
  $handler = new ItemServiceHandler();
  $processor = new ItemServiceProcessor($handler);
  $transport = new TBufferedTransport(
    new TPhpStream(TPhpStream::MODE_R | TPhpStream::MODE_W));
  $protocol = new TBinaryProtocol($transport, true, true);
  header('Content-Type','application/x-thrift');
  $transport->open();
  $processor->process($protocol, $protocol);
  $transport->close();
} catch (Exception $ex) {
  file_put_contents('php://stderr', print_r($ex, TRUE));
}
