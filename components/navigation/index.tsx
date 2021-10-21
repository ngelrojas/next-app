import {ReactNode} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './navigation.module.css'

const LINKS = [
    {name: 'home',
        path: '/'},
    {
        name: 'About',
        path: '/about'
    }
]

type NavAnType = {
    path: string
    children: ReactNode
}

function NavAnchor({path, children}: NavAnType){
    return(
        <Link href={path}>
            <a className={styles.navAnchor}>{children}</a>
        </Link>
    )
}

export default function Navigation(){
    const {pathname} = useRouter()

    return(
        <nav>
        <ul>
        {
            LINKS.map(({name, path})=> (
                <li className={styles.list} key={path}>
                { path === pathname ? 
                    <span>{name}</span>:
                    <NavAnchor path={path}>{name}</NavAnchor>
                }
                </li>
            ))
        } 
        </ul>
        </nav>
    )
}
