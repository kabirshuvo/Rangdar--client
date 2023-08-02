import React, { useState } from 'react'
import {logo} from '../../assets/index.js'
import { FaTruck, FaHamsa, FaCaretDown, FaSearch   } from 'react-icons/fa';
import { categories } from '../../constants/index.js';
const Header = () => {
   const [showAll, setShowall] = useState(false)
  console.log(showAll)


  return (
    <nav >
   <div className='w-full bg-rangDaru_light text-white px-4 py-1 flex items-center gap-4'>
         
{/* image statrt == logo */}
<div className='headerHover '>
    {/* <img className='w-24 mt-1' src={logo} alt="Rangdar Logo" /> */}
    <div className='flex items-center gap-1'>
    <FaHamsa className='text-3xl mr-1'/>
    <h3 className='text-rangDaru_blue text-2xl'>RongDaru !</h3>
    </div>
</div>
{/* logo image ends */}
{/* Deliver statrt */}
<div className='headerHover gap-2'>
<FaTruck className='text-xl mt-1'/>
<p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span>Dhaka</span></p>
</div>
{/* Deliver Ends */}
{/* Search statrt */}
<div className='h-10 rounded-lg flex items-center flex-grow bg-slate-300 ps-2 relative'>
  <span onClick={()=>setShowall(!showAll)} 
  className='flex items-center gap-1 text-rangDaru_light'>
    All 
  <span className='headerHover'> 
  <FaCaretDown/> 
  </span></span>
  {
    showAll && (
      <div>
        <ul className='absolute w-56 h-48 top-10 left-1 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-rangDaru_light text-rangDaru_light p-2 flex flex-col z-50'>
          {categories.map((name)=> (
            <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-rangDaru_light cursor-pointer duration-200 pt-1' key={name._id}>
             {name.title}
            </li>
          ))
            
          }
        </ul>
      </div>
    )
  }
  <input type="text" className='h-full text-base text-rangDaru_light flex-grow outline-none border-none px-2' />
 <span className='w-12 h-full flex items-center justify-center text-rangDaru_light cursor-pointer rounded-tr-md rounde-br-md'
>
 <FaSearch/>
 </span>
 
</div>
{/* Search Ends */}
{/* SignIn statrt */}

{/* SignIn Ends */}
{/* Orders statrt */}

{/* Orders Ends */}
{/* Cart statrt */}

{/* Cart statrt */}

   </div>
</nav>
  )
}

export default Header