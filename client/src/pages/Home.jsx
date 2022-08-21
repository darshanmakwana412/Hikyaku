import Channelbar from '../components/Ukiyobar';
import ContentContainer from '../components/ContentContainer';

function Home() {
  return (
    <div className="flex">
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default Home;