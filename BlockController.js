//Importing BlockChain.js module
const BlockChain = require('./BlockChain.js');
//Importing Block.js module
const Block = require('./Block.js');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, all endpoints are initialized here
     * @param {*} app
     */
    constructor(app) {
        this.app = app;
        this.myBlockChain = new BlockChain.Blockchain();
        this.initializeMockData();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * GET Endpoint to retrieve a block by index, url: "/block/:index"
     */
    getBlockByIndex() {
        let self = this;
        this.app.get('/block/:index', (req, res) => {
            self.myBlockChain.getBlock(req.params.index).then((block) => {
                console.log(`getBlockByIndex: ${JSON.stringify(block)}`);
                res.status(200);
                res.type('application/json');
                res.set('Cache-Control', 'no-cache');
                res.set('Accept-Ranges', 'bytes');
                res.set('Connection', 'close');
                res.send(JSON.stringify(block));
            }).catch((err) => {
                console.log(err);
                res.set('Connection', 'close');
                res.status(404).end();
            });
        });
    }

    /**
     * POST Endpoint to add a new Block, url: "/block"
     */
    postNewBlock() {
        let self = this;
        this.app.post('/block', (req, res) => {
            // Check empty object: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
            if (req.body.constructor === Object && Object.entries(req.body).length === 0) {
                console.log(`postNewBlock: Warning: an attempt has been made to add a block without specifying payload.`);
                res.send(`Warning: The payload is empty. No block has been created.`);
            } else {
                let block = new Block.Block(req.body.body);
                self.myBlockChain.addBlock(block).then((result) => {
                    res.status(200);
                    res.type('application/json');
                    res.set('Cache-Control', 'no-cache');
                    res.set('Connection', 'close');
                    res.json(JSON.parse(result));
                }).catch((err) => {
                    console.log(err);
                    res.set('Connection', 'close');
                    res.status(500).end();
            });
            }
        });
    }

    /**
     * Helper method to inizialize Mock dataset, adds 10 test blocks to the blockchain, on top of the genesis block
     * already created
     */
    initializeMockData() {
        let self = this;
        (function theLoop (i) {
            setTimeout(function () {
                let blockTest = new Block.Block("Test Block - " + (i + 1));
                self.myBlockChain.addBlock(blockTest).then((result) => {
                    i++;
                    if (i < 10) theLoop(i);
                });
            }, 10000);
        })(0);
    }

}

/**
 * Exporting the BlockController class
 * @param {*} app
 */
module.exports = (app) => { return new BlockController(app);}