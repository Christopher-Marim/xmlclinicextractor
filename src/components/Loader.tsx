
import {Container} from '../styles/loader'

import Lottie from 'react-lottie';
import animationData from '../assets/lf30_editor_qp4awrak.json';

export function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <Container>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </Container>
    );
  }