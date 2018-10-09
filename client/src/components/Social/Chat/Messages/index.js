//  import
import React from 'react';

// local
import '../chat.sass';
import './messages.sass';

// code
const Messages = () => (
  <div id="messages">
    <div className="message">
      <div className="message-user">John</div>
      <div className="message-content">Hello, la forme ?</div>
    </div>
    <div className="message message--own">
      <div className="message-user">Lucie</div>
      <div className="message-content">Cool, merci</div>
    </div>
  </div>
);

export default Messages;
