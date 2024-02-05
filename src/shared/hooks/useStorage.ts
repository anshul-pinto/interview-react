export const useStorage = (type: 'sessionStorage' | 'localStorage') => {
  const storage =
    type === 'localStorage' ? window.localStorage : window.sessionStorage
  return storage
}
