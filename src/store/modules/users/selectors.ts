// users/selectors.ts
import { RootState } from "../../store"; // Assurez-vous de définir le type RootState correctement

export const getUsers = (state: RootState) => state.users.users;
export const getUsersLoading = (state: RootState) => state.users.loading;
export const getUsersError = (state: RootState) => state.users.error;
// Autres sélecteurs pour les utilisateurs
