// useMemberAuth.ts
import { useAuth } from "@memberstack/react"

export const useMemberAuth = () => {
  const { userId, status, getToken, isLoggedIn, signOut } = useAuth();
  return { userId, status, getToken, isLoggedIn, signOut };
}
