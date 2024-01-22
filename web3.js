const  { Web3 }= require('web3');

//private RPC endpoint 
const web3 = new Web3('https://goerli.infura.io/v3/20b4480db5774ac79aa98a49a9271dbe'); 

//or public RPC endpoint
//const web3 = new Web3('https://eth.llamarpc.com'); 
// console.log(web3);
// web3.eth.getBlockNumber().then(console.log);
// ↳ 18849658n


// const account = web3.eth.accounts.create();

// console.log('Account Address:', account.address);

// get the balance of an address
// const get_balance = async()=>{
// const balance = await web3.eth.getBalance('0xb4128f0A11E9E9754C9cb867759FC478E1A5573B');
// const get_block_number=await web3.eth.getBlockNumber();
// const get_chain_id = await web3.eth.getChainId();
// const get_transcation=await web3.eth.getTransactionCount('0xb4128f0A11E9E9754C9cb867759FC478E1A5573B');
// const get_gas_price = await web3.eth.getGasPrice();

// console.log(balance,'balancebalancebalance');
// console.log(get_block_number,'get_block_numberget_block_number');
// console.log(get_chain_id,'get_chain_idget_chain_id');
// console.log(get_transcation,'get_transcationget_transcation');
// console.log(get_gas_price,'get_gas_priceget_gas_price');
// }
//  get_balance(); 


// const wallet_create = async()=>{
//    const wallet_create=  web3.eth.accounts.wallet.create(1)
// console.log(wallet_create,'wallet_createwallet_createwallet_create');
// }
// wallet_create();

// const account = web3.eth.accounts.wallet.add('0xa30a3aeaa2cced4ad122b868824fb87373ff4f39a3e55cf0f66d50c0a16d6035');
//  console.log(account[0].address);
// console.log(account[0].privateKey);


//add an account to a wallet
const account = web3.eth.accounts.wallet.add('0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec');
// console.log(account,'accountaccount');


//create transaction object to send 1 eth to '0xa32...c94' address from the account[0]
const send_transc = async()=>{

    const tx = 
    { 
        from: account[0].address,
        to: '0xcE6A5235d6033341972782a15289277E85E5b305', 
        value: web3.utils.toWei('1', 'ether')
    };
    
    const txReceipt = await web3.eth.sendTransaction(tx);
    
    console.log('Tx hash:', txReceipt.transactionHash)
}
send_transc();

 