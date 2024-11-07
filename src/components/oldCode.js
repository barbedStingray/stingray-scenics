const handleParallax = () => {
    const scrollPosition = appContainerRef.current.scrollTop
    // Loop through each element and apply the parallax effect
    parallaxElements.forEach(({ ref, speed, direction }) => {
      if (ref.current) {
        // If the direction is 'up', we apply negative translation, otherwise, apply positive
        const translation = scrollPosition * speed
        ref.current.style.transform = `translateY(${direction === 'up' ? -translation : translation}px)`
      }
    })
    // Fade effect for oneRing based on scroll position
    if (scenicOptionsRef.current) {
      const scenicOptionsRect = scenicOptionsRef.current.getBoundingClientRect()
      const containerHeight = appContainerRef.current.clientHeight
      const scenicOptionsCenter = (scenicOptionsRect.top + scenicOptionsRect.bottom) / 2
      const containerCenter = containerHeight / 2
      const distanceFromCenter = Math.abs(containerCenter - scenicOptionsCenter)
      const newOpacity = Math.min(Math.max(1 - distanceFromCenter / containerHeight, 0), 1)
      setOpacity(newOpacity)
    }
  }
  useEffect(() => {
    const appContainer = appContainerRef.current
    // Event listener appContainer scroll
    appContainer.addEventListener('scroll', handleParallax)
    // Cleanup event listener on unmount
    return () => {
      appContainer.removeEventListener('scroll', handleParallax)
    }
  }, [parallaxElements])





  // WINDOW CODE - no app wrapper
  // const handleParallax = () => {
  //   const scrollPosition = window.scrollY
  //   // Loop through each element and apply the parallax effect
  //   parallaxElements.forEach(({ ref, speed, direction }) => {
  //     if (ref.current) {
  //       // If the direction is 'up', we apply negative translation, otherwise, apply positive
  //       const translation = scrollPosition * speed
  //       ref.current.style.transform = `translateY(${direction === 'up' ? -translation : translation}px)`
  //     }
  //   })
  //   // Fade effect for oneRing based on scroll position
  //   if (scenicContainerRef.current) {
  //     const scenicOptionsRect = scenicContainerRef.current.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;
  //     // Calculate the center of the `scenicOptions` div
  //     const scenicOptionsCenter = (scenicOptionsRect.top + scenicOptionsRect.bottom) / 2;
  //     // Calculate the middle of the viewport
  //     const windowCenter = windowHeight / 2;
  //     // Calculate opacity based on how close the center of the div is to the middle of the viewport
  //     const distanceFromCenter = Math.abs(windowCenter - scenicOptionsCenter);
  //     const newOpacity = Math.min(Math.max(1 - distanceFromCenter / windowHeight, 0), 1);
  //     setOpacity(newOpacity);
  //   }
  // }

  // code
  // useEffect(() => {
  //   // Add event listener to handle scroll
  //   window.addEventListener('scroll', handleParallax)
  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener('scroll', handleParallax)
  // }, [parallaxElements])





  // ORIGINAL NORMAL PARALLAX EFFECT
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY
  //     // Loop through each element and apply the parallax effect
  //     parallaxElements.forEach(({ ref, speed, direction }) => {
  //       if (ref.current) {
  //         // If the direction is 'up', we apply negative translation, otherwise, apply positive
  //         const translation = scrollPosition * speed
  //         ref.current.style.transform = `translateY(${direction === 'up' ? -translation : translation}px)`
  //       }
  //     })
  //   }
  //   // Add event listener to handle scroll
  //   window.addEventListener('scroll', handleScroll)
  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])