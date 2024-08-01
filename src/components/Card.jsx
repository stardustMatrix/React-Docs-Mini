import React from 'react';
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
  <motion.div drag dragConstraints={reference}
  whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-600 text-white py-10 px-5 overflow-hidden'>
      <LuFileSpreadsheet />

      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p> 

    <div className='footer absolute bottom-0  w-full   left-0'>

      <div className='flex items-center justify-between px-8 py-3  mb-3'>
        <h5>{data.filesize}</h5>

                <span className='w-8 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
                  {data.close?<IoCloseCircle color='#000' />:<LuDownload size="1em" color='#000'/>}
               
                </span>
      </div>

      {
        data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}><h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3></div>
        )}





    </div>
      
  </motion.div>
  )
}

export default Card
