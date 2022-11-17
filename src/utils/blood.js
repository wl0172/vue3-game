const Blood = (userInfo, authBlood) => {
  
  const u = {
    xueliang: 10
  }

  if (u.xueliang < authBlood) {
    
  }

  const bloodSetTime = (() => {
    return setInterval(() => {
      console.log(1)
    }, 3000);
  })()

  setTimeout(() => {
    clearInterval(bloodSetTime)
  }, 5000);

}

Blood({},100)