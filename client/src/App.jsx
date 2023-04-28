/* */
import { navbar, Welcome, Footer, Service, Transaction } from './component';
const App = () => {
  return (
    <div className='App'>
      <navbar />
      <Service />
      <Transaction />
      <Welcome />
      <Footer />
</div>
  );
}
export default App;