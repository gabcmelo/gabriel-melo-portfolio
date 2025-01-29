import Link from 'next/link'

export default function HeaderContactButton() {
    return (
        <div className="flex items-center gap-2">
            <Link href="/contact" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Contact Me</Link>
        </div>
    )
}
