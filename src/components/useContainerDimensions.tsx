import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef: React.RefObject<HTMLElement>) => {
    const [dimensions, setDimensions] = useState({ width: 0 })
  
    useEffect(() => {
      const getDimensions = () => ({
        width: myRef.current?.offsetWidth ?? 0
      })
  
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      if (myRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [myRef])
  
    return dimensions;
  };