const bodyParser = require('body-parser');
const {Web3} = require('web3')
const NFThubPlatformContract = require('./NFThubPlatformContract.json');

async function hello(){
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const id = await web3.eth.net.getId();
    const deployedNetwork = NFThubPlatformContract.networks[id]; 
	console.log(deployedNetwork.address);
    const contract = new web3.eth.Contract(NFThubPlatformContract.abi,deployedNetwork.address)
    try{
        const accounts = await web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        console.log("defualt account = " + defaultAccount);
        const reciept = await web3.eth.personal.unlockAccount(defaultAccount, "12345678", 3000);
       
//    const res1 = await contract.methods.getNumber().call();
//    console.log(res);
const gasLimit = '300000';
const gasPrice = '20000000000';
    const cid="2";
   const encodedFunction = contract.methods.createCollection(cid).encodeABI();  // Replace 'updateValue' with your actual function name
const privateKey = "0x99424e6bd2ec69d7d42b68671e665d313042f5d124448748aaab8986b12bcc66";
// Build the transaction object
const transactionObject = {
    from: defaultAccount,
    to: deployedNetwork.address,
    gas: gasLimit,
    gasPrice: gasPrice,
    data: encodedFunction,
  };

// Sign the transaction
const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);

// Send the signed transaction
const transactionReceipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);


console.log('Transaction successful:', transactionReceipt);

        console.log("Transaction Hash:", transaction.transactionHash);
    }
    catch(error){
       console.log(error);
    }
}

hello();