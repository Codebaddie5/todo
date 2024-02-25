import { Component } from "react";

class Form extends Component{
    state= {
        firstname: "",
    };
    handleChange= (event) => {this.setState({firstname: event.target.value,});
    console.log (this.state.firstname);}

    handleNameChange= (event) => {this.setState({lastname: event.target.value,});
    console.log (this.state.lastname);}

handleSubmit=(event)=> {
    event.preventDefault();
 console.log({fname: this.state.firstname,
              lname: this.state.lastname });
}
    render(){
        return(<div>Form
            <form onSubmit= {this.handleSubmit}>  
                 <input onChange= {this.handleChange}
                 type="text"
                 value={this.state.firstname}>
                     </input>

                     <input onChange= {this.handleNameChange}
                 type="text"
                 value={this.state.lastname}>
                     </input>
                     <button type= "submit">Submit</button>
             </form>
        </div>);
    }
}
export default Form;