import { ReactInstance, Module, Surface } from 'react-360-web';

let r360, infoRoot, infoPanel, marketPanel, museumPanel;
export function initShopeeOffice(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
      // Add custom options here
      fullScreen: true,
      nativeModules: [
        new ShopeeOffice(),
      ],
      ...options,
    });
  
   
  marketPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  marketPanel.setAngle(
    0.4, /* yaw angle */
    0 /* pitch angle */
  );

  
  infoRoot = r360.renderToSurface(
    r360.createRoot('InfoPanelOffice', { to: 'office2' }),
    marketPanel
  );

    
  
  // Load the initial environment
  r360.compositor.setBackground('/static_assets/office1.jpg');
  
}

  
export class ShopeeOffice extends Module {
    constructor() {
      super('ShopeeOffice');
    }

    renderOffice2(){
      marketPanel.setAngle(1.5,0)
      r360.compositor.setBackground('/static_assets/office2.jpg');
    }

    renderOffice1(){
      marketPanel.setAngle(
        0.4, /* yaw angle */
        0 /* pitch angle */
      );
      r360.compositor.setBackground('/static_assets/office1.jpg');
    }
  }
  
window.React360 = { init: initShopeeOffice }