'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { initializeFirebase } from '.';

type FirebaseContextType = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
} | null;

const FirebaseContext = createContext<FirebaseContextType>(null);

export function FirebaseProvider({ children }: { children: ReactNode }) {
  const [firebaseServices, setFirebaseServices] = useState<FirebaseContextType>(null);

  useEffect(() => {
    // Initialize Firebase only on the client-side
    if (typeof window !== 'undefined') {
      setFirebaseServices(initializeFirebase());
    }
  }, []);

  if (!firebaseServices) {
    // You can render a loading state here if needed
    return <>{children}</>;
  }

  return (
    <FirebaseContext.Provider value={firebaseServices}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider. This could also mean Firebase is not yet initialized.');
  }
  return context;
};

export const useFirebaseApp = () => useFirebase().app;
export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;
