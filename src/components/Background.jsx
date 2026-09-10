/** Faint engineering grid backdrop — no gradients, no blobs. */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-base">
      <div
        className="absolute inset-0 text-content opacity-[0.045] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute inset-0 text-content opacity-[0.08] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 0.5px, transparent 0.5px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
