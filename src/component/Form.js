import React from 'react'

export const Form = () => {
  return (
    <div className='form-container'>
      <form>
        Name <input/>
        Email <input/>
        Phone No. <input/>
        Location <input/>
        <div className='submit-btn'>

        <input type='submit'/>
        </div>
      </form>
    </div>
  )
}

export default Form