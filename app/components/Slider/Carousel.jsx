"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        next();
      }, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-auto">
            {slide} {/* فرض کنید هر slide یک تصویر است */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}>
          <ChevronLeft size={40} />
        </button>
        <button onClick={next}>
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}