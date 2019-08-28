// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { initTourism } from './components/surfaceModules/SurfaceTourism' 
import { initShopeeOffice } from './components/surfaceModules/kantorTourism';


function run (){
  if(window.location.search.indexOf('office') >= 0){
    window.React360 = {init: initShopeeOffice};
    window.React360.init(
      'index.bundle?platform=vr&dev=true',
      document.getElementById('container'),
      {
        assetRoot: 'static_assets/',
      })
      setTimeout(() => {
        Array.from(document.getElementsByTagName('canvas'))
        .forEach(canvas => {
          const width = canvas.style.width.replace('px','');
          const height = canvas.style.height.replace('px','');
          canvas.style = `width: ${Number(width)*1.5}; height: ${Number(height)*1.5};`
          console.log(canvas)

        })
      },1000)
    
  } else {
    window.React360 = {init: initTourism};
 window.React360.init(
    'index.bundle?platform=vr&dev=true',
    document.getElementById('container'),
    {
      assetRoot: 'static_assets/',
    })
  }
 
}

run();