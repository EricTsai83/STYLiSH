window.fbAsyncInit = function () {
  FB.init({
    appId: 'your-app-id',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v16.0',
  });
};

<script
  async
  defer
  crossorigin="anonymous"
  src="https://connect.facebook.net/en_US/sdk.js"></script>;
