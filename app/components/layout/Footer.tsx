import React from 'react'

function Footer() {
  return (
    <footer className="mt-8 bg-gray-100 p-6 text-gray-700">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <h3 className="font-semibold">Social</h3>
          <div className='text-[13px] flex flex-col space-y-2 mt-2'>
            <p>📷 Instagram</p>
            <p>🐦 Twitter</p>
            <p>📘 Facebook</p>
            <p>📺 Youtube</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className='text-[13px] flex flex-col space-y-2 mt-2'>
            <p>Contact Us</p>
            <p>yourexample@email.com</p>
            <p>example@email.com</p>
            <p>Call us: +1 254 568 5479</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">About</h3>
          <div className='text-[13px] flex flex-col space-y-2 mt-2'>
            <p>Support Center</p>
            <p>Customer Support</p>
            <p>About Us</p>
            <p>Copyright</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Customer Care</h3>
          <div className='text-[13px] flex flex-col space-y-2 mt-2'>
            <p>FAQ & Helps</p>
            <p>Shipping & Delivery</p>
            <p>Return & Exchanges</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Top Categories</h3>
          <div className='text-[13px] flex flex-col space-y-2 mt-2'>
            <p>{"Women's Wear"}</p>
            <p>{"Kid's Wear"}</p>
            <p>Sports Wear</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer