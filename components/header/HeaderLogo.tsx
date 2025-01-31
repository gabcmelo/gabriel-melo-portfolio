import Link from 'next/link'

export default function HeaderLogo() {
    return (
        <div className="flex items-center gap-2">
            <Link href="/logo" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">GBCM</Link>
        </div>
    )
 }
