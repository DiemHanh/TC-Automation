import { test, expect } from '../fixtures';

test('TC14: Hovers - Hover over user avatar', async ({ hoversPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/hovers', async () => {
    await hoversPage.open();
  });

  await test.step('3. Hover over the first avatar', async () => {
    await hoversPage.hoverFirstAvatar();
  });

  await test.step('4. Verify "name: user1" and "View profile" link appear', async () => {
    await expect(hoversPage.firstUserName).toHaveText('name: user1');
    await expect(hoversPage.firstViewProfileLink).toBeVisible();
  });
});
