import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
          <div className="max-w-screen-xl mx-auto text-center text-white">
            <p>&copy; {new Date().getFullYear()} Sami's Store. All rights reserved.</p>
          </div>
        </footer>
  )
}

export default Footer