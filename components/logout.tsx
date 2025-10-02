'use client';

import { LogOut } from 'lucide-react';
import { authClient } from '../lib/auth-client';
import { Button } from './ui/button';

export function Logout() {
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <Button variant="outline" onClick={handleLogout} className="gap-2">
      Logout <LogOut className="size-4" />
    </Button>
  );
}
