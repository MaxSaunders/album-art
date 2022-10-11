import './App.css'

const Album = () =>
<div className='album'>
  <img className='album-artwork' src='https://source.unsplash.com/random/300x300?v=1' />
  <div className='album-details'>
    <h2>Album Title</h2>
    <p className='album-artist'>Artist Name</p>
    <p className='album-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
    <p className='album-desc'>Lorem ipsum dolor sit amet</p>
  </div>
</div>

function App() {

  return (
    <div className="albums">
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
    </div>
  )
}

export default App
