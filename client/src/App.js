import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;