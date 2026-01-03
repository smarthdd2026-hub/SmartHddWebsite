export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // If accessing root, redirect to /en
  if (url.pathname === '/') {
    return Response.redirect(url.origin + '/en', 302);
  }
  
  // Otherwise, continue to Next.js
  return context.next();
}
