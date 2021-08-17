import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    const yearChangeHandler = (event) => {
        props.onSaveYearFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filtrar por año</label>
            <select value={props.defaultYear} onChange={yearChangeHandler} >
              <option value='2022' >2022</option>
              <option value='2021' >2021</option>
              <option value='2020' >2020</option>
              <option value='2019' >2019</option>
              <option value='all' >Todas</option>
            </select>
        </div>
      </div>
    )
}

export default ExpensesFilter
