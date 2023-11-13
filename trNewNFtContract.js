const bodyParser = require('body-parser');
const {Web3} = require('web3')
const NFTContractUpdated = require('./NFTContractUpdated.json');

async function makeCollection(){
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const id = await web3.eth.net.getId();
    const deployedNetwork = NFTContractUpdated.networks[id]; 
	console.log(deployedNetwork.address);
    const contract = new web3.eth.Contract(NFTContractUpdated.abi,deployedNetwork.address)
    try{
        const accounts = await web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        console.log("defualt account = " + defaultAccount);
        const reciept = await web3.eth.personal.unlockAccount(defaultAccount, "12345678", 3000);
       
//    const res1 = await contract.methods.getNumber().call();
//    console.log(res);
const gasLimit = '300000';
const gasPrice = '20000000000';
    const cid="tanu";
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
async function makeNFT(){
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const id = await web3.eth.net.getId();
    const deployedNetwork = NFTContractUpdated.networks[id]; 
	console.log(deployedNetwork.address);
    const contract = new web3.eth.Contract(NFTContractUpdated.abi,deployedNetwork.address)
    try{
        const accounts = await web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        console.log("defualt account = " + defaultAccount);
        const reciept = await web3.eth.personal.unlockAccount(defaultAccount, "12345678", 3000);
       
//    const res1 = await contract.methods.getNumber().call();
//    console.log(res);
const gasLimit = '3000000';
const gasPrice = '20000';

/*string memory _cid,
    string memory _name,
    string memory _description,
    string memory _filetype,
    uint256 _amount,
    string memory _collectionId,
    string memory _dateCreated,
    string memory _value */
// const encodedFunction = contract.methods.createNFT(
//     "2", "lakshita", "lakshita gaur", "img",5,"2","10-10-2019", "goodies"
// ).encodeABI();
const encodedFunction = contract.methods.createNFT(
    "tanu", "abhimanyu", "saini", "img",5,"tanu","10-10-2019", "goodies"
).encodeABI();
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
async function showNFT(){
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const id = await web3.eth.net.getId();
    const deployedNetwork = NFTContractUpdated.networks[id]; 
	console.log(deployedNetwork.address);
    const contract = new web3.eth.Contract(NFTContractUpdated.abi,deployedNetwork.address);
   
    try{
        const accounts = await web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        console.log("defualt account = " + defaultAccount);
        /**function getNFTsByOwner(address _owner)
        external 
        view 
        returns(uint256[] memory)
    {
        return userCollections[_owner];
    } */
   const res = await contract.methods.getNFTsByOwner(defaultAccount).call();
   console.log(res);

//    for(item in res){
//     // const result = await contract.methods.getCollection(item).call();
//     // console.dir(result);
//     console.log(item);
//    }

console.log('Transaction successful:', transactionReceipt);

        console.log("Transaction Hash:", transaction.transactionHash);
    }
    catch(error){
       console.log(error);
    }
}

//makeCollection();
//makeNFT();
showNFT();