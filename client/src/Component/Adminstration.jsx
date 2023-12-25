import React from 'react'

const W = () => {
  return (
    <div>
        <>
  {/* component */}
  <div className="py-20 bg-white">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
        Members Of The <span className="text-blue-500">Administration</span> 
        </h2>
        <br></br>
        <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
          
        </p>
      </div>
      <div className="grid gap-4 items-center md:grid-cols-2">
        <div className="space-y-4 text-center">
          <img
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
            src="https://media.licdn.com/dms/image/D4E03AQGgxfqw5oZC9w/profile-displayphoto-shrink_800_800/0/1689782655722?e=2147483647&v=beta&t=HORq5mBu1QKSUI8U8HMMpES4C8TiHuzXbr4NJ5UN2ZQ"
            alt="woman"
            loading="lazy"
            width={640}
            height={805}
          />
          <div>
            <h4 className="text-2xl">loay dahamsheh</h4>
            <span className="block text-sm text-gray-500">Chief Executive Officer</span>
          </div>
        </div>
        {/* <div className="space-y-4 text-center">
          <img
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
            src="https://media.licdn.com/dms/image/D4E03AQHBnANfrvdi7w/profile-displayphoto-shrink_400_400/0/1694519760363?e=1707955200&v=beta&t=JI_3dDQaXASUcmWrMmCL-u6OISwB9X83KBNSTZTfIpU"
            alt="man"
            loading="lazy"
            width={1000}
            height={667}
          />
          <div>
            <h4 className="text-2xl">Mohammad Al Howari</h4>
            <span className="block text-sm text-gray-500">
            General Director
            </span>
          </div>
        </div> */}
        <div className="space-y-4 text-center">
          <img
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
            src="https://media.licdn.com/dms/image/D4E03AQHBnANfrvdi7w/profile-displayphoto-shrink_400_400/0/1694519760363?e=1707955200&v=beta&t=JI_3dDQaXASUcmWrMmCL-u6OISwB9X83KBNSTZTfIpU"
            alt="woman"
            loading="lazy"
            width={1000}
            height={667}
          />
          <div>
          <h4 className="text-2xl">Mohammad Al Howari</h4>
            <span className="block text-sm text-gray-500">
            General Director
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default W