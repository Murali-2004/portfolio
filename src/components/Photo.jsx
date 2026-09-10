import { useState } from 'react'

/**
 * Portfolio image with a graceful gradient-monogram fallback for when the
 * file has not been dropped into /public/images yet.
 *
 * @param {string} src        path under /public (e.g. "/images/portrait-formal.jpg")
 * @param {string} alt        accessible description
 * @param {string} className  sizing / shape utilities for the wrapper
 * @param {string} position   object-position (e.g. "center top")
 */
export default function Photo({
  src,
  alt,
  className = '',
  position = 'center',
  monogram = 'M',
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-base-2 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-5xl font-medium text-muted">{monogram}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ objectPosition: position }}
      className={`object-cover ${className}`}
    />
  )
}
