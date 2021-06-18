import "./App.css";
import Header from "./Components/Header/Header";
import Balance from "./Components/Balance/Balance";
import IncomeExpenses from "./Components/Income Expenses/IncomeExpenses";
import TransactionList from "./Components/TransactionList/TransactionList";
import AddTransaction from "./Components/Add Transaction/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};
export default App;
