import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>


            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to='/'>

                            Quotes App
                    </Link>
                </div>
            </nav>

        </div>
    )
}

export default Navbar