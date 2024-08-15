import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Audio = ({ url, onClickNext, onClickPrevious }) =>
  (
    <AudioPlayer
      autoPlay
      src={url}
      onPlay={e => console.log("onPlay")}
      showSkipControls
      onClickNext={onClickNext}
      onClickPrevious={onClickPrevious}
    />
  );

export default Audio;