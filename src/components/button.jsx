
export default function Button({text, className, type, children, ...rest}) {
    return (
     <button className={className} type={type} {...rest}>
      {children} {text}
     </button>
    )
  }
  