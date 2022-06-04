import UseAnimations from 'react-useanimations';
import instagram from 'react-useanimations/lib/instagram';
import playPause from 'react-useanimations/lib/playPause';

export const InstagramAnimation = () => <UseAnimations animation={instagram} autoplay={true} size={56} style={{ padding: 100 }} />
export const PlayPause = () => <UseAnimations animation={playPause} reverse={true} strokeColor="white" style={{ padding: 25 }} />