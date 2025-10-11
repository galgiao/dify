import type { AppMode } from '@/types/app'
import {
  get,
} from './base'
import type {
  SiteInfo,
} from '@/models/share'

type TryAppInfo = {
  name: string
  mode: AppMode
  site: SiteInfo
}

export const fetchTryAppInfo = async (appId: string) => {
  return get(`/trial-apps/${appId}`) as Promise<TryAppInfo>
}
