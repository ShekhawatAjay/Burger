import React ,{Component} from 'react';
import Modal from '../../comopents/UI/modal/Modal'
import Auxx from '../Auxx';
const withErrorHandler=( WrappedComponent,axios)=>{
 return class extends Component{
     state={
         error:null
     }
     componentDidMount(){
         axios.interceptors.request.use(
             req=>{
                 this.setState({error:null})

             }
         );
         axios.interceptors.response.use(null,er=>{
             this.setState({error:er})
         });
     };
     errorConformedHandler=()=>{
        this.setState({error:null});
     }
     render(){
         
         
         return(
             <Auxx>
                 <Modal show={this.state.error} clicked={this.errorConformedHandler}>
                    {this.state.error?this.state.error.message:null}
                 </Modal>
                 <WrappedComponent {...this.props}/>
             </Auxx>
         )
     }
 }
}
export default withErrorHandler;    