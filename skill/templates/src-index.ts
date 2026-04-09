import * as extensionConfig from '../extension.json';

const PLUGIN_TAG = '[my-lceda-extension]';

export function activate(status?: 'onStartupFinished', arg?: string): void {
  console.warn(PLUGIN_TAG, 'activate', status, arg);
}

export function about(): void {
  try {
    eda.sys_Dialog.showInformationMessage(
      eda.sys_I18n.text('EasyEDA extension SDK v', undefined, undefined, extensionConfig.version),
      eda.sys_I18n.text('About'),
    );
  }
  catch (error) {
    console.error(PLUGIN_TAG, 'about failed', error);
  }
}

export async function notifyDone(): Promise<void> {
  try {
    eda.sys_ToastMessage.showMessage(
      eda.sys_I18n.text('Done'),
      ESYS_ToastMessageType.INFO,
    );
  }
  catch (error) {
    console.error(PLUGIN_TAG, 'notifyDone failed', error);
  }
}
