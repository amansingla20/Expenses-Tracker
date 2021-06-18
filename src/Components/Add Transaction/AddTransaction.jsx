import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const {addTransaction} = useContext(GlobalContext);

    const Add = (event) =>{
        event.preventDefault();
        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text, amount: +amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <React.Fragment>
            <h3>Add new Transaction</h3>
            <form onSubmit={Add}>
                <div className='form-control'>
                    <h3>Text</h3>
                    <input value={text} onChange ={(e)=>setText(e.target.value)}type='text' placeholder='Enter Text...'/>
                </div>
                <div className="form-control">
                    <h3>Amount<br/>
                    (negative - expense, positive - income)</h3>
                    <input 
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}type='number' placeholder='Enter amount...'/>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </React.Fragment>
    )
}

export default AddTransaction
