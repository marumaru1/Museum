import './scss/style.scss';
import {createWelcomeSlider} from './components/welcome';
import {createVideoPlayer} from './components/video';
import {createGallery} from './components/gallery';
import{createBuyForm} from './components/tickets';
import {createMap} from './components/map';
import {initComparisons} from './components/explore';

createWelcomeSlider();
createVideoPlayer();
createGallery();
createBuyForm();
createMap();
initComparisons();