import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './router'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorText: '#FFF',
          },
        },
        token: {
          // Seed Token
          colorPrimary: '#F4811A',
          borderRadius: 5,

          // Alias Token
          colorBgContainer: '#B7763C',
        },
      }}
    >
      <Router />
    </ConfigProvider>
  </StrictMode>,
)
