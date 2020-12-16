import React from "react";

class Detail extends React.Component{
   componentDidMount(){
        console.log("this props",this.props);
        const {history, location} = this.props;
        if(location.state===undefined){
            history.push("/");
        }
   }
    render(){
        const {location} = this.props;
        // render가 실행된 후 componentDidMohnt()가 실행되기 때문에 그냥 title 접근하면 오류남
        if(location.state){
            return <span>{location.state.title}</span>;
        }else{
            return null;
            //null return 후 comp~didMount 실행 -> redirect
        }
   }
}
export default Detail;