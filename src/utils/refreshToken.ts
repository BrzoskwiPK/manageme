import axios from 'axios'
import createRefresh from 'react-auth-kit/createRefresh'

export const refreshToken = createRefresh({
  interval: 870,
  refreshApiCallback: async param => {
    try {
      console.log('refreshuje')
      const accessToken = await axios.post<{ accessToken: string }>('/refresh-token', param, {
        headers: { Authorization: `Bearer ${param.authToken}` },
      })

      return {
        isSuccess: true,
        newAuthToken: accessToken.data.accessToken,
      }
    } catch (error) {
      console.error(error)
      return {
        isSuccess: false,
        newAuthToken: '',
        newAuthUserState: null,
      }
    }
  },
})
