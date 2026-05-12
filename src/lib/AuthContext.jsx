import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Mantemos todos os estados que o código original tinha para não quebrar os componentes filhos
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  // Criamos as funções vazias para que, se o Layout.jsx chamá-las, o app não trave
  const checkAppState = async () => { console.log("Verificação de API desativada."); };
  const checkUserAuth = async () => { console.log("Autenticação desativada."); };
  const logout = () => { console.log("Logout desativado."); };
  const navigateToLogin = () => { console.log("Login desativado."); };

  // O useEffect que antes chamava a API agora não faz nada
  useEffect(() => {
    // App pronto instantaneamente
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};