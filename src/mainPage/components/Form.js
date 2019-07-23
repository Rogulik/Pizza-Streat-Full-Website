import React from 'react'
import '../styles/Form.scss'
import {Formik} from 'formik'
import axios from 'axios'

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
    <Formik
        initialValues={{ name: '',email: '', reason: '',content:'' }}
        onSubmit={(values) => {
            JSON.stringify(values,null,2)
            axios({
                method: "POST", 
                url:"localhost:3000", 
                data: {
                   name: values.name,   
                   email: values.email,  
                    reason: values.reason,
                    content: values.content
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Message Sent."); 
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    alert("Message failed to send.")
                }
            })
        }}
        >{({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className='form' onSubmit={handleSubmit} method='POST'>
            <span className='form__span'>* Required</span>
             <div className='form__group'>
                 <label htmlFor='QF_name'>Full name*</label>
                 <input 
                 type='text' 
                 id='QF_name' maxLength='80' 
                 name='name' className='form__input' required 
                 values={values.name}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
             </div>
             <div className='form__group'>
                 <label htmlFor='QF_email'>Email address*</label>
                 <input 
                 type='email' 
                 id='QF_email' maxLength='80' name='email' className='form__input' required 
                 values={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
             </div>
             <div className='form__group'>
                 <label htmlFor='QF_reason'>Case reason*</label>
                 <select 
                 type='text'
                  id='QF_reason' name='reason' className='form__input' required
                  values={values.reason}
                onChange={handleChange}
                onBlur={handleBlur}
                  > 
                     <option value>--None--</option>
                     <option value='Compliment'>Compliment</option>
                     <option value='Feedback'>Feedback</option>
                     <option value='Question'>Question</option>
                 </select>
             </div>
             <div className='form__group'>
                 <label htmlFor='QF_description'>Description*</label>
                 <textarea id='QF_description' 
                 name='content' 
                 required className='form__input textarea'
                 values={values.content}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
             </div>
             <button type='submit'>Submit</button>
             
         </form>
          )}
        </Formik >
    </div>
    
  )
}

export default Form
