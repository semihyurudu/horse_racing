import { axiosInstance, domain } from './api'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { toast, type ToastOptions } from 'vue3-toastify'

interface AxiosPayload {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  url: string
  params?: Record<string, unknown>
  config?: AxiosRequestConfig
  local?: boolean
  data?: boolean
}

export const axiosRequest = async <T = unknown>(payload: AxiosPayload): Promise<T> => {
  try {
    const accessToken = localStorage.getItem('token') //for the future

    if (payload.config?.headers && accessToken) {
      payload.config.headers.Authorization = 'Bearer ' + accessToken
    } else if (
      payload.params &&
      typeof payload.params === 'object' &&
      'headers' in payload.params &&
      typeof (payload.params as Record<string, unknown>).headers === 'object'
    ) {
      ;(
        (payload.params as Record<string, unknown>).headers as Record<string, string>
      ).Authorization = 'Bearer ' + accessToken
    }

    const protocol = window.location.protocol
    const port = window.location.port ? `:${window.location.port}` : ''
    const baseURL = payload.local ? `${protocol}//${window.location.hostname}${port}` : domain

    const response = await axiosInstance[payload.method](
      baseURL + payload.url,
      payload.params,
      payload.config,
    )

    if (!response?.data?.success) {
      const message = response?.data?.message || 'An error occurred'
      toast(message, { type: 'error' } as ToastOptions)
      return Promise.reject({ statusCode: response?.data?.statusCode || 500, message })
    }

    return payload.data ? response.data.data : response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errResponse = error.response
      let errorMsg = JSON.stringify(errResponse?.data)

      if (errResponse?.data?.err_msg) {
        errorMsg = errResponse.data.err_msg
      }

      if (errResponse?.status === 401) {
        console.error('401 logout')
      } else if (errResponse?.status === 404) {
        toast(errorMsg, { type: 'error' } as ToastOptions)
        return Promise.reject({ statusCode: errResponse?.status, message: errorMsg })
      }

      toast(errorMsg, { type: 'error' } as ToastOptions)
      return Promise.reject(error)
    }

    toast('Unknown error', { type: 'error' } as ToastOptions)
    return Promise.reject(error)
  }
}
