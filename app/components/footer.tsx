
const Footer = () => {
  return (
    <div className="flex flex-col mg-x gap-5 text-red-50 bg-black mx-auto px-4 md:items-center font-main border-t-2 border-t-white-100 w-full"><div className="flex flex-col">
      <div className="flex flex-col gap-2 md:items-center" >
        <p className="text-gray-400 pt-3" >Full Stack App Developer, Project Manager, Automation and AI Expert helping projects build and scale on multiple platfoms</p>
        <div><ul className="flex flex-row gap-4">
          <li><a href="https://github.com/CrackedYoda" target="_blank" rel="noopener noreferrer"><img src="/images/github-com.svg" alt="GitHub" style={{ width: '26px', height: '26px' }}/></a></li>
          <li><a href="https://www.linkedin.com/in/nelson-akalia-51786222a/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.svg" alt="LinkedIn" style={{ width: '26px', height: '26px' }}/></a></li>
          <li><a href="https://x.com/theyodafx" target="_blank" rel="noopener noreferrer"><img src="/images/x.svg" alt="X" style={{ width: '26px', height: '26px' }}/></a></li>
        </ul>
        </div>
        </div>
        </div>

        <div className="md:flex gap-9">
        <div className="flex flex-col gap-2 md:items-center"><h1 className="text-1xl font-bold text-white">Quick Links</h1>
        <ul className="flex flex-col gap-1 text-gray-400 ">
            <li>Home</li>
            <li>Services</li>
            <li>Career</li>
            <li>Contact</li>
            </ul>
            </div>

        <div className="flex flex-col gap-2 md:items-center"><h1 className="font-bold text-white text-1xl pt-3">Services</h1>
        <ul className="flex flex-col gap-1 text-gray-400 ">
          <li>Web development</li>
          <li>Project Management</li>
          </ul></div></div>
          <footer className="text-gray-400 text-center border-t-2 border-t-white-100 mt-4 pt-4 pb-4 md:w-full">© 2025 Portfolio. All rights reserved.</footer>
          
          </div>
          
  )
}

export default Footer