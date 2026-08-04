import { InjectionKey, provide, inject } from 'vue';
import { VueFrameworkDelegate } from '../delegate';

export type ApplicationContext = {
  delegate: VueFrameworkDelegate;
};

const applicationContextToken: InjectionKey<ApplicationContext> = Symbol(
  'applicationContextToken'
);

export function defineApplicationContext(context: ApplicationContext) {
  provide(applicationContextToken, context);
}

export function useApplicationContext(): ApplicationContext {
  const context = inject(applicationContextToken, null);
  if (!context) {
    throw new Error('Application context is not provided');
  }
  return context;
}
