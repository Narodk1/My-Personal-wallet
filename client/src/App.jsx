import React from 'react';
import { Navbar, Welcome, Footer, Service, Transaction } from './component';
import { shortenAddress } from './utilities';

const App = () => {
  // Supposons que vous ayez également d'autres props comme `connectWallet` et `currentAccount`
  const connectWallet = () => { /* votre logique pour connecter le wallet */ };
  const currentAccount = "0x1234567890abcdef1234567890abcdef12345678"; // Exemple d'adresse

  return (
    <div className='App'>
      <Navbar />
      <Welcome
        connectWallet={connectWallet}
        currentAccount={currentAccount}
        shortenAddress={shortenAddress}
        // autres props nécessaires
      />
      <Service />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
