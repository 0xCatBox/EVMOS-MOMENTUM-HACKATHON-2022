const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const cors = require('cors')
const FTcontract = require('./contracts_JSON/CatToken.json');
const NFTcontract = require('./contracts_JSON/NFCtoken.json');
const FTmint = require('./contracts_JSON/FTmint.json');
const NFTmint = require('./contracts_JSON/NFTmint.json');
const Web3 = require('web3');
const { utils } = require('web3');
const Tx = require('ethereumjs-tx').Transaction;


require('dotenv').config();
const { RINKEBY_URL, MUMBAI_URL, PRIVATE_KEY, ADDRESS_ACCOUNT, ADDRESS_CONTRACT_FT, ADDRESS_CONTRACT_NFT  } = process.env;
const FTabi = FTcontract.abi;
const NFTabi = NFTcontract.abi;

const FTmintabi = FTmint.abi;
const FTmintbyte = FTmint.bytecode;
const NFTmintabi = NFTmint.abi;
const NFTmintbyte = NFTmint.bytecode;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
app.use(express.json());

app.post('/api/FTmint/', async (req, res) => {

    //req.header
    const argv = {
        name: req.body.name,
        symbol: req.body.symbol,
        supply: req.body.supply,
        chain: req.body.chain,
        account: req.body.account
    }
    console.log(argv);

    let url = "";
    if (argv.chain === "rinkeby") {
        url = RINKEBY_URL
    }
    else if (argv.chain === "mumbai") {
        url = MUMBAI_URL
    }

    const web3 = new Web3(new Web3.providers.HttpProvider(url));

    const contract = new web3.eth.Contract(FTmintabi
        , '', {
        from: ADDRESS_ACCOUNT,
        gasPrice: web3.utils.toHex(10e9),
        data: FTmintbyte
        }
    )

    const incrementerTx = contract.deploy({
        data: FTmintbyte,
        arguments: [argv.name, argv.symbol, argv.supply, argv.account]
    })

    const createTransaction = await web3.eth.accounts.signTransaction(
    {
      data: incrementerTx.encodeABI(),
      gas: await incrementerTx.estimateGas(),
    },
    PRIVATE_KEY
  );

  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
    res.send(createReceipt.contractAddress);

});




app.post('/api/NFTmint/', async (req, res) => {

    //req.header
    const argv = {
        name: req.body.name,
        symbol: req.body.symbol,
        tokenuri : req.body.tokenuri,
        chain: req.body.chain,
        account: req.body.account
    }
    console.log(argv);

    let url = "";
    if (argv.chain === "rinkeby") {
        url = RINKEBY_URL
    }
    else if (argv.chain === "mumbai") {
        url = MUMBAI_URL
    }

    const web3 = new Web3(new Web3.providers.HttpProvider(url));

    const contract = new web3.eth.Contract(NFTmintabi
        , '', {
        from: ADDRESS_ACCOUNT,
        gasPrice: web3.utils.toHex(10e9),
        data: NFTmintbyte
        }
    )

    const incrementerTx = contract.deploy({
        data: NFTmintbyte,
        arguments: [argv.name, argv.symbol, argv.tokenuri, argv.account]
    })

    const createTransaction = await web3.eth.accounts.signTransaction(
    {
      data: incrementerTx.encodeABI(),
      gas: await incrementerTx.estimateGas(),
    },
    PRIVATE_KEY
  );

  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
    res.send(createReceipt.contractAddress);

});



app.post('/api/FT/', async (req, res) => {

        const hobby = {
            Fashion: req.body.Fashion,
            Food: req.body.Food,
            Travel: req.body.Travel,
            Medical: req.body.Medical,
            Education: req.body.Education,
            Exercise: req.body.Exercise
        }
    console.log(hobby);

    const web3 = new Web3(new Web3.providers.HttpProvider(API_URL));

    const contract = new web3.eth.Contract(FTabi, ADDRESS_CONTRACT_FT)
    const functionAbi = contract.methods.mintFT(ADDRESS_ACCOUNT).encodeABI();

    const txData = {
            gasLimit: web3.utils.toHex(700000),
            gasPrice: web3.utils.toHex(10e9),
            from: ADDRESS_ACCOUNT,
            to: ADDRESS_CONTRACT_FT,
            data: functionAbi
    };

    const sendRawTransaction = txData =>
        web3.eth.getTransactionCount(ADDRESS_ACCOUNT).then(txCount => {
            console.log(txCount);
            const newNonce = web3.utils.toHex(txCount)
            const transaction = new Tx({ ...txData, nonce: newNonce}, { chain: 'rinkeby' })
            transaction.sign(Buffer.from(PRIVATE_KEY, 'hex'))  // 수정영역
            const serializedTx = transaction.serialize().toString('hex')
            return web3.eth.sendSignedTransaction('0x' + serializedTx)
        })

    sendRawTransaction(txData).then(result => {
        console.log(result.transactionHash);

        const AdForm = {
            name: "songAD",
            AdLink: "this is a link",
            description: "hi this is a testAd!!",
            transactionAddress: result.transactionHash,
        }
        if (hobby.Fashion > 1 && hobby.Medical > 1 && hobby.Education > 1) {
            res.send(AdForm);
        } else {
            res.send("invalid!!!");
        }
    })
        // ** use groth16 **
});




app.post('/api/NFT/', async (req, res) => {

        const hobby = {
            Fashion: req.body.Fashion,
            Food: req.body.Food,
            Travel: req.body.Travel,
            Medical: req.body.Medical,
            Education: req.body.Education,
            Exercise: req.body.Exercise
        }
    console.log(hobby);

    const web3 = new Web3(new Web3.providers.HttpProvider(API_URL));

    const tokenURI = "The tokenURI you want to put in";
    const contract = new web3.eth.Contract(NFTabi, ADDRESS_CONTRACT_NFT)
    const functionAbi = contract.methods.mintNFT(ADDRESS_ACCOUNT, tokenURI).encodeABI();

    const txData = {
            gasLimit: web3.utils.toHex(700000),
            gasPrice: web3.utils.toHex(10e9),
            from: ADDRESS_ACCOUNT,
            to: ADDRESS_CONTRACT_NFT,
            data: functionAbi
    };

    const sendRawTransaction = txData =>
        web3.eth.getTransactionCount(ADDRESS_ACCOUNT).then(txCount => {
            console.log(txCount);
            const newNonce = web3.utils.toHex(txCount)
            const transaction = new Tx({ ...txData, nonce: newNonce}, { chain: 'rinkeby' })
            transaction.sign(Buffer.from(PRIVATE_KEY, 'hex'))
            const serializedTx = transaction.serialize().toString('hex')
            return web3.eth.sendSignedTransaction('0x' + serializedTx)
        })

    sendRawTransaction(txData).then(result => {
        console.log(result.transactionHash)

        const AdForm = {
            name: "songAD",
            AdLink: "this is a link",
            description: "hi this is a testAd!!",
            transactionAddress: result.transactionHash,
        }
        if (hobby.Fashion > 1 && hobby.Medical > 1 && hobby.Education > 1) {
            res.send(AdForm);
        } else {
            res.send("invalid!!!");
        }
    })
        // ** use groth16 **
});




app.listen(port, () => console.log(`Listen ${port}`));
