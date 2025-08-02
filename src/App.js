import './App.css'

export default function university() {
    return (
        <>
            <header style={{ display: 'flex' }}>
                <h1 style={{ marginBlockStart: '4px', marginLeft: '400px' }}>University</h1>
                <nav style={{ listStyleType: 'none' }}>
                    <ul>
                        <ls style={{ marginRight: '10px' }}>
                            <a href='' style={{ color: 'dimgrey' }}>Home</a>
                        </ls>
                        <ls style={{ marginRight: '10px' }}>
                            <a href='' style={{ color: 'dimgrey' }}>Courses</a>
                        </ls>
                        <ls style={{ marginRight: '10px' }}>
                            <a href='' style={{ color: 'dimgrey' }}>Categories</a>
                        </ls>
                        <ls style={{ marginRight: '10px' }}>
                            <a href='' style={{ color: 'dimgrey' }}>Blog</a>
                        </ls>
                        <ls style={{ marginRight: '10px' }}>
                            <a href='' style={{ color: 'dimgrey' }}>About</a>
                        </ls>
                        <ls style={{ marginRight: '10px' }}>
                            <a href='' style={{ color: 'dimgrey' }}>Contact</a>
                        </ls>
                    </ul>
                </nav>
                <nav>
                    <ul style={{ marginLeft: '100px' }}>
                        <ls>
                            <a href='' style={{ color: 'cyan' }}>Login</a>
                        </ls>
                        <ls>
                            <a href='' style={{ color: 'cyan' }}>/</a>
                        </ls>
                        <ls>
                            <a href='' style={{ color: 'cyan' }}>Register</a>
                        </ls>
                    </ul>
                </nav>
            </header>
            <>
            <div style={{backgroundImage: 'url("/laptop.jpg")',
                height: '600px',
                width: '1500px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                marginLeft: '10px',
                marginRight: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'}}>
                    <h2 style={{textAlign: 'center',
                        color: 'white'}}>
                        Find Online Courses That Suits You
                    </h2>
            </div>
            </>
            <>
            <article style={{
                marginLeft: '350px',
                marginRight: '700px',
                marginBottom: '50px',
                marginTop: '50px'
            }}>

                <h2 style={{color: 'cyan'}}>
                    Welcome to University
                </h2>

                <p style={{paddingRight: '5px',
                    paddingBottom: '25px'
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <button style={{backgroundColor: 'cyan',
                    color: 'whitesmoke'
                }}>
                    Read More...
                </button>
            </article>
            </>
            <>
            <img src='/people.jpg'
            alt='people talking'
            height={'250px'}
            width={'450px'}
            style={{display: 'flex',
                marginTop: '-280px',
                marginLeft: '900px',
                marginBottom: '10px'
            }}>
            </img>
            </>
        </>
    );
}