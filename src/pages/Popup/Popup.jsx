import React, { useState } from 'react';
import { LuSettings } from 'react-icons/lu';
import { AiOutlineCloseCircle, AiOutlineAudio } from 'react-icons/ai';
import { CgScreen, CgTab } from 'react-icons/cg';
import { BsCameraVideo } from 'react-icons/bs';
import Toggle from '../../components/toggle/Toggle';
import ScreenCapture from '../../ScreenCapture';
import ScreenRecording from '../../ScreenRecording';
import './Popup.css';

const Popup = () => {
  const [imgSrc, setImgSrc] = useState('');

  const onFullScreenCapture = async () => {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, (image) => {
      // image: 64baseURL
      setImgSrc(image);
    });
  };

  const handleScreenCapture = (screenCapture) => {
    setImgSrc({
      screenCapture,
    });
  };

  return (
    <div className="App">
      <ScreenCapture onEndCapture={handleScreenCapture}>
        {({ onStartCapture, captureElementById }) => (
          <React.Fragment>
            <div className="nav">
              <img src="../../assets/img/logo.png" alt="logo" />
              <span className="logo">HelpMeOut</span>
              <LuSettings size={25} className="settings" />
              <AiOutlineCloseCircle size={25} />
            </div>
            <p className="text">
              This extension helps you record and share videos with ease
            </p>
            <div className="tab">
              <CgScreen size={40} />
              <CgTab size={40} />
            </div>{' '}
            <div>
              <div className="actions">
                <div className="camera">
                  <BsCameraVideo size={25} />
                  Camera
                </div>
                <div>
                  <Toggle />
                </div>
              </div>
              <div className="actions">
                <div className="camera">
                  <AiOutlineAudio size={25} />
                  Audio
                </div>
                <div>
                  <Toggle />
                </div>
              </div>
            </div>
            {/* <button onClick={onFullScreenCapture} className="btn">
              Full Screen Capture
            </button>
            <button onClick={onStartCapture} className="btn">
              Selective Screen Capture
            </button>
            <button onClick={captureElementById} className="btn">
              Screen Capture by ID
            </button> */}
            {/* {imgSrc && (
              <div style={{ width: '300px', height: '300px' }}>
                <img
                  src={imgSrc.screenCapture ? imgSrc.screenCapture : imgSrc}
                  alt="output"
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )} */}
          </React.Fragment>
        )}
      </ScreenCapture>
      <ScreenRecording />
    </div>
  );
};

export default Popup;
