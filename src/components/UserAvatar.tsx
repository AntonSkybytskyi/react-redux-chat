import React from 'react'
import styled from 'styled-components';

interface UserAvatarProps {
  username: string;
  image?: string;
  className?: string;
  primary?: boolean;
}
export default function UserAvatar({ image, username, className, primary }: UserAvatarProps) {
  const imagePlaceholder: string = username.split(' ').map((value: string) => value[0].toLocaleUpperCase()).join('');
  return (
    <>
      {image 
        ? <Image className={className} src={image} alt={username} /> 
        : <ImagePlaceholder className={className} primary={primary}><span>{imagePlaceholder}</span></ImagePlaceholder>}
    </>
  )
}


const Image = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  overflow: hidden;
`;

interface ImagePlaceholderProps {
  primary?: boolean;
}
const ImagePlaceholder = styled.div<ImagePlaceholderProps>`
  background: ${props => props.primary ? props.theme.green : props.theme.grey};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
