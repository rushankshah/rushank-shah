import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'

const BaseLayout = (props) => {

    const { className, children } = props

    const headerType = props.headerType || 'default'

    const [audioFile] = useState(typeof Audio !== "undefined" && new Audio('../../public/static/music.mp3'));

    

    useEffect(() => {
        audioFile.play()
    }, [])

    return (
        <div className='layout-container'>
            <Header className={`port-nav-${headerType}`} />
            <main className={`cover ${className}`}>
                <div className='wrapper'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default BaseLayout