import {useApiStore} from "../store/ApiStore";
import {useAppStore} from "../store/AppStore";
import {useMutation} from "@tanstack/react-query";
import {ApiError} from "../models/ApiError";
import {User} from "../models/User";

export function useRegistration({onSuccess, onError}: {onSuccess?: () => any; onError?: (error: ApiError) => any}) {
  const post = useApiStore(state => state.post);
  const saveToken = useAppStore(state => state.saveToken);
  const saveUser = useAppStore(state => state.saveUser);
  
  return useMutation(
    (auth: {phone: string, password: string, username: string}) =>
      post<{token: string, newUser: User}>({
        path: "/auth/register",
        body: {
          ...auth
        }
      }).then(({data}) => {
          saveToken(data.token);
          saveUser(data.newUser);
      }),
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      retry: 0,
      onError,
    },
  );
}

export function useLogin({onSuccess, onError}: {onSuccess?: () => any; onError?: (error: ApiError) => any}) {
  const post = useApiStore(state => state.post);
  const saveToken = useAppStore(state => state.saveToken);
  const saveUser = useAppStore(state => state.saveUser);
  
  return useMutation(
    (auth: {password: string, username: string}) =>
      post<{token: string, user: User}>({
        path: "/auth/login",
        body: {
          ...auth
        }
      }).then(({data}) => {
          saveToken(data.token);
          saveUser(data.user);
      }),
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      retry: 0,
      onError,
    },
  );
}