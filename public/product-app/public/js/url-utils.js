// function clearUrlParams(queryStrinig, method) {
//   params = new URLSearchParams(location.search);
//   // console.log(Array.from(params).length);
//   if (method === 'all') {
//     params.forEach((value, key) => {
//       params.delete(key);
//     });
//   } else {
//     params.delete(queryStrinig);
//     // console.log('delete complete');
//     // console.log(Array.from(params).length);
//   }

//   if (Array.from(params).length === 0) {
//     console.log('hi');
//     let newUrl = location.protocol + '//' + location.host + location.pathname;
//     history.replaceState(null, '', newUrl);
//   } else {
//     let newUrl =
//       location.protocol +
//       '//' +
//       location.host +
//       location.pathname +
//       '?' +
//       params.toString();
//     history.replaceState(null, '', newUrl);
//   }
// }

// // to remove the specific key
// function removeUrlParameter(paramKey) {
//   const url = location.href;
//   var r = new URL(url);
//   r.searchParams.delete(paramKey);
//   const newUrl = r.href;
//   console.log('r.href', newUrl);
//   history.pushState({path: newUrl}, '', newUrl);
// }

function arrangeUrlParam(key, value, clearParamArray) {
  let searchParams = new URLSearchParams(window.location.search);
  clearParamArray.forEach(queryString => {
    searchParams.delete(queryString);
  });

  searchParams.set(key, value);
  let newUrl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?' +
    searchParams.toString();

  // console.log(searchParams.toString());

  history.pushState({path: newUrl}, '', newUrl);
}
