import { ReactInstance, Module, Surface } from 'react-360-web';
let r360;
export function initShopeeOffice(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
      // Add custom options here
      fullScreen: true,
      nativeModules: [
        new ShopeeOffice(),
      ],
      ...options,
    });
  
    introPanel = new Surface(
      3000, /* width */
      400, /* height */
      Surface.SurfaceShape.Cylinder /* shape */
    );
  
    introRoot = r360.renderToSurface(
      r360.createRoot('OfficeVR', { /* initial props */ }),
      introPanel
    );
  
    // Load the initial environment
    r360.compositor.setBackground('/static_assets/office1.jpg');
  
  }

  
export class ShopeeOffice extends Module {
    constructor() {
      super('ShopeeOffice');
    }
    start() {
      r360.renderToSurface(
        r360.createRoot('InfoPanel', { id: 'market',
                                       text: 'Browse our incredible market.',
                                       image: '' }),
        introPanel,
      );
  
      r360.detachRoot(introRoot);
    }
  }
  