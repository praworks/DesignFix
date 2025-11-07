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
      try {
        setFirebaseServices(initializeFirebase());
      } catch (e) {
        console.error("Firebase initialization failed:", e);
      }
    }
  }, []);

  // We only render children once firebase is initialized on the client
  // or if we're on the server. The `useFirebase` hook will throw an
  // error if used before initialization.
  return (
    <FirebaseContext.Provider value={firebaseServices}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    // This error is expected on the server and during the initial client render.
    // Components using this hook should be client components and handle this case.
    throw new Error('useFirebase must be used within a FirebaseProvider, and Firebase must be initialized. If you see this error on the client, check your Firebase config.');
  }
  return context;
};

export const useFirebaseApp = () => useFirebase().app;
export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;
