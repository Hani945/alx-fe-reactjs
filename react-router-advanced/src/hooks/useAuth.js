// src/hooks/useAuth.js
import { useState } from "react";

export default function useAuth() {
  // For demo: change `false` → `true` to simulate logged in
  const [isAuthenticated] = useState(false);
  return { isAuthenticated };
}
