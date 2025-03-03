import TopBar from "../components/Board/Top"
import Whiteboard from "../components/Board/WhiteBoard"


const Board = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <TopBar />
      <div className="relative flex flex-grow">
        <Whiteboard />
      </div>
    </div>
  )
}

export default Board