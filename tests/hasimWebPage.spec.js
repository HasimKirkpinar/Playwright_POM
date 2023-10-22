import { test, expect } from '@playwright/test';
import { HasimWebPage } from '../pages/hasimWebPage';

test('test', async ({ page }) => {
    const hasimWeb = new HasimWebPage(page)

await hasimWeb.goToHasimWebPage()
await hasimWeb.contacs('TestDemo','test@demo.com','helloTestDemo')

});