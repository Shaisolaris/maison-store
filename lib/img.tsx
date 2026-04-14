import { forwardRef } from "react"

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean
  priority?: boolean
  quality?: number
  placeholder?: string
  blurDataURL?: string
  unoptimized?: boolean
}

const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ fill, priority, quality, placeholder, blurDataURL, unoptimized, style, ...props }, ref) => {
    const imgStyle = fill
      ? { position: "absolute" as const, height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: "cover" as const, ...style }
      : style
    return <img ref={ref} style={imgStyle} loading={priority ? "eager" : "lazy"} {...props} />
  }
)
Img.displayName = "Img"
export default Img
