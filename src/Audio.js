import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Audio = ({url}) => (
  <AudioPlayer
    autoPlay
    src={url}
    onPlay={e => console.log("onPlay")}
    
  />
);

export default Audio;