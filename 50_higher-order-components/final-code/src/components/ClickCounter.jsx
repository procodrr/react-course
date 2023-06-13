import { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    render() {
    const { name } = this.props
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>
        <div>
          <h2 className='cursor-pointer bg-sky-200 text-center p-4 text-2xl' onClick={this.props.increaseCount}>{this.props.count}</h2>
        </div>
      </>
    )
  }
}

export default withCounter(ClickCounter)
