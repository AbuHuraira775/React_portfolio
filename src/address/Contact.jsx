import React from 'react'

export default function Contact() {


  const message_by_user = {
    user_name : '',
    user_email : '',
    user_message : ''
  }

  const onsubmit = (e)=>{
      console.log(e.preventDefault)
  }
  const submit = ()=>{
    
    console.log('submitted')
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var message = document.getElementById('message')
    
    message_by_user.user_name = name.value
    message_by_user.user_email = email.value
    message_by_user.user_message = message.value

    console.log(message_by_user)
    name.innerHTML = ''

    alert("your message has been submitted")
  }
  return (
    <div className='contact'>
    
    <h1><span className='bold'>Contact</span> Form</h1>

   
    <form onSubmit={onsubmit} className='form'>



      <div className='field'>
      <input type="name" id="name"placeholder='name'  />
      </div>
      
      <div className='field'>
      <input type="email" id='email'  placeholder='Email '/>
      </div>
      
      <div className='field'>
      <input type="name" id='message' placeholder='Message'/>
      </div>

      <div className='submit' onClick={submit}>
        <p>Send message </p>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      
      
    </form>
    </div>
   
  )
}
