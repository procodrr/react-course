const container = (
  <div className="container" id="container">
    <section>
      <p>The library for web and native user interfaces</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          width: 200,
          backgroundColor: 'teal',
          borderRadius: 8,
          padding: 16,
        }}
      />
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
      </form>
    </section>
  </div>
)

console.log(container);

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)
