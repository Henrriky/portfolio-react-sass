import MainContent from "./components/Maincontent"
import Sidebar from "./components/Sidebar"

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>&#60; Henrriky Jhonny &#62;</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
