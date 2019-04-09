import React from 'react';

function end(value) {
  if (value > 10) {
    return (<p>大于10</p>)
  } else {
    return (<p>不大于10</p>)
  }
}

class A extends React.Component {
  constructor(props) {
    super(props)
  }

  c = (ev) => {
    this.props.act(ev, 'A')
  }

  render() {
    return (
      <div>
        It'sA
        <input type="text" value={this.props.z} onChange={this.c} />
      </div>
    )
  }
}
class B extends React.Component {
  constructor(props) {
    super(props)
  }

  c = (ev) => {
    this.props.act(ev, 'B')
  }

  render(){
    return (
      <div>
        It'sB
        <input type="text" value={this.props.z} onChange={this.c} />
      </div>
    )
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kk: ''
    }
  }
  
  toA = (ev, x) => {
    console.log(x);
    console.log(ev);
    this.setState({kk: ev.target.value})
  }
  toB = (ev, x) => {
    console.log(x);
    console.log(ev);
    this.setState({kk: ev.target.value})
  }
  
  render() {
    return (
      <div className='bor'>
        <A act={this.toA} z={this.state.kk}/>
        <B act={this.toB} z={this.state.kk}/>
        {end(this.state.kk)}
      </div>
    )
  }
}


export { Box };
// todo ing
