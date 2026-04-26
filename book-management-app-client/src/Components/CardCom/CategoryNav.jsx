import React from 'react'

const CategoryNav = ({categories, activeCategory, onCategorChange}) => {
  return (
    <div className='p-4'>
      <nav className='flex items-center flex-wrap space-x-5 overflow-x-auto '>
        {categories.map((category) => (
          <button
          onClick={() => onCategorChange(category)}
          
          key={category} className={`whitespace-nowrap cursor-pointer py-2 px-1 border-b-2 text-sm font-medium transition-colors ${category === activeCategory ? 'border-[#155DFC] text-[#155DFC]' : 'border-transparent hover:text-[#5885e7] hover:border-[#5885e7] duration-300'}`}>{category}</button>
        ))}
      </nav>
    </div>
  )
}

export default CategoryNav
