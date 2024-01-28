export function loggingMiddleware(request: Request) {
  return { response: request.method + " " + request.url };
}
