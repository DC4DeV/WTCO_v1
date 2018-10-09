// NPM
import React from 'react';
import Navbar from '../Navbar';

// LOCAL
import './chat.sass';
import Messages from './Messages';
import Form from './Form';
// import Settings from './Settings';

// CODE
const Chat = () => (
  <div>
    <Navbar />
    <div id="chat">
      <h2 className="text-center text-success p-2">Messagerie instantanée</h2>
      <Messages />
      <Form />
    </div>
    {/* <Settings /> */}
  </div>
);

// EXPORT
export default Chat;
