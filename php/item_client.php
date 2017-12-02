<?php
require __DIR__ . '/../vendor/autoload.php';

use Thrift\Protocol\TBinaryProtocol;
use Thrift\Transport\TSocket;
use Thrift\Transport\THttpClient;
use Thrift\Transport\TBufferedTransport;
use Thrift\Exception\TException;

use Fuji\Item\ItemServiceClient;
use Fuji\Item\ItemOption;

$socket = new THttpClient('localhost', 8080, 'item_service.php');
$transport = new TBufferedTransport($socket, 1024, 1024);
$protocol = new TBinaryProtocol($transport);
$client = new ItemServiceClient($protocol);
$transport->open();
$result = $client->findByIds([1], new ItemOption());
$transport->close();
var_dump($result);
