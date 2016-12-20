//ES6
import React from 'react';

class Component1 extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to Test组件</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <button>测试</button>
                </p>
            </div>
        )
    }
}

//导出组件
export default Component1;