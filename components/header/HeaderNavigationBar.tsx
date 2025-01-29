import Link from 'next/link'
import HeaderContactButton from './HeaderContactButton'
import HeaderLogo from './HeaderLogo'
import Toolbar from '../toolbar/Toolbar'
import { ModeToggle } from '../mode-toggle'

export default function HeaderNavigationBar() {
    return (
        <div className=" p-4">
        <nav>
            <ul className="flex justify-between items-center space-x-4">
                <HeaderLogo />
                <Toolbar/>
                <HeaderContactButton />
                <ModeToggle />
            </ul>
        </nav>
    </div>
    )
}