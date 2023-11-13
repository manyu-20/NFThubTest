const bodyParser = require('body-parser');
const {Web3} = require('web3')
const MyContract = require('./MyContract.json');

async function hello(){
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id]; 
	console.log(deployedNetwork.address);
    const contract = new web3.eth.Contract(MyContract.abi,deployedNetwork.address);
    // const result = await contract.methods.getNumber().call();
    // if(result != null){
    //     console.log("result = " + result);
    // }
    try{
        const accounts = await web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        console.log("defualt account = " + defaultAccount);
        // const reciept = await web3.eth.personal.unlockAccount(defaultAccount, "", 3000);
        // console.log(reciept);
//         const accountNonce =
//         '0x' + (web3.eth.getTransactionCount(defaultAccount) + 1).toString(16)
//         console.log(accountNonce);
//         const gasPrice = '20000000000';  // Replace with an appropriate gas price
// const gasLimit = '300000';  // Replace with an appropriate gas limit

// // The value you want to update in the contract
// const newValue = 42;  // Replace with the new value you want to set
// await web3.eth.personal.unlockAccount(defaultAccount, "12345678", 300);  // Adjust the unlock duration as needed
   const res = await contract.methods.getNumber().call();
   console.log(res);
// // Encode the function call
// const encodedFunction = contract.methods.updateNumber(newValue).encodeABI();  // Replace 'updateValue' with your actual function name
// const privateKey = "0x99424e6bd2ec69d7d42b68671e665d313042f5d124448748aaab8986b12bcc66";
// // Build the transaction object
// const transactionObject = {
//     from: defaultAccount,
//     to: deployedNetwork.address,
//     gas: gasLimit,
//     gasPrice: gasPrice,
//     data: encodedFunction,
//   };

// // Sign the transaction
// const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);

// // Send the signed transaction
// const transactionReceipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

console.log('Transaction successful:', transactionReceipt);







        // Send a transaction to update the number

        
        // Print the transaction hash
        console.log("Transaction Hash:", transaction.transactionHash);
    }
    catch(error){
       console.log(error);
    }
}

hello();