import React from 'react';
import {Image,Dimmer,Icon,Header} from 'semantic-ui-react';
import './imgBox.css';
class ImgBox extends React.PureComponent{
	constructor(props){
		super(props)
		this.state={
			showDimmer:false,
			imgOnload:false,
		}
		this.myref=React.createRef()
		
	}
	handleShow=()=>this.setState((s)=>{
		return {showDimmer:true}})	

	handleHide=()=>this.setState({showDimmer:false})

	componentDidMount(){
		
		this.myref.current.onload=()=>{
			
			this.setState({imgOnload:true})}
	}
	
	render(){	
	    const {history,info}	=this.props
	  
		return (
			<div  onClick={()=>{
						this.props.isCardInit()
						history.push('/search/image/'+info.id,{top:document.documentElement.scrollTop})
								}
					} className='flexitem'>
	 			<Dimmer.Dimmable style={{height:'100%',zIndex:'10',width:"100%"}} onMouseEnter={this.handleShow} onMouseLeave={this.handleHide} as={Image} dimmed={this.state.showDimmer}>
	  			 	<Dimmer active={this.state.showDimmer}>
            		<Header as='h4' icon inverted>
              		<Icon size='small' name='heart' />
             			 like:{info.likes}
            		</Header>
          			</Dimmer>
          			<img ref={this.myref} alt={info.description} src={info.urls.small} />
          			{!this.state.imgOnload?(<div className='whiteBlock'></div>):''}
				</Dimmer.Dimmable>
			
       		</div>
		)
	}
	

}
export default ImgBox

			

