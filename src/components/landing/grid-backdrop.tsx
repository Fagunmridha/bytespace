// Faint white 90px grid used behind the blue sections.
export function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.12)_1px,transparent_1px)] bg-size-[90px_90px] bg-position-[-2px_-2px]"
    />
  )
}
