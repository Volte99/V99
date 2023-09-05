import React from 'react'

function Footer() {
  return (
    <>
     <footer>
        <div className="flex bg-fuchsia-400">
            <div className="h-40 p-6">
              <h1>V99</h1>              
            </div>
            <div className="grid gap-x-2 gap-y-2 grid-cols-3 p-6">
               
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>Security</div>
                <div>Privacy Policy</div>
                <div>Terms of Services</div>
            
            </div>
        </div>
     </footer>
    </>
  )
}

export default Footer