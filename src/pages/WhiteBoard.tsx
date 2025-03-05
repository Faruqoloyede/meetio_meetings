import ToolBar from "../components/whiteBoard/ToolBar"
import TopBar from "../components/whiteBoard/Top"
import Board from "../components/whiteBoard/Board"
import Video from "../components/whiteBoard/Video"
import Bottom from "../components/whiteBoard/Bottom"


const WhiteBoard = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <TopBar />
      <div className="relative flex flex-grow ">
        <ToolBar />
        <Board />
        <Video />
      </div>
      <Bottom />
    </div>
  )
}

export default WhiteBoard