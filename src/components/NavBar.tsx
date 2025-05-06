import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex md:flex-row items-center md:items-start bg-[#A6FFAA]">
        <img src="/logo.svg" alt="logo" className="w-8 mt-1 ml-2 md:w-18 md:ml-3 md:mt-2" />
        <h1 className="text-xl md:text-3xl text-center mt-2 md:mt-8 flex-grow dancing-script">The Tongue Twisters</h1>
        <Link to='/' className="mt-3 mr-3 md:mt-8 md:mr-6">
            <h2 className="text-sm md:text-lg">Contribute</h2>
        </Link>
    </div>
  )
}
export default NavBar