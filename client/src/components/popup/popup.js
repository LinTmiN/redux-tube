import React from 'react'
import {CSSTransition} from 'react-transition-group'
import './popup.css'
class Popup extends React.PureComponent{

	
	render(){
		let {message,open,className,component,...rest} =this.props
			
		return (
			<React.Fragment>
			
			<CSSTransition unmountOnExit in={open} timeout={3000} classNames='_popupc'>
			   <div {...rest}  className={className?'_popup '+className:'_popup'}>
				{message?<h4>{message}</h4>:''}
				 {component?component:''}
			    </div>
			</CSSTransition>
			
			</React.Fragment>
		)
	}
}



export default Popup