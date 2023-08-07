import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <Image
          src="/logo-cannamed.png"
          width={220}
          height={60}
          alt="Cannamed-tratamentos cannabicos"
        />
      </Link>
      .
    </h2>
  )
}
