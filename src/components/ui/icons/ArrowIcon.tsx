interface PArrowIcon extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const LeftArrowIcon: React.FC<PArrowIcon> = ({ size = 32, color = '#6F90F4' }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5869 17.4132C10.2123 17.0382 10.002 16.5299 10.002 15.9999C10.002 15.4699 10.2123 14.9615 10.5869 14.5865L18.1282 7.04253C18.5034 6.66752 19.0122 6.45691 19.5427 6.45703C19.8053 6.45709 20.0654 6.50889 20.3081 6.60947C20.5507 6.71004 20.7712 6.85742 20.9569 7.0432C21.1425 7.22898 21.2898 7.44951 21.3903 7.6922C21.4908 7.9349 21.5424 8.19501 21.5424 8.45767C21.5423 8.72034 21.4905 8.98042 21.3899 9.22307C21.2894 9.46572 21.142 9.68618 20.9562 9.87187L14.8295 15.9999L20.9575 22.1279C21.1486 22.3123 21.3011 22.5329 21.406 22.7768C21.511 23.0208 21.5663 23.2832 21.5687 23.5488C21.5711 23.8143 21.5206 24.0777 21.4202 24.3236C21.3197 24.5694 21.1713 24.7928 20.9837 24.9806C20.796 25.1685 20.5727 25.3171 20.327 25.4178C20.0812 25.5185 19.8179 25.5692 19.5523 25.567C19.2868 25.5648 19.0243 25.5098 18.7803 25.4051C18.5362 25.3004 18.3154 25.1481 18.1309 24.9572L10.5842 17.4132H10.5869Z'
        fill={color}
      />
    </svg>
  );
};
const RightArrowIcon: React.FC<PArrowIcon> = ({ size = 32, color = '#6F90F4' }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.4125 14.5872C21.7871 14.9622 21.9974 15.4705 21.9974 16.0005C21.9974 16.5305 21.7871 17.0389 21.4125 17.4139L13.8712 24.9579C13.496 25.3329 12.9872 25.5435 12.4567 25.5434C11.9263 25.5432 11.4176 25.3324 11.0425 24.9572C10.6675 24.582 10.4569 24.0732 10.457 23.5427C10.4572 23.0123 10.668 22.5036 11.0432 22.1285L17.1712 16.0005L11.0432 9.87253C10.6787 9.4955 10.4769 8.99039 10.4812 8.46599C10.4855 7.94159 10.6956 7.43987 11.0662 7.06888C11.4369 6.69788 11.9384 6.48731 12.4628 6.48251C12.9872 6.4777 13.4925 6.67906 13.8699 7.0432L21.4139 14.5859L21.4125 14.5872Z'
        fill={color}
      />
    </svg>
  );
};
const UpArrowIcon: React.FC<PArrowIcon> = ({ size = 28, color = '#6F90F4' }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8.645 17.977L14 12.6337L19.355 17.977L21 16.332L14 9.33203L7 16.332L8.645 17.977Z' fill={color} />
    </svg>
  );
};
const DownArrowIcon: React.FC<PArrowIcon> = ({ size = 28, color = '#6F90F4' }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8.645 10.0117L14 15.3667L19.355 10.0117L21 11.6684L14 18.6684L7 11.6684L8.645 10.0117Z' fill={color} />
    </svg>
  );
};

const RightBottomArrowIcon: React.FC<PArrowIcon> = () => {
  return (
    <svg width='23' height='24' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19.1673 15.832L13.8965 21.1029L12.5357 19.7516L15.4969 16.7904H10.0632C8.41107 16.7904 6.82666 16.1341 5.65846 14.9659C4.49027 13.7977 3.83398 12.2133 3.83398 10.5612V4.33203H5.75065V10.5612C5.75065 12.957 7.66732 14.8737 10.0632 14.8737H15.4969L12.5452 11.9124L13.8965 10.5612L19.1673 15.832Z'
        fill='#9E9E9E'
      />
    </svg>
  );
};

export { LeftArrowIcon, RightArrowIcon, UpArrowIcon, DownArrowIcon, RightBottomArrowIcon };
