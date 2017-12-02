<?php
require __DIR__ . '/../vendor/autoload.php';
use tutorial\CalculatorClient;
use tutorial\Work;
use tutorial\Operation;
use tutorial\InvalidOperation;

use Thrift\Protocol\TBinaryProtocol;
use Thrift\Transport\TSocket;
use Thrift\Transport\THttpClient;
use Thrift\Transport\TBufferedTransport;
use Thrift\Exception\TException;

try {
  $socket = new THttpClient('localhost', 8080, 'tutorial_server.php');
  $transport = new TBufferedTransport($socket, 1024, 1024);
  $protocol = new TBinaryProtocol($transport);
  $client = new CalculatorClient($protocol);
  $transport->open();

  $client->ping();
  print "ping()\n";

  $sum = $client->add(1,1);
  print "1+1=$sum\n";

  $work = new Work();
  $work->op = Operation::DIVIDE;
  $work->num1 = 1;
  $work->num2 = 0;
  try {
    $client->calculate(1, $work);
    print "Whoa! We can divide by zero?\n";
  } catch (InvalidOperation $io) {
    print "InvalidOperation: $io->why\n";
  }

  $work->op = Operation::SUBTRACT;
  $work->num1 = 15;
  $work->num2 = 10;
  $diff = $client->calculate(1, $work);
  print "15-10=$diff\n";
  $log = $client->getStruct(1);
  print "Log: $log->value\n";

  $transport->close();
} catch (TException $tx) {
  print 'TException: '.$tx->getMessage()."\n";
}

