import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'white' | 'red' | 'orange' | 'small' | 'product';
}

const Btn = ({ variant, ...props }: Props) => {
  let classes = '';

  switch (variant) {
    case 'red':
      classes += 'bg-red text-white hover:bg-orange tracking-[.2rem]';
      break;
    case 'orange':
      classes +=
        'text-black bg-orange hover:bg-white hover:text-red tracking-[0.2rem]';
      break;
    case 'small':
      classes +=
        'text-white flex items-end bg-orange hover:rounded-2xl rounded';
      break;
    case 'product':
      classes += 'text-white flex items-end bg-red hover:bg-orange rounded';
      break;
    default:
      classes +=
        'bg-white text-black tracking-[.2rem] hover:bg-orange hover:text-white';
  }

  if (props.disabled) {
    classes += ' opacity-50 cursor-not-allowed';
  }

  return (
    <button {...props} className={`${classes} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Btn;
