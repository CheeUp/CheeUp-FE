interface PAvatar {
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = ({ src = '/temp.jpg', size = 'lg' }: PAvatar) => {
  const sizeValue = avatarSize[size];

  return (
    <div className='overflow-hidden rounded-full' style={{ width: sizeValue, height: sizeValue }}>
      <img src={src} alt='avatar' className='h-full w-full object-cover' />
    </div>
  );
};

const avatarSize = {
  sm: '2rem',
  md: '4rem',
  lg: '7rem',
};
