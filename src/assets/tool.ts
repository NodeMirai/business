export function typeStr(objStr: any): string {
    return Object.prototype.toString.call(objStr).slice(8, -1)
}

export function isAlipay() {
    return /AlipayClient/i.test(navigator.userAgent)
}

export function isIOS() {
    const userAgent = window.navigator.userAgent
    return /iPhone|iPad|iPod/i.test(userAgent)
}


export function isIPhoneX() {
    // iPhone X、iPhone XS
    const isIPhoneX
      = /iphone/gi.test(window.navigator.userAgent)
      && window.devicePixelRatio
      && window.devicePixelRatio === 3
      && window.screen.width === 375
      && window.screen.height === 812
    // iPhone XS Max
    const isIPhoneXSMax
      = /iphone/gi.test(window.navigator.userAgent)
      && window.devicePixelRatio
      && window.devicePixelRatio === 3
      && window.screen.width === 414
      && window.screen.height === 896
    // iPhone XR
    const isIPhoneXR
      = /iphone/gi.test(window.navigator.userAgent)
      && window.devicePixelRatio
      && window.devicePixelRatio === 2
      && window.screen.width === 414
      && window.screen.height === 896
  
    return isIPhoneX || isIPhoneXSMax || isIPhoneXR
  }

export function setTitle(title: string) {
    if (document.title === title) {
        return
    }

    if (isAlipay() && window.Ali) {
        window.Ali.setTitle(title)
        return
    }

    document.title = title
    if (isIOS()) {
        const body = document.body
        const iframe = document.createElement('iframe')
        iframe.src = '/static/image/favicon.ico'
        iframe.style.visibility = 'hidden'
        iframe.style.width = '1px'
        iframe.style.height = '1px'
        iframe.onload = function () {
            setTimeout(() => {
                iframe.remove()
            }, 0)
        }
        body.appendChild(iframe)
    }
}
