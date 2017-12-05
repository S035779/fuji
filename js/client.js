import thrift from 'thrift';
import ItemService from '../gen-nodejs/ItemService';
import ttypes from '../gen-nodejs/fuji_types';


const connection = thrift.createHttpConnection("localhost", 8081, {
  transport:  thrift.TBufferedTransport,
  protocol:   thrift.TJSONProtocol,
  path:       '/api',
  headers:    {"Connection": "close"},
  https: false
});

const client = thrift.createHttpClient(ItemService, connection);

client.BestSellers(2189374051, function(err, response) {
  console.log(response);
}); 

