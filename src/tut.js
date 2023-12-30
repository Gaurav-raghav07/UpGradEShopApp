import { Component } from "react";
import React from "react";
import CodeInput from "./CodeInput";

class Tut extends Component {
    state = {
        code : ""
    }
    render() {
        return (
            <div>
                <CodeInput onSet={code => this.setState({code})}/>
                <h1>Hello {this.state.code}</h1>
            </div>
        );
    } 
};

// class Tut extends Component {
//     state = {
//         salutationText: 'Hello'
//     }

//     updateState = (e) => {
//         this.setState({
//             salutationText: e.target.value
//         })
//     }
    
//     render () {
//         return (
//             <div>
//                 <input type="text" name = "enterText" onChange={this.updateState}>
//                 </input>
//                 <h1>{this.state.salutationText.split('').reverse().join('')}</h1>
//             </div>
//         );
//     }
// }

export default Tut;

