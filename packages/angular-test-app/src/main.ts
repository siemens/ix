import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { defineCustomElements as defineCustomIconElements } from '@siemens/ix-icons/loader';

import { AppModule } from './app/app.module';

(async () => {
  defineCustomIconElements();
})();

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
