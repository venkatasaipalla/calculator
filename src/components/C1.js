import {Component} from "react";
import './style.css';
class C1 extends Component{
    constructor(props){
        super(props);
        this.state={equation:"",result:"",isdark:false};
    }
    
    handleclick1(x){
        
        this.setState({
            equation:this.state.equation.concat(x),
            result:""
        })
    }
    handleclick2=()=>{

        try { 
            const ans = eval(this.state.equation);
            this.setState({
            result:ans,
            }) 
        } 
        catch (err) { 
            this.setState({ result: "", }); 
        } 
        
        
    }
    handleclick3=()=>{
        this.setState({
            equation:this.state.equation.substring(0,this.state.equation.length-1),
            result:"",
        })
        
    }
    handleclick4=()=>{
        this.setState({
            isdark:!this.state.isdark,
        })
        
    }
    handleclick5=()=>{
        this.setState({
            equation:"",
            result:"",
        })
        
    }
    render(){
        
        return(
            <div><body>
                <div class="container">
                <h1 className="c2 text-center" >calculator</h1>
                {/* <h1 className={this.state.isdark?"card-title text-center text-dark ":"card-title text-center text-primary"} >calculator</h1> */}
                    <div class="row mt-3 justify-content-center">
                        <div class="col-lg-4 col-md-6 col-9">
                            <div class="card bg-primary">
                                <div style={{height:"8rem"}}>
                                    
                                    <h2 className={this.state.isdark?" text-dark ":" text-light"}>{this.state.equation}</h2>
                                    
                                </div>
                                <div style={{height:"4rem",maxHeight:"3rem"}}>
                                    <h2 className={this.state.isdark?" text-dark ":" text-light"} style={{textAlign:"right",paddingRight:"2rem",paddingBottom:"2rem"}}>{this.state.result}</h2>
                                </div>
                                <div class="card-body bg-dark" className={this.state.isdark?"bg-dark":"bg-light"}>
                                    <table   className={this.state.isdark?"table table-borderless text-center table-dark text-light":"table table-borderless text-center table-light text-dark"}>
                                        <tbody>
                                            <tr>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(7)}>7</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(8)}>8</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(9)}>9</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={this.handleclick3}><i class="bi bi-x-circle"></i></button></td>
                                            </tr>
                                            <tr>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(4)}>4</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(5)}>5</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(6)}>6</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1('+')}>+</button></td>
                                            </tr>
                                            <tr>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(1)}>1</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(2)}>2</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(3)}>3</button></td>
                                                <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1('-')}>-</button></td>
                                            </tr>
                                            <tr>
                                                <td colspan={"4"}>
                                                    <table  className={this.state.isdark?"table table-borderless table-dark":"table table-borderless table-light"}>
                                                        <tr>
                                                            <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1(0)}>0</button></td>
                                                            <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1('.')}>.</button></td>
                                                            <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1("*")}>*</button></td>
                                                            <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={()=>this.handleclick1('/')}>/</button></td>
                                                            <td><button  className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={this.handleclick2}>=</button></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td colspan={"2"}><button className={this.state.isdark?"btn btn-dark":"btn btn-light"} onClick={this.handleclick5}>CLEAR ALL</button></td>
                                                <td colspan={"2"}><button className={this.state.isdark?"btn btn-round btn-light":"btn  btn-round btn-dark"} onClick={this.handleclick4}>Mode</button></td>
                                            </tr>
                                        </tbody>
                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </body>
            </div>
        )
    }
}
export default C1;