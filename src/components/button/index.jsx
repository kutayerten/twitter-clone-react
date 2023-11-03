import  { createElement } from 'react'
import classNames from 'classnames'
import PropTypes from "prop-types"

export default function Button({as,size, variant , children, className, ...props}) {
  return createElement(as,{
    type: 'button',
    className: classNames(" rounded-full flex items-center justify-center font-bold  transition-colors",{
       
      "px-4 h-8 text-sm" : size === 'small',
      "px-4 h-9" : size === 'normal',
      "px-4 text-[17px] h-[52px] w-full" : size === 'large',

      "bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white":variant === 'primary',
      "bg-white text-black hover:bg-[#d7dbdc]":variant === 'white',
      "border border-[#b4b4b4] hover:bg-white/[0.03]":variant === 'white-outline',
      [className]:true,

    }),
    ...props
  },children)
}

Button.propTypes ={
    as: PropTypes.any,
    size: PropTypes.oneOf(['small','normal','large']),
    variant: PropTypes.oneOf(['primary','white','white-outline']),
    props: PropTypes.object,
    className: PropTypes.string,
}

Button.defaultProps ={
  as: 'button',
    size: 'normal',
    variant: 'primary',
}