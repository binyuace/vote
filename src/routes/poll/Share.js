import React from 'react'
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
const {
  TwitterShareButton,
} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');
const Share = ({title,location}) => <TwitterShareButton title={title} url={location}>
    <TwitterIcon size={32} round={false} />
  </TwitterShareButton> 
export default Share
