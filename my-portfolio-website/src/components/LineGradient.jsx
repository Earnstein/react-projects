const LineGradient = ({ width, styles }) => {
  const gradientWidth = width || "w-full"
  const LineStyles = styles || ""
  return (
    <div className={`${gradientWidth} ${LineStyles} h-0.5 bg-gradient-rainblue`}/>
  )
}

export default LineGradient;