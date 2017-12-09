require('dotenv').config()
import express from 'express';
import bodyParser from 'body-parser';
import Amazon from './utils/Amazon';
import { logs as log } from './utils/logutils';

const app = express();
const router = express.Router();
const port = process.env.PORT || 8081

const keyset = {
  access_key:   process.env.ACCESS_KEY
  , secret_key: process.env.SECRET_KEY
};

log.config('console', 'color', 'note-app', 'ALL');

const pspid = 'ItemService';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(log.connect());

router.use((req, res, next) => {
  log.trace(`${pspid}>`, req.method, req.url, req.path);
  next();
});

router.route('/newreleases')
.get((req, res, next) => {
  const { node_id, associ_tag } = req.query;
  log.trace(`${pspid}>`, node_id, associ_tag);
  keyset['associ_tag'] = associ_tag;
  Amazon.of(keyset).fetchNewReleases(node_id).subscribe(
    tops    => { res.json(tops); }
    , error => { log.error(`${pspid}>`, error); }
    , ()    => { log.info(`${pspid}>`, 'Completed'); }
  );
})
.put((req, res, next) => {
  next(new Error('not implemented'));
})
.post((req, res, next) => {
  next(new Error('not implemented'));
})
.delete((req, res, next) => {
  next(new Error('not implemented'));
});

router.route('/bestsellers')
.get((req, res) => {
  const { node_id, associ_tag } = req.query;
  log.trace(`${pspid}>`, node_id, associ_tag);
  keyset['associ_tag'] = associ_tag;
  Amazon.of(keyset).fetchBestSellers(node_id).subscribe(
    tops    => { res.json(tops); }
    , error => { log.error(`${pspid}>`, error); }
    , ()    => { log.info(`${pspid}>`, 'Completed'); }
  );
})
.put((req, res, next) => {
  next(new Error('not implemented'));
})
.post((req, res, next) => {
  next(new Error('not implemented'));
})
.delete((req, res, next) => {
  next(new Error('not implemented'));
});

router.route('/releasedate')
.get((req, res) => {
  const { node_id, category, page, associ_tag } = req.query;
  log.trace(`${pspid}>`, node_id, category, page, associ_tag );
  keyset['associ_tag'] = associ_tag;
  Amazon.of(keyset).fetchReleaseDate(node_id, category, page)
  .subscribe(
    items   => { res.json(items); }
    , error => { log.error(`${pspid}>`, error); }
    , ()    => { log.info(`${pspid}>`, 'Completed'); }
  );
})
.put((req, res, next) => {
  next(new Error('not implemented'));
})
.post((req, res, next) => {
  next(new Error('not implemented'));
})
.delete((req, res, next) => {
  next(new Error('not implemented'));
});

router.route('/salesranking/:patern')
.get((req, res) => {
  const { node_id, category, rate, associ_tag } = req.query;
  const { patern } = req.params;
  log.trace(`${pspid}>`, node_id, category, rate, patern, associ_tag );
  keyset['associ_tag'] = associ_tag;
  Amazon.of(keyset).fetchSalesRanking(node_id, category, rate, patern)
  .subscribe(
    items   => { res.json(items); }
    //, error => { log.error(`${pspid}>`, error); }
    //, ()    => { log.info(`${pspid}>`, 'Completed'); }
  );
})
.put((req, res, next) => {
  next(new Error('not implemented'));
})
.post((req, res, next) => {
  next(new Error('not implemented'));
})
.delete((req, res, next) => {
  next(new Error('not implemented'));
});

router.route('/itemlookup')
.get((req, res) => {
  const { item_id, id_type, associ_tag } = req.query;
  log.trace(`${pspid}>`, item_id, id_type, associ_tag);
  keyset['associ_tag'] = associ_tag;
  Amazon.of(keyset).fetchItemLookup(item_id, id_type).subscribe(
    items   => { res.json(items); }
    , error => { log.error(`${pspid}>`, error); }
    , ()    => { log.info(`${pspid}>`, 'Completed'); }
  );
})
.put((req, res, next) => {
  next(new Error('not implemented'));
})
.post((req, res, next) => {
  next(new Error('not implemented'));
})
.delete((req, res, next) => {
  next(new Error('not implemented'));
});

router.route('/itemlist')
.get((req, res) => {
  const { keyword, page, associ_tag } = req.query;
  log.trace(`${pspid}>`, keyword, page, associ_tag);
  keyset['associ_tag'] = associ_tag;
  Amazon.of(keyset).fetchItemList(keyword, page).subscribe(
    items   => { res.json(items); }
    , error => { log.error(`${pspid}>`, error); }
    , ()    => { log.info(`${pspid}>`, 'Completed'); }
  );
})
.put((req, res, next) => {
  next(new Error('not implemented'));
})
.post((req, res, next) => {
  next(new Error('not implemented'));
})
.delete((req, res, next) => {
  next(new Error('not implemented'));
});

router.route('/nodelist')
.get((req, res) => {
  const { node_id, associ_tag } = req.query;
  log.trace(`${pspid}>`, node_id, associ_tag);
  keyset['associ_tag'] = associ_tag;
  Amazon.of(keyset).fetchNodeList(node_id).subscribe(
    nodes   => { res.json(nodes); }
    , error => { log.error(`${pspid}>`, error); }
    , ()    => { log.info(`${pspid}>`, 'Completed'); }
  );
})
.put((req, res, next) => {
  next(new Error('not implemented'));
})
.post((req, res, next) => {
  next(new Error('not implemented'));
})
.delete((req, res, next) => {
  next(new Error('not implemented'));
});

app.use('/api', router);
app.listen(port);
