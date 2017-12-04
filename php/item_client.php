<?php
require __DIR__ . '/../vendor/autoload.php';

use Thrift\Protocol\TBinaryProtocol;
use Thrift\Transport\TSocket;
use Thrift\Transport\THttpClient;
use Thrift\Transport\TBufferedTransport;
use Thrift\Exception\TException;

use Fuji\Item\ItemServiceClient;

$socket = new THttpClient('localhost', 8080, 'item_service.php');
$transport = new TBufferedTransport($socket, 1024, 1024);
$protocol = new TBinaryProtocol($transport);
$client = new ItemServiceClient($protocol);
$transport->open();
///////$result = $client->NewReleases(2189374051);
///////$result = $client->BestSellers(2189374051);
///////$result = $client->ReleaseDate(2189374051, 'Hobbies', 1);
///////$result = $client->SalesRanking(2189374051, 'Hobbies', 1);
///////$result = $client->NodeList(2189366051);
///////$result = $client->ItemLookup('B075CLGPC9', 'ASIN');
///////$result = $client->ItemList('HarryPotter', 1);
$transport->close();
var_dump($result);
