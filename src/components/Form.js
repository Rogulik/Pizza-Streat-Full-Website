import React from 'react'
import '../styles/Form.scss'


const Form = () => {
  return (
      <div className='form__container'>
      <div className='form__text-container'>
      <h2>let's be in touch</h2>
      <p>
          Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla.
          <a href='#'>See our FAQ before submiting the form</a>
      </p>
      
  </div>
        <form className='form'>
           <span className='form__span'>* Required</span>
            <div className='form__group'>
                <label htmlFor='QF_name'>Full name*</label>
                <input type='text' id='QF_name' maxLength='80' name='_name' className='form__input' required />
            </div>
            <div className='form__group'>
                <label htmlFor='QF_email'>Email address*</label>
                <input type='email' id='QF_email' maxLength='80' name='email' className='form__input' required />
            </div>
            <div className='form__group'>
                <label htmlFor='QF_reason'>Case reason*</label>
                <select type='text' id='QF_reason' name='reason' className='form__input' required> 
                    <option value>--None--</option>
                    <option value='Compliment'>Compliment</option>
                    <option value='Feedback'>Feedback</option>
                    <option value='Question'>Question</option>
                </select>
            </div>
            <div className='form__group'>
                <label htmlFor='QF_description'>Description*</label>
                <textarea id='QF_description' name='email' required className='form__input textarea'/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
