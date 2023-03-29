function Hero() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-tr from-amber-100 to-gray-100">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Menu Buka atau sahur? Dapur Solo bisa atur
              </h1>
              <p className="mt-4 text-xl text-gray-700">
                Reservasi tempat dan pesan makanan lebih mudah dimanapun anda berada. Tidak perlu lagi antre dan menunggu pesanan jadi.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0f/50/9f/c5/nasi-pecel-madiun-healthy.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0f/50/ab/61/nasi-langgi-spesial-turmeric.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-60 overflow-hidden rounded-lg">
                          <img
                            src="https://dapursolo.com/library/2019/07/dapur-solo---09-11-1843113-3-1563768318.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-60 overflow-hidden rounded-lg">
                          <img
                            src="https://dapursolo.com/library/2019/07/urap-ayam-resize-web-1563520461.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-60 overflow-hidden rounded-lg">
                          <img
                            src="https://dapursolo.com/library/2019/07/kue-nampan-60-1562733064.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0f/50/a5/f0/liwet-solo-coconut-rice.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0f/50/a0/c9/rujak-buah-mixed-fruits.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="home"
                  className="inline-block rounded-full border border-transparent bg-amber-500 hover:bg-amber-600 py-3 px-8 text-center font-medium text-white hover:bg-yellow-600"
                >
                  Pesan Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Hero;
