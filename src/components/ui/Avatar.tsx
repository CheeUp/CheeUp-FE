interface PAvatar {
  imgUrl?: string;
  size?: number;
}

export default function Avatar({ imgUrl = '/temp.jpg', size = 120 }: PAvatar) {
  return (
    <div className="rounded-full overflow-hidden" style={{ width: `${size}px`, height: `${size}px` }}>
      <img src={imgUrl} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
}
