import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export default function Toolbar() {
    return (
        <div className="flex h-5 items-center space-x-4 text-sm gap-2 border">
            <div>
            <Button className='m-2' variant="outline" size="icon">
                <ChevronRight />
            </Button>
            </div>
            
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
            </div>
        </div>
    )
}