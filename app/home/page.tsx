import React from 'react'

export default function homePage() {
  const headings = ['Выполнение заданий', 'Проведение виртуальных испытаний', 'Аналитика', 'Аналитика', 'Аналитика', 'Аналитика'];

  return (
    <div className='w-[1280px] h-auto flex flex-wrap gap-10 justify-center items-center pt-10 px-30'>
      {headings.map((el, index) => (
        <div key={index} className='w-70 h-40 bg-white rounded-3xl p-5 shadow-lg cursor-pointer text-[var(--dark-blue)] hover:text-[var(--blue)] hover:shadow-blue-800/40'>
          <h3 className=' max-w-40%'>
            {
              el.split(' ').map((word, index) => (
                <div key={index}>
                  {word}
                </div>
              ))
            }
          </h3>
        </div>
      ))}
    </div>
  )
}