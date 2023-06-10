import { Component } from 'react'

class OldCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.timerId = null
    // this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount = () => {
    console.log(this)
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const { name } = this.props
    const { count } = this.state
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>
        <div className="mt-6 flex items-center gap-4">
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count: count - 1 })}
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={this.increaseCount}
          >
            +
          </button>
        </div>
      </>
    )
  }
}

export default OldCounter
