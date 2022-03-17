import React, {useState} from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if(scrolled >  200) {
          setVisible(true);
      }
      else {
          setVisible(false);
      }
  }

  const scrollToTop = () => {
      window.scrollTo({
          top : 0,
          behavior : 'smooth',
      })
  }
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <button 
    
    className='fixed right-12 bottom-12 bg-cyan-400'>
        <i onClick={scrollToTop} className="ri-arrow-up-s-line py-8 px-2 text-2xl"
        style={{display: visible ? 'inline' : 'none'}} ></i>
    </button>
  )
}

export default ScrollToTop