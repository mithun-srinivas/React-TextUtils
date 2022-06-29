import React,{useState} from 'react'
import Alert from './Alert';
import NavBar from './NavBar'

export default function Layout(props) {
  return (
    <div className="App" >
          < NavBar title={props.title} toggle={props.toggleMode} displayMode={props.mode} />
          <Alert text={props.alert} displayType={props.display}/>
    </div>
  )
}
