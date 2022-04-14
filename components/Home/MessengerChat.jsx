import React from 'react';
import ReactDOM from 'react-dom';
import { MessengerChat } from 'react-messenger-chat-plugin';

ReactDOM.render(
    <MessengerChat
        pageId='105104175511987'
        language='en_US'
        themeColor={'#F2F3G2'}
        height={24}
        loggedInGreeting='Hello logged in user!'
        loggedOutGreeting='Hello stranger!'
        autoExpand={true}
        debugMode={false}
        onMessengerShow={() => { console.log('onMessengerShow') }}
        onMessengerHide={() => { console.log('onMessengerHide') }}
        onMessengerDialogShow={() => { console.log('onMessengerDialogShow') }}
        onMessengerDialogHide={() => { console.log('onMessengerDialogHide') }}
    />,

    document.getElementById('demo')
);