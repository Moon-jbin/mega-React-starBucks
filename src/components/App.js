import React from 'react';
import SkipComponent from './SkipComponent';
import WrapComponent from './WrapComponent';

class App extends React.Component {
    render() {
        return (
            <>
                <SkipComponent/>
                <WrapComponent/>
            </>
        );
    }
}

export default App;