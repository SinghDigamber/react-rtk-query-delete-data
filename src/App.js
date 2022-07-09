import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import PostsList from './features/posts/PostsList'

function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1 text-center">
          <h2>React RTK Query Delete Data with Id Example</h2>
        </div>
      </div>

      <PostsList />
    </div>
  )
}

export default App
