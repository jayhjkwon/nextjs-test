import Link from 'next/link'

const Nav = ({ scrollToView }) => {
    const handleAboutClick = e => {
        e.preventDefault()
        const aboutSection = document.getElementById('about')
        aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
    const CustomLink = React.forwardRef(({ onClick, href, handleClick }, ref) => {
        return (
          <a href={href} onClick={handleClick ?? onClick} ref={ref}>
            About
          </a>
        )
      })
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/about" passHref>
                    <CustomLink handleClick={scrollToView && handleAboutClick} />            
                </Link>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Nav
