require('dotenv').config();
import thrift from 'thrift';
import ItemService from '../gen-nodejs/ItemService';
import ttypes from '../gen-nodejs/fuji_types';
import Amazon from './utils/Amazon';
import {logs as log} from './utils/logutils';

const port = process.env.PORT || 8081
const pspid = 'ItemService';

log.config('console', 'color', 'note-app', 'ALL');

const ItemServiceHandler = {
  NewReleases: function (node_id, callback) {
    log.trace(`${pspid}>`, node_id);
    const amazon = new Amazon();
    amazon.fetchNewReleases(node_id)
      .subscribe(
        tops  => { callback(null, tops); },
        err   => log.error(`${pspid}>`, err),
        ()    => log.info(`${pspid}>`, 'Completed')
      );
  },
  BestSellers: function (node_id, callback) {
    log.trace(`${pspid}>`, node_id);
    const amazon = new Amazon();
    amazon.fetchBestSellers(node_id)
      .subscribe(
        tops => { callback(null, tops);},
        err   => log.error(`${pspid}>`, err),
        ()    => log.info(`${pspid}>`, 'Completed')
      );
  },
  ReleaseDate: function (node_id, category, page, callback) {
    log.trace(`${pspid}>`, node_id, category, page);
    const amazon = new Amazon();
    amazon.fetchReleaseDate(node_id, category, page)
      .subscribe(
        items => {callback(null, items);},
        err   => log.error(`${pspid}>`, err),
        ()    => log.info(`${pspid}>`, 'Completed')
      );
  },
  SalesRanking: function (node_id, category, page, callback) {
    log.trace(`${pspid}>`, node_id, category, page);
    const amazon = new Amazon();
    amazon.fetchSalesRanking(node_id, category, page)
      .subscribe(
        items => {callback(null, items);},
        err   => log.error(`${pspid}>`, err),
        ()    => log.info(`${pspid}>`, 'Completed')
      );
  },
  ItemLookup: function (item_id, id_type, callback) {
    log.trace(`${pspid}>`, item_id, id_type);
    const amazon = new Amazon();
    amazon.fetchItemLookup(item_id, id_type)
      .subscribe(
        items => {callback(null, items);},
        err   => log.error(`${pspid}>`, err),
        ()    => log.info(`${pspid}>`, 'Completed')
      );
  },
  ItemList: function (keyword, page, callback) {
    log.trace(`${pspid}>`, keyword, page);
    const amazon = new Amazon();
    amazon.fetchItemList(keyword, page)
      .subscribe(
        items => {callback(null, items);},
        err   => log.error(`${pspid}>`, err),
        ()    => log.info(`${pspid}>`, 'Completed')
      );
  },
  NodeList: function (node_id, callback) {
    log.trace(`${pspid}>`, node_id);
    const amazon = new Amazon();
    amazon.fetchNodeList(node_id)
      .subscribe(
        nodes => {callback(null, nodes);},
        err   => log.error(`${pspid}>`, err),
        ()    => log.info(`${pspid}>`, 'Completed')
      );
  }
};

const services = {
  "/api": {
    handler: ItemServiceHandler,
    processor: ItemService,
    protocol: thrift.TJSONProtocol,
    transport: thrift.TBufferedTransport
  } 
};
const server = thrift.createWebServer({ services });
server.listen(port);
