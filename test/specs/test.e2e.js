const { expect } = require('@wdio/globals');

describe('Android Settings App', () => {
    it('should open Settings App', async () => {
        await driver.pause(3000);

        const currentPackage = await driver.getCurrentPackage();

        expect(currentPackage).toBe('com.android.settings');
    });
});

