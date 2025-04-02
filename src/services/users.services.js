import { api } from '@/utils/axios'

/* const getUsers = async () => {
  try {
    const response = await api.get();
    const data = response.data.results;
   return data
  } catch (error) {
    console.error('Hubo un error:', error);
  }
} */

const login = async (email, password) => {
   await api.post('auth/login', { email: email, password: password })
   .then((res)=>{
    return res.status
   })
   .catch((error)=>{
    return error
   })
}

const logout = async () => {
  await api.post('auth/logout')
  .then((res)=>{
    return {data:res.data,status:res.status}
  })
  .catch((error)=>{
    return {
      data:null,
      status:error.response.status
    }
  })
}

const register = async (name,email,password) => {
  await api.post('auth/register',{name:name,email:email,password:password})
  .then((res)=>{
    return {data:res.data,status:res.status}
  })
  .catch((error)=>{
    return {
      data:null,
      status:error.response.status
    }
  })
}

export { login,logout, register }
