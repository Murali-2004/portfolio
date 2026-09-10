import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="gradient-text font-display text-8xl font-semibold">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-content">Page not found</h1>
      <p className="mt-2 max-w-md text-content/55">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <FiArrowLeft /> Back home
      </Link>
    </div>
  )
}
