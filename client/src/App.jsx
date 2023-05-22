import { Navbar, Welcome, Footer, Service, Transaction } from './component';
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Service />
      <Transaction />
      <Welcome />
      <Footer />
    </div>
);
}
export default App;