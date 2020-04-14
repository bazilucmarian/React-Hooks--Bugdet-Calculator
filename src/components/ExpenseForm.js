import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm=({charge, amount, edit,handleCharge, handleAmount, handleSubmit})=>{
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input type="text" className="form-control"
                     id="charge" 
                     name="charge"
                     placeholder="ex: rent"
                     value={charge}
                     onChange={handleCharge}

                     />
                </div>
                <div className="form-group">
                    <label htmlFor="amout">Amount</label>
                    <input type="number" className="form-control"
                     id="amount" 
                     name="amount"
                     placeholder=" ex 100"
                     value={amount}
                     onChange={handleAmount}
                     />
                </div>
            </div>
            <button type="submit" className="btn">
            {edit? 'edit' : 'submit'}
            <MdSend className="btn-icon"/>
            </button>
        </form>
    )
}

export default ExpenseForm;
