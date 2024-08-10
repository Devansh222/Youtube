
// import React from 'react';

// const App = () => {

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'black',
//   };

//   const contentStyle = {
//     textAlign: 'center',
//     color: 'white',
//   };

//   const inputStyle = {
//     margin: '10px',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     width: '250px',
//   };

//   const buttonStyle = {
//     marginTop: '20px',
//     padding: '10px 20px',
//     backgroundColor: 'red',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   };

//   const handleAccountCreation = () => {
//     // Add logic to send confirmation email or perform other actions
//     alert("We have sent you a confirmation email. Thanks for creating an account!");
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={contentStyle}>
//         <h2>Welcome to Devansh Youtube Clone</h2>
//         <p>Create an account to get started</p>
//         <form>
//           <input style={inputStyle} type="text" placeholder="Username" required />
//           <br />
//           <input style={inputStyle} type="email" placeholder="Email" required />
//           <br />
//           <input style={inputStyle} type="password" placeholder="Password" required />
//           <br />
//           <input style={inputStyle} type="password" placeholder="Confirm Password" required />
//           <br />
//           <button style={buttonStyle} onClick={handleAccountCreation}>Create Account</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;

















// import React, { useState } from 'react';
// import axios from 'axios';

// const MyFeedbackForm = () => 
// {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'black',
//   };

//   const contentStyle = {
//     textAlign: 'center',
//     color: 'white',
//   };

//   const inputStyle = {
//     margin: '10px',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     width: '250px',
//   };

//   const buttonStyle = {
//     marginTop: '20px',
//     padding: '10px 20px',
//     backgroundColor: 'red',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   };

//   const handleAccountCreation = () => {
//     if (!username || !email || !password || !confirmPassword) {
//       alert('Please fill all the fields');
//     } else {
//       axios.post('/api/sendEmail', { username, email }).then((response) => {
//         alert('We have sent you a confirmation email. Thanks for creating an account!');
//       }).catch((error) => {
//         console.error('Error sending email:', error);
//       });
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={contentStyle}>
//         <h2>Welcome to Devansh Youtube Clone</h2>
//         <p>Create an account to get started</p>
//         <form>
//           <input
//             style={inputStyle}
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <br />
//           <input
//             style={inputStyle}
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <br />
//           <input
//             style={inputStyle}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <br />
//           <input
//             style={inputStyle}
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <br />
//           <button style={buttonStyle} onClick={handleAccountCreation}>
//             Create Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MyFeedbackForm












import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const MyFeedbackForm = () => {
  const form = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
  };

  const contentStyle = {
    textAlign: 'center',
    color: 'white',
  };

  const inputStyle = {
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '250px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kc9z6sf', 'template_ypc27ib', form.current, 'UXira_ysDu-fhTIJT')
      .then(
        (result) => {
          console.log(result.text);
          alert('We have sent you a confirmation email. Thanks for creating an account!');
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred while sending the email. Please try again later.');
        }
      );
    e.target.reset();
  };

  const handleAccountCreation = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill all the fields');
    } else if (password !== confirmPassword) {
      alert('Password and confirm password must be the same');
    } else {
      axios
        .post('/api/sendEmail', { username, email })
        .then((response) => {
          sendEmail(response);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* NAME CHANGED */}
        <h2>Welcome to Devansh Youtube Clone</h2>
        <p>Create an account to get started</p>
        <form ref={form}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input
            style={inputStyle}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />
          <button style={buttonStyle} onClick={handleAccountCreation}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyFeedbackForm;




// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import axios from 'axios';

// const MyFeedbackForm = () => {
//   const form = useRef();

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Devansh Youtube Clone');

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'black',
//   };

//   const contentStyle = {
//     textAlign: 'center',
//     color: 'white',
//   };

//   const inputStyle = {
//     margin: '10px',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     width: '250px',
//   };

//   const buttonStyle = {
//     marginTop: '20px',
//     padding: '10px 20px',
//     backgroundColor: 'red',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert('We have sent you a confirmation email. Thanks for creating an account!');
//         },
//         (error) => {
//           console.log(error.text);
//           alert('An error occurred while sending the email. Please try again later.');
//         }
//       );
//     e.target.reset();
//   };

//   const handleAccountCreation = () => {
//     if (!username || !email || !password || !confirmPassword) {
//       alert('Please fill all the fields');
//     } else if (password !== confirmPassword) {
//       alert('Password and confirm password must be the same');
//     } else {
//       axios
//         .post('/api/sendEmail', { username, email })
//         .then((response) => {
//           sendEmail(response);
//         })
//         .catch((error) => {
//           console.error('Error sending email:', error);
//         });

//       setWelcomeMessage(`Welcome to ${username}'s Youtube Clone`);
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={contentStyle}>
//         <h2>{welcomeMessage}</h2>
//         <p>Create an account to get started</p>
//         <form ref={form}>
//           <input
//             style={inputStyle}
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <br />
//           <input
//             style={inputStyle}
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <br />
//           <input
//             style={inputStyle}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <br />
//           <input
//             style={inputStyle}
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <br />
//           <button style={buttonStyle} onClick={handleAccountCreation}>
//             Create Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MyFeedbackForm;

