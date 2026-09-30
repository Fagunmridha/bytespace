import Image from "next/image"

export type Shape = {
  src: string
  width: number
  height: number
  className: string
  /** Shapes exported pre-cropped at the frame edge stick to the section edge, so the cut never shows on wide screens. */
  edge?: boolean
}

function ShapeImage({ shape }: { shape: Shape }) {
  return (
    <Image
      src={shape.src}
      alt=""
      width={shape.width}
      height={shape.height}
      sizes={`${shape.width}px`}
      className={`absolute max-w-none ${shape.className}`}
    />
  )
}

// Decorative 3D shapes, positioned in 1440px design coordinates. Desktop only.
export function FloatingShapes({ shapes }: { shapes: Shape[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      {shapes.filter((s) => s.edge).map((s) => (
        <ShapeImage key={s.src} shape={s} />
      ))}
      <div className="absolute inset-0 mx-auto max-w-[1440px]">
        {shapes.filter((s) => !s.edge).map((s) => (
          <ShapeImage key={s.src} shape={s} />
        ))}
      </div>
    </div>
  )
}
