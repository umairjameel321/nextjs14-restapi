const validateToken = (token: any) => {
  const validToken = true;
  if (!token || !validToken) {
    return false;
  }

  return true;
};

export function authMiddleware(request: Request): any {
  const token = request.headers.get("authorization")?.split(" ")[1];

  return { isValid: validateToken(token) };
}
