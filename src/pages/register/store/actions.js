import services from '@/http'


export const ActionRegisterUser = ({ dispatch}, payload ) => {
  console.log(dispatch);
  console.log(payload.name);
  return services.register.registerUser(payload).then(res => {    
    dispatch('auth/ActionDoLogin', res.data.user);    
  })
}

